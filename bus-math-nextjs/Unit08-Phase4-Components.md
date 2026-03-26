# Unit 08: Phase Components Specification

## Overview

This document specifies all interactive components for Unit 8 Lessons 01-07, including:
- **Phase 1 (Hook)**: Video components with Sarah's narrative
- **Phase 4 (Independent Practice)**: Hands-on practice components

---

## Lesson 01: Video Component (Phase 1 - Hook)

### Video Data Specification

```tsx
const videoData = {
  title: "Sarah's Equipment Expansion Dilemma",
  description:
    "Sarah Chen thought recording equipment purchases would be simple. Then her accountant explained depreciation, and Sarah realized her profit calculations were about to get more complicated. This launch video introduces the shared business problem for Unit 08.",
  youtubeId: "[PLACEHOLDER - To be created]",
  duration: "3:30",
  transcript: `I thought buying equipment for our new office space would be simple. We found a great location, I ordered workstations for the team, picked out furniture, even bought a company vehicle for client visits. The total came to about sixty-nine thousand dollars. I opened my accounting software ready to record everything asone big January expense.

That's when my accountant, Jennifer Kim, stopped me cold. "Sarah, you can't expense sixty-nine thousand dollars in one month. That would wipe out your profit and it wouldn't match reality either."

She explained the matching principle. These computers, this furniture, the vehicle—they'll help me generate revenue for years. So the cost should be spread over those years. She called it depreciation.

Jennifer started throwing around terms like "straight-line" and "double-declining balance" and "useful life." She was asking me to make choices about how to spread out each purchase. My choices would affect my profit, my taxes, and what investors see in my numbers.

Then Marcus—my mentor—called to check on my funding prep. He said, "Sarah, investors will want to know what you own, what it's worth, and how you're accounting for it. You need a clean asset register and a depreciation schedule you can explain and defend."

I realized I knew how to track inventory, but I didn't know how to manage the long-term stuff. Unit 08 starts right there. Your job is to learn how businesses decide what counts as an asset, spread costs over time using depreciation, and build a defensible asset register.`
}
```

### Phase 1 Page Structure (Hook)

**Main Message**: Sarah has a founder problem, not an accounting vocabulary problem.

**Problem in One Sentence**: Sarah can record what she bought, but she cannot explain how to spread the cost over time or defend her depreciation choices.

**Interactive Component**: `AssetPurchaseConfusion.tsx`

```tsx
interface AssetPurchaseConfusionProps {
  purchases: AssetPurchase[];
  onComplete?: (reflections: Reflection[]) => void;
}

interface AssetPurchase {
  id: string;
  description: string;
  amount: number;
  purchaseDate: string;
  sarahThought: string; // What Sarah initially thought
  jenniferClarification: string; // What's actually correct
}
```

**Component Purpose**: Show the disconnect between Sarah's initial understanding ("expense it all") and the correct approach ("capitalize and depreciate").

**Sample Card Content**:

| Purchase | Sarah's Thought | Reality |
|----------|----------------|---------|
| "$28,000 for a vehicle" | "I'll just expense this in January" | "This will help you for 5 years. Spread the cost." |
| "$127 for office supplies" | "Same as the vehicle, right?" | "No, this is a regular expense. It's used up immediately." |
| "$15,000 for workstations" | "Another big expense" | "These are assets with a 3-year life. Depreciate them." |

**Discussion Prompt (Turn and Talk)**:
- "If Sarah expenses everything in January, what happens to her profit for that month?"
- "Why would an investor care how Sarah accounts for her equipment?"
- "What's the difference between buying something you use up right away versus something you use for years?"

---

## Phase 4 Independent Practice Components

Phase 4 (Independent Practice) occurs after Hook (Phase 1), Introduction (Phase 2), and Guided Practice (Phase 3). Students work independently or in small groups to apply concepts with realistic business data.

**Design Principles**:
- Each component builds on the lesson's enduring understanding
- Uses Sarah's TechStart Solutions as the primary simulation context
- Includes realistic financial data appropriate to Month 15-16 business stage
- Provides immediate feedback where possible
- Connects to the workbook model students will build
- Supports the unit's core formula: `Book Value = Cost - Accumulated Depreciation`

---

## Lesson 01: Asset Classification & Capitalization

### Phase 4 Component: `AssetClassificationExercise.tsx`

**Purpose**: Distinguish between costs that should be capitalized vs. expensed, and understand the matching principle.

**Problem Context**:
Sarah is reviewing the past month's purchases for her new office expansion. She needs to classify each purchase correctly for her accountant, Jennifer Kim. Some purchases should be recorded as assets (capitalized), while others should be recorded as expenses in the current period.

**Component Design**:

```tsx
interface TransactionItem {
  id: string;
  description: string;
  amount: number;
  date: string;
  expectedLife?: string;
  context: string;
  correctClassification: 'capitalize' | 'expense';
  explanation: string;
}

