# Unit 01 Lesson 07 – Final Ledger Validation

This tutorial outlines how to complete the final quality check in `unit01-lesson07-student.xlsx` and match the finished teacher model (`unit01-lesson07-teacher.xlsx`). The objective is to add summary totals, calculate the absolute difference, and report the ledger status.

## 1. Verify the Starting Workbook

- Open the student file. On **TrialBalance**, columns A–D already contain the Check formulas and conditional formatting from Lesson 06.
- The Check column should show mostly green zeros, confirming individual accounts are balanced.

## 2. Insert the Totals Row

1. Click cell `A13` and type **Totals**.
2. In `B13`, enter `=SUM(B2:B11)` to sum all debit totals. The result should be **8,935**.
3. In `C13`, enter `=SUM(C2:C11)` for total credits. This also returns **8,935**.
4. Leave `D13` blank; the Check column stays focused on individual accounts.

Discuss how this mirrors what accountants do before they sign off on a monthly close.

## 3. Calculate the Absolute Difference

1. Click cell `A14` and type **Difference**.
2. In `B14`, enter `=ABS(B13-C13)` and press Enter. A balanced ledger produces **0**.

Explain that `ABS` removes any negative sign, making it easy to see the size of a mismatch.

## 4. Create the Status Message

1. In `A15`, type **Ledger Status**.
2. In `B15`, enter `=IF(B14=0,"Ledger Balanced","Investigate Differences")`.
3. Press Enter. With clean data the cell displays **Ledger Balanced**.

Encourage students to test the logic by temporarily changing an entry; the message should flip to **Investigate Differences**.

## 5. Save the Teacher Version

- Save the completed workbook as `unit01-lesson07-teacher.xlsx`.
- Keep the student file unchanged for future practice runs.

With this validation in place, TechStart’s ledger is ready for investor review, and students have a repeatable checklist for future units that build toward full financial statement integration.
