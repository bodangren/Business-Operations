# Specification: ESLint CLI Migration

## Overview

Migrate the `lint` npm script from `next lint` (deprecated) to direct `eslint .` invocation. The project already uses ESLint 9 flat config (`eslint.config.mjs`), so the config format is already correct. The migration requires adding proper global ignores and updating the script.

## Functional Requirements

- `npm run lint` must produce identical output to current `next lint` behavior
- `.next/` build output must be excluded from linting
- `node_modules/` must be excluded from linting
- Root-level JS scripts (CommonJS `scripts/*.js`) should be excluded or handled
- Source files (`src/`, `app/`, `*.ts`, `*.tsx`, `*.mjs`) must still be linted

## Non-Functional Requirements

- No new dependencies required
- Must work with ESLint 9 flat config
- Must be forward-compatible with Next.js 16

## Acceptance Criteria

- [ ] `npm run lint` runs `eslint .` and reports 0 errors, 0 warnings (matching current behavior)
- [ ] `npm run build` completes successfully
- [ ] `.next/` files are not linted
- [ ] `scripts/analyze-components.js` CommonJS imports are ignored or fixed
- [ ] `scripts/audit/run-audit.ts` warnings are resolved or ignored

## Out of Scope

- Migrating CommonJS scripts to ESM
- Adding new lint rules
- Fixing any remaining warnings in source code
