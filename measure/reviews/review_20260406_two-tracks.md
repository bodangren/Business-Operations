# Code Review: Practice-test LessonPhase Migration + Header Unit Data

**Date:** 2026-04-06
**Tracks audited:** `practice_test_lessonphase_20260406`, `header_unit_data_20260406`
**Commits:** `449dda6..699db87`

## Summary

Audited the 2 most recently completed tracks (since last review `review_20260406_three-tracks.md`). Both tracks completed their stated objectives correctly with no regressions. Found 0 high/critical issues, 3 medium-severity pre-existing issues, and 2 low-severity doc issues (fixed).

## Issues Found & Fixed

### L-1 (Fixed) — current_directive.md stale priorities
- "Next Priorities" item 1 ("Header unit data hardcoded") was already completed by `header_unit_data_20260406`
- Duplicate "What Was Just Completed" section headers
- Verification numbers outdated (221 vs 227 tests)
- **Fix:** Rewrote directive with correct priorities and consolidated sections

### L-2 (Fixed) — tech-debt.md scope narrow on unit-data duplication
- Listed only unit07 but all 8 units have the same duplication pattern (80 copies total)
- **Fix:** Broadened entry to cover all units, added unit01 title inconsistency and lessonPages hardcoding

## Issues Recorded (Not Fixed — Pre-existing Tech Debt)

### M-1 — Unit data objects duplicated across 80 lesson-data files
- Every unit's 10 lesson-data files repeat `unitXXData = { id, title, sequence }` identically
- The canonical `src/data/unitXX.ts` files and new `unit-registry.ts` already hold this data
- Should derive lesson-data unit refs from registry in a future track
- Added to tech-debt.md

### M-2 — Unit 01 title inconsistency
- Lesson-data files: `"Unit 1: Smart Ledger Launch"`
- Canonical `unit01.ts`: `"Smart Ledger Launch"`
- Other units are consistent (no "Unit N: " prefix in lesson-data titles)
- Not a regression; recorded for unit-data dedup track

### M-3 — lessonPages in index-records.ts still hardcoded
- `unitPages` was migrated to use UNITS registry, but `lessonPages` remains a manual 80-entry array
- Any lesson rename requires updating both the lesson-data file and index-records.ts
- Added to tech-debt.md for future track

## Clean Findings (No Issues)

- **unit-registry.ts:** All 8 imports, titles, and descriptions match canonical `unitXX.ts` files
- **index-records.ts unitPages:** Correctly derived from UNITS registry
- **PhaseHeader/PhaseFooter:** Correct backward-compat re-exports, proper `LessonRef`/`UnitRef` typed props
- **Practice-test data:** All 8 files use canonical `LessonPhaseName` values (Hook through Closing)
- **Import migration:** Zero remaining `LessonPhase` type imports from PhaseHeader in practice-test pages
- **Test suite:** 227 passed (16 suites), 0 failures

## Verification

- Tests: 227 passed (16 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors, 0 warnings
