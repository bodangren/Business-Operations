# Implementation Plan: Student Hub, Unit Overview, Practice Hub, and Practice-Test UI Audit

## Phase 1: Audit the Covered Student Routes

- [x] Enumerate `/student`, unit overview, practice-hub, and practice-test routes in scope
- [x] Review each route on desktop and mobile and log concrete defects
- [x] Identify which issues come from shared student components versus individual pages
- [x] Prioritize defects by severity and reuse impact

## Phase 2: Shared Student Surface Fixes

- [x] Write or update focused tests for affected shared student components where practical; no targeted component tests existed, so this audit relied on shared-suite regression coverage plus browser verification
- [x] Fix reused layout issues in shared student cards, badges, progress bars, headers, and CTA blocks
- [x] Verify the shared fixes across all in-scope student surfaces

## Phase 3: Page-Specific Route Fixes

- [x] Fix student hub page defects
- [x] Fix unit overview page defects
- [x] Fix practice-hub route defects
- [x] Fix practice-test route defects

## Phase 4: Verification and Closeout

- [x] Run `./node_modules/.bin/eslint` on touched student surface files
- [x] Run `./node_modules/.bin/tsc --noEmit` in place of `npm run build` because this repo may not mutate `.next` without explicit approval
- [x] Run relevant automated tests via `./node_modules/.bin/vitest run` (277/277 passing)
- [x] Perform a final browser pass on all in-scope routes (46 desktop/mobile screenshots, zero overflow routes, manual spot-check completed)
- [x] Document intentionally deferred defects: a real `next build` / `npm run build` pass remains deferred because AGENTS.md forbids `.next` mutation without explicit approval
- [x] Commit with a conventional commit message and attach a git note
- [x] Update track metadata and registry status
