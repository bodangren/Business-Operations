# Review Report: ESLint Cleanup Phases 3-5 (no-explicit-any + react-hooks + final verification)

**Reviewed:** 2026-04-05
**Scope:** Commits `f2496c6`..`ec6c162` (Phase 3: type replacements, Phase 4: hooks fixes, Phase 5: verification)
**Reviewer:** Automated code-review consultant

## Summary

Phases 3-5 are **clean and well-executed**. All 227 `no-explicit-any` warnings were replaced with proper types, and 7 react-hooks warnings were resolved correctly. No runtime bugs, no type regressions, no test failures. Two dead-code blocks were found and removed during this review.

## Verification Checks

- [x] Plan Compliance: Yes — all Phase 3-5 tasks completed as specified
- [x] Style Compliance: Pass — follows project conventions
- [x] New Tests: N/A — no new tests needed for lint-only changes
- [x] Test Coverage: Yes — 216/216 tests pass
- [x] Test Results: Passed — 14 suites, 0 failures
- [x] Build: Passed — 603+ pages compiled
- [x] Lint: Passed — 0 warnings, 0 errors (down from 571)

## Findings

### [Fixed] Dead code: `_safeCalculate` in InterestCalculationBuilder.tsx
- **File:** `src/components/financial-calculations/InterestCalculationBuilder.tsx:194`
- **Context:** `useCallback` block (21 lines) was renamed `_safeCalculate` in Phase 4 to suppress unused-var warning, but it was genuinely dead code — never called by `calculateInterest` or any other function. The actual interest calculation is done inline in the `switch` statement.
- **Fix:** Removed entire block during this review.

### [Fixed] Dead code: `_processFlows` in CashFlowChallenge.tsx
- **File:** `src/components/business-simulations/CashFlowChallenge.tsx:173`
- **Context:** `useCallback` block (12 lines) was prefixed `_` in Phase 2. The actual flow processing happens inline in `advanceDay` with different logic. Never called.
- **Fix:** Removed entire block during this review.

### [Low] Index signature escape hatch on PhaseHeader/PhaseFooter
- **File:** `src/components/student/PhaseHeader.tsx:30-33`, `PhaseFooter.tsx:29-32`
- **Context:** `[key: string]: unknown` added to `lesson` and `unit` props to allow extra lesson-data properties without `as any` casts. This works but weakens type safety — any misspelled prop passes silently.
- **Suggestion:** Replace with a proper `LessonData` interface in a future type-consolidation track. Not urgent.

### [Low] `next lint` deprecation + multiple lockfiles warning
- **Context:** Both warnings appear on every `npm run lint` and `npm run build`. Already tracked in tech-debt.md.
- **Status:** No action needed in this review. Already in directive priorities.

## Correctness Audit of Key Changes

### LemonadeStand hooks fix (Phase 4) — CORRECT
- `completeSales` moved before `simulateSales` to resolve "used before declaration"
- `completeSales` added to `simulateSales` exhaustive-deps (was missing, causing stale closure)
- `completeSales` deps: `[gameState.recipe, addNotification]` — correct, uses `setGameState(prev => ...)` updater pattern

### CashFlowChallenge rename (Phase 4) — CORRECT
- `useCredit` → `handleUseCredit` — fixes false positive rules-of-hooks (was `useCallback`, not a hook)
- Both call sites (`onClick` handlers) updated

### InventoryPredictionLab memo fix (Phase 4) — CORRECT
- `actualMetricSet` moved inside `useMemo` callback, deps changed from `[actualMetricSet, pickedMetrics]` to `[activeEvent.metricMoves, pickedMetrics]`
- Avoids new Set on every render, correct dependency tracking

### BreakEvenAnalysisCalculator deps fix (Phase 4) — CORRECT
- Removed `results` from `goalSeekResults` useMemo deps — `goalSeekResults` only reads `inputs`, not `results`
- Was a stale dependency, removal is correct

### ErrorCheckingSystem type tightening (Phase 3) — CORRECT
- Added explicit `Number()` and `String()` wrappers when indexing `Record<string, string | number>`
- Prevents implicit coercion bugs at runtime

### InventoryManager null-safety (Phase 3) — CORRECT
- Added `?? 0` fallback when accessing optional effect properties (`demandBoost`, `demandReduction`, `priceChange`, `storageDiscount`)
- Prevents `undefined * number` → NaN bugs

## Action Items

None remaining. All issues found were fixed during this review.
