# Specification: Study Data Context Provider

## Overview

Extract shared study-data loading into a React context so that components on the same page (especially the hub page with 8 `StudyDueBadge` instances) share a single `loadStudyData()` call instead of making N independent localStorage reads.

## Problem

Currently, every component that needs study data calls `loadStudyData()` independently:

- `StudyDueBadge` (8 instances on hub page via `HubUnitCard`) — each calls `loadStudyData()` in its own `useEffect`
- `PracticeHubHome` — calls `loadStudyData()` in `useEffect`
- `ProgressDashboard` — calls `loadStudyData()` in `useEffect`
- `ExportPage` — calls `loadStudyData()` multiple times

On the hub page alone, this means 8+ redundant `localStorage.getItem` + `JSON.parse` cycles for identical data. Components also have no way to reactively re-render when another component mutates study data (e.g., after a study session completes).

## Goals

1. **Single read per page**: A `StudyDataProvider` wraps the page tree; child components consume data via a `useStudyData()` hook.
2. **Reactive updates**: When study data changes (session recorded, import completed), the context re-renders consumers automatically.
3. **Backward compatibility**: `loadStudyData()` and `saveStudyData()` in `lib/study/storage.ts` remain unchanged — the context wraps them, not replaces them.
4. **No breaking changes**: Existing component APIs (`StudyDueBadge`, `PracticeHubHome`, etc.) keep the same props.

## Non-Goals

- Migrating away from localStorage (out of scope)
- Server-side study data (all study data is client-only)
- Real-time sync across tabs (stretch, not in this track)

## Functional Requirements

1. Create `StudyDataProvider` component that:
   - Loads study data from localStorage once on mount
   - Exposes `data: LocalStudyData`, `refresh: () => void`, and `isLoading: boolean` via context
   - Provides a `mutate` function that updates both context state and localStorage

2. Create `useStudyData()` hook that:
   - Returns `{ data, refresh, isLoading, mutate }`
   - Throws if used outside `StudyDataProvider`

3. Create `useStudyDueCount(unitId)` derived hook that:
   - Reads from context (no direct localStorage access)
   - Returns `{ dueCount, hasStudied }` for a given unit
   - Replaces the internal logic currently in `StudyDueBadge`

4. Refactor `StudyDueBadge` to:
   - Use `useStudyDueCount(unitId)` instead of calling `loadStudyData()` directly
   - Remove internal `useEffect` and `useState` for data loading

5. Refactor `PracticeHubHome`, `ProgressDashboard`, `ExportPage` to:
   - Use `useStudyData()` instead of calling `loadStudyData()` directly
   - Remove redundant `useEffect` data-loading patterns

6. Wire `StudyDataProvider` into the app layout or student layout so it's available on all student pages.

## Acceptance Criteria

- [ ] `StudyDataProvider` and `useStudyData()` exist with unit tests
- [ ] `useStudyDueCount(unitId)` exists with unit tests
- [ ] `StudyDueBadge` uses context — no direct `loadStudyData()` call
- [ ] `PracticeHubHome` uses context — no direct `loadStudyData()` call
- [ ] `ProgressDashboard` uses context — no direct `loadStudyData()` call
- [ ] `ExportPage` uses context — no direct `loadStudyData()` call
- [ ] Hub page loads study data exactly once (verified by test or logging)
- [ ] All existing tests pass
- [ ] Build succeeds with no new errors
