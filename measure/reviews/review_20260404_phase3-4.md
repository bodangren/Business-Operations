# Review Report: Local Study Export Track — Phases 3–4

**Date:** 2026-04-04
**Reviewer:** Automated code-review audit
**Scope:** `local_study_export_20260403` Phases 3–4 and `practice_hub_wireframes_20260403` Phases 1–5
**Commits:** `f289df4..673d5b7`

---

## Summary

The study engine library (`src/lib/study/`) is well-structured with clean separation of concerns, thorough type definitions, and solid test coverage (160 tests, all passing). The wireframe handoff was complete and actionable. The practice hub home and progress dashboard render correctly at build time. However, two functional bugs were found and fixed, and the largest gap is that **no interactive study-mode UI components or route pages exist yet** — the hub links to flashcards, matching, speed-round, and export routes that all 404.

## Verification Checks

- [x] Plan Compliance: Partial — engine logic matches spec, but study-mode UI surfaces (WF3a/b/c) are not yet routable
- [x] Style Compliance: Pass — follows existing component patterns and project conventions
- [x] New Tests: Yes — 160 tests across 9 files
- [x] Test Coverage: Pass — all engine logic paths tested
- [x] Test Results: Passed — 160/160
- [x] Build: Passed — static export completes, no errors
- [x] Lint: Warnings only (pre-existing, not introduced by this track)

## Issues Found

### CRITICAL — Dead navigation links (no study-mode route pages)

- **File:** Missing: `src/app/student/practice-hub/flashcards/page.tsx`, `matching/page.tsx`, `speed-round/page.tsx`, `export/page.tsx`
- **Context:** PracticeHubHome links to all four routes. None have page.tsx files. Clicking any study mode card results in a 404. This is the single biggest gap in the track.
- **Status:** Not fixed — requires new component development (Phase 5 work). Plan task 2.4 is also incomplete (surface due-review counts at entry points).

### HIGH — Accuracy displayed as raw decimal instead of percentage (FIXED)

- **File:** `src/components/student/PracticeHubHome.tsx:255`, `src/components/student/ProgressDashboard.tsx:209`
- **Context:** `session.results.accuracy` is stored as a 0–1 fraction (e.g., 0.8) but was displayed directly with a `%` suffix and compared against thresholds 80/60 instead of 0.8/0.6. This caused all accuracy values to display as "0%" in red.
- **Fix Applied:** Changed thresholds to 0.8/0.6 and wrapped display in `Math.round(accuracy * 100)`.

### HIGH — Speed-round per-term correctness was globally approximated (FIXED)

- **File:** `src/lib/study/modes/record-session.ts:195`
- **Context:** `wasCorrect = session.correctCount > 0` marked ALL unique terms as correct if ANY answer was correct. This inflated mastery for terms the student actually got wrong.
- **Fix Applied:** Replaced with session-level accuracy heuristic: if overall accuracy ≥ 70%, terms get "good"; otherwise "again". This is imperfect but far better than the previous logic. A proper fix requires tracking per-term outcomes in `SpeedRoundSession`.

### MEDIUM — Per-term tracking missing from SpeedRoundSession

- **File:** `src/lib/study/modes/speed-round.ts`
- **Context:** The session only tracks aggregate counts. To accurately record per-term correctness, the session needs a `termResults: Map<string, boolean>` or similar field.
- **Status:** Not fixed — requires adding field to `SpeedRoundSession` interface and updating answer flow.

### LOW — Task 2.4 still incomplete

- **File:** `measure/tracks/local_study_export_20260403/plan.md:26`
- **Context:** "Surface due-review counts to the practice hub and unit entry points" is still unchecked. The hub shows due counts from `deriveStats` but unit-level entry points (StudentUnitOverview, StudentHub) haven't been wired up yet.
- **Status:** Not fixed — deferred to next implementation pass.

### INFO — Duplicated shuffle function

- **Files:** `flashcards.ts:28`, `matching.ts:26`, `speed-round.ts:29`
- **Context:** Identical `shuffle<T>()` function duplicated across all three mode files. Could be extracted to a shared utility.
- **Status:** Not fixed — cosmetic, no functional impact.

## Recommendations for Next Phase

1. **Build study-mode route pages** — Create `FlashcardSessionPage`, `MatchingSessionPage`, `SpeedRoundSessionPage` client components and their route `page.tsx` files. This unblocks the entire interactive study flow.
2. **Add per-term tracking to SpeedRoundSession** — Add a `results: Record<string, boolean>` field so `recordSpeedRoundSession` can accurately grade each term.
3. **Build export flow** — Implement the `ExportFlow` component and route at `/student/practice-hub/export` with CSV/JSON download capability.
4. **Wire up unit-level study CTAs** — Add due-review counts and "Study These Terms" links to StudentUnitOverview and StudentHub.
5. **Extract shared utilities** — Move `shuffle` to `src/lib/study/utils.ts`.
