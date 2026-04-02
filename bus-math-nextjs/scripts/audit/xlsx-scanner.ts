/**
 * XLSX Link Scanner
 * 
 * Scans student lesson pages for .xlsx links and validates their existence.
 * Part of the XLSX Link and Workbook Integrity Audit track.
 */

import * as fs from 'fs'
import * as path from 'path'

// Types for audit findings
export interface XlsxLink {
  unit: string
  lesson: string
  phase: string | null
  pagePath: string
  linkedFile: string
  linkText: string
  linkPattern: 'static' | 'variable' | 'basePath' | 'dynamic'
}

export interface ExistenceResult {
  link: XlsxLink
  exists: boolean
  fullPath: string | null
}

export interface UnitAuditReport {
  unit: string
  totalLinks: number
  validLinks: number
  missingLinks: number
  findings: ExistenceResult[]
  timestamp: string
}

export interface ConsolidatedReport {
  totalUnits: number
  totalLinks: number
  totalValid: number
  totalMissing: number
  unitReports: UnitAuditReport[]
  timestamp: string
}

// Regex patterns for extracting xlsx links from TSX files
const XLSX_LINK_PATTERNS = [
  // Pattern A: href="/resources/unitXX-lessonYY-*.xlsx"
  /href="\/resources\/([^"]+\.xlsx)"/g,
  // Pattern B: href={variable} where variable contains /resources/ - handled by scanning string literals
  // Pattern C: withBasePath('/resources/unitXX-lessonYY-*.xlsx')
  /withBasePath\(['"]\/resources\/([^'"]+\.xlsx)['"]\)/g,
  // Pattern D: Dynamic interpolated paths - captured as template references
  /href=\{[`'"]\/resources\/([^"'`]+\.xlsx)[`'"]\}/g,
]

// Pattern to extract unit and lesson from page file path
const PAGE_PATH_PATTERN = /unit(\d{2})[/\\]lesson(\d{2})(?:[/\\]phase-(\d+))?[/\\]page\.tsx$/

/**
 * Extract .xlsx links from a single TSX file
 */
export function extractLinksFromFile(filePath: string, content: string): XlsxLink[] {
  const links: XlsxLink[] = []
  const pathMatch = filePath.match(PAGE_PATH_PATTERN)
  
  if (!pathMatch) {
    return links
  }
  
  const unit = `unit${pathMatch[1]}`
  const lesson = `lesson${pathMatch[2]}`
  const phase = pathMatch[3] ? `phase-${pathMatch[3]}` : null
  const relativePath = path.relative(process.cwd(), filePath)
  
  // Extract all xlsx links from content
  const allMatches = new Set<string>()
  
  for (const pattern of XLSX_LINK_PATTERNS) {
    let match
    while ((match = pattern.exec(content)) !== null) {
      allMatches.add(match[1])
    }
  }
  
  // Also look for variable-backed paths
  const varPathPattern = /const\s+\w*?[Pp]ath\w*?\s*=\s*["']\/resources\/([^"']+\.xlsx)["']/g
  let varMatch
  while ((varMatch = varPathPattern.exec(content)) !== null) {
    allMatches.add(varMatch[1])
  }
  
  // Determine link pattern type
  function getPatternType(linkFile: string): XlsxLink['linkPattern'] {
    if (linkFile.includes('${') || linkFile.includes('{')) {
      return 'dynamic'
    }
    if (content.includes(`withBasePath`) && content.includes(linkFile)) {
      return 'basePath'
    }
    if (content.includes(`const`) && content.includes(linkFile)) {
      return 'variable'
    }
    return 'static'
  }
  
  // Extract link text (the text between > and </a> for each link)
  function extractLinkText(linkFile: string): string {
    const linkRegex = new RegExp(`>[^<]*${linkFile.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[^<]*<`, 'g')
    const textMatch = linkRegex.exec(content)
    if (textMatch) {
      return textMatch[0].slice(1, -1).trim()
    }
    return linkFile
  }
  
  for (const linkFile of allMatches) {
    links.push({
      unit,
      lesson,
      phase,
      pagePath: relativePath,
      linkedFile: linkFile,
      linkText: extractLinkText(linkFile),
      linkPattern: getPatternType(linkFile),
    })
  }
  
  return links
}

/**
 * Scan all student pages in a unit directory for .xlsx links
 */
export function scanUnitPages(unitDir: string): XlsxLink[] {
  const allLinks: XlsxLink[] = []
  
  if (!fs.existsSync(unitDir)) {
    return allLinks
  }
  
  const pageFiles = findPageFiles(unitDir)
  
  for (const pageFile of pageFiles) {
    const content = fs.readFileSync(pageFile, 'utf-8')
    const links = extractLinksFromFile(pageFile, content)
    allLinks.push(...links)
  }
  
  return allLinks
}

/**
 * Recursively find all page.tsx files in a directory
 */
function findPageFiles(dir: string): string[] {
  const files: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...findPageFiles(fullPath))
    } else if (entry.name === 'page.tsx') {
      files.push(fullPath)
    }
  }
  
  return files
}

/**
 * Validate that all discovered links point to existing files
 */
export function validateExistence(links: XlsxLink[], resourcesDir: string): ExistenceResult[] {
  return links.map(link => {
    const fullPath = path.join(resourcesDir, link.linkedFile)
    const exists = fs.existsSync(fullPath)
    return {
      link,
      exists,
      fullPath: exists ? fullPath : null,
    }
  })
}

/**
 * Generate a per-unit audit report
 */
export function generateUnitReport(unit: string, results: ExistenceResult[]): UnitAuditReport {
  const validLinks = results.filter(r => r.exists).length
  const missingLinks = results.filter(r => !r.exists).length
  
  return {
    unit,
    totalLinks: results.length,
    validLinks,
    missingLinks,
    findings: results,
    timestamp: new Date().toISOString(),
  }
}

/**
 * Generate a consolidated report across all units
 */
export function generateConsolidatedReport(unitReports: UnitAuditReport[]): ConsolidatedReport {
  const totalLinks = unitReports.reduce((sum, r) => sum + r.totalLinks, 0)
  const totalValid = unitReports.reduce((sum, r) => sum + r.validLinks, 0)
  const totalMissing = unitReports.reduce((sum, r) => sum + r.missingLinks, 0)
  
  return {
    totalUnits: unitReports.length,
    totalLinks,
    totalValid,
    totalMissing,
    unitReports,
    timestamp: new Date().toISOString(),
  }
}

/**
 * Format a report as markdown text
 */
export function formatReportAsMarkdown(report: UnitAuditReport | ConsolidatedReport): string {
  if ('totalUnits' in report) {
    return formatConsolidatedMarkdown(report)
  }
  return formatUnitMarkdown(report)
}

function formatUnitMarkdown(report: UnitAuditReport): string {
  const lines: string[] = [
    `# Audit Report: ${report.unit}`,
    ``,
    `Generated: ${report.timestamp}`,
    ``,
    `## Summary`,
    ``,
    `- **Total links scanned**: ${report.totalLinks}`,
    `- **Valid links**: ${report.validLinks}`,
    `- **Missing links**: ${report.missingLinks}`,
    ``,
  ]
  
  if (report.findings.length > 0) {
    lines.push('## Findings', '')
    
    const missing = report.findings.filter(f => !f.exists)
    const valid = report.findings.filter(f => f.exists)
    
    if (missing.length > 0) {
      lines.push('### Missing Files (Critical)', '')
      lines.push('| Page | Linked File |', '|------|-------------|')
      for (const f of missing) {
        lines.push(`| \`${f.link.pagePath}\` | \`${f.link.linkedFile}\` |`)
      }
      lines.push('')
    }
    
    if (valid.length > 0) {
      lines.push('### Valid Links', '')
      lines.push('| Page | Linked File | Pattern |', '|------|-------------|---------|')
      for (const f of valid) {
        lines.push(`| \`${f.link.pagePath}\` | \`${f.link.linkedFile}\` | ${f.link.linkPattern} |`)
      }
      lines.push('')
    }
  }
  
  return lines.join('\n')
}

