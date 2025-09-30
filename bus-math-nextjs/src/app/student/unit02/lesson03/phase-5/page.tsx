import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, TrendingUp, Award } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson03Phases[4] // Phase 5

const assessmentQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson03")
)

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Mastery Assessment: Adjusting Entry Expertise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-orange-900">
                <p>
                  This assessment evaluates your mastery of the three core learning objectives from this lesson:
                </p>
                <ul className="text-orange-800 list-disc list-inside space-y-1">
                  <li>Record accruals and deferrals in accordance with GAAP standards</li>
                  <li>Calculate and post straight-line depreciation entries</li>
                  <li>Execute proper closing entries to zero temporary accounts</li>
                </ul>
                <p>
                  These questions mirror the challenges Sarah faces during her month-end closing process. 
                  Your success here demonstrates readiness to tackle the automation challenges in the 
                  upcoming lessons of Unit 2.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">Mastery Goal</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">80% or Higher</h4>
                    <p className="text-sm text-green-800">
                      Achieving 80% demonstrates solid understanding of adjusting entry principles 
                      and readiness for advanced automation concepts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <Badge className="bg-blue-200 text-blue-800">Professional Standards</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-blue-900 mb-2">GAAP Compliance</h4>
                    <p className="text-sm text-blue-800">
                      Questions focus on proper application of GAAP principles that professional 
                      accountants use in real month-end closing processes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-purple-600" />
                      <Badge className="bg-purple-200 text-purple-800">Career Readiness</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-purple-900 mb-2">Applied Knowledge</h4>
                    <p className="text-sm text-purple-800">
                      These scenarios reflect actual challenges you'll encounter in business 
                      internships, accounting roles, or entrepreneurship.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Study Reminders */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Quick Review: Key Concepts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Adjusting Entry Types</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Accrued Revenue</h5>
                      <p className="text-xs text-blue-700">Work done, not yet billed → DR Accounts Receivable, CR Service Revenue</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Deferred Revenue</h5>
                      <p className="text-xs text-blue-700">Cash received, work partially done → DR Deferred Revenue, CR Service Revenue (for earned portion)</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Depreciation</h5>
                      <p className="text-xs text-blue-700">(Cost - Salvage) ÷ Life → DR Depreciation Expense, CR Accumulated Depreciation</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Closing Entries</h5>
                      <p className="text-xs text-blue-700">Transfer revenues & expenses to Retained Earnings, reset temporary accounts to zero</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Critical Success Factors</h4>
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Business Analysis First</h5>
                      <p className="text-xs text-blue-700">Always understand what actually happened in the business before determining the accounting treatment</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">GAAP Principles</h5>
                      <p className="text-xs text-blue-700">Revenue Recognition & Matching Principle guide when to record transactions</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Account Classification</h5>
                      <p className="text-xs text-blue-700">Know your account types: Assets, Liabilities, Equity, Revenue, Expenses and their debit/credit rules</p>
                    </div>
                    <div className="p-3 bg-white rounded border border-blue-200">
                      <h5 className="font-medium text-blue-800 text-sm">Mathematical Precision</h5>
                      <p className="text-xs text-blue-700">Calculate depreciation, proration of revenue/expenses, and verify that debits equal credits</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="Unit 2 Lesson 3 Assessment: Four Scenarios into Ledger"
            description="Demonstrate mastery of adjusting entry concepts through these comprehensive scenarios."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Career Connection */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Career Impact: Why This Knowledge Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-green-900">
                <p>
                  The adjusting entry skills you've developed in this lesson are fundamental to several career paths:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4 not-prose">
                <Card className="border-green-300 bg-green-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-600 text-green-100 w-fit">Entrepreneurship</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Business Ownership</h4>
                    <p className="text-sm text-green-800">
                      Understanding when to recognize revenue and expenses helps you make accurate business decisions, 
                      prepare for tax obligations, and present reliable financial information to investors or lenders.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-300 bg-green-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-600 text-green-100 w-fit">Accounting Career</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Professional Practice</h4>
                    <p className="text-sm text-green-800">
                      Month-end and year-end closing processes are core responsibilities in accounting roles. 
                      Mastery of adjusting entries is essential for bookkeeper, staff accountant, and controller positions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-300 bg-green-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-600 text-green-100 w-fit">Business Analysis</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Financial Analysis</h4>
                    <p className="text-sm text-green-800">
                      Understanding how adjusting entries affect financial statements helps you analyze company performance, 
                      evaluate investment opportunities, and identify potential accounting irregularities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-300 bg-green-100">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-600 text-green-100 w-fit">Technology/Automation</Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold text-green-900 mb-2">Fintech Innovation</h4>
                    <p className="text-sm text-green-800">
                      The logic behind adjusting entries is what powers automated accounting software. 
                      Understanding these principles prepares you to design or implement accounting technology solutions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
                <h4 className="font-semibold text-green-900 mb-2">Next: Building the Month-End Wizard</h4>
                <p className="text-green-800">
                  With solid understanding of adjusting entry principles, you're ready to help Sarah build 
                  automated systems that can perform these calculations and journal entries quickly and accurately. 
                  The upcoming lessons will transform this manual knowledge into efficient, scalable business processes.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}