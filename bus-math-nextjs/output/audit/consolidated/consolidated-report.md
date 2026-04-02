# Consolidated XLSX Audit Report

Generated: 2026-04-02T23:59:08.986Z

## Executive Summary

This report consolidates findings from auditing all 8 units of the Business Operations curriculum.
The audit scanned student lesson pages for .xlsx links, verified file existence, validated workbook
structure and content, and checked alignment between page instructions and workbook layouts.

## Per-Unit Summary

| Unit | Links Found | Links Valid | Links Missing | Workbooks OK | Workbook Errors | Alignment Issues |
|------|-------------|-------------|---------------|--------------|-----------------|------------------|
| unit01 | 4 | 3 | 1 | 21 | 0 | 0 |
| unit02 | 6 | 6 | 0 | 14 | 0 | 2 |
| unit03 | 1 | 1 | 0 | 15 | 0 | 0 |
| unit04 | 1 | 0 | 1 | 15 | 0 | 0 |
| unit05 | 1 | 1 | 0 | 16 | 0 | 0 |
| unit06 | 2 | 2 | 0 | 23 | 0 | 0 |
| unit07 | 6 | 6 | 0 | 15 | 0 | 0 |
| unit08 | 4 | 1 | 3 | 15 | 0 | 0 |

## Totals

- **Total links discovered**: 25
- **Total missing links**: 5
- **Total workbooks validated**: 134
- **Total alignment issues**: 2

## Prioritized Remediation List

### Critical (Missing Files)

These files are referenced in student pages but do not exist in `public/resources/`.
Students clicking these links will get 404 errors.

| Unit | Missing File | Referenced From |
|------|-------------|-----------------|
| unit01 | `unit01-lesson05-checkpoint.xlsx` | `src/app/student/unit01/lesson06/phase-4/page.tsx` |
| unit04 | `unit04-cafe-rehearsal.xlsx` | `src/app/student/unit04/lesson07/phase-2/page.tsx` |
| unit08 | `unit08-asset-register-starter.xlsx` | `src/app/student/unit08/lesson05/phase-4/page.tsx` |
| unit08 | `unit08-rehearsal-workbook.xlsx` | `src/app/student/unit08/lesson07/phase-2/page.tsx` |
| unit08 | `unit08-group${i + 1}-fixed-assets.xlsx` | `src/app/student/unit08/lesson09/phase-1/page.tsx` |

### High (Alignment Mismatches)

These workbooks exist but their sheet structure does not match page instructions.

| Unit | Workbook | Issue |
|------|----------|-------|
| unit02 | `unit02-lesson05-student.xlsx` | Missing expected sheet: 'Inputs' (found: Summary, Adjustments) |
| unit02 | `unit02-lesson05-teacher.xlsx` | Missing expected sheet: 'Inputs' (found: Summary, Adjustments) |

## Recommendations

1. **Create missing workbook files** - Critical priority. Students cannot complete lessons without these workbooks.
   - Review lesson content to determine required workbook structure
   - Create student and teacher versions where applicable

2. **Fix workbook-page alignment** - High priority. Mismatched sheet names confuse students following instructions.
   - Either update workbook sheet names to match page instructions
   - Or update page instructions to match actual workbook structure

3. **Expand link discovery coverage** - The current scanner detects explicit href patterns.
   - Dynamic/interpolated links (e.g., `unit08-group${i + 1}-fixed-assets.xlsx`) need manual review
   - Consider adding data-driven link extraction for lessons with group-based workbooks

4. **Add alignment assertions to page content** - Pages should explicitly reference expected sheet names
   to enable automated alignment checking.
