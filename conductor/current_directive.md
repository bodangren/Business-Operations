# Current Directive

**Updated:** 2026-04-07
**Status:** Phase name consolidation complete — `LessonProgressPhaseName` is now an alias of `LessonPhaseName`

## Active Track

None — ready for next track.

## What Was Just Completed

- **Consolidate phase name unions** (`consolidate_phase_names_20260407`)
  - `LessonProgressContext.tsx` now imports `LessonPhaseName` from `@/types/lesson` and re-exports as `LessonProgressPhaseName`
  - Added bidirectional assignability test to verify alias equivalence
  - 5 lesson-data files continue to work unchanged (backward-compat re-export)

## Verification

- Tests: 256 passed (20 suites) — added 1 new test
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **Add PHASE_ICONS fallback** — type the config as `Record<LessonPhaseName, ...>` or add defensive fallback in consumers (tech-debt.md L22 follow-up)
2. **`useUnitMastery` hook test coverage** — only pure helper is tested, hook itself has no coverage (tech-debt.md L20)
3. **`masteryColor` thresholds alignment** — 75/50 don't align with `proficiency_band` thresholds (85/60/30) (tech-debt.md L19)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
