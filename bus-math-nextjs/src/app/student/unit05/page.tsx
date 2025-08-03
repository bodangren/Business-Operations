import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "Unit 5: PayDay Simulator",
  description: "How can a small business owner predict payroll cash-outs and still make rent on time?",
  rationale: "Small business owners often struggle with cash flow timing, especially when payroll obligations coincide with other major expenses like rent. Through this unit, you'll build a comprehensive payroll system that helps predict and manage these cash flow challenges.",
  sequence: 5
}

const unit05Lessons = [
  {
    title: "Introduction: Cash Flow Timing Crisis",
    keyConcepts: ["Cash flow challenges", "Payroll obligations", "Fixed expense timing", "Small business finance"],
    learningObjectives: ["Understand cash flow timing issues", "Identify payroll and rent conflicts", "Recognize small business challenges", "Analyze cash management needs"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Payroll Fundamentals",
    keyConcepts: ["Gross pay calculations", "Tax withholdings", "Deduction management", "Net pay computation"],
    learningObjectives: ["Master payroll calculation methods", "Understand tax withholding requirements", "Manage employee deductions", "Calculate accurate net pay"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Cash Flow Forecasting",
    keyConcepts: ["Cash inflow prediction", "Expense timing", "Working capital", "Liquidity management"],
    learningObjectives: ["Forecast cash inflows", "Plan expense timing", "Manage working capital", "Ensure adequate liquidity"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Payroll Calculator",
    keyConcepts: ["Payroll formulas", "Tax calculations", "Employee databases", "Automated processing"],
    learningObjectives: ["Build payroll calculator", "Implement tax calculations", "Create employee databases", "Automate payroll processing"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Cash Flow Dashboard",
    keyConcepts: ["Cash flow projections", "Scenario planning", "Alert systems", "Visual dashboards"],
    learningObjectives: ["Create cash flow projections", "Build scenario models", "Implement alert systems", "Design monitoring dashboards"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Small Business Solutions",
    keyConcepts: ["Industry case studies", "Cash management tools", "Financing options", "Risk mitigation"],
    learningObjectives: ["Study cash management cases", "Evaluate financing options", "Learn risk mitigation strategies", "Analyze solution effectiveness"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Your Simulator",
    keyConcepts: ["System integration", "Stress testing", "Scenario analysis", "Solution validation"],
    learningObjectives: ["Integrate payroll and cash flow systems", "Conduct stress testing", "Perform scenario analysis", "Validate solution accuracy"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Implementation & Monitoring",
    keyConcepts: ["System deployment", "Performance monitoring", "Continuous updates", "Best practices"],
    learningObjectives: ["Plan system deployment", "Monitor system performance", "Implement continuous updates", "Follow best practices"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Demo Preparation",
    keyConcepts: ["System demonstration", "Professional presentation", "HR communication", "Technical explanation"],
    learningObjectives: ["Prepare system demonstration", "Practice professional presentation", "Communicate with HR professionals", "Explain technical features"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: HR Professional Demo",
    keyConcepts: ["Professional demonstration", "HR audience engagement", "Payroll expertise", "Implementation guidance"],
    learningObjectives: ["Demonstrate to HR professionals", "Engage payroll experts", "Show system expertise", "Provide implementation guidance"],
    durationEstimateMinutes: 45
  }
]

export default function Unit05Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit05Data} lessons={unit05Lessons} />
    </div>
  )
}