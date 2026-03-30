# Specification: Unit 07 Improvement Plan

## Overview
Implement Unit 07 - Inventory-only unit. Remove depreciation content. Focus on inventory flow, COGS, ending inventory, FIFO/LIFO, and statement impact.

## Unit Direction
Unit 07 should become inventory-only. Remove depreciation content from this unit and keep the instructional spine focused on inventory flow, COGS, ending inventory, method choice, and statement impact. This is the best current model for Lessons 1-4, but it still needs clearer boundaries before Excel starts.

## Legacy Completion Summary
- Lesson 01: Complete
- Lesson 02: Complete
- Lesson 03: Complete
- Lesson 04: Complete
- Lessons 05-10: Remaining in the Conductor track

## Why This Change Is Better
- Inventory already provides enough accounting depth for a full unit.
- The ending inventory formula gives the unit one memorable anchor.
- FIFO, LIFO, specific identification, and weighted average create enough conceptual and Excel complexity on their own.
- The final workbook artifact becomes much clearer: prove that your ending inventory and COGS are reliable.
- Lessons 7-10 can now mirror Unit 6 more closely: guided rehearsal first, then independent transfer by group.

## Unit-Wide Design Principles
- Teach one visible workflow from raw transactions to ending inventory recommendation.
- Keep one shared business simulation through Lessons 1-7.
- Make the ending inventory formula visible in lesson copy, graphics, checks, and workbook design.
- Introduce methods only when students understand what part of the formula they are trying to defend.
- Teach not only how each method works, but when a business might prefer it.
- Use Lessons 4-6 to escalate Excel complexity gradually.
- Use Lesson 7 as a dress rehearsal for the exact project workflow used in Lessons 8-10.

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
- Remove depreciation references from student-facing Unit 07 content
- Keep the mini balance sheet and income statement connections that help students see why ending inventory and COGS matter
- Align page content, workbook/tutorial downloads, and assessment language
- Do not change the locked skill map without updating this file

### Unit Cleanup Before Lesson Edits
- Rewrite unit-facing copy so Unit 07 is inventory-only
- Remove SLN, DDB, fixed-asset, and depreciation-schedule language from Unit 07 lesson titles and descriptions
- Keep the strongest inventory pedagogy from the current version: prediction before reveal, visible layers, and statement connections

## Shared Business Simulation
- Lessons 1-7 should use one common client business with beginning inventory, dated purchases, dated sales, and item-level detail sufficient to support all four methods.
- The shared simulation should support hand calculation in Lessons 2-3, simple Excel structure in Lesson 4, method comparison and workbook safeguards in Lesson 5, integrated dashboard and recommendation logic in Lesson 6, and rehearsal workbook build in Lesson 7.

## Shared Workbook Model for Lessons 7-10
- `ReadMe` or `Brief`
- `Inputs`
- `BeginningInventory`
- `Purchases`
- `Sales`
- `Valuation`
- `MethodCompare`
- `Checks`
- `Dashboard`
- `Recommendation`

## Unit-Wide Implementation Tasks
- Rewrite all Unit 07 `lesson-data.ts` files around an inventory-only progression.
- Remove depreciation language, activities, workbook references, and assessment expectations from Unit 07.
- Rewrite lesson titles and rationales so the ending inventory formula stays central.
- Standardize Lessons 1-7 around six student phases.
- Keep Lessons 8-10 as one-phase group project milestone lessons.
- Reduce project groups from six to four.
- Create one shared rehearsal dataset and workbook for Lesson 7.
- Create four project datasets for Lessons 8-10.
- Ensure every lesson includes both accounting reasoning and workbook quality expectations appropriate to that lesson's complexity.

### Lesson 01: Launch Inventory-Trust Problem
- **Skill**: `agents/skills/launch-lesson/SKILL.md`
- **Focus**: Launch Sarah's inventory-trust problem and why ending inventory affects profit
- **Phase 1 Requirements**:
  - Start with Sarah's interview video and the inventory confusion problem
  - Use the shared `VideoPlayer` component
  - Include title, description, YouTube ID, duration, and full transcript data
  - Create business tension and credibility
  - Follow with one short processing move (risk triage, prediction, quick comprehension, or turn-and-talk)
