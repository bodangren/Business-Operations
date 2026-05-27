# Spec: Dead Code Removal Pass

## Overview

Remove all `_`-prefixed dead code (variables, functions, state declarations) from the codebase. These are leftovers from debugging, unused computations, and abandoned features that add noise without value.

## Functional Requirements

- Remove 29 truly dead `_`-prefixed definitions across 26 files
- Handle 2 partially-dead state declarations (`_showDiscovery`, `_showCalculation`) where the setter IS used — replace with `_unused` pattern or restructure
- Preserve 4 non-dead `_`-prefixed items that are actively used

## Non-Functional Requirements

- Zero test regressions (216 tests must still pass)
- Zero lint warnings after cleanup
- Build must succeed (603+ pages)
- No behavioral changes — purely subtractive

## Acceptance Criteria

- [ ] All 29 truly dead instances removed
- [ ] 2 partially-dead state declarations cleaned up properly
- [ ] `npm run lint` passes with 0 warnings
- [ ] `npx vitest run` passes all tests
- [ ] `npm run build` succeeds
- [ ] No new `_`-prefixed dead code introduced

## Out of Scope

- Non-`_`-prefixed dead code
- Refactoring live code
- ESLint config changes
