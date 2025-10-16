# Unit 05 Lesson 04 – Building the Gross Pay Calculator

This tutorial shows how to complete `unit05-lesson04-student.xlsx` so it matches the teacher version (`unit05-lesson04-teacher.xlsx`). Students calculate regular hours, overtime, and gross pay for TechStart’s payroll roster.

## 1. Understand the Data Layout

- The **Payroll** sheet lists each employee’s hourly rate and the hours they submitted this period.
- Columns `Regular Hours`, `Overtime Hours`, `Regular Pay`, `Overtime Pay`, and `Gross Pay` are blank in the student file.
- Overtime begins after 40 hours and pays 1.5× the hourly rate.

## 2. Calculate Regular and Overtime Hours

1. In `D2`, enter `=MIN(C2,40)`. This caps regular hours at 40 for Ava.
2. In `E2`, enter `=MAX(C2-40,0)`. Any hours above 40 now appear as overtime.
3. Fill both formulas down through row 6. Employees under 40 hours will show 0 overtime.

## 3. Compute Regular and Overtime Pay

1. In `F2`, calculate regular pay with `=D2*B2`.
2. In `G2`, compute overtime pay using `=E2*B2*1.5`.
3. Fill both formulas down to row 6.

Explain to students that separating the two pay types keeps payroll transparent for audits.

## 4. Finish Gross Pay

- In `H2`, enter `=F2+G2`.
- Fill the formula down. Ava’s gross pay should come out to \$1,396.50; Riley’s should be \$1,443.75.

## 5. Save the Teacher Version

- Save the completed workbook as `unit05-lesson04-teacher.xlsx`.
- Encourage students to cross-check the totals against hours to confirm overtime is only applied beyond 40 hours.

This calculator forms the backbone of Unit 05: the same table will drive tax calculations, net pay, and validation rules in the following lessons.
