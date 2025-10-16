# Unit 05 Lesson 06 – Calculating Net Pay

This walkthrough completes `unit05-lesson06-student.xlsx` so it matches the teacher version (`unit05-lesson06-teacher.xlsx`). Students convert tax rates into dollar withholdings and compute net pay.

## 1. Confirm Inputs

- The **Payroll** sheet already contains gross pay (`H` column) and the tax rate from Lesson 05 (`I` column).
- New columns `Tax Amount` and `Net Pay` (columns `J` and `K`) are blank in the student workbook.

## 2. Compute Tax Amount

1. Select `J2`.
2. Enter `=I2*H2` and press Enter.
3. Fill the formula down through `J6`.
- Ava’s tax amount should be \$223.44 (rounded), Riley’s \$259.88.

Consider formatting the column as currency with two decimals.

## 3. Calculate Net Pay

- In `K2`, type `=H2-J2` and copy the formula down.
- Net pay results:
  - Ava → \$1,173.06
  - Delilah → \$836.00
  - Riley → \$1,183.87

## 4. Optional Checks

- Add a quick verification cell like `=SUM(K2:K6)` to show total payroll cost after taxes.
- Encourage students to adjust an overtime hour temporarily to see how tax and net pay adapt.

## 5. Save the Teacher Version

- Save as `unit05-lesson06-teacher.xlsx`.
- Remind the class that this sheet now contains every calculation needed for payroll review before adding data validation in Lesson 07.

With tax withholding and net pay complete, the payroll tool is ready for the final quality checks and dropdown safeguards.
