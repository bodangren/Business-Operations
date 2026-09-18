'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, CheckCircle2,  Target, ClipboardList } from "lucide-react"

export default function Lesson09Content() {
  const milestone2Criteria = [
    "All transactions from group dataset are entered in the Transactions sheet",
    "Trial Balance sheet shows debits = credits with no error flags",
    "Error Checks sheet confirms all formula validations pass",
    "Executive Summary sheet has a clear claim with at least three cited numbers",
    "Executive Summary includes one clear risk or limitation",
    "Team has rehearsed its 4-minute investor pitch"
  ]

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12 space-y-10">
        <section className="text-center space-y-4">
          <Badge className="bg-indigo-100 text-indigo-800 text-xl px-6 py-3">📊 Unit 1 • Lesson 09</Badge>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Project Milestone 2: Complete Workbook & Rehearse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Finish your Smart Ledger, write your recommendation, get peer feedback, and rehearse your pitch!
          </p>
        </section>

        <section className="space-y-6">
          <Card className="border-indigo-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-800 flex items-center gap-2">
                <FileSpreadsheet className="w-6 h-6" />
                Continue Your Group Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Open <strong>the same workbook you renamed and started in Lesson 08</strong>. Do not create a new one!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-800">Sheets to Finish</CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-900 space-y-1">
                    <p>• Enter ALL remaining transactions</p>
                    <p>• Verify Trial Balance totals</p>
                    <p>• Confirm Error Checks are green</p>
                    <p>• Complete Executive Summary</p>
                  </CardContent>
                </Card>
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-purple-800">Recommendation Structure</CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-900 space-y-1">
                    <p><strong>Claim:</strong> One clear statement about the business</p>
                    <p><strong>Evidence:</strong> At least three numbers from your workbook</p>
                    <p><strong>Risk:</strong> One limitation or downside to consider</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-green-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Milestone 2 Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Before the end of class today, your team should complete all of the following:
              </p>
              <ul className="space-y-3">
                {milestone2Criteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{criterion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-yellow-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-800 flex items-center gap-2">
                <ClipboardList className="w-6 h-6" />
                Today's Workflow (50 Minutes)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-gray-800">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-900 mb-1">0–20 minutes: Finish the workbook</p>
                  <p className="text-yellow-800">
                    Enter all remaining transactions, verify error checks, and complete the Executive Summary sheet.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-900 mb-1">20–35 minutes: Peer critique</p>
                  <p className="text-orange-800">
                    Pair with another team, exchange workbooks, and give feedback using the prompts below.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-1">35–50 minutes: Revise and rehearse</p>
                  <p className="text-green-800">
                    Use peer feedback to revise your work. Then rehearse your 4-minute investor pitch as a team.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  )
}
