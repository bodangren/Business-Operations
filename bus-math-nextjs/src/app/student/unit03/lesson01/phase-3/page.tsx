import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, TrendingUp, Calculator, FileSpreadsheet, Target } from "lucide-react"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { FinancialStatementMatching } from "@/components/drag-drop-exercises/FinancialStatementMatching"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases[2] // Guided Practice phase

  const vocabularyItems = [
    { id: '1', content: 'Revenue', matchId: '2', hint: 'Money earned from sales' },
    { id: '2', content: 'Money earned from providing goods or services', matchId: '1' },
    { id: '3', content: 'Net Income', matchId: '4', hint: 'The bottom line profit' },
    { id: '4', content: 'Revenue minus all expenses (the profit)', matchId: '3' },
    { id: '5', content: 'Assets', matchId: '6', hint: 'Things the business owns' },
    { id: '6', content: 'Resources owned by the business', matchId: '5' },
    { id: '7', content: 'Liabilities', matchId: '8', hint: 'Debts the business owes' },
    { id: '8', content: 'Money owed to creditors and suppliers', matchId: '7' },
    { id: '9', content: 'Equity', matchId: '10', hint: 'Owner\'s stake in the business' },
    { id: '10', content: 'Owner\'s financial interest in the business', matchId: '9' },
    { id: '11', content: 'Cash Flow', matchId: '12', hint: 'Movement of cash in and out' },
    { id: '12', content: 'The movement of money into and out of the business', matchId: '11' }
  ]

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'Why is it important that the three financial statements work together as an integrated system?',
      answers: [
        'They tell one complete story about business performance and position',
        'They use the same Excel formulas',
        'They are printed on the same paper',
        'They require the same accounting software'
      ],
      explanation: 'The three statements are interconnected - Net Income from the Income Statement flows to Retained Earnings on the Balance Sheet, and cash changes connect to the Cash Flow Statement. Together they provide a complete picture of business health.'
    },
    {
      id: 'q2',
      question: 'What is the key difference between Sarah\'s internal spreadsheets and professional financial statements?',
      answers: [
        'Financial statements follow standardized formats that external stakeholders expect',
        'Internal spreadsheets are more accurate than financial statements',
        'Financial statements require more expensive software',
        'Internal spreadsheets take longer to prepare'
      ],
      explanation: 'Professional financial statements follow Generally Accepted Accounting Principles (GAAP) and standardized formats that banks, investors, and other stakeholders understand and expect, while internal spreadsheets can be customized for management use.'
    },
    {
      id: 'q3',
      question: 'In building TechStart\'s financial storyboard, what should be the first step?',
      answers: [
        'Create the Income Statement to establish the "plot" - is the business profitable?',
        'Design charts and graphs for visual appeal',
        'Calculate complex financial ratios',
        'Write a business plan summary'
      ],
      explanation: 'The Income Statement is the foundation because it shows profitability over time. This "plot" of the business story must be established before showing the "setting" (Balance Sheet) and "action" (Cash Flow Statement).'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Guided Practice: Building Your Financial Detective Skills
              </CardTitle>
              <CardDescription>
                Work together with guidance to understand how financial statements reveal business stories
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Now that you understand the concept of the three-statement storyboard, let's practice the detective work together. Just as Jennifer Kim guided Sarah through this process, we'll work collaboratively to develop the skills needed to read financial statements like seasoned business professionals.
                </p>

                <p className="text-base leading-relaxed mb-4">
                  Your challenge today is to <strong>think like an investor</strong>. When investors look at a company like TechStart Solutions, they're asking three critical questions:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <TrendingUp className="w-4 h-4" />
                        The Plot Question
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">"Can this business make money?"</p>
                      <p className="text-xs text-gray-600">Income Statement Analysis</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <FileSpreadsheet className="w-4 h-4" />
                        The Setting Question
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">"Is this business financially stable?"</p>
                      <p className="text-xs text-gray-600">Balance Sheet Analysis</p>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-purple-200">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm flex items-center gap-2 text-purple-700">
                        <Calculator className="w-4 h-4" />
                        The Action Question
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm font-semibold mb-1">"Does this business manage cash well?"</p>
                      <p className="text-xs text-gray-600">Cash Flow Statement Analysis</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Equation Walkthrough */}
          <Card className="border-purple-200 shadow-sm">
            <CardHeader className="bg-gradient-to-r from-purple-100 via-blue-100 to-indigo-100">
              <CardTitle className="text-purple-900 flex flex-col gap-1">
                Guided Walkthrough: Filling the Skeletons
                <span className="text-base font-normal text-purple-700">
                  Map real business activity to each part of the core equations.
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                {/* Income Statement Equation */}
                <div className="space-y-4 bg-white rounded-xl border border-purple-200 p-5">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 text-xs uppercase">Income Statement</Badge>
                    <span className="text-xs text-purple-600 tracking-wide">Plot</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Connect each revenue stream and expense category to the Net Income target.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm font-semibold text-purple-900 mb-2">Equation in Action</p>
                    <p className="text-lg font-bold text-purple-700">
                      ($3,850 Client Fees + $500 Maintenance)
                    </p>
                    <p className="text-lg font-bold text-purple-700">
                      − ($600 Software + $450 Contractors + $120 Marketing)
                    </p>
                    <p className="text-lg font-bold text-purple-900 mt-2">
                      = $3,180 Net Income
                    </p>
                  </div>
                  <ul className="text-sm text-purple-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" />
                      Highlight revenue drivers: every service Sarah offers feeds the first part of the equation.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-purple-500" />
                      Classify costs correctly: mislabeling an expense breaks the math.
                    </li>
                  </ul>
                </div>

                {/* Balance Sheet Equation */}
                <div className="space-y-4 bg-white rounded-xl border border-blue-200 p-5">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 text-xs uppercase">Balance Sheet</Badge>
                    <span className="text-xs text-blue-600 tracking-wide">Setting</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Trace how Net Income becomes part of Equity while liabilities explain the rest of the balance.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm font-semibold text-blue-900 mb-2">Equation in Action</p>
                    <p className="text-lg font-bold text-blue-700">
                      ($12,000 Cash + $6,500 Equipment + $4,200 Receivables)
                    </p>
                    <p className="text-lg font-bold text-blue-700">
                      = ($5,400 Credit Card + $3,000 Vendor Bills)
                    </p>
                    <p className="text-lg font-bold text-blue-900 mt-2">
                      + (Owner Equity $14,300 including retained profits)
                    </p>
                  </div>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                      Assets grow when Sarah reinvests cash or buys tools—record each side.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-500" />
                      Equity includes today’s Net Income, so check the Income Statement before finalizing this page.
                    </li>
                  </ul>
                </div>

                {/* Cash Flow Statement Equation */}
                <div className="space-y-4 bg-white rounded-xl border border-indigo-200 p-5">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-indigo-100 text-indigo-800 text-xs uppercase">Cash Flow Statement</Badge>
                    <span className="text-xs text-indigo-600 tracking-wide">Action</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Show how cash increases or decreases even when Net Income stays positive.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                    <p className="text-sm font-semibold text-indigo-900 mb-2">Equation in Action</p>
                    <p className="text-lg font-bold text-indigo-700">
                      Operating (+$2,900) + Investing (−$1,200) + Financing (+$800)
                    </p>
                    <p className="text-lg font-bold text-indigo-900 mt-2">
                      = +$2,500 Net Change in Cash
                    </p>
                  </div>
                  <ul className="text-sm text-indigo-800 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                      Operating cash adjusts Net Income for timing differences like receivables.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-indigo-500" />
                      Investing and financing explain why cash moved even when profit stayed steady.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-sm text-purple-800">
                <strong>Coach’s tip:</strong> When your spreadsheet outputs don’t match these equations, pause and trace each
                number back to its source. The storyboard fails if even one term is missing.
              </div>
            </CardContent>
          </Card>

          {/* Vocabulary Building */}
          <DragAndDrop
            items={vocabularyItems}
            title="Financial Statement Vocabulary Building"
            description="Match each business term with its definition to build your financial literacy foundation"
            leftColumnTitle="Business Terms"
            rightColumnTitle="Definitions"
            showHints={true}
            shuffleItems={true}
          />

          {/* Turn and Talk Activity */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Turn and Talk: Real-World Application
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Partner Activity (5 minutes):</strong> Imagine you're helping Sarah explain TechStart Solutions to the bank loan officer. Work with your partner to practice this conversation:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">Partner A: The Bank Loan Officer</h4>
                  <p className="text-sm text-blue-700 mb-2">Ask these questions:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-blue-600">
                    <li>"How do I know your business is profitable?"</li>
                    <li>"What assets do you have to secure this loan?"</li>
                    <li>"How do you manage your cash flow?"</li>
                    <li>"What happens if you have a slow month?"</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Partner B: Sarah (TechStart CEO)</h4>
                  <p className="text-sm text-green-700 mb-2">Explain using financial statement concepts:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-green-600">
                    <li>How your Income Statement shows profitability</li>
                    <li>What assets and equity you have on your Balance Sheet</li>
                    <li>How your Cash Flow Statement demonstrates financial management</li>
                    <li>Why integrated statements tell a complete story</li>
                  </ul>
                </div>
              </div>

              <Badge variant="outline" className="text-purple-700 border-purple-300">
                Switch roles after 2.5 minutes - both partners practice both perspectives
              </Badge>
            </CardContent>
          </Card>

          {/* Guided Financial Statement Analysis */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Guided Analysis: Reading Between the Lines</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Let's practice reading financial statements like professional investors. Consider this simplified example from a technology startup similar to TechStart Solutions:
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">TechStart Solutions - Key Financial Information</h4>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-green-700">Income Statement Highlights</p>
                      <ul className="space-y-1">
                        <li>Revenue: $45,000</li>
                        <li>Expenses: $32,000</li>
                        <li>Net Income: $13,000</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700">Balance Sheet Highlights</p>
                      <ul className="space-y-1">
                        <li>Cash: $8,500</li>
                        <li>Equipment: $12,000</li>
                        <li>Total Assets: $20,500</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-purple-700">Cash Flow Highlights</p>
                      <ul className="space-y-1">
                        <li>Operating Cash Flow: $11,200</li>
                        <li>Investing Cash Flow: ($5,000)</li>
                        <li>Net Cash Flow: $6,200</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-base leading-relaxed mb-4">
                  <strong>What story do these numbers tell together?</strong> The Income Statement shows Sarah's business is profitable ($13,000 net income). The Balance Sheet reveals she has solid assets including $8,500 in cash. The Cash Flow Statement shows positive operating cash flow, meaning the business generates cash from operations, though she invested $5,000 in new equipment.
                </p>

                <p className="text-base leading-relaxed">
                  This integrated view gives investors confidence that TechStart Solutions isn't just profitable on paper—it actually generates cash and manages resources well. This is exactly the kind of story that convinced the bank to approve Sarah's line of credit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Financial Statement Matching */}
          <FinancialStatementMatching />

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Understanding Financial Statement Integration"
            description="Test your understanding of how the three statements work together to tell a business story"
            showExplanations={true}
            allowRetry={true}
          />

          {/* Teacher Scaffolding Section */}
          <Card className="border-purple-200">
            <CardHeader className="bg-yellow-50 border-yellow-200">
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Building Toward Independence
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Checkpoint with your teacher:</strong> Before moving to independent practice, make sure you can confidently explain:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Core Concepts</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>How the three statements work as an integrated storyboard</li>
                    <li>What questions each statement answers for investors</li>
                    <li>Why standardized formats matter for external stakeholders</li>
                    <li>The difference between internal records and financial statements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">✓ Application Skills</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Reading basic financial statement information</li>
                    <li>Connecting numbers to business performance stories</li>
                    <li>Explaining business health to different audiences</li>
                    <li>Using financial vocabulary correctly in context</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-700">
                  <strong>Ready for the next challenge?</strong> In Independent Practice, you'll analyze different business scenarios without guided support, demonstrating that you can apply these concepts to new situations confidently.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit03Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