- **Phase 2 Requirements**:
  - Name the scoreboard explicitly (goods available, COGS, ending inventory, gross profit)
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
  - Reinforce the difference between surface activity and the deeper inventory problem
  - No workbook build steps yet
- **Phase 5 Requirements**:
  - Short MCQ exit ticket
  - Assess the founder problem, scoreboard, and core distinction(s)
  - Keep it narrow and aligned to the launch lesson
- **Phase 6 Requirements**:
  - Restate the enduring formula, scoreboard, or key unit question
  - Summarize what students should now understand
  - Preview the first formal rule or principle coming next
  - Include reflection
- **Done When**:
  - Students can explain why inventory counts affect profit and the balance sheet
  - The lesson points clearly to the movement logic in Lesson 02

#### Completion Notes
- Status: Complete
- The first lesson establishes Sarah's founder problem and the shared inventory formula.
- The lesson should keep the business story visible rather than treating the launch as vocabulary-only.

### Lesson 02: Beginning Inventory, Purchases, COGS
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: Beginning inventory, purchases, units sold, COGS range, and statement connections
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes inventory flow calculation necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the method or principle clearly
  - Model the procedure step by step
  - Explain why each step exists
  - Use worked examples, guided prompts, and visible intermediate values
  - Use strong representational supports such as movement and layer representations
- **Phase 3 Requirements**:
  - Add one meaningful complication such as more complex inventory flows or rounding discipline
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner inventory-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, inventory-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess inventory flow understanding, not workbook logic
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Identify what signal tells a student to use this method
  - Preview the next accounting principle or comparison
- **Done When**:
  - Students can explain why the same sales volume can produce different COGS outcomes
  - Phase 5 checks understanding of inventory flow, not workbook logic

#### Completion Notes
- Status: Complete
- Completed files in the legacy implementation record:
  - `lesson02/lesson-data.ts`
  - `lesson02/phase-1/page.tsx`
  - `lesson02/phase-2/page.tsx`
  - `lesson02/phase-3/page.tsx`
  - `lesson02/phase-4/page.tsx`
  - `lesson02/phase-5/page.tsx`
  - `lesson02/phase-6/page.tsx`
- New interactive components in the legacy implementation record:
  - `lesson02/InventoryFlowExplorer.tsx`
  - `lesson02/InventoryTimelineLab.tsx`
  - `lesson02/CostAssignmentPractice.tsx`
- Supporting assets in the legacy implementation record:
  - `public/images/inventory-equation.png`
  - `src/components/drag-drop-exercises/InventoryFlowDiagram.tsx`
  - `src/data/question-banks/unit07-phase5.ts`
- Key design decisions from the legacy implementation:
  - Each phase uses Review → Teach Deeper → Activity structure
  - Interactive components let students discover concepts through hands-on practice
  - No FIFO/LIFO formal rules yet
  - Three inventory layers used in Phase 3 timeline
  - Phase 4 practice scenarios include varied business contexts
  - Phase 5 assessment focuses on formula understanding and cost flow mechanics
  - Phase 6 reflection connects lesson concepts to upcoming FIFO/LIFO methods in Lesson 3

### Lesson 03: FIFO and LIFO
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: FIFO and LIFO as competing cost-flow assumptions
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes FIFO/LIFO necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the method or principle clearly
  - Model the procedure step by step
  - Explain why each step exists
  - Use worked examples, guided prompts, and visible intermediate values
  - Use strong representational supports such as visible layer assignment
- **Phase 3 Requirements**:
  - Add one meaningful complication such as more complex inventory flows or rounding discipline
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner inventory-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, inventory-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess FIFO/LIFO calculation and comparison
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Identify what signal tells a student to use this method
  - Preview the next accounting principle or comparison
- **Done When**:
  - Students can calculate FIFO and LIFO by hand
  - Students can explain how each method changes reported profit and inventory

