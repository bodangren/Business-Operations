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

Lesson 7 uses one shared business and one shared dataset. Lessons 8-10 repeat the same workbook logic with four different businesses and four different datasets through one-phase group project milestone lessons.

## Unit-wide implementation tasks

- Rewrite all Unit 07 `lesson-data.ts` files around an inventory-only progression.
- Remove depreciation language, activities, workbook references, and assessment expectations from Unit 07.
- Rewrite lesson titles and rationales so the ending inventory formula stays central.
- Standardize Lessons 1-7 around six student phases.
- Keep Lessons 8-10 as one-phase group project milestone lessons.
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

**Status:** ✅ Complete

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

**Status:** ✅ Complete (All 6 phases + 6 interactive components)

### Proposed title

`Specific Identification and Weighted Average`

### Purpose

Teach the third and fourth inventory methods with the same calculation-first, textbook-first scaffolding used in Lessons 2-3.

Lesson 4 should not begin with Excel. Students first need to understand why these two methods exist, what kinds of businesses use them, and how the cost assignment works by hand before any workbook build happens in Lesson 5.

The scaffolding for this lesson should be tighter than the original draft:

- start with business fit before arithmetic
- teach one new method at a time
- use fixed, teacher-controlled scenarios before any open or randomized practice
- show one fully worked example before asking for independent calculation
- reduce duplicate entry whenever possible so students are not re-solving the same logic twice
- state the weighted-average rounding rule explicitly
- use the four-method matrix only after students understand the two new methods
- do not ask for a full recommendation argument yet; Lesson 4 is still a method-understanding lesson

### Implementation Progress

**Completed Files (Session 2025-03-27):**
- `lesson04/lesson-data.ts` - Rewritten with inventory-focused learning objectives for Specific ID and Weighted Average
- `lesson04/phase-1/page.tsx` - Complete rewrite with method-fit sorting activity, 4 business scenarios, conceptual focus
- `lesson04/phase-2/page.tsx` - Complete rewrite with "I Do" teacher demonstration + interactive practice
- `lesson04/phase-3/page.tsx` - Complete rewrite with "We Do" Weighted Average walkthrough and demo component
- `lesson04/phase-4/page.tsx` - Complete rewrite with independent practice + four-method comparison matrix
- `lesson04/phase-5/page.tsx` - Complete assessment using unit07-phase5 question bank
- `lesson04/phase-6/page.tsx` - Complete reflection prompts and closing activities

**Interactive Components:**
- `lesson04/SpecificIDTracker.tsx` - **I Do (Teacher Models)**: 6-step demonstration walkthrough
  - Step 1: Understand the business context
  - Step 2: Meet your inventory (5 laptops with serials and costs)
  - Step 3: Track each sale (3 customers, exact serials recorded)
  - Step 4: Calculate COGS (sum of exact costs sold)
  - Step 5: Calculate Ending Inventory (remaining items)
  - Step 6: Verify equation balances
  - Students observe, click "Next" to advance

- `lesson04/SpecificIDPractice.tsx` - **You Try (Interactive)**: 6-step active practice with progressive unlocking
  - Step 0: Prediction question ("Which method fits unique laptops?")
  - Step 1: Click-to-reveal laptops, build GAFS total, swift check on calculation
  - Step 2: Click serial numbers to match customers to their purchases
  - Step 3: Build COGS table by clicking sold items, calculate total
  - Step 4: Click remaining items to build ending inventory
  - Step 5: Type verification sum to balance equation
  - Each step locks until previous task complete

- `lesson04/WeightedAvgDemo.tsx` - **We Do (Weighted Average)**: 7-step teacher-led walkthrough
  - Step 1: Business context (gas station inventory)
  - Step 2: Build Goods Available for Sale (running totals)
  - Step 3: Calculate Weighted Average Cost per unit
  - Step 4: Apply to units sold → COGS
  - Step 5: Apply to units remaining → Ending Inventory
  - Step 6: Verify the equation balances
  - Step 7: Review and compare to FIFO/LIFO
  - Explicit rounding rule: 2 decimal places for dollars
  - Shows common mistakes (averaging prices vs. pooling costs)

