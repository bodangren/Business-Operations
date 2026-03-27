# Unit 06 Improvement Plan

## Unit Direction

Unit 06 should stay conceptual longer than the current version. Keep Lessons 1-4 textbook-first so students understand markup, margin, break-even, and pricing tradeoffs before Excel automation starts. Excel should begin in Lesson 05, not earlier.

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
- [ ] Keep the pricing recommendation problem visible in every lesson.
- [ ] Delay spreadsheet-building moves until Lesson 05.
- [ ] Align page content, workbook/tutorial downloads, and assessment language.
- [ ] Do not change the locked skill map without updating this file.

## Lesson Tasks

### Lesson 01
- Skill: `agents/skills/launch-lesson/SKILL.md`
- Focus: launch the target-profit vs market-price tension.
- Tasks:
  - [ ] Start with Sarah's interview video and the pricing-pressure story.
  - [ ] Introduce the unit decision frame: profitable, competitive, and defensible pricing.
  - [ ] Keep Phase 4 bounded; no Excel build moves yet.
- Done when:
  - [ ] Students can explain why price is both a math decision and a market decision.
  - [ ] The lesson points cleanly to markup and margin logic next.

### Lesson 02
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: markup vs margin and why businesses confuse them.
- Tasks:
  - [ ] Use concrete selling-price and cost examples before formulas.
  - [ ] Keep strong representational supports in Phases 2-3.
  - [ ] Make Phase 4 a repeatable markup-vs-margin mastery loop.
- Done when:
  - [ ] Students can calculate and distinguish markup and margin accurately.
  - [ ] Phase 5 checks reasoning and method choice, not spreadsheet features.

### Lesson 03
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: break-even, contribution margin, and the basic CVP model.
- Tasks:
  - [ ] Keep the lesson textbook-first and visual.
  - [ ] Use representational supports for units, dollars, and contribution logic.
  - [ ] Make students explain what shifts break-even and why.
- Done when:
  - [ ] Students can calculate break-even and interpret the result.
  - [ ] Students can connect contribution margin to pricing choices.

### Lesson 04
- Skill: `agents/skills/accounting-principles/SKILL.md`
- Focus: scenario comparison, sensitivity reasoning, and recommendation logic before Excel.
- Tasks:
  - [ ] Keep this lesson non-Excel.
  - [ ] Use structured tables and comparison views to analyze multiple pricing scenarios by hand.
  - [ ] Use Phase 4 for repeated recommendation practice under reduced scaffolding.
- Done when:
  - [ ] Students can defend a pricing recommendation using CVP reasoning.
  - [ ] The closing phase clearly sets up Goal Seek and Data Tables as useful tools, not premature content.

### Lesson 05
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: build the first CVP workbook and use Goal Seek for target-profit scenarios.
- Tasks:
  - [ ] Teach the workbook anatomy and Goal Seek inputs directly.
  - [ ] Include a safe rehearsal that mirrors Set Cell / To Value / By Changing Cell logic.
  - [ ] Require a real workbook artifact by the end of Phase 4.
- Done when:
  - [ ] Students can run Goal Seek on a valid CVP model.
  - [ ] The workbook produces a defensible target-profit scenario.

### Lesson 06
- Skill: `agents/skills/excel-lessons/SKILL.md`
- Focus: add one- and two-variable sensitivity analysis plus investor-ready explanation.
- Tasks:
  - [ ] Teach Data Table setup directly and include common failure checks.
  - [ ] Keep `SpreadsheetWrapper` reference sheets static and reliable.
  - [ ] Phase 5 must require a short explanation of what the sensitivity results mean for pricing risk.
- Done when:
  - [ ] The workbook includes functioning sensitivity tables.
  - [ ] Students can explain which inputs matter most and why.

### Lesson 07
- Skill: `agents/skills/project-rehearsal/SKILL.md`
- Focus: rehearse the exact pricing-project structure with shared teacher data.
- Tasks:
  - [ ] Use one shared workbook and one shared dataset for the whole class.
  - [ ] Trace the pricing recommendation back to the CVP model and sensitivity evidence.
  - [ ] Include a Definition of Done and peer-audit routine.
- Done when:
  - [ ] Students know the exact workbook structure they must reuse in the project.
  - [ ] Peer critique focuses on evidence chain, risk, and clarity.

### Lesson 08
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: project kickoff with group-specific business data and the same rehearsal workbook structure.
- Tasks:
  - [ ] Assign each group its own pricing dataset or starter workbook.
  - [ ] Keep the workbook architecture identical to Lesson 07.
  - [ ] Require milestone evidence from setup and first scenario analysis.
- Done when:
  - [ ] Each team is working in the correct workbook.
  - [ ] Initial pricing-analysis sheets are complete.

### Lesson 09
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: complete the workbook, finalize the pricing recommendation, and rehearse the pitch.
- Tasks:
  - [ ] Continue the same workbook from Lesson 08.
  - [ ] Require peer critique and revision.
  - [ ] Make teams cite exact workbook evidence for pricing, margin, and risk claims.
- Done when:
  - [ ] The workbook is complete and readable.
  - [ ] The team can defend a pricing recommendation with evidence.

### Lesson 10
- Skill: `agents/skills/group-project/SKILL.md`
- Focus: final debate/presentation, submission, and reflection.
- Tasks:
  - [ ] Make final artifact and speaking expectations explicit.
  - [ ] Require final workbook polish and submission.
  - [ ] End with reflection on pricing logic, risk, and model credibility.
- Done when:
  - [ ] Final deliverables are submitted.
  - [ ] Reflection captures how the team balanced competitiveness with profitability.
