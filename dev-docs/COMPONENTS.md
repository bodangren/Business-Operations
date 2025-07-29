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
- [x] FinancialStatementMatching.tsx - match line items to correct financial statements (Income Statement, Balance Sheet, Cash Flow) ✅
- [x] BusinessTransactionCategorization.tsx - categorize transactions as Operating, Investing, or Financing activities ✅
- [ ] CashFlowTimeline.tsx - arrange cash inflows and outflows on a timeline to visualize cash management
- [ ] BreakEvenComponents.tsx - drag fixed costs, variable costs, and revenue to build break-even analysis
- [x] PercentageCalculationSorting.tsx - sort business scenarios by calculation type ✅ **ADDED TO UNIT 4**
- [x] RatioMatching.tsx - match financial ratios to their formulas ✅ **ADDED TO UNIT 3**
- [x] BudgetCategorySort.tsx - organize expenses into budget categories ✅ **ADDED TO UNIT 4**
- [x] InterestCalculationBuilder.tsx - build interest calculations ✅ **ADDED TO UNIT 5**
- [ ] PayrollComponentSorting.tsx - sort payroll items into gross pay, deductions, and net pay categories
- [x] InventoryFlowDiagram.tsx - arrange inventory costs in FIFO/LIFO flow patterns ✅ **ADDED TO UNIT 7**
- [x] DepreciationMethodBuilder.tsx - build depreciation schedules ✅ **ADDED TO UNIT 7**
- [ ] BusinessCycleSorting.tsx - arrange business activities in proper operational cycle order

## Todo: Exercise Components -- in exercises.js
- [ ] Create debug/exercises/page.tsx test page
- [x] ComprehensionCheck.tsx - create exercise component ✅ **ADDED TO ALL UNITS**
- [x] ReflectionJournal.tsx - create reflection component ✅ **ADDED TO ALL UNITS**
- [ ] DragAndDrop.tsx - create drag-drop framework component
- [ ] FillInTheBlank.tsx - create exercise component
- [ ] JournalEntry.tsx - create exercise component
- [ ] TrialBalance.tsx - create exercise component
- [ ] Test and debug all exercise components in debug page

## Todo: Financial Calculator Components -- in financial-calculators,js
- [ ] Create debug/financial-calculators/page.tsx test page
- [x] BreakEvenAnalysisCalculator.tsx - migrate from integrated-model-builder.js ✅ **ADDED TO UNIT 6**
- [ ] ~~LoanPaymentCalculator.tsx~~ - **REMOVED: Not relevant to curriculum**
- [ ] ~~NPVCalculator.tsx~~ - **REMOVED: Too advanced for Grade 12**
- [ ] Test and debug all financial calculator components in debug page

## ~~Todo: Gamification Components~~ -- **REMOVED CATEGORY**
**DECISION: Gamification components removed as they add complexity without clear educational value in current curriculum structure**
- [ ] ~~AchievementSystem.tsx~~ - **REMOVED**
- [ ] ~~BadgeSystem.tsx~~ - **REMOVED**
- [ ] ~~DailyGoals.tsx~~ - **REMOVED**
- [ ] ~~GamificationDashboard.tsx~~ - **REMOVED**
- [ ] ~~Leaderboard.tsx~~ - **REMOVED**
- [ ] ~~NotificationSystem.tsx~~ - **REMOVED**
- [ ] ~~PointsSystem.tsx~~ - **REMOVED**
- [ ] ~~ProgressWidget.tsx~~ - **REMOVED**
- [ ] ~~TimeTracking.tsx~~ - **REMOVED**

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

### Unit 01 Usage Plan: Smart Ledger Launch (10 days)
**Essential Question**: How can we design a self-auditing ledger that would convince a potential angel investor we keep "clean books" from day 1?

#### Day 1 - Introduction Page (/units/unit01/intro)
- **ComprehensionCheck.tsx** - Sarah's business model quiz (5 questions)
- **BusinessTransactionCategorization.tsx** - Match clients to projects (bakery→$2,200, pet grooming→$650, dental→$1,100)
- **StartupJourney.tsx** - Interactive exploration of TechStart Solutions story and challenges

#### Day 2-3 - Concepts Page (/units/unit01/concepts)
- **TAccountsVisualization.tsx** - Visual T-accounts showing Assets = Liabilities + Equity
- **AccountCategorization.tsx** - Drag-drop sorting: Sarah's cash, equipment, client payments owed
- **JournalEntryBuilding.tsx** - Build journal entries for Sarah's actual transactions

#### Day 4-5 - Excel Model Page (/units/unit01/excel-model)
- **SpreadsheetSimulator.tsx** - Practice Excel Tables with TechStart transaction data
- **ErrorCheckingSystem.tsx** - Build conditional formatting rules for negative balances, missing entries
- **TrialBalanceGenerator.tsx** - Create auto-check formula: ABS(sum_debits - sum_credits) = 0

