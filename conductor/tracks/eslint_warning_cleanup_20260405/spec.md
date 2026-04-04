# Specification: ESLint Warning Cleanup Pass

## Overview

The project has 571 ESLint warnings (0 errors). These are all pre-existing and span three categories: unused imports/variables (~344), `@typescript-eslint/no-explicit-any` (~227), and react-hooks rules (~10). This track systematically reduces warnings to improve developer experience and build output clarity.

## Functional Requirements

1. Remove all unused imports across lesson files, components, and utilities
2. Replace `let` with `const` where variables are never reassigned
3. Add proper TypeScript types to replace `any` where feasible
4. Fix React hooks rules violations (hooks called inside callbacks)
5. All existing tests must continue to pass
6. Build must succeed after changes

## Non-Functional Requirements

- No new dependencies
- ESLint warning count must decrease (target: <50 remaining)
- No behavioral changes — this is purely a code quality pass
- Preserve all `eslint-disable` comments that are intentional
- Do not modify `.eslintrc` rules unless a rule is clearly broken

## Acceptance Criteria

- [ ] `npm run lint` shows significantly fewer warnings
- [ ] `npm run test` passes (all existing tests)
- [ ] `npm run build` succeeds
- [ ] No new errors introduced
- [ ] Git note attached to phase checkpoint

## Out of Scope

- Adding new ESLint rules or changing rule severity
- Migrating from `next lint` to ESLint CLI (separate track)
- Adding new TypeScript types or interfaces beyond replacing `any`
- Modifying test files unless they have lint errors that break the build
