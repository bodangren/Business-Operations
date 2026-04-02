/**
 * XLSX Audit Runner
 * 
 * Combines link discovery, existence validation, and workbook content checks
 * to produce per-unit audit reports.
 * 
 * Usage: npx tsx scripts/audit/run-audit.ts <unit>
 * Example: npx tsx scripts/audit/run-audit.ts unit01
 */

import * as fs from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import {
  scanUnitPages,
  validateExistence,
  generateUnitReport,
  formatReportAsMarkdown,
  type XlsxLink,
  type ExistenceResult,
} from './xlsx-scanner'

interface WorkbookValidationResult {
  file: string
  exists: boolean
  opens: boolean
  sheetCount: number
  sheetNames: string[]
  hasFormulas: boolean
  formulaCount: number
  hasData: boolean
  cellCount: number
  error: string | null
}

interface PageAlignmentFinding {
  pagePath: string
  linkedFile: string
  expectedSheets: string[] | null
  actualSheets: string[] | null
  aligned: boolean
  issues: string[]
}

interface UnitAuditOutput {
  linkReport: string
  workbookReport: string
  alignmentReport: string
  summary: string
}

const ROOT_DIR = path.resolve(__dirname, '../..')
const STUDENT_DIR = path.join(ROOT_DIR, 'src/app/student')
const RESOURCES_DIR = path.join(ROOT_DIR, 'public/resources')

function runWorkbookValidator(resourcesDir: string, unitPrefix: string): WorkbookValidationResult[] {
  try {
    const result = execSync(
      `python3 "${path.join(__dirname, 'workbook-validator.py')}" "${resourcesDir}" "${unitPrefix}"`,
      { encoding: 'utf-8', cwd: ROOT_DIR }
    )
    
    const results: WorkbookValidationResult[] = []
    const blocks = result.split('\n\n').filter(Boolean)
    
    for (const block of blocks) {
      const lines = block.split('\n').map(l => l.trim())
      if (lines.length < 2) continue
      
      const statusMatch = lines[0].match(/\[(OK|FAIL)\]\s+(.+)/)
      if (!statusMatch) continue
      
      const opens = statusMatch[1] === 'OK'
      const file = statusMatch[2]
      
      let sheetCount = 0
      let sheetNames: string[] = []
      let formulaCount = 0
      let hasFormulas = false
      
      for (const line of lines.slice(1)) {
        const sheetMatch = line.match(/^(\d+)\s+sheets?:\s*(.*)/)
        if (sheetMatch) {
          sheetCount = parseInt(sheetMatch[1], 10)
          sheetNames = sheetMatch[2] ? sheetMatch[2].split(', ').map(s => s.trim()) : []
        }
        
        const formulaMatch = line.match(/^(\d+)\s+formulas/)
        if (formulaMatch) {
          formulaCount = parseInt(formulaMatch[1], 10)
          hasFormulas = formulaCount > 0
        }
      }
      
      results.push({
        file,
        exists: opens,
        opens,
        sheetCount,
        sheetNames,
        hasFormulas,
        formulaCount,
        hasData: sheetCount > 0,
        cellCount: 0,
        error: null,
      })
    }
    
    return results
  } catch (error) {
    console.error('Workbook validator error:', error)
    return []
  }
}

function extractExpectedSheetsFromPage(pagePath: string, content: string): string[] | null {
  const expectedSheets: string[] = []
  
  const patterns = [
    /(?:sheet|tab|worksheet)\s+(?:named|called|titled|labelled|labeled)\s+["']([^"']+)["']/gi,
    /["']([^"']+)["']\s+(?:sheet|tab|worksheet)/gi,
    /create\s+(?:a\s+)?["']([^"']+)["']\s+(?:sheet|tab)/gi,
    /(?:sheet|tab)\s+["']([^"']+)["']/gi,
    /rename\s+(?:the\s+)?(?:sheet|tab)\s+(?:to\s+)?["']([^"']+)["']/gi,
    /["']([^"']+)["']\s+tab/gi,
  ]
  
  for (const pattern of patterns) {
    let match
    while ((match = pattern.exec(content)) !== null) {
      const name = match[1].trim()
      if (name.length > 1 && name.length < 50 && !name.includes('<') && !name.includes('>') && !name.includes('\n')) {
        if (!expectedSheets.includes(name)) {
          expectedSheets.push(name)
        }
      }
    }
  }
  
  return expectedSheets.length > 0 ? expectedSheets : null
}

