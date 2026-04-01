import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { AlertTriangle, TrendingUp, TrendingDown, DollarSign, Users } from "lucide-react"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <Card className="border-indigo-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-900">Explore: What Happens When Pricing Changes?</CardTitle>
            <CardDescription>See how different pricing decisions affect Sarah's business</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Sarah had three options on the table. Let's explore what happens with each pricing strategy—before you learn the exact formulas.
            </p>
            <p className="text-gray-600">
              <strong>Your job:</strong> Look at each scenario and predict which one meets the pricing scoreboard (profitable, competitive, defensible).
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-red-200 bg-red-50/80">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Scenario A: Budget Option ($50/hour)
              </CardTitle>
              <CardDescription>Matching competitor's lowest price</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-red-700">Revenue per project (avg)</p>
                  <p className="text-red-600">$2,500 (50 hrs × $50)</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">Monthly Costs</p>
                  <p className="text-red-600">$3,200 (rent, software, etc.)</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">Alex's Salary</p>
                  <p className="text-red-600">$4,000/month</p>
                </div>
                <div>
                  <p className="font-medium text-red-700">Sarah's Pay</p>
                  <p className="text-red-600">$0 (none left)</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-200">
                <p className="text-red-800 font-medium flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Result: <strong>Lose $4,700/month</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50/80">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Scenario B: Mid-Range Option ($75/hour)
              </CardTitle>
              <CardDescription>Slightly below market average</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-yellow-700">Revenue per project (avg)</p>
                  <p className="text-yellow-600">$3,750 (50 hrs × $75)</p>
                </div>
                <div>
                  <p className="font-medium text-yellow-700">Monthly Costs</p>
                  <p className="text-yellow-600">$3,200 (rent, software, etc.)</p>
                </div>
                <div>
                  <p className="font-medium text-yellow-700">Alex's Salary</p>
                  <p className="text-yellow-600">$4,000/month</p>
                </div>
                <div>
                  <p className="font-medium text-yellow-700">Sarah's Pay</p>
                  <p className="text-yellow-600">$0 (none left)</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-yellow-200">
                <p className="text-yellow-800 font-medium flex items-center gap-2">
                  <TrendingDown className="h-4 w-4" />
                  Result: <strong>Lose $3,450/month</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/80">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Scenario C: Premium Option ($100/hour)
              </CardTitle>
              <CardDescription>Pricing based on value provided</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium text-green-700">Revenue per project (avg)</p>
                  <p className="text-green-600">$5,000 (50 hrs × $100)</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">Monthly Costs</p>
                  <p className="text-green-600">$3,200 (rent, software, etc.)</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">Alex's Salary</p>
                  <p className="text-green-600">$4,000/month</p>
                </div>
                <div>
                  <p className="font-medium text-green-700">Sarah's Pay</p>
                  <p className="text-green-600">$3,000/month</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-200">
                <p className="text-green-800 font-medium flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  Result: <strong>Profit +$5,200/month</strong>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200 bg-blue-50/80">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Your Prediction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block font-medium text-blue-900 mb-2">
                  Which scenario(s) meet all three pillars of the pricing scoreboard?
                </label>
                <div className="space-y-2 text-blue-800">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario A (Budget - $50/hr) - Profitable
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario B (Mid-Range - $75/hr) - Profitable
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario C (Premium - $100/hr) - Profitable
                  </label>
                </div>
              </div>
              
              <div>
                <label className="block font-medium text-blue-900 mb-2">
                  Which scenario(s) are competitive in the market?
                </label>
                <div className="space-y-2 text-blue-800">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario A - matches cheapest competitor
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario B - slightly below average
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="rounded" />
                    Scenario C - premium (40% above competitor)
                  </label>
                </div>
              </div>

              <div>
                <label className="block font-medium text-blue-900 mb-2">
                  Which scenario would Sarah be able to DEFEND to an investor asking "why that price?"
                </label>
                <textarea 
                  className="w-full p-3 border border-blue-200 rounded-lg text-sm"
                  rows={3}
                  placeholder="Think about what makes a price explainable..."
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What Just Happened?</h2>
          <p className="text-gray-700">
            You just did what Sarah had to figure out: look at pricing scenarios and predict which ones work. Notice how:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><strong>The lowest price wasn't the most competitive</strong>—it was the least sustainable</li>
            <li><strong>Revenue alone doesn't determine profit</strong>—costs matter just as much</li>
            <li><strong>Premium pricing can actually be defensible</strong>—when you can explain the value</li>
          </ul>
          <p className="text-gray-700">
            In the next lessons, you'll learn the exact formulas to calculate these numbers automatically. But the intuition you're building now—the ability to look at a price and sense whether it will work—that's what separates good pricing from bad pricing.
          </p>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
