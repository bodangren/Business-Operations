# Current Directive

**Updated:** 2026-04-06
**Status:** lessonPages derivation complete — shared registry created, index-records.ts simplified

## Active Track

None — ready for next track.

## What Was Just Completed

- **Derive lessonPages from lesson-data files** (`lesson_pages_derive_20260406`)
  - Created `src/data/lesson-registry.ts` with 80 aliased static imports
  - Replaced 90-line hardcoded array in `index-records.ts` with single `LESSON_PAGES` import
  - Added 8 new tests (spot-checks title accuracy, ordering, coverage)
  - All 255 tests pass, ESLint clean, build succeeds

## What Was Just Completed

- **Code review** of 2 tracks: `unit_data_dedup_20260406` and `phase_names_20260406`
  - Fixed M-1: `StudentLessonOverview.tsx` phase link used `unit0${n}` instead of `padStart(2, '0')`
  - Recorded 3 low-severity items in tech-debt.md (phaseIcons duplication, dual phase name unions, 13 pre-existing TS errors in test files)
  - All tracks implemented correctly; no regressions

## Verification

- Tests: 241 passed (18 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Extract shared `phaseIcons` constant** — duplicated in PhaseHeader, PhaseFooter, StudentLessonOverview; every new phase requires 3-file update
2. **Derive `lessonPages` from lesson-data files** — `index-records.ts` has 80 manually maintained entries; single-source-of-truth violation
3. **Fix 13 pre-existing TS errors in test files** — `readonly`/mutable mismatches, invalid `TopicTag` literals, export schema drift
4. **Consolidate phase name unions** — `LessonPhaseName` and `LessonProgressPhaseName` should share a single canonical definition

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
