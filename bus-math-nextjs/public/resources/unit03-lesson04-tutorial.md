# Unit 03 Lesson 04 – Building the Income Statement

This guide converts the student workbook (`unit03-lesson04-student.xlsx`) into the completed teacher version (`unit03-lesson04-teacher.xlsx`). Students practice pulling trial balance data into an income statement using structured `SUMIFS`.

## 1. Orient Students to the Trial Balance

- Open the student file and review the **TrialBalance** sheet.
- Point out the columns: `Account`, `Type`, `Debit`, `Credit`.
- Emphasize that every line in the income statement will reference this table instead of hard-coding numbers.

## 2. Set Up Revenue Formulas

1. Switch to **IncomeStatement**.
2. In cell `B4`, enter `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Sales Revenue")` and press Enter (displays 16,800).
3. In `B5`, enter `=SUMIFS(TrialBalance!D:D,TrialBalance!A:A,"Service Revenue")` (displays 3,600).
4. In `B6`, compute total revenue with `=SUM(B4:B5)` (displays 20,400).

Explain that using `SUMIFS` keeps the layout flexible if Sarah adds new revenue lines later.

## 3. Build Expense Lines

1. In `B9`, enter `=SUMIFS(TrialBalance!C:C,TrialBalance!A:A,"Cost of Goods Sold")`.
2. Repeat for other expenses:
   - `B10`: Operating Expense → 2,800
   - `B11`: Rent Expense → 1,200
   - `B12`: Salaries Expense → 2,400
3. Sum `B9:B12` in `B13` to get total expenses (15,500).

Discuss how debit amounts feed expense totals while credits populate revenue.

## 4. Calculate Net Income

- In `B15`, use `=B6-B13`. The result should be **4,900**.
- Reinforce that this net income will feed directly into the balance sheet in Lesson 05.

## 5. Save the Teacher Version

- Save as `unit03-lesson04-teacher.xlsx`.
- Have students compare their formulas and totals to the teacher model before moving on.

This lesson anchors the storytelling of Unit 03 by connecting the trial balance to a clean, investor-ready income statement.
