# Current Directive

**Updated:** 2026-04-05
**Status:** Review audit complete — critical runtime bug in StraightLineMastery fixed, interface regressions reverted

## Active Track

`eslint_warning_cleanup_20260405` — Phase 3: Fix no-explicit-any warnings (234 remaining)

## What Was Just Completed

- Code review audit of ESLint cleanup Phases 1-2 (commits `05021da`..`cd2798d`)
- **Critical fix:** `StraightLineMastery.tsx` — `selectedOption` was incorrectly prefixed with `_`, causing `ReferenceError` at runtime when submitting answers. Fixed.
- **Interface fix:** Reverted `_` prefix on callback parameter names in 5 public interface declarations (`DragAndDrop`, `FeedbackCollector`, `PeerCritiqueForm`)
- Review report filed: `conductor/reviews/review_20260405_eslint-phases1-2.md`

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors, 234 warnings (down from 571 original)

## Next Priorities

1. **ESLint Phase 3: `no-explicit-any` warnings** — 234 warnings remain, most are `any` types; tackle `src/lib/` first, then components, then tests
2. **ESLint Phase 4: React hooks rules** — ~5 hooks-related warnings (exhaustive-deps, LemonadeStand missing dep)
3. **Dead-code removal pass** — Multiple `_`-prefixed dead functions across business-simulations and lesson pages (`_processFlows`, `_calculateProfit`, `_handleNextAsset`, `_getHealthProgress`, etc.) should be deleted rather than accumulated
4. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16
5. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts
6. **CashFlowChallenge rules-of-hooks fix** — `useCredit` called inside callback; pre-existing but should be fixed

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
