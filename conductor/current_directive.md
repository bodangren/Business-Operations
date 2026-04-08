# Current Directive

**Updated:** 2026-04-08
**Status:** Review complete — teacher lesson phases 1-3 audited, no fixes needed

## What Was Just Completed

- **Teacher capstone UI audit** — all 4 phases complete, track closed
- **Teacher lesson pages operational rebuild phases 1-3** — audit, real data integration, operational contract defined
- **Code review of both tracks** — clean audit, no bugs found, architecture improvements verified
- **Verification baseline confirmed** — 279 tests pass, tsc 0 errors, ESLint clean, 603 pages build

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 warnings

## Next Priorities

1. **Teacher lesson pages phases 4-5** — `teacher_lesson_pages_operational_20260407` (Units 01-04 lesson-specific guidance)
2. **Teacher lesson pages phases 6-7** — Units 05-08 lesson-specific guidance
3. **Teacher lesson pages phase 8** — alignment, verification, build, browser check
4. **`UNIT_META` keyed lookup** — replace positional array with `Record<UnitId, ...>` (tech-debt.md, medium priority)
5. **Dead code removal** — `businessTerms.ts` unused (tech-debt.md, low priority)
6. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md, low priority)
7. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md, low priority)
8. **Broken cover image on git pages** — base path issue (tech-debt.md, medium priority)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
