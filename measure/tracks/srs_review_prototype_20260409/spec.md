# Spaced-Repetition Review Prototype Specification

## Overview
Prototype a spaced-repetition (SRS) review interface using the existing ts-fsrs integration and question bank data.

## Functional Requirements
1. **Review Route**: Create a new route `/student/practice-hub/review`
2. **Due Term Selection**: Display only terms that are currently due for review
3. **Review UI**: Show flashcard-style review with rating buttons (Again, Hard, Good, Easy)
4. **Mastery Updates**: Update term mastery and SRS state after each review
5. **Session Summary**: Show a summary of the review session when complete

## Non-Functional Requirements
1. **Responsive**: Works on desktop and mobile devices
2. **Local Storage**: Persists review state using the existing study data storage
3. **Accessibility**: Follows basic accessibility guidelines (ARIA labels, keyboard navigation)

## Acceptance Criteria
1. User can navigate to `/student/practice-hub/review`
2. User sees due terms (or empty state if no terms are due)
3. User can rate each term (Again/Hard/Good/Easy)
4. Term mastery and SRS state are updated after each rating
5. User sees a session summary when all due terms are reviewed

## Out of Scope
- Team review mode
- Advanced SRS configuration
- Cross-device sync
