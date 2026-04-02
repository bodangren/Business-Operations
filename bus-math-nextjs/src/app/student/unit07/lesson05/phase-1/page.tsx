import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, Shield } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "u07l05-hook-1",
    question:
      "Sarah's investor asks for COGS under FIFO, LIFO, Specific ID, and Weighted Average in the same meeting. What workbook design supports that request fastest?",
    answers: [
      "A single method-selector cell that drives all four method calculations",
      "Three separate workbooks, one per method",
      "Manually retyping formulas each time the method changes",
      "Hardcoding COGS totals and adjusting them later"
    ],
    explanation:
      "One control cell that feeds helper formulas keeps the model stable. Separate files or manual rewrites invite errors during live presentations."
  },
  {
    id: "u07l05-hook-2",
    question:
      "Prices are rising this month. Which method typically reports the highest COGS and lowest profit this period?",
    answers: [
      "LIFO, because newer higher-cost lots are assigned to COGS first",
      "FIFO, because older lower-cost lots are assigned to COGS first",
      "Specific ID, because it always averages all lots",
      "Weighted Average, because it always equals FIFO"
    ],
    explanation:
      "When costs are rising, LIFO usually pushes higher recent costs into COGS, reducing reported gross profit."
  },
  {
    id: "u07l05-hook-3",
    question:
      "Which statement best describes how Specific ID differs from FIFO/LIFO?",
    answers: [
      "Specific ID assigns cost from the exact lot tagged on each sale row",
      "Specific ID always uses the newest lot first",
      "Specific ID always uses one blended period rate",
      "Specific ID ignores lot-level data and only tracks SKU totals"
    ],
    explanation:
      "Specific ID is a traceability method: each sale line carries a LotID that points to one exact purchase cost."
  },
  {
    id: "u07l05-hook-4",
    question:
      "What is the practical payoff of keeping all methods in one workbook model?",
    answers: [
      "You can compare method outcomes with the same source data and explain differences quickly",
      "You avoid ever using table references in formulas",
      "You can skip building method-specific helper blocks",
      "You no longer need COGS and ending inventory checks"
    ],
    explanation:
      "A shared model gives cleaner method-to-method comparisons and makes investor communication faster."
  }
]

export default function Unit07Lesson05Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Phase 1: Tool Pressure</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah Needs to Compare Methods Under Pressure</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Sarah is meeting with a potential investor. The investor wants to see how COGS and ending inventory change
              under FIFO, LIFO, Specific ID, and Weighted Average. Sarah opens her workbook, toggles the method, and a formula breaks.
              The investor frowns. Today, your goal is to build a single model that can answer method-comparison questions
              quickly and defensibly with one source dataset.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Investor Meeting Agenda
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-4 text-slate-800">
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <p className="font-semibold mb-2">Question 1: Method Impact</p>
                <p className="text-sm">
                  Show how COGS and ending inventory change when switching FIFO, LIFO, Specific ID, and Weighted Average.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <p className="font-semibold mb-2">Question 2: Why Different?</p>
                <p className="text-sm">
                  Explain why the same sales quantity can produce different COGS across methods.
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-semibold mb-2">Question 3: Recommendation</p>
                <p className="text-sm">
                  Defend which method gives the clearest story for this business and this price environment.
                </p>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Predict the Professional Approach"
            description="Choose the decisions that help Sarah explain method differences clearly under investor scrutiny."
            questions={hookQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900">
              <p className="font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Which method differences would an investor ask you to justify first?</li>
                <li>Why does an investor care whether Sarah can switch methods in one file?</li>
                <li>What outputs matter most to someone deciding whether to fund this business?</li>
              </ul>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Professional standard: explain method logic and recommendation from one consistent workbook.</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
