'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { IncomeStatementSimple } from "@/components/financial-reports/IncomeStatementSimple"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson02Phases[1]

  const workedExample = {
    period: "For the Month Ended March 31, 2024",
    revenue: 6800,
    costOfGoodsSold: 0,
    grossProfit: 6800,
    operatingExpenses: 3950,
    operatingIncome: 2850,
    otherIncome: 0,
    interestExpense: 0,
    netIncomeBeforeTaxes: 2850,
    taxes: 0,
    netIncome: 2850
  }

  const revenueAccounts = [
    { name: "Service Revenue", amount: 6800 }
  ]

  const expenseAccounts = [
    { name: "Rent Expense", amount: 1200 },
    { name: "Salary Expense", amount: 2400 },
    { name: "Supplies Expense", amount: 350 }
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 text-2xl">The Rule: Build the Income Statement in Three Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                The Income Statement follows one formula: <strong>Revenues minus Expenses equals Net Income.</strong> 
                But a trial balance does not hand you those numbers ready-made. You must pull them out 
                yourself. Here is the procedure, step by step.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 text-lg mb-4">Step 1: Pull Out Only Revenue and Expense Accounts</h3>
              <p className="text-blue-800 mb-3">
                Scan the trial balance. Every account name tells you what type it is. Look for accounts 
                with <strong>"Revenue"</strong> or <strong>"Expense"</strong> in the name. Ignore Cash, 
                Equipment, Accounts Payable, Common Stock—those belong on the Balance Sheet, not here.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Revenue Accounts (credit balances)</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    {revenueAccounts.map((a) => (
                      <li key={a.name}>{a.name}: ${a.amount.toLocaleString()}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-800 mb-2">Expense Accounts (debit balances)</h4>
                  <ul className="text-red-700 text-sm space-y-1">
                    {expenseAccounts.map((a) => (
                      <li key={a.name}>{a.name}: ${a.amount.toLocaleString()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 text-lg mb-4">Step 2: Add Up Each Group</h3>
              <p className="text-blue-800 mb-3">
                Total Revenue = sum of all revenue accounts. Total Expenses = sum of all expense accounts.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold">Total Revenue</p>
                  <p className="text-green-700 text-sm">$6,800 (only one revenue account)</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-800 font-semibold">Total Expenses</p>
                  <p className="text-red-700 text-sm">$1,200 + $2,400 + $350 = <strong>$3,950</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
              <h3 className="font-bold text-blue-900 text-lg mb-4">Step 3: Subtract Expenses from Revenue</h3>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-800 mb-2">$6,800 − $3,950 = $2,850</p>
                <p className="text-blue-700">
                  <strong>Net Income = $2,850.</strong> Sarah's business earned more than it spent. 
                  That is the profit signal the bank needs to see.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Why Each Step Exists</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                It is tempting to skip straight to the subtraction. But each step protects you from a 
                specific mistake:
              </p>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Step 1 protects you from mixing in Balance Sheet accounts.</p>
                  <p className="text-amber-700 text-sm">
                    If you accidentally include Cash or Equipment in your calculation, your Net Income 
                    will be wrong. Only revenue and expense accounts measure profit.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Step 2 protects you from missing accounts.</p>
                  <p className="text-amber-700 text-sm">
                    Adding each group separately lets you verify that you caught every revenue and 
                    expense line. If your totals look off, you can trace back to the list.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Step 3 gives you the answer and its meaning.</p>
                  <p className="text-amber-700 text-sm">
                    A positive result means the business was profitable. A negative result means it 
                    lost money. The number itself is the story.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 shadow-sm">
          <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-100">
            <CardTitle className="text-purple-900 flex flex-col gap-1">
              The Finished Income Statement
              <span className="text-base font-normal text-purple-700">
                This is what the loan officer needed to see.
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-start">
              <div className="prose prose-sm max-w-none">
                <p>
                  Notice the structure: <strong>Revenue section at the top, expense section below it, 
                  and Net Income at the bottom.</strong> Every line comes from the trial balance, but 
                  only the revenue and expense accounts appear here.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Revenue ($6,800) is the total of all revenue accounts.</li>
                  <li>Operating Expenses ($3,950) is the total of Rent, Salary, and Supplies.</li>
                  <li>Net Income ($2,850) is the difference. This is the profit the bank will evaluate.</li>
                </ul>
              </div>
              <IncomeStatementSimple
                data={workedExample}
                className="max-w-xl mx-auto md:mx-0"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">Your Turn: Check Your Understanding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                Before you move on, confirm that you can explain the procedure in your own words:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-green-800">
                <li>What is the first thing you do when you receive a trial balance and need to build an Income Statement?</li>
                <li>Why do you add up revenue and expense accounts separately instead of subtracting them one at a time?</li>
                <li>If Net Income is negative, what does that tell you about the business?</li>
              </ol>
              <p className="text-green-700 text-sm">
                Discuss these with a partner or write your answers down. The next phase will add a 
                complication to this same procedure.
              </p>
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
