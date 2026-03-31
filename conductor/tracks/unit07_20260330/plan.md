# Implementation Plan: Unit 07 Improvement

## Track ID: unit07_20260330

## Legacy Completion Snapshot
- Lesson 01: Complete
- Lesson 02: Complete
- Lesson 03: Complete
- Lesson 04: Complete
- Lessons 05-10: Pending in the Conductor track

## Migration Checkpoint
- Commit: `1c6a5e4`
- This commit migrated the legacy Unit 07 and Unit 08 planning content into Conductor and removed the retired `Unitxx-Improvement-Plan.md` files.

## Completion Details Migrated From Legacy Plans
- Lesson 02 included three new interactive components and supporting assets.
- Lesson 04 included six interactive components plus the full four-method synthesis matrix.
- Lesson 05 is the first medium-complexity Excel workbook lesson.
- Lesson 06 is the high-complexity workbook and recommendation lesson.
- Lesson 07 is the shared rehearsal lesson.
- Lessons 08-10 are one-phase group project milestones.

### Phase 1: Setup & Skills Loading
- [ ] 1.1 Load `agents/skills/launch-lesson/SKILL.md` and review requirements
  - Understand the launch-lesson phase contract
  - Review component rules for launch lessons
  - Review writing rules specific to launch lessons
- [ ] 1.2 Load `agents/skills/accounting-principles/SKILL.md` and review requirements
  - Understand the accounting-principles phase contract
  - Review CRA (Concrete-Representational-Abstract) guidance
  - Review phase-4 component contract
- [ ] 1.3 Load `agents/skills/excel-lessons/SKILL.md` and review requirements
  - Understand the excel-lessons phase contract
  - Review SpreadsheetWrapper rules and formula guidance
  - Review simulator rules and workbook continuity rules
- [ ] 1.4 Load `agents/skills/project-rehearsal/SKILL.md` and review requirements
  - Understand the project-rehearsal phase contract
  - Review shared artifact rules
  - Review peer audit rules and transfer rules
- [ ] 1.5 Load `agents/skills/group-project/SKILL.md` and review requirements
  - Understand the group-project milestone contract
  - Review dataset and workbook assignment rules
  - Review recommendation rules and peer feedback rules
- [ ] 1.6 Remove depreciation references from Unit 07 student-facing content
  - Remove SLN, DDB, fixed-asset, and depreciation-schedule language from titles and descriptions
  - Keep the strongest inventory pedagogy: prediction before reveal, visible layers, statement connections
  - Rewrite unit-facing copy so Unit 07 is inventory-only

### Progress Notes From Legacy Plan
- Lesson 01: Complete
- Lesson 02: Complete
- Lesson 03: Complete
- Lesson 04: Complete
- The legacy implementation used a shared rehearsal workbook and four group datasets for Lessons 7-10.
- The legacy resource plan covered lesson-specific CSVs, workbook files, and tutorial docs for Lessons 1-7.

### Phase 2: Lessons 01-04 (Textbook-First)
- [ ] 2.1 **Lesson 01** - Implement launch-lesson skill
  - [ ] 2.1.1 Update lesson-data.ts for Lesson 01
  - [ ] 2.1.2 Implement Phase 1 with Sarah's interview video and inventory confusion problem
    - Use the shared `VideoPlayer` component
    - Include title, description, YouTube ID, duration, and full transcript data
    - Create business tension and credibility
    - Follow with one short processing move (risk triage, prediction, quick comprehension, or turn-and-talk)
  - [ ] 2.1.3 Implement Phase 2-6 with goods available, COGS, ending inventory, gross profit scoreboard visible
    - Phase 2: Name the scoreboard explicitly (goods available, COGS, ending inventory, gross profit), show main moving parts, use one bounded interactive
    - Phase 3: Use shared dataset/simulation, predict before reveal, show before/after changes
    - Phase 4: Keep task constrained, allow 1-2 meaningful choices, show consequences visibly
    - Phase 5: Short MCQ exit ticket assessing founder problem, scoreboard, core distinctions
    - Phase 6: Restate enduring formula, summarize understanding, preview next lesson, include reflection
  - [ ] 2.1.4 Keep Phase 4 bounded - no workbook build steps yet
  - **Done when**:
    - [ ] Students can explain why inventory counts affect profit and the balance sheet
    - [ ] The lesson points clearly to the movement logic in Lesson 02

- [ ] 2.2 **Lesson 02** - Implement accounting-principles skill
  - [ ] 2.2.1 Update lesson-data.ts for Lesson 02
  - [ ] 2.2.2 Implement Phase 1-6 with beginning inventory, purchases, COGS range, and statement connections
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and movement/layer representations
    - Phase 3: Add meaningful complication, reduce prompts, shift toward cleaner inventory-style layouts, ask students to explain choices
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on inventory flow understanding, not workbook logic
    - Phase 6: Reflect on confidence and understanding, connect to business problem, identify method signals, preview next principle
  - [ ] 2.2.3 Use concrete movement and layer representations before formal method names
  - [ ] 2.2.4 Keep the mini balance sheet and mini income statement visible as abstract connections
  - [ ] 2.2.5 Make Phase 4 a repeatable practice loop on GAFS, COGS range, and ending inventory reasoning
  - **Done when**:
    - [ ] Students can explain why the same sales volume can produce different COGS outcomes
    - [ ] Phase 5 checks understanding of inventory flow, not workbook logic

