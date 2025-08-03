import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Unit 3: Three-Statement Storyboard",
  description: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
  rationale: "Students will dissect real company financial statements and map narrative threads to specific line items, creating a comprehensive financial story for investors.",
  sequence: 3
}

const unit03Lessons = [
  {
    title: "Introduction: The Financial Story",
    keyConcepts: ["Financial statement interconnections", "Investor narratives", "Company performance analysis", "Financial storytelling"],
    learningObjectives: ["Understand three-statement relationships", "Identify investor information needs", "Analyze company performance stories", "Connect transactions to outcomes"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Income Statement Analysis",
    keyConcepts: ["Revenue recognition", "Expense classification", "Gross profit analysis", "Operating income trends"],
    learningObjectives: ["Master income statement structure", "Analyze revenue and expense patterns", "Calculate key profitability metrics", "Identify performance drivers"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Balance Sheet Dynamics",
    keyConcepts: ["Asset valuation", "Liability management", "Equity structure", "Working capital analysis"],
    learningObjectives: ["Understand balance sheet components", "Analyze asset and liability trends", "Evaluate financial position", "Calculate liquidity ratios"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Cash Flow Integration",
    keyConcepts: ["Operating cash flow", "Investing activities", "Financing activities", "Free cash flow"],
    learningObjectives: ["Master cash flow statement", "Reconcile net income to cash flow", "Analyze cash generation ability", "Evaluate cash management"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Integrated Model Building",
    keyConcepts: ["Three-statement modeling", "Formula linking", "Scenario analysis", "Financial ratios"],
    learningObjectives: ["Build integrated financial model", "Create statement linkages", "Implement scenario planning", "Calculate financial ratios"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Ratio Analysis Dashboard",
    keyConcepts: ["Financial ratio calculations", "Trend analysis", "Benchmarking", "Visual dashboards"],
    learningObjectives: ["Create ratio analysis dashboard", "Build trend visualizations", "Implement benchmarking", "Design investor-ready reports"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Real Company Analysis",
    keyConcepts: ["Public company cases", "Industry analysis", "Competitive positioning", "Investment decisions"],
    learningObjectives: ["Analyze real financial statements", "Compare industry performance", "Evaluate investment potential", "Identify red flags"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Your Storyboard",
    keyConcepts: ["Narrative development", "Data visualization", "Presentation design", "Investor communication"],
    learningObjectives: ["Create financial narrative", "Design compelling visualizations", "Build presentation materials", "Practice investor communication"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Presentation Preparation",
    keyConcepts: ["Board presentation skills", "Executive summary", "Key insights", "Recommendation development"],
    learningObjectives: ["Prepare board presentation", "Develop executive summary", "Identify key insights", "Create actionable recommendations"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Board Room Analysis",
    keyConcepts: ["Professional presentation", "Financial analysis", "Strategic recommendations", "Q&A handling"],
    learningObjectives: ["Present financial analysis to board", "Deliver strategic recommendations", "Handle executive questions", "Demonstrate analytical skills"],
    durationEstimateMinutes: 45
  }
]

export default function Unit03Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit03Data} lessons={unit03Lessons} />
    </div>
  )
}