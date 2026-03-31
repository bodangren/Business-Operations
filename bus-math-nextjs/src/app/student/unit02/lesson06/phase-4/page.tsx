import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle2, AlertCircle, FileText } from "lucide-react"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson06Data} 
        phase={currentPhase}
        phases={lesson06Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Workbook Sprint
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Polish the Wizard
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Open your Lesson 5 workbook and add validation, controls, and an audit panel.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Starting Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                Open the workbook you built in Lesson 5. If you need a fresh start, download the starter.
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
                  href="/resources/unit02-lesson05-student.xlsx"
                  download
                >
                  <Download className="h-4 w-4" />
                  Your Lesson 5 Workbook
                </a>
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  href="/resources/unit02-lesson06-student.xlsx"
                  download
                >
                  <Download className="h-4 w-4" />
                  Lesson 6 Starter: unit02-lesson06-student.xlsx
                </a>
              </div>
              <p className="text-sm text-orange-700">
                <strong>Required incoming state:</strong> Your Lesson 5 workbook with named ranges, adjusting entries block, verification checkpoint, Adjusted TB, and Run Close button.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Reference Model: Layout Guide
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                Your finished workbook should have these new sections added to the Lesson 5 structure.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-blue-300 bg-white rounded">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">New Section</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Location</th>
                      <th className="border border-blue-300 px-3 py-2 text-left text-blue-900">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-blue-800 text-sm">
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Validation Rules</td>
                      <td className="border border-blue-300 px-3 py-2">Next to each input cell</td>
                      <td className="border border-blue-300 px-3 py-2">Flag invalid inputs before the close runs</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Period Selector</td>
                      <td className="border border-blue-300 px-3 py-2">Top of Inputs sheet</td>
                      <td className="border border-blue-300 px-3 py-2">Dropdown to select close period without editing formulas</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Audit Panel</td>
                      <td className="border border-blue-300 px-3 py-2">Top-right of Inputs sheet</td>
                      <td className="border border-blue-300 px-3 py-2">Shows period, inputs used, outputs, verification status</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-3 py-2 font-semibold">Updated Button Flow</td>
                      <td className="border border-blue-300 px-3 py-2">Same button, enhanced macro</td>
                      <td className="border border-blue-300 px-3 py-2">Checks validation before running, updates audit panel</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm"
                  href="/resources/unit02-lesson06-teacher.xlsx"
                  download
                >
                  <Download className="h-4 w-4" />
                  Teacher Reference: unit02-lesson06-teacher.xlsx
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Build Sequence with Verification Checkpoints
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Add Validation Rules to Each Input</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        For each input cell (Supplies, PrepaidInsurance, etc.), add a Data Validation rule. Set minimum to 0, maximum to the account's unadjusted balance. Use conditional formatting to highlight violations in red.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Type a negative number. The cell should show a red border or error message.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Build the Period Selector</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Create a dropdown (Data Validation → List) with options: "March", "April", "May". Link it to a named cell called SelectedPeriod. Your formulas should reference this cell, not hard-coded month names.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Change the dropdown. Any formulas that reference SelectedPeriod should update.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Create the Audit Panel</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Build a small table at the top-right showing: Period (from SelectedPeriod), Total Adjustments (sum), Verification Status (OK/ERROR), and CloseStatus (Complete/Error). Use conditional formatting for green/red indicators.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Run the close. The audit panel should update with the current period's data and show green indicators.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-100 p-5 rounded-lg border border-emerald-300">
                  <div className="flex items-start gap-3">
                    <div className="bg-emerald-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold text-emerald-900">Update the Button Flow</h4>
                      <p className="text-sm text-emerald-800 mt-1">
                        Modify the macro to check validation before running. If any validation flag is active, show a message and stop. If all clear, run the close and update the audit panel.
                      </p>
                      <div className="bg-emerald-200 p-2 rounded mt-2 text-xs">
                        <strong>Checkpoint:</strong> Enter an invalid input and click the button. It should refuse to run and tell you why.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-green-800">
                Your workbook is complete when all of the following are true:
              </p>
              <ul className="text-sm text-green-800 space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Validation rules on every input cell (minimum 5 rules)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Period selector dropdown that drives formulas without editing them</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Audit panel showing period, total adjustments, verification status, and CloseStatus</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Button checks validation before running and refuses to proceed on errors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Conditional formatting makes violations and status visible at a glance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Workbook saved as .xlsm with all changes preserved</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                If You Get Stuck
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-red-800">
                <strong>Validation not triggering?</strong> Make sure Data Validation is applied to the correct cell range. Select the cell → Data tab → Data Validation → check the settings.
              </p>
              <p className="text-red-800">
                <strong>Dropdown does not change anything?</strong> The dropdown must be linked to a cell that your formulas reference. Check that your formulas use the named cell, not a hard-coded value.
              </p>
              <p className="text-red-800">
                <strong>Audit panel shows wrong values?</strong> Check that each audit panel cell references the correct named range or calculation block. Use the Name Manager to verify references.
              </p>
              <p className="text-red-800">
                If none of these help, open the teacher reference workbook and compare your layout step by step.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
