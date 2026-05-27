# Specification: Student Lesson UI Audit for Units 01-04

## Overview
This track performs a page-by-page UI audit for all student lesson surfaces in Units 01-04, including lesson landing pages and phase pages. These lessons share the six-phase structure but contain varied interactive blocks that need direct visual validation.

Covered surfaces:
- `/student/unit01/*`
- `/student/unit02/*`
- `/student/unit03/*`
- `/student/unit04/*`

Exclude non-lesson routes already covered by other audit tracks.

## Functional Requirements
- Review every lesson landing page and phase page in scope on desktop and mobile widths.
- Fix defects such as horizontal overflow, clipped interactive regions, misaligned phase headers/footers, inconsistent card spacing, broken table wrapping, and mobile readability issues.
- Preserve the six-phase structure, gradient backgrounds, `PhaseHeader`/`PhaseFooter`, and `Badge` styling on student lesson pages.
- Keep lesson content semantically correct while adjusting layout and presentation details.

## Non-Functional Requirements
- Shared lesson component fixes must be validated against all affected lesson routes in this unit range.
- Changes should favor reusable fixes over one-off page hacks when the defect repeats.
- Verification must include direct browser checks, not build output alone.

## Acceptance Criteria
- Every student lesson route in Units 01-04 has been audited.
- High- and medium-severity UI defects are fixed or documented for follow-on work.
- Lesson pages still follow the expected six-phase presentation conventions.
- Lint/build/test verification passes after the fixes.

## Out of Scope
- Units 05-08 lesson pages.
- Student hub/practice routes.
- Teacher and capstone routes.
