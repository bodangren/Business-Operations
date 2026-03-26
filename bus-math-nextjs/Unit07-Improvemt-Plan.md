# Unit 07 Improvement Plan

## Direction

Unit 07 should become an inventory-centered unit.

Depreciation is being moved to Unit 8. That makes Unit 07 much cleaner instructionally and gives the unit one durable spine instead of two competing ones.

The enduring understanding for Unit 07 should be repeated early and often:

`Ending Inventory = Beginning Inventory + Purchases - COGS`

Everything in the unit should help students understand, calculate, test, defend, and present a trustworthy ending inventory number.

## Why this change is better

- Inventory already provides enough accounting depth for a full unit.
- The ending inventory formula gives the unit one memorable anchor.
- FIFO, LIFO, specific identification, and weighted average create enough conceptual and Excel complexity on their own.
- The final workbook artifact becomes much clearer: prove that your ending inventory and COGS are reliable.
- Lessons 7-10 can now mirror Unit 6 more closely: guided rehearsal first, then independent transfer by group.

## Unit-wide design principles

- Teach one visible workflow from raw transactions to ending inventory recommendation.
- Keep one shared business simulation through Lessons 1-7.
- Make the ending inventory formula visible in lesson copy, graphics, checks, and workbook design.
- Introduce methods only when students understand what part of the formula they are trying to defend.
- Teach not only how each method works, but when a business might prefer it.
- Use Lessons 4-6 to escalate Excel complexity gradually.
- Use Lesson 7 as a dress rehearsal for the exact project workflow used in Lessons 8-10.

## Enduring understanding

The core formula for the unit is:

`Ending Inventory = Beginning Inventory + Purchases - Cost of Goods Sold`

Students should leave the unit able to explain:

- what each part of the formula means
- how transaction records change each part
- why different inventory valuation methods change COGS and ending inventory
- how a workbook can prove the ending inventory number is trustworthy

## Core methods to teach in Unit 07

- `FIFO`
  - oldest costs flow to COGS first
  - useful when the physical flow matches older stock leaving first
  - often produces higher ending inventory values and higher profit in rising-cost environments
- `LIFO`
  - newest costs flow to COGS first
  - useful when the business wants current costs matched against current sales
  - often produces lower ending inventory values and lower profit in rising-cost environments
- `Specific Identification`
  - exact cost is tracked item by item
  - useful when inventory items are unique, expensive, or individually traceable
  - best fit for cars, custom equipment, luxury goods, or serialized items
- `Weighted Average`
  - pooled costs are averaged across units
  - useful when items are similar and individual layers are not practical to track
  - best fit for bulk goods, commodities, and high-volume similar items

## Shared business simulation

Lessons 1-7 should use one common client business with:

- beginning inventory
- several dated purchases at changing costs
- several dated sales
- item-level detail sufficient to support all four methods
- a realistic problem: the owner cannot defend ending inventory, margin, or method choice to an investor, lender, or auditor

The shared simulation should be rich enough to support:

- hand calculation in Lessons 2-3
- simple Excel structure in Lesson 4
- method comparison and workbook safeguards in Lesson 5
- integrated dashboard and recommendation logic in Lesson 6
- rehearsal workbook build in Lesson 7

## Shared workbook model for Lessons 7-10

Students should ultimately build a workbook with this structure:

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

Lesson 7 uses one shared business and one shared dataset. Lessons 8-10 repeat the same workbook logic with four different businesses and four different datasets.

## Unit-wide implementation tasks

- Rewrite all Unit 07 `lesson-data.ts` files around an inventory-only progression.
- Remove depreciation language, activities, workbook references, and assessment expectations from Unit 07.
- Rewrite lesson titles and rationales so the ending inventory formula stays central.
- Standardize Lessons 1-10 around six student phases, including project lessons.
- Reduce project groups from six to four.
- Create one shared rehearsal dataset and workbook for Lesson 7.
- Create four project datasets for Lessons 8-10.
- Ensure every lesson includes both accounting reasoning and workbook quality expectations appropriate to that lesson's complexity.

## Lesson-by-lesson plan

## Lesson 1

**Status:** Complete

### Proposed title

`Unit Launch: Sarah's Inventory Problem`

### Purpose

Introduce the unit problem, the shared business simulation, and the enduring understanding:

`Ending Inventory = Beginning Inventory + Purchases - COGS`

