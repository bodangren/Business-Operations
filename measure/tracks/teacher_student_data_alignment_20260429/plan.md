# Implementation Plan: Teacher/Student Data Alignment Audit and Amendments

## Track ID: teacher_student_data_alignment_20260429

## Priority
P0. Teacher-facing lesson plans and milestones must be trustworthy before additional teacher content work proceeds.

## Phase 1: Alignment Audit Guardrail
- [x] Task 1.1: Define the audit contract
  - [x] Specify the fields compared across student lesson data, teacher lesson plans, and unit data.
  - [x] Document known acceptable differences, such as teacher-only facilitation guidance.
  - [x] Define mismatch severity levels: blocker, content drift, route drift, and informational.
- [x] Task 1.2: Add the first deterministic audit check
  - [x] Implement a script or test that loads student lesson metadata and teacher/unit data for one unit.
  - [x] Check lesson titles, durations, phase counts, phase names, and milestone day/title/description alignment.
  - [x] Produce readable mismatch output by unit and lesson.
- [x] Task 1.3: Seed the audit with Unit 08
  - [x] Run the check logic against Unit 08 data.
  - [x] Record current Unit 08 mismatches in an audit note or plan update.
  - [x] Use the mismatch list as the repair checklist for Phase 2.

## Phase 2: Units 06 and 07 Blocker Fixes
- [x] Task 2.1: Fix Unit 06 milestone 3 day mismatch
  - [x] Update `src/data/teacher/unit06-lesson-plan.ts` milestone 3 from day 9 to day 10.
  - [x] Update milestone title/description to match Lesson 10 content (final presentation), not Lesson 09 content (draft recommendation).
  - [x] Verify `src/data/unit06.ts` milestone 3 day is correctly set to 10.
- [x] Task 2.2: Fix Unit 07 milestone count mismatch
  - [x] Investigate: student `unit07.ts` has 2 milestones, teacher `unit07-lesson-plan.ts` has 3 milestones.
  - [x] Determine correct milestone structure based on student Lessons 08-10.
  - [x] Align both unit data and teacher plan to the correct structure.

## Phase 3: Units 01-05 Audit
- [x] Task 3.1: Run alignment audit across Units 01-05
  - [x] Generate mismatch summaries for each unit.
  - [x] Identify units with stale milestones, lesson-detail drift, route drift, or rubric drift.
  - [x] Prioritize units by teacher-facing risk and amount of detected drift.
- [x] Task 3.2: Create repair checklist for each affected unit
  - [x] Add per-unit subtasks or follow-up tracks if the drift is large.
  - [x] Mark false positives and intentional differences.
  - [x] Note: Units 06 and 07 blockers fixed in Phase 2; Units 01-05 and 08 all pass with 0 blockers.

## Phase 4: Remaining Unit Amendments
- [x] Task 4.1: Amend highest-risk units after Unit 08
  - [x] Update teacher lesson-plan data to match implemented student lessons.
  - [x] Update unit assessment milestone data where it conflicts with student project flow.
  - [x] Keep changes scoped to one unit at a time.
- [x] Task 4.2: Re-run the audit and resolve regressions
  - [x] Confirm amended units no longer produce blocker or content-drift mismatches.
  - [x] Document any remaining accepted differences.

## Phase 5: Verification and Handoff
- [x] Task 5.1: Verify teacher routes against amended data
  - [x] Spot-check `src/data/unit06.ts` milestone 3: day=10, title="Final Presentation, Submission, and Reflection" — aligned with lesson 10
  - [x] Spot-check `src/data/unit07.ts` milestones: now 3 milestones at days 2, 6, 10 — aligned with teacher plan
  - [x] Spot-check `src/data/teacher/unit06-lesson-plan.ts` milestone 3: day=10, title="Final Presentation and Submission"
  - [x] Spot-check `src/data/teacher/unit07-lesson-plan.ts` milestones: 3 milestones at days 2, 6, 10
  - [x] All 8 units audited with 0 blockers
- [x] Task 5.2: Run approved verification gates
  - [x] `npm run typecheck` — 0 errors
  - [x] `npm run lint` — 0 errors (fixed pre-existing unused `Lightbulb` import in unit08/lesson03/phase-3)
  - [x] 3 pre-existing warnings in unrelated files remain
- [x] Task 5.3: Update Measure memory
  - [x] Add a lesson learned describing the canonical source order and alignment guardrail.
  - [x] Update tech debt if any units are intentionally deferred.
  - [x] Mark completed tasks with concise notes so another agent can continue.

