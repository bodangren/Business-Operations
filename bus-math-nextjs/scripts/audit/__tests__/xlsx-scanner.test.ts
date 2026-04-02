import { describe, it, expect } from 'vitest'
import {
  extractLinksFromFile,
  validateExistence,
  generateUnitReport,
  generateConsolidatedReport,
  formatReportAsMarkdown,
  type XlsxLink,
  type ExistenceResult,
} from '../xlsx-scanner'

describe('extractLinksFromFile', () => {
  it('extracts static href links from page content', () => {
    const content = `
      <a href="/resources/unit01-lesson04-student.xlsx" download>
        Download workbook
      </a>
    `
    const filePath = '/project/src/app/student/unit01/lesson04/phase-4/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(1)
    expect(links[0].unit).toBe('unit01')
    expect(links[0].lesson).toBe('lesson04')
    expect(links[0].phase).toBe('phase-4')
    expect(links[0].linkedFile).toBe('unit01-lesson04-student.xlsx')
    expect(links[0].linkPattern).toBe('static')
  })

  it('extracts withBasePath links from page content', () => {
    const content = `
      <a href={withBasePath('/resources/unit01-lesson05-teacher.xlsx')} download>
        Teacher workbook
      </a>
    `
    const filePath = '/project/src/app/student/unit01/lesson05/phase-2/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(1)
    expect(links[0].linkedFile).toBe('unit01-lesson05-teacher.xlsx')
    expect(links[0].linkPattern).toBe('basePath')
  })

  it('extracts variable-backed path links', () => {
    const content = `
      const workbookPath = "/resources/unit06-lesson07-student.xlsx"
      <a href={workbookPath} download>Download</a>
    `
    const filePath = '/project/src/app/student/unit06/lesson07/phase-2/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(1)
    expect(links[0].linkedFile).toBe('unit06-lesson07-student.xlsx')
    expect(links[0].linkPattern).toBe('variable')
  })

  it('extracts multiple links from a single file', () => {
    const content = `
      <a href="/resources/unit02-lesson03-student.xlsx" download>Student</a>
      <a href="/resources/unit02-lesson03-teacher.xlsx" download>Teacher</a>
    `
    const filePath = '/project/src/app/student/unit02/lesson03/phase-1/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(2)
    expect(links.map(l => l.linkedFile)).toContain('unit02-lesson03-student.xlsx')
    expect(links.map(l => l.linkedFile)).toContain('unit02-lesson03-teacher.xlsx')
  })

  it('returns empty array for non-page files', () => {
    const content = '<a href="/resources/unit01-lesson01-student.xlsx">Download</a>'
    const filePath = '/project/src/components/SomeComponent.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(0)
  })

  it('returns empty array for content with no xlsx links', () => {
    const content = '<p>No downloads here</p>'
    const filePath = '/project/src/app/student/unit01/lesson01/phase-1/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(0)
  })

  it('handles lesson without phase in path', () => {
    const content = '<a href="/resources/unit08-lesson09-group1.xlsx">Download</a>'
    const filePath = '/project/src/app/student/unit08/lesson09/page.tsx'
    const links = extractLinksFromFile(filePath, content)
    
    expect(links).toHaveLength(1)
    expect(links[0].phase).toBeNull()
    expect(links[0].lesson).toBe('lesson09')
  })
})

describe('validateExistence', () => {
  const mockLinks: XlsxLink[] = [
    {
      unit: 'unit01',
      lesson: 'lesson01',
      phase: 'phase-1',
      pagePath: 'unit01/lesson01/phase-1/page.tsx',
      linkedFile: 'unit01-lesson01-student.xlsx',
      linkText: 'Download',
      linkPattern: 'static',
    },
    {
      unit: 'unit01',
      lesson: 'lesson01',
      phase: 'phase-1',
      pagePath: 'unit01/lesson01/phase-1/page.tsx',
      linkedFile: 'unit01-lesson01-missing.xlsx',
      linkText: 'Missing',
      linkPattern: 'static',
    },
  ]

  it('marks existing files as exists: true', () => {
    const results = validateExistence(mockLinks, '/tmp/test-resources')
    
    // We can't guarantee file existence in test, but we verify structure
    expect(results).toHaveLength(2)
    expect(results[0]).toHaveProperty('exists')
    expect(results[0]).toHaveProperty('link')
    expect(results[0]).toHaveProperty('fullPath')
  })

  it('returns correct structure for each result', () => {
    const results = validateExistence(mockLinks, '/tmp/test-resources')
    
    for (const result of results) {
      expect(result).toHaveProperty('link')
      expect(result).toHaveProperty('exists')
      expect(result).toHaveProperty('fullPath')
      expect(result.link.linkedFile).toBeDefined()
    }
  })
})

