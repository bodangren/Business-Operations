// Data-Driven Café, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5vtzvyf1dspv83qk",
  title: "Application Practice: Outliers & Descriptive Statistics",
  sequence: 3,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Compute and interpret descriptive statistics for business decision-making",
    "Identify outliers using z-score analysis and business context",
    "Use Analysis ToolPak to generate comprehensive statistical reports"
  ],
  keyConcepts: [
    "Descriptive statistics: mean, median, standard deviation, and z-scores",
    "Outlier identification and handling techniques in business data",
    "Excel Analysis ToolPak: Descriptive Statistics, Regression, Histograms"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Identify outliers and compute key statistics using Analysis ToolPak"
  ],
  rationale: "To teach students how to identify and handle outliers, and how to use the Analysis ToolPak to compute descriptive statistics.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Review previous learning and connect to today's application activities",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Descriptive statistics: mean, median, standard deviation, and z-scores and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through structured examples applying Descriptive statistics: mean, median, standard deviation, and z-scores with teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating descriptive statistics in a template.
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Apply Descriptive statistics: mean, median, standard deviation, and z-scores independently to solve authentic business problems",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating descriptive statistics in a template.
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Consolidate learning and connect to broader unit goals and real-world applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
