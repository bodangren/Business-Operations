# Plan: Fix 13 Pre-existing TS Errors in Test Files

## Phase 1: Fix all 13 TS errors

- [x] Add `"finance"` to `TopicTag` union in `src/types/glossary.ts`
- [x] Cast `UnitId` template literals in `index-records.test.ts:28` and `lesson-registry.test.ts:33`
- [x] Fix `readonly` → mutable in `record-session.test.ts` (`baseOptions.topic_tags`)
- [x] Fix partial session casts in `export.test.ts:208` and `storage.test.ts:153`
- [x] Fix CSV optional column type in `export.test.ts:234`
- [x] Verify: `npx tsc --noEmit` exits 0
- [x] Verify: all tests pass (`npx vitest run`)
- [x] Verify: `npm run lint` exits 0
- [x] Verify: `npm run build` succeeds
