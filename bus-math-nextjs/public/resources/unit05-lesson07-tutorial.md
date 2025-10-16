# Unit 05 Lesson 07 – Adding Payroll Data Validation

Follow these steps to convert `unit05-lesson07-student.xlsx` into the teacher model (`unit05-lesson07-teacher.xlsx`). Students prevent entry errors by adding dropdowns for employee names and restricting hours worked.

## 1. Review the Finished Calculator

- The **Payroll** sheet now includes gross pay, tax rate, tax amount, and net pay.
- Errors at this stage usually come from mistyped names or impossible hour totals (e.g., 200 hours).
  
## 2. Create the Employee Dropdown

1. Select the range `A2:A6`.
2. Go to **Data › Data Validation**.
3. Choose **List** and type the employee names separated by commas:  
   `Ava Singh,Delilah Moore,Linh Tran,Martin Perez,Riley Chen`
4. Confirm that each cell now shows a dropdown arrow. Selecting from the list keeps names consistent for lookups and reporting.

Tip: If you prefer a dynamic range, convert the employee list into a named range first and reference it here.

## 3. Restrict Hours Worked

1. Select `C2:C6`.
2. Open **Data Validation** again, choose **Whole number**, and set **Minimum = 0**, **Maximum = 80**.
3. Add an error alert such as “Hours must be between 0 and 80” so payroll clerks get immediate feedback.

## 4. Test the Rules

- Try typing an out-of-range value like 95 in `C2`—Excel should block it.
- Remove an employee name and re-select from the dropdown to prove the list works.

## 5. Save the Teacher Version

- Save as `unit05-lesson07-teacher.xlsx`.
- Encourage students to re-run their net pay totals after making a few legitimate changes to ensure calculations still hold.

With validation in place, Sarah’s payroll workbook guards against data-entry mistakes while keeping all overtime, tax, and net pay formulas intact.
