# Implementation Plan: Navigation and Shell Cleanup

## Track ID: navigation_shell_cleanup_20260403

### Phase 1: Route and Shell Audit
- [ ] 1.1 Inventory all global shell links
  - Homepage
  - Header
  - Footer
  - Frontmatter pages
  - Teacher shell entry points
- [ ] 1.2 Confirm the intended destination for every shell link
  - Student route
  - Backmatter index
  - Glossary
  - Capstone route
  - Teacher route
- [ ] 1.3 Write tests or assertions for critical navigation targets where practical
  - Especially for generated unit links and shell navigation arrays

### Phase 2: Header and Footer Cleanup
- [ ] 2.1 Remove fake search UI from the header
  - Remove input and button controls that do not perform real search
  - Replace them with an index link where appropriate
- [ ] 2.2 Remove fake search links from the footer
- [ ] 2.3 Simplify the header layout
  - Prevent title/subtitle overflow
  - Improve wrapping or stacking behavior
  - Keep desktop and mobile both readable
- [ ] 2.4 Align unit labels in the navigation menus with current curriculum naming

### Phase 3: Homepage and Student Hub
- [ ] 3.1 Replace outdated homepage unit routes
  - Remove `/units/...` links
  - Use live `/student/unitXX` routes or `/student`
- [ ] 3.2 Remove or rewrite feature claims that are no longer accurate
  - Especially claims that imply working search or tracking if those features are not yet shipped
- [ ] 3.3 Create or finish `/student`
  - Keep it simple
  - Link to all units and practice tests
  - Use current unit names and descriptions

### Phase 4: Frontmatter and Entry-Point Alignment
- [ ] 4.1 Update course map/frontmatter copy to current unit structure
- [ ] 4.2 Point reference materials toward glossary and index
- [ ] 4.3 Remove stale references to retired unit framing from shell-only pages

### Phase 5: Verification
- [ ] 5.1 Re-run the shell broken-link scan
- [ ] 5.2 Verify header and footer behavior on desktop and mobile
- [ ] 5.3 Verify `/student`, `/backmatter/glossary`, and `/backmatter/index` are all reachable from the shell
- [ ] 5.4 Run `npm run lint`
- [ ] 5.5 Record any remaining route gaps that belong to a different track
