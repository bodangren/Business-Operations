# Implementation Plan: Teacher and Capstone UI Audit

## Phase 1: Audit Teacher Routes

- [ ] Enumerate teacher hub, unit, lesson, classroom-routine, and course-overview routes in scope
- [ ] Review each teacher route on desktop and mobile and log concrete defects
- [ ] Identify repeated issues tied to shared teacher layout/components
- [ ] Prioritize teacher-route fixes by severity and reuse

## Phase 2: Fix Teacher Route Defects

- [ ] Write or update focused tests for shared teacher-component fixes where practical
- [ ] Fix shared teacher layout/component issues
- [ ] Fix page-specific teacher-route defects
- [ ] Re-run a browser pass for teacher routes

## Phase 3: Audit and Fix Capstone Routes

- [ ] Enumerate capstone routes in scope
- [ ] Review each capstone route on desktop and mobile and log concrete defects
- [ ] Fix shared capstone layout/component issues
- [ ] Fix page-specific capstone-route defects
- [ ] Re-run a browser pass for capstone routes

## Phase 4: Verification and Closeout

- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run relevant automated tests
- [ ] Perform a final browser pass on representative teacher and capstone routes
- [ ] Document any intentionally deferred defects
- [ ] Commit with a conventional commit message and attach a git note
- [ ] Update track metadata and registry status
