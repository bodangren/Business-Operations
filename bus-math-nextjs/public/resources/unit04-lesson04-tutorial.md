# Unit 04 Lesson 04 – Cleaning Café Sales Data

This tutorial explains how to take `unit04-lesson04-student.xlsx` and produce the teacher example (`unit04-lesson04-teacher.xlsx`). Students practice using `TRIM`, `PROPER`, and Remove Duplicates to prepare TechStart Café’s weekend sales data for analysis.

## 1. Inspect the Raw Data

- Open the student workbook and review the **SalesRaw** sheet.
- Point out the issues Sarah found in the download:
  - Extra spaces before or after names (e.g., `"  Ava Singh"`).
  - Inconsistent capitalization (`" martin perez"` vs. `"MARTIN PEREZ"`).
  - Duplicate orders (ORD-105 vs ORD-101).
- Explain that messy data slows down dashboards and confuses the operations team.

## 2. Create a Clean Working Table

1. Copy the entire raw range (`A1:E12`) and paste it into **CleanedSales** starting at `A1`.
2. Convert the new range into an Excel Table (`Ctrl + T`) and name it `SalesTable`.
3. Apply `TRIM` and `PROPER`:
   - In a helper column or directly inside the table, use formulas like `=PROPER(TRIM([@[Customer]]))` to standardize names.
   - Replace the original text columns with the cleaned results using Paste Values.
4. Apply the same `TRIM` logic to `Product` to remove trailing spaces.

## 3. Remove Duplicates

1. With the table still selected, go to **Data › Remove Duplicates**.
2. Keep all columns checked so only truly identical rows remain.
3. Confirm that you end up with eight unique orders (matching the teacher workbook).

## 4. Quick Validation

- Sort the table by `OrderID` to verify there are no accidental gaps.
- Optionally add a `COUNTIF` formula to double-check that each order appears once.

## 5. Save the Teacher Version

- Save the cleaned workbook as `unit04-lesson04-teacher.xlsx`.
- Share both files so students can check their cleaned table against the teacher model before moving into statistical analysis.

Once the data is clean, Unit 04’s next lessons can rely on accurate averages, charts, and forecasts without manual corrections each time.
