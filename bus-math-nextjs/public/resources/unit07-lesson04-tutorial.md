# Unit 07 Lesson 04 – Comparing SLN and DDB Depreciation

This tutorial guides you through completing `unit07-lesson04-student.xlsx` so it matches the teacher model (`unit07-lesson04-teacher.xlsx`). Students practice computing straight-line (`SLN`) and double-declining balance (`DDB`) depreciation for TechStart’s asset list.

## 1. Review the Sheet Layout

- The **Depreciation** sheet lists each asset with cost, salvage value, and useful life.
- Columns `SLN Annual Depreciation` and `DDB Year 1` are blank in the student file.
- A note at the top reminds students they will later switch between methods, so they should use Excel functions instead of manual math.

## 2. Straight-Line Depreciation

1. Select cell `E6` (Delivery Van).
2. Enter `=SLN(B6,C6,D6)` and press Enter.
3. Fill the formula down through `E10` to cover every asset.

Explain that `SLN` spreads the depreciable base evenly across the useful life, delivering a consistent annual expense.

## 3. Double-Declining Balance (Year 1)

1. Select cell `F6`.
2. Enter `=DDB(B6,C6,D6,1)` to calculate the first-year accelerated depreciation.
3. Copy the formula down through `F10`.

Call out how DDB accelerates depreciation: the Delivery Van’s first-year expense jumps from \$7,400 (SLN) to \$13,440 (DDB).

## 4. Format and Verify

- Format columns `E` and `F` as currency with zero decimals.
- Quick check: DDB should always be equal to or greater than SLN in year one.

## 5. Save the Teacher Version

- Save the completed workbook as `unit07-lesson04-teacher.xlsx`.
- Students will reuse these formulas in later lessons when they compare FIFO vs. LIFO and add a dynamic method toggle.

The sheet now showcases two depreciation perspectives investors expect to see in TechStart’s fixed asset schedule.
