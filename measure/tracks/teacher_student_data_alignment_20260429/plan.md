# Implementation Plan: Teacher/Student Data Alignment Audit and Amendments

## Track ID: teacher_student_data_alignment_20260429

## Priority
P0. Teacher-facing lesson plans and milestones must be trustworthy before additional teacher content work proceeds.

## Phase 1: Alignment Audit Guardrail
- [ ] Task 1.1: Define the audit contract
  - [ ] Specify the fields compared across student lesson data, teacher lesson plans, and unit data.
  - [ ] Document known acceptable differences, such as teacher-only facilitation guidance.
  - [ ] Define mismatch severity levels: blocker, content drift, route drift, and informational.
- [ ] Task 1.2: Add the first deterministic audit check
  - [ ] Implement a script or test that loads student lesson metadata and teacher/unit data for one unit.
  - [ ] Check lesson titles, durations, phase counts, phase names, and milestone day/title/description alignment.
  - [ ] Produce readable mismatch output by unit and lesson.
- [ ] Task 1.3: Seed the audit with Unit 08
  - [ ] Run the check logic against Unit 08 data.
  - [ ] Record current Unit 08 mismatches in an audit note or plan update.
  - [ ] Use the mismatch list as the repair checklist for Phase 2.

## Phase 2: Unit 08 Data Amendments
- [ ] Task 2.1: Align Unit 08 assessment milestones
  - [ ] Update `src/data/unit08.ts` milestones to match Lessons 08-10 project milestones.
  - [ ] Ensure milestone criteria match the student pages' acceptance criteria and project flow.
  - [ ] Reconcile `unit08LessonPlan.assessment.milestones` if the teacher plan duplicates milestone data.
- [ ] Task 2.2: Align Unit 08 teacher lesson details to student lesson phases
  - [ ] Rewrite `src/data/teacher/unit08-lesson-plan.ts` daily lessons so each day follows the implemented student lesson title, focus, and phase progression.
  - [ ] Preserve operational teacher guidance while removing stale or contradictory activities.
  - [ ] Handle Lessons 08-10 explicitly, including the fact that Lessons 08-09 are project-day pages and Lesson 10 is a single assessment phase.
- [ ] Task 2.3: Reconcile Unit 08 rubric and project language
  - [ ] Compare rubric weights and category names across `unit08.ts`, `unit08-lesson-plan.ts`, and Lesson 10 student page.
  - [ ] Choose one canonical rubric for Unit 08 or document any intentionally different formative/final rubrics.
  - [ ] Amend teacher/student-facing data that contradicts the chosen canonical rubric.

## Phase 3: Unit-by-Unit Audit for Units 01-07
- [ ] Task 3.1: Run alignment audit across Units 01-07
  - [ ] Generate mismatch summaries for each unit.
  - [ ] Identify units with stale milestones, lesson-detail drift, route drift, or rubric drift.
  - [ ] Prioritize units by teacher-facing risk and amount of detected drift.
- [ ] Task 3.2: Create repair checklist for each affected unit
  - [ ] Add per-unit subtasks or follow-up tracks if the drift is large.
  - [ ] Mark false positives and intentional differences.
  - [ ] Keep Unit 08 as the model for how to amend without flattening teacher guidance.

## Phase 4: Remaining Unit Amendments
- [ ] Task 4.1: Amend highest-risk units after Unit 08
  - [ ] Update teacher lesson-plan data to match implemented student lessons.
  - [ ] Update unit assessment milestone data where it conflicts with student project flow.
  - [ ] Keep changes scoped to one unit at a time.
- [ ] Task 4.2: Re-run the audit and resolve regressions
  - [ ] Confirm amended units no longer produce blocker or content-drift mismatches.
  - [ ] Document any remaining accepted differences.

## Phase 5: Verification and Handoff
- [ ] Task 5.1: Verify teacher routes against amended data
  - [ ] Spot-check `/teacher/unit08/` and `/teacher/unit08/lesson-01` through `/lesson-10`.
  - [ ] Spot-check at least one repaired lesson in every additional amended unit.
  - [ ] Confirm teacher pages still render useful operational guidance.
- [ ] Task 5.2: Run approved verification gates
  - [ ] Run non-npm checks that do not require approval.
  - [ ] Ask for explicit approval before running `npm run typecheck` or `npm run lint`.
  - [ ] Record any verification command that could not be run.
- [ ] Task 5.3: Update Measure memory
  - [ ] Add a lesson learned describing the canonical source order and alignment guardrail.
  - [ ] Update tech debt if any units are intentionally deferred.
  - [ ] Mark completed tasks with concise notes so another agent can continue.

