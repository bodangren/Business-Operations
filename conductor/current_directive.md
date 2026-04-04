# Current Directive

**Updated:** 2026-04-05
**Status:** New track started — gate debug routes behind dev-only flag

## Active Track

`gate_debug_routes_20260405` — [plan](./tracks/gate_debug_routes_20260405/plan.md) | [spec](./tracks/gate_debug_routes_20260405/spec.md)

## What Was Just Completed

- All 6 prior tracks complete (reference system, nav shell, teacher-student alignment, practice hub wireframes, local study/export, unit-level study CTAs)
- Phase 4 verification passed — 196 tests, lint clean, build successful

## Verification

- Tests: 196 passed (11 suites)
- Build: compiled successfully
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **Phase 1: Middleware + Tests** — create middleware.ts to block /debug/* in production, with unit tests

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
