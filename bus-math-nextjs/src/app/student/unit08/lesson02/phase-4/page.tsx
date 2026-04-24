import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"
import CapitalizationScenarioPractice from "../CapitalizationScenarioPractice"

export default function Phase4Page() {
  const currentPhase = lesson02Phases[3]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-600 text-white">
              Phase 4: Deliberate Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Practice the Capitalization Decision on Your Own</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Now you&apos;ll work through several fresh cases independently. For each scenario, sort the purchases into
              assets or expenses and compute the depreciable base for anything that should be capitalized.
            </p>
          </div>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">How This Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Each scenario bundles multiple purchases together, closer to what a real business owner would face at month-end.
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Read the full scenario before deciding anything</li>
                <li>Classify each purchase as capitalize or expense</li>
                <li>Compute depreciable base only for the capitalized purchases</li>
                <li>Work through all three scenarios to finish the practice set</li>
              </ul>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <p className="text-sm text-violet-800">
                  <strong>Remember the rule:</strong> A purchase becomes a fixed asset only when it creates value for more than
                  one year and the cost is significant enough to track separately. If it becomes an asset, then compute
                  <strong> Cost - Salvage Value</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">Activity: Scenario Practice</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Complete each scenario below. The structure stays the same, but the business context changes each time.
              </p>
              <CapitalizationScenarioPractice />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Comes Next</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                After this practice, you will take a short exit ticket to confirm your understanding of
                capitalization vocabulary and reasoning. Then you will reflect on what you learned and preview
                the straight-line depreciation method coming in Lesson 03.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
