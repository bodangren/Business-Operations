# Current Directive

**Updated:** 2026-04-04
**Status:** Phase 6 complete — track complete

## Active Track

`local_study_export_20260403` — [plan](./tracks/local_study_export_20260403/plan.md) | [spec](./tracks/local_study_export_20260403/spec.md)

## What Was Just Completed

- Phase 1: Storage schema, SRS engine, export types (55 tests)
- Phase 2: Local store, spaced review engine, typed utilities
- Phase 3: Vocabulary study modes (flashcards, matching, speed round) — engine logic only
- Phase 4: Practice hub home + progress dashboard pages
- Phase 5: Export and import — `summary.csv` + `session.json` download, import/restore with dedup, export page with preview (26 new tests)
- Phase 6: Verification — built missing study-mode route pages (FlashcardPlayer, MatchingGame, SpeedRoundGame), verified all 603 pages compile, 186 tests pass, lint clean

## Review Audit Results (2026-04-04)

See [full review](./reviews/review_20260404_phase3-4.md).

**Fixed issues:**
- Accuracy displayed as raw decimal (0–1) instead of percentage in PracticeHubHome and ProgressDashboard
- Speed-round `recordSpeedRoundSession` marked all terms as correct if any answer was correct — now uses aggregate accuracy heuristic

**Outstanding issues (priority order):**
1. **Per-term tracking missing from SpeedRoundSession** — cannot accurately grade individual terms (uses aggregate accuracy heuristic)
2. **Unit-level study CTAs not wired** — StudentUnitOverview/StudentHub don't show due counts
3. **Duplicated shuffle utility** — cosmetic cleanup
4. **Session state not persisted across refresh** — flashcard/matching/speed-round sessions are ephemeral

## Next Priorities

1. **New track: Wire up unit-level study CTAs** — add due counts to StudentUnitOverview and StudentHub
2. **Add per-term tracking to speed-round** — add `termResults` to session state
3. **Team activity mode** — stretch goal, printable cards for class play

## Blocked / Deferred

- Team activity mode (stretch goal, per wireframe handoff)
- Teacher analysis skill (future track)
- Session state persistence across refresh (stretch)
