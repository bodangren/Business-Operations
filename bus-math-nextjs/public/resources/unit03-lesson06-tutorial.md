# Unit 03 Lesson 06 – Employee Lookup with XLOOKUP

This tutorial shows how to transform `unit03-lesson06-student.xlsx` into the finished teacher workbook (`unit03-lesson06-teacher.xlsx`). Students build a payroll lookup tool that pulls employee details from an ID.

## 1. Explore the Data Sheet

- Open the student workbook and review the **Data** sheet.
- Point out the table columns: Employee ID, Name, Hourly Rate.
- Highlight the consistent ID format (four digits) used for the lookup key.

## 2. Set the Lookup Input

- Switch to **Payroll**.
- Cell `B3` is intentionally blank; students will type an ID here (e.g., `1002`).
- Let them know the lookup formulas will respond instantly once entered.

## 3. Build the Name Lookup

1. Select cell `B4`.
2. Enter `=XLOOKUP(B3,Data!A2:A6,Data!B2:B6,"Not found")`.
3. Test it by typing `1003` in `B3` — the cell should return *Mina Torres*.
4. Explain the arguments:
   - Lookup value: `B3`
   - Lookup array: employee IDs
   - Return array: employee names
   - Fourth argument provides a friendly message if the ID is missing.

## 4. Build the Hourly Rate Lookup

1. Click `B5`.
2. Enter `=XLOOKUP(B3,Data!A2:A6,Data!C2:C6,"",0,1)`.
3. This version returns the hourly rate and uses the optional match arguments (`0` for exact, `1` for default search direction).
4. Format `B5` as currency if you want it to match the teacher workbook’s presentation.

## 5. Save the Teacher Version

- Save as `unit03-lesson06-teacher.xlsx`.
- Encourage students to test multiple IDs and intentionally enter an invalid code to see the “Not found” response.

This activity cements the power of `XLOOKUP`, preparing students for Unit 03’s broader three-statement automation.
