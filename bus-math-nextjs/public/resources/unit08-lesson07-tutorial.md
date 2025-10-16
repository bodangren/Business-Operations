# Unit 08 Lesson 07 – Circular Reference and Iterative Calculations

This tutorial finishes `unit08-lesson07-student.xlsx` to match the teacher workbook (`unit08-lesson07-teacher.xlsx`). Students model interest income that depends on ending cash, creating a controlled circular reference.

## 1. Understand the Cash Loop Layout

- The **CashLoop** sheet summarizes:
  - `B3` Beginning Cash = \$20,000
  - `B4` Operating Cash Flow = `=SUM(Model!B7:G7)` (cumulative net income)
  - `B5` Interest Rate = 2%
  - `B6` Interest Income – blank in the student file
  - `B7` Ending Cash – blank in the student file
- Interest should be earned on the ending balance, which creates the circular dependency.

## 2. Enter the Circular Formulas

1. In `B6`, type `=B7*B5`. Interest now depends on the ending cash value.
2. In `B7`, enter `=B3+B4+B6`. Ending cash adds beginning cash, operating cash flow, and the interest you just linked.
3. At this point Excel likely warns you about a circular reference and shows zeros—this is expected.

## 3. Enable Iterative Calculation

1. Open **File › Options › Formulas**.
2. Check **Enable iterative calculation**.
3. Set **Maximum Iterations** to 100 and **Maximum Change** to 0.01 (the defaults work, but these settings converge quickly).
4. Click **OK**.

Excel now solves the loop:
- `B6` Interest Income ≈ **\$653.06**
- `B7` Ending Cash ≈ **\$32,653.06**

Explain to students that you just solved the equation  
`Ending Cash = Beginning + Operating + InterestRate × Ending Cash`.

## 4. Sanity Check

- Disable iterative calculation temporarily; note how the cash loop collapses.
- Re-enable it and experiment with a different interest rate (e.g., 3%) to see the balance adjust.

## 5. Save the Teacher Version

- Save as `unit08-lesson07-teacher.xlsx`. Document in lesson notes that iterative calculation must remain on for this sheet.
- Encourage students to describe when circular modeling is appropriate (cash sweeps, revolvers, interest on cash) versus when it indicates a logic error.

This exercise caps Unit 08 by demonstrating how advanced Excel settings support realistic financial modeling.
