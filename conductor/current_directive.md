# Current Directive

**Updated:** 2026-04-09 (post-review)
**Status:** Post-review clean slate — all 38 tracks complete, glossary slug refactor verified

## What Was Just Completed

- **Glossary slug track**: `glossary_id_from_slug_20260409` — replaced all 109 manual `g-XXX` IDs with slug-based IDs across glossary data and 4 test mock files
- **Tech debt resolved**: Closed stale "Glossary IDs manually assigned" item in `tech-debt.md`
- **Review**: `review_20260409_glossary-slugs.md` — no bugs, clean mechanical refactor

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: succeeds with no errors

## Next Priorities

1. **New feature work**: All 38 tracks complete — time for next feature track
2. **`eslint-config-next` version sync**: Keep in lockstep with `next` (tech-debt.md, low priority)
3. **Populate teacher guidance fields**: 80 daily lessons have empty `preparation`, `facilitationGuidance`, `checksForUnderstanding`, `watchFors`, `nextSteps` fields — deferred, see `conductor/tracks/defer_teacher_guidance_fields_20260408/future-work.md`

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- **Populate teacher guidance fields** — deferred to future track (see future-work.md)
- **Debug routes on static export** — accepted as known limitation

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work. Ready for new feature track creation.