interface AssetClassificationExerciseProps {
  transactions: TransactionItem[];
  title?: string;
  onComplete?: (results: ClassificationResult[]) => void;
}
```

**Interactive Elements**:
1. **Drag-and-Drop Classification Board**
   - Left column: "Capitalize as Asset"
   - Right column: "Expense Now"
   - Transaction cards in the middle for sorting
   
2. **Classification Criteria Sidebar**
   - Pop-up reference showing the matching principle
   - "Long-term benefit test" checklist
   - Materiality threshold explanation ($500 in Sarah's business)

3. **Immediate Feedback on Each Card**
   - Green highlight for correct classification
   - Red highlight with explanation for incorrect
   - Running score showing accuracy percentage

**Transaction Set (12 items)**:

| # | Description | Amount | Expected Life | Classification |
|---|-------------|--------|---------------|----------------|
| 1 | Dell Precision workstation (design work) | $2,400 | 3 years | Capitalize |
| 2 | Office supplies (paper, pens, staples) | $127 | N/A | Expense |
| 3 | Adobe Creative Cloud annual subscription | $2,400 | 1 year | Capitalize* |
| 4 | Monthly internet bill | $89 | N/A | Expense |
| 5 | Standing desk frame | $489 | 7 years | Capitalize |
| 6 | Coffee and snacks for client meeting | $43 | N/A | Expense |
| 7 | Used Honda CR-V for client visits | $28,500 | 5 years | Capitalize |
| 8 | LinkedIn Premium monthly subscription | $60 | N/A | Expense |
| 9 | Canon EOS R6 camera for content | $2,899 | 5 years | Capitalize |
| 10 | Client lunch meeting | $156 | N/A | Expense |
| 11 | Conference room projector | $899 | 5 years | Capitalize |
| 12 | Website hosting (annual prepayment) | $359 | 1 year | Expense** |

*Note: Annual software subscriptions can be capitalized if they benefit multiple periods
**Note: Hosting is typically expensed as it's a service, not an owned asset

**Learning Outcomes**:
- Students correctly classify at least 10/12 transactions
- Students explain the matching principle in their own words
- Students identify when to apply materiality thresholds

**Data File**: `unit08-lesson01-asset-classification-practice.csv`

```csv
transaction_id,description,amount,date,expected_life,vendor,classification,retain_explanation
TX001,"Dell Precision 5560 workstation (graphic design)",2400,2024-01-15,36,"Dell Business","capitalize","Asset with 3+ year useful life that will generate revenue"
TX002,"Office supplies (paper, pens, staples)",127,2024-01-16,0,"Office Depot","expense","Consumable with no lasting benefit; used immediately"
TX003,"Adobe Creative Cloud annual subscription",2400,2024-01-17,12,"Adobe","capitalize","Prepaid expense benefiting 12 months; can be capitalized"
...
```

---

## Lesson 02: Depreciation Foundations

### Phase 4 Component: `DepreciationFoundationLab.tsx`

**Purpose**: Calculate straight-line depreciation by hand, understand book value tracking, and see how depreciation spreads cost over useful life.

**Problem Context**:
Sarah has purchased a company vehicle for client visits. Jennifer Kim explains that she can't just deduct the entire cost in year one. Students calculate the annual depreciation and track the book value over the asset's life.

**Component Design**:

```tsx
interface DepreciationSchedule {
  assetName: string;
  cost: number;
  salvageValue: number;
  usefulLife: number;
  purchaseDate: string;
  depreciationMethod: 'straight-line';
}

