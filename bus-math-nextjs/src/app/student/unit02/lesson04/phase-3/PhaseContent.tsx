import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, FileText } from "lucide-react"
import MonthEndChallenge from "@/components/exercises/MonthEndChallenge"

const challengeEntries = [
  {
    id: "adj-a",
    label: "Supplies",
    debitAccount: "Supplies Expense",
    creditAccount: "Supplies",
    amount: 5500,
    explanation: "Supplies used = $8,000 - $2,500 = $5,500. Debit Supplies Expense to record the cost used; credit Supplies to reduce the asset to what remains.",
    hint: "Supplies on hand at March 31: $2,500. Unadjusted Supplies balance: $8,000."
  },
  {
    id: "adj-b",
    label: "Insurance",
    debitAccount: "Insurance Expense",
    creditAccount: "Prepaid Insurance",
    amount: 300,
    explanation: "One month of a 12-month policy has expired: $3,600 / 12 = $300. Debit Insurance Expense; credit Prepaid Insurance.",
    hint: "Prepaid insurance is a 12-month policy purchased March 1. Unadjusted balance: $3,600."
  },
  {
    id: "adj-c",
    label: "Depreciation",
    debitAccount: "Depreciation Expense",
    creditAccount: "Accumulated Depreciation",
    amount: 400,
    explanation: "Monthly depreciation = $24,000 / 60 months = $400. Debit Depreciation Expense; credit Accumulated Depreciation (a contra-asset that reduces the book value of Equipment).",
    hint: "Equipment purchased February 1. Cost: $24,000. Useful life: 5 years. Salvage: $0. Straight-line method."
  },
  {
    id: "adj-d",
    label: "Accrued Wages",
    debitAccount: "Wages Expense",
    creditAccount: "Wages Payable",
    amount: 1800,
    explanation: "Employees earned $1,800 for work March 28-31 but have not been paid. Debit Wages Expense to record the cost; credit Wages Payable to record the liability.",
    hint: "Wages earned March 28-31 but not yet paid: $1,800."
  },
  {
    id: "adj-e",
    label: "Revenue Earned",
    debitAccount: "Unearned Revenue",
    creditAccount: "Service Revenue",
    amount: 1200,
    explanation: "Half of the $2,400 advance payment has been earned: $2,400 / 2 = $1,200. Debit Unearned Revenue to reduce the liability; credit Service Revenue to recognize earned revenue.",
    hint: "Unearned revenue of $2,400 was for a 2-month project. One month is complete by March 31."
  },
  {
    id: "adj-f",
    label: "Accrued Revenue",
    debitAccount: "Accounts Receivable",
    creditAccount: "Service Revenue",
    amount: 900,
    explanation: "Services worth $900 were performed in March but not yet billed. Debit Accounts Receivable to record the amount owed; credit Service Revenue to recognize the revenue.",
    hint: "Services worth $900 were performed in March but not yet billed or recorded."
  }
]

/**
 * Present the balanced month-end challenge.
 * @returns The lesson content and activity controls.
 */
