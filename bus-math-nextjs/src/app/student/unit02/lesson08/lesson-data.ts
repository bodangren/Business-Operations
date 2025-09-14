// Month-End Wizard, Lesson 8 data - extracted from MCP curriculum database
export const lesson08Data = {
  id: "unit02_lesson08",
  title: "PBL Milestone 1: Project Definition",
  sequence: 8,
  unitId: "unit02",
  learningObjectives: [
    "Define the project problem, scope, stakeholders, and success metrics",
    "Inventory data sources and set consistent file naming for the PBL datasets",
    "Plan Excel model structure: tabs, validations, method switching, dashboards",
    "Identify risks and assumptions; outline mitigation strategies"
  ],
  keyConcepts: [
    "Problem statements and measurable outcomes",
    "Consistent data schemas across teams",
    "Excel automation planning (XLOOKUP, SWITCH/IFS, validation, named ranges)"
  ],
  durationEstimateMinutes: 55,
  pedagogicalApproach: [
    "Project-Based Learning milestone planning with authentic business framing"
  ],
  rationale: "Teams define a clear problem and build a realistic plan that supports an investor-ready month-end automation prototype.",
  status: "Draft"
}

export const unit02Data = {
  id: "unit02",
  title: "Unit 2: Month-End Wizard",
  sequence: 2
}

// Single-phase PBL structure
export const lesson08Phases = [
  {
    id: "pbl_m1",
    phaseName: "Introduction" as const,
    sequence: 1,
    description: "PBL Milestone 1 — Project Definition: scope, datasets, Excel model plan, risks, and acceptance criteria."
  }
]
