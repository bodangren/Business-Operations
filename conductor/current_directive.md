# Current Directive

**Updated:** 2026-04-05
**Status:** Implementing dead-code removal pass

## Active Track

**dead_code_removal_20260405** — Removing all `_`-prefixed dead code (29 instances across 26 files). Phase 1: business simulations.

## What Was Just Completed

- **Code review audit of ESLint Phases 3-5** (no-explicit-any + react-hooks + verification)
  - All 227 type replacements audited — correct, no runtime regressions
  - All 7 hooks fixes audited — correct dependency arrays, no stale closures
  - Removed `_safeCalculate` dead code from InterestCalculationBuilder (21 lines)
  - Removed `_processFlows` dead code from CashFlowChallenge (12 lines)
  - Review report: `conductor/reviews/review_20260405_eslint-phases3-5.md`

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 warnings, 0 errors

## Next Priorities

1. **Dead-code removal pass** — ~13 `_`-prefixed dead functions remaining across business-simulations and lesson pages (`_calculateProfit`, `_correctVolume`, `_handleNextAsset`, `_getHealthProgress`, `_showDiscovery`, `_showCalculation`, `_goalSeekMode`, `_isRecording`). Should be a dedicated track.
2. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
3. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts
4. **Type consolidation** — PhaseHeader/PhaseFooter index signatures (`[key: string]: unknown`) should be replaced with proper `LessonData` interfaces

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
