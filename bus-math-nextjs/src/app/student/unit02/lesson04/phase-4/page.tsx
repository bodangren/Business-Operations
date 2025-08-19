import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Rocket, TrendingUp, Zap, Trophy, Brain } from "lucide-react"
import DragAndDrop from "@/components/exercises/DragAndDrop"
import BreakEvenComponents from "@/components/drag-drop-exercises/BreakEvenComponents"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[3]

export default function Phase4Page() {
  const excelFormulaItems = [
    {
      id: "1",
      content: "Sarah needs to calculate total monthly revenue from all client transactions automatically",
      matchId: "2",
      hint: "This scenario requires summing values based on a specific condition"
    },
    {
      id: "2",
      content: "=SUMIF(TransactionTable[Type],\"Revenue\",TransactionTable[Amount])",
      matchId: "1"
    },
    {
      id: "3",
      content: "TechStart wants to know how many transactions came from their biggest client this month",
      matchId: "4",
      hint: "This scenario needs to count occurrences of a specific value"
    },
    {
      id: "4",
      content: "=COUNTIF(TransactionTable[Client],\"FitnessStudio\")",
      matchId: "3"
    },
    {
      id: "5",
      content: "Sarah's mentor wants to see the average revenue per transaction to measure deal quality",
      matchId: "6",
      hint: "This scenario calculates an average based on specific criteria"
    },
    {
      id: "6",
      content: "=AVERAGEIF(TransactionTable[Type],\"Revenue\",TransactionTable[Amount])",
      matchId: "5"
    },
    {
      id: "7",
      content: "The system should automatically flag transactions over $1,000 as 'Major Sales' for special attention",
      matchId: "8",
      hint: "This scenario requires testing multiple conditions to categorize data"
    },
    {
      id: "8",
      content: "=IF(AND(TransactionTable[Amount]>1000,TransactionTable[Type]=\"Revenue\"),\"Major Sale\",\"Regular\")",
      matchId: "7"
    },
    {
      id: "9",
      content: "Calculate the total value of all expense transactions for budget variance analysis",
      matchId: "10",
      hint: "Similar to revenue tracking but for a different transaction type"
    },
    {
      id: "10",
      content: "=SUMIF(TransactionTable[Type],\"Expense\",TransactionTable[Amount])",
      matchId: "9"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Advanced Excel Tables Mastery Challenges
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Push your Excel Tables skills to professional levels with advanced scenarios and complex automation challenges.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Challenge Scenarios */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Brain className="h-6 w-6" />
                Professional Challenge Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-indigo-800">
                <p>
                  These advanced scenarios mirror real-world situations where professionals use Excel Tables 
                  and SUMIF functions to solve complex business problems. Choose one or work through all three.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <Badge className="bg-blue-200 text-blue-800">Scenario A</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-blue-900 mb-2">Multi-Client Revenue Analysis</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Create a dashboard that automatically tracks revenue by client, service type, and month 
                      using multiple SUMIF functions and Excel Tables.
                    </p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• 5+ clients with varying service packages</li>
                      <li>• Automatic client profitability ranking</li>
                      <li>• Month-over-month growth calculations</li>
                      <li>• Visual alerts for underperforming clients</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Scenario B</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Automated Expense Categorization</h4>
                    <p className="text-sm text-green-800 mb-3">
                      Build a system that automatically categorizes expenses into tax-deductible categories 
                      using nested IF statements and SUMIF functions.
                    </p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• 10+ expense categories with tax implications</li>
                      <li>• Automatic tax deduction calculations</li>
                      <li>• Quarterly reporting summaries</li>
                      <li>• Exception reporting for unusual expenses</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-purple-600" />
                      <Badge className="bg-purple-200 text-purple-800">Scenario C</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-purple-900 mb-2">Investment-Ready Financial Model</h4>
                    <p className="text-sm text-purple-800 mb-3">
                      Create a comprehensive financial model with multiple tables that automatically generates 
                      investor-ready reports and cash flow projections.
                    </p>
                    <ul className="text-xs text-purple-700 space-y-1">
                      <li>• 3+ linked Excel Tables</li>
                      <li>• Automated financial statement generation</li>
                      <li>• Scenario analysis capabilities</li>
                      <li>• Professional formatting and documentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Advanced Interactive Exercises */}
          <DragAndDrop
            title="Excel Tables Formula Mastery"
            description="Match real business scenarios with the Excel formulas that solve them."
            items={excelFormulaItems}
            leftColumnTitle="Business Scenarios"
            rightColumnTitle="Excel Formulas"
            showHints={true}
            shuffleItems={true}
          />

          {/* Excel Formula Challenges */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Advanced Formula Construction Challenges</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-yellow-800">
                <p>
                  Test your advanced Excel Tables skills with these formula construction challenges. 
                  Each builds on the foundation you've learned while adding professional complexity.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold text-yellow-900 mb-4">Challenge 1: Dynamic Client Ranking</h4>
                  <p className="text-yellow-800 mb-3">
                    Create a formula that automatically ranks clients by total revenue and highlights the top 3 performers.
                  </p>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-sm text-yellow-700 mb-2"><strong>Hint:</strong> Combine SUMIF, RANK, and conditional formatting</p>
                    <code className="text-xs font-mono text-gray-700 bg-gray-100 p-2 rounded block">
                      =RANK(SUMIF(TransactionTable[Client],ClientName,TransactionTable[Amount]),ClientRevenues,0)
                    </code>
                  </div>
                </div>

                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold text-yellow-900 mb-4">Challenge 2: Automated Month-End Accruals</h4>
                  <p className="text-yellow-800 mb-3">
                    Build a system that automatically calculates accrued revenue for ongoing projects based on percentage completion.
                  </p>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-sm text-yellow-700 mb-2"><strong>Hint:</strong> Use SUMPRODUCT with multiple criteria</p>
                    <code className="text-xs font-mono text-gray-700 bg-gray-100 p-2 rounded block">
                      =SUMPRODUCT(ProjectTable[TotalValue]*ProjectTable[PercentComplete]/100)
                    </code>
                  </div>
                </div>

                <div className="bg-yellow-100 p-6 rounded-lg border border-yellow-300">
                  <h4 className="font-semibold text-yellow-900 mb-4">Challenge 3: Error-Proof Data Validation</h4>
                  <p className="text-yellow-800 mb-3">
                    Create a validation system that automatically flags potential data entry errors using logical functions.
                  </p>
                  <div className="bg-white p-3 rounded border border-yellow-300">
                    <p className="text-sm text-yellow-700 mb-2"><strong>Hint:</strong> Combine IF, ISNUMBER, and conditional formatting</p>
                    <code className="text-xs font-mono text-gray-700 bg-gray-100 p-2 rounded block">
                      =IF(OR(ISNUMBER(A2)=FALSE,A2&lt;0,A2&gt;10000),"ERROR","OK")
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Break-Even Analysis Integration */}
          <BreakEvenComponents />

          {/* Self-Assessment Checklist */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Professional Mastery Self-Assessment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  Use this checklist to verify you've achieved professional-level Excel Tables mastery. 
                  Each item represents a skill that businesses expect from financial automation specialists.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-900">✅ Technical Skills Checklist:</h4>
                  <div className="space-y-2">
                    {[
                      "Create Excel Tables that auto-expand with new data",
                      "Write SUMIF functions with structured references",
                      "Build nested IF statements for complex logic",
                      "Use COUNTIF and AVERAGEIF for analysis",
                      "Create and manage named ranges effectively",
                      "Implement error-checking and data validation",
                      "Design professional table layouts and formatting"
                    ].map((skill, index) => (
                      <label key={index} className="flex items-start gap-3 text-sm text-green-800">
                        <input type="checkbox" className="mt-1 rounded" />
                        <span>{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-green-900">💼 Business Application Checklist:</h4>
                  <div className="space-y-2">
                    {[
                      "Automate month-end closing procedures",
                      "Create investor-ready financial dashboards", 
                      "Build scalable systems for business growth",
                      "Implement professional error-checking protocols",
                      "Design user-friendly interfaces for non-experts",
                      "Document formulas and assumptions clearly",
                      "Test systems thoroughly with sample data"
                    ].map((skill, index) => (
                      <label key={index} className="flex items-start gap-3 text-sm text-green-800">
                        <input type="checkbox" className="mt-1 rounded" />
                        <span>{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded border border-green-300">
                <p className="text-sm text-green-700">
                  <strong>Professional Target:</strong> Achieving 12+ checked items indicates you're ready for 
                  advanced automation work and can contribute meaningfully to business process improvements.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Creative Application */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Rocket className="h-6 w-6" />
                Creative Application: Design Your Innovation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  Now that you've mastered the technical skills, it's time to innovate. Design an Excel Tables 
                  solution for a business problem you've observed or experienced personally.
                </p>
              </div>

              <div className="bg-purple-100 p-6 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-900 mb-4">Innovation Framework:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-purple-900 mb-2">1. Identify the Problem:</h5>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• What manual process takes too much time?</li>
                      <li>• Where do errors commonly occur?</li>
                      <li>• What data needs better organization?</li>
                      <li>• How could automation add value?</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-purple-900 mb-2">2. Design the Solution:</h5>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• What Excel Tables would you need?</li>
                      <li>• Which SUMIF functions would automate calculations?</li>
                      <li>• How would you ensure data accuracy?</li>
                      <li>• What would make it user-friendly?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-purple-300">
                <h5 className="font-semibold text-purple-900 mb-2">Example Innovations Students Have Created:</h5>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <strong>Sports Team Budget Tracker:</strong> Automatically allocates expenses across different sports programs</li>
                  <li>• <strong>Family Chore Payment System:</strong> Tracks completed chores and calculates automatic allowance payments</li>
                  <li>• <strong>Student Club Event Planner:</strong> Manages event costs, ticket sales, and profit calculations</li>
                  <li>• <strong>Small Business Inventory Manager:</strong> Tracks stock levels and automatically calculates reorder points</li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-sm text-purple-700 font-medium">
                  Your innovation could become a real tool that solves actual problems for people you care about!
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}