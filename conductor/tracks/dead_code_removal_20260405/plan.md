# Plan: Dead Code Removal Pass

## Phase 1: Business Simulations [ ]
- [~] Write tests: Verify component behavior unchanged after removal
- [ ] GoalSeekSimulator.tsx: Remove `_calculateProfit` (line 23), `_correctVolume` (line 27)
- [ ] DepreciationMethodComparisonSimulator.tsx: Remove `_handleNextAsset` (line 87)
- [ ] BudgetBalancer.tsx: Remove `_getHealthProgress` (line 249)
- [ ] CashFlowChallenge.tsx: Remove `_netFlow` (line 424)
- [ ] LemonadeStand.tsx: Remove `_customerCount` (lines 316, 319)
- [ ] PitchPresentationBuilder.tsx: Remove `_isRecording`/`_setIsRecording` state (line 249)
- [ ] AssetRegisterSimulator.tsx: Remove `_handleNextAsset` (line 101)
- [ ] Run tests for Phase 1 verification
- [ ] Commit: `refactor(cleanup): Remove dead _-prefixed code from business simulations`

## Phase 2: Exercises [ ]
- [ ] StraightLineMastery.tsx: Remove `_selectedOption` (line 168)
- [ ] DDBComparisonMastery.tsx: Remove `_questionText` (lines 88-118)
- [ ] PercentageCalculationSorting.tsx: Remove `_totalScenarios` (line 409), `_correctScenarios` (line 719)
- [ ] BudgetCategorySort.tsx: Remove `_totalExpenses` (line 367), `_correctExpenses` (line 543)
- [ ] Run tests for Phase 2 verification
- [ ] Commit: `refactor(cleanup): Remove dead _-prefixed code from exercises`

## Phase 3: Lesson Pages [ ]
- [ ] unit05/lesson04/phase-4/page.tsx: Remove `_multiplier` (line 24), `_newProblem` (line 73)
- [ ] unit07/lesson06/phase-4/page.tsx: Remove `_blankCell` (line 11)
- [ ] unit07/lesson04/phase-1/page.tsx: Remove `_isSelected` (line 204)
- [ ] unit07/lesson02/CostAssignmentPractice.tsx: Remove `_prevScenario` (line 142)
- [ ] unit06/lesson04/phase-4/page.tsx: Remove `_currentProfit` (line 39)
- [ ] unit05/lesson10/page.tsx: Remove `_currentPhase` (line 7)
- [ ] unit05/lesson09/page.tsx: Remove `_currentPhase` (line 7)
- [ ] unit05/lesson08/page.tsx: Remove `_currentPhase` (line 5)
- [ ] unit04/lesson08/page.tsx: Remove `_currentPhase` (line 7)
- [ ] unit01/lesson03/phase-3/page.tsx: Remove `_practiceTransactions` (line 12)
- [ ] InventoryFlowExplorer.tsx: Remove `_showDiscovery` state (replace with plain `setShowDiscovery` or remove entirely if setter is also dead)
- [ ] SpecificIDTracker.tsx: Remove `_showCalculation` state (replace with plain `setShowCalculation` or remove entirely if setter is also dead)
- [ ] BreakEvenAnalysisCalculator.tsx: Remove `_goalSeekMode`/`_setGoalSeekMode` state (line 397)
- [ ] Run tests for Phase 3 verification
- [ ] Commit: `refactor(cleanup): Remove dead _-prefixed code from lesson pages`

## Phase 4: Components [ ]
- [ ] FinancialDashboard.tsx: Remove `_chartConfig` (line 294)
- [ ] assessment-utilities.ts: Remove `_requiredGuides` (line 79)
- [ ] Run tests, lint, and build
- [ ] Commit: `refactor(cleanup): Remove dead _-prefixed code from components`

## Finalization
- [ ] Update tech-debt.md — mark dead-code item resolved
- [ ] Update lessons-learned.md
- [ ] Final commit and push
