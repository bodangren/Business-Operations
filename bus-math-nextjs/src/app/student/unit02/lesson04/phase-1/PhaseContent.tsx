import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle } from "lucide-react"

export default function Phase1Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-amber-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
              Phase 1: Recycle & Introduce
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              The Close Is Not Done Yet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah closed her temporary accounts—but did she catch every adjustment first?
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              In Lesson 3, Sarah learned how to close temporary accounts—revenue, expenses, and dividends—to Income Summary and then to Retained Earnings. That was a critical step. But there is a dangerous gap between "the entries are closed" and "the close is correct."
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Sarah's Realization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-800">
                After closing her books, Sarah's accountant reviewed her work and asked one question:
              </p>
              <div className="bg-amber-100 p-4 rounded border border-amber-300">
                <p className="font-semibold text-amber-900 italic">
                  "Did you catch the depreciation on the new laptops? The prepaid insurance that expired? The wages your part-timer earned on March 31 but hasn't been paid for yet?"
                </p>
              </div>
              <p className="text-amber-800">
                Sarah froze. She had closed her books—but she had not made sure every recurring adjustment was recorded <em>before</em> closing. Her net income was wrong. Her balance sheet was wrong. And she had already zeroed out her temporary accounts.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">
                What Happens When You Close Too Early
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-red-800">
                Sarah's unadjusted trial balance looked fine. But the unadjusted trial balance is never the final answer. Here is what she missed:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h4 className="font-semibold text-red-900 mb-2">Missed Adjustments:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>Depreciation on equipment purchased in February</li>
                    <li>Prepaid insurance that expired during March</li>
                    <li>Accrued wages for the last week of March</li>
                    <li>Unearned revenue that was earned in March</li>
                    <li>Supplies used during the month</li>
                  </ul>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300">
                  <h4 className="font-semibold text-red-900 mb-2">Impact on Statements:</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>Net income overstated by $3,450</li>
                    <li>Assets overstated (supplies, prepaid insurance)</li>
                    <li>Liabilities understated (accrued wages)</li>
                    <li>Retained Earnings wrong after closing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                The Solution: A Complete Close Workflow
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                The fix is not to work harder—it is to work in order. Professional accountants use a <strong>month-end close checklist</strong> that forces every adjustment to be identified, recorded, and verified <em>before</em> any closing entries are made.
              </p>
              <p className="text-blue-800">
                In this lesson, you will learn the complete month-end close workflow from start to finish. By the end, you will be able to walk through every step in order—without missing a single adjustment.
              </p>
              <div className="bg-blue-100 p-4 rounded border border-blue-300">
                <p className="text-sm text-blue-700">
                  <strong>Today's target:</strong> Understand why a structured close workflow matters and predict what happens when steps are skipped.
                </p>
              </div>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
