# Implementation Plan: Student Hub, Unit Overview, Practice Hub, and Practice-Test UI Audit

## Phase 1: Audit the Covered Student Routes

- [ ] Enumerate `/student`, unit overview, practice-hub, and practice-test routes in scope
- [ ] Review each route on desktop and mobile and log concrete defects
- [ ] Identify which issues come from shared student components versus individual pages
- [ ] Prioritize defects by severity and reuse impact

## Phase 2: Shared Student Surface Fixes

- [ ] Write or update focused tests for affected shared student components where practical
- [ ] Fix reused layout issues in shared student cards, badges, progress bars, headers, and CTA blocks
- [ ] Verify the shared fixes across all in-scope student surfaces

## Phase 3: Page-Specific Route Fixes

- [ ] Fix student hub page defects
- [ ] Fix unit overview page defects
- [ ] Fix practice-hub route defects
- [ ] Fix practice-test route defects

## Phase 4: Verification and Closeout

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run relevant automated tests
- [ ] Perform a final browser pass on all in-scope routes
- [ ] Document any intentionally deferred defects
- [ ] Commit with a conventional commit message and attach a git note
- [ ] Update track metadata and registry status
