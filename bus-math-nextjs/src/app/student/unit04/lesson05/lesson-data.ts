// Data-Driven Café, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5vu037acxztit45w",
  title: "Advanced Forecast Automation (Regression)",
  sequence: 5,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Automate forecasts with FORECAST.LINEAR using structured references",
    "Build scenario toggles and what‑if analysis for demand planning",
    "Install robust validation to catch outliers, stale dates, and missing keys",
    "Produce investor‑ready summaries with clear assumptions and audit checks"
  ],
  keyConcepts: [
    "Structured references (Table[Column]) and dynamic ranges",
    "FORECAST.LINEAR vs. AVERAGE growth baselines with method switching",
    "SUMIFS/SUMPRODUCT filters for segmented forecasts",
    "Error handling with IFERROR and XLOOKUP defaults",
    "Scenario inputs and goal‑based checks"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Deepen Lesson04 skills with automation, validation, and scenario tools"
  ],
  rationale: "Students harden a forecasting model for TechStart’s café client: dynamic method switching, scenario inputs, and visible validations make outputs reliable at scale—key for investor trust.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Capture attention and establish relevance for model completion: regression forecasting",
    // component: "LineChart" (id: 1753927528418ku6yyo9go) - To show a chart with a clear trendline.
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Linear regression principles and business forecasting applications and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Linear regression principles and business forecasting applications with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a regression model in a template.
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete model construction demonstrating mastery of technical skills",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice building a regression model in a template.
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
