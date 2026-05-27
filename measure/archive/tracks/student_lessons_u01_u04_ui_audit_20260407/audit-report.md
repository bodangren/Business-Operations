# Audit Report: Student Lesson UI Audit for Units 01-04

## Working Rules

- Source of truth for review progress: this file
- Review order: Unit 01 through Unit 04, each route in listed order
- A route is only marked complete after both desktop and mobile screenshots are reviewed
- Shared-component defects should be logged once in `Shared Findings` and then referenced, not repeated
- Route-specific defects should be logged inline in `Route Review Log`
- Already-known source fix: the video-player iframe render fix landed in source, but the screenshot corpus predates a rebuild, so stale video placeholders should be logged as historical evidence instead of a new open defect

## Shared Findings

- [ ] None logged yet
- [ ] Unit 01 Lesson 07 mobile routes overflow horizontally across the landing page and phases.
  - Evidence: the mobile screenshots for `/student/unit01/lesson07/` through `/student/unit01/lesson07/phase-6/` show content extending wider than the 430px viewport.
  - Fix: audit the Lesson 7 mobile page shell and shared phase-navigation components for fixed widths, unwrapped flex rows, or table-like blocks that need horizontal scrolling inside their container.

## Route-Specific Findings

- [ ] `/student/unit04/lesson05/phase-3/` has desktop horizontal overflow.
  - Evidence: capture metadata reports `scrollWidth: 1453` vs `clientWidth: 1440`.
  - Likely cause: the spreadsheet preview/table block is wider than the content column.
  - Fix: constrain the preview block to the container width and let the internal grid scroll or scale instead of expanding the page.
- [ ] `/student/unit01/lesson07/phase-3/` has a wide spreadsheet preview that overflows the page on both desktop and mobile.
  - Evidence: the desktop crop shows the preview extending beyond the visible card boundary, and the mobile screenshot shows the same preview pushed wider than the viewport.
  - Fix: keep the preview inside its container and use an internal scroll region or responsive scaling for the table.

## Route Review Log

### Unit 01

- [x] /student/unit01/lesson01/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson01/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson02/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson02/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson03/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson03/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson04/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson04/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson05/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson05/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson06/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson06/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson07/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-2/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-3/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-4/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-5/ (desktop + mobile)
- [x] /student/unit01/lesson07/phase-6/ (desktop + mobile)
- [x] /student/unit01/lesson08/ (desktop + mobile)
- [x] /student/unit01/lesson09/ (desktop + mobile)
- [x] /student/unit01/lesson09/phase-1/ (desktop + mobile)
- [x] /student/unit01/lesson10/ (desktop + mobile)
- [x] /student/unit01/lesson10/phase-1/ (desktop + mobile)

## Unit 01 Findings

- Lesson 7 has a shared mobile-width overflow across the landing page and every phase page.
- Lesson 7 phase 3 has an oversized spreadsheet preview that overflows on both desktop and mobile.

### Unit 02

- [x] /student/unit02/lesson01/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson01/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson02/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson02/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson03/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson03/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson04/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson04/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson05/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson05/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson06/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson06/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson07/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-1/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-2/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-3/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-4/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-5/ (desktop + mobile)
- [x] /student/unit02/lesson07/phase-6/ (desktop + mobile)
- [x] /student/unit02/lesson08/ (desktop + mobile)
- [x] /student/unit02/lesson09/ (desktop + mobile)
- [x] /student/unit02/lesson10/ (desktop + mobile)
- [x] /student/unit02/lesson10/phase-1/ (desktop + mobile)

## Unit 02 Findings

- No screenshot-visible defects logged for Unit 02.

### Unit 03

- [x] /student/unit03/lesson01/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson01/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson02/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson02/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson03/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson03/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson04/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson04/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson05/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson05/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson06/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson06/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson07/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-2/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-3/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-4/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-5/ (desktop + mobile)
- [x] /student/unit03/lesson07/phase-6/ (desktop + mobile)
- [x] /student/unit03/lesson08/ (desktop + mobile)
- [x] /student/unit03/lesson08/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson09/ (desktop + mobile)
- [x] /student/unit03/lesson09/phase-1/ (desktop + mobile)
- [x] /student/unit03/lesson10/ (desktop + mobile)
- [x] /student/unit03/lesson10/phase-1/ (desktop + mobile)

### Unit 04

- [x] /student/unit04/lesson01/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson01/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson02/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson02/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson03/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson03/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson04/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson04/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson05/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson05/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson06/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson06/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson07/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-2/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-3/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-4/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-5/ (desktop + mobile)
- [x] /student/unit04/lesson07/phase-6/ (desktop + mobile)
- [x] /student/unit04/lesson08/ (desktop + mobile)
- [x] /student/unit04/lesson09/ (desktop + mobile)
- [x] /student/unit04/lesson09/phase-1/ (desktop + mobile)
- [x] /student/unit04/lesson10/ (desktop + mobile)
- [x] /student/unit04/lesson10/phase-1/ (desktop + mobile)

## Unit 03 Findings

- `/student/unit03/lesson03/` through `/student/unit03/lesson03/phase-6/` have repeated mobile horizontal overflow.
  - Evidence: mobile screenshots for the lesson and all six phase pages report `scrollWidth` greater than `clientWidth`.
  - Fix: inspect the Lesson 03 responsive layout for wide inline blocks, unwrapped flex rows, or table-like content that should scroll inside its container.
- No screenshot-visible defects logged for Unit 03 lessons 01, 02, 04, 05, 06, 07, 08, 09, or 10.

## Unit 04 Findings

- No screenshot-visible defects logged for Unit 04.
