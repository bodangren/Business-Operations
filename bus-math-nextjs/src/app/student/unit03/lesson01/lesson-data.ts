// Three-Statement Storyboard, Lesson 1 data - extracted from MCP curriculum database
export const lesson01Data = {
  id: "mds5vi9yev6tq5zzl1a",
  title: "Launch & Explore: Financial Statement Detective Work",
  sequence: 1,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Financial statements tell the complete story of business performance and position",
    "Integrated financial statements reveal connections between profit, balance sheet strength, and cash flow",
    "Dynamic dashboards transform raw financial data into actionable business insights",
    "Professional financial communication builds investor confidence and trust"
  ],
  keyConcepts: [
    "Income Statement construction from journal entry data",
    "Balance Sheet account linking and Retained Earnings reconciliation",
    "Indirect Cash Flow Statement preparation and interpretation",
    "Key financial ratios (Current Ratio, Return on Assets) and their meaning",
    "Integration between the three primary financial statements"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Entry event using real 10-Q filing to understand integrated financial statements"
  ],
  rationale: "To connect the abstract concepts of financial statements to real-world business narratives.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson01Phases = [
  {
    id: "phase_hook_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to Financial Statement Detective Work",
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
    description: "Collaborative practice applying Income Statement construction from journal entry data with scaffolded support",
    // component: "IncomeStatementSimple" (id: 1753927759047ru2me8gn9) - To show a simple income statement.
  },
  {
    id: "phase_independent_practice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice Income Statement construction from journal entry data independently with minimal teacher support",
    // component: "FinancialStatementMatching" (id: 17539276020632evn3pfl4) - To practice identifying which accounts belong on the income statement.
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
