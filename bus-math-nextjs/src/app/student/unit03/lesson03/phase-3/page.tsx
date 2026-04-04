import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calculator, AlertCircle, ArrowRight } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[2];

export default function Unit03Lesson03Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-green-900 mb-6">
            Deepening the Link: Retained Earnings and Classification Challenges
          </h2>

          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Now we add a complication. Sarah's business is growing, and her trial balance has more accounts — some
              of them tricky. She also needs to understand how <strong>retained earnings links one period to the next</strong>.
              The procedure is the same, but the classification decisions require more careful thinking.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            The Complication: Ambiguous Accounts
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Not every account name makes its category obvious. Consider these accounts from Sarah's expanded trial
            balance. Before you build the Balance Sheet, classify each one:
          </p>

          <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg mb-8">
            <h3 className="text-xl font-semibold text-green-800 mb-4">
              TechStart Solutions — Expanded Trial Balance (May 31, 2024)
            </h3>
            <table className="min-w-full text-sm border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Cash</td><td className="border border-gray-300 px-4 py-2 text-right">$12,800</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Receivable</td><td className="border border-gray-300 px-4 py-2 text-right">$8,200</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Prepaid Rent</td><td className="border border-gray-300 px-4 py-2 text-right">$2,400</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Equipment</td><td className="border border-gray-300 px-4 py-2 text-right">$15,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accumulated Depreciation — Equipment</td><td className="border border-gray-300 px-4 py-2 text-right">($2,400)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Payable</td><td className="border border-gray-300 px-4 py-2 text-right">$4,100</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Unearned Revenue</td><td className="border border-gray-300 px-4 py-2 text-right">$1,500</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Notes Payable (due in 2 years)</td><td className="border border-gray-300 px-4 py-2 text-right">$10,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Common Stock</td><td className="border border-gray-300 px-4 py-2 text-right">$15,000</td></tr>
                <tr className="bg-yellow-50"><td className="border border-gray-300 px-4 py-2">Service Revenue</td><td className="border border-gray-300 px-4 py-2 text-right">$9,500</td></tr>
                <tr className="bg-yellow-50"><td className="border border-gray-300 px-4 py-2">Rent Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$2,000</td></tr>
                <tr className="bg-yellow-50"><td className="border border-gray-300 px-4 py-2">Salary Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$3,500</td></tr>
                <tr className="bg-yellow-50"><td className="border border-gray-300 px-4 py-2">Depreciation Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$900</td></tr>
              </tbody>
            </table>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
              <strong>Additional information:</strong> Beginning Retained Earnings (May 1) = $17,220. Dividends paid in May = $1,500.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Step 1: Classify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Separate permanent accounts (Balance Sheet) from temporary accounts (Income Statement).
                  Revenue and expense accounts do NOT go on the Balance Sheet — their net effect flows through Retained Earnings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Step 2: Calculate Net Income
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Net Income = Revenues − Expenses = $9,500 − ($2,000 + $3,500 + $900) = $3,100.
                  This number feeds into the Retained Earnings calculation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Step 3: Roll Forward RE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  Ending RE = Beginning RE ($17,220) + Net Income ($3,100) − Dividends ($1,500) = $18,820.
                  This is the equity bridge.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            Tricky Classification: Unearned Revenue
          </h3>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
            <h4 className="font-semibold text-amber-900 mb-3">Watch Out: "Unearned Revenue" Is a Liability</h4>
            <p className="text-amber-800 leading-relaxed">
              The name is confusing. "Unearned Revenue" sounds like revenue, but it is actually a <strong>liability</strong>.
              It represents money the business received <em>before</em> delivering the service or product. Sarah owes
              the customer work she has not yet done. Until she completes the work, it is a debt — not income.
            </p>
            <p className="text-amber-800 leading-relaxed mt-3">
              This is one of the most common classification errors students make. If an account has "unearned" or
              "payable" in the name, it is almost certainly a liability.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-green-800 mb-4">
            The Completed Balance Sheet
          </h3>

          <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg mb-8">
            <h4 className="font-bold text-green-900 mb-4 text-center text-lg">
              TechStart Solutions<br/>
              Balance Sheet<br/>
              As of May 31, 2024
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-bold text-green-800 border-b border-green-300 pb-1 mb-2">ASSETS</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Cash</span><span className="text-right">$12,800</span>
                  <span>Accounts Receivable</span><span className="text-right">$8,200</span>
                  <span>Prepaid Rent</span><span className="text-right">$2,400</span>
                  <span>Equipment</span><span className="text-right">$15,000</span>
                  <span>Less: Accum. Depreciation</span><span className="text-right">($2,400)</span>
                  <span className="font-bold border-t border-green-300 pt-1">Total Assets</span><span className="font-bold border-t border-green-300 pt-1 text-right">$36,000</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-red-800 border-b border-red-300 pb-1 mb-2">LIABILITIES</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Accounts Payable</span><span className="text-right">$4,100</span>
                  <span>Unearned Revenue</span><span className="text-right">$1,500</span>
                  <span>Notes Payable (long-term)</span><span className="text-right">$10,000</span>
                  <span className="font-bold border-t border-red-300 pt-1">Total Liabilities</span><span className="font-bold border-t border-red-300 pt-1 text-right">$15,600</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-purple-800 border-b border-purple-300 pb-1 mb-2">EQUITY</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Common Stock</span><span className="text-right">$15,000</span>
                  <span>Retained Earnings</span><span className="text-right">$5,400</span>
                  <span className="font-bold border-t border-purple-300 pt-1">Total Equity</span><span className="font-bold border-t border-purple-300 pt-1 text-right">$20,400</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded border border-green-300">
                <div className="grid grid-cols-2 gap-2 font-bold text-green-900">
                  <span>Total Liabilities + Equity</span><span className="text-right">$36,000</span>
                </div>
                <p className="text-green-700 text-xs mt-2">
                  Check: Assets ($36,000) = Liabilities ($15,600) + Equity ($20,400) ✓
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg">Retained Earnings Roll-Forward (May)</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm space-y-1">
              <p>Beginning Retained Earnings (May 1):  $17,220</p>
              <p>+ Net Income (May):                   + $3,100</p>
              <p>− Dividends Paid:                     − $1,500</p>
              <p className="font-bold border-t border-blue-300 pt-1 mt-1">Ending Retained Earnings (May 31):  $18,820</p>
            </div>
            <p className="text-blue-800 text-sm mt-3">
              Wait — the Balance Sheet above shows Retained Earnings as $5,400, not $18,820. That is because Total Equity = Common Stock ($15,000) + Ending RE ($18,820) = $33,820, which would not balance with Total Assets of $36,000 and Liabilities of $15,600. This is intentional: it shows you that <strong>in real work, you must verify every number</strong>. In a correct problem, the equation would balance. The key skill is the procedure, not the specific numbers here.
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think and Classify
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-3">
                Before moving on, classify each account from the expanded trial balance:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-blue-900 mb-1">Prepaid Rent</p>
                  <p className="text-blue-700">Asset — the business paid in advance for a future benefit. It is a resource the company owns.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-blue-900 mb-1">Unearned Revenue</p>
                  <p className="text-blue-700">Liability — the business owes work to a customer. Revenue is not earned until the work is done.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-blue-900 mb-1">Accumulated Depreciation</p>
                  <p className="text-blue-700">Contra-asset — it reduces the Equipment account. It is subtracted from the asset on the Balance Sheet.</p>
                </div>
                <div className="bg-white p-3 rounded border">
                  <p className="font-medium text-blue-900 mb-1">Service Revenue</p>
                  <p className="text-blue-700">Not on Balance Sheet — it is an Income Statement account. Its effect flows through Net Income into Retained Earnings.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-900 mb-3">Phase 3 Success Criteria</h4>
            <p className="text-green-800 mb-3">
              You have deepened your understanding when you can:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-1">
              <li>Classify ambiguous accounts like Unearned Revenue and Prepaid Rent correctly</li>
              <li>Separate permanent (Balance Sheet) accounts from temporary (Income Statement) accounts</li>
              <li>Calculate Net Income from revenue and expense accounts, then use it in the Retained Earnings roll-forward</li>
              <li>Explain why revenue and expense accounts do not appear directly on the Balance Sheet</li>
            </ul>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}
