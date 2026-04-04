import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <PhaseHeader unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              Phase 2: Complete TargetProfit and PriceSensitivity
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build Your Target Profit and Sensitivity Analysis</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Phase 1, you reopened your workbook and reviewed what you completed in Lesson 08.
              Now you will build the TargetProfit sheet to solve for your profit target, and the PriceSensitivity
              sheet to test how profit changes as you adjust price. These two sheets form the core of your
              pricing recommendation evidence.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">TargetProfit Sheet — Solve for Your Target</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your business has a target profit from your scenario card. This sheet answers the question:
                &quot;What price or volume do we need to hit that target?&quot;
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Step 1: Enter Your Known Values</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li><strong>Fixed Costs:</strong> Copy the total from your CostSetup sheet</li>
                    <li><strong>Variable Cost per Unit:</strong> Copy from your CostSetup sheet</li>
                    <li><strong>Target Profit:</strong> From your group scenario card</li>
                    <li><strong>Capacity:</strong> Maximum units you can produce per month</li>
                  </ul>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Step 2: Calculate Required Contribution Margin</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Use this formula: <code className="bg-blue-100 px-1 rounded">Required CM = (Fixed Costs + Target Profit) ÷ Units</code>
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Or solve for units: <code className="bg-blue-100 px-1 rounded">Required Units = (Fixed Costs + Target Profit) ÷ (Price - Variable Cost per Unit)</code>
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Step 3: Test Different Price-Volume Combinations</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Try at least 3 different prices. For each price, calculate how many units you need to sell
                    to hit your target profit. Flag any combination that exceeds your capacity.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Common mistake:</strong> Forgetting to add fixed costs to target profit before dividing.
                  Your contribution margin must cover BOTH fixed costs AND your target profit.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">PriceSensitivity Sheet — Test Price Changes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                This sheet shows how profit changes when you adjust price while holding volume constant.
                It helps you understand which prices are most sensitive to change.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Step 1: Set Your Base Case</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Choose a starting price from your PriceOptions sheet</li>
                    <li>Use your expected volume (units you plan to sell)</li>
                    <li>Calculate baseline profit</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Step 2: Test Price Changes</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Test at least 5 different prices around your recommended price:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Two prices below your recommendation (e.g., -$2, -$5)</li>
                    <li>Your recommended price</li>
                    <li>Two prices above your recommendation (e.g., +$2, +$5)</li>
                  </ul>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Step 3: Calculate Profit for Each Price</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Use this formula for each row: <code className="bg-purple-100 px-1 rounded">Profit = (Price × Units) - (Fixed Costs + Variable Cost per Unit × Units)</code>
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Step 4: Identify the Sweet Spot</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Which price gives you the best balance of profit and risk? Note where profit drops sharply
                    if you go too low or too high.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Check your work:</strong> If profit goes UP when you LOWER the price, something is wrong.
                  Lower prices should generally mean lower profit (unless you sell significantly more units).
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
                <li><strong>TargetProfit sheet</strong> has at least 3 price-volume combinations tested</li>
                <li><strong>TargetProfit sheet</strong> clearly shows which combinations hit your target profit</li>
                <li><strong>PriceSensitivity sheet</strong> has at least 5 different prices tested</li>
                <li><strong>PriceSensitivity sheet</strong> shows profit for each price with clear calculations</li>
                <li>Both sheets have clean labels and organized layout</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Connection to Your Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                These two sheets will provide the evidence for your recommendation statement.
                When you write your claim in Phase 4, you will cite numbers from these sheets:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>The exact price you recommend</li>
                <li>The projected profit at that price</li>
                <li>The break-even units or capacity utilization</li>
                <li>How sensitive profit is to price changes (from PriceSensitivity)</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
