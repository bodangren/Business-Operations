# Unit 02 Lesson 06 – Recording a Formatting Macro

This tutorial shows how to transform `unit02-lesson06-student.xlsx` into the formatted teacher model (`unit02-lesson06-teacher.xlsx`). The class records a macro that polishes the Month-End Snapshot block and assigns it to a button or shortcut.

## 1. Preview the Unformatted Report

- Open the student workbook and go to **MacroPractice**.
- The data block is intentionally plain: title, headers, and raw numbers.
- Explain that the macro will apply consistent formatting so Sarah’s reports look investor-ready in seconds.

## 2. Record the Macro

1. On the **View** tab, choose **Macros › Record Macro**.
2. Name it `FormatSnapshot`, assign a shortcut (e.g., `Ctrl+Shift+F`), and store it in *This Workbook*.
3. Click **OK** to begin recording.

## 3. Apply the Formatting Steps

While recording:

1. Select cell `A1`, set it to bold, and increase the font size to 14.
2. Select row 3 (headers) and apply bold text plus a light fill if desired.
3. Highlight column `B` and format the numbers as currency with two decimals.
4. Repeat the currency format for column `C` so variances display with the same style.
5. Add thin outside borders to the data block (`A3:D7`).

These are the exact visual changes already present in the teacher workbook.

## 4. Stop Recording and Optional Button

1. Return to **View › Macros › Stop Recording**.
2. (Optional) Insert a rounded rectangle shape labeled “Format Snapshot”.
3. Right-click the shape, choose **Assign Macro**, and select `FormatSnapshot`.

Now one click replays every formatting move.

## 5. Save the Teacher Version

- Press the macro shortcut (or button) to confirm the formatting applies correctly.
- Save the finished workbook as `unit02-lesson06-teacher.xlsx`.
- Remind students to save as a macro-enabled workbook (`.xlsm`) if they want to reuse the macro in future lessons; the provided teacher file preserves the formatted results for quick comparison.

The macro gives TechStart’s accounting team a repeatable way to polish monthly snapshots without manual formatting each time.
