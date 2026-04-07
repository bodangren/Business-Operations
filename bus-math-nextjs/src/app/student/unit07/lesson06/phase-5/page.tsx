import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "u07l06-a1",
    question:
      "Which formula pattern best selects COGS for the currently selected scenario and method?",
    answers: [
      "XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS])",
      "SUM(MethodSummary[COGS])",
      "AVERAGE(MethodSummary[COGS])",
      "INDEX(Drivers[UnitsSold],1)"
    ],
    explanation:
      "The SelectedKey lookup returns exactly one row's COGS, which is required for selector-driven outputs."
  },
  {
    id: "u07l06-a2",
    question:
      "Why is SelectedKey built as Scenario + \"|\" + Method?",
    answers: [
      "It creates one exact match key for combined scenario+method rows",
      "It automatically formats KPI tiles",
      "It replaces the need for a Drivers table",
      "It forces COGS and ending inventory to be equal"
    ],
    explanation:
      "The composite key is a compact, auditable way to target one row in MethodSummary."
  },
  {
    id: "u07l06-a3",
    question:
      "Which turnover formula is correct for this workbook?",
    answers: [
      "Turnover = SelectedCOGS / AverageInventory",
      "Turnover = SelectedCOGS / SelectedEndingInventory",
      "Turnover = Revenue / SelectedCOGS",
      "Turnover = 365 / SelectedCOGS"
    ],
    explanation:
      "Inventory turnover uses average inventory, not ending inventory alone."
  },
  {
    id: "u07l06-a4",
    question:
      "What should happen to Days on Hand when turnover increases, assuming the period length is fixed?",
    answers: [
      "Days on Hand decreases",
      "Days on Hand increases",
      "Days on Hand stays the same",
      "Days on Hand becomes zero"
    ],
    explanation:
      "Days on Hand = 365 / Turnover, so faster turnover means fewer holding days."
  },
  {
    id: "u07l06-a5",
    question:
      "What is the first trust check before discussing a recommendation?",
    answers: [
      "Verify SelectedCOGS + SelectedEndingInventory equals GAFS",
      "Verify gross margin is above 60%",
      "Verify scenario is always Stretch",
      "Verify chart colors are consistent"
    ],
    explanation:
      "If cost conservation fails, all downstream interpretation is unreliable."
  }
]

export default function Unit07Lesson06Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-yellow-100 text-yellow-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 5: Audit and Explain</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Technical Check and Method Recommendation</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Prove you can audit the selector chain and defend a recommendation using KPI evidence from your workbook.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-900">Part A: Technical Comprehension Check</CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                title="Scenario Switch and KPI Logic"
                description="Answer to show selector, lookup, and interpretation accuracy."
                questions={assessmentQuestions}
                showExplanations={true}
              />
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Part B: Recommendation Memo</CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 space-y-4">
              <p className="font-medium">
                Write 4-6 sentences recommending one scenario+method pair for Sarah&apos;s investor meeting.
              </p>

              <div className="bg-white p-4 rounded border space-y-3">
                <h3 className="font-bold text-red-800">Memo Structure</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    <strong>Claim:</strong> Name your selected scenario and method.
                  </li>
                  <li>
                    <strong>Evidence:</strong> Cite exact COGS, ending inventory, and one KPI from your workbook.
                  </li>
                  <li>
                    <strong>Comparison:</strong> Compare against at least one alternative method.
                  </li>
                  <li>
                    <strong>Risk:</strong> State one limitation of your chosen method.
                  </li>
                  <li>
                    <strong>Decision fit:</strong> Explain why this choice matches the investor question.
                  </li>
                </ol>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded text-sm text-amber-900">
                <p className="font-medium">Strong memo checklist:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Uses exact workbook numbers.</li>
                  <li>References one trust check result.</li>
                  <li>Connects method choice to turnover and days-on-hand impact.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
