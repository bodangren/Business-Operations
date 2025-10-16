# Unit 04 Lesson 06 – Visualizing Sales by Weekday

Use this walkthrough to transform `unit04-lesson06-student.xlsx` into the completed teacher model (`unit04-lesson06-teacher.xlsx`). Students calculate weekday averages and prepare chart-ready data that can feed a column or line chart.

## 1. Verify the Starting Point

- The workbook already includes the cleaned sales table and completed summary stats from Lesson 05.
- The **DayAverages** sheet lists each weekday with blank Average Sales cells.

## 2. Calculate Average Sales per Day

1. In `B2`, enter `=AVERAGEIF(CleanedSales!D:D,"Monday",CleanedSales!E:E)` to pull Monday’s average.\n2. Fill the formula down through `B7`, changing only the day criteria each time (Tuesday, Wednesday, etc.).
3. Results should match the teacher workbook:
   - Monday: 185.50
   - Tuesday: 142.75
   - Wednesday: 182.725
   - Thursday: 156.80
   - Friday: 214.90
   - Saturday: 172.40

Stress why the `AVERAGEIF` approach is flexible—if Sarah adds more Monday orders, the cell updates automatically.

## 3. Build the Chart (Teacher Demonstration)

1. Highlight the completed range `A1:B7`.
2. Insert a column chart (or line chart) via **Insert › Charts**.
3. Format with a descriptive title such as “Average Café Sales by Weekday”.
4. Optional: Add data labels to call out the busiest day (Friday) and the slowest (Tuesday).

Save the chart on the same sheet or move it to a new sheet titled “WeekdayChart” as you prefer.

## 4. Save the Teacher Version

- Save the workbook as `unit04-lesson06-teacher.xlsx`.
- Remind students that their final version should include both the filled averages and the chart they created live.

This visual snapshot helps the class discuss staffing plans, promotional days, and ingredient ordering backed by real café data.
