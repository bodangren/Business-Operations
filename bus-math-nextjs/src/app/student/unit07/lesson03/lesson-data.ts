// Asset & Inventory Tracker, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5x99ma27hcfuzr0p",
  title: "Inventory Methods Introduction",
  sequence: 3,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Compute Cost of Goods Sold using FIFO and LIFO methods"
  ],
  keyConcepts: [
    "FIFO and LIFO inventory valuation principles and calculations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "FIFO vs. LIFO logic and business implications"
  ],
  rationale: "To introduce students to the two most common inventory valuation methods and to explore the strategic implications of each.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Asset & Inventory Tracker",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Engage students with compelling opening scenario related to the lesson topic",
    // component: "InventoryFlowDiagram" (id: mdsae8htm5xukuohi7) - To visually introduce the concept of inventory flow.
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce FIFO and LIFO inventory valuation principles and calculations and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying FIFO and LIFO inventory valuation principles and calculations with scaffolded support",
    // component: "InventoryFlowDiagram" (id: mdsae8htm5xukuohi7) - To practice applying FIFO and LIFO.
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Practice FIFO and LIFO inventory valuation principles and calculations independently with minimal teacher support",
    // component: "InventoryManager" (id: 1753927452727xpb8ayrii) - To see the impact of inventory decisions in a simulation.
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
    description: "Preview upcoming learning sequence and build anticipation for next steps",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
