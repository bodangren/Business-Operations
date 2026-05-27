# Implementation Plan: Teacher and Capstone UI Audit

## Phase 1: Audit Teacher Routes [x]

- [x] Enumerate teacher hub, unit, lesson, classroom-routine, and course-overview routes in scope
- [x] Review each teacher route on desktop and mobile and log concrete defects
- [x] Identify repeated issues tied to shared teacher layout/components
- [x] Prioritize teacher-route fixes by severity and reuse

## Phase 2: Fix Teacher Route Defects [x]

- [x] Write or update focused tests for shared teacher-component fixes where practical
- [x] Fix shared teacher layout/component issues (mobile sidebar, content padding)
- [x] Fix page-specific teacher-route defects
- [x] Re-run a browser pass for teacher routes

## Phase 3: Audit and Fix Capstone Routes [x]

- [x] Enumerate capstone routes in scope
- [x] Review each capstone route on desktop and mobile and log concrete defects
- [x] Fix shared capstone layout/component issues
- [x] Fix page-specific capstone-route defects
- [x] Re-run a browser pass for capstone routes

## Phase 4: Verification and Closeout [x]

- [x] Run `npm run lint`
- [x] Run `npm run build`
- [x] Run relevant automated tests
- [x] Perform a final browser pass on representative teacher and capstone routes
- [x] Document any intentionally deferred defects
- [x] Commit with a conventional commit message and attach a git note
- [x] Update track metadata and registry status
