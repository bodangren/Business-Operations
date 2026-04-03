// Inventory Accounting, Lesson 2 data - Inventory Cost Flow Foundations
export const lesson02Data = {
  id: "mds5x99kx7ah9f1wjde",
  title: "Inventory Cost Flow Foundations: Beginning Inventory, Purchases, and COGS",
  sequence: 2,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Trace inventory movement through the ending inventory formula step by step",
    "Distinguish between physical flow (units moving) and cost flow (value assignment)",
    "Explain why ending inventory value is not obvious when the same product is purchased at different prices",
    "Identify where mistakes commonly occur in inventory tracking"
  ],
  keyConcepts: [
    "Ending Inventory = Beginning Inventory + Purchases - Cost of Goods Sold",
    "Goods Available for Sale = Beginning Inventory + Purchases",
    "Physical flow tracks units on the shelf; cost flow tracks which dollars belong to sold vs. remaining inventory",
    "Inventory layers form when purchases happen at different costs",
    "Cost assignment determines what stays in inventory and what moves to COGS"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hand-calculation first before any spreadsheet complexity",
    "One shared practice dataset with dated purchases and sales",
    "Clear separation of quantity tracking from value tracking"
  ],
  rationale: "To teach the basic accounting logic of inventory movement before method comparison begins in Lesson 3. Students must understand that ending inventory value depends on cost assignment choices, not just unit counts.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Inventory Accounting",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase_hook_2",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover why ending inventory value is not obvious just from counting what remains on the shelf",
  },
  {
    id: "phase_introduction_2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn how inventory moves through the formula and why physical flow differs from cost flow",
  },
  {
    id: "phase_guided_practice_2",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Walk through a simple inventory timeline by hand, tracking units available and units remaining",
  },
  {
    id: "phase_independent_practice_2",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Compute goods available for sale and identify what must be assigned to COGS versus ending inventory",
  },
  {
    id: "phase_assessment_2",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Check understanding of beginning inventory, purchases, goods available for sale, and ending inventory logic",
  },
  {
    id: "phase_closing_2",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize the movement logic and preview Lesson 3 as the introduction of FIFO and LIFO",
  }
]
