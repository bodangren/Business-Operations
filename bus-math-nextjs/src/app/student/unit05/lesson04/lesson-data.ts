// PayDay Simulator, Lesson 4 data - Excel-focused skills introduction
export const lesson04Data = {
  id: "mds5w74rp4icpe60td",
  title: "Multi-Employee Gross Pay Register",
  sequence: 4,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Build an employee roster sheet and link it to the gross pay register with XLOOKUP",
    "Apply IF logic so each pay type (hourly, salary, commission) pulls only the inputs it needs",
    "Calculate consolidated gross payroll totals with SUMIF-based summaries and visualizations",
    "Explain how charts and pivot tables help leaders spot payroll trends by department"
  ],
  keyConcepts: [
    "Structured tables with XLOOKUP references",
    "Nested IF statements for pay-type logic",
    "SUMIF analysis and charting",
    "Pivot tables for departmental payroll views"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Hands-on Excel build focused on linked tables",
    "Guided modeling of XLOOKUP + IF formulas",
    "Independent practice finishing the multi-employee register",
    "Visual storytelling with charts and pivot tables"
  ],
  rationale: "Hiring more people means Sarah needs one source of truth for gross payroll. By linking an employee list to a consolidated register with XLOOKUP, IF logic, and summary visuals, students learn how to scale their spreadsheet beyond a single paycheck.",
  status: "Complete"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Show the cost of tracking payroll employee-by-employee and motivate the need for a linked gross pay register",
    // No component needed for this phase.
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Preview the Employee List + Gross Pay workbook architecture and how XLOOKUP stitches the sheets together",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Model each build step: XLOOKUP pulls, IF logic per pay type, and the additive gross pay formula",
    // component: "ErrorCheckingSystem" (id: mdsjne6632yk82ynnc5) - repurposed for structured walkthroughs.
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Students finish their workbook: finalize SUMIF summaries, build a bar chart, and insert a department pivot table",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice completing the register.
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Comprehension check on XLOOKUP logic, additive gross formulas, and analysis visuals",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on how the gross pay register sets up Lesson 5 withholding work and Lesson 6 scheduling",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
