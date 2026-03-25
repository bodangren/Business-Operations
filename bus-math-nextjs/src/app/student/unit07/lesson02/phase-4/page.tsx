import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calculator, Users, AlertTriangle, Lightbulb } from "lucide-react"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"
import CostAssignmentPractice from "../CostAssignmentPractice"

const currentPhase = lesson02Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 4: Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Practice: From GAFS to Ending Inventory</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Now you'll work through three scenarios on your own. For each one, calculate Goods Available for Sale, 
              estimate the possible COGS range, and find Ending Inventory.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* REVIEW: Quick recap from Phase 3 */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-800 text-lg">Review: What You've Learned</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-700">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>Beginning Inventory + Purchases</strong> = Goods Available for Sale (GAFS)</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>GAFS - COGS</strong> = Ending Inventory</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>Cost layers</strong> form when purchases happen at different prices</p>
                </div>
                <div className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <p className="text-sm"><strong>The same sale</strong> can produce different COGS depending on which layer(s) you pull from</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TEACH DEEPER: Why COGS ranges matter */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Going Deeper: Why COGS Isn't Always Obvious
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="leading-relaxed">
                In Phase 3, you walked through Sarah's timeline day by day. You saw that when costs change, 
                the same number of units sold can produce <strong>different COGS values</strong> depending on 
                which inventory layer the units came from.
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-300 space-y-3">
                <p className="font-medium text-amber-900">Here's the puzzle you'll solve today:</p>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-3 bg-amber-100 rounded">
                    <p className="text-sm text-amber-800">
                      <strong>Example:</strong> You have 36 units available for sale worth $746 total.
                      You sell 20 units.
                    </p>
                  </div>
                  <div className="p-3 bg-amber-100 rounded">
                    <p className="text-sm text-amber-800">
                      <strong>Question:</strong> What's COGS? It depends! Could be anywhere from 
                      $360 to $440 based on which 20 units you sold.
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-amber-800">
                In this activity, you'll calculate the <strong>range of possible COGS values</strong> for each scenario. 
                This shows why businesses need consistent rules (FIFO, LIFO, etc.) — without them, you'd be guessing 
                every time you report your numbers.
              </p>
            </CardContent>
          </Card>

          {/* Common Mistakes Warning */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Watch Out: Common Mistakes
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-950">
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex items-start gap-2">
                  <Badge className="bg-red-200 text-red-800 mt-0.5">✗</Badge>
                  <p className="text-sm text-red-800">
                    <strong>Mistake:</strong> Forgetting to include Beginning Inventory when calculating GAFS
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-red-200 text-red-800 mt-0.5">✗</Badge>
                  <p className="text-sm text-red-800">
                    <strong>Mistake:</strong> Only calculating one COGS value instead of the full range
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-red-200 text-red-800 mt-0.5">✗</Badge>
                  <p className="text-sm text-red-800">
                    <strong>Mistake:</strong> Forgetting that Ending Inventory + COGS must equal GAFS
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <Badge className="bg-red-200 text-red-800 mt-0.5">✗</Badge>
                  <p className="text-sm text-red-800">
                    <strong>Mistake:</strong> Using the wrong cost per unit when estimating COGS range
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* ACTIVITY: Cost Assignment Practice */}
          <Card className="border-indigo-200 bg-white">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Activity: Practice Scenarios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Work through all three scenarios below. For each one:
              </p>
              <ol className="list-decimal list-inside text-slate-700 mb-4 space-y-1">
                <li>Calculate <strong>Goods Available for Sale</strong> (units and total value)</li>
                <li>Estimate the <strong>COGS range</strong> (minimum to maximum possible)</li>
                <li>Calculate the corresponding <strong>Ending Inventory range</strong></li>
              </ol>
              <CostAssignmentPractice />
            </CardContent>
          </Card>

          {/* Turn and Talk */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-950 space-y-3">
              <p className="font-medium">Discussion prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Which scenario had the widest COGS range? Why?</li>
                <li>Why would a business owner care about the difference between the minimum and maximum COGS?</li>
                <li>If you were Sarah presenting to an investor, would you want higher or lower COGS? Why?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Key Insight */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-yellow-500" />
                Key Insight from This Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800">
              <p>
                You've now seen that when inventory costs vary, the same sales can produce <strong>different 
                financial results</strong> depending on cost assignment. The difference between minimum and 
                maximum COGS can be significant — sometimes hundreds or thousands of dollars.
              </p>
              <p className="font-medium text-slate-900">
                This is exactly why businesses adopt consistent inventory valuation methods like FIFO and LIFO. 
                In Lesson 3, you'll learn the formal rules for each method so you never have to guess.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
