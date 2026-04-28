# Specification: Student Hub, Unit Overview, Practice Hub, and Practice-Test UI Audit

## Overview
This track covers the student-facing non-lesson surfaces that students use to navigate units, study vocabulary, check progress, and take practice tests. These routes have dense component composition and are a likely source of overflow, wrapping, spacing, and responsive issues.

Covered surfaces:
- `/student`
- `/student/unitXX`
- `/student/practice-hub/*`
- `/student/unitXX/practice-test`

## Functional Requirements
- Review each covered route on desktop and mobile widths.
- Fix visual defects including overflow, cropped progress bars, broken badge alignment, uneven card heights, CTA wrapping, unreadable tables/lists, and mobile stacking issues.
- Preserve working study/progress behavior while improving layout quality.
- Ensure unit-level and practice-hub surfaces remain consistent with shared shell styling and student UI conventions.

## Non-Functional Requirements
- Do not alter the underlying study/export feature scope unless needed to fix a clear UI defect.
- Keep changes compatible with static export.
- Re-check shared student components anywhere they are reused across routes.

## Acceptance Criteria
- All covered routes have been reviewed page by page.
- High- and medium-severity layout issues are fixed or documented for follow-on work.
- Student navigation, practice, and practice-test pages remain functional after UI fixes.
- Lint/build/test verification passes after the fixes.

## Out of Scope
- Student lesson phase pages.
- Teacher and capstone routes.
- Reference pages already covered by the shared-surface audit.
