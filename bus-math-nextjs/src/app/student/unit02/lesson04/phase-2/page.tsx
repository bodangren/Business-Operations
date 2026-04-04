import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, ArrowRight } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

export default function Phase2Page() {
  const fillInTheBlankSentences = [
    {
      id: "fill1",
      text: "The month-end close begins with the {blank} trial balance, which shows account balances before any adjusting entries.",
      answer: "unadjusted",
      hint: "This trial balance is prepared directly from the ledger, before corrections"
    },
    {
      id: "fill2",
      text: "After recording all adjustments, the accountant prepares the {blank} trial balance to verify debits still equal credits.",
      answer: "adjusted",
      hint: "This trial balance reflects all adjusting entries"
    },
    {
      id: "fill3",
      text: "Temporary accounts—revenue, expenses, and dividends—are closed to {blank} Summary before being transferred to Retained Earnings.",
      answer: "Income",
      hint: "This account collects all revenue and expense balances during the closing process"
    },
    {
      id: "fill4",
      text: "The final step is preparing the {blank} trial balance, which contains only permanent accounts.",
      answer: "post-closing",
      hint: "This trial balance proves the books are ready for the next period"
    }
  ]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "Why must adjustments be recorded before closing entries?",
      answers: [
        "Because closing entries zero out temporary accounts, and any missed adjustment cannot be corrected without reopening them",
        "Because the bank requires adjustments first",
        "Because Excel formulas will break if the order is wrong",
        "Because the IRS requires a specific order"
      ],
      explanation: "Closing entries zero out all revenue and expense accounts. If an adjustment is missed, the temporary accounts are already at zero and the error flows into Retained Earnings. Adjustments must be complete before closing begins."
    },
    {
      id: "q2",
      question: "Which of the following is a recurring adjustment that must be caught during the month-end close?",
      answers: [
        "Depreciation on equipment",
        "Owner's initial investment",
        "Purchasing a new building with cash",
        "Receiving a loan from the bank"
      ],
      explanation: "Depreciation is a recurring monthly adjustment that allocates the cost of a long-term asset over its useful life. It must be recorded each month as part of the close workflow. The other options are regular transactions, not month-end adjustments."
    },
    {
      id: "q3",
      question: "What is the purpose of the adjusted trial balance?",
      answers: [
        "To verify that total debits equal total credits after all adjustments are recorded",
        "To show the company's stock price",
        "To close the temporary accounts",
        "To prepare the bank reconciliation"
      ],
      explanation: "The adjusted trial balance confirms the accounting equation is still in balance after all adjusting entries. It also serves as the source for preparing the financial statements."
    },
    {
      id: "q4",
      question: "Which accounts appear on the post-closing trial balance?",
      answers: [
        "Only permanent accounts: assets, liabilities, and equity",
        "All accounts including revenue and expenses",
        "Only revenue and expense accounts",
        "Only cash accounts"
      ],
      explanation: "After closing, all temporary accounts (revenue, expenses, dividends) have zero balances. Only permanent accounts—assets, liabilities, and equity—remain with balances on the post-closing trial balance."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
              Phase 2: Explicit Instruction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              The Month-End Close Workflow
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A step-by-step procedure that ensures every adjustment is caught before the books are closed.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              The month-end close is not a random collection of tasks. It follows a specific sequence that professional accountants use every month. Each step builds on the one before it, and skipping a step means the financial statements will be wrong.
            </p>
          </div>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <ClipboardList className="h-6 w-6" />
                The Complete Month-End Close Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-emerald-800">
                Follow this sequence exactly. Each step produces an output that the next step depends on.
              </p>

              <div className="space-y-4">
                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Prepare the Unadjusted Trial Balance</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        List all account balances from the general ledger. Verify that total debits equal total credits. This is your starting point—no adjustments yet.
                      </p>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> Unadjusted Trial Balance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Identify and Record Adjusting Entries</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Review every account for required adjustments. This is the most critical step. Check for:
                      </p>
                      <ul className="text-sm text-emerald-800 mt-2 space-y-1 ml-4">
                        <li><strong>Accrued revenues:</strong> Revenue earned but not yet recorded</li>
                        <li><strong>Accrued expenses:</strong> Expenses incurred but not yet paid (wages, interest, utilities)</li>
                        <li><strong>Deferred revenues:</strong> Cash received in advance—recognize what was earned</li>
                        <li><strong>Prepaid expenses:</strong> Cash paid in advance—expense what was used (supplies, insurance)</li>
                        <li><strong>Depreciation:</strong> Allocate equipment/building cost for the month</li>
                      </ul>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> All adjusting journal entries recorded
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Prepare the Adjusted Trial Balance</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Update all account balances with the adjusting entries. Verify debits still equal credits. This trial balance is the source for the financial statements.
                      </p>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> Adjusted Trial Balance
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Prepare Financial Statements</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Use the adjusted trial balance to prepare:
                      </p>
                      <ul className="text-sm text-emerald-800 mt-2 space-y-1 ml-4">
                        <li><strong>Income Statement:</strong> Revenues - Expenses = Net Income</li>
                        <li><strong>Statement of Retained Earnings:</strong> Beginning RE + Net Income - Dividends = Ending RE</li>
                        <li><strong>Balance Sheet:</strong> Assets = Liabilities + Equity</li>
                      </ul>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> Complete set of financial statements
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Record Closing Entries</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Close all temporary accounts to zero:
                      </p>
                      <ul className="text-sm text-emerald-800 mt-2 space-y-1 ml-4">
                        <li><strong>Close revenues</strong> to Income Summary (debit revenues, credit Income Summary)</li>
                        <li><strong>Close expenses</strong> to Income Summary (credit expenses, debit Income Summary)</li>
                        <li><strong>Close Income Summary</strong> to Retained Earnings</li>
                        <li><strong>Close Dividends</strong> to Retained Earnings (debit RE, credit Dividends)</li>
                      </ul>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> All temporary accounts at zero; Retained Earnings updated
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="h-6 w-6 text-emerald-400 rotate-90" />
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Prepare the Post-Closing Trial Balance</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        List only permanent accounts (assets, liabilities, equity). Verify debits equal credits. The books are now ready for the next period.
                      </p>
                      <p className="text-xs text-emerald-700 mt-2">
                        <strong>Output:</strong> Post-Closing Trial Balance — books are closed and ready
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">
                TechStart Solutions: Worked Example — Step 2 (Adjusting Entries)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                Let's walk through Step 2 with Sarah's actual March data. Her unadjusted trial balance shows these accounts that need adjustment:
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-blue-300 bg-white rounded">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Account</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Unadjusted Balance</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Adjustment Needed</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-800 text-sm">
                    <tr>
                      <td className="border border-blue-300 px-3 py-2">Supplies</td>
                      <td className="border border-blue-300 px-3 py-2">$8,000 (debit)</td>
                      <td className="border border-blue-300 px-3 py-2">Physical count: $2,500 remaining → $5,500 used</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2">Prepaid Insurance</td>
                      <td className="border border-blue-300 px-3 py-2">$3,600 (debit)</td>
                      <td className="border border-blue-300 px-3 py-2">12-month policy, 1 month expired → $300/month</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2">Equipment</td>
                      <td className="border border-blue-300 px-3 py-2">$24,000 (debit)</td>
                      <td className="border border-blue-300 px-3 py-2">5-year life, no salvage → $400/month depreciation</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2">Wages Payable</td>
                      <td className="border border-blue-300 px-3 py-2">$0</td>
                      <td className="border border-blue-300 px-3 py-2">Wages earned Mar 28-31 not yet paid → $1,800</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2">Unearned Revenue</td>
                      <td className="border border-blue-300 px-3 py-2">$2,400 (credit)</td>
                      <td className="border border-blue-300 px-3 py-2">Half of prepaid project completed → $1,200 earned</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-100 p-4 rounded border border-blue-300">
                <h5 className="font-semibold text-blue-900 mb-2">Adjusting Journal Entries:</h5>
                <div className="space-y-2 text-sm font-mono text-blue-800">
                  <div>
                    <p className="font-semibold">Entry A — Supplies Used:</p>
                    <p className="ml-4">Debit Supplies Expense ........ $5,500</p>
                    <p className="ml-4">Credit Supplies ........................ $5,500</p>
                  </div>
                  <div>
                    <p className="font-semibold">Entry B — Insurance Expired:</p>
                    <p className="ml-4">Debit Insurance Expense ....... $300</p>
                    <p className="ml-4">Credit Prepaid Insurance ........ $300</p>
                  </div>
                  <div>
                    <p className="font-semibold">Entry C — Depreciation:</p>
                    <p className="ml-4">Debit Depreciation Expense .. $400</p>
                    <p className="ml-4">Credit Accum. Depreciation ... $400</p>
                  </div>
                  <div>
                    <p className="font-semibold">Entry D — Accrued Wages:</p>
                    <p className="ml-4">Debit Wages Expense ............ $1,800</p>
                    <p className="ml-4">Credit Wages Payable ............ $1,800</p>
                  </div>
                  <div>
                    <p className="font-semibold">Entry E — Revenue Earned:</p>
                    <p className="ml-4">Debit Unearned Revenue ...... $1,200</p>
                    <p className="ml-4">Credit Service Revenue ......... $1,200</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            title="Month-End Close Vocabulary"
            description="Complete these sentences with the correct accounting terminology."
            sentences={fillInTheBlankSentences}
            showHints={true}
          />

          <ComprehensionCheck
            title="Workflow Understanding Check"
            description="Test your understanding of the month-end close sequence."
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
