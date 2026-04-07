# Specification: Shared Surface UI Audit

## Overview
The product needs a page-by-page visual and responsive audit for the shared surfaces that frame the rest of the experience. This track covers the public shell and static reference pages so layout issues can be fixed before deeper student and teacher audits begin.

Covered surfaces:
- `/`
- shared layouts, headers, nav, footer, and shell wrappers used by public/reference pages
- `/frontmatter/*`
- `/backmatter/*`

## Functional Requirements
- Evaluate each covered page on desktop and mobile widths.
- Identify and fix visual defects such as overflow, broken wrapping, clipped cards, inconsistent spacing, alignment drift, unreadable text, and unstable CTA layouts.
- Preserve the established product visual language unless a specific defect requires adjustment.
- Keep reference content accurate and navigable after UI fixes.

## Non-Functional Requirements
- Fixes must not introduce route or content regressions.
- Shared-component changes must be checked against every page that consumes them.
- Student pages must retain the established six-phase lesson conventions where relevant.
- Verification should include browser-based review of the affected surfaces.

## Acceptance Criteria
- Every covered page has been reviewed at least once on desktop and mobile.
- Known layout defects on covered pages are fixed or explicitly documented for follow-on work.
- Shared shell components render without overflow or alignment regressions on the audited routes.
- Lint/build/test verification passes after the fixes.

## Out of Scope
- Student lesson phase pages.
- Student practice hub and unit overview flows.
- Teacher and capstone routes.
- Content rewrites unrelated to UI defects.
