# Current Directive

**Updated:** 2026-04-07
**Status:** Review complete — 3 tracks audited, lockfile warning fixed

## What Was Just Completed

- **Code review of 3 tracks** — `mastery_color_thresholds`, `lesson_data_import_migration`, `resolve_finance_topic_tag` — all pass clean
- **Type-safety fix** — `TOPIC_LABELS` in `UnitVocabulary.tsx` and `GlossaryCard.tsx` upgraded from `Record<string, string>` to `Record<TopicTag, string>`
- **Lockfile warning fixed** — added `outputFileTracingRoot` to `next.config.ts`; build now produces zero warnings
- **Cleanup track completed** — root `package.json`/`package-lock.json` removed, lockfile warning silenced

## Verification

- Tests: 274 passed (21 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 warnings

## Next Priorities

1. **Dead code removal** — `businessTerms.ts` is unused (tech-debt.md, low priority)
2. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md L14, low priority)
3. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md L17)

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
