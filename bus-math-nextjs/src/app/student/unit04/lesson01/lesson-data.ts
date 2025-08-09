// Data-Driven Café, Lesson 1 data - extracted from MCP curriculum database
export const lesson01Data = {
  id: "mds5vtzrfwekjlsi148",
  title: "Launch & Explore: Campus Café Challenge",
  sequence: 1,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Data-driven decisions provide competitive advantages in business operations",
    "Statistical analysis reveals patterns that guide inventory and staffing optimization",
    "Forecasting models enable proactive business planning and risk management",
    "Outlier identification prevents skewed analysis and faulty business conclusions"
  ],
  keyConcepts: [
    "Descriptive statistics: mean, median, standard deviation, and z-scores",
    "Outlier identification and handling techniques in business data",
    "Linear regression principles and business forecasting applications",
    "Cost-benefit analysis for inventory and staffing decisions",
    "Statistical significance and confidence in business predictions"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Entry event with virtual field trip and dataset introduction"
  ],
  rationale: "To immerse students in a real-world business problem and to introduce the dataset that will be used throughout the unit.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson01Phases = [
  {
    id: "phase_hook_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Campus Café Challenge",
    // component: "Lesson01Phase1" (id: mdwl1ovg1rb2fimw7zj) - To introduce the unit's story with a video and comprehension questions.
  },
  {
    id: "phase_introduction_1",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce the unit challenge and establish learning goals and success criteria",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the introductory text.
  },
  {
    id: "phase_guided_practice_1",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Descriptive statistics: mean, median, standard deviation, and z-scores with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating descriptive statistics in a template.
  },
  {
    id: "phase_independent_practice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Descriptive statistics: mean, median, standard deviation, and z-scores independently with minimal teacher support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice calculating descriptive statistics in a template.
  },
  {
    id: "phase_assessment_1",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_1",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Preview upcoming learning sequence and build anticipation for next steps",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
