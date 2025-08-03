import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Unit 2: Month-End Wizard",
  description: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
  rationale: "Students will experience the real cost of slow month-end closes and learn to build automated solutions that maintain accounting accuracy while dramatically improving efficiency.",
  sequence: 2
}

const unit02Lessons = [
  {
    title: "Introduction: The Month-End Crisis",
    keyConcepts: ["Month-end closing procedures", "Time efficiency analysis", "GAAP compliance requirements", "Automation opportunities"],
    learningObjectives: ["Identify time-consuming month-end tasks", "Analyze the cost of manual processes", "Recognize automation opportunities", "Understand GAAP accuracy requirements"],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Reconciliation Fundamentals",
    keyConcepts: ["Bank reconciliation", "Account reconciliation", "Variance analysis", "Error detection methods"],
    learningObjectives: ["Master bank reconciliation procedures", "Build systematic reconciliation workflows", "Identify and resolve common discrepancies", "Create error detection protocols"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Automated Reconciliation",
    keyConcepts: ["VLOOKUP/XLOOKUP functions", "Conditional logic", "Data validation", "Automated matching"],
    learningObjectives: ["Build automated reconciliation tools", "Create VLOOKUP-based matching systems", "Implement data validation rules", "Test reconciliation accuracy"],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Dashboard Creation",
    keyConcepts: ["PivotTables", "Dynamic charts", "KPI dashboards", "Real-time reporting"],
    learningObjectives: ["Create month-end dashboard", "Build dynamic PivotTable reports", "Design KPI visualizations", "Automate report generation"],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Professional Automation",
    keyConcepts: ["Industry best practices", "Automation case studies", "Time savings analysis", "Quality control"],
    learningObjectives: ["Analyze professional automation examples", "Evaluate time savings potential", "Identify quality control measures", "Compare manual vs automated processes"],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Building Your Wizard",
    keyConcepts: ["System integration", "Process documentation", "User testing", "Performance metrics"],
    learningObjectives: ["Integrate all automation components", "Document system procedures", "Conduct user testing", "Measure performance improvements"],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Implementation Strategy",
    keyConcepts: ["Change management", "Training protocols", "System maintenance", "Continuous improvement"],
    learningObjectives: ["Plan implementation strategy", "Develop training materials", "Create maintenance schedules", "Design improvement processes"],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Demo Preparation",
    keyConcepts: ["Presentation skills", "Technical demonstration", "Business impact", "ROI calculation"],
    learningObjectives: ["Prepare automation demonstration", "Calculate time savings ROI", "Practice technical presentation", "Prepare for Q&A sessions"],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Innovation Fair Demo",
    keyConcepts: ["Professional demonstration", "Audience engagement", "Innovation showcase", "Learning reflection"],
    learningObjectives: ["Demonstrate automation solution", "Engage entrepreneur audience", "Showcase innovation impact", "Reflect on automation benefits"],
    durationEstimateMinutes: 45
  }
]

export default function Unit02Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit02Data} lessons={unit02Lessons} />
    </div>
  )
}