# Review Report: Local Study Export Track — Phases 5-6

**Date:** 2026-04-04
**Reviewer:** Automated code-review audit
**Scope:** `local_study_export_20260403` Phases 5-6 (export/import + verification)
**Commits:** `72c3a56..074b2e6`

---

## Summary

Phases 5-6 delivered the complete export/import flow (CSV + JSON download, import with dedup, export preview page) and built the three missing interactive study-mode route pages (FlashcardPlayer, MatchingGame, SpeedRoundGame). The export library is well-typed with solid test coverage (26 export-builder tests). However, **three CRITICAL bugs** were found that would have prevented flashcard sessions from completing and caused double-recording in speed rounds. Four HIGH-severity data integrity issues were also identified and fixed.

## Verification Checks

- [x] Plan Compliance: Yes — all Phase 5 and Phase 6 tasks completed
- [x] Style Compliance: Pass — follows existing component patterns
- [x] New Tests: Yes — 26 export-builder tests added
- [x] Test Coverage: Pass — all export/import paths tested
- [x] Test Results: 186/186 passed
- [x] Build: 603 static pages, compiled successfully
- [x] Lint: 0 errors (warnings pre-existing)

## Issues Found and Fixed

### CRITICAL — C-1: FlashcardPlayer mark/advance order marks wrong card (FIXED)

- **File:** `src/components/student/FlashcardPlayer.tsx:58, 77`
- **Context:** `markCorrect(advanceCard(session))` advances `currentIndex` first, then marks the *next* card instead of the current one. Card at index 0 is never marked, so `isSessionComplete` never returns true. User is stuck forever.
- **Fix:** Swap to `advanceCard(markCorrect(session))` — mark current, then advance.

### CRITICAL — C-2: SpeedRoundGame side effects inside setState updater (FIXED)

- **File:** `src/components/student/SpeedRoundGame.tsx:66-85`
- **Context:** `recordSpeedRoundSession` (localStorage I/O) and `setIsComplete` (setState) called inside `setSession` updater function. React updaters must be pure; side effects can corrupt state in Strict Mode.
- **Fix:** Separated pure tick into its own effect, moved recording to a separate effect that detects `isGameOver`.

### CRITICAL — C-3: SpeedRoundGame double session recording race condition (FIXED)

- **File:** `src/components/student/SpeedRoundGame.tsx:64-90, 99-124`
- **Context:** Timer tick and `handleAnswer` can both detect game-over simultaneously and each calls `recordSpeedRoundSession`, producing duplicate session records in localStorage.
- **Fix:** Added `recordedRef` guard that prevents double-recording across both code paths.

### HIGH — H-1: Import unsafe `as` casts on untrusted JSON (FIXED)

- **File:** `src/lib/study/export.ts:388-414`
- **Context:** Imported session/mastery/due-review entries cast directly to TypeScript interfaces without structural validation. Tampered or corrupted files would silently produce broken data.
- **Fix:** Added `isValidSessionRecord`, `isValidReflection`, `isValidTermMastery`, `isValidDueReviewEntry` runtime validators.

### HIGH — H-2: Unsafe `UnitId` cast on query params (FIXED)

- **Files:** `FlashcardPlayer.tsx:33`, `MatchingGame.tsx:25`, `SpeedRoundGame.tsx:26`
- **Context:** `searchParams.get("unit") as UnitId` accepts any string, stores garbage in session records.
- **Fix:** Validate against `ALL_UNIT_IDS` before casting; fall back to `null` for invalid values.

### HIGH — H-3: Storage load has no shape validation (FIXED)

- **File:** `src/lib/study/storage.ts:29`
- **Context:** `parsed as unknown as LocalStudyData` trusts that the parsed object has `sessions`, `reflections`, `study_state`. Corrupted localStorage crashes downstream code.
- **Fix:** Added structural check for critical top-level properties before returning.

### MEDIUM — M-1: `revokeObjectURL` may cancel download in Safari (FIXED)

- **File:** `src/lib/study/export.ts:282-294`
- **Context:** Immediate `URL.revokeObjectURL` after `a.click()` can abort the download in Safari.
- **Fix:** Delayed revocation by 1000ms via `setTimeout`.

### MEDIUM — M-2: MatchingGame timer interval recreated every session change (FIXED)

- **File:** `src/components/student/MatchingGame.tsx:46-55`
- **Context:** `useEffect` depends on `session` which changes on every click, destroying and recreating the interval.
- **Fix:** Replaced with derived boolean `sessionActive` dependency.

### MEDIUM — M-5: ExportPage crashes on corrupted data (FIXED)

- **File:** `src/components/student/ExportPage.tsx:56-57`
- **Context:** `buildSessionExport(data)` throws if data structure is invalid; no error boundary.
- **Fix:** Wrapped in try/catch with fallback UI.

## Outstanding Issues (Not Fixed — Deferred)

| ID | Severity | File | Issue |
|----|----------|------|-------|
| M-3 | MEDIUM | `record-session.ts:326-328` | `computeTotalMasteryDelta` duplicates SRS tuning constants |
| M-4 | MEDIUM | `record-session.ts:194-198` | Speed round uses aggregate accuracy for per-term SRS ratings |
| L-1 | LOW | `export.ts:199-206` | CSV export has no formula injection protection |
| L-2 | LOW | All 3 game components | `terms` array recalculated on every render (use `useMemo`) |
| L-3 | LOW | `SpeedRoundGame.tsx:66` | `setInterval` timer drifts (acceptable for study app) |
| L-4 | LOW | `SpeedRoundGame.tsx:284` | Index key on option buttons (use option text) |
| L-5 | LOW | `MatchingGame.tsx:58-80` | Timer/complete race in setTimeout callback |
| L-6 | LOW | `FlashcardPlayer.tsx:127-129` | Progress bar may not reach 100% with requeued cards |
| I-6 | INFO | `flashcards.test.ts` | No integration test for mark/advance ordering (would have caught C-1) |
| I-7 | INFO | All 3 game components | Missing `aria-live`, `aria-label`, focus management for accessibility |
