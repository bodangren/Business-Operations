# Lesson 6 Build and test the dashboard

Open [Unit04_L06_Start.xlsx](unit04-lesson06-student.xlsx).

1. Keep the completed Analysis. Forecast weekend 9 with FORECAST.LINEAR(NextWeekend,CleanPOS[Orders],CleanPOS[Weekend]).
2. Use COUNTIF to confirm exactly one scenario match. Use SUMIF to read the selected plan from Plans. Resolve invalid names or missing inputs before reporting a result.
3. Multiply forecast orders by the demand factor. Divide expected waste by prepared units. Compare the result with 3%. Compare units available after waste with demand rounded up.
4. Link the order values in Dashboard A5:B13 and the waste rates in D5:E8. Insert a line chart for orders and a column chart for waste rates.
5. Switch Low, Base, and High. Check that the Plan value changes. The chart ranges are fixed for this exercise. If you add a weekend, extend the chart source and confirm the new point appears.

In Forecasting, use B7 for the trend, B8 for scenario orders, B9 for the planned waste rate, B11 for the waste check, and B12 for the service check. On Dashboard, link E6:E8 to HistoricalWaste, PlanWasteRate, and WasteTarget.
