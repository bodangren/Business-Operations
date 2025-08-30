import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "u04l05-hook-1",
    question:
      "Sarah’s forecast breaks when new weeks are added because her ranges are fixed. What fixes this reliably?",
    answers: [
      "Convert ranges to Tables and use structured references",
      "Manually extend the ranges every Friday",
      "Copy-paste formulas down after each import",
      "Switch to a different spreadsheet app"
    ],
    explanation:
      "Tables auto‑expand. Structured references like Sales[Units] keep FORECAST.LINEAR pulling the full, current data."
  },
  {
    id: "u04l05-hook-2",
    question:
      "The café runs a promo; demand spikes create outliers. What protects forecast integrity?",
    answers: [
      "Add validation to flag outliers and stale dates",
      "Ignore the spike and hope it averages out",
      "Delete all promo days from history",
      "Replace FORECAST.LINEAR with random values"
    ],
    explanation:
      "Robust models detect issues first. Flags cue review or filtered methods (e.g., exclude extreme spikes for baseline)."
  },
  {
    id: "u04l05-hook-3",
    question:
      "Investors ask “What if price increases 5%?” Which Excel feature supports quick scenarios?",
    answers: [
      "Structured inputs plus scenario toggles and SUMPRODUCT filters",
      "Hardcode new prices everywhere",
      "Rebuild the model per scenario",
      "Only show last month’s actuals"
    ],
    explanation:
      "Design models with scenario inputs and logic paths so outputs update instantly and audibly."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Forecast Automation Stress Test</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fragile models break at the worst moment—robust ones win investor trust.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-900 text-2xl">Before vs. After</CardTitle>
              </CardHeader>
              <CardContent className="text-red-900 space-y-4">
                <p className="text-lg leading-relaxed">
                  Sarah at TechStart Solutions built a simple sales forecast for the campus café. It worked—until
                  the café added new rows, ran weekend promos, and uploaded data late. Her formulas referenced fixed
                  ranges and collapsed under real change.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h3 className="font-semibold text-red-900 mb-2">Fragile (Before)</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Fixed A2:A53 ranges that miss new weeks</li>
                      <li>No flags for missing IDs or stale dates</li>
                      <li>Forecast jumps wildly with promo spikes</li>
                      <li>Assumptions live only in Sarah’s head</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Robust (After)</h3>
                    <ul className="list-disc list-inside text-sm space-y-1 text-green-900">
                      <li>Excel Tables + structured references</li>
                      <li>IFERROR + XLOOKUP defaults for resilience</li>
                      <li>Outlier and stale‑date validation</li>
                      <li>Scenario toggles with clear documentation</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="text-green-900 text-sm font-medium">Why investors care: robust automation prevents
                    last‑minute surprises and shows Sarah can scale responsibly.</p>
                </div>
              </CardContent>
            </Card>

            <ComprehensionCheck
              title="Diagnostic: Will This Break?"
              description="Predict which design choices create resilience in Excel forecasts."
              questions={hookQuestions}
              showExplanations={true}
              allowRetry={true}
            />

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
                  When do spreadsheet models lose investor trust? Which single safeguard would you add first and why?
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>What real risk did Sarah remove by switching to Tables?</li>
                  <li>How do visible flags change decision‑making speed?</li>
                  <li>What evidence shows a model is “ready for scale”?</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

