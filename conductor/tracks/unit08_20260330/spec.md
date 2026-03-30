# Specification: Unit 08 Improvement Plan

## Overview
Implement Unit 08 - Depreciation-centered unit. Remove startup-model and VC-pitch scope. Focus on fixed-asset accounting, depreciation methods, statement impact, and asset register workbook.

## Unit Direction
Unit 08 should become depreciation-centered. Remove the broad startup-model and VC-pitch scope from this unit and give it one clear instructional spine: fixed-asset accounting, depreciation method choice, statement impact, and a trustworthy asset register workbook.

The unit anchor should be visible throughout:
`Book Value = Cost - Accumulated Depreciation`

Update the Sarah narrative so TechStart is expanding and buying long-term assets that need professional tracking.

## Locked Skill Map
- Lesson 01 → `agents/skills/launch-lesson/SKILL.md`
- Lesson 02 → `agents/skills/accounting-principles/SKILL.md`
- Lesson 03 → `agents/skills/accounting-principles/SKILL.md`
- Lesson 04 → `agents/skills/accounting-principles/SKILL.md`
- Lesson 05 → `agents/skills/excel-lessons/SKILL.md`
- Lesson 06 → `agents/skills/excel-lessons/SKILL.md`
- Lesson 07 → `agents/skills/project-rehearsal/SKILL.md`
- Lesson 08 → `agents/skills/group-project/SKILL.md`
- Lesson 09 → `agents/skills/group-project/SKILL.md`
- Lesson 10 → `agents/skills/group-project/SKILL.md`

## Functional Requirements

### Junior Dev Rules
- Read `AGENTS.md` and the named skill before editing any lesson
- For Lessons 01-07, update `lesson-data.ts`, all six phase pages, and any lesson-specific components/imports
- For Lessons 08-10, update the milestone page, `lesson-data.ts`, workbook links, checklists, rubric language, and reflection
- Remove VC-pitch, broad three-statement startup-model, and scenario-manager-first language from student-facing Unit 08 content
- Keep the depreciation formula and book-value logic visible in lesson copy, checks, and workbook design
- Align page content, workbook/tutorial downloads, and assessment language
- Do not change the locked skill map without updating this file

### Unit Cleanup Before Lesson Edits
- Rewrite Unit 08 copy so the unit is about fixed assets and depreciation, not an all-purpose startup model
- Update the Sarah narrative so TechStart is expanding and buying long-term assets that need professional tracking
- Remove Unit 07 depreciation references and make sure Unit 08 owns that content completely
- Keep Lessons 8-10 on the same workbook architecture as Lesson 7, with only the dataset/scenario changing by group

### Lesson 01: Launch Fixed-Asset Problem
- **Skill**: `agents/skills/launch-lesson/SKILL.md`
- **Focus**: Launch Sarah's fixed-asset problem and why investors expect professional asset tracking
- **Phase 1 Requirements**:
  - Start with Sarah's interview video and the new-equipment purchase problem
  - Use the shared `VideoPlayer` component
  - Include title, description, YouTube ID, duration, and full transcript data
  - Create business tension and credibility
  - Follow with one short processing move (risk triage, prediction, quick comprehension, or turn-and-talk)
- **Phase 2 Requirements**:
  - Name the scoreboard explicitly (cost, accumulated depreciation, book value)
  - Show the main moving parts of the system
  - Explain what students will track across the unit
  - Use one bounded interactive to help students scan the system
- **Phase 3 Requirements**:
  - Use a shared dataset or simulation
  - Ask students to predict before reveal
  - Show before/after changes clearly
  - Focus on noticing business effects, not full formal calculation
- **Phase 4 Requirements**:
  - Keep the task constrained
  - Allow 1-2 meaningful choices
  - Show consequences in a visible way
  - Reinforce why long-term asset costs are not treated like everyday expenses
  - No workbook build steps yet
- **Phase 5 Requirements**:
  - Short MCQ exit ticket
  - Assess the founder problem, scoreboard, and core distinction(s)
  - Keep it narrow and aligned to the launch lesson
