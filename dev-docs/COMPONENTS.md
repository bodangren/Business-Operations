# Component Migration & Development Todo List

**IMPORTANT** Document all components with comments on usage, including the conventions for locations of any additional data, etc.

**Status:** Header, Footer, and Unit Sidebar custom components already implemented ✅

## ✅ COMPLETED Components

### Business Simulations - `/components/business-simulations/`
- [x] **BudgetBalancer.tsx** ✅ (664 lines, fully implemented with detailed documentation)
- [x] **CashFlowChallenge.tsx** ✅ (940 lines, comprehensive business simulation)
- [x] **InventoryManager.tsx** ✅ (939 lines, complete inventory optimization)
- [x] **LemonadeStand.tsx** ✅ (808 lines, basic business operations sim)
- [x] **StartupJourney.tsx** ✅ (869 lines, multi-stage startup decisions)
- [x] **Debug page:** `/debug/business-simulations` ✅

### Chart Components - `/components/charts/`
- [x] **BarChart.tsx** ✅ (286 lines, standard bar visualization)
- [x] **BreakEvenChart.tsx** ✅ (331 lines, break-even analysis charts)
- [x] **DoughnutChart.tsx** ✅ (264 lines, proportional data visualization)
- [x] **FinancialDashboard.tsx** ✅ (400 lines, comprehensive metrics dashboard)
- [x] **LineChart.tsx** ✅ (139 lines, time series visualization)
- [x] **PieChart.tsx** ✅ (262 lines, categorical data charts)
- [x] **Debug page:** `/debug/charts` ✅

### Financial Reporting - `/components/financial-reports/`
- [x] **IncomeStatementSimple.tsx** ✅ (177 lines, basic P&L)
- [x] **IncomeStatementDetailed.tsx** ✅ (337 lines, detailed P&L)
- [x] **CashFlowStatementSimple.tsx** ✅ (273 lines, three-activity cash flow)
- [x] **CashFlowStatementDetailed.tsx** ✅ (496 lines, comprehensive cash flow)
- [x] **BalanceSheetSimple.tsx** ✅ (308 lines, basic balance sheet)
- [x] **BalanceSheetDetailed.tsx** ✅ (710 lines, detailed balance sheet)
- [x] **Debug page:** `/debug/financial-reports` ✅

### Drag & Drop Exercises - `/components/drag-drop-exercises/`
- [x] **AccountCategorization.tsx** ✅ (763 lines, account sorting with hints)
- [x] **BreakEvenComponents.tsx** ✅ (727 lines, break-even analysis building)
- [x] **CashFlowTimeline.tsx** ✅ (660 lines, timeline-based cash flow)
- [x] **FinancialStatementMatching.tsx** ✅ (758 lines, statement item matching)
- [x] **TrialBalanceSorting.tsx** ✅ (686 lines, trial balance construction)
- [x] **Debug page:** `/debug/drag-drop-exercises` ✅

### Additional Drag & Drop in `/components/drag-drop/`
- [x] **BusinessTransactionCategorization.tsx** ✅ (690 lines, transaction categorization)

### Exercise Framework - `/components/exercises/`
- [x] **ComprehensionCheck.tsx** ✅ (205 lines, quiz framework) **[INTEGRATED IN ALL UNITS]**
- [x] **DragAndDrop.tsx** ✅ (682 lines, reusable drag-drop framework)
- [x] **FillInTheBlank.tsx** ✅ (610 lines, has TODO markers but functional)
- [x] **JournalEntryBuilding.tsx** ✅ (721 lines, has TODO markers but functional)
- [x] **Debug page:** `/debug/exercises` ✅

### Accounting Components - `/components/accounting/`
- [x] **TAccountSimple.tsx** ✅ (202 lines, basic T-account display)
- [x] **TAccountDetailed.tsx** ✅ (386 lines, advanced T-account calculations)
- [x] **JournalEntry.tsx** ✅ (316 lines, journal entry display/editing)
- [x] **TrialBalance.tsx** ✅ (384 lines, trial balance generation)
- [x] **Debug page:** `/debug/accounting` ✅

## 🔄 TODO: Missing Unit-Specific Components
**CRITICAL:** These were marked as "added" but don't actually exist yet:

### Unit 3 Components (Three-Statement Storyboard)
- [ ] **RatioMatching.tsx** - match financial ratios to formulas **[CLAIMED ADDED BUT MISSING]**

