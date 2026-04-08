# Code Review: Three Recent Phases (2026-04-07 — 2026-04-08)

**Date:** 2026-04-08
**Reviewer:** Automated code-review consultant
**Tracks Audited:**
1. `typescript_build_guardrails_20260407` — typecheck script, workflow integration
2. `teacher_lesson_pages_operational_20260407` — Phases 4-8 completion + tech debt fixes
3. `fix_cover_image_basepath_20260408` — cover image on GitHub Pages static export

---

## Verification Baseline

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, no errors

---

## Scope

Commits since last review (`0e25658`):
- `51cebf6` — UNIT_META Record fix, businessTerms.ts deletion
- `1b45573` — current_directive.md update
- `0d5f7ae` — cover image module import fix
- `f7b46f2` — track completion metadata
- `144f6eb` — directive update

---

## Issues Found

### L1 — Debug routes accessible in production static export despite middleware gating

- **File:** `src/middleware.ts:18-23`, `next.config.ts:5`
- **Problem:** Middleware returns 404 for `/debug/*` in production, but `output: 'export'` means middleware does not run at build time. The build output confirms all debug pages (`/debug`, `/debug/accounting`, `/debug/charts`, etc.) are statically exported as full HTML.
- **Impact:** Low. Debug pages are educational demo pages, not sensitive. GitHub Pages serves them as static files. But the intent (gate debug routes) doesn't match reality.
- **Recommendation:** If truly hiding debug routes is desired, exclude them from static export by moving them behind a dynamic route or conditionally omitting them from `generateStaticParams`. Otherwise, accept this as a known limitation and document it.

### L2 — `UNIT_META` "Expert" difficulty outside `UnitData.difficulty` type

- **File:** `src/app/page.tsx:57`, `src/types/unit.ts:6`
- **Problem:** `UNIT_META` assigns `"Expert"` to unit08, but `UnitData.difficulty` only allows `'Beginner' | 'Intermediate' | 'Advanced'`. The `getDifficultyVariant` function handles "Expert" at runtime, but there's no compile-time enforcement that `UNIT_META` values stay in sync with `UnitData.difficulty`.
- **Impact:** Low. Works correctly at runtime. Minor type safety gap if difficulty values ever change.
- **Status:** Noted for awareness.

### L3 — M1 from previous review: teacher guidance fields still empty (content gap)

- **Files:** All 8 `src/data/teacher/unitXX-lesson-plan.ts` files
- **Status:** Unchanged. The 5 optional fields (`preparation`, `facilitationGuidance`, `checksForUnderstanding`, `watchFors`, `nextSteps`) are never populated. Renderer has dead code paths with `&& array.length > 0` guards.
- **Impact:** Medium. This is a content gap, not a bug. Should be resolved as a product decision.

---

## Observations

- **UNIT_META fix is solid:** Replacing positional array with `Record<UnitId, ...>` keyed lookup eliminates a maintenance footgun. Type-safe, no runtime change.
- **Cover image fix is correct:** Importing `cover.png` as a module ensures webpack resolves it with the correct basePath, fixing the GitHub Pages deployment. Removing explicit `width`/`height` is fine — Next.js infers from static imports.
- **businessTerms.ts removal is clean:** 472 lines of dead code removed with no remaining import references.
- **Teacher lesson architecture is strong:** Types (`lesson-plan.ts`), data layer (`teacher/index.ts`), renderer (`TeacherLessonPlan.tsx`), and route validation all well-structured.

---

## Summary

Clean codebase — 279 tests pass, TypeScript clean, ESLint clean, build succeeds for 603 pages. No code bugs found. One infrastructure gap: debug route middleware doesn't execute during static export. One content gap: teacher guidance data unpopulated. Both are low-risk and previously noted.