Lesson 1 should not try to teach all methods. It should establish why the formula matters, let students feel Sarah's founder problem, and show that inventory on the shelf is not the same thing as profit.

### Phase 1: Hook

- Use Sarah's startup-CEO video to introduce the unit problem.
- Frame the problem as founder risk, not as a vocabulary lesson.
- Have students complete a risk-triage activity to identify the two biggest warning signs in Sarah's situation.
- End with the idea that Sarah cannot defend her ending inventory number to an outside audience.

### Phase 2: Introduction

- Introduce Sarah's month setup: starting shelf, starting cash, and the unit scoreboard.
- Keep the formula visible as the unit scoreboard, not as a full accounting lecture.
- Use a month-scanner activity so students identify where the business pressure shows up first.
- Emphasize that Sarah is feeling cash, shelf, and margin pressure at the same time.

### Phase 3: Guided Practice

- Use an event-by-event prediction lab tied to one shared month.
- Before each reveal, students predict what changes:
  - cash
  - units on shelf
  - inventory value
  - revenue
  - gross profit
- Reveal the result after each event so students can compare their mental model to the live business outcomes.

### Phase 4: Independent Practice

- Use a ten-step pricing simulator with light restocking decisions.
- Track a mini income statement:
  - sales
  - COGS
  - gross profit
- Track a mini balance sheet:
  - cash
  - inventory
  - total assets
- Give students a clear win condition: maximize gross profit while keeping a minimum cash cushion and minimum ending inventory level.

### Phase 5: Assessment

- Check the meaning of each formula part.
- Check whether students can identify which transactions affect ending inventory.
- Keep the formal check short and focused on the launch problem.

### Phase 6: Closing

- Repeat the enduring understanding.
- Preview Lesson 2 as the first lesson on how inventory costs flow when the same goods are bought at different prices.

### Implementation sub-tasks

- Rewrite `lesson01/lesson-data.ts` to center Sarah's inventory problem and the unit scoreboard.
- Replace passive checks with lesson-specific interactive components.
- Keep the Sarah video and restore the startup narrative.
- Build a shared month simulation that supports both the prediction lab and the pricing studio.
- Keep the launch lesson focused on the problem, not on teaching FIFO/LIFO yet.

## Lesson 2

**Status:** ✅ Complete (All 6 phases + 3 new interactive components)

### Proposed title

`Inventory Cost Flow Foundations: Beginning Inventory, Purchases, and COGS`

### Purpose

Teach the basic accounting logic of inventory movement before method comparison begins.

### Implementation Progress

**Completed Files (Session 2025-03-25):**
- `lesson02/lesson-data.ts` - Rewritten with inventory-focused learning objectives and key concepts
- `lesson02/phase-1/page.tsx` - Complete rewrite with Sarah's inventory puzzle, uses `inventory-equation.png` infographic, 4-question ComprehensionCheck
- `lesson02/phase-2/page.tsx` - Complete rewrite with Physical Flow vs Cost Flow concepts, includes `InventoryFlowExplorer.tsx` interactive component
- `lesson02/phase-3/page.tsx` - Complete rewrite with Review → Teach Deeper → Activity structure, uses `InventoryTimelineLab.tsx`
- `lesson02/phase-4/page.tsx` - Complete rewrite with `CostAssignmentPractice.tsx` component, 3 practice scenarios
- `lesson02/phase-5/page.tsx` - Complete rewrite with inventory-focused assessment using updated question bank
- `lesson02/phase-6/page.tsx` - Complete rewrite with inventory reflection prompts and closing activities

**New Interactive Components:**
- `lesson02/InventoryFlowExplorer.tsx` - Interactive component where students make 15 sales choosing which layer costs to assign, see live formula updates
- `lesson02/InventoryTimelineLab.tsx` - Interactive component with 6-event timeline walkthrough, students calculate units on hand and inventory value at each step
- `lesson02/CostAssignmentPractice.tsx` - Interactive component with 3 practice scenarios for computing GAFS and COGS/Ending Inventory ranges

**Supporting Assets:**
- `public/images/inventory-equation.png` - NEW infographic showing the inventory equation visually
- `src/components/drag-drop-exercises/InventoryFlowDiagram.tsx` - Enhanced with additional flow visualization features
- `src/data/question-banks/unit07-phase5.ts` - Updated with inventory flow questions (depreciation references removed)

