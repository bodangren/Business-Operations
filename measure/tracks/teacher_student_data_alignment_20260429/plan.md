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
- [ ] Task 2.1: Fix Unit 06 milestone 3 day mismatch
  - [ ] Update `src/data/teacher/unit06-lesson-plan.ts` milestone 3 from day 9 to day 10.
  - [ ] Update milestone title/description to match Lesson 10 content (final presentation), not Lesson 09 content (draft recommendation).
  - [ ] Verify `src/data/unit06.ts` milestone 3 day is correctly set to 10.
- [ ] Task 2.2: Fix Unit 07 milestone count mismatch
  - [ ] Investigate: student `unit07.ts` has 2 milestones, teacher `unit07-lesson-plan.ts` has 3 milestones.
  - [ ] Determine correct milestone structure based on student Lessons 08-10.
  - [ ] Align both unit data and teacher plan to the correct structure.

## Phase 3: Units 01-05 Audit
- [ ] Task 3.1: Run alignment audit across Units 01-05
  - [ ] Generate mismatch summaries for each unit.
  - [ ] Identify units with stale milestones, lesson-detail drift, route drift, or rubric drift.
  - [ ] Prioritize units by teacher-facing risk and amount of detected drift.
- [ ] Task 3.2: Create repair checklist for each affected unit
  - [ ] Add per-unit subtasks or follow-up tracks if the drift is large.
  - [ ] Mark false positives and intentional differences.
  - [ ] Note: Units 06 and 07 blockers fixed in Phase 2; Units 08 audit complete (passed with acceptable drift).

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
  - [ ] Spot-check `/teacher/unit06/` and `/teacher/unit06/lesson-10` (milestone 3 fix).
  - [ ] Spot-check `/teacher/unit07/` milestones (milestone count alignment).
  - [ ] Spot-check at least one repaired lesson in any additional amended units.
  - [ ] Confirm teacher pages still render useful operational guidance.
- [ ] Task 5.2: Run approved verification gates
  - [ ] Run non-npm checks that do not require approval.
  - [ ] Ask for explicit approval before running `npm run typecheck` or `npm run lint`.
  - [ ] Record any verification command that could not be run.
- [ ] Task 5.3: Update Measure memory
  - [ ] Add a lesson learned describing the canonical source order and alignment guardrail.
  - [ ] Update tech debt if any units are intentionally deferred.
  - [ ] Mark completed tasks with concise notes so another agent can continue.

