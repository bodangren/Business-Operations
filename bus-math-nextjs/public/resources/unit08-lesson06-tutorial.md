# Unit 08 Lesson 06 – Auditing the Startup Forecast

This tutorial explains how to use the auditing tools in `unit08-lesson06-student.xlsx` to match the teacher workbook (`unit08-lesson06-teacher.xlsx`). Students trace the logic behind TechStart’s Month 6 results and validate the forecast.

## 1. Familiarize Yourself with the Audit Sheet

- The **AuditPractice** sheet includes quick references:
  - `B3` Month 6 Units (`=Model!G2`)
  - `B4` Month 6 Revenue (`=Model!G3`)
  - `B5` Month 6 Net Income (`=Model!G7`)
  - `B8` Cumulative Net Income (`=SUM(Model!B7:G7)`)
- No formulas need editing; the focus is on tracing how these cells are derived.

## 2. Trace Precedents

1. Select `B5` (Month 6 Net Income).
2. On the **Formulas** tab, choose **Trace Precedents**.
3. Excel displays arrows back to `Model!G5` (Gross Profit) and `Model!G6` (Operating Expenses).
4. Drill one level deeper by repeating Trace Precedents on `Model!G5` to see the connection to revenue and COGS.

Encourage students to keep the arrows visible while they explain the story—investors want to hear how the math flows through the model.

## 3. Trace Dependents

1. Still on `B5`, click **Trace Dependents**.
2. The arrows show that Month 6 net income feeds the cumulative total in `B8` and the circular cash example used in Lesson 07.
3. Clear all arrows with **Remove Arrows** once the relationships are understood.

## 4. Quick Reasonableness Checks

- Highlight `Model!G3` and verify it equals Month 6 units (`G2`) × Active Price (`Assumptions!B17`).
- Compare the Best vs. Base scenario by switching `Assumptions!B9` between 2 and 1; ensure the audit cells update instantly.

## 5. Save the Teacher Version

- Save as `unit08-lesson06-teacher.xlsx` (even though no formulas changed, this documents that auditing was completed).
- Suggest that students capture screenshots of the trace arrows—these visuals bolster their modeling portfolio.

After mastering Excel’s auditing features, the class is ready to explore circular references and iterative calculations in Lesson 07.
