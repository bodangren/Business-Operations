# Specification: Clean Up Root Lockfile Warning

## Overview
The project has two package-lock.json files (root and bus-math-nextjs/) which causes a Next.js warning about multiple lockfiles. The root package.json only has @hello-pangea/dnd which is already a dependency in bus-math-nextjs/package.json.

## Functional Requirements
- Remove root package.json and package-lock.json
- Verify no regressions in bus-math-nextjs/ dependencies
- Ensure Next.js build warning about multiple lockfiles is resolved

## Non-Functional Requirements
- All tests must pass after the change
- No user-facing regressions
- npm run build must succeed without the multiple lockfile warning

## Acceptance Criteria
- Root package.json and package-lock.json are removed
- npm run build in bus-math-nextjs/ completes without the multiple lockfile warning
- All existing test suites pass
- No TypeScript errors

## Out of Scope
- Modifying bus-math-nextjs/package.json or package-lock.json
- Adding or removing any dependencies