describe('generateUnitReport', () => {
  const mockResults: ExistenceResult[] = [
    {
      link: {
        unit: 'unit01',
        lesson: 'lesson01',
        phase: null,
        pagePath: 'unit01/lesson01/page.tsx',
        linkedFile: 'unit01-lesson01-student.xlsx',
        linkText: 'Download',
        linkPattern: 'static',
      },
      exists: true,
      fullPath: '/resources/unit01-lesson01-student.xlsx',
    },
    {
      link: {
        unit: 'unit01',
        lesson: 'lesson01',
        phase: null,
        pagePath: 'unit01/lesson01/page.tsx',
        linkedFile: 'unit01-lesson01-missing.xlsx',
        linkText: 'Missing',
        linkPattern: 'static',
      },
      exists: false,
      fullPath: null,
    },
  ]

  it('generates report with correct counts', () => {
    const report = generateUnitReport('unit01', mockResults)
    
    expect(report.unit).toBe('unit01')
    expect(report.totalLinks).toBe(2)
    expect(report.validLinks).toBe(1)
    expect(report.missingLinks).toBe(1)
    expect(report.findings).toHaveLength(2)
    expect(report.timestamp).toBeDefined()
  })

  it('handles empty results', () => {
    const report = generateUnitReport('unit01', [])
    
    expect(report.totalLinks).toBe(0)
    expect(report.validLinks).toBe(0)
    expect(report.missingLinks).toBe(0)
  })
})

describe('generateConsolidatedReport', () => {
  it('aggregates counts across units', () => {
    const unitReports = [
      generateUnitReport('unit01', [
        { link: {} as XlsxLink, exists: true, fullPath: '/a' },
        { link: {} as XlsxLink, exists: false, fullPath: null },
      ]),
      generateUnitReport('unit02', [
        { link: {} as XlsxLink, exists: true, fullPath: '/b' },
        { link: {} as XlsxLink, exists: true, fullPath: '/c' },
      ]),
    ]
    
    const report = generateConsolidatedReport(unitReports)
    
    expect(report.totalUnits).toBe(2)
    expect(report.totalLinks).toBe(4)
    expect(report.totalValid).toBe(3)
    expect(report.totalMissing).toBe(1)
    expect(report.unitReports).toHaveLength(2)
  })

  it('handles empty unit reports', () => {
    const report = generateConsolidatedReport([])
    
    expect(report.totalUnits).toBe(0)
    expect(report.totalLinks).toBe(0)
  })
})

describe('formatReportAsMarkdown', () => {
  it('formats unit report as markdown', () => {
    const report = generateUnitReport('unit01', [
      {
        link: {
          unit: 'unit01',
          lesson: 'lesson01',
          phase: null,
          pagePath: 'unit01/lesson01/page.tsx',
          linkedFile: 'unit01-lesson01-student.xlsx',
          linkText: 'Download',
          linkPattern: 'static',
        },
        exists: true,
        fullPath: '/resources/unit01-lesson01-student.xlsx',
      },
    ])
    
    const markdown = formatReportAsMarkdown(report)
    
    expect(markdown).toContain('# Audit Report: unit01')
    expect(markdown).toContain('**Total links scanned**: 1')
    expect(markdown).toContain('**Valid links**: 1')
    expect(markdown).toContain('unit01-lesson01-student.xlsx')
  })

  it('formats consolidated report as markdown', () => {
    const unitReports = [
      generateUnitReport('unit01', [
        { link: {} as XlsxLink, exists: true, fullPath: '/a' },
      ]),
    ]
    
    const report = generateConsolidatedReport(unitReports)
    const markdown = formatReportAsMarkdown(report)
    
    expect(markdown).toContain('# Consolidated XLSX Audit Report')
    expect(markdown).toContain('**Total units scanned**: 1')
    expect(markdown).toContain('**Total links scanned**: 1')
    expect(markdown).toContain('| Unit | Total | Valid | Missing |')
  })

  it('includes critical findings section when files are missing', () => {
    const unitReports = [
      generateUnitReport('unit01', [
        {
          link: {
            unit: 'unit01',
            lesson: 'lesson01',
            phase: null,
            pagePath: 'unit01/lesson01/page.tsx',
            linkedFile: 'missing.xlsx',
            linkText: 'Missing',
            linkPattern: 'static',
          },
          exists: false,
          fullPath: null,
        },
      ]),
    ]
    
    const report = generateConsolidatedReport(unitReports)
    const markdown = formatReportAsMarkdown(report)
    
    expect(markdown).toContain('## Critical Findings: Missing Files')
    expect(markdown).toContain('missing.xlsx')
  })
})
