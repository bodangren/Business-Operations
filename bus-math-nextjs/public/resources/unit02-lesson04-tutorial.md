# Unit 02 Lesson 04 – Building Named Ranges for Month-End Summary

This walkthrough converts the student workbook (`unit02-lesson04-student.xlsx`) into the finished teacher model (`unit02-lesson04-teacher.xlsx`). Students define named ranges and use them in a Net Income formula to reinforce clean month-end structure.

## 1. Inspect the Student Starting Point

- Open the student file and confirm the **Summary** sheet lists three rows:
  - Total Revenue — 18,500
  - Total Expenses — 9,400
  - Net Income — blank
- Explain that the goal is to replace cell coordinates with meaningful names so the formula reads like a sentence.

## 2. Create Named Ranges

1. Select cell `B2` (Total Revenue).
2. In the Name Box (left of the formula bar) type `Total_Revenue` and press Enter.
3. Select cell `B3`, name it `Total_Expenses`.
4. With cell `B4` selected, name it `Net_Income`.

Call out the underscore convention—students avoid spaces so Excel accepts the name.

## 3. Build the Net Income Formula

1. Keeping cell `B4` active, type `=Total_Revenue-Total_Expenses`.
2. Press Enter. Net Income evaluates to **9,100**.
3. Show the class how the formula bar now reads naturally and is easier to audit.

## 4. Save the Teacher Version

- Save the completed workbook as `unit02-lesson04-teacher.xlsx` in `public/resources/`.
- Encourage students to reopen the Name Manager (Ctrl + F3) to see their named ranges.

This lesson’s output sets up the structure for Lesson 05’s depreciation schedule and keeps month-end summaries readable for TechStart’s leadership review.
