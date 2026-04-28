# Wireframe Freeze — Practice Hub

**Track:** practice_hub_wireframes_20260403
**Freeze Date:** 2026-04-04
**Status:** Approved for implementation

---

## Scope Freeze

The following wireframe surfaces are approved and frozen:

| ID | Surface | Route | Status |
|----|---------|-------|--------|
| WF1 | Unit Overview + Vocabulary Entry | `/student/unitXX` | Frozen |
| WF2 | Practice Hub Home | `/student/practice-hub` | Frozen |
| WF3a | Flashcards | `/student/practice-hub/flashcards` | Frozen |
| WF3b | Matching Game | `/student/practice-hub/matching` | Frozen |
| WF3c | Speed Round | `/student/practice-hub/speed-round` | Frozen |
| WF4 | Export Flow | `/student/practice-hub/export` | Frozen |
| WF5 | Progress Dashboard | `/student/practice-hub/progress` | Frozen |
| WF6 | Mobile Behavior Notes | N/A (responsive) | Frozen |

## Frozen Decisions

These product decisions are locked for the implementation track:

1. **localStorage-only** — all practice data stays client-side for MVP
2. **Click-to-select matching** — no drag-and-drop on any device
3. **Bilingual display** — term front (EN + ZH), definition back (EN + ZH)
4. **.xlsx only for MVP** — .csv deferred as stretch goal
5. **3-step export flow** — Select → Preview → Download
6. **Fixed 6 matching pairs** — not configurable for MVP
7. **Simple interval spaced repetition** — 1d/3d/7d/14d, revisit in implementation track
8. **Session state is ephemeral** — no persistence across page refresh
9. **SheetJS lazy-loaded** — only on export page, not in main bundle
10. **Mobile breakpoint 768px** — Tailwind md standard
11. **Bottom tab bar mobile** — Home, Units, Practice, Glossary
12. **Minimum tap target 44px** — Apple HIG

## Deferred to Implementation Track

- Mastery color dots on unit overview vocab list (WF1)
- Session state persistence across refresh (WF3a)
- Team Activity mode — stretch, requires print stylesheet (WF2/WF3)
- .csv export format
- Dashboard chart/graph (WF5)
- Raw session history in export (WF4)
- Configurable matching pair count (WF3b)

## Out of Scope (Confirmed)

- Final production UI
- Local storage implementation
- Export code
- LMS integration
- Teacher analysis skill implementation
