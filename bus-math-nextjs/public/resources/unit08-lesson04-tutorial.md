# Unit 08 Lesson 04 – Linking Assumptions to the Startup Model

This guide shows how to complete `unit08-lesson04-student.xlsx` so it mirrors the teacher version (`unit08-lesson04-teacher.xlsx`). Students connect the core assumptions to a six-month income forecast for TechStart’s launch.

## 1. Review the Assumptions

- Open the **Assumptions** sheet. The key drivers are already populated:
  - `B3` Starting Units (Month 1) = 800
  - `B4` Monthly Growth Rate = 6%
  - `B5` Price per Unit = \$45
  - `B6` Cost per Unit = \$21
  - `B7` Monthly Operating Expenses = \$12,000
- No formulas are required on this sheet for Lesson 04; you simply reference these cells from the model.

## 2. Build the Units Row

1. Go to the **Model** sheet. Columns `B`–`G` represent Months 1–6.
2. In `B2`, link Month 1 units: `=Assumptions!B3`.
3. In `C2`, project Month 2 units: `=B2*(1+Assumptions!B4)`.
4. Fill the `C2` formula across to `G2` so each month compounds by 6%.

## 3. Calculate Revenue and COGS

- **Revenue (row 3):**
  - `B3` = `=B2*Assumptions!B5`
  - Fill across to `G3` to multiply each month’s units by the price per unit.
- **Cost of Goods Sold (row 4):**
  - `B4` = `=B2*Assumptions!B6`
  - Fill across to `G4`. This ties COGS to the unit cost.

## 4. Finish the Profit Relationships

1. **Gross Profit (row 5):** `B5 = B3-B4`, then fill across.
2. **Operating Expenses (row 6):** `B6 = Assumptions!B7`, fill across so the monthly amount repeats.
3. **Net Income (row 7):** `B7 = B5-B6`, then fill across to compute profit for each month.

Format currency rows (`B3:G7`) for readability. Month 1 net income should be \$7,200 once everything is linked.

## 5. Save the Teacher Version

- Save the completed workbook as `unit08-lesson04-teacher.xlsx`.
- Encourage students to tweak a single assumption (e.g., raise the price to \$46) to watch the entire forecast update automatically—proof that the model is properly linked.

The model now reacts instantly to any assumption change, laying the groundwork for scenario analysis in Lessons 05–07.
