import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, AlertCircle } from "lucide-react"
import InventoryAlgorithmShowTell from "@/components/business-simulations/InventoryAlgorithmShowTell"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

export default function Unit07Lesson05Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-green-100 text-green-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 2: Tool Anatomy</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Excel Algorithm Anatomy: All Four Inventory Methods</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You are not memorizing formulas. You are learning what each method is doing to inventory layers so you can
              build and defend the logic in Excel under pressure.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Algorithm Contract for This Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Shared Setup (used by all methods)</h3>
              <p>
                Build <strong>Purchases</strong> with LotID, Date, SKU, Qty, UnitCost, LotTotal and
                <strong> Sales</strong> with Date, SKU, Qty, LotID. The entire workbook depends on these two tables.
                Every method block reads the same source tables and only changes how cost is assigned.
              </p>
              <p className="text-sm bg-slate-50 p-3 rounded border border-slate-200">
                Shared totals: <code>UnitsSold = SUM(Sales[Qty])</code>, <code>TotalUnits = SUM(Purchases[Qty])</code>,
                <code> GAFS = SUM(Purchases[LotTotal])</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Method 1: FIFO Algorithm (oldest lots first)</h3>
              <p>
                Add a running cumulative quantity in Purchases. Then compute consumed units by lot with:
                <code>MAX(0, MIN([@Qty], UnitsSold - ([@[FIFO CumQty]] - [@Qty])))</code>. Then cost used is
                consumed units × unit cost. This works because each row calculates only the amount still needed after older lots.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Method 2: LIFO Algorithm (newest lots first)</h3>
              <p>
                Build a helper block ordered newest to oldest (reverse lot order), then apply the same consume
                pattern as FIFO on that reversed block. The formula can stay the same because the order has changed.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Method 3: Specific ID Algorithm (exact layers)</h3>
              <p>
                Use Sales[LotID] to identify the exact lot sold. Pull each unit cost with
                <code> XLOOKUP(Sales[@LotID], Purchases[LotID], Purchases[UnitCost])</code>, then compute each
                sale line cost = Qty × looked-up unit cost and sum for Specific ID COGS. Here, table references are the
                traceability chain from sale line back to purchase lot.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Method 4: Weighted Average Algorithm (periodic)</h3>
              <p>
                Compute one periodic blended rate:
                <code>WA Rate = GAFS / TotalUnits</code>.
                Then <code>WA COGS = UnitsSold × WA Rate</code> and
                <code>WA EI = (TotalUnits - UnitsSold) × WA Rate</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Output Switch (display layer)</h3>
              <p>
                Create a method summary table with one row per method (COGS, Ending Inventory). The selector should
                lookup values from that table instead of hardcoding nested IF chains so results are auditable and easy to explain.
              </p>

              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-sm">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" /> Professional Expectations (Not Scored in This Lesson)
                </h3>
                <ul className="list-disc list-inside text-amber-900 space-y-1">
                  <li>Use Tables and structured references so logic expands safely.</li>
                  <li>Keep clear names for blocks, selector cells, and method summary rows.</li>
                  <li>Add input validation and friendly error handling to support audit quality.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <InventoryAlgorithmShowTell />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Grounding from Prior Lessons
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <p>
                In Lessons 2-4 you calculated these methods manually. In Lesson 05, your assessment is whether you can
                translate each method into a correct Excel algorithm that remains consistent when data changes.
              </p>
              <p>
                Quick check before Phase 3: explain in plain language what
                <code> Purchases[Qty]</code> means and what <code>[@Qty]</code> means. If you can decode both, you are ready
                to rehearse the workbook logic.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
