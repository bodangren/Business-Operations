# Specification: Fix Cover Image Base Path Issue

## Overview
The home page cover image is broken when deployed to GitHub Pages. This is because the image source path does not respect the configured `basePath` in `next.config.ts`.

## Functional Requirements
- The cover image on the home page (`src/app/page.tsx`) must load correctly in both development and production environments
- The fix must respect the `basePath` configuration in `next.config.ts`

## Non-Functional Requirements
- No regressions in other image usage across the application
- The fix should follow Next.js best practices for static assets

## Acceptance Criteria
- [ ] Cover image loads correctly on local development server (no base path)
- [ ] Cover image loads correctly on GitHub Pages deployment (with base path `/Business-Operations`)

## Out of Scope
- Changing the cover image file itself
- Modifying other images in the application unless directly related to this issue
