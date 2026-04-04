# Implementation Plan: ESLint Warning Cleanup Pass

## Phase 1: Auto-Fix Unused Imports and let→const (~354 warnings)

### Task 1.1: Run ESLint --fix for auto-fixable warnings
- Run `npx eslint . --ext .ts,.tsx --fix` to auto-remove unused imports and fix `let`→`const`
- Review the diff to confirm no behavioral changes

### Task 1.2: Verify auto-fix results
- Run `npm run lint` — warning count should drop from ~571 to ~220
- Run `npm run test` — all tests must pass
- Run `npm run build` — must succeed

### Task 1.3: Commit and attach git note
- Commit: `chore(lint): Auto-fix unused imports and let→const warnings`
- Attach git note with summary of changes

## Phase 2: Manual Cleanup of Remaining Unused Vars (~30 warnings)

### Task 2.1: Remove unused destructured variables and assignments
- Review each remaining unused-var warning
- Remove or prefix with `_` where intentional (e.g., `_index` in map callbacks)

### Task 2.2: Verify and commit
- Run `npm run lint`, `npm run test`, `npm run build`
- Commit: `chore(lint): Remove remaining unused variable warnings`

## Phase 3: Fix no-explicit-any Warnings (227 warnings)

### Task 3.1: Tackle `any` types in lib/ utilities
- Focus on `src/lib/` files first (core logic)
- Replace `any` with proper types where clear from context
- Leave `any` where type is genuinely unknown (add `eslint-disable-next-line` with justification)

### Task 3.2: Tackle `any` types in components
- Fix `any` in React component props and state
- Use `unknown` or specific types

### Task 3.3: Tackle `any` types in test files
- Lower priority — fix obvious ones, disable for complex mocks

### Task 3.4: Verify and commit
- Run `npm run lint`, `npm run test`, `npm run build`
- Commit: `chore(lint): Replace no-explicit-any with proper types`

## Phase 4: Fix React Hooks Rules (~10 warnings)

### Task 4.1: Fix hooks called inside callbacks
- CashFlowChallenge `useCredit` inside callback (lines 867/874)
- Refactor to call hook at component level, pass value into callback

### Task 4.2: Fix unnecessary/missing hook dependencies
- Add missing dependencies or remove unnecessary ones

### Task 4.3: Verify and commit
- Run `npm run lint`, `npm run test`, `npm run build`
- Commit: `fix(hooks): Fix React hooks rules-of-hooks violations`

## Phase 5: Final Verification

### Task 5.1: Full test suite
- Run `npm run test` — all tests pass
- Run `npm run lint` — target <50 warnings
- Run `npm run build` — clean build

### Task 5.2: Update tech-debt.md
- Mark warning cleanup items as resolved
- Record remaining warning count

### Task 5.3: Final checkpoint commit
- Commit: `chore(lint): ESLint warning cleanup checkpoint`
- Attach verification report as git note
