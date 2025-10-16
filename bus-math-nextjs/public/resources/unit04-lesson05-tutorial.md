# Unit 04 Lesson 05 – Descriptive Statistics for Café Sales

This guide walks through upgrading `unit04-lesson05-student.xlsx` to the completed teacher file (`unit04-lesson05-teacher.xlsx`). Students summarize TechStart Café’s cleaned sales data with `AVERAGE`, `MEDIAN`, `STDEV.S`, and `COUNTA`.

## 1. Confirm the Cleaned Data

- Open the student workbook and ensure **CleanedSales** matches the eight polished records from Lesson 04.
- Remind students that statistics only make sense after the data is consistent and duplicate-free.

## 2. Build the Summary Table

- Go to **SummaryStats**. The Metric column is pre-filled; the Value column is empty.
- All formulas reference `CleanedSales`, so the stats update automatically if more orders are added later.

### Average Sales

1. Select `B2`.
2. Enter `=AVERAGE(CleanedSales!E:E)` and press Enter.
3. Format the result as currency (should be \$179.85).

### Median Sales

1. In `B3`, type `=MEDIAN(CleanedSales!E:E)` (result: \$172.40).
2. Explain how the median resists outliers when a new high-ticket order comes in.

### Standard Deviation

1. In `B4`, enter `=STDEV.S(CleanedSales!E:E)` (result: \$24.76).
2. Discuss how variability helps the café plan inventory and staffing.

### Total Transactions

1. In `B5`, use `=COUNTA(CleanedSales!A:A)` to count orders.
2. Result should be `8`, matching the cleaned dataset.

## 3. Optional Formatting Touches

- Apply bold to the Metric column headers.
- Add number formatting to two decimal places.
- Use conditional formatting or color scales if you want to highlight the statistic that matters most for discussion.

## 4. Save the Teacher Version

- Save the finished workbook as `unit04-lesson05-teacher.xlsx`.
- Encourage students to compare their calculated values to confirm they match before moving on to lesson 06.

With descriptive statistics in place, the class is ready to visualize average sales by weekday and spot operational trends.