interface DepreciationFoundationLabProps {
  assets: DepreciationSchedule[];
  title?: string;
  showHints?: boolean;
  onComplete?: (schedules: CompletedSchedule[]) => void;
}
```

**Interactive Elements**:

1. **Formula Demonstration Panel**
   - Animated breakdown of: `(Cost - Salvage) ÷ Useful Life = Annual Depreciation`
   - Highlighted fields that students fill in
   - Real-time calculation as students input values

2. **Depreciation Schedule Table Builder**
   - Empty table template students must complete:
   
   | Year | Beginning Book Value | Depreciation Expense | Accumulated Depreciation | Ending Book Value |
   |------|---------------------|---------------------|-------------------------|-------------------|
   | 1 | $28,000 | $_____ | $_____ | $_____ |
   | 2 | $_____ | $_____ | $_____ | $_____ |
   | 3 | $_____ | $_____ | $_____ | $_____ |
   | 4 | $_____ | $_____ | $_____ | $_____ |
   | 5 | $_____ | $_____ | $_____ | $3,000|

3. **Book Value Tracker Visualization**
   - Line graph showing book value decline over time
   - Hover states showing values at each year
   - Comparison to original cost

4. **Concept Check Questions**
   - Why can't Sarah deduct the full $28,000 as an expense in Year 1?
   - What happens to the vehicle's book value each year?
   - What is Accumulated Depreciation?

**Practice Asset Set (3 assets)**:

| Asset | Cost | Salvage Value | Useful Life |
|-------|------|---------------|-------------|
| Company Vehicle (Honda CR-V) | $28,000 | $3,000 | 5 years |
| Design Workstation Setup | $15,000 | $1,500 | 3 years |
| Office Furniture Package | $12,000 | $1,000 | 7 years |

**Student Tasks**:
1. Calculate annual depreciation for each asset using the straight-line formula
2. Complete a 5-year depreciation schedule for the vehicle
3. Answer: "What is the vehicle's book value at the end of Year 3?"
4. Answer: "How much total depreciation will have been recorded by the end of Year 5?"

**Learning Checkpoints**:
- Correct depreciation formula application
- Accurate schedule completion
- Understanding of accumulated depreciation as a running total
- Recognition that book value never goes below salvage value

**Data File**: `unit08-lesson02-depreciation-foundations-practice.csv`

---

## Lesson 03: Straight-Line Method Deep Dive

### Phase 4 Component: `StraightLineScheduleBuilder.tsx`

**Purpose**: Build complete straight-line depreciation schedules for multiple assets and understand when SLN is the preferred method.

**Problem Context**:
Sarah's business has acquired five different assets. She needs to build depreciation schedules for each using straight-line depreciation. Jennifer Kim wants her to understand which assets benefit most from this method.

**Component Design**:

```tsx
interface MultiAssetSchedule {
  assets: AssetDepreciationData[];
  selectedAssetForDetails: string | null;
  comparisonView: boolean;
}

interface AssetDepreciationData {
  id: string;
  name: string;
  category: 'technology' | 'vehicle' | 'furniture' | 'equipment';
  cost: number;
  salvageValue: number;
  usefulLife: number;
  acquisitionDate: string;
  annualDepreciation: number;
  methodRecommendation: 'straight-line' | 'accelerated' | 'either';
  methodRationale: string;
}
```

**Interactive Elements**:

1. **Asset Dashboard**
   - Side panel showing all 5 assets with key details
   - Click to select and view detailed schedule
   - Live calculation of total annual depreciation

2. **Schedule Builder (for selected asset)**
   - Step-by-step formula calculation
   - Interactive table filling
   - Automatic validation (turning green when correct)
   - Error messages for common mistakes (e.g., book value < salvage)

3. **Method Recommendation Panel**
   - For each asset, students select: "Best for Straight-Line?" Yes/No
   - Contextual hints about asset characteristics
   - Explanation reveals after answer

4. **Annual Depreciation Summary**
   - Bar chart showing depreciation by asset by year
   - Total depreciation expense per year
   - Impact on annual profit (simplified income statement view)

**Full Asset Set (5 assets from Sarah's expansion)**:

| Asset | Cost | Salvage | Life | Category | SLN Fit |
|-------|------|---------|------|----------|---------|
| Design Workstations (3) | $15,000 | $1,500 | 3 yr | Technology | Partial (tech depreciates fast) |
| Adobe CC Annual License | $8,000 | $0 | 2 yr | Technology | Yes (even benefit) |
| Company Vehicle (Honda CR-V) | $28,000 | $3,000 | 5 yr | Vehicle | No (accelerated better) |
| Office Furniture | $12,000 | $1,000 | 7 yr | Furniture | Yes (steady use) |
| Photography Equipment | $6,000 | $500 | 5 yr | Equipment | Partial (could use either) |

**Student Tasks**:
1. Complete straight-line schedules for all 5 assets
2. Calculate Sarah's total annual depreciation expense (all assets combined)
3. For each asset, answer: "Is straight-line the best method? Why or why not?"
4. Create a summary showing: Beginning Book Value → Total Dep → Ending Book Value for all assets

**Key Insight for Students**:
Sarah's total annual SLN depreciation = $9,928.57
This reduces her taxable income by this amount each year (non-cash expense).

**Data File**: `unit08-lesson03-straight-line-practice.csv`

---

## Lesson 04: Double-Declining Balance Method

### Phase 4 Component: `DDBScheduleBuilder.tsx`

**Purpose**: Calculate double-declining balance depreciation, understand accelerated depreciation timing, and compare DDB to straight-line.

**Problem Context**:
Jennifer Kim shows Sarah that for certain assets, straight-line might not reflect how quickly they lose value. The company vehicle is a perfect example—cars depreciate fastest in the first few years. Students learn to calculate DDB and see why timing matters.

**Component Design**:

```tsx
interface DDBScheduleBuilderProps {
  asset: AssetData;
  showMethodComparison: boolean;
  visualMode: 'table' | 'graph' | 'both';
  hintsEnabled: boolean;
  onComplete?: (schedule: DDBSchedule, comparisonAnalysis: string) => void;
}

