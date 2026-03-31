import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, CheckCircle2, BookOpen } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

const workbookMapSentences = [
  {
    id: "1",
    text: "The {blank} sheet holds beginning inventory, purchases, and sales — the raw transaction data.",
    answer: "Inputs",
    alternativeAnswers: ["Inputs sheet", "inputs"],
    hint: "Where all raw data lives"
  },
  {
    id: "2",
    text: "The {blank} sheet calculates COGS and ending inventory for each inventory method.",
    answer: "Valuation",
    alternativeAnswers: ["Valuation sheet", "valuation"],
    hint: "Where FIFO, LIFO, WA math happens"
  },
  {
    id: "3",
    text: "The {blank} section flags missing SKUs, invalid costs, and GAFS mismatches before totals roll up.",
    answer: "Checks",
    alternativeAnswers: ["Checks sheet", "checks", "validation"],
    hint: "Catches problems early"
  },
  {
    id: "4",
    text: "The {blank} sheet displays turnover, days-on-hand, and gross margin in a format an investor can read in 10 seconds.",
    answer: "Dashboard",
    alternativeAnswers: ["Dashboard sheet", "dashboard"],
    hint: "KPI tiles and charts"
  },
  {
    id: "5",
    text: "The {blank} sheet states the recommended method, cites workbook evidence, and names one risk.",
    answer: "Recommendation",
    alternativeAnswers: ["Recommendation sheet", "recommendation"],
    hint: "Claim + evidence + risk"
  }
]

export default function Unit07Lesson07Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Shared Artifact Orientation</Badge>
            <h1 className="text-3xl font-bold text-gray-900">The Shared Workbook Map</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Download the shared rehearsal workbook below. Every student in this class is using the same data. Your job today is to understand what each sheet is supposed to prove, not just what it contains.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Shared Rehearsal Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3">
              <p>
                Download and open:{" "}
                <a className="underline font-medium" href="/resources/unit07-lesson07-student.xlsx" download>
                  unit07-lesson07-student.xlsx
                </a>
              </p>
              <p className="text-sm">
                This workbook uses the same shared dataset for every student. The teacher workbook is identical:{" "}
                <a className="underline font-medium" href="/resources/unit07-lesson07-teacher.xlsx" download>
                  unit07-lesson07-teacher.xlsx
                </a>{" "}
                — use it to verify your structure after each section.
              </p>
              <p className="text-sm text-blue-800 bg-blue-100 p-2 rounded">
                <strong>Step-by-step tutorial:</strong>{" "}
                <a className="underline font-medium" href="/resources/unit07-lesson07-tutorial.md">
                  unit07-lesson07-tutorial.md
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-white">
            <CardHeader>
              <CardTitle className="text-emerald-900">Workbook Map: What Each Sheet Proves</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-4">
              <p className="text-sm text-gray-600">
                A project workbook is not a random collection of sheets. Each one has a job in the evidence chain. Here is the structure you will rehearse today and reuse in the project:
              </p>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded border-l-4 border-gray-400">
                  <h4 className="font-bold text-sm">ReadMe / Brief</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> States the business problem, dataset source, and what this workbook will answer. An investor should understand the context in 30 seconds.</p>
                </div>
                <div className="bg-amber-50 p-3 rounded border-l-4 border-amber-400">
                  <h4 className="font-bold text-sm">Inputs (BeginningInventory, Purchases, Sales)</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> Holds the raw transaction data — beginning inventory layers, dated purchases with unit costs, and dated sales. This is the foundation. If inputs are wrong, everything downstream is wrong.</p>
                </div>
                <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400">
                  <h4 className="font-bold text-sm">Valuation</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> Calculates COGS and ending inventory for each method (FIFO, LIFO, Specific ID, Weighted Average). This is where the method logic lives. Each method block must show layer-by-layer assignment.</p>
                </div>
                <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400">
                  <h4 className="font-bold text-sm">MethodCompare</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> Side-by-side comparison of all four methods showing COGS, ending inventory, gross margin, turnover, and days-on-hand. This sheet makes the tradeoffs visible.</p>
                </div>
                <div className="bg-red-50 p-3 rounded border-l-4 border-red-400">
                  <h4 className="font-bold text-sm">Checks</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> Validation flags that catch problems before totals roll up: missing SKUs, negative/zero unit costs, GAFS mismatch, stale dates. Place these above KPI tiles so they are impossible to miss.</p>
                </div>
                <div className="bg-green-50 p-3 rounded border-l-4 border-green-400">
                  <h4 className="font-bold text-sm">Dashboard</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> KPI tiles and charts that update from structured Table references. An investor should see turnover, days-on-hand, gross margin, and method comparison at a glance.</p>
                </div>
                <div className="bg-indigo-50 p-3 rounded border-l-4 border-indigo-400">
                  <h4 className="font-bold text-sm">Recommendation</h4>
                  <p className="text-xs text-gray-600 mt-1"><strong>Job:</strong> States the recommended method, cites exact workbook numbers as evidence, and names one risk or limitation. This is the payoff — every other sheet exists to support this claim.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Definition of Done — Today's Success Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3">
              <p className="font-medium">Your rehearsal workbook is complete when ALL of the following are true:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>All four inventory methods calculated correctly (FIFO, LIFO, Specific ID, Weighted Average)</li>
                <li>COGS + Ending Inventory = GAFS for every method (checksum passes)</li>
                <li>MethodCompare sheet shows side-by-side results for all four methods</li>
                <li>Checks section flags at least: missing SKU, invalid unit cost, GAFS mismatch</li>
                <li>Dashboard shows turnover, days-on-hand, and gross margin for the selected method</li>
                <li>Recommendation sheet includes: claim, evidence (with specific numbers), and one risk</li>
                <li>No #N/A, #REF!, or #DIV/0! errors visible in any sheet</li>
                <li>Formulas documented in plain language near results</li>
              </ul>
              <p className="text-sm font-medium mt-2">
                Today's goal: get as close to this standard as possible. You will refine further in the real project.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Workbook Structure Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={workbookMapSentences}
                title="Name What Each Sheet Does"
                description="Complete each sentence to confirm you understand the job of each workbook section."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
