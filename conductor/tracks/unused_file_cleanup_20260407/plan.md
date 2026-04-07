# Implementation Plan: Unused File Cleanup in `bus-math-nextjs/`

## Phase 1: Inventory Candidate Files

- [x] Audit candidate unused files in `src/app/`, `src/components/`, `src/lib/`, `src/data/`, and adjacent local assets
- [x] Cross-check candidates against imports, exports, route conventions, markdown/text references, and asset paths
- [x] Split the inventory into `safe delete`, `keep`, and `defer` buckets
- [x] Record why each `safe delete` file is safe to remove

## Phase 2: Remove Proven Dead Files

- [x] Write or update focused tests where cleanup could hide a live dependency
- [x] Delete the first batch of proven unused files
- [x] Remove stale imports, barrel exports, or helper references created by those deletions
- [x] Verify repository search shows no remaining references to the deleted files

## Phase 3: Sweep Route and Content Artifacts

- [x] Review route-adjacent artifacts such as debug pages, README/TXT notes, and local content files for actual runtime usage
- [x] Delete additional proven-dead route artifacts, or explicitly mark them as intentional keeps
- [x] Re-run the candidate search to confirm no obvious unused-file cluster remains

## Phase 4: Verification and Closeout

- [x] Run `./node_modules/.bin/eslint .` (non-npm equivalent per repo guardrail)
- [x] Run `./node_modules/.bin/tsc --noEmit` in place of `npm run build` because this track may not mutate `.next` without explicit approval
- [x] Run the relevant automated tests via `./node_modules/.bin/vitest run`
- [x] Spot-check high-risk routes after cleanup by confirming the homepage still references `cover.png`, the debug components report still references `/components-report.json`, and no deleted file basenames remain in repo search
- [x] Update `conductor/tech-debt.md` or `conductor/lessons-learned.md` if cleanup exposes repeat patterns
- [ ] Commit with a conventional commit message and attach a git note
- [x] Update track metadata and registry status

## Inventory Notes

### Safe Delete

- `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
  - Zero repo references; leftover starter assets.
- `public/cafe-expenses.csv`, `public/cafe-hourly-sales.csv`, `public/cafe-menu-sales.csv`, `public/cafe-seasonal-trends.csv`
  - Zero repo references; legacy sample datasets not linked by any route, component, or doc.
- `src/app/student/unit01/lesson06/phase-1/README.txt`
- `src/app/student/unit02/lesson07/phase-1/README.md`
- `src/app/student/unit03/lesson05/phase-1/README.md`
- `src/app/student/unit03/lesson05/phase-2/README.md`
- `src/app/student/unit03/lesson05/phase-3/README.md`
- `src/app/student/unit03/lesson05/phase-4/README.md`
- `src/app/student/unit03/lesson05/phase-5/README.md`
- `src/app/student/unit03/lesson05/phase-6/README.md`
- `src/app/student/unit08/lesson05/phase-1/README.txt`
  - Route-adjacent notes only; App Router does not load them and repo search showed no references.
- `src/app/student/unit01/unit01-text.md`
- `src/app/student/unit02/unit02-text.md`
- `src/app/student/unit03/unit03-text.md`
- `src/app/student/unit04/unit04-text.md`
- `src/app/student/unit05/unit05-text.md`
- `src/app/student/unit06/unit06-text.md`
- `src/app/student/unit07/unit07-text.md`
  - Legacy long-form markdown payloads superseded by canonical lesson-data files; zero repo references.
- `src/components/student/AccessibilityToolbar.tsx`
- `src/components/student/MultilingualSupport.tsx`
- `src/components/student/ReadingLevelAdjuster.tsx`
  - Prototype student helper components with zero repo references outside the generated component report; `public/components-report.json` was regenerated after deletion.

### Keep

- `public/cover.png`
  - Still used by `src/app/page.tsx`.
- `public/components-report.json`
  - Still used by `src/app/debug/components-report/page.tsx`; regenerated after cleanup.
- `public/resources/unit08-group${i + 1}-fixed-assets.xlsx`
  - Still linked from `src/app/student/unit08/lesson09/phase-1/page.tsx`.
- `src/data/teacher/alignment-checklist.md`
  - Not runtime-loaded, but intentionally retained as project maintenance documentation.

### Defer

- Broader unused-component cleanup outside the three verified student prototypes
  - The generated report still lists more unused components, but many are demo/debug/catalog artifacts that need a dedicated validation pass before deletion.
