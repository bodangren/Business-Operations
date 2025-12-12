import SpreadsheetWrapper, { type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, Link2, Percent, Users } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[2] // Guided Practice phase

const bracketPracticeData: SpreadsheetData = [
  [
    { value: "Lower Bound", readOnly: true },
    { value: "Upper Bound", readOnly: true },
    { value: "Base Tax", readOnly: true },
    { value: "% over Lower", readOnly: true },
    { value: "Row Formula", readOnly: true }
  ],
  [
    { value: 0, readOnly: false },
    { value: 11925, readOnly: false },
    { value: 0, readOnly: false },
    { value: 0.1, readOnly: false },
    { value: "'=MAX($B$10-A2,0)*D2 + C2", readOnly: true }
  ],
  [
    { value: 11925, readOnly: false },
    { value: 48475, readOnly: false },
    { value: 1192.5, readOnly: false },
    { value: 0.12, readOnly: false },
    { value: "'=MAX($B$10-A3,0)*D3 + C3", readOnly: true }
  ],
  [
    { value: 48475, readOnly: false },
    { value: 103350, readOnly: false },
    { value: 5578.5, readOnly: false },
    { value: 0.22, readOnly: false },
    { value: "'=MAX($B$10-A4,0)*D4 + C4", readOnly: true }
  ],
  [
    { value: 103350, readOnly: false },
    { value: 197300, readOnly: false },
    { value: 17651, readOnly: false },
    { value: 0.24, readOnly: false },
    { value: "'=MAX($B$10-A5,0)*D5 + C5", readOnly: true }
  ],
  [
    { value: 197300, readOnly: false },
    { value: 250525, readOnly: false },
    { value: 40199, readOnly: false },
    { value: 0.32, readOnly: false },
    { value: "'=MAX($B$10-A6,0)*D6 + C6", readOnly: true }
  ],
  [
    { value: 250525, readOnly: false },
    { value: 626350, readOnly: false },
    { value: 57231, readOnly: false },
    { value: 0.35, readOnly: false },
    { value: "'=MAX($B$10-A7,0)*D7 + C7", readOnly: true }
  ],
  [
    { value: 626350, readOnly: false },
    { value: "and up", readOnly: false },
    { value: 188769.75, readOnly: false },
    { value: 0.37, readOnly: false },
    { value: "'=MAX($B$10-A8,0)*D8 + C8", readOnly: true }
  ],
  [
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true },
    { value: "", readOnly: true }
  ],
  [
    { value: "Taxable Income", readOnly: true },
    { value: 65000, readOnly: false },
    { value: "", readOnly: true },
    { value: "Selected Bracket", readOnly: true },
    { value: "'=XLOOKUP(B10,A2:A8,E2:E8,\"No match\",1)" , readOnly: true }
  ]
]

export default function Phase3Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900">Guided Practice: Fill the Bracket Table</h2>
          <p>
            Work through the steps below so your workbook can determine the correct bracket and compute the progressive tax 
            with one formula. The interactive sheet mirrors the structure you should mimic in Excel.
          </p>
        </div>

        <Card className="border-slate-200 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <Badge className="bg-white text-slate-900">Selector Primer</Badge>
              Step 0 – Tie the Selector to Named Tables
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-slate-800 text-sm">
            <p>Before you type any brackets, set up the drop-down that controls which filing status table feeds the lookup.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Name each bracket range from Lesson 2 (e.g., <span className="font-mono">Fed_Single_2025</span>, <span className="font-mono">Fed_Married_2025</span>).</li>
              <li>Create a named list like <span className="font-mono">TaxTable_List</span> that references those names.</li>
              <li>Apply <strong>Data Validation → List</strong> to cell B4 so students can only choose one of the approved tables.</li>
            </ul>
            <div className="bg-white p-3 rounded border font-mono text-xs">
              =LET(selected, INDIRECT($B$4), XLOOKUP($B$10, CHOOSECOLS(selected,1), CHOOSECOLS(selected,5), "No match", 1))
            </div>
            <p>This formula shows how the selector text (cell B4) converts to the appropriate bracket table through <code>INDIRECT</code>.</p>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Layers className="h-5 w-5" />
              Step 1 – Enter the Bracket Boundaries
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-blue-900">
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Copy each lower bound and upper bound directly from the IRS table.</li>
              <li>Use exact dollars (no commas) so lookup math stays clean.</li>
              <li>For the top bracket leave upper bound blank or type "and up".</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Percent className="h-5 w-5" />
              Step 2 – Add Base Tax + Marginal Rate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-green-900 text-sm">
            <p>The <strong>Base Tax</strong> column holds the IRS amount that already covers previous brackets.</p>
            <p>The <strong>% over Lower</strong> column stores the decimal rate (22% → 0.22). Freeze decimals to four places.</p>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Link2 className="h-5 w-5" />
              Step 3 – Write the Row Formula
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900 text-sm">
            <p>Use <code>MAX(TaxableIncome - LowerBound, 0)</code> so rows above the current bracket return zero.</p>
            <div className="bg-white p-3 rounded border font-mono text-xs">
              =MAX($B$8 - A4, 0) * D4 + C4
            </div>
            <p>Copy the formula down the table. Only one row will produce a positive amount when the taxable income lands inside its range.</p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <Badge className="bg-slate-100 text-slate-800">Demo Sheet</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-slate-700 text-sm mb-3">
              Edit the sheet below to see how the row formulas react. Try changing the taxable income in cell B8 and watch 
              which row displays a non-zero result.
            </p>
            <div className="bg-white p-4 rounded border">
              <SpreadsheetWrapper initialData={bracketPracticeData} className="w-full" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Partner Debrief (5 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-orange-900 text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Explain to a partner why the <code>MAX</code> wrapper keeps earlier rows at zero.</li>
              <li>Show how you'd reference the winning row inside <code>XLOOKUP</code> or <code>INDEX/MATCH</code>.</li>
              <li>Swap taxable incomes (one low, one high) and verify you land on different brackets.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}
