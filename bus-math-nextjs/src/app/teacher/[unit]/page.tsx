import { notFound } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Clock, Users, Target, CheckCircle, ArrowRight } from "lucide-react"

interface TeacherUnitPageProps {
  params: Promise<{
    unit: string
  }>
}

const VALID_UNITS = [
  'unit01', 'unit02', 'unit03', 'unit04',
  'unit05', 'unit06', 'unit07', 'unit08'
]

// Unit data mapping from MCP server
const UNIT_DATA = {
  unit01: {
    title: "Unit 1: Smart Ledger Launch",
    description: "Your team represents a startup seeking angel investment. Investors will scrutinize your financial controls before writing a check. You must build a self-auditing ledger system that demonstrates you can maintain \"clean books\" from day one. The primary deliverable is a 4-minute investor pitch and a live Excel workbook demo showing self-auditing features.",
    rationale: "Early-stage startup bookkeeping is often chaotic and unsustainable, creating significant business risk. This unit is designed to teach founders the importance of building a trustworthy, organized financial system ('clean books') from day one. This isn't just for investors or accountants; it's a critical tool for founders to gain clarity on their financial health, make decisions based on facts, and build confidence in their venture.",
    duration: "2 weeks (10 lessons)",
    audience: "Angel investors",
    deliverable: "4-minute investor pitch and live Excel workbook demo",
    lessons: [
      { number: 1, title: "Introduction: Sarah's Challenge", duration: 50 },
      { number: 2, title: "Core Concepts: The Accounting Equation", duration: 50 },
      { number: 3, title: "Core Concepts: Debit & Credit Rules", duration: 50 },
      { number: 4, title: "Excel Model: Tables & SUMIF Functions", duration: 50 },
      { number: 5, title: "Excel Model: Conditional Formatting & Error Checking", duration: 50 },
      { number: 6, title: "Examples: Professional Ledger Applications", duration: 50 },
      { number: 7, title: "Exercises: Independent Ledger Construction", duration: 50 },
      { number: 8, title: "Summary: Integration & System Refinement", duration: 50 },
      { number: 9, title: "Project Work: Presentation Preparation & Rehearsal", duration: 50 },
      { number: 10, title: "Presentations: Investor Showcase & Reflection", duration: 50 }
    ]
  },
  unit02: {
    title: "Unit 2: Month-End Wizard",
    description: "Transform month-end closing from a 5-day nightmare into a 2-hour automated process. Your team will build an Excel-based \"Month-End Wizard\" that automates journal entries, reconciliations, and financial statement preparation. Present your solution to a panel of CFOs who need to close their books faster without sacrificing accuracy.",
    rationale: "Month-end closing is one of the most time-consuming and error-prone processes in accounting. Many small businesses spend 3-5 days each month manually preparing financial statements, creating cash flow problems and delayed decision-making. This unit teaches students to leverage Excel's automation features (macros, pivot tables, advanced formulas) to create systematic, repeatable processes that reduce closing time while improving accuracy.",
    duration: "2 weeks (10 lessons)",
    audience: "CFOs and Finance Managers",
    deliverable: "Month-End Wizard Excel system and CFO presentation",
    lessons: [
      { number: 1, title: "Challenge Introduction: The 5-Day Problem", duration: 50 },
      { number: 2, title: "Automation Concepts: Macros & VBA Basics", duration: 50 },
      { number: 3, title: "Pivot Tables for Reconciliation", duration: 50 },
      { number: 4, title: "Advanced Formulas for Journal Entries", duration: 50 },
      { number: 5, title: "Error Detection & Validation Systems", duration: 50 },
      { number: 6, title: "Financial Statement Automation", duration: 50 },
      { number: 7, title: "Testing & Quality Assurance", duration: 50 },
      { number: 8, title: "System Integration & Documentation", duration: 50 },
      { number: 9, title: "Presentation Preparation", duration: 50 },
      { number: 10, title: "CFO Panel Presentations", duration: 50 }
    ]
  },
  unit03: {
    title: "Unit 3: Three-Statement Storyboard",
    description: "Create an integrated financial model connecting Income Statement, Balance Sheet, and Cash Flow Statement. Your team will build a \"living storyboard\" that shows how business decisions ripple through all three statements. Present your model to venture capitalists who need to understand your business's financial story at a glance.",
    rationale: "Many entrepreneurs can create individual financial statements but struggle to understand how they interconnect. A change in revenue doesn't just affect the income statement—it impacts cash flow timing, working capital needs, and balance sheet structure. This unit teaches students to think systematically about financial statement relationships, preparing them to build integrated financial models that tell compelling business stories to investors and stakeholders.",
    duration: "2 weeks (10 lessons)",
    audience: "Venture Capitalists",
    deliverable: "Integrated financial model and VC presentation",
    lessons: [
      { number: 1, title: "The Financial Story Challenge", duration: 50 },
      { number: 2, title: "Income Statement Fundamentals", duration: 50 },
      { number: 3, title: "Balance Sheet Connections", duration: 50 },
      { number: 4, title: "Cash Flow Statement Links", duration: 50 },
      { number: 5, title: "Model Integration Techniques", duration: 50 },
      { number: 6, title: "Scenario Analysis Tools", duration: 50 },
      { number: 7, title: "Sensitivity Analysis", duration: 50 },
      { number: 8, title: "Dashboard Creation", duration: 50 },
      { number: 9, title: "Investor Presentation Prep", duration: 50 },
      { number: 10, title: "VC Pitch Competition", duration: 50 }
    ]
  },
  unit04: {
    title: "Unit 4: Data-Driven Café",
    description: "Transform a struggling local café using statistical analysis and forecasting. Your team will analyze sales data, identify patterns, build predictive models, and recommend operational improvements. Present your findings to the café owner and local business development council with specific, data-backed recommendations for increasing profitability.",
    rationale: "Small businesses often make decisions based on intuition rather than data, missing opportunities for optimization and growth. This unit teaches students to apply statistical analysis and forecasting techniques to real business problems, using Excel's Analysis ToolPak and advanced functions. Students learn to translate data insights into actionable business recommendations, developing both technical skills and business acumen.",
    duration: "2 weeks (10 lessons)",
    audience: "Café owner and Business Development Council",
    deliverable: "Data analysis report and business improvement recommendations",
    lessons: [
      { number: 1, title: "Café Crisis: Data to the Rescue", duration: 50 },
      { number: 2, title: "Data Collection & Cleaning", duration: 50 },
      { number: 3, title: "Descriptive Statistics Analysis", duration: 50 },
      { number: 4, title: "Trend Analysis & Seasonality", duration: 50 },
      { number: 5, title: "Forecasting Models", duration: 50 },
      { number: 6, title: "Correlation & Regression Analysis", duration: 50 },
      { number: 7, title: "Profit Optimization Models", duration: 50 },
      { number: 8, title: "Recommendation Development", duration: 50 },
      { number: 9, title: "Business Case Preparation", duration: 50 },
      { number: 10, title: "Stakeholder Presentations", duration: 50 }
    ]
  },
  unit05: {
    title: "Unit 5: PayDay Simulator",
    description: "Build a comprehensive payroll system that handles multiple pay structures, tax calculations, and cash flow management. Your team will create a \"PayDay Simulator\" that processes employee payments while maintaining compliance and optimizing cash flow. Present your system to HR managers and small business owners who need reliable, accurate payroll solutions.",
    rationale: "Payroll is one of the most complex and critical functions in any business, involving federal and provincial tax regulations, CPP/EI calculations, and cash flow management. Errors can result in significant penalties and employee dissatisfaction. This unit teaches students to build systematic, compliance-focused payroll systems using Excel's advanced features, preparing them to understand the financial and legal complexities of employee compensation.",
    duration: "2 weeks (10 lessons)",
    audience: "HR managers and small business owners",
    deliverable: "PayDay Simulator system and compliance presentation",
    lessons: [
      { number: 1, title: "Payroll Complexity Challenge", duration: 50 },
      { number: 2, title: "Tax Regulations & Compliance", duration: 50 },
      { number: 3, title: "CPP & EI Calculations", duration: 50 },
      { number: 4, title: "Multiple Pay Structure Handling", duration: 50 },
      { number: 5, title: "Deduction Management Systems", duration: 50 },
      { number: 6, title: "Cash Flow Impact Analysis", duration: 50 },
      { number: 7, title: "Error Detection & Validation", duration: 50 },
      { number: 8, title: "Reporting & Documentation", duration: 50 },
      { number: 9, title: "System Testing & Validation", duration: 50 },
      { number: 10, title: "HR Professional Presentations", duration: 50 }
    ]
  },
  unit06: {
    title: "Unit 6: PriceLab Challenge",
    description: "Develop optimal pricing strategies using Cost-Volume-Profit analysis and competitive intelligence. Your team will build a \"PriceLab\" system that calculates break-even points, analyzes price sensitivity, and models different pricing scenarios. Present your pricing recommendations to entrepreneurs and product managers who need to maximize profitability while remaining competitive.",
    rationale: "Pricing is both an art and a science, requiring deep understanding of cost structures, market dynamics, and customer psychology. Many businesses struggle with pricing decisions, either leaving money on the table or pricing themselves out of the market. This unit teaches students to use quantitative analysis to inform pricing strategies, building Excel models that incorporate fixed/variable costs, break-even analysis, and scenario planning.",
    duration: "2 weeks (10 lessons)",
    audience: "Entrepreneurs and product managers",
    deliverable: "PriceLab system and pricing strategy recommendations",
    lessons: [
      { number: 1, title: "Pricing Strategy Challenge", duration: 50 },
      { number: 2, title: "Cost Structure Analysis", duration: 50 },
      { number: 3, title: "Break-Even Point Calculations", duration: 50 },
      { number: 4, title: "Price Sensitivity Analysis", duration: 50 },
      { number: 5, title: "Competitive Intelligence Gathering", duration: 50 },
      { number: 6, title: "Scenario Modeling Tools", duration: 50 },
      { number: 7, title: "Profit Optimization Models", duration: 50 },
      { number: 8, title: "Market Testing Strategies", duration: 50 },
      { number: 9, title: "Strategy Recommendation Development", duration: 50 },
      { number: 10, title: "Entrepreneur Pitch Sessions", duration: 50 }
    ]
  },
  unit07: {
    title: "Unit 7: Asset & Inventory Tracker",
    description: "Master depreciation methods and inventory valuation systems for tax optimization and financial reporting. Your team will build an \"Asset & Inventory Tracker\" that manages depreciation schedules, tracks inventory costs (FIFO/LIFO), and optimizes tax strategies. Present your system to CPAs and business owners who need to maximize tax benefits while maintaining accurate financial records.",
    rationale: "Asset management and inventory valuation have significant impacts on taxes, cash flow, and financial reporting. Different depreciation methods and inventory costing approaches can dramatically affect reported profits and tax obligations. This unit teaches students to understand these complex accounting concepts and build Excel systems that optimize financial outcomes while maintaining compliance with accounting standards.",
    duration: "2 weeks (10 lessons)",
    audience: "CPAs and business owners",
    deliverable: "Asset & Inventory Tracker system and tax optimization presentation",
    lessons: [
      { number: 1, title: "Asset Management Challenge", duration: 50 },
      { number: 2, title: "Depreciation Methods Overview", duration: 50 },
      { number: 3, title: "Straight-Line & Accelerated Depreciation", duration: 50 },
      { number: 4, title: "Inventory Valuation: FIFO vs LIFO", duration: 50 },
      { number: 5, title: "Tax Strategy Implications", duration: 50 },
      { number: 6, title: "Automated Tracking Systems", duration: 50 },
      { number: 7, title: "Financial Reporting Impact", duration: 50 },
      { number: 8, title: "Compliance & Documentation", duration: 50 },
      { number: 9, title: "Tax Optimization Strategies", duration: 50 },
      { number: 10, title: "CPA Professional Presentations", duration: 50 }
    ]
  },
  unit08: {
    title: "Unit 8: Year-1 Startup Model",
    description: "Create a comprehensive first-year financial model integrating all previous unit skills. Your team will build a complete startup financial plan including revenue projections, expense budgets, cash flow management, and scenario analysis. Present your model to a panel of venture capitalists and angel investors in a formal pitch competition, demonstrating investment readiness and financial sophistication.",
    rationale: "This capstone unit integrates all previous learning into a comprehensive financial model that demonstrates mastery of business mathematics and Excel proficiency. Students apply bookkeeping principles, automation techniques, integrated statements, statistical analysis, payroll systems, pricing strategies, and asset management to create investor-ready financial projections. The unit culminates in authentic presentations to real investors, providing genuine validation of student learning and preparation for post-secondary business programs.",
    duration: "2 weeks (10 lessons)",
    audience: "Venture capitalists and angel investors",
    deliverable: "Comprehensive startup financial model and investor pitch competition",
    lessons: [
      { number: 1, title: "Capstone Challenge: Investor-Ready Model", duration: 50 },
      { number: 2, title: "Revenue Projection Models", duration: 50 },
      { number: 3, title: "Expense Budget Integration", duration: 50 },
      { number: 4, title: "Cash Flow Management", duration: 50 },
      { number: 5, title: "Scenario Analysis & Sensitivity", duration: 50 },
      { number: 6, title: "Financial Statement Integration", duration: 50 },
      { number: 7, title: "Model Validation & Testing", duration: 50 },
      { number: 8, title: "Investor Presentation Development", duration: 50 },
      { number: 9, title: "Pitch Rehearsal & Refinement", duration: 50 },
      { number: 10, title: "Investor Pitch Competition", duration: 50 }
    ]
  }
}

