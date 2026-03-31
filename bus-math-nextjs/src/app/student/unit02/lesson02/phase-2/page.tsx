import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ArrowRight, TrendingUp, DollarSign } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase2() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!

  const conceptQuestions = [
    {
      id: "concept1",
      question: "Accrual accounting records revenue when:",
      answers: [
        "The work is earned, regardless of when cash arrives",
        "Cash is received from the customer",
        "The invoice is sent to the customer",
        "The month-end close is completed"
      ]
    },
    {
      id: "concept2",
      question: "A client pays Sarah $1,200 upfront for six months of service. On the day cash is received, Sarah should record:",
      answers: [
        "Debit Cash $1,200, Credit Deferred Revenue $1,200 (a liability)",
        "Debit Cash $1,200, Credit Service Revenue $1,200",
        "No entry until the work is done",
        "Debit Deferred Revenue $1,200, Credit Cash $1,200"
      ]
    },
    {
      id: "concept3",
      question: "An accrued expense means:",
      answers: [
        "A cost has been incurred but not yet paid or billed",
        "Cash was paid before the expense was incurred",
        "An invoice has been paid in full",
        "The expense will never be paid"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
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
              The Four Adjustment Types
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              In Phase 1 you felt the tension: cash timing and work timing do not match.
              GAAP solves this with <strong>adjusting entries</strong>—journal entries made at
              month-end to move revenue and expenses into the correct period.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              There are exactly four types. Each one answers a simple question:
              <em>Did cash move before or after the work?</em>
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-900 mb-2">The Rule:</p>
              <p className="text-blue-800">
                Adjusting entries <strong>never involve Cash</strong>. They only reclassify
                amounts that are already on the books or add amounts that should be on the books
                but are not yet recorded. Cash was already recorded (or will be recorded later)
                in a separate transaction.
              </p>
            </div>
          </div>

          {/* Type 1: Accrued Revenue */}
          <Card className="border-green-200 bg-green-50 mb-6">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Type 1: Accrued Revenue — Work Done, Cash Not Yet Received
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-3">
                <strong>What happened:</strong> Sarah completed a $500 social media campaign
                for the fitness studio on March 28. She will not invoice until April 5. Cash
                will arrive in mid-April.
              </p>

              <p className="text-green-800 mb-3">
                <strong>Why it matters:</strong> Without an adjustment, March revenue is missing
                $500 of work that actually happened. The income statement understates performance.
              </p>

              <div className="bg-white p-4 rounded border border-green-200 mb-3">
                <p className="font-semibold text-green-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-green-800">Debit: Accounts Receivable — $500</p>
                  <p className="text-green-800 ml-8">Credit: Service Revenue — $500</p>
                </div>
              </div>

              <div className="bg-green-100 p-3 rounded border border-green-300">
                <p className="text-sm text-green-800">
                  <strong>What changed:</strong> Accounts Receivable (asset) goes up by $500.
                  Service Revenue (equity) goes up by $500. The accounting equation stays balanced.
                  March now shows the revenue it actually earned.
                </p>
              </div>

              <p className="text-green-800 text-sm mt-3">
                <strong>Signal to use this entry:</strong> You completed work this period but
                have not yet billed or been paid.
              </p>
            </CardContent>
          </Card>

          {/* Type 2: Accrued Expense */}
          <Card className="border-orange-200 bg-orange-50 mb-6">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Type 2: Accrued Expense — Cost Incurred, Cash Not Yet Paid
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-3">
                <strong>What happened:</strong> Sarah's freelance designer completed $350 of
                graphic work in the last week of March. The designer will invoice in April.
                Sarah will pay in April.
              </p>

              <p className="text-orange-800 mb-3">
                <strong>Why it matters:</strong> Without an adjustment, March expenses are missing
                $350. Net income looks higher than it really was.
              </p>

              <div className="bg-white p-4 rounded border border-orange-200 mb-3">
                <p className="font-semibold text-orange-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-orange-800">Debit: Design Expense — $350</p>
                  <p className="text-orange-800 ml-8">Credit: Accounts Payable — $350</p>
                </div>
              </div>

              <div className="bg-orange-100 p-3 rounded border border-orange-300">
                <p className="text-sm text-orange-800">
                  <strong>What changed:</strong> Design Expense (reduces equity) goes up by $350.
                  Accounts Payable (liability) goes up by $350. March expenses now reflect the
                  cost that was actually incurred.
                </p>
              </div>

              <p className="text-orange-800 text-sm mt-3">
                <strong>Signal to use this entry:</strong> A cost was incurred this period but
                no bill has arrived and no cash has been paid.
              </p>
            </CardContent>
          </Card>

          {/* Type 3: Deferred Revenue */}
          <Card className="border-purple-200 bg-purple-50 mb-6">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Type 3: Deferred Revenue — Cash Received Before Work Is Done
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-3">
                <strong>What happened:</strong> A client paid Sarah $1,200 on March 15 for a
                six-month social media package. By March 31, Sarah has delivered about half a
                month of service.
              </p>

              <p className="text-purple-800 mb-3">
                <strong>What was already recorded:</strong> When the cash arrived, Sarah recorded:
              </p>
              <div className="bg-white p-3 rounded border border-purple-200 mb-3 font-mono text-sm">
                <p className="text-purple-800">Debit: Cash — $1,200</p>
                <p className="text-purple-800 ml-8">Credit: Deferred Revenue — $1,200</p>
              </div>

              <p className="text-purple-800 mb-3">
                <strong>Why an adjustment is needed:</strong> Deferred Revenue is a liability—Sarah
                owes future service. By March 31 she has earned a portion. She must move that
                portion from the liability into actual revenue.
              </p>

              <div className="bg-white p-4 rounded border border-purple-200 mb-3">
                <p className="font-semibold text-purple-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-purple-800">Debit: Deferred Revenue — $100</p>
                  <p className="text-purple-800 ml-8">Credit: Service Revenue — $100</p>
                </div>
                <p className="text-purple-700 text-xs mt-2">
                  Calculation: $1,200 ÷ 6 months = $200/month. Half of March = ~$100.
                </p>
              </div>

              <div className="bg-purple-100 p-3 rounded border border-purple-300">
                <p className="text-sm text-purple-800">
                  <strong>What changed:</strong> Deferred Revenue (liability) decreases by $100.
                  Service Revenue (equity) increases by $100. The liability now reflects only
                  the work still owed.
                </p>
              </div>

              <p className="text-purple-800 text-sm mt-3">
                <strong>Signal to use this entry:</strong> Cash was received in advance and some
                (or all) of the work has now been completed.
              </p>
            </CardContent>
          </Card>

          {/* Type 4: Deferred Expense (Prepaid) */}
          <Card className="border-teal-200 bg-teal-50 mb-6">
            <CardHeader>
              <CardTitle className="text-teal-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Type 4: Deferred Expense — Cash Paid Before Cost Is Incurred
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-800 mb-3">
                <strong>What happened:</strong> Sarah paid $600 on March 1 for a three-month
                insurance policy covering March, April, and May.
              </p>

              <p className="text-teal-800 mb-3">
                <strong>What was already recorded:</strong> When cash was paid:
              </p>
              <div className="bg-white p-3 rounded border border-teal-200 mb-3 font-mono text-sm">
                <p className="text-teal-800">Debit: Prepaid Insurance — $600</p>
                <p className="text-teal-800 ml-8">Credit: Cash — $600</p>
              </div>

              <p className="text-teal-800 mb-3">
                <strong>Why an adjustment is needed:</strong> Prepaid Insurance is an asset—it
                represents future coverage. By March 31, one month of coverage has been "used up."
                That portion must move from the asset into an expense.
              </p>

              <div className="bg-white p-4 rounded border border-teal-200 mb-3">
                <p className="font-semibold text-teal-900 mb-2">The Adjusting Entry (March 31):</p>
                <div className="font-mono text-sm space-y-1">
                  <p className="text-teal-800">Debit: Insurance Expense — $200</p>
                  <p className="text-teal-800 ml-8">Credit: Prepaid Insurance — $200</p>
                </div>
                <p className="text-teal-700 text-xs mt-2">
                  Calculation: $600 ÷ 3 months = $200/month.
                </p>
              </div>

              <div className="bg-teal-100 p-3 rounded border border-teal-300">
                <p className="text-sm text-teal-800">
                  <strong>What changed:</strong> Prepaid Insurance (asset) decreases by $200.
                  Insurance Expense (reduces equity) increases by $200. The asset now reflects
                  only the two months of coverage remaining.
                </p>
              </div>

              <p className="text-teal-800 text-sm mt-3">
                <strong>Signal to use this entry:</strong> Cash was paid in advance for something
                that provides benefit over multiple periods, and some of that benefit has now been used.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={conceptQuestions}
            title="Concept Check: Four Adjustment Types"
            showExplanations={true}
          />

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">Summary: The Four Types at a Glance</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-yellow-300">
                    <th className="text-left py-2 px-3 text-yellow-900">Type</th>
                    <th className="text-left py-2 px-3 text-yellow-900">Cash Timing</th>
                    <th className="text-left py-2 px-3 text-yellow-900">Adjustment Moves</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-200">
                    <td className="py-2 px-3 font-medium">Accrued Revenue</td>
                    <td className="py-2 px-3">Cash comes <em>after</em> work</td>
                    <td className="py-2 px-3">A/R up, Revenue up</td>
                  </tr>
                  <tr className="border-b border-yellow-200">
                    <td className="py-2 px-3 font-medium">Accrued Expense</td>
                    <td className="py-2 px-3">Cash goes <em>after</em> cost</td>
                    <td className="py-2 px-3">Expense up, A/P up</td>
                  </tr>
                  <tr className="border-b border-yellow-200">
                    <td className="py-2 px-3 font-medium">Deferred Revenue</td>
                    <td className="py-2 px-3">Cash comes <em>before</em> work</td>
                    <td className="py-2 px-3">Deferred Rev down, Revenue up</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3 font-medium">Deferred Expense</td>
                    <td className="py-2 px-3">Cash goes <em>before</em> cost</td>
                    <td className="py-2 px-3">Expense up, Prepaid down</td>
                  </tr>
                </tbody>
              </table>
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
