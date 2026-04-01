// PayDay Simulator, Lesson 6 — Integration & Presentation: Decision‑Ready Payroll Dashboard
export const lesson06Data = {
  id: "u05_l06_paystub",
  title: "Pay Stub Studio: Taxes, Net Pay, and Proof",
  sequence: 6,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Convert payroll inputs (name, filing status, standard deduction, gross pay) into taxable income",
    "Calculate FIT, Social Security, Medicare, and state income tax per employee",
    "Design a printable pay stub that updates by Employee ID selector",
    "Explain how accurate pay stubs protect trust with employees, regulators, and investors"
  ],
  keyConcepts: [
    "Taxable income = Gross pay – pre‑tax deductions",
    "IRS FIT tables + standard deduction usage",
    "FICA: 6.2% Social Security up to wage base, 1.45% Medicare all wages",
    "State withholding using simplified rate table",
    "Pay stub layout, selectors, and print readiness"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook-first explanation with interactive walkthrough of tax math and pay stub design"
  ],
  rationale: "Students combine Lesson04–05 automation with tax logic to produce compliant, professional pay stubs that employees and auditors trust.",
  status: "Complete"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Live demo: employee pay stub misprint vs. corrected version",
    // component: "ComprehensionCheck" – pay stub accuracy & risk
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Data flow from payroll inputs → taxable income → tax components → printable stub",
    // component: "FillInTheBlank" – vocabulary on taxable income, deductions, FICA
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Model FIT/FICA/state tax formulas and connect them to a pay stub template",
    // component: "ErrorCheckingSystem" – tax logic + lookup validation
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete the pay stub workbook using the lesson dataset and design polish requirements",
    // resources: /public/resources/unit05-lesson06-paystub-practice.csv
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Mastery check: taxable income formula, FIT lookup, FICA math, and pay stub selector",
    // component: "ComprehensionCheck" – 8–10 questions
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis and reflection: communicating pay stub accuracy and readiness",
    // component: "ReflectionJournal" – CAP prompts
  }
]
