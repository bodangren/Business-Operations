# Current Directive

**Updated:** 2026-04-07
**Status:** Code-review audit of 3 tracks complete — fixed 2 M-level issues (props mutation, misleading test)

## What Was Just Completed

- **Audit of `consolidate_phase_names`, `phase_icons_fallback`, `use_unit_mastery_tests`** — 3 tracks reviewed
- **M1 fix:** `StudentLessonOverview.tsx` was mutating `phases` prop via `.sort()` — changed to `[...phases].sort()` to match PhaseHeader/PhaseFooter
- **M2 fix:** `useUnitMastery.hook.test.ts` had misleading test name + dead comments — renamed to match actual assertion

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
