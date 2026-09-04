# Lesson 06 Executive Summary Tutorial

## Goal

Build an Executive Summary that links to the workbook controls and financial results.

## Starting File

Open `unit01-lesson05-checkpoint.xlsx`. Confirm that it has Transactions, Trial Balance, and Error Checks sheets.

## Steps

1. Open the existing **Executive Summary** sheet.
2. Add an author and date.
3. Link Total Debits and Total Credits to the Trial Balance totals.
4. Calculate Difference as Total Debits minus Total Credits.
5. Add a Balance Status formula that returns Balanced or Review Needed.
6. Count Review statuses with this formula:

```excel
=COUNTIF('Error Checks'!C2:C5,"Review")
```

7. Link Revenue, Expenses, Net Income, and Cash Balance to workbook formulas.
8. Add a recommendation that cites three linked values.
9. State one risk or limitation.
10. Use green for Pass and red for Review.

## Check

- The workbook has four sheets.
- The summary values use formulas. They are not typed totals.
- All four Error Checks controls show Pass for the clean dataset.
- The recommendation does not claim that the controls detect every possible error.
