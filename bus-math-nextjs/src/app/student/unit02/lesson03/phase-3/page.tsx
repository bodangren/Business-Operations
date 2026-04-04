import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, AlertTriangle, ArrowRight } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2]

const practiceQuestions = [
  {
    id: "practice1",
    question: "Sarah's business now has two revenue accounts: Service Revenue ($8,700) and Interest Revenue ($45). What is the correct Step 1 closing entry?",
    answers: [
      "DR Service Revenue $8,700, DR Interest Revenue $45, CR Income Summary $8,745",
      "DR Income Summary $8,745, CR Service Revenue $8,700, CR Interest Revenue $45",
      "DR Service Revenue $8,700, CR Income Summary $8,700 (Interest Revenue is permanent)",
      "DR Service Revenue $8,700, DR Interest Revenue $45, CR Retained Earnings $8,745"
    ],
    explanation: "Both revenue accounts have credit balances. To close them, debit each revenue account and credit Income Summary for the total: $8,700 + $45 = $8,745."
  },
  {
    id: "practice2",
    question: "After closing revenues ($8,745) and expenses ($5,200) to Income Summary, what is the balance in Income Summary before Step 3?",
    answers: [
      "$3,545 credit balance (net income)",
      "$3,545 debit balance (net loss)",
      "$13,945 credit balance",
      "$0 — it's already closed"
    ],
    explanation: "Income Summary has a credit of $8,745 from Step 1 and a debit of $5,200 from Step 2. The net is $8,745 − $5,200 = $3,545 credit, which represents net income."
  },
  {
    id: "practice3",
    question: "Sarah's Retained Earnings had a beginning balance of $12,000. Net income is $3,545 and she paid $800 in dividends. What is the ending Retained Earnings after all closing entries?",
    answers: [
      "$14,745",
      "$15,545",
      "$16,345",
      "$12,000"
    ],
    explanation: "Ending RE = Beginning RE + Net Income − Dividends = $12,000 + $3,545 − $800 = $14,745."
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Guided Practice: A More Complex Close
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-green-900">
                <p>
                  Sarah's March was straightforward — one revenue account, four expenses, no dividends.
                  Now let's make it more realistic. Her business has grown, and the April adjusted trial
                  balance looks more complicated.
                </p>
                <p>
                  Your job: work through all four closing steps for this new set of accounts. The
                  procedure is the same, but there are more accounts to track and one extra wrinkle.
                </p>
              </div>

              <div className="not-prose">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h4 className="font-semibold text-green-900 mb-3">TechStart Solutions — Adjusted Trial Balances (April 30)</h4>
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-green-300 px-3 py-2 text-left">Account</th>
                        <th className="border border-green-300 px-3 py-2 text-right">Balance</th>
                        <th className="border border-green-300 px-3 py-2 text-center">Normal Side</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Service Revenue</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$12,400</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Credit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Interest Revenue</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$45</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Credit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Rent Expense</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$1,500</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Salaries Expense</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$3,200</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Depreciation Expense</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$75</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Supplies Expense</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$480</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Utilities Expense</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$210</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                      <tr>
                        <td className="border border-green-200 px-3 py-2">Dividends</td>
                        <td className="border border-green-200 px-3 py-2 text-right">$800</td>
                        <td className="border border-green-200 px-3 py-2 text-center">Debit</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-900 mb-2">Your Task</h4>
                <p className="text-sm text-green-800 mb-3">
                  Work through all four closing steps. For each step, write the journal entry and
                  calculate the running balance in Income Summary.
                </p>
                <div className="space-y-2 text-sm text-green-800">
                  <p><strong>Step 1:</strong> Close all revenue accounts. What is the total credit to Income Summary?</p>
                  <p><strong>Step 2:</strong> Close all expense accounts. What is the total debit to Income Summary?</p>
                  <p><strong>Step 3:</strong> Close Income Summary to Retained Earnings. Is it net income or net loss? What amount?</p>
                  <p><strong>Step 4:</strong> Close Dividends to Retained Earnings.</p>
                </div>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Watch Out
                </h4>
                <p className="text-sm text-amber-800">
                  There are now <strong>two revenue accounts</strong> and <strong>five expense accounts</strong>.
                  Each one must be closed individually — do not combine them into one line unless the
                  problem explicitly tells you to. Also, remember that <strong>Dividends is NOT an expense</strong>.
                  It closes directly to Retained Earnings, not through Income Summary.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">Explain Your Reasoning</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>
                  Answer the questions below. These test not just whether you can compute the entries,
                  but whether you understand <em>why</em> each step works the way it does.
                </p>
              </div>
              <ComprehensionCheck
                title="Reasoning Check"
                description="These questions ask you to explain, not just calculate."
                questions={practiceQuestions}
                showExplanations={true}
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Solution Walkthrough
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3 not-prose">
                <details className="bg-white rounded border border-purple-200">
                  <summary className="cursor-pointer p-3 font-semibold text-purple-900">Step 1: Close Revenues</summary>
                  <div className="p-3 border-t border-purple-200 text-sm font-mono text-purple-900">
                    <p>DR Service Revenue ............ $12,400</p>
                    <p>DR Interest Revenue ............ $45</p>
                    <p className="ml-8">CR Income Summary ............ $12,445</p>
                    <p className="mt-2 text-purple-700 not-font-mono">Income Summary balance: $12,445 credit</p>
                  </div>
                </details>
                <details className="bg-white rounded border border-purple-200">
                  <summary className="cursor-pointer p-3 font-semibold text-purple-900">Step 2: Close Expenses</summary>
                  <div className="p-3 border-t border-purple-200 text-sm font-mono text-purple-900">
                    <p>DR Income Summary ............ $5,465</p>
                    <p className="ml-8">CR Rent Expense ............ $1,500</p>
                    <p className="ml-8">CR Salaries Expense ............ $3,200</p>
                    <p className="ml-8">CR Depreciation Expense ............ $75</p>
                    <p className="ml-8">CR Supplies Expense ............ $480</p>
                    <p className="ml-8">CR Utilities Expense ............ $210</p>
                    <p className="mt-2 text-purple-700 not-font-mono">Income Summary balance: $12,445 CR − $5,465 DR = $6,980 credit</p>
                  </div>
                </details>
                <details className="bg-white rounded border border-purple-200">
                  <summary className="cursor-pointer p-3 font-semibold text-purple-900">Step 3: Close Income Summary</summary>
                  <div className="p-3 border-t border-purple-200 text-sm font-mono text-purple-900">
                    <p>DR Income Summary ............ $6,980</p>
                    <p className="ml-8">CR Retained Earnings ............ $6,980</p>
                    <p className="mt-2 text-purple-700 not-font-mono">Net income of $6,980. Income Summary is now $0.</p>
                  </div>
                </details>
                <details className="bg-white rounded border border-purple-200">
                  <summary className="cursor-pointer p-3 font-semibold text-purple-900">Step 4: Close Dividends</summary>
                  <div className="p-3 border-t border-purple-200 text-sm font-mono text-purple-900">
                    <p>DR Retained Earnings ............ $800</p>
                    <p className="ml-8">CR Dividends ............ $800</p>
                    <p className="mt-2 text-purple-700 not-font-mono">Dividends is now $0. Retained Earnings increased by $6,980 − $800 = $6,180 net.</p>
                  </div>
                </details>
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