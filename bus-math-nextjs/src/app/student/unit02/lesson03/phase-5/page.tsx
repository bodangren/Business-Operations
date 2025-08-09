import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, TrendingUp, Award } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Phase 5

const assessmentQuestions = [
  {
    id: "assess1",
    question: "Sarah completed $800 of website design work on March 28th but won't invoice until April 2nd. What adjusting entry should she make on March 31st?",
    answers: [
      "Debit Accounts Receivable $800, Credit Service Revenue $800",
      "Debit Cash $800, Credit Service Revenue $800", 
      "Debit Service Revenue $800, Credit Accounts Receivable $800",
      "No entry needed until the invoice is sent"
    ],
    explanation: "Under accrual accounting, revenue is recorded when earned, not when billed. Sarah earned this revenue in March by completing the work, creating a receivable (asset) and revenue."
  },
  {
    id: "assess2",
    question: "A client paid Sarah $2,400 on March 10th for 8 months of social media services. By March 31st, how much should she recognize as revenue?",
    answers: [
      "$200 (2.5 weeks of an 8-month contract)",
      "$300 (one full month of the contract)",
      "$600 (25% of the total payment)",
      "$2,400 (the full amount received)"
    ],
    explanation: "March service period: March 10-31 = 22 days = approximately 2.5 weeks. Monthly rate: $2,400 ÷ 8 months = $300/month. Partial month: $300 × (22 ÷ 31) = approximately $200."
  },
  {
    id: "assess3", 
    question: "Sarah's equipment cost $4,500, has a useful life of 5 years, and salvage value of $500. What is the monthly straight-line depreciation?",
    answers: [
      "$66.67",
      "$75.00",
      "$90.00", 
      "$900.00"
    ],
    explanation: "Annual depreciation = ($4,500 - $500) ÷ 5 years = $800/year. Monthly depreciation = $800 ÷ 12 months = $66.67/month."
  },
  {
    id: "assess4",
    question: "When recording monthly depreciation, which accounts are affected?",
    answers: [
      "Debit Depreciation Expense, Credit Accumulated Depreciation",
      "Debit Equipment, Credit Depreciation Expense",
      "Debit Accumulated Depreciation, Credit Equipment",
      "Debit Cash, Credit Depreciation Expense"
    ],
    explanation: "Depreciation expense increases (debit) to match the asset's usage with revenue generation. Accumulated Depreciation increases (credit) as a contra-asset to reduce the equipment's book value."
  },
  {
    id: "assess5",
    question: "Why is Accumulated Depreciation used instead of directly reducing the Equipment account?",
    answers: [
      "It preserves the original cost information while showing how much value has been used up",
      "It makes the accounting equation easier to balance",
      "It's required by tax law but not by GAAP",
      "It allows the company to avoid recording depreciation expense"
    ],
    explanation: "Using Accumulated Depreciation (a contra-asset) preserves the historical cost of the asset while clearly showing how much depreciation has been recorded over time."
  },
  {
    id: "assess6",
    question: "Sarah has $5,200 in Service Revenue and $2,800 in total expenses at year-end. What is her first closing entry?",
    answers: [
      "Debit Service Revenue $5,200, Credit Retained Earnings $5,200",
      "Debit Retained Earnings $2,400, Credit Net Income $2,400",
      "Debit Total Expenses $2,800, Credit Retained Earnings $2,800", 
      "Debit Cash $2,400, Credit Retained Earnings $2,400"
    ],
    explanation: "The first closing entry closes revenue accounts by debiting them (to zero them out) and crediting Retained Earnings (to transfer the revenue to equity)."
  },
  {
    id: "assess7",
    question: "After the first closing entry above, what is Sarah's second closing entry?",
    answers: [
      "Debit Retained Earnings $2,800, Credit Total Expenses $2,800",
      "Debit Service Revenue $5,200, Credit Total Expenses $2,800",
      "Debit Net Income $2,400, Credit Retained Earnings $2,400",
      "No second entry is needed"
    ],
    explanation: "The second closing entry closes expense accounts by crediting them (to zero them out) and debiting Retained Earnings (to transfer the expenses, which reduce equity)."
  },
  {
    id: "assess8", 
    question: "What is the primary purpose of closing entries at the end of an accounting period?",
    answers: [
      "To reset temporary accounts (revenue and expenses) to zero and transfer net income to permanent equity accounts",
      "To correct errors made during the accounting period",
      "To calculate the depreciation expense for assets",
      "To record all cash transactions that occurred during the period"
    ],
    explanation: "Closing entries transfer the balances from temporary accounts (revenues and expenses) to permanent equity accounts and reset the temporary accounts to zero for the next period."
  },
  {
    id: "assess9",
    question: "Which principle of GAAP requires that Sarah record revenue when work is completed rather than when cash is received?",
    answers: [
      "Revenue Recognition Principle",
      "Matching Principle", 
      "Conservatism Principle",
      "Materiality Principle"
    ],
    explanation: "The Revenue Recognition Principle requires revenue to be recorded when it is earned (work completed or goods delivered), not necessarily when cash is received."
  },
  {
    id: "assess10",
    question: "Sarah's March financial statements show $8,000 in Service Revenue and $3,500 in expenses. If she forgets to record a $600 accrued revenue adjustment, what happens to her net income?",
    answers: [
      "Net income is understated by $600",
      "Net income is overstated by $600",
      "Net income is correctly stated because the cash wasn't received",
      "Net income changes by $300 because only half the revenue is earned"
    ],
    explanation: "Missing the accrued revenue means both the receivable (asset) and revenue are understated by $600. Since revenue increases net income, net income is also understated by $600."
  }
]

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