# Unit 07 Lesson 07 – Dynamic Depreciation Method Selection

This tutorial shows how to finish `unit07-lesson07-student.xlsx` and achieve the teacher result (`unit07-lesson07-teacher.xlsx`). Students add an `IF` statement so the depreciation schedule switches between SLN and DDB based on a single input cell.

## 1. Confirm the Starting Sheet

- The **Depreciation** sheet now includes both SLN and DDB calculations from earlier lessons.
- Cell `B3` is labeled “Method (SLN or DDB)” and currently reads **SLN** in the student workbook.
- Column `G` (`Selected Depreciation`) is blank—students will write the formula there.

## 2. Create the Dynamic Formula

1. Click cell `G6` (Delivery Van).
2. Enter `=IF(UPPER($B$3)="SLN",E6,F6)` and press Enter.
   - `UPPER` allows the input to be case-insensitive.
   - If the method cell equals “SLN,” the formula returns the SLN value; otherwise it returns DDB.
3. Fill the formula down through `G10`.

Now changing `B3` immediately updates every asset’s selected depreciation.

## 3. Test the Switch

1. Replace the method value in `B3` with **DDB**.
2. Verify column `G` updates to the DDB numbers (e.g., Delivery Van shows \$13,440).
3. Switch back to **SLN** to confirm the toggle works both ways.

## 4. Optional Controls

- Add data validation to `B3` (List: `SLN,DDB`) to prevent typos.
- Create a chart comparing selected depreciation vs. SLN to visualize the impact.

## 5. Save the Teacher Version

- Save as `unit07-lesson07-teacher.xlsx` with the method set to **DDB** so students can see the final state.
- Encourage learners to explain to investors why they might model both methods—SLN for reporting consistency, DDB for accelerated tax deductions.

This dynamic toggle helps TechStart quickly prepare multiple depreciation scenarios without rewriting formulas.
