export const lesson04Data = {
  id: "u5l4",
  title: "Payroll Timing and Liabilities",
  sequence: 4,
  unitId: "unit05",
  learningObjectives: [
    "Explain why payroll timing creates temporary differences between the payroll register and bank records",
    "Calculate gross pay and identify which amounts become liabilities until paid",
    "Distinguish between employee deductions and employer payroll taxes",
    "Reconcile the payroll register total to the bank statement"
  ],
  keyConcepts: [
    "Payroll timing and cash-flow window",
    "Employee vs. employer payroll liabilities",
    "Payroll register as the book record",
    "Bank reconciliation for payroll"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete story of cash-timing pressure",
    "Explicit instruction on liability creation",
    "Guided practice with timing scenarios",
    "Mastery practice on reconciliation"
  ],
  rationale: "Before automating payroll in Excel, students must understand why payroll timing creates temporary cash differences and what liabilities exist until each pay period clears. This connects gross pay (Lesson 02) and deductions (Lesson 03) to the cash management challenge Sarah faces."
}

export const unit05Data = {
  id: "unit05",
  title: "PayDay Simulator",
  sequence: 5
}

export const lesson04Phases = [
  {
    id: "phase_hook_4",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Show the timing problem - payroll clears the bank days after the register shows it as due"
  },
  {
    id: "phase_introduction_4",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Explicit instruction on payroll liabilities and the timing window"
  },
  {
    id: "phase_guided_practice_4",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Work through timing scenarios and liability calculations"
  },
  {
    id: "phase_independent_practice_4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Mastery practice on timing and reconciliation scenarios"
  },
  {
    id: "phase_assessment_4",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exit ticket on timing, liabilities, and reconciliation"
  },
  {
    id: "phase_closing_4",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on timing implications and preview Excel automation"
  }
]