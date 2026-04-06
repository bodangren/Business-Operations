# Plan: Fix 13 Pre-existing TS Errors in Test Files

## Phase 1: Fix all 13 TS errors

- [ ] Add `"finance"` to `TopicTag` union in `src/types/glossary.ts`
- [ ] Cast `UnitId` template literals in `index-records.test.ts:28` and `lesson-registry.test.ts:33`
- [ ] Fix `readonly` → mutable in `record-session.test.ts` (`baseOptions.topic_tags`)
- [ ] Fix partial session casts in `export.test.ts:208` and `storage.test.ts:153`
- [ ] Fix CSV optional column type in `export.test.ts:234`
- [ ] Verify: `npx tsc --noEmit` exits 0
- [ ] Verify: all tests pass (`npx vitest run`)
- [ ] Verify: `npm run lint` exits 0
- [ ] Verify: `npm run build` succeeds
