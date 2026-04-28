# Implementation Plan: Shared Surface UI Audit

## Phase 1: Route Inventory and Defect Log [x]

- [x] Enumerate the shared/public/reference routes in scope
- [x] Review each route on desktop and constrained-width/mobile screenshots and capture concrete defects
- [x] Group defects by shared component root cause vs page-specific root cause
- [x] Prioritize the defect list by severity and blast radius

## Phase 2: Shared Shell Fixes [x]

- [x] Write or update focused tests for shared layout helpers where practical
- [x] Fix header, nav, footer, container, and spacing issues affecting multiple routes
- [x] Verify the shared fixes against all in-scope routes before moving on

## Phase 3: Page-Specific Fixes [x]

- [x] Fix homepage layout/content alignment issues
- [x] Fix frontmatter page defects
- [x] Fix backmatter glossary/index defects
- [x] Re-check typography, card widths, CTA wrapping, and mobile spacing after fixes

## Phase 4: Verification and Closeout [x]

- [x] Run lint verification on touched files
- [x] Run `next build`
- [x] Run relevant automated tests
- [x] Perform a final browser pass on every in-scope route
- [x] Document intentionally deferred defects: none
- [x] Commit with a conventional commit message and attach a git note
- [x] Update track metadata and registry status

## Verification Notes

- Shared shell issues fixed: invalid gradient utility, responsive header/footer layout, centralized public navigation config, and explicit viewport metadata.
- Homepage fixes verified by screenshot inspection: CTA button text restored, hero spacing tightened, cover image scaled down, and unit/reference cards aligned.
- Frontmatter and backmatter fixes verified by screenshot inspection: long headings rebalance correctly, filter/result cards no longer present clipped badge/text combinations, and content wrappers have consistent card framing.
- Verification commands completed:
  - `./node_modules/.bin/eslint ...` on touched TS/TSX files
  - `./node_modules/.bin/vitest run src/lib/__tests__/site-navigation.test.ts src/data/__tests__/index-records.test.ts src/data/__tests__/unit-registry.test.ts`
  - `./node_modules/.bin/tsc --noEmit`
  - `./node_modules/.bin/next build`
- Commit and git-note creation are included in the repository cleanup pass that closes this track alongside the aligned Measure status updates.
