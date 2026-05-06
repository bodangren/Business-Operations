// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  generatePageBreakCSS,
  generatePrintCSS,
  calculatePageBreaks,
  formatPageNumber,
  createPrintVersion,
  checkPrintSupport,
  getPrintMediaQuery,
  defaultPrintOptions,
  lessonPageBreakRules,
} from '../print';

// Mock DOM methods
const mockQuerySelectorAll = vi.fn();
const mockCloneNode = vi.fn();
const mockRemove = vi.fn();

describe('Print Utilities', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('generatePageBreakCSS', () => {
    it('should generate CSS for page break rules', () => {
      const rules = [
        { selector: '.question', breakType: 'avoid' as const },
        { selector: '.answer-key', breakType: 'before' as const },
      ];

      const css = generatePageBreakCSS(rules);

      expect(css).toContain('.question { page-break-inside: avoid; }');
      expect(css).toContain('.answer-key { page-break-before: always; }');
    });

    it('should handle empty rules array', () => {
      const css = generatePageBreakCSS([]);
      expect(css).toBe('');
    });

    it('should handle all break types', () => {
      const rules = [
        { selector: '.before', breakType: 'before' as const },
        { selector: '.after', breakType: 'after' as const },
        { selector: '.avoid', breakType: 'avoid' as const },
      ];

      const css = generatePageBreakCSS(rules);

      expect(css).toContain('.before { page-break-before: always; }');
      expect(css).toContain('.after { page-break-after: always; }');
      expect(css).toContain('.avoid { page-break-inside: avoid; }');
    });
  });

  describe('generatePrintCSS', () => {
    it('should generate default print CSS', () => {
      const css = generatePrintCSS();

      // Should include page break rules
      expect(css).toContain('.question');
      expect(css).toContain('.answer-key');
      expect(css).toContain('page-break-inside: avoid');
    });

    it('should include custom CSS when provided', () => {
      const customCSS = '.custom { color: red; }';
      const css = generatePrintCSS({ customCSS });

      expect(css).toContain(customCSS);
    });

    it('should not include page break rules when disabled', () => {
      const css = generatePrintCSS({ enablePageBreaks: false });

      expect(css).not.toContain('page-break-inside: avoid');
    });

    it('should use default options when none provided', () => {
      const css = generatePrintCSS();

      // Should include all default page break rules
      lessonPageBreakRules.forEach((rule) => {
        expect(css).toContain(rule.selector);
      });
    });
  });

  describe('calculatePageBreaks', () => {
    it('should calculate page breaks based on content height', () => {
      const mockChildren = [
        { offsetHeight: 400 },
        { offsetHeight: 400 },
        { offsetHeight: 400 },
      ];

      const mockElement = {
        children: mockChildren,
      } as unknown as HTMLElement;

      // Mock window.getComputedStyle
      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        marginBottom: '0',
        marginTop: '0',
      } as CSSStyleDeclaration);

      const breakPoints = calculatePageBreaks(mockElement, 1123, 96);

      // With page height 1123 and margin 96, available height is 931
      // Each child is 400px, so after 2 children (800px), adding third would exceed
      expect(breakPoints).toContain(2);
    });

    it('should handle elements with margins', () => {
      const mockChildren = [
        { offsetHeight: 300 },
        { offsetHeight: 300 },
      ];

      const mockElement = {
        children: mockChildren,
      } as unknown as HTMLElement;

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        marginBottom: '100',
        marginTop: '100',
      } as CSSStyleDeclaration);

      const breakPoints = calculatePageBreaks(mockElement, 1123, 96);

      // Each child is 300 + 100 + 100 = 500px
      // After 1 child (500px), adding second would be 1000px (within 931)
      expect(breakPoints).toContain(1);
    });

    it('should return empty array for content that fits on one page', () => {
      const mockChildren = [
        { offsetHeight: 100 },
        { offsetHeight: 100 },
      ];

      const mockElement = {
        children: mockChildren,
      } as unknown as HTMLElement;

      vi.spyOn(window, 'getComputedStyle').mockReturnValue({
        marginBottom: '0',
        marginTop: '0',
      } as CSSStyleDeclaration);

      const breakPoints = calculatePageBreaks(mockElement, 1123, 96);

      expect(breakPoints).toHaveLength(0);
    });
  });

  describe('formatPageNumber', () => {
    it('should format page number correctly', () => {
      const result = formatPageNumber(1, 10);
      expect(result).toBe('Page 1 of 10');
    });

    it('should handle single digit numbers', () => {
      const result = formatPageNumber(5, 9);
      expect(result).toBe('Page 5 of 9');
    });

    it('should handle double digit numbers', () => {
      const result = formatPageNumber(15, 100);
      expect(result).toBe('Page 15 of 100');
    });
  });

  describe('createPrintVersion', () => {
    it('should clone content and remove interactive elements', () => {
      const mockElement = {
        cloneNode: mockCloneNode,
        querySelectorAll: mockQuerySelectorAll,
      } as unknown as HTMLElement;

      const mockClone = {
        querySelectorAll: mockQuerySelectorAll,
        classList: {
          add: vi.fn(),
        },
      } as unknown as HTMLElement;

      mockCloneNode.mockReturnValue(mockClone);
      mockQuerySelectorAll.mockReturnValue([]);

      const result = createPrintVersion(mockElement);

      expect(mockCloneNode).toHaveBeenCalledWith(true);
      expect(mockClone.classList.add).toHaveBeenCalledWith('printable-content');
    });

    it('should remove buttons and inputs', () => {
      const mockElement = {
        cloneNode: mockCloneNode,
        querySelectorAll: mockQuerySelectorAll,
      } as unknown as HTMLElement;

      const mockButton = { remove: mockRemove };
      const mockInput = { remove: mockRemove };

      const mockClone = {
        querySelectorAll: mockQuerySelectorAll,
        classList: {
          add: vi.fn(),
        },
      } as unknown as HTMLElement;

      mockCloneNode.mockReturnValue(mockClone);
      mockQuerySelectorAll.mockReturnValue([mockButton, mockInput]);

      createPrintVersion(mockElement);

      // Should call querySelectorAll for each interactive selector
      expect(mockQuerySelectorAll).toHaveBeenCalled();
    });
  });

  describe('checkPrintSupport', () => {
    it('should check browser print support', () => {
      // Mock window.print
      vi.stubGlobal('window', {
        print: vi.fn(),
      });

      // Mock navigator
      vi.stubGlobal('navigator', {
        mediaDevices: true,
      });

      // Mock CSS.supports
      vi.stubGlobal('CSS', {
        supports: vi.fn().mockReturnValue(true),
      });

      const support = checkPrintSupport();

      expect(support.supportsPrint).toBe(true);
      expect(support.supportsPDF).toBe(true);
      expect(support.supportsPageSize).toBe(true);
    });

    it('should handle missing print function', () => {
      vi.stubGlobal('window', {});

      const support = checkPrintSupport();

      expect(support.supportsPrint).toBe(false);
    });
  });

  describe('getPrintMediaQuery', () => {
    it('should return correct media query', () => {
      const query = getPrintMediaQuery();
      expect(query).toBe('@media print');
    });
  });

  describe('defaultPrintOptions', () => {
    it('should have correct default values', () => {
      expect(defaultPrintOptions.enablePageBreaks).toBe(true);
      expect(defaultPrintOptions.addPageNumbers).toBe(true);
      expect(defaultPrintOptions.enableHyphenation).toBe(true);
      expect(defaultPrintOptions.enableOrphanWidowControl).toBe(true);
    });

    it('should have header and footer text', () => {
      expect(defaultPrintOptions.headerText).toBe('Business Operations - Lesson Materials');
      expect(defaultPrintOptions.footerText).toBe('Page {page} of {total}');
    });
  });

  describe('lessonPageBreakRules', () => {
    it('should have avoid rules for question elements', () => {
      const questionRule = lessonPageBreakRules.find(
        (rule) => rule.selector === '.question'
      );
      expect(questionRule).toBeDefined();
      expect(questionRule?.breakType).toBe('avoid');
    });

    it('should have before rule for answer key', () => {
      const answerKeyRule = lessonPageBreakRules.find(
        (rule) => rule.selector === '.answer-key'
      );
      expect(answerKeyRule).toBeDefined();
      expect(answerKeyRule?.breakType).toBe('before');
    });

    it('should have avoid rules for tables and images', () => {
      const tableRule = lessonPageBreakRules.find(
        (rule) => rule.selector === 'table'
      );
      const imgRule = lessonPageBreakRules.find(
        (rule) => rule.selector === 'img'
      );

      expect(tableRule?.breakType).toBe('avoid');
      expect(imgRule?.breakType).toBe('avoid');
    });
  });
});
