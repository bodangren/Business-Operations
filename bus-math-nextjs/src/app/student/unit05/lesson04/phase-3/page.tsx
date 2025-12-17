import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, CheckSquare } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">🔧 Phase 3: Guided Build</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">Link Every Piece Before You Multiply</h2>
                <p className="text-lg leading-relaxed">
                  This is the live build. Follow the numbered steps so your EmployeeList powers the GrossPayRegister without a single copy/paste. Pay attention to absolute vs. structured references and verify each formula before moving on.
                </p>
              </div>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <CheckSquare className="h-5 w-5" />
                    Step-by-Step Walkthrough
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 text-sm space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">1. Promote the Roster to a Table</h3>
                    <p>Highlight the EmployeeList data → Insert &gt; Table → name it <code>tblEmployees</code>. This keeps XLOOKUP ranges dynamic.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">2. Pull Base Data with XLOOKUP</h3>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Column A (Employee): <code>=XLOOKUP([@Employee],tblEmployees[Name],tblEmployees[Name])</code></li>
                      <li>Column B (Role) and C (Type) and D (Department) follow the same pattern.</li>
                      <li>Column G (Hourly Rate) pulls <code>tblEmployees[Base Rate/Salary]</code>; Column J (Annual Salary) pulls the same column because salaried staff store annual pay there.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">3. Write IF Blocks Once</h3>
                    <p>Use the additive formula shown in Phase 2. Test it by temporarily changing the Type values; hourly employees should ignore salary data and vice versa.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">4. Build the Summary + Chart</h3>
                    <p>Create the SUMIF block (Total, Hourly, Salary, Commission) and insert a clustered bar chart referencing those cells.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">5. Insert the Pivot Table</h3>
                    <p>Insert → Pivot Table → select the GrossPayRegister table → place Department in Rows and Gross Pay in Values. Format as currency.</p>
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-purple-900 mb-3">Interactive Checklist</h3>
                <p>Use the tool below as a build tracker. As you complete each lookup, IF block, chart, or pivot task, mark it so you can show evidence of progress.</p>
              </div>

              <div className="my-8">
                <ErrorCheckingSystem />
              </div>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Partner Debrief
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-purple-900">
                  <p className="font-medium">3-minute share-out:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Show your partner the Gross Pay formula bar and explain which part corresponds to each pay type.</li>
                    <li>Flip the Type for one employee and confirm the other pay branches drop to zero.</li>
                    <li>Verify that the summary totals update when you edit the EmployeeList table.</li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-purple-200 bg-purple-50">
                <Wrench className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-purple-800">
                  <strong>Debug tip:</strong> If your SUMIF results show <code>#VALUE!</code>, double-check the criteria range. When you convert the register to a table, the range becomes <code>GrossPayRegister[Type]</code> instead of absolute columns.
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
