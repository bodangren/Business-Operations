# Unit 08 Lesson 07 - Project Rehearsal Workbook

Use this walkthrough with `unit08-lesson07-student.xlsx`. Lesson 07 is a rehearsal, not the final project. Every group uses the same shared data so the class can compare workbook quality before each group receives its own dataset.

## 1. Categorize Basic Entries

Open the **Entry Categories** sheet.

For each business entry, choose:

- **Report**: Income Statement or Balance Sheet
- **Section**: Revenue, Direct Costs, Operating Expenses, Current Assets, Fixed Assets, Liabilities, or Equity
- **Statement Line**: the exact line used later in the reports
- **Reason**: a short explanation of the classification

Keep this basic. The goal is to place common entries into the right report line, not to debate advanced accounting treatment.

## 2. Complete the Asset Register

On **Asset Register**, calculate **Depreciable Base**:

`=Cost - Salvage Value`

The purchase dates and months in service are already provided. These months drive the partial-year rule.

## 3. Build Partial-Year Depreciation

On **Partial-Year Depreciation**, use `XLOOKUP()` to pull asset details from the register.

Then calculate:

- Full-year straight-line depreciation with `SLN(cost, salvage, life)`
- Full-year double-declining depreciation with `DDB(cost, salvage, life, 1)`
- Year 1 depreciation by multiplying the full-year result by `months / 12`
- Ending book value as `cost - Year 1 depreciation`

The student workbook intentionally leaves these cells blank.

## 4. Compare Methods

On **Method Comparison**, link the Year 1 depreciation and ending book value results for each asset.

Use the totals row to identify:

- How much higher DDB depreciation is in Year 1
- How much lower DDB ending book value is in Year 1
- Which method creates the smoother income statement result

## 5. Build Full Simple Statements

On **Income Statement**, pull categorized entries into the report and connect depreciation expense from the method comparison.

The report should include:

- Sales revenue and service revenue
- Cost of goods sold
- Gross profit
- Operating expenses
- Depreciation expense
- Operating income
- Interest expense
- Net income

On **Balance Sheet**, pull categorized entries into the report and connect accumulated depreciation.

The report should include:

- Current assets
- Fixed assets at cost
- Accumulated depreciation
- Net fixed assets
- Liabilities
- Owner capital
- Current net income
- Balance check

The balance check should equal 0 under both methods.

## 6. Write Recommendation Evidence

On **Recommendation Evidence**, cite statement-based numbers:

- DDB's Year 1 depreciation impact
- DDB's net income impact
- DDB's net fixed asset impact
- Whether the balance sheet still balances

Your final claim should explain which method you recommend and why. Include one risk or limitation.

## Teacher Model

The completed teacher file is `unit08-lesson07-teacher.xlsx`. It shows the intended categories and formulas, but students should receive the template file so they can complete the rehearsal work.
