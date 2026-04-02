import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Phase 3: Build ProfitMatrix and Dashboard
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your ProfitMatrix and Dashboard</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Phase 2, you built the TargetProfit and PriceSensitivity sheets. Now you will create the
              ProfitMatrix to see how profit changes across both price AND volume simultaneously, and the
              Dashboard to summarize your final recommendation. The Dashboard is the most important sheet
              for your presentation in Lesson 10.
            </p>
          </div>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="text-xl">ProfitMatrix Sheet — The Full Price-by-Volume Grid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The ProfitMatrix shows profit for every combination of price and volume. This is your most
                powerful tool for understanding risk — it shows what happens if things go better or worse than expected.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">Step 1: Set Up Your Grid</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Choose 3-4 prices to test (include your recommended price)</li>
                    <li>Choose 3-4 volume levels (below expected, expected, above expected)</li>
                    <li>Create a table with prices as columns and volumes as rows</li>
                  </ul>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">Step 2: Calculate Profit for Each Cell</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Use this formula for each cell:
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    <code className="bg-emerald-100 px-1 rounded">Profit = (Price × Volume) - (Fixed Costs + Variable Cost per Unit × Volume)</code>
                  </p>
                  <p className="text-sm text-gray-700 mt-2">
                    Example: If Price = $45, Volume = 100, Fixed Costs = $2,000, Variable Cost = $20/unit:
                  </p>
                  <p className="text-sm text-gray-700">
                    Profit = ($45 × 100) - ($2,000 + $20 × 100) = $4,500 - $4,000 = <strong>$500</strong>
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">Step 3: Highlight Key Zones</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>Green zone:</strong> Cells where profit meets or exceeds your target</li>
                    <li><strong>Yellow zone:</strong> Cells where you make some profit but miss your target</li>
                    <li><strong>Red zone:</strong> Cells where you lose money</li>
                  </ul>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">Step 4: Answer These Questions</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>How much can volume drop before you lose money at your recommended price?</li>
                    <li>What happens to profit if a competitor forces you to lower your price by $5?</li>
                    <li>Which price-volume combinations are safest for your business?</li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Common mistake:</strong> Mixing up the formula order. Always calculate total revenue first
                  (price × volume), then subtract total costs (fixed + variable × volume).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">Dashboard Sheet — Your Recommendation Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                The Dashboard is the sheet your audience will look at first during your presentation.
                It should be clean, clear, and tell the story of your recommendation in one page.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Section 1: Business Summary</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Business name and type (from your scenario card)</li>
                    <li>Your team name</li>
                    <li>One sentence describing your business situation</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Section 2: Key Numbers</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Recommended price</li>
                    <li>Expected monthly volume</li>
                    <li>Projected monthly profit</li>
                    <li>Break-even units</li>
                    <li>Capacity utilization percentage</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Section 3: Recommendation Statement</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Write your full claim-evidence-risk statement here (you will refine this in Phase 4):
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>Claim:</strong> What price do you recommend?</li>
                    <li><strong>Evidence:</strong> Cite at least 3 numbers from your workbook</li>
                    <li><strong>Risk:</strong> What is the main downside or weakness?</li>
                    <li><strong>Close:</strong> Why is this still the best choice?</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Section 4: Sensitivity Summary</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Briefly summarize what your ProfitMatrix shows:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Best-case scenario (high price, high volume)</li>
                    <li>Worst-case scenario (low price, low volume)</li>
                    <li>Most likely outcome based on your analysis</li>
                  </ul>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Design tip:</strong> Keep the Dashboard clean and readable. Use bold headers,
                  clear spacing, and avoid clutter. Your audience should be able to understand your
                  recommendation in 30 seconds.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>What to Complete Before Moving On</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>ProfitMatrix sheet</strong> has a complete price-by-volume grid with profit calculations</li>
                <li><strong>ProfitMatrix sheet</strong> has key zones highlighted (green/yellow/red)</li>
                <li><strong>Dashboard sheet</strong> has all four sections: Business Summary, Key Numbers, Recommendation, Sensitivity Summary</li>
                <li><strong>Dashboard sheet</strong> cites at least 3 specific numbers from your workbook</li>
                <li>Both sheets have clean labels and professional formatting</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Quality Check — Is Your Dashboard Presentation-Ready?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Before moving to Phase 4, review your Dashboard against these criteria:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Can someone understand your recommendation in 30 seconds?</li>
                <li>Are all numbers clearly labeled with units ($, units, %)?</li>
                <li>Does your recommendation statement include claim, evidence, risk, and close?</li>
                <li>Is the formatting clean and professional?</li>
                <li>Would a stakeholder (investor, teacher, customer) find this convincing?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
