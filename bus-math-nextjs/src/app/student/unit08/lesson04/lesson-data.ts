// Year‑1 Startup Model, Lesson 4 data - Office365 Compatible Excel Automation
export const lesson04Data = {
  id: "mds5xnq9qhugknmd1o",
  title: "Excel Model: Scenario Manager & Advanced Financial Modeling",
  sequence: 4,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Master Excel Scenario Manager to model optimistic, pessimistic, and realistic business cases",
    "Build dynamic financial models using advanced Excel functions (INDIRECT, CHOOSE, INDEX/MATCH)",
    "Create professional data tables for sensitivity analysis",
    "Implement Office365-compatible automation for investor presentations"
  ],
  keyConcepts: [
    "Excel Scenario Manager setup and variable switching",
    "Advanced Excel functions for dynamic modeling",
    "Data tables and sensitivity analysis",
    "Professional financial model structure",
    "Office365 Excel automation capabilities"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hands-on Excel demonstration with Scenario Manager",
    "Guided practice building dynamic startup financial models",
    "Real-world investor presentation preparation"
  ],
  rationale: "Students need to master Office365-compatible Excel automation to build investor-ready financial models. Scenario Manager and advanced functions provide the dynamic capabilities that VBA would offer, while being fully supported in cloud-based Excel.",
  status: "Ready for Dev"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Year‑1 Startup Model",
  sequence: 8
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Scenario Manager Introduction",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To show a dashboard with different scenarios.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Excel Scenario Manager functionality and setup and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Excel Scenario Manager functionality and setup with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using Scenario Manager in a template.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete model construction demonstrating mastery of technical skills",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice using Scenario Manager in a template.
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Preview upcoming learning sequence and build anticipation for next steps",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
