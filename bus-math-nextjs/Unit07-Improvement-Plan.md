# Unit 07 Improvement Plan

## Unit Direction

Unit 07 should become inventory-only. Remove depreciation content from this unit and keep the instructional spine focused on inventory flow, COGS, ending inventory, method choice, and statement impact. This is the best current model for Lessons 1-4, but it still needs clearer boundaries before Excel starts.

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
- [ ] Remove depreciation references from student-facing Unit 07 content.
- [ ] Keep the mini balance sheet and income statement connections that help students see why ending inventory and COGS matter.
- [ ] Align page content, workbook/tutorial downloads, and assessment language.
- [ ] Do not change the locked skill map without updating this file.

## Unit Cleanup Before Lesson Edits

- [ ] Rewrite unit-facing copy so Unit 07 is inventory-only.
- [ ] Remove SLN, DDB, fixed-asset, and depreciation-schedule language from Unit 07 lesson titles and descriptions.
- [ ] Keep the strongest inventory pedagogy from the current version: prediction before reveal, visible layers, and statement connections.

## Lesson Tasks

### Lesson 01
- Skill: `agents/skills/launch-lesson/SKILL.md`
- Focus: launch Sarah's inventory-trust problem and why ending inventory affects profit.
- Tasks:
  - [ ] Start with Sarah's interview video and the inventory confusion problem.
  - [ ] Introduce the unit scoreboard around goods available, COGS, ending inventory, and gross profit.
  - [ ] Keep the lesson conceptual and narrative-first.
- Done when:
  - [ ] Students can explain why inventory counts affect profit and the balance sheet.
  - [ ] The lesson points clearly to the movement logic in Lesson 02.

### Lesson 02
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: beginning inventory, purchases, units sold, COGS range, and statement connections.
- Tasks:
  - [ ] Use concrete movement and layer representations before formal method names.
  - [ ] Keep the mini balance sheet and mini income statement visible as abstract connections.
  - [ ] Use Phase 4 as a repeatable practice loop on GAFS, COGS range, and ending inventory reasoning.
- Done when:
  - [ ] Students can explain why the same sales volume can produce different COGS outcomes.
  - [ ] Phase 5 checks understanding of inventory flow, not workbook logic.

### Lesson 03
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: FIFO and LIFO as competing cost-flow assumptions.
- Tasks:
  - [ ] Teach both methods explicitly with visible layer assignment.
  - [ ] Keep the business consequences of rising prices visible.
  - [ ] Make Phase 4 a deliberate-practice loop on FIFO/LIFO assignment and comparison.
- Done when:
  - [ ] Students can calculate FIFO and LIFO by hand.
  - [ ] Students can explain how each method changes reported profit and inventory.

### Lesson 04
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: Specific Identification and Weighted Average, plus four-method comparison.
- Tasks:
  - [ ] Keep this lesson non-Excel and textbook-first.
  - [ ] Use business-fit sorting before arithmetic.
  - [ ] Use Phase 4 for repeated mixed-method comparison with reduced scaffolding.
- Done when:
  - [ ] Students can recognize when each inventory method fits best.
  - [ ] The closing phase points cleanly to the workbook lessons.

### Lesson 05
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: build the inventory-method workbook and automate method calculations.
- Tasks:
  - [ ] Teach workbook anatomy and method-calculation structure directly.
  - [ ] Include a safe rehearsal that mirrors the phase-4 workbook logic.
  - [ ] Require a real workbook artifact by the end of Phase 4.
- Done when:
  - [ ] Students have a working method-comparison workbook.
  - [ ] The workbook reflects the same method logic already learned by hand.

### Lesson 06
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: add dynamic method selection, turnover analysis, and investor-ready explanation.
- Tasks:
  - [ ] Teach the exact logic for dynamic method switching and comparison displays.
  - [ ] Keep statement impact visible in the workbook outputs.
  - [ ] Phase 5 must require a short defense of the recommended inventory method.
- Done when:
  - [ ] The workbook supports comparison across methods and shows the business impact clearly.
  - [ ] Students can explain their method choice using workbook evidence.

### Lesson 07
- Skill: `agents/skills/project-rehearsal/SKILL.md`
- Focus: rehearse the exact inventory-project structure with shared teacher data.
- Tasks:
  - [ ] Use one shared dataset and one shared workbook for the whole class.
  - [ ] Trace the final inventory recommendation back to workbook evidence.
  - [ ] Include a Definition of Done and peer-audit routine.
- Done when:
  - [ ] Students know the exact workbook structure they must reuse in the project.
  - [ ] Peer critique focuses on evidence chain, method fit, and clarity.

### Lesson 08
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: project kickoff with group-specific inventory data and the same rehearsal workbook structure.
- Tasks:
  - [ ] Assign each group its own inventory dataset or starter workbook.
  - [ ] Keep workbook architecture identical to Lesson 07.
  - [ ] Require milestone evidence from setup and first method-analysis sheets.
- Done when:
  - [ ] Each team is working in the correct workbook.
  - [ ] Initial inventory-analysis work is complete.

### Lesson 09
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: complete the workbook, finalize the method recommendation, and rehearse the board-style explanation.
- Tasks:
  - [ ] Continue the same workbook from Lesson 08.
  - [ ] Require peer critique and revision.
  - [ ] Make teams cite exact workbook evidence for inventory, COGS, and turnover claims.
- Done when:
  - [ ] The workbook is complete and readable.
  - [ ] The team can defend a method recommendation with evidence.

### Lesson 10
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: final presentation/submission and reflection.
- Tasks:
  - [ ] Make final deliverables explicit.
  - [ ] Require final workbook polish and submission.
  - [ ] End with reflection on method choice, evidence, and reporting credibility.
- Done when:
  - [ ] Final deliverables are submitted.
  - [ ] Reflection captures what made the recommendation believable.
