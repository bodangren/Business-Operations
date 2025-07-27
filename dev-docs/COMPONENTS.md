# Component Migration Todo List

**Status:** Header, Footer, and Unit Sidebar custom components already implemented ✅

## Todo: Business Simulations Components - migrate from business-simulations.js
- [x] Create debug/business-simulations/page.tsx test page ✅
- [x] BudgetBalancer.tsx ✅
- [x] CashFlowChallenge.tsx ✅
- [x] InventoryManager.tsx ✅
- [x] LemonadeStand.tsx ✅
- [x] StartupJourney.tsx ✅
- [ ] Test and debug all business simulation components in debug page

## Todo: Chart Components - from data-visualization.js
- [x] Create debug/charts/page.tsx test page ✅
- [x] BarChart.tsx ✅
- [x] BreakEvenChart.tsx ✅
- [x] DoughnutChart.tsx ✅
- [x] FinancialDashboard.tsx ✅
- [x] LineChart.tsx ✅
- [x] PieChart.tsx ✅
- [ ] other dashboards relevant to the unit topics (below and in dev-docs/)
- [ ] Test and debug all chart components in debug page

## Todo: Financial Reporting Components - NEW
- [x] Create financial-reports directory under components ✅
- [x] IncomeStatementSimple.tsx - simple P&L statement with basic calculations ✅
- [x] IncomeStatementDetailed.tsx - detailed P&L with revenue/expense breakdowns ✅
- [x] CashFlowStatementSimple.tsx - simple cash flow from three activities ✅
- [x] CashFlowStatementDetailed.tsx - detailed cash flow with full breakdowns ✅
- [x] BalanceSheetSimple.tsx - simple balance sheet with key ratios ✅
- [x] BalanceSheetDetailed.tsx - detailed balance sheet with comprehensive analysis ✅
- [x] Add financial reporting components to debug/charts/page.tsx ✅
- [x] Include usage examples in debug page ✅
- [ ] Test and debug all financial reporting components
- [ ] Create integration examples showing all three statements together

## Todo: Drag & Drop Exercise Components -- in drag-drop-exercises.js
- [x] Create debug/drag-drop/page.tsx test page ✅
- [x] AccountCategorization.tsx - create drag-drop component ✅
- [x] JournalEntryBuilding.tsx - create drag-drop component ✅
- [x] TrialBalanceSorting.tsx - create drag-drop component ✅
- [ ] Test and debug all drag-drop exercise components in debug page

## Todo: Additional Drag & Drop Exercise Components - Beginning Business & Finance Math
- [ ] FinancialStatementMatching.tsx - match line items to correct financial statements (Income Statement, Balance Sheet, Cash Flow)
- [ ] BusinessTransactionCategorization.tsx - categorize transactions as Operating, Investing, or Financing activities
- [ ] CashFlowTimeline.tsx - arrange cash inflows and outflows on a timeline to visualize cash management
- [ ] BreakEvenComponents.tsx - drag fixed costs, variable costs, and revenue to build break-even analysis
- [ ] PercentageCalculationSorting.tsx - sort business scenarios by calculation type (markup, discount, tax, commission)
- [ ] RatioMatching.tsx - match financial ratios to their formulas and business meanings
- [ ] BudgetCategorySort.tsx - organize expenses into budget categories (fixed, variable, discretionary)
- [ ] InterestCalculationBuilder.tsx - drag components to build simple and compound interest calculations
- [ ] PayrollComponentSorting.tsx - sort payroll items into gross pay, deductions, and net pay categories
- [ ] InventoryFlowDiagram.tsx - arrange inventory costs in FIFO/LIFO flow patterns
- [ ] DepreciationMethodBuilder.tsx - build depreciation schedules by dragging method components
- [ ] BusinessCycleSorting.tsx - arrange business activities in proper operational cycle order

