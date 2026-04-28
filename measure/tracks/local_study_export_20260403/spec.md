# Specification: Local Study, Tracking, and Export

## Overview
Implement the student practice system as a static-only feature set using local storage and downloadable exports. This track depends on:
- the glossary and index data model from `reference_system_20260403`,
- approved wireframes from `practice_hub_wireframes_20260403`.

The implementation must stay compatible with the static Next.js export model.

## Product Intent
- Help students review vocabulary and concepts without requiring a backend.
- Preserve useful practice history locally.
- Let students export meaningful structured results instead of screenshots.
- Produce data that can later feed a teacher-facing analysis skill.

## Scheduling Engine Direction
- The spaced-review system should prefer a vetted FSRS-compatible implementation rather than an ad hoc homemade algorithm if the package:
  - works in the static Next.js export environment,
  - can run fully client-side,
  - has a TypeScript-friendly API,
  - does not force server state,
  - can be wrapped behind a local project interface.
- The implementation must begin with a short package evaluation step before adding a dependency.
- If an FSRS library is adopted, the app must isolate it behind project utilities so the scheduler can be swapped later without rewriting the study UI.

## Local Data Requirements

### Required Local State Domains
- glossary study preferences
- vocabulary mastery state
- spaced-review due dates and intervals
- practice attempt history
- recent session summaries
- export history
- optional student profile metadata such as name/class if approved in the final wireframes

### Storage Rules
- Use versioned local storage keys or a versioned stored payload.
- Include migration handling for future schema changes.
- Fail safely if storage is empty or corrupted.
- Keep all features usable without network access.

## Functional Requirements

### FR1: Static Practice Hub
- Build the approved practice hub routes and surfaces from the wireframes.
- The hub must expose:
  - due review,
  - vocabulary study,
  - recent practice,
  - weak topics or weak terms,
  - export access/history.

### FR2: Vocabulary Study Modes
- Implement vocabulary flashcards driven by the canonical glossary dataset.
- Students must be able to choose prompt and answer sides from:
  - `term_en`
  - `term_zh`
  - `def_en`
  - `def_zh`
- Implement at least two additional glossary-driven study modes after flashcards, such as:
  - matching,
  - sort/group,
  - cloze or recall mode,
  - speed round.

### FR3: Quizlet-Like Static Game Mode
- Implement a static-safe fast-paced vocabulary activity inspired by Quizlet-style play.
- It may be:
  - solo,
  - pass-and-play,
  - single-screen team mode,
  - one-device-per-team without realtime sync.
- Do not require live multi-device synchronization.
- The track must clearly document that true realtime multiplayer is out of scope for the static site.

### FR4: Spaced Repetition
- Add a deterministic spaced-review system for vocabulary review.
- The logic must be simple, testable, and explainable.
- Prefer FSRS-based scheduling if the package evaluation passes.
- Terms reviewed successfully should move farther out.
- Terms missed should return sooner.
- Due-review counts must surface in the practice hub and relevant unit entry points.

### FR5: Practice Tracking
- Track:
  - attempts,
  - correctness,
  - retries,
  - time on task where practical,
  - mastery by term or activity,
  - recent study history,
  - unit-linked vocabulary progress.
- Tracking must remain local-only unless exported by the student.

### FR6: Export and Import
- Support structured export so students can submit useful results to an LMS.
- At minimum export:
  - `summary.csv`
  - `session.json`
- The JSON export must include enough detail for later automated or assisted analysis.
- Add import so students can restore local progress on another device or after clearing storage.
- Implement export/import against the canonical contract in [`export-schema.md`](./export-schema.md).

### FR7: Export Schema for Future Analysis
- Define a stable export schema and document it in-repo.
- Use [`export-schema.md`](./export-schema.md) as the implementation contract.
- Include fields for:
  - student metadata if captured,
  - unit/lesson/activity IDs,
  - timestamps,
  - item-level responses,
  - correctness,
  - retries,
  - time data,
  - vocabulary mastery state,
  - due-review snapshot,
  - reflection text if applicable.
- The schema must be suitable for a future teacher-analysis skill.

## Non-Functional Requirements
- Static-export compatible.
- No backend or LMS API integration.
- Graceful local storage failure handling.
- Usable on desktop and mobile.
- Junior-dev maintainable:
  - isolated local storage utilities,
  - typed export schema,
  - testable spaced-review logic.

## Acceptance Criteria
- Students can study vocabulary using glossary-driven flashcards and at least two additional study modes.
- Students can see what review is due and what they practiced recently.
- Students can export both a summary CSV and a detailed session JSON.
- Students can import a prior export and restore study state.
- The feature works with local storage only and requires no server.
- The export schema in [`export-schema.md`](./export-schema.md) is documented clearly enough for a future analysis skill to consume.

## Out of Scope
- True realtime Quizlet Live-style multi-device sync.
- Centralized teacher dashboards.
- LMS API submission.
- Server-side accounts or cloud sync.