### Unit 4 Components (Data-Driven Café)
- [ ] **BudgetCategorySort.tsx** - organize expenses into budget categories **[CLAIMED ADDED BUT MISSING]**
- [ ] **PercentageCalculationSorting.tsx** - sort business scenarios by calculation type **[CLAIMED ADDED BUT MISSING]**

### Unit 5 Components (PayDay Simulator)
- [ ] **InterestCalculationBuilder.tsx** - build interest calculations **[CLAIMED ADDED BUT MISSING]**

### Unit 6 Components (PriceLab Challenge)
- [ ] **BreakEvenAnalysisCalculator.tsx** - comprehensive break-even analysis **[CLAIMED ADDED BUT MISSING]**

### Unit 7 Components (Asset & Inventory Tracker)
- [ ] **InventoryFlowDiagram.tsx** - arrange inventory costs in FIFO/LIFO patterns **[CLAIMED ADDED BUT MISSING]**
- [ ] **DepreciationMethodBuilder.tsx** - build depreciation schedules **[CLAIMED ADDED BUT MISSING]**

### Cross-Unit Components
- [ ] **ReflectionJournal.tsx** - individual learning reflection **[CLAIMED ADDED BUT MISSING]**

## 🔄 TODO: Remaining Components by Unit

### Unit 01 Components (Smart Ledger Launch)
- [ ] **TAccountsVisualization.tsx** - Visual T-accounts showing Assets = Liabilities + Equity
- [ ] **TransactionJournal.tsx** - Record transactions for chosen client focus
- [ ] **ErrorCheckingSystem.tsx** - Build conditional formatting rules for validation
- [ ] **PitchPresentationBuilder.tsx** - 4-minute investor pitch preparation tool
- [ ] **DynamicAccountSelection.tsx** - Account selection component
- [ ] **StartupVentureSelector.tsx** - Venture selection component
- [ ] **TrialBalanceGenerator.tsx** - Auto-check formula generator
- [ ] Create debug/unit01/page.tsx test page

### Unit 02 Components (Month-End Wizard)
- [ ] **MonthEndWizard.tsx** - Build automated closing entry system
- [ ] **MonthEndCloseSimulator.tsx** - Full time simulation under 2 hours
- [ ] **AdjustingEntryMapper.tsx** - Interactive GAAP principles mapping
- [ ] **AutomationPathSelector.tsx** - Team specialization selection
- [ ] **CFOVlogPlayer.tsx** - 5-minute CFO video component
- [ ] **ReceiptSortingChallenge.tsx** - Timed receipt processing simulation
- [ ] **PeerFeedbackForm.tsx** - Structured feedback collection
- [ ] **SprintRetrospectiveTool.tsx** - Team retrospective component
- [ ] **ToolingChoiceSelector.tsx** - Macro vs VBA selection
- [ ] **UIDesigner.tsx** - Professional button interface creator
- [ ] **UserTestingSurvey.tsx** - Demo feedback collection
- [ ] Create debug/unit02/page.tsx test page

### Unit 03 Components (Three-Statement Storyboard)
- [ ] **FinancialStatementBuilder.tsx** - Income/Balance/Cash Flow construction
- [ ] **InteractiveDashboard.tsx** - KPI dashboard with charts and ratios
- [ ] **KPIDisplay.tsx** - Professional performance indicator visualization
- [ ] **IndustrySelector.tsx** - Industry focus selection
- [ ] **DesignThemeSelector.tsx** - Dashboard theme selection
- [ ] **PresentationPitchBuilder.tsx** - Investor one-pager and pitch prep
- [ ] **PeerReviewSystem.tsx** - Gallery walk critique system
- [ ] **QuizEngine.tsx** - Quiz framework component
- [ ] **FeedbackCollector.tsx** - Expert CPA review collection
- [ ] Create debug/unit03/page.tsx test page