### Key Design Decisions Made:
1. Each phase uses Review → Teach Deeper → Activity structure
2. Interactive components let students discover concepts through hands-on practice
3. No FIFO/LIFO formal rules yet - students learn WHY cost assignment matters, not HOW methods work
4. Three inventory layers used in Phase 3 timeline (Day 1 @ $18, Day 3 @ $20, Day 15 @ $22)
5. Phase 4 practice scenarios include varied business contexts (Client Kits, Office Supplies, Electronics)
6. Phase 5 assessment focuses on formula understanding and cost flow mechanics
7. Phase 6 reflection connects lesson concepts to upcoming FIFO/LIFO methods in Lesson 3

### Phase 1: Hook

- Show a short period with beginning inventory, new purchases, and sales.
- Ask why the ending inventory number is not obvious just from looking at remaining units.

### Phase 2: Introduction

- Teach how inventory moves through the formula.
- Explain the relationship between physical flow and cost flow.
- Define inventory layers and why cost assignment matters.

### Phase 3: Guided Practice

- Walk through a simple inventory timeline by hand.
- Students track units available for sale and units remaining.
- Separate quantity flow from cost assignment clearly.

### Phase 4: Independent Practice

- Students compute goods available for sale and identify what must still be assigned to COGS versus ending inventory.
- Students explain where mistakes usually happen.

### Phase 5: Assessment

- Check beginning inventory, purchases, goods available for sale, and ending inventory logic.
- Include one short item asking why COGS choice affects ending inventory.

### Phase 6: Closing

- Summarize the movement logic.
- Preview Lesson 3 as the point where FIFO and LIFO are introduced explicitly.

### Implementation sub-tasks

- Rewrite `lesson02/lesson-data.ts` around inventory movement rather than depreciation.
- Build one hand-calculation sequence before any spreadsheet complexity appears.
- Add a simple practice dataset with dated purchases and sales.

## Lesson 3

### Proposed title

`FIFO and LIFO: Two Ways to Value the Same Inventory`

### Purpose

Teach FIFO and LIFO deeply enough that students understand both the mechanics and the business consequences.

### Phase 1: Hook

- Use a rising-cost scenario from the shared business.
- Show how the same sales can produce two different ending inventory values.
- Ask which method might look better to a manager, lender, or tax planner.

### Phase 2: Introduction

- Teach FIFO and LIFO step by step.
- Explain when FIFO is commonly preferred and when LIFO might be strategically attractive.
- Show how each method changes COGS, ending inventory, and profit.

### Phase 3: Guided Practice

- Work through one layered inventory example by hand under both methods.
- Make students trace the actual cost layers assigned to COGS and to ending inventory.

### Phase 4: Independent Practice

- Students solve a new FIFO/LIFO comparison independently.
- Students answer a short recommendation prompt about when to use FIFO versus LIFO.

### Phase 5: Assessment

- Check accurate FIFO and LIFO calculations.
- Check conceptual understanding of when each method is useful.
- Include one item on how rising costs change the decision context.

### Phase 6: Closing

- Summarize the tradeoff between profit presentation and cost matching.
- Preview Lesson 4 as the expansion into specific identification and weighted average, plus the first simple Excel work.

### Implementation sub-tasks

- Rewrite `lesson03/lesson-data.ts` so FIFO and LIFO are the clear lesson center.
- Keep the lesson calculation-first.
- Avoid introducing all four methods at once until the FIFO/LIFO logic is solid.

## Lesson 4

### Proposed title

`Specific Identification and Weighted Average in Simple Excel`

### Purpose

Teach the third and fourth inventory methods and begin simple spreadsheet implementation.

### Phase 1: Hook

- Compare a jewelry store, a car dealership, and a bulk grocery supplier.
- Ask why one method would not fit all three businesses.

### Phase 2: Introduction

- Teach `Specific Identification` and when it should be used.
- Teach `Weighted Average` and when it is a better fit than layer-by-layer tracking.
- Compare all four methods at a high level:
  - FIFO
  - LIFO
  - Specific Identification
  - Weighted Average

### Phase 3: Guided Practice

- Students calculate one specific-identification case by hand.
- Students calculate one weighted-average case by hand.
- Teacher models a simple Excel sheet that computes weighted average cleanly.

### Phase 4: Independent Practice

- Students use a small spreadsheet to calculate ending inventory under weighted average.
- Students decide which of the four methods best fits several business types.

### Phase 5: Assessment

