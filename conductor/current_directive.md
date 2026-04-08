# Current Directive

**Updated:** 2026-04-09 (post-review, SRS prototype)
**Status:** Post-review — all 39 tracks complete, SRS prototype audited

## What Was Just Completed

- **SRS Review Prototype track**: `srs_review_prototype_20260409` — flashcard-style review UI at `/student/practice-hub/review` with FSRS scheduling, rating buttons, and session summary
- **Review**: `review_20260409_srs-prototype.md` — 1 medium issue (missing component tests), 2 low issues (stale closure on rapid clicks, keyboard accessibility gap)
- **Glossary slug track** (prior session): `glossary_id_from_slug_20260409` — slug-based IDs, verified clean

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: succeeds with no errors

## Next Priorities

1. **ReviewSession component tests**: Add test coverage for the SRS review UI — empty state, completion state, card flip, rating flow, state updates (medium priority from review)
2. **ReviewSession accessibility**: Add keyboard navigation and ARIA attributes to the flashcard flip interaction (low priority from review)
3. **Session recording for review mode**: Other practice modes (flashcards, matching, speed-round) create `SessionRecord` entries; review mode does not — add for consistency
4. **New feature work**: All 39 tracks complete — time for next feature track
5. **`eslint-config-next` version sync**: Keep in lockstep with `next` (tech-debt.md, low priority)
6. **Populate teacher guidance fields**: 80 daily lessons have empty fields — deferred, see `conductor/tracks/defer_teacher_guidance_fields_20260408/future-work.md`

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- **Populate teacher guidance fields** — deferred to future track (see future-work.md)
- **Debug routes on static export** — accepted as known limitation

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work. Ready for new feature track creation.
