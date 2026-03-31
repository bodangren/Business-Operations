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
      "Sarah's investor asks her to show COGS under FIFO, LIFO, and Weighted Average during the same meeting. What workbook design lets her switch methods without rebuilding the file?",
    answers: [
      "A single method-selector cell that drives all three method calculations",
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
      "Sarah's current workbook uses ranges like A2:A100. When she adds 50 new transactions, several formulas break. What design choice prevents this?",
    answers: [
      "Convert the data range into an Excel Table and use structured references like Purchases[Qty]",
      "Extend the range to A2:A1000 so there is room for growth",
      "Hide extra rows until she needs them",
      "Merge header cells so the sheet looks cleaner"
    ],
    explanation:
      "Tables expand automatically and structured references follow new rows. Fixed ranges always break when data grows beyond the original boundary."
  },
  {
    id: "u07l05-hook-3",
    question:
      "During a live demo, a formula shows #N/A on the dashboard. What damage does this cause?",
    answers: [
      "It signals weak controls and makes the whole model look unreliable",
      "Nothing, because investors know lookups sometimes fail",
      "It only affects the chart, not the numbers",
      "It proves the method choice was wrong"
    ],
    explanation:
      "Unwrapped errors on a dashboard tell investors the model was not stress-tested. Professional workbooks wrap lookups in IFNA or IFERROR."
  },
  {
    id: "u07l05-hook-4",
    question:
      "Prices are rising. Which method lowers reported profit and likely taxes this period?",
    answers: [
      "LIFO, because the newest, higher costs flow to COGS first",
      "FIFO, because the oldest, lower costs flow to COGS first",
      "Weighted Average, because it always matches FIFO",
      "All methods show the same COGS"
    ],
    explanation:
      "LIFO pulls the newest, most expensive layers into COGS when prices rise. That raises expense, lowers profit, and reduces the tax bill."
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
              under FIFO, LIFO, and Weighted Average. Sarah opens her workbook, toggles the method, and a formula breaks.
              The investor frowns. Models that crumble under change scare investors away. Today you will build a workbook
              that switches methods cleanly, scales as data grows, and earns trust.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Before vs. After
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4 text-slate-800">
              <div className="bg-red-50 p-4 rounded border border-red-200">
                <p className="font-semibold mb-2">Fragile (Before)</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Fixed ranges like A2:A100 that miss new rows</li>
                  <li>Separate sheets per method with copy-paste drift</li>
                  <li>No checks for missing SKU or negative cost</li>
                  <li>#N/A errors visible on the dashboard</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-semibold mb-2">Robust (After)</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Excel Tables with structured references</li>
                  <li>One method selector drives all three calculations</li>
                  <li>Validation blocks bad inputs before they reach COGS</li>
                  <li>IFNA wraps lookups so dashboards stay clean</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Predict the Professional Approach"
            description="Choose the designs that keep Sarah's model stable under investor scrutiny."
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
                <li>Where do inventory workbooks usually break as data grows?</li>
                <li>Why does an investor care whether Sarah can switch methods in one file?</li>
                <li>What outputs matter most to someone deciding whether to fund this business?</li>
              </ul>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Professional standard: stress-test with added rows before presenting.</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
