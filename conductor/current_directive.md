# Current Directive

**Updated:** 2026-04-07
**Status:** `masteryColor` thresholds aligned to `proficiencyBand` — 4-tier color now matches 4 proficiency bands

## What Was Just Completed

- **`masteryColor` thresholds alignment** — changed from 75/50 (3 tiers) to 85/60/30 (4 tiers) matching `proficiencyBand` bands (strong/proficient/developing/new)
- Added `bg-orange-500` for the developing band, 4 new unit tests in `derived.test.ts`

## Verification

- Tests: 274 passed (21 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **Migrate 5 lesson-data imports** — move from `LessonProgressContext` to `@/types/lesson` (tech-debt.md L19, low priority)
2. **Resolve orphan `"finance"` TopicTag** — either add glossary entries or fix test mock (tech-debt.md L18, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
