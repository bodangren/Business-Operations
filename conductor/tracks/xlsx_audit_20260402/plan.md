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
- [ ] 2.1 Run link discovery for Unit 02 pages
- [ ] 2.2 Validate `.xlsx` link existence for Unit 02
- [ ] 2.3 Validate workbook structure/content expectations for Unit 02 links
- [ ] 2.4 Compare workbook layout to page examples when present
- [ ] 2.5 Publish Unit 02 findings report

### Phase 3: Unit 03 Audit
- [ ] 3.1 Run link discovery for Unit 03 pages
- [ ] 3.2 Validate `.xlsx` link existence for Unit 03
- [ ] 3.3 Validate workbook structure/content expectations for Unit 03 links
- [ ] 3.4 Compare workbook layout to page examples when present
- [ ] 3.5 Publish Unit 03 findings report

### Phase 4: Unit 04 Audit
- [ ] 4.1 Run link discovery for Unit 04 pages
- [ ] 4.2 Validate `.xlsx` link existence for Unit 04
- [ ] 4.3 Validate workbook structure/content expectations for Unit 04 links
- [ ] 4.4 Compare workbook layout to page examples when present
- [ ] 4.5 Publish Unit 04 findings report

### Phase 5: Unit 05 Audit
- [ ] 5.1 Run link discovery for Unit 05 pages
- [ ] 5.2 Validate `.xlsx` link existence for Unit 05
- [ ] 5.3 Validate workbook structure/content expectations for Unit 05 links
- [ ] 5.4 Compare workbook layout to page examples when present
- [ ] 5.5 Publish Unit 05 findings report

### Phase 6: Unit 06 Audit
- [ ] 6.1 Run link discovery for Unit 06 pages
- [ ] 6.2 Validate `.xlsx` link existence for Unit 06
- [ ] 6.3 Validate workbook structure/content expectations for Unit 06 links
- [ ] 6.4 Compare workbook layout to page examples when present
- [ ] 6.5 Publish Unit 06 findings report

### Phase 7: Unit 07 Audit
- [ ] 7.1 Run link discovery for Unit 07 pages
- [ ] 7.2 Validate `.xlsx` link existence for Unit 07
- [ ] 7.3 Validate workbook structure/content expectations for Unit 07 links
- [ ] 7.4 Compare workbook layout to page examples when present
- [ ] 7.5 Publish Unit 07 findings report

### Phase 8: Unit 08 Audit
- [ ] 8.1 Run link discovery for Unit 08 pages
- [ ] 8.2 Validate `.xlsx` link existence for Unit 08
- [ ] 8.3 Validate workbook structure/content expectations for Unit 08 links
- [ ] 8.4 Compare workbook layout to page examples when present
- [ ] 8.5 Publish Unit 08 findings report

### Phase 9: Consolidation and Remediation Backlog
- [ ] 9.1 Merge per-unit findings into one consolidated report
- [ ] 9.2 Prioritize findings by severity (critical/high/medium)
- [ ] 9.3 Generate fix-ready backlog items with source references
- [ ] 9.4 Run final verification pass on audit tooling and outputs
- [ ] 9.5 Confirm final workbook checks were executed under spreadsheet skill guidance
- [ ] 9.6 Present completion summary and recommended implementation order
