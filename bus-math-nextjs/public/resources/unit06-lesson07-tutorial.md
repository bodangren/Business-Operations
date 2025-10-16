# Unit 06 Lesson 07 – Two-Variable Data Table for Price and Volume

Use this walkthrough to finish `unit06-lesson07-student.xlsx` and match the teacher workbook (`unit06-lesson07-teacher.xlsx`). Students analyze how net profit shifts when both unit price and sales volume change.

## 1. Review Prior Work

- The **Model** sheet still holds the Goal Seek price (\$58) and the formulas built in Lessons 04–05.
- The **UnitsDataTable** sheet contains completed one-variable results from Lesson 06.
- The new **PriceVolumeMatrix** sheet has price options across the top (54–60) and unit totals down the left (800–1,100) with blank interior cells.
- Cell `A1` references `=Model!B11`, which the Data Table uses as its output formula.

## 2. Set Up the Two-Variable Data Table

1. Select the entire matrix `A1:E5`.
2. Go to **Data › What-If Analysis › Data Table**.
3. Set *Row input cell* to `Model!B2` (Unit Price).
4. Set *Column input cell* to `Model!B9` (Expected Units Sold).
5. Click **OK**.

Excel populates the interior with projected profits for each price-volume combination. For instance:
- Price \$54 at 800 units → -\$5,700
- Price \$58 at 1,000 units → \$22,000
- Price \$60 at 1,100 units → \$36,500

## 3. Interpret the Grid

- Identify the breakeven boundary (values around \$0) to show the class where profits begin.
- Highlight the combinations that exceed the \$10,000 target profit for investor presentations.

## 4. Optional Visualization

- Apply a color scale to emphasize high-profit cells.
- Add a comment noting “Goal Seek price (58) at 950 units yields \$10,000” as a reference point.

## 5. Save the Teacher Version

- Save as `unit06-lesson07-teacher.xlsx`.
- Encourage students to explore what happens if they adjust the base price in the **Model** sheet—both data tables should refresh automatically.

This two-variable analysis equips TechStart to negotiate pricing and forecast demand simultaneously, a critical skill for the PriceLab Challenge.