## Todo: Exercise Components -- in exercises.js
- [ ] Create debug/exercises/page.tsx test page
- [ ] ComprehensionCheck.tsx - create exercise component
- [ ] DragAndDrop.tsx - create drag-drop framework component
- [ ] FillInTheBlank.tsx - create exercise component
- [ ] JournalEntry.tsx - create exercise component
- [ ] TrialBalance.tsx - create exercise component
- [ ] Test and debug all exercise components in debug page

## Todo: Financial Calculator Components -- in financial-calculators,js
- [ ] Create debug/financial-calculators/page.tsx test page
- [ ] BreakEvenAnalysisCalculator.tsx - migrate from integrated-model-builder.js
- [ ] LoanPaymentCalculator.tsx - migrate from payroll-calculator.js
- [ ] NPVCalculator.tsx - migrate from integrated-model-builder.js
- [ ] Test and debug all financial calculator components in debug page

## Todo: Gamification Components -- in gamification.js
- [ ] Create debug/gamification/page.tsx test page
- [ ] AchievementSystem.tsx - create new gamification component
- [ ] BadgeSystem.tsx - create new gamification component
- [ ] DailyGoals.tsx - create new gamification component
- [ ] GamificationDashboard.tsx - create new gamification component
- [ ] Leaderboard.tsx - create new gamification component
- [ ] NotificationSystem.tsx - create new gamification component
- [ ] PointsSystem.tsx - create new gamification component
- [ ] ProgressWidget.tsx - create new gamification component
- [ ] TimeTracking.tsx - create new gamification component
- [ ] Test and debug all gamification components in debug page

## Todo: Spreadsheet simulator -- in spreadsheet-simulator.js and excel-interactive.js
- [ ] create debug/spreadsheet-simulator/page.tsx
- [ ] SpreadsheetSimulator.tsx - create
- [ ] utils/formula.ts - create formula utilities for many spreadsheet formula

## Todo: Unit 01 Components
- [ ] Create debug/unit01/page.tsx test page
- [ ] AccountAggregator.tsx - migrate from asset-management-tools.js
- [ ] DynamicAccountSelection.tsx - create new selection component
- [ ] ErrorCheckingSystem.tsx - create new validation component
- [ ] PitchPresentationBuilder.tsx - create new presentation component
- [ ] StartupVentureSelector.tsx - create new selection component
- [ ] TAccountsVisualization.tsx - create new visualization component
- [ ] TransactionJournal.tsx - create new journal component
- [ ] TrialBalanceGenerator.tsx - migrate from integrated-model-builder.js
- [ ] Test and debug all unit01 components in debug page

## Todo: Unit 02 Components
- [ ] Create debug/unit02/page.tsx test page
- [ ] AdjustingEntryMapper.tsx - create new mapping component
- [ ] AutomationPathSelector.tsx - create new selection component
- [ ] CFOVlogPlayer.tsx - create new video player component
- [ ] ErrorCheckingSystem.tsx - create new validation component
- [ ] MonthEndCloseSimulator.tsx - migrate from month-end-wizard.js
- [ ] MonthEndWizard.tsx - migrate from month-end-wizard.js
- [ ] PeerFeedbackForm.tsx - create new form component
- [ ] ReceiptSortingChallenge.tsx - create new sorting game component
- [ ] SprintRetrospectiveTool.tsx - create new retrospective component
- [ ] ToolingChoiceSelector.tsx - create new selection component
- [ ] UIDesigner.tsx - create new design tool component
- [ ] UserTestingSurvey.tsx - create new survey component
- [ ] Test and debug all unit02 components in debug page

## Todo: Unit 03 Components
- [ ] Create debug/unit03/page.tsx test page
- [ ] DesignThemeSelector.tsx - create new theme selector component
- [ ] FeedbackCollector.tsx - create new feedback component
- [ ] FinancialStatementBuilder.tsx - migrate from integrated-model-builder.js
- [ ] IndustrySelector.tsx - create new selection component
- [ ] InteractiveDashboard.tsx - migrate from integrated-model-builder.js
- [ ] KPIDisplay.tsx - migrate from statistical-analysis.js
- [ ] PeerReviewSystem.tsx - create new review system component
- [ ] PresentationPitchBuilder.tsx - create new presentation component
- [ ] QuizEngine.tsx - create new quiz framework component
- [ ] ReflectionJournal.tsx - create new journal component
- [ ] SprintRetrospectiveTool.tsx - create new retrospective component
- [ ] Test and debug all unit03 components in debug page

