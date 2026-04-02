# Implementation Plan: Unit 06 Improvement

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
- [x] 2.1 **Lesson 01** - Implement launch-lesson skill
  - [x] 2.1.1 Update lesson-data.ts for Lesson 01
  - [x] 2.1.2 Implement Phase 1 with Sarah's interview video and pricing-pressure story
  - [x] 2.1.3 Implement Phase 2-6 with pricing decision frame visible
  - [x] 2.1.4 Keep Phase 4 bounded - no Excel build moves yet
  - **Done when**:
    - [x] Students can explain why price is both a math decision and a market decision
    - [x] The lesson points cleanly to markup and margin logic next

- [x] 2.2 **Lesson 02** - Implement accounting-principles skill
  - [x] 2.2.1 Update lesson-data.ts for Lesson 02
  - [x] 2.2.2 Implement Phase 1-6 with markup vs margin
    - [x] Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - [x] Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and selling-price/cost examples
    - [x] Phase 3: Add meaningful complication (more complex pricing), reduce prompts, shift toward cleaner pricing layouts
    - [x] Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - [x] Phase 5: Short MCQ exit ticket on markup/margin reasoning and method choice, not spreadsheet features
    - [x] Phase 6: Reflect on confidence and understanding, connect to business problem, identify method signals, preview next principle
  - [x] 2.2.3 Use concrete selling-price and cost examples before formulas
  - [x] 2.2.4 Keep strong representational supports in Phases 2-3
  - [x] 2.2.5 Make Phase 4 a repeatable markup-vs-margin mastery loop
  - **Done when**:
    - [x] Students can calculate and distinguish markup and margin accurately
    - [x] Phase 5 checks reasoning and method choice, not spreadsheet features

- [x] 2.3 **Lesson 03** - Implement accounting-principles skill
  - [x] 2.3.1 Update lesson-data.ts for Lesson 03
  - [x] 2.3.2 Implement Phase 1-6 with break-even and contribution margin
    - [x] Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - [x] Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and units/dollars/contribution logic
    - [x] Phase 3: Add meaningful complication (more complex CVP scenarios), reduce prompts, shift toward authentic pricing notation
    - [x] Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - [x] Phase 5: Short MCQ exit ticket on break-even calculation and contribution margin interpretation
    - [x] Phase 6: Reflect on confidence and understanding, connect to business problem, preview next lesson
  - [x] 2.3.3 Keep the lesson textbook-first and visual
  - [x] 2.3.4 Use representational supports for units, dollars, and contribution logic
  - [x] 2.3.5 Make students explain what shifts break-even and why
  - **Done when**:
    - [x] Students can calculate break-even and interpret the result
    - [x] Students can connect contribution margin to pricing choices

- [x] 2.4 **Lesson 04** - Implement accounting-principles skill
  - [x] 2.4.1 Update lesson-data.ts for Lesson 04
  - [x] 2.4.2 Implement Phase 1-6 with scenario comparison
    - [x] Phase 1: Reconnect to prior lesson, show friction point, use one short launch move
    - [x] Phase 2: Name method clearly, model procedure step-by-step, explain why each step exists, use worked examples and structured tables
    - [x] Phase 3: Add meaningful complication (more complex scenarios), reduce prompts, shift toward authentic pricing notation
    - [x] Phase 4: Same procedure each round, vary numbers algorithmically, automatic checking, feedback after submission, brief reteach guidance, define mastery target
    - [x] Phase 5: Short MCQ exit ticket on scenario comparison and sensitivity reasoning
    - [x] Phase 6: Reflect on confidence and understanding, connect to business problem, preview first Excel build lesson
  - [x] 2.4.3 Keep this lesson non-Excel and textbook-first
  - [x] 2.4.4 Use structured tables and comparison views to analyze multiple pricing scenarios by hand
  - [x] 2.4.5 Use Phase 4 for repeated recommendation practice under reduced scaffolding
  - **Done when**:
    - [x] Students can defend a pricing recommendation using CVP reasoning
    - [x] The closing phase clearly sets up Goal Seek and Data Tables as useful tools, not premature content

## Phase 3: Lessons 05-06 (Excel)
- [x] 3.1 **Lesson 05** - Implement excel-lessons skill
  - [x] 3.1.1 Update lesson-data.ts for Lesson 05
  - [x] 3.1.2 Implement Phase 1-6 with CVP workbook and Goal Seek
    - [x] Phase 1: Open with business scenario where Goal Seek matters, make tool feel necessary
    - [x] Phase 2: Name Goal Seek pattern, explain parts, teach common failure mode
    - [x] Phase 3: Use simulator mirroring real workbook logic (Set Cell / To Value / By Changing Cell), give immediate feedback
    - [x] Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - [x] Phase 5: Short technical check, brief artifact task focusing on trustworthiness and business communication
    - [x] Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.1.3 Teach the workbook anatomy and Goal Seek inputs directly
  - [x] 3.1.4 Include a safe rehearsal that mirrors Set Cell / To Value / By Changing Cell logic
  - [x] 3.1.5 Require a real workbook artifact by the end of Phase 4
  - **Done when**:
    - [x] Students can run Goal Seek on a valid CVP model
    - [x] The workbook produces a defensible target-profit scenario