#### Completion Notes
- Status: Complete
- The legacy implementation recorded Lesson 3 as a fully completed calculation-first lesson.
- The lesson should remain focused on the mechanics and consequences of FIFO/LIFO before any Excel build work.

### Lesson 04: Specific ID and Weighted Average
- **Skill**: `agents/skills/accounting-principles/SKILL.md`
- **Focus**: Specific Identification and Weighted Average, plus four-method comparison
- **Phase 1 Requirements**:
  - Reconnect to the prior lesson, dataset, or business scenario
  - Show the exact friction point that makes Specific ID/Weighted Average necessary
  - Use one short launch move such as prediction, notice-and-wonder, or compare-the-results
  - Keep the representation highly concrete and story-anchored
- **Phase 2 Requirements**:
  - Name the method or principle clearly
  - Model the procedure step by step
  - Explain why each step exists
  - Use worked examples, guided prompts, and visible intermediate values
  - Use strong representational supports such as business-fit sorting before arithmetic
- **Phase 3 Requirements**:
  - Add one meaningful complication such as more complex inventory flows or rounding discipline
  - Keep the skill target the same
  - Reduce prompts and hints compared with phase 2
  - Begin shifting toward cleaner inventory-style layouts and more authentic notation
  - Ask students to explain choices, not only compute answers
- **Phase 4 Requirements**:
  - Use the same underlying procedure each round
  - Vary the numbers or valid permutations algorithmically
  - Provide automatic checking
  - Give feedback after submission, not during every step
  - Include brief reteach guidance tied to the error pattern
  - Allow a new isomorphic problem immediately after feedback
  - Define a mastery target such as consecutive correct answers or a threshold score
  - Present the work in a more abstract, inventory-aligned format with minimal visual support
- **Phase 5 Requirements**:
  - Use a short MCQ exit ticket
  - Assess four-method comparison and business fit
  - Keep the scope narrow and aligned to the lesson's main target
- **Phase 6 Requirements**:
  - Ask students to reflect on both confidence and understanding
  - Connect the lesson back to the business problem
  - Identify what signal tells a student to use this method
  - Preview the first Excel build lesson
- **Done When**:
  - Students can recognize when each inventory method fits best
  - The closing phase points cleanly to the workbook lessons

#### Completion Notes
- Status: Complete
- Completed files in the legacy implementation record:
  - `lesson04/lesson-data.ts`
  - `lesson04/phase-1/page.tsx`
  - `lesson04/phase-2/page.tsx`
  - `lesson04/phase-3/page.tsx`
  - `lesson04/phase-4/page.tsx`
  - `lesson04/phase-5/page.tsx`
  - `lesson04/phase-6/page.tsx`
- Interactive components in the legacy implementation record:
  - `lesson04/SpecificIDTracker.tsx`
  - `lesson04/SpecificIDPractice.tsx`
  - `lesson04/WeightedAvgDemo.tsx`
  - `lesson04/WeightedAvgPractice.tsx`
  - `lesson04/MethodPracticeCombined.tsx`
  - `lesson04/MethodComparisonMatrix.tsx`
- Key design decisions from the legacy implementation:
  - Phase 1 is conceptual, with method-fit sorting before calculation
  - Specific identification uses teacher-led demonstration plus student practice
  - Weighted average uses a visible running-total walkthrough with explicit rounding
  - Phase 4 combines both methods before the four-method synthesis matrix
  - Assessment and reflection are aligned to method recognition and method fit
  - The lesson stays textbook-first and does not begin Excel too early

### Lesson 05: Build Inventory Method Workbook
- **Skill**: `agents/skills/excel-lessons/SKILL.md`
- **Focus**: Build the inventory-method workbook and automate method calculations
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
  - Build the inventory-method workbook
- **Phase 5 Requirements**:
  - Use a short technical or conceptual check
  - Add one brief artifact task such as a memo, voice script, recommendation, or audit response
  - Focus on trustworthiness, interpretation, and business communication
