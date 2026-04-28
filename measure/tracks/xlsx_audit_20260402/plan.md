# Implementation Plan: XLSX Link and Workbook Integrity Audit

## Track ID: xlsx_audit_20260402

### Phase 0: Audit Harness Setup
- [x] 0.1 Load required spreadsheet skill and record usage scope
  - Skill path: `~/Desktop/Business-Operations/.agents/skills/spreadsheet/SKILL.md`
  - Confirmed workbook validation approach uses openpyxl for read-only inspection
- [x] 0.2 Define audit output format (per-unit report + consolidated summary)
  - Per-unit: link-report.md, workbook-report.md, alignment-report.md, summary.md
  - Consolidated: merged markdown report with critical findings and per-unit summary table
- [x] 0.3 Write failing tests for link extraction and workbook existence checks
  - 16 tests covering static/basePath/variable link extraction, existence validation, report generation, markdown formatting
  - Coverage: 82.17% (above 80% threshold)
- [x] 0.4 Implement initial scanner for student page `.xlsx` links
  - `scripts/audit/xlsx-scanner.ts`: extractLinksFromFile, scanUnitPages, findPageFiles
  - Supports static href, withBasePath, variable-backed, and dynamic link patterns
- [x] 0.5 Implement existence validator for linked workbook files
  - `scripts/audit/xlsx-scanner.ts`: validateExistence resolves links against public/resources/
  - `scripts/audit/workbook-validator.py`: openpyxl-based workbook structure inspection (read-only)
  - `scripts/audit/run-audit.ts`: combined audit runner orchestrating all checks
- [x] 0.6 Verify tests pass and coverage for scanner core
  - `npx vitest run --coverage`: 16/16 tests passing, 82.17% coverage

### Phase 1: Unit 01 Audit
- [x] 1.1 Run link discovery for Unit 01 pages
  - Found 4 .xlsx links across Unit 01 student pages
- [x] 1.2 Validate `.xlsx` link existence for Unit 01
  - 3 valid, 1 missing: `unit01-lesson05-checkpoint.xlsx` referenced from `unit01/lesson06/phase-4/page.tsx`
- [x] 1.3 Validate workbook structure/content expectations for Unit 01 links
  - All 21 Unit 01 workbooks open successfully
  - 12 workbooks contain formulas, 9 are data-only (exit tickets, practice sheets)
  - Standard sheet structure: Journal + TrialBalance for lesson workbooks, Exit Ticket for assessments
- [x] 1.4 Compare workbook layout to page examples when present
  - 0 explicit sheet name references found in Unit 01 page content matching expected patterns
  - No misalignment issues detected
- [x] 1.5 Publish Unit 01 findings report
  - Reports written to `output/audit/unit01/`: link-report.md, workbook-report.md, alignment-report.md, summary.md
  - Critical finding: `unit01-lesson05-checkpoint.xlsx` is missing from public/resources/

### Phase 2: Unit 02 Audit
- [x] 2.1 Run link discovery for Unit 02 pages
  - Found 6 .xlsx links across Unit 02 student pages
- [x] 2.2 Validate `.xlsx` link existence for Unit 02
  - All 6 links valid, no missing files
- [x] 2.3 Validate workbook structure/content expectations for Unit 02 links
  - All 14 Unit 02 workbooks open successfully
- [x] 2.4 Compare workbook layout to page examples when present
  - 2 workbook-page pairs checked, 2 misaligned
  - unit02-lesson05-student.xlsx and unit02-lesson05-teacher.xlsx missing expected 'Inputs' sheet (found: Summary, Adjustments)
- [x] 2.5 Publish Unit 02 findings report
  - Reports written to `output/audit/unit02/`

### Phase 3: Unit 03 Audit
- [x] 3.1 Run link discovery for Unit 03 pages
  - Found 1 .xlsx link
- [x] 3.2 Validate `.xlsx` link existence for Unit 03
  - Link valid
- [x] 3.3 Validate workbook structure/content expectations for Unit 03 links
  - All 15 Unit 03 workbooks open successfully
- [x] 3.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 3.5 Publish Unit 03 findings report
  - Reports written to `output/audit/unit03/`

