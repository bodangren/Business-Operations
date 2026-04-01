'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { IncomeStatementPractice } from "@/components/exercises/IncomeStatementPractice"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson02Phases[3]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 text-2xl">Deliberate Practice: Build the Income Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                You know the three-step procedure. Now you will practice it until it is reliable. 
                Each round gives you a new trial balance with different accounts and numbers. 
                Your job is the same every time: pull out the revenue accounts, pull out the 
                expense accounts, and calculate Net Income.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-purple-300">
              <h3 className="font-bold text-purple-900 mb-2">The Procedure (Same Every Round)</h3>
              <ol className="list-decimal list-inside space-y-1 text-purple-800 text-sm">
                <li>Scan the trial balance and identify every revenue account</li>
                <li>Add all revenue amounts together → Total Revenue</li>
                <li>Scan the trial balance and identify every expense account</li>
                <li>Add all expense amounts together → Total Expenses</li>
                <li>Subtract: Total Revenue minus Total Expenses = Net Income</li>
              </ol>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
              <h3 className="font-semibold text-amber-900 mb-2">Rules for This Practice</h3>
              <ul className="text-amber-800 text-sm space-y-1">
                <li>• Work through each problem on your own before submitting</li>
                <li>• Feedback comes <em>after</em> you submit, not during each step</li>
                <li>• If you get it wrong, read the feedback and try the next round</li>
                <li>• You can request a worked solution if you are stuck</li>
                <li>• Mastery = 3 correct answers in a row</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <IncomeStatementPractice />

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">Common Mistakes to Watch For</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900">Including Balance Sheet accounts in the Income Statement</p>
                <p className="text-blue-700 text-sm">
                  Cash, Equipment, Accounts Payable, Common Stock, and Owner's Draw are not revenue 
                  or expense. If your Net Income looks wrong, check that you only used accounts with 
                  "Revenue," "Expense," or "Income" in the name.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900">Treating Owner's Draw as an expense</p>
                <p className="text-blue-700 text-sm">
                  Owner's Draw is a withdrawal of equity, not a business cost. It reduces the owner's 
                  stake in the company but does not affect Net Income.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <p className="font-semibold text-blue-900">Missing a revenue or expense line</p>
                <p className="text-blue-700 text-sm">
                  When the trial balance has many accounts, it is easy to skip one. After you submit, 
                  if your answer is close but not exact, check whether you missed a small account.
                </p>
              </div>
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
