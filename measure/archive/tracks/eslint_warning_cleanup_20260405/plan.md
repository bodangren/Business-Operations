# Implementation Plan: ESLint Warning Cleanup Pass

## Phase 1: Auto-Fix Unused Imports and let→const (~281 warnings fixed)

### Task 1.1: Run ESLint --fix for auto-fixable warnings [x]
- Installed `eslint-plugin-unused-imports` and configured in `eslint.config.mjs`
- Ran `npx eslint --fix` to auto-remove unused imports and fix `let`→`const`
- Review: 150 files changed, no behavioral changes

### Task 1.2: Verify auto-fix results [x]
- Warning count dropped from 571 → 290 (281 warnings fixed)
- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)

### Task 1.3: Commit and attach git note [x]
- Committed: `chore(lint): Auto-fix unused imports via eslint-plugin-unused-imports` (05021da)
- Git note attached with Phase 1 summary
- Pushed to remote

## Phase 2: Manual Cleanup of Remaining Unused Vars (~30 warnings)

### Task 2.1: Remove unused destructured variables and assignments [x]
- Reviewed ~55 remaining unused-var warnings across 40 files
- Prefixed with `_`: callback args (`_index`, `_item`, `_configItem`), destructured vars (`_currentPhase`, `_calculateProfit`, etc.), catch block errors (`_error`)
- Fixed `IncomeStatementSimple.tsx` prop rename syntax (`editable: _editable`)
- Added `caughtErrorsIgnorePattern: "^_"` to `eslint.config.mjs`

### Task 2.2: Verify and commit [x]
- `npm run lint`: 0 unused-var warnings (down from ~55), 235 remaining (all `any` types + hooks rules)
- `npx vitest run`: 216 tests passed (14 suites)
- `npm run build`: compiled successfully (603+ pages)

## Phase 3: Fix no-explicit-any Warnings (227 warnings) [x]

### Task 3.1: Tackle `any` types in lib/ utilities [x]
- Added index signatures to PhaseHeader/PhaseFooter props to accept lesson-data objects without `as any` casts
- Removed 70 `as any` casts from student page files
- Fixed `ReflectionJournal` category type to accept `string`

### Task 3.2: Tackle `any` types in components [x]
- BarChart: `Record<string, string | number>` for data points
- LineChart: `Array<Record<string, string | number>>` for chart data
- ScatterChart: Removed explicit formatter param type (inferred)
- ErrorCheckingSystem: Proper types for `sampleData`, `sampleDataset`, `testData`, `safeEvaluateCondition`
- InventoryManager: Typed `MarketEvent.effect` with specific optional properties
- PostingPracticeLoop: `string | number` for `handleAccountChange` value
- TransactionJournal: Specific union type for `accountType` cast
- DepreciationMethodBuilder: `React.ComponentType<{ className?: string }>` for icon
- UnitLessonPlan: Imported `DailyLesson`/`LessonActivity` from `@/types/lesson-plan`
- Lesson01Phase1: Proper prop types matching PhaseHeader expectations
- LessonProgressContext: `Record<string, unknown>` for JSON deserialization, proper `initializeUnit` params
- classroom-routines: `React.ComponentType<{ className?: string }>` for icon map

### Task 3.3: Tackle `any` types in test files [x]
- export.test.ts: `as unknown as typeof` for partial session mock
- storage.test.ts: Same pattern for partial session mock

### Task 3.4: Verify and commit
- `npm run lint`: 0 errors, 7 warnings (all react-hooks, Phase 4)
- `npm run test`: 216 tests passed (14 suites)
- `npm run build`: compiled successfully (603+ pages)

## Phase 4: Fix React Hooks Rules (~10 warnings) [x]

### Task 4.1: Fix hooks called inside callbacks [x]
- Renamed `useCredit` → `handleUseCredit` in CashFlowChallenge (was a `useCallback`, not a hook — name starting with `use` triggered false positive rules-of-hooks in onClick handlers)
- Moved `completeSales` definition before `simulateSales` in LemonadeStand to resolve "used before declaration" + added to exhaustive-deps

### Task 4.2: Fix unnecessary/missing hook dependencies [x]
- InventoryPredictionLab: moved `actualMetricSet` inside `useMemo` callback, changed deps to `[activeEvent.metricMoves, pickedMetrics]`
- BreakEvenAnalysisCalculator: removed unnecessary `results` from `goalSeekResults` useMemo deps
- InterestCalculationBuilder: removed unused `safeCalculate` from `calculateInterest` deps, prefixed with `_`
- LemonadeStand: added `completeSales` to `simulateSales` exhaustive-deps

### Task 4.3: Verify and commit [x]
- `npm run lint`: 0 warnings, 0 errors
- `npx vitest run`: 216 tests passed (14 suites)
- `npm run build`: compiled successfully (603+ pages)

## Phase 5: Final Verification [x]

### Task 5.1: Full test suite [x]
- `npm run test` — 216 tests passed
- `npm run lint` — 0 warnings (target was <50, achieved 0)
- `npm run build` — clean build

### Task 5.2: Update tech-debt.md [x]
- Mark react-hooks warning cleanup as resolved

### Task 5.3: Final checkpoint commit [x]
- Commit: `fix(hooks): Resolve all react-hooks ESLint warnings (Phase 4-5)`
