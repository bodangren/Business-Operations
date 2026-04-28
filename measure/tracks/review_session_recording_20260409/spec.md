# Track Specification: Review Session Recording

## Overview
Add session recording for the spaced-repetition review mode, ensuring it matches the behavior of flashcards, matching, and speed-round modes. This will make review sessions appear in "Recent Practice" and update aggregate stats consistently.

## Functional Requirements
1. **Create `recordReviewSession` function** in `src/lib/study/modes/record-session.ts`
2. **Record each review interaction** as a `SessionResponse` with appropriate `review_outcome`
3. **Update mastery and SRS state** (already handled in `ReviewSession.tsx`, but ensure consistency)
4. **Persist session to localStorage** via `persistSession` helper
5. **Integrate with `ReviewSession.tsx`** to call `recordReviewSession` when review is complete

## Non-Functional Requirements
1. **Maintain test coverage** >80% for new code
2. **Follow existing code patterns** from `recordFlashcardSession`, `recordMatchingSession`, and `recordSpeedRoundSession`
3. **Ensure backward compatibility** with existing session data

## Acceptance Criteria
1. When a user completes a review session, a new `SessionRecord` is added to `data.sessions`
2. The review session appears in "Recent Practice"
3. Aggregate stats (total_sessions, total_questions_answered, etc.) are updated correctly
4. Mastery and SRS state are updated consistently with other practice modes

## Out of Scope
- Changing the existing SRS logic
- Adding new UI elements beyond what's already present
- Modifying other practice modes' recording logic
