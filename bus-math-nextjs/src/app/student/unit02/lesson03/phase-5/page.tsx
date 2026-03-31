import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, CheckCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const exitTicketQuestions = [
  {
    id: "exit1",
    question: "Which of the following accounts is a permanent account that is NOT closed at the end of the period?",
    answers: [
      "Accounts Receivable",
      "Service Revenue",
      "Salaries Expense",
      "Dividends"
    ],
    explanation: "Accounts Receivable is an asset account, which is permanent. Revenue, expense, and dividend accounts are all temporary and must be closed."
  },
  {
    id: "exit2",
    question: "A company has Service Revenue of $15,000, Rent Expense of $4,000, and Salaries Expense of $6,000. After completing Steps 1 and 2 of the closing process, what is the balance in Income Summary?",
    answers: [
      "$5,000 credit balance",
      "$5,000 debit balance",
      "$25,000 credit balance",
      "$0 — it has already been closed"
    ],
    explanation: "Step 1 credits Income Summary $15,000. Step 2 debits Income Summary $10,000 ($4,000 + $6,000). The balance is $15,000 − $10,000 = $5,000 credit, which represents net income."
  },
  {
    id: "exit3",
    question: "Why does the closing process use an Income Summary account instead of closing revenue and expenses directly to Retained Earnings?",
    answers: [
      "It creates a clear audit trail showing how net income was calculated during the closing process",
      "It is required by the IRS for tax reporting purposes",
      "It prevents errors in the revenue and expense accounts",
      "It allows the company to defer taxes on net income"
    ],
    explanation: "Income Summary provides a visible, auditable record of the net income calculation within the closing entries themselves. This makes it easy for auditors and managers to verify the closing process."
  },
  {
    id: "exit4",
    question: "After all closing entries are posted, which of the following accounts should have a zero balance?",
    answers: [
      "Depreciation Expense",
      "Accumulated Depreciation",
      "Retained Earnings",
      "Accounts Payable"
    ],
    explanation: "Depreciation Expense is a temporary account and is closed to zero. Accumulated Depreciation is a permanent contra-asset account and carries forward. Retained Earnings and Accounts Payable are also permanent."
  },
  {
    id: "exit5",
    question: "Sarah's business has beginning Retained Earnings of $8,000, net income of $3,500, and dividends of $1,000. What is the ending Retained Earnings after closing?",
    answers: [
      "$10,500",
      "$11,500",
      "$12,500",
      "$8,000"
    ],
    explanation: "Ending RE = Beginning RE + Net Income − Dividends = $8,000 + $3,500 − $1,000 = $10,500."
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

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Exit Ticket: Closing Entries
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-orange-900">
                <p>
                  This short check confirms you can distinguish temporary from permanent accounts,
                  follow the four-step closing sequence, and reason through common closing-entry
                  scenarios.
                </p>
                <p>
                  Aim for at least 80% (4 out of 5 correct). If you miss any, review the explanation
                  and revisit Phase 2 before moving on.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">What This Checks</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Temporary vs permanent account identification</li>
                      <li>• Income Summary balance calculations</li>
                      <li>• Purpose of the closing process</li>
                      <li>• Retained Earnings after closing</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-200 text-blue-800">What This Does NOT Check</Badge>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Adjusting entry calculations (Lesson 02)</li>
                      <li>• Excel or automation skills (Lessons 05-06)</li>
                      <li>• Full month-end checklist (Lesson 04)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Closing Entries Exit Ticket"
            description="Answer all five questions. Review any explanations for questions you miss."
            questions={exitTicketQuestions}
            showExplanations={true}
            allowRetry={true}
          />

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