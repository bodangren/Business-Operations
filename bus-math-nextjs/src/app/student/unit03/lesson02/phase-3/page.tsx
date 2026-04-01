'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const complicationQuestions = [
  {
    id: 'comp-1',
    question: 'Sarah\'s trial balance now includes "Interest Income" of $120 (credit) and "Interest Expense" of $80 (debit). Where does each belong on the Income Statement?',
    answers: [
      'Interest Income goes in a non-operating revenue section; Interest Expense goes in a non-operating expense section, both below Operating Income',
      'Both go into the main Revenue section at the top',
      'Both go into the main Expense section',
      'They cancel each other out and should not appear on the Income Statement'
    ],
    explanation: 'Interest Income and Interest Expense are not part of the core business operations. They appear in separate sections below Operating Income so that readers can see how the main business performed separately from financing activities.'
  },
  {
    id: 'comp-2',
    question: 'Sarah\'s trial balance shows "Owner\'s Draw" of $1,500 (debit). Should this appear on the Income Statement?',
    answers: [
      'No — Owner\'s Draw is an equity account, not a revenue or expense. It does not affect Net Income.',
      'Yes — it is money leaving the business, so it is an expense',
      'Yes — but only if the amount is large',
      'Only on the Balance Sheet, never on the Income Statement'
    ],
    explanation: 'Owner\'s Draw is a withdrawal of equity, not a business expense. It reduces equity on the Balance Sheet but does not appear on the Income Statement. Including it as an expense would understate Net Income.'
  },
  {
    id: 'comp-3',
    question: 'Sarah has two revenue accounts: Service Revenue $8,400 and Sales Revenue $2,100. What is the correct Total Revenue line?',
    answers: [
      '$10,500 — add all revenue accounts together before subtracting expenses',
      '$8,400 — use only the largest revenue account',
      '$6,300 — subtract Sales Revenue from Service Revenue',
      '$2,100 — use only the Sales Revenue account'
    ],
    explanation: 'Total Revenue is the sum of all revenue accounts. Both Service Revenue and Sales Revenue represent money earned, so they add together: $8,400 + $2,100 = $10,500.'
  },
  {
    id: 'comp-4',
    question: 'After building the Income Statement, Sarah\'s Net Income is negative $420. What does this mean?',
    answers: [
      'The business spent more than it earned during this period — it had a net loss',
      'She made a calculation error because businesses always make a profit',
      'The business needs to raise its prices immediately',
      'The Income Statement is missing revenue accounts'
    ],
    explanation: 'A negative Net Income (a net loss) means total expenses exceeded total revenue. It does not automatically mean an error — some businesses operate at a loss, especially early on. But it is a signal the owner must address.'
  }
]

