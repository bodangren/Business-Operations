import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download, CheckCircle, AlertCircle } from "lucide-react"
import { SpreadsheetWrapper, SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

const blankCell = { value: "" }
const textCell = (v: string) => ({ value: v, readOnly: true })
const numberCell = (v: number) => ({ value: v, readOnly: true })
const headerCell = (v: string) => ({ value: v, readOnly: true, className: "font-bold bg-slate-100" })
const formulaTextCell = (v: string) => ({ value: " " + v, readOnly: true, className: "text-slate-500 italic" })

const referenceModel: SpreadsheetData = [
  [headerCell(""), headerCell("A"), headerCell("B"), headerCell("C"), headerCell("D"), headerCell("E")],
  [headerCell("1"), textCell("METHOD SELECTOR"), textCell("FIFO"), blankCell, blankCell, blankCell, blankCell],
  [headerCell("2"), blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [headerCell("3"), headerCell("PURCHASES TABLE"), headerCell("Date"), headerCell("SKU"), headerCell("Qty"), headerCell("UnitCost"), headerCell("Total")],
  [headerCell("4"), numberCell(1), textCell("Mar 1"), textCell("LK-001"), numberCell(10), numberCell(18), formulaTextCell("=D4*E4")],
  [headerCell("5"), numberCell(2), textCell("Mar 8"), textCell("LK-001"), numberCell(20), numberCell(20), formulaTextCell("=D5*E5")],
  [headerCell("6"), numberCell(3), textCell("Mar 15"), textCell("LK-001"), numberCell(10), numberCell(22), formulaTextCell("=D6*E6")],
  [headerCell("7"), blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [headerCell("8"), headerCell("SALES TABLE"), headerCell("Date"), headerCell("SKU"), headerCell("Qty"), blankCell, blankCell],
  [headerCell("9"), numberCell(1), textCell("Mar 20"), textCell("LK-001"), numberCell(15), blankCell, blankCell],
  [headerCell("10"), blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [headerCell("11"), headerCell("OUTPUTS"), blankCell, blankCell, blankCell, blankCell, blankCell],
  [headerCell("12"), textCell("COGS"), formulaTextCell("=IF(B1=\"FIFO\",280,IF(B1=\"LIFO\",320,300))"), blankCell, blankCell, blankCell, blankCell],
  [headerCell("13"), textCell("Ending Inventory"), formulaTextCell("=IF(B1=\"FIFO\",500,IF(B1=\"LIFO\",460,480))"), blankCell, blankCell, blankCell, blankCell],
  [headerCell("14"), textCell("GAFS"), textCell("$800"), blankCell, blankCell, blankCell, blankCell],
  [headerCell("15"), textCell("Check: COGS + EI = GAFS"), formulaTextCell("=B12+B13"), blankCell, blankCell, blankCell, blankCell],
]

export default function Unit07Lesson05Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Workbook Sprint</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build the Method-Comparison Workbook</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Open the student workbook and build the method-comparison model step by step. Each block has a
              verification checkpoint. Do not move to the next block until the current one passes.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Download className="h-5 w-5" /> Starting Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 space-y-2">
              <p>
                <a className="underline text-orange-700" href="/resources/unit07-lesson05-student.xlsx" download>
                  Download unit07-lesson05-student.xlsx
                </a>
              </p>
              <p className="text-sm text-slate-600">
                This workbook has blank sheets labeled Inputs, Valuation, and Outputs. You will fill in the data
                structure, formulas, and method selector.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Target className="h-5 w-5" /> Reference Layout
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                This is the target structure your workbook should match. Formulas are shown as text for reference.
              </p>
              <SpreadsheetWrapper
                initialData={referenceModel}
                readOnly={true}
                columnLabels={["", "A", "B", "C", "D", "E", "F"]}
              />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> Build Sequence
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-4">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 1: Set Up the Inputs Sheet</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Create a Table named <strong>Purchases</strong> with columns: Date, SKU, Qty, UnitCost</li>
                    <li>Create a Table named <strong>Sales</strong> with columns: Date, SKU, Qty</li>
                    <li>Add a <strong>Method</strong> cell with Data Validation dropdown: FIFO, LIFO, Weighted Avg</li>
                  </ol>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Checkpoint: Tables expand when you add a new row. The dropdown shows all three methods.</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 2: Build FIFO and LIFO Helper Columns</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>In the Purchases Table, add a <strong>Lot Total</strong> column: Qty × UnitCost</li>
                    <li>Below the table, create a FIFO section: list each lot and how many units were consumed from it</li>
                    <li>Create a LIFO section: same structure but consume from newest lots first</li>
                    <li>Sum the consumed lot costs to get COGS for each method</li>
                  </ol>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Checkpoint: FIFO COGS = $280, LIFO COGS = $320 with the sample data.</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 3: Build Weighted Average</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Compute Total Cost = SUM of all Lot Totals</li>
                    <li>Compute Total Units = SUM of all Qty</li>
                    <li>Avg Rate = Total Cost / Total Units</li>
                    <li>WA COGS = Avg Rate × Units Sold</li>
                    <li>WA Ending Inventory = Avg Rate × Units Remaining</li>
                  </ol>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Checkpoint: WA COGS = $300, WA Ending Inventory = $480.</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 4: Build the Outputs Sheet</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Display COGS, Ending Inventory, and GAFS for the selected method</li>
                    <li>Use the Method cell to drive which method's numbers appear</li>
                    <li>Add a check row: COGS + Ending Inventory should equal GAFS</li>
                    <li>Add a short note explaining the method and its business impact</li>
                  </ol>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Checkpoint: Toggle the method selector. COGS and EI update. The check row balances.</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 5: Add Validation</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Add a validation row that flags negative or zero UnitCost</li>
                    <li>Add a check for missing SKU values</li>
                    <li>Wrap any lookups in IFNA to prevent #N/A on the dashboard</li>
                  </ol>
                  <div className="mt-2 flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-4 h-4" />
                    <span>Checkpoint: Enter a negative cost. A warning appears. The model does not break.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <p className="font-medium mb-2">Your workbook is complete when:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>All three methods compute COGS and Ending Inventory correctly from the same data</li>
                <li>The method selector changes all outputs without breaking formulas</li>
                <li>Tables and structured references are used (no fixed ranges like A2:A100)</li>
                <li>Validation catches negative costs and missing SKUs</li>
                <li>COGS + Ending Inventory = GAFS for every method</li>
                <li>A short note explains the method choice and its business impact</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Fallback</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <p>
                If your workbook breaks and you cannot find the error, download the teacher version to compare:
              </p>
              <p className="mt-2">
                <a className="underline text-blue-700" href="/resources/unit07-lesson05-teacher.xlsx" download>
                  Download unit07-lesson05-teacher.xlsx
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
