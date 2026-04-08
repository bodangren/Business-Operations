# Current Directive

**Updated:** 2026-04-07
**Status:** Review complete — 5 tracks audited, 2 fixes applied

## What Was Just Completed

- **Code review of 5 tracks** — `typescript_build_guardrails`, `shared_surface_ui_audit`, `student_hub_practice_ui_audit`, `student_lessons_u01_u04_ui_audit`, `student_lessons_u05_u08_ui_audit` — all pass clean
- **Fix: DataTableSimulator shared state bug** — split `checked` into `columnChecked`/`rowChecked`; Step 3 button now advances step badge
- **Fix: unused React import** — `video-player.tsx` cleaned up
- **Tech-debt tracked** — `UNIT_META` positional coupling in `page.tsx` added to tech-debt.md

## Verification

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, 0 warnings

## Next Priorities

1. **Teacher and capstone UI audit** — `teacher_capstone_ui_audit_20260407` track (active, 4 phases pending)
2. **Teacher lesson pages operational rebuild** — `teacher_lesson_pages_operational_20260407` track (active, 8 phases pending)
3. **Dead code removal** — `businessTerms.ts` is unused (tech-debt.md, low priority)
4. **`UNIT_META` keyed lookup** — replace positional array with `Record<UnitId, ...>` (tech-debt.md, medium priority)
5. **Glossary IDs manually assigned** — collision risk as terms grow (tech-debt.md L14, low priority)
6. **`eslint-config-next` version sync** — keep in lockstep with `next` (tech-debt.md L17, low priority)
7. **Pre-existing typescript lint warnings** - correct a few every phase.

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