#### Day 6 - Examples Page (/units/unit01/examples)
- **FinancialStatementMatching.tsx** - Match Sarah's Month 3 transactions to correct statements
- **IncomeStatementSimple.tsx** - Display Sarah's Month 3 P&L results with revenue breakdown

#### Day 7 - Exercises Page (/units/unit01/exercises)
- **TrialBalanceSorting.tsx** - Independent practice building complete ledger systems
- **TransactionJournal.tsx** - Record transactions for chosen client focus (bakery/pet grooming/dental)

#### Day 8-10 - Summary Page (/units/unit01/summary)
- **PitchPresentationBuilder.tsx** - 4-minute investor pitch preparation tool
- **ReflectionJournal.tsx** - Document learning journey and connect to future applications

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

### Unit 02 Usage Plan: Month-End Wizard (10 days)
**Essential Question**: What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?

#### Day 1 - Introduction Page (/units/unit02/intro)
- **CFOVlogPlayer.tsx** - 5-minute CFO video about month-end closing challenges and business impact
- **ReceiptSortingChallenge.tsx** - Hands-on simulation: sort 50+ mock receipts, time the manual process
- **AutomationPathSelector.tsx** - Teams choose specialization (accrual, deferral, depreciation, or closing)

#### Day 2-3 - Concepts Page (/units/unit02/concepts)
- **AdjustingEntryMapper.tsx** - Interactive mapping of accruals, deferrals, depreciation to GAAP principles
- **PercentageCalculationSorting.tsx** - Straight-line depreciation calculations with (Cost-Salvage)/Life formula
- **JournalEntryBuilding.tsx** - Build adjusting entries for team's chosen specialization area

#### Day 4 - Exercises Page (/units/unit02/exercises)
- **PeerFeedbackForm.tsx** - Gallery walk structured feedback on four adjusting entry scenarios
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress and challenges

#### Day 5 - Summary Page (/units/unit02/summary)
- **SprintRetrospectiveTool.tsx** - Team retrospective: what worked, what didn't, technical readiness
- **ToolingChoiceSelector.tsx** - Choose automation approach: Macro Recorder vs Basic VBA

#### Day 6-7 - Excel Model Page (/units/unit02/excel-model)
- **MonthEndWizard.tsx** - Build automated closing entry system with macro recorder or basic VBA
- **SpreadsheetSimulator.tsx** - Practice environment for macro development and testing
- **MonthEndCloseSimulator.tsx** - Full time simulation: complete month-end close under 2 hours

#### Day 8 - Examples Page (/units/unit02/examples)
- **UIDesigner.tsx** - Create professional button interface with form controls and named ranges
- **ErrorCheckingSystem.tsx** - Implement data validation and error reporting for non-expert users
- **FinancialDashboard.tsx** - Display time savings and accuracy metrics from automation

#### Day 9 - Exercises Page (/units/unit02/exercises)
- **UserTestingSurvey.tsx** - Mock demo practice with peer feedback on presentation clarity
- **PitchPresentationBuilder.tsx** - Prepare Innovation Fair demo script and visitor interaction

#### Day 10 - Summary Page (/units/unit02/summary)
- **GamificationDashboard.tsx** - Innovation Fair booth setup and live demonstrations to visitors
- **UserTestingSurvey.tsx** - Collect visitor feedback on system usability and business value
- **ReflectionJournal.tsx** - Unit reflection on automation learning and future applications

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
- [x] ReflectionJournal.tsx - create new journal component ✅ **ADDED**
- [ ] SprintRetrospectiveTool.tsx - create new retrospective component
- [x] RatioMatching.tsx - match financial ratios to formulas ✅ **ADDED**
- [ ] Test and debug all unit03 components in debug page

### Unit 03 Usage Plan: Three-Statement Storyboard (10 days)
**Essential Question**: How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?

#### Day 1 - Introduction Page (/units/unit03/intro)
- **ComprehensionCheck.tsx** - Tesla 10-Q dissection: map narrative statements to financial line items
- **FinancialStatementMatching.tsx** - Visual mapping of three-statement relationships and data flows
- **IndustrySelector.tsx** - Teams maintain TechStart context but select industry focus

#### Day 2-3 - Concepts Page (/units/unit03/concepts)  
- **FinancialStatementBuilder.tsx** - Income Statement construction using INDEX/MATCH techniques
- **SpreadsheetSimulator.tsx** - Practice environment for cross-sheet linking with named ranges
- **ComprehensionCheck.tsx** - Individual quiz on statement relationships and formula logic
- **RatioMatching.tsx** - Match financial ratios to their formulas and business meanings

#### Day 4-5 - Exercises Page (/units/unit03/exercises)
- **PeerReviewSystem.tsx** - Gallery walk critique of Income Statements with structured feedback
- **ReflectionJournal.tsx** - Sprint retrospective on Income Statement construction challenges
- **QuizEngine.tsx** - Individual assessment on financial statement relationships

