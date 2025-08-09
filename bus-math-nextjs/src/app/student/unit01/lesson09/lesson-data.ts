// Unit 1, Lesson 9 data - extracted from MCP curriculum database
export const lesson09Data = {
  id: "mds5t7r28jzpjbgfxl",
  title: "Project Work: Presentation Preparation & Rehearsal",
  sequence: 9,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Structure an effective investor pitch following professional presentation formats",
    "Practice explaining technical Excel features in accessible business language",
    "Demonstrate live Excel functionality with confidence and clarity",
    "Provide and receive constructive feedback on presentation effectiveness"
  ],
  keyConcepts: [
    "Investor pitch structure and format",
    "Business communication techniques",
    "Technical demonstration skills",
    "Presentation timing and pacing",
    "Constructive feedback protocols"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Presentation skills workshop",
    "Structured rehearsal time",
    "Peer feedback sessions",
    "Professional communication practice"
  ],
  rationale: "This lesson prepares students for authentic audience presentations by developing professional communication skills and building confidence in technical demonstrations.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson09Phases = [
  {
    id: "phase09-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Experience the power of compelling investor presentations through professional examples and success stories",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - To show an example of a well-structured pitch.
  },
  {
    id: "phase09-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn investor pitch structure and effective techniques for technical demonstrations",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase09-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice presentation segments with teacher coaching and immediate feedback",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students can practice building their pitch with guidance.
  },
  {
    id: "phase09-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Rehearse complete presentations with peer audiences and refine based on feedback",
    // component: "PitchPresentationBuilder" (id: mdsno4jnkaav47ved9p) - Students can rehearse their full pitch.
  },
  {
    id: "phase09-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete presentation rehearsal assessment with rubric-based peer evaluation",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - For peer evaluation of the presentation.
  },
  {
    id: "phase09-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on presentation skills development and finalize plans for investor showcase",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]