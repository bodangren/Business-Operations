# Unit 03 Lesson 07 – Linking the Cash Flow Statement

Follow these steps to turn `unit03-lesson07-student.xlsx` into the teacher model (`unit03-lesson07-teacher.xlsx`). Students connect the income statement and balance sheet to a simplified indirect cash flow statement.

## 1. Confirm the Starting Statements

- The workbook already contains the finished **IncomeStatement** and **BalanceSheet** from Lessons 04 and 05.
- The **CashFlow** sheet provides the layout plus a support schedule with beginning and ending balances for key working capital accounts.

## 2. Link Net Income

1. Click cell `B3`.
2. Enter `=IncomeStatement!B15`.
3. Net Income should display **4,900**, tying the cash flow statement to the income statement immediately.

## 3. Calculate Working Capital Adjustments

- Use the support schedule (rows 15-17) to determine changes:
  1. `B5`: `=-1*(C15-B15)` → Accounts Receivable increased by 3,000, so cash decreases.
  2. `B6`: `=-1*(C16-B16)` → Inventory increased by 800, also reducing cash.
  3. `B7`: `=C17-B17` → Accounts Payable decreased by 600, another cash outflow.
- Discuss why increases in assets are subtracted while decreases in liabilities reduce cash.

## 4. Summarize Operating Cash Flow

- In `B8`, enter `=B3+SUM(B5:B7)`. The result should be **500**.
- This shows TechStart generated $500 of operating cash once working capital shifts are considered.

## 5. Tie to Beginning and Ending Cash

1. Set `B10` to the provided beginning cash balance (4,700).
2. In `B11`, enter `=B10+B8` to compute ending cash (5,200).
3. Confirm this matches the cash balance on the balance sheet so the three statements stay synchronized.

## 6. Save the Teacher Version

- Save as `unit03-lesson07-teacher.xlsx`.
- Encourage students to experiment by changing a beginning balance in the support schedule to see how the adjustments ripple through.

This lesson completes the Unit 03 loop by linking the income statement, balance sheet, and cash flow statement into one coherent startup narrative.