#### Day 6-7 - Excel Model Page (/units/unit03/excel-model)
- **FinancialStatementBuilder.tsx** - Balance Sheet construction with cross-sheet linking to trial balance
- **BalanceSheetDetailed.tsx** - Advanced Balance Sheet with Retained Earnings reconciliation
- **CashFlowStatementDetailed.tsx** - Indirect Cash Flow Statement construction and integration

#### Day 8 - Examples Page (/units/unit03/examples)
- **InteractiveDashboard.tsx** - KPI dashboard design with charts, sparklines, and financial ratios
- **KPIDisplay.tsx** - Professional visualization of selected business performance indicators
- **DesignThemeSelector.tsx** - Choose dashboard themes appropriate for investor presentations

#### Day 9 - Exercises Page (/units/unit03/exercises)
- **PresentationPitchBuilder.tsx** - Create investor one-pager and prepare 4-minute pitch presentation
- **FeedbackCollector.tsx** - Expert CPA review session for technical accuracy and professional presentation
- **PeerReviewSystem.tsx** - Teams provide feedback on presentation materials before Demo Day

#### Day 10 - Summary Page (/units/unit03/summary)
- **PresentationPitchBuilder.tsx** - Live investor panel presentations with interactive Excel demonstrations
- **FeedbackCollector.tsx** - Collect investor panel feedback on technical accuracy and business narrative
- **ReflectionJournal.tsx** - Exit reflection on three-statement modeling journey and portfolio addition

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
- [x] PercentageCalculationSorting.tsx - sort business scenarios by calculation type ✅ **ADDED**
- [x] BudgetCategorySort.tsx - organize expenses into budget categories ✅ **ADDED**
- [ ] Test and debug all unit04 components in debug page

### Unit 04 Usage Plan: Data-Driven Café (10 days)
**Essential Question**: Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?

#### Day 1 - Introduction Page (/units/unit04/intro)
- **FocusAreaSelector.tsx** - Teams choose specialization: beverage mix, pastry inventory, or staffing optimization
- **TeamRoleAssigner.tsx** - Assign roles: data analyst, designer, strategist for comprehensive team coverage
- **ComprehensionCheck.tsx** - Virtual café tour quiz: operational challenges, waste patterns, customer flow observations

#### Day 2 - Concepts Page (/units/unit04/concepts)
- **POSDataCleaner.tsx** - Interactive data cleaning: Text-to-Columns, TRIM, duplicate removal on real POS data
- **DescriptiveStatsCalculator.tsx** - Learn mean, median, standard deviation calculation using café transaction data
- **SpreadsheetSimulator.tsx** - Practice environment for Excel Analysis ToolPak techniques
- **BudgetCategorySort.tsx** - Organize café expenses into budget categories (fixed, variable, discretionary)

#### Day 3 - Concepts Page (continued) (/units/unit04/concepts)
- **OutlierDetector.tsx** - Z-score analysis tool: identify unusual transactions, investigate business context
- **ReflectionAnalyzer.tsx** - Document outlier treatment decisions with business justification
- **DescriptiveStatsCalculator.tsx** - Generate comprehensive statistical reports using Analysis ToolPak

#### Day 4 - Excel Model Page (/units/unit04/excel-model)
- **HistogramBuilder.tsx** - Create professional histograms showing transaction amount and timing distributions
- **BoxPlotVisualization.tsx** - Compare weekend patterns across seasons, menu categories, time periods
- **ScatterPlotBuilder.tsx** - Explore relationships between variables (weather vs sales, time vs volume)

#### Day 5 - Excel Model Page (continued) (/units/unit04/excel-model)
- **RegressionForecaster.tsx** - Build linear regression models using FORECAST.LINEAR and Analysis ToolPak
- **DemandForecastModel.tsx** - Generate specific predictions for next weekend's operations by category
- **PredictionValidator.tsx** - Test model accuracy against business logic and manager experience

#### Day 6 - Examples Page (/units/unit04/examples)
- **ComprehensionCheck.tsx** - Professional case study analysis: restaurant chain's weekend optimization project
- **CostSavingsSimulator.tsx** - Examine real-world success story: 11% to 2.8% waste reduction case study
- **ReflectionJournal.tsx** - Self-assessment against professional statistical analysis quality standards
- **PercentageCalculationSorting.tsx** - Sort business scenarios by calculation type (markup, discount, waste percentage)

#### Day 7 - Exercises Page (/units/unit04/exercises)
- **CostSavingsSimulator.tsx** - Complete cost-benefit analysis for different operational scenarios
- **PeerCritiqueForm.tsx** - Structured peer review using professional quality checklist
- **RegressionForecaster.tsx** - Refine forecast models based on feedback and validation requirements

#### Day 8 - Summary Page (/units/unit04/summary)
- **InfographicDesigner.tsx** - Transform statistical analysis into compelling visual business communication
- **PitchStoryboardBuilder.tsx** - Plan 90-second elevator pitch structure with visual sequence
- **DesignThemeSelector.tsx** - Choose professional themes appropriate for stakeholder presentations

