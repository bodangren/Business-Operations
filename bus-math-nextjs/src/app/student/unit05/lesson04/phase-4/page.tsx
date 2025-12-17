import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Rocket, Target, CheckCircle, Users, BarChart3 } from "lucide-react"
import { payrollTemplate } from "@/components/spreadsheet/SpreadsheetTemplates"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Independent Build Sprint</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">Deliver the Whole Gross Pay Control Center</h2>
                <p className="text-lg leading-relaxed">
                  You now have the blueprint. During this block you will finish your own workbook using the sample data file or your team roster. Your submission needs four receipts: the linked GrossPayRegister, the SUMIF summary, the clustered bar chart, and a pivot table showing payroll by department.
                </p>
              </div>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Deliverable Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>EmployeeList table named <code>tblEmployees</code> contains at least four employees across two departments.</li>
                    <li>GrossPayRegister table pulls columns via XLOOKUP and uses the additive IF formula for Gross Pay.</li>
                    <li>Summary block (Total, Hourly, Salary, Commission, Overtime Count, Average Cost) + clustered bar chart.</li>
                    <li>Pivot table: Departments on rows, Gross Pay on values, formatted as currency.</li>
                    <li>Screenshot or PDF that shows both the table and summary visual for upload.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800">Use the Practice Template</CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-3">
                  <p>Open <a className="text-orange-700 underline" href="/resources/unit05-lesson04-gross-pay-register.xlsx" download>unit05-lesson04-gross-pay-register.xlsx</a> if you want a head start. It already includes the EmployeeList sheet and the skeleton of the register.</p>
                  <p>Prefer to start from scratch? Use the {payrollTemplate.name} structure below as your layout reference.</p>
                </CardContent>
              </Card>

              <div className="my-6">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800">{payrollTemplate.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-orange-800 text-sm space-y-2">
                    <p>{payrollTemplate.description}</p>
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription className="text-blue-800">
                        Use the template as a reminder of the required columns; replace the calculations with your own lookups and IF logic.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Analysis Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Create the clustered bar chart titled “Gross Pay by Type”.</li>
                    <li>Create the pivot table and rename the sheet “Dept Pivot”.</li>
                    <li>Write one sentence interpreting the pivot (e.g., “Retail payroll makes up 62% of this cycle”). You’ll need this in Phase 6.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Self-Audit Before Turning In
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Change a pay type from Hourly → Salary. Does the Gross Pay update correctly?</li>
                    <li>Update an employee’s department. Does the pivot refresh with the new totals?</li>
                    <li>Switch the EmployeeList salary for one person. Do the chart bars jump to the new value?</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Peer Check (optional but encouraged)
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-900 text-sm space-y-1">
                  <p>Swap workbooks for five minutes:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Use their slicer/pivot filters to confirm departments total correctly.</li>
                    <li>Try a new hire scenario by inserting a row in EmployeeList. Does the register pick it up?</li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-orange-200 bg-orange-50">
                <Rocket className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Save both files:</strong> Keep the workbook (.xlsx) plus a screenshot/PDF in your project folder. Lesson 05 starts by pulling taxable wages from this sheet.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}