### Phase 4: Unit 04 Audit
- [x] 4.1 Run link discovery for Unit 04 pages
  - Found 1 .xlsx link
- [x] 4.2 Validate `.xlsx` link existence for Unit 04
  - 1 missing: `unit04-cafe-rehearsal.xlsx` referenced from `unit04/lesson07/phase-2/page.tsx`
- [x] 4.3 Validate workbook structure/content expectations for Unit 04 links
  - All 15 Unit 04 workbooks open successfully
- [x] 4.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 4.5 Publish Unit 04 findings report
  - Reports written to `output/audit/unit04/`
  - Critical finding: `unit04-cafe-rehearsal.xlsx` is missing

### Phase 5: Unit 05 Audit
- [x] 5.1 Run link discovery for Unit 05 pages
  - Found 1 .xlsx link
- [x] 5.2 Validate `.xlsx` link existence for Unit 05
  - Link valid
- [x] 5.3 Validate workbook structure/content expectations for Unit 05 links
  - All 16 Unit 05 workbooks open successfully
- [x] 5.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 5.5 Publish Unit 05 findings report
  - Reports written to `output/audit/unit05/`

### Phase 6: Unit 06 Audit
- [x] 6.1 Run link discovery for Unit 06 pages
  - Found 2 .xlsx links
- [x] 6.2 Validate `.xlsx` link existence for Unit 06
  - Both links valid
- [x] 6.3 Validate workbook structure/content expectations for Unit 06 links
  - All 23 Unit 06 workbooks open successfully
- [x] 6.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 6.5 Publish Unit 06 findings report
  - Reports written to `output/audit/unit06/`

### Phase 7: Unit 07 Audit
- [x] 7.1 Run link discovery for Unit 07 pages
  - Found 6 .xlsx links
- [x] 7.2 Validate `.xlsx` link existence for Unit 07
  - All 6 links valid
- [x] 7.3 Validate workbook structure/content expectations for Unit 07 links
  - All 15 Unit 07 workbooks open successfully
- [x] 7.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 7.5 Publish Unit 07 findings report
  - Reports written to `output/audit/unit07/`

### Phase 8: Unit 08 Audit
- [x] 8.1 Run link discovery for Unit 08 pages
  - Found 4 .xlsx links
- [x] 8.2 Validate `.xlsx` link existence for Unit 08
  - 1 valid, 3 missing:
    - `unit08-asset-register-starter.xlsx` (from `unit08/lesson05/phase-4/page.tsx`)
    - `unit08-rehearsal-workbook.xlsx` (from `unit08/lesson07/phase-2/page.tsx`)
    - `unit08-group${i + 1}-fixed-assets.xlsx` (dynamic interpolated link from `unit08/lesson09/phase-1/page.tsx`)
- [x] 8.3 Validate workbook structure/content expectations for Unit 08 links
  - All 15 Unit 08 workbooks open successfully
- [x] 8.4 Compare workbook layout to page examples when present
  - No explicit sheet name references found
- [x] 8.5 Publish Unit 08 findings report
  - Reports written to `output/audit/unit08/`
  - Critical finding: 3 missing files, including dynamic group workbook link

### Phase 9: Consolidation and Remediation Backlog
- [x] 9.1 Merge per-unit findings into one consolidated report
  - `output/audit/consolidated/consolidated-report.md`
- [x] 9.2 Prioritize findings by severity (critical/high/medium)
  - 5 critical (missing files), 2 high (alignment mismatches), 0 medium
- [x] 9.3 Generate fix-ready backlog items with source references
  - All findings include page paths and filenames for direct remediation
- [x] 9.4 Run final verification pass on audit tooling and outputs
  - All 8 units audited, reports generated, consolidated summary complete
- [x] 9.5 Confirm final workbook checks were executed under spreadsheet skill guidance
  - Used openpyxl for read-only workbook inspection per spreadsheet skill
- [x] 9.6 Present completion summary and recommended implementation order
  - See consolidated report for prioritized remediation list

---

## Track Status: COMPLETE

All phases complete. 8 units audited, 134 workbooks validated, 5 critical and 2 high findings documented.
