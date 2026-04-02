import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import CapitalizationExpenseMastery from "@/components/exercises/CapitalizationExpenseMastery"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

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
            <h1 className="text-3xl font-bold text-gray-900">Capitalize or Expense? — Mastery Practice</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practice classifying TechStart&apos;s purchases until you can do it reliably.
              Each round gives you a new scenario. Get {5} correct in a row to achieve mastery.
            </p>
          </div>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">How This Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                You will see a purchase description. Decide whether TechStart should <strong>capitalize</strong> it
                (record as an asset) or <strong>expense</strong> it (record as a current-period cost).
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Each round generates a new purchase scenario with different numbers</li>
                <li>You get feedback after each submission — not during</li>
                <li>If you get it wrong, you will see a brief explanation of the correct reasoning</li>
                <li>Click &quot;New Numbers&quot; to try again immediately</li>
                <li>Track your streak and mastery progress at the top</li>
              </ul>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <p className="text-sm text-violet-800">
                  <strong>Remember the rule:</strong> Capitalize if the item lasts more than 1 year AND the cost is significant.
                  Otherwise, expense it.
                </p>
              </div>
            </CardContent>
          </Card>

          <CapitalizationExpenseMastery />

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
