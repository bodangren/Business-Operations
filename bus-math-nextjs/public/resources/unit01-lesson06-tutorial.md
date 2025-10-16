# Unit 01 Lesson 06 – Visual Error Checking on the Trial Balance

This guide shows how to transform `unit01-lesson06-student.xlsx` into the teacher solution (`unit01-lesson06-teacher.xlsx`). Students begin with the completed `SUMIF` trial balance from Lesson 05 and add a Check column plus conditional formatting for instant balance feedback.

## 1. Confirm the Starting Point

- Open the student workbook and visit the **TrialBalance** sheet.
- Columns A–C already contain the `SUMIF` formulas from Lesson 05. Column D is labeled **Check** but empty.
- Let students know they will use the Check column to spot accounts where debits and credits disagree.

## 2. Add the Check Formula

1. Click cell `D2`.
2. Enter `=B2-C2` and press Enter. A balanced account returns **0**.
3. Fill the formula down through `D11`.

Explain that a positive result means the debit total is larger, while a negative result means credits are higher.

## 3. Apply Conditional Formatting

1. Highlight the range `D2:D11`.
2. Go to **Home › Conditional Formatting › New Rule › Format only cells that contain**.
3. Set the rule to **Cell Value = 0**. Choose a green fill (RGB `C6EFCE`) and bold text if desired. Click **OK**.
4. Add a second rule: **Cell Value <> 0** with a light red fill (RGB `FFC7CE`).
5. Ensure the green rule is listed first in the rule manager so it takes priority.

The Check column now lights up any imbalance, giving Sarah’s bookkeeping team immediate visual cues.

## 4. Optional Coach Move

- Filter the Check column for nonzero values to demonstrate how the table makes troubleshooting faster.
- Clear filters before saving the teacher copy.

## 5. Save the Teacher Version

- Save as `unit01-lesson06-teacher.xlsx`.
- Provide the student file so learners can practice writing the Check formula and applying both conditional formatting rules themselves.

Lesson 07 will build on this workbook by adding a final ledger validation summary that mirrors what accountants look for before closing the books.