- Check method recognition, method fit, and basic weighted-average calculation.
- Include one item asking why specific identification is only realistic for certain businesses.

### Phase 6: Closing

- Summarize when to use each of the four methods.
- Preview Lesson 5 as the move from method knowledge to a medium-complexity comparison workbook.

### Implementation sub-tasks

- Rewrite `lesson04/lesson-data.ts` around specific identification and weighted average.
- Keep Excel scope simple: one workbook, one or two tables, visible formulas, no heavy automation yet.
- Add a tutorial and practice file built around weighted average and method selection.

## Lesson 5

### Proposed title

`Medium-Complexity Excel: Build a Method Comparison Workbook`

### Purpose

Move from isolated method practice to a workbook that compares outcomes across multiple inventory methods.

### Phase 1: Hook

- Show a fragile inventory model that breaks when purchases are added.
- Contrast it with a model that stays organized and makes method comparison easy.

### Phase 2: Introduction

- Teach workbook structure for inventory method comparison.
- Reinforce when to use FIFO, LIFO, specific identification, and weighted average.
- Introduce visible checks, clean labels, and method summary outputs.

### Phase 3: Guided Practice

- Students build a workbook that calculates ending inventory under at least three methods.
- Add simple validation and visible check cells.
- Teacher models how to compare outcomes and explain differences.

### Phase 4: Independent Practice

- Students expand the workbook to handle additional data or method changes.
- Students write a short recommendation naming the best-fit method for the shared business and why.

### Phase 5: Assessment

- Check workbook structure and method comparison logic.
- Check whether students can justify method selection by business context.

### Phase 6: Closing

- Reflect on the shift from hand calculation to defendable spreadsheet work.
- Preview Lesson 6 as the fully integrated version of this inventory workbook.

### Implementation sub-tasks

- Rewrite `lesson05/lesson-data.ts` around medium-complexity inventory automation.
- Remove leftover depreciation references from lesson copy and resources.
- Add comparison outputs that foreground ending inventory, COGS, and method fit.

## Lesson 6

### Proposed title

`Highest-Complexity Excel: Inventory Decision Dashboard and Method Recommendation`

### Purpose

This is the most complex technical lesson in the unit. Students integrate transaction data, valuation logic, comparison outputs, checks, and recommendation language into one dashboard-ready workbook.

### Phase 1: Hook

- Demo one dashboard showing ending inventory, COGS, and method comparison results.
- Show how a manager can move from raw transactions to a recommendation quickly.

### Phase 2: Introduction

- Teach the structure of a decision-ready inventory dashboard.
- Clarify what belongs in support sheets versus what belongs on the dashboard.
- Reinforce that the dashboard exists to defend ending inventory and method choice.

### Phase 3: Guided Practice

- Students connect transaction tables, method outputs, comparison summaries, and check sections into one workbook.
- Add stable charts or summary tiles that update cleanly.

### Phase 4: Independent Practice

- Students complete an integration challenge with changing purchase costs or sales patterns.
- Students produce a short executive recommendation supported by workbook evidence.

### Phase 5: Assessment

- Check technical integration, workbook stability, and recommendation quality.
- Include a short explanation of when the chosen inventory method is appropriate.

### Phase 6: Closing

- Reflect on how integrated workbooks build trust in the ending inventory number.
- Preview Lesson 7 as the dress rehearsal using one shared dataset.

### Implementation sub-tasks

- Rewrite `lesson06/lesson-data.ts` so the dashboard is inventory-only.
- Ensure the workbook surfaces all four methods or a justified subset used for recommendation.
- Make the executive summary answer two questions clearly:
  - what is ending inventory
  - why is this method the best fit

## Lesson 7

### Proposed title

`Dress Rehearsal: One Shared Inventory Dataset, One Shared Workbook`

### Purpose

Lesson 7 should function like Unit 6 Lesson 7: one guided rehearsal before independent project work begins.

### Phase 1: Hook

- Show what a polished inventory workbook looks like versus a fragile one.
- Make the transfer purpose explicit: everyone is rehearsing the project process together.

### Phase 2: Introduction

- Introduce the Definition of Done for the Unit 07 project workbook.
- Give students the shared workbook and shared dataset.
- Walk through the required sheets and evidence expectations.

### Phase 3: Guided Practice

- Teacher leads a build sprint across the key sheets.
- Students complete method outputs, checks, and comparison summaries.

