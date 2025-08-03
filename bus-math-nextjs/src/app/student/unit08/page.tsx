import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Unit 8: Year‑1 Startup Model",
  description: "Can we convince a micro‑VC that our first‑year financial model is robust enough to merit funding?",
  rationale: "A venture capitalist guest outlines common red flags in rookie startup models and challenges students to avoid them. Students review anonymized pitch decks and model failures.",
  sequence: 8
}

const unit08Lessons = [
  {
    title: "Introduction: VC Reality Check",
    keyConcepts: ["Venture capital process", "Model red flags", "Investor expectations", "Funding requirements"],
    learningObjectives: ["Understand VC evaluation process", "Identify common model mistakes", "Learn investor expectations", "Define funding requirements"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Financial Modeling",
    keyConcepts: ["Revenue projections", "Cost modeling", "Growth assumptions", "Scenario planning"],
    learningObjectives: ["Build revenue projections", "Model cost structures", "Validate growth assumptions", "Create scenario plans"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Startup Metrics",
    keyConcepts: ["Unit economics", "CAC and LTV", "Burn rate", "Runway calculations"],
    learningObjectives: ["Calculate unit economics", "Understand CAC and LTV", "Track burn rate", "Project cash runway"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Integrated Financial Model",
    keyConcepts: ["Three-statement integration", "Dynamic modeling", "Sensitivity analysis", "Monte Carlo simulation"],
    learningObjectives: ["Build integrated model", "Create dynamic assumptions", "Perform sensitivity analysis", "Run scenario simulations"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Investor Dashboard",
    keyConcepts: ["KPI dashboards", "Investor metrics", "Visual presentations", "Executive summaries"],
    learningObjectives: ["Create investor dashboard", "Track key metrics", "Design visual presentations", "Write executive summaries"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Successful Startup Models",
    keyConcepts: ["Model case studies", "Success factors", "Common pitfalls", "Best practices"],
    learningObjectives: ["Study successful models", "Identify success factors", "Avoid common pitfalls", "Apply best practices"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Perfecting Your Model",
    keyConcepts: ["Model refinement", "Assumption testing", "Peer review", "Expert feedback"],
    learningObjectives: ["Refine financial model", "Test key assumptions", "Conduct peer reviews", "Incorporate expert feedback"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Pitch Preparation",
    keyConcepts: ["Pitch deck creation", "Story development", "Financial highlights", "Q&A preparation"],
    learningObjectives: ["Create compelling pitch deck", "Develop investment story", "Highlight financial strength", "Prepare for investor questions"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Final Rehearsal",
    keyConcepts: ["Presentation skills", "Investor communication", "Technical demonstration", "Confidence building"],
    learningObjectives: ["Practice presentation skills", "Master investor communication", "Perfect technical demonstration", "Build presentation confidence"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: VC Pitch Panel",
    keyConcepts: ["Professional pitch delivery", "VC panel engagement", "Model defense", "Funding readiness"],
    learningObjectives: ["Deliver professional pitch", "Engage VC panel", "Defend financial model", "Demonstrate funding readiness"],
    durationEstimateMinutes: 45
  }
]

export default function Unit08Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit08Data} lessons={unit08Lessons} />
    </div>
  )
}