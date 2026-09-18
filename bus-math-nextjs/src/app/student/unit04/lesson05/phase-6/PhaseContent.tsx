import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BarChart2 } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Reflection and Handoff</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Data Cleaning Complete: Ready for Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your cleaned dataset is the foundation for reliable analysis. Now you can build forecasts with confidence.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">What You Accomplished</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Removed duplicate transactions (documented row count change)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Cleaned text inconsistencies (TRIM, PROPER)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Converted prices from text to numbers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Handled missing values with documented decisions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Created audit trail for investor credibility</span>
              </div>
              <p className="mt-2">Result: A clean, analysis-ready dataset that investors can trust.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                What's Next (Lesson 06 Preview)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p className="mb-2">
                <strong>Lesson 06: Visualizations and Recommendations</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Create charts that tell the weekend sales story visually</li>
                <li>Calculate and visualize descriptive statistics (mean, median, spread)</li>
                <li>Build a recommendation based on what the data shows</li>
                <li>Practice explaining your findings to a non-technical audience</li>
              </ul>
              <p className="mt-3 text-sm">
                Your clean data from today makes all of this possible. No more fighting with messy inputs!
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}