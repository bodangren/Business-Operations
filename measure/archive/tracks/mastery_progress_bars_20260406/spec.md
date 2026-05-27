# Spec: Mastery Progress Bars on Unit Cards

## Overview

Show per-unit vocabulary mastery progress alongside the existing `StudyDueBadge` on unit cards in the student hub and unit overview pages. Students should see at a glance how many terms they've studied and their average mastery score for each unit.

## Functional Requirements

1. **Unit mastery data hook**: Add `useUnitMastery(unitId)` to `StudyDataContext.tsx` that returns `{ termsStudied, termsTotal, avgMastery }` (or null while loading). Reuses existing `mastery_by_term` data and builds a unit-term-count map from `glossaryData` at module level.

2. **MasteryProgressBar component**: A thin colored bar with a label showing "X/Y terms · Z% mastery". Uses the existing `<Progress>` UI primitive and `masteryColor()` helper from `derived.ts`.

3. **Hub integration**: Add `<UnitMasteryProgressBar>` to `HubUnitCard`, below the title/description, replacing the bare "Open unit" link area or augmenting it.

4. **Unit overview integration**: Add `<UnitMasteryProgressBar>` to `StudentUnitOverview`, in the "Study This Unit's Terms" card next to the existing `StudyDueBadge`.

5. **No-data state**: When a student has never studied any terms for a unit, render nothing (avoid showing "0/11 terms · 0%" which is discouraging).

## Non-Functional Requirements

- Client component only (hooks depend on localStorage).
- No additional API calls or server state.
- Color-coded bar: green (≥75%), amber (≥50%), red (<50%).
- Accessible: bar has `aria-label` with text summary.

## Acceptance Criteria

- [ ] `useUnitMastery` hook returns correct `termsStudied`, `termsTotal`, `avgMastery` for any unit
- [ ] `UnitMasteryProgressBar` renders correctly at 0%, 50%, 100% mastery
- [ ] Hub unit cards show the mastery bar when the student has study history
- [ ] Unit overview "Study" card shows the mastery bar alongside `StudyDueBadge`
- [ ] No visual regression for students with no study data (bar is hidden)
- [ ] Existing tests pass; new unit tests for the hook and component
- [ ] `npm run lint` passes with 0 warnings
- [ ] `npm run build` succeeds

## Out of Scope

- Lesson-level mastery display
- Mastery trends over time (sparklines)
- Practice hub dashboard changes
