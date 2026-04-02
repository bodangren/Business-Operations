/**
 * Consolidated Audit Report Generator
 * 
 * Merges per-unit findings into one consolidated report with
 * prioritized remediation list.
 * 
 * Usage: npx tsx scripts/audit/consolidate.ts
 */

import * as fs from 'fs'
import * as path from 'path'

const ROOT_DIR = path.resolve(__dirname, '../..')
const AUDIT_OUTPUT_DIR = path.join(ROOT_DIR, 'output', 'audit')

interface ConsolidatedFinding {
  severity: 'critical' | 'high' | 'medium'
  unit: string
  type: string
  description: string
  pagePath?: string
  linkedFile?: string
  details?: string
}

function loadUnitSummaries(): { unit: string; summary: string; linkReport: string; workbookReport: string; alignmentReport: string }[] {
  const units = fs.readdirSync(AUDIT_OUTPUT_DIR).filter(d => d.startsWith('unit'))
  const results = []
  
  for (const unit of units) {
    const unitDir = path.join(AUDIT_OUTPUT_DIR, unit)
    const summaryPath = path.join(unitDir, 'summary.md')
    const linkPath = path.join(unitDir, 'link-report.md')
    const workbookPath = path.join(unitDir, 'workbook-report.md')
    const alignmentPath = path.join(unitDir, 'alignment-report.md')
    
    results.push({
      unit,
      summary: fs.existsSync(summaryPath) ? fs.readFileSync(summaryPath, 'utf-8') : 'No summary',
      linkReport: fs.existsSync(linkPath) ? fs.readFileSync(linkPath, 'utf-8') : 'No link report',
      workbookReport: fs.existsSync(workbookPath) ? fs.readFileSync(workbookPath, 'utf-8') : 'No workbook report',
      alignmentReport: fs.existsSync(alignmentPath) ? fs.readFileSync(alignmentPath, 'utf-8') : 'No alignment report',
    })
  }
  
  return results
}

