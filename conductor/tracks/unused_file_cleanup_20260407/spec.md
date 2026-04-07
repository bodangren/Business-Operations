# Specification: Unused File Cleanup in `bus-math-nextjs/`

## Overview
The codebase has accumulated route artifacts, helper files, local notes, and components that may no longer be imported or reachable. Before taking on broad UI polish work, the repository should be cleaned so page audits are working against live code instead of stale leftovers.

This track removes unused files inside `bus-math-nextjs/` only. It requires proof that each removed file is not referenced by App Router conventions, imports, exports, content loaders, or static asset paths.

## Functional Requirements
- Inventory candidate unused files across `src/app/`, `src/components/`, `src/lib/`, `src/data/`, and related local assets inside `bus-math-nextjs/`.
- Classify each candidate as one of:
  - safe to delete,
  - keep but document,
  - unclear and defer.
- Remove only files proven to be unused.
- Update any imports, exports, tests, or documentation that still mention removed files.
- Preserve all live routes, lesson-data files, static content, and intentionally shipped assets.

## Non-Functional Requirements
- Scope stays inside `bus-math-nextjs/` unless a follow-on track is explicitly created.
- No student-facing or teacher-facing route may break as a side effect of cleanup.
- Every deletion must be justified by repository evidence, not guesswork.
- Verification must cover lint/build/test health after cleanup.

## Acceptance Criteria
- A candidate inventory exists in the track notes or plan progress.
- Every deleted file can be shown to have zero live references or route usage.
- No broken imports remain after cleanup.
- The app still builds successfully and route surfaces remain intact.

## Out of Scope
- Refactoring files that are still used but messy.
- Renaming files for style only.
- Cleaning Conductor docs, archived tracks, or non-application root files.
