# Specification: TypeScript Build Guardrails

## Overview

As of 2026-04-07, the local repo baseline is already clean: `./node_modules/.bin/tsc --noEmit` exits 0, and recent Measure reviews on 2026-04-07 also record `tsc: 0 errors`. The remaining gap is not unresolved TypeScript warnings in source code, but the lack of a dedicated guardrail that makes TypeScript regressions visible immediately during normal development and review.

This track converts the original "fix all TypeScript warnings in the build" request into an accurate follow-up: preserve the current zero-error baseline, add an explicit typecheck entrypoint, and make the build verification path unambiguous for future tracks.

## Functional Requirements

1. Add a first-class repository command for TypeScript verification so contributors do not rely on ad hoc compiler invocations.
2. Document the project's TypeScript-clean baseline and the expected verification commands for future tracks.
3. Ensure track implementation and review workflows explicitly include TypeScript verification before a track is considered complete.
4. If any TypeScript errors are discovered while implementing this track, resolve them within the same track before completion.
5. Preserve current application behavior; this track is about verification and guardrails, not product changes.

## Non-Functional Requirements

- Do not relax `tsconfig` settings to create a false clean state.
- Do not add `@ts-ignore`, `@ts-expect-error`, or broad `as unknown as` casts unless narrowly justified and documented.
- Prefer non-interactive verification commands that work in the current local workflow.
- Avoid changes that require `.next` mutation unless explicitly approved by the user.

## Acceptance Criteria

- [ ] `./node_modules/.bin/tsc --noEmit` exits 0 from `bus-math-nextjs/`
- [ ] `package.json` exposes a dedicated typecheck command
- [ ] Measure workflow/docs reference TypeScript verification explicitly
- [ ] `npm run lint` passes
- [ ] `npm run build` passes when build execution is permitted, or the track documents the approved non-mutating verification path used instead

## Out of Scope

- Re-introducing already completed TypeScript cleanup work from `fix_ts_test_errors_20260406`
- Broad refactors unrelated to type safety verification
- ESLint warning cleanup unrelated to TypeScript verification
