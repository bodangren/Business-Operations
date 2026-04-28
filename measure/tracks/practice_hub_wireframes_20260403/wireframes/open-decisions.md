# Open Product Decisions — Practice Hub Wireframes

Consolidated from Phase 3 annotations. Each decision has a recommendation.
Decisions should be resolved before Phase 4 (Review) or flagged as deferrable to the `local_study_export_20260403` implementation track.

---

## High Priority (Affects MVP Scope)

| # | Decision | Surface | Recommendation | Deferrable? |
|---|----------|---------|----------------|-------------|
| 1 | **Spaced repetition algorithm**: simple fixed-interval (1d/3d/7d/14d) vs. SM-2 variant? | WF2 | Fixed interval for MVP | Yes — revisit in implementation track |
| 2 | **SheetJS bundle size** (~300KB gzipped): use lighter alternative or lazy-load? | WF4 | Lazy-load on export page only | No — affects architecture |
| 3 | **Export data granularity**: raw session history vs. aggregated only? | WF4 | Aggregated for MVP | Yes — raw sessions can be added later |
| 4 | **Student name at export**: prompt at export time vs. profile setting? | WF4 | Prompt once, store in localStorage | No — affects UX flow |

## Medium Priority (UX Polish)

| # | Decision | Surface | Recommendation | Deferrable? |
|---|----------|---------|----------------|-------------|
| 5 | Show "Study This Unit's Terms" CTA if unit has 0 vocabulary terms? | WF1 | Hide the CTA | No |
| 6 | Show mastery status (color-coded dots) on unit overview vocab list? | WF1 | Defer to implementation track | Yes |
| 7 | "Team Activity" mode in MVP or stretch? | WF2 | Stretch — requires print stylesheet | Yes |
| 8 | How many sessions in "Recent Practice"? | WF2, WF5 | Last 5 with "See all" link | No |
| 9 | Flashcard session state persist across page refresh? | WF3a | No for MVP | Yes |
| 10 | "Review Again" terms: re-queue once or repeatedly? | WF3a | Re-queue once, skip after second miss | No |
| 11 | Session auto-expire timeout? | WF3a | Yes, 10 minutes | No |
| 12 | Matching pair count: fixed 6 or configurable? | WF3b | Fixed 6 for MVP | Yes |
| 13 | Replace matched tiles with new pairs for longer sessions? | WF3b | No for MVP | Yes |
| 14 | Timer visibility default in matching? | WF3b | Shown by default, toggle to hide | No |
| 15 | Wrong answer distractors: same-topic or random? | WF3c | Same-topic when possible, random fallback | No |
| 16 | Timer bonus scale with difficulty? | WF3c | Flat +2s for MVP | Yes |
| 17 | .csv export: separate or same data, different format? | WF4 | Same data, different SheetJS write option | Yes |
| 18 | Dashboard chart/graph (mastery over time)? | WF5 | Not for MVP — bar charts sufficient | Yes |
| 19 | Full session history: separate page or paginate inline? | WF5 | Paginate inline with "Load more" | Yes |
| 20 | Average mastery: weighted or simple mean? | WF5 | Simple mean for MVP | Yes |

## Low Priority (Mobile Specific)

| # | Decision | Surface | Recommendation | Deferrable? |
|---|----------|---------|----------------|-------------|
| 21 | Flashcard swipe: touch events or CSS scroll-snap? | WF6 | Touch events for precise detection | No |
| 22 | Practice tab badge with due-review count? | WF6 | Yes — red badge with number | No |
| 23 | Safe area insets for notched devices? | WF6 | Yes — env(safe-area-inset-bottom) | No |

---

## Decisions Resolved by Wireframe Annotations

These were decided during Phase 2/3 and are documented in the wireframe annotations:

- **Click-to-select for matching** (not drag-and-drop) — all devices
- **Bilingual display**: term front (EN + ZH), definition back (EN + ZH)
- **localStorage-only**: all practice data stays client-side for MVP
- **.xlsx only for MVP**: .csv marked as "coming soon"
- **3-step export flow**: Select → Preview → Download
- **Mobile breakpoint**: 768px (Tailwind md)
- **Bottom tab bar on mobile**: Home, Units, Practice, Glossary
- **Minimum tap target**: 44px (Apple HIG)
- **Mastery color tiers**: green (>75%), amber (50-75%), red (<50%)
- **Speed Round**: 90s timer, +2s correct, 3 lives, streak tracking
