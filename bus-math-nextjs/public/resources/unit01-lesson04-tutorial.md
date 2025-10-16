# Unit 01 Lesson 04 – Building the Journal Table

This walkthrough demonstrates how to take the student practice file (`unit01-lesson04-student.xlsx`) and produce the completed teacher model (`unit01-lesson04-teacher.xlsx`). The focus is on turning a plain list of TechStart journal entries into a formatted Excel Table with running totals.

## 1. Open the Student Workbook

- Launch `unit01-lesson04-student.xlsx`.
- Confirm the **Journal** sheet shows 22 rows of transactions with four headers: Date, Account, Debit, Credit.
- Point out to students that every debit has a matching credit. This pattern is the reason the totals will balance when the table is set up correctly.

## 2. Convert the Range to an Excel Table

1. Click any data cell inside the list (for example `A2`).
2. Press `Ctrl + T` (Windows) or `⌘ + T` (Mac). Excel highlights the range `A1:D23`.
3. Ensure **My table has headers** is checked, then press **OK**.
4. With the table selected, use **Table Design › Table Name** to rename it `JournalEntries`.

> Teaching move: Remind learners that tables automatically expand as new rows are added and make formulas easier to read. This reduces posting errors when Sarah’s team logs busy weeks of transactions.

## 3. Apply the Course Styling

- Stay on the **Table Design** tab.
- Choose **Table Style Medium 2** (the project standard).
- Verify the **Header Row** and **Banded Rows** options remain selected so the ledger is easy to scan.

## 4. Add Structured Reference Totals

1. Click cell `C24` directly under the Debit column total.
2. Enter `=SUM(JournalEntries[Debit])` and press Enter. The value should be **8,935**.
3. Click cell `D24` and enter `=SUM(JournalEntries[Credit])`. This also evaluates to **8,935**.
4. Optionally format both cells as bold to highlight the ledger balance.

Emphasize that structured references (`TableName[Column]`) stay accurate even if TechStart adds more transactions later.

## 5. Save the Teacher Version

- Use **Save As** to create `unit01-lesson04-teacher.xlsx`.
- Store it in `public/resources/` so the lesson can link to it.
- Share both files with students. They should compare their finished totals to the teacher model at the end of the phase.

With these steps complete, the class is ready to move into Lesson 05 where the same table feeds an automated trial balance using `SUMIF`.
