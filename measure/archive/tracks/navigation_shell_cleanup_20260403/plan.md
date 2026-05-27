# Implementation Plan: Navigation and Shell Cleanup

## Track ID: navigation_shell_cleanup_20260403

### Phase 1: Route and Shell Audit
- [x] 1.1 Inventory all global shell links
  - Homepage: unit cards, features, frontmatter links, capstone links, reference materials
  - Header: Home, Preface, Student Units dropdown, Teacher Resources dropdown, Glossary, Index
  - Footer: Quick Links, Teacher Resources, Support
  - Frontmatter pages: Preface (course map, unit links, capstone links)
  - Teacher shell entry points: /teacher hub, unit lesson plans
- [x] 1.2 Confirm the intended destination for every shell link
  - All student routes confirmed at /student/unitXX
  - /backmatter/glossary and /backmatter/index exist and are linked
  - /capstone, /capstone/guidelines, /capstone/rubrics all exist
  - Teacher routes exist at /teacher/unitXX and /teacher/course-overview/*
- [x] 1.3 Write tests or assertions for critical navigation targets where practical
  - Unit arrays in header.tsx and page.tsx use canonical route patterns
  - /student hub page links to all 8 units

### Phase 2: Header and Footer Cleanup
- [x] 2.1 Remove fake search UI from the header
  - Removed search input and button from desktop header
  - Removed search input and button from mobile sheet menu
  - Replaced /search nav link with /backmatter/index
  - Removed unused Search, Input imports from header
- [x] 2.2 Remove fake search links from the footer
  - Removed /search link, replaced with /backmatter/index (Subject Index)
  - Removed /debug (Component Debugging) dev-only link
- [x] 2.3 Simplify the header layout
  - Clean two-row logo with title + subtitle, no overflow issues
  - Desktop nav uses NavigationMenu with dropdowns for units
  - Mobile uses Sheet with clean vertical list
- [x] 2.4 Align unit labels in the navigation menus with current curriculum naming
  - All 8 units use current titles in header, homepage, and student hub

### Phase 3: Homepage and Student Hub
- [x] 3.1 Replace outdated homepage unit routes
  - All 8 unit cards now link to /student/unitXX instead of dead /units/... routes
  - Unit titles match current curriculum naming
- [x] 3.2 Remove or rewrite feature claims that are no longer accurate
  - Removed "Smart Search" feature card (fake search)
  - Replaced with "Bilingual Glossary & Index" feature card
  - Removed dead /backmatter/bibliography link from homepage reference section
- [x] 3.3 Create /student hub
  - Clean landing page with Semester 1 and Semester 2 sections
  - Links to all 8 units with descriptions
  - Links to capstone, glossary, and index
  - "Start with Unit 1" CTA button

### Phase 4: Frontmatter and Entry-Point Alignment
- [x] 4.1 Update course map/frontmatter copy to current unit structure
  - Preface page already uses current unit names and descriptions
  - No stale unit sequencing found in frontmatter
- [x] 4.2 Point reference materials toward glossary and index
  - Homepage reference section links to glossary and index
  - Footer links to glossary and index
  - Header nav links to glossary and index
- [x] 4.3 Remove stale references to retired unit framing from shell-only pages
  - No retired unit framing found in shell pages

### Phase 5: Verification
- [x] 5.1 Re-run the shell broken-link scan
  - All shell links point to live routes
  - No dead /search, /debug, /units/..., or /backmatter/bibliography links remain
- [x] 5.2 Verify header and footer behavior on desktop and mobile
  - Desktop: NavigationMenu with dropdowns for Student Units and Teacher Resources
  - Mobile: Sheet with full navigation list
  - No search UI remains in either mode
- [x] 5.3 Verify /student, /backmatter/glossary, and /backmatter/index are all reachable from the shell
  - /student linked from homepage hero CTA and created as dedicated hub
  - /backmatter/glossary linked from header, footer, homepage, and student hub
  - /backmatter/index linked from header, footer, homepage, and student hub
- [x] 5.4 Run `npm run lint`
  - No new lint errors introduced
- [x] 5.5 Record any remaining route gaps that belong to a different track
  - Pre-existing Next.js 15 static export 500.html bug (not a route gap)
  - Practice test routes exist but may have runtime issues (separate track)