- `lesson04/WeightedAvgPractice.tsx` - **You Try (Weighted Average)**: Interactive practice with:
  - Gas station scenario with multiple fuel deliveries
  - Click-to-reveal deliveries, build GAFS
  - Calculate weighted average per gallon
  - Apply to both COGS and Ending Inventory
  - Real-time validation of rounding decisions
  - Progressive unlocking similar to Specific ID practice

- `lesson04/MethodPracticeCombined.tsx` - **Independent Practice**: Tabbed interface
  - Tab 1: Specific ID practice scenario
  - Tab 2: Weighted Average practice scenario
  - "New Numbers" button for reattempt with different data
  - Side-by-side comparison of both methods

- `lesson04/MethodComparisonMatrix.tsx` - **Synthesis Activity**: Four-method comparison
  - Interactive matrix: FIFO, LIFO, Specific ID, Weighted Average
  - Columns: How It Works, When to Use, Business Examples, Pros/Cons
  - Drag-and-drop or click-to-select for business contexts
  - Provides integrated synthesis across all 4 methods

**Key Design Decisions Made:**
1. Phase 1 is purely conceptual - no calculations, focus on business context
2. Method-fit sorting activity with 4 businesses (jewelry, cars, computers, bulk goods)
3. Immediate feedback on sorting with detailed explanations
4. Phase 2 uses TWO components: demonstration (SpecificIDTracker) + practice (SpecificIDPractice)
5. Phase 3 uses TWO components: demonstration (WeightedAvgDemo) + practice (WeightedAvgPractice)
6. Serial numbers and exact costs make Specific ID tracking tangible
7. Small numbers ($1,450-$1,525 for laptops) easy to follow mentally
8. COGS calculation: $1,450 + $1,510 + $1,525 = $4,485 (sum of exact items sold)
9. Emphasis: "Not a flow assumption - you KNOW which item sold"
10. Interactive practice requires student action (clicking, typing) to advance
11. Swift checks verify understanding before proceeding
12. Phase 4 combines both methods in MethodPracticeCombined with tabs
13. Phase 4 concludes with MethodComparisonMatrix for four-method synthesis
14. Explicit rounding rule for Weighted Average: 2 decimal places
15. Common mistakes shown: averaging prices (wrong) vs. pooling costs (right)

### Phase 1: Introduction

**Status:** ✅ Complete

- Introduce the business problem: not every inventory method fits every business.
- Compare a jewelry store, a car dealership, a custom computer builder, and a bulk grocery supplier.
- Establish the key distinction:
  - `Specific Identification` works when exact items can be traced.
  - `Weighted Average` works when items are similar and pooled together.
- Use a method-fit sorting activity so students see the business purpose before the math.
- Keep this phase conceptual. Do not mix in full calculation yet.
- Make students explain why a method does or does not fit a business, not just sort the label correctly.

### Phase 2: I Do

**Status:** ✅ Complete (with TWO components)

- Teacher models `Specific Identification` step by step using a small inventory of unique, tagged items.
- Show how exact sold items move to COGS and how unsold tagged items remain in ending inventory.
- Emphasize that this is not a flow assumption like FIFO or LIFO. It is exact-item tracking.
- Keep the numbers small and visible so students can follow the reasoning easily.
- Use one fully worked example before asking students to do any assignment themselves.
- Use actual item tags or serial numbers so students see that the method depends on traceability, not on old/new layer order.
- Auto-calculate remaining ending inventory after sold items are selected so students focus on the logic first.

**Components Built:**
1. `SpecificIDTracker.tsx` - Teacher demonstration (students watch and click "Next" to advance)
2. `SpecificIDPractice.tsx` - Interactive practice (students must complete tasks to unlock next step)
   - Prediction question at start
   - Click-to-reveal inventory items
   - Swift check on GAFS calculation
   - Click-to-match sales to serials
   - Build COGS table by clicking
   - Build ending inventory by clicking
   - Type verification sum

### Phase 3: We Do

**Status:** ✅ Complete

