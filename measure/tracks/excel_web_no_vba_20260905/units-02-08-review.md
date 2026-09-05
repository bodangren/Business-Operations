# Units 2–8 Logic and Excel for the Web Review

## Scope

This review covers student lesson logic, lesson pacing, linked workbook packages, and Excel for the web compatibility in Units 2–8. It records defects that are outside the VBA-removal implementation. It does not fix them.

The OneDrive workbooks were read-only reference material. The review opened 127 repository workbooks for Units 2–8. All files opened successfully. No workbook package contained a VBA project, ActiveX control, or macro assignment. A formula scan found no stored `#REF!`, `#NAME?`, `#VALUE!`, or `#DIV/0!` errors.

The link audit found no missing workbook links. The automated alignment audit matched zero page-workbook pairs. Its current parser cannot confirm lesson and workbook parity. Manual review is still necessary.

## Priority Summary

- Critical: 1 Excel for the web blocker.
- High: 10 logic or answer-checking defects.
- Medium: 6 logic, pacing, or compatibility defects.
- Low: 2 stale-resource defects.

## Unit 2

### High — Lesson 1 stores three answers in one state value

`src/app/student/unit02/lesson01/phase-3/page.tsx:12-13, 121-191`

The activity renders three radio groups. All three groups use one `selectedAnswer` value. A selection in question 2 or question 3 removes the stored selection for the earlier question. The student cannot keep three predictions before the reveal.

### Medium — Lesson 9 allocates 70 minutes inside a 55–60 minute plan

`src/app/student/unit02/lesson09/page.tsx:383-410`

The listed steps use 5 + 10 + 15 + 10 + 10 + 10 + 5 + 5 minutes. The total is 70 minutes. The heading states 55–60 minutes.

## Unit 3

### High — Lesson 1 financial statement totals do not balance

`src/app/student/unit03/lesson01/phase-3/page.tsx:12-75`

The three displayed asset totals are each $1,350 too low.

- Event 1 assets must be $24,050, not $22,700.
- Event 2 assets must be $23,000, not $21,650.
- Event 3 assets must be $24,200, not $22,850.

The displayed liabilities and equity add to the correct higher amounts. The equations shown to students do not balance.

### Medium — Lesson 6 names Scenario Manager as the primary scenario tool

`src/app/student/unit03/lesson06/phase-2/page.tsx:11-22`

The prompt accepts a formula-driven driver table, but it names Scenario Manager as the expected answer. Microsoft documents What-If Analysis tools for desktop Excel and does not list Excel for the web in the applicable products. Use the existing driver-table method as the required browser method.

## Unit 4

### High — Lesson 2 rejects the correct median

`src/app/student/unit04/lesson02/phase-4/page.tsx:36-42, 75-78`

The data median is 86.5. The stored answer is 86. The explanation says 86.5 and then suggests 87 after rounding. The checker rejects both 86.5 and 87. It accepts only a value near 86.

### High — Lesson 3 ignores the outlier classification when it scores answers

`src/app/student/unit04/lesson03/phase-4/page.tsx:11-40, 75-77`

The score compares only the z-score prefix. A student can select the correct number with the wrong classification and receive credit. For example, `z = 2.0 - Outlier` receives credit for the expected borderline answer.

## Unit 5

### High — Lesson 3 does not subtract the employee 401(k) contribution from net pay

`src/app/student/unit05/lesson03/phase-4/page.tsx:41-80`

The calculation reduces taxable income when the employee contributes to a 401(k). It does not subtract that contribution from net pay. A correct student answer is lower than the stored answer by the contribution amount.

### High — Lesson 4 repeats the same generated problem

`src/app/student/unit05/lesson04/phase-4/page.tsx:47-76`

The page generates `problem` once. The New Problem action increments only the displayed problem number. It does not replace the problem data. A student can repeat one answer to increase the mastery count.

## Unit 6

### Critical — Lesson 5 requires Goal Seek in Excel for the web

`src/app/student/unit06/lesson05/phase-4/page.tsx:79-85, 131-167`

The activity requires Data > What-If Analysis > Goal Seek. Microsoft documents What-If Analysis tools for desktop Excel and does not list Excel for the web in the applicable products. Students cannot complete the required workflow in the stated browser environment. Replace it with a formula-driven target calculation or a browser-supported manual sensitivity method.

### High — Lesson 5 has a wrong profit formula and target price

