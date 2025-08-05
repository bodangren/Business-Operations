import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

  const strategicAnalysisQuestions = [
    {
      id: 'q1',
      question: 'GreenTech Manufacturing just bought a $120,000 robotic assembly line. If they expect 15% growth this year and need cash for expansion, which depreciation method would be most strategic?',
      answers: [
        'Double-Declining Balance for higher early tax deductions and better cash flow',
        'Straight-Line for consistent expense patterns and easier budgeting',
        'Units of Production based on actual machine usage hours',
        'No depreciation in the first year to show higher profits'
      ],
      explanation: 'With 15% growth expected and need for expansion cash, DDB provides higher depreciation expenses early, reducing taxable income and preserving cash flow for growth investments.'
    },
    {
      id: 'q2',
      question: 'FlexiRetail operates in a market where supplier costs have increased 20% this year. They want to minimize taxes while maintaining good relationships with lenders. Which inventory method makes most sense?',
      answers: [
        'LIFO to reduce taxable income, with clear communication to lenders about the strategy',
        'FIFO to show higher profits and improve financial ratios for lenders',
        'Switch between methods quarterly based on cost trends',
        'Use average cost method to avoid choosing between FIFO and LIFO'
      ],
      explanation: 'LIFO will reduce taxes in rising cost environment, but requires transparent communication with lenders about the strategic choice and its impact on financial statements.'
    },
    {
      id: 'q3',
      question: 'DataDriven Analytics plans to go public in 2 years. They have $200,000 in new server equipment and rising inventory costs. What\'s their best combined strategy?',
      answers: [
        'Straight-Line depreciation + FIFO inventory to show steady, strong financial performance for IPO investors',
        'Double-Declining Balance + LIFO to minimize current taxes and maximize cash reserves',
        'Use different methods each year depending on business conditions',
        'Delay major purchases until after the IPO to avoid complex accounting decisions'
      ],
      explanation: 'For IPO preparation, showing steady, strong financial performance is crucial for investor confidence. SLN gives predictable expenses, FIFO shows higher profits—both support IPO valuation goals.'
    }
  ]

  const strategyScenarios = [
    {
      id: 'scenario1',
      text: "A {blank} company planning an IPO should prioritize showing {blank} financial performance over short-term tax savings.",
      answer: 'technology, strong',
      hint: "Think about what investors want to see"
    },
    {
      id: 'scenario2',
      text: "In periods of {blank} costs, LIFO inventory method provides {blank} taxable income and better cash flow.",
      answer: 'rising, lower',
      hint: "Higher costs under LIFO mean what for profit?"
    },
    {
      id: 'scenario3',  
      text: "A rapidly growing startup needing expansion capital should consider {blank}-{blank} {blank} depreciation for immediate tax benefits.",
      answer: 'Double-Declining Balance',
      hint: "Which method provides higher early deductions?"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Independent Practice Introduction */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Independent Practice</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Strategic Analysis: Real-World Business Decision Making
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Now it's time to apply your understanding independently. You'll analyze three different companies facing strategic decisions about asset depreciation and inventory valuation. Each company has unique goals and constraints—your job is to think like a financial advisor and recommend the best approach for each situation.
                </p>

                <p className="text-lg leading-relaxed">
                  Remember, there's rarely a "perfect" answer in business. The key is understanding the trade-offs and aligning your recommendations with each company's specific strategic goals.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Business Scenarios */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Business Case Analysis: Three Strategic Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">🏭 Scenario 1: GreenTech Manufacturing</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Company Profile:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Sustainable technology manufacturer</li>
                        <li>• Experiencing 15% annual growth</li>
                        <li>• Planning major facility expansion</li>
                        <li>• Just purchased $120,000 robotic assembly line</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-blue-700 mb-2">Strategic Goals:</h5>
                      <ul className="space-y-1 text-blue-600">
                        <li>• Preserve cash for expansion projects</li>
                        <li>• Maintain competitive advantage through automation</li>
                        <li>• Support rapid growth trajectory</li>
                        <li>• Minimize tax burden in growth phase</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">🛒 Scenario 2: FlexiRetail Chain</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Company Profile:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Mid-size retail chain (50 locations)</li>
                        <li>• Supplier costs increased 20% this year</li>
                        <li>• Strong relationships with multiple lenders</li>
                        <li>• Considering new store locations</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-700 mb-2">Strategic Goals:</h5>
                      <ul className="space-y-1 text-green-600">
                        <li>• Minimize tax impact of rising costs</li>
                        <li>• Maintain strong financial ratios for lenders</li>
                        <li>• Support expansion financing needs</li>
                        <li>• Preserve cash flow during cost inflation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg border-2 border-orange-300">
                  <h4 className="text-lg font-semibold text-orange-800 mb-4">💻 Scenario 3: DataDriven Analytics</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Company Profile:</h5>
                      <ul className="space-y-1 text-orange-600">
                        <li>• High-growth data analytics startup</li>
                        <li>• Planning IPO in 24 months</li>
                        <li>• $200,000 in new server infrastructure</li>
                        <li>• Rising costs for data storage and processing</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-orange-700 mb-2">Strategic Goals:</h5>
                      <ul className="space-y-1 text-orange-600">
                        <li>• Demonstrate consistent, strong financial performance</li>
                        <li>• Build investor confidence for successful IPO</li>
                        <li>• Show predictable business model</li>
                        <li>• Balance growth investment with profitability</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategic Analysis Questions */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Strategic Decision Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Analyze each scenario and select the most strategic approach for each company's unique situation:
              </p>
              <ComprehensionCheck questions={strategicAnalysisQuestions} allowRetry={false} />
            </CardContent>
          </Card>

          {/* Critical Thinking: Trade-offs Analysis */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                Critical Thinking: Understanding Strategic Trade-offs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg">
                  Every financial method choice involves trade-offs. Consider these strategic implications:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-red-800 mb-3">⚖️ Depreciation Method Trade-offs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-4 border-blue-500 pl-3">
                        <strong>Straight-Line Benefits:</strong> Predictable expenses, stable financial ratios, easier budgeting
                      </div>
                      <div className="border-l-4 border-blue-500 pl-3">
                        <strong>SLN Drawbacks:</strong> Higher current taxes, less cash flow optimization
                      </div>
                      <div className="border-l-4 border-orange-500 pl-3">
                        <strong>DDB Benefits:</strong> Tax savings early, better cash flow, faster write-offs
                      </div>
                      <div className="border-l-4 border-orange-500 pl-3">
                        <strong>DDB Drawbacks:</strong> Lower early profits, more complex financial statements
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold text-red-800 mb-3">📦 Inventory Method Trade-offs</h4>
                    <div className="space-y-2 text-sm">
                      <div className="border-l-4 border-green-500 pl-3">
                        <strong>FIFO Benefits:</strong> Higher profits shown, better ratios, matches physical flow
                      </div>
                      <div className="border-l-4 border-green-500 pl-3">
                        <strong>FIFO Drawbacks:</strong> Higher taxes in inflation, less cash flow optimization
                      </div>
                      <div className="border-l-4 border-purple-500 pl-3">
                        <strong>LIFO Benefits:</strong> Tax savings in inflation, better cash flow
                      </div>
                      <div className="border-l-4 border-purple-500 pl-3">
                        <strong>LIFO Drawbacks:</strong> Lower reported profits, complex inventory tracking
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                  <h4 className="font-semibold text-red-800 mb-2">🎯 Key Strategic Question:</h4>
                  <p className="text-sm text-red-600">
                    <strong>What matters most to this specific company right now:</strong> showing strong profits to investors, preserving cash for growth, minimizing taxes, or maintaining predictable financial performance? The answer determines the best method choice.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strategy Application Exercise */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Strategic Vocabulary Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Complete these strategic analysis statements based on the scenarios you've studied:
              </p>
              <FillInTheBlank 
                sentences={strategyScenarios}
                title="Strategic Analysis Practice"
                description="Complete these strategic analysis statements based on the scenarios you've studied"
              />
            </CardContent>
          </Card>

          {/* Independent Analysis Challenge */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Independent Challenge: Your Industry Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Based on your chosen industry (retail, manufacturing, or technology), develop a strategic recommendation:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-green-300">
                  <h4 className="font-semibold text-green-800 mb-4">Your Strategic Analysis Framework:</h4>
                  <div className="grid gap-4">
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-700">1. Industry Context Analysis</h5>
                      <p className="text-sm text-green-600">What are the typical asset and inventory challenges in your chosen industry? What drives success?</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700">2. Strategic Goals Identification</h5>
                      <p className="text-sm text-blue-600">Is the priority cash flow optimization, investor appeal, tax minimization, or financial stability?</p>
                    </div>
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-orange-700">3. Method Selection Rationale</h5>
                      <p className="text-sm text-orange-600">Which depreciation and inventory methods best support the strategic goals? Why?</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-purple-700">4. Trade-off Assessment</h5>
                      <p className="text-sm text-purple-600">What are you giving up with your recommended approach? How do you mitigate those risks?</p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-green-600 italic">
                  💡 Remember: You're building toward creating a comprehensive advisory brief that answers our driving question: "Which depreciation and inventory methods best align with our cash-flow and tax strategy?"
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Preparation for Assessment */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Preparing for Strategic Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  You've now independently analyzed complex business scenarios and understood the strategic implications of different asset and inventory valuation methods. This critical thinking will be essential as you move into the assessment phase.
                </p>
                <p className="text-lg leading-relaxed">
                  In the next phase, you'll demonstrate your mastery of these concepts through comprehensive evaluation questions that test not just your knowledge, but your ability to apply strategic thinking to real business decisions.
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-300 mt-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Key Competencies Developed:</h4>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>✅ Strategic analysis of business scenarios</li>
                    <li>✅ Understanding of method trade-offs and implications</li>
                    <li>✅ Industry-specific strategic thinking</li>
                    <li>✅ Financial decision-making rationale</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}