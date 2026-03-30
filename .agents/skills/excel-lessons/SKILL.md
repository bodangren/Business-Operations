---
name: excel-lessons
description: Write or revise a student-facing Excel lesson for Math for Business Operations. Use for lessons 4-6 when the lesson teaches a new Excel tool, workbook pattern, or automation move before project rehearsal. This skill is for business-pressure hooks, explicit tool anatomy, safe simulator practice, workbook build sprints, workbook audit/explanation, and reflection. Do not use for launch lessons, accounting-principles lessons, lesson 7 project rehearsal, or project lessons.
---

# Excel Lessons Skill

Assume the repository's base lesson standard in `AGENTS.md` already applies. This skill adds only the Excel-lesson logic.

## Goal

An Excel lesson should:
- teach one clear Excel move or workbook pattern
- connect that move to a real business decision or communication need
- rehearse the logic safely before students touch the live workbook
- produce a concrete workbook artifact by the end of phase 4
- check both tool mechanics and model trustworthiness

This skill covers the core Excel-build lessons, not the project rehearsal lesson.

## Use This Skill When

Use this skill when the lesson's main job is to:
- introduce a specific Excel tool such as Goal Seek, Data Tables, validation, or lookup logic
- teach a workbook pattern such as scenario tables, dashboard summaries, or linked outputs
- build an investor-ready Excel artifact from prior accounting logic
- move students from conceptual math to applied spreadsheet automation

## Do Not Use This Skill When

Do not use this skill if the lesson is mainly about:
- launching the unit story
- teaching an accounting rule or manual method before Excel
- auditing a shared rehearsal workbook before the project
- independent project production or milestone work

Use the separate `project-rehearsal` skill for lesson 7 style workbook audit and transfer lessons.

## Core Writing Rules

- Teach one dominant Excel move per lesson.
- Start with business pressure, not software trivia.
- Name the starting workbook state and the ending workbook artifact explicitly.
- Keep the workbook logic tied to prior accounting reasoning.
- Rehearse the logic in phase 3 before the real workbook sprint in phase 4.
- Separate tool fluency from explanation and defense.
- Keep page, workbook, tutorial, and file names aligned.

## Non-Negotiable Excel Rule

If the Excel procedure is fragile, multi-step, or easy to misconfigure, phase 3 must include a safe rehearsal component before phase 4 asks students to do the real build in Excel.

## Excel-Lesson Phase Contract

### Phase 1: Tool Pressure
Purpose:
Create business urgency for the tool or workbook move.

Requirements:
- open with a business or investor scenario where speed, clarity, or flexibility matters
- make the tool feel necessary, not decorative
- connect the lesson to the existing workbook or model
- include one short comprehension or discussion move

Avoid:
- feature lists without business context
- generic "Excel is useful" exposition

### Phase 2: Tool Anatomy
Purpose:
Teach the feature mechanics, the required inputs, and the common setup traps.

Requirements:
- name the tool or workbook pattern clearly
- explain the parts of the feature directly
- show where the tool lives in Excel when relevant
- include one short check on vocabulary, anatomy, or setup logic
- teach at least one common failure mode

Avoid:
- discovery-first tool instruction
- skipping prerequisites from the existing workbook

### Phase 3: Safe Rehearsal
Purpose:
Practice the logic in a no-risk environment before students touch the live workbook.

Requirements:
- use a custom simulator, manual logic trainer, or tightly bounded guided interaction
- mirror the real workbook logic as closely as possible
- give immediate feedback or reveal after an attempt
- make the bridge to phase 4 explicit

Avoid:
- using only prose when the tool setup is fragile
- broad sandbox interactions
- a rehearsal task that does not match the phase-4 workbook move

### Phase 4: Workbook Sprint
Purpose:
Build the real Excel artifact.

Requirements:
- state the exact starting workbook or download path
- state the output students should finish by the end of class
- include one reference model or layout guide
- provide a short build sequence with no more than a few major blocks
- include verification checkpoints after major build steps
- include a Definition of Done or rubric