### Unit 04 Components (Data-Driven Café)
- [ ] **POSDataCleaner.tsx** - Text-to-Columns, TRIM, duplicate removal
- [ ] **OutlierDetector.tsx** - Z-score calculator and outlier identification
- [ ] **DescriptiveStatsCalculator.tsx** - Mean, median, standard deviation
- [ ] **HistogramBuilder.tsx** - Interactive histogram creator
- [ ] **BoxPlotVisualization.tsx** - Box plot chart component
- [ ] **ScatterPlotBuilder.tsx** - Scatterplot visualization tool
- [ ] **RegressionForecaster.tsx** - Linear regression and FORECAST.LINEAR
- [ ] **DemandForecastModel.tsx** - Demand forecasting simulation
- [ ] **CostSavingsSimulator.tsx** - Scenario-based cost analysis
- [ ] **InfographicDesigner.tsx** - Statistical analysis poster creation
- [ ] **PitchStoryboardBuilder.tsx** - 90-second pitch planning
- [ ] **FocusAreaSelector.tsx** - Beverage/pastry/staffing choice
- [ ] **TeamRoleAssigner.tsx** - Data analyst/designer/strategist roles
- [ ] **PeerCritiqueForm.tsx** - Structured feedback collection
- [ ] **ReflectionAnalyzer.tsx** - Outlier impact analysis
- [ ] **PredictionValidator.tsx** - Predicted vs actual comparison
- [ ] Create debug/unit04/page.tsx test page

### Unit 05 Components (PayDay Simulator)
- [ ] **BankStatementAnalyzer.tsx** - Bank statement parsing and analysis
- [ ] **PayrollRegisterViewer.tsx** - Payroll register display and editing
- [ ] **GrossPayCalculator.tsx** - Gross pay with wage bands
- [ ] **TaxWithholdingCalculator.tsx** - Tax table lookup and deductions
- [ ] **NetPayCalculator.tsx** - Net pay with all deductions
- [ ] **EmployerTaxCalculator.tsx** - Employer tax contributions
- [ ] **PayStubGenerator.tsx** - Bilingual pay stub creation
- [ ] **XLOOKUPTutorial.tsx** - Interactive XLOOKUP learning
- [ ] **PayrollReconciler.tsx** - Bank vs payroll reconciliation
- [ ] **CashFlowPredictor.tsx** - Payroll cash-out timing predictor
- [ ] **EmployeeTypeSelector.tsx** - Hourly/tipped/salaried choice
- [ ] **ScreencastPlanner.tsx** - Tutorial script and storyboard
- [ ] **PayrollScenarioTester.tsx** - Extreme scenario testing
- [ ] **OverdraftSimulator.tsx** - Cash flow timing mismatch simulator
- [ ] **BilingualStubFormatter.tsx** - English/Chinese stub formatting
- [ ] Create debug/unit05/page.tsx test page

### Unit 06 Components (PriceLab Challenge)
- [ ] **CompetitorPriceImporter.tsx** - Power Query data import simulation
- [ ] **DataTransformationTool.tsx** - Power Query transformation interface
- [ ] **MarkupMarginCalculator.tsx** - Markup vs margin computation
- [ ] **BreakEvenPointCalculator.tsx** - Break-even analysis calculator
- [ ] **CVPModelBuilder.tsx** - Cost-Volume-Profit model constructor
- [ ] **CVPGraphGenerator.tsx** - Interactive CVP chart creator
- [ ] **GoalSeekSimulator.tsx** - Target profit scenario calculator
- [ ] **OneVariableDataTable.tsx** - Single-variable sensitivity analysis
- [ ] **TwoVariableDataTable.tsx** - Dual-variable what-if analysis
- [ ] **SensitivityAnalyzer.tsx** - Comprehensive sensitivity testing
- [ ] **CompetitorSegmentSelector.tsx** - Budget/mid-market/premium choice
- [ ] **PricingRecommendationBuilder.tsx** - Memo/deck creation tool
- [ ] **CVPChartCustomizer.tsx** - Chart annotation and styling
- [ ] **DebatePreparationTool.tsx** - Argument structuring and Q&A prep
- [ ] **PricingDebateSimulator.tsx** - Town-hall debate simulation
- [ ] **RevisionTracker.tsx** - Feedback incorporation and change tracking
- [ ] Create debug/unit06/page.tsx test page

### Unit 07 Components (Asset & Inventory Tracker)
- [ ] **AssetInventoryDataViewer.tsx** - Asset and inventory data exploration
- [ ] **StraightLineDepreciationCalculator.tsx** - SLN function implementation
- [ ] **DoubleDecliningBalanceCalculator.tsx** - DDB function implementation
- [ ] **DepreciationScheduleBuilder.tsx** - Automated depreciation schedules
- [ ] **FIFOInventoryCalculator.tsx** - First-In-First-Out valuation
- [ ] **LIFOInventoryCalculator.tsx** - Last-In-First-Out valuation
- [ ] **InventoryLayerTracker.tsx** - Array formula layer costing
- [ ] **COGSCalculator.tsx** - Cost of Goods Sold computation
- [ ] **InventoryTurnoverCalculator.tsx** - Turnover ratio analysis
- [ ] **DepreciationMethodSelector.tsx** - Dynamic SLN/DDB dropdown
- [ ] **InventoryMethodSelector.tsx** - Dynamic FIFO/LIFO dropdown
- [ ] **IndustryContextSelector.tsx** - Retail/manufacturing/technology choice
- [ ] **VisualizationStyleSelector.tsx** - Waterfall vs line graph choice
- [ ] **SalvageValueSensitivityAnalyzer.tsx** - Salvage value sensitivity
- [ ] **AdvisoryBriefBuilder.tsx** - 2-3 page brief creation
- [ ] **BoardPresentationBuilder.tsx** - 5-minute pitch preparation
- [ ] **CashFlowTaxImpactAnalyzer.tsx** - Method comparison analysis
- [ ] Create debug/unit07/page.tsx test page

