# Current Directive

**Updated:** 2026-04-08 (post-review)
**Status:** Post-review clean slate — all tracks complete, no code changes since last audit

## What Was Just Completed

- **Post-conductor-docs review**: Audited 3 tracks since last review (`fix_cover_image_basepath`, `defer_teacher_guidance_fields`, `resolve_debug_routes_static_export`) — all documentation-only, no code changes
- **Branch audit**: 4 stale local branches confirmed merged into main
- **Verification**: 279 tests pass, 0 TS errors, 0 ESLint warnings, 603 pages build clean
- **No bugs found** — codebase unchanged since `review_20260408_three-phases.md`
- **New review doc**: `conductor/reviews/review_20260408_post-conductor-docs.md`

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 errors

## Next Priorities

1. **Stale branch cleanup**: Delete 4 merged branches (`chore/header-unit-data-20260406`, `feat/phase-icons-fallback-20260407`, `refactor/study-data-context-20260405`, `refactor/unit-data-dedup-20260406`)
2. **New feature work**: All 37 tracks complete — time for next feature track
3. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md, low priority)
4. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- **Populate teacher guidance fields** — deferred to future track (see `conductor/tracks/defer_teacher_guidance_fields_20260408/future-work.md`)
- **Debug routes on static export** — accepted as known limitation

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work. Ready for new feature track creation.
