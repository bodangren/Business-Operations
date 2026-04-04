# Current Directive

**Updated:** 2026-04-05
**Status:** Phase 5 complete — all ESLint warnings eliminated (571 → 0)

## Active Track

`eslint_warning_cleanup_20260405` — COMPLETE

## What Was Just Completed

- **Phase 4: React hooks rules** (7 warnings → 0)
  - Renamed `useCredit` → `handleUseCredit` in CashFlowChallenge (false positive: `useCallback` named `use*` triggered rules-of-hooks in onClick handlers)
  - Moved `completeSales` before `simulateSales` in LemonadeStand, added to exhaustive-deps
  - InventoryPredictionLab: moved `actualMetricSet` inside `useMemo`, fixed deps
  - BreakEvenAnalysisCalculator: removed unnecessary `results` from deps
  - InterestCalculationBuilder: removed unused `safeCalculate` from deps, prefixed with `_`
- **Phase 5: Final verification** — 0 warnings, 216 tests pass, clean build

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Dead-code removal pass** — Multiple `_`-prefixed dead functions across business-simulations and lesson pages
2. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
3. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
