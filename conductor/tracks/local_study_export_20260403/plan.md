# Implementation Plan: Local Study, Tracking, and Export

## Track ID: local_study_export_20260403

### Phase 1: Storage and Schema Foundations
- [ ] 1.1 Confirm the approved wireframes and glossary contracts before coding
- [ ] 1.1.1 Evaluate FSRS library options before implementation
  - Review the user-suggested FSRS package and at least one established alternative
  - Confirm browser/client compatibility, TypeScript support, and static-site suitability
  - Decide whether to adopt a library or keep a simpler local scheduler for MVP
- [ ] 1.2 Define the local storage schema
  - Version key
  - Student preferences
  - Mastery state
  - Review queue
  - Attempt history
  - Export history
- [ ] 1.3 Define the export schema
  - `summary.csv`
  - `session.json`
  - Import restore expectations
  - Follow `export-schema.md` exactly unless the user approves a schema revision
- [ ] 1.4 Write failing tests first
  - Storage read/write
  - Schema migration
  - Export generation
  - Import restore
  - Spaced repetition scheduling rules

### Phase 2: Local Store and Spaced Review Engine
- [ ] 2.1 Implement typed local storage utilities
- [ ] 2.2 Implement safe load/reset/fallback behavior
- [ ] 2.3 Implement the spaced-review scheduling engine
  - Wrap the chosen FSRS-compatible library behind project utilities if adopted
  - Success path
  - Failure path
  - Due-term selection
  - Queue updates after study sessions
- [ ] 2.4 Surface due-review counts to the practice hub and unit entry points

### Phase 3: Vocabulary Study Modes
- [ ] 3.1 Implement glossary-driven flashcards
  - Prompt/answer side selector using the four glossary fields
  - Mark correct/incorrect or easy/hard review outcomes
- [ ] 3.2 Implement one structured matching or sorting mode
- [ ] 3.3 Implement one fast-paced review mode
  - Solo or team-on-one-device acceptable
  - Explicitly avoid realtime sync assumptions
- [ ] 3.4 Record results from each study mode into local tracking state

### Phase 4: Practice Hub and Progress Surfaces
- [ ] 4.1 Build the practice hub home
  - Due review
  - Vocabulary entry points
  - Recent practice
  - Weak terms/topics
  - Export access
- [ ] 4.2 Add unit-linked study/progress entry points
- [ ] 4.3 Add progress summaries and recent history views

### Phase 5: Export and Import
- [ ] 5.1 Implement `summary.csv` export
- [ ] 5.2 Implement `session.json` export
- [ ] 5.3 Implement import/restore flow
- [ ] 5.4 Add a student-readable export preview or summary before download
- [ ] 5.5 Document the export schema for the future analysis skill
  - Keep `export-schema.md` updated if implementation requires additive changes

### Phase 6: Verification
- [ ] 6.1 Verify the hub and study modes on desktop and mobile
- [ ] 6.2 Verify data persists across refreshes
- [ ] 6.3 Verify export/import round-trip restores usable study state
- [ ] 6.4 Run `npm run lint`
- [ ] 6.5 Record any follow-on work for the future teacher-analysis skill
