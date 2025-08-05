import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, AlertTriangle, TrendingUp, Award, Target } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit03Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases[4] // Assessment phase

  const assessmentQuestions = [
    {
      id: 'q1',
      question: 'What are the three components of the financial statement "storyboard" that Jennifer Kim described to Sarah?',
      answers: [
        'Income Statement (plot), Balance Sheet (setting), Statement of Cash Flows (action)',
        'Revenue, Expenses, and Net Income',
        'Assets, Liabilities, and Equity',
        'Operating, Investing, and Financing activities'
      ],
      explanation: 'The three-statement storyboard consists of: Income Statement showing the plot (profitability), Balance Sheet showing the setting (financial position), and Statement of Cash Flows showing the action (cash movement). Together they tell one integrated business story.'
    },
    {
      id: 'q2',
      question: 'Why weren\'t Sarah\'s detailed internal spreadsheets sufficient for the bank loan officer and potential investor?',
      answers: [
        'External stakeholders need standardized financial statements that follow GAAP formatting',
        'The spreadsheets contained mathematical errors',
        'Internal records are always less accurate than financial statements',
        'Banks prefer handwritten documents over digital spreadsheets'
      ],
      explanation: 'Internal records are perfect for management use, but banks and investors require standardized financial statements that follow Generally Accepted Accounting Principles (GAAP). This ensures consistency and comparability across different businesses and time periods.'
    },
    {
      id: 'q3',
      question: 'A business shows $60,000 revenue, $45,000 expenses, $20,000 cash, $35,000 total assets, and $12,000 liabilities. What is the owner\'s equity?',
      answers: [
        '$23,000 (Assets $35,000 - Liabilities $12,000)',
        '$15,000 (Revenue $60,000 - Expenses $45,000)',
        '$20,000 (the cash amount)',
        '$8,000 (Cash $20,000 - Liabilities $12,000)'
      ],
      explanation: 'Owner\'s equity is calculated using the accounting equation: Assets = Liabilities + Equity, therefore Equity = Assets - Liabilities = $35,000 - $12,000 = $23,000. This represents the owner\'s financial interest in the business.'
    },
    {
      id: 'q4',
      question: 'Which scenario best demonstrates the importance of integrated financial statement analysis?',
      answers: [
        'A company with high profits but negative cash flow needs all three statements to understand the complete picture',
        'A company that only prepares an Income Statement because it\'s the most important',
        'A company that shows identical numbers on all three statements',
        'A company that only shares financial information with internal managers'
      ],
      explanation: 'When profit and cash flow don\'t align, it demonstrates why all three statements are essential. The Income Statement might show profitability, but the Cash Flow Statement reveals timing issues with collections or payments, while the Balance Sheet shows the resulting accounts receivable buildup.'
    },
    {
      id: 'q5',
      question: 'What is the central business challenge that drives the entire Unit 3 learning experience?',
      answers: [
        '"How do today\'s journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?"',
        '"How can Sarah reduce her monthly expenses to increase profitability?"',
        '"How should Sarah organize her office space for maximum efficiency?"',
        '"How can Sarah hire more employees to grow her business faster?"'
      ],
      explanation: 'This driving question captures the essence of Unit 3: transforming raw accounting data into professional financial statements that communicate business performance and health to external stakeholders like banks and investors.'
    }
  ]

  const masteryCheck = [
    {
      id: '1',
      text: 'The {blank} shows whether a business is profitable by comparing revenues to expenses.',
      answer: 'Income Statement',
      hint: 'This statement tells the "plot" of the business story'
    },
    {
      id: '2',
      text: 'The accounting equation that governs the Balance Sheet is: Assets = Liabilities + {blank}.',
      answer: 'Equity',
      hint: 'This represents the owner\'s financial interest in the business'
    },
    {
      id: '3',
      text: 'The {blank} reveals how cash actually moves through operating, investing, and financing activities.',
      answer: 'Statement of Cash Flows',
      hint: 'This statement shows the "action" of the business story'
    },
    {
      id: '4',
      text: 'Jennifer Kim described the three financial statements as a {blank} that tells one integrated business story.',
      answer: 'storyboard',
      hint: 'Like a movie storyboard, these documents work together to tell a complete narrative'
    }
  ]

  const comprehensiveAssessment = [
    {
      id: 'q6',
      question: 'TechFlow Solutions has the following information: Revenue $75,000, Expenses $62,000, Cash $18,000, Equipment $45,000, Accounts Payable $15,000, Bank Loan $28,000. What story does this integrated data tell?',
      answers: [
        'Profitable business ($13,000 net income) with strong asset base ($63,000 total assets) and manageable debt structure',
        'Unprofitable business that should close immediately',
        'Business with too much equipment and insufficient cash',
        'Business that owes too much money to be viable'
      ],
      explanation: 'The integrated analysis shows: Income Statement reveals $13,000 profit ($75,000 - $62,000), Balance Sheet shows $63,000 total assets ($18,000 + $45,000) with $43,000 total liabilities ($15,000 + $28,000), resulting in $20,000 equity. This tells a story of a profitable, well-positioned business.'
    },
    {
      id: 'q7',
      question: 'Two businesses both show $40,000 net income. Company A has $5,000 operating cash flow while Company B has $38,000 operating cash flow. What does this difference suggest about their business models?',
      answers: [
        'Company A likely has collection issues or high accounts receivable, while Company B effectively converts profit to cash',
        'Company A is more profitable because it shows higher growth investment',
        'Company B has accounting errors because cash flow should match net income exactly',
        'The difference is normal and doesn\'t indicate any business concerns'
      ],
      explanation: 'This significant difference between net income and operating cash flow for Company A suggests timing issues - perhaps slow customer payments, inventory buildup, or other working capital challenges. Company B\'s alignment between profit and cash flow indicates healthier operations.'
    },
    {
      id: 'q8',
      question: 'If you were Jennifer Kim advising Sarah about presenting to investors, what would be the most important message about financial statements?',
      answers: [
        'The three statements work together to tell one credible story about business performance, position, and cash management',
        'Only the Income Statement matters because it shows profitability',
        'Financial statements are just formalities required by accounting rules',
        'Investors prefer simple spreadsheets over formal financial statements'
      ],
      explanation: 'The key insight is integration - investors need to see how profitability (Income Statement), financial position (Balance Sheet), and cash management (Cash Flow Statement) work together to demonstrate business health and growth potential.'
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
          {/* Assessment Introduction */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Formative Assessment: Three-Statement Storyboard Mastery
              </CardTitle>
              <CardDescription>
                Demonstrate your understanding of integrated financial statement analysis
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base leading-relaxed mb-4">
                  This assessment evaluates your mastery of the core concepts from today's lesson. You'll demonstrate understanding of how the three financial statements work together as an integrated storyboard to communicate business health to investors and other stakeholders.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Assessment Focus Areas
                  </h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Understanding the three-statement storyboard concept</li>
                    <li>• Explaining why standardized financial statements matter</li>
                    <li>• Applying the accounting equation to real scenarios</li>
                    <li>• Analyzing integrated financial statement information</li>
                    <li>• Connecting financial data to business performance stories</li>
                  </ul>
                </div>

                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-yellow-800 font-semibold">Assessment Standards</p>
                    <p className="text-sm text-yellow-700">
                      This is a formative assessment designed to help you and your teacher understand your current mastery level. Retries are not available - demonstrate your best understanding on each question.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Concept Assessment */}
          <ComprehensionCheck
            questions={assessmentQuestions}
            title="Core Concept Mastery Check"
            description="Demonstrate understanding of the three-statement storyboard and its business applications"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Mastery Fill-in-the-Blank */}
          <FillInTheBlank
            sentences={masteryCheck}
            title="Financial Statement Integration Vocabulary"
            description="Complete these key concept statements to demonstrate vocabulary mastery"
            showWordList={false}
            randomizeWordOrder={false}
            showHints={true}
          />

          {/* Advanced Application Assessment */}
          <Card className="border-purple-200">
            <CardHeader className="bg-orange-50">
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Advanced Application: Integrated Analysis
              </CardTitle>
              <CardDescription>
                Apply your knowledge to complex business scenarios requiring integrated thinking
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                These questions require you to demonstrate the higher-level thinking skills that Sarah needed when working with Jennifer Kim to present her business story to investors.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={comprehensiveAssessment}
            title="Advanced Financial Statement Analysis"
            description="Demonstrate ability to analyze complex integrated financial scenarios"
            showExplanations={true}
            allowRetry={false}
          />

          {/* Performance Rubric */}
          <Card className="border-purple-200">
            <CardHeader className="bg-green-50">
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                Assessment Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Proficient (80%+)</h4>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• Correctly explains three-statement integration</li>
                    <li>• Applies accounting equation accurately</li>
                    <li>• Connects financial data to business stories</li>
                    <li>• Demonstrates investor perspective thinking</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-700 mb-2">Developing (65-79%)</h4>
                  <ul className="text-sm text-yellow-600 space-y-1">
                    <li>• Understands basic statement purposes</li>
                    <li>• Makes some calculation errors</li>
                    <li>• Explains concepts with some confusion</li>
                    <li>• Shows partial business application</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-2">Beginning (&lt;65%)</h4>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• Confused about statement relationships</li>
                    <li>• Frequent calculation mistakes</li>
                    <li>• Difficulty connecting concepts to business</li>
                    <li>• Needs additional support and practice</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Next Steps:</strong> Based on your performance, your teacher will provide targeted feedback and determine if you're ready to move forward with building actual financial statements in the upcoming lessons.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Self-Reflection Component */}
          <Card className="border-purple-200">
            <CardHeader className="bg-purple-100">
              <CardTitle className="text-purple-800">Post-Assessment Self-Reflection</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-base mb-4">
                Take a moment to reflect on your assessment performance and learning from today's lesson:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Confidence Level Check</h4>
                  <p className="text-sm text-gray-600 mb-3">Rate how confident you feel about these skills (1 = Need more help, 5 = Very confident):</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span>Explaining the three-statement storyboard concept</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Understanding why external stakeholders need standardized statements</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Applying the accounting equation to solve problems</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Connecting financial numbers to business performance stories</span>
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(i => (
                          <Badge key={i} variant="outline" className="w-6 h-6 p-0 text-xs">
                            {i}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">Learning Insights</h4>
                  <p className="text-sm text-yellow-700 mb-2">Consider these reflection questions:</p>
                  <ul className="text-sm text-yellow-600 space-y-1 list-disc list-inside">
                    <li>What was your biggest "aha" moment during today's lesson?</li>
                    <li>Which concept do you want to understand better before tomorrow?</li>
                    <li>How has your understanding of financial statements changed?</li>
                    <li>What questions do you want to ask your teacher about integrated statement analysis?</li>
                  </ul>
                </div>
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