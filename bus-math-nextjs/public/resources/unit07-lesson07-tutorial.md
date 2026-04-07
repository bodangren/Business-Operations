# Unit 07 Lesson 07 - Inventory Project Rehearsal Workbook

Use this walkthrough with `unit07-lesson07-student.xlsx`. Lesson 07 is a rehearsal, not the real project. Everyone uses the same shared dataset so the class can compare workbook quality, evidence chains, and recommendation writing before Lessons 08-10.

## Scenario

- Business: TechStart Hardware
- Product: USB-C docking stations
- Audience: investor update / controller review
- Main question: Which inventory valuation method gives the clearest, most defensible story about profit, turnover, and inventory risk?

## Workbook Tabs

1. `ReadMe` - Brief, workbook map, and Definition of Done
2. `Inputs` - Shared controls and top-level totals
3. `BeginningInventory` - Opening inventory layer
4. `Purchases` - Dated purchase layers with rising costs
5. `Sales` - Sales transactions plus the Specific ID assignment log
6. `Valuation` - FIFO, LIFO, Weighted Average, and Specific ID calculations
7. `MethodCompare` - Side-by-side COGS, ending inventory, gross margin, turnover, and days on hand
8. `Checks` - Validation flags and rehearsal completion checks
9. `Dashboard` - Investor-facing selected-method snapshot and charts
10. `Recommendation` - Claim, evidence, comparison, risk, and final defense

## Lesson 07 Goal

The student workbook is not blank. Most of the shared dataset and valuation structure are already there because this lesson is about rehearsal and audit, not learning a brand-new Excel pattern. Your job is to:

- trace the recommendation back to workbook evidence
- confirm that every method reconciles to GAFS
- finish the selected-method dashboard snapshot
- write a recommendation that cites specific workbook numbers

The teacher file, `unit07-lesson07-teacher.xlsx`, shows the completed rehearsal state with `Weighted Average` selected.

## Recommended Workflow

### 1. Orient yourself to the shared data

- Read the `ReadMe` sheet so you know what each tab is supposed to prove.
- On `Inputs`, confirm the workbook is using one shared method selector and one shared set of totals.
- Check `BeginningInventory`, `Purchases`, and `Sales` to see the full flow of units before you touch the analysis tabs.

### 2. Audit the valuation logic

- On `Valuation`, verify that the FIFO, LIFO, and Specific ID lot tables all consume the same total units sold.
- Check the Weighted Average block at the bottom of the sheet.
- Use `Checks` to confirm each method still satisfies `COGS + Ending Inventory = GAFS`.

### 3. Finish the dashboard snapshot

In the student workbook, `Dashboard!C5:C10` is intentionally left blank. Link those cells to `MethodCompare` so the selected method updates cleanly.

Use `INDEX` + `MATCH` with the selected method in `Inputs!B5`.

- `C5` Revenue  
  `=INDEX(MethodCompare!$C$5:$C$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`
- `C6` COGS  
  `=INDEX(MethodCompare!$D$5:$D$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`
- `C7` Ending Inventory  
  `=INDEX(MethodCompare!$E$5:$E$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`
- `C8` Gross Margin %  
  `=INDEX(MethodCompare!$G$5:$G$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`
- `C9` Turnover  
  `=INDEX(MethodCompare!$I$5:$I$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`
- `C10` Days On Hand  
  `=INDEX(MethodCompare!$J$5:$J$8,MATCH(Inputs!$B$5,MethodCompare!$A$5:$A$8,0))`

When those links are in place, the `Dashboard Snapshot` check should clear.

### 4. Write the recommendation

Complete `Recommendation!B7:B12` using the structure from the lesson page:

- claim
- evidence from workbook numbers
- comparison to another method
- one real risk or limitation
- final recommendation

For this shared rehearsal dataset, the teacher file models a `Weighted Average` recommendation. It cites:

- COGS: `$3,631.13`
- Ending inventory: `$2,683.88`
- Gross margin: `42.8%`
- Turnover: `1.78x`
- Days on hand: `205.3`

Your wording does not need to match the teacher file exactly, but it should use specific workbook numbers and explain one tradeoff.

### 5. Clear the final checks

Before peer audit, confirm the `Checks` sheet shows:

- `Dashboard Snapshot` = `OK`
- `Recommendation Draft` = `OK`

If one of those still says `Finish ...`, the workbook is still in rehearsal draft mode.

## What Good Looks Like

A strong Lesson 07 workbook should let another student answer these questions quickly:

- What data produced the recommendation?
- Which method gives the strongest evidence chain?
- Do all four methods reconcile to the same GAFS total?
- What is the main tradeoff in the recommendation?
- Which exact workbook structures must be rebuilt in Lessons 08-10?

## Why This Matters

Lesson 08 keeps the same workbook architecture but changes the dataset and removes the step-by-step teacher model. If students can trace and defend the shared rehearsal workbook now, they will be much more ready to build their own group project workbook next.
