// Asset & Inventory Tracker, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5x99sosgzubr6xz",
  title: "Advanced Inventory Automation",
  sequence: 5,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Build a dynamic method switch (FIFO/LIFO/Weighted Avg) using structured references",
    "Implement robust validation for inventory data (missing IDs, negative costs, stale dates)",
    "Design investor-ready outputs: clear COGS/ending inventory with documentation and checks",
    "Apply scenario analysis to show tax and cash-flow impacts under different methods"
  ],
  keyConcepts: [
    "Dynamic method selection via control cell + helper logic",
    "Structured references with Excel Tables for scalable models",
    "Error handling with IFERROR/IFNA and validation rules",
    "Professional standards: documentation, auditability, reproducibility"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook-first explanations with guided practice and formative assessment"
  ],
  rationale: "Students advance from correct method knowledge to professional-grade automation that scales reliably and earns investor confidence.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Stress test fragile vs. robust inventory automation under real‑world changes",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Deep‑dive on dynamic method switching and professional standards",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Hands‑on validation and safeguards for reliable inventory models",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide the retrospective process.
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Escalating challenges using advanced practice data with edge cases",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide the retrospective process.
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Comprehensive mastery check mixing technical skill and business judgment",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize reliability improvements and preview dashboard integration",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