interface DDBSchedule {
  years: number[];
  beginningBookValue: number[];
  depreciationRate: number;
  depreciationExpense: number[];
  accumulatedDepreciation: number[];
  endingBookValue: number[];
}
```

**Interactive Elements**:

1. **DDB Formula Interpreter**
   - Step 1: Calculate straight-line rate (1 ÷ useful life)
   - Step 2: Double it (× 2)
   - Step 3: Apply to beginning book value each year
   - Step 4: Ensure final year doesn't go below salvage
   - Animated calculator showing each step

2. **DDB Schedule Table (fill-in-blanks)**
   
   **Vehicle Example ($28,000, 5 years, $3,000 salvage)**:
   
   | Year | Beginning BV | Rate | Depreciation | Accumulated Dep | Ending BV |
   |------|-------------|------|-------------|-----------------|-----------|
   | 1 | $28,000 | 40% | $11,200 | $11,200 | $16,800 |
   | 2 | $16,800 | 40% | $6,720 | $17,920 | $10,080 |
   | 3 | $10,080 | 40% | $4,032 | $21,952 | $6,048 |
   | 4 | $6,048 | 40% | $2,419.20 | $24,371.20 | $3,628.80 |
   | 5 | $3,628.80 | — | $628.80* | $25,000 | $3,000 |

   *Note: Year 5 adjusts to ensure book value doesn't go below salvage

3. **Method Comparison Side-by-Side**
   - Toggle between SLN and DDB views
   - Bar chart comparison of annual depreciation
   - Total depreciation remains the same ($25,000) but timing differs

4. **Impact Visualization**
   - "What if income statement" showing profit impact by year
   - Highlight: DDB lowers profit MORE in early years
   - Explain: Same total depreciation, different timing

5. **Method Selection Decision Tree**
   - Asset characteristics questions:
     - Does asset lose value quickly? (Vehicle: Yes, Furniture: No)
     - Is tax benefit timing important? (Startup: Yes)
     - Is consistent profit reporting preferred? (Investors: Maybe)
   - Based on answers, recommend SLN or DDB

**Practice Assets for DDB**:

| Asset | Cost | Salvage | Life | DDB Practice? |
|-------|------|---------|------|----------------|
| Vehicle (primary) | $28,000 | $3,000 | 5 yr | Full schedule |
| Photography Equipment | $6,000 | $500 | 5 yr | Partial schedule |
| Design Workstation | $15,000 | $1,500 | 3 yr | Comparison only |

**Student Tasks**:
1. Calculate DDB depreciation for the vehicle (5-year schedule)
2. Compare Year 1 DDB depreciation ($11,200) vs. SLN ($5,000)
3. Answer: "Why would a startup prefer DDB for this vehicle?"
4. Calculate total depreciation for both methods—verify they're the same
5. Write a brief recommendation: Which method for Sarah's vehicle and why?

**Key Insight**:
DDB gives Sarah $6,200 more depreciation in Year 1, reducing taxable income more in early years when cash is tightest.

**Data File**: `unit08-lesson04-ddb-practice.csv`

---

## Lesson 05: Method Comparison Workbook

### Phase 4 Component: `MethodComparisonWorkbench.tsx`

**Purpose**: Compare SLN and DDB side-by-side for multiple assets, understand business implications of method choice, and build a method comparison workbook.

**Problem Context**:
Sarah needs to decide on depreciation methods for all her assets. Jennifer Kim wants her to see the full picture—how each method choice affects her financial statements over 5 years. Students build a comparison workbook and make recommendations.

**Component Design**:

```tsx
interface MethodComparisonWorkbenchProps {
  assets: CompleteAssetData[];
  comparisonYears: number;
  showFinancialImpact: boolean;
  outputFormat: 'workbook' | 'summary' | 'both';
}

