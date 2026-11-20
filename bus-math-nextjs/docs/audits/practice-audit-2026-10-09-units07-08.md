# Practice calculation audit: Units 07 and 08

Repair update, 2026-10-10: All confirmed findings below are corrected. These descriptions preserve the original audit evidence. See the [main repair report](practice-audit-2026-10-09.md#repair-verification-2026-10-10) for current checks.

Date: 2026-10-09

## Scope and method

I reviewed student lesson routes, lesson data, Phase 3 guided practice, Phase 4 independent practice, and Unit 07 Lessons 08–10 and Unit 08 Lessons 08–10 project pages. I traced the local practice components and calculation code named in the coverage table. I used the archived Unit 07 and Unit 08 Measure specifications and plans as the content reference.

I confirmed arithmetic by reading the stored inputs and calculations. I also ran `scripts/audit/practice-units07-08-evidence.py` with the provided Python runtime. The script recomputes selected examples. I did not run the app in a browser. I did not open or calculate the XLSX workbooks. This is a source-only audit with independent arithmetic checks. It does not confirm browser rendering or workbook formula behavior.

## Confirmed findings

### [P1] Unit 07 Lesson 02 accepts impossible COGS and ending-inventory ranges

Source: [`CostAssignmentPractice.tsx`](../../src/app/student/unit07/lesson02/CostAssignmentPractice.tsx#L54) lines 54–83 and 115–132; phase instructions in [`PhaseContent.tsx`](../../src/app/student/unit07/lesson02/phase-4/PhaseContent.tsx#L67) lines 67–88 and 143–146.

Inputs: 12 units at $18, 15 units at $20, 10 units at $22, and 20 units sold. Goods available for sale are 37 units and $736.

The code sets COGS to $360–$440 by multiplying 20 sold units by the lowest and highest unit costs. Those endpoints are impossible because the $18 layer has only 12 units and the $22 layer has only 10 units. The feasible minimum COGS is 12 × $18 + 8 × $20 = **$376**. The feasible maximum is 10 × $22 + 10 × $20 = **$420**. The matching ending-inventory range is **$316–$360**.

The code instead stores ending inventory as **$296–$376**. It also checks COGS and ending inventory as separate ranges. For example, it accepts COGS of $376 and ending inventory of $316, even though they sum to $692 instead of the $736 goods available. The lesson tells students that ending inventory plus COGS must equal goods available. The prompt asks for possible ranges, so the wrong values are student-facing answer keys.

Student impact: Students can receive “Correct” feedback for impossible COGS and non-conserving COGS/ending-inventory pairs.

### [P1] Unit 07 Lesson 02 shows a wrong final timeline answer and labels event COGS as cumulative

Source: [`InventoryTimelineLab.tsx`](../../src/app/student/unit07/lesson02/InventoryTimelineLab.tsx#L24) lines 24–103, 115–130, 273–290, and 431–440.

Inputs and correct result: Start with 10 units at $18. Buy 20 at $20, sell 8 from the first layer, buy 10 at $22, then sell 12 by FIFO. Before the last sale, 20 units remain with value $420: 10 at $20 and 10 at $22. The last sale takes 5 at $20. The last sale COGS is **$100**, ending units are **15**, and ending inventory is **$320**. Total COGS for all three sales is **$480**.

The event 6 data stores COGS **$340** and ending inventory **$280**. The inline comment says the last 5 units cost $100. The event 5 entry stores $236, which is that event’s FIFO cost, not cumulative COGS. The reveal calls each stored value “Total COGS so far.” The running-totals helper also replaces COGS with the current event value; it does not add sale costs.

Student impact: The reveal teaches the wrong cost for the final sale, reports the wrong ending inventory, and labels event-only cost as cumulative. Students cannot reconcile the final data to the $800 cost of goods available.

### [P1] Unit 07 Lesson 03 can generate a negative purchase layer

Source: [`MethodRecommendationStudio.tsx`](../../src/app/student/unit07/lesson03/MethodRecommendationStudio.tsx#L8) lines 8–54, 57–84, and 248–260.

Reproducible random inputs: Choose ending units 20, four purchase layers, units sold 25, and base cost $30. Use `.99` for the non-final layer-size, purchase-cost increment, and base-cost increment draws. This yields layers **39@$33, 6@$42, 5@$51, and −5@$60**. The displayed total is 45 units, which matches the sum only because the last layer is negative.

The generator calculates an earlier layer with `floor(random × min(30, remaining units − reserve)) + 10`. When the bound is negative, an earlier layer can exceed the units left. The last layer then becomes negative. The component displays that layer and passes it into FIFO and LIFO cost calculations. With this input, it reports FIFO COGS **$825** and LIFO COGS **$834**; the LIFO calculation includes −5 units at $60.

Student impact: Students can see a negative inventory layer and a cost-flow result based on a negative quantity. The generated data does not describe possible inventory.

### [P1] Unit 07 Lesson 04 weighted-average practice certifies a false balance

Source: [`WeightedAvgPractice.tsx`](../../src/app/student/unit07/lesson04/WeightedAvgPractice.tsx#L70) lines 70–90 and 853–945.

Inputs: Sugar has 200 units at $0.40, 500 at $0.44, and 300 at $0.48. The total is **1,000 units and $444**. The exact weighted average is $0.444. The source rounds the unit cost to $0.44, then sells 600 units and leaves 400.

Stored answers: COGS **$264** and ending inventory **$176**. Their sum is **$440**, not $444. The verification checks the user’s answer against that $440 self-sum, then displays “Perfect! The equation balances” and prints `$440.00 = $444 ✓`.

Student impact: The exercise rejects the true $444 conservation result and marks $440 as correct. Four of the six generated fixtures have the same issue: Sugar is $4 short, Oats is $4 over, Cornmeal is $2 over, and Barley is $2 short. The same cent-rounding pattern also appears in the weighted-average tab of `MethodPracticeCombined.tsx`; its Wheat Flour fixture is $5 over ($607 available versus $612 assigned), and its completion screen presents the three totals without a conservation correction.

### [P2] Unit 07 Lesson 03 accepts fractional dollar answers after truncation

Source: [`MethodRecommendationStudio.tsx`](../../src/app/student/unit07/lesson03/MethodRecommendationStudio.tsx#L175) lines 175–189 and numeric inputs at lines 307–312.

The component grades dollar answers with `parseInt`. If the correct FIFO COGS is **$825**, an input of **$825.99** parses to 825 and receives a correct mark. The prompts use dollar values with no cents, so the decimal amount is not the stated answer.

Student impact: A student can enter a wrong dollar amount and receive correct feedback. Use numeric parsing and an explicit rounding tolerance that matches the displayed currency precision.

### [P2] Unit 08 Lesson 03 straight-line practice can depreciate below salvage after rounding

Source: [`StraightLineMastery.tsx`](../../src/components/exercises/StraightLineMastery.tsx#L41) lines 41–67.

Valid generated inputs: delivery van cost $28,000, salvage value $3,000, useful life 6 years, and target year 6. The source rounds annual depreciation from $25,000 ÷ 6 to **$4,167**, then multiplies by six. It stores accumulated depreciation of **$25,002** and book value of **$2,998**. At the end of useful life, book value should equal salvage value, **$3,000**.

Student impact: A valid generated prompt marks a schedule with book value below salvage as the correct answer. The annual-dollar rounding needs a final-year adjustment or inputs that divide evenly.

## Unconfirmed concern

Unit 08 Lesson 06 Phase 4 shows a statement example with depreciation of $5,600 under straight-line and $13,333 under DDB, and fixed-asset cost of $50,000. The adjacent Phase 4 comparison table shows a delivery van with $3,750/$9,000 and a laptop set with $1,250/$3,000. The Lesson 07 Phase 3 rehearsal example uses four assets and shows $7,683/$18,333. These values may come from different examples. The source does not state that the statements use the adjacent assets, so I did not count this as a confirmed calculation defect. See [`lesson06/phase-4/PhaseContent.tsx`](../../src/app/student/unit08/lesson06/phase-4/PhaseContent.tsx#L40) lines 40–113 and 134–153, and [`lesson07/phase-3/PhaseContent.tsx`](../../src/app/student/unit08/lesson07/phase-3/PhaseContent.tsx#L7) lines 7–37.

## Lesson coverage

| Unit / lesson | Route and practice sources inspected | Result |
|---|---|---|
| Unit 07 / 01 | Phase 3/4 source pages; dependencies: `InventoryPredictionLab.tsx`, `InventoryStrategyStudio.tsx`, `inventory-simulation.ts` | No additional confirmed arithmetic issue. Guided snapshots conserve inventory cost. The independent simulator uses rounded average cost per kit; its fixed values were not a finding in this pass. |
| Unit 07 / 02 | Phase 3/4 source pages; dependencies: `CostAssignmentPractice.tsx`, `InventoryTimelineLab.tsx` | Two confirmed P1 findings above. |
| Unit 07 / 03 | Phase 3/4 source pages; dependencies: `LayerAssignmentPractice.tsx`, `MethodRecommendationStudio.tsx` | Confirmed P1 generator defect and P2 fractional-dollar grading issue above. |
| Unit 07 / 04 | Phase 3/4 source pages; dependencies: `MethodComparisonMatrix.tsx`, `MethodPracticeCombined.tsx`, `WeightedAvgDemo.tsx`, `WeightedAvgPractice.tsx` | One confirmed P1 weighted-average rounding defect above. |
| Unit 07 / 05 | Phase 3/4 source pages; dependencies: `MethodComparisonSimulator.tsx`, `SpreadsheetHelpers.ts`, `SpreadsheetWrapper.tsx` | No additional confirmed error in inspected static examples. COGS/EI examples reconcile to $800. XLSX formulas not checked. |
| Unit 07 / 06 | Phase 3/4 source pages; dependencies: `DynamicMethodSelector.tsx`, `SpreadsheetHelpers.tsx`, `SpreadsheetWrapper.tsx` | No additional confirmed error in inspected static values. Method-summary rows reconcile to $1,150. |
| Unit 07 / 07 | Phase 3/4 source pages and static workbook previews | Source examples inspected. Workbook formulas not checked. |
| Unit 07 / 08 | Single-page activity route source; `phase-1/PhaseContent.tsx` and lesson data are route dependencies | Project milestone content, group workbook links, and criteria inspected. Workbook formulas not checked. |
| Unit 07 / 09 | Single-page activity route source; `phase-1/PhaseContent.tsx`, lesson data, and `PeerCritiqueForm.tsx` are dependencies | Project milestone content, group workbook links, and criteria inspected. Workbook formulas not checked. Peer critique behavior was not part of the arithmetic review. |
| Unit 07 / 10 | Single-page activity route source; `phase-1/PhaseContent.tsx`, lesson data, and `PeerCritiqueForm.tsx` are dependencies | Project milestone content, group workbook links, and criteria inspected. Workbook formulas not checked. Peer critique behavior was not part of the arithmetic review. |
| Unit 08 / 01 | Phase 3/4 source pages; `lib/paths.ts` is a dependency | Static lesson content inspected. These phases have no calculation component. |
| Unit 08 / 02 | Phase 3/4 source pages; dependencies: `CapitalizationDecisionLab.tsx`, `CapitalizationScenarioPractice.tsx` | Generated capital/expense answers match the classifications and depreciable-base formula in source. |
| Unit 08 / 03 | Phase 3/4 source pages; dependencies: `PartialYearDepreciationLab.tsx`, `StraightLineMastery.tsx` | Partial-year examples recompute to $3,750 van depreciation, $1,250 laptop depreciation, and $26,250 van ending book value. One confirmed P2 rounding defect above. |
| Unit 08 / 04 | Phase 3/4 source pages; dependencies: `DDBSalvageFloorLab.tsx`, `DDBComparisonMastery.tsx` | Static floor example recomputes correctly: $2,592 raw Year 4, $1,480 adjusted, $5,000 ending book value, and $0 Year 5 depreciation. |
| Unit 08 / 05 | Phase 3/4 source pages; dependencies: `AssetRegisterSimulator.tsx`, `SpreadsheetHelpers.ts`, `SpreadsheetWrapper.tsx` | Simulator SL/DDB schedules and displayed answers match inspected source formulas. Workbook formulas not checked. |
| Unit 08 / 06 | Phase 3/4 source pages; dependencies: `SpreadsheetHelpers.ts`, `SpreadsheetWrapper.tsx` | Static statement and method-comparison previews inspected. Confirmed calculation errors not found. One unconfirmed cross-example concern above. |
| Unit 08 / 07 | Phase 3/4 source pages; dependencies: `SpreadsheetHelpers.ts`, `SpreadsheetWrapper.tsx` | Static four-asset partial-year schedule totals recompute to $7,683 SL and $18,333 DDB when rounded to whole dollars. |
| Unit 08 / 08 | Single-page activity route source; `LessonContent.tsx`, lesson data, `SpreadsheetHelpers.ts`, and `SpreadsheetWrapper.tsx` are dependencies | Static project kickoff page, group asset assignments, workbook map, and rubric inspected. No workbook formulas were checked. |
| Unit 08 / 09 | Single-page activity route source; `phase-1/PhaseContent.tsx` and lesson data are dependencies | Project milestone page, group asset workbook links, and criteria inspected. Workbook formulas not checked. |
| Unit 08 / 10 | Single-page activity route source; `phase-1/PhaseContent.tsx`, lesson data, and `PeerCritiqueForm.tsx` are dependencies | Project milestone page, group asset workbook links, and criteria inspected. Workbook formulas not checked. Peer critique behavior was not part of the arithmetic review. |

## Verification limits

- Source routes, Phase 3/4 components, lesson data, and project milestone pages were reviewed.
- The evidence script was executed with the supplied Python runtime. It recomputed the inputs listed above.
- No npm command was run.
- No browser route was opened.
- No XLSX workbook was opened or recalculated.
- No production file was edited.
