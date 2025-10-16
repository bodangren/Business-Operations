# Unit 03 Lesson 05 – Linking the Balance Sheet

Use this walkthrough to upgrade `unit03-lesson05-student.xlsx` into the completed teacher workbook (`unit03-lesson05-teacher.xlsx`). Students connect the income statement to a balance sheet and add a balance check.

## 1. Review the Existing Statements

- The workbook already includes a completed **IncomeStatement** from Lesson 04.
- The **BalanceSheet** now has structure but the value column is empty.
- Stress that every balance originates from the trial balance or from current-year net income.

## 2. Populate Asset Values

1. In `B4`, enter `=SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Cash")` → 5,200.
2. Repeat for the remaining assets using the same `SUMIFS` pattern:
   - Accounts Receivable (`B5`) → 3,400
   - Inventory (`B6`) → 2,600
   - Prepaid Insurance (`B7`) → 300
   - Equipment (`B8`) → 6,500
3. Sum `B4:B8` in `B9` to get **18,000** in Total Assets.

## 3. Add Liabilities and Equity

1. Liabilities:
   - `B12`: `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Accounts Payable")` → 2,100
   - `B13`: `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Notes Payable")` → 3,000
   - `B14`: `=SUM(B12:B13)` → 5,100
2. Equity:
   - `B17`: `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Common Stock")` → 5,000
   - `B18`: `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Retained Earnings")` → 3,000
   - `B19`: `=IncomeStatement!B15` pulls in net income (4,900)
   - `B20`: `=SUM(B17:B19)` → 12,900
3. `B21`: `=B14+B20` confirms Total Liabilities & Equity = 18,000.

## 4. Insert a Balance Check

- In `B22`, enter `=B9-(B21)`. A result of **0** confirms the balance sheet is in equilibrium.
- Encourage students to tweak a trial balance item to show how the balance check flags issues immediately.

## 5. Save the Teacher Version

- Save as `unit03-lesson05-teacher.xlsx`.
- Remind learners that the net income linkage is critical before they can build the cash flow statement in Lesson 07.

With the balance sheet in place, students see how Unit 03’s three statements begin to tell a consistent financial story.
