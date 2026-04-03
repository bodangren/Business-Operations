// Inventory Tracker & Valuation, Lesson 1 data - extracted from MCP curriculum database
export const lesson01Data = {
  id: "mds5x99htbxib3tjkf",
  title: "Unit Launch: Sarah's Inventory Problem",
  sequence: 1,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Describe the business problem Sarah faces when inventory purchases and sales pile up across one month",
    "Use the ending inventory equation as the scoreboard for the number Sarah must eventually defend",
    "Observe that buying inventory, selling inventory, and ending the month with inventory on the shelf create different business effects",
    "Launch a shared business simulation that will carry through the rest of Unit 07"
  ],
  keyConcepts: [
    "Ending inventory is a number the business must be able to explain",
    "The unit formula is the scoreboard for Sarah's month: Beginning Inventory + Purchases - Cost of Goods Sold = Ending Inventory",
    "Buying inventory, selling inventory, and holding inventory are not the same thing",
    "Changing prices and incomplete records turn inventory into a real business problem"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Story-first unit launch with one shared business simulation, light observation tasks, and one formal comprehension checkpoint"
  ],
  rationale: "To launch Unit 07 with a clear founder problem: Sarah can feel the pressure of buying, selling, pricing, and tracking inventory across a month, but she cannot yet defend the ending inventory number with confidence.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Inventory Tracker & Valuation",
  sequence: 7
}

// Lesson phases from MCP curriculum database
export const lesson01Phases = [
  {
    id: "phase_hook_1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Meet Sarah's Unit 07 problem and see why one weak inventory number creates immediate business risk",
  },
  {
    id: "phase_introduction_1",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Set up Sarah's month-long business simulation and learn how to read the inventory scoreboard",
  },
  {
    id: "phase_guided_practice_1",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Play through Sarah's month one event at a time and notice which business numbers move first",
  },
  {
    id: "phase_independent_practice_1",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Make one founder buying decision and one founder pricing decision, then compare the tradeoffs",
  },
  {
    id: "phase_assessment_1",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Show that you understand the unit problem, the formula, and why ending inventory is not the same thing as profit",
  },
  {
    id: "phase_closing_1",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the founder problem and preview the first accounting rule Sarah will need next",
  }
]
