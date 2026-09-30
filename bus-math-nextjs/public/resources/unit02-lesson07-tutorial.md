# Unit 2 Lesson 7: Monthly depreciation link

Use a copy of the existing `BM-U02L07.xlsx` file from OneDrive. Keep the original file. This example has three sheets: Summary, Adjustments, and Report. The website reference file uses the same three sheets.

This example checks the depreciation link. It does not contain the complete trial balance or closing journal required for the project. Use the full close workbook assigned by your teacher for those tasks.

## 1. Check the source period

The Summary sheet contains one month of revenue and other operating expenses. Revenue is $18,500. Other operating expenses are $9,400. Depreciation is not included in that expense total.

The Adjustments sheet uses useful lives in years. Cells E2:E5 calculate annual depreciation. Their total in E6 is $8,800. Annual and monthly amounts use different periods.

## 2. Check the annual formulas

Use `=ROUND(SLN(B2,C2,D2),2)` in Adjustments!E2. Copy the formula to E3:E5. Each row must refer to its own asset. Use `=SUM(E2:E5)` in E6.

## 3. Link monthly depreciation

In Report!B5, enter:

```excel
=ROUND(Adjustments!E6/12,2)
```

The result must be $733.33. Use a currency format with two decimal places.

In Report!B6, use:

```excel
=B3-(B4+B5)
```

Monthly net income must be $8,366.67. The calculation is $18,500 − $9,400 − $733.33.

## 4. Test the link

Increase the van cost in Adjustments!B2 by $1,200. Annual depreciation increases by $240. Monthly depreciation increases by $20. Net income decreases by $20. Restore the original cost after this test.

## 5. Use the result as evidence

Cite Report!B5 and Report!B6 in your recommendation. State that net income does not show available cash. Check the cash balance and payment dates before you recommend a purchase.

Save your practice copy in OneDrive. Do not replace the teacher's original file.