#### Day 9 - Summary Page (continued) (/units/unit04/summary)
- **PitchStoryboardBuilder.tsx** - Practice 90-second presentations with peer audiences
- **PeerCritiqueForm.tsx** - Structured feedback on presentation delivery, timing, and message clarity
- **FeedbackCollector.tsx** - Incorporate feedback and finalize presentation materials

#### Day 10 - Summary Page (final) (/units/unit04/summary)
- **PitchStoryboardBuilder.tsx** - Live presentations to café manager and student staff
- **FeedbackCollector.tsx** - Collect authentic stakeholder feedback on analytical quality and business practicality
- **ReflectionJournal.tsx** - Learning reflection and portfolio documentation of statistical analysis journey

#### Cross-Unit Components Used
- **ComprehensionCheck.tsx** - Quizzes and knowledge checks throughout the unit
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress
- **SpreadsheetSimulator.tsx** - Excel practice environment for statistical techniques
- **FeedbackCollector.tsx** - Expert feedback collection from stakeholders
- **DesignThemeSelector.tsx** - Professional presentation theme selection

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
- [x] InterestCalculationBuilder.tsx - build interest calculations ✅ **ADDED**
- [ ] Test and debug all unit05 components in debug page

### Unit 05 Usage Plan: PayDay Simulator (10 days)
**Essential Question**: How can a small business owner predict payroll cash-outs and still make rent on time?

#### Day 1 - Introduction Page (/units/unit05/intro)
- **BankStatementAnalyzer.tsx** - Interactive analysis of Maria's actual bank statement and payroll register, identifying timing gaps
- **ComprehensionCheck.tsx** - Crisis Prevention Quiz: identify which timing changes would have prevented Maria's overdraft crisis
- **BusinessTransactionCategorization.tsx** - Transaction Timeline Matching: drag-drop matching of payroll entries with bank statement timing

#### Day 2 - Concepts Page (/units/unit05/concepts)  
- **GrossPayCalculator.tsx** - Interactive practice with hourly (overtime), salaried, and tipped employee calculations using Maria's café staff
- **TaxWithholdingCalculator.tsx** - Federal income tax, FICA taxes, and state tax withholding calculations with real tax tables
- **ComprehensionCheck.tsx** - Understanding tax withholding accuracy and business impact of calculation errors

#### Day 3 - Concepts Page (continued) (/units/unit05/concepts)
- **GrossPayCalculator.tsx** - Build prototype calculator with IF statements for overtime and different employee types
- **TaxWithholdingCalculator.tsx** - Implement VLOOKUP/XLOOKUP with tax table data for accurate withholding
- **NetPayCalculator.tsx** - Complete gross-to-net calculation system with error checking and professional formatting
- **InterestCalculationBuilder.tsx** - Build simple and compound interest calculations for employee loans/advances

#### Day 4 - Excel Model Page (/units/unit05/excel-model)
- **PayrollScenarioTester.tsx** - Test calculator with challenging scenarios: zero hours, maximum wage employees, edge cases
- **SpreadsheetSimulator.tsx** - Add data validation, conditional formatting, and error-checking features to calculator
- **NetPayCalculator.tsx** - Polish user interface and ensure professional business-ready appearance

#### Day 5 - Excel Model Page (continued) (/units/unit05/excel-model)
- **ReflectionJournal.tsx** - Learning reflection on payroll calculation challenges and business insight connections
- **CashFlowPredictor.tsx** - Analyze how payroll timing affects business cash flow, connect to Maria's crisis scenario
- **ComprehensionCheck.tsx** - Multi-employee system planning: architecture and XLOOKUP preview

#### Day 6 - Examples Page (/units/unit05/examples)
- **XLOOKUPTutorial.tsx** - Master XLOOKUP syntax and payroll applications: employee rates, tax status, deduction lookup
- **PayrollRegisterViewer.tsx** - Build comprehensive employee database and multi-employee payroll processing system
- **BilingualStubFormatter.tsx** - Create professional bilingual pay stub templates with data validation

#### Day 7 - Exercises Page (/units/unit05/exercises)
- **PayrollReconciler.tsx** - Build bank reconciliation system using SUMIFS to match payroll totals with bank debits
- **PayrollScenarioTester.tsx** - Extreme scenario testing: overtime, bonuses, unpaid leave, tax status changes
- **OverdraftSimulator.tsx** - Cash flow timing analysis and prediction system to prevent Maria's crisis

#### Day 8 - Summary Page (/units/unit05/summary)
- **ScreencastPlanner.tsx** - Plan comprehensive tutorial structure: problem → solution → demonstration → implementation
- **TeamRoleAssigner.tsx** - Assign specialized roles: Tax Analyst, UX Designer, QA Tester for comprehensive coverage
- **ComprehensionCheck.tsx** - Audience analysis for youth entrepreneur tutorial target audience

