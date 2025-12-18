import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import SpreadsheetWrapper, { type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import { Layers, ListChecks, Clock4 } from "lucide-react"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

const scheduleDemo: SpreadsheetData = [
  [
    { value: "Block", readOnly: true },
    { value: "Sun", readOnly: true },
    { value: "Mon", readOnly: true },
    { value: "Tue", readOnly: true },
    { value: "Wed", readOnly: true },
    { value: "Thu", readOnly: true },
    { value: "Fri", readOnly: true },
    { value: "Sat", readOnly: true }
  ],
  [
    { value: "6a-10a", readOnly: true },
    { value: "CF01" },
    { value: "CF01" },
    { value: "", readOnly: false },
    { value: "CF03" },
    { value: "CF03" },
    { value: "CF03" },
    { value: "CF03" }
  ],
  [
    { value: "10a-2p", readOnly: true },
    { value: "MK01" },
    { value: "MK04" },
    { value: "MK04" },
    { value: "MK04" },
    { value: "MK02" },
    { value: "MK02" },
    { value: "MK02" }
  ],
  [
    { value: "2p-6p", readOnly: true },
    { value: "BK01" },
    { value: "BK02" },
    { value: "BK02" },
    { value: "BK02" },
    { value: "BK02" },
    { value: "SV01" },
    { value: "SV01" }
  ],
  [
    { value: "6p-close", readOnly: true },
    { value: "MK03" },
    { value: "MK03" },
    { value: "MK03" },
    { value: "MK03" },
    { value: "MK03" },
    { value: "MK03" },
    { value: "MK03" }
  ],
  [
    { value: "Hours Helper", readOnly: true },
    { value: "=IF(B2=\"\",0,4)", readOnly: true },
    { value: "=IF(C2=\"\",0,4)", readOnly: true },
    { value: "=IF(D2=\"\",0,4)", readOnly: true },
    { value: "=IF(E2=\"\",0,4)", readOnly: true },
    { value: "=IF(F2=\"\",0,4)", readOnly: true },
    { value: "=IF(G2=\"\",0,4)", readOnly: true },
    { value: "=IF(H2=\"\",0,4)", readOnly: true }
  ]
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-violet-100">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-4 text-center">
          <Badge className="bg-blue-100 text-blue-900 text-lg px-4 py-2">
            🧪 Phase 3: Guided Practice
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Build the Schedule-to-Pay Engine Step by Step</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Follow the steps below with your teacher. Each card mirrors the exact workflow you will replicate in Excel.
            Keep the spreadsheet open as you read so you can pause, copy, and test.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Layers className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 1 — Extend the Roster</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Name the table <span className="font-mono">tblRoster</span> and add columns: <strong>ShiftBlockPreference</strong>, <strong>MaxHours</strong>.</li>
                <li>Use data validation lists inside the table (e.g., Department dropdown) so entries stay consistent.</li>
                <li>Add a helper column <strong>IsOvertimeEligible</strong> (TRUE/FALSE). This will control the Hours sheet logic.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <ListChecks className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 2 — Wire the WeeklySchedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ol className="list-decimal list-inside space-y-1">
                <li>Label time blocks down column A (use <span className="font-mono">6a-10a</span>, <span className="font-mono">10a-2p</span>, etc.).</li>
                <li>Apply <strong>Format as Table</strong> → name it <span className="font-mono">tblSchedule</span>.</li>
                <li>Set data validation: <span className="font-mono">=tblRoster[EmployeeID]</span> for each cell.</li>
                <li>Conditional formatting rules:
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Duplicate IDs in the same column = red (double-booked day).</li>
                    <li>Blank high-priority blocks (like 6a-10a) = gold warning.</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Clock4 className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Step 3 — Translate Blocks into Hours</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <p>
                Create a helper table called <span className="font-mono">tblHoursRaw</span> beneath the grid. Each row references a block and
                multiplies the occupied cells by the block length.
              </p>
              <div className="bg-slate-100 border rounded p-2 font-mono text-xs">
                =LET(block,$A2,len,VALUE(MID(block,4,2))-VALUE(LEFT(block,2)),
                hours,len,
                ID,B2,
                IF(ID="",0,hours))
              </div>
              <p>Push the helper rows into <span className="font-mono">SUMIFS</span> for the official Hours &amp; Gross sheet.</p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Demo: Schedule Grid</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-900">
              <p className="text-sm">
                Edit the cells below to see how a single dropdown change flows into the Hours Helper row. Each filled cell
                represents one 4-hour block. Try swapping IDs or leaving a gap to see how the helper returns 0.
              </p>
              <SpreadsheetWrapper initialData={scheduleDemo} className="w-full" />
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Teacher Checkpoints</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-indigo-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Roster table named and formatted (no white cells outside the table).</li>
                <li>Schedule grid dropdowns only show IDs from tblRoster.</li>
                <li>SUMIFS formula drafted on the Hours sheet: <span className="font-mono">=SUMIFS(tblHoursRaw[Hours], tblHoursRaw[EmployeeID], A2)</span>.</li>
              </ul>
              <p>Raise your hand when all three are complete so the instructor can certify alignment before moving on.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
