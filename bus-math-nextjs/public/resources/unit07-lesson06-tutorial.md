# Unit 07 Lesson 06 - Scenario-Switch Dashboard Workbook

This tutorial aligns:
- `unit07-lesson06-student.xlsx`
- `unit07-lesson06-teacher.xlsx`

Workbook tabs:
- `Inputs`
- `Drivers`
- `MethodSummary`
- `Outputs`
- `KPI`
- `Checks`
- `Dashboard`

## 1. Build `Inputs`

1. Add selector cells:
   - `SelectedScenario` (Base, Stretch, Downside)
   - `SelectedMethod` (FIFO, LIFO, Weighted Average)
2. Add key cell:
   - `SelectedKey = SelectedScenario & "|" & SelectedMethod`
3. Confirm constants:
   - `UnitSellingPrice`
   - `BeginningInventory`
   - `GAFS`

## 2. Build `Drivers`

Create scenario assumptions table:

`Scenario | UnitsSold | DefaultMethod | AsOfDate`

Use sample rows:
- Base → 35 units
- Stretch → 39 units
- Downside → 32 units

## 3. Build `MethodSummary`

Create one row per scenario+method pair with:
- `Key`
- `Scenario`
- `Method`
- `COGS`
- `EndingInventory`
- `BalanceCheck`

Include rows for all 9 combinations:
- Base/FIFO, Base/LIFO, Base/Weighted Average
- Stretch/FIFO, Stretch/LIFO, Stretch/Weighted Average
- Downside/FIFO, Downside/LIFO, Downside/Weighted Average

## 4. Build `Outputs`

1. Pull selected units sold:
   - `XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[UnitsSold])`
2. Pull selected COGS:
   - `XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS])`
3. Pull selected ending inventory:
   - `XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[EndingInventory])`

## 5. Build `KPI`

1. `Revenue = SelectedUnitsSold * UnitSellingPrice`
2. `GrossMargin% = (Revenue - SelectedCOGS) / Revenue`
3. `AverageInventory = (BeginningInventory + SelectedEndingInventory) / 2`
4. `Turnover = SelectedCOGS / AverageInventory`
5. `DaysOnHand = 365 / Turnover`

## 6. Build `Checks`

Add visible checks:
- GAFS conservation:
  - `IF(ABS((SelectedCOGS+SelectedEndingInventory)-GAFS)<0.01,"Balanced","Check")`
- Key lookup health:
  - `IFNA(XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS]),"Missing Key")`
- Units sold validity:
  - `IF(SelectedUnitsSold>0,"OK","Check Drivers")`

## 7. Build `Dashboard`

Link display tiles to:
- Selected scenario and method from `Inputs`
- COGS and ending inventory from `Outputs`
- Turnover and days on hand from `KPI`
- Check status from `Checks`

Use one-page layout for fast investor reading.

## 8. Professional Quality (Mentioned, Not Scored Here)

- Keep control and output names clear.
- Keep table references consistent.
- Add validation and error handling as standard model quality.
