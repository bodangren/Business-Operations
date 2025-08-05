import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  const comprehensiveAssessmentQuestions = [
    {
      id: 'q1',
      question: 'What is the primary reason businesses depreciate long-term assets rather than expensing them immediately?',
      answers: [
        'To match the cost of assets with the income they help generate over multiple years',
        'To reduce the current year\'s tax liability as much as possible',
        'To make the balance sheet look more impressive to investors',
        'To comply with government regulations about asset purchases'
      ],
      explanation: 'The Matching Principle requires businesses to match the cost of assets with the income they help generate over time. Since long-term assets help generate income for multiple years, their cost should be spread over those years through depreciation.'
    },
    {
      id: 'q2',
      question: 'A growing startup needs to preserve cash for expansion while also showing strong financial performance to potential investors. Which combination would best serve both goals?',
      answers: [
        'Use DDB depreciation for tax savings and FIFO inventory to show higher profits, then clearly communicate the strategy to investors',
        'Use Straight-Line depreciation and LIFO inventory to show consistent, conservative financial management',
        'Switch between methods quarterly based on cash flow needs and investor meetings',
        'Delay major asset purchases and inventory buildups until after securing investment'
      ],
      explanation: 'DDB provides early tax savings for cash preservation, while FIFO shows higher profits for investor appeal. The key is transparent communication about the strategic rationale behind method choices.'
    },
    {
      id: 'q3',
      question: 'In a period of rapidly rising inventory costs, which statement best describes the strategic implications of LIFO vs FIFO?',
      answers: [
        'LIFO provides better cash flow through tax savings but may signal lower profitability to investors, while FIFO shows higher profits but results in higher tax payments',
        'LIFO and FIFO will produce identical results since they both track the same physical inventory',
        'FIFO is always better because it matches the physical flow of goods in most businesses',
        'LIFO should only be used by manufacturing companies, while FIFO is better for retail businesses'
      ],
      explanation: 'In rising cost environments, LIFO assigns higher (newer) costs to goods sold, reducing profits and taxes but preserving cash. FIFO assigns lower (older) costs to goods sold, showing higher profits but requiring higher tax payments.'
    },
    {
      id: 'q4',
      question: 'Sarah\'s TechStart Solutions spent $18,000 on office equipment. If she expects the equipment to last 5 years with a $2,000 salvage value, what would be the annual Straight-Line depreciation?',
      answers: [
        '$3,200 per year',
        '$3,600 per year',
        '$2,800 per year',
        '$4,000 per year'
      ],
      explanation: 'Using the SLN formula: (Cost - Salvage Value) ÷ Useful Life = ($18,000 - $2,000) ÷ 5 years = $16,000 ÷ 5 = $3,200 per year.'
    },
    {
      id: 'q5',
      question: 'Why would a company facing serious financial difficulties be especially motivated to choose LIFO during periods of inflation?',
      answers: [
        'LIFO reduces taxable income, preserving cash that would otherwise go to taxes during a cash flow crisis',
        'LIFO makes inventory appear more valuable on the balance sheet, improving financial ratios',
        'LIFO is easier to calculate and requires less accounting expertise during difficult times',
        'LIFO is required by law for companies experiencing financial difficulties'
      ],
      explanation: 'Companies in financial distress need to preserve every dollar of cash. LIFO\'s higher Cost of Goods Sold in inflationary periods reduces taxable income and tax payments, keeping more cash in the business.'
    },
    {
      id: 'q6',
      question: 'What is the key strategic question that should guide a business\'s choice of depreciation and inventory methods?',
      answers: [
        'Which methods best align with the company\'s cash-flow needs and tax strategy given their specific business goals?',
        'Which methods are most commonly used by other businesses in the same industry?',
        'Which methods will result in the highest reported profits on financial statements?',
        'Which methods require the least amount of record-keeping and administrative work?'
      ],
      explanation: 'The strategic question is about alignment with business goals. Different companies have different priorities (cash flow, investor appeal, tax minimization, predictability), and method choices should support those specific strategic objectives.'
    }
  ]

  const masteryConcepts = [
    {
      id: 'mastery1',
      text: "The {blank} {blank} requires matching asset costs with the income they help generate over multiple {blank}.",
      answer: 'Matching Principle, years',
      hint: "Fundamental accounting concept about timing of costs and revenues"
    },
    {
      id: 'mastery2',
      text: "In rising cost periods, {blank} inventory method provides tax savings while {blank} method shows higher reported profits.",
      answer: 'LIFO, FIFO',
      hint: "Think about which costs are assigned to goods sold"
    },
    {
      id: 'mastery3',  
      text: "{blank}-{blank} {blank} depreciation provides higher early tax deductions compared to {blank}-{blank} method.",
      answer: 'Double-Declining Balance, Straight-Line',
      hint: "Which method accelerates depreciation expenses?"
    },
    {
      id: 'mastery4',
      text: "Strategic method selection should align with a company's {blank}-{blank} needs and {blank} strategy rather than following industry norms.",
      answer: 'cash-flow, tax',
      hint: "What are the two main financial impacts mentioned in our driving question?"
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
          {/* Assessment Introduction */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Formative Assessment</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Demonstrate Your Mastery: Asset & Inventory Strategic Analysis
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  This assessment evaluates your understanding of the strategic implications of asset depreciation and inventory valuation methods. You'll demonstrate your ability to analyze business scenarios, understand method trade-offs, and make strategic recommendations that align with specific business goals.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Assessment Focus Areas:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Conceptual Understanding:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Matching Principle and its business importance</li>
                        <li>• Strategic rationale for different depreciation methods</li>
                        <li>• FIFO vs LIFO implications in various cost environments</li>
                        <li>• Relationship between method choice and business goals</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">Strategic Application:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Analysis of real business scenarios</li>
                        <li>• Understanding of cash flow vs. profit trade-offs</li>
                        <li>• Industry-specific strategic considerations</li>
                        <li>• Integration of tax strategy with business objectives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  <strong>Important:</strong> This is an authentic assessment—each question has been carefully designed to test your ability to think strategically about real business situations. Take your time and apply the analytical framework you've developed throughout this lesson.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment Questions */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Strategic Analysis Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-6">
                Demonstrate your mastery by analyzing these comprehensive business scenarios. Consider the strategic implications and business context for each situation:
              </p>
              <ComprehensionCheck 
                questions={comprehensiveAssessmentQuestions} 
                allowRetry={false}
                title="Asset & Inventory Strategy Assessment"
                description="Apply your strategic analysis skills to these real-world business scenarios"
              />
            </CardContent>
          </Card>

          {/* Mastery Vocabulary Assessment */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Strategic Vocabulary Mastery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Complete these statements to demonstrate your understanding of key strategic concepts:
              </p>
              <FillInTheBlank 
                sentences={masteryConcepts}
                title="Strategic Concepts Integration"
                description="Show your mastery of how different methods align with business strategy"
              />
            </CardContent>
          </Card>

          {/* Critical Thinking Challenge */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Critical Thinking: Method Selection Framework
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <p className="text-lg">
                  Demonstrate your understanding of strategic decision-making by analyzing this framework:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-amber-300">
                  <h4 className="text-lg font-semibold text-amber-800 mb-4">Strategic Method Selection Framework</h4>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h5 className="font-semibold text-blue-700">Step 1: Identify Primary Business Goal</h5>
                      <p className="text-sm text-blue-600">Cash preservation? Investor appeal? Tax minimization? Growth support?</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h5 className="font-semibold text-green-700">Step 2: Assess Current Business Environment</h5>
                      <p className="text-sm text-green-600">Growth phase? Cost inflation? Regulatory scrutiny? Financing needs?</p>
                    </div>
                    
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h5 className="font-semibold text-orange-700">Step 3: Evaluate Method Trade-offs</h5>
                      <p className="text-sm text-orange-600">What are you gaining vs. giving up with each method choice?</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h5 className="font-semibold text-purple-700">Step 4: Align Choice with Strategy</h5>
                      <p className="text-sm text-purple-600">Does the method choice support or hinder the identified business goals?</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-blue-800 mb-2">🎯 Growth-Focused Strategy</h5>
                    <p className="text-sm text-blue-600">Prioritize cash flow preservation through DDB depreciation and strategic inventory methods based on cost trends.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-green-800 mb-2">💰 Investor-Appeal Strategy</h5>
                    <p className="text-sm text-green-600">Show steady, strong performance through SLN depreciation and FIFO inventory for higher reported profits.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h5 className="font-semibold text-orange-800 mb-2">⚖️ Balanced Strategy</h5>
                    <p className="text-sm text-orange-600">Use different methods for different asset/inventory categories based on their specific strategic importance.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Industry Application Assessment */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Industry-Specific Strategic Assessment
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Based on your chosen industry focus, evaluate these strategic considerations:
                </p>

                <div className="grid gap-4">
                  <div className="bg-white p-6 rounded-lg border-2 border-indigo-300">
                    <h4 className="font-semibold text-indigo-800 mb-3">🏭 Manufacturing Industry Considerations</h4>
                    <div className="text-sm text-indigo-600 space-y-2">
                      <p><strong>Assets:</strong> Heavy machinery, production equipment requiring strategic depreciation for cash flow management</p>
                      <p><strong>Inventory:</strong> Raw materials, work-in-process, finished goods with complex cost flow implications</p>
                      <p><strong>Strategy:</strong> Balance cash preservation for equipment replacement with inventory method tax optimization</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-indigo-300">
                    <h4 className="font-semibold text-indigo-800 mb-3">🛒 Retail Industry Considerations</h4>
                    <div className="text-sm text-indigo-600 space-y-2">
                      <p><strong>Assets:</strong> Store fixtures, POS systems, technology requiring predictable depreciation for budgeting</p>
                      <p><strong>Inventory:</strong> Merchandise with seasonal fluctuations and fashion/technology obsolescence risks</p>
                      <p><strong>Strategy:</strong> FIFO often preferred for perishables, but LIFO valuable during inflationary periods</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg border-2 border-indigo-300">
                    <h4 className="font-semibold text-indigo-800 mb-3">💻 Technology Industry Considerations</h4>
                    <div className="text-sm text-indigo-600 space-y-2">
                      <p><strong>Assets:</strong> Computers, servers, software requiring accelerated depreciation due to rapid obsolescence</p>
                      <p><strong>Inventory:</strong> Limited physical inventory, focus on intellectual property and service delivery</p>
                      <p><strong>Strategy:</strong> DDB often preferred for rapid tech refresh cycles, emphasis on R&D investment timing</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-indigo-300 mt-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">🎯 Your Strategic Recommendation:</h4>
                  <p className="text-sm text-indigo-600">
                    Consider your industry choice and Sarah's TechStart Solutions context. What combination of depreciation and inventory methods would you recommend, and how would you justify this choice to a board of directors?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assessment Completion & Reflection */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Assessment Reflection & Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  You have now demonstrated your mastery of strategic asset and inventory valuation concepts. This assessment confirms your ability to analyze complex business scenarios and make informed recommendations that align financial methods with business strategy.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">Competencies Assessed:</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">✅ Technical Mastery:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Depreciation method calculations and applications</li>
                        <li>• FIFO/LIFO strategic implications</li>
                        <li>• Cash flow vs. profit trade-off analysis</li>
                        <li>• Industry-specific strategic considerations</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-700 mb-2">✅ Strategic Thinking:</h5>
                      <ul className="space-y-1 text-purple-600">
                        <li>• Business scenario analysis and evaluation</li>
                        <li>• Method selection rationale development</li>
                        <li>• Integration of multiple business objectives</li>
                        <li>• Professional recommendation framework</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  In the final phase, you'll synthesize your learning and reflect on how these strategic concepts connect to broader business success and your personal development in financial analysis and decision-making.
                </p>
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