'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const hookQuestions = [
  {
    id: 'hook-1',
    question: 'Sarah has her automated ledger working perfectly from Unit 01. What problem does she face when the bank asks for financial statements?',
    answers: [
      'The bank wants a formal Income Statement, not a list of individual transactions',
      'Her ledger has calculation errors',
      'She does not have enough money in her business',
      'Her CPA Jennifer Kim will not help her'
    ],
    explanation: 'A ledger records every transaction, but a bank needs to see the summarized story: how much revenue came in, how much went out as expenses, and what profit remains. That summary is the Income Statement.'
  },
  {
    id: 'hook-2',
    question: 'Look at this list of Sarah\'s March transactions. Which single number tells the bank if her business was profitable?',
    answers: [
      'You cannot tell from the raw list—you must group revenues and expenses and calculate Net Income',
      'The largest single transaction amount',
      'The total of all cash received',
      'The number of transactions completed'
    ],
    explanation: 'A raw transaction list mixes revenue, expense, asset, and liability entries together. You must sort and group them before any profit number appears.'
  },
  {
    id: 'hook-3',
    question: 'Jennifer Kim tells Sarah that the Income Statement answers one main question. What is it?',
    answers: [
      'Did the business earn more than it spent during this period?',
      'What does the business own right now?',
      'How much cash is in the bank today?',
      'How many customers did the business serve?'
    ],
    explanation: 'The Income Statement shows financial performance over a period by answering: Revenues minus Expenses equals what? That answer is Net Income—the profit signal.'
  }
]

export default function Phase1Page() {
  const currentPhase = lesson02Phases[0]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 text-2xl">The Day the Ledger Was Not Enough</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Sarah walked into the bank with her Unit 01 ledger open on her laptop. Every transaction 
                was recorded. Every formula calculated correctly. She was proud of how far she had come 
                from the spreadsheet chaos of her first month.
              </p>

              <p className="text-lg leading-relaxed">
                The loan officer scrolled through the rows of journal entries for a long moment. Then 
                she looked up and said: <strong>"This is thorough, but I cannot read a profit story from 
                a transaction list. Can you bring me an Income Statement?"</strong>
              </p>

              <p className="text-lg leading-relaxed">
                Sarah froze. She knew her numbers were right. But the loan officer was also right—a 
                ledger shows <em>what happened</em>, not <em>what it means</em>. Sarah needed to 
                transform her raw entries into a structured report that answered one question clearly: 
                <strong>did the business earn more than it spent?</strong>
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">The Friction Point</h3>
              <p className="text-blue-800">
                A trial balance or ledger lists every account with its ending balance. But it does not 
                tell you which accounts belong together, which ones measure profit, and which ones 
                belong on a different statement entirely. Today you will learn the rule that turns a 
                flat list of accounts into a clear Income Statement.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Sarah's March Trial Balance (Partial)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                Here is what Sarah handed the loan officer—a partial trial balance from her March 
                ledger. Look at it for a moment. Can you tell if her business was profitable?
              </p>

              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">Account</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">Debit</th>
                      <th className="border border-gray-300 px-4 py-2 text-right">Credit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-gray-300 px-4 py-2">Cash</td><td className="border border-gray-300 px-4 py-2 text-right">$8,500</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Accounts Receivable</td><td className="border border-gray-300 px-4 py-2 text-right">$2,200</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Service Revenue</td><td className="border border-gray-300 px-4 py-2"></td><td className="border border-gray-300 px-4 py-2 text-right">$6,800</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Rent Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$1,200</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Salary Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$2,400</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Supplies Expense</td><td className="border border-gray-300 px-4 py-2 text-right">$350</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Common Stock</td><td className="border border-gray-300 px-4 py-2"></td><td className="border border-gray-300 px-4 py-2 text-right">$5,000</td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Equipment</td><td className="border border-gray-300 px-4 py-2 text-right">$3,500</td><td className="border border-gray-300 px-4 py-2"></td></tr>
                    <tr><td className="border border-gray-300 px-4 py-2">Accounts Payable</td><td className="border border-gray-300 px-4 py-2"></td><td className="border border-gray-300 px-4 py-2 text-right">$1,150</td></tr>
                  </tbody>
                </table>
              </div>

              <p>
                The loan officer cannot answer the profit question from this table alone. The revenue 
                and expense accounts are mixed in with assets, liabilities, and equity. Someone needs 
                to <strong>pull out only the revenue and expense accounts, group them, and subtract</strong>. 
                That is exactly what you will learn to do in this lesson.
              </p>
            </div>
          </CardContent>
        </Card>

        <ComprehensionCheck
          title="Notice the Problem"
          description="Check that you can see why the trial balance alone does not answer the profit question."
          questions={hookQuestions}
          showExplanations={true}
        />

        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800">What You Will Learn Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">1</Badge>
                <p className="text-indigo-700">How to identify which accounts belong on the Income Statement and which belong elsewhere</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">2</Badge>
                <p className="text-indigo-700">How to group revenue accounts and expense accounts into clear sections</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">3</Badge>
                <p className="text-indigo-700">How to calculate Net Income and explain what it tells you about the business</p>
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
