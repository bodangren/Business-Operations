# Specification: Navigation and Shell Cleanup

## Overview
The site shell currently advertises routes and features that do not exist or no longer match the curriculum. This track repairs the global navigation and simplifies non-student-facing UI so the static textbook feels coherent and trustworthy.

This track is intentionally separate from the glossary/index build:
- `reference_system_20260403` creates the glossary and index content.
- this track removes fake search and repoints shell navigation into that new reference layer.

## Problems to Fix
- The header and footer link to dead routes such as `/search`.
- The homepage still links to old `/units/...` routes instead of the actual student routes.
- The header title/subtitle layout is too fragile and can overflow.
- The non-student shell is visually noisy and inconsistent compared with the student pages.
- The shell still uses stale unit naming in multiple places.

## Functional Requirements

### FR1: Remove Fake Search
- Remove the standalone search route from the header, footer, and homepage.
- Remove non-functional search bars and search buttons from the global shell.
- Replace search entry points with links to the new subject index from `reference_system_20260403`.
- Do not leave dead UI affordances that imply hidden functionality.

### FR2: Fix Broken and Outdated Global Links
- Replace all old `/units/...` shell links with the real student routes or the new `/student` hub.
- Route reference-material links into the real backmatter pages.
- Ensure no global shell link points to a route that does not exist after this track and the reference-system track land together.

### FR3: Add or Finalize the Student Hub
- Create `/student` as a clean student landing page if it does not already exist.
- The page should act as a lightweight table of contents into Units 01-08 and practice tests, not a complicated dashboard.
- Keep it static and simple.

### FR4: Simplify Header, Footer, and Homepage
- Simplify the non-student shell layout so it is easier to scan and less visually cluttered.
- Repair the header title/subtitle treatment so it does not overflow or compress badly on common desktop and mobile widths.
- Update homepage unit cards, frontmatter links, and reference links to match the current curriculum structure.
- Reduce visual noise and remove promises for unimplemented features.

### FR5: Align Frontmatter and Course Map Copy
- Update frontmatter and course-map shell copy that still reflects stale unit sequencing or stale unit names.
- Ensure the top-level course map matches the actual current Unit 07 and Unit 08 scope and current capstone framing.

### FR6: Broken-Link Zero Pass for the Shell
- After implementation, the global shell should have zero known broken routes in:
  - homepage,
  - header,
  - footer,
  - frontmatter navigation,
  - student hub.

## Non-Functional Requirements
- Static-export compatible.
- No backend or dynamic search service.
- Preserve the existing student lesson shell patterns where they are already working.
- Keep changes focused on global navigation and static entry points.

## Acceptance Criteria
- No `/search` route is advertised in the global shell.
- The header no longer overflows at typical desktop and mobile sizes.
- The homepage links only to live routes.
- `/student` exists as a real route and serves as a stable landing page.
- The shell points users to `/backmatter/index` for lookup/filtering instead of fake search.
- Re-running the internal broken-link scan for shell routes returns no broken shell links.

## Out of Scope
- Teacher lesson-plan content reconciliation.
- Glossary content creation itself.
- Spaced repetition or local storage.
- Export/import.
