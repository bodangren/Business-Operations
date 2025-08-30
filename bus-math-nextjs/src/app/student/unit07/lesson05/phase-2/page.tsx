import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2 } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabItems = [
  {
    id: "v1",
    text: "Use Excel {blank} to keep formulas expanding with new rows (e.g., Purchases[Qty]).",
    answer: "Tables",
    hint: "Also called structured references"
  },
  {
    id: "v2",
    text: "A single {blank} lets the model switch between FIFO/LIFO/Weighted Avg without copy‑paste.",
    answer: "method selector",
    alternativeAnswers: ["switch cell", "dropdown"],
    hint: "Often a Data Validation list"
  },
  {
    id: "v3",
    text: "Use {blank} to safely display ‘Not found’ when lookups fail (e.g., XLOOKUP(...)).",
    answer: "IFNA",
    alternativeAnswers: ["IFERROR"],
    hint: "Protects dashboards from #N/A"
  },
  {
    id: "v4",
    text: "Weighted Average unit cost = {blank} / Total Units on hand.",
    answer: "Total Cost",
    alternativeAnswers: ["Sum of cost"],
    hint: "Cost divided by quantity"
  },
  {
    id: "v5",
    text: "Validation should block {blank} costs and missing SKUs before they hit results.",
    answer: "negative",
    alternativeAnswers: ["zero", "blank"],
    hint: "Protect data integrity"
  }
]

export default function Unit07Lesson05Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Inventory Automation: Professional‑Grade</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your goal is a single workbook that switches methods, scales with growth, and stays readable. Use Tables, a
              method selector, and clear logic to compute COGS and Ending Inventory without copy‑paste. Always document
              assumptions and guard against errors.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Core Design Pattern
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-slate-800 space-y-4">
              <p>
                Build two Tables: <strong>Purchases</strong>(Date, SKU, Qty, UnitCost, LotID) and <strong>Sales</strong>(Date, SKU, Qty, Price).
                Add a <strong>Method</strong> selector cell with a dropdown: FIFO, LIFO, Weighted Avg. Use structured references like
                <code>Purchases[Qty]</code> so ranges expand when data grows.
              </p>
              <p>
                For <strong>FIFO/LIFO</strong>, compute layer consumption in helper columns, then sum layer costs into COGS. For <strong>Weighted Avg</strong>,
                use running totals: <em>Total Cost</em> / <em>Total Units</em>. Wrap lookups with <code>IFNA</code> to prevent #N/A on the dashboard.
              </p>
              <div className="bg-blue-50 p-4 rounded border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-1">Why This Matters</h3>
                <p className="text-blue-800">
                  Investors want fast, reliable comparisons. A single switch plus clear checks proves your logic is stable,
                  auditable, and presentation‑ready under change.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-1">Professional Standards</h3>
                <ul className="list-disc list-inside text-amber-900">
                  <li>Tables + structured references only (no fixed ranges)</li>
                  <li>Method clearly labeled with notes and date</li>
                  <li>Validation for missing SKU, negative costs, stale dates</li>
                  <li>IFNA/IFERROR on lookups to protect outputs</li>
                  <li>Explain formula choices in plain language</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={vocabItems}
            title="Vocabulary: Automation and Controls"
            description="Complete key terms used in professional inventory models."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Grounding from Unit Text
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <p>
                When prices rise, FIFO shows higher profit and larger ending inventory; LIFO shows lower profit and
                stronger cash flow from lower taxes. Weighted Average smooths swings. Your automation must make these
                trade‑offs clear and trustworthy.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

