# Code Review: Post-Audit Review of 5 Recent Tracks

**Date:** 2026-04-07
**Reviewer:** Automated code-review consultant
**Tracks Audited:**
1. `typescript_build_guardrails_20260407` — add typecheck script, wire into workflow
2. `shared_surface_ui_audit_20260407` — header, footer, homepage, frontmatter, backmatter UI fixes
3. `student_hub_practice_ui_audit_20260407` — student hub, unit overview, practice hub, practice-test UI
4. `student_lessons_u01_u04_ui_audit_20260407` — student lesson UI for units 01-04
5. `student_lessons_u05_u08_ui_audit_20260407` — student lesson UI for units 05-08

---

## Verification Baseline

- Tests: 279 passed (23 suites)
- tsc: 0 errors
- ESLint: 0 warnings, 0 errors
- Build: 603 pages, compiled successfully

---

## Issues Found

### M1 — DataTableSimulator shares `checked` state between Step 2 and Step 3 [FIXED]

- **File:** `src/app/student/unit06/lesson06/DataTableSimulator.tsx:14,91,141`
- **Problem:** Single `checked` boolean was shared between Step 2 (column input) and Step 3 (row input). Checking Step 2 immediately revealed Step 3's feedback panel. Step 3's button also never called `setStep(3)`, so the step badge never advanced.
- **Fix:** Split into `columnChecked` / `rowChecked` state. Step 3 button now calls `setStep(3)`.

### M2 — UNIT_META array positionally coupled to UNITS array [NOT FIXED — tracked]

- **File:** `src/app/page.tsx:47-56, 180-218`
- **Problem:** `UNIT_META` (8-item array with `as const`) is accessed by index from `UNITS.map()`. If units are reordered, added, or removed from the registry, metadata silently mismatches.
- **Risk:** Maintenance fragility. Not a runtime bug today but a data-integrity trap.
- **Recommendation:** Key `UNIT_META` by `UnitId` or embed duration/difficulty in the unit registry.
- **Status:** Tracked in tech-debt.md as L-new.

### L1 — Unused `React` import in video-player.tsx [FIXED]

- **File:** `src/components/ui/video-player.tsx:3`
- **Fix:** Changed `import React, { useState }` to `import { useState }`.

### L2 — `overflow-x-hidden` on body may clip positioned content [NOT FIXED — noted]

- **File:** `src/app/globals.css:124`
- **Problem:** Global `overflow-x-hidden` can clip tooltips, dropdowns, or modals using absolute/fixed positioning.
- **Status:** Low risk. Intentional for mobile layout. Noted for awareness.

### L3 — CSS gradient utilities inconsistent with dark-mode variables [NOT FIXED — noted]

- **File:** `src/app/globals.css` — `.gradient-success`, `.gradient-danger`
- **Problem:** These gradients use hardcoded `oklch()` values instead of CSS variables, so they won't respond to dark-mode theme changes.
- **Status:** Low risk. May be intentional static coloring. Noted for awareness.

---

## Observations (no action needed)

- Removed components (`AccessibilityToolbar.tsx`, `MultilingualSupport.tsx`, `ReadingLevelAdjuster.tsx`) had zero remaining references. Clean removal.
- Responsive Badge pattern applied consistently across all lesson phase pages — good standardization.
- `site-navigation.ts` is a solid centralization of nav links previously hardcoded in multiple places.
- New test coverage for `VideoPlayer` and `site-navigation` is well-structured.
- No `any` types, no unsafe casts in reviewed code. Type safety is strong.

---

## Incomplete Tracks Noted

Two tracks remain `[ ]` in the registry:
1. `teacher_capstone_ui_audit_20260407` — 4 phases, all pending
2. `teacher_lesson_pages_operational_20260407` — 8 phases, all pending

These are the logical next work items.

---

## Tech-Debt Updates

- Added: `UNIT_META` positional coupling (M2) → new tech-debt entry
- Closed: none existing
