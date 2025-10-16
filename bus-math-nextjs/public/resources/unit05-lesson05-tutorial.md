# Unit 05 Lesson 05 – Applying Tax Rates with XLOOKUP

Use this guide to turn `unit05-lesson05-student.xlsx` into the finished teacher workbook (`unit05-lesson05-teacher.xlsx`). Students link gross pay to a tax bracket table using `XLOOKUP`.

## 1. Review the Payroll Table

- Column `Gross Pay` already comes from Lesson 04.
- The new `Tax Rate` column is blank; students will populate it by looking up the gross pay amount.
- The **TaxTables** sheet lists the minimum gross pay for each bracket and the corresponding rate (10%–18%).

## 2. Write the XLOOKUP Formula

1. Click `I2` (Ava’s tax rate).
2. Enter `=XLOOKUP(H2,TaxTables!$A$2:$A$6,TaxTables!$B$2:$B$6,,0,-1)`.
   - Lookup value: `H2` (gross pay).
   - Lookup array: minimum gross pay values.
   - Return array: tax rates.
   - The final argument `-1` forces an approximate match that returns the next smaller bracket.
3. Copy the formula down through `I6`.

Check the results:
- Ava (Gross \$1,396.50) → 16%
- Delilah (Gross \$950.00) → 12%
- Riley (Gross \$1,443.75) → 18%

## 3. Format for Clarity

- Change the Tax Rate column to percentage with one decimal place.
- Optionally add a conditional format to flag employees above 16%, which often indicates heavy overtime.

## 4. Save the Teacher Version

- Save as `unit05-lesson05-teacher.xlsx`.
- Encourage students to modify a gross pay temporarily to ensure the bracket updates correctly.

With tax rates in place, Lesson 06 will calculate actual withholding and net pay automatically.
