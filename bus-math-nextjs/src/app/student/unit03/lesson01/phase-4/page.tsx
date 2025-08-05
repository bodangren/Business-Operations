import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Brain, TrendingUp, AlertTriangle, CheckCircle2 } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson01Phases[3] // Independent Practice phase

  const comprehensionQuestions1 = [
    {
      id: 'q1',
      question: 'GreenTech Manufacturing shows $85,000 revenue and $95,000 expenses on their Income Statement. What does this tell investors about the business?',
      answers: [
        'The business has a net loss of $10,000 and needs to improve profitability',
        'The business is very successful and profitable',
        'The business has strong cash flow management',
        'The business has too many assets'
      ],
      explanation: 'When expenses ($95,000) exceed revenue ($85,000), the business has a net loss of $10,000. This indicates the company is not currently profitable and needs to either increase revenue or reduce expenses to achieve profitability.'
    },
    {
      id: 'q2',
      question: 'CloudSoft Solutions has $25,000 in cash, $15,000 in equipment, and $8,000 in liabilities. What is their equity position?',
      answers: [
        '$32,000 in equity (Assets $40,000 - Liabilities $8,000)',
        '$25,000 in equity (just the cash amount)',
        '$17,000 in equity ($25,000 - $8,000)',
        '$48,000 in equity ($40,000 + $8,000)'
      ],
      explanation: 'Using the accounting equation (Assets = Liabilities + Equity), we calculate: Total Assets ($25,000 cash + $15,000 equipment = $40,000) minus Liabilities ($8,000) equals Equity ($32,000). This shows the owner\'s financial stake in the business.'
    },
    {
      id: 'q3',
      question: 'Digital Marketing Pro shows positive net income but negative operating cash flow. What does this suggest?',
      answers: [
        'The business is profitable on paper but may have cash flow timing issues',
        'The business is failing and should close immediately',
        'The financial statements contain errors',
        'The business has too much inventory'
      ],
      explanation: 'This situation indicates the business is earning profit but experiencing cash flow timing problems - perhaps customers haven\'t paid their invoices yet, or the company has invested heavily in accounts receivable. This highlights why all three statements are needed for a complete picture.'
    }
  ]

  const scenarioAnalysis = [
    {
      id: '1',
      text: 'MedTech Innovations has consistent {blank} revenue growth but their cash flow statement shows they collect payments slowly from hospitals.',
      answer: 'profitable',
      hint: 'The business makes money but has collection timing issues'
    },
    {
      id: '2', 
      text: 'RetailMax shows strong {blank} cash flow from operations, indicating excellent day-to-day financial management.',
      answer: 'positive',
      hint: 'Good operating cash flow shows the business generates cash from core activities'
    },
    {
      id: '3',
      text: 'AutoRepair Express has high {blank} on their balance sheet, suggesting they owe significant money to suppliers and lenders.',
      answer: 'liabilities',
      hint: 'Money owed to others appears on the balance sheet'
    }
  ]

  const comprehensionQuestions2 = [
    {
      id: 'q4',
      question: 'EcoClean Services wants to expand but needs a loan. Which financial statement story would be most convincing to a bank?',
      answers: [
        'Consistent profitability on Income Statement, strong asset base on Balance Sheet, and positive operating cash flow',
        'Just showing high revenue numbers',
        'Only demonstrating low expenses',
        'Having expensive equipment but no other information'
      ],
      explanation: 'Banks want to see the complete integrated story: profitability proves the business model works, strong assets provide security for the loan, and positive operating cash flow demonstrates the ability to service debt payments.'
    },
    {
      id: 'q5',
      question: 'Two similar businesses both show $50,000 net income. Business A has $10,000 operating cash flow while Business B has $45,000 operating cash flow. Which is financially healthier?',
      answers: [
        'Business B - higher operating cash flow indicates better cash conversion and collection',
        'Business A - lower cash flow means they reinvest more in growth',
        'They are exactly the same since net income is identical',
        'Cannot determine without more information'
      ],
      explanation: 'Business B is healthier because their operating cash flow closely matches their net income, indicating they effectively collect on sales and manage working capital. Business A may have collection issues or excessive accounts receivable.'
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
                <Target className="w-5 h-5" />
                Independent Practice: Financial Detective Work
              </CardTitle>
              <CardDescription>
                Apply your knowledge to new business scenarios without guided support
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Now it's time to demonstrate your financial detective skills independently. You'll analyze different business scenarios using the same integrated three-statement approach that Sarah learned, but with new companies and situations you haven't seen before.
                </p>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                  <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                    <Brain className="w-4 h-4" />
                    Challenge Level: Independent Analysis
                  </h4>
                  <p className="text-yellow-700 text-sm">
                    These scenarios require you to apply the concepts we've learned to completely new situations. Use your understanding of how the three statements work together to tell complete business stories.
                  </p>
                </div>

                <p className="text-base leading-relaxed">
                  Remember: you're not just looking at numbers—you're reading the story those numbers tell about business performance, financial stability, and cash management.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 1: GreenTech Manufacturing */}
          <Card className="border-purple-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800">Scenario 1: GreenTech Manufacturing</CardTitle>
              <CardDescription>Analyze this renewable energy equipment manufacturer's financial story</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  GreenTech Manufacturing produces solar panel mounting systems for commercial buildings. They're seeking investment to expand their operations to serve the growing renewable energy market.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Income Statement Key Items
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>Revenue: $85,000</li>
                      <li>Cost of Materials: $45,000</li>
                      <li>Operating Expenses: $50,000</li>
                      <li>Net Income: ?</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-blue-700 mb-2">Balance Sheet Highlights</h4>
                    <ul className="text-sm space-y-1">
                      <li>Cash: $12,000</li>
                      <li>Manufacturing Equipment: $65,000</li>
                      <li>Accounts Payable: $18,000</li>
                      <li>Bank Loan: $25,000</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Cash Flow Information</h4>
                    <ul className="text-sm space-y-1">
                      <li>Operating Cash Flow: ($8,000)</li>
                      <li>Equipment Purchase: ($15,000)</li>
                      <li>Loan Proceeds: $20,000</li>
                    </ul>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  What story do these numbers tell about GreenTech's business performance and investment readiness?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check 1 */}
          <ComprehensionCheck
            questions={comprehensionQuestions1}
            title="Business Scenario Analysis"
            description="Demonstrate your ability to interpret financial information and draw business conclusions"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Scenario 2: CloudSoft Solutions */}
          <Card className="border-purple-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-blue-800">Scenario 2: CloudSoft Solutions</CardTitle>
              <CardDescription>Evaluate this software consulting firm's financial position</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  CloudSoft Solutions provides cloud migration services to small businesses. The owner wants to understand if the company is ready to hire additional developers and expand service offerings.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Quarter 1 Performance</h4>
                      <ul className="text-sm space-y-1">
                        <li>Service Revenue: $42,000</li>
                        <li>Contractor Costs: $18,000</li>
                        <li>Office Expenses: $8,000</li>
                        <li>Net Income: $16,000</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-700 mb-2">Current Financial Position</h4>
                      <ul className="text-sm space-y-1">
                        <li>Cash: $25,000</li>
                        <li>Equipment: $15,000</li>
                        <li>Accounts Receivable: $12,000</li>
                        <li>Accounts Payable: $8,000</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-yellow-800 font-semibold">Business Decision Context</p>
                    <p className="text-sm text-yellow-700">
                      The owner is considering hiring two full-time developers at $4,000/month each. Can the business support this expansion based on current financial performance?
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fill in the Blank with New Scenarios */}
          <FillInTheBlank
            sentences={scenarioAnalysis}
            title="Independent Scenario Analysis"
            description="Complete these business analysis statements using your financial statement knowledge"
            showWordList={false}
            randomizeWordOrder={false}  
            showHints={true}
          />

          {/* Scenario 3: Digital Marketing Pro */}
          <Card className="border-purple-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-800">Scenario 3: Digital Marketing Pro</CardTitle>
              <CardDescription>Diagnose why this profitable business struggles with cash flow</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  Digital Marketing Pro manages social media and advertising campaigns for restaurants and retail stores. Despite showing consistent profits, the owner frequently worries about making payroll and paying suppliers on time.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" />
                      Income Statement (Monthly)
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>Service Revenue: $28,000</li>
                      <li>Advertising Costs: $12,000</li>
                      <li>Salaries: $8,000</li>
                      <li>Office Rent: $2,500</li>
                      <li><strong>Net Income: $5,500</strong></li>
                    </ul>
                    <p className="text-xs text-green-600 mt-2">✓ Profitable every month</p>
                  </div>

                  <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Cash Flow Reality
                    </h4>
                    <ul className="text-sm space-y-1">
                      <li>Operating Cash Flow: ($2,000)</li>
                      <li>Accounts Receivable: $35,000</li>
                      <li>Average Collection Time: 75 days</li>
                      <li>Current Cash Balance: $3,200</li>
                    </ul>
                    <p className="text-xs text-red-600 mt-2">⚠ Cash flow problems despite profits</p>
                  </div>
                </div>

                <p className="text-sm text-gray-600 italic">
                  This scenario demonstrates why all three financial statements are essential for understanding true business health.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Comprehension Check */}
          <ComprehensionCheck
            questions={comprehensionQuestions2}
            title="Advanced Financial Analysis"
            description="Apply integrated three-statement thinking to complex business situations"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Self-Assessment Reflection */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Independent Practice Self-Assessment</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                <strong>Reflect on your performance:</strong> Rate your confidence level (1-5) in these key areas:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Technical Skills</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Reading Income Statement information</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Analyzing Balance Sheet relationships</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Understanding Cash Flow implications</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Business Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Connecting numbers to business stories</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Making investment recommendations</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Explaining financial health to stakeholders</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-6 h-6 border border-purple-300 rounded flex items-center justify-center text-xs">
                            {i}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Areas for growth:</strong> Which concepts do you want to review before the assessment phase? Consider discussing these with classmates or asking questions during tomorrow's session.
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