function extractFindings(unitSummaries: ReturnType<typeof loadUnitSummaries>): ConsolidatedFinding[] {
  const findings: ConsolidatedFinding[] = []
  
  for (const { unit, linkReport, alignmentReport } of unitSummaries) {
    // Extract missing files from link reports
    const missingMatch = linkReport.match(/### Missing Files \(Critical\)\n\n\| Page \| Linked File \|\n\|------\|-------------\|\n((?:\| .+\n)+)/)
    if (missingMatch) {
      const rows = missingMatch[1].trim().split('\n')
      for (const row of rows) {
        const parts = row.match(/\| `([^`]+)` \| `([^`]+)` \|/)
        if (parts) {
          findings.push({
            severity: 'critical',
            unit,
            type: 'missing-file',
            description: `Missing workbook file: ${parts[2]}`,
            pagePath: parts[1],
            linkedFile: parts[2],
          })
        }
      }
    }
    
    // Extract alignment issues
    const alignmentLines = alignmentReport.split('\n')
    let currentLinkedFile = ''
    let currentPagePath = ''
    for (const line of alignmentLines) {
      const fileMatch = line.match(/^### (.+)$/)
      if (fileMatch) {
        currentLinkedFile = fileMatch[1]
      }
      const pageMatch = line.match(/^- \*\*Page\*\*: `([^`]+)`$/)
      if (pageMatch) {
        currentPagePath = pageMatch[1]
      }
      const issueMatch = line.match(/^  - (.+)$/)
      if (issueMatch && currentLinkedFile) {
        findings.push({
          severity: 'high',
          unit,
          type: 'alignment-mismatch',
          description: `Workbook-page alignment: ${issueMatch[1]}`,
          pagePath: currentPagePath,
          linkedFile: currentLinkedFile,
        })
      }
    }
  }
  
  return findings
}

function generateConsolidatedReport(unitSummaries: ReturnType<typeof loadUnitSummaries>): string {
  const findings = extractFindings(unitSummaries)
  
  const lines: string[] = [
    '# Consolidated XLSX Audit Report',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    '## Executive Summary',
    '',
    `This report consolidates findings from auditing all 8 units of the Business Operations curriculum.`,
    `The audit scanned student lesson pages for .xlsx links, verified file existence, validated workbook`,
    `structure and content, and checked alignment between page instructions and workbook layouts.`,
    '',
  ]
  
  // Per-unit summary table
  lines.push('## Per-Unit Summary', '')
  lines.push('| Unit | Links Found | Links Valid | Links Missing | Workbooks OK | Workbook Errors | Alignment Issues |', '|------|-------------|-------------|---------------|--------------|-----------------|------------------|')
  
  for (const { unit, summary } of unitSummaries) {
    const extract = (pattern: RegExp) => {
      const match = summary.match(pattern)
      return match ? match[1] : '0'
    }
    
    const linksDiscovered = extract(/Links discovered: (\d+)/)
    const linksValid = extract(/Links valid: (\d+)/)
    const linksMissing = extract(/Links missing: (\d+)/)
    const workbooksOk = extract(/Workbooks OK: (\d+)/)
    const workbookErrors = extract(/Workbooks with errors: (\d+)/)
    const alignmentIssues = extract(/Alignment issues: (\d+)/)
    
    lines.push(`| ${unit} | ${linksDiscovered} | ${linksValid} | ${linksMissing} | ${workbooksOk} | ${workbookErrors} | ${alignmentIssues} |`)
  }
  
  lines.push('')
  
  // Totals
  const totalLinks = unitSummaries.reduce((sum, { summary }) => {
    const match = summary.match(/Links discovered: (\d+)/)
    return sum + (match ? parseInt(match[1], 10) : 0)
  }, 0)
  
  const totalMissing = unitSummaries.reduce((sum, { summary }) => {
    const match = summary.match(/Links missing: (\d+)/)
    return sum + (match ? parseInt(match[1], 10) : 0)
  }, 0)
  
  const totalWorkbooks = unitSummaries.reduce((sum, { summary }) => {
    const match = summary.match(/Workbooks OK: (\d+)/)
    return sum + (match ? parseInt(match[1], 10) : 0)
  }, 0)
  
  lines.push('## Totals', '')
  lines.push(`- **Total links discovered**: ${totalLinks}`)
  lines.push(`- **Total missing links**: ${totalMissing}`)
  lines.push(`- **Total workbooks validated**: ${totalWorkbooks}`)
  lines.push(`- **Total alignment issues**: ${findings.filter(f => f.type === 'alignment-mismatch').length}`)
  lines.push('')
  
  // Prioritized findings
  lines.push('## Prioritized Remediation List', '')
  
  const critical = findings.filter(f => f.severity === 'critical')
  const high = findings.filter(f => f.severity === 'high')
  const medium = findings.filter(f => f.severity === 'medium')
  
  if (critical.length > 0) {
    lines.push('### Critical (Missing Files)', '')
    lines.push('These files are referenced in student pages but do not exist in `public/resources/`.')
    lines.push('Students clicking these links will get 404 errors.')
    lines.push('')
    lines.push('| Unit | Missing File | Referenced From |', '|------|-------------|-----------------|')
    for (const f of critical) {
      lines.push(`| ${f.unit} | \`${f.linkedFile}\` | \`${f.pagePath}\` |`)
    }
    lines.push('')
  }
  
  if (high.length > 0) {
    lines.push('### High (Alignment Mismatches)', '')
    lines.push('These workbooks exist but their sheet structure does not match page instructions.')
    lines.push('')
    lines.push('| Unit | Workbook | Issue |', '|------|----------|-------|')
    for (const f of high) {
      lines.push(`| ${f.unit} | \`${f.linkedFile}\` | ${f.description.replace('Workbook-page alignment: ', '')} |`)
    }
    lines.push('')
  }
  
  if (medium.length > 0) {
    lines.push('### Medium', '')
    for (const f of medium) {
      lines.push(`- **${f.unit}**: ${f.description}`)
    }
    lines.push('')
  }
  
  if (findings.length === 0) {
    lines.push('No findings. All links valid and aligned.')
    lines.push('')
  }
  
  // Recommendations
  lines.push('## Recommendations', '')
  
  if (critical.length > 0) {
    lines.push('1. **Create missing workbook files** - Critical priority. Students cannot complete lessons without these workbooks.')
    lines.push('   - Review lesson content to determine required workbook structure')
    lines.push('   - Create student and teacher versions where applicable')
    lines.push('')
  }
  
  if (high.length > 0) {
    lines.push('2. **Fix workbook-page alignment** - High priority. Mismatched sheet names confuse students following instructions.')
    lines.push('   - Either update workbook sheet names to match page instructions')
    lines.push('   - Or update page instructions to match actual workbook structure')
    lines.push('')
  }
  
  lines.push('3. **Expand link discovery coverage** - The current scanner detects explicit href patterns.')
  lines.push('   - Dynamic/interpolated links (e.g., `unit08-group${i + 1}-fixed-assets.xlsx`) need manual review')
  lines.push('   - Consider adding data-driven link extraction for lessons with group-based workbooks')
  lines.push('')
  
  lines.push('4. **Add alignment assertions to page content** - Pages should explicitly reference expected sheet names')
  lines.push('   to enable automated alignment checking.')
  lines.push('')
  
  return lines.join('\n')
}

// Main execution
const unitSummaries = loadUnitSummaries()
const report = generateConsolidatedReport(unitSummaries)

const consolidatedDir = path.join(AUDIT_OUTPUT_DIR, 'consolidated')
fs.mkdirSync(consolidatedDir, { recursive: true })
fs.writeFileSync(path.join(consolidatedDir, 'consolidated-report.md'), report)

console.log(report)
console.log(`\nConsolidated report written to: ${path.join(consolidatedDir, 'consolidated-report.md')}`)