function checkAlignment(
  links: XlsxLink[],
  existenceResults: ExistenceResult[],
  workbookResults: WorkbookValidationResult[],
): PageAlignmentFinding[] {
  const findings: PageAlignmentFinding[] = []
  const workbookMap = new Map<string, WorkbookValidationResult>()
  
  for (const wb of workbookResults) {
    workbookMap.set(wb.file, wb)
  }
  
  for (const result of existenceResults) {
    if (!result.exists) continue
    
    const wb = workbookMap.get(result.link.linkedFile)
    if (!wb || !wb.opens) continue
    
    const pageFullPath = path.join(ROOT_DIR, result.link.pagePath)
    if (!fs.existsSync(pageFullPath)) continue
    
    const content = fs.readFileSync(pageFullPath, 'utf-8')
    const expectedSheets = extractExpectedSheetsFromPage(result.link.pagePath, content)
    
    if (!expectedSheets) continue
    
    const issues: string[] = []
    const actualLower = wb.sheetNames.map(s => s.toLowerCase())
    
    for (const expected of expectedSheets) {
      if (!actualLower.includes(expected.toLowerCase())) {
        issues.push(`Missing expected sheet: '${expected}' (found: ${wb.sheetNames.join(', ')})`)
      }
    }
    
    findings.push({
      pagePath: result.link.pagePath,
      linkedFile: result.link.linkedFile,
      expectedSheets,
      actualSheets: wb.sheetNames,
      aligned: issues.length === 0,
      issues,
    })
  }
  
  return findings
}

