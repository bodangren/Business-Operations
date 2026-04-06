# Current Directive

**Updated:** 2026-04-07
**Status:** useUnitMastery hook test coverage complete — 5 new tests, 270 total passing

## What Was Just Completed

- **Track `use_unit_mastery_tests_20260407`** — added `@testing-library/react`, wrote 5 hook tests for `useUnitMastery` covering loaded state, empty data, unit scoping, outside-provider error, and reactive unitId changes

## Verification

- Tests: 270 passed (21 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **`masteryColor` thresholds alignment** — 75/50 don't align with `proficiency_band` thresholds (85/60/30) (tech-debt.md L21)
2. **Migrate 5 lesson-data imports** — move from `LessonProgressContext` to `@/types/lesson` (tech-debt.md L19, low priority)
3. **Resolve orphan `"finance"` TopicTag** — either add glossary entries or fix test mock (tech-debt.md L18, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
