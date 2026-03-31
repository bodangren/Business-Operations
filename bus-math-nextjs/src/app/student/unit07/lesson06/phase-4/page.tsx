import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download, FileSpreadsheet, CheckCircle2 } from "lucide-react"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

export default function Unit07Lesson06Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Workbook Sprint</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build the Dynamic Method-Selection and Turnover Workbook</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Open the student workbook and build a live scenario-controlled system. One dropdown selects the scenario. One dropdown selects the method. KPI tiles, charts, and an executive summary update automatically.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Starting Point */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Starting Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3">
              <p>
                Download and open:{" "}
                <a className="underline font-medium" href="/resources/unit07-lesson06-student.xlsx" download>
                  unit07-lesson06-student.xlsx
                </a>
              </p>
              <p className="text-sm">
                The workbook contains pre-loaded <strong>Inputs</strong>, <strong>Purchases</strong>, and <strong>Sales</strong> sheets with the shared dataset from Lesson 05. The <strong>Valuation</strong> sheet has blank method-comparison blocks. Your job is to add the scenario driver, wire dynamic switching, and build the KPI dashboard.
              </p>
              <p className="text-sm text-blue-800 bg-blue-100 p-2 rounded">
                <strong>Reference model:</strong>{" "}
                <a className="underline font-medium" href="/resources/unit07-lesson06-teacher.xlsx" download>
                  unit07-lesson06-teacher.xlsx
                </a>{" "}
                — use this to verify your structure after each build block.
              </p>
            </CardContent>
          </Card>

          {/* Build Sequence */}
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Build Sequence (complete in order)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-6">
              {/* Block 1 */}
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Block 1: Scenario Driver Table</h3>
                <p className="text-sm mt-1">Create a new sheet or block named <strong>Drivers</strong> with these columns:</p>
                <pre className="bg-gray-100 p-3 rounded text-xs mt-2 overflow-x-auto">
{`Scenario    | SalesGrowthPct | Method | AsOfDate
Base        | 0%             | FIFO   | 2025-06-30
Stretch     | 12%            | LIFO   | 2025-06-30
Downside    | -8%            | WA     | 2025-06-30`}
                </pre>
                <p className="text-sm mt-2">
                  Add a <strong>SelectedScenario</strong> cell with data validation (dropdown: Base, Stretch, Downside).
                </p>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint 1:</strong> Changing the dropdown changes the SelectedScenario cell value. No formulas yet — just the table and control.
                </div>
              </div>

              {/* Block 2 */}
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Block 2: Dynamic Method Switching</h3>
                <p className="text-sm mt-1">
                  On the <strong>Valuation</strong> sheet, wire the method and driver values to the selected scenario:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-xs mt-2 overflow-x-auto">
{`=IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[Method]), "FIFO")
 =IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[SalesGrowthPct]), 0)`}
                </pre>
                <p className="text-sm mt-2">
                  If XLOOKUP is unavailable, use <code>=IFNA(INDEX(Drivers[Method], MATCH(SelectedScenario, Drivers[Scenario], 0)), "FIFO")</code>.
                </p>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint 2:</strong> Switching the scenario dropdown changes the method cell and growth rate. No #N/A errors appear.
                </div>
              </div>

              {/* Block 3 */}
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Block 3: COGS and Ending Inventory by Method</h3>
                <p className="text-sm mt-1">
                  Build three calculation blocks (FIFO, LIFO, WA) on the Valuation sheet. Use the selected method to display the correct COGS and Ending Inventory:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-xs mt-2 overflow-x-auto">
{`=IF(SelectedMethod="FIFO", FIFOCOGS, IF(SelectedMethod="LIFO", LIFOCOGS, WACOGS))
 =IF(SelectedMethod="FIFO", FIFOEndingInv, IF(SelectedMethod="LIFO", LIFOEndingInv, WAEndingInv))`}
                </pre>
                <p className="text-sm mt-2">
                  Each method block should use structured references from the Purchases and Sales tables.
                </p>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint 3:</strong> COGS + Ending Inventory equals GAFS for all three methods. Switching the method changes the displayed values.
                </div>
              </div>

              {/* Block 4 */}
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Block 4: Turnover and KPI Dashboard</h3>
                <p className="text-sm mt-1">
                  Calculate KPIs and display them in a dashboard block:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-xs mt-2 overflow-x-auto">
{`Inventory Turnover    = COGS / Average Inventory
Days on Hand          = 365 / Turnover
Gross Margin %        = (Revenue - COGS) / Revenue
Average Inventory     = (Beginning Inventory + Ending Inventory) / 2`}
                </pre>
                <p className="text-sm mt-2">
                  Create KPI tiles (one cell or merged block per metric) that read from the output table. Add a chart that compares turnover across all three methods.
                </p>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint 4:</strong> KPI tiles update when you change the scenario dropdown. Chart shows all three methods side by side.
                </div>
              </div>

              {/* Block 5 */}
              <div className="border-l-4 border-orange-300 pl-4">
                <h3 className="font-bold text-orange-900">Block 5: Validation Flags</h3>
                <p className="text-sm mt-1">
                  Add a <strong>Checks</strong> section that flags problems before totals roll up:
                </p>
                <pre className="bg-gray-100 p-3 rounded text-xs mt-2 overflow-x-auto">
{`=IF(COUNTBLANK(SKU_Range)>0, "Missing SKU", "OK")
 =IF(MIN(UnitCost_Range)<=0, "Invalid UnitCost", "OK")
 =IF(AsOfDate<TODAY()-30, "Stale AsOfDate", "OK")
 =IF(GAFS_Check<>0, "GAFS MISMATCH", "Balanced")`}
                </pre>
                <p className="text-sm mt-2">
                  Place these checks above the KPI tiles so they are impossible to miss during a demo.
                </p>
                <div className="mt-2 bg-green-50 border border-green-200 p-2 rounded text-sm text-green-900">
                  <CheckCircle2 className="h-4 w-4 inline mr-1" />
                  <strong>Checkpoint 5:</strong> Intentionally introduce a bad value (e.g., zero UnitCost) and confirm the flag appears. Remove it and confirm the flag clears.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Definition of Done */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900">
              <p className="font-medium mb-3">Your workbook is complete when ALL of the following are true:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Scenario driver table exists with Base, Stretch, and Downside rows</li>
                <li>SelectedScenario dropdown switches method and growth rate via exact-match lookup</li>
                <li>COGS and Ending Inventory update correctly for FIFO, LIFO, and Weighted Average</li>
                <li>COGS + Ending Inventory = GAFS for all three methods (checksum passes)</li>
                <li>Inventory turnover and days-on-hand calculate correctly for each method</li>
                <li>KPI tiles read from structured Table references, not fixed ranges</li>
                <li>At least one chart compares methods side by side and updates with data changes</li>
                <li>Validation flags catch missing SKU, invalid UnitCost, stale AsOfDate, and GAFS mismatch</li>
                <li>Formulas are documented in plain language near the results</li>
                <li>No #N/A, #REF!, or #DIV/0! errors visible in any sheet</li>
              </ul>
              <p className="text-sm mt-3 font-medium">
                Output artifact: Save your completed workbook as <strong>unit07-lesson06-[YourName].xlsx</strong> and bring it to Phase 5.
              </p>
            </CardContent>
          </Card>

          {/* Fallback */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-900">Stuck? Fallback Option</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 text-sm space-y-2">
              <p>
                If your workbook is not producing correct results, download the{" "}
                <a className="underline text-orange-700" href="/resources/unit07-lesson06-tutorial.md">
                  step-by-step tutorial
                </a>{" "}
                and work through it line by line. You can also compare your structure against the teacher model.
              </p>
              <p>
                The most common error is using the wrong layer order for LIFO. Double-check that LIFO pulls from the <strong>newest</strong> purchase first.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}