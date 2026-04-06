// PriceLab Challenge, Lesson 10 data - Group Project: Final Presentation and Submission
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit06Data = UNIT_REF_MAP[6]
export const lesson10Data = {
  id: "mds5wn45ehaor48xp9",
  title: "Final Presentation, Submission, and Reflection",
  sequence: 10,
  unitId: "mdrhlhv3y4h703ia2t",
  learningObjectives: [
    "Deliver a polished 3-5 minute presentation of your group's pricing recommendation",
    "Defend your recommendation during Q&A using workbook evidence",
    "Submit your final workbook and presentation artifact meeting all quality standards",
    "Reflect on how your team balanced competitiveness with profitability and what you learned"
  ],
  keyConcepts: [
    "Professional presentation standards for financial recommendations",
    "Evidence-based defense of pricing decisions under stakeholder questioning",
    "Final workbook polish and submission requirements",
    "Reflection on pricing logic, risk assessment, and model credibility",
    "Milestone 3 acceptance criteria and capstone evaluation"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Final presentation to authentic audience (panel, classmates, teacher)",
    "Q&A defense of pricing recommendation with workbook evidence",
    "Structured submission and reflection process",
    "Workbook architecture identical to Lesson 07 rehearsal model"
  ],
  rationale: "Lesson 10 is the culmination of the PriceLab Challenge. Teams present their final pricing recommendation to a panel, defend their analysis during Q&A, submit their polished workbook, and reflect on what they learned about pricing, risk, and evidence-based decision-making. This lesson mirrors real business pricing decisions where multiple stakeholders evaluate strategies."
}


// Lesson phases aligned to the group-project skill contract
// Phase names follow the milestone-style structure for project lessons
export const lesson10Phases = [
  {
    id: "phase_final_polish_10",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Final polish of workbook and presentation notes before presenting to the panel.",
  },
  {
    id: "phase_presentation_standards_10",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Understand the audience, presentation standards, timing, and submission expectations.",
  },
  {
    id: "phase_presentations_10",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Deliver your team's presentation and participate in Q&A with the panel.",
  },
  {
    id: "phase_audience_review_10",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Review other teams' presentations using the rubric and submit feedback.",
  },
  {
    id: "phase_submission_10",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Submit your final workbook, presentation artifact, and confirm all deliverables.",
  },
  {
    id: "phase_reflection_handoff_10",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on pricing logic, risk, model credibility, and what you learned about business decision-making.",
  }
]
