import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Unit 7: Asset & Inventory Tracker",
  description: "Which depreciation and inventory methods best align with our cash‑flow and tax strategy?",
  rationale: "Local auditor shares a real case of a company fined for inventory misvaluation and provides anonymized asset and inventory data.",
  sequence: 7
}

const unit07Lessons = [
  {
    title: "Introduction: The Audit Nightmare",
    keyConcepts: ["Audit compliance", "Inventory valuation", "Asset depreciation", "Tax implications"],
    learningObjectives: ["Understand audit requirements", "Learn inventory valuation importance", "Recognize depreciation significance", "Analyze tax implications"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Depreciation Methods",
    keyConcepts: ["Straight-line depreciation", "Accelerated methods", "Tax depreciation", "Book vs tax differences"],
    learningObjectives: ["Master depreciation methods", "Calculate depreciation schedules", "Understand tax implications", "Analyze book-tax differences"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Inventory Valuation",
    keyConcepts: ["FIFO method", "LIFO method", "Weighted average", "Lower of cost or market"],
    learningObjectives: ["Master inventory methods", "Calculate inventory costs", "Understand method impacts", "Apply valuation rules"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Asset Tracker",
    keyConcepts: ["Asset registers", "Depreciation schedules", "Disposal tracking", "Impairment testing"],
    learningObjectives: ["Build asset tracking system", "Create depreciation schedules", "Track asset disposals", "Test for impairment"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Inventory System",
    keyConcepts: ["Inventory tracking", "Cost flow methods", "Perpetual vs periodic", "Reconciliation procedures"],
    learningObjectives: ["Build inventory tracking system", "Implement cost flow methods", "Compare tracking systems", "Create reconciliation procedures"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Tax Strategy Optimization",
    keyConcepts: ["Tax planning", "Timing strategies", "Method selection", "Compliance requirements"],
    learningObjectives: ["Optimize tax strategies", "Plan depreciation timing", "Select optimal methods", "Ensure compliance"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Your System",
    keyConcepts: ["System integration", "Method comparison", "Strategy analysis", "Compliance checking"],
    learningObjectives: ["Integrate tracking systems", "Compare method impacts", "Analyze strategic options", "Verify compliance"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Strategic Implementation",
    keyConcepts: ["Implementation planning", "System maintenance", "Audit preparation", "Continuous monitoring"],
    learningObjectives: ["Plan system implementation", "Maintain tracking systems", "Prepare for audits", "Monitor performance"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Demo Preparation",
    keyConcepts: ["System demonstration", "Professional presentation", "Manager communication", "Technical expertise"],
    learningObjectives: ["Prepare system demonstration", "Practice professional presentation", "Communicate with managers", "Show technical expertise"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Inventory Manager Demo",
    keyConcepts: ["Professional demonstration", "Manager engagement", "System expertise", "Implementation guidance"],
    learningObjectives: ["Demonstrate to inventory managers", "Engage operational managers", "Show system expertise", "Provide implementation guidance"],
    durationEstimateMinutes: 45
  }
]

export default function Unit07Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit07Data} lessons={unit07Lessons} />
    </div>
  )
}