import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, TrendingUp } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Reflection — What You Built Today
            </Badge>
            <h2 className="text-3xl font-bold text-gray-gray-900">
              Self-Auditing Ledger: Reliability for Investor Trust
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              You built formulas that automatically catch errors and prove Sarah's ledger is accurate. 
              These controls turn a spreadsheet into a professional financial system.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Synthesis: What You Can Now Do
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3 text-sm">
              <p><strong>Faster and more reliably:</strong> Calculate account totals without manual addition or risk of typos.</p>
              <p><strong>Automatically verify:</strong> Confirm debits equal credits in real time—no waiting for month-end.</p>
              <p><strong>Surface errors visibly:</strong> Red flags highlight problems before they spread to reports or decisions.</p>
              <p><strong>Document reliability:</strong> Audit controls and notes show reviewers exactly how you catch mistakes.</p>
              <p className="font-semibold mt-2">
                These skills let you build workbooks that professional analysts use every day.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Preview: Next Layer — Investor-Facing Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm space-y-2">
              <p>
                In <strong>Lesson 06</strong>, you'll build on your self-auditing formulas to create 
                an investor-facing summary that makes Sarah's ledger presentation-ready.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Create summary tables showing key financial indicators</li>
                <li>Connect your audit checks to a polished dashboard view</li>
                <li>Add professional formatting that feels investor-ready</li>
                <li>Prepare to defend your workbook evidence in plain language</li>
              </ul>
              <p className="mt-2">
                The formulas you built today (SUMIF, trial balance, conditional formatting) will 
                power that summary layer. You've built the foundation—now Sarah can present with confidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Workbook Ready for Lesson 06</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm">
              <p className="mb-2">
                Save your Lesson 05 workbook and keep it safe—you'll use it in Lesson 06 
                to build the investor-facing summary layer.
              </p>
              <p>
                Your self-auditing formulas are now part of Sarah's financial system. 
                In the next lesson, you'll make that system beautiful and presentation-ready 
                for investors.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