interface CompleteAssetData {
  id: string;
  name: string;
  cost: number;
  salvageValue: number;
  usefulLife: number;
  category: string;
  slnSchedule: DepreciationSchedule;
  ddbSchedule: DepreciationSchedule;
  recommendedMethod: 'SLN' | 'DDB' | 'Either';
  recommendationRationale: string;
}
```

**Interactive Elements**:

1. **Multi-Asset Dashboard**
   - All 5 assets listed with key parameters
   - Quick-select for detailed view
   - Running total of annual depreciation

2. **Side-by-Side Schedule View**
   - Left: Straight-Line schedule
   - Right: DDB schedule
   - Highlighted differences in each year
   - Running totals comparison

3. **Method Recommendation Form**
   - For each asset, students fill out:
     - Recommended method (dropdown)
     - Rationale (text input with prompts)
     - When would you choose differently? (scenario thinking)

4. **Financial Impact Summary**
   - Year-by-year profit impact comparison
   - Cumulative depreciation by method
   - Cash flow implications (depreciation is non-cash)
   - Investor perception considerations

5. **Executive Summary Generator**
   - Students write 3-sentence summary:
     - "For the vehicle, I recommend ___ because ___"
     - "For the furniture, I recommend ___ because ___"
     - "Total Year 1 depreciation under SLN: $___ vs. DDB: $___"

**Workbook Structure for Students to Build**:

```
Sheet: AssetRegister
| Asset | Cost | Salvage | Life | Category | Acquisition | Method |
|-------|------|---------|------|----------|-------------|--------|
| Vehicle | $28,000 | $3,000 | 5 | Vehicle | 2024-01-15 | [STUDENT SELECTS] |
| Workstations | $15,000 | $1,500 | 3 | Tech | 2024-01-10 | [STUDENT SELECTS] |
...

Sheet: SLN_Schedule
[Full straight-line schedules for all assets]

Sheet: DDB_Schedule
[Full DDB schedules for all assets]

Sheet: Comparison
| Year | Total SLN Dep | Total DDB Dep | Difference |
|------|---------------|---------------|------------|
| 1 | $9,929 | $16,120 | $6,191 |
| 2 | $9,929 | $9,672 | -$257 |
...

Sheet: Recommendation
[Student-written method recommendations for each asset]
```

**Student Tasks**:
1. Complete schedules for all 5 assets under both methods
2. Calculate total annual depreciation by method
3. Identify: Which method gives higher Year 1 depreciation?
4. Calculate: How much more/less profit does DDB show in Year 1?
5. Write recommendations for each asset with justification
6. Create a summary: "If Sarah wants to minimize taxable income in Year 1, she should use DDB for ___ and SLN for ___"

**Method Recommendations (Answer Key)**:

| Asset | Recommended | Rationale |
|-------|-------------|-----------|
| Vehicle | DDB | Loses value quickly; tax benefit valuable for startup |
| Workstations | DDB | Technology depreciates fast; 3-year life benefits from acceleration |
| Adobe License | SLN | Even benefit over 2 years; subscription is predictable |
| Furniture | SLN | 7-year life; steady use; investors prefer consistent reporting |
| Photography Equipment | Either | 5-year moderate life; context-dependent decision |

**Data File**: `unit08-lesson05-method-compare-practice.csv`

---

## Lesson 06: Integrated Asset Register

### Phase 4 Component: `AssetRegisterIntegrationLab.tsx`

**Purpose**: Integrate the asset register, depreciation schedules, and financial statement impact into one cohesive workbook.

**Problem Context**:
Sarah is preparing financial statements for her investors. Jennifer Kim explains that depreciation affects both the income statement (as an expense) and the balance sheet (reducing asset book value). Students build an integrated model showing how depreciation flows through the statements.

**Component Design**:

```tsx
interface AssetRegisterIntegrationLabProps {
  assets: AssetData[];
  selectedYear: number;
  showIncomeStatement: boolean;
  showBalanceSheet: boolean;
  showCashFlow: boolean;
  validationChecks: ValidationCheck[];
}

