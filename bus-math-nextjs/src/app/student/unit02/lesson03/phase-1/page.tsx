import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, RotateCcw, ArrowRight } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0]

const hookQuestions = [
  {
    id: "hook1",
    question: "After Sarah records all her adjusting entries for March, her Service Revenue account shows $8,700. What should the Service Revenue balance be on April 1st?",
    answers: [
      "$0 — the account resets so it can track April revenue separately",
      "$8,700 — the balance carries forward to April",
      "$4,350 — half carries forward and half resets",
      "It depends on how much cash Sarah collected"
    ],
    explanation: "Revenue accounts are temporary. At the start of each new period they must be zeroed out so the business can measure that period's performance independently."
  },
  {
    id: "hook2",
    question: "Why can't Sarah just keep adding each month's revenues and expenses into the same running totals forever?",
    answers: [
      "She would lose the ability to see how well the business performed in any single month",
      "The accounting software would crash from too much data",
      "GAAP forbids any account from exceeding $100,000",
      "Investors prefer round numbers"
    ],
    explanation: "Temporary accounts exist to measure one period at a time. Without closing them, Sarah could not tell whether March was profitable or whether April was worse."
  }
]

export default function Phase1Page() {
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

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                The Problem: Sarah's Books Won't Reset
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-red-900">
                <p>
                  In Lesson 02 you helped Sarah record her adjusting entries for March — accrued revenue,
                  deferred revenue, depreciation, and everything else that makes her financial statements
                  accurate. Her adjusted trial balance finally balanced, and she was relieved.
                </p>

                <p>
                  But then Marcus, her mentor, dropped another bomb:
                </p>

                <div className="bg-white p-4 rounded-lg border border-red-300 italic text-red-900">
                  "Sarah, your adjusted trial balance is correct. But if you start April with these same
                  revenue and expense balances, you'll never know whether April was profitable. Every
                  month needs a fresh scoreboard. That's what <strong>closing entries</strong> do."
                </div>

                <p>
                  Sarah looked at her ledger. After all the adjustments, her March accounts showed:
                </p>

                <div className="not-prose">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-red-100">
                        <th className="border border-red-300 px-3 py-2 text-left">Account</th>
                        <th className="border border-red-300 px-3 py-2 text-right">March Balance</th>
                        <th className="border border-red-300 px-3 py-2 text-center">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">Service Revenue</td>
                        <td className="border border-red-200 px-3 py-2 text-right">$8,700</td>
                        <td className="border border-red-200 px-3 py-2 text-center">Revenue</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">Rent Expense</td>
                        <td className="border border-red-200 px-3 py-2 text-right">$1,500</td>
                        <td className="border border-red-200 px-3 py-2 text-center">Expense</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">Salaries Expense</td>
                        <td className="border border-red-200 px-3 py-2 text-right">$2,800</td>
                        <td className="border border-red-200 px-3 py-2 text-center">Expense</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">Depreciation Expense</td>
                        <td className="border border-red-200 px-3 py-2 text-right">$75</td>
                        <td className="border border-red-200 px-3 py-2 text-center">Expense</td>
                      </tr>
                      <tr>
                        <td className="border border-red-200 px-3 py-2">Supplies Expense</td>
                        <td className="border border-red-200 px-3 py-2 text-right">$320</td>
                        <td className="border border-red-200 px-3 py-2 text-center">Expense</td>
                      </tr>
                      <tr className="bg-red-100 font-semibold">
                        <td className="border border-red-300 px-3 py-2">Net Income</td>
                        <td className="border border-red-300 px-3 py-2 text-right">$4,005</td>
                        <td className="border border-red-300 px-3 py-2 text-center">—</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  If Sarah does nothing, April 1st starts with Service Revenue already at $8,700 and
                  expenses already sitting in their accounts. Her April "profit" would be meaningless.
                </p>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-300">
                  <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                    <RotateCcw className="h-5 w-5" />
                    The Fix: Closing Entries
                  </h3>
                  <p className="text-amber-800">
                    Closing entries zero out every <strong>temporary account</strong> (revenues, expenses,
                    and dividends) and transfer the net result into <strong>Retained Earnings</strong>,
                    a permanent account. After closing, every temporary account starts the new period at $0.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Notice the Friction"
            description="Check that you understand why closing entries are necessary before we learn how to do them."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                What You'll Learn in This Lesson
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>By the end of this lesson you will be able to:</p>
                <ul className="text-blue-800">
                  <li>Tell which accounts are temporary and which are permanent</li>
                  <li>Explain why closing entries happen after adjusting entries, not before</li>
                  <li>Prepare the four-step closing sequence for any set of account balances</li>
                  <li>Verify that all temporary accounts are zero after closing</li>
                </ul>
                <p>
                  This is the last manual step before Lesson 04, where you'll pull the entire month-end
                  close together into one checklist.
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