// Unit 1, Lesson 6 — Integration & Presentation Readiness
export const lesson06Data = {
  id: "mds5t7qxp0v3d9i52ti",
  title: "Integration & Dashboards: Decision‑Ready Ledger",
  sequence: 6,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Integrate driver tables and named ranges to switch scenarios",
    "Link model outputs to charts and KPI cards for a single dashboard view",
    "Use XLOOKUP/INDEX‑MATCH with IFNA/IFERROR for stable switching",
    "Validate inputs (stale AsOfDate, out‑of‑range rates, missing scenario)",
    "Communicate decisions with investor‑ready summaries and visuals"
  ],
  keyConcepts: [
    "Scenario Manager / driver table",
    "Named ranges and structured references",
    "XLOOKUP exact‑match switching with IFNA/IFERROR",
    "Chart data binding and expanding ranges",
    "KPI thresholds and executive summaries"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Live demo and comparison",
    "Direct instruction with worked syntax",
    "Guided build with validation",
    "Independent challenges with self‑assessment"
  ],
  rationale: "Students integrate their advanced automation into a decision‑ready dashboard with scenario toggles, clear KPIs, and professional communication for investors.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase06-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah’s live dashboard demo with Base/Stretch/Downside toggles—see hard‑coded sheets vs integrated model.",
  },
  {
    id: "phase06-intro",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "How to move from model to decision: driver tables, named ranges, exact‑match lookups, and KPI selection.",
  },
  {
    id: "phase06-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s scenario controls, link to charts, and add business‑rule validation for reliability.",
  },
  {
    id: "phase06-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Tackle integration challenges with the unit01 dataset; produce a live‑updating dashboard and exec summary.",
  },
  {
    id: "phase06-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Integration & dashboard mastery check—switching logic, named ranges, chart linkage, KPI interpretation.",
  },
  {
    id: "phase06-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize wins and present with confidence; reflect on CAP skills and preview Lesson07.",
  }
]
