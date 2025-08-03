import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Unit 4: Data-Driven Café",
  description: "Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?",
  rationale: "Work with real café POS data to create data-driven recommendations for weekend operations optimization.",
  sequence: 4
}

const unit04Lessons = [
  {
    title: "Introduction: The Weekend Rush Challenge",
    keyConcepts: ["POS data analysis", "Weekend operations", "Profit optimization", "Waste management"],
    learningObjectives: ["Understand café operational challenges", "Analyze POS data patterns", "Identify profit optimization opportunities", "Recognize waste reduction importance"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Statistical Analysis Foundations",
    keyConcepts: ["Descriptive statistics", "Data distributions", "Correlation analysis", "Trend identification"],
    learningObjectives: ["Master statistical analysis techniques", "Calculate descriptive statistics", "Identify data patterns", "Perform correlation analysis"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: POS Data Analysis",
    keyConcepts: ["Data import", "Data cleaning", "PivotTable analysis", "Chart creation"],
    learningObjectives: ["Import and clean POS data", "Create analytical PivotTables", "Build informative charts", "Identify sales patterns"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Forecasting Models",
    keyConcepts: ["Trend analysis", "Seasonal patterns", "Forecasting formulas", "Confidence intervals"],
    learningObjectives: ["Build forecasting models", "Identify seasonal trends", "Create demand predictions", "Calculate forecast accuracy"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Optimization Analysis",
    keyConcepts: ["Staffing optimization", "Inventory management", "Cost-benefit analysis", "Constraint modeling"],
    learningObjectives: ["Optimize staffing schedules", "Manage inventory levels", "Analyze cost-benefit trade-offs", "Model operational constraints"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Industry Best Practices",
    keyConcepts: ["Restaurant analytics", "Operations research", "Performance benchmarking", "Technology solutions"],
    learningObjectives: ["Study industry analytics", "Learn optimization techniques", "Benchmark performance", "Evaluate technology solutions"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Recommendations",
    keyConcepts: ["Data-driven decisions", "Business recommendations", "Implementation planning", "ROI calculation"],
    learningObjectives: ["Develop data-driven recommendations", "Create implementation plans", "Calculate return on investment", "Present business cases"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Implementation Strategy",
    keyConcepts: ["Change management", "Performance monitoring", "Continuous improvement", "Success metrics"],
    learningObjectives: ["Plan implementation strategy", "Design monitoring systems", "Create improvement processes", "Define success metrics"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Presentation Preparation",
    keyConcepts: ["Data presentation", "Statistical communication", "Business storytelling", "Visual design"],
    learningObjectives: ["Prepare statistical presentation", "Communicate data insights", "Tell compelling stories", "Design effective visuals"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Café Owner Consultation",
    keyConcepts: ["Professional consulting", "Data-driven recommendations", "Implementation guidance", "Performance tracking"],
    learningObjectives: ["Present to café owners", "Deliver actionable recommendations", "Provide implementation guidance", "Establish performance tracking"],
    durationEstimateMinutes: 45
  }
]

export default function Unit04Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit04Data} lessons={unit04Lessons} />
    </div>
  )
}