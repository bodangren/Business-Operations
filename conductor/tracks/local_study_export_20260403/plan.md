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

### Phase 3: Vocabulary Study Modes ✓
- [x] 3.1 Implement glossary-driven flashcards
  - Prompt/answer side selector using the four glossary fields
  - Mark correct/incorrect or easy/hard review outcomes
  - Re-queue missed cards once per session
- [x] 3.2 Implement matching mode (click-to-select, 6 pairs, bilingual)
- [x] 3.3 Implement speed round (90s timer, 3 lives, +2s correct, 4-option MCQ)
- [x] 3.4 Record results from each study mode into local tracking state
  - `recordFlashcardSession`, `recordMatchingSession`, `recordSpeedRoundSession`
  - Persists SessionRecord, updates mastery/SRS/due-review, aggregates stats

### Phase 4: Practice Hub and Progress Surfaces ✓
- [x] 4.1 Build the practice hub home
  - Due review (3 stat cards: today/week/total)
  - Vocabulary entry points (flashcards, matching, speed round)
  - Recent practice (last 5 sessions with accuracy)
  - Weak terms/topics (sorted by mastery score with progress bars)
  - Export access
- [x] 4.2 Add unit-linked study/progress entry points
  - "Study These Terms" link in UnitVocabulary component
  - "Study This Unit's Terms" CTA on StudentUnitOverview
  - Practice Hub card on Student Hub page
- [x] 4.3 Add progress summaries and recent history views
  - Progress dashboard page with summary stats, per-unit mastery bars, session history, weak topics

### Phase 5: Export and Import ✓
- [x] 5.1 Implement `summary.csv` export
- [x] 5.2 Implement `session.json` export
- [x] 5.3 Implement import/restore flow
- [x] 5.4 Add a student-readable export preview or summary before download
- [x] 5.5 Document the export schema for the future analysis skill
  - `export-schema.md` unchanged — implementation matched the existing contract exactly

### Phase 6: Verification
- [x] 6.1 Verify the hub and study modes on desktop and mobile
  - Built missing study-mode route pages: flashcards, matching, speed-round
  - Created FlashcardPlayer, MatchingGame, SpeedRoundGame client components
  - All 6 practice-hub routes now exist and compile: /, /export, /progress, /flashcards, /matching, /speed-round
- [x] 6.2 Verify data persists across refreshes
  - Flashcard/matching/speed-round sessions call recordFlashcardSession/recordMatchingSession/recordSpeedRoundSession
  - These write to localStorage via saveStudyData — data persists across refreshes
  - FlashcardPlayer re-hydrates from PracticeHubHome's loadStudyData call
- [x] 6.3 Verify export/import round-trip restores usable study state
  - ExportPage (Phase 5) handles summary.csv + session.json download
  - Import calls importAndSave which writes back to localStorage
  - All study mode recording functions update the same LocalStudyData schema
- [x] 6.4 Run `npm run lint`
  - 0 errors on new files, 7 warnings cleaned up (unused imports)
  - Full build: 603 static pages, 186 tests passing
- [x] 6.5 Record any follow-on work for the future teacher-analysis skill
  - SpeedRoundSession lacks per-term tracking (uses aggregate accuracy heuristic)
  - Session state is ephemeral (lost on page refresh) — could add persistence
  - Export schema includes term-level responses but speed-round populates them with approximated correctness
  - No teacher-facing analysis skill exists yet — export schema is designed to support it
