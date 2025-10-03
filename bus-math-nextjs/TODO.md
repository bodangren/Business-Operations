# Workflow Guardrails (MANDATORY)
- Confirm `main` is clean and synced before starting. If not, resolve or escalate.
- Review the current sprint story file (`docs/sprint/S#.md`, when available) and this TODO list to lock priorities.
- Open a GitHub issue for the slice (`gh issue create` with milestone + labels), then branch from `main` using `<type>/<issue>-<slug>`.
- Apply TDD: write/adjust tests first, run `npm run lint` and relevant `npm run test*` commands prior to each commit.
- Use Conventional Commits, keep work scoped to the issue branch, and document changes/tests in the PR (`gh pr create --fill`).
- Merge via squash after CI passes, prune branches, close the issue, and update sprint docs/TODO before moving on.

Sprint Planning Status
- Sprint 11 plan in `docs/sprint/S11.md` (Teacher Slide Platform + scenario registry expansion). Epic #104 tracks all Sprint 11 slices (#56-#103).
- Sprint 12 outline in `docs/sprint/S12.md` remains future backlog prep.
- Sprint 10 plan retained in `docs/sprint/S10.md` for historical reference.
- Completed Sprint 11 slices so far:
  - Issue #14 – Unit 1 Lesson 1 component scenarios ✅
  - Issue #15 – Unit 1 Lesson 1 student refactor ✅
  - Issue #57 – Unit 01 Lessons 02-04 student refactor ✅
  - Issue #58 – Unit 01 Lessons 05-07 scenario data ✅
  - Issue #59 – Unit 01 Lessons 05-07 student refactor ✅
  - Issue #60 – Unit 01 Lessons 08-10 scenario data ✅
  - Issue #61 – Unit 01 Lessons 08-10 student refactor ✅
- Completed Sprint 10 slices:
  - Issue #10 – Unit 1 phase-5 question bank and practice-test scaffolding ✅
  - Issue #11 – Unit 1 practice-test experience from question bank ✅
  - Issue #26 – Unit 2 phase-5 question bank ✅
  - Issue #27 – Unit 3 phase-5 question bank ✅
  - Issue #28 – Unit 4 phase-5 question bank ✅
  - Issue #32 – Unit 8 phase-5 question bank and practice-test scaffolding ✅
  - Issue #36 – Unit 5 practice-test experience from question bank ✅
  - Issue #37 – Unit 6 practice-test experience from question bank ✅
- In progress: Issue #62 – Unit 02 Lessons 01-03 scenario data (registry now exports lessons 1-3; adapters/student pages need follow-up).
- Next slice to tackle: Issue #63 – Unit 02 Lessons 01-03 student refactor.

Broken Links and Assets – Next.js App

Summary
- Broken routes: 8
- Missing assets: 1
- Scope: Checked all internal href/Link targets against existing routes in `src/app/**/page.tsx` and files under `public/`.

Broken Routes (create pages or update links)
- /backmatter/glossary
  - bus-math-nextjs/src/app/page.tsx:218
  - bus-math-nextjs/src/components/footer.tsx:30
  - bus-math-nextjs/src/components/header.tsx:126
  - bus-math-nextjs/src/components/header.tsx:191
- /backmatter/index
  - bus-math-nextjs/src/app/page.tsx:221
- /search
  - bus-math-nextjs/src/components/footer.tsx:42
  - bus-math-nextjs/src/components/header.tsx:134
  - bus-math-nextjs/src/components/header.tsx:192
- /student (index route missing)
  - bus-math-nextjs/src/components/student/StudentLessonOverview.tsx:76
  - bus-math-nextjs/src/components/student/PhaseHeader.tsx:73
- /units/unit01-smart-ledger
  - bus-math-nextjs/src/app/page.tsx:130

Notes
- Dynamic teacher routes exist: `/teacher/[unit]` and `/teacher/[unit]/[lessonNumber]`. Links like `/teacher/unit01` are valid (handled dynamically).
- Preface page created: `src/app/frontmatter/preface/page.tsx` (linked from home/header/footer)
- Capstone subpages created: `src/app/capstone/guidelines/page.tsx`, `src/app/capstone/rubrics/page.tsx`

Missing Assets (under public/)
- /resources/unit06-cvp-advanced-practice.csv
  - Referenced at: bus-math-nextjs/src/app/student/unit06/lesson05/phase-4/page.tsx:44

Action Items
1) Decide per-link: create page vs. update/remove link
   - Create pages at:
     - src/app/backmatter/glossary/page.tsx
     - src/app/backmatter/index/page.tsx
     - src/app/backmatter/bibliography/page.tsx
     - src/app/search/page.tsx
     - src/app/student/page.tsx
     - src/app/units/unit01-smart-ledger/page.tsx (or update link to `/student/unit01`)

   - Or update links to existing routes (recommended quick fixes):
     - Replace `/units/unit01-smart-ledger` → `/student/unit01`
     - Remove or temporarily point `/frontmatter/acknowledgments` and `/backmatter/*` to `/` until content is added
     - Remove `/search` links until search page is implemented

2) Add missing CSV asset (or correct filename)
   - Create placeholder at: public/resources/unit06-cvp-advanced-practice.csv
   - Verify naming consistency with other unit06 CSVs.

Validation Steps (after fixes)
- Re-run link scan:
  - Enumerate routes: `rg --files -n src/app | rg 'page\.(tsx|jsx|ts|js)$'`
  - Collect hrefs: `rg -n "href=\{?\s*['\"](/[^'\"}]+)['\"]?\s*\}?" -g '!**/*.map' src`
  - Cross-check against the routes list and `public/` files.

Recent Fixes (applied)
- Added Preface: `src/app/frontmatter/preface/page.tsx`
- Added Acknowledgments: `src/app/frontmatter/acknowledgments/page.tsx`
- Added Capstone Guidelines: `src/app/capstone/guidelines/page.tsx`
- Added Capstone Rubrics: `src/app/capstone/rubrics/page.tsx`

---

Capstone Overview & Subpages (tracking)
- Overview updated (preface-style UI) with timeline and deliverables grid
  - File: `src/app/capstone/page.tsx` [DONE]
- Subpage stubs created (student-facing, 8th-grade, no interactivity)
  - `src/app/capstone/concept-proposal/page.tsx` [DONE]
  - `src/app/capstone/market-research/page.tsx` [DONE]
  - `src/app/capstone/revenue-streams/page.tsx` [DONE]
  - `src/app/capstone/startup-budget/page.tsx` [DONE]
  - `src/app/capstone/funding-strategy/page.tsx` [DONE]
  - `src/app/capstone/pricing-forecast/page.tsx` [DONE]
  - `src/app/capstone/payroll-plan/page.tsx` [DONE]
  - `src/app/capstone/inventory-planning/page.tsx` [DONE]
  - `src/app/capstone/depreciation-assets/page.tsx` [DONE]
  - `src/app/capstone/integrated-model/page.tsx` [DONE]
  - `src/app/capstone/sensitivity-risk/page.tsx` [DONE]
  - `src/app/capstone/pitch-deck/page.tsx` [DONE]
  - `src/app/capstone/demo-day-reflection/page.tsx` [DONE]

Next Steps (capstone pages)
- Flesh out each subpage with concrete instructions and examples (keep 8th-grade tone)
- Cross-check each subpage against `dev-docs/capstone_content.md` for alignment
- Ensure all pages clearly link back to `/capstone/rubrics` and `/capstone/guidelines`
- Optional later: add teacher callouts or tips sections (non-interactive)
