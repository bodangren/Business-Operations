# Implementation Plan: Unit 01 Improvement

## Track ID: unit01_20260330

### Phase 1: Setup & Skills Loading
- [x] 1.1 Load `agents/skills/launch-lesson/SKILL.md` and review requirements
  - Understand the launch-lesson phase contract
  - Review component rules for launch lessons
  - Review writing rules specific to launch lessons
- [x] 1.2 Load `agents/skills/accounting-principles/SKILL.md` and review requirements
  - Understand the accounting-principles phase contract
  - Review CRA (Concrete-Representational-Abstract) guidance
  - Review phase-4 component contract
- [x] 1.3 Load `agents/skills/excel-lessons/SKILL.md` and review requirements
  - Understand the excel-lessons phase contract
  - Review SpreadsheetWrapper rules and formula guidance
  - Review simulator rules and workbook continuity rules
- [x] 1.4 Load `agents/skills/project-rehearsal/SKILL.md` and review requirements
  - Understand the project-rehearsal phase contract
  - Review shared artifact rules
  - Review peer audit rules and transfer rules
- [x] 1.5 Load `agents/skills/group-project/SKILL.md` and review requirements
  - Understand the group-project milestone contract
  - Review dataset and workbook assignment rules
  - Review recommendation rules and peer feedback rules

### Phase 2: Lessons 01-03 (Textbook-First)
- [x] 2.1 **Lesson 01** - Implement launch-lesson skill
  - [x] 2.1.1 Update lesson-data.ts for Lesson 01
  - [x] 2.1.2 Implement Phase 1 with Sarah's interview video and investor-trust problem
    - Use the shared `VideoPlayer` component
    - Include title, description, YouTube ID, duration, and full transcript data
    - Create business tension and credibility
    - Follow with one short processing move (risk triage, prediction, quick comprehension, or turn-and-talk)
  - [x] 2.1.3 Implement Phase 2-6 with accounting equation as visible scoreboard
    - Phase 2: Name the scoreboard explicitly, show main moving parts, use one bounded interactive
    - Phase 3: Use shared dataset/simulation, predict before reveal, show before/after changes
    - Phase 4: Keep task constrained, allow 1-2 meaningful choices, show consequences visibly
    - Phase 5: Short MCQ exit ticket assessing founder problem, scoreboard, core distinctions
    - Phase 6: Restate enduring formula, summarize understanding, preview next lesson, include reflection
  - [x] 2.1.4 Keep Phase 4 bounded - no workbook build steps yet
   - **Done when:**
     - [x] Students can state why "clean books" matter to an investor
     - [x] The lesson previews debits/credits without teaching them formally yet

- [x] 2.2 **Lesson 02** - Implement accounting-principles skill
  - [x] 2.2.1 Update lesson-data.ts for Lesson 02
  - [x] 2.2.2 Implement Phase 1-6 with concrete startup transactions before abstract account labels
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and strong representational supports
    - Phase 3: Add meaningful complication, reduce prompts, shift toward cleaner accounting layouts, ask students to explain choices
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on definitions, method recognition, reasoning, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, identify method signals, preview next principle
  - [x] 2.2.3 Include strong representational supports in Phases 2-3
  - [x] 2.2.4 Make Phase 4 a repeatable classification/practice loop
  - **Done when**:
    - [x] Students can explain how a transaction changes assets, liabilities, or equity
    - [x] Phase 5 checks understanding of transaction effects, not spreadsheet steps

- [x] 2.3 **Lesson 03** - Implement accounting-principles skill
  - [x] 2.3.1 Update lesson-data.ts for Lesson 03
  - [x] 2.3.2 Implement Phase 1-6 with debits, credits, and trial-balance logic
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name debit/credit rules clearly, model procedure step-by-step, explain why each step exists, use T-accounts and mini ledgers
    - Phase 3: Add meaningful complication (more complex transactions), reduce prompts, shift toward authentic accounting notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on debit/credit rules, trial balance logic, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview first Excel build lesson
  - [x] 2.3.3 Keep textbook-first and methodical approach
  - [x] 2.3.4 Use mini ledger/trial-balance forms as abstract stage
  - [x] 2.3.5 Make Phase 4 a deliberate-practice loop on posting and balance checks
  - **Done when**:
    - [x] Students can post transactions and explain why the trial balance should tie out
    - [x] The closing phase clearly hands off to the first Excel build lesson

### Phase 3: Lessons 04-06 (Excel-Focused)
- [x] 3.1 **Lesson 04** - Implement excel-lessons skill
  - [x] 3.1.1 Update lesson-data.ts for Lesson 04
  - [x] 3.1.2 Implement Phase 1-6 with Excel workbook structure
    - Phase 1: Open with business/investor scenario where speed/clarity/flexibility matters, make tool feel necessary, connect to existing workbook
    - Phase 2: Name tool/workbook pattern clearly, explain feature parts, show where tool lives in Excel, teach common failure mode
    - Phase 3: Use custom simulator/manual logic trainer mirroring real workbook logic, give immediate feedback, make bridge to phase 4 explicit
    - Phase 4: State exact starting workbook/download path, state output, include reference model, provide short build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical/conceptual check, brief artifact task focusing on trustworthiness and business communication
    - Phase 6: Reflect on tool use and professional judgment, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.1.3 Phase 2: Teach workbook anatomy and naming conventions
  - [x] 3.1.4 Phase 3: Rehearse table structure or formula logic before real workbook sprint
  - [x] 3.1.5 Phase 4: Produce clean starter ledger workbook, not just a mockup
  - **Done when**:
    - [x] Students finish a readable ledger structure in Excel
    - [x] The workbook state is ready for formula-based self-auditing in Lesson 05

