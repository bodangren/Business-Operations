# Audit Report: Teacher and Capstone UI Audit

## Working Rules

- Source of truth for review progress: this file
- Review order: Teacher routes first, then Capstone routes
- A route is only marked complete after both desktop and mobile screenshots are reviewed
- Shared-component defects should be logged once in `Shared Findings` and then referenced, not repeated
- Route-specific defects should be logged inline in `Route Review Log`

## Shared Findings

- [x] Teacher layout: No mobile responsiveness (fixed w-64 sidebar with no hamburger menu)
- [x] Teacher pages: No mobile padding for fixed hamburger button
- [x] video-player.tsx: Missing React import causing test failures

## Route-Specific Findings

- [ ] None logged yet

## Route Review Log

### Teacher Routes

- [x] /teacher/ (desktop + mobile)
- [x] /teacher/[unit]/ (desktop + mobile)
- [x] /teacher/[unit]/[lessonNumber]/ (desktop + mobile)
- [ ] /teacher/course-overview/pbl-methodology/ (desktop + mobile)
- [ ] /teacher/course-overview/backward-design/ (desktop + mobile)
- [ ] /teacher/classroom-routines/ (desktop + mobile)
- [ ] /teacher/classroom-routines/problem-framing-challenge-introduction/ (desktop + mobile)
- [ ] /teacher/classroom-routines/presentations-demonstrations/ (desktop + mobile)
- [ ] /teacher/classroom-routines/reflection-self-assessment/ (desktop + mobile)
- [ ] /teacher/classroom-routines/independent-practice-application/ (desktop + mobile)
- [ ] /teacher/classroom-routines/peer-review-feedback/ (desktop + mobile)
- [ ] /teacher/classroom-routines/collaborative-team-work/ (desktop + mobile)
- [ ] /teacher/classroom-routines/guided-practice/ (desktop + mobile)
- [ ] /teacher/classroom-routines/assessment-checkpoints/ (desktop + mobile)
- [ ] /teacher/classroom-routines/direct-instruction-lecture/ (desktop + mobile)

### Capstone Routes

- [ ] /capstone/ (desktop + mobile)
- [ ] /capstone/concept-proposal/ (desktop + mobile)
- [ ] /capstone/market-research/ (desktop + mobile)
- [ ] /capstone/revenue-streams/ (desktop + mobile)
- [ ] /capstone/startup-budget/ (desktop + mobile)
- [ ] /capstone/payroll-plan/ (desktop + mobile)
- [ ] /capstone/inventory-planning/ (desktop + mobile)
- [ ] /capstone/depreciation-assets/ (desktop + mobile)
- [ ] /capstone/pricing-forecast/ (desktop + mobile)
- [ ] /capstone/sensitivity-risk/ (desktop + mobile)
- [ ] /capstone/funding-strategy/ (desktop + mobile)
- [ ] /capstone/integrated-model/ (desktop + mobile)
- [ ] /capstone/pitch-deck/ (desktop + mobile)
- [ ] /capstone/demo-day-reflection/ (desktop + mobile)
- [ ] /capstone/guidelines/ (desktop + mobile)
- [ ] /capstone/rubrics/ (desktop + mobile)
