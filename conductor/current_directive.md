# Current Directive

**Updated:** 2026-04-04
**Status:** Phase 5-6 review audit complete — 3 CRITICAL + 4 HIGH bugs fixed

## Active Track

`local_study_export_20260403` — [plan](./tracks/local_study_export_20260403/plan.md) | [spec](./tracks/local_study_export_20260403/spec.md)

## What Was Just Completed

- Phase 1: Storage schema, SRS engine, export types (55 tests)
- Phase 2: Local store, spaced review engine, typed utilities
- Phase 3: Vocabulary study modes (flashcards, matching, speed round) — engine logic only
- Phase 4: Practice hub home + progress dashboard pages
- Phase 5: Export and import — `summary.csv` + `session.json` download, import/restore with dedup, export page with preview (26 new tests)
- Phase 6: Verification — built missing study-mode route pages (FlashcardPlayer, MatchingGame, SpeedRoundGame), verified all 603 pages compile, 186 tests pass, lint clean

## Review Audit Results (2026-04-04, Phases 5-6)

See [Phase 3-4 review](./reviews/review_20260404_phase3-4.md) and [Phase 5-6 review](./reviews/review_20260404_phase5-6.md).

**Fixed issues (this audit):**

| ID | Severity | Issue | Fix |
|----|----------|-------|-----|
| C-1 | CRITICAL | FlashcardPlayer `markCorrect(advanceCard(session))` marks wrong card — session never completes | Swap order: `advanceCard(markCorrect(session))` |
| C-2 | CRITICAL | SpeedRoundGame side effects (localStorage I/O, setState) inside `setSession` updater | Separate pure tick from recording effect |
| C-3 | CRITICAL | SpeedRoundGame race condition — double session recording | Add `recordedRef` guard |
| H-1 | HIGH | Import `as` casts on untrusted JSON — no structural validation | Add `isValidSessionRecord`, `isValidTermMastery`, etc. validators |
| H-2 | HIGH | Unsafe `UnitId` cast on query params — garbage stored in session records | Validate against `ALL_UNIT_IDS` before casting |
| H-3 | HIGH | `loadStudyData` no shape validation — corrupted state propagates | Check `sessions`, `reflections`, `study_state` types before returning |
| M-1 | MEDIUM | `revokeObjectURL` may cancel download in Safari | Delay 1000ms via `setTimeout` |
| M-2 | MEDIUM | MatchingGame timer interval recreated on every session state change | Use derived boolean `sessionActive` as dependency |
| M-5 | MEDIUM | ExportPage crashes on corrupted data — no error boundary | Wrap `buildSessionExport` in try/catch with fallback UI |

**Outstanding issues (from this and prior audits):**

1. **Per-term tracking missing from SpeedRoundSession** — still uses aggregate accuracy heuristic for SRS ratings
2. **Unit-level study CTAs not wired** — StudentUnitOverview/StudentHub don't show due counts
3. **Duplicated shuffle utility** — cosmetic cleanup (flashcards.ts, matching.ts, speed-round.ts)
4. **Session state not persisted across refresh** — flashcard/matching/speed-round sessions are ephemeral
5. **`computeTotalMasteryDelta` duplicates SRS tuning constants** — will silently diverge if tuning changes
6. **CSV export has no formula injection protection** — low risk for now

## Verification

- Tests: 186 passed (10 suites)
- Build: 603 static pages, compiled successfully
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **New track: Wire up unit-level study CTAs** — add due counts to StudentUnitOverview and StudentHub
2. **Add per-term tracking to speed-round** — add `termResults` to session state for accurate SRS ratings
3. **Extract shared `shuffle` to `src/lib/study/utils.ts`** — cosmetic cleanup
4. **Team activity mode** — stretch goal, printable cards for class play

## Blocked / Deferred

- Team activity mode (stretch goal, per wireframe handoff)
- Teacher analysis skill (future track)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough (acceptable — v1.0.0 is only released schema)