- **Phase 6 Requirements**:
  - Reflect on both tool use and professional judgment
  - Name what the student can now do faster or more reliably
  - Preview the next workbook layer or next lesson's build
- **Done When**:
  - Students have a working method-comparison workbook
  - The workbook reflects the same method logic already learned by hand

### Lesson 06: Dynamic Method Selection and Turnover
- **Skill**: `agents/skills/excel-lessons/SKILL.md`
- **Focus**: Add dynamic method selection, turnover analysis, and investor-ready explanation
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
  - Build the dynamic method selection and turnover analysis
- **Phase 5 Requirements**:
  - Use a short technical or conceptual check
  - Add one brief artifact task requiring a short defense of the recommended inventory method
  - Focus on trustworthiness, interpretation, and business communication
- **Phase 6 Requirements**:
  - Reflect on both tool use and professional judgment
  - Name what the student can now do faster or more reliably
  - Preview the next workbook layer or next lesson's build
- **Done When**:
  - The workbook supports comparison across methods and shows the business impact clearly
  - Students can explain their method choice using workbook evidence

### Lesson 07: Project Rehearsal
- **Skill**: `agents/skills/project-rehearsal/SKILL.md`
- **Focus**: Rehearse the exact inventory-project structure with shared teacher data
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
- **Focus**: Project kickoff with group-specific inventory data and the same rehearsal workbook structure
- **Requirements**:
  - Assign each group its own inventory dataset or starter workbook
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
  - Initial inventory-analysis work is complete

### Lesson 09: Complete Workbook and Method Recommendation
- **Skill**: `agents/skills/group-project/SKILL.md`
- **Focus**: Complete the workbook, finalize the method recommendation, and rehearse the board-style explanation
- **Requirements**:
  - Continue the same workbook from Lesson 08
  - Complete the remaining sheets or evidence blocks
  - Require scenario testing, checks, and dashboard completion
  - Require a short recommendation structure using claim, evidence, and risk
  - Include peer critique and revision
  - Define milestone 2 acceptance criteria
  - Make teams cite exact workbook evidence for inventory, COGS, and turnover claims
- **Evidence to Require**:
  - Complete workbook
  - Final recommendation draft
  - Cited workbook numbers
  - Peer feedback notes
- **Done When**:
  - The workbook is complete and readable
  - The team can defend a method recommendation with evidence

### Lesson 10: Final Presentation
- **Skill**: `agents/skills/group-project/SKILL.md`
- **Focus**: Final presentation/submission and reflection
- **Requirements**:
  - Require final polish of workbook and presentation notes
  - Make the audience, presentation standard, and submission standard explicit
  - Include final checklist and timing guidance
  - Require reflection after presentation or submission
  - Make final deliverables explicit
  - End with reflection on method choice, evidence, and reporting credibility
- **Evidence to Require**:
  - Final workbook
  - Final recommendation or presentation artifact
  - Submission confirmation
  - Reflection
- **Done When**:
  - Final deliverables are submitted
  - Reflection captures what made the recommendation believable

## Non-Functional Requirements
- Educational content at 8th grade reading level
- Interactive components properly imported (default exports for exercises, named exports for UI)
- Phase-specific gradient backgrounds and styling
- Accessible design with keyboard navigation
- Alignment between page content, workbook/tutorial downloads, and assessment language

## Acceptance Criteria
- [ ] All 10 lessons implemented with correct skill assignments
- [ ] Unit is inventory-only (no depreciation)
- [ ] All 4 inventory methods covered
- [ ] Excel method comparison in Lessons 05-06
- [ ] Lesson 07: Project rehearsal with shared dataset
- [ ] Lessons 08-10: Group project with milestones and presentation
- [ ] All phase pages have substantial explanatory content + interactive components
- [ ] Alignment between page content, workbook downloads, and assessment language
- [ ] Sarah/TechStart continuity visible throughout all lessons
- [ ] Component rules followed for each skill type

## Out of Scope
- Changes to the locked skill map (must remain as specified)
- Unit 01-06, 08 improvements (separate tracks)

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