#### Day 9 - Summary Page (continued) (/units/unit05/summary)
- **ScreencastPlanner.tsx** - Practice screencast demonstrations and smooth Excel narration for 5-minute tutorial
- **PeerCritiqueForm.tsx** - Structured peer feedback using professional review criteria: clarity, accuracy, business value
- **RevisionTracker.tsx** - Plan and implement tutorial improvements based on feedback for professional standards

#### Day 10 - Summary Page (final) (/units/unit05/summary)
- **ScreencastPlanner.tsx** - Final tutorial upload to school YouTube channel and live Q&A preparation
- **FeedbackCollector.tsx** - Collect authentic business owner feedback on tutorial quality and practical implementation
- **ReflectionJournal.tsx** - Unit reflection on payroll system learning journey and digital portfolio documentation

#### Cross-Unit Components Used
- **ComprehensionCheck.tsx** - Quizzes and knowledge checks throughout the unit
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress  
- **SpreadsheetSimulator.tsx** - Excel practice environment for payroll system development
- **BusinessTransactionCategorization.tsx** - Drag-drop activities for transaction analysis
- **PeerCritiqueForm.tsx** - Structured feedback collection for tutorial refinement
- **FeedbackCollector.tsx** - Expert feedback from authentic business audience

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
- [x] BreakEvenAnalysisCalculator.tsx - comprehensive break-even analysis ✅ **ADDED**
- [ ] Test and debug all unit06 components in debug page

### Unit 06 Usage Plan: PriceLab Challenge (10 days)
**Essential Question**: What pricing strategy hits our profit target while staying competitive in the local market?

#### Day 1 - Introduction Page (/units/unit06/intro)
- **CompetitorPriceImporter.tsx** - Live Power Query demonstration importing competitor pricing data from websites
- **CompetitorSegmentSelector.tsx** - Teams choose specialization: budget, mid-market, or premium market segments
- **DataTransformationTool.tsx** - Interactive learning of data cleaning and transformation with Power Query interface
- **ComprehensionCheck.tsx** - Essential question quiz on competitive pricing strategy challenges

#### Day 2 - Concepts Page (/units/unit06/concepts)
- **MarkupMarginCalculator.tsx** - Interactive practice with markup vs. margin calculations using competitor data
- **ComprehensionCheck.tsx** - Understanding check on calculation differences and business applications
- **SpreadsheetSimulator.tsx** - Practice environment for markup/margin formula implementation in Excel

#### Day 3 - Excel Model Page (/units/unit06/excel-model)
- **CVPModelBuilder.tsx** - Comprehensive Cost-Volume-Profit model construction with Excel integration
- **BreakEvenPointCalculator.tsx** - Build break-even analysis calculations and verify against CVP model
- **BreakEvenAnalysisCalculator.tsx** - Advanced break-even analysis with multiple scenarios and sensitivity testing
- **CVPGraphGenerator.tsx** - Create professional CVP charts showing cost line, revenue line, and break-even point
- **SpreadsheetSimulator.tsx** - Practice environment for CVP model development and testing

#### Day 4 - Exercises Page (/units/unit06/exercises)
- **PeerCritiqueForm.tsx** - Structured gallery walk feedback using business evaluation criteria
- **CVPChartCustomizer.tsx** - Professional formatting and annotation tools for CVP visualizations
- **ReflectionJournal.tsx** - Sprint retrospective on CVP modeling challenges and peer feedback analysis

#### Day 5 - Summary Page (/units/unit06/summary)
- **ReflectionJournal.tsx** - Learning journey reflection on Week 1 pricing analysis progress
- **FeedbackCollector.tsx** - Milestone 1 assessment: Competitor analysis and margin calculations presentation
- **ComprehensionCheck.tsx** - Week 2 planning and goal setting for sensitivity analysis phase

#### Day 6 - Excel Model Page (continued) (/units/unit06/excel-model)
- **GoalSeekSimulator.tsx** - Master Goal Seek functionality for reverse engineering pricing decisions
- **CVPModelBuilder.tsx** - Integration of Goal Seek results with CVP model for target profit scenarios
- **SensitivityAnalyzer.tsx** - Multiple scenario analysis using Goal Seek for conservative, optimistic, and stretch targets

#### Day 7 - Excel Model Page (advanced) (/units/unit06/excel-model)
- **OneVariableDataTable.tsx** - Build data tables showing profit sensitivity to single variables (price, volume, costs)
- **TwoVariableDataTable.tsx** - Advanced sensitivity analysis with two variables simultaneously (price vs volume, cost vs price)
- **SensitivityAnalyzer.tsx** - Comprehensive what-if analysis with conditional formatting for visual insights

#### Day 8 - Examples Page (/units/unit06/examples)
- **PricingRecommendationBuilder.tsx** - Synthesize all analysis into comprehensive pricing strategy memo or slide deck
- **CVPChartCustomizer.tsx** - Create professional charts and tables supporting pricing recommendations
- **DebatePreparationTool.tsx** - Structure arguments and anticipate stakeholder questions for town hall format

