# Unit 06 Lesson 06 – One-Variable Data Table for Unit Scenarios

This guide shows how to finish `unit06-lesson06-student.xlsx` so it aligns with the teacher model (`unit06-lesson06-teacher.xlsx`). Students use a one-variable data table to see how profit responds to changes in units sold.

## 1. Verify Starting Assumptions

- The **Model** sheet should already reflect the Goal Seek result: unit price \$58, variable cost \$28, expected units 950, projected profit \$10,000.
- The new **UnitsDataTable** sheet lists a column of potential unit sales (700–1,200) with an empty profit column.

## 2. Connect the Output Cell

- Cell `C1` contains the formula `=Model!B11`, referencing projected profit.
- The data table will repeatedly plug each units value into the model and capture the profit in column `C`.

## 3. Create the Data Table

1. Select the entire range `B1:C7`.
2. Choose **Data › What-If Analysis › Data Table**.
3. Leave *Row input cell* blank (we’re varying a column).
4. For *Column input cell*, select `Model!B9` (Expected Units Sold).
5. Click **OK**.

Excel fills column `C` with profit values for each units scenario. For example:
- 700 units → -\$4,600 loss
- 1,000 units → \$12,000 profit
- 1,200 units → \$24,000 profit

## 4. Optional Presentation Enhancements

- Format column `C` as currency.
- Add conditional formatting to highlight profits below \$0 in red.
- Create a quick chart of units vs. profit for visual impact.

## 5. Save the Teacher Version

- Save as `unit06-lesson06-teacher.xlsx`.
- Remind students this table draws directly from their CVP model; any price change instantly updates the scenario analysis.

With the one-variable data table in place, the team can evaluate sales forecasts rapidly during pricing discussions.
