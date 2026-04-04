# Current Directive

**Updated:** 2026-04-04
**Status:** New track started — unit-level study CTAs

## Active Track

`unit_study_ctas_20260404` — [plan](./tracks/unit_study_ctas_20260404/plan.md) | [spec](./tracks/unit_study_ctas_20260404/spec.md)

## What Was Just Completed

- All 5 prior tracks complete (reference system, nav shell, teacher-student alignment, practice hub wireframes, local study/export)
- Phase 5-6 review audit — 3 CRITICAL + 4 HIGH bugs fixed in local study track

## Verification

- Tests: 186 passed (10 suites)
- Build: 603 static pages, compiled successfully
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **Phase 1: Per-unit due count utilities** — add `getDueCountByUnit()` and `getDueCountForUnit()` to derived.ts with tests
2. **Phase 2: StudyDueBadge component** — client component wired into StudentUnitOverview
3. **Phase 3: Hub unit cards** — per-unit due badges on StudentHub
4. **Phase 4: Verification** — full test suite, lint, build

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
