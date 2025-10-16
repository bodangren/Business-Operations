# Unit 06 Lesson 05 – Using Goal Seek for Target Profit

This tutorial explains how to convert `unit06-lesson05-student.xlsx` into the completed teacher workbook (`unit06-lesson05-teacher.xlsx`). Students adjust unit price to hit a \$10,000 target profit using Goal Seek.

## 1. Confirm the Model Setup

- The **Model** sheet now includes all formulas from Lesson 04 (contribution margin, break-even, projected profit).
- The current unit price (`B2`) is still \$52.00, producing a projected profit of \$4,300 (`B11`).
- Target profit (`B10`) is set to \$10,000.

## 2. Run Goal Seek

1. Select the projected profit cell `B11`.
2. Go to **Data › What-If Analysis › Goal Seek**.
3. Fill in:
   - *Set cell:* `B11`
   - *To value:* `10000`
   - *By changing cell:* `B2`
4. Click **OK**. Excel will iterate until projected profit equals \$10,000 by changing the unit price.

The adjusted price should become **\$58.00**. This new price flows into every dependent calculation (contribution margin, break-even, etc.).

## 3. Review Updated Metrics

- Contribution margin per unit (`B4`) increases to \$30.00.
- Break-even units (`B7`) drop to about 616.7 units.
- Projected profit (`B11`) now matches the \$10,000 target.

Encourage students to note how a price change affects both profit and break-even simultaneously.

## 4. Save the Teacher Version

- Save as `unit06-lesson05-teacher.xlsx`.
- Tell students to keep this price in place for lessons 06 and 07 so their data tables produce the same results.

Goal Seek gives TechStart a quick way to quote prices that satisfy investor profit goals without rewriting formulas manually.
