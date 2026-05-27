# Specification: Student Lesson UI Audit for Units 05-08

## Overview
This track performs a page-by-page UI audit for all student lesson surfaces in Units 05-08, including lesson landing pages and phase pages. The later units contain more spreadsheets, tables, simulations, and project-style layouts, so they merit a separate track from Units 01-04.

Covered surfaces:
- `/student/unit05/*`
- `/student/unit06/*`
- `/student/unit07/*`
- `/student/unit08/*`

Exclude non-lesson routes already covered by other audit tracks.

## Functional Requirements
- Review every lesson landing page and phase page in scope on desktop and mobile widths.
- Fix defects such as horizontal overflow, clipped spreadsheet/simulation regions, misaligned headers/footers, inconsistent vertical rhythm, badge wrapping, and unreadable mobile layouts.
- Preserve the six-phase structure, gradient backgrounds, `PhaseHeader`/`PhaseFooter`, and `Badge` styling on student lesson pages.
- Keep project and simulator pages usable without changing their instructional intent.

## Non-Functional Requirements
- Shared lesson/simulator fixes must be validated against all affected lesson routes in this unit range.
- Fixes should prefer reusable container and component changes where the same defect repeats.
- Verification must include direct browser checks, especially for wide interactive layouts.

## Acceptance Criteria
- Every student lesson route in Units 05-08 has been audited.
- High- and medium-severity UI defects are fixed or documented for follow-on work.
- Lesson pages still follow the expected six-phase presentation conventions.
- Lint/build/test verification passes after the fixes.

## Out of Scope
- Units 01-04 lesson pages.
- Student hub/practice routes.
- Teacher and capstone routes.
