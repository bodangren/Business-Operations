# Consolidated XLSX Audit Report

Generated: 2026-04-03T01:41:40.519Z

## Executive Summary

This report consolidates findings from auditing all 8 units of the Business Operations curriculum.
The audit scanned student lesson pages for .xlsx links, verified file existence, validated workbook
structure and content, and checked alignment between page instructions and workbook layouts.

## Per-Unit Summary

| Unit | Links Found | Links Valid | Links Missing | Workbooks OK | Workbook Errors | Alignment Issues |
|------|-------------|-------------|---------------|--------------|-----------------|------------------|
| unit01 | 4 | 4 | 0 | 22 | 0 | 0 |
| unit02 | 6 | 6 | 0 | 14 | 0 | 0 |
| unit03 | 1 | 1 | 0 | 15 | 0 | 0 |
| unit04 | 1 | 1 | 0 | 16 | 0 | 0 |
| unit05 | 1 | 1 | 0 | 16 | 0 | 0 |
| unit06 | 2 | 2 | 0 | 23 | 0 | 0 |
| unit07 | 6 | 6 | 0 | 15 | 0 | 0 |
| unit08 | 4 | 4 | 0 | 24 | 0 | 0 |

## Totals

- **Total links discovered**: 25
- **Total missing links**: 0
- **Total workbooks validated**: 145
- **Total alignment issues**: 0

## Prioritized Remediation List

No findings. All links valid and aligned.

## Recommendations

3. **Expand link discovery coverage** - The current scanner detects explicit href patterns.
   - Dynamic/interpolated links (e.g., `unit08-group${i + 1}-fixed-assets.xlsx`) need manual review
   - Consider adding data-driven link extraction for lessons with group-based workbooks

4. **Add alignment assertions to page content** - Pages should explicitly reference expected sheet names
   to enable automated alignment checking.
