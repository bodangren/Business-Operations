import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"

// Unit 1 data - extracted from MCP curriculum database
const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  description: "Your team represents a startup seeking angel investment. Investors will scrutinize your financial controls before writing a check. You must build a self-auditing ledger system that demonstrates you can maintain \"clean books\" from day one. The primary deliverable is a 4-minute investor pitch and a live Excel workbook demo showing self-auditing features.",
  rationale: "Early-stage startup bookkeeping is often chaotic and unsustainable, creating significant business risk. This unit is designed to teach founders the importance of building a trustworthy, organized financial system ('clean books') from day one. This isn't just for investors or accountants; it's a critical tool for founders to gain clarity on their financial health, make decisions based on facts, and build confidence in their venture.",
  sequence: 1
}

const unit01Lessons = [
  {
    title: "Introduction: Sarah's Challenge",
    keyConcepts: [
      "TechStart Solutions business model and client services",
      "Manual vs. digital record-keeping challenges",
      "Business transaction categorization",
      "Financial credibility and investor expectations"
    ],
    learningObjectives: [
      "Identify the key components of Sarah's business model and services at TechStart Solutions",
      "Recognize the challenges of manual record-keeping for small business financial tracking",
      "Explain why accurate financial records are essential for investor confidence and business credibility",
      "Connect business transaction categorization to the broader challenge of ledger organization"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: The Accounting Equation",
    keyConcepts: [
      "The accounting equation (Assets = Liabilities + Equity)",
      "Transaction analysis using TechStart examples",
      "Asset, liability, and equity identification",
      "Mathematical balance verification"
    ],
    learningObjectives: [
      "Apply the accounting equation (Assets = Liabilities + Equity) to analyze TechStart Solutions transactions",
      "Identify how business transactions affect each component of the accounting equation",
      "Explain the universal nature of the accounting equation across all business types",
      "Connect the accounting equation to Sarah's specific business context and transaction examples"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Core Concepts: Debit & Credit Rules",
    keyConcepts: [
      "Debit and credit rules by account type",
      "T-account structure and usage",
      "Journal entry construction",
      "Transaction recording verification",
      "TechStart chart of accounts"
    ],
    learningObjectives: [
      "Master debit and credit rules for assets, liabilities, equity, revenue, and expense accounts",
      "Record TechStart business transactions using proper debit/credit mechanics",
      "Verify that debits equal credits for each journal entry",
      "Create T-accounts to visualize the impact of business transactions"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Tables & SUMIF Functions",
    keyConcepts: [
      "Excel Table creation and formatting",
      "Structured references vs. cell references",
      "SUMIF function syntax and applications",
      "Dynamic formula expansion",
      "Professional ledger structure"
    ],
    learningObjectives: [
      "Create Excel Tables with proper headers and structured references for TechStart transaction data",
      "Build SUMIF functions to calculate account totals automatically from transaction records",
      "Demonstrate how Excel Tables provide professional structure needed for investor presentations",
      "Test and validate that SUMIF formulas update automatically when new transactions are added"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Excel Model: Conditional Formatting & Error Checking",
    keyConcepts: [
      "Conditional formatting rule creation",
      "Trial balance validation formulas",
      "Visual error detection systems",
      "Self-auditing ledger principles",
      "Color-coded feedback systems"
    ],
    learningObjectives: [
      "Create conditional formatting rules to highlight potential ledger errors visually",
      "Build trial balance auto-check formula using ABS(SUM(Debits) - SUM(Credits)) logic",
      "Implement visual error detection system with red/yellow/green color coding",
      "Test self-auditing features by introducing intentional errors and verifying detection"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Examples: Professional Ledger Applications",
    keyConcepts: [
      "Professional accounting standards",
      "Investor-ready financial controls",
      "Self-auditing system benefits",
      "Manual vs. automated comparison",
      "Business presentation standards"
    ],
    learningObjectives: [
      "Analyze professional ledger standards that build investor confidence",
      "Evaluate how self-auditing features prevent common startup financial mistakes",
      "Compare manual vs. automated accounting systems for time savings and accuracy",
      "Identify specific features that make a ledger presentation-ready for investors"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Exercises: Independent Ledger Construction",
    keyConcepts: [
      "Independent application of all learned skills",
      "Complete system integration",
      "Peer review and feedback",
      "Professional assessment criteria application"
    ],
    learningObjectives: [
      "Independently construct a complete self-auditing ledger system for a chosen TechStart client",
      "Integrate Excel Tables, SUMIF functions, and error-checking features into one functional system",
      "Demonstrate mastery by successfully processing a full transaction dataset",
      "Provide constructive peer feedback using professional assessment criteria"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Summary: Integration & System Refinement",
    keyConcepts: [
      "System integration and testing",
      "Professional business formatting",
      "User documentation creation",
      "Investor pitch planning",
      "Presentation preparation"
    ],
    learningObjectives: [
      "Integrate all ledger components (Tables, SUMIF, error-checking) into one seamless system",
      "Apply professional business formatting standards for investor-ready presentation",
      "Create clear documentation and user instructions for the self-auditing system",
      "Plan and outline a compelling 4-minute investor pitch presentation"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Project Work: Presentation Preparation & Rehearsal",
    keyConcepts: [
      "Investor pitch structure and format",
      "Business communication techniques",
      "Technical demonstration skills",
      "Presentation timing and pacing",
      "Constructive feedback protocols"
    ],
    learningObjectives: [
      "Structure an effective investor pitch using Problem-Solution-Demonstration-Benefits format",
      "Practice explaining technical Excel features using business-appropriate language",
      "Demonstrate live Excel functionality within a 4-minute presentation timeframe",
      "Provide and receive constructive feedback on presentation effectiveness"
    ],
    durationEstimateMinutes: 45
  },
  {
    title: "Presentations: Investor Showcase & Reflection",
    keyConcepts: [
      "Professional presentation delivery",
      "Authentic audience engagement",
      "Technical demonstration mastery",
      "Learning reflection and analysis",
      "Future skill application"
    ],
    learningObjectives: [
      "Deliver a professional 4-minute investor pitch to authentic business audience",
      "Demonstrate live Excel self-auditing features and explain their investor benefits",
      "Respond confidently to panel questions about system accuracy and reliability",
      "Reflect on learning journey and connect acquired skills to future business applications"
    ],
    durationEstimateMinutes: 45
  }
]

export default function Unit01Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit01Data} lessons={unit01Lessons} />
    </div>
  )
}