function formatConsolidatedMarkdown(report: ConsolidatedReport): string {
  const lines: string[] = [
    `# Consolidated XLSX Audit Report`,
    ``,
    `Generated: ${report.timestamp}`,
    ``,
    `## Summary`,
    ``,
    `- **Total units scanned**: ${report.totalUnits}`,
    `- **Total links scanned**: ${report.totalLinks}`,
    `- **Valid links**: ${report.totalValid}`,
    `- **Missing links**: ${report.totalMissing}`,
    ``,
  ]
  
  if (report.totalMissing > 0) {
    lines.push('## Critical Findings: Missing Files', '')
    for (const unitReport of report.unitReports) {
      const missing = unitReport.findings.filter(f => !f.exists)
      if (missing.length > 0) {
        lines.push(`### ${unitReport.unit}`, '')
        lines.push('| Page | Linked File |', '|------|-------------|')
        for (const f of missing) {
          lines.push(`| \`${f.link.pagePath}\` | \`${f.link.linkedFile}\` |`)
        }
        lines.push('')
      }
    }
  }
  
  lines.push('## Per-Unit Summary', '')
  lines.push('| Unit | Total | Valid | Missing |', '|------|-------|-------|---------|')
  for (const unitReport of report.unitReports) {
    lines.push(`| ${unitReport.unit} | ${unitReport.totalLinks} | ${unitReport.validLinks} | ${unitReport.missingLinks} |`)
  }
  lines.push('')
  
  return lines.join('\n')
}
