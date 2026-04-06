# Current Directive

**Updated:** 2026-04-07
**Status:** Code review complete — 2 tracks audited, 1 M-level fix applied

## What Was Just Completed

- **Code review** audited 2 tracks (`fix_ts_test_errors_20260406`, `consolidate_phase_names_20260407`)
  - Fixed M-level: removed misleading `as unknown as` cast in alias equivalence test
  - Noted 2 low-severity items: orphan `"finance"` TopicTag, 5 lesson-data files coupled to React context

## Verification

- Tests: 256 passed (20 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: compiled successfully (603 pages)

## Next Priorities

1. **Add PHASE_ICONS fallback** — type the config as `Record<LessonPhaseName, ...>` or add defensive fallback in consumers (tech-debt.md L22 follow-up)
2. **`useUnitMastery` hook test coverage** — only pure helper is tested, hook itself has no coverage (tech-debt.md L20)
3. **`masteryColor` thresholds alignment** — 75/50 don't align with `proficiency_band` thresholds (85/60/30) (tech-debt.md L19)
4. **Migrate 5 lesson-data imports** — move from `LessonProgressContext` to `@/types/lesson` (tech-debt.md L18, low priority)
5. **Resolve orphan `"finance"` TopicTag** — either add glossary entries or fix test mock (tech-debt.md L17, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
