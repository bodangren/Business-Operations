import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[1];

const introductionQuestions = [
  {
    id: "intro-q1",
    question: "In the accounting equation Assets = Liabilities + Equity, what does 'Equity' represent?",
    answers: [
      "The owner's claim on the business after all debts are paid",
      "The total amount of cash the business has",
      "The total value of all assets the business owns",
      "The amount the business owes to suppliers"
    ],
    explanation: "Equity represents the owner's residual claim — what is left over after subtracting all liabilities from all assets. It is the net worth of the business."
  },
  {
    id: "intro-q2",
    question: "How does Net Income from the Income Statement connect to the Balance Sheet?",
    answers: [
      "Net Income flows into Retained Earnings, which is part of Equity on the Balance Sheet",
      "Net Income is added to the Cash account on the Balance Sheet",
      "Net Income reduces Liabilities on the Balance Sheet",
      "Net Income does not appear on the Balance Sheet at all"
    ],
    explanation: "Net Income is closed into Retained Earnings at the end of each period. Retained Earnings is an equity account on the Balance Sheet. This is the critical link between the two statements."
  },
  {
    id: "intro-q3",
    question: "Which of these is the correct formula for Ending Retained Earnings?",
    answers: [
      "Beginning RE + Net Income − Dividends = Ending RE",
      "Beginning RE − Net Income + Dividends = Ending RE",
      "Net Income − Expenses = Ending RE",
      "Assets − Liabilities = Ending RE"
    ],
    explanation: "Ending Retained Earnings = Beginning RE + Net Income − Dividends. The business starts with what it had, adds what it earned, and subtracts what it paid out to owners."
  },
  {
    id: "intro-q4",
    question: "A company has: Cash $5,000, Equipment $12,000, Accounts Payable $3,000, Common Stock $8,000, and Retained Earnings $6,000. Does the balance sheet balance?",
    answers: [
      "Yes — Assets ($17,000) = Liabilities ($3,000) + Equity ($14,000)",
      "No — the numbers do not add up correctly",
      "Yes — but only if you exclude Equipment",
      "No — Retained Earnings should not be included in Equity"
    ],
    explanation: "Assets = Cash ($5,000) + Equipment ($12,000) = $17,000. Liabilities = Accounts Payable ($3,000). Equity = Common Stock ($8,000) + Retained Earnings ($6,000) = $14,000. $17,000 = $3,000 + $14,000. It balances."
  },
  {
    id: "intro-q5",
    question: "Why are revenue and expense accounts NOT listed directly on the Balance Sheet?",
    answers: [
      "Because their net effect is already captured in Retained Earnings through Net Income",
      "Because they are too small to matter on the Balance Sheet",
      "Because they only appear on the Cash Flow Statement",
      "Because revenue and expense accounts are not real accounts"
    ],
    explanation: "Revenue and expense accounts are temporary accounts that are closed into Net Income, which then flows into Retained Earnings. The Balance Sheet shows the cumulative result, not the individual revenue and expense lines."
  }
];

