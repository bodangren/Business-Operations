'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

/**
 * Present an income statement with separate operating and interest items.
 * @returns The guided statement and calculation notes.
 */
export default function Phase3Content() {

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
  const interestIncome = complicationTrialBalance.find(a => a.name === "Interest Income")!.amount
  const interestExpense = complicationTrialBalance.find(a => a.name === "Interest Expense")!.amount
  const operatingRevenue = totalRevenue - interestIncome
  const operatingExpenses = totalExpenses - interestExpense

  return (
    <div className="max-w-4xl space-y-8">

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
                <div className="flex justify-between font-bold border-t border-gray-300 pt-1">
                  <span>Total Operating Revenue</span>
                  <span>${operatingRevenue.toLocaleString()}</span>
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
                  <span>${operatingExpenses.toLocaleString()}</span>
                </div>

                <div className="flex justify-between font-bold border-t-2 border-gray-400 pt-2 mt-2">
                  <span>Operating Income</span>
                  <span>${(operatingRevenue - operatingExpenses).toLocaleString()}</span>
                </div>

                <div className="font-bold border-b border-gray-400 pb-1 mt-4">Non-Operating</div>
                <div className="flex justify-between pl-4">
                  <span>Interest Income</span>
                  <span>${interestIncome.toLocaleString()}</span>
                </div>
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

    </div>
  )
}
