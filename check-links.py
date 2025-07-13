#!/usr/bin/env python3
"""
Dead Link Detection System for Business Operations Website
Scans HTML files for broken internal links and generates detailed reports.
"""

import os
import json
import csv
import sys
import re
from pathlib import Path
from urllib.parse import urljoin, urlparse
from html.parser import HTMLParser
from dataclasses import dataclass, asdict
from typing import List, Dict, Set
import argparse

@dataclass
class LinkInfo:
    """Data structure for storing link information"""
    source_file: str
    link_text: str
    href: str
    line_number: int
    link_type: str  # 'internal_relative', 'internal_absolute', 'external', 'fragment', 'javascript'
    status: str     # 'valid', 'broken', 'external', 'fragment'
    resolved_path: str = ""
    error_message: str = ""

class LinkExtractor(HTMLParser):
    """HTML parser to extract links from HTML content"""
    
    def __init__(self):
        super().__init__()
        self.links = []
        self.current_line = 1
        self.content_lines = []
        
    def feed(self, data):
        self.content_lines = data.split('\n')
        super().feed(data)
        
    def handle_starttag(self, tag, attrs):
        if tag in ['a', 'link']:
            href = None
            for attr_name, attr_value in attrs:
                if attr_name == 'href' and attr_value:
                    href = attr_value.strip()
                    break
            
            if href:
                # Find approximate line number
                line_num = self._find_line_number(self.get_starttag_text())
                self.links.append({
                    'tag': tag,
                    'href': href,
                    'line_number': line_num,
                    'element_text': self.get_starttag_text()
                })
    
    def _find_line_number(self, element_text):
        """Find line number of element in content"""
        for i, line in enumerate(self.content_lines, 1):
            if element_text[:30] in line:  # Match first 30 chars
                return i
        return 0