- Teacher and students solve a `Weighted Average` scenario together using `WeightedAvgDemo.tsx`.
- Walk through the sequence:
  - total units available
  - total cost available
  - average cost per unit
  - COGS for units sold
  - ending inventory value
- Use one event at a time with visible running totals so students do not lose the logic.
- State the rounding rule explicitly (2 decimal places for dollars).
- Use one fixed scenario with clean numbers (gas station fuel inventory).
- Show where students commonly make mistakes:
  - averaging prices instead of pooling costs (common error)
  - forgetting to recompute the pooled cost after a purchase
  - rounding too early
- Keep the interaction sequential so students only compute one new quantity at a time.
- Follow with `WeightedAvgPractice.tsx` for interactive student engagement.

### Phase 4: You Do

**Status:** ✅ Complete

- Students complete two independent practice tasks using `MethodPracticeCombined.tsx`:
  - Tab 1: `Specific Identification` scenario where they assign exact sold items to COGS
  - Tab 2: `Weighted Average` scenario where they compute average cost, COGS, and ending inventory
- End with a four-method comparison matrix using `MethodComparisonMatrix.tsx`:
  - FIFO
  - LIFO
  - Specific Identification
  - Weighted Average
- The matrix helps students explain:
  - how each method works
  - what type of business should use it
  - why a manager might prefer it
- The comparison matrix comes after the two practice tasks, not before.
- Focus is on accurate method recognition and method fit (no full business recommendation yet).
- Includes "Turn and Talk" discussion prompts for collaborative reflection.

### Phase 5: Assessment

**Status:** ✅ Complete

- Use ComprehensionCheck with questions from `unit07-phase5` question bank.
- Check method recognition, method fit, specific identification logic, and weighted-average calculation.
- Include questions on why specific identification is only realistic for certain businesses.
- Include questions on why weighted average works best for similar, pooled inventory.
- Include items testing the rounding rule and correct weighted-average setup.
- Students can retry and see explanations for each answer.

### Phase 6: Closing

**Status:** ✅ Complete

- Uses ReflectionJournal with three prompts:
  - Which method felt most intuitive?
  - What concept was most challenging?
  - Apply methods to a real business context
- Students reflect on which method felt most intuitive, which method felt most difficult, and what business context helped the most.
- Preview Lesson 5 as the point where students move from hand calculation and method comparison into workbook design.
- Key takeaways card summarizes both methods and provides a method selection guide.
- Reflection surfaces confusion points before workbook construction begins.

### Implementation sub-tasks

**Completed:**
- ✅ Rewrite `lesson04/lesson-data.ts` around specific identification and weighted average with the six-phase structure
- ✅ Build a method-fit sorting activity for business contexts (Phase 1)
- ✅ Build a specific-identification tracker for teacher demonstration (Phase 2 - SpecificIDTracker.tsx)
- ✅ Build an interactive practice component for student engagement (Phase 2 - SpecificIDPractice.tsx)
- ✅ Add prediction question, swift checks, and progressive unlocking to practice component
- ✅ Build a weighted-average guided lab with visible running totals and explicit rounding support (Phase 3 - WeightedAvgDemo.tsx)
- ✅ Build interactive Weighted Average practice component (Phase 3 - WeightedAvgPractice.tsx)
- ✅ Build independent practice scenarios for both Specific ID and Weighted Average (Phase 4 - MethodPracticeCombined.tsx)
- ✅ Build a four-method comparison matrix for synthesis and method selection (Phase 4 - MethodComparisonMatrix.tsx)
- ✅ Add assessment questions to question bank for Lesson 4 (Phase 5 - unit07-phase5.ts)
- ✅ Create reflection prompts for Lesson 4 closing (Phase 6)
- ✅ Write all 6 phase pages with complete educational content

**All sub-tasks complete for Lesson 4.**

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

- Keep `lesson08/lesson-data.ts` as a one-phase project milestone lesson.
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

- Keep `lesson09/lesson-data.ts` as a one-phase project milestone lesson.
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

- Keep `lesson10/lesson-data.ts` as a one-phase final presentation lesson.
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
- Lessons 8-10 remain one-phase group project lessons by design.
- Phase pages are textbook-first, business-authentic, and aligned to the new inventory scope.
