# Specification: Teacher and Student Alignment

## Overview
The teacher-facing section and related planning assets have drifted away from the actual student curriculum. This track reconciles the teacher experience with what students now see in the textbook, with special attention to Units 07 and 08.

The goal is not to redesign teacher tooling. The goal is to make teacher-facing materials trustworthy again.

## Canonical Sources
For this track, the source-of-truth order is:
1. Current Conductor unit tracks and archived completed unit tracks
2. Current student lesson data and student page copy
3. Teacher-facing lesson-plan/data files

Teacher materials must follow the current curriculum, not older naming or older unit scope.

## Functional Requirements

### FR1: Unit Naming and Scope Alignment
- Teacher-facing labels must align with the current student curriculum and Conductor direction.
- Unit 07 must be inventory-only.
- Unit 08 must be fixed assets and depreciation.
- Retired framing such as "Asset & Inventory Tracker" or "Year-1 Startup Model" must be removed or rewritten wherever those names no longer reflect the student curriculum.

### FR2: Teacher Lesson Plan Alignment
- Teacher unit lesson plans must align with current student lesson titles, essential questions, progression, and final deliverables.
- At minimum, align:
  - unit titles,
  - essential questions,
  - unit descriptions,
  - milestone framing,
  - workbook expectations,
  - presentation/recommendation framing.
- The teacher side should not instruct teachers to teach retired material that students no longer see.

### FR3: Intro Video and Narrative Alignment
- Update any shared intro-video metadata or teacher references that still describe the old unit story.
- Unit 07 video and narrative references must match inventory-only scope.
- Unit 08 video and narrative references must match fixed assets and depreciation scope.

### FR4: Teacher Shell and Overview Alignment
- Teacher route labels, teacher navigation, and teacher overview pages must use the same current unit naming used in the student shell.
- The teacher course overview must not contradict the current frontmatter/course map.

### FR5: Alignment Checklist for Ongoing Maintenance
- Add or update a lightweight alignment checklist so future curriculum revisions update both student and teacher surfaces together.
- The checklist should be simple enough for junior developers to follow when updating unit content later.

## Non-Functional Requirements
- Static-export compatible.
- No new teacher-only features required.
- Prefer deterministic data updates over ad hoc UI text overrides.
- Keep language clear enough that a teacher can trust the student/teacher handoff without reading code.

## Acceptance Criteria
- Teacher route labels for Units 07 and 08 match the actual student curriculum.
- Teacher lesson-plan files for Units 07 and 08 no longer describe retired content.
- Intro video metadata no longer tells the wrong unit story for Units 07 and 08.
- Teacher shell/course-overview copy no longer conflicts with the student course map.
- A documented alignment checklist exists for future unit revisions.

## Out of Scope
- New teacher dashboards.
- New teacher analytics.
- Vocabulary flashcards or spaced repetition.
- Export/import features.
