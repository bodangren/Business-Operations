# Unit 07 Lesson 06 – LIFO Inventory Valuation

This tutorial converts `unit07-lesson06-student.xlsx` into the completed teacher model (`unit07-lesson06-teacher.xlsx`). Students apply the Last-In, First-Out method to the same January inventory data used in Lesson 05.

## 1. Review the Data

- The **InventoryLIFO** sheet reuses the identical purchases and sales logs from FIFO.
- Only the summary cells are blank; everything else is ready for analysis.
- Remind the class: LIFO assumes the most recent purchases leave the warehouse first.

## 2. Apply LIFO Layers

1. Start with the most recent purchase:
   - 90 units @ \$19.80 (Jan 28)
2. Continue backward until you’ve covered all 260 units sold:
   - 100 units @ \$19.60 (Jan 20)
   - 70 units @ \$19.10 (from the Jan 12 lot)
3. Remaining inventory consists of:
   - 10 units @ \$19.10 (left from Jan 12)
   - 120 units @ \$18.40 (entire Jan 05 lot)

## 3. Populate the Summary Cells

- `COGS Units`: 260
- `COGS Cost ($)`: `=90*19.8 + 100*19.6 + 70*19.1` → **\$5,079.00**
- `Ending Inventory Units`: 130
- `Ending Inventory Cost ($)`: `=10*19.1 + 120*18.4` → **\$2,399.00**

Discuss how LIFO raises COGS (and lowers ending inventory) during rising cost periods—an insight TechStart can use when evaluating tax strategies.

## 4. Optional Enhancements

- Add a comparison table showing FIFO vs. LIFO ending inventory to reinforce the magnitude of change.
- Use color or borders to distinguish consumed layers vs. remaining layers.

## 5. Save the Teacher Version

- Save the workbook as `unit07-lesson06-teacher.xlsx`.
- Students should keep both FIFO and LIFO summaries handy for investor Q&A in the unit capstone.

By seeing both methods back-to-back, learners can articulate why companies choose one valuation approach over another.
