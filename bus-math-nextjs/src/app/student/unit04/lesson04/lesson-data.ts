// Data-Driven Café, Lesson 4 data - Excel Charts & Data Visualization
export const lesson04Data = {
  id: "mds5vu00qkk4xiaq3ha",
  title: "Excel Charts & Data Visualization: Transforming Data into Business Insights",
  sequence: 4,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Create professional Excel charts (column, line, scatter) with proper formatting",
    "Build interactive charts with trendlines and data labels for business analysis",
    "Design visual dashboards that reveal patterns in café POS data"
  ],
  keyConcepts: [
    "Excel chart types: Column charts for categories, line charts for trends, scatter plots for relationships",
    "Chart formatting: Professional titles, axis labels, legends, and data series",
    "Trendline analysis: Adding linear trendlines to identify patterns and forecast demand",
    "Dashboard design: Combining multiple charts to tell a complete data story"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hands-on Excel chart creation using café POS data",
    "Progressive skill building from basic charts to interactive dashboards",
    "Business context focus: connecting visual patterns to operational decisions"
  ],
  rationale: "Students need to transform raw café data into compelling visual stories that reveal actionable business insights. This Excel skill bridges statistical analysis with professional data presentation, preparing students for advanced forecasting in lesson05.",
  status: "Ready for Dev"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases focusing on Excel Charts & Data Visualization
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah's Data Visualization Challenge: From spreadsheet chaos to compelling business insights",
    // component: "FinancialDashboard" - Show café manager's current confusing data vs. clear visual story
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Excel Charts: The Professional Foundation for transforming data into actionable business intelligence",
    // component: "FillInTheBlank" - Chart type selection and Excel chart terminology
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Building Sarah's Excel Chart System: Step-by-step chart creation for café data analysis",
    // components: "BarChart", "LineChart", "PieChart" - Progressive chart building exercises
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Advanced Excel Chart Mastery: Complex dashboard creation and business insight development",
    // component: "DragAndDrop" - Chart type selection for business scenarios
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Excel Charts: Professional Mastery Assessment with chart interpretation and business analysis",
    // component: "ComprehensionCheck" - Chart reading and business insight assessment
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Excel Chart Mastery Complete: Building Your Future with professional data visualization skills",
    // component: "ReflectionJournal" - CAP framework reflection on data storytelling journey
  }
]
