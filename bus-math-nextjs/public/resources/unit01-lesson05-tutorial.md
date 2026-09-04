# Lesson 05 Trial Balance and Error Checks Tutorial

## Goal

Use formulas to summarize `LedgerTable` and identify records that need review.

## Starting File

Open `unit01-lesson05-student.xlsx`. It has Transactions, Trial Balance, and Error Checks sheets.

## Transactions Control

Add a column named **Entry Difference** to `LedgerTable`. Use this formula:

```excel
=SUMIFS(LedgerTable[Debit],LedgerTable[Transaction ID],[@[Transaction ID]])-SUMIFS(LedgerTable[Credit],LedgerTable[Transaction ID],[@[Transaction ID]])
```

Each transaction ID must have a result of 0.

## Trial Balance

Use these columns: Account, Total Debits, Total Credits, Debit Balance, and Credit Balance.

Use these formulas in row 2. Then fill them down.

```excel
=SUMIF(LedgerTable[Account],A2,LedgerTable[Debit])
=SUMIF(LedgerTable[Account],A2,LedgerTable[Credit])
=MAX(B2-C2,0)
=MAX(C2-B2,0)
```

Sum the Debit Balance and Credit Balance columns. The totals must match.

## Error Checks

Create a value and a Pass or Review status for each control:

1. Global debit-credit difference.
2. Rows in an unbalanced transaction ID.
3. Blank account cells.
4. Rows with both a debit and credit, or neither amount.

Use conditional formatting. Show Pass in green and Review in red.

## Important Limit

A balanced trial balance is an arithmetic check. It does not detect every wrong account, omitted transaction, or duplicated balanced entry.