- [ ] 2.3 **Lesson 03** - Implement accounting-principles skill
  - [ ] 2.3.1 Update lesson-data.ts for Lesson 03
  - [ ] 2.3.2 Implement Phase 1-6 with FIFO and LIFO as competing cost-flow assumptions
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name FIFO/LIFO methods clearly, model procedure step-by-step, explain why each step exists, use worked examples and visible layer assignment
    - Phase 3: Add meaningful complication (more complex inventory flows), reduce prompts, shift toward authentic inventory notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on FIFO/LIFO calculation and comparison, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview next lesson
  - [ ] 2.3.3 Teach both methods explicitly with visible layer assignment
  - [ ] 2.3.4 Keep the business consequences of rising prices visible
  - [ ] 2.3.5 Make Phase 4 a deliberate-practice loop on FIFO/LIFO assignment and comparison
  - **Done when**:
    - [ ] Students can calculate FIFO and LIFO by hand
    - [ ] Students can explain how each method changes reported profit and inventory

- [ ] 2.4 **Lesson 04** - Implement accounting-principles skill
  - [ ] 2.4.1 Update lesson-data.ts for Lesson 04
  - [ ] 2.4.2 Implement Phase 1-6 with Specific ID, Weighted Average, and four-method comparison
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and business-fit sorting before arithmetic
    - Phase 3: Add meaningful complication (mixed-method scenarios), reduce prompts, shift toward authentic inventory notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on four-method comparison and business fit, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview first Excel build lesson
  - [ ] 2.4.3 Keep this lesson non-Excel and textbook-first
  - [ ] 2.4.4 Use business-fit sorting before arithmetic
  - [ ] 2.4.5 Use Phase 4 for repeated mixed-method comparison with reduced scaffolding
  - **Done when**:
    - [ ] Students can recognize when each inventory method fits best
    - [ ] The closing phase points cleanly to the workbook lessons

### Phase 3: Lessons 05-06 (Excel)
- [x] 3.1 **Lesson 05** - Implement excel-lessons skill
  - [x] 3.1.1 Update lesson-data.ts for Lesson 05
  - [x] 3.1.2 Implement Phase 1-6 with inventory method workbook
    - Phase 1: Open with business/investor scenario where method comparison matters, make tool feel necessary, connect to existing workbook
    - Phase 2: Name tool/workbook pattern clearly, explain feature parts, show where tool lives in Excel, teach common failure mode
    - Phase 3: Use custom simulator/manual logic trainer mirroring real workbook logic, give immediate feedback, make bridge to phase 4 explicit
    - Phase 4: State exact starting workbook/download path, state output, include reference model, provide short build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical/conceptual check, brief artifact task focusing on trustworthiness and business communication
    - Phase 6: Reflect on tool use and professional judgment, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.1.3 Teach workbook anatomy and method-calculation structure directly
  - [x] 3.1.4 Include a safe rehearsal that mirrors the phase-4 workbook logic
  - [x] 3.1.5 Require a real workbook artifact by the end of Phase 4
  - **Done when**:
    - [x] Students have a working method-comparison workbook
    - [x] The workbook reflects the same method logic already learned by hand

- [x] 3.2 **Lesson 06** - Implement excel-lessons skill
  - [x] 3.2.1 Update lesson-data.ts for Lesson 06
  - [x] 3.2.2 Implement Phase 1-6 with dynamic method selection, turnover analysis, and investor-ready explanation
    - Phase 1: Open with investor scenario where method choice and turnover matter, make tool feel necessary
    - Phase 2: Name dynamic selection/turnover pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task requiring short defense of recommended inventory method
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.2.3 Teach the exact logic for dynamic method switching and comparison displays
  - [x] 3.2.4 Keep statement impact visible in the workbook outputs
  - [x] 3.2.5 Phase 5 must require a short defense of the recommended inventory method
  - **Done when**:
    - [x] The workbook supports comparison across methods and shows the business impact clearly
    - [x] Students can explain their method choice using workbook evidence

### Phase 4: Lessons 07-10 (Project)
- [x] 4.1 **Lesson 07** - Implement project-rehearsal skill
  - [x] 4.1.1 Update lesson-data.ts for Lesson 07
  - [x] 4.1.2 Implement Phase 1-6 with shared teacher data
    - Phase 1: Frame as final guided rehearsal, explain same-data purpose, contrast with independent project
    - Phase 2: Provide shared workbook download path, state same-data requirement, name each sheet/evidence block, define success
    - Phase 3: Keep data constant, use previews/guided routines to trace logic chain, ask where recommendation comes from, ask what makes artifact weak
    - Phase 4: Continue shared workbook, keep teacher-guided, complete weak spots, require recommendation and risk statement, ask what features to transfer
    - Phase 5: Short comprehension/transfer check, peer audit routine tied to Definition of Done, require strength and improvement
    - Phase 6: Reflect on rehearsal, name what must carry into project, explain what changes next lesson
  - [x] 4.1.3 Use one shared dataset and one shared workbook for the whole class
  - [x] 4.1.4 Trace the final inventory recommendation back to workbook evidence
  - [x] 4.1.5 Include a Definition of Done and peer-audit routine
  - **Done when**:
    - [x] Students know the exact workbook structure they must reuse in the project
    - [x] Peer critique focuses on evidence chain, method fit, and clarity

