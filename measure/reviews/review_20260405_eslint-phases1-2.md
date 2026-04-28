# Review Report: ESLint Warning Cleanup — Phases 1-2

**Date:** 2026-04-05
**Reviewer:** Autonomous code-review audit
**Scope:** Commits `05021da`..`cd2798d` (ESLint warning cleanup Phases 1 & 2)

## Summary

Phases 1-2 of the ESLint warning cleanup track reduced warnings from 571 → 234. The automated Phase 1 (unused-imports plugin) was clean. Phase 2 (manual `_` prefix for unused vars) introduced **one critical runtime bug** and several interface/API style regressions. All have been fixed.

## Verification Checks

- [x] **Plan Compliance:** Yes — Phase 1 auto-fix, Phase 2 manual cleanup completed as specified
- [x] **Style Compliance:** Partial — `_` prefix applied correctly to dead code, but incorrectly to active callback parameter names and interface declarations
- [x] **New Tests:** N/A — no new tests expected for a lint-only pass
- [x] **Test Results:** 216 passed (14 suites) — no regressions
- [x] **Build:** Clean (603+ pages)

## Findings

### [Critical] StraightLineMastery — `_selectedOption` breaks runtime

- **File:** `src/components/exercises/StraightLineMastery.tsx:135`
- **Context:** `selectedOption` was renamed to `_selectedOption` inside `handleSubmit`, but all downstream references on lines 136-142 still used the unprefixed name. This would cause a `ReferenceError: selectedOption is not defined` at runtime when the user submits an answer.
- **Fix:** Reverted to `selectedOption` (this variable is actively used — the linter flagged the wrong instance). The truly dead declaration at line 168 was correctly prefixed as `_selectedOption`.
- **Status:** Fixed

### [Medium] Public interface parameter names renamed to `_`

- **Files:**
  - `src/components/exercises/DragAndDrop.tsx:137` — `onComplete?: (_score: number) => void`
  - `src/components/exercises/FeedbackCollector.tsx:187` — `onSubmit?: (_feedback: ...) => void`
  - `src/components/exercises/FeedbackCollector.tsx:433` — `onRatingChange: (_rating: ...) => void`
  - `src/components/exercises/PeerCritiqueForm.tsx:150` — `onSubmit?: (_feedback: ...) => void`
  - `src/components/exercises/PeerCritiqueForm.tsx:275` — `onRatingChange: (_rating: number) => void`
- **Context:** These are TypeScript interface/prop-type parameter names in callback signatures. Prefixing with `_` makes the public API confusing for consumers — it implies the parameter shouldn't be used, but callers must use it. The linter flagged them because the parameter value isn't referenced in the *implementation* of the component, but that's expected for callback props.
- **Fix:** Reverted all five to meaningful names (`score`, `feedback`, `rating`)
- **Status:** Fixed

### [Low] Dead code patterns surfaced by `_` prefix

- **Files:** Multiple — `_calculateProfit`, `_correctVolume` in GoalSeekSimulator, `_processFlows` in CashFlowChallenge, `_handleNextAsset` in AssetRegisterSimulator and DepreciationMethodComparisonSimulator, `_showDiscovery` in InventoryFlowExplorer, `_showCalculation` in SpecificIDTracker, etc.
- **Context:** These were already dead code before the lint fix. The `_` prefix correctly identifies them as intentionally unused. They should be removed in a future dead-code cleanup pass, but they don't affect runtime.
- **Status:** Not fixed — low priority, tracked in tech-debt.md

### [Low] Indentation regression in StraightLineMastery

- **File:** `src/components/exercises/StraightLineMastery.tsx:135`
- **Context:** The `_selectedOption` rename introduced a 1-space indentation instead of the correct 4-space indent inside the `useCallback`.
- **Fix:** Corrected as part of the critical fix above
- **Status:** Fixed

## Metrics

| Metric | Before | After |
|--------|--------|-------|
| ESLint warnings | 571 | 234 |
| Build errors | 0 | 0 |
| Test failures | 0 | 0 |
| Runtime bugs found | 0 | 1 (fixed) |

## Lessons

- **Prefix-first approach is dangerous for active variables:** When ESLint flags an unused variable, the `_` prefix is safe for truly dead code, but dangerous when the variable *is* used on subsequent lines. Always verify the variable isn't referenced before prefixing.
- **Interface callback parameter names are documentation:** Prefixing them with `_` harms readability for API consumers. The lint rule `unused-imports/no-unused-vars` should ideally not fire on callback parameter names in type declarations.