export default function Phase3Page() {
  const currentPhase = lesson02Phases[2]

  const complicationTrialBalance = [
    { name: "Cash", amount: 9200, type: "Asset" },
    { name: "Accounts Receivable", amount: 3100, type: "Asset" },
    { name: "Equipment", amount: 4500, type: "Asset" },
    { name: "Service Revenue", amount: 8400, type: "Revenue" },
    { name: "Sales Revenue", amount: 2100, type: "Revenue" },
    { name: "Interest Income", amount: 120, type: "Revenue" },
    { name: "Rent Expense", amount: 1800, type: "Expense" },
    { name: "Salary Expense", amount: 3200, type: "Expense" },
    { name: "Supplies Expense", amount: 650, type: "Expense" },
    { name: "Interest Expense", amount: 80, type: "Expense" },
    { name: "Owner's Draw", amount: 1500, type: "Equity" },
    { name: "Common Stock", amount: 6000, type: "Equity" },
    { name: "Accounts Payable", amount: 1390, type: "Liability" },
  ]

  const incomeStatementAccounts = complicationTrialBalance.filter(
    (a) => a.type === "Revenue" || a.type === "Expense"
  )

  const totalRevenue = incomeStatementAccounts
    .filter((a) => a.type === "Revenue")
    .reduce((sum, a) => sum + a.amount, 0)

  const totalExpenses = incomeStatementAccounts
    .filter((a) => a.type === "Expense")
    .reduce((sum, a) => sum + a.amount, 0)

  const netIncome = totalRevenue - totalExpenses

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 text-2xl">A Harder Trial Balance — Same Procedure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                The procedure from Phase 2 does not change. But now the trial balance is longer, 
                includes accounts that do not belong on the Income Statement at all, and has revenue 
                and expense items that need sub-grouping. Your job: apply the same three steps without 
                the hand-holding.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-green-300">
              <h3 className="font-bold text-green-900 mb-3">TechStart Solutions — Trial Balance (April)</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">Amount</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {complicationTrialBalance.map((a) => (
                      <tr key={a.name}>
                        <td className="border border-gray-300 px-4 py-2">{a.name}</td>
                        <td className="border border-gray-300 px-4 py-2 text-right">${a.amount.toLocaleString()}</td>
                        <td className="border border-gray-300 px-4 py-2">{a.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Complication 1: Accounts That Do Not Belong Here</h3>
              <p className="text-amber-800">
                Cash, Equipment, Accounts Receivable, Accounts Payable, Common Stock, and Owner's Draw 
                are <strong>not</strong> revenue or expense accounts. They belong on the Balance Statement 
                of equity. If you include any of them in your Income Statement, your Net Income will be wrong.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Complication 2: Multiple Revenue and Expense Lines</h3>
              <p className="text-amber-800">
                Sarah now has Service Revenue, Sales Revenue, and Interest Income. She also has four 
                expense lines including Interest Expense. You must add all revenue accounts together 
                and all expense accounts together — but you should also show the sub-groups so a 
                reader can see where the money came from and where it went.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100">
            <CardTitle className="text-purple-900 flex flex-col gap-1">
              The Income Statement — Less Scaffolding
              <span className="text-base font-normal text-purple-700">
                Same three steps. Fewer hints. More authentic format.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p>
                Here is the result of applying the three-step procedure to the April trial balance. 
                Notice that the format is cleaner and closer to what a real business would produce.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-300 font-mono text-sm">
              <div className="text-center font-bold mb-4">
                <p>TechStart Solutions</p>
                <p>Income Statement</p>
                <p>For the Month Ended April 30, 2024</p>
              </div>
              <div className="space-y-2">
                <div className="font-bold border-b border-gray-400 pb-1">Revenue</div>
                <div className="flex justify-between pl-4">
                  <span>Service Revenue</span>
                  <span>$8,400</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>Sales Revenue</span>
                  <span>$2,100</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>Interest Income</span>
                  <span>$120</span>
                </div>
                <div className="flex justify-between font-bold border-t border-gray-300 pt-1">
                  <span>Total Revenue</span>
                  <span>${totalRevenue.toLocaleString()}</span>
                </div>

                <div className="font-bold border-b border-gray-400 pb-1 mt-4">Operating Expenses</div>
                <div className="flex justify-between pl-4">
                  <span>Rent Expense</span>
                  <span>$1,800</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>Salary Expense</span>
                  <span>$3,200</span>
                </div>
                <div className="flex justify-between pl-4">
                  <span>Supplies Expense</span>
                  <span>$650</span>
                </div>
                <div className="flex justify-between font-bold border-t border-gray-300 pt-1">
                  <span>Total Operating Expenses</span>
                  <span>${(totalExpenses - 80).toLocaleString()}</span>
                </div>

                <div className="flex justify-between font-bold border-t-2 border-gray-400 pt-2 mt-2">
                  <span>Operating Income</span>
                  <span>${(totalRevenue - totalExpenses + 80).toLocaleString()}</span>
                </div>

                <div className="font-bold border-b border-gray-400 pb-1 mt-4">Non-Operating</div>
                <div className="flex justify-between pl-4">
                  <span>Interest Expense</span>
                  <span>($80)</span>
                </div>

                <div className="flex justify-between font-bold border-t-2 border-gray-400 pt-2 mt-2 text-lg">
                  <span>Net Income</span>
                  <span>${netIncome.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <p className="text-purple-800 text-sm">
                <strong>Key difference from Phase 2:</strong> This statement separates operating from 
                non-operating items. Operating Income shows how the core business performed. Interest 
                Income and Interest Expense appear below because they relate to financing, not to the 
                main service business. This distinction matters to investors and lenders.
              </p>
            </div>
          </CardContent>
        </Card>

        <ComprehensionCheck
          title="Check Your Understanding — Harder Scenario"
          description="These questions test whether you can apply the same three-step procedure when the trial balance is longer and includes distractor accounts."
          questions={complicationQuestions}
          showExplanations={true}
        />

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Explain Your Reasoning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                The next phase will give you repeated practice building Income Statements from 
                scratch with different numbers. Before you get there, make sure you can explain 
                <em>why</em> each step matters:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-blue-800">
                <li>Why is Owner's Draw excluded from the Income Statement even though it is a debit?</li>
                <li>Why does separating operating from non-operating items give a clearer picture of the business?</li>
                <li>If you found a Net Loss instead of Net Income, what would you tell Sarah?</li>
              </ol>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