#### Day 9 - Summary Page (continued) (/units/unit06/summary)
- **DebatePreparationTool.tsx** - Town hall debate preparation with stakeholder perspective analysis
- **PricingRecommendationBuilder.tsx** - Team rehearsal and refinement of presentations with peer feedback
- **PeerCritiqueForm.tsx** - Structured feedback on presentation delivery and argumentation strategy

#### Day 10 - Summary Page (final) (/units/unit06/summary)
- **PricingDebateSimulator.tsx** - Live town hall pricing debate with economics teacher, PTA reps, and local entrepreneurs
- **FeedbackCollector.tsx** - Panel feedback collection on analytical rigor and business communication effectiveness
- **ReflectionJournal.tsx** - Unit reflection on CVP analysis learning and portfolio documentation

#### Cross-Unit Components Used in Unit 06
- **ComprehensionCheck.tsx** - Quizzes and knowledge checks throughout all 10 days
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress and challenges
- **SpreadsheetSimulator.tsx** - Excel practice environment for CVP model development and Goal Seek
- **PeerCritiqueForm.tsx** - Structured peer feedback collection for model refinement and presentation improvement
- **FeedbackCollector.tsx** - Expert feedback from authentic business audience and panel assessment

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
- [x] InventoryFlowDiagram.tsx - arrange inventory costs in FIFO/LIFO flow patterns ✅ **ADDED**
- [x] DepreciationMethodBuilder.tsx - build depreciation schedules by dragging method components ✅ **ADDED**
- [ ] Test and debug all unit07 components in debug page

### Unit 07 Usage Plan: Asset & Inventory Tracker (10 days)
**Essential Question**: Which depreciation and inventory methods best align with our cash‑flow and tax strategy?

#### Day 1 - Introduction Page (/units/unit07/intro)
- **AssetInventoryDataViewer.tsx** - Interactive exploration of provided asset and inventory CSV dataset
- **IndustryContextSelector.tsx** - Teams choose business context: retail, manufacturing, or technology focus
- **ComprehensionCheck.tsx** - Auditor case study quiz on inventory misvaluation consequences and business impact

#### Day 2 - Concepts Page (/units/unit07/concepts)
- **StraightLineDepreciationCalculator.tsx** - Practice Excel SLN function with guided workshop exercises
- **DoubleDecliningBalanceCalculator.tsx** - Learn DDB function syntax and build declining balance schedules
- **ComprehensionCheck.tsx** - Method comparison checkpoint quiz to verify understanding
- **SpreadsheetSimulator.tsx** - Practice environment for depreciation function implementation

#### Day 3 - Concepts Page (continued) (/units/unit07/concepts)
- **FIFOInventoryCalculator.tsx** - First-In-First-Out logic and step-by-step calculation practice
- **LIFOInventoryCalculator.tsx** - Last-In-First-Out method with comparative examples using same dataset
- **InventoryFlowDiagram.tsx** - Visual arrangement of inventory costs in FIFO/LIFO flow patterns
- **BusinessTransactionCategorization.tsx** - Inventory flow timeline matching for FIFO vs LIFO understanding
- **ComprehensionCheck.tsx** - Strategic analysis quiz on when businesses would choose each method

#### Day 4 - Excel Model Page (/units/unit07/excel-model)
- **InventoryLayerTracker.tsx** - Build Excel array formulas for complex inventory layer calculations
- **COGSCalculator.tsx** - Automated Cost of Goods Sold computation using array formula techniques
- **SpreadsheetSimulator.tsx** - Practice environment for array formula development and testing
- **PeerCritiqueForm.tsx** - Structured peer review of formula accuracy using answer key verification

#### Day 5 - Excel Model Page (continued) (/units/unit07/excel-model)
- **ReflectionJournal.tsx** - Sprint retrospective on learning progress and technical challenges
- **ComprehensionCheck.tsx** - Concept mastery quiz covering SLN, DDB, FIFO, LIFO methods and strategic implications
- **TeamPlanningTool.tsx** - Week 2 preparation for advanced modeling and presentation development

#### Day 6 - Examples Page (/units/unit07/examples)
- **DepreciationMethodSelector.tsx** - Create dropdown menus for dynamic SLN/DDB method selection
- **InventoryMethodSelector.tsx** - Build FIFO/LIFO dropdown selection with data validation
- **DepreciationScheduleBuilder.tsx** - INDEX/MATCH formulas enabling dynamic method switching
- **DepreciationMethodBuilder.tsx** - Interactive drag-and-drop interface to build depreciation schedules
- **SpreadsheetSimulator.tsx** - Test environment for dropdown-driven dynamic model functionality

#### Day 7 - Examples Page (continued) (/units/unit07/examples)
- **InventoryTurnoverCalculator.tsx** - Calculate turnover ratios for both FIFO and LIFO methods
- **VisualizationStyleSelector.tsx** - Student choice of chart style (column, line, waterfall) for COGS impact
- **FinancialDashboard.tsx** - Combine calculations and charts into professional dashboard layout
- **ChartCustomizer.tsx** - Professional formatting with clean titles, axis labels, and business storytelling

