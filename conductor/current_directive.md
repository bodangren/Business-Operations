# Current Directive

**Updated:** 2026-04-06
**Status:** Practice-test LessonPhase migration complete — 8 pages migrated to canonical import

## Active Track

Track: `header_unit_data_20260406` — Derive header and index-records unit metadata from canonical unitXX.ts data

## What Was Just Completed

- **Practice-test page LessonPhase migration** (track: `practice_test_lessonphase_20260406`)
  - Migrated 8 practice-test pages from `@/components/student/PhaseHeader` re-export to direct `@/types/lesson` import
  - Tests: 221 passed (15 suites)
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully (603+ pages)

## Verification

- Tests: 221 passed (15 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Header unit data hardcoded** — `header.tsx` unit names are hardcoded; derive from canonical sources
2. **Unit 7 `unit07Data` duplication** — shared import across lesson-data files
3. **Non-standard phase names** — 5 lesson-data files cast non-standard names (`as LessonPhase`); should extend the union or use a project-specific type
4. **Multiple lockfile warning** — set `outputFileTracingRoot` or clean up root lockfile

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
