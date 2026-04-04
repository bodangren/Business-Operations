# Current Directive

**Updated:** 2026-04-05
**Status:** Phase 2 complete — all unused-var warnings eliminated (290 → 235)

## Active Track

`eslint_warning_cleanup_20260405` — Phase 3: Fix no-explicit-any warnings (227 remaining)

## What Was Just Completed

- Audit of tracks `study_data_context_20260405` and `lesson_index_entries_20260405`
- Both tracks clean: spec-compliant, well-tested, no stale imports, titles verified against source
- 216 tests pass (14 suites), build clean (603+ pages), lint clean (0 errors)
- Review report filed: `conductor/reviews/review_20260405_context-and-index.md`

## Verification

- Tests: 216 passed (14 suites)
- Build: compiled successfully (603+ pages)
- Lint: 0 errors (warnings are pre-existing)

## Next Priorities

1. **ESLint warning cleanup pass** — ~150+ unused-import and `any` type warnings across lesson files; batch cleanup would reduce build noise and improve DX
2. **Next.js lint migration** — `next lint` is deprecated; migrate to ESLint CLI before Next.js 16 (`npx @next/codemod@canary next-lint-to-eslint-cli .`)
3. **Mastery progress bars on unit cards** — separate track to show per-unit mastery % alongside due counts
4. **CashFlowChallenge rules-of-hooks fix** — `useCredit` called inside callback at lines 867/874; pre-existing but should be fixed

## Blocked / Deferred

- Team activity mode (stretch goal)
- Session state persistence across refresh (stretch)
- Storage migration v1.x passthrough
