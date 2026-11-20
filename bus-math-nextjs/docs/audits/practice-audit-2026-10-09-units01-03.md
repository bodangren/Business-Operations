# Practice arithmetic audit: Units 01–03

Repair update, 2026-10-10: All confirmed findings below are corrected. These descriptions preserve the original audit evidence. See the [main repair report](practice-audit-2026-10-09.md#repair-verification-2026-10-10) for current checks.

Audit date: 2026-10-09

## Scope and method

This audit covers guided and independent practice in Lessons 01–10 of Units 01, 02, and 03. It traces each lesson route into its practice component, data, and calculation helper. It checks displayed values, formulas, generated answers, feedback, and accounting identities.

The review is source inspection plus isolated execution of pure declarations from the source files. I did not run the browser or open the linked workbooks. I ran the arithmetic evidence script at [scripts/audit/arithmetic-evidence-units01-03-2026-10-09.mjs](../../scripts/audit/arithmetic-evidence-units01-03-2026-10-09.mjs). This does not confirm browser rendering or workbook formulas.

The archived Unit 01–03 track plans describe manual accounting practice in Lessons 01–04, workbook practice in later standard lessons, and project rehearsal/work in Lessons 07–10. I reviewed those plans, the active Unit 01 lesson-integrity track, the live student routes, and their imported practice components.

## Confirmed findings

### P1 — Unit 02 Lesson 04 says balanced adjustments will repair an unbalanced trial balance

Source: [PhaseContent.tsx](../../src/app/student/unit02/lesson04/phase-3/PhaseContent.tsx:112), [MonthEndChallenge.tsx](../../src/components/exercises/MonthEndChallenge.tsx:91).

The visible unadjusted trial balance has debits of $77,300 and credits of $70,700. The difference is $6,600. The six displayed adjusting entries are $5,500, $300, $400, $1,800, $1,200, and $900. They total $10,100 on each side. After these entries, debits are $87,400 and credits are $80,800. The $6,600 difference remains.

The challenge feedback says, “This difference will be resolved once all adjustments are recorded correctly.” That cannot happen because each valid journal entry adds the same amount to debits and credits. The student cannot complete the stated close with this starting data.

### P1 — Unit 03 Lesson 04 marks wrong cash-flow answers as correct

Source: [CashFlowPractice.tsx](../../src/components/exercises/CashFlowPractice.tsx:90).

The component computes differences for operating, investing, financing, and net cash change. When any answer is wrong, it adds error feedback. It then sets `correct` to whether that feedback string is non-empty. A wrong operating answer therefore returns `correct: true` and increases the mastery streak. A student can reach the three-answer mastery target with incorrect answers.

For example, set operating cash flow to $0 while leaving the other three answers correct. The operating error text appears, and the wrong-answer branch returns true.

### P1 — Unit 03 Lesson 03 generates balance-sheet totals that do not balance

Source: [BalanceSheetPractice.tsx](../../src/components/exercises/BalanceSheetPractice.tsx:119).

The component generates asset, liability, and equity balances independently. It computes equity as selected stock or capital plus ending retained earnings. It does not set a balance-sheet account from the accounting equation. Yet the prompt asks students to verify the equation, and the worked solution always prints a check mark for `Assets = Liabilities + Equity` at [line 407](../../src/components/exercises/BalanceSheetPractice.tsx:407).

A source-executed round with `Math.random = () => 0.5` generates Cash $5,000, Accounts Receivable $2,000, Supplies $500, Prepaid Insurance $600, and Equipment $8,000. Total assets are $16,100. It generates Accounts Payable $2,000, Wages Payable $800, and Unearned Revenue $1,000, for liabilities of $3,800. It generates Common Stock $10,000 and Owner’s Capital $8,000. Beginning retained earnings are $5,000, net income is $3,750, and dividends are $1,000. Ending retained earnings are $7,750 and total equity is $25,750. Liabilities plus equity are $29,550, which is $13,450 more than assets. The actual `checkAnswer` accepts these correct subtotals and returns feedback that the balance sheet balances.

### P2 — Unit 03 Lesson 02 misstates operating income and omits non-operating interest income

Source: [PhaseContent.tsx](../../src/app/student/unit03/lesson02/phase-3/PhaseContent.tsx:162).

The visible trial balance has Service Revenue $8,400, Sales Revenue $2,100, Interest Income $120, Rent Expense $1,800, Salary Expense $3,200, Supplies Expense $650, and Interest Expense $80. Total revenue is $10,620. Operating revenue is $10,500. Operating expenses are $5,650. Correct operating income is $10,500 − $5,650 = $4,850.

The page computes operating income as `totalRevenue - totalExpenses + 80`, which displays $4,970. This includes the $120 interest income in operating income. The accompanying note says interest income belongs below operating income, but the non-operating section shows only the $80 interest expense. Net income remains $10,620 − $5,730 = $4,890, so the error is in the section presentation and operating subtotal.

### P2 — Unit 03 Lesson 06 cash-flow KPI is $200 below the displayed monthly amounts

Source: [FinancialDashboard.tsx](../../src/components/charts/FinancialDashboard.tsx:53).

The Unit 03 Lesson 06 route uses the default dashboard data. The six monthly cash-flow values are $2,800, $3,200, $3,000, $4,700, $3,400, and $6,200. They total $23,300. The dashboard’s Cash Flow KPI displays $23,100 at [line 105](../../src/components/charts/FinancialDashboard.tsx:105). The dashboard therefore presents two different six-month totals.

### P2 — Unit 02 Lesson 04 depreciation starting balance conflicts with the purchase date

Source: [PhaseContent.tsx](../../src/app/student/unit02/lesson04/phase-3/PhaseContent.tsx:117).

The exercise says the $24,000 equipment was purchased February 1, has a 60-month useful life, and has no salvage value. Monthly straight-line depreciation is $24,000 ÷ 60 = $400. By March 31, February and March account for two months, or $800 total depreciation. The trial balance already shows $800 in accumulated depreciation, then the page adds another $400 for March and shows $1,200. If the $800 is the unadjusted balance before the March adjustment, it includes one extra month. If the unadjusted balance is correct through February, it should be $400 and end at $800.

### Baseline finding — Unit 02 Lesson 04’s original Lesson 04 practice generator had mismatched displayed inputs and expected amounts

Source: baseline committed version of [MonthEndClosePractice.tsx](../../src/components/exercises/MonthEndClosePractice.tsx:24), before the concurrent fix.

The original generator chose input amounts and expected answers from separate formulas. This caused valid arithmetic answers to fail in several scenario types. Examples from the original generator:

- Seed 8 supplies: $6,000 unadjusted less $2,000 remaining means $4,000 used; the expected amount was $2,000.
- Seed 1 insurance: $3,600 over 11 remaining months means $327.27 for one month; the expected amount was $300.
- Seed 2 depreciation: $50,000 over 5 years means $833.33 per month; the expected amount was $700.
- Seed 3 wages: 2 days × $400 means $800; the expected amount was $2,000.
- Seed 4 unearned revenue: $4,000 over 2 months means $2,000 earned; the expected amount was $1,500.
- Seed 6 interest: $15,000 × 8% ÷ 12 means $100; the expected amount was $75.
- Seed 7 prepaid rent: $9,000 over 4 months means $2,250 for one month; the expected amount was $2,000.

The concurrent parent edit updates this component. These examples record the original defect. They do not describe the edited file’s current behavior.

## Suspected issues

- Unit 03 Lesson 03 Phase 3 includes a balance sheet whose retained earnings do not match the retained-earnings schedule. The page explicitly labels this mismatch intentional and asks students to verify every number, so I did not count it as a defect. The balance sheet values are Assets $36,000, Liabilities $15,600, Common Stock $15,000, and displayed Retained Earnings $5,400. The schedule gives ending retained earnings of $18,820. The page itself explains the conflict at [PhaseContent.tsx](../../src/app/student/unit03/lesson03/phase-3/PhaseContent.tsx:191).
- Unit 03 Lesson 06’s payroll validation example says its overtime rule supports 1.5× pay, but its gross-pay check uses hours × base hourly rate. This may be a deliberate separation between overtime flagging and gross-pay arithmetic. The in-scope lesson does not state whether the sample should include an overtime premium, so I did not report it as a confirmed arithmetic defect.

## Lesson coverage

Each row below copies `practiceSources` and `dependencies` from the parent inventory. The dependency column includes the inventory’s full dependency list, including practice sources. The inventory classifies Lessons 08–10 as single-page activities.

| Unit | Lesson | Inventory practice sources (`practiceSources`) | Inventory dependencies (`dependencies`) |
|---|---|---|---|
| 01 | 01 | `src/app/student/unit01/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson01/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson01/phase-4/PhaseContent.tsx`<br>`src/components/exercises/FillInTheBlank.tsx` |
| 01 | 02 | `src/app/student/unit01/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson02/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson02/phase-4/PhaseContent.tsx`<br>`src/lib/accounting/unit01-practice.ts` |
| 01 | 03 | `src/app/student/unit01/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson03/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson03/phase-4/PhaseContent.tsx`<br>`src/components/accounting/PostingPracticeLoop.tsx`<br>`src/components/accounting/TAccountSimple.tsx`<br>`src/components/exercises/JournalEntryBuilding.tsx`<br>`src/lib/accounting/unit01-practice.ts` |
| 01 | 04 | `src/app/student/unit01/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson04/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson04/phase-4/PhaseContent.tsx`<br>`src/components/accounting/TableStructureSimulator.tsx`<br>`src/lib/accounting/unit01-practice.ts`<br>`src/lib/paths.ts` |
| 01 | 05 | `src/app/student/unit01/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson05/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson05/phase-4/PhaseContent.tsx`<br>`src/lib/accounting/unit01-practice.ts`<br>`src/lib/paths.ts` |
| 01 | 06 | `src/app/student/unit01/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson06/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson06/phase-4/PhaseContent.tsx`<br>`src/lib/paths.ts` |
| 01 | 07 | `src/app/student/unit01/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson07/phase-4/PhaseContent.tsx` | `src/app/student/unit01/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit01/lesson07/phase-4/PhaseContent.tsx`<br>`src/components/spreadsheet/SpreadsheetHelpers.ts`<br>`src/components/spreadsheet/SpreadsheetWrapper.tsx`<br>`src/data/unit01-project.ts` |
| 01 | 08 | `src/app/student/unit01/lesson08/page.tsx` | `src/app/student/unit01/lesson08/LessonContent.tsx`<br>`src/app/student/unit01/lesson08/lesson-data.ts`<br>`src/app/student/unit01/lesson08/page.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01-project.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/lib/paths.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 01 | 09 | `src/app/student/unit01/lesson09/page.tsx` | `src/app/student/unit01/lesson09/LessonContent.tsx`<br>`src/app/student/unit01/lesson09/lesson-data.ts`<br>`src/app/student/unit01/lesson09/page.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 01 | 10 | `src/app/student/unit01/lesson10/page.tsx` | `src/app/student/unit01/lesson10/LessonContent.tsx`<br>`src/app/student/unit01/lesson10/lesson-data.ts`<br>`src/app/student/unit01/lesson10/page.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 02 | 01 | `src/app/student/unit02/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson01/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson01/phase-4/PhaseContent.tsx` |
| 02 | 02 | `src/app/student/unit02/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson02/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson02/phase-4/PhaseContent.tsx`<br>`src/components/exercises/AdjustmentPractice.tsx` |
| 02 | 03 | `src/app/student/unit02/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson03/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson03/phase-4/PhaseContent.tsx`<br>`src/components/exercises/ClosingEntryPractice.tsx` |
| 02 | 04 | `src/app/student/unit02/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson04/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson04/phase-4/PhaseContent.tsx`<br>`src/components/exercises/MonthEndChallenge.tsx`<br>`src/components/exercises/MonthEndClosePractice.tsx` |
| 02 | 05 | `src/app/student/unit02/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson05/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson05/phase-4/PhaseContent.tsx` |
| 02 | 06 | `src/app/student/unit02/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson06/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson06/phase-4/PhaseContent.tsx` |
| 02 | 07 | `src/app/student/unit02/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson07/phase-4/PhaseContent.tsx` | `src/app/student/unit02/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit02/lesson07/phase-4/PhaseContent.tsx` |
| 02 | 08 | `src/app/student/unit02/lesson08/page.tsx` | `src/app/student/unit02/lesson08/LessonContent.tsx`<br>`src/app/student/unit02/lesson08/lesson-data.ts`<br>`src/app/student/unit02/lesson08/page.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 02 | 09 | `src/app/student/unit02/lesson09/page.tsx` | `src/app/student/unit02/lesson09/LessonContent.tsx`<br>`src/app/student/unit02/lesson09/lesson-data.ts`<br>`src/app/student/unit02/lesson09/page.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 02 | 10 | `src/app/student/unit02/lesson10/page.tsx` | `src/app/student/unit02/lesson10/lesson-data.ts`<br>`src/app/student/unit02/lesson10/page.tsx`<br>`src/app/student/unit02/lesson10/phase-1/PhaseContent.tsx`<br>`src/components/exercises/PeerCritiqueForm.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 03 | 01 | `src/app/student/unit03/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson01/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson01/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson01/phase-4/PhaseContent.tsx` |
| 03 | 02 | `src/app/student/unit03/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson02/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson02/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson02/phase-4/PhaseContent.tsx`<br>`src/components/exercises/IncomeStatementPractice.tsx` |
| 03 | 03 | `src/app/student/unit03/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson03/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson03/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson03/phase-4/PhaseContent.tsx`<br>`src/components/exercises/BalanceSheetPractice.tsx` |
| 03 | 04 | `src/app/student/unit03/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson04/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson04/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson04/phase-4/PhaseContent.tsx`<br>`src/components/exercises/CashFlowPractice.tsx`<br>`src/components/exercises/DragAndDrop.tsx` |
| 03 | 05 | `src/app/student/unit03/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson05/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson05/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson05/phase-4/PhaseContent.tsx`<br>`src/components/business-simulations/CrossSheetLinkSimulator.tsx` |
| 03 | 06 | `src/app/student/unit03/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson06/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson06/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson06/phase-4/PhaseContent.tsx`<br>`src/components/business-simulations/ErrorCheckingSystem.tsx`<br>`src/components/charts/FinancialDashboard.tsx` |
| 03 | 07 | `src/app/student/unit03/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson07/phase-4/PhaseContent.tsx` | `src/app/student/unit03/lesson07/phase-3/PhaseContent.tsx`<br>`src/app/student/unit03/lesson07/phase-4/PhaseContent.tsx` |
| 03 | 08 | `src/app/student/unit03/lesson08/page.tsx` | `src/app/student/unit03/lesson08/lesson-data.ts`<br>`src/app/student/unit03/lesson08/page.tsx`<br>`src/app/student/unit03/lesson08/phase-1/PhaseContent.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 03 | 09 | `src/app/student/unit03/lesson09/page.tsx` | `src/app/student/unit03/lesson09/lesson-data.ts`<br>`src/app/student/unit03/lesson09/page.tsx`<br>`src/app/student/unit03/lesson09/phase-1/PhaseContent.tsx`<br>`src/components/exercises/PeerCritiqueForm.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |
| 03 | 10 | `src/app/student/unit03/lesson10/page.tsx` | `src/app/student/unit03/lesson10/lesson-data.ts`<br>`src/app/student/unit03/lesson10/page.tsx`<br>`src/app/student/unit03/lesson10/phase-1/PhaseContent.tsx`<br>`src/components/exercises/PeerCritiqueForm.tsx`<br>`src/data/unit-registry.ts`<br>`src/data/unit01.ts`<br>`src/data/unit02.ts`<br>`src/data/unit03.ts`<br>`src/data/unit04.ts`<br>`src/data/unit05.ts`<br>`src/data/unit06.ts`<br>`src/data/unit07.ts`<br>`src/data/unit08.ts`<br>`src/types/glossary.ts`<br>`src/types/lesson.ts`<br>`src/types/unit.ts` |

## Evidence script

Run with the project’s Node runtime, without invoking npm:

```sh
/Users/daniel.bodanske/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node scripts/audit/arithmetic-evidence-units01-03-2026-10-09.mjs
```
