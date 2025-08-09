// Unit 1, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5t7qyamtivn9oq6",
  title: "Exercises: Independent Ledger Construction",
  sequence: 7,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Independently construct a complete self-auditing ledger system from scratch",
    "Integrate all Excel features learned including Tables, SUMIF, and conditional formatting",
    "Demonstrate mastery of accounting principles and Excel automation techniques",
    "Provide constructive peer feedback using professional assessment criteria"
  ],
  keyConcepts: [
    "Independent application of all learned skills",
    "Complete system integration",
    "Peer review and feedback protocols",
    "Professional assessment criteria application"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Independent practice and application",
    "Peer review and collaborative feedback",
    "Self-assessment against rubric criteria",
    "Milestone assessment preparation"
  ],
  rationale: "This lesson provides students with independent practice time to consolidate their learning and demonstrate mastery before the final presentations.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase07-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Challenge students to create their own complete ledger system and demonstrate true mastery",
    // component: "StudentChoices" (id: 1753928158697pz6b4sjet) - To allow students to select their business venture.
  },
  {
    id: "phase07-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review assessment criteria and expectations for independent ledger construction project",
    // component: "AssessmentOverview" (id: 1753928098855pkynqh56h) - To review the rubric and expectations.
  },
  {
    id: "phase07-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Begin independent work with teacher support and clarification as needed",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can use a blank template to start their work.
  },
  {
    id: "phase07-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Continue independent ledger construction with focus on integration and testing",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students continue their work.
  },
  {
    id: "phase07-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete peer review activities and provide constructive feedback on ledger systems",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer review process.
  },
  {
    id: "phase07-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on construction process and identify areas for refinement before presentations",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]