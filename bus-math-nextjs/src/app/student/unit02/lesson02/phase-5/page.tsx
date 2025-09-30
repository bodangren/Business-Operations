import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, CheckCircle2, TrendingUp, RefreshCw } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

export default function Unit02Lesson02Phase5() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!

  const assessmentQuestions = toComprehensionCheckFormat(
    getQuestionsForLesson("lesson02")
  )

  const scenarioBlanks = [
    {
      id: "scenario1",
      text: "If a company completes $800 of work but won't bill until next month, they record accrued revenue by debiting {blank} and crediting {blank}.",
      answer: "Accounts Receivable, Service Revenue",
      hint: "Think about what the client now owes (asset) and what the company earned (revenue)"
    },
    {
      id: "scenario2", 
      text: "The straight-line depreciation formula is: Annual Depreciation = (Cost - {blank}) ÷ {blank}.",
      answer: "Salvage Value, Useful Life",
      hint: "What's subtracted from cost, and what do you divide by?"
    },
    {
      id: "scenario3",
      text: "When recording monthly depreciation, you debit {blank} and credit {blank} to properly match the asset's cost to revenue periods.",
      answer: "Depreciation Expense, Accumulated Depreciation",
      hint: "One account records the monthly expense, the other reduces the asset's book value"
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
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Mastery Assessment: Adjusting Entries & Depreciation
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Time to demonstrate your understanding of the building blocks that make month-end 
              automation possible. Sarah couldn't build her wizard without mastering these concepts—
              and neither can you!
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
              <p className="font-bold text-indigo-900 mb-2">What You'll Prove:</p>
              <ul className="text-indigo-800 space-y-1">
                <li>• You can correctly identify and record accrued revenue scenarios</li>
                <li>• You understand deferred revenue timing and adjustments</li>
                <li>• You can calculate and record straight-line depreciation</li>
                <li>• You know the purpose and process of closing entries</li>
              </ul>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Assessment Part 1: Concept Mastery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                These questions test your understanding of the GAAP principles and timing 
                rules that govern adjusting entries. Take your time and think through each scenario.
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">Success Criteria:</p>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Correctly identify when adjusting entries are needed</li>
                  <li>• Apply the matching principle to revenue recognition</li>
                  <li>• Calculate depreciation using the straight-line method</li>
                  <li>• Understand the purpose of contra-asset accounts</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck 
            questions={assessmentQuestions}
            title="Adjusting Entries Mastery Check"
            showExplanations={true}
          />

          <Card className="border-green-200 bg-green-50 mb-8">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Assessment Part 2: Application Skills
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Now apply your knowledge to complete journal entry scenarios. This tests 
                your ability to translate business situations into correct accounting entries.
              </p>
              
              <div className="bg-white p-4 rounded border border-green-200">
                <p className="font-semibold text-green-900 mb-2">Key Skills Tested:</p>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• Proper debit and credit selection for each account type</li>
                  <li>• Accurate calculation of amounts and timing</li>
                  <li>• Understanding of account relationships and effects</li>
                  <li>• Application of accrual accounting principles</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={scenarioBlanks}
            title="Journal Entry Application"
            description="Complete these adjusting entry scenarios by filling in the correct account names and calculations"
            showHints={true}
          />

          <Card className="border-purple-200 bg-purple-50 mt-8">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <RefreshCw className="h-5 w-5" />
                Self-Assessment Reflection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-4">
                Before moving forward, take a moment to honestly assess your understanding:
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Rate Your Confidence (1-5 scale):</h4>
                  <ul className="text-purple-800 text-sm space-y-2">
                    <li>• Identifying when accruals and deferrals are needed: ___</li>
                    <li>• Calculating straight-line depreciation correctly: ___</li>
                    <li>• Recording proper debits and credits for each scenario: ___</li>
                    <li>• Understanding the business logic behind each entry: ___</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Reflection Questions:</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>• Which concept was most challenging to master?</li>
                    <li>• How will this foundation help you build automation?</li>
                    <li>• What questions do you still have?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Ready for Automation!</h3>
            <p className="text-green-800 mb-3">
              If you scored well on this assessment, you have the foundational knowledge needed 
              to build Sarah's Month-End Wizard. You understand the <em>what</em> and <em>why</em> 
              behind adjusting entries.
            </p>
            <div className="bg-white p-4 rounded border border-green-200">
              <p className="font-semibold text-green-900 mb-2">What's Next:</p>
              <p className="text-green-800 text-sm">
                In the closing phase, you'll reflect on this learning journey and prepare for 
                the next challenge: translating this logical understanding into automated Excel 
                macros and VBA code.
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