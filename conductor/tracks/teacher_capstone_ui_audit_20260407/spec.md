# Specification: Teacher and Capstone UI Audit

## Overview
This track covers the remaining product surfaces outside the student lesson and practice flows: teacher routes and capstone routes. These pages have distinct information density, navigation patterns, and long-form content, so they need their own page-by-page audit.

Covered surfaces:
- `/teacher`
- `/teacher/[unit]`
- `/teacher/[unit]/[lessonNumber]`
- `/teacher/course-overview/*`
- `/teacher/classroom-routines/*`
- `/capstone/*`

## Functional Requirements
- Review each covered page on desktop and mobile widths.
- Fix visual defects such as overflow, misaligned content blocks, weak hierarchy, inconsistent container widths, broken navigation wrapping, and mobile readability issues.
- Preserve teacher-facing information architecture and capstone workflow semantics while improving presentation quality.
- Validate that long-form pages remain scannable and internally consistent after fixes.

## Non-Functional Requirements
- Shared teacher/capstone component fixes must be verified across all consuming routes.
- Fixes must not break route generation for dynamic teacher pages.
- Verification should include browser-based review of representative long and short pages.

## Acceptance Criteria
- All covered teacher and capstone pages have been reviewed page by page.
- High- and medium-severity UI defects are fixed or documented for follow-on work.
- Teacher navigation and capstone navigation remain stable after fixes.
- Lint/build/test verification passes after the fixes.

## Out of Scope
- Student lesson pages.
- Student hub and practice routes.
- Public reference pages already covered by the shared-surface audit.
