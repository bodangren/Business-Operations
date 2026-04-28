# Specification: useUnitMastery Hook Test Coverage

## Overview

The `useUnitMastery` hook in `src/contexts/StudyDataContext.tsx` currently has zero test coverage. Its pure helper `getUnitMasteryInfo` is well-tested, but the hook itself — which handles the React context integration, loading state, and null-safety — is untested. This track adds comprehensive tests for the hook.

## Functional Requirements

1. **Loading state**: `useUnitMastery` returns `null` while the `StudyDataProvider` is loading data.
2. **Null data state**: `useUnitMastery` returns `null` when data is `null` (during SSR/hydration).
3. **Loaded state**: `useUnitMastery` returns `{ termsStudied, termsTotal, avgMastery }` matching the output of `getUnitMasteryInfo` when data is available.
4. **Context error**: `useUnitMastery` throws when used outside `StudyDataProvider`.
5. **Reactive updates**: `useUnitMastery` returns updated values when study data changes via `mutate`.

## Non-Functional Requirements

- Tests use `@testing-library/react` `renderHook` with a `StudyDataProvider` wrapper.
- Tests use `vitest` (already installed).
- No production code changes — this is a test-only track.
- Follow existing test file conventions in `src/contexts/__tests__/`.

## Acceptance Criteria

- [ ] New test file `src/contexts/__tests__/useUnitMastery.hook.test.ts` passes.
- [ ] Tests cover: loading, null, loaded, outside-provider error, reactive update.
- [ ] `npm run test` passes with no regressions.
- [ ] `tsc` compiles with 0 errors.

## Out of Scope

- Testing `getUnitMasteryInfo` (already covered in `useUnitMastery.test.ts`).
- Testing `useStudyDueCount` or other hooks.
- Modifying hook implementation (unless needed for testability).
