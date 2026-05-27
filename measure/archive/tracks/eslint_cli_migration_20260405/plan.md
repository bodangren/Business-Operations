# Implementation Plan: ESLint CLI Migration

## Phase 1: Add ignores and update lint script

### Task 1: Write tests
- [x] Verify `npx eslint .` fails due to `.next/` linting (current behavior) — 159,490 problems
- [x] Verify expected file count matches source-only linting

### Task 2: Add global ignores to eslint.config.mjs
- [x] Add global ignores for `.next/`, `node_modules/`, `scripts/`, `coverage/`, `out/`, `next-env.d.ts`
- [x] Verify `npx eslint .` now produces 0 errors, 0 warnings

### Task 3: Update package.json lint script
- [x] Change `"lint": "next lint"` to `"lint": "eslint ."`
- [x] Add `"lint:fix": "eslint . --fix"` script

### Task 4: Verify
- [x] Run `npm run lint` — passes with 0 errors, 0 warnings
- [x] Run `npm run build` — compiled successfully (603+ pages)
- [x] Run `npm run test` — 216 passed (14 suites)

### Task 5: Commit
- [x] Commit with note and push
