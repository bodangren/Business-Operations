# Student Experience Simplification Specification

## Overview

The student site has too many navigation layers and too much repeated interface content. A student can move through Home, Student Hub, Unit Overview, Lesson Overview, and a phase page before the lesson begins. Standard lessons then use six separate phase destinations with repeated headers, footers, cards, and navigation maps.

The current student area has 467 pages. It includes 364 phase pages for 79 lessons. Student routes contain 156 `ComprehensionCheck` instances and 92 `ReflectionJournal` instances. Eight unit practice-test pages contain 5,044 lines of mostly duplicated code.

This track will make the current task easy to find. It will keep the six teaching phases in teacher plans and lesson metadata. It will present standard student lessons on one route with four visible sections: Start, Learn, Do, and Check.

GitHub issue: [#123](https://github.com/bodangren/Business-Operations/issues/123)

## Goals

- Let a student open the current lesson with one action from the student hub.
- Let a student open any lesson with no more than two navigation actions.
- Put lesson content before secondary unit information.
- Remove routine reflection journals from student lessons and unit reviews.
- Limit each standard lesson to one short MCQ exit ticket.
- Replace eight six-phase practice tests with one shared three-state review flow.
- Keep old lesson and phase links usable during the migration.
- Preserve the six-phase model for teacher planning.

## Functional Requirements

### 1. Student Navigation

- The primary student navigation must use Today, Units, Practice, and Resources.
- Teacher resources must not appear in the primary student navigation.
- The student hub must show the current lesson above the fold.
- The current-lesson action must open the lesson route directly.
- The student hub must show a Continue action when local progress identifies a recent lesson.
- The implementation must support a deployment-wide current lesson without a new backend.
- The home page must provide a direct student entry and a distinct teacher entry.

### 2. Unit Pages

- Each unit page must place its lesson list directly after the compact unit title.
- The current lesson must have a clear visual marker.
- The unit challenge, goals, skills, vocabulary, study tools, and final presentation must move into one secondary About This Unit disclosure or section.
- The unit review action must appear after the lesson list as one compact row.
- Each lesson row must open the lesson content directly. It must not open an intermediate lesson overview.

### 3. Standard Lesson Pages

- Each standard lesson must use one primary route.
- Each lesson must present four visible sections in this order: Start, Learn, Do, and Check.
- Start must contain the hook and one short processing move.
- Learn must contain direct instruction and worked context.
- Do must contain guided practice followed by independent or authentic practice.
- Check must contain the exit ticket, a concise summary, and the next-lesson action.
- Each section must have a stable anchor for direct teacher links.
- The lesson header must remain compact and show the unit, lesson, and four-section progress.
- The page must not repeat a large phase card or a full phase map around the content.
- Each page region must have one clear primary action.
- The existing gradient identity and badges may remain when they improve orientation. They must not create competing visual hierarchy.

### 4. Assessment and Reflection

- A standard lesson must contain one MCQ exit ticket with three to five questions.
- Start, Learn, and Do must not contain MCQ sets.
- Start may use one ungraded prediction or discussion prompt.
- Learn and Do should use worked examples, discussion, simulators, workbook checks, and authentic tasks.
- Routine `ReflectionJournal` forms must not appear on student lesson or unit-review routes.
- Check must use a concise synthesis and direct handoff instead of a saved reflection form.
- A final project debrief may remain teacher-led. It must not require a student reflection form on the site.

### 5. Unit Reviews

- A unit review must behave as a study tool. It must not use the lesson-phase shell.
- The shared unit-review interface must have three states: Start, Questions, and Results.
- Start must show a title, one sentence of guidance, and one primary action that starts a default mixed review.
- The default review must contain 10 questions when the question bank supports that count.
- Optional customization must sit inside a Customize Review disclosure.
- Question-count choices must use 5, 10, and 15 presets, limited by available questions.
- Lesson or topic filters must be optional.
- Questions must appear one at a time with clear progress.
- Results must calculate correct and incorrect performance by lesson or topic from student responses.
- Results must not describe question distribution as student mastery.
- Results must offer Retry Missed Questions and Return to Unit as the two primary actions.
- The review must keep useful answer explanations and random question selection.
- The review must not include a narrative wrapper, warm-up, strategy phase, phase navigation, arbitrary mastery claims, or reflection journal.
- All eight units must use one shared data-driven unit-review component.

### 6. Project and Rehearsal Lessons

- Lesson 7 must use one student route with the same four-section presentation when it is a project rehearsal.
- Lessons 8-10 must use one milestone page per lesson.
- Project milestone pages must include context, objectives, workflow, acceptance criteria, checklist or rubric, and a next-step handoff.
- Units must not mix zero-phase, one-phase, and six-phase project lesson patterns after migration.

### 7. Route Compatibility

- Existing lesson overview URLs must continue to open the lesson.
- Existing `/phase-N` URLs must map to the matching Start, Learn, Do, or Check anchor.
- Compatibility routes must not duplicate full lesson content.
- Static export must provide an accessible fallback link when client-side navigation is unavailable.
- Existing public workbook and resource URLs must not change as part of this track.

### 8. Teacher Planning

- Teacher lesson plans must retain Hook, Introduction, Guided Practice, Independent Practice, Assessment, and Closing.
- Teacher guidance may link to any student section anchor.
- The student presentation change must not remove teacher pacing or facilitation data.
- Teacher guidance field population remains outside this track.

## Non-Functional Requirements

- Preserve keyboard navigation, visible focus, semantic headings, and screen-reader labels.
- Support desktop and 430-pixel mobile layouts without horizontal page overflow.
- Support the production static export and `/Business-Operations` base path.
- Avoid a new authentication system, database, or server dependency.
- Use canonical unit and lesson registries instead of new duplicated metadata.
- Use shared components when three or more pages repeat the same behavior.
- Add JSDoc to every new exported function.
- Do not reduce the accuracy of accounting, Excel, workbook, or project instructions.
- Do not remove question-bank metadata that supports lesson and topic reporting.

## Acceptance Criteria

- [ ] The current lesson is one action from `/student`.
- [ ] Any lesson is no more than two navigation actions from `/student`.
- [ ] The lesson list appears above the fold on each unit page at desktop width.
- [ ] Each standard lesson has one primary route and four visible sections.
- [ ] Each standard lesson has one three-to-five-question MCQ exit ticket.
- [ ] No production student lesson or unit-review route renders `ReflectionJournal`.
- [ ] No Start, Learn, or Do section renders a `ComprehensionCheck` MCQ set.
- [ ] Lessons 8-10 use one milestone page per lesson in all units.
- [ ] Each unit review starts a default mixed review with one action.
- [ ] Each unit review shows one question at a time.
- [ ] Unit-review results report actual correct and incorrect performance by lesson or topic.
- [ ] All eight unit reviews use one shared component.
- [ ] Old phase links reach the correct lesson section after static export.
- [ ] Student and teacher primary navigation are separate.
- [ ] Desktop and mobile browser checks show no horizontal page overflow.
- [ ] Unit 1 passes student and teacher pilot review before the remaining units migrate.

## Out of Scope

- Rewriting the accounting or Excel learning objectives.
- Replacing the teacher-facing six-phase planning model.
- Building accounts, cloud progress storage, or a learning-management system.
- Adding teacher analytics or populating deferred teacher guidance fields.
- Rewriting all question-bank content.
- Redesigning flashcards, matching, speed rounds, or spaced review inside the Practice Hub.
- Changing workbook file formats or core workbook architecture.
- Changing the capstone scope.

## Dependencies and Risks

- The Unit 1 pilot depends on a stable state from the active Unit 1 lesson-integrity track.
- The Excel lesson migration must remain compatible with the active Excel-for-the-web track.
- Static export does not provide server redirects. Compatibility needs a static-safe client redirect and accessible fallback.
- Bulk lesson migration can hide content loss. Migrate by lesson type and verify representative pages before each unit batch.
- Existing screenshots may represent an older export. Validate one production-base-path route before batch screenshot capture.
