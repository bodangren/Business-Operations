// Data-Driven Café, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5vu00qkk4xiaq3ha",
  title: "New Skill Focus: Data Visualization & Pattern Recognition",
  sequence: 4,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Create professional data visualizations with appropriate chart types"
  ],
  keyConcepts: [
    "Data visualization: Histograms, box plots, scatterplots with trendlines"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Create professional charts to reveal business patterns in café data"
  ],
  rationale: "To teach students how to create effective data visualizations that can reveal patterns and insights in business data.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Present real-world problem requiring the skills to be learned in this lesson",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To show an example of a dashboard with various charts.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Data visualization: Histograms, box plots, scatterplots with trendlines and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Data visualization: Histograms, box plots, scatterplots with trendlines with scaffolded support",
    // component: "BarChart" (id: 1753927489104x24csr223) - To practice creating a bar chart.
    // component: "LineChart" (id: 1753927528418ku6yyo9go) - To practice creating a line chart.
    // component: "PieChart" (id: 17539275379686iozw2fsh) - To practice creating a pie chart.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Data visualization: Histograms, box plots, scatterplots with trendlines independently with minimal teacher support",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To build their own dashboard.
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
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