- **Phase 6 Requirements**:
  - Restate the enduring formula (Book Value = Cost - Accumulated Depreciation)
  - Summarize what students should now understand
  - Preview the first formal rule or principle coming next
  - Include reflection
- **Done When**:
  - Students can explain why long-term asset costs are not treated like everyday expenses
  - The lesson points clearly to capitalization and depreciation logic next

### Lesson 02: Capitalization vs Expense, Useful Life, Salvage Value
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: Capitalization vs expense, useful life, salvage value, and accumulated depreciation
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes capitalization vs expense classification necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the method or principle clearly
  - Model the procedure step by step
  - Explain why each step exists
  - Use worked examples, guided prompts, and visible intermediate values
  - Use strong representational supports such as asset-purchase examples before abstract definitions
- **Phase 3 Requirements**:
  - Add one meaningful complication such as mixed asset classifications or partial-year reasoning
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner depreciation-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, depreciation-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess depreciation vocabulary and reasoning, not Excel tools
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Identify what signal tells a student to use this method
  - Preview the next accounting principle or comparison
- **Done When**:
  - Students can explain when a cost becomes an asset
  - Phase 5 checks depreciation vocabulary and reasoning, not Excel tools

### Lesson 03: Straight-Line Depreciation
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: Straight-Line depreciation by hand and statement impact
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes straight-line depreciation necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the method clearly
  - Model the procedure step by step with visible intermediate values
  - Explain why each step exists
  - Use worked examples and guided prompts
  - Connect depreciation expense to the income statement and book value to the balance sheet
- **Phase 3 Requirements**:
  - Add one meaningful complication such as partial-year depreciation or multiple assets
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner depreciation-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, depreciation-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess straight-line calculation and statement impact
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Identify what signal tells a student to use this method
  - Preview the next accounting principle or comparison
- **Done When**:
  - Students can calculate straight-line depreciation manually
  - Students can explain how the method changes statements over time

### Lesson 04: Double-Declining Balance and Method Comparison
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: Double-Declining Balance and method comparison before Excel
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes DDB necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the DDB method clearly
  - Model the procedure step by step
  - Explain why each step exists
  - Use worked examples, guided prompts, and visible intermediate values
  - Compare DDB with straight-line in business terms
- **Phase 3 Requirements**:
  - Add one meaningful complication such as switching to straight-line mid-schedule or salvage value floors
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner depreciation-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, depreciation-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess DDB calculation and method comparison reasoning
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Preview the first Excel build lesson
- **Done When**:
  - Students can calculate DDB by hand
  - Students can explain when accelerated depreciation makes more sense than straight-line

### Lesson 05: Build Asset Register and Depreciation Schedule
- **Skill**: `agents/skills/excel-lessons/SKILL.md`
- **Focus**: Build the asset register and depreciation schedule workbook
- **Phase 1 Requirements**:
  - Open with a business or investor scenario where speed, clarity, or flexibility matters
  - Make the tool feel necessary, not decorative
  - Connect the lesson to the existing workbook or model
  - Include one short comprehension or discussion move
- **Phase 2 Requirements**:
  - Name the tool or workbook pattern clearly
  - Explain the parts of the feature directly
  - Show where the tool lives in Excel when relevant
  - Include one short check on vocabulary, anatomy, or setup logic
  - Teach at least one common failure mode
- **Phase 3 Requirements**:
  - Use a custom simulator, manual logic trainer, or tightly bounded guided interaction
  - Mirror the real workbook logic as closely as possible
  - Give immediate feedback or reveal after an attempt
  - Make the bridge to phase 4 explicit
- **Phase 4 Requirements**:
  - State the exact starting workbook or download path
  - State the output students should finish by the end of class
  - Include one reference model or layout guide
  - Provide a short build sequence with no more than a few major blocks
  - Include verification checkpoints after major build steps
  - Include a Definition of Done or rubric
  - Build the asset register and depreciation schedule
