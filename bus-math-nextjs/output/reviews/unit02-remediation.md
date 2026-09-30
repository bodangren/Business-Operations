# Unit 2 repair status

Date: 30 September 2026.
Branch: `codex/fix/125-unit02-integrity`.
Related issue: https://github.com/bodangren/Business-Operations/issues/125.

The lesson and practice repairs are ready for review. Full-close workbook mapping remains open. No OneDrive original was saved or changed. No replacement curriculum workbook was created.

## Completed repairs

| Lesson | Defect | Repair |
|---|---|---|
| 1 | One prediction state served three question groups. | Each group keeps its own answer and matching feedback. |
| 1 | Exit explanation contains a text error. | Use a short explanation of adjustment and closing order. |
| 2 | The grader requires account labels that were not supplied. | Show the course chart of accounts, including vendor expense labels. |
| 2, 4–7 | The quiz adapter shuffled the key before the display component read it. | Keep the correct answer first in the adapter. Let the display component shuffle choices. |
| 3 | Amount-only closing practice claims full closing mastery. | Require accounts, debit or credit sides, and amounts. Post entries and check all temporary balances. Include profit, loss, and dividends. |
| 3–4 | Closing instructions misstate the Income Summary requirement and dividend route. | Describe the course method. Close dividends directly to Retained Earnings. |
| 4 | Several adjustment keys disagree with the displayed facts. | Derive amounts from the same facts. Round recurring calculations to cents. |
| 4 | The opening trial balance has a $6,600 gap. | Correct the example capital balance to $36,600. Both totals are $77,300. Explain why balanced adjustments cannot repair an opening imbalance. |
| 5–6 | Keyword matching accepts weak or contradictory simulator answers. | Check numeric outputs and exact status text. Reveal the result after the attempt. State that explanations need teacher or partner review. |
| 5–6 | Tutorials describe a different workbook task. | Align cells, formulas, names, and checkpoints with the existing textbook-aligned OneDrive sources. |
| 5–6 | Empty models can pass the balance-only status check. | Check required numeric cells before Complete. Check all five validation results in Lesson 6. Update three existing website workbook copies. |
| 5 | A balanced input change is described as an error. | Separate balance checks from source amount checks. Test a one-sided error separately. |
| 7 | An annual expense is used in a monthly report. | Update the existing website reference copy and tutorial. Monthly depreciation is $733.33. Monthly net income is $8,366.67. |
| 7, 9–10 | Peer feedback has no durable local output. | Add separate saved drafts and a text-file export. Keep reviews in the browser until the student exports them. |
| 8–10 | All content sits in Start. Other navigation labels have no destinations. | Divide the existing content into Start, Learn, Do, and Check. Give every label a section anchor. |
| 8–10 | CSV extracts are presented as complete close sources. | Direct students to their assigned OneDrive workbook. State the limits of the CSV extracts. Remove quarter and year-end labels that conflict with January dates. |
| 9 | Retained earnings check omits dividends. Timing totals disagree. | Use beginning retained earnings + net income − dividends. Set the student workflow, metadata, and teacher plan to 70 minutes. |

## Open source mapping

The local OneDrive sync uses `Math Department/Applied Track/Business Math/Unit 2 Month-End Wizard/`. The user named `Math Department/Applied Math/Business Math/`. The local folder contains textbook-aligned Lessons 4–6 and `BM-U02L07.xlsx`.

`BM-U02L07.xlsx` contains Summary, Adjustments, and Report. It supports the depreciation link. It does not contain the trial balance or closing journal required by the full rehearsal. The lesson now states this limit. The intended full rehearsal file still needs identification.

The group CSV extracts omit complete opening balances, transaction counterparts, and some adjustment facts. No assigned Unit 2 group workbook was found in the inspected local folder. This does not prove that a cloud workbook is absent. The intended Lesson 8–10 Excel files and their class links still need identification.

Do not mark these source tasks complete. Confirm the existing files. Then align sheet requirements, group assignment, links, and teacher plans with those files. Do not invent missing balances or asset lives.

## Validation

- Vitest: 52 test files and 478 tests pass. This includes scoring, prediction state, adjustment amounts, profit and loss closing journals, exact status answers, peer draft restore and export, and project navigation.
- TypeScript: passes with `--noEmit --incremental false`.
- ESLint: no errors. Four warnings remain in unchanged files.
- Excel package and contract audit: passes.
- LibreOffice: eight disposable workbook cases pass. Blank journal cells and missing validation checks show Not finished. A one-sided entry shows Review flagged items. A balanced input change remains Complete. April updates all five scenario inputs. An invalid input prevents Complete. Monthly depreciation and net income match the stated values.
- Browser: the isolated control page accepts profit and loss entries and posts the expected retained earnings. It rejects contradictory status text. Saved feedback returns after a reload. The browser shows the export confirmation, but the in-app browser does not expose a download event. The automated test checks the Blob and download anchor. A normal-browser file download still needs confirmation.
- Graph: scanned and refreshed for the changed lesson and component relationships.

No npm command was run. No `.next` output was created or changed. No production build or published-route validation was run. The isolated browser page checks controls, not the final Next.js layout.

The Unit 3 Luna walkthrough is complete. Its report remains in the primary checkout at `bus-math-nextjs/output/reviews/unit03-luna-walkthrough.md`. Unit 3 curriculum files are unchanged.