class DeadLinkDetector:
    """Main class for detecting dead links in HTML files"""
    
    def __init__(self, html_root: Path):
        self.html_root = Path(html_root)
        self.links: List[LinkInfo] = []
        self.broken_links: List[LinkInfo] = []
        
    def scan_directory(self) -> List[LinkInfo]:
        """Scan all HTML files in the directory tree"""
        print(f"Scanning HTML files in: {self.html_root}")
        html_files = list(self.html_root.rglob("*.html"))
        print(f"Found {len(html_files)} HTML files")
        
        for html_file in html_files:
            self._scan_file(html_file)
            
        return self.links
    
    def _scan_file(self, html_file: Path):
        """Scan a single HTML file for links"""
        try:
            with open(html_file, 'r', encoding='utf-8') as f:
                content = f.read()
                
            # Use custom HTML parser
            parser = LinkExtractor()
            parser.feed(content)
            
            # Process found links
            for link_data in parser.links:
                href = link_data['href']
                if not href:
                    continue
                    
                # Get link text (extract from element or use tag name)
                link_text = self._extract_link_text(content, link_data['element_text'], link_data['tag'])
                
                link_info = self._analyze_link(
                    source_file=str(html_file.relative_to(self.html_root.parent)),
                    href=href,
                    link_text=link_text,
                    line_number=link_data['line_number'],
                    current_file=html_file
                )
                
                self.links.append(link_info)
                
                if link_info.status == 'broken':
                    self.broken_links.append(link_info)
                    
        except Exception as e:
            print(f"Error scanning {html_file}: {e}")
    
    def _extract_link_text(self, content: str, element_text: str, tag: str) -> str:
        """Extract link text from HTML content"""
        if tag == 'link':
            return f"<{tag}>"
        
        # For <a> tags, try to extract the text content
        try:
            # Simple regex to find the content between <a...> and </a>
            pattern = re.escape(element_text) + r'(.*?)</a>'
            match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
            if match:
                text = match.group(1).strip()
                # Remove HTML tags from the text
                text = re.sub(r'<[^>]+>', '', text).strip()
                return text[:100] if text else f"<{tag}>"
        except:
            pass
        
        return f"<{tag}>"
    
    
    def _analyze_link(self, source_file: str, href: str, link_text: str, 
                     line_number: int, current_file: Path) -> LinkInfo:
        """Analyze a single link and determine its type and status"""
        
        # Parse the URL
        parsed = urlparse(href)
        
        # Determine link type
        if href.startswith('#'):
            link_type = 'fragment'
            status = 'fragment'
            resolved_path = href
        elif href.startswith('javascript:'):
            link_type = 'javascript'
            status = 'valid'
            resolved_path = href
        elif parsed.scheme in ['http', 'https', 'mailto', 'tel']:
            link_type = 'external'
            status = 'external'
            resolved_path = href
        elif href.startswith('/'):
            link_type = 'internal_absolute'
            resolved_path = str(self.html_root / href.lstrip('/'))
            status = 'valid' if Path(resolved_path).exists() else 'broken'
        else:
            link_type = 'internal_relative'
            # Resolve relative path
            current_dir = current_file.parent
            resolved_path = str((current_dir / href).resolve())
            status = 'valid' if Path(resolved_path).exists() else 'broken'
        
        error_message = ""
        if status == 'broken':
            error_message = f"File not found: {resolved_path}"
        
        return LinkInfo(
            source_file=source_file,
            link_text=link_text,
            href=href,
            line_number=line_number,
            link_type=link_type,
            status=status,
            resolved_path=resolved_path,
            error_message=error_message
        )
    
    def generate_report(self, output_format: str = 'json') -> str:
        """Generate a report of all links"""
        if output_format == 'json':
            return self._generate_json_report()
        elif output_format == 'csv':
            return self._generate_csv_report()
        elif output_format == 'summary':
            return self._generate_summary_report()
        else:
            raise ValueError(f"Unsupported format: {output_format}")
    
    def _generate_json_report(self) -> str:
        """Generate JSON report"""
        report = {
            'summary': self._get_summary_stats(),
            'all_links': [asdict(link) for link in self.links],
            'broken_links': [asdict(link) for link in self.broken_links]
        }
        return json.dumps(report, indent=2)
    
    def _generate_csv_report(self) -> str:
        """Generate CSV report of broken links"""
        if not self.broken_links:
            return "No broken links found!"
        
        output = []
        output.append("source_file,link_text,href,line_number,link_type,resolved_path,error_message")
        
        for link in self.broken_links:
            row = [
                link.source_file,
                f'"{link.link_text}"',
                link.href,
                str(link.line_number),
                link.link_type,
                link.resolved_path,
                link.error_message
            ]
            output.append(','.join(row))
        
        return '\n'.join(output)
    
    def _generate_summary_report(self) -> str:
        """Generate human-readable summary report"""
        stats = self._get_summary_stats()
        
        report = []
        report.append("=" * 60)
        report.append("DEAD LINK DETECTION REPORT")
        report.append("=" * 60)
        report.append("")
        
        # Summary statistics
        report.append("SUMMARY STATISTICS:")
        report.append(f"  Total links found: {stats['total_links']}")
        report.append(f"  Broken internal links: {stats['broken_links']}")
        report.append(f"  External links: {stats['external_links']}")
        report.append(f"  Fragment links: {stats['fragment_links']}")
        report.append(f"  Success rate: {stats['success_rate']:.1f}%")
        report.append("")
        
        if self.broken_links:
            report.append("BROKEN LINKS BY PRIORITY:")
            report.append("")
            
            # Group by priority
            nav_links = [link for link in self.broken_links if self._is_navigation_link(link)]
            content_links = [link for link in self.broken_links if not self._is_navigation_link(link)]
            
            if nav_links:
                report.append("HIGH PRIORITY - Navigation Links:")
                for link in nav_links:
                    report.append(f"  ❌ {link.source_file}:{link.line_number}")
                    report.append(f"     Link: {link.href}")
                    report.append(f"     Text: {link.link_text}")
                    report.append(f"     Missing: {link.resolved_path}")
                    report.append("")
            
            if content_links:
                report.append("MEDIUM PRIORITY - Content Links:")
                for link in content_links:
                    report.append(f"  ❌ {link.source_file}:{link.line_number}")
                    report.append(f"     Link: {link.href}")
                    report.append(f"     Text: {link.link_text}")
                    report.append(f"     Missing: {link.resolved_path}")
                    report.append("")
        else:
            report.append("🎉 NO BROKEN LINKS FOUND!")
        
        return '\n'.join(report)
    
    def _get_summary_stats(self) -> Dict:
        """Calculate summary statistics"""
        total = len(self.links)
        broken = len(self.broken_links)
        external = len([l for l in self.links if l.status == 'external'])
        fragment = len([l for l in self.links if l.status == 'fragment'])
        valid_internal = len([l for l in self.links if l.status == 'valid' and l.link_type.startswith('internal')])
        
        internal_total = total - external - fragment
        success_rate = (valid_internal / internal_total * 100) if internal_total > 0 else 100
        
        return {
            'total_links': total,
            'broken_links': broken,
            'external_links': external,
            'fragment_links': fragment,
            'valid_internal_links': valid_internal,
            'success_rate': success_rate
        }
    
    def _is_navigation_link(self, link: LinkInfo) -> bool:
        """Determine if a link is critical navigation (high priority to fix)"""
        nav_indicators = [
            'nav-menu', 'main-nav', 'breadcrumb', 'menu',
            'index.html', 'dashboard', 'overview'
        ]
        
        # Check if it's in navigation HTML or has navigation-related text
        return any(indicator in link.source_file.lower() or 
                  indicator in link.link_text.lower() or
                  indicator in link.href.lower() 
                  for indicator in nav_indicators)


def main():
    """Main function with command line interface"""
    parser = argparse.ArgumentParser(description='Detect dead links in HTML files')
    parser.add_argument('--html-root', default='html', 
                       help='Root directory to scan for HTML files')
    parser.add_argument('--format', choices=['json', 'csv', 'summary'], 
                       default='summary', help='Output format')
    parser.add_argument('--output', help='Output file (default: print to stdout)')
    parser.add_argument('--broken-only', action='store_true',
                       help='Show only broken links')
    
    args = parser.parse_args()
    
    # Initialize detector
    html_root = Path(args.html_root)
    if not html_root.exists():
        print(f"Error: HTML root directory '{html_root}' does not exist")
        sys.exit(1)
    
    detector = DeadLinkDetector(html_root)
    
    # Scan for links
    detector.scan_directory()
    
    # Generate report
    if args.broken_only and args.format == 'json':
        # Special case: broken links only in JSON
        report_data = {
            'summary': detector._get_summary_stats(),
            'broken_links': [asdict(link) for link in detector.broken_links]
        }
        report = json.dumps(report_data, indent=2)
    else:
        report = detector.generate_report(args.format)
    
    # Output report
    if args.output:
        with open(args.output, 'w') as f:
            f.write(report)
        print(f"Report saved to: {args.output}")
    else:
        print(report)
    
    # Exit with error code if broken links found
    if detector.broken_links:
        sys.exit(1)
    else:
        sys.exit(0)


if __name__ == '__main__':
    main()