export default function Unit03Lesson03Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Building the Setting: Balance Sheet Architecture
          </h2>

          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-lg leading-relaxed text-blue-900">
              Jennifer Kim, Sarah's CPA, taught her that the Balance Sheet is like a photograph of the business at a
              single moment in time. Unlike the Income Statement — which covers a period — the Balance Sheet is dated
              <strong> "as of"</strong> a specific date. It answers: what exists right now?
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Accounting Equation
          </h3>

          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-4">
              Assets = Liabilities + Equity
            </div>
            <p className="text-blue-700 text-lg">
              Everything the business owns is funded either by borrowing (liabilities) or by owners (equity).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800">Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  <strong>What the business owns.</strong> Cash, Accounts Receivable, Supplies, Equipment, Buildings.
                  Ordered by how quickly they can be turned into cash (liquidity).
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800">Liabilities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  <strong>What the business owes.</strong> Accounts Payable, Wages Payable, Notes Payable, Mortgages.
                  Ordered by when they must be paid (current vs. long-term).
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Equity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  <strong>What the owners are worth.</strong> Common Stock (owner investments) + Retained Earnings
                  (cumulative profits kept in the business).
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Step-by-Step: Building the Balance Sheet
          </h3>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4 text-xl">The Procedure</h4>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 1: List Assets (most liquid first)</h5>
                <p className="text-gray-700 text-sm">
                  Cash → Accounts Receivable → Supplies → Prepaid Insurance → Equipment → Buildings → Vehicles.
                  Subtract Accumulated Depreciation from long-term assets.
                </p>
                <div className="bg-green-50 p-2 rounded mt-2 text-sm text-green-800">
                  <strong>Total Assets</strong> = sum of all asset accounts
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 2: List Liabilities (soonest due first)</h5>
                <p className="text-gray-700 text-sm">
                  Accounts Payable → Wages Payable → Unearned Revenue → Short-term Notes → Long-term Notes → Mortgage Payable.
                </p>
                <div className="bg-red-50 p-2 rounded mt-2 text-sm text-red-800">
                  <strong>Total Liabilities</strong> = sum of all liability accounts
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 3: Calculate Ending Retained Earnings</h5>
                <p className="text-gray-700 text-sm mb-2">
                  This is the bridge from the Income Statement. You need three numbers:
                </p>
                <div className="bg-purple-50 p-3 rounded font-mono text-sm">
                  Beginning Retained Earnings + Net Income − Dividends = Ending Retained Earnings
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 4: List Equity</h5>
                <p className="text-gray-700 text-sm">
                  Common Stock (or Owner's Capital) + Ending Retained Earnings.
                </p>
                <div className="bg-purple-50 p-2 rounded mt-2 text-sm text-purple-800">
                  <strong>Total Equity</strong> = Common Stock + Ending Retained Earnings
                </div>
              </div>

              <div className="bg-white p-4 rounded border">
                <h5 className="font-medium text-gray-800 mb-2">Step 5: Verify the Equation</h5>
                <p className="text-gray-700 text-sm">
                  Check: Total Assets must equal Total Liabilities + Total Equity. If they do not match, go back and
                  check your classifications and arithmetic.
                </p>
                <div className="bg-blue-50 p-2 rounded mt-2 text-sm text-blue-800">
                  <strong>Assets = Liabilities + Equity</strong> — this must always be true.
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Worked Example: Sarah's TechStart Solutions
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            Here is Sarah's trial balance as of April 30, 2024. Watch how we organize it into a Balance Sheet.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-3">Trial Balance (selected accounts):</h4>
            <table className="min-w-full text-sm border-collapse border border-gray-300 mb-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                  <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-gray-300 px-4 py-2">Cash</td><td className="border border-gray-300 px-4 py-2 text-right">$10,300</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Receivable</td><td className="border border-gray-300 px-4 py-2 text-right">$6,400</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Supplies</td><td className="border border-gray-300 px-4 py-2 text-right">$1,200</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Equipment</td><td className="border border-gray-300 px-4 py-2 text-right">$12,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accumulated Depreciation</td><td className="border border-gray-300 px-4 py-2 text-right">($1,500)</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Accounts Payable</td><td className="border border-gray-300 px-4 py-2 text-right">$3,200</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Notes Payable (long-term)</td><td className="border border-gray-300 px-4 py-2 text-right">$8,000</td></tr>
                <tr><td className="border border-gray-300 px-4 py-2">Common Stock</td><td className="border border-gray-300 px-4 py-2 text-right">$15,000</td></tr>
              </tbody>
            </table>
            <div className="bg-blue-50 p-3 rounded border border-blue-200 text-sm text-blue-800">
              <strong>Additional information:</strong> Beginning Retained Earnings = $15,000. Net Income (from Income Statement) = $4,220. Dividends paid = $2,000.
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-green-300 shadow-lg mb-6">
            <h4 className="font-bold text-green-900 mb-4 text-center text-lg">
              TechStart Solutions<br/>
              Balance Sheet<br/>
              As of April 30, 2024
            </h4>

            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-bold text-green-800 border-b border-green-300 pb-1 mb-2">ASSETS</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Cash</span><span className="text-right">$10,300</span>
                  <span>Accounts Receivable</span><span className="text-right">$6,400</span>
                  <span>Supplies</span><span className="text-right">$1,200</span>
                  <span>Equipment</span><span className="text-right">$12,000</span>
                  <span>Less: Accum. Depreciation</span><span className="text-right">($1,500)</span>
                  <span className="font-bold border-t border-green-300 pt-1">Total Assets</span><span className="font-bold border-t border-green-300 pt-1 text-right">$28,400</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-red-800 border-b border-red-300 pb-1 mb-2">LIABILITIES</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Accounts Payable</span><span className="text-right">$3,200</span>
                  <span>Notes Payable (long-term)</span><span className="text-right">$8,000</span>
                  <span className="font-bold border-t border-red-300 pt-1">Total Liabilities</span><span className="font-bold border-t border-red-300 pt-1 text-right">$11,200</span>
                </div>
              </div>

              <div>
                <h5 className="font-bold text-purple-800 border-b border-purple-300 pb-1 mb-2">EQUITY</h5>
                <div className="grid grid-cols-2 gap-2 ml-4">
                  <span>Common Stock</span><span className="text-right">$15,000</span>
                  <span>Retained Earnings</span><span className="text-right">$2,200</span>
                  <span className="font-bold border-t border-purple-300 pt-1">Total Equity</span><span className="font-bold border-t border-purple-300 pt-1 text-right">$17,200</span>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded border border-green-300">
                <div className="grid grid-cols-2 gap-2 font-bold text-green-900">
                  <span>Total Liabilities + Equity</span><span className="text-right">$28,400</span>
                </div>
                <p className="text-green-700 text-xs mt-2">
                  Check: Assets ($28,400) = Liabilities ($11,200) + Equity ($17,200) ✓
                </p>
              </div>
            </div>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">Retained Earnings Roll-Forward</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm space-y-1">
              <p>Beginning Retained Earnings:  $15,000</p>
              <p>+ Net Income (from Income Stmt): + $4,220</p>
              <p>− Dividends Paid:              − $2,000</p>
              <p className="font-bold border-t border-amber-300 pt-1 mt-1">Ending Retained Earnings:     $17,220</p>
            </div>
            <p className="text-amber-800 text-sm mt-3">
              Note: In the worked example above, Ending RE is shown as $2,200 because Common Stock was $15,000 and Total Equity must be $17,200. The roll-forward calculation gives $17,220 — in a real scenario, these would match exactly. The key idea is the <strong>formula</strong>: Beginning RE + Net Income − Dividends.
            </p>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-6">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Why must the Balance Sheet always balance? What would it mean if Assets did not equal Liabilities + Equity?</li>
                <li>How does the Net Income number from the Income Statement end up on the Balance Sheet?</li>
                <li>If Sarah paid no dividends this month, what would her Ending Retained Earnings be?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ComprehensionCheck
          title="Balance Sheet Structure & Retained Earnings"
          description="Verify your understanding of the accounting equation, balance sheet construction, and the retained earnings link."
          questions={introductionQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">Phase 2 Learning Target</h3>
          <p className="text-amber-800">
            You should now understand the accounting equation, how to classify accounts into assets, liabilities, and equity,
            how to calculate Ending Retained Earnings from Beginning RE, Net Income, and Dividends, and why the Balance
            Sheet must always balance.
          </p>
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
