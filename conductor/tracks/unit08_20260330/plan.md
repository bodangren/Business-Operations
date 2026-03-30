# Implementation Plan: Unit 08 Improvement

## Track ID: unit08_20260330

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
- [ ] 1.6 Rewrite Unit 08 copy as depreciation-focused
  - Remove VC-pitch, broad startup-model, and scenario-manager-first language
  - Keep the depreciation formula and book-value logic visible
  - Update Sarah narrative so TechStart is expanding and buying long-term assets
  - Remove Unit 07 depreciation references and make Unit 08 own that content completely

### Phase 2: Lessons 01-04 (Textbook-First)
- [ ] 2.1 **Lesson 01** - Implement launch-lesson skill
  - [ ] 2.1.1 Update lesson-data.ts for Lesson 01
  - [ ] 2.1.2 Implement Phase 1 with Sarah's interview video and new-equipment purchase problem
    - Use the shared `VideoPlayer` component
    - Include title, description, YouTube ID, duration, and full transcript data
    - Create business tension and credibility
    - Follow with one short processing move (risk triage, prediction, quick comprehension, or turn-and-talk)
  - [ ] 2.1.3 Implement Phase 2-6 with cost, accumulated depreciation, and book value scoreboard visible
    - Phase 2: Name the scoreboard explicitly (cost, accumulated depreciation, book value), show main moving parts, use one bounded interactive
    - Phase 3: Use shared dataset/simulation, predict before reveal, show before/after changes
    - Phase 4: Keep task constrained, allow 1-2 meaningful choices, show consequences visibly
    - Phase 5: Short MCQ exit ticket assessing founder problem, scoreboard, core distinctions
    - Phase 6: Restate enduring formula (Book Value = Cost - Accumulated Depreciation), summarize understanding, preview next lesson, include reflection
  - [ ] 2.1.4 Keep Phase 4 bounded - no workbook build steps yet
  - **Done when**:
    - [ ] Students can explain why long-term asset costs are not treated like everyday expenses
    - [ ] The lesson points clearly to capitalization and depreciation logic next

- [ ] 2.2 **Lesson 02** - Implement accounting-principles skill
  - [ ] 2.2.1 Update lesson-data.ts for Lesson 02
  - [ ] 2.2.2 Implement Phase 1-6 with capitalization vs expense, useful life, salvage value, and accumulated depreciation
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and concrete asset-purchase examples before abstract definitions
    - Phase 3: Add meaningful complication (mixed asset classifications or partial-year reasoning), reduce prompts, shift toward cleaner depreciation-style layouts, ask students to explain choices
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on depreciation vocabulary and reasoning, not Excel tools
    - Phase 6: Reflect on confidence and understanding, connect to business problem, identify method signals, preview next principle
  - [ ] 2.2.3 Use concrete asset-purchase examples before abstract definitions
  - [ ] 2.2.4 Keep strong representational supports in Phases 2-3
  - [ ] 2.2.5 Use Phase 4 for repeated classification and book-value reasoning
  - **Done when**:
    - [ ] Students can explain when a cost becomes an asset
    - [ ] Phase 5 checks depreciation vocabulary and reasoning, not Excel tools

- [ ] 2.3 **Lesson 03** - Implement accounting-principles skill
  - [ ] 2.3.1 Update lesson-data.ts for Lesson 03
  - [ ] 2.3.2 Implement Phase 1-6 with straight-line depreciation and statement impact
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name straight-line method clearly, model procedure step-by-step with visible intermediate values, explain why each step exists, use worked examples
    - Phase 3: Add meaningful complication (partial-year depreciation or multiple assets), reduce prompts, shift toward authentic depreciation notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on straight-line calculation and statement impact, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview next lesson
  - [ ] 2.3.3 Teach the straight-line method explicitly with visible intermediate values
  - [ ] 2.3.4 Connect depreciation expense to the income statement and book value to the balance sheet
  - [ ] 2.3.5 Make Phase 4 a deliberate-practice loop on straight-line schedules
  - **Done when**:
    - [ ] Students can calculate straight-line depreciation manually
    - [ ] Students can explain how the method changes statements over time

- [ ] 2.4 **Lesson 04** - Implement accounting-principles skill
  - [ ] 2.4.1 Update lesson-data.ts for Lesson 04
  - [ ] 2.4.2 Implement Phase 1-6 with Double-Declining Balance and method comparison
    - Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - Phase 2: Name DDB method clearly, model procedure step-by-step, explain why each step exists, use worked examples and compare with straight-line in business terms
    - Phase 3: Add meaningful complication (switching to straight-line mid-schedule or salvage value floors), reduce prompts, shift toward authentic depreciation notation
    - Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - Phase 5: Short MCQ exit ticket on DDB calculation and method comparison reasoning, misconceptions
    - Phase 6: Reflect on confidence and understanding, connect to business problem, preview first Excel build lesson
  - [ ] 2.4.3 Keep this lesson non-Excel and textbook-first
  - [ ] 2.4.4 Teach DDB explicitly and compare with straight-line in business terms
  - [ ] 2.4.5 Use Phase 4 for repeated mixed-method comparison with reduced scaffolding
  - **Done when**:
    - [ ] Students can calculate DDB by hand
    - [ ] Students can explain when accelerated depreciation makes more sense than straight-line

