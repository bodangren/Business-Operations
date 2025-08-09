// Unit 1, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5t7qth7rdjsqegg",
  title: "Excel Model: Conditional Formatting & Error Checking",
  sequence: 5,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Create conditional formatting rules for visual error detection in ledger systems",
    "Build trial balance auto-check formulas to verify debit/credit equality",
    "Implement visual error detection systems that alert users to imbalances",
    "Test self-auditing features with intentional errors to verify system reliability"
  ],
  keyConcepts: [
    "Conditional formatting rule creation",
    "Trial balance validation formulas",
    "Visual error detection systems",
    "Self-auditing ledger principles",
    "Color-coded feedback systems"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Demonstration of error-catching techniques",
    "Hands-on conditional formatting setup",
    "Guided practice with intentional errors",
    "System testing and validation"
  ],
  rationale: "This lesson adds critical error-checking capabilities that transform a basic ledger into a self-auditing system worthy of investor confidence.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase05-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Witness the power of self-auditing systems through live error detection and automatic visual alerts",
    // component: "ErrorCheckingSystem" (id: mdsjne6632yk82ynnc5) - To demonstrate the power of conditional formatting.
  },
  {
    id: "phase05-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn conditional formatting techniques and trial balance validation formulas for error prevention",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase05-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build conditional formatting rules and error-checking formulas step-by-step with TechStart data",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can practice building the rules in a template.
    // component: "ErrorCheckingSystem" (id: mdsjne6632yk82ynnc5) - To guide the creation of the rules.
  },
  {
    id: "phase05-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Test self-auditing features by introducing intentional errors and verifying detection systems",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can test their created rules by intentionally making errors.
  },
  {
    id: "phase05-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on conditional formatting and error detection system creation",
    // component: "FillInTheBlank" (id: 17539276608411j3ll7eqa) - To assess the ability to create conditional formatting formulas.
  },
  {
    id: "phase05-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the value of self-auditing systems and preview professional ledger applications",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]