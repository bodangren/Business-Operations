import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Phase 1: Hook</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Why Clean Data Matters to Investors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before you can forecast, you need data you can trust. Investors lose confidence when analysts present messy, unverified data.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900 text-2xl">The Café Data Problem</CardTitle>
              </CardHeader>
              <CardContent className="text-red-900 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah's café client needs a weekend forecast to plan inventory and staffing. The POS system exports
                  data that looks ready—but has hidden problems that will wreck any analysis.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">What's Wrong</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Dates stored as text (can't do time analysis)</li>
                      <li>Prices include $ signs (break formulas)</li>
                      <li>Duplicate transaction rows</li>
                      <li>Product names with inconsistent spacing</li>
                      <li>Missing values where system timed out</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why Investors Care</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 text-green-900">
                      <li>Dirty data → unreliable forecasts</li>
                      <li>Unverified data → audit failures</li>
                      <li>Documented cleaning → trust and credibility</li>
                      <li>Clean pipeline → reproducible analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-900 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  The Investor Question
                </CardTitle>
              </CardHeader>
              <CardContent className="text-amber-900">
                <p className="font-medium text-lg mb-2">"How do you know this data is accurate enough to base decisions on?"</p>
                <p>
                  Your answer shapes whether investors trust your forecast. Show documented cleaning steps, before/after metrics,
                  and data quality flags. If you can't prove the data is clean, they won't trust your model.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">Discussion Prompt (3 minutes):</p>
                <p className="text-blue-800 mb-2">
                  What would you do if you had 30 minutes to clean this data before a 2pm investor meeting?
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Which cleaning steps give you the most confidence quickly?</li>
                  <li>What would you skip if time runs out?</li>
                  <li>What would you tell the investor about your data limitations?</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

    </div>
  )
}