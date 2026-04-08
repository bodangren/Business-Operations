# Spaced-Repetition Review Prototype Implementation Plan

## Phase 1: Set up review route and basic UI
- [x] Create review page at `src/app/student/practice-hub/review/page.tsx`
- [x] Add link to review page from practice hub
- [x] Create empty state UI for when no terms are due
- [x] Write tests for basic route and components

## Phase 2: Integrate study data and due terms
- [ ] Load study data via `useStudyData`
- [ ] Filter and display due terms using `getDueTerms`
- [ ] Create flashcard component to display term and definition
- [ ] Write tests for due terms filtering and flashcard component

## Phase 3: Add review ratings and update state
- [ ] Add rating buttons (Again, Hard, Good, Easy)
- [ ] Implement `processReview` and `updateMastery` on rating
- [ ] Persist updated study data to localStorage
- [ ] Write tests for review processing and state updates

## Phase 4: Session summary and polish
- [ ] Add session summary UI
- [ ] Add navigation between review items
- [ ] Polish styling and accessibility
- [ ] Run full test suite and build