interface FinancialStatementImpact {
  incomeStatement: {
    depreciationExpense: number;
    operatingIncome: number;
    netIncome: number;
  };
  balanceSheet: {
    fixedAssetsAtCost: number;
    accumulatedDepreciation: number;
    netBookValue: number;
  };
  cashFlow: {
    netIncome: number;
    addBackDepreciation: number;
    cashFromOperations: number;
  };
}
```

**Interactive Elements**:

1. **Asset Register Master View**
   - Complete table of all assets with acquisition details
   - Running totals: Total Cost, Total Accum Dep, Total Book Value
   - Link assertions: "Does Book Value = Cost - Accum Dep?" (green checkmark when verified)

2. **Depreciation Schedule Linkage**
   - Click any asset to see its depreciation schedule
   - Hover over "Depreciation Expense" to see income statement link
   - Hover over "Accumulated Depreciation" to see balance sheet link

3. **Financial Statement Connection Diagram**
   - Visual flow:
     ```
     Asset Register
          ↓
     Depreciation Schedule
          ↓        ↓
     Income Statement    Balance Sheet
     (Depreciation       (Fixed Assets: Cost
      Expense)            minus Accum Dep)
     ```
   - Click each arrow for detailed explanation

4. **Income Statement Preview (Year X)**
   
   ```
   TechStart Solutions - Income Statement (Partial)
   For Year Ended December 31, 2024
   
   Revenue                      $220,000
   Cost of Services              (88,000)
   Gross Profit                 132,000
   
   Operating Expenses:
     Salaries                    $45,000
     Rent                        18,000
     Marketing                    8,500
     Depreciation Expense        [STUDENT CALCULATES]
     Other Operating              12,200
     Total Operating Expenses    
   
   Operating Income              [STUDENT CALCULATES]
   ```

5. **Balance Sheet Preview (Year X)**
   
   ```
   TechStart Solutions - Balance Sheet (Partial)
   As of December 31, 2024
   
   Assets:
     Current Assets:
       Cash                      $35,000
       Accounts Receivable        18,500
       Inventory                  12,000
       Total Current Assets
   
     Fixed Assets:
       Equipment                  $69,000
       Less: Accumulated Deprec.  [STUDENT CALCULATES]
       Net Fixed Assets          
   
     Total Assets                 [STUDENT CALCULATES]
   ```

6. **Validation Dashboard**
   - Check 1: Total Accum Dep = Sum of all asset accumulated depreciation
   - Check 2: Net Book Value = Total Cost - Total Accum Dep
   - Check 3: Depreciation Expense on Income = Sum of current year depreciation
   - Check 4: Balance Sheet balances (Assets = Liabilities + Equity)

**Workbook Structure for Students to Build**:

```
Sheet: Inputs
[Asset acquisition data, useful lives, salvage values, method choices]

Sheet: AssetRegister
[Master list of all fixed assets with running totals]

Sheet: SLN_Schedule
[Depreciation schedules for SLN assets]

Sheet: DDB_Schedule
[Depreciation schedules for DDB assets]

Sheet: Annual_Depreciation_Summary
[Total depreciation by year, by asset, by method]

Sheet: Income_Statement_Impact
[How depreciation affects operating income]

Sheet: Balance_Sheet_Impact
[Fixed assets at cost, accumulated depreciation, net book value]

Sheet: Checks
[Validation formulas confirming workbook integrity]

Sheet: Dashboard
[Executive summary view for quick reference]
```

**Student Tasks**:
1. Complete the asset register with all 5 assets
2. Calculate total depreciation expense for Year 1
3. Update the income statement with depreciation expense
4. Update the balance sheet with fixed assets and accumulated depreciation
5. Verify: Does Net Book Value = Total Cost - Total Accumulated Depreciation?
6. Calculate: By how much does depreciation reduce Sarah's Year 1 profit?
7. Explain: Why doesn't depreciation appear on the cash flow statement as a cash outflow?

**Key Learning Checkpoints**:
- Depreciation is a non-cash expense (reduces profit but not cash)
- Accumulated depreciation is a contra-asset account (reduces asset value)
- Fixed assets appear on balance sheet at cost
- Net book value shows the remaining asset value

**Data File**: `unit08-lesson06-asset-register-practice.csv`

---

## Lesson 07: Dress Rehearsal

### Phase 4 Component: `DepreciationWorkbookRehearsal.tsx`

**Purpose**: Complete build of an integrated depreciation workbook using a shared dataset. This is the final practice before independent project work in Lessons 8-10.

**Problem Context**:
Sarah's business is the shared simulation. Students work through the complete workflow: asset data → depreciation schedules → financial statement integration → method recommendations.

**Component Design**:

```tsx
interface DepreciationWorkbookRehearsalProps {
  scenarioName: string;
  assetData: CompleteAssetDataSet;
  workbookRequirements: WorkbookRequirement[];
  qualityChecklist: QualityCheckItem[];
  onComplete?: (workbook: CompletedWorkbook, selfAssessment: SelfAssessment) => void;
}