export default async function TeacherUnitPage({ params }: TeacherUnitPageProps) {
  const { unit } = await params

  // Validate unit parameter
  if (!VALID_UNITS.includes(unit)) {
    notFound()
  }

  const unitData = UNIT_DATA[unit as keyof typeof UNIT_DATA]
  if (!unitData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="outline" className="text-sm">
              Teacher Resources
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {unitData.duration}
            </Badge>
          </div>
          <h1 className="text-4xl font-bold mb-4">{unitData.title}</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {unitData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Unit Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Unit Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Educational Rationale</h4>
                  <p className="text-sm text-muted-foreground">
                    {unitData.rationale}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Target Audience
                    </h4>
                    <p className="text-sm text-muted-foreground">{unitData.audience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Primary Deliverable
                    </h4>
                    <p className="text-sm text-muted-foreground">{unitData.deliverable}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lesson Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Lesson Plans ({unitData.lessons.length} lessons)
                </CardTitle>
                <CardDescription>
                  Click on any lesson to view detailed teacher instructions, objectives, and activities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {unitData.lessons.map((lesson) => (
                    <Link 
                      key={lesson.number} 
                      href={`/teacher/${unit}/lesson-${String(lesson.number).padStart(2, '0')}`}
                    >
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors group">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <Badge variant="outline" className="text-xs">
                              Lesson {lesson.number}
                            </Badge>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              {lesson.title}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          {lesson.duration} min
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href={`/units/${unit}`}>
                  <Button className="w-full" variant="default">
                    View Student Experience
                  </Button>
                </Link>
                <Link href={`/teacher/${unit}/lesson-01`}>
                  <Button className="w-full" variant="outline">
                    Start with Lesson 1
                  </Button>
                </Link>
                <Button className="w-full" variant="outline" disabled>
                  Download Unit Resources
                  <Badge variant="secondary" className="ml-2 text-xs">
                    Coming Soon
                  </Badge>
                </Button>
              </CardContent>
            </Card>

            {/* Unit Navigation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Other Units</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((unitNum) => {
                  const unitKey = `unit${String(unitNum).padStart(2, '0')}` as keyof typeof UNIT_DATA
                  const isCurrentUnit = unitKey === unit
                  
                  return (
                    <Link key={unitNum} href={`/teacher/${unitKey}`}>
                      <Button 
                        variant={isCurrentUnit ? "default" : "ghost"} 
                        className="w-full justify-start text-sm"
                        disabled={unitNum > 1} // Only Unit 1 is implemented
                      >
                        Unit {unitNum}
                        {unitNum > 1 && (
                          <Badge variant="secondary" className="ml-auto text-xs">
                            Coming Soon
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  )
                })}
              </CardContent>
            </Card>

            {/* Implementation Notes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Implementation Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">PBL Focus</h4>
                  <p className="text-blue-800 dark:text-blue-200 text-xs">
                    This unit emphasizes authentic problem-solving with real business scenarios.
                  </p>
                </div>
                
                <div className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                  <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">Excel Skills</h4>
                  <p className="text-green-800 dark:text-green-200 text-xs">
                    Students build proficiency with Tables, SUMIF functions, and conditional formatting.
                  </p>
                </div>
                
                <div className="p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
                  <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-1">Assessment</h4>
                  <p className="text-amber-800 dark:text-amber-200 text-xs">
                    Final presentations to authentic audience (angel investors) for real-world validation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return VALID_UNITS.map((unit) => ({
    unit: unit,
  }))
}

export async function generateMetadata({ params }: TeacherUnitPageProps) {
  const { unit } = await params
  const unitData = UNIT_DATA[unit as keyof typeof UNIT_DATA]
  
  return {
    title: `Teacher: ${unitData?.title || unit.toUpperCase()} | Math for Business Operations`,
    description: `Teacher resources and lesson plans for ${unitData?.title || unit} - Math for Business Operations curriculum`,
  }
}