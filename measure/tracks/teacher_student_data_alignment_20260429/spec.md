# Specification: Teacher/Student Data Alignment Audit and Amendments

## Overview
Teacher-facing unit overview and lesson-detail pages have drifted from the implemented student curriculum. The visible issue surfaced in Unit 08: `/teacher/unit08/` shows plausible lesson topics, but lesson detail pages and assessment milestones are still driven by stale teacher/unit data and do not align with the current student lesson phases or project milestones.

This track creates a repeatable unit-by-unit alignment check and then amends teacher-facing data so teachers see the same lesson sequence, phase progression, milestones, and assessment language that students actually experience.

This is a successor to the completed `teacher_student_alignment_20260403` track. That earlier track fixed broad naming and scope drift. This track targets deeper data-level drift between student lesson metadata, teacher lesson-plan data, and unit assessment metadata.

## Problem Statement
The current teacher experience mixes multiple truth sources:

- `src/app/student/unitXX/lessonYY/lesson-data.ts` contains implemented student lesson titles, objectives, duration, phase names, and phase descriptions.
- `src/data/teacher/unitXX-lesson-plan.ts` contains teacher daily lessons and activity blocks.
- `src/data/unitXX.ts` contains unit-level assessment milestones and learning sequence data.

When these sources disagree, teacher pages become misleading. Teachers may click from a correct-looking lesson list into a detail page that describes different activities, old milestones, or project expectations that students no longer see.

## Canonical Source Order
For this track, use this source-of-truth order:

1. Implemented student lesson data and routes in `src/app/student/unitXX/lessonYY/`.
2. Student project pages and phase pages when lesson metadata is incomplete.
3. Unit-level data in `src/data/unitXX.ts`, amended to match implemented student lessons.
4. Teacher lesson-plan data in `src/data/teacher/unitXX-lesson-plan.ts`, amended to match implemented student lessons.

Teacher data should explain how to teach the implemented student lesson. It should not define a separate curriculum.

## Functional Requirements

### FR1: Add a Repeatable Alignment Check
- Create a deterministic audit that compares each unit's student lesson metadata against teacher lesson-plan metadata and unit milestone metadata.
- At minimum, the check must compare:
  - lesson count,
  - lesson titles/topics,
  - lesson duration,
  - student phase names and descriptions,
  - teacher daily lesson titles/focus/activity sequence,
  - unit assessment milestone day/title/description/criteria,
  - presence of expected student phase routes where metadata advertises phases.
- The check must report mismatches by unit and lesson in a format that can guide data amendments.

### FR2: Prioritize Unit 08 First
- Unit 08 is the first repair target because the mismatch has been confirmed manually.
- Amend Unit 08 teacher data so:
  - `/teacher/unit08/` milestones match Lessons 08-10 project milestones,
  - `/teacher/unit08/lesson-XX` detail pages align with the implemented student lesson title, focus, phase progression, and project expectations,
  - Lesson 10 rubric language no longer conflicts across teacher and student surfaces,
  - teacher daily activity blocks map cleanly to the six-phase student lesson structure where that structure exists.

### FR3: Work Unit by Unit After Unit 08
- After Unit 08, run the same check across Units 01-07.
- Amend teacher and unit data unit by unit, not through broad rewrites.
- Record which mismatches are fixed, intentionally deferred, or false positives.

### FR4: Preserve Teacher Usefulness
- Teacher lesson details must remain operational, not just mirror student metadata.
- For every amended teacher lesson, the teacher page should still answer:
  - what students do,
  - what the teacher prepares,
  - how the activities run,
  - what to check for,
  - how the lesson connects to the next lesson.
- Student metadata is the spine; teacher guidance is the instructional layer.

### FR5: Prevent Recurrence
- Add or update tests, scripts, or audit documentation so future curriculum changes flag teacher/student drift.
- The guardrail must be cheap enough to run during normal maintenance.

## Non-Functional Requirements
- Preserve static export compatibility.
- Do not introduce a CMS or runtime data-fetching dependency.
- Keep data amendments deterministic and reviewable.
- Avoid changing student lesson content unless an actual student-side defect is discovered and documented.
- Do not run npm commands unless explicitly approved by the user.

## Acceptance Criteria
- A unit-by-unit alignment audit exists and can report teacher/student lesson and milestone drift.
- Unit 08 teacher lesson details align with implemented student Unit 08 lessons.
- Unit 08 assessment milestones align with the implemented project sequence:
  - Lesson 08: Milestone 1 project kickoff/workbook started,
  - Lesson 09: Milestone 2 complete workbook and recommendation draft,
  - Lesson 10: Milestone 3 final presentation/submission/reflection.
- Unit 08 rubric language is consistent across teacher and student surfaces, or any intentional difference is documented.
- Units 01-07 have been audited with mismatch reports and prioritized amendment tasks.
- The Measure plan records completed units and remaining drift clearly enough for another agent to continue.

## Out of Scope
- Redesigning teacher page UI.
- Rewriting student lesson content for instructional quality.
- Creating new student phase routes unless required to make advertised metadata truthful.
- Replacing Measure or Conductor planning systems.
- Bulk editing all teacher data without audit evidence.

