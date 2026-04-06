// PayDay Simulator, Lesson 3 data - Deductions and Net Pay
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit05Data = UNIT_REF_MAP[5]
export const lesson03Data = {
  id: "mds5w74hmc97u06iej",
  title: "Deductions and Net Pay",
  sequence: 3,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Calculate net pay by subtracting deductions from gross pay",
    "Identify and apply federal income tax withholding",
    "Explain the difference between employee deductions and employer payroll expenses",
    "Calculate employer FICA (Social Security and Medicare) obligations"
  ],
  keyConcepts: [
    "Gross pay to net pay calculation",
    "Federal income tax withholding",
    "Employee deductions vs. employer payroll expenses",
    "FICA: Social Security and Medicare taxes"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Explicit instruction on deduction types and calculations",
    "Guided practice with payroll register format",
    "Algorithmic practice for mastery"
  ],
  rationale: "To teach students how to calculate what an employee actually takes home (net pay) after all required deductions, and understand the employer's additional cost burden.",
  status: "Draft"
}


// Lesson phases for Deductions and Net Pay lesson
export const lesson03Phases = [
  {
    id: "phase_hook_3",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Activate prior knowledge and introduce the net pay problem",
  },
  {
    id: "phase_introduction_3",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Explicit instruction on deduction types and net pay calculation",
  },
  {
    id: "phase_guided_practice_3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Guided practice calculating net pay with various employee scenarios",
  },
  {
    id: "phase_independent_practice_3",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic practice calculating net pay with automatic feedback",
  },
  {
    id: "phase_assessment_3",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Exit ticket on deductions, net pay, and employer obligations",
  },
  {
    id: "phase_closing_3",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflection and preview of payroll timing and liabilities",
  }
]