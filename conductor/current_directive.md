# Current Directive

**Updated:** 2026-04-06
**Status:** Code review audit complete — 5 M-level issues fixed, 5 L-level recorded

## Active Track

None — ready for next track.

## What Was Just Completed

- **Code review audit** (review: `review_20260406_three-tracks.md`)
  - Audited 3 tracks: ESLint CLI migration, mastery progress bars, type consolidation
  - Fixed 5 medium-severity issues:
    - M-1: `eslint-config-next` version aligned to `^15.5.2`
    - M-2: `UnitMasteryProgressBar` missing ARIA `role="progressbar"` + value attributes
    - M-3: `UNIT_TERM_COUNTS` consolidated into single export from `StudyDataContext.tsx`
    - M-4: Duplicate `LessonPhase` interfaces replaced with canonical imports in `StudentLessonOverview.tsx` and `TeacherLessonPlan.tsx`
    - M-5: `LessonProgressContext.tsx` renamed `LessonPhase` → `LessonProgressPhaseName` to avoid collision
  - Recorded 5 low-severity items in tech-debt.md
  - Tests: 221 passed (15 suites)
  - Lint: 0 errors, 0 warnings
  - Build: compiled successfully (603+ pages)

## Verification

- Tests: 221 passed (15 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Practice-test page LessonPhase migration** — move 8 practice-test pages from `PhaseHeader` re-export to direct `@/types/lesson` import
2. **Header unit data hardcoded** — `header.tsx` unit names are hardcoded; derive from canonical sources
3. **Unit 7 `unit07Data` duplication** — shared import across lesson-data files
4. **Non-standard phase names** — 5 lesson-data files cast non-canonical names (`as LessonPhase`); should extend the union or use a project-specific type
5. **Multiple lockfile warning** — set `outputFileTracingRoot` or clean up root lockfile

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
