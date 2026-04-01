# Implementation Plan: Unit 04 Improvement

## Phase 1: Setup & Skills Loading
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

## Phase 2: Lessons 01-04 (Textbook-First)
- [ ] 2.1 **Lesson 01** - Implement launch-lesson skill
  - [x] 2.1.1 Load launch-lesson skill and review requirements
  - [x] 2.1.2 Update lesson-data.ts for Lesson 01
  - [x] 2.1.3 Implement phases 2-6 with weekend decision frame and scoreboard
  - [x] 2.1.4 Keep Phase 4 bounded - no workbook build steps yet
  - **Done**:
    - [x] Students can explain the business problem before any calculations begin
    - [x] The unit scoreboard or decision frame is visible

- [x] 2.2 **Lesson 02** - Implement accounting-principles skill
  - [x] 2.2.1 Update lesson-data.ts for Lesson 02
  - [x] 2.2.2 Implement Phase 1-6 with descriptive statistics
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and strong representational supports
    - Phase 3: Add meaningful complication, reduce prompts, shift toward cleaner statistical layouts, ask students to explain choices
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on definitions, method recognition, reasoning, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, identify method signals, preview next principle
  - [x] 2.2.3 Use concrete café examples before abstract statistical language
  - [x] 2.2.4 Keep strong representational supports in Phases 2-3
  - [x] 2.2.5 Use Phase 4 for repeated reasoning on center and spread
  - **Done when**:
    - [x] Students can explain average, median, and spread in business terms
    - [x] Phase 5 checks interpretation, not Excel tools

- [x] 2.3 **Lesson 03** - Implement accounting-principles skill
  - [x] 2.3.1 Update lesson-data.ts for Lesson 03
  - [x] 2.3.2 Implement Phase 1-6 with outliers and data quality
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and visual representations
    - Phase 3: Add meaningful complication (more complex data), reduce prompts, shift toward authentic statistical notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on outlier detection, data quality, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview next lesson
  - [x] 2.3.3 Keep the lesson textbook-first and concept-heavy
  - [x] 2.3.4 Use visible examples of bad or extreme café weekends
  - [x] 2.3.5 Make students justify whether a value should stay or be flagged
  - **Done when**:
    - [x] Students can explain why an outlier matters to planning
    - [x] Students can defend a data-cleaning decision

- [x] 2.4 **Lesson 04** - Implement accounting-principles skill
  - [x] 2.4.1 Update lesson-data.ts for Lesson 04
  - [x] 2.4.2 Implement Phase 1-6 with forecasting logic
  - [x] 2.4.3 Keep this lesson non-Excel and textbook-first
  - [x] 2.4.4 Use representational supports for trend, fit, and business interpretation
  - [x] 2.4.5 Use Phase 4 for repeated forecast interpretation under reduced scaffolding
  - **Done when**:
    - [x] Students can explain what the forecast means and what it does not promise
    - [x] The closing phase points cleanly to the Excel build lessons

## Phase 3: Lessons 05-06 (Excel)
- [ ] 3.1 **Lesson 05** - Implement excel-lessons skill
  - [x] 3.1.1 Update lesson-data.ts for Lesson 05
  - [x] 3.1.2 Implement Phase 1-6 with data cleaning and analysis
    - Phase 1: Open with business scenario where data cleaning matters, make tool feel necessary
    - Phase 2: Name data-cleaning pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task focusing on trustworthiness and business communication
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.1.3 Teach the exact tool anatomy for cleaning and analysis
  - [x] 3.1.4 Include a safe rehearsal before the workbook or tool sprint
  - [x] 3.1.5 Require a real cleaned dataset and first statistical outputs
  - **Done when**:
    - [x] The dataset is cleaned and analysis-ready
    - [x] Students can explain why each Excel step matters

- [x] 3.2 **Lesson 06** - Implement excel-lessons skill
  - [x] 3.2.1 Update lesson-data.ts for Lesson 06
  - [x] 3.2.2 Implement Phase 1-6 with visualizations and recommendation
    - Phase 1: Open with business scenario where visualizations matter, make tool feel necessary
    - Phase 2: Name visualization/recommendation pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task requiring explanation and trustworthiness
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.2.3 Create charts or visuals tied directly to the cleaned data
  - [x] 3.2.4 Require one concise recommendation supported by numbers
  - [x] 3.2.5 Keep Phase 5 focused on explanation and trustworthiness
  - **Done when**:
    - [x] The workbook or deliverable shows a clear visual story
    - [x] Students can explain the recommendation using evidence

