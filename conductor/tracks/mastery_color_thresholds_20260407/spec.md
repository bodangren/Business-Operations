# Spec: masteryColor Thresholds Alignment

## Problem

`masteryColor(score: number)` in `src/lib/study/derived.ts` uses thresholds 75/50 on a 0–100 scale, producing 3 CSS classes (green, amber, red).

`proficiencyBand(score: number)` in `src/lib/study/srs.ts` uses thresholds 85/60/30 on a 0–1 scale (equivalent to 85/60/30 on 0–100), producing 4 bands (strong, proficient, developing, new).

The visual color coding doesn't reflect the actual proficiency bands a student is assigned.

## Goal

Align `masteryColor` thresholds with `proficiencyBand` so that the progress bar color matches the student's actual proficiency band.

## Functional Requirements

1. `masteryColor` must use these thresholds (0–100 scale):
   - `>= 85` → `"bg-green-500"` (strong)
   - `>= 60` → `"bg-amber-500"` (proficient)
   - `>= 30` → `"bg-orange-500"` (developing)
   - `< 30` → `"bg-red-500"` (new)
2. Add unit tests for all threshold boundaries (29, 30, 59, 60, 84, 85).
3. No behavioral changes to callers — same function signature, same return type.

## Non-Functional Requirements

- No new dependencies.
- Tests must pass before and after change.

## Acceptance Criteria

- [ ] `masteryColor(85)` returns `"bg-green-500"`
- [ ] `masteryColor(60)` returns `"bg-amber-500"`
- [ ] `masteryColor(30)` returns `"bg-orange-500"`
- [ ] `masteryColor(0)` returns `"bg-red-500"`
- [ ] Existing test suite still passes
- [ ] `npm run build` succeeds