#### Day 8 - Exercises Page (/units/unit07/exercises)
- **AdvisoryBriefBuilder.tsx** - Professional business advisory format workshop and strategic recommendations
- **SalvageValueSensitivityAnalyzer.tsx** - Analysis of cash flow impact and tax strategy evaluation
- **PeerCritiqueForm.tsx** - Structured feedback on draft advisory briefs using business evaluation criteria
- **RevisionTracker.tsx** - Incorporate feedback and plan final brief completion

#### Day 9 - Exercises Page (continued) (/units/unit07/exercises)
- **BoardPresentationBuilder.tsx** - 5-minute presentation rehearsal with live Excel demonstrations
- **PeerCritiqueForm.tsx** - Mock Board presentation feedback using professional review criteria
- **PresentationSkillsTrainer.tsx** - Practice smooth transitions between analysis and recommendations
- **Q&ASimulator.tsx** - Other teams ask challenging questions as Board members would

#### Day 10 - Summary Page (/units/unit07/summary)
- **BoardPresentationBuilder.tsx** - Live presentations to Board of Directors panel (business leaders, accountants, auditors)
- **CashFlowTaxImpactAnalyzer.tsx** - Strategic Q&A on method selection rationale and business impact
- **FeedbackCollector.tsx** - Panel provides authentic business perspective on strategic recommendations
- **ReflectionJournal.tsx** - Unit reflection on learning journey and portfolio documentation

#### Cross-Unit Components Used in Unit 07
- **ComprehensionCheck.tsx** - Quizzes and knowledge checks throughout all 10 days
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress and strategic understanding
- **SpreadsheetSimulator.tsx** - Excel practice environment for SLN, DDB, and array formula development
- **BusinessTransactionCategorization.tsx** - Drag-drop activities for inventory flow and method understanding
- **PeerCritiqueForm.tsx** - Structured peer feedback for advisory brief and presentation refinement
- **FeedbackCollector.tsx** - Expert feedback from authentic Board panel and business audience
- **FinancialDashboard.tsx** - Professional dashboard integration of calculations and visualizations

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

### Unit 08 Usage Plan: Year-1 Startup Model (10 days)
**Essential Question**: Can we convince a micro-VC that our first-year financial model is robust enough to merit funding?

#### Day 1 - Introduction Page (/units/unit08/intro)
- **PitchDeckFailureAnalyzer.tsx** - Interactive analysis of anonymized failed startup pitch decks and financial models
- **VCRedFlagChecker.tsx** - VC guest speaker tool highlighting top 5 model failures that kill funding opportunities
- **ComprehensionCheck.tsx** - Model failure case study quiz identifying specific technical and assumption errors
- **TeamRoleAssigner.tsx** - Form development teams (2-3 students) and select startup concept areas (SaaS, e-commerce, service)

#### Day 2 - Concepts Page (/units/unit08/concepts)
- **ThreeStatementLinker.tsx** - Review and demonstrate cross-sheet linking principles from Units 3, 6, and 7
- **CrossSheetLinkingTool.tsx** - Technical instruction on Excel cross-sheet reference best practices and naming conventions
- **IncomeStatementBuilder.tsx** - Hands-on practice linking income statement to balance sheet with proper formula syntax
- **SpreadsheetSimulator.tsx** - Practice environment for cross-sheet reference techniques and error prevention

#### Day 3 - Concepts Page (continued) (/units/unit08/concepts)
- **BalanceSheetBuilder.tsx** - Build complete balance sheet integration linking current assets, fixed assets, and liabilities
- **CashFlowStatementBuilder.tsx** - Construct cash flow statement that ties to balance sheet changes and income statement
- **ModelIntegrityChecker.tsx** - Three-statement validation tool ensuring mathematical accuracy and proper reconciliation
- **FormulaAuditor.tsx** - Test integration by changing assumptions and confirming all statements update correctly

#### Day 4 - Excel Model Page (/units/unit08/excel-model)
- **ScenarioManager.tsx** - Technical instruction on Excel Scenario Manager setup, variable selection, and usage
- **StartupRiskAnalyzer.tsx** - Business scenario development tool for optimistic, pessimistic, and realistic cases
- **ComprehensionCheck.tsx** - SaaS startup scenario variables workshop identifying key drivers (growth rates, CAC, churn)
- **SpreadsheetSimulator.tsx** - Implementation practice environment for Scenario Manager with startup variables

#### Day 5 - Excel Model Page (continued) (/units/unit08/excel-model)
- **SensitivityTableBuilder.tsx** - Build Excel data tables for one-variable and two-variable sensitivity analysis
- **TornadoChartGenerator.tsx** - Create tornado charts to visualize impact magnitude and identify top 3 drivers
- **ModelIntegrityChecker.tsx** - **Milestone 1 Assessment**: Complete assessment of integrated three-statement model
- **FormulaAuditor.tsx** - Peer validation and instructor spot-checks of formula integrity and linking accuracy