- **Phase 5 Requirements**:
  - Use a short technical or conceptual check
  - Add one brief artifact task such as a memo, voice script, recommendation, or audit response
  - Focus on trustworthiness, interpretation, and business communication
- **Phase 6 Requirements**:
  - Reflect on both tool use and professional judgment
  - Name what the student can now do faster or more reliably
  - Preview the next workbook layer or next lesson's build
- **Done When**:
  - Students have a working asset register and depreciation schedule in Excel
  - The workbook reflects the same logic already learned manually

### Lesson 06: Method Comparison and Investor-Ready Summary
- **Skill**: `agents/skills/excel-lessons/SKILL.md`
- **Focus**: Method comparison, statement impact, checks, and investor-ready summary
- **Phase 1 Requirements**:
  - Open with an investor scenario where method comparison matters
  - Make the tool feel necessary, not decorative
  - Connect the lesson to the existing workbook or model
  - Include one short comprehension or discussion move
- **Phase 2 Requirements**:
  - Name the comparison/summary pattern clearly
  - Explain the parts of the feature directly
  - Show where the tool lives in Excel when relevant
  - Include one short check on vocabulary, anatomy, or setup logic
  - Teach at least one common failure mode
- **Phase 3 Requirements**:
  - Use a custom simulator, manual logic trainer, or tightly bounded guided interaction
  - Mirror the real workbook logic as closely as possible
  - Give immediate feedback or reveal after an attempt
  - Make the bridge to phase 4 explicit
- **Phase 4 Requirements**:
  - State the exact starting workbook or download path
  - State the output students should finish by the end of class
  - Include one reference model or layout guide
  - Provide a short build sequence with no more than a few major blocks
  - Include verification checkpoints after major build steps
  - Include a Definition of Done or rubric
  - Add workbook checks so accumulated depreciation and book value stay believable
- **Phase 5 Requirements**:
  - Use a short technical or conceptual check
  - Add one brief artifact task requiring a short defense of the recommended depreciation method
  - Focus on trustworthiness, interpretation, and business communication
- **Phase 6 Requirements**:
  - Reflect on both tool use and professional judgment
  - Name what the student can now do faster or more reliably
  - Preview the next workbook layer or next lesson's build
- **Done When**:
  - The workbook compares methods clearly and shows statement impact
  - Students can defend a depreciation policy using workbook evidence

### Lesson 07: Project Rehearsal
- **Skill**: `agents/skills/project-rehearsal/SKILL.md`
- **Focus**: Rehearse the exact depreciation-project structure with shared teacher data
- **Phase 1 Requirements**:
  - Frame the lesson as a final guided rehearsal before the project
  - Explain that every group is using the same data today on purpose
  - Explain what students should learn from this guided-practice version of the project
  - Contrast today's shared practice with the more independent project to come
  - Include one short comprehension or discussion move about workbook quality or audience expectations
- **Phase 2 Requirements**:
  - Provide the shared workbook or artifact download path
  - State that the student workbook uses the same data as the teacher workbook
  - Name each major sheet, section, or evidence block and what it is supposed to prove
  - Define what success looks like today
  - Include a short vocabulary or structure check if needed
- **Phase 3 Requirements**:
  - Keep the data set constant across the class so students can compare reasoning and quality directly
  - Use previews, guided routines, or annotated examples to trace the logic chain
  - Ask students to identify where the recommendation comes from
  - Ask students what would make the artifact feel weak, confusing, or untrustworthy
  - Keep the teacher guidance high
- **Phase 4 Requirements**:
  - Continue the shared rehearsal workbook or artifact
  - Keep the work teacher-guided enough that students are practicing the project structure, not inventing a new one
  - Ask students to complete remaining weak spots, polish clarity, and check alignment
  - Require at least one recommendation statement and one risk or limitation statement
  - Ask students to name the features or structures they must transfer into the real project
