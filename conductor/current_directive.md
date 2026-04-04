# Current Directive

**Updated:** 2026-04-05
**Status:** Phase 3 complete — all 227 no-explicit-any warnings eliminated

## Active Track

`eslint_warning_cleanup_20260405` — Phase 4: Fix React hooks rules (~7 warnings)

## What Was Just Completed

- **Phase 3: no-explicit-any cleanup** (227 warnings → 0)
- Added index signatures to PhaseHeader/PhaseFooter props to accept lesson-data objects without `as any` casts (removed 70+ casts)
- Typed all component props properly: charts, business simulations, accounting, teacher components
- Imported shared types (`DailyLesson`, `LessonActivity`) from `@/types/lesson-plan`
- Widened `ReflectionJournal` category type to `string` for flexibility
- Used `Record<string, unknown>` for JSON deserialization in `LessonProgressContext`
- Commit: `f2496c6` — 67 files changed, 155 insertions, 139 deletions

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors, 7 warnings (all react-hooks rules, deferred to Phase 4)

## Next Priorities

1. **ESLint Phase 4: React hooks rules** — ~7 hooks-related warnings (exhaustive-deps, rules-of-hooks)
2. **Dead-code removal pass** — Multiple `_`-prefixed dead functions across business-simulations and lesson pages
3. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
4. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