### Unit 08 Components (Year-1 Startup Model)
- [ ] **PitchDeckFailureAnalyzer.tsx** - Anonymized failure case studies
- [ ] **VCRedFlagChecker.tsx** - Startup model red flag detection
- [ ] **ThreeStatementLinker.tsx** - Income/balance/cash flow linking
- [ ] **CrossSheetLinkingTool.tsx** - Formula integrity validator
- [ ] **IncomeStatementBuilder.tsx** - Comprehensive income statement
- [ ] **BalanceSheetBuilder.tsx** - Balance sheet integration
- [ ] **CashFlowStatementBuilder.tsx** - Cash flow statement generator
- [ ] **ScenarioManager.tsx** - Multiple scenario creation/management
- [ ] **SensitivityTableBuilder.tsx** - Sensitivity analysis tables
- [ ] **TornadoChartGenerator.tsx** - Top driver analysis visualization
- [ ] **FormulaAuditor.tsx** - Precedent tracing and circular reference detection
- [ ] **ModelIntegrityChecker.tsx** - Comprehensive model validation
- [ ] **StartupRiskAnalyzer.tsx** - Risk assessment and scenario impact
- [ ] **KPIDashboardBuilder.tsx** - Key performance indicator dashboard
- [ ] **VCPitchDeckBuilder.tsx** - 8-slide VC presentation creator
- [ ] **DemoDaySimulator.tsx** - VC panel Q&A simulation
- [ ] **TeamRoleAssigner.tsx** - CFO/COO/CMO role assignment
- [ ] **CAPReflectionTool.tsx** - Courage/Adaptability/Persistence reflection
- [ ] Create debug/unit08/page.tsx test page

### Spreadsheet Simulator Components
- [ ] **SpreadsheetSimulator.tsx** - Excel practice environment
- [ ] **SafeFormulaEvaluator.tsx** - Secure formula evaluation utility
- [ ] Create debug/spreadsheet-simulator/page.tsx test page

## Cross-Unit Support Components Needed
- [ ] **PeerCritiqueForm.tsx** - Structured feedback collection (multiple units)
- [ ] **FeedbackCollector.tsx** - Expert stakeholder feedback (multiple units)
- [ ] **TeamRoleAssigner.tsx** - Role assignment system (multiple units)
- [ ] **RevisionTracker.tsx** - Change tracking and feedback incorporation

## Development Priorities

### IMMEDIATE (Phase 1): Fix Missing "Added" Components
These were incorrectly marked as completed and integrated:
1. Create the 7 missing unit-specific components that were claimed as added
2. Create the missing ReflectionJournal.tsx cross-unit component
3. Verify integration into the claimed units

### HIGH PRIORITY (Phase 2): Complete Unit 1 Foundation
Unit 1 is the foundation - complete these 4 critical components:
1. TAccountsVisualization.tsx
2. TransactionJournal.tsx  
3. ErrorCheckingSystem.tsx
4. PitchPresentationBuilder.tsx

### MEDIUM PRIORITY (Phase 3): Cross-Unit Infrastructure
1. SpreadsheetSimulator.tsx (needed by all units)
2. PeerCritiqueForm.tsx (feedback system)
3. FeedbackCollector.tsx (expert review system)

### ONGOING: Unit-by-Unit Completion
Complete remaining components unit by unit, focusing on educational value and Excel integration.

## Component Status Summary
- **Completed & Functional:** 30 components ✅
- **Missing but Claimed Added:** 8 components 🚨
- **Remaining to Build:** ~150+ components 🔄
- **Debug Pages Active:** 6 of 6 completed categories ✅

**NEXT ACTION:** Create the 8 missing components that were incorrectly marked as completed.