# Current Directive

**Updated:** 2026-04-08
**Status:** Code review complete — all verification gates pass, one process discrepancy noted

## What Was Just Completed

- **Code review of teacher lesson pages track completion (phases 4-8)** — no runtime bugs, 279 tests pass, tsc 0 errors, ESLint clean, 603-page build succeeds
- **Finding M1**: Track marked complete while plan called for lesson-specific guidance data (`preparation`, `facilitationGuidance`, `checksForUnderstanding`, `watchFors`, `nextSteps`) that was never populated in any of the 8 unit lesson-plan files. Renderer gracefully handles missing data (optional fields with guards), so no runtime issue — but the completion claim doesn't match the plan.

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 errors

## Next Priorities

1. **Decide on M1**: Either populate the 5 teacher guidance fields across all 80 daily lessons, or amend the plan to document the deferral and formally scope the work as a future track
2. **Open feature branches cleanup**: 4 branches on remote (`chore/header-unit-data`, `feat/phase-icons-fallback`, `refactor/study-data-context`, `refactor/unit-data-dedup`) — all already merged to main, can be deleted
3. **`UNIT_META` keyed lookup** — replace positional array with `Record<UnitId, ...>` (tech-debt.md, medium priority)
4. **Dead code removal** — `businessTerms.ts` unused (tech-debt.md, low priority)
5. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md, low priority)
6. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md, low priority)
7. **Broken cover image on git pages** — base path issue (tech-debt.md, medium priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work. Next session should either address M1, tackle a tech-debt item, or create a new track.