export default function Phase3Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 3: Deepening
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Complex Adjustments and the Full Close
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Put the full workflow into practice with more complex scenarios and less guidance.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              In Phase 2, you walked through each step of the month-end close with heavy guidance. Now the scaffolding comes down. You will work with a more complex set of adjustments, use authentic accounting formats, and explain your reasoning—not just compute answers.
            </p>
          </div>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <FileText className="h-6 w-6" />
                TechStart Solutions: March Month-End Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                Here is Sarah's unadjusted trial balance as of March 31, 2024. Your task: identify every adjustment, record the entries, and walk through the complete close.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border border-orange-300 bg-white rounded">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="border border-orange-300 px-3 py-2 text-left text-orange-900">Account</th>
                      <th className="border border-orange-300 px-3 py-2 text-right text-orange-900">Debit</th>
                      <th className="border border-orange-300 px-3 py-2 text-right text-orange-900">Credit</th>
                    </tr>
                  </thead>
                  <tbody className="text-orange-800 text-sm">
                    <tr><td className="border border-orange-300 px-3 py-2">Cash</td><td className="border border-orange-300 px-3 py-2 text-right">$18,500</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Accounts Receivable</td><td className="border border-orange-300 px-3 py-2 text-right">$6,200</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Supplies</td><td className="border border-orange-300 px-3 py-2 text-right">$8,000</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Prepaid Insurance</td><td className="border border-orange-300 px-3 py-2 text-right">$3,600</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Equipment</td><td className="border border-orange-300 px-3 py-2 text-right">$24,000</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Accumulated Depreciation</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$800</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Accounts Payable</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$4,500</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Unearned Revenue</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$2,400</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Common Stock</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$36,600</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Retained Earnings (beginning)</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$5,000</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Dividends</td><td className="border border-orange-300 px-3 py-2 text-right">$2,000</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Service Revenue</td><td className="border border-orange-300 px-3 py-2"></td><td className="border border-orange-300 px-3 py-2 text-right">$28,000</td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Wages Expense</td><td className="border border-orange-300 px-3 py-2 text-right">$12,000</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2">Rent Expense</td><td className="border border-orange-300 px-3 py-2 text-right">$3,000</td><td className="border border-orange-300 px-3 py-2"></td></tr>
                    <tr><td className="border border-orange-300 px-3 py-2 font-semibold">Totals</td><td className="border border-orange-300 px-3 py-2 text-right font-semibold">$77,300</td><td className="border border-orange-300 px-3 py-2 text-right font-semibold">$77,300</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-orange-100 p-4 rounded border border-orange-300">
                <h5 className="font-semibold text-orange-900 mb-2">Additional Information for Adjustments:</h5>
                <ol className="text-sm text-orange-800 space-y-2 list-decimal list-inside">
                  <li>Supplies on hand at March 31: $2,500</li>
                  <li>Prepaid insurance is a 12-month policy purchased March 1</li>
                  <li>Equipment was purchased February 1. Useful life: 5 years. Salvage value: $0. Straight-line depreciation.</li>
                  <li>Wages earned March 28-31 but not yet paid: $1,800</li>
                  <li>Unearned revenue of $2,400 was for a 2-month project. One month is complete by March 31.</li>
                  <li>Services worth $900 were performed in March but not yet billed or recorded.</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Your Task: Record All Adjusting Entries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Use the unadjusted trial balance and additional information above to identify every required adjustment. Select the correct debit and credit accounts, calculate the amount, and check all entries at once. Feedback is given after submission.
              </p>
              <MonthEndChallenge
                entries={challengeEntries}
                trialBalanceTotal={{ debits: 77300, credits: 77300 }}
              />
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Step 2: Compute Adjusted Balances
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-blue-800">
                After recording all adjustments, update each affected account balance. These adjusted balances feed into the adjusted trial balance and the financial statements.
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Supplies: $8,000 - $5,500 = $2,500</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Prepaid Insurance: $3,600 - $300 = $3,300</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Accum. Depr.: $800 + $400 = $1,200</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Wages Payable: $0 + $1,800 = $1,800</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Unearned Revenue: $2,400 - $1,200 = $1,200</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">A/R: $6,200 + $900 = $7,100</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Supplies Expense: $0 + $5,500 = $5,500</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="font-semibold">Service Revenue: $28,000 + $1,200 + $900 = $30,100</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">
                Step 3: Explain Your Reasoning
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-blue-800">
                Answer these questions in your own words. These test your understanding of why adjustments work the way they do—not just the mechanics.
              </p>
              <ol className="text-sm text-blue-800 space-y-3 list-decimal list-inside">
                <li>Why does depreciation use a contra-asset account (Accumulated Depreciation) instead of directly reducing the Equipment account? What information would be lost if we reduced Equipment directly?</li>
                <li>How does the accrued revenue adjustment (Adjustment F) affect both the Income Statement and the Balance Sheet? Trace the impact through both statements.</li>
                <li>If Sarah skipped Adjustment D (accrued wages), which financial statement would be most affected and how? Would the error carry forward into the next period?</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Common Pitfalls to Watch For
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="text-sm text-amber-800 space-y-2">
                <li><strong>Depreciation is cumulative:</strong> Accumulated Depreciation carries forward from month to month. March's $400 adds to February's $800 balance.</li>
                <li><strong>Unearned Revenue is a liability:</strong> When you earn part of it, you reduce the liability and increase revenue—not the other way around.</li>
                <li><strong>Accrued revenue creates an asset:</strong> Services performed but not billed means Accounts Receivable increases, not Cash.</li>
                <li><strong>Adjusted trial balance must balance:</strong> If debits and credits don't match after adjustments, find the error before proceeding.</li>
              </ul>
            </CardContent>
          </Card>

          <section className="space-y-4 border-t pt-6" aria-labelledby="manual-close-worksheet">
            <h3 id="manual-close-worksheet" className="text-xl font-semibold">Manual close worksheet</h3>
            <p>
              If your teacher assigns the worksheet, open BM U02L04 - Textbook Aligned.xlsx in OneDrive.
              A website copy is available below. This is a separate March case. Use the facts in that file.
            </p>
            <p>
              Complete its six sheets in order: Unadjusted TB, Adjustments, Adjusted TB, Financial Statements,
              Closing Entries, and Post-closing TB. Calculate the amounts by hand. You can enter the results
              in the worksheet or on paper. Enter 0 on each unused debit or credit side.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/resources/unit02-lesson04-student.xlsx" className="text-primary underline" download>
                Download the manual close worksheet
              </a>
              <a href="/resources/unit02-lesson04-tutorial.md" className="text-primary underline" download>
                Download the worksheet guide
              </a>
            </div>
            <details>
              <summary className="cursor-pointer font-medium">Check the reference after your attempt</summary>
              <p className="mt-2">
                <a href="/resources/unit02-lesson04-teacher.xlsx" className="text-primary underline" download>
                  Download the completed reference
                </a>. Compare the accounts and amounts. A zero difference alone does not prove that an entry is correct.
              </p>
            </details>
          </section>

        </section>
      </div>

    </div>
  )
}
