# Unit 08 Lesson 05 – Scenario Selection with IF Statements

This tutorial upgrades `unit08-lesson05-student.xlsx` to the teacher solution (`unit08-lesson05-teacher.xlsx`). Students wire the assumptions sheet so the startup model switches between Base, Best, and Worst cases automatically.

## 1. Inspect the Scenario Table

- On **Assumptions**, note the new section:
  - `B9` stores the scenario selector (1 = Base, 2 = Best, 3 = Worst).
  - Rows `12–14` list each scenario’s growth rate (`C`) and price (`D`).
  - `B16` (“Active Growth Rate”) and `B17` (“Active Price per Unit”) are blank in the student workbook. The model references these cells for every calculation.

## 2. Write the Nested IF Formulas

1. In `B16`, enter  
   `=IF($B$9=1,$C$12,IF($B$9=2,$C$13,$C$14))`
2. In `B17`, enter  
   `=IF($B$9=1,$D$12,IF($B$9=2,$D$13,$D$14))`

These formulas pull the growth rate and price for whichever scenario ID is typed in `B9`. The `$` anchors keep the references stable when you copy or edit later.

## 3. Test the Scenario Toggle

1. Change `B9` from `1` (Base) to `2` (Best Case).
2. Move to the **Model** sheet. You should see:
   - Units growing at 8% month over month.
   - Revenue using the \$47 price point.
   - Net Income (Month 6) jumping to \$23,107.36.
3. Switch `B9` back to `1` to confirm the model returns to the baseline forecast.

## 4. Optional Enhancements

- Add data validation to `B9` (list: `1,2,3`) to prevent invalid entries.
- Insert a small summary table that displays the current scenario name using `CHOOSE` or another `IF`.

## 5. Save the Teacher Version

- Save as `unit08-lesson05-teacher.xlsx`.
- Encourage students to snapshot the Base vs. Best case outputs—these comparisons are useful for investor conversations.

With scenario logic in place, the forecasting model can pivot instantly between aggressive and conservative assumptions, setting up Lessons 06 and 07.
