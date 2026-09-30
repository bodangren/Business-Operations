# Lesson 5: Link the month-end close

Open the Lesson 5 student workbook supplied for your class. The textbook-aligned starter has Inputs, Close Model, and Control Panel sheets. Keep these sheet names. Save your own copy.

## 1. Link each adjustment

The five input names are SuppliesUsed, InsuranceExpired, DepreciationExpense, WagesAccrued, and RevenueEarned. They refer to Inputs!B5:B9.

In Close Model, enter these debit and credit formulas. Enter 0 in the unused side of each line.

| Row | Account | Debit (B) | Credit (C) |
|---|---|---|---|
| 4 | Supplies Expense | =SuppliesUsed | 0 |
| 5 | Supplies | 0 | =SuppliesUsed |
| 6 | Insurance Expense | =InsuranceExpired | 0 |
| 7 | Prepaid Insurance | 0 | =InsuranceExpired |
| 8 | Depreciation Expense | =DepreciationExpense | 0 |
| 9 | Accumulated Depreciation | 0 | =DepreciationExpense |
| 10 | Wages Expense | =WagesAccrued | 0 |
| 11 | Wages Payable | 0 | =WagesAccrued |
| 12 | Unearned Revenue | =RevenueEarned | 0 |
| 13 | Service Revenue | 0 | =RevenueEarned |

Enter `=SUM(B4:B13)` in B14 and `=SUM(C4:C13)` in C14. Enter `=B14-C14` in B15.

Checkpoint: Both totals must be 4,900. The difference must be 0. Check the accounts and source amounts separately.

## 2. Produce the adjusted trial balance

In Close Model!D19, enter `=SUMIF($A$4:$A$13,A19,$B$4:$B$13)`.
In E19, enter `=SUMIF($A$4:$A$13,A19,$C$4:$C$13)`.
In F19, enter `=MAX(B19+D19-C19-E19,0)`.
In G19, enter `=MAX(C19+E19-B19-D19,0)`.
Copy D19:G19 down to row 33.

Enter `=SUM(F19:F33)` in F34 and `=SUM(G19:G33)` in G34. Enter `=F34-G34` in F35.

Checkpoint: The adjusted totals must be 53,900 each. The difference must be 0.

## 3. Build and test the control panel

Link Control Panel!B4 to `'Close Model'!B14`, B5 to C14, B6 to B15, and B7 to F35. Enter 0 in B8. Lesson 6 will add the input-validation count.

In B9, enter:

```excel
=IF(OR(COUNT('Close Model'!B4:C13)<>20,COUNT('Close Model'!F19:G33)<>30),"Not finished",IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items"))
```

Test the controls:
1. Change Inputs!B5 from 1,200 to 1,234. Both journal lines must update. The totals still balance. Complete can remain visible.
2. Temporarily change only Close Model!C5 to 1,200. The difference must be 34. The status must show Review flagged items.
3. Restore C5 to `=SuppliesUsed`. Restore Inputs!B5 to 1,200.
4. Compare SuppliesUsed with the physical count or source schedule. A balance check cannot prove amount accuracy.

Complete means that the listed formula checks pass. It does not mean that a teacher has approved the accounting.
