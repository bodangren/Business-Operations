# Unit 02 Lesson 07 – Linking Depreciation into the Month-End Report

Follow these steps to turn the student workbook (`unit02-lesson07-student.xlsx`) into the completed teacher model (`unit02-lesson07-teacher.xlsx`). The objective is to link the depreciation schedule directly into the summary report so adjustments flow automatically.

## 1. Confirm the Depreciation Total

- On the **Adjustments** sheet, verify that row 6 already sums annual depreciation to **8,800.00** from Lesson 05.
- Point out that this total changes as assets are updated—linking it prevents stale numbers in the report.

## 2. Open the Report Sheet

- Switch to **Report**.
- Total Revenue (`B3`) and Total Expenses (`B4`) already pull from the Summary sheet.
- `B5` (Depreciation Expense) is blank; `B6` calculates Net Income as `B3-(B4+B5)`.

## 3. Link Depreciation Expense

1. Click cell `B5`.
2. Type `=Adjustments!E6` and press Enter.
3. The Depreciation Expense line now displays **8,800**.

Students should notice Net Income (`B6`) immediately adjusts to **300**, reflecting the true month-end result.

## 4. Optional Formatting Touch

- Bold the report title in `A1` or add currency formatting to the value column if you want to mirror the teacher file precisely.

## 5. Save the Teacher Version

- Save the workbook as `unit02-lesson07-teacher.xlsx`.
- Encourage students to tweak an asset’s cost in **Adjustments** to watch the report update in real time.

Linking the adjustment schedule closes the loop on TechStart’s month-end workflow, ensuring every depreciation change hits the report instantly.