## Todo: Unit 04 Components
- [ ] Create debug/unit04/page.tsx test page
- [ ] POSDataCleaner.tsx - data cleaning tool with Text-to-Columns, TRIM, duplicate removal
- [ ] OutlierDetector.tsx - z-score calculator and outlier identification tool
- [ ] DescriptiveStatsCalculator.tsx - mean, median, standard deviation calculator
- [ ] HistogramBuilder.tsx - interactive histogram creator
- [ ] BoxPlotVisualization.tsx - box plot chart component
- [ ] ScatterPlotBuilder.tsx - scatterplot visualization tool
- [ ] RegressionForecaster.tsx - linear regression and FORECAST.LINEAR tool
- [ ] DemandForecastModel.tsx - demand forecasting simulation
- [ ] CostSavingsSimulator.tsx - scenario-based cost analysis tool
- [ ] InfographicDesigner.tsx - poster creation tool
- [ ] PitchStoryboardBuilder.tsx - 90-second pitch planning tool
- [ ] FocusAreaSelector.tsx - beverage/pastry/staffing choice component
- [ ] TeamRoleAssigner.tsx - data analyst/designer/strategist role selector
- [ ] PeerCritiqueForm.tsx - structured feedback collection
- [ ] ReflectionAnalyzer.tsx - outlier impact analysis tool
- [ ] PredictionValidator.tsx - predicted vs actual comparison tool
- [ ] Test and debug all unit04 components in debug page

## Todo: Unit 05 Components
- [ ] Create debug/unit05/page.tsx test page
- [ ] BankStatementAnalyzer.tsx - bank statement parsing and analysis tool
- [ ] PayrollRegisterViewer.tsx - payroll register display and editing tool
- [ ] GrossPayCalculator.tsx - gross pay computation with wage bands
- [ ] TaxWithholdingCalculator.tsx - tax table lookup and deduction calculator
- [ ] NetPayCalculator.tsx - net pay computation with all deductions
- [ ] EmployerTaxCalculator.tsx - employer tax contributions calculator
- [ ] PayStubGenerator.tsx - bilingual pay stub creation tool
- [ ] XLOOKUPTutorial.tsx - interactive XLOOKUP learning component
- [ ] PayrollReconciler.tsx - bank vs payroll reconciliation tool
- [ ] CashFlowPredictor.tsx - payroll cash-out timing predictor
- [ ] EmployeeTypeSelector.tsx - hourly/tipped/salaried choice component
- [ ] TeamRoleAssigner.tsx - Tax Analyst/UX Designer/QA Tester roles
- [ ] ScreencastPlanner.tsx - tutorial script and storyboard tool
- [ ] PayrollScenarioTester.tsx - extreme scenario testing simulator
- [ ] OverdraftSimulator.tsx - cash flow timing mismatch simulator
- [ ] BilingualStubFormatter.tsx - English/Chinese stub formatting tool
- [ ] Test and debug all unit05 components in debug page

## Todo: Unit 06 Components
- [ ] Create debug/unit06/page.tsx test page
- [ ] CompetitorPriceImporter.tsx - Power Query data import simulation
- [ ] DataTransformationTool.tsx - Power Query transformation interface
- [ ] MarkupMarginCalculator.tsx - markup vs margin computation tool
- [ ] BreakEvenPointCalculator.tsx - break-even analysis calculator
- [ ] CVPModelBuilder.tsx - Cost-Volume-Profit model constructor
- [ ] CVPGraphGenerator.tsx - interactive CVP chart creator
- [ ] GoalSeekSimulator.tsx - target profit scenario calculator
- [ ] OneVariableDataTable.tsx - single-variable sensitivity analysis
- [ ] TwoVariableDataTable.tsx - dual-variable what-if analysis
- [ ] SensitivityAnalyzer.tsx - comprehensive sensitivity testing tool
- [ ] CompetitorSegmentSelector.tsx - budget/mid-market/premium choice
- [ ] PricingRecommendationBuilder.tsx - memo/deck creation tool
- [ ] CVPChartCustomizer.tsx - chart annotation and styling tool
- [ ] DebatePreparationTool.tsx - argument structuring and Q&A prep
- [ ] PricingDebateSimulator.tsx - town-hall debate simulation
- [ ] RevisionTracker.tsx - feedback incorporation and change tracking
- [ ] Test and debug all unit06 components in debug page