interface WorkbookRequirement {
  id: string;
  sheet: string;
  description: string;
  completed: boolean;
  validationFormula: string;
}

interface QualityCheckItem {
  id: string;
  criterion: string;
  checked: boolean;
  notes: string;
}
```

**Shared Simulation Data (Sarah's Complete Asset Set)**:

| Asset ID | Asset Name | Cost | Salvage | Life | Category | Acquired | Method |
|----------|------------|------|---------|------|----------|----------|--------|
| A001 | Design Workstations (3) | $15,000 | $1,500 | 3 | Technology | 2024-01-15 | [STUDENT DECIDES] |
| A002 | Adobe CC Annual License | $8,000 | $0 | 2 | Technology | 2024-01-17 | SLN |
| A003 | Honda CR-V Vehicle | $28,000 | $3,000 | 5 | Vehicle | 2024-02-01 | [STUDENT DECIDES] |
| A004 | Office Furniture Package | $12,000 | $1,000 | 7 | Furniture | 2024-02-10 | SLN |
| A005 | Canon EOS R6 Setup | $6,000 | $500 | 5 | Equipment | 2024-03-01 | [STUDENT DECIDES] |

**Total Acquisition Cost**: $69,000
**Year 1 Partial Year Depreciation**: Students must account for partial year depreciation based on acquisition dates

**Interactive Elements**:

1. **Project Brief Panel**
   - Business context: Sarah's expansion
   - Workbook requirements checklist
   - Quality expectations

2. **Workbook Build Interface**
   - Students create each sheet in sequence
   - Hint toggle for stuck students
   - Real-time validation feedback

3. **Self-Assessment Checklist**
   - Before submission, students verify:
     - [ ] All schedules complete and accurate
     - [ ] Validation checks pass (Accum Dep ≤ Cost; Book Value ≥ Salvage)
     - [ ] Income statement updated correctly
     - [ ] Balance sheet shows correct net book value
     - [ ] Method recommendations justified
     - [ ] Dashboard is clear and investor-ready

4. **Peer Review Mode**
   - Exchange workbooks with another student
   - Complete peer audit checklist
   - Provide written feedback

5. **Method Recommendation Summary**
   - Final output: Written justification for method choices
   - Format: "For the vehicle, I recommend DDB because..."
   - Include financial impact estimates

**Workbook Structure (Lesson 7 Template)**:

Students build from scratch following this structure:

```
Sheet: ReadMe
- Business: TechStart Solutions
- Owner: Sarah Chen
- Purpose: Fixed asset register and depreciation management
- Methods considered: SLN and DDB
- Date prepared: [Current Date]

Sheet: Inputs
- Asset acquisition data
- Useful life assumptions
- Salvage value assumptions
- Method selections

Sheet: AssetRegister
- Master list of all fixed assets
- Columns: ID, Name, Cost, Salvage, Life, Method, Acquired, Status
- Summary row: Total Cost, Total Expected Depreciation

Sheet: SLN_Schedule
- Straight-line schedules for SLN assets
- Year-by-year breakdown

Sheet: DDB_Schedule
- DDB schedules for DDB assets
- Year-by-year breakdown

Sheet: Annual_Summary
- Total depreciation by year
- Separate columns for SLN and DDB
- Grand total per year

Sheet: Statement_Impact
- Income statement excerpt showing depreciation expense
- Balance sheet excerpt showing fixed assets, accumulated depreciation, net book value

Sheet: Checks
- Validation: Total Accum Dep = Sum of all schedules
- Validation: Net Book Value = Total Cost - Total Accum Dep
- Validation: Book Value ≥ Salvage for each asset

Sheet: Dashboard
- Executive summary
- Key metrics: Total Assets, Total Depreciation, Average Age
- Method mix visualization

