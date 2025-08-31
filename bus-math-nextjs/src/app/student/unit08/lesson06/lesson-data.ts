// Year‑1 Startup Model, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "u08_l06_integration_dashboard_investor_ready",
  title: "Integration & Dashboard: Investor‑Ready Model",
  sequence: 6,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Build scenario controls that switch drivers by name (Base/Stretch/Downside)",
    "Link drivers to outputs and charts using named ranges and structured references",
    "Design an executive dashboard with clear KPIs and decision cues",
    "Implement validation for stale dates, out‑of‑range rates, and missing scenarios",
    "Communicate insights with a short investor‑ready summary"
  ],
  keyConcepts: [
    "Scenario Manager vs. named‑range driver tables",
    "XLOOKUP/IFNA or INDEX/MATCH for exact‑match switching",
    "Structured references and chart range stability",
    "KPI thresholds (runway, margin, break‑even, cash coverage)",
    "Documentation, auditability, and performance standards"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Textbook‑first explanation with authentic business context",
    "Guided build of dashboard integration and validation",
    "Independent scenario challenges with edge‑case data"
  ],
  rationale: "Students turn the advanced automation from Lessons 04–05 into a decision‑ready system: scenario controls, linked outputs, stable charts, and a concise executive summary.",
  status: "Ready"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Year‑1 Startup Model",
  sequence: 8
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah’s live demo: one dashboard, scenario toggles, and clear decision cues",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To show a dashboard with different scenarios.
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: scenario drivers, switching links, and KPI selection",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s dashboard: scenario controls, linked charts, and validation checks",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using Scenario Manager in a template.
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Integration mastery challenges with Base/Stretch/Downside dataset and checklist",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using Scenario Manager in a template.
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Integration & dashboard mastery check: switching, links, KPIs, and judgment",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize wins and present with confidence; preview Lesson 07 stakeholder review",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