## Todo: Unit 07 Components
- [ ] Create debug/unit07/page.tsx test page
- [ ] AssetInventoryDataViewer.tsx - asset and inventory data exploration tool
- [ ] StraightLineDepreciationCalculator.tsx - SLN function implementation
- [ ] DoubleDecliningBalanceCalculator.tsx - DDB function implementation
- [ ] DepreciationScheduleBuilder.tsx - automated depreciation schedule creator
- [ ] FIFOInventoryCalculator.tsx - First-In-First-Out inventory valuation
- [ ] LIFOInventoryCalculator.tsx - Last-In-First-Out inventory valuation
- [ ] InventoryLayerTracker.tsx - array formula layer costing tool
- [ ] COGSCalculator.tsx - Cost of Goods Sold computation tool
- [ ] InventoryTurnoverCalculator.tsx - turnover ratio analysis
- [ ] DepreciationMethodSelector.tsx - dynamic SLN/DDB dropdown selection
- [ ] InventoryMethodSelector.tsx - dynamic FIFO/LIFO dropdown selection
- [ ] IndustryContextSelector.tsx - retail/manufacturing/technology choice
- [ ] VisualizationStyleSelector.tsx - waterfall chart vs line graph choice
- [ ] SalvageValueSensitivityAnalyzer.tsx - sensitivity analysis for salvage values
- [ ] AdvisoryBriefBuilder.tsx - 2-3 page brief creation tool
- [ ] BoardPresentationBuilder.tsx - 5-minute pitch preparation tool
- [ ] CashFlowTaxImpactAnalyzer.tsx - method comparison for cash flow and tax
- [ ] Test and debug all unit07 components in debug page

## Todo: Unit 08 Components
- [ ] Create debug/unit08/page.tsx test page
- [ ] PitchDeckFailureAnalyzer.tsx - anonymized failure case study viewer
- [ ] VCRedFlagChecker.tsx - startup model red flag detection tool
- [ ] ThreeStatementLinker.tsx - income/balance/cash flow linking tool
- [ ] CrossSheetLinkingTool.tsx - formula integrity cross-sheet validator
- [ ] IncomeStatementBuilder.tsx - comprehensive income statement creator
- [ ] BalanceSheetBuilder.tsx - balance sheet integration tool
- [ ] CashFlowStatementBuilder.tsx - cash flow statement generator
- [ ] ScenarioManager.tsx - multiple scenario creation and management
- [ ] SensitivityTableBuilder.tsx - sensitivity analysis table generator
- [ ] TornadoChartGenerator.tsx - top driver analysis visualization
- [ ] FormulaAuditor.tsx - trace precedents and circular reference detector
- [ ] ModelIntegrityChecker.tsx - comprehensive model validation tool
- [ ] StartupRiskAnalyzer.tsx - risk assessment and scenario impact tool
- [ ] KPIDashboardBuilder.tsx - key performance indicator dashboard
- [ ] VCPitchDeckBuilder.tsx - 8-slide VC presentation creator
- [ ] DemoDaySimulator.tsx - VC panel Q&A simulation
- [ ] TeamRoleAssigner.tsx - CFO/COO/CMO role assignment tool
- [ ] CAPReflectionTool.tsx - Courage/Adaptability/Persistence reflection journal
- [ ] Test and debug all unit08 components in debug page