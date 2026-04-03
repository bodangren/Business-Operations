// Inventory Tracker & Valuation, Lesson 3 data - FIFO and LIFO Methods
export const lesson03Data = {
  id: "mds5x99ma27hcfuzr0p",
  title: "FIFO and LIFO: Two Ways to Value the Same Inventory",
  sequence: 3,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Calculate Cost of Goods Sold and Ending Inventory using FIFO (First-In, First-Out) method",
    "Calculate Cost of Goods Sold and Ending Inventory using LIFO (Last-In, First-Out) method",
    "Explain how FIFO and LIFO produce different COGS and Ending Inventory values from identical transactions",
    "Identify business situations where FIFO or LIFO may be strategically preferred",
    "Analyze the impact of rising vs. falling prices on FIFO vs. LIFO outcomes"
  ],
  keyConcepts: [
    "Inventory layers and cost assignment",
    "FIFO (First-In, First-Out) cost flow assumption",
    "LIFO (Last-In, First-Out) cost flow assumption",
    "Cost of Goods Sold (COGS) calculation",
    "Ending Inventory valuation",
    "Rising price environment and its effect on method choice",
    "Profit reporting, tax planning, and cash flow implications"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Step-by-step visual demonstration of FIFO and LIFO layer movement",
    "Scaffolded practice with progressively less structure",
    "Business context for strategic method selection",
    "Side-by-side comparison to highlight differences"
  ],
  rationale: "Lesson 2 established that cost assignment is ambiguous when inventory layers have different prices. Lesson 3 introduces the first two standardized methods—FIFO and LIFO—that resolve this ambiguity. Students learn both the mechanics and the business consequences of each method, preparing them to make and defend method recommendations.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Inventory Tracker & Valuation",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Connect to Lesson 2's ambiguity and introduce FIFO and LIFO as two standardized solutions",
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teach FIFO and LIFO mechanics with visual layer movement, then explore business consequences",
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Scaffolded practice assigning costs to sales using FIFO and LIFO with validation",
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Independent calculation of FIFO and LIFO with business recommendation",
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Assess understanding of FIFO and LIFO calculations and appropriate use cases",
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on FIFO vs LIFO tradeoffs and preview Specific Identification and Weighted Average in Lesson 4",
  }
]