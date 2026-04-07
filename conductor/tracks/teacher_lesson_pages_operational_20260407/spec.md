# Specification: Teacher Lesson Pages Operational Rebuild

## Overview
The teacher lesson detail pages currently fail at two levels:

1. The route renders a mocked `TeacherLessonPlan` experience instead of the real per-unit, per-lesson teacher lesson-plan data.
2. The final product standard is higher than simple data wiring. Each teacher lesson page must function as an operational lesson plan that a teacher can actually use to prepare and run that specific lesson.

This track rebuilds the teacher lesson detail experience so every `/teacher/unitXX/lesson-YY` page is specific, accurate, and instructionally useful.

## Product Standard
For every teacher lesson page, a teacher should be able to answer:
- What are students doing today?
- Why does this lesson matter in the unit?
- What should I prepare before class?
- How should I run the main activities?
- What misconceptions or trouble spots should I watch for?
- How do I check whether students are on track?
- What does strong student work look like?
- How does today connect to the next lesson?

If a page cannot answer those questions for its specific lesson, it is incomplete.

## Functional Requirements
- Replace mocked teacher lesson detail rendering with real per-unit, per-lesson data from `src/data/teacher/unitXX-lesson-plan.ts`.
- Ensure every teacher lesson detail page renders distinct lesson-specific content for the selected unit and lesson.
- Audit all teacher lesson-plan data files for instructional completeness across all 80 lessons.
- Add or refine lesson-specific teaching guidance where needed, including:
  - lesson purpose and focus,
  - preparation/materials,
  - activity-level facilitation guidance,
  - checks for understanding,
  - likely misconceptions or watch-fors,
  - differentiation/intervention notes where missing,
  - criteria for strong student work,
  - lesson-to-lesson handoff or next-step guidance.
- Keep teacher lesson pages aligned with the actual student lesson sequence and current curriculum framing.
- Reuse existing teacher lesson-plan structures where possible, extending types only when the current model is insufficient.

## Non-Functional Requirements
- The fix must preserve static export compatibility.
- The solution must avoid duplicate sources of truth for lesson titles, pacing, or teacher guidance.
- Shared rendering logic should be reused or extracted instead of maintaining parallel teacher lesson renderers with overlapping responsibilities.
- The final lesson detail pages must be readable on desktop and mobile.
- Verification must include route-level checks on multiple units and lessons, not just type/build success.

## Acceptance Criteria
- Every `/teacher/unitXX/lesson-YY` page renders real lesson-specific content rather than placeholder content.
- Each teacher lesson page includes enough lesson-specific instructional detail to prepare and run that lesson without relying on generic repeated guidance.
- Teacher lesson detail content is aligned with current student-facing unit scope and sequence.
- Distinct lessons within and across units display materially different objectives, activities, materials, and guidance.
- Lint/build/test verification passes after implementation.

## Out of Scope
- Rewriting the full teacher unit overview information architecture.
- Reworking student lesson content except where alignment defects require a documented correction.
- Adding live teacher tooling, authentication, or CMS workflows.
- Converting teacher pages into minute-by-minute scripts for every teacher utterance.
