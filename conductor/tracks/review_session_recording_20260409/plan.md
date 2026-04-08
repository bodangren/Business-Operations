# Implementation Plan: Review Session Recording

## Phase 1: Define Review Session Type and Record Function
- [x] Define `ReviewSession` type (if not already exists)
- [x] Write `recordReviewSession` function in `record-session.ts`
- [x] Add tests for `recordReviewSession` in `record-session.test.ts`

## Phase 2: Integrate with ReviewSession Component
- [x] Update `ReviewSession.tsx` to track session start time, ratings, and responses
- [x] Call `recordReviewSession` when review is complete
- [x] Update `mutate` to include the new session

## Phase 3: Verification
- [ ] Run full test suite
- [ ] Run `npm run build`
- [ ] Manual verification: complete a review session and check Recent Practice
