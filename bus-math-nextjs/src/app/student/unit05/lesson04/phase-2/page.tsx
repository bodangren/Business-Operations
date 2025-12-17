import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, AlertTriangle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[1]

const workbookSentences = [
  {
    id: "bp-employee",
    text: "The EmployeeList table is the {blank} source for names, roles, pay types, and departments that every other sheet references.",
    answer: "single",
    hint: "Only one place to edit"
  },
  {
    id: "bp-xlookup",
    text: "{blank} pulls each employee's row into the GrossPayRegister so you never retype rates or departments.",
    answer: "XLOOKUP",
    hint: "Modern lookup function"
  },
  {
    id: "bp-if",
    text: "Nested {blank} statements make sure hourly rows use hours and rates, salary rows use annual pay, and commission rows use the sales inputs.",
    answer: "IF",
    hint: "Decision logic"
  },
  {
    id: "bp-zero",
    text: "We add the hourly, salary, and commission calculations together because unused branches return {blank}.",
    answer: "0",
    hint: "Neutral number"
  },
  {
    id: "bp-sumif",
    text: "{blank} totals power the summary block so you can see gross payroll by pay type or department instantly.",
    answer: "SUMIF",
    hint: "Conditional sum"
  },
  {
    id: "bp-pivot",
    text: "A pivot table plus a bar chart let you explain payroll by {blank} to decision-makers without new formulas.",
    answer: "department",
    hint: "Organizational unit"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">📚 Phase 2: Blueprinting the Workbook</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Architecture Before Formulas</h2>
                <p className="text-lg leading-relaxed">
                  Before we touch any cell, map the workflow. The <strong>EmployeeList</strong> sheet is the database. The
                  <strong>GrossPayRegister</strong> sheet is the engine that pulls whatever it needs with XLOOKUP. IF statements decide
                  which math matters for each row, and the results flow into a summary block, bar chart, and pivot table.
                  When these links are in place, Sarah can quote payroll for fourteen new hires in minutes instead of hours.
                </p>
              </div>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Workbook Blueprint
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-900 text-sm space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Sheet Roles</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>EmployeeList:</strong> Turn it into a table called <code>tblEmployees</code>. Columns include ID, Name, Role, Type, Hourly Rate, Annual Salary, Commission %, Default Hours, Department.</li>
                      <li><strong>GrossPayRegister:</strong> Structured table with inputs for the current pay period plus columns that pull data from <code>tblEmployees</code>.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Lookup Map</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Column A-D: `=XLOOKUP([@Employee],tblEmployees[Name],tblEmployees[Name])`, Role, Department, and Type.</li>
                      <li>Hourly Rate (G): XLOOKUP the hourly column. Salary (J) and Commission inputs (L-N) use the same pattern.</li>
                      <li>IF logic ensures hourly workers ignore salary inputs and vice versa.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Gross Pay Formula</h3>
                    <pre className="bg-white p-3 rounded border font-mono text-xs whitespace-pre-wrap">
=IF([@Type]="Hourly",([@Regular\ Hours]*[@Hourly\ Rate])+([@Overtime\ Hours]*[@Hourly\ Rate]*1.5)+[@Tips],0)
+IF([@Type]="Salary",IF([@Pay\ Periods/Yr]&gt;0,[@Annual\ Salary]/[@Pay\ Periods/Yr],0),0)
+IF([@Type]="Commission",([@Commission\ Sales]*[@Commission\ %])+[@Draw],0)
                    </pre>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800">Analysis Layer</CardTitle>
                </CardHeader>
                <CardContent className="text-green-900 text-sm space-y-2">
                  <p>Once gross pay is correct, reuse it for analysis:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Summary block: `SUMIF($C:$C,"Hourly",$O:$O)` for hourly, swap the criteria for salary/commission.</li>
                    <li>Bar chart: highlight the summary rows and insert a clustered bar chart titled “Gross Pay by Type”.</li>
                    <li>Pivot table: insert from the GrossPayRegister table, place Department on Rows and Gross Pay on Values.</li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-green-200 bg-green-50">
                <AlertTriangle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Do this now:</strong> Convert both sheets to tables before you start linking them. Every formula you build in the next phase assumes structured references (e.g., <code>[@Employee]</code> and <code>tblEmployees[Hourly Rate]</code>).
                </AlertDescription>
              </Alert>

              <FillInTheBlank
                sentences={workbookSentences}
                title="Vocabulary Check: Linked Payroll Systems"
                description="Finish each statement so you can explain the workbook design to Sarah."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}
