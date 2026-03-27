---
name: launch-lesson
description: Write or revise a student-facing launch lesson for Math for Business Operations. Use for Lesson 1 or any lesson explicitly designated as a launch lesson. This skill is for lessons that introduce the founder problem, unit scoreboard, shared simulation, and phase-by-phase launch flow. Do not use for accounting-principles lessons, Excel-principles lessons, or project lessons.
---

# Launch Lesson Skill

Assume the repository's base lesson standard in `AGENTS.md` already applies. This skill adds only the launch-lesson logic.

## Goal

A launch lesson should:
- create urgency around one founder problem
- introduce the unit scoreboard or driving equation
- establish the shared business simulation or month/story context
- help students notice business pressure before formal rules are taught
- prepare students for procedural instruction in later lessons

This is not a workbook lesson, drill lesson, or project lesson.

## Use This Skill When

Use this skill when the lesson's main job is to:
- launch a new unit
- introduce Sarah's problem or a comparable founder problem
- establish the core business tension
- preview the unit's enduring formula, scoreboard, or decision frame
- create a shared simulation students will revisit later

## Do Not Use This Skill When

Do not use this skill if the lesson is mainly about:
- teaching a formal accounting procedure
- repeated algorithmic practice for fluency
- Excel feature training or workbook building
- multi-step project production

## Non-Negotiable Launch Rule

Lesson 1 Phase 1 must begin with Sarah Chen's interview video using the TechStart narrative arc.

Requirements:
- Use the shared `VideoPlayer` component.
- The video must introduce the founder problem through Sarah's voice.
- Include title, description, YouTube ID, duration, and full transcript data.
- The video should create business tension and credibility, not teach formal procedures.
- Follow the video immediately with one short processing move such as risk triage, prediction, quick comprehension, or turn-and-talk.

## Launch-Lesson Phase Contract

### Phase 1: Hook
Purpose:
Create tension and make the founder problem feel real.

Requirements:
- Start with Sarah's interview video.
- Show what Sarah cannot yet explain or defend.
- Include one short prediction, triage, or discussion move.
- End with clear pressure, not resolution.

Avoid:
- definitions dump
- long vocabulary instruction
- procedural math practice
- replacing Sarah's interview with static exposition

### Phase 2: Introduction
Purpose:
Set up the month, business system, scoreboard, or unit formula.

Requirements:
- name the scoreboard explicitly
- show the main moving parts of the system
- explain what students will track across the unit
- use one bounded interactive to help students scan the system

Avoid:
- formal rules that belong in Lessons 2-4
- too many new terms at once

### Phase 3: Guided Practice
Purpose:
Train students to notice what moves when business events happen.

Requirements:
- use a shared dataset or simulation
- ask students to predict before reveal
- show before/after changes clearly
- focus on noticing business effects, not full formal calculation

Avoid:
- open-ended simulation with too many degrees of freedom
- workbook-like tasks

### Phase 4: Independent Practice
Purpose:
Let students make bounded business decisions inside the launch scenario.

Requirements:
- keep the task constrained
- allow 1-2 meaningful choices
- show consequences in a visible way
- reinforce the difference between surface activity and the deeper accounting problem

Avoid:
- algorithmic drill
- Excel build tasks
- broad sandbox gameplay unless tightly bounded

### Phase 5: Assessment
Purpose:
Check launch understanding only.

Requirements:
- short MCQ exit ticket
- assess the founder problem, scoreboard, and core distinction(s)
- keep it narrow and aligned to the launch lesson

Avoid:
- procedural mastery checks that belong in later lessons
- bloated assessment wrappers

### Phase 6: Closing
Purpose:
Lock in the unit frame and point forward.

Requirements:
- restate the enduring formula, scoreboard, or key unit question
- summarize what students should now understand
- preview the first formal rule or principle coming next
- include reflection

Avoid:
- introducing major new content
- excessive recap repetition

## Component Rules For Launch Lessons

Prefer components that:
- support prediction before reveal
- show before/after state changes
- keep one shared simulation alive across phases
- make business pressure visible

Avoid components that:
- feel like workbook construction
- require long procedural setup
- test fluency before concepts exist
- introduce too many controls at once

## Writing Rules Specific To Launch Lessons

- Keep the founder problem concrete and specific.
- Return to the same problem across all 6 phases.
- Use narrative pressure, not generic exposition.
- Keep formal terminology light and purposeful.
- Make students feel the need for the rules before teaching the rules.
- Keep Sarah and TechStart visible as the narrative spine of the lesson.

## Success Test

A strong launch lesson should leave students able to answer:
- What is Sarah's actual business problem?
- Why does this problem matter to profit, planning, lenders, or investors?
- What is the scoreboard or formula for this unit?
- What will later lessons teach that Sarah still does not know yet?
