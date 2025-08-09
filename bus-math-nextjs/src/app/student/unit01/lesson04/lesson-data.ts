// Unit 1, Lesson 4 data - extracted from MCP curriculum database
export const lesson04Data = {
  id: "mds5t7qs1o7y0k5y45z",
  title: "Excel Model: Tables & SUMIF Functions",
  sequence: 4,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Create Excel Tables with structured references for professional ledger organization",
    "Build SUMIF functions to automatically calculate account balances",
    "Demonstrate professional Excel structure and formatting standards",
    "Test and validate formula functionality with sample transaction data"
  ],
  keyConcepts: [
    "Excel Table creation and formatting",
    "Structured references vs. cell references",
    "SUMIF function syntax and application",
    "Dynamic formula expansion",
    "Professional ledger structure"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hands-on Excel demonstration",
    "Guided practice with TechStart data",
    "Partner testing of formula functionality",
    "Progressive skill building"
  ],
  rationale: "This lesson introduces essential Excel skills for building automated ledger systems that will scale with business growth and impress investors.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase04-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Experience the power of Excel Tables and automated calculations through a before/after demonstration",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To show a basic, non-automated table vs. an Excel Table.
  },
  {
    id: "phase04-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn Excel Table creation, structured references, and SUMIF function syntax for ledger automation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of Excel Tables and SUMIF syntax.
  },
  {
    id: "phase04-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Excel Tables and SUMIF formulas step-by-step using TechStart transaction data",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can work within a pre-built template to practice the new skills.
  },
  {
    id: "phase04-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Create additional account categories and test formula expansion with new transaction types",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can extend the template with new categories and formulas.
  },
  {
    id: "phase04-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on Excel Table creation and SUMIF formula construction",
    // component: "FillInTheBlank" (id: 17539276608411j3ll7eqa) - To assess the ability to construct SUMIF formulas correctly.
  },
  {
    id: "phase04-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on Excel automation benefits and preview conditional formatting for error detection",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]