function runAudit(unit: string): UnitAuditOutput {
  const unitDir = path.join(STUDENT_DIR, unit)
  const unitPrefix = unit
  
  console.log(`\n${'='.repeat(60)}`)
  console.log(`XLSX Audit: ${unit}`)
  console.log(`${'='.repeat(60)}\n`)
  
  // Phase 1.1: Link discovery
  console.log('Phase 1.1: Discovering .xlsx links...')
  const links = scanUnitPages(unitDir)
  console.log(`  Found ${links.length} .xlsx link(s) in ${unit} pages\n`)
  
  // Phase 1.2: Existence validation
  console.log('Phase 1.2: Validating link existence...')
  const existenceResults = validateExistence(links, RESOURCES_DIR)
  const missingLinks = existenceResults.filter(r => !r.exists)
  const validLinks = existenceResults.filter(r => r.exists)
  console.log(`  Valid: ${validLinks.length}, Missing: ${missingLinks.length}\n`)
  
  if (missingLinks.length > 0) {
    console.log('  MISSING FILES:')
    for (const m of missingLinks) {
      console.log(`    - ${m.link.linkedFile} (from ${m.link.pagePath})`)
    }
    console.log()
  }
  
  // Phase 1.3: Workbook content validation
  console.log('Phase 1.3: Validating workbook content...')
  const linkedFiles = [...new Set(links.map(l => l.linkedFile))]
  const workbookResults = runWorkbookValidator(RESOURCES_DIR, unitPrefix)
  console.log(`  Validated ${workbookResults.length} workbook(s)\n`)
  
  const workbookFailures = workbookResults.filter(w => !w.opens)
  if (workbookFailures.length > 0) {
    console.log('  WORKBOOK ERRORS:')
    for (const w of workbookFailures) {
      console.log(`    - ${w.file}: ${w.error}`)
    }
    console.log()
  }
  
  // Phase 1.4: Alignment check
  console.log('Phase 1.4: Checking workbook-page alignment...')
  const alignmentFindings = checkAlignment(links, existenceResults, workbookResults)
  const misaligned = alignmentFindings.filter(f => !f.aligned)
  console.log(`  Checked ${alignmentFindings.length} workbook-page pair(s)`)
  console.log(`  Aligned: ${alignmentFindings.length - misaligned.length}, Misaligned: ${misaligned.length}\n`)
  
  if (misaligned.length > 0) {
    console.log('  MISALIGNMENT ISSUES:')
    for (const m of misaligned) {
      console.log(`    - ${m.linkedFile} (from ${m.pagePath}):`)
      for (const issue of m.issues) {
        console.log(`      ${issue}`)
      }
    }
    console.log()
  }
  
  // Phase 1.5: Generate reports
  console.log('Phase 1.5: Generating reports...\n')
  
  const unitReport = generateUnitReport(unit, existenceResults)
  const linkReport = formatReportAsMarkdown(unitReport)
  
  // Build workbook report
  const workbookReportLines = [
    `# Workbook Content Report: ${unit}`,
    ``,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `## Summary`,
    ``,
    `- **Total workbooks scanned**: ${workbookResults.length}`,
    `- **Workbooks that open**: ${workbookResults.filter(w => w.opens).length}`,
    `- **Workbooks with errors**: ${workbookResults.filter(w => !w.opens).length}`,
    `- **Workbooks with formulas**: ${workbookResults.filter(w => w.hasFormulas).length}`,
    ``,
  ]
  
  if (workbookResults.length > 0) {
    workbookReportLines.push('## Workbook Details', '')
    workbookReportLines.push('| File | Sheets | Formulas | Status |', '|------|--------|----------|--------|')
    for (const w of workbookResults) {
      const status = w.opens ? 'OK' : `FAIL: ${w.error}`
      const sheets = w.opens ? `${w.sheetCount} (${w.sheetNames.join(', ')})` : 'N/A'
      const formulas = w.hasFormulas ? `${w.formulaCount}` : 'None'
      workbookReportLines.push(`| ${w.file} | ${sheets} | ${formulas} | ${status} |`)
    }
    workbookReportLines.push('')
  }
  
  const workbookReport = workbookReportLines.join('\n')
  
  // Build alignment report
  const alignmentReportLines = [
    `# Workbook-Page Alignment Report: ${unit}`,
    ``,
    `Generated: ${new Date().toISOString()}`,
    ``,
    `## Summary`,
    ``,
    `- **Pairs checked**: ${alignmentFindings.length}`,
    `- **Aligned**: ${alignmentFindings.filter(f => f.aligned).length}`,
    `- **Misaligned**: ${alignmentFindings.filter(f => !f.aligned).length}`,
    ``,
  ]
  
  if (alignmentFindings.length > 0) {
    alignmentReportLines.push('## Alignment Details', '')
    for (const f of alignmentFindings) {
      const status = f.aligned ? 'Aligned' : 'Misaligned'
      alignmentReportLines.push(`### ${f.linkedFile}`, '')
      alignmentReportLines.push(`- **Page**: \`${f.pagePath}\``)
      alignmentReportLines.push(`- **Status**: ${status}`)
      alignmentReportLines.push(`- **Expected sheets**: ${f.expectedSheets?.join(', ') || 'None specified'}`)
      alignmentReportLines.push(`- **Actual sheets**: ${f.actualSheets?.join(', ') || 'N/A'}`)
      if (f.issues.length > 0) {
        alignmentReportLines.push(`- **Issues**:`)
        for (const issue of f.issues) {
          alignmentReportLines.push(`  - ${issue}`)
        }
      }
      alignmentReportLines.push('')
    }
  }
  
  const alignmentReport = alignmentReportLines.join('\n')
  
  // Build summary
  const summary = [
    `## ${unit} Audit Summary`,
    ``,
    `- Links discovered: ${links.length}`,
    `- Links valid: ${validLinks.length}`,
    `- Links missing: ${missingLinks.length}`,
    `- Workbooks scanned: ${workbookResults.length}`,
    `- Workbooks OK: ${workbookResults.filter(w => w.opens).length}`,
    `- Workbooks with errors: ${workbookResults.filter(w => !w.opens).length}`,
    `- Alignment pairs checked: ${alignmentFindings.length}`,
    `- Alignment issues: ${misaligned.length}`,
    ``,
  ].join('\n')
  
  return {
    linkReport,
    workbookReport,
    alignmentReport,
    summary,
  }
}

// Main execution
const unit = process.argv[2]
if (!unit) {
  console.error('Usage: npx tsx scripts/audit/run-audit.ts <unit>')
  console.error('Example: npx tsx scripts/audit/run-audit.ts unit01')
  process.exit(1)
}

const output = runAudit(unit)

// Write reports to output directory
const outputDir = path.join(ROOT_DIR, 'output', 'audit', unit)
fs.mkdirSync(outputDir, { recursive: true })

fs.writeFileSync(path.join(outputDir, 'link-report.md'), output.linkReport)
fs.writeFileSync(path.join(outputDir, 'workbook-report.md'), output.workbookReport)
fs.writeFileSync(path.join(outputDir, 'alignment-report.md'), output.alignmentReport)
fs.writeFileSync(path.join(outputDir, 'summary.md'), output.summary)

console.log(output.summary)
console.log(`Reports written to: ${outputDir}`)
console.log(`  - link-report.md`)
console.log(`  - workbook-report.md`)
console.log(`  - alignment-report.md`)
console.log(`  - summary.md`)
