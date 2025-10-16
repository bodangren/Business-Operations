# Unit 01 Lesson 05 – Automating the Trial Balance with SUMIF

This tutorial explains how to start from the student practice workbook (`unit01-lesson05-student.xlsx`) and arrive at the completed teacher model (`unit01-lesson05-teacher.xlsx`). The goal is to pull ledger totals into a Trial Balance using `SUMIF`.

## 1. Review the Journal Table

- Open the student workbook and confirm the **Journal** sheet already contains the `JournalEntries` table created in Lesson 04.
- Point out that row 24 still holds the structured totals. Students rely on this table for every formula they write in this lesson.

## 2. Inspect the Trial Balance Layout

- Switch to the **TrialBalance** sheet.
- The first column lists TechStart’s active accounts. Debit and Credit columns are empty.
- Explain that every formula will reference the account name in column A and reach back to the `JournalEntries` table.

## 3. Write the Debit `SUMIF`

1. Click cell `B2` (Cash).
2. Enter `=SUMIF(JournalEntries[Account],A2,JournalEntries[Debit])`.
3. Press Enter. The result should be **4,200**.
4. Fill the formula down through `B11`. Each row picks up the proper debit total.

Reinforce why `A2` is the criteria: it keeps the debit total tied to the account name in the same row.

## 4. Write the Credit `SUMIF`

1. Click cell `C2`.
2. Enter `=SUMIF(JournalEntries[Account],A2,JournalEntries[Credit])`.
3. Press Enter. Cash now shows **2,660** in the credit column.
4. Copy the formula down to `C11`.

Have students compare credits: Service Revenue should total **4,850**, Accounts Payable **210**, and Supplies Inventory **315**.

## 5. Quick Accuracy Check

- Scan the Debit and Credit columns to make sure blank accounts still display zeros.
- Sum the Debit column (`SUM(B2:B11)`) and Credit column (`SUM(C2:C11)`) mentally or with a temporary formula. Both should equal **8,935**.

## 6. Save the Teacher Version

- Save the finished file as `unit01-lesson05-teacher.xlsx`.
- Keep the student workbook unchanged so learners can practice the full set of formulas.

With this setup complete, Lesson 06 builds on the same sheet by adding a Check column and visual conditional formatting.