Sheet: Recommendation
- Written justification for method choices
- Financial impact summary
- Investor talking points
```

**Quality Checklist for Student Self-Assessment**:

| # | Criterion | Verified |
|---|-----------|----------|
| 1 | All 5 assets are listed in Asset Register with correct data | ☐ |
| 2 | Depreciation schedules are complete for all assets | ☐ |
| 3 | Annual totals are calculated correctly | ☐ |
| 4 | Method choices are documented in Recommendation sheet | ☐ |
| 5 | Validation checks all pass (green checkmarks) | ☐ |
| 6 | Income statement shows depreciation expense | ☐ |
| 7 | Balance sheet shows correct net book value | ☐ |
| 8 | Dashboard provides clear executive summary | ☐ |
| 9 | All formulas reference correctly (no hardcoded numbers) | ☐ |
| 10 | Workbook is organized and professional | ☐ |

**Student Tasks**:
1. Create the complete workbook from scratch
2. Decide on depreciation methods for assets where Sarah hasn't specified
3. Calculate partial-year depreciation for mid-year acquisitions
4. Complete all validation checks
5. Write method recommendation summary
6. Prepare dashboard for investor review
7. Complete self-assessment checklist
8. Exchange with peer for audit
9. Address peer feedback
10. Final submission

**Key Learning Outcome**:
Students demonstrate they can independently build a complete depreciation workbook from asset data through to financial statement integration.

**Data File**: `unit08-lesson07-shared-rehearsal.csv`

---

## Component File Naming Convention

All Phase 4 components follow this naming pattern:

```
Unit08_Lesson[XX]_[ComponentName].tsx

Component files:
- Unit08_Lesson01_AssetClassificationExercise.tsx
- Unit08_Lesson02_DepreciationFoundationLab.tsx
- Unit08_Lesson03_StraightLineScheduleBuilder.tsx
- Unit08_Lesson04_DDBScheduleBuilder.tsx
- Unit08_Lesson05_MethodComparisonWorkbench.tsx
- Unit08_Lesson06_AssetRegisterIntegrationLab.tsx
- Unit08_Lesson07_DepreciationWorkbookRehearsal.tsx

Data files:
- unit08-lesson01-asset-classification-practice.csv
- unit08-lesson02-depreciation-foundations-practice.csv
- unit08-lesson03-straight-line-practice.csv
- unit08-lesson04-ddb-practice.csv
- unit08-lesson05-method-compare-practice.csv
- unit08-lesson06-asset-register-practice.csv
- unit08-lesson07-shared-rehearsal.csv
```

---

## Technical Implementation Notes

### Component Dependencies
- All components built with React + TypeScript
- Use existing project's Tailwind CSS for styling
- Leverage shadcn/ui components (Card, Table, Input, Select, Button)
- Check existing components in `/src/components/exercises/` for patterns

### Data Structure Standards
- All CSV files use consistent column naming (snake_case)
- Monetary values as numbers (formatted as currency in display)
- Dates in ISO format (YYYY-MM-DD)
- Asset IDs as sequential strings (A001, A002, etc.)

### Interactive Patterns
- Phase-4 components should be completable in 15-25 minutes (8-minute phase duration)
- Provide immediate visual feedback for correct/incorrect answers
- Include "hint" toggle for students who need support
- Offer "skip to check" for advanced students
- Save progress to local storage for resumability

### Assessment Integration
- Each component reports completion status
- Accuracy percentages trackable for formative assessment
- Incorrect answers trigger explanatory feedback
- Self-reflection prompts at component end

---

## Summary: Phase 4 Progression

| Lesson | Component | Primary Skill | ComponentComplexity |
|--------|-----------|---------------|---------------------|
| 01 | Asset Classification | Capitalize vs. Expense decision | Low (sorting activity) |
| 02 | Depreciation Foundation | Straight-line calculation | Low-Medium (single asset schedule) |
| 03 | Straight-Line Builder | Multi-asset SLN schedules | Medium (5 assets, method fit) |
| 04 | DDB Schedule Builder | Accelerated depreciation | Medium (new formula, comparison) |
| 05 | Method Comparison | Business decision making | Medium-High (method choice, recommendation) |
| 06 | Asset Register Integration | Financial statement linkage | High (multi-sheet integration) |
| 07 | Workbook Rehearsal | Complete workflow | High (full workbook build) |

Each component builds toward Lesson 7's complete workbook, preparing students for independent project work in Lessons 8-10.