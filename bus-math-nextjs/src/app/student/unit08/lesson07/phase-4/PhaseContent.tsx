'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phase4Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">✨ Phase 4: Polish and Transfer Practice</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-orange-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-orange-900">Complete and Polish Your Rehearsal Workbook</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Now it is your turn to complete the shared rehearsal workbook. Your teacher has
                    left formula and category cells incomplete on purpose so you can practice filling them in.
                  </p>
                  <p>
                    Work through these tasks with your group:
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Categorize each basic entry into the correct report, section, and statement line</li>
                    <li>Complete the asset register checks and partial-year depreciation formulas</li>
                    <li>Confirm the method comparison shows SLN vs DDB Year 1 results</li>
                    <li>Build the full simple income statement and balance sheet</li>
                    <li>Write a draft recommendation statement with claim, statement evidence, and risk</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-900">Write Your Recommendation Statement</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Use this template to write your team's draft recommendation:</p>
                  <div className="p-4 bg-white rounded-lg border border-orange-200 space-y-3">
                    <div>
                      <p className="font-semibold text-orange-900">Claim:</p>
                      <p className="text-sm text-slate-600">We recommend using <strong>[method]</strong> for TechStart's fixed assets because...</p>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-900">Evidence:</p>
                      <p className="text-sm text-slate-600">The Income Statement and Balance Sheet show that <strong>[method]</strong> produces <strong>[specific profit or book value impact]</strong>, compared to <strong>[other method]</strong> which produces <strong>[specific number]</strong>.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-orange-900">Risk / Limitation:</p>
                      <p className="text-sm text-slate-600">One limitation of this recommendation is <strong>[risk]</strong>. This matters because <strong>[explanation]</strong>.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">What Must Transfer to the Real Project?</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">List the features or structures from today's rehearsal that your team must recreate independently in the real project:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2">Workbook Structures</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Entry categories feeding statement lines</li>
                        <li>Linked formulas between sheets</li>
                        <li>Partial-year SLN and DDB calculations</li>
                        <li>Income statement and balance sheet checks</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-2">Communication Moves</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Claim-evidence-risk recommendation</li>
                        <li>Cited statement numbers</li>
                        <li>Clear sheet labels and headers</li>
                        <li>Professional formatting</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
