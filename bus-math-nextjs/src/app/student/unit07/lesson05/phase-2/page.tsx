import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, AlertCircle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabItems = [
  {
    id: "v1",
    text: "Convert your data range into an Excel {blank} so formulas expand with new rows (e.g., Purchases[Qty]).",
    answer: "Table",
    hint: "Also called a structured reference"
  },
  {
    id: "v2",
    text: "A single {blank} cell with a dropdown lets the model switch between FIFO, LIFO, and Weighted Average.",
    answer: "method selector",
    alternativeAnswers: ["control", "dropdown"],
    hint: "Often a Data Validation list"
  },
  {
    id: "v3",
    text: "Use {blank} to safely display 'Not found' when a lookup fails.",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"],
    hint: "Protects dashboards from #N/A"
  },
  {
    id: "v4",
    text: "Weighted Average unit cost = Total {blank} divided by Total Units on hand.",
    answer: "Cost",
    alternativeAnswers: ["cost of purchases"],
    hint: "Pool all costs, divide by all units"
  },
  {
    id: "v5",
    text: "Validation should block {blank} costs and missing SKUs before they reach COGS.",
    answer: "negative",
    alternativeAnswers: ["zero", "blank"],
    hint: "Protect data integrity at the source"
  }
]

export default function Unit07Lesson05Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Phase 2: Tool Anatomy</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Workbook Anatomy: The Method Comparison Pattern</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your goal is a single workbook that computes COGS and ending inventory for all three methods, switches
              between them with one control cell, and stays readable when data grows. Below is the exact pattern.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> The Workbook Pattern
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Sheet 1: Inputs</h3>
              <p>
                Build two Tables: <strong>Purchases</strong> (Date, SKU, Qty, UnitCost) and <strong>Sales</strong> (Date, SKU, Qty).
                Add a <strong>Method</strong> cell with a Data Validation dropdown: FIFO, LIFO, Weighted Avg.
                Use structured references like <code>Purchases[Qty]</code> so ranges expand when data grows.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Sheet 2: Valuation</h3>
              <p>
                For <strong>FIFO</strong>: consume the oldest layers first. Build helper columns that track how many units
                come from each purchase lot, then multiply by that lot's unit cost.
              </p>
              <p>
                For <strong>LIFO</strong>: consume the newest layers first. Same helper structure, but read the
                purchase table from bottom to top.
              </p>
              <p>
                For <strong>Weighted Average</strong>: compute one blended rate = Total Cost of all purchases divided by
                Total Units. Multiply that rate by units sold for COGS, and by units remaining for ending inventory.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Sheet 3: Outputs</h3>
              <p>
                Display COGS, Ending Inventory, and Gross Profit for the selected method. Wrap any lookups with
                <code> IFNA</code> so the dashboard stays clean. Add a short note explaining the method choice.
              </p>

              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" /> Common Failure Modes
                </h3>
                <ul className="list-disc list-inside text-amber-900 space-y-1">
                  <li><strong>Fixed ranges:</strong> A2:A100 misses new rows. Always use Tables.</li>
                  <li><strong>Unwrapped lookups:</strong> #N/A on dashboard destroys trust. Wrap in IFNA.</li>
                  <li><strong>Negative costs:</strong> A negative UnitCost corrupts every metric. Block it with validation.</li>
                  <li><strong>Hardcoded method names:</strong> If you type "FIFO" in 10 formulas, changing methods means 10 edits. Use one control cell.</li>
                  <li><strong>Currency-formatted strings in formulas:</strong> "$1,350" breaks arithmetic. Use raw numbers.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={vocabItems}
            title="Vocabulary: Workbook Anatomy"
            description="Complete the key terms you will use to build the method-comparison workbook."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Grounding from Prior Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <p>
                In Lessons 2-4 you calculated FIFO, LIFO, Specific ID, and Weighted Average by hand. You saw that the
                same transactions produce different COGS under different methods. Now you will automate that comparison
                in one workbook. The math does not change. The speed and reliability do.
              </p>
              <p>
                When prices rise, FIFO shows higher profit and larger ending inventory. LIFO shows lower profit and
                stronger cash flow from lower taxes. Weighted Average smooths the swings. Your workbook must make these
                trade-offs visible and trustworthy.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
