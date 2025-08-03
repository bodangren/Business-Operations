import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit06Data = {
  id: "mdrhlhv3y4h703ia2t",
  title: "Unit 6: PriceLab Challenge",
  description: "What pricing strategy hits our profit target while staying competitive in the local market?",
  rationale: "Using live competitor price data and advanced Excel tools, teams will develop data-driven pricing recommendations through CVP analysis and sensitivity modeling.",
  sequence: 6
}

const unit06Lessons = [
  {
    title: "Introduction: The Pricing Dilemma",
    keyConcepts: ["Pricing strategies", "Market competition", "Profit targets", "Customer value"],
    learningObjectives: ["Understand pricing challenges", "Analyze market competition", "Define profit targets", "Assess customer value perception"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Cost-Volume-Profit Analysis",
    keyConcepts: ["Fixed costs", "Variable costs", "Break-even analysis", "Contribution margin"],
    learningObjectives: ["Master CVP analysis techniques", "Calculate break-even points", "Understand contribution margins", "Analyze cost behavior"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Competitive Analysis",
    keyConcepts: ["Market research", "Competitor pricing", "Value proposition", "Price positioning"],
    learningObjectives: ["Conduct market research", "Analyze competitor pricing", "Define value propositions", "Determine price positioning"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: CVP Calculator",
    keyConcepts: ["Break-even formulas", "Sensitivity analysis", "Goal Seek", "Data Tables"],
    learningObjectives: ["Build CVP calculator", "Perform sensitivity analysis", "Use Goal Seek tool", "Create Data Tables"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Pricing Dashboard",
    keyConcepts: ["Pricing scenarios", "Profit optimization", "Market analysis", "Decision support"],
    learningObjectives: ["Create pricing scenarios", "Optimize profit models", "Analyze market data", "Build decision support tools"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Successful Pricing Strategies",
    keyConcepts: ["Industry examples", "Pricing psychology", "Strategic positioning", "Revenue optimization"],
    learningObjectives: ["Study pricing success stories", "Understand pricing psychology", "Learn strategic positioning", "Optimize revenue models"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Your Strategy",
    keyConcepts: ["Strategy development", "Market testing", "Financial modeling", "Risk assessment"],
    learningObjectives: ["Develop pricing strategy", "Test market assumptions", "Build financial models", "Assess pricing risks"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Implementation Planning",
    keyConcepts: ["Strategy implementation", "Performance monitoring", "Price adjustments", "Market response"],
    learningObjectives: ["Plan strategy implementation", "Monitor pricing performance", "Plan price adjustments", "Analyze market response"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Presentation Preparation",
    keyConcepts: ["Executive presentation", "Strategic communication", "Data visualization", "Business justification"],
    learningObjectives: ["Prepare executive presentation", "Communicate strategy effectively", "Visualize pricing data", "Justify business decisions"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Executive Strategy Session",
    keyConcepts: ["Executive presentation", "Strategic recommendations", "Pricing expertise", "Decision support"],
    learningObjectives: ["Present to business executives", "Deliver strategic recommendations", "Demonstrate pricing expertise", "Support executive decisions"],
    durationEstimateMinutes: 45
  }
]

export default function Unit06Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit06Data} lessons={unit06Lessons} />
    </div>
  )
}