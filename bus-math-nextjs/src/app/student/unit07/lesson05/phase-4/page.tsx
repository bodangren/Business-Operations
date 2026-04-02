import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download, CheckCircle, AlertCircle } from "lucide-react"
import { SpreadsheetWrapper, SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

const blankCell = { value: "", readOnly: true }
const textCell = (value: string) => ({ value, readOnly: true })
const numberCell = (value: number) => ({ value, readOnly: true })
const headerCell = (value: string) => ({ value, readOnly: true, className: "font-bold bg-slate-100" })
const formulaTextCell = (value: string) => ({ value: ` ${value}`, readOnly: true, className: "text-slate-500 italic" })

const inputsSheetPreview: SpreadsheetData = [
  [headerCell("Field"), headerCell("Value"), headerCell("Formula / Source"), headerCell("Purpose"), headerCell("Check")],
  [textCell("UnitsSold"), numberCell(15), formulaTextCell("=SUM(Sales[Qty])"), textCell("Shared sold units"), textCell("Matches Sales table")],
  [textCell("TotalUnits"), numberCell(40), formulaTextCell("=SUM(Purchases[Qty])"), textCell("Shared available units"), textCell("Matches Purchases table")],
  [textCell("GAFS"), numberCell(800), formulaTextCell("=SUM(Purchases[LotTotal])"), textCell("Total available cost"), textCell("Used by every method")],
  [textCell("SelectedMethod"), textCell("FIFO"), textCell("Data Validation List"), textCell("Drives output display"), textCell("FIFO/LIFO/Specific ID/WA")],
  [textCell("Lot L1"), textCell("10 @ 18"), formulaTextCell("=Qty*UnitCost"), textCell("Purchases row"), textCell("180")],
  [textCell("Lot L2"), textCell("20 @ 20"), formulaTextCell("=Qty*UnitCost"), textCell("Purchases row"), textCell("400")],
  [textCell("Lot L3"), textCell("10 @ 22"), formulaTextCell("=Qty*UnitCost"), textCell("Purchases row"), textCell("220")]
]

const fifoSheetPreview: SpreadsheetData = [
  [headerCell("LotID"), headerCell("Qty"), headerCell("UnitCost"), headerCell("FIFO CumQty"), headerCell("FIFO Used"), headerCell("FIFO Cost")],
  [textCell("L1"), numberCell(10), numberCell(18), formulaTextCell("=SUM($B$2:B2)"), formulaTextCell("=MAX(0,MIN(B2,UnitsSold-(D2-B2)))"), formulaTextCell("=E2*C2")],
  [textCell("L2"), numberCell(20), numberCell(20), formulaTextCell("=SUM($B$2:B3)"), formulaTextCell("=MAX(0,MIN(B3,UnitsSold-(D3-B3)))"), formulaTextCell("=E3*C3")],
  [textCell("L3"), numberCell(10), numberCell(22), formulaTextCell("=SUM($B$2:B4)"), formulaTextCell("=MAX(0,MIN(B4,UnitsSold-(D4-B4)))"), formulaTextCell("=E4*C4")],
  [blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [textCell("FIFO COGS"), numberCell(280), formulaTextCell("=SUM(FIFO_Cost_Column)"), textCell("FIFO EI"), numberCell(520), formulaTextCell("=GAFS-FIFO_COGS")]
]

const lifoSheetPreview: SpreadsheetData = [
  [headerCell("LotID (Newest→Oldest)"), headerCell("Qty"), headerCell("UnitCost"), headerCell("LIFO CumQty"), headerCell("LIFO Used"), headerCell("LIFO Cost")],
  [textCell("L3"), numberCell(10), numberCell(22), formulaTextCell("=SUM($B$2:B2)"), formulaTextCell("=MAX(0,MIN(B2,UnitsSold-(D2-B2)))"), formulaTextCell("=E2*C2")],
  [textCell("L2"), numberCell(20), numberCell(20), formulaTextCell("=SUM($B$2:B3)"), formulaTextCell("=MAX(0,MIN(B3,UnitsSold-(D3-B3)))"), formulaTextCell("=E3*C3")],
  [textCell("L1"), numberCell(10), numberCell(18), formulaTextCell("=SUM($B$2:B4)"), formulaTextCell("=MAX(0,MIN(B4,UnitsSold-(D4-B4)))"), formulaTextCell("=E4*C4")],
  [blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [textCell("LIFO COGS"), numberCell(320), formulaTextCell("=SUM(LIFO_Cost_Column)"), textCell("LIFO EI"), numberCell(480), formulaTextCell("=GAFS-LIFO_COGS")]
]

const specificIdSheetPreview: SpreadsheetData = [
  [headerCell("Sale Row"), headerCell("LotID"), headerCell("Qty"), headerCell("Lookup Cost"), headerCell("Line Cost"), headerCell("Meaning")],
  [numberCell(1), textCell("L1"), numberCell(5), formulaTextCell("=XLOOKUP(B2,Purchases[LotID],Purchases[UnitCost])"), formulaTextCell("=C2*D2"), textCell("5 units from lot L1")],
  [numberCell(2), textCell("L3"), numberCell(10), formulaTextCell("=XLOOKUP(B3,Purchases[LotID],Purchases[UnitCost])"), formulaTextCell("=C3*D3"), textCell("10 units from lot L3")],
  [blankCell, blankCell, blankCell, blankCell, blankCell, blankCell],
  [textCell("Specific ID COGS"), numberCell(310), formulaTextCell("=SUM(Line_Cost_Column)"), textCell("Specific ID EI"), numberCell(490), formulaTextCell("=GAFS-SpecificID_COGS")]
]

const weightedAverageSheetPreview: SpreadsheetData = [
  [headerCell("Metric"), headerCell("Value"), headerCell("Formula"), headerCell("Meaning"), headerCell("Check")],
  [textCell("WA Rate"), numberCell(20), formulaTextCell("=GAFS/TotalUnits"), textCell("Blended period cost per unit"), textCell("800/40 = 20")],
  [textCell("WA COGS"), numberCell(300), formulaTextCell("=UnitsSold*WA_Rate"), textCell("Cost assigned to sold units"), textCell("15*20 = 300")],
  [textCell("WA EI"), numberCell(500), formulaTextCell("=(TotalUnits-UnitsSold)*WA_Rate"), textCell("Cost assigned to unsold units"), textCell("25*20 = 500")]
]

const outputsSheetPreview: SpreadsheetData = [
  [headerCell("Method"), headerCell("COGS"), headerCell("Ending Inventory"), headerCell("Balance Check"), headerCell("Display Logic")],
  [textCell("FIFO"), numberCell(280), numberCell(520), formulaTextCell("=B2+C2"), textCell("Summary row")],
  [textCell("LIFO"), numberCell(320), numberCell(480), formulaTextCell("=B3+C3"), textCell("Summary row")],
  [textCell("Specific ID"), numberCell(310), numberCell(490), formulaTextCell("=B4+C4"), textCell("Summary row")],
  [textCell("Weighted Average"), numberCell(300), numberCell(500), formulaTextCell("=B5+C5"), textCell("Summary row")],
  [blankCell, blankCell, blankCell, blankCell, blankCell],
  [textCell("Display COGS"), formulaTextCell("=XLOOKUP(SelectedMethod,A2:A5,B2:B5)"), textCell("Display EI"), formulaTextCell("=XLOOKUP(SelectedMethod,A2:A5,C2:C5)"), textCell("Selector output panel")]
]

const sheetPreviews = [
  {
    title: "Inputs Sheet",
    note: "Set shared totals once. Every method reads from these values.",
    data: inputsSheetPreview,
    labels: ["A", "B", "C", "D", "E"]
  },
  {
    title: "FIFO Sheet",
    note: "Oldest-to-newest consume logic with FIFO helper columns.",
    data: fifoSheetPreview,
    labels: ["A", "B", "C", "D", "E", "F"]
  },
  {
    title: "LIFO Sheet",
    note: "Same consume formula as FIFO, but lots are reversed first.",
    data: lifoSheetPreview,
    labels: ["A", "B", "C", "D", "E", "F"]
  },
  {
    title: "SpecificID Sheet",
    note: "Sales lot tags drive exact cost lookups.",
    data: specificIdSheetPreview,
    labels: ["A", "B", "C", "D", "E", "F"]
  },
  {
    title: "WeightedAverage Sheet",
    note: "One blended period rate drives both COGS and ending inventory.",
    data: weightedAverageSheetPreview,
    labels: ["A", "B", "C", "D", "E"]
  },
  {
    title: "Outputs Sheet",
    note: "Summary table plus selector lookups displays the chosen method.",
    data: outputsSheetPreview,
    labels: ["A", "B", "C", "D", "E"]
  }
]

export default function Unit07Lesson05Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Workbook Sprint</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build the Multi-Sheet Inventory Method Workbook</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Open the student workbook and build method logic sheet-by-sheet. This sprint is assessed on algorithm
              correctness and method-switch outputs, not formatting polish.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
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
                Workbook tabs: Inputs, FIFO, LIFO, SpecificID, WeightedAverage, Outputs. Build each tab in order.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Target className="h-5 w-5" /> Reference Layout by Sheet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-700">
                Formulas are shown as text so you can read the structure clearly before building in Excel.
              </p>

              <div className="space-y-4">
                {sheetPreviews.map((sheet) => (
                  <Card key={sheet.title} className="border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-slate-900">{sheet.title}</CardTitle>
                      <p className="text-sm text-slate-600">{sheet.note}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <SpreadsheetWrapper
                          initialData={sheet.data}
                          readOnly={true}
                          columnLabels={sheet.labels}
                          className="min-w-[520px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
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
                  <p className="font-semibold">Block 1: Inputs Tab</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Confirm Purchases and Sales tables are complete.</li>
                    <li>Calculate UnitsSold, TotalUnits, and GAFS.</li>
                    <li>Create selector dropdown with FIFO, LIFO, Specific ID, Weighted Average.</li>
                  </ol>
                  <p className="mt-2 text-sm">Checkpoint: shared totals match your source rows.</p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 2: FIFO + LIFO Tabs</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Build FIFO cumulative, used units, and cost columns (oldest-to-newest).</li>
                    <li>Build LIFO helper table in reversed lot order and apply same consume pattern.</li>
                  </ol>
                  <p className="mt-2 text-sm">
                    Checkpoint: FIFO COGS 280 / EI 520 and LIFO COGS 320 / EI 480 (sample data).
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 3: SpecificID + WeightedAverage Tabs</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Specific ID: lookup lot cost by Sales[LotID], compute line costs, sum COGS.</li>
                    <li>Weighted Average: compute WA rate, WA COGS, and WA ending inventory.</li>
                  </ol>
                  <p className="mt-2 text-sm">
                    Checkpoint: Specific ID COGS 310 / EI 490 and WA COGS 300 / EI 500 (sample data).
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 4: Outputs Tab + Method Switch</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Create one summary row per method with COGS and ending inventory.</li>
                    <li>Use selector-driven lookups to display current method outputs.</li>
                    <li>Add method-level balance checks where COGS + EI = GAFS.</li>
                  </ol>
                  <p className="mt-2 text-sm">Checkpoint: selector updates display values without editing formulas.</p>
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
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Inputs, FIFO, LIFO, SpecificID, WeightedAverage, and Outputs tabs are complete.</li>
                <li>All four methods return correct COGS and ending inventory from the same data.</li>
                <li>Output selector displays method-specific COGS and ending inventory correctly.</li>
                <li>Each method passes COGS + Ending Inventory = GAFS.</li>
                <li>You can explain each tab&apos;s algorithm in plain language.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Professional Expectations (Non-Scored)</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Use clear names and structured references.</li>
                <li>Add validation and error handling as part of normal workbook quality.</li>
                <li>Keep each tab readable for fast audit and handoff.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-blue-800">Fallback</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <p>If your workbook breaks, compare tab structure with the teacher reference:</p>
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
