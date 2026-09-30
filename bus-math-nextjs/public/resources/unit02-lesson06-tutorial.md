# Lesson 6: Test the month-end controls

Open the textbook-aligned Lesson 6 student workbook. It has Inputs, Close Model, Control Panel, and Scenarios sheets. It includes the Lesson 5 model. Save your own copy.

## 1. Check the input ranges

In Inputs!D5, enter `=IF(AND(B5>=0,B5<=C5),"OK","Review")`. Copy it down to D9. The maximum values are in C5:C9.

Add conditional formatting to B5:D9. Use `=$D5="Review"` to mark failed rows. Apply decimal data validation to each input using a minimum of 0 and the maximum from its row. Keep the visible formula check because pasted values can bypass validation.

Checkpoint: A supplies value of −25 must show Review. An insurance value of 1,300 must show Review because the maximum is 1,200. Restore the valid values after each test.

## 2. Link the selected scenario

Control Panel!B3 is named SelectedPeriod. Add a dropdown with March, April, and May.

In Inputs!B5, enter:

```excel
=INDEX(Scenarios!$B$5:$F$7,MATCH(SelectedPeriod,Scenarios!$A$5:$A$7,0),ROW()-4)
```

Copy it through Inputs!B5:B9. MATCH finds the period row. INDEX returns the appropriate amount. Change scenario amounts on Scenarios; do not overwrite the linked formulas on Inputs.

Checkpoint: April must show 1,450, 300, 400, 2,100, and 900. All five range checks must show OK.

## 3. Combine and test the controls

In Control Panel!B8, enter `=COUNTIF(Inputs!D5:D9,"Review")`.
In B9, enter:

```excel
=IF(OR(COUNT('Close Model'!B4:C13)<>20,COUNT('Close Model'!F19:G33)<>30,COUNTA(Inputs!D5:D9)<>5),"Not finished",IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items"))
```

Test each scenario. Then temporarily change April supplies on Scenarios!B6 to −25. The input check must show Review, the failed-check count must be 1, and the status must show Review flagged items. Restore 1,450.

Test a journal error by temporarily replacing one linked credit with a different amount. The balance difference must become nonzero. Restore the formula.

Document each test in your workbook notes. Check the source records and account choices separately. Range and balance checks cannot prove complete accounting accuracy.
