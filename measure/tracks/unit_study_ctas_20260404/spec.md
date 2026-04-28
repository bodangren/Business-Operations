# Specification: Wire Up Unit-Level Study CTAs

## Overview

The StudentUnitOverview and StudentHub pages currently show static "Study This Unit's Terms" CTAs with no awareness of the student's SRS study state. This track adds per-unit due-count badges so students can see at a glance which units have terms ready for review.

## Functional Requirements

### FR-1: Per-Unit Due Count Utility
- Add `getDueCountByUnit()` to `src/lib/study/derived.ts` that returns `Record<UnitId, number>` mapping each unit to its due-term count.
- Add `getDueCountForUnit(unitId)` convenience function returning a single unit's count.
- Cross-reference `DueReviewEntry.term_slug` with `glossaryData[].units` to determine unit membership.
- Return 0 for units with no study data.

### FR-2: StudyDueBadge Client Component
- New client component `src/components/student/StudyDueBadge.tsx`.
- Accepts `unitId: UnitId` prop.
- Loads study data via `loadStudyData()` in `useEffect` (same pattern as `PracticeHubHome`).
- Computes per-unit due count using FR-1 utility.
- Renders a badge showing "N terms due" when count > 0, or "All caught up" when count === 0 and user has studied, or null (no badge) when user has never studied (no data).
- Uses existing `Badge` component with appropriate color coding (red/amber for due, green for caught up).

### FR-3: Enhanced Unit Study CTA in StudentUnitOverview
- Replace the static "Study This Unit's Terms" card (lines 226-248) with one that includes the `StudyDueBadge`.
- When due count > 0: show "N terms due for review" with emphasis styling.
- When caught up: show "You're up to date on this unit's terms."
- When no study data: show existing static copy (no change for new users).
- Preserve the existing "Study Terms" button link to practice hub.

### FR-4: Unit Due Counts on StudentHub
- Add `StudyDueBadge` to each unit card on the StudentHub page.
- Since `StudentHubPage` is a server component, either:
  - Option A: Extract a `UnitCard` client sub-component that renders the card + badge.
  - Option B: Create a `StudyDueBadges` client wrapper that overlays badges on the static cards.
- Prefer Option A for simplicity — create `src/components/student/HubUnitCard.tsx`.

## Non-Functional Requirements

- All new logic must be covered by unit tests (vitest).
- No new dependencies — use existing `loadStudyData`, `deriveStats`, `glossaryData`, `filterByUnit`.
- Component must handle SSR gracefully (no localStorage access during render, only in `useEffect`).
- Follow existing code conventions: default exports for interactive components, named exports for UI.

## Acceptance Criteria

- [ ] `getDueCountByUnit()` returns correct per-unit counts from study data
- [ ] `getDueCountForUnit(unitId)` returns correct single-unit count
- [ ] `StudyDueBadge` shows "N terms due" when student has due terms in that unit
- [ ] `StudyDueBadge` shows "All caught up" when student has no due terms but has studied
- [ ] `StudyDueBadge` renders nothing when student has no study data at all
- [ ] StudentUnitOverview study CTA displays the due badge
- [ ] StudentHub unit cards display per-unit due badges
- [ ] All existing tests still pass
- [ ] `npm run build` succeeds with no new errors
- [ ] `npm run lint` passes

## Out of Scope

- Mastery progress bars on unit cards (separate track).
- Real-time updates (badge updates on page load only, not on storage events).
- Server-side rendering of study data (all study state remains client-side).
