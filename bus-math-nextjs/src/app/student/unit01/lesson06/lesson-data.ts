// Unit 1, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "mds5t7qxp0v3d9i52ti",
  title: "Examples: Professional Ledger Applications",
  sequence: 6,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Analyze professional ledger standards used in real business environments",
    "Evaluate self-auditing features that meet investor and auditor expectations",
    "Compare manual vs. automated accounting systems for efficiency and accuracy",
    "Identify presentation-ready features that demonstrate business professionalism"
  ],
  keyConcepts: [
    "Professional accounting standards",
    "Investor-ready financial controls",
    "Self-auditing system benefits",
    "Manual vs. automated system comparison",
    "Business presentation standards"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Worked example analysis",
    "Before/after system comparison",
    "Professional standards review",
    "Case study examination"
  ],
  rationale: "This lesson provides real-world context by examining professional ledger systems and demonstrating the business value of automated financial controls.",
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
    description: "Explore real professional ledger systems and discover what makes them investor-ready and audit-worthy",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To showcase a professional-looking financial dashboard.
  },
  {
    id: "phase06-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn professional accounting standards and examine the features that meet business and regulatory requirements",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of professional standards.
  },
  {
    id: "phase06-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Analyze worked examples of professional ledgers and identify key features for business credibility",
    // component: "TrialBalance" (id: 1753927426859mh078t2dd) - To analyze a professionally formatted trial balance.
    // component: "IncomeStatementDetailed" (id: 1753927745716dmlfuxuab) - To analyze a detailed income statement.
  },
  {
    id: "phase06-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Compare manual vs. automated systems and evaluate their effectiveness for different business scenarios",
    // component: "LemonadeStand" (id: 1753927462220rmxavvbb2) - A simple business simulation to compare manual tracking vs. the built-in automated reports.
  },
  {
    id: "phase06-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on professional ledger standards and system evaluation criteria",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess understanding of the concepts.
  },
  {
    id: "phase06-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on professional standards and prepare for independent ledger construction project",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]