### Phase 3: Lessons 05-06 (Excel)
- [ ] 3.1 **Lesson 05** - Implement excel-lessons skill
  - [ ] 3.1.1 Update lesson-data.ts for Lesson 05
  - [ ] 3.1.2 Implement Phase 1-6 with asset register and depreciation schedule workbook
    - Phase 1: Open with business/investor scenario where professional asset tracking matters, make tool feel necessary, connect to existing workbook
    - Phase 2: Name tool/workbook pattern clearly, explain feature parts, show where tool lives in Excel, teach common failure mode
    - Phase 3: Use custom simulator/manual logic trainer mirroring real workbook logic, give immediate feedback, make bridge to phase 4 explicit
    - Phase 4: State exact starting workbook/download path, state output, include reference model, provide short build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical/conceptual check, brief artifact task focusing on trustworthiness and business communication
    - Phase 6: Reflect on tool use and professional judgment, name what student can now do faster/reliably, preview next workbook layer
  - [ ] 3.1.3 Teach workbook anatomy and the register/schedule relationship directly
  - [ ] 3.1.4 Include a safe rehearsal that mirrors the live workbook logic
  - [ ] 3.1.5 Require a real workbook artifact by the end of Phase 4
  - **Done when**:
    - [ ] Students have a working asset register and depreciation schedule in Excel
    - [ ] The workbook reflects the same logic already learned manually

- [ ] 3.2 **Lesson 06** - Implement excel-lessons skill
  - [ ] 3.2.1 Update lesson-data.ts for Lesson 06
  - [ ] 3.2.2 Implement Phase 1-6 with method comparison, statement impact, and investor-ready summary
    - Phase 1: Open with investor scenario where method comparison matters, make tool feel necessary
    - Phase 2: Name comparison/summary pattern, explain parts, teach common failure mode
    - Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - Phase 5: Short technical check, brief artifact task requiring short defense of recommended depreciation method
    - Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [ ] 3.2.3 Teach the exact logic for comparing methods and summarizing impact
  - [ ] 3.2.4 Add workbook checks so accumulated depreciation and book value stay believable
  - [ ] 3.2.5 Phase 5 must require a short defense of the recommended depreciation method
  - **Done when**:
    - [ ] The workbook compares methods clearly and shows statement impact
    - [ ] Students can defend a depreciation policy using workbook evidence

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
  - [ ] 4.1.3 Use one shared fixed-asset dataset and one shared workbook for the whole class
  - [ ] 4.1.4 Trace the final recommendation back to the asset register, schedule, and statement-impact evidence
  - [ ] 4.1.5 Include a Definition of Done and peer-audit routine
  - **Done when**:
    - [ ] Students know the exact workbook structure they must reuse in the project
    - [ ] Peer critique focuses on evidence chain, method fit, and clarity

- [ ] 4.2 **Lesson 08** - Implement group-project skill
  - [ ] 4.2.1 Update milestone page, lesson-data.ts for Lesson 08
  - [ ] 4.2.2 Implement kickoff with group-specific fixed-asset data
    - Assign each group its own fixed-asset dataset/starter workbook
    - Explain business scenario, constraints, target outcome
    - Require teams to rename, save, organize correct workbook
    - Start first required sheets/sections
    - Define milestone 1 acceptance criteria
  - [ ] 4.2.3 Assign each group its own fixed-asset dataset or starter workbook
  - [ ] 4.2.4 Keep workbook architecture identical to Lesson 07
  - **Done when**:
    - [ ] Each team is working in the correct workbook
    - [ ] Initial asset-register and schedule work is complete

- [ ] 4.3 **Lesson 09** - Implement group-project skill
  - [ ] 4.3.1 Update milestone page, lesson-data.ts for Lesson 09
  - [ ] 4.3.2 Implement completion and rehearsal
    - Continue same workbook from Lesson 08
    - Complete remaining sheets/evidence blocks
    - Require scenario testing, checks, dashboard completion
    - Require short recommendation structure (claim, evidence, risk)
    - Include peer critique and revision
    - Define milestone 2 acceptance criteria
  - [ ] 4.3.3 Continue the same workbook from Lesson 08
  - [ ] 4.3.4 Require peer critique and revision
  - [ ] 4.3.5 Make teams cite exact workbook evidence for book value, expense timing, and method-choice claims
  - **Done when**:
    - [ ] The workbook is complete and readable
    - [ ] The team can defend a depreciation recommendation with evidence

- [ ] 4.4 **Lesson 10** - Implement group-project skill
  - [ ] 4.4.1 Update milestone page, lesson-data.ts for Lesson 10
  - [ ] 4.4.2 Implement final presentation and submission
    - Require final polish of workbook and presentation notes
    - Make audience, presentation standard, submission standard explicit
    - Include final checklist and timing guidance
    - Require reflection after presentation or submission
  - [ ] 4.4.3 Make final deliverables explicit
  - [ ] 4.4.4 Require final workbook polish and submission
  - [ ] 4.4.5 End with reflection on asset tracking, method choice, and reporting credibility
  - **Done when**:
    - [ ] Final deliverables are submitted
    - [ ] Reflection captures what made the recommendation trustworthy

### Phase 5: Verification & Polish
- [ ] 5.1 Verify all lesson-data.ts files are updated
- [ ] 5.2 Verify depreciation-focused content (no startup model or VC-pitch references remain)
- [ ] 5.3 Verify alignment between page content, workbook downloads, assessment language
- [ ] 5.4 Run `npm run lint` to check for errors
- [ ] 5.5 Document any component changes in MCP knowledge base
