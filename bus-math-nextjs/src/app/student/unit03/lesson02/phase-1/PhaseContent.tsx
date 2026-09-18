'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Phase1Content() {

  return (
    <div className="max-w-4xl space-y-8">

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

    </div>
  )
}