- [x] 4.2 **Lesson 08** - Implement group-project skill
  - [x] 4.2.1 Update milestone page, lesson-data.ts for Lesson 08
  - [x] 4.2.2 Implement kickoff with group-specific inventory data
    - Assign each group its own inventory dataset/starter workbook
    - Explain business scenario, constraints, target outcome
    - Require teams to rename, save, organize correct workbook
    - Start first required sheets/sections
    - Define milestone 1 acceptance criteria
  - [x] 4.2.3 Assign each group its own inventory dataset or starter workbook
  - [x] 4.2.4 Keep workbook architecture identical to Lesson 07
  - [x] 4.2.5 Remove all depreciation references from Lesson 08 content
  - **Done when**:
    - [x] Each team is working in the correct workbook
    - [x] Initial inventory-analysis work is complete

- [x] 4.3 **Lesson 09** - Implement group-project skill
  - [x] 4.3.1 Update milestone page, lesson-data.ts for Lesson 09
  - [x] 4.3.2 Implement completion and rehearsal
    - Continue same workbook from Lesson 08
    - Complete remaining sheets/evidence blocks
    - Require scenario testing, checks, dashboard completion
    - Require short recommendation structure (claim, evidence, risk)
    - Include peer critique and revision
    - Define milestone 2 acceptance criteria
  - [x] 4.3.3 Continue the same workbook from Lesson 08
  - [x] 4.3.4 Require peer critique and revision
  - [x] 4.3.5 Make teams cite exact workbook evidence for inventory, COGS, and turnover claims
  - **Done when**:
    - [x] The workbook is complete and readable
    - [x] The team can defend a method recommendation with evidence

- [ ] 4.4 **Lesson 10** - Implement group-project skill
  - [ ] 4.4.1 Update milestone page, lesson-data.ts for Lesson 10
  - [ ] 4.4.2 Implement final presentation and submission
    - Require final polish of workbook and presentation notes
    - Make audience, presentation standard, submission standard explicit
    - Include final checklist and timing guidance
    - Require reflection after presentation or submission
  - [ ] 4.4.3 Make final deliverables explicit
  - [ ] 4.4.4 Require final workbook polish and submission
  - [ ] 4.4.5 End with reflection on method choice, evidence, and reporting credibility
  - **Done when**:
    - [ ] Final deliverables are submitted
    - [ ] Reflection captures what made the recommendation believable

### Phase 5: Verification & Polish
- [ ] 5.1 Verify all lesson-data.ts files are updated
- [ ] 5.2 Verify inventory-only content (no depreciation references remain)
- [ ] 5.3 Verify alignment between page content, workbook downloads, assessment language
- [ ] 5.4 Run `npm run lint` to check for errors
- [ ] 5.5 Document any component changes in MCP knowledge base

## Legacy Resource Plan
- `unit07-lesson01-ending-inventory-launch.csv`
- `unit07-lesson02-inventory-flow-practice.csv`
- `unit07-lesson03-fifo-lifo-practice.csv`
- `unit07-lesson04-specific-weighted-practice.csv`
- `unit07-lesson04-student.xlsx`
- `unit07-lesson04-teacher.xlsx`
- `unit07-lesson04-tutorial.md`
- `unit07-lesson05-method-compare-practice.csv`
- `unit07-lesson05-student.xlsx`
- `unit07-lesson05-teacher.xlsx`
- `unit07-lesson05-tutorial.md`
- `unit07-lesson06-inventory-dashboard-practice.csv`
- `unit07-lesson06-student.xlsx`
- `unit07-lesson06-teacher.xlsx`
- `unit07-lesson06-tutorial.md`
- `unit07-lesson07-shared-rehearsal.csv`
- `unit07-lesson07-student.xlsx`
- `unit07-lesson07-teacher.xlsx`
- `unit07-lesson07-tutorial.md`
- `unit07-pbl-asset-inventory-g1.csv`
- `unit07-pbl-asset-inventory-g2.csv`
- `unit07-pbl-asset-inventory-g3.csv`
- `unit07-pbl-asset-inventory-g4.csv`

## Definition of Done for the Unit Rewrite
- Unit 07 is inventory-only.
- The ending inventory formula is visible throughout the unit.
- Lessons 1-6 escalate cleanly from concept to high-complexity Excel.
- All four inventory methods are taught: FIFO, LIFO, Specific Identification, Weighted Average.
- Lesson 7 clearly rehearses the exact workflow used in Lessons 8-10.
- Lessons 8-10 use four different businesses and four different datasets.
- Lessons 8-10 remain one-phase group project lessons by design.
- Phase pages are textbook-first, business-authentic, and aligned to the new inventory scope.
