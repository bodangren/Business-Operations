# Unit 07 Lesson 05 - Multi-Sheet Inventory Algorithm Workbook

This tutorial matches:
- `unit07-lesson05-student.xlsx`
- `unit07-lesson05-teacher.xlsx`

Workbook tabs are intentionally split for readability:
- `Inputs`
- `FIFO`
- `LIFO`
- `SpecificID`
- `WeightedAverage`
- `Outputs`

## 1. Build `Inputs`

1. Confirm Purchases table fields: `LotID, Date, SKU, Qty, UnitCost, LotTotal`
2. Confirm Sales table fields: `Date, SKU, Qty, LotID`
3. Add shared totals:
   - `UnitsSold = SUM(Sales[Qty])`
   - `TotalUnits = SUM(Purchases[Qty])`
   - `GAFS = SUM(Purchases[LotTotal])`
4. Add `SelectedMethod` dropdown with:
   - FIFO
   - LIFO
   - Specific ID
   - Weighted Average

## 2. Build `FIFO`

1. Use oldest-to-newest lot order.
2. Add running cumulative quantity.
3. Use consume pattern:
   - `MAX(0,MIN(lotQty,UnitsSold-(cumQty-lotQty)))`
4. Multiply consumed units by unit cost.
5. Sum FIFO cost for FIFO COGS.
6. Compute FIFO EI:
   - `FIFO EI = GAFS - FIFO COGS`

Sample-data check:
- FIFO COGS = **280**
- FIFO EI = **520**

## 3. Build `LIFO`

1. Copy lots in newest-to-oldest order.
2. Reuse the same consume pattern used in FIFO.
3. Sum LIFO cost for LIFO COGS.
4. Compute LIFO EI:
   - `LIFO EI = GAFS - LIFO COGS`

Sample-data check:
- LIFO COGS = **320**
- LIFO EI = **480**

## 4. Build `SpecificID`

1. In Sales logic, use LotID to identify exact source lot.
2. Pull lot cost:
   - `XLOOKUP(SalesLotID, PurchasesLotID, PurchasesUnitCost)`
3. Sale-line cost:
   - `Qty * LookupCost`
4. Sum sale-line costs for Specific ID COGS.
5. Compute Specific ID EI:
   - `Specific ID EI = GAFS - Specific ID COGS`

Sample-data check:
- Specific ID COGS = **310**
- Specific ID EI = **490**

## 5. Build `WeightedAverage`

1. `WA Rate = GAFS / TotalUnits`
2. `WA COGS = UnitsSold * WA Rate`
3. `WA EI = (TotalUnits - UnitsSold) * WA Rate`

Sample-data check:
- WA COGS = **300**
- WA EI = **500**

## 6. Build `Outputs`

1. Add one summary row per method:
   - Method, COGS, Ending Inventory
2. Add selector-based display formulas for COGS and EI.
3. Add balance check for each method:
   - `COGS + EI = GAFS`

## 7. Professional Quality (Mentioned, Not Scored Here)

- Keep names and table references clear.
- Include validation and friendly error handling.
- Keep each sheet readable for audit and explanation.
