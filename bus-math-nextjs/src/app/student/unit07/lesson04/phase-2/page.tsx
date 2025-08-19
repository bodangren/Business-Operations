import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, CheckCircle2 } from "lucide-react"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

export default function Unit07Lesson04Phase2() {
  const vocab = [
    { id: "v1", text: "FIFO stands for {blank}.", answer: "First-In, First-Out", hint: "Oldest costs are used first" },
    { id: "v2", text: "LIFO stands for {blank}.", answer: "Last-In, First-Out", hint: "Newest costs are used first" },
    { id: "v3", text: "COGS means {blank}.", answer: "Cost of Goods Sold", hint: "Expense from selling inventory" },
    { id: "v4", text: "Excel Tables use {blank} references.", answer: "structured", alternativeAnswers: ["Structured"], hint: "TableName[Column]" },
    { id: "v5", text: "The Excel function {blank} finds a match and returns a value to the right or left.", answer: "XLOOKUP", alternativeAnswers: ["xlookup"], hint: "Successor to VLOOKUP" },
    { id: "v6", text: "For weighted totals, many models use {blank}.", answer: "SUMPRODUCT", alternativeAnswers: ["sumproduct"], hint: "Sum of products" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Introduction</Badge>
            <h1 className="text-3xl font-bold text-gray-900">FIFO/LIFO: The Professional Foundation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Today you will set up Excel Tables and build a FIFO/LIFO valuation system. This connects our unit goal—choosing
              inventory methods that align with cash-flow and tax strategy—to a model that updates itself.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Main Educational Content - aligns with unit07 objectives */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Core Ideas and Business Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-900">
              <p>
                Every business needs to decide how inventory costs flow into COGS. With <strong>FIFO</strong>, the oldest
                costs are used first. With <strong>LIFO</strong>, the newest costs are used first. The choice affects profit,
                taxes, and cash—three things investors care about.
              </p>
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-semibold mb-1">Why This Matters</p>
                <p>
                  In rising prices, LIFO increases COGS and lowers reported profit, which can reduce taxes and help cash flow.
                  FIFO shows higher profit when older, cheaper costs flow to COGS. TechStart’s clients may choose differently
                  depending on goals and reporting needs.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-step Tutorial with TechStart context */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" /> Step-by-Step: Build the Valuation Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-900">
              <ol className="list-decimal list-inside space-y-2">
                <li>Create a Purchases table: columns <strong>Date</strong>, <strong>Item</strong>, <strong>Qty</strong>, <strong>UnitCost</strong>.</li>
                <li>Create a Sales table: columns <strong>Date</strong>, <strong>Item</strong>, <strong>QtySold</strong>.</li>
                <li>Use Excel Tables so ranges expand automatically. Example: <code>Purchases[Qty]</code>.</li>
                <li>Add a running total in Purchases: <code>=[@Qty] + SUM(INDEX(Purchases[Qty],1):INDEX(Purchases[Qty],ROW()-ROW(INDEX(Purchases[Qty],1))))-[@Qty]</code> or a simple cumulative approach.</li>
                <li>Match sale quantities to purchase layers. With modern Excel, use <strong>XLOOKUP</strong> and helper columns to find where each sale lands.</li>
                <li>Compute COGS by multiplying quantities pulled from each layer by that layer’s <strong>UnitCost</strong>.</li>
              </ol>
              <div className="bg-white p-4 rounded border border-green-200 text-sm">
                <p className="font-semibold">Professional Tip:</p>
                <p>
                  Use structured references like <code>SUMPRODUCT((Purchases[Item]=[@Item])*(Purchases[Date]&lt;=[@Date])*(Purchases[UnitCost]))</code>
                  when building checks. Keep formulas readable and comment complex logic in a Notes sheet.
                </p>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={vocab}
            title="Vocabulary Check: Inventory & Excel"
            description="Master the key terms that make your model professional."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Investor Expectations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-amber-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Formulas that don’t break when data grows</li>
                <li>Clear method choice (FIFO or LIFO) and clean documentation</li>
                <li>Validation that flags missing, negative, or stale data</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

