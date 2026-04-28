# Plan: Dead Code Removal Pass

## Phase 1: Business Simulations [x]
- [x] GoalSeekSimulator.tsx: Remove `_calculateProfit` (line 23), `_correctVolume` (line 27)
- [x] DepreciationMethodComparisonSimulator.tsx: Remove `_handleNextAsset` (line 87)
- [x] BudgetBalancer.tsx: Remove `_getHealthProgress` (line 249)
- [x] CashFlowChallenge.tsx: Remove `_netFlow` (line 424)
- [x] LemonadeStand.tsx: Remove `_customerCount` (lines 316, 319)
- [x] PitchPresentationBuilder.tsx: Remove `_isRecording`/`_setIsRecording` state (line 249)
- [x] AssetRegisterSimulator.tsx: Remove `_handleNextAsset` (line 101)
- [x] Run tests, lint, build — all pass (216 tests, 0 warnings)
- [x] Commit: `refactor(cleanup): Remove dead _-prefixed code from business simulations`

## Phase 2: Exercises [x]
- [x] StraightLineMastery.tsx: Remove `_selectedOption` (line 168)
- [x] DDBComparisonMastery.tsx: Remove `_questionText` (lines 88-118)
- [x] PercentageCalculationSorting.tsx: Remove `_totalScenarios` (line 409), `_correctScenarios` (line 719)
- [x] BudgetCategorySort.tsx: Remove `_totalExpenses` (line 367), `_correctExpenses` (line 543)
- [x] Run tests — all pass (216 tests)
- [x] Commit: `refactor(cleanup): Remove dead _-prefixed code from exercises`

## Phase 3: Lesson Pages [x]
- [x] unit05/lesson04/phase-4/page.tsx: Remove `_multiplier` (line 24), `_newProblem` (line 73)
- [x] unit07/lesson06/phase-4/page.tsx: Remove `_blankCell` (line 11)
- [x] unit07/lesson04/phase-1/page.tsx: Remove `_isSelected` (line 204)
- [x] unit07/lesson02/CostAssignmentPractice.tsx: Remove `_prevScenario` (line 142)
- [x] unit06/lesson04/phase-4/page.tsx: Remove `_currentProfit` (line 39)
- [x] unit05 lessons 8-10, unit04/lesson08: Remove `_currentPhase` + unused imports
- [x] unit01/lesson03/phase-3/page.tsx: Remove `_practiceTransactions` (line 12)
- [x] InventoryFlowExplorer.tsx: `[_showDiscovery, setShowDiscovery]` → `[, setShowDiscovery]`
- [x] SpecificIDTracker.tsx: `[_showCalculation, setShowCalculation]` → `[, setShowCalculation]`
- [x] BreakEvenAnalysisCalculator.tsx: Remove `_goalSeekMode`/`_setGoalSeekMode` state (line 397)
- [x] Run tests, lint — all pass (216 tests, 0 warnings)
- [x] Commit: `refactor(cleanup): Remove dead _-prefixed code from lesson pages`

## Phase 4: Components [x]
- [x] FinancialDashboard.tsx: Remove `_chartConfig` (line 294)
- [x] assessment-utilities.ts: Remove `_requiredGuides` (line 79)
- [x] GoalSeekSimulator.tsx: Remove `CURRENT_PRICE` (cascading dead code)
- [x] Run tests, lint, build — all pass (216 tests, 0 warnings, 603+ pages)
- [x] Commit: `refactor(cleanup): Remove dead _-prefixed code from components`

## Finalization [x]
- [x] Update tech-debt.md — dead-code item marked resolved
- [x] Update lessons-learned.md — cascading dead-code lesson added
- [x] Final commit and push
