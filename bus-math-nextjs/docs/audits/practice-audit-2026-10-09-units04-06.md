# Practice audit: Units 04–06

Repair update, 2026-10-10: All confirmed findings below are corrected. These descriptions preserve the original audit evidence. See the [main repair report](practice-audit-2026-10-09.md#repair-verification-2026-10-10) for current checks.

Date: 2026-10-09

## Scope and evidence

This audit covers the student routes for Lessons 01–10 in Units 04, 05, and 06. For Lessons 01–07, I inspected the live lesson page and the Phase 3 guided-practice and Phase 4 independent-practice sources. For Lessons 08–10, I inspected the live project page and its visible project content. I traced shared simulators and calculation helpers used by these practice sources.

The source review is static. The script at [`scripts/audit/practice_units04_06.py`](../../scripts/audit/practice_units04_06.py) independently recalculates the numerical examples listed below from values transcribed from the source. It ran with the bundled Python runtime on 2026-10-09. The script does not import or execute the live TypeScript components. I did not run a browser session or an Excel workbook. Browser interaction, screen-reader behavior, and workbook formulas remain untested.

The parent task supplied [`docs/audits/practice-audit-2026-10-09-inventory.json`](practice-audit-2026-10-09-inventory.json) as a route and dependency inventory. I reviewed the route and practice source paths for this audit. Build-graph state remained read-only after the initial inventory scan.

## Confirmed findings

### P1 — U04 L02 displays two incorrect means

Source: [`PhaseContent.tsx`](../../src/app/student/unit04/lesson02/phase-3/PhaseContent.tsx#L53) lines 53–57 and 88–96.

Visible weekend inputs are `$480, $495, $510, $505, $490, $500, $515, $2,100`. Their sum is `$5,595`, so the mean is `$699.375`, or `$699.38`. The lesson stores and repeats `$636.88` at lines 55 and 65. The median `$502.50` is correct.

Visible traffic inputs are `125, 143, 132, 156, 128, 147, 139`. Their sum is `970`, not `1,070`. The mean is `138.571...`, or `139` customers/day, not `153`. The median `139` is correct. The wrong sums and means teach incorrect calculations in a central guided example.

Evidence: executed arithmetic in the audit script.

### P1 — U04 L02 rejects the correct median

Source: [`PhaseContent.tsx`](../../src/app/student/unit04/lesson02/phase-4/PhaseContent.tsx#L33) lines 33–37 and 71–74.

The values are `85, 92, 78, 95, 88, 72`. The sorted middle values are `85` and `88`, so the median is `86.5`. The stored answer is `86`, and the checker accepts only answers within `0.1` of `86`. The explanation itself says to enter exact `86.5` or rounded `87`. Both are marked wrong. This gives incorrect feedback to correct student work.

Evidence: arithmetic from the displayed list and static inspection of the validator.

### P1 — U04 L03 shows an incorrect standard deviation and z-scores

Source: [`PhaseContent.tsx`](../../src/app/student/unit04/lesson03/phase-3/PhaseContent.tsx#L4) lines 4–18, 108–120, and 155–160.

The ten visible transactions sum to `$174.20`; the mean `$17.42` is correct. The stored standard deviation `$38.47` is neither the population standard deviation `$36.86` nor the sample standard deviation `$38.85`. Given the displayed mean and `$38.47`, the catering order z-score is about `2.86`, not `13.94`. The `$0.05` row has z-score about `-0.45`, not `-1.51`. The lesson's `|z| > 2` rule still flags the catering value only.

The “Without Outliers” list reports mean `$5.19`, which excludes only the catering row and is correct. Its standard deviation `$3.32` does not match either convention: the population value is `$3.66`; the sample value is `$3.89`. Students see an incorrect spread and incorrect outlier evidence.

Evidence: executed population and sample standard-deviation calculations, plus z-score calculations using the displayed mean and standard deviation.

### P1 — U05 L02 guided tax answers conflict with the displayed bracket method

Source: [`PhaseContent.tsx`](../../src/app/student/unit05/lesson02/phase-3/PhaseContent.tsx#L13) lines 13–29, 33–47, and 51–65; checker: [`CalculateDeductions.tsx`](../../src/components/payroll/CalculateDeductions.tsx#L41) lines 41 and 71–79.

The guided hints give annualization and bracket formulas, and the lesson displays its classroom brackets in `src/data/payroll/federalTaxTables.ts` lines 47–59. Alex's regular annualized wages are `$55,640`, above the displayed single-filer 12% cap of `$48,475`. The hint says this case is still in the 12% band, but the displayed table selects the 22% bracket. The hint formula yields `$247.63`; applying the displayed table's 22% formula yields `$275.18`; the stored answer is `$318.45`. For Alex's overtime scenario, the hint and displayed table both yield `$389.58`, but the stored answer is `$412.90`. For Maria, the hint and displayed table both yield `$284.52`, but the stored answer is `$286.20`. The checker tolerance is `$0.50`, so all three stored answers fail calculations from the displayed table. Jordan's independent comparison value `$399.25` matches the displayed table method.

Evidence: static inspection of the hint, expected values, checker, and classroom table; executed arithmetic on values transcribed from those source files. This is a source-consistency audit of the displayed classroom schedule, not current tax or legal guidance.

### P1 — Payroll validation sample treats overtime underpayment as valid

Source: [`ErrorCheckingSystem.tsx`](../../src/components/business-simulations/ErrorCheckingSystem.tsx#L110) lines 110–155. It is embedded in U05 L04 Phase 3 at [`PhaseContent.tsx`](../../src/app/student/unit05/lesson04/phase-3/PhaseContent.tsx#L101) line 101 and U04 L06 Phase 3 at [`PhaseContent.tsx`](../../src/app/student/unit04/lesson06/phase-3/PhaseContent.tsx#L4) lines 4 and 51.

The payroll rule says hours over 40 require `1.5x` pay, but the sample gross-pay rows use straight time and `expectedResults` marks every gross-pay row valid. For 45 hours at `$18.50`, correct gross pay is `40 × $18.50 + 5 × $18.50 × 1.5 = $878.75`; the sample stores `$832.50`. For 52 hours at `$16.75`, correct gross pay is `$971.50`; the sample stores `$871.00`. The sample therefore teaches the checker to accept overtime underpayment in both lesson routes.

Evidence: executed payroll arithmetic and static inspection of sample data, the overtime rule, and expected results.

### P2 — U05 L04 “new problem” repeats the same problem and can inflate mastery

Source: [`PhaseContent.tsx`](../../src/app/student/unit05/lesson04/phase-4/PhaseContent.tsx#L43) lines 43–45, 53–73.

The simulator initializes `problem` once with `generateProblem(1)`. “New Problem” increments `problemNumber` and clears inputs, but it does not replace `problem`. The student therefore gets the same values again. Each correct submission increments `masteryCount`, with no one-check-per-problem guard. A student can repeatedly submit the same answers and raise mastery without solving a new scenario. This weakens the claimed three-correct-in-a-row practice.

Evidence: static state-flow inspection. Browser interaction was not tested.

### P1 — U06 L05 Goal Seek gives a false price claim and accepts an incorrect target

Source: [`GoalSeekSimulator.tsx`](../../src/app/student/unit06/lesson05/GoalSeekSimulator.tsx#L9) lines 9–22, 34–49, and 182–185.

Visible inputs are fixed costs `$12,000`, variable cost `$880`, target profit `$15,000`, and 25 projects. The required price is `$880 + ($12,000 + $15,000) / 25 = $1,960`. The help text says `$1,388` still exceeds the target, but that price gives profit `($1,388 − $880) × 25 − $12,000 = $700`. The answer checker also accepts `15000000` as the “To Value” even though the target is `$15,000` and the success message says `$15,000`. Students can receive success for a target that is 1,000 times too large.

Evidence: executed arithmetic and static inspection of accepted input values and displayed feedback.

### P1 — U06 L06 Data Table checker accepts wrong cell references and rejects the shown correct references

Source: [`DataTableSimulator.tsx`](../../src/app/student/unit06/lesson06/DataTableSimulator.tsx#L17) lines 17–18, 105–106, and 155–156.

The column-step prompt says the values down the first column are prices, and its feedback identifies Price as `B4`. The validator accepts `B5` or the word `Price`, so the correct cell reference `B4` fails and the wrong reference `B5` passes. The row-step prompt says prices go across the top row, which also identifies Price (`B4`) as the row input. Its feedback instead says `B5` (Volume), and its validator accepts `B6` or the word `Volume`. The prompt, feedback, and cell-reference validators conflict. Students who use the prompted Price cell reference receive incorrect grading or contradictory instructions.

Evidence: static comparison of checker predicates with the simulator's own cell labels and feedback. Browser interaction was not tested.

### P2 — U06 L04 generated answer key grades an underdetermined judgment as fixed

Source: [`PhaseContent.tsx`](../../src/app/student/unit06/lesson04/phase-4/PhaseContent.tsx#L24) lines 24–58 and 107–118.

The prompt asks which path is more “realistic” and asks students to consider which requires fewer fundamental changes. It supplies no demand response, capacity limit, or acceptable price/volume change. The key alternates between `premium` and `volume` by seed at lines 43–44, not by an objective constraint. Both routes are marked “✓ Target” in the table. Independent calculations of all four base variants show both routes meet or exceed the target. The fixed key can mark a defensible business judgment wrong without providing data to distinguish the choices.

Evidence: static grading and prompt inspection; executed profit calculations for all four generated variants in the audit script. This is an assessment-validity issue, not an arithmetic error in the target calculations.

## Suspected issues

### U04 L01 rain-order choice may conflict with the stated 30% reduction

Source: [`PhaseContent.tsx`](../../src/app/student/unit04/lesson01/phase-4/PhaseContent.tsx#L20) lines 20–27.

Normal stock is 90 and historical traffic drops 30%, which implies 63 units. Choice B says 65 and labels it a “30% reduction”; choice C, keyed as correct, says 75. The explanation calls 75 a buffer-based judgment, so a specific buffer could justify it, but none is quantified. The answer key and stated percentage make the intended calculation unclear.

Evidence: source inspection and arithmetic. No browser test.

### U06 L03 Break-Even Mastery displays a rounded ratio but grades and calculates from full precision

Source: [`BreakEvenMastery.tsx`](../../src/components/exercises/BreakEvenMastery.tsx#L44) lines 44–53, 91–94, and 141–143.

The first scenario has fixed costs `$8,100`, variable cost `$880`, and price `$1,350`. The exact CM ratio is `34.8148…%`. The feedback displays `34.8%` but calculates break-even dollars with the unrounded ratio: `$23,266`. Using the displayed `34.8%` gives `$23,276`. The checker tolerance is under `$0.50`, so a student who follows the displayed intermediate value can be marked wrong. The simulator may intend students to retain full precision, but it does not say so.

Evidence: executed arithmetic for this scenario and static inspection of displayed precision, computation, and tolerance. The scenario is randomly selected at runtime, so browser behavior was not exercised.

### U05 L03 Phase 4 uses an undisclosed tax schedule

Source: [`PhaseContent.tsx`](../../src/app/student/unit05/lesson03/phase-4/PhaseContent.tsx#L45) lines 45–59.

The practice uses custom federal withholding bands per pay period. The preceding U05 L02 practice uses annualized 2025 federal bracket tables. The custom bands may be intended as simplified classroom values, but the page does not label them as a simplified schedule. The mismatch may confuse students who carry the prior table method forward. This audit did not establish that the custom schedule's own expected values are wrong.

Evidence: static comparison with U05 L02. No tax-table or browser behavior was executed for this item.

## Coverage

“Inspected” means the live route and its visible practice source were reviewed as code. Shared dependencies below come from that lesson’s entries in the parent inventory. An em dash means the inventory lists no shared practice component or calculation/data helper. It does not mean browser or workbook testing passed.

| Unit | Lesson | Live route and visible practice source | Inventory-listed shared practice dependencies | Audit coverage |
|---|---|---|---|---|
| 04 | 01 | `src/app/student/unit04/lesson01/page.tsx`<br>`src/app/student/unit04/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson01/phase-4/PhaseContent.tsx` | `src/components/charts/BarChart.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 04 | 02 | `src/app/student/unit04/lesson02/page.tsx`<br>`src/app/student/unit04/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson02/phase-4/PhaseContent.tsx` | — | Inspected; two means and the median checker have confirmed errors. |
| 04 | 03 | `src/app/student/unit04/lesson03/page.tsx`<br>`src/app/student/unit04/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson03/phase-4/PhaseContent.tsx` | — | Inspected; standard deviation and z-score values have confirmed errors. |
| 04 | 04 | `src/app/student/unit04/lesson04/page.tsx`<br>`src/app/student/unit04/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson04/phase-4/PhaseContent.tsx` | `src/components/charts/ScatterChart.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 04 | 05 | `src/app/student/unit04/lesson05/page.tsx`<br>`src/app/student/unit04/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson05/phase-4/PhaseContent.tsx` | `src/components/spreadsheet/index.ts` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 04 | 06 | `src/app/student/unit04/lesson06/page.tsx`<br>`src/app/student/unit04/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson06/phase-4/PhaseContent.tsx` | `src/components/business-simulations/ChartLinkingSimulator.tsx`<br>`src/components/business-simulations/ErrorCheckingSystem.tsx`<br>`src/components/charts/FinancialDashboard.tsx` | Inspected; shared payroll sample issue in ErrorCheckingSystem applies here. |
| 04 | 07 | `src/app/student/unit04/lesson07/page.tsx`<br>`src/app/student/unit04/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit04/lesson07/phase-4/PhaseContent.tsx` | — | Guided and independent practice sources inspected; inline source only, no shared helper listed. |
| 04 | 08 | `src/app/student/unit04/lesson08/page.tsx`<br>`src/app/student/unit04/lesson08/LessonContent.tsx` | — | Static project activity inspected; not an interactive math grader. |
| 04 | 09 | `src/app/student/unit04/lesson09/page.tsx`<br>`src/app/student/unit04/lesson09/phase-1/PhaseContent.tsx` | `src/components/exercises/PeerCritiqueForm.tsx` | Static project activity inspected; not an interactive math grader. |
| 04 | 10 | `src/app/student/unit04/lesson10/page.tsx`<br>`src/app/student/unit04/lesson10/phase-1/PhaseContent.tsx` | `src/components/exercises/PeerCritiqueForm.tsx` | Static project activity inspected; not an interactive math grader. |
| 05 | 01 | `src/app/student/unit05/lesson01/page.tsx`<br>`src/app/student/unit05/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson01/phase-4/PhaseContent.tsx` | `src/components/business-simulations/RestaurantStaffingSimulator.tsx`<br>`src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 05 | 02 | `src/app/student/unit05/lesson02/page.tsx`<br>`src/app/student/unit05/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson02/phase-4/PhaseContent.tsx` | `src/components/payroll/CalculateDeductions.tsx`<br>`src/components/payroll/TaxBracketTable.tsx`<br>`src/data/payroll/federalTaxTables.ts` | Inspected; three stored deductions conflict with the displayed classroom bracket schedule. |
| 05 | 03 | `src/app/student/unit05/lesson03/page.tsx`<br>`src/app/student/unit05/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson03/phase-4/PhaseContent.tsx` | — | Guided and independent practice sources inspected; inline source only, no shared helper listed. |
| 05 | 04 | `src/app/student/unit05/lesson04/page.tsx`<br>`src/app/student/unit05/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson04/phase-4/PhaseContent.tsx` | `src/components/business-simulations/ErrorCheckingSystem.tsx` | Inspected; shared payroll sample and fixed-problem behavior have confirmed issues. |
| 05 | 05 | `src/app/student/unit05/lesson05/page.tsx`<br>`src/app/student/unit05/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson05/phase-4/PhaseContent.tsx` | `src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 05 | 06 | `src/app/student/unit05/lesson06/page.tsx`<br>`src/app/student/unit05/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson06/phase-4/PhaseContent.tsx` | — | Guided and independent practice sources inspected; inline source only, no shared helper listed. |
| 05 | 07 | `src/app/student/unit05/lesson07/page.tsx`<br>`src/app/student/unit05/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit05/lesson07/phase-4/PhaseContent.tsx` | — | Guided and independent practice sources inspected; inline source only, no shared helper listed. |
| 05 | 08 | `src/app/student/unit05/lesson08/page.tsx`<br>`src/app/student/unit05/lesson08/LessonContent.tsx` | — | Static project activity inspected; not an interactive math grader. |
| 05 | 09 | `src/app/student/unit05/lesson09/page.tsx`<br>`src/app/student/unit05/lesson09/phase-1/PhaseContent.tsx` | `src/components/exercises/PeerCritiqueForm.tsx` | Static project activity inspected; not an interactive math grader. |
| 05 | 10 | `src/app/student/unit05/lesson10/page.tsx`<br>`src/app/student/unit05/lesson10/phase-1/PhaseContent.tsx` | `src/components/exercises/PeerCritiqueForm.tsx` | Static project activity inspected; not an interactive math grader. |
| 06 | 01 | `src/app/student/unit06/lesson01/page.tsx`<br>`src/app/student/unit06/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson01/phase-4/PhaseContent.tsx` | — | Guided and independent practice sources inspected; inline source only, no shared helper listed. |
| 06 | 02 | `src/app/student/unit06/lesson02/page.tsx`<br>`src/app/student/unit06/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson02/phase-4/PhaseContent.tsx` | `src/components/drag-drop-exercises/BreakEvenComponents.tsx`<br>`src/components/exercises/MarkupMarginMastery.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 06 | 03 | `src/app/student/unit06/lesson03/page.tsx`<br>`src/app/student/unit06/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson03/phase-4/PhaseContent.tsx` | `src/components/exercises/BreakEvenMastery.tsx` | Inspected; BreakEvenMastery display precision issue is suspected. |
| 06 | 04 | `src/app/student/unit06/lesson04/page.tsx`<br>`src/app/student/unit06/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson04/phase-4/PhaseContent.tsx` | — | Inspected; fixed key for a judgment prompt is underdetermined. |
| 06 | 05 | `src/app/student/unit06/lesson05/page.tsx`<br>`src/app/student/unit06/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson05/phase-4/PhaseContent.tsx` | `src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx` | Inspected; Goal Seek feedback and target checker have confirmed errors. |
| 06 | 06 | `src/app/student/unit06/lesson06/page.tsx`<br>`src/app/student/unit06/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson06/phase-4/PhaseContent.tsx` | `src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx` | Inspected; prompt, feedback, and input validation conflict. |
| 06 | 07 | `src/app/student/unit06/lesson07/page.tsx`<br>`src/app/student/unit06/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit06/lesson07/phase-4/PhaseContent.tsx` | `src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx` | Guided and independent practice sources inspected; listed shared dependencies traced. |
| 06 | 08 | `src/app/student/unit06/lesson08/page.tsx`<br>`src/app/student/unit06/lesson08/phase-1/PhaseContent.tsx` | — | Static project activity inspected; not an interactive math grader. |
| 06 | 09 | `src/app/student/unit06/lesson09/page.tsx`<br>`src/app/student/unit06/lesson09/phase-1/PhaseContent.tsx` | `src/components/exercises/PeerCritiqueForm.tsx` | Static project activity inspected; not an interactive math grader. |
| 06 | 10 | `src/app/student/unit06/lesson10/page.tsx`<br>`src/app/student/unit06/lesson10/phase-1/PhaseContent.tsx` | — | Static project activity inspected; not an interactive math grader. |

The standard Lesson 01–07 pages render Phase 3 and Phase 4 within the live lesson route. For project Lessons 08–10, only the content imported by the live page is counted. Phase files not imported by those routes are outside this visible-practice audit.