Avoid:
- assuming prior workbook success without naming a fallback or checkpoint
- giant instruction dumps with no verification gates
- workbook tasks with no visible deliverable

### Phase 5: Audit and Explain
Purpose:
Check tool understanding and require a brief workbook-based explanation or defense.

Requirements:
- use a short technical or conceptual check
- add one brief artifact task such as a memo, voice script, recommendation, or audit response
- focus on trustworthiness, interpretation, and business communication

Avoid:
- bloated assessments
- turning phase 5 into a second build sprint

### Phase 6: Reflection and Handoff
Purpose:
Lock in what the tool added to the model and preview the next workbook layer.

Requirements:
- reflect on both tool use and professional judgment
- name what the student can now do faster or more reliably
- preview the next workbook layer or next lesson's build

Avoid:
- major new instruction
- long repetitive recap sections

## Spreadsheet Component Rules

`SpreadsheetWrapper` is a preview component first, not a full Excel engine.

Use `SpreadsheetWrapper` when you need:
- a reference layout
- a static workbook mockup
- a simple read-only model preview
- a small controlled spreadsheet interaction with tested formulas

Do not rely on `SpreadsheetWrapper` for:
- modern Excel-only formulas such as `XLOOKUP`
- authentic formatting plus live computation in the same cells
- chart wiring, dropdown validation behavior, or workbook QA workflows
- the main practice loop for a fragile Excel procedure

## Spreadsheet Authoring Rules

- Treat any cell value that starts with `=` as a live formula.
- If a formula should be displayed as text, prefix it with a leading space.
- If a formula should actually calculate, referenced inputs must be raw numbers or plain numeric strings, not currency-formatted strings like `$1,350` or labeled strings like `24 units`.
- Most lesson reference sheets should use precomputed outputs and formula-text-as-text.
- Use explicit cell factory helpers for consistency.
- Build rectangular grids with explicit blank cells instead of ragged rows.
- Pass explicit `columnLabels` for reference models.
- In read-only previews, set both cell-level `readOnly: true` and wrapper-level `readOnly={true}`.

## Formula Guidance

Under the current component stack:
- `IFERROR` and other simple functions may work
- `XLOOKUP` should be treated as unsupported in `SpreadsheetWrapper`
- currency-formatted strings will break arithmetic formulas
- formula parse failures often collapse into generic spreadsheet errors

Therefore:
- only use live formulas in `SpreadsheetWrapper` when the exact parser behavior has been tested
- otherwise show formulas as text and show the expected outputs separately

## Recommended Cell Helper Pattern

Prefer local helpers such as:
- `blankCell`
- `textCell`
- `numberCell`
- `formulaTextCell`
- `headerCell`

`formulaTextCell` should store displayed formulas with a leading space so the wrapper does not execute them.

## Simulator Rules

Phase-3 simulator components should:
- mirror the real workbook move
- expose the key input, target, and output relationship
- include one or two common errors
- give immediate feedback
- end with a clear handoff to the actual workbook

If students need feedback, gating, hints, retries, or deliberate practice, use a custom simulator component instead of trying to make `SpreadsheetWrapper` do everything.

## Workbook Continuity Rules

Every Excel lesson should define:
- the required incoming workbook state
- the file students should open or download
- the exact sheet, block, or artifact they will build
- the short evidence they will carry into phase 5

If the lesson depends on earlier workbook work, provide a checkpoint workbook, a fallback download, or a clearly named minimum starting state.

## What Not To Standardize From Unit 6

- mismatches between page content and tutorial/workbook sequence
- reference sheets that accidentally execute unsupported formulas
- phase-4 pages that assume the prior workbook is already perfect
- assessments that sprawl into a second full build task

## Success Test

A strong Excel lesson should leave students able to answer:
- What business problem does this Excel move solve?
- What workbook inputs or prerequisites does it depend on?
- What are the exact build steps?
- What common setup error should I check first?
- What workbook artifact proves I completed the lesson correctly?
- How would I explain the result to a teacher, investor, or teammate?
