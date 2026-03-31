import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, AlertTriangle } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1]

const conceptBlanks = [
  {
    id: "blank1",
    text: "Revenue, expense, and dividend accounts are called {blank} accounts because they track activity for only one accounting period.",
    answer: "temporary",
    hint: "These accounts reset to zero at the end of each period",
    category: "Account Types"
  },
  {
    id: "blank2",
    text: "Asset, liability, and equity accounts are called {blank} accounts because their balances carry forward to the next period.",
    answer: "permanent",
    alternativeAnswers: ["real"],
    hint: "These accounts never reset to zero",
    category: "Account Types"
  },
  {
    id: "blank3",
    text: "The {blank} account is a temporary clearing account used only during the closing process to hold the net income or net loss amount.",
    answer: "Income Summary",
    alternativeAnswers: ["income summary", "income"],
    hint: "This account exists only during closing and has a zero balance the rest of the year",
    category: "Closing Process"
  },
  {
    id: "blank4",
    text: "After all closing entries are posted, the balance in Retained Earnings should equal the beginning balance plus {blank} minus any dividends.",
    answer: "net income",
    alternativeAnswers: ["net income amount", "the net income", "profit", "net profit"],
    hint: "This is revenue minus expenses for the period",
    category: "Retained Earnings"
  }
]

