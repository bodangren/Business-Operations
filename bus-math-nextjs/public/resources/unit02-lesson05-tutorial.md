# Unit 02 Lesson 05 – Straight-Line Depreciation Schedule

Use this guide to move from the student workbook (`unit02-lesson05-student.xlsx`) to the completed teacher model (`unit02-lesson05-teacher.xlsx`). The focus is on building a professional depreciation schedule with the `SLN` function.

## 1. Review the Asset List

- Open the student file and switch to **Adjustments**.
- Confirm each asset lists Cost, Salvage, and Useful Life (Years) while the **Annual Depreciation** column is blank.
- Anchor the conversation in TechStart’s operations: these assets drive Sarah’s month-end adjustments.

## 2. Enter the `SLN` Formula

1. Click cell `E2`.
2. Type `=ROUND(SLN(B2,C2,D2),2)` and press Enter.
   - `SLN` calculates straight-line depreciation.
   - `ROUND(...,2)` keeps the value at two decimal places for financial reporting.
3. Fill the formula down through `E5`.
4. Verify the calculated amounts:
   - Company Van — 5,600.00
   - Laptop Set — 1,250.00
   - Warehouse Shelving — 1,083.33
   - Software License — 866.67

## 3. Add the Total Depreciation Row

1. In cell `E6`, enter `=SUM(E2:E5)`.
2. The total annual depreciation should display **8,800.00**.
3. Reinforce how this number feeds into the month-end report in Lesson 07.

## 4. Update the Summary Sheet (Optional Check-In)

- Return to the **Summary** sheet and point out Net Income from Lesson 04 (9,100).
- Explain that this figure will drop once depreciation is linked in Lesson 07—students are building the data plumbing needed for accurate reporting.

## 5. Save the Teacher Version

- Save as `unit02-lesson05-teacher.xlsx`.
- Have students compare their totals against the teacher file before moving on.

By the end of this lesson, TechStart’s month-end folder contains a clean, ready-to-link depreciation schedule that matches professional accounting workflows.
