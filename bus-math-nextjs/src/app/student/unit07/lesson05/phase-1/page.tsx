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
      "Sarah’s inventory model breaks when 80 new rows are added. What design choice prevents this?",
    answers: [
      "Excel Tables with structured references (e.g., Purchases[Qty])",
      "Fixed ranges like A2:A100 and manual copy",
      "Hiding extra rows until needed",
      "Merging header cells for clarity"
    ],
    explanation:
      "Tables expand automatically and structured references follow growth, avoiding broken ranges when data scales."
  },
  {
    id: "u07l05-hook-2",
    question:
      "Prices rise all quarter. Which method lowers reported profit (and likely taxes) this period?",
    answers: [
      "LIFO — newest, higher costs flow to COGS",
      "FIFO — oldest, lower costs flow to COGS",
      "Weighted Average — same as FIFO",
      "All methods show the same profit"
    ],
    explanation:
      "LIFO uses newer, higher costs in rising markets, which increases COGS and lowers profit and taxes."
  },
  {
    id: "u07l05-hook-3",
    question:
      "Which failure most damages investor trust during a live demo?",
    answers: [
      "A fragile formula chain that errors when inputs change",
      "A clearly labeled method selector",
      "Documented assumptions beside key outputs",
      "Validation rules that flag bad data"
    ],
    explanation:
      "Fragile models that error under change signal weak controls; professional models remain stable with clear checks."
  },
  {
    id: "u07l05-hook-4",
    question:
      "Sarah must compare FIFO, LIFO, and Weighted Avg quickly. What’s the right approach?",
    answers: [
      "Dynamic method switch that recalculates COGS/Ending Inventory",
      "Separate spreadsheets for each method with copy‑paste",
      "Manually retype formulas for each method",
      "Hardcode period totals and adjust later"
    ],
    explanation:
      "A single, well‑documented switch drives consistent logic and reduces errors across methods."
  }
]

export default function Unit07Lesson05Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Advanced Inventory Stress Test</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              During a live investor meeting, Sarah toggles methods and adds new sales rows. The outputs jump and
              a formula breaks. Models that crumble under pressure scare investors. Today you’ll design automation that
              scales cleanly, communicates clearly, and earns trust.
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
                  <li>Fixed ranges that miss new rows</li>
                  <li>Separate sheets per method; copy‑paste drift</li>
                  <li>No checks for missing SKU or negative cost</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <p className="font-semibold mb-2">Robust (After)</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Excel Tables + structured references</li>
                  <li>Dynamic method switch (FIFO/LIFO/Weighted Avg)</li>
                  <li>Validation for IDs, dates, and quantities</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Predict the Professional Approach"
            description="Choose designs that keep models stable under change."
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
                <li>Where do inventory models usually break as data grows?</li>
                <li>How do validation and documentation reduce risk in meetings?</li>
                <li>Which outputs matter most to investors and why?</li>
              </ul>
              <div className="mt-2 flex items-center gap-2 text-slate-700">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Professional standard: stress‑test with added rows before presenting.</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

