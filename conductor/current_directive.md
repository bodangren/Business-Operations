# Current Directive

**Updated:** 2026-04-09 (post-review, test follow-up)
**Status:** Post-review — all 40 tracks complete, codebase audit clean

## What Was Just Completed

- **ReviewSession tests & fixes track**: `reviewsession_component_tests_20260409` — 10 component tests, stale closure fix (ref pattern), keyboard/ARIA accessibility
- **Review**: `review_20260409_post-test-followup.md` — 2 fixes applied (track metadata, progress bar), 1 carried-over low issue (session recording gap)
- **Prior session**: `srs_review_prototype_20260409` — prototype complete, all prior review findings addressed
- **Prior session**: `glossary_id_from_slug_20260409` — slug refactoring, verified clean

## Verification

- Tests: 289 passed (24 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: succeeds with no errors

## Next Priorities

1. **Session recording for review mode**: Other practice modes (flashcards, matching, speed-round) create `SessionRecord` entries; review mode does not — add `recordReviewSession` in `record-session.ts` for consistency and to surface review sessions in "Recent Practice"
2. **New feature work**: All 40 tracks complete — codebase is in excellent health, ready for next feature track
3. **`eslint-config-next` version sync**: Keep in lockstep with `next` (tech-debt.md, low priority)
4. **Populate teacher guidance fields**: 80 daily lessons have empty fields — deferred, see `conductor/tracks/defer_teacher_guidance_fields_20260408/future-work.md`
5. **Multi-card test coverage**: ReviewSession tests only cover single-card sessions; add a multi-card progression test (low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- **Populate teacher guidance fields** — deferred to future track (see future-work.md)
- **Debug routes on static export** — accepted as known limitation

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work. Ready for new feature track creation.
