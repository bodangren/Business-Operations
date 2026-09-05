# Unit 02 Lesson 06 — Build Visible Controls and an Audit Panel

Use Excel for the web. Open `unit02-lesson06-student.xlsx`. Save a working copy before you start.

## 1. Check the Starting Workbook

Confirm that the workbook has these sheets:

1. `Inputs`
2. `Close Model`
3. `Control Panel`
4. `Scenarios`

The Lesson 05 calculations must already update when the input values change.

## 2. Add the Period Selector

1. Go to `Control Panel`.
2. Select cell `B3`.
3. Add a Data Validation list with `March,April,May`.
4. Name cell `B3` as `SelectedPeriod`.
5. Change the selection and confirm that the selected period appears in the audit panel.

## 3. Add Visible Validation

Add a check next to each input on the `Inputs` sheet. Use this formula pattern:

`=IF(AND(B5>=0,B5<=C5),"OK","Review")`

Copy the formula through cell `D9`. Apply conditional formatting. Show `OK` in green and `Review` in red. Keep every rule visible.

## 4. Build the Audit Panel

On `Control Panel`, show these values:

- selected period
- total adjustment debits
- total adjustment credits
- adjustment difference
- adjusted trial balance difference
- failed validation count
- close status

Use this status pattern:

`=IF(AND(B6=0,B7=0,B8=0),"Complete","Review flagged items")`

The status must update when any source value changes.

## 5. Test the Controls

1. Enter one negative input. Confirm that its validation result changes to `Review`.
2. Enter one unequal debit and credit amount. Confirm that the difference changes from zero.
3. Restore the correct values. Confirm that all checks return to `OK` and the close status returns to `Complete`.
4. Change the selected period. Confirm that the audit panel updates.

## 6. Save the Workbook

Save the completed file as `unit02-lesson06-complete.xlsx`. Open it once in Excel for the web and confirm that the dropdowns, formulas, and conditional formatting still work.
