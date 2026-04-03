// Inventory Tracker & Valuation, Lesson 4 data - Specific Identification and Weighted Average
export const lesson04Data = {
  id: "lesson04-specific-weighted",
  title: "Specific Identification and Weighted Average",
  sequence: 4,
  unitId: "mdrhlhv4ov691yonkpi",
  learningObjectives: [
    "Identify business contexts where Specific Identification is the appropriate inventory method",
    "Identify business contexts where Weighted Average is the appropriate inventory method",
    "Calculate Cost of Goods Sold and Ending Inventory using Specific Identification",
    "Calculate Cost of Goods Sold and Ending Inventory using Weighted Average",
    "Compare all four inventory methods (FIFO, LIFO, Specific ID, Weighted Average) and explain when each is appropriate"
  ],
  keyConcepts: [
    "Specific Identification: tracking exact cost of each unique item",
    "Weighted Average: pooling costs across similar items",
    "Business fit: matching method to inventory type",
    "Rounding rules for weighted average calculations",
    "Method comparison matrix: FIFO, LIFO, Specific ID, Weighted Average"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Start with business fit before arithmetic",
    "Teach one new method at a time",
    "Use fixed, teacher-controlled scenarios",
    "Show one fully worked example before independent work",
    "Four-method comparison matrix after both methods are understood"
  ],
  rationale: "Students learn the third and fourth inventory methods with the same calculation-first, textbook-first scaffolding used in Lessons 2-3. They should understand WHY these methods exist and WHAT kinds of businesses use them BEFORE any workbook build happens in Lesson 5.",
  status: "Draft"
}

export const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Inventory Tracker & Valuation",
  sequence: 7
}

// Lesson phases - following I Do, We Do, You Do structure
export const lesson04Phases = [
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 1,
    description: "Discover why not every inventory method fits every business. Sort methods to business contexts and establish the key distinction between traceable items and pooled costs.",
  },
  {
    id: "phase_i_do_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Teacher models Specific Identification step by step using a small inventory of unique, tagged items. Focus on exact-item tracking, not flow assumptions.",
  },
  {
    id: "phase_we_do_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Teacher and students solve a Weighted Average scenario together with visible running totals and explicit rounding rule support.",
  },
  {
    id: "phase_you_do_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Students complete two independent practice tasks (Specific ID and Weighted Average), then synthesize with a four-method comparison matrix.",
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Multiple-choice exit ticket checking method recognition, method fit, specific identification logic, and weighted average calculation including rounding.",
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on which method felt intuitive vs difficult, preview Lesson 5 workbook construction, and surface confusion points before Excel work begins.",
  }
]