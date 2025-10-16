# Unit 07 Lesson 05 – FIFO Inventory Valuation

This walkthrough finishes `unit07-lesson05-student.xlsx` so it matches the teacher workbook (`unit07-lesson05-teacher.xlsx`). Students apply the First-In, First-Out method to TechStart’s January inventory activity.

## 1. Inspect the Inventory Sheet

- The **InventoryFIFO** sheet provides:
  - Purchase log with units and unit costs.
  - Sales log showing how many units left the warehouse.
  - A summary section with empty cells for COGS and ending inventory.
- Total units purchased: 390. Units sold: 260 → Ending inventory: 130 units.

## 2. Build the FIFO Layer Schedule

Encourage students to create helper columns (on scratch paper or within the sheet) that track how many units remain in each layer after each sale.

1. Start with the earliest purchases:
   - 120 units @ \$18.40
   - 80 units @ \$19.10
   - 100 units @ \$19.60
   - 90 units @ \$19.80
2. Apply FIFO rules to the sales total (260 units):
   - Consume the full 120-unit layer at \$18.40.
   - Consume the full 80-unit layer at \$19.10.
   - Consume 60 units from the 100-unit layer at \$19.60.
- Remaining inventory comprises:
   - 40 units @ \$19.60
   - 90 units @ \$19.80

## 3. Populate the Summary

- `COGS Units`: 260
- `COGS Cost ($)`: `=120*18.4 + 80*19.1 + 60*19.6` → **\$4,912.00**
- `Ending Inventory Units`: 130
- `Ending Inventory Cost ($)`: `=40*19.6 + 90*19.8` → **\$2,566.00**

Press students to explain *why* FIFO puts the earliest costs into COGS—investors want to hear the logic, not just the numbers.

## 4. Optional Presentation Touches

- Add totals beneath the purchases table.
- Color-code the remaining inventory layers so they stand out during discussion.

## 5. Save the Teacher Version

- Save the completed sheet as `unit07-lesson05-teacher.xlsx`.
- Keep the helper notes—you’ll compare FIFO to LIFO in Lesson 06.

With FIFO complete, TechStart can demonstrate conservative cost recognition when raw ingredient prices are rising.