## Phase 4: Lessons 07-10 (Project)
- [x] 4.1 **Lesson 07** - Implement project-rehearsal skill
  - [x] 4.1.1 Update lesson-data.ts for Lesson 07
  - [x] 4.1.2 Implement Phase 1-6 with shared teacher data
    - Phase 1: Frame as final guided rehearsal, explain same-data purpose, contrast with independent project
    - Phase 2: Provide shared workbook download path, state same-data requirement, name each sheet/evidence block, define success
    - Phase 3: Keep data constant, use previews/guided routines to trace logic chain, ask where recommendation comes from, ask what makes artifact weak
    - Phase 4: Continue shared workbook, keep teacher-guided, complete weak spots, require recommendation and risk statement, ask what features to transfer
    - Phase 5: Short comprehension/transfer check, peer audit routine tied to Definition of Done, require strength and improvement
    - Phase 6: Reflect on rehearsal, name what must carry into project, explain what changes next lesson
  - [x] 4.1.3 Use one teacher dataset for the whole class
  - [x] 4.1.4 Trace the recommendation back to the cleaned data and charts
  - [x] 4.1.5 Include a clear audit or peer-review routine
  - **Done when**:
    - [x] Students know the project structure they must reuse
    - [x] The class shares one quality standard for evidence and visuals

- [ ] 4.2 **Lesson 08** - Implement group-project skill
  - [ ] 4.2.1 Update milestone page, lesson-data.ts for Lesson 08
  - [ ] 4.2.2 Implement kickoff with group-specific datasets
    - Assign each group its own dataset/starter workbook
    - Explain business scenario, constraints, target outcome
    - Require teams to rename, save, organize correct workbook
    - Start first required sheets/sections
    - Define milestone 1 acceptance criteria
  - [ ] 4.2.3 Assign each group its own dataset
  - [ ] 4.2.4 Keep the workbook or deliverable structure identical to Lesson 07
  - **Done when**:
    - [ ] Each team is working with the correct data
    - [ ] Initial project setup is complete

- [ ] 4.3 **Lesson 09** - Implement group-project skill
  - [ ] 4.3.1 Update milestone page, lesson-data.ts for Lesson 09
  - [ ] 4.3.2 Implement completion and rehearsal
    - Continue same workbook from Lesson 08
    - Complete remaining sheets/evidence blocks
    - Require scenario testing, checks, dashboard completion
    - Require short recommendation structure (claim, evidence, risk)
    - Include peer critique and revision
    - Define milestone 2 acceptance criteria
  - [ ] 4.3.3 Finish calculations, charts, and the final recommendation
  - [ ] 4.3.4 Require peer critique and revision
  - [ ] 4.3.5 Make teams cite exact data evidence in their explanation
  - **Done when**:
    - [ ] The project artifact is complete and readable
    - [ ] The team can deliver a short evidence-based pitch

- [ ] 4.4 **Lesson 10** - Implement group-project skill
  - [ ] 4.4.1 Update milestone page, lesson-data.ts for Lesson 10
  - [ ] 4.4.2 Implement final presentation and submission
    - Require final polish of workbook and presentation notes
    - Make audience, presentation standard, submission standard explicit
    - Include final checklist and timing guidance
    - Require reflection after presentation or submission
  - [ ] 4.4.3 Make final deliverables explicit
  - [ ] 4.4.4 Require polished visuals and speaking notes
  - [ ] 4.4.5 End with reflection on data quality, analysis, and communication
  - **Done when**:
    - [ ] Final deliverables are submitted
    - [ ] Reflection captures what made the recommendation believable

## Phase 5: Verification & Polish
- [ ] 5.1 Verify all lesson-data.ts files are updated
- [ ] 5.2 Verify café operations problem visible in every lesson
- [ ] 5.3 Verify alignment between page content, workbook downloads, assessment language
- [ ] 5.4 Run `npm run lint` to check for errors
- [ ] 5.5 Document any component changes in MCP knowledge base
