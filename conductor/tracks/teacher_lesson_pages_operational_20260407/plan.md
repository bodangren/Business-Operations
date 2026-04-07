# Implementation Plan: Teacher Lesson Pages Operational Rebuild

## Phase 1: Audit Current Detail Page and Data Model

- [ ] Confirm the exact failure mode in the teacher lesson detail route and renderer
- [ ] Inventory the real teacher lesson-plan data structures available in `src/data/teacher/unitXX-lesson-plan.ts`
- [ ] Compare the current rendered experience against the target operational-lesson-plan standard
- [ ] Identify any type gaps or missing fields needed to support lesson-specific teacher guidance cleanly

## Phase 2: Replace Mocked Rendering with Real Lesson Data

- [ ] Write focused tests for teacher unit/lesson lookup and lesson selection behavior
- [ ] Extract shared teacher unit-plan lookup logic into a reusable module
- [ ] Refactor the teacher lesson detail route to resolve real `UnitLessonPlan` and selected `DailyLesson` data
- [ ] Replace mocked `TeacherLessonPlan` state/effect logic with real server-compatible rendering
- [ ] Reuse or extract shared daily-lesson rendering logic instead of maintaining duplicate placeholder rendering
- [ ] Verify that multiple teacher lesson routes now show distinct lesson-specific data

## Phase 3: Define the Operational Lesson Page Contract

- [ ] Define the minimum required instructional sections for every teacher lesson page
- [ ] Extend lesson-plan types only where necessary to support missing instructional guidance
- [ ] Update the renderer so lesson pages surface preparation, facilitation guidance, checks for understanding, watch-fors, and next-step signals clearly
- [ ] Verify the revised layout remains readable on desktop and mobile

## Phase 4: Complete Lesson-Specific Guidance for Units 01-02

- [ ] Audit all teacher lessons in Units 01-02 against the operational lesson page contract
- [ ] Fill missing lesson-specific teaching instructions in the underlying unit01/unit02 teacher lesson-plan files
- [ ] Verify the corresponding teacher lesson pages now meet the contract

## Phase 5: Complete Lesson-Specific Guidance for Units 03-04

- [ ] Audit all teacher lessons in Units 03-04 against the operational lesson page contract
- [ ] Fill missing lesson-specific teaching instructions in the underlying unit03/unit04 teacher lesson-plan files
- [ ] Verify the corresponding teacher lesson pages now meet the contract

## Phase 6: Complete Lesson-Specific Guidance for Units 05-06

- [ ] Audit all teacher lessons in Units 05-06 against the operational lesson page contract
- [ ] Fill missing lesson-specific teaching instructions in the underlying unit05/unit06 teacher lesson-plan files
- [ ] Verify the corresponding teacher lesson pages now meet the contract

## Phase 7: Complete Lesson-Specific Guidance for Units 07-08

- [ ] Audit all teacher lessons in Units 07-08 against the operational lesson page contract
- [ ] Fill missing lesson-specific teaching instructions in the underlying unit07/unit08 teacher lesson-plan files
- [ ] Verify the corresponding teacher lesson pages now meet the contract

## Phase 8: Alignment and Verification

- [ ] Cross-check teacher lesson pages against current student unit scope, sequence, and naming
- [ ] Run `npm run lint`
- [ ] Run `npm run build`
- [ ] Run relevant automated tests
- [ ] Browser-check representative lesson pages from every unit on desktop and mobile
- [ ] Document any intentionally deferred lesson-plan quality gaps
- [ ] Commit with a conventional commit message and attach a git note
- [ ] Update track metadata and registry status
