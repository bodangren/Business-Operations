# Unit 01 Improvement Plan

## Unit Direction

Unit 01 should establish the investor-trust story for the whole course: clean books, visible logic, and a workbook that can catch mistakes early. Keep lessons 1-3 textbook-first and move into Excel only after students can explain the accounting logic without the spreadsheet.

## Locked Skill Map

- Lesson 01 -> `agents/skills/launch-lesson/SKILL.md`
- Lesson 02 -> `agents/skills/accounting-principles/SKILL.md`
- Lesson 03 -> `agents/skills/accounting-principles/SKILL.md`
- Lesson 04 -> `agents/skills/excel-lessons/SKILL.md`
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
- [ ] Keep Sarah/TechStart continuity visible.
- [ ] Align page content, workbook/tutorial downloads, and assessment language.
- [ ] Do not change the locked skill map without updating this file.

## Lesson Tasks

### Lesson 01
- Skill: `agents/skills/launch-lesson/SKILL.md`
- Focus: launch the clean-books problem and the accounting equation as the unit scoreboard.
- Tasks:
  - [ ] Start Phase 1 with Sarah's interview video and the investor-trust problem.
  - [ ] Make the scoreboard explicit in Phase 2 and keep it visible through Phase 6.
  - [ ] Keep Phase 4 bounded; do not introduce workbook build steps yet.
- Done when:
  - [ ] Students can state why "clean books" matter to an investor.
  - [ ] The lesson previews debits/credits without teaching them formally yet.

### Lesson 02
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: classify transactions and show how business events move the accounting equation.
- Tasks:
  - [ ] Use concrete startup transactions before abstract account labels.
  - [ ] Include strong representational supports in Phases 2-3.
  - [ ] Make Phase 4 a repeatable classification/practice loop if the skill needs fluency.
- Done when:
  - [ ] Students can explain how a transaction changes assets, liabilities, or equity.
  - [ ] Phase 5 checks understanding of transaction effects, not spreadsheet steps.

### Lesson 03
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: debits, credits, and trial-balance logic.
- Tasks:
  - [ ] Keep the lesson textbook-first and methodical.
  - [ ] Use mini ledger/trial-balance forms as the abstract stage of the lesson.
  - [ ] Make Phase 4 a deliberate-practice loop on posting and balance checks.
- Done when:
  - [ ] Students can post transactions and explain why the trial balance should tie out.
  - [ ] The closing phase clearly hands off to the first Excel build lesson.

### Lesson 04
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: move the manual ledger into a structured Excel workbook with clean table design.
- Tasks:
  - [ ] Phase 2 must teach the workbook anatomy and naming conventions directly.
  - [ ] Phase 3 must rehearse the table structure or formula logic before the real workbook sprint.
  - [ ] Phase 4 must produce a clean starter ledger workbook, not just a mockup.
- Done when:
  - [ ] Students finish a readable ledger structure in Excel.
  - [ ] The workbook state is ready for formula-based self-auditing in Lesson 05.

### Lesson 05
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: build self-auditing formulas, totals, and error flags.
- Tasks:
  - [ ] Teach the exact logic for totals, debit/credit checks, and red-flag formulas.
  - [ ] Keep `SpreadsheetWrapper` previews as static references, not live unsupported formulas.
  - [ ] Require a short artifact task in Phase 5 explaining which check matters most.
- Done when:
  - [ ] The workbook catches common posting or balance errors.
  - [ ] Students can explain how the checks prove reliability.

### Lesson 06
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: investor-facing summary, workbook polish, and clear evidence chain.
- Tasks:
  - [ ] Build the summary layer that shows accuracy and readiness quickly.
  - [ ] Add workbook checks, labels, and formatting that feel investor-ready.
  - [ ] Phase 5 must require a brief defense of the workbook, not another build sprint.
- Done when:
  - [ ] The workbook has a clear summary or dashboard layer.
  - [ ] Students can cite workbook evidence in plain language.

### Lesson 07
- Skill: `agents/skills/project-rehearsal/SKILL.md`
- Focus: rehearse the exact ledger project structure with the same teacher data for every group.
- Tasks:
  - [ ] Use one shared workbook structure and one shared dataset for the whole class.
  - [ ] Make students trace the final recommendation or trust claim back to workbook evidence.
  - [ ] Include a Definition of Done and peer audit routine.
- Done when:
  - [ ] Every student knows the structure they must reuse in the project.
  - [ ] Peer audit focuses on evidence, logic chain, and clarity.

### Lesson 08
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: project kickoff with group-specific startup data and the same rehearsal workbook structure.
- Tasks:
  - [ ] Assign each group its own dataset or starter workbook.
  - [ ] Keep the tab structure identical to Lesson 07.
  - [ ] Require milestone evidence from the first core sheets.
- Done when:
  - [ ] Each team has the correct workbook open and renamed.
  - [ ] Early setup and analysis sheets are complete.

### Lesson 09
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: complete the workbook, prepare the recommendation, and rehearse the pitch.
- Tasks:
  - [ ] Continue the same workbook from Lesson 08.
  - [ ] Require at least three cited numbers from the workbook.
  - [ ] Include peer critique that leads to revision.
- Done when:
  - [ ] The workbook is complete and readable.
  - [ ] The team can deliver a claim-evidence-risk explanation.

### Lesson 10
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: final investor pitch, submission, and reflection.
- Tasks:
  - [ ] Make submission requirements explicit.
  - [ ] Require final workbook polish and final presentation notes.
  - [ ] End with reflection on trust, control, and workbook design.
- Done when:
  - [ ] Final workbook and presentation artifact are submitted.
  - [ ] Reflection captures what the team would keep or change next time.
