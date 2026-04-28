# Code Review: SRS Review Prototype (2026-04-09)

**Date:** 2026-04-09
**Reviewer:** Automated code-review consultant
**Tracks Audited:**
1. `srs_review_prototype_20260409` — prototype spaced-repetition review interface

---

## Verification Baseline

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: succeeds with no errors

---

## Scope

Commits since last review (`a218725`):
- `2772ef3` — Add track `srs_review_prototype_20260409` (conductor docs)
- `bfa5f38` — Add spaced-repetition review prototype (code change)
- `c2aa897` — Complete track (conductor docs)

**1 source code commit.** 297 net new lines across 3 source files.

---

## Plan Compliance

- [x] Phase 1 — Set up review route and basic UI: Route created, link from hub updated, empty state UI present
- [~] Phase 1 — Write tests: **No test file created** (see Issue 1)
- [x] Phase 2 — Integrate study data and due terms: `useStudyData`, `getDueTerms`, flashcard component all implemented
- [~] Phase 2 — Write tests: **No test file created**
- [x] Phase 3 — Add review ratings and update state: Rating buttons, `processReview`/`updateMastery`, localStorage persistence all implemented
- [~] Phase 3 — Write tests: **No test file created**
- [x] Phase 4 — Session summary and polish: Completion UI, navigation, styling all implemented
- [~] Phase 4 — Run full test suite: Tests pass, but no new tests were added

Plan compliance: **Partial**. Implementation is complete, but test-writing tasks were marked `[x]` without corresponding test files.

---

## Code Analysis

### ReviewSession.tsx

Well-structured component with clear separation of empty-state, active-review, and completion views. Flashcard flip animation is clean. Uses `useCallback` for the rating handler and properly integrates with the study data context.

### page.tsx

Minimal route file — just wraps `ReviewSession` in `Suspense`. Clean.

### PracticeHubHome.tsx

Single-line change: updated the "Start Review Session" link from `/student/practice-hub/flashcards${unitQuery}` to `/student/practice-hub/review`. Correct.

---

## Findings

### [Medium] Missing ReviewSession component tests

- **File:** `bus-math-nextjs/src/components/student/ReviewSession.tsx`
- **Context:** Plan phases 1-4 all include "Write tests" tasks marked `[x]`, but no test file exists at the expected location (`src/components/student/__tests__/ReviewSession.test.tsx`). The SRS library (`src/lib/study/__tests__/srs.test.ts`) has 24 tests, but the UI component that orchestrates the review flow has zero coverage.
- **Suggestion:** Create a test file covering:
  - Empty state renders when no terms are due
  - Completion state renders when all terms reviewed
  - Card flip toggles on click
  - Rating buttons disabled until card flipped
  - `handleRating` updates study state correctly

### [Low] Potential stale-closure issue in handleRating for rapid clicks

- **File:** `bus-math-nextjs/src/components/student/ReviewSession.tsx` (Lines 23-61)
- **Context:** `handleRating` captures `data` and `currentIndex` via `useCallback([...])`. `setCurrentIndex((prev) => prev + 1)` on line 59 uses the functional updater (safe), but the `data` read on line 24 and the `mutate` call on line 49 both use the closure-captured value. If a user double-clicks a rating button before React re-renders, the second call reads stale `data` and computes an identical state update — processing the same term twice.
- **Suggestion:** Use functional updater for `mutate` or add a processing guard:
  ```tsx
  const [isProcessing, setIsProcessing] = useState(false)
  // in handleRating: guard with isProcessing, set true at start, false after mutate
  ```

### [Low] Progress never reaches 100% during active review

- **File:** `bus-math-nextjs/src/components/student/ReviewSession.tsx` (Line 119)
- **Context:** `progress = Math.round((currentIndex / dueEntries.length) * 100)` — when reviewing the last card (`currentIndex = length - 1`), progress shows `Math.round((length-1)/length * 100)` which is 99% for most session sizes. The 100% state is only reachable via the completion screen. Minor UX nit.
- **Suggestion:** Use `Math.min(100, Math.round(...))` or show progress as "X of Y" only (which is already displayed on line 171).

### [Info] No accessibility attributes on flashcard

- **File:** `bus-math-nextjs/src/components/student/ReviewSession.tsx` (Lines 184-224)
- **Context:** The flip card uses `onClick` on a `div` — no `role="button"`, no `tabIndex`, no `onKeyDown` handler. Keyboard-only users cannot flip the card. The spec's Non-Functional Requirements call for "basic accessibility (ARIA labels, keyboard navigation)."
- **Suggestion:** Add `role="button"`, `tabIndex={0}`, and `onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setIsFlipped(prev => !prev); } }}` to the card container.

---

## Issues Fixed

None — all issues are low/medium severity and do not block functionality. No code changes made during this review.

---

## Observations

- **Clean integration**: The component properly reuses `useStudyData`, `getDueTerms`, `processReview`, `updateMastery`, and `createMastery` from existing modules. No reinvention.
- **Bilingual support**: Card shows both `term_en`/`def_en` and `term_zh`/`def_zh` — consistent with the glossary system.
- **Rating UX**: Color-coded buttons (red/amber/green/blue) with disabled-until-flip pattern prevents accidental ratings. Good design.
- **No session recording**: Unlike other practice modes (flashcards, matching, speed-round), the review session doesn't create a `SessionRecord`. This may be intentional for the prototype phase but worth noting for future tracks.
- **All 39 tracks complete**: Codebase is in a clean steady state. Ready for new feature work.

---

## Summary

Solid prototype implementation. The component integrates cleanly with existing SRS infrastructure and follows project patterns. One medium issue (missing tests) and two low issues (stale closure risk, keyboard accessibility). Build, tests, typecheck, and lint all pass.
