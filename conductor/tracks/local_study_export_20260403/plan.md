# Implementation Plan: Local Study, Tracking, and Export

## Track ID: local_study_export_20260403

### Phase 1: Storage and Schema Foundations ✓ (checkpoint: e0481dd)
- [x] 1.1 Confirm the approved wireframes and glossary contracts before coding
- [x] 1.1.1 Evaluate FSRS library options before implementation
  - Review the user-suggested FSRS package and at least one established alternative
  - Adopted `ts-fsrs` v5.3.2 — browser-compatible, TypeScript-friendly, static-site safe
  - Wrapped behind `src/lib/study/srs.ts` so scheduler can be swapped without rewriting UI
- [x] 1.2 Define the local storage schema
  - `storage-schema.ts` — versioned root key, student preferences, mastery state, review queue, session records, export history
  - `storage.ts` — typed load/save/reset/clear/migrate utilities with safe fallbacks
- [x] 1.3 Define the export schema
  - `export-schema.ts` — full TypeScript types matching `export-schema.md`
  - `summary.csv` column order constants, `session.json` structural types
- [x] 1.4 Write failing tests first
  - 24 SRS engine tests, 13 storage tests, 18 export schema tests — all 55 passing

### Phase 2: Local Store and Spaced Review Engine ✓ (checkpoint: e0481dd)
- [x] 2.1 Implement typed local storage utilities
- [x] 2.2 Implement safe load/reset/fallback behavior
- [x] 2.3 Implement the spaced-review scheduling engine
  - Wrapped `ts-fsrs` behind `src/lib/study/srs.ts`
  - Success/failure paths, due-term selection, queue updates after sessions
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