- [ ] 3.2 **Lesson 05** - Implement excel-lessons skill
  - [ ] 3.2.1 Update lesson-data.ts for Lesson 05
  - [ ] 3.2.2 Implement Phase 1-6 with self-auditing formulas
    - Phase 1: Open with business scenario where self-auditing matters, make tool feel necessary
    - Phase 2: Name self-auditing formula pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task explaining which check matters most
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [ ] 3.2.3 Teach totals, debit/credit checks, red-flag formulas
  - [ ] 3.2.4 Keep SpreadsheetWrapper previews as static references, not live unsupported formulas
  - [ ] 3.2.5 Require short artifact task in Phase 5 explaining which check matters most
  - **Done when**:
    - [ ] The workbook catches common posting or balance errors
    - [ ] Students can explain how the checks prove reliability

- [ ] 3.3 **Lesson 06** - Implement excel-lessons skill
  - [ ] 3.3.1 Update lesson-data.ts for Lesson 06
  - [ ] 3.3.2 Implement Phase 1-6 with investor-facing summary
    - Phase 1: Open with investor scenario where summary matters, make tool feel necessary
    - Phase 2: Name summary/dashboard pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task requiring workbook defense, not another build sprint
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [ ] 3.3.3 Build summary layer showing accuracy and readiness quickly
  - [ ] 3.3.4 Add investor-ready formatting and labels
  - [ ] 3.3.5 Phase 5: Brief defense of the workbook, not another build sprint
  - **Done when**:
    - [ ] The workbook has a clear summary or dashboard layer
    - [ ] Students can cite workbook evidence in plain language

### Phase 4: Lessons 07-10 (Project)
- [ ] 4.1 **Lesson 07** - Implement project-rehearsal skill
  - [ ] 4.1.1 Update lesson-data.ts for Lesson 07
  - [ ] 4.1.2 Implement Phase 1-6 with shared teacher data
    - Phase 1: Frame as final guided rehearsal, explain same-data purpose, contrast with independent project
    - Phase 2: Provide shared workbook download path, state same-data requirement, name each sheet/evidence block, define success
    - Phase 3: Keep data constant, use previews/guided routines to trace logic chain, ask where recommendation comes from, ask what makes artifact weak
    - Phase 4: Continue shared workbook, keep teacher-guided, complete weak spots, require recommendation and risk statement, ask what features to transfer
    - Phase 5: Short comprehension/transfer check, peer audit routine tied to Definition of Done, require strength and improvement
    - Phase 6: Reflect on rehearsal, name what must carry into project, explain what changes next lesson
  - [ ] 4.1.3 Use one shared workbook structure and dataset for class
  - [ ] 4.1.4 Include Definition of Done and peer audit routine
  - **Done when**:
    - [ ] Every student knows the structure they must reuse in the project
    - [ ] Peer audit focuses on evidence, logic chain, and clarity

- [ ] 4.2 **Lesson 08** - Implement group-project skill
  - [ ] 4.2.1 Update milestone page, lesson-data.ts for Lesson 08
  - [ ] 4.2.2 Implement kickoff with group-specific startup data
    - Assign each group its own dataset/starter workbook
    - Explain business scenario, constraints, target outcome
    - Require teams to rename, save, organize correct workbook
    - Start first required sheets/sections
    - Define milestone 1 acceptance criteria
  - [ ] 4.2.3 Assign each group its own dataset or starter workbook
  - [ ] 4.2.4 Keep tab structure identical to Lesson 07
  - **Done when**:
    - [ ] Each team has the correct workbook open and renamed
    - [ ] Early setup and analysis sheets are complete

- [ ] 4.3 **Lesson 09** - Implement group-project skill
  - [ ] 4.3.1 Update milestone page, lesson-data.ts for Lesson 09
  - [ ] 4.3.2 Implement completion and rehearsal
    - Continue same workbook from Lesson 08
    - Complete remaining sheets/evidence blocks
    - Require scenario testing, checks, dashboard completion
    - Require short recommendation structure (claim, evidence, risk)
    - Include peer critique and revision
    - Define milestone 2 acceptance criteria
  - [ ] 4.3.3 Continue same workbook from Lesson 08
  - [ ] 4.3.4 Require at least three cited numbers from workbook
  - **Done when**:
    - [ ] The workbook is complete and readable
    - [ ] The team can deliver a claim-evidence-risk explanation

- [ ] 4.4 **Lesson 10** - Implement group-project skill
  - [ ] 4.4.1 Update milestone page, lesson-data.ts for Lesson 10
  - [ ] 4.4.2 Implement final presentation and submission
    - Require final polish of workbook and presentation notes
    - Make audience, presentation standard, submission standard explicit
    - Include final checklist and timing guidance
    - Require reflection after presentation or submission
  - [ ] 4.4.3 Make submission requirements explicit
  - [ ] 4.4.4 End with reflection on trust, control, workbook design
  - **Done when**:
    - [ ] Final workbook and presentation artifact are submitted
    - [ ] Reflection captures what the team would keep or change next time

### Phase 5: Verification & Polish
- [ ] 5.1 Verify all lesson-data.ts files are updated
- [ ] 5.2 Verify Sarah/TechStart continuity across all lessons
- [ ] 5.3 Verify alignment between page content, workbook downloads, assessment language
- [ ] 5.4 Run `npm run lint` to check for errors
- [ ] 5.5 Document any component changes in MCP knowledge base
