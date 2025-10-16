# Unit 04 Lesson 07 – Forecasting Café Sales

This tutorial shows how to finish `unit04-lesson07-student.xlsx` and match the teacher solution (`unit04-lesson07-teacher.xlsx`). Students extend café sales into the next month using `FORECAST.LINEAR`.

## 1. Review Historical Trend

- Open **MonthlySales**. Months 1–6 contain actual revenue totals from TechStart Café’s point-of-sale system.
- Row 8 (Month 7) is blank—students will forecast that value.
- Mention that consistent growth suggests a steady upward trend, setting expectations for the forecast outcome.

## 2. Enter the Forecast Formula

1. Select cell `C8`.
2. Type `=FORECAST.LINEAR(A8,$B$2:$B$7,$A$2:$A$7)` and press Enter.
   - `A8` is the new month number.
   - `$B$2:$B$7` references the historical sales values.
   - `$A$2:$A$7` references the known month numbers.
3. The forecast should output **12,380** (rounded). Format as currency to mirror the teacher workbook.

## 3. Highlight the Prediction

- Consider adding cell shading or a border around `C8` so the class can quickly spot the projected revenue during discussion.
- Optional: add a note below the table explaining assumptions (steady marketing spend, same café hours, no major events).

## 4. Save the Teacher Version

- Save the workbook as `unit04-lesson07-teacher.xlsx`.
- Encourage students to play with alternative scenarios (e.g., type `8` in a new row or adjust a historical month) to see how the forecast responds.

Now the class can compare forecasted revenue against upcoming promotions and align inventory planning with anticipated demand.