const conceptQuestions = [
  {
    id: "check1",
    question: "Which of the following is a temporary account?",
    answers: [
      "Service Revenue",
      "Cash",
      "Accounts Payable",
      "Retained Earnings"
    ],
    explanation: "Service Revenue is a temporary account — it tracks revenue earned during one period and resets to zero at the end. Cash, Accounts Payable, and Retained Earnings are permanent accounts."
  },
  {
    id: "check2",
    question: "What is the purpose of the Income Summary account?",
    answers: [
      "It temporarily holds the net income or net loss amount before it is transferred to Retained Earnings",
      "It tracks all revenue earned during the year",
      "It records depreciation expense each month",
      "It is used to adjust prepaid expenses"
    ],
    explanation: "Income Summary is a temporary clearing account used only during closing. Revenue and expenses are closed into it first, then its balance (net income or loss) is closed to Retained Earnings."
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                The Rule: Temporary vs Permanent Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>
                  Every account in the ledger belongs to one of two teams. Understanding which team
                  an account is on tells you whether it needs to be closed at the end of the period.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-red-200 text-red-800 w-fit">Temporary Accounts</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-red-800 mb-2">
                      <strong>Reset to $0</strong> at the end of each period.
                    </p>
                    <ul className="text-xs text-red-700 space-y-1">
                      <li>• All <strong>Revenue</strong> accounts (Service Revenue, Interest Revenue, etc.)</li>
                      <li>• All <strong>Expense</strong> accounts (Rent, Salaries, Supplies, Depreciation, etc.)</li>
                      <li>• <strong>Dividends</strong> (or Owner's Drawings)</li>
                    </ul>
                    <p className="text-xs text-red-700 mt-2 italic">
                      Think of these as the "scoreboard" for one game. After the game ends, the
                      scoreboard resets for the next game.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-green-200 text-green-800 w-fit">Permanent Accounts</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-green-800 mb-2">
                      <strong>Carry forward</strong> — their balances continue into the next period.
                    </p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• All <strong>Asset</strong> accounts (Cash, Accounts Receivable, Equipment, etc.)</li>
                      <li>• All <strong>Liability</strong> accounts (Accounts Payable, Notes Payable, etc.)</li>
                      <li>• All <strong>Equity</strong> accounts (Common Stock, Retained Earnings)</li>
                    </ul>
                    <p className="text-xs text-green-700 mt-2 italic">
                      Think of these as the "season standings." They accumulate over time and
                      never reset.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                The Four-Step Closing Procedure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-amber-900">
                <p>
                  Closing entries always follow the same four steps. The order matters because each
                  step feeds into the next. We'll use Sarah's March adjusted balances to walk through
                  each step.
                </p>
              </div>

              <div className="space-y-4 not-prose">
                <Card className="border-amber-300 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500 text-white">Step 1</Badge>
                      <h4 className="font-semibold text-amber-900">Close Revenue Accounts to Income Summary</h4>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-amber-800">
                      Revenue accounts have <strong>credit</strong> balances. To zero them out, we
                      <strong> debit</strong> each revenue account and <strong>credit</strong> Income Summary.
                    </p>
                    <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm font-mono">
                      <p className="text-amber-900">DR Service Revenue ............ $8,700</p>
                      <p className="text-amber-900 ml-8">CR Income Summary ............ $8,700</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-amber-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <p>Service Revenue is now $0. Income Summary has a credit of $8,700.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-300 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500 text-white">Step 2</Badge>
                      <h4 className="font-semibold text-amber-900">Close Expense Accounts to Income Summary</h4>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-amber-800">
                      Expense accounts have <strong>debit</strong> balances. To zero them out, we
                      <strong> credit</strong> each expense account and <strong>debit</strong> Income Summary
                      for the total.
                    </p>
                    <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm font-mono">
                      <p className="text-amber-900">DR Income Summary ............ $4,695</p>
                      <p className="text-amber-900 ml-8">CR Rent Expense ............ $1,500</p>
                      <p className="text-amber-900 ml-8">CR Salaries Expense ............ $2,800</p>
                      <p className="text-amber-900 ml-8">CR Depreciation Expense ............ $75</p>
                      <p className="text-amber-900 ml-8">CR Supplies Expense ............ $320</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-amber-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <p>All expense accounts are now $0. Income Summary: $8,700 CR − $4,695 DR = $4,005 CR (net income).</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-300 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500 text-white">Step 3</Badge>
                      <h4 className="font-semibold text-amber-900">Close Income Summary to Retained Earnings</h4>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-amber-800">
                      Income Summary now holds the <strong>net income</strong> of $4,005 as a credit balance.
                      To close it, we <strong>debit</strong> Income Summary and <strong>credit</strong> Retained Earnings.
                    </p>
                    <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm font-mono">
                      <p className="text-amber-900">DR Income Summary ............ $4,005</p>
                      <p className="text-amber-900 ml-8">CR Retained Earnings ............ $4,005</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-amber-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <p>Income Summary is now $0. Retained Earnings increased by $4,005.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-amber-300 bg-white">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-amber-500 text-white">Step 4</Badge>
                      <h4 className="font-semibold text-amber-900">Close Dividends to Retained Earnings</h4>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-amber-800">
                      Dividends have a <strong>debit</strong> balance. To close, we <strong>credit</strong>
                      Dividends and <strong>debit</strong> Retained Earnings. (If Sarah paid no dividends
                      in March, this step is skipped.)
                    </p>
                    <div className="bg-amber-50 p-3 rounded border border-amber-200 text-sm font-mono">
                      <p className="text-amber-900">DR Retained Earnings ............ $500</p>
                      <p className="text-amber-900 ml-8">CR Dividends ............ $500</p>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-amber-700">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-600" />
                      <p>Dividends is now $0. Retained Earnings decreased by $500.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2">Visualizing with T-Accounts</h3>
                <p className="text-sm text-amber-800 mb-3">
                  T-accounts make it easy to see how closing entries zero out temporary accounts.
                  Here's what Income Summary looks like after all four steps:
                </p>
                <div className="not-prose max-w-sm mx-auto">
                  <div className="border-2 border-amber-400 rounded">
                    <div className="text-center font-bold text-amber-900 bg-amber-100 py-1 border-b-2 border-amber-400">
                      Income Summary
                    </div>
                    <div className="grid grid-cols-2 divide-x-2 divide-amber-400">
                      <div className="p-2">
                        <div className="text-xs font-semibold text-amber-700 mb-1">Debit</div>
                        <div className="text-xs font-mono text-amber-900">$4,695 (Step 2)</div>
                        <div className="text-xs font-mono text-amber-900">$4,005 (Step 3)</div>
                        <div className="text-xs font-mono text-amber-900 border-t border-amber-300 mt-1 pt-1 font-bold">$8,700</div>
                      </div>
                      <div className="p-2">
                        <div className="text-xs font-semibold text-amber-700 mb-1">Credit</div>
                        <div className="text-xs font-mono text-amber-900">$8,700 (Step 1)</div>
                        <div className="text-xs font-mono text-amber-900 border-t border-amber-300 mt-1 pt-1 font-bold">$8,700</div>
                      </div>
                    </div>
                    <div className="text-center text-xs text-green-700 bg-green-50 py-1 border-t border-amber-400 font-semibold">
                      Balance: $0 ✓
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Common Mistake
                </h3>
                <p className="text-sm text-red-800">
                  Students sometimes close revenue directly to Retained Earnings, skipping Income Summary.
                  While the final Retained Earnings number would be the same, GAAP requires the Income Summary
                  step because it creates a clear audit trail showing exactly how net income was calculated
                  during the closing process.
                </p>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={conceptBlanks}
            title="Lock in the Vocabulary"
            description="Fill in the blanks to confirm you understand the key terms for closing entries."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          <ComprehensionCheck
            title="Concept Check"
            description="Verify your understanding of the closing-entry procedure."
            questions={conceptQuestions}
            showExplanations={true}
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