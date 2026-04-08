# Current Directive

**Updated:** 2026-04-08
**Status:** Documented deferral of teacher guidance fields; new track created

## What Was Just Completed

- **Decision on M1**: Deferred populating 5 teacher guidance fields across 80 daily lessons, documented decision, and scoped future work
- **Phase review of last 3 tracks**: TypeScript build guardrails, teacher lesson pages operational, cover image fix
- **Verification**: 279 tests pass, 0 TS errors, 0 ESLint warnings, 603 pages build clean
- **No code bugs found** in reviewed changes
- **New review doc**: `conductor/reviews/review_20260408_three-phases.md`
- **New tech-debt item**: Debug routes middleware doesn't run on static export (L1)
- **New tech-debt item**: Teacher guidance fields unpopulated across 80 daily lessons (L2)
- **New track**: `defer_teacher_guidance_fields_20260408` documents decision and future scope

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 errors

## Next Priorities

1. **Debug routes on static export**: Accept as limitation or exclude from `generateStaticParams` if hiding is truly desired
2. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md, low priority)
3. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
- **Populate teacher guidance fields** — deferred to future track (see `conductor/tracks/defer_teacher_guidance_fields_20260408/future-work.md`)

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work.
