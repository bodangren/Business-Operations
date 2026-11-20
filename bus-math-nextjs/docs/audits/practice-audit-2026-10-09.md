# Guided and independent practice audit

Date: 2026-10-09. Baseline: `f617fc9`.

## Result

The source audit found **23 issue groups** across Units 02–08. All 23 are corrected in the repair branch as of 2026-10-10. Two corrections were present when this repair started. The repair adds the other 21 corrections. Some groups affect more than one lesson.

Follow-up issue: [#136](https://github.com/bodangren/Business-Operations/issues/136). The findings below describe the original defects. Their status column records the repair result.

The Unit 02 Lesson 04 independent-practice generator had **103 wrong amounts in its 120-round cycle**. Seven of its eight scenario types were affected. The corrected generator has zero amount mismatches in that cycle. Its component tests calculate answers from the displayed inputs, submit those answers, and check feedback. The correction also restores the Continue Practicing action after mastery.

The repairs also correct the related Unit 6 workbook previews. Goal Seek uses a required price of $1,960. Data Table previews use the same price, volume, cost, and profit cell references as the Lesson 5 model.

## Scope and evidence

The inventory covers all **80 lesson routes**, **136 practice source files**, and **252 local dependency files**. It includes guided and independent practice in the 56 standard lessons. It also includes the visible activity and project pages in Lessons 08–10. Seventeen dependency files use random input generation.

Three Luna agents inspected separate unit groups in parallel. The primary agent checked their findings against the source and recomputed the examples. The primary checks corrected a lesson label and distinguished the payroll hint result from the result of the displayed tax table. The final reports contain those corrections.

The evidence has three levels:

1. **Source inspection:** All lesson coverage rows identify the files and components reviewed. This is not proof that every possible input is correct.
2. **Executed calculations:** The scripts recompute selected examples. The primary evidence script also executes the actual source generators and validators in isolation. It fixes random draws so the reported defects can be reproduced.
3. **Component checks:** Unit 02 Lesson 04 tests exercise the rendered React component, all 120 generated rounds, rejection of the old interest answer, cent increments, and continued practice after mastery.

The audit did not open browser routes or recalculate XLSX workbooks. It did not test every random combination. Tax calculations check consistency with the classroom table in the repository; they do not validate current withholding rules. These limits also apply to lessons with no confirmed finding.

The original audit passed 23 targeted tests. It did not run npm, a production build, or browser checks. See the repair verification section for the later checks.

## Findings

P1 means the component teaches an incorrect result, rejects correct work, or awards success for incorrect work. P2 means a subtotal, input rule, or practice progression is incorrect.

| ID | Priority | Location | Confirmed defect | Status |
|---|---|---|---|---|
| 01 | P1 | U02 L04 independent practice | Seven answer formulas disagree with the displayed inputs. Example: $15,000 × 8% ÷ 12 is $100; the key was $75. | Corrected; 120-round component check |
| 02 | P2 | U02 L04 independent practice | Continue Practicing leaves the mastery result active and does not return to a scenario. | Corrected; component check |
| 03 | P1 | U02 L04 guided practice | Equal debit/credit adjustments cannot repair the starting $6,600 trial-balance difference. The feedback says they will. | Corrected; regression check |
| 04 | P2 | U02 L04 guided practice | The February 1 equipment purchase and $400 monthly depreciation conflict with the $800 balance before the March adjustment. | Corrected; regression check |
| 05 | P1 | U03 L03 independent practice | Generated balance sheets can fail the accounting equation while the checker and worked answer claim they balance. A deterministic example is $16,100 versus $29,550. | Corrected; regression check |
| 06 | P1 | U03 L04 independent practice | The cash-flow checker sets `correct` to true when it creates error feedback. Wrong answers increase the mastery streak. | Corrected; regression check |
| 07 | P2 | U03 L02 guided practice | Operating income is $4,850, but the page shows $4,970 and puts interest income in the wrong section. | Corrected; regression check |
| 08 | P2 | U03 L06 guided practice | The monthly cash-flow amounts total $23,300; the KPI shows $23,100. The shared dashboard also affects U04 L06. | Corrected; regression check |
| 09 | P1 | U04 L02 guided practice | The weekend mean is $699.38, not $636.88. The traffic total is 970, not 1,070. | Corrected; regression check |
| 10 | P1 | U04 L02 independent practice | The correct median, 86.5, fails the key of 86 and its 0.1 tolerance. | Corrected; regression check |
| 11 | P1 | U04 L03 guided practice | The standard deviations and two shown z-scores do not follow from the displayed data. | Corrected; regression check |
| 12 | P1 | U05 L02 guided practice | Three withholding keys disagree with the classroom table. Alex's regular hint also selects the wrong bracket. The table result is $275.18; the stored answer is $318.45. | Corrected; regression check |
| 13 | P1 | Shared payroll validation | The sample requires overtime pay but marks straight-time gross pay as valid. Example: $832.50 is stored where the stated overtime rule gives $878.75. | Corrected; regression check |
| 14 | P2 | U05 L04 independent practice | New Problem changes the problem number but keeps the first scenario. Repeated submissions can increase mastery. | Corrected; regression check |
| 15 | P2 | U06 L04 independent practice | The preferred business path alternates by seed. The prompt gives no objective constraint that supports that fixed key. | Corrected; regression check |
| 16 | P1 | U06 L05 guided practice | Goal Seek accepts $15,000,000 as a $15,000 target. Its $1,388 price example yields $700 profit, not the target. | Corrected; regression check |
| 17 | P1 | U06 L06 guided practice | Data Table validates B5/B6 while the displayed model and feedback identify B4/B5. The row prompt also conflicts with its feedback. | Corrected; regression check |
| 18 | P1 | U07 L02 guided practice | The final FIFO timeline should show $480 cumulative COGS and $320 inventory; it stores $340 and $280. | Corrected; regression check |
| 19 | P1 | U07 L02 independent practice | The COGS range ignores layer quantities. It also accepts COGS and inventory values that do not sum to goods available. | Corrected; regression check |
| 20 | P1 | U07 L03 independent practice | A valid random-draw sequence creates purchase quantities 39, 6, 5, and −5. FIFO/LIFO calculations then use the negative layer. | Corrected; regression check |
| 21 | P2 | U07 L03 independent practice | `parseInt` drops cents. A response of $825.99 can pass a key of $825. | Corrected; regression check |
| 22 | P1 | U07 L04 guided and independent practice | Rounding the average unit cost early breaks cost conservation. Sugar assigns $440 from a $444 pool, then prints a check mark. The combined practice has the same pattern. | Corrected; regression check |
| 23 | P2 | U08 L03 independent practice | Whole-dollar annual rounding can reduce final book value below salvage. A $28,000 van ends at $2,998 instead of $3,000. | Corrected; regression check |

The shared payroll-validation sample is used in U03 L06, U04 L06, and U05 L04. Treat this as one shared-code issue, rather than three independent defects.

## Detailed reports and coverage

- [Units 01–03: 30 lesson rows](practice-audit-2026-10-09-units01-03.md)
- [Units 04–06: 30 lesson rows](practice-audit-2026-10-09-units04-06.md)
- [Units 07–08: 20 lesson rows](practice-audit-2026-10-09-units07-08.md)
- [Route inventory and source hashes](practice-audit-2026-10-09-inventory.json)
- [Primary executed evidence](practice-audit-2026-10-09-evidence.json)

The unit reports list uncertain concerns separately. They also identify intentional error-detection examples. Neither category is included in the confirmed count.

## Repair verification: 2026-10-10

- Independent calculation checks cover all repaired numeric rules.
- Component checks cover answer feedback, invalid inputs, retries, and mastery progression.
- Generated-input checks cover 2,000 rounds each for balance sheets, inventory layers, and depreciation.
- The existing month-end component check covers all 120 generated rounds.
- Weighted-average checks cover all six guided fixtures and all four combined-practice fixtures.
- Workbook preview checks recalculate every one-variable and two-variable profit result. Formula previews use display text.
- All 639 tests pass in 52 test files. The coverage command also passes with the existing configuration.
- TypeScript and ESLint pass. ESLint reports four existing warnings in other files.
- Browser and production-build checks require approval to update `.next`.

Current source evidence: [practice-fixes-2026-10-10-evidence.json](practice-fixes-2026-10-10-evidence.json).

Regression tests: [calculation tests](../../scripts/audit/__tests__/practice-regressions.test.ts), [component tests](../../src/components/exercises/__tests__/PracticeAudit.test.tsx), and [month-end tests](../../src/components/exercises/__tests__/MonthEndClosePractice.test.tsx).

The workbook sprints build a new workbook or continue the student-created workbook. The checks verify their source previews and formulas. They do not certify every XLSX file in `public/resources/`.

## Repair contract

1. Repair validators that award success for wrong work or reject correct work. Start with cash flow, median, Goal Seek, Data Table, and the payroll keys.
2. Repair invalid generated data and accounting identities. Start with balance sheets, inventory quantities, inventory cost conservation, and the trial balance.
3. Repair static examples, subtotals, rounding, and mastery progression.
4. Add independent calculation tests for each repaired component. Include correct, incorrect, blank, rounding-boundary, and generated-input cases.
5. Validate the repaired routes in a browser. Recalculate linked workbooks where a lesson depends on them.

Use one set of numeric inputs for each prompt, answer, and explanation. Round final currency amounts to cents unless the lesson states another rule. For inventory, require `COGS + ending inventory = goods available`. For depreciation, require book value to remain at or above salvage. For balance sheets, require `assets = liabilities + equity`.

## Reproduce

Run from `bus-math-nextjs/` with a Node runtime and Python runtime. These commands do not invoke npm or write to `.next`.

```sh
node scripts/audit/practice-inventory.mjs docs/audits/practice-audit-2026-10-09-inventory.json
node scripts/audit/practice-evidence.mjs docs/audits/practice-fixes-2026-10-10-evidence.json
node scripts/audit/arithmetic-evidence-units01-03-2026-10-09.mjs
python3 scripts/audit/practice_units04_06.py
python3 scripts/audit/practice-units07-08-evidence.py
node node_modules/vitest/vitest.mjs run src/components/exercises/__tests__/MonthEndClosePractice.test.tsx
```

The JavaScript evidence scripts now assert the repaired behavior. The Python scripts preserve the original baseline calculations and label them as historical. Use the regression tests to check current behavior.