`src/app/student/unit06/lesson05/phase-4/page.tsx:40-52, 153-167`

The displayed Total Profit formula is `=B9-B6`. Cell B9 is a section heading, not Total Revenue. With fixed costs of $12,000, variable cost of $880, volume of 25, and target profit of $15,000, the required price is $1,960. The page states approximately $1,388.

### High — Lesson 4 grades a business judgment by seed, not by evidence

`src/app/student/unit06/lesson04/phase-4/page.tsx:28-61`

The code alternates the accepted answer between Premium and Volume. It does not use operational constraints to select the answer. Both generated paths meet or exceed the target. Neither is never the accepted answer. The activity grades an unsupported judgment as objectively correct.

### Medium — Lesson 5 claims that 25 projects at $1,200 is profitable

`src/app/student/unit06/lesson05/TableLogicSimulator.tsx:9-22, 135-150`

The formula gives `(1,200 − 880) × 25 − 8,100 = −100`. The page says the student needs at least 25 projects to see green. Break-even requires 26 projects. The displayed matrix stops at 25, so no $1,200 scenario is green.

## Unit 7

### High — Lesson 2 FIFO timeline mixes transaction and cumulative COGS

`src/app/student/unit07/lesson02/InventoryTimelineLab.tsx:51-102`

After the second sale, cumulative FIFO COGS must be $380, not $236. After the final sale, cumulative FIFO COGS must be $480, not $340. Final inventory must be $320, not $280. The activity uses transaction COGS in some rows and cumulative COGS in other rows.

### High — Lesson 3 can generate zero or negative purchase quantities

`src/app/student/unit07/lesson03/MethodRecommendationStudio.tsx:8-40`

The random upper-bound calculation can become zero or negative after earlier layers use too many units. A 100,000-run diagnostic produced invalid purchase quantities in 20,283 scenarios. The lowest generated quantity was −10.

### Medium — Lesson 2 accepts impossible COGS values

`src/app/student/unit07/lesson02/CostAssignmentPractice.tsx:54-83, 121-133`

The checker accepts every integer between units sold times the lowest layer cost and units sold times the highest layer cost. Many values in that continuous range cannot result from FIFO, LIFO, weighted average, or specific identification. The activity can mark an unsupported cost assignment as correct.

### Medium — Lesson 4 rounds the weighted-average rate before both allocations

`src/app/student/unit07/lesson04/MethodPracticeCombined.tsx:63-70`

The activity rounds average cost per unit to cents before it calculates COGS and ending inventory. The two allocations can fail to add to goods available for sale. In the Wheat Flour scenario, the displayed allocations total $612 while goods available cost is $607.

### Low — Lesson 4 workbook resources contain depreciation content

`public/resources/unit07-lesson04-student.xlsx` and `public/resources/unit07-lesson04-teacher.xlsx`

Both files contain only a Depreciation sheet. Unit 7 Lesson 4 teaches inventory methods. Current lesson pages do not link to these files, so this is stale resource content and not a current student blocker.

## Unit 8

### High — Lesson 5 contains two blanks in a one-blank component

`src/app/student/unit08/lesson05/phase-2/page.tsx:26-32`

The sentence contains two `{blank}` placeholders. The shared activity component requires exactly one placeholder. It shows an error instead of the question, so the activity cannot complete.

### Medium — Lesson 9 has two different pacing plans

`src/app/student/unit08/lesson09/lesson-data.ts:21`, `src/app/student/unit08/lesson09/page.tsx:138-166`, and `src/app/student/unit08/lesson09/phase-1/page.tsx:102-126`

The lesson duration and the combined page use 50 minutes. Phase 1 lists 15 + 20 + 10 + 10 + 5 minutes, for a total of 60 minutes.

### Low — A literal template filename remains in resources

`public/resources/unit08-group${i + 1}-fixed-assets.xlsx`

This unused file has an unexpanded template expression in its name. The six correctly named group files also exist, and the current dynamic links point to those files.

## Recommended Fix Order

1. Replace Unit 6 Lesson 5 Goal Seek and correct its model math.
2. Correct the Unit 3 statement totals and the Unit 7 FIFO timeline.
3. Correct answer checkers in Units 4 and 5.
4. Repair the Unit 7 random scenario generator.
5. Correct the Unit 8 blocked fill-in activity.
6. Correct pacing and stale resource issues.
