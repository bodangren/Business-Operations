# Unit 05 Improvement Plan

## Unit Direction

Unit 05 should teach payroll as a timing-and-control system first and an automation challenge second. Keep enough conceptual payroll accounting in Lessons 2-4 so students understand gross pay, deductions, employer obligations, and cash timing before they start building the workbook.

## Locked Skill Map

- Lesson 01 -> `agents/skills/launch-lesson/SKILL.md`
- Lesson 02 -> `agents/skills/accounting-principles/SKILL.md`
- Lesson 03 -> `agents/skills/accounting-principles/SKILL.md`
- Lesson 04 -> `agents/skills/accounting-principles/SKILL.md`
- Lesson 05 -> `agents/skills/excel-lessons/SKILL.md`
- Lesson 06 -> `agents/skills/excel-lessons/SKILL.md`
- Lesson 07 -> `agents/skills/project-rehearsal/SKILL.md`
- Lesson 08 -> `agents/skills/group-project/SKILL.md`
- Lesson 09 -> `agents/skills/group-project/SKILL.md`
- Lesson 10 -> `agents/skills/group-project/SKILL.md`

## Junior Dev Rules

- [ ] Read `AGENTS.md` and the named skill before editing any lesson.
- [ ] For Lessons 01-07, update `lesson-data.ts`, all six phase pages, and any lesson-specific components/imports.
- [ ] For Lessons 08-10, update the milestone page, `lesson-data.ts`, workbook links, checklists, rubric language, and reflection.
- [ ] Keep the cash-crunch story visible: payroll timing, taxes, and rent pressure.
- [ ] Align payroll logic, workbook structure, and any CSV/tutorial assets.
- [ ] Do not change the locked skill map without updating this file.

## Lesson Tasks

### Lesson 01
- Skill: `agents/skills/launch-lesson/SKILL.md`
- Focus: launch the payroll cash-crunch problem and why payroll errors hurt trust fast.
- Tasks:
  - [ ] Start with Sarah's interview video and the overdraft or missed-cash-timing problem.
  - [ ] Introduce the core payroll scoreboard: gross pay, deductions, employer cost, and cash out.
  - [ ] Keep Phase 4 bounded; do not start workbook construction yet.
- Done when:
  - [ ] Students can explain why payroll is both a people issue and a cash-flow issue.
  - [ ] The lesson points clearly to payroll calculation logic next.

### Lesson 02
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: gross pay across hourly, salaried, and tipped employees.
- Tasks:
  - [ ] Use concrete employee scenarios before abstract formula language.
  - [ ] Keep strong representational supports in Phases 2-3.
  - [ ] Use Phase 4 for repeated gross-pay calculation with reduced scaffolding.
- Done when:
  - [ ] Students can calculate gross pay for multiple employee types.
  - [ ] Phase 5 checks pay logic, not Excel function names.

### Lesson 03
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: deductions, net pay, and employer payroll obligations.
- Tasks:
  - [ ] Teach withholdings and employer taxes explicitly.
  - [ ] Use mini payroll register or pay-stub representations before abstract schedules.
  - [ ] Make students explain why employer payroll cost is bigger than net pay.
- Done when:
  - [ ] Students can move from gross pay to net pay accurately.
  - [ ] Students can explain the difference between employee deductions and employer payroll expense.

### Lesson 04
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: payroll timing, liabilities, and bank reconciliation logic.
- Tasks:
  - [ ] Keep this lesson non-Excel and textbook-first.
  - [ ] Show how payroll timing creates cash-flow and reconciliation problems.
  - [ ] Use Phase 4 as a repeated manual reasoning routine on payroll liabilities and mismatch detection.
- Done when:
  - [ ] Students can explain why a payroll register and the bank can disagree temporarily.
  - [ ] The closing phase sets up the workbook automation cleanly.

### Lesson 05
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: build the payroll calculator and data-mapping foundation in Excel.
- Tasks:
  - [ ] Teach workbook anatomy, lookup structure, and input/output zones directly.
  - [ ] Include a safe rehearsal for employee-data and tax-table mapping before the live workbook sprint.
  - [ ] Require a real payroll-calculator artifact by the end of Phase 4.
- Done when:
  - [ ] The workbook can produce accurate pay results for at least one employee scenario.
  - [ ] Students can explain what each major workbook section does.

### Lesson 06
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: validation, bilingual stub output, reconciliation checks, and workbook polish.
- Tasks:
  - [ ] Add visible error checks, validation rules, and professional payroll outputs.
  - [ ] Keep the workbook tied to real payroll trust and usability.
  - [ ] Phase 5 must require a short explanation of how the workbook prevents payroll mistakes.
- Done when:
  - [ ] The workbook catches common entry errors and produces a clean output.
  - [ ] Students can defend the workbook as reliable for payroll use.

### Lesson 07
- Skill: `agents/skills/project-rehearsal/SKILL.md`
- Focus: rehearse the exact payroll-project structure with shared teacher data.
- Tasks:
  - [ ] Use one shared payroll dataset and one shared workbook for the whole class.
  - [ ] Trace every final payroll recommendation or reconciliation note back to workbook evidence.
  - [ ] Include a Definition of Done and peer-audit routine.
- Done when:
  - [ ] Students know the exact workbook structure they must reuse in the project.
  - [ ] Peer critique focuses on accuracy, evidence, and payroll clarity.

### Lesson 08
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: project kickoff with group-specific payroll scenarios and the same rehearsal workbook structure.
- Tasks:
  - [ ] Assign each group its own payroll dataset or starter workbook.
  - [ ] Keep workbook tabs and logic identical to Lesson 07.
  - [ ] Require milestone evidence from setup and early payroll-calculation sheets.
- Done when:
  - [ ] Each team is working in the correct workbook.
  - [ ] Initial calculation and setup work is complete.

### Lesson 09
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: complete the payroll system, test edge cases, and rehearse the tutorial/demo.
- Tasks:
  - [ ] Continue the same workbook from Lesson 08.
  - [ ] Require peer critique and revision.
  - [ ] Make teams cite workbook evidence for at least three payroll-control or cash-flow claims.
- Done when:
  - [ ] The payroll workbook is complete and tested.
  - [ ] The team can explain how the system prevents payroll mistakes and cash surprises.

### Lesson 10
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: final tutorial/demo, submission, and reflection.
- Tasks:
  - [ ] Make final artifact and speaking expectations explicit.
  - [ ] Require final workbook polish and submission check.
  - [ ] End with reflection on payroll accuracy, controls, and usability.
- Done when:
  - [ ] Final workbook and presentation/tutorial artifacts are submitted.
  - [ ] Reflection captures what made the payroll system trustworthy.