### Phase 4: Independent Practice

- Students finish the rehearsal workbook with minimal support.
- Require a final recommendation about which method best fits the shared business.

### Phase 5: Assessment

- Use a checklist-based audit and peer review.
- Include a short comprehension check on method fit and workbook quality.

### Phase 6: Closing

- Reflect on what made the ending inventory number trustworthy.
- Preview Lessons 8-10 as the same process with different businesses.

### Implementation sub-tasks

- Rewrite `lesson07/lesson-data.ts` to explicitly frame the lesson as rehearsal for the project.
- Build one shared workbook and one shared CSV for the whole class.
- Add a tutorial and quality checklist aligned to project expectations.

## Lesson 8

### Proposed title

`Group Project Kickoff: New Business, New Inventory Data, Same Workbook Logic`

### Purpose

Begin independent group transfer by repeating the Lesson 7 workflow on four different businesses.

### Phase 1: Hook

- Revisit the Lesson 7 rehearsal and explain the transfer challenge.
- Reveal the four project businesses and datasets.

### Phase 2: Introduction

- Clarify the project milestone: inspect data, define the business problem, and build the workbook skeleton.
- Review the non-negotiable workbook structure and quality standard.

### Phase 3: Guided Practice

- Groups analyze their assigned data and identify how the ending inventory formula will be supported.
- Teacher conferences with each group to confirm structure and scope.

### Phase 4: Independent Practice

- Groups create the workbook skeleton and load their data.
- Groups document assumptions and risks.

### Phase 5: Assessment

- Milestone review of project brief, workbook structure, and dataset understanding.

### Phase 6: Closing

- Reflect on how the assigned business differs from the shared rehearsal case.

### Implementation sub-tasks

- Expand `lesson08/lesson-data.ts` from a one-phase milestone into a six-phase lesson.
- Reduce project scenarios to four businesses.
- Create four project datasets aligned to the four-method inventory unit.

## Lesson 9

### Proposed title

`Group Project Build: Complete the Workbook and Rehearse the Recommendation`

### Purpose

Groups complete the technical model, test it, and rehearse the business recommendation.

### Phase 1: Hook

- Show a weak versus strong project prototype.

### Phase 2: Introduction

- Review the Definition of Done and milestone expectations.

### Phase 3: Guided Practice

- Teacher models one troubleshooting cycle on a broken inventory workbook.

### Phase 4: Independent Practice

- Groups complete their workbooks, test method outputs, and rehearse their recommendation.

### Phase 5: Assessment

- Milestone review of workbook completion, QA evidence, and recommendation quality.

### Phase 6: Closing

- Reflect on what changed after testing and rehearsal.

### Implementation sub-tasks

- Expand `lesson09/lesson-data.ts` into a six-phase lesson.
- Add peer critique aligned to workbook quality and recommendation clarity.

## Lesson 10

### Proposed title

`Final Presentation: Defend Ending Inventory, Method Choice, and Business Recommendation`

### Purpose

Assess whether students can independently explain and defend a method recommendation using a workbook built from their own group's data.

### Phase 1: Hook

- Frame the lesson as a professional defense of an inventory workbook and recommendation.

### Phase 2: Introduction

- Review presentation expectations, rubric criteria, and peer review process.

### Phase 3: Guided Practice

- Give groups short final polish time for workbook clarity and presentation flow.

### Phase 4: Independent Practice

- Groups present, answer questions, and defend their method choice with workbook evidence.

### Phase 5: Assessment

- Evaluate technical accuracy, reasoning, communication, and Q&A.

### Phase 6: Closing

- Reflect on how students moved from raw records to a defendable ending inventory number.

### Implementation sub-tasks

- Expand `lesson10/lesson-data.ts` into a six-phase lesson.
- Ensure the final rubric weights model integrity and recommendation quality together.

## Suggested resource plan

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

## Definition of Done for the unit rewrite

- Unit 07 is inventory-only.
- The ending inventory formula is visible throughout the unit.
- Lessons 1-6 escalate cleanly from concept to high-complexity Excel.
- All four inventory methods are taught:
  - FIFO
  - LIFO
  - Specific Identification
  - Weighted Average
- Lesson 7 clearly rehearses the exact workflow used in Lessons 8-10.
- Lessons 8-10 use four different businesses and four different datasets.
- Phase pages are textbook-first, business-authentic, and aligned to the new inventory scope.
