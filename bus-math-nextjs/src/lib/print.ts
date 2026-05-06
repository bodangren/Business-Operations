import { Previewer } from 'pagedjs';

export interface PrintOptions {
  /** Enable page break detection */
  enablePageBreaks?: boolean;
  /** Add page numbers */
  addPageNumbers?: boolean;
  /** Add header text */
  headerText?: string;
  /** Add footer text */
  footerText?: string;
  /** Custom CSS to inject */
  customCSS?: string;
  /** Enable hyphenation */
  enableHyphenation?: boolean;
  /** Enable orphan/widow control */
  enableOrphanWidowControl?: boolean;
}

export interface PageBreakRule {
  /** Element selector */
  selector: string;
  /** Break type: 'before' | 'after' | 'avoid' */
  breakType: 'before' | 'after' | 'avoid';
}

/**
 * Default print options
 */
export const defaultPrintOptions: PrintOptions = {
  enablePageBreaks: true,
  addPageNumbers: true,
  headerText: 'Business Operations - Lesson Materials',
  footerText: 'Page {page} of {total}',
  enableHyphenation: true,
  enableOrphanWidowControl: true,
};

/**
 * Generate CSS for page break rules
 */
export function generatePageBreakCSS(rules: PageBreakRule[]): string {
  return rules
    .map((rule) => {
      const breakProperty =
        rule.breakType === 'before' ? 'page-break-before' :
        rule.breakType === 'after' ? 'page-break-after' :
        'page-break-inside';
      const breakValue = rule.breakType === 'avoid' ? 'avoid' : 'always';
      return `${rule.selector} { ${breakProperty}: ${breakValue}; }`;
    })
    .join('\n');
}

/**
 * Common page break rules for lesson content
 */
export const lessonPageBreakRules: PageBreakRule[] = [
  // Avoid breaks inside these elements
  { selector: '.question', breakType: 'avoid' },
  { selector: '.answer-space', breakType: 'avoid' },
  { selector: '.options', breakType: 'avoid' },
  { selector: 'table', breakType: 'avoid' },
  { selector: 'img', breakType: 'avoid' },
  { selector: 'blockquote', breakType: 'avoid' },
  { selector: '.teacher-notes', breakType: 'avoid' },
  { selector: '.rubric', breakType: 'avoid' },
  { selector: '.instructions', breakType: 'avoid' },
  { selector: '.matching', breakType: 'avoid' },
  { selector: '.student-info', breakType: 'avoid' },
  { selector: '.lesson-meta', breakType: 'avoid' },

  // Force breaks before these elements
  { selector: '.answer-key', breakType: 'before' },
  { selector: '.page-break-before', breakType: 'before' },

  // Force breaks after these elements
  { selector: '.worksheet-header', breakType: 'after' },
  { selector: '.page-break-after', breakType: 'after' },
];

/**
 * Generate complete print CSS
 */
export function generatePrintCSS(options: PrintOptions = {}): string {
  const opts = { ...defaultPrintOptions, ...options };

  let css = '';

  // Page break rules
  if (opts.enablePageBreaks) {
    css += generatePageBreakCSS(lessonPageBreakRules);
  }

  // Custom CSS
  if (opts.customCSS) {
    css += '\n' + opts.customCSS;
  }

  return css;
}

/**
 * Preview content using paged.js
 * This renders the content with proper pagination
 */
export async function previewWithPagedJS(
  content: HTMLElement,
  options: PrintOptions = {}
): Promise<Previewer> {
  const opts = { ...defaultPrintOptions, ...options };

  // Create previewer
  const previewer = new Previewer();

  // Generate CSS
  const css = generatePrintCSS(opts);

  // Inject CSS into content
  const styleElement = document.createElement('style');
  styleElement.textContent = css;
  content.prepend(styleElement);

  // Preview content
  await previewer.preview(content);

  return previewer;
}

/**
 * Print content using browser print API
 */
export function printContent(): void {
  window.print();
}

