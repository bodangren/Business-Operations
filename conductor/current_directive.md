# Current Directive

**Updated:** 2026-04-04
**Status:** Phase 5 complete, Phase 6 next

## Active Track

`local_study_export_20260403` — [plan](./tracks/local_study_export_20260403/plan.md) | [spec](./tracks/local_study_export_20260403/spec.md)

## What Was Just Completed

- Phase 1: Storage schema, SRS engine, export types (55 tests)
- Phase 2: Local store, spaced review engine, typed utilities
- Phase 3: Vocabulary study modes (flashcards, matching, speed round) — engine logic only
- Phase 4: Practice hub home + progress dashboard pages
- Phase 5: Export and import — `summary.csv` + `session.json` download, import/restore with dedup, export page with preview (26 new tests)

## Review Audit Results (2026-04-04)

See [full review](./reviews/review_20260404_phase3-4.md).

**Fixed issues:**
- Accuracy displayed as raw decimal (0–1) instead of percentage in PracticeHubHome and ProgressDashboard
- Speed-round `recordSpeedRoundSession` marked all terms as correct if any answer was correct — now uses aggregate accuracy heuristic

**Outstanding issues (priority order):**
1. **Study-mode route pages are missing** — `/student/practice-hub/flashcards`, `/matching`, `/speed-round`, `/export` all 404. This is the single most important gap.
2. **Per-term tracking missing from SpeedRoundSession** — cannot accurately grade individual terms
3. **Export flow not implemented** — no download capability yet
4. **Unit-level study CTAs not wired** — StudentUnitOverview/StudentHub don't show due counts
5. **Duplicated shuffle utility** — cosmetic cleanup

## Next Priorities

1. **Phase 6: Verification** — verify hub + study modes on desktop/mobile, data persistence, export/import round-trip, `npm run lint`
2. **Build interactive study-mode pages** (flashcards, matching, speed-round) — create client components + route `page.tsx` files
3. **Wire up unit-level study CTAs** — add due counts to StudentUnitOverview and StudentHub
4. **Add per-term tracking to speed-round** — add `termResults` to session state

## Blocked / Deferred

- Team activity mode (stretch goal, per wireframe handoff)
- Teacher analysis skill (future track)
- Session state persistence across refresh (stretch)
