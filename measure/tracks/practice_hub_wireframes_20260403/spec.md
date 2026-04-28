# Specification: Practice Hub Wireframes

## Overview
Before building local storage tracking, spaced repetition, flashcards, or exports, the product needs approved wireframes. The current repository contains promising components and ideas, but no shared picture of how the final student experience should work.

This track produces approval-ready wireframes and interaction notes. It does not ship the final production feature.

## Design Intent
- Keep the site static.
- Keep flows understandable to students and teachers.
- Avoid bolting multiple unrelated controls into already crowded lesson pages.
- Make the export flow and study flow obvious before implementation.

## Required Wireframe Surfaces

### WF1: Unit Overview with Vocabulary Entry
- Show where the new unit vocabulary list lives.
- Show how students move from unit overview into glossary or study mode.
- Show how progress and "review due" messaging appears without overwhelming the overview page.

### WF2: Practice Hub Home
- Show the main hub for practice and review.
- Include sections for:
  - due review,
  - vocabulary study,
  - recent practice,
  - weak topics,
  - export history or export entry point.

### WF3: Vocabulary Study Surfaces
- Flashcards
- Matching or sort game
- Speed round / race mode
- A static-safe class/team activity mode that captures the energy of Quizlet-style play without requiring multi-device realtime sync

### WF4: Lesson or Unit Export Flow
- Show how a student exports their work/results for LMS submission.
- Show the summary preview before export.
- Show what data is included at a student-readable level.

### WF5: Tracking and Progress Views
- Show how local practice tracking appears to the student.
- Include:
  - vocabulary mastery,
  - due-review counts,
  - recent exports,
  - per-unit progress summaries.

### WF6: Mobile Behavior
- Provide mobile wireframes or mobile notes for the hub, flashcards, and export flow.
- Do not assume the desktop layout can simply collapse without design changes.

## Documentation Requirements
- Each wireframe must include short annotations explaining:
  - purpose,
  - primary actions,
  - required data,
  - what is local-only,
  - what the export should capture.
- Include a simple information architecture or flow diagram that shows how glossary, index, practice hub, unit overview, and export interact.

## Non-Functional Requirements
- Wireframes must be readable by a junior developer without extra meetings.
- Outputs must live in-repo in a durable format:
  - markdown,
  - static mock pages,
  - or other reviewable local artifacts.
- The wireframes must be specific enough that the implementation track can name routes, components, and storage states from them.

## Acceptance Criteria
- A complete wireframe set exists for all required surfaces.
- Desktop and mobile behavior are both addressed.
- The export flow is explicit enough to implement without guessing.
- The practice hub layout and vocabulary-study modes are explicit enough to estimate and build.
- The user signs off on the wireframes before `local_study_export_20260403` begins.

## Out of Scope
- Final production UI.
- Local storage implementation.
- Export code.
- LMS integration.
- Teacher analysis skill implementation.
