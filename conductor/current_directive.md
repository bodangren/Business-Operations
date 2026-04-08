# Current Directive

**Updated:** 2026-04-08
**Status:** Cover image fix complete

## What Was Just Completed

- **Cleaned up merged remote branches**: Deleted 6 merged branches from remote
- **Fixed `UNIT_META` positional coupling**: Replaced array with `Record<UnitId, ...>` keyed lookup
- **Removed dead code**: Deleted unused `businessTerms.ts` file
- **Updated tech-debt.md**: Marked completed items as fixed
- **Fixed broken cover image on git pages**: Imported cover.png as module instead of using string path to respect basePath configuration

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 errors

## Next Priorities

1. **Decide on M1**: Either populate the 5 teacher guidance fields across all 80 daily lessons, or amend the plan to document the deferral and formally scope the work as a future track
2. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md, low priority)
3. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md, low priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough

## All Active Tracks Complete

Every track in the registry is marked `[x]`. The codebase is in a clean state with no in-progress work.
