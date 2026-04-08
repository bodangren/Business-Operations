# Spaced-Repetition Review Prototype Implementation Plan

## Phase 1: Set up review route and basic UI
- [x] Create review page at `src/app/student/practice-hub/review/page.tsx`
- [x] Add link to review page from practice hub
- [x] Create empty state UI for when no terms are due
- [x] Write tests for basic route and components

## Phase 2: Integrate study data and due terms
- [x] Load study data via `useStudyData`
- [x] Filter and display due terms using `getDueTerms`
- [x] Create flashcard component to display term and definition
- [x] Write tests for due terms filtering and flashcard component

## Phase 3: Add review ratings and update state
- [x] Add rating buttons (Again, Hard, Good, Easy)
- [x] Implement `processReview` and `updateMastery` on rating
- [x] Persist updated study data to localStorage
- [x] Write tests for review processing and state updates

## Phase 4: Session summary and polish
- [x] Add session summary UI
- [x] Add navigation between review items
- [x] Polish styling and accessibility
- [x] Run full test suite and build
