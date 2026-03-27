import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Target, Users, Calculator, Lightbulb } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"
import WeightedAvgDemo from "../WeightedAvgDemo"
import WeightedAvgPractice from "../WeightedAvgPractice"

const currentPhase = lesson04Phases[2] // We Do phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">Phase 3: We Do — Let's Work Together</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Weighted Average: Pooling Costs Together</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              You've learned <strong>Specific Identification</strong> for unique, trackable items. Now let's learn 
              <strong> Weighted Average</strong> — the method for identical items that get mixed together.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* REVIEW: Quick recap from Phase 2 */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-800 text-lg flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Review: What You Learned in Phase 2
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">Specific Identification</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Track exact cost of each unique item</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Serial numbers, certificates, VINs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Cars, jewelry, custom equipment</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <h4 className="font-semibold text-slate-900 mb-2">What About Pooled Items?</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">?</span>
                      <span>Grain in a silo, gas in a tank</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">?</span>
                      <span>Items are physically identical</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600">?</span>
                      <span>Can't separate them by layer</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TEACH DEEPER: The weighted average concept */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                The Weighted Average Approach
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="text-lg leading-relaxed">
                When items are <strong>identical and mixed together</strong>, you can't track which unit came 
                from which purchase. Instead of layers, you <strong>pool everything</strong> and calculate 
                <strong> one average cost per unit</strong>.
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-900 mb-3">The Weighted Average Formula:</h4>
                <div className="text-center font-mono text-lg bg-amber-50 p-4 rounded border border-amber-200">
                  <p className="mb-2">
                    <span className="text-amber-700">Total Cost</span>
                    <span className="text-amber-400 mx-3">÷</span>
                    <span className="text-amber-700">Total Units</span>
                    <span className="text-amber-400 mx-3">=</span>
                    <span className="text-amber-900 font-bold">Weighted Average Cost</span>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Common Mistake to Avoid:</h4>
                  <p className="text-amber-800 text-sm">
                    <span className="line-through">Don't average the prices:</span><br/>
                    <span className="text-red-600">($0.40 + $0.45 + $0.52) ÷ 3 = $0.457 ❌</span>
                  </p>
                  <p className="text-amber-800 text-sm mt-2">
                    <span className="font-medium">Instead, pool then divide:</span><br/>
                    <span className="text-green-600">Total Cost ÷ Total Units ✓</span>
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Where It's Used:</h4>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Grain, flour, sugar in bulk</li>
                    <li>• Gasoline, oil in tanks</li>
                    <li>• Commodity items</li>
                    <li>• Nails, screws, fasteners</li>
                  </ul>
                </div>
              </div>

              <div className="bg-amber-100 p-4 rounded-lg border border-amber-300">
                <p className="text-amber-900">
                  <Lightbulb className="h-4 w-4 inline mr-2" />
                  <strong>Key insight:</strong> Weighted Average uses the <em>same rate</em> for both COGS and 
                  Ending Inventory. No layer tracking needed — just one average price per unit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* I DO: Teacher Demonstration */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                I Do: Watch How Weighted Average Works
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-950">
              <p className="mb-4">
                Follow along as we work through a complete Weighted Average calculation step by step. 
                Click <strong>Next</strong> to advance through each step.
              </p>
            </CardContent>
          </Card>

          <WeightedAvgDemo />

          {/* WE DO: Interactive Practice */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                We Do: Now You Try
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-950">
              <p className="mb-4">
                Now practice calculating Weighted Average yourself! Work through each step, 
                type your answers, and check your work. If you want more practice, click 
                <strong> "New Numbers"</strong> to get a fresh scenario.
              </p>
            </CardContent>
          </Card>

          <WeightedAvgPractice />

          {/* Common Mistakes Discussion */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Common Mistakes to Avoid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-950">
              <div className="grid gap-3">
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">1. Averaging the prices instead of pooling costs</p>
                  <p className="text-red-700 text-sm">
                    Don't do: ($0.40 + $0.45 + $0.52) ÷ 3. This ignores the quantities at each price.
                    Do: Total Cost ÷ Total Units instead.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">2. Forgetting to use the same rate for COGS and Ending Inventory</p>
                  <p className="text-red-700 text-sm">
                    With Weighted Average, you calculate ONE rate and use it for both. Don't recalculate.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <p className="font-medium text-red-900">3. Rounding too early</p>
                  <p className="text-red-700 text-sm">
                    If your division gives many decimals, keep them until the final step. Only round to 2 decimals at the end.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turn and Talk */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <ul className="list-disc list-inside space-y-2 text-blue-800">
                <li>
                  Why can't you use Specific Identification for bulk items like flour or gasoline?
                </li>
                <li>
                  Why would a gas station manager prefer Weighted Average over FIFO or LIFO?
                </li>
                <li>
                  What happens to your calculations if gas prices keep rising every week?
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">Coming Up: Phase 4 (You Do)</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <p className="text-lg leading-relaxed">
                You've now learned all four inventory methods! In Phase 4, you'll practice both 
                <strong> Specific Identification</strong> and <strong>Weighted Average</strong> independently, 
                then create a comparison matrix to see when each method is appropriate.
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-800 text-sm">
                  <strong>Methods learned so far:</strong><br/>
                  • Lesson 3: FIFO and LIFO<br/>
                  • Lesson 4 Phase 1-2: Specific Identification<br/>
                  • Lesson 4 Phase 3: Weighted Average<br/>
                  <strong>Next:</strong> Practice all four and learn to choose the right one for each situation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}