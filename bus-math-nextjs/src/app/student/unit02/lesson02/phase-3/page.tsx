import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowRight, Lightbulb } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase3() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!

  const reasoningQuestions = [
    {
      id: "reason1",
      question: "Sarah paid $900 on March 1 for a full year of business software. By March 31, how much should be moved from Prepaid Software to Software Expense?",
      answers: [
        "$75 (one month of the $900 annual cost)",
        "$900 (the full amount was paid in March)",
        "$450 (half the year has not passed, so half the cost)",
        "$0 (prepaid items are never expensed)"
      ]
    },
    {
      id: "reason2",
      question: "A client paid $2,400 on February 1 for four months of service. By March 31, how much total revenue has Sarah earned from this contract?",
      answers: [
        "$1,200 (February + March = 2 months × $600/month)",
        "$2,400 (the full amount was received)",
        "$600 (only March counts)",
        "$1,800 (three months: February, March, and April)"
      ]
    },
    {
      id: "reason3",
      question: "Sarah's utility bill for March usage is $180. The bill arrives April 10 and is due April 30. What should Sarah do on March 31?",
      answers: [
        "Record an accrued expense: Debit Utilities Expense $180, Credit Accounts Payable $180",
        "Wait until April 10 to record anything",
        "Record it when she pays on April 30",
        "Debit Accounts Payable $180, Credit Utilities Expense $180"
      ]
    },
    {
      id: "reason4",
      question: "What would happen to Sarah's March net income if she forgets to record $400 of accrued revenue?",
      answers: [
        "Net income would be understated by $400",
        "Net income would be overstated by $400",
        "Net income would not change because no cash moved",
        "Only the balance sheet would be affected"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-teal-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">

          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg border border-emerald-200 mb-8">
            <h2 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
              <AlertCircle className="h-6 w-6" />
              Messier Scenarios: Reduced Scaffolding
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              In Phase 2 each scenario told you exactly which type of adjustment applied.
              Now the scenarios are less labeled. You need to <strong>identify the type yourself</strong>
              before you can record the entry.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              These situations are closer to what Sarah actually sees at month-end: a pile
              of transactions, some invoices, some bills, some prepayments—and no labels.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-emerald-400">
              <p className="font-bold text-emerald-900 mb-2">Your Job:</p>
              <p className="text-emerald-800">
                For each scenario below, answer three questions:
                (1) What type of adjustment is this?
                (2) What accounts are affected?
                (3) What is the dollar amount for <em>this period only</em>?
              </p>
            </div>
          </div>

          {/* Scenario A */}
          <Card className="border-blue-200 bg-blue-50 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Scenario A: The Retainer Client
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded border border-blue-200 mb-4">
                <p className="text-blue-800">
                  On January 1, a client paid Sarah $3,600 for six months of consulting
                  (January through June). Each month Sarah provides the same level of service.
                </p>
                <p className="text-blue-800 mt-2">
                  <strong>Question:</strong> What is the adjusting entry on March 31?
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded border border-blue-300">
                <p className="font-semibold text-blue-900 mb-2">Think Through It:</p>
                <ol className="list-decimal list-inside space-y-1 text-blue-800 text-sm">
                  <li>Cash was received <em>before</em> the work was done. Which type is that?</li>
                  <li>Monthly rate: $3,600 ÷ 6 = $600/month.</li>
                  <li>By March 31, how many months have been earned? (January, February, March = 3 months)</li>
                  <li>But the adjustment is only for <strong>March</strong>. The January and February portions
                    should have been adjusted in those months already.</li>
                  <li>So the March adjustment moves only one month: $600.</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded border border-blue-200 mt-4">
                <p className="font-semibold text-blue-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-blue-800">Debit: Deferred Revenue — $600</p>
                  <p className="text-blue-800 ml-8">Credit: Service Revenue — $600</p>
                </div>
                <p className="text-blue-700 text-xs mt-2">
                  The remaining deferred revenue balance after this entry:
                  $3,600 – $600 – $600 – $600 = $1,800 (three months still owed).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Scenario B */}
          <Card className="border-orange-200 bg-orange-50 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Scenario B: The Unbilled Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded border border-orange-200 mb-4">
                <p className="text-orange-800">
                  Sarah started a website project on March 10 with a total fee of $1,500.
                  By March 31 she has completed about 60% of the work. The client will be
                  invoiced for the full amount when the project is finished in mid-April.
                </p>
                <p className="text-orange-800 mt-2">
                  <strong>Question:</strong> What is the adjusting entry on March 31?
                </p>
              </div>

              <div className="bg-orange-100 p-4 rounded border border-orange-300">
                <p className="font-semibold text-orange-900 mb-2">Think Through It:</p>
                <ol className="list-decimal list-inside space-y-1 text-orange-800 text-sm">
                  <li>Work has been done but no cash has been received and no invoice sent. Which type?</li>
                  <li>60% of $1,500 = $900 of work completed in March.</li>
                  <li>Revenue must be recognized for the portion earned in March.</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded border border-orange-200 mt-4">
                <p className="font-semibold text-orange-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-orange-800">Debit: Accounts Receivable — $900</p>
                  <p className="text-orange-800 ml-8">Credit: Service Revenue — $900</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario C */}
          <Card className="border-purple-200 bg-purple-50 mb-6">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Scenario C: The Missing Bill
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded border border-purple-200 mb-4">
                <p className="text-purple-800">
                  Sarah's office rent is $800 per month, due on the 5th of each month for
                  the <em>previous</em> month. The March rent bill has not arrived yet.
                  March rent was incurred and used.
                </p>
                <p className="text-purple-800 mt-2">
                  <strong>Question:</strong> What is the adjusting entry on March 31?
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded border border-purple-300">
                <p className="font-semibold text-purple-900 mb-2">Think Through It:</p>
                <ol className="list-decimal list-inside space-y-1 text-purple-800 text-sm">
                  <li>The cost was incurred in March but no bill has arrived and no cash paid. Which type?</li>
                  <li>The amount is known: $800 per month.</li>
                  <li>Expense must be recorded in the period it was incurred.</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded border border-purple-200 mt-4">
                <p className="font-semibold text-purple-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-purple-800">Debit: Rent Expense — $800</p>
                  <p className="text-purple-800 ml-8">Credit: Accounts Payable — $800</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={reasoningQuestions}
            title="Reasoning Check: Identify and Explain"
            showExplanations={true}
          />

          <Card className="border-amber-200 bg-amber-50 mt-8">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                How Adjustments Change the Statements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-3">
                Every adjusting entry touches at least one income statement account (revenue
                or expense) and one balance sheet account (asset or liability). That is not
                an accident—it is how accrual accounting keeps both statements honest.
              </p>

              <div className="bg-white p-4 rounded border border-amber-200">
                <p className="font-semibold text-amber-900 mb-2">Before Adjustments (Sarah's draft March income statement):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-amber-800">Service Revenue: $3,200 (only cash received)</p>
                  <p className="text-amber-800">Expenses: $1,100 (only bills paid)</p>
                  <p className="text-amber-800 font-bold">Net Income: $2,100</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-amber-200 mt-4">
                <p className="font-semibold text-amber-900 mb-2">After Adjustments (corrected March income statement):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-amber-800">Service Revenue: $3,200 + $500 + $900 + $600 = $5,200</p>
                  <p className="text-amber-800">Expenses: $1,100 + $350 + $800 + $200 + $75 = $2,525</p>
                  <p className="text-amber-800 font-bold">Net Income: $2,675</p>
                </div>
                <p className="text-amber-700 text-xs mt-2">
                  The difference is $575. That is how much Sarah's draft net income was wrong
                  before adjustments. An investor relying on the draft would make a bad decision.
                </p>
              </div>
            </CardContent>
          </Card>
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