- **Phase 5 Requirements**:
  - Include a short comprehension or transfer check
  - Include a peer audit, critique, or review routine tied to the Definition of Done
  - Make the review focus on logic chain, evidence, and clarity
  - Require at least one clear strength and one clear improvement
- **Phase 6 Requirements**:
  - Reflect on what the rehearsal clarified
  - Name what must be carried into the project
  - Explain what changes in the next lesson when students get their own scenario or team task
  - Keep the handoff concrete and specific
- **Done When**:
  - Students know the exact workbook structure they must reuse in the project
  - Peer critique focuses on evidence chain, method fit, and clarity

### Lesson 08: Project Kickoff
- **Skill**: `agents/skills/group-project/SKILL.md`
- **Focus**: Project kickoff with group-specific fixed-asset datasets and the same rehearsal workbook structure
- **Requirements**:
  - Assign each group its own fixed-asset dataset or starter workbook
  - Explain the business scenario, constraints, and target outcome
  - Require teams to rename, save, and organize the correct workbook
  - Start the first required sheets or sections
  - Define milestone 1 acceptance criteria
  - Keep workbook architecture identical to Lesson 07
- **Evidence to Require**:
  - Correct workbook opened and named
  - Early sheets or setup blocks completed
  - One draft claim or early direction statement
- **Done When**:
  - Each team is working in the correct workbook
  - Initial asset-register and schedule work is complete

### Lesson 09: Complete Workbook and Depreciation Recommendation
- **Skill**: `agents/skills/group-project/SKILL.md`
- **Focus**: Complete the workbook, finalize the depreciation recommendation, and rehearse the explanation
- **Requirements**:
  - Continue the same workbook from Lesson 08
  - Complete the remaining sheets or evidence blocks
  - Require scenario testing, checks, and dashboard completion
  - Require a short recommendation structure using claim, evidence, and risk
  - Include peer critique and revision
  - Define milestone 2 acceptance criteria
  - Make teams cite exact workbook evidence for book value, expense timing, and method-choice claims
- **Evidence to Require**:
  - Complete workbook
  - Final recommendation draft
  - Cited workbook numbers
  - Peer feedback notes
- **Done When**:
  - The workbook is complete and readable
  - The team can defend a depreciation recommendation with evidence

### Lesson 10: Final Presentation
- **Skill**: `agents/skills/group-project/SKILL.md`
- **Focus**: Final presentation/submission and reflection
- **Requirements**:
  - Require final polish of workbook and presentation notes
  - Make the audience, presentation standard, and submission standard explicit
  - Include final checklist and timing guidance
  - Require reflection after presentation or submission
  - Make final deliverables explicit
  - End with reflection on asset tracking, method choice, and reporting credibility
- **Evidence to Require**:
  - Final workbook
  - Final recommendation or presentation artifact
  - Submission confirmation
  - Reflection
- **Done When**:
  - Final deliverables are submitted
  - Reflection captures what made the recommendation trustworthy

## Non-Functional Requirements
- Educational content at 8th grade reading level
- Interactive components properly imported (default exports for exercises, named exports for UI)
- Phase-specific gradient backgrounds and styling
- Accessible design with keyboard navigation
- Alignment between page content, workbook/tutorial downloads, and assessment language

## Acceptance Criteria
- [ ] All 10 lessons implemented with correct skill assignments
- [ ] Unit is depreciation-focused (no startup model content)
- [ ] All depreciation methods covered (straight-line, DDB)
- [ ] Excel asset register in Lessons 05-06
- [ ] Lesson 07: Project rehearsal with shared dataset
- [ ] Lessons 08-10: Group project with milestones and presentation
- [ ] All phase pages have substantial explanatory content + interactive components
- [ ] Alignment between page content, workbook downloads, and assessment language
- [ ] Sarah/TechStart continuity visible throughout all lessons (TechStart expanding, buying long-term assets)
- [ ] Component rules followed for each skill type

## Out of Scope
- Changes to the locked skill map (must remain as specified)
- Unit 01-07 improvements (separate tracks)