/**
 * Generate PDF using browser print dialog
 * This opens the print dialog which allows saving as PDF
 */
export function generatePDF(): void {
  // Set print media type
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      body { margin: 0; }
      .no-print { display: none !important; }
    }
  `;
  document.head.appendChild(style);

  // Trigger print
  window.print();

  // Clean up
  document.head.removeChild(style);
}

/**
 * Calculate optimal page breaks for content
 * Analyzes content height and suggests break points
 */
export function calculatePageBreaks(
  content: HTMLElement,
  pageHeight: number = 1123, // A4 height in pixels at 96 DPI
  margin: number = 96 // 1 inch margin
): number[] {
  const availableHeight = pageHeight - margin * 2;
  const breakPoints: number[] = [];
  let currentHeight = 0;

  const children = Array.from(content.children);

  children.forEach((child, index) => {
    const element = child as HTMLElement;
    const height = element.offsetHeight;
    const style = window.getComputedStyle(element);
    const marginBottom = parseInt(style.marginBottom) || 0;
    const marginTop = parseInt(style.marginTop) || 0;

    const totalHeight = height + marginBottom + marginTop;

    if (currentHeight + totalHeight > availableHeight && index > 0) {
      breakPoints.push(index);
      currentHeight = totalHeight;
    } else {
      currentHeight += totalHeight;
    }
  });

  return breakPoints;
}

/**
 * Apply page breaks to content based on calculated break points
 */
export function applyPageBreaks(
  content: HTMLElement,
  breakPoints: number[]
): void {
  const children = Array.from(content.children);

  breakPoints.forEach((breakIndex) => {
    if (breakIndex < children.length) {
      const element = children[breakIndex] as HTMLElement;
      element.style.pageBreakBefore = 'always';
    }
  });
}

/**
 * Format page numbers in footer
 */
export function formatPageNumber(page: number, total: number): string {
  return `Page ${page} of ${total}`;
}

/**
 * Create a print-friendly version of content
 * Strips interactive elements and ensures print compatibility
 */
export function createPrintVersion(content: HTMLElement): HTMLElement {
  const clone = content.cloneNode(true) as HTMLElement;

  // Remove interactive elements
  const interactiveSelectors = [
    'button',
    'input',
    'select',
    'textarea',
    'a[href]',
    '[data-interactive]',
    '.no-print',
  ];

  interactiveSelectors.forEach((selector) => {
    const elements = clone.querySelectorAll(selector);
    elements.forEach((el) => el.remove());
  });

  // Convert links to text
  const links = clone.querySelectorAll('a');
  links.forEach((link) => {
    const text = document.createTextNode(link.textContent || '');
    link.parentNode?.replaceChild(text, link);
  });

  // Ensure images have alt text
  const images = clone.querySelectorAll('img');
  images.forEach((img) => {
    if (!img.alt) {
      img.alt = 'Image';
    }
  });

  // Add print classes
  clone.classList.add('printable-content');

  return clone;
}

/**
 * Check if browser supports print features
 */
export function checkPrintSupport(): {
  supportsPrint: boolean;
  supportsPDF: boolean;
  supportsPageSize: boolean;
} {
  return {
    supportsPrint: typeof window.print === 'function',
    supportsPDF: 'mediaDevices' in navigator, // Approximation
    supportsPageSize: CSS.supports('size', 'A4'),
  };
}

/**
 * Get print media query
 */
export function getPrintMediaQuery(): string {
  return '@media print';
}

/**
 * Inject print-specific styles into document
 */
export function injectPrintStyles(css: string): HTMLStyleElement {
  const style = document.createElement('style');
  style.id = 'pagedjs-print-styles';
  style.textContent = css;
  document.head.appendChild(style);
  return style;
}

/**
 * Remove injected print styles
 */
export function removePrintStyles(): void {
  const style = document.getElementById('pagedjs-print-styles');
  if (style) {
    style.remove();
  }
}