- [x] 3.2 **Lesson 06** - Implement excel-lessons skill
  - [x] 3.2.1 Update lesson-data.ts for Lesson 06
  - [x] 3.2.2 Implement Phase 1-6 with Data Tables and sensitivity
    - [x] Phase 1: Open with business scenario where sensitivity analysis matters, make tool feel necessary
    - [x] Phase 2: Name Data Table pattern, explain parts, teach common failure mode
    - [x] Phase 3: Use simulator mirroring real workbook logic, give immediate feedback
    - [x] Phase 4: State exact starting workbook, include reference model, provide build sequence with verification checkpoints, include Definition of Done
    - [x] Phase 5: Short technical check, brief artifact task requiring explanation of what sensitivity results mean for pricing risk
    - [x] Phase 6: Reflect on tool use, name what student can now do faster/reliably, preview next workbook layer
  - [x] 3.2.3 Teach Data Table setup directly and include common failure checks
  - [x] 3.2.4 Keep SpreadsheetWrapper reference sheets static and reliable
  - [x] 3.2.5 Phase 5 must require a short explanation of what the sensitivity results mean for pricing risk
  - **Done when**:
    - [x] The workbook includes functioning sensitivity tables
    - [x] Students can explain which inputs matter most and why

## Phase 4: Lessons 07-10 (Project)
- [x] 4.1 **Lesson 07** - Implement project-rehearsal skill
  - [x] 4.1.1 Update lesson-data.ts for Lesson 07
  - [x] 4.1.2 Implement Phase 1-6 with shared teacher data
    - [x] Phase 1: Frame as final guided rehearsal, explain same-data purpose, contrast with independent project, add transfer questions and rehearsal warning
    - [x] Phase 2: Provide shared workbook download path, state same-data requirement, name each sheet/evidence block with what it proves, add Definition of Done checklist
    - [x] Phase 3: Keep data constant, use previews/guided routines to trace logic chain, ask where recommendation comes from, ask what makes artifact weak
    - [x] Phase 4: Continue shared workbook, keep teacher-guided, complete weak spots, require recommendation and risk statement templates, ask what features to transfer
    - [x] Phase 5: Short comprehension/transfer check, peer audit routine tied to Definition of Done, require strength and improvement
    - [x] Phase 6: Reflect on rehearsal, name what must carry into project, explain what changes next lesson
  - [x] 4.1.3 Use one shared workbook and one shared dataset for the whole class
  - [x] 4.1.4 Trace the pricing recommendation back to the CVP model and sensitivity evidence
  - [x] 4.1.5 Include a Definition of Done and peer-audit routine
  - **Done when**:
    - [x] Students know the exact workbook structure they must reuse in the project
    - [x] Peer critique focuses on evidence chain, risk, and clarity

- [x] 4.2 **Lesson 08** - Implement group-project skill
  - [x] 4.2.1 Update milestone page, lesson-data.ts for Lesson 08
  - [x] 4.2.2 Implement kickoff with group-specific business data
    - [x] Assign each group its own pricing dataset/starter workbook
    - [x] Explain business scenario, constraints, target outcome
    - [x] Require teams to rename, save, organize correct workbook
    - [x] Start first required sheets/sections
    - [x] Define milestone 1 acceptance criteria
  - [x] 4.2.3 Assign each group its own pricing dataset or starter workbook
  - [x] 4.2.4 Keep the workbook architecture identical to Lesson 07
  - [x] 4.2.5 Add comprehensive milestone content: group scenario cards, workbook map with 7 sheets, timeboxed workflow, acceptance criteria, rubric, submission checklist, reflection
  - [x] 4.2.6 Fix import path in phase-1/page.tsx (../lesson-data)
  - [x] 4.2.7 Run npm run build — passes
  **Done when**:
    - [x] Each team is working in the correct workbook
    - [x] Initial pricing-analysis sheets are complete

- [x] 4.3 **Lesson 09** - Implement group-project skill
  - [x] 4.3.1 Update milestone page, lesson-data.ts for Lesson 09
  - [x] 4.3.2 Implement completion and rehearsal
    - [x] Continue same workbook from Lesson 08
    - [x] Complete remaining sheets/evidence blocks
    - [x] Require scenario testing, checks, dashboard completion
    - [x] Require short recommendation structure (claim, evidence, risk)
    - [x] Include peer critique and revision
    - [x] Define milestone 2 acceptance criteria
  - [x] 4.3.3 Continue the same workbook from Lesson 08
  - [x] 4.3.4 Require peer critique and revision
  - [x] 4.3.5 Make teams cite exact workbook evidence for pricing, margin, and risk claims
  **Done when**:
    - [x] The workbook is complete and readable
    - [x] The team can defend a pricing recommendation with evidence

- [ ] 4.4 **Lesson 10** - Implement group-project skill
  - [ ] 4.4.1 Update milestone page, lesson-data.ts for Lesson 10
  - [ ] 4.4.2 Implement final presentation and submission
    - Require final polish of workbook and presentation notes
    - Make audience, presentation standard, submission standard explicit
    - Include final checklist and timing guidance
    - Require reflection after presentation or submission
  - [ ] 4.4.3 Make final artifact and speaking expectations explicit
  - [ ] 4.4.4 Require final workbook polish and submission
  - [ ] 4.4.5 End with reflection on pricing logic, risk, and model credibility
  - **Done when**:
    - [ ] Final deliverables are submitted
    - [ ] Reflection captures how the team balanced competitiveness with profitability

## Phase 5: Verification & Polish
- [ ] 5.1 Verify all lesson-data.ts files are updated
- [ ] 5.2 Verify pricing recommendation problem visible throughout
- [ ] 5.3 Verify alignment between page content, workbook downloads, assessment language
- [ ] 5.4 Run `npm run lint` to check for errors
- [ ] 5.5 Document any component changes in MCP knowledge base
