import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, TrendingUp, DollarSign } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase2() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!
  
  const conceptQuestions = [
    {
      id: "concept1",
      question: "What is the main purpose of adjusting entries in accrual accounting?",
      answers: [
        "To match revenues to expenses in the correct accounting period",
        "To record all cash transactions immediately",
        "To calculate tax obligations for the business",
        "To update bank account balances"
      ]
    },
    {
      id: "concept2",
      question: "When Sarah completes work for a client but won't invoice until next month, she should record:",
      answers: [
        "Accrued revenue (debit Accounts Receivable, credit Service Revenue)",
        "Deferred revenue (debit Cash, credit Unearned Revenue)",
        "Nothing until the invoice is sent",
        "Cash receipt (debit Cash, credit Service Revenue)"
      ]
    },
    {
      id: "concept3",
      question: "The straight-line depreciation formula spreads an asset's cost over its useful life to:",
      answers: [
        "Match the asset's cost to all periods it helps generate revenue",
        "Reduce the company's tax liability each year",
        "Prepare for the asset's eventual replacement",
        "Calculate the asset's current market value"
      ]
    }
  ]

  const vocabularyBlanks = [
    {
      id: "vocab1",
      text: "When a client pays Sarah for services before she performs the work, she records {blank} because she owes the client future services.",
      answer: "deferred revenue",
      hint: "This creates a liability because work is owed to the client",
      alternativeAnswers: ["unearned revenue"]
    },
    {
      id: "vocab2",
      text: "Sarah's computer system cost $3,000 with a 3-year useful life and $300 salvage value. Her monthly depreciation expense is {blank}.",
      answer: "$75",
      hint: "Calculate: ($3,000 - $300) ÷ 3 years ÷ 12 months"
    },
    {
      id: "vocab3",
      text: "The {blank} account reduces an asset's book value over time while keeping the original cost on the balance sheet.",
      answer: "Accumulated Depreciation",
      hint: "This is a contra-asset account that works with depreciation",
      alternativeAnswers: ["accumulated depreciation"]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              The Building Blocks of Automation
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Sarah's ambitious goal—cutting closing time from two days to two hours—required 
              mastering the specific accounting rules that make month-end closes accurate and 
              GAAP-compliant. The entire process relies on <strong>adjusting entries</strong>.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-900 mb-2">What are Adjusting Entries?</p>
              <p className="text-blue-800">
                Special entries made at the end of an accounting period to ensure financial 
                statements accurately reflect what happened during that period, even if cash 
                hasn't changed hands yet. This is the core of <em>accrual accounting</em>.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Accrued Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 mb-3">
                  <strong>The Scenario:</strong> Sarah completes a month of social media work for 
                  the fitness studio but won't send the invoice until the 5th of next month.
                </p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="text-sm font-medium text-green-900 mb-1">The Solution:</p>
                  <p className="text-sm text-green-800">
                    Record the revenue in the current month because that's when she earned it, 
                    following the matching principle.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Deferred Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800 mb-3">
                  <strong>The Scenario:</strong> A client pays Sarah $1,200 on March 15th for a 
                  six-month social media package.
                </p>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <p className="text-sm font-medium text-orange-900 mb-1">The Solution:</p>
                  <p className="text-sm text-orange-800">
                    She can't count all that money as revenue immediately—she hasn't done the 
                    work yet. She recognizes revenue monthly as she completes the service.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-purple-200 bg-purple-50 mb-8">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Straight-Line Depreciation: The Formula That Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-4">
                When Sarah bought her computer system, it was misleading to record the entire 
                cost as an expense in one month. The computer helps her business for years, so 
                accountants spread the cost over its useful life.
              </p>
              
              <div className="bg-white p-4 rounded border border-purple-200 mb-4">
                <div className="text-center mb-4">
                  <div className="text-lg font-mono bg-gray-100 p-2 rounded">
                    Annual Depreciation = (Cost of Asset - Salvage Value) ÷ Useful Life
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">Sarah's Example:</h4>
                    <ul className="text-sm space-y-1 text-purple-800">
                      <li>• Computer cost: $3,000</li>
                      <li>• Useful life: 3 years</li>
                      <li>• Salvage value: $300</li>
                      <li>• Annual depreciation: $900</li>
                      <li>• <strong>Monthly depreciation: $75</strong></li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-2">The Calculation:</h4>
                    <div className="text-sm space-y-1 text-purple-800">
                      <div>($3,000 - $300) ÷ 3 years = $900/year</div>
                      <div>$900 ÷ 12 months = $75/month</div>
                      <div className="font-semibold">Each month: $75 expense</div>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-purple-800 text-sm">
                This ensures the computer's cost is matched to all the months it helps Sarah 
                earn revenue—a perfect example of the matching principle in action.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck 
            questions={conceptQuestions}
            title="Understanding Adjusting Entries"
            showExplanations={true}
          />

          <FillInTheBlank 
            sentences={vocabularyBlanks}
            title="Key Concepts Practice"
            description="Fill in the blanks to complete these important accounting concepts"
            showHints={true}
          />

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🎯 Why This Foundation Matters</h3>
            <p className="text-yellow-800 mb-4">
              Mastering accruals, deferrals, and depreciation was Sarah's first step in creating 
              the logic for her Month-End Wizard. You can't automate what you don't understand!
            </p>
            
            <div className="bg-white p-4 rounded border border-yellow-200">
              <p className="font-semibold text-yellow-900 mb-2">Next up:</p>
              <p className="text-yellow-800">
                Now that you understand the <em>what</em> and <em>why</em> of adjusting entries, 
                you'll learn to create the precise debit and credit mappings that will become 
                the blueprint for your automation.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}