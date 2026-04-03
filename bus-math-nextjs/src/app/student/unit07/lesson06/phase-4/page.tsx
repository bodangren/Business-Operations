import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download, CheckCircle, AlertCircle } from "lucide-react"
import { SpreadsheetWrapper, SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

const blankCell = { value: "", readOnly: true }
const textCell = (value: string) => ({ value, readOnly: true })
const numberCell = (value: number) => ({ value, readOnly: true })
const headerCell = (value: string) => ({ value, readOnly: true, className: "font-bold bg-slate-100" })
const formulaTextCell = (value: string) => ({ value: ` ${value}`, readOnly: true, className: "text-slate-500 italic" })

const inputsSheetPreview: SpreadsheetData = [
  [headerCell("Control"), headerCell("Value"), headerCell("Formula / Source"), headerCell("Purpose"), headerCell("Check")],
  [textCell("SelectedScenario"), textCell("Base"), textCell("Data Validation"), textCell("Scenario selector"), textCell("Base/Stretch/Downside")],
  [textCell("SelectedMethod"), textCell("FIFO"), textCell("Data Validation"), textCell("Method selector"), textCell("FIFO/LIFO/Weighted Average")],
  [textCell("SelectedKey"), textCell("Base|FIFO"), formulaTextCell("=SelectedScenario&\"|\"&SelectedMethod"), textCell("Lookup key"), textCell("Matches MethodSummary[Key]")],
  [textCell("UnitSellingPrice"), numberCell(40), textCell("Input"), textCell("Revenue calculation"), textCell("Positive value")],
  [textCell("BeginningInventory"), numberCell(180), textCell("Input"), textCell("Average inventory KPI"), textCell("From source inventory")],
  [textCell("GAFS"), numberCell(1150), textCell("Input"), textCell("Cost conservation target"), textCell("Used in checks")]
]

const driversSheetPreview: SpreadsheetData = [
  [headerCell("Scenario"), headerCell("UnitsSold"), headerCell("DefaultMethod"), headerCell("AsOfDate"), headerCell("Comment")],
  [textCell("Base"), numberCell(35), textCell("FIFO"), textCell("2026-03-31"), textCell("Baseline demand")],
  [textCell("Stretch"), numberCell(39), textCell("LIFO"), textCell("2026-03-31"), textCell("Higher demand")],
  [textCell("Downside"), numberCell(32), textCell("Weighted Average"), textCell("2026-03-31"), textCell("Lower demand")]
]

const summarySheetPreview: SpreadsheetData = [
  [headerCell("Key"), headerCell("Scenario"), headerCell("Method"), headerCell("COGS"), headerCell("EndingInventory"), headerCell("BalanceCheck")],
  [textCell("Base|FIFO"), textCell("Base"), textCell("FIFO"), numberCell(690), numberCell(460), formulaTextCell("=D2+E2")],
  [textCell("Base|LIFO"), textCell("Base"), textCell("LIFO"), numberCell(770), numberCell(380), formulaTextCell("=D3+E3")],
  [textCell("Base|Weighted Average"), textCell("Base"), textCell("Weighted Average"), numberCell(731.82), numberCell(418.18), formulaTextCell("=D4+E4")],
  [textCell("Stretch|FIFO"), textCell("Stretch"), textCell("FIFO"), numberCell(778), numberCell(372), formulaTextCell("=D5+E5")],
  [textCell("Stretch|LIFO"), textCell("Stretch"), textCell("LIFO"), numberCell(850), numberCell(300), formulaTextCell("=D6+E6")],
  [textCell("Stretch|Weighted Average"), textCell("Stretch"), textCell("Weighted Average"), numberCell(815.45), numberCell(334.55), formulaTextCell("=D7+E7")],
  [textCell("Downside|FIFO"), textCell("Downside"), textCell("FIFO"), numberCell(624), numberCell(526), formulaTextCell("=D8+E8")],
  [textCell("Downside|LIFO"), textCell("Downside"), textCell("LIFO"), numberCell(710), numberCell(440), formulaTextCell("=D9+E9")],
  [textCell("Downside|Weighted Average"), textCell("Downside"), textCell("Weighted Average"), numberCell(669.09), numberCell(480.91), formulaTextCell("=D10+E10")]
]

const outputsSheetPreview: SpreadsheetData = [
  [headerCell("Output"), headerCell("Value"), headerCell("Formula"), headerCell("Meaning"), headerCell("Source")],
  [textCell("SelectedUnitsSold"), numberCell(35), formulaTextCell("=XLOOKUP(SelectedScenario,Drivers[Scenario],Drivers[UnitsSold])"), textCell("Scenario demand"), textCell("Drivers sheet")],
  [textCell("SelectedCOGS"), numberCell(690), formulaTextCell("=XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[COGS])"), textCell("Scenario+method COGS"), textCell("MethodSummary sheet")],
  [textCell("SelectedEndingInventory"), numberCell(460), formulaTextCell("=XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[EndingInventory])"), textCell("Scenario+method EI"), textCell("MethodSummary sheet")],
  [textCell("GAFS"), numberCell(1150), textCell("Input constant"), textCell("Cost conservation target"), textCell("Shared inventory layers")]
]

const kpiSheetPreview: SpreadsheetData = [
  [headerCell("KPI"), headerCell("Value"), headerCell("Formula"), headerCell("Interpretation"), headerCell("Check")],
  [textCell("Revenue"), numberCell(1400), formulaTextCell("=SelectedUnitsSold*UnitSellingPrice"), textCell("Sales dollars"), textCell("UnitsSold x price")],
  [textCell("Gross Margin %"), numberCell(50.7), formulaTextCell("=(Revenue-SelectedCOGS)/Revenue"), textCell("Profitability"), textCell("Format as percent")],
  [textCell("Average Inventory"), numberCell(320), formulaTextCell("=(BeginningInventory+SelectedEndingInventory)/2"), textCell("Inventory base"), textCell("Used for turnover")],
  [textCell("Inventory Turnover"), numberCell(2.16), formulaTextCell("=SelectedCOGS/AverageInventory"), textCell("Velocity"), textCell("Higher means faster flow")],
  [textCell("Days on Hand"), numberCell(169.3), formulaTextCell("=365/InventoryTurnover"), textCell("Holding duration"), textCell("Lower means faster flow")]
]

const checksSheetPreview: SpreadsheetData = [
  [headerCell("Check"), headerCell("Status"), headerCell("Formula Pattern"), headerCell("Purpose"), headerCell("Action")],
  [textCell("GAFS Balance"), textCell("Balanced"), formulaTextCell("=IF(ABS((SelectedCOGS+SelectedEndingInventory)-GAFS)<0.01,\"Balanced\",\"Check\")"), textCell("Cost conservation"), textCell("Debug lookup source row if failed")],
  [textCell("SelectedKey Found"), textCell("OK"), formulaTextCell("=IFNA(XLOOKUP(SelectedKey,MethodSummary[Key],MethodSummary[COGS]),\"Missing Key\")"), textCell("Lookup health"), textCell("Fix key text mismatch")],
  [textCell("Units Sold Valid"), textCell("OK"), formulaTextCell("=IF(SelectedUnitsSold>0,\"OK\",\"Check Drivers\")"), textCell("Scenario setup"), textCell("Review Drivers row")]
]

const dashboardSheetPreview: SpreadsheetData = [
  [headerCell("Tile"), headerCell("Displayed Value"), headerCell("Source Cell"), headerCell("Purpose"), headerCell("Check")],
  [textCell("Scenario"), textCell("Base"), textCell("=SelectedScenario"), textCell("Context"), textCell("Matches selector")],
  [textCell("Method"), textCell("FIFO"), textCell("=SelectedMethod"), textCell("Context"), textCell("Matches selector")],
  [textCell("COGS"), numberCell(690), textCell("=Outputs!B3"), textCell("Primary cost metric"), textCell("Matches Outputs")],
  [textCell("Turnover"), numberCell(2.16), textCell("=KPI!B5"), textCell("Velocity metric"), textCell("Matches KPI")],
  [textCell("Days on Hand"), numberCell(169.3), textCell("=KPI!B6"), textCell("Holding metric"), textCell("Matches KPI")]
]

const sheetPreviews = [
  { title: "Inputs", note: "Control cells for scenario, method, and key.", data: inputsSheetPreview, labels: ["A", "B", "C", "D", "E"] },
  { title: "Drivers", note: "Scenario assumptions table.", data: driversSheetPreview, labels: ["A", "B", "C", "D", "E"] },
  { title: "MethodSummary", note: "One row per scenario+method output.", data: summarySheetPreview, labels: ["A", "B", "C", "D", "E", "F"] },
  { title: "Outputs", note: "Lookup chain from selectors to current outputs.", data: outputsSheetPreview, labels: ["A", "B", "C", "D", "E"] },
  { title: "KPI", note: "Turnover and days-on-hand formula chain.", data: kpiSheetPreview, labels: ["A", "B", "C", "D", "E"] },
  { title: "Checks", note: "Visible trust checks before recommendation.", data: checksSheetPreview, labels: ["A", "B", "C", "D", "E"] },
  { title: "Dashboard", note: "Executive display linked to Outputs + KPI.", data: dashboardSheetPreview, labels: ["A", "B", "C", "D", "E"] }
]

export default function Unit07Lesson06Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Workbook Sprint</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Build the Scenario-Switch Workbook by Sheet</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Build a selector-driven workbook where scenario and method choices flow into outputs, KPI tiles, and checks.
              This phase is assessed on lookup chain correctness and KPI interpretation.
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
                <a className="underline text-orange-700" href="/resources/unit07-lesson06-student.xlsx" download>
                  Download unit07-lesson06-student.xlsx
                </a>
              </p>
              <p className="text-sm text-slate-600">
                Workbook tabs: Inputs, Drivers, MethodSummary, Outputs, KPI, Checks, Dashboard.
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
                Formulas are displayed as text so you can inspect structure before building in Excel.
              </p>
              <div className="space-y-4">
                {sheetPreviews.map((sheet) => (
                  <Card key={sheet.title} className="border-slate-200">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-slate-900">{sheet.title} Sheet</CardTitle>
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
                  <p className="font-semibold">Block 1: Inputs + Drivers</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Create scenario and method dropdown controls.</li>
                    <li>Create the Drivers table with UnitsSold per scenario.</li>
                    <li>Build SelectedKey from scenario + method.</li>
                  </ol>
                  <p className="mt-2 text-sm">Checkpoint: changing controls updates SelectedKey correctly.</p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 2: MethodSummary + Outputs</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Build scenario+method summary rows for COGS and Ending Inventory.</li>
                    <li>Lookup SelectedUnitsSold from Drivers by scenario.</li>
                    <li>Lookup SelectedCOGS and SelectedEndingInventory from MethodSummary by key.</li>
                  </ol>
                  <p className="mt-2 text-sm">
                    Checkpoint: Base|FIFO returns COGS 690 and Ending Inventory 460.
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 3: KPI Sheet</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Calculate revenue from units sold and selling price.</li>
                    <li>Calculate gross margin, average inventory, turnover, and days on hand.</li>
                    <li>Format KPI outputs for dashboard readability.</li>
                  </ol>
                  <p className="mt-2 text-sm">
                    Checkpoint: Base|FIFO turnover ≈ 2.16x and days on hand ≈ 169.3.
                  </p>
                </div>

                <div className="p-3 bg-white rounded border border-green-200">
                  <p className="font-semibold">Block 4: Checks + Dashboard</p>
                  <ol className="list-decimal list-inside text-sm space-y-1 mt-1">
                    <li>Add visible checks for GAFS balance and lookup health.</li>
                    <li>Link dashboard tiles to Inputs, Outputs, and KPI cells.</li>
                    <li>Verify dashboard updates from only selector changes.</li>
                  </ol>
                  <p className="mt-2 text-sm">Checkpoint: GAFS check shows Balanced for every selected pair.</p>
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
                <li>Selectors drive one lookup chain from Inputs to Dashboard.</li>
                <li>MethodSummary includes all scenario+method rows with correct outputs.</li>
                <li>KPI calculations update correctly for any selected pair.</li>
                <li>Checks surface model issues before recommendations are made.</li>
                <li>You can explain the formula chain sheet-by-sheet in plain language.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Professional Expectations (Non-Scored)</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Use clear names for control and output cells.</li>
                <li>Keep structured references consistent across sheets.</li>
                <li>Add validation and error handling as standard workbook quality.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-blue-800">Fallback</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <p>Use the teacher workbook to compare your sheet structure if your lookups fail:</p>
              <p className="mt-2">
                <a className="underline text-blue-700" href="/resources/unit07-lesson06-teacher.xlsx" download>
                  Download unit07-lesson06-teacher.xlsx
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
