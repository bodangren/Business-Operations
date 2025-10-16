# Unit 06 Lesson 04 – Cost-Volume-Profit Model Setup

This tutorial walks through finishing `unit06-lesson04-student.xlsx` to match the teacher file (`unit06-lesson04-teacher.xlsx`). Students establish a CVP model with contribution margin, break-even units, and break-even sales.

## 1. Orientation to the Model Sheet

- The **Model** sheet lists key assumptions:
  - Unit price (`B2`) = \$52.00
  - Variable cost per unit (`B3`) = \$28.00
  - Fixed costs (`B6`) = \$18,500
  - Expected units sold (`B9`) = 950
- Cells for contribution margin, break-even, and projected profit are blank in the student workbook.

## 2. Contribution Margin

1. In `B4`, calculate per-unit contribution: `=B2-B3`.
2. In `B5`, compute the contribution margin ratio: `=B4/B2`.

Explain that these two numbers drive every other CVP insight.

## 3. Break-Even Analysis

1. In `B7`, enter `=B6/B4` to find the break-even units (result ≈ 770.83 units).
2. In `B8`, compute break-even sales: `=B7*B2` (≈ \$40,088.33).

Encourage students to format `B7` with one decimal and `B8` as currency.

## 4. Projected Profit at Expected Volume

- In `B11`, enter `=(B2-B3)*B9-B6`.  
  With the baseline price, projected profit is \$4,300.
- This value becomes the key output referenced by Goal Seek and later data tables.

## 5. Save the Teacher Version

- Save as `unit06-lesson04-teacher.xlsx`.
- Remind students that every later lesson (Goal Seek, data tables) depends on these core formulas, so accuracy here is essential.

The CVP model now provides the foundation for exploring pricing scenarios and sales targets in the rest of Unit 06.
