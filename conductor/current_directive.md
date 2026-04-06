# Current Directive

**Updated:** 2026-04-07
**Status:** PHASE_ICONS fallback track complete — types tightened, defensive helpers added

## What Was Just Completed

- **Track `phase_icons_fallback_20260407`** — tightened `PHASE_ICONS`/`PHASE_COLORS`/`PHASE_DESCRIPTIONS` from `Record<string>` to `Record<LessonPhaseName>`, added `getPhaseIcon`/`getPhaseColor`/`getPhaseDescription` helpers with fallbacks, updated 3 consumer components (PhaseHeader, PhaseFooter, StudentLessonOverview)

## Verification

- Tests: 265 passed (20 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **`useUnitMastery` hook test coverage** — only pure helper is tested, hook itself has no coverage (tech-debt.md L22)
2. **`masteryColor` thresholds alignment** — 75/50 don't align with `proficiency_band` thresholds (85/60/30) (tech-debt.md L21)
3. **Migrate 5 lesson-data imports** — move from `LessonProgressContext` to `@/types/lesson` (tech-debt.md L19, low priority)
4. **Resolve orphan `"finance"` TopicTag** — either add glossary entries or fix test mock (tech-debt.md L18, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