#### Day 6 - Excel Model Page (advanced) (/units/unit08/excel-model)
- **ScenarioManager.tsx** - Advanced scenario variables including revenue shocks, cost spikes, and timing disruptions
- **StartupRiskAnalyzer.tsx** - **Milestone 2 Assessment**: Demonstrate working scenarios with meaningful business differences
- **SensitivityTableBuilder.tsx** - Stress-test models with extreme but realistic variable combinations
- **CAPReflectionTool.tsx** - Document scenario insights, risk factors, and assumptions for investor transparency

#### Day 7 - Examples Page (/units/unit08/examples)
- **ModelIntegrityChecker.tsx** - Analyze professional-grade financial models from successful startups and funding rounds
- **FormulaAuditor.tsx** - Systematic peer audit process using professional audit checklist for formula integrity
- **VCRedFlagChecker.tsx** - Identify potential red flags that would concern investors during due diligence
- **PeerCritiqueForm.tsx** - Structured feedback collection using professional review criteria and actionable improvements

#### Day 8 - Examples Page (continued) (/units/unit08/examples)
- **VCPitchDeckBuilder.tsx** - Create 8-slide VC-style presentation integrating model outputs and scenario analysis
- **KPIDashboardBuilder.tsx** - Design professional visuals supporting financial story with key metrics and comparisons
- **DemoDaySimulator.tsx** - Mock VC panel presentations with peer feedback and Q&A practice
- **PeerCritiqueForm.tsx** - Trial presentation feedback using VC evaluation criteria and investor engagement factors

#### Day 9 - Summary Page (/units/unit08/summary)
- **ModelIntegrityChecker.tsx** - Final model polish with professional formatting standards and advanced features
- **KPIDashboardBuilder.tsx** - Create executive summary dashboard with key metrics and data validation
- **VCPitchDeckBuilder.tsx** - Full presentation rehearsal with live model demonstration and scenario switching
- **DemoDaySimulator.tsx** - Practice seamless Q&A responses to challenging investor questions

#### Day 10 - Summary Page (final) (/units/unit08/summary)
- **VCPitchDeckBuilder.tsx** - **Final Assessment**: Professional presentations to external VC mentor panel
- **DemoDaySimulator.tsx** - Live Q&A handling with VC mentors, entrepreneurs, and finance professionals
- **CAPReflectionTool.tsx** - Comprehensive unit reflection on learning journey and CAP development analysis
- **ReflectionJournal.tsx** - Portfolio documentation and semester 2 capstone transition preparation

#### Cross-Unit Components Used in Unit 08
- **ComprehensionCheck.tsx** - Quizzes and knowledge checks throughout all 10 days
- **ReflectionJournal.tsx** - Individual and team reflection on learning progress and professional growth
- **SpreadsheetSimulator.tsx** - Excel practice environment for advanced modeling techniques and validation
- **PeerCritiqueForm.tsx** - Structured peer feedback for model refinement and presentation improvement
- **FeedbackCollector.tsx** - Expert feedback from authentic VC panel and professional audience
- **TeamRoleAssigner.tsx** - Specialized roles for comprehensive team coverage and collaboration

---

## COMPONENT INTEGRATION SUMMARY

### Components Added to Units (December 2024)

**High Priority Additions:**
- **ComprehensionCheck.tsx** ✅ - Added as cross-unit component referenced in all units
- **ReflectionJournal.tsx** ✅ - Added as cross-unit component referenced in all units  
- **BreakEvenAnalysisCalculator.tsx** ✅ - Added to Unit 6 (PriceLab Challenge) Day 3
- **InventoryFlowDiagram.tsx** ✅ - Added to Unit 7 (Asset & Inventory Tracker) Day 3
- **DepreciationMethodBuilder.tsx** ✅ - Added to Unit 7 (Asset & Inventory Tracker) Day 6

**Medium Priority Additions:**
- **RatioMatching.tsx** ✅ - Added to Unit 3 (Three-Statement Storyboard) Day 2-3
- **BudgetCategorySort.tsx** ✅ - Added to Unit 4 (Data-Driven Café) Day 2
- **PercentageCalculationSorting.tsx** ✅ - Added to Unit 4 (Data-Driven Café) Day 6
- **InterestCalculationBuilder.tsx** ✅ - Added to Unit 5 (PayDay Simulator) Day 3

### Components Removed from Development
- **All Gamification Components** (9 components) - Removed as they add complexity without clear educational value
- **LoanPaymentCalculator.tsx** - Removed as not relevant to current curriculum focus
- **NPVCalculator.tsx** - Removed as too advanced for Grade 12 level

### Result: 
- **+8 Educational Components** integrated into appropriate units
- **-11 Unnecessary Components** removed from development
- **Net: 3 fewer components** with significantly higher educational value density