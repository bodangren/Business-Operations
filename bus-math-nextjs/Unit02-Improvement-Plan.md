# Unit 02 Improvement Plan

## Unit Direction

Unit 02 should teach month-end closing as a business-control workflow first and an automation challenge second. Keep enough conceptual accounting in Lessons 2-4 so students understand why the automation exists before they start building the wizard.

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
- [ ] Keep the month-end timeline and business urgency visible.
- [ ] Align textbook pages, automation tasks, and any workbook/tutorial assets.
- [ ] Do not change the locked skill map without updating this file.

## Lesson Tasks

### Lesson 01
- Skill: `agents/skills/launch-lesson/SKILL.md`
- Focus: launch the month-end close crisis and the need for accurate, fast closing.
- Tasks:
  - [ ] Start with Sarah's interview video and a concrete closing-time failure.
  - [ ] Introduce the month-end scoreboard or close workflow visibly.
  - [ ] Keep Phase 4 bounded; no macro building yet.
- Done when:
  - [ ] Students understand why slow closes hurt the business.
  - [ ] The lesson points cleanly to adjusting-entry logic next.

### Lesson 02
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: accruals and deferrals as the core month-end friction.
- Tasks:
  - [ ] Use concrete business timing problems before formal definitions.
  - [ ] Show how adjustments change the statements.
  - [ ] Make Phase 4 a deliberate-practice loop on identifying and recording adjustments.
- Done when:
  - [ ] Students can tell when revenue/expense timing is wrong.
  - [ ] Phase 5 checks adjustment reasoning, not Excel navigation.

### Lesson 03
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: closing entries and the logic of resetting temporary accounts.
- Tasks:
  - [ ] Keep the flow visible from adjusted trial balance to closing entries.
  - [ ] Use representational supports before full journal-format abstraction.
  - [ ] Make students explain why closing is necessary, not just how to do it.
- Done when:
  - [ ] Students can explain what gets closed and why.
  - [ ] The lesson prepares students for a full close checklist in Lesson 04.

### Lesson 04
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: complete the manual month-end flow, including depreciation or other required recurring adjustments.
- Tasks:
  - [ ] Keep this lesson non-Excel and textbook-first.
  - [ ] Use a full month-end checklist or sequence so students see the workflow clearly.
  - [ ] Make Phase 4 a repeated manual close routine with minimal scaffolding.
- Done when:
  - [ ] Students can walk through the month-end close in order.
  - [ ] The closing phase clearly sets up the automation lesson.

### Lesson 05
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: build the first automation layer for the month-end wizard.
- Tasks:
  - [ ] Teach the feature anatomy directly: named ranges, inputs, buttons, or macro trigger flow.
  - [ ] Include a safe rehearsal before students touch the workbook.
  - [ ] Require a real workbook artifact by the end of Phase 4.
- Done when:
  - [ ] The workbook can automate at least one key closing routine.
  - [ ] Students can explain which manual step the automation replaced.

### Lesson 06
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: polish the wizard interface, validation, and auditability.
- Tasks:
  - [ ] Add visible checks and user-facing controls.
  - [ ] Keep the workbook professional and easy to use.
  - [ ] Phase 5 must test trustworthiness and explanation, not just clicks.
- Done when:
  - [ ] The workbook feels like a usable month-end tool, not a prototype pile.
  - [ ] Students can explain how the tool maintains GAAP accuracy.

### Lesson 07
- Skill: `agents/skills/project-rehearsal/SKILL.md`
- Focus: guided rehearsal of the full wizard with the same teacher data for every group.
- Tasks:
  - [ ] Keep the teacher and all groups on the same workbook data.
  - [ ] Trace each control or output back to supporting logic.
  - [ ] Run a peer audit against the Definition of Done.
- Done when:
  - [ ] Students know the exact project structure and quality bar.
  - [ ] The audit language is concrete enough to reuse in project work.

### Lesson 08
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: kickoff for group-specific closing scenarios using the rehearsal workbook structure.
- Tasks:
  - [ ] Assign each team its own scenario/workbook.
  - [ ] Keep the structure identical to Lesson 07.
  - [ ] Require milestone evidence from the setup and first automation layers.
- Done when:
  - [ ] Each team is working in the correct workbook.
  - [ ] Setup and early close routines are in place.

### Lesson 09
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: finish the workbook and rehearse the demo.
- Tasks:
  - [ ] Complete remaining automation, checks, and explanation notes.
  - [ ] Require peer critique and revision.
  - [ ] Make teams cite measurable time savings or accuracy gains.
- Done when:
  - [ ] The workbook and demo flow are complete.
  - [ ] The team can defend both speed and accuracy.

### Lesson 10
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: final Innovation Fair-style demo, submission, and reflection.
- Tasks:
  - [ ] Make final demo expectations explicit.
  - [ ] Require final workbook submission and polished speaking notes.
  - [ ] End with reflection on automation, controls, and usability.
- Done when:
  - [ ] Final artifacts are submitted.
  - [ ] Reflection captures how the team balanced speed with accuracy.
