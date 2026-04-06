# Current Directive

**Updated:** 2026-04-06
**Status:** Code review complete — 2 tracks audited, no regressions found

## Active Track

None — ready for next track.

## What Was Just Completed

- **Header unit data from canonical sources** (track: `header_unit_data_20260406`)
  - Created `src/data/unit-registry.ts` — single source of truth for unit metadata
  - Refactored `header.tsx` to derive nav items from registry (removed 21-line hardcoded arrays)
  - Refactored `index-records.ts` `unitPages` to derive from registry
  - Tests: 227 passed (16 suites), 6 new unit-registry tests
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully (603+ pages)

- **Practice-test page LessonPhase migration** (track: `practice_test_lessonphase_20260406`)
  - Migrated 8 practice-test pages from `@/components/student/PhaseHeader` re-export to direct `@/types/lesson` import
  - Tests: 227 passed (16 suites)
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully (603+ pages)

## Verification

- Tests: 227 passed (16 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Unit data duplication in lesson-data files** — all 8 units repeat `unitXXData` across 10 lesson-data files; should derive from `unit-registry.ts` or canonical `src/data/unitXX.ts` (broadens existing unit07 tech-debt item)
2. **Non-standard phase names** — 5 lesson-data files cast non-standard names (`as LessonPhase`); should extend the union or use a project-specific type
3. **Multiple lockfile warning** — set `outputFileTracingRoot` or clean up root lockfile
4. **Lesson-level index entries still hardcoded** — `index-records.ts` `lessonPages` array has 80 manually maintained entries; derive from lesson-data files for single-source-of-truth
5. **Unit 01 title inconsistency** — lesson-data files use `"Unit 1: Smart Ledger Launch"` while canonical `unit01.ts` has `"Smart Ledger Launch"`; resolve as part of unit-data dedup track

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
