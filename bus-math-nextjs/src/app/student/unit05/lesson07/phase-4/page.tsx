import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit3, ArrowRight, FileText } from "lucide-react"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[3]

const transferChecklist = [
  { feature: "Payroll calculation logic", mustTransfer: true, note: "Gross → deductions → net" },
  { feature: "Tax table lookup structure", mustTransfer: true, note: "XLOOKUP with IFNA/IFERROR" },
  { feature: "Bank reconciliation tie-outs", mustTransfer: true, note: "Register = bank within $0.01" },
  { feature: "Dashboard with recommendation", mustTransfer: true, note: "One clear claim + evidence" },
  { feature: "Validation rules", mustTransfer: true, note: "Catch negative hours, bad rates, stale dates" },
  { feature: "Structured references", mustTransfer: true, note: "Charts bind to Tables, not fixed ranges" },
  { feature: "Same employee data", mustTransfer: false, note: "Your team gets its own dataset in Lesson 08" }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-orange-100 text-orange-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 4: Polish and Transfer Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Complete Weak Spots & Identify Transfer Items</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              With the shared workbook still open, complete any weak spots you found in the audit. Then write one
              recommendation with evidence, one risk statement, and identify what must transfer to your team's project.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-white">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Edit3 className="h-5 w-5" />
                Your Tasks (Continue in the shared workbook)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-900 space-y-4">
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>Fix any weak spots</strong> you identified in Phase 3. Examples:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Add missing validation rules</li>
                    <li>Document a timing difference in reconciliation</li>
                    <li>Ensure charts use structured references</li>
                  </ul>
                </li>
                <li>
                  <strong>Write one recommendation</strong> in the Dashboard:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>State a clear claim (e.g., "Payroll is on track for Base scenario")</li>
                    <li>Cite specific evidence (cell references with numbers)</li>
                  </ul>
                </li>
                <li>
                  <strong>Add one risk statement</strong>:
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>What's one thing that could go wrong or needs monitoring?</li>
                    <li>Example: "If overtime exceeds 10% of total hours, labor costs exceed budget"</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Recommendation Format
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <p className="mb-3">Your recommendation should follow this format:</p>
              <div className="bg-white p-4 rounded border border-amber-200 font-mono text-sm">
                <p className="font-semibold mb-2">Recommendation: [Your claim here]</p>
                <p className="mb-2">Evidence:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>[Evidence item 1: specific number + cell reference]</li>
                  <li>[Evidence item 2: specific number + cell reference]</li>
                  <li>[Evidence item 3: specific number + cell reference]</li>
                </ul>
                <p className="mt-2 mb-2">Risk Statement:</p>
                <p className="ml-4">[What could go wrong or needs monitoring]</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                What Must Transfer to Your Project
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p className="mb-3">In Lessons 08–10, your team will build your own workbook with your own data. These features must transfer:</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-blue-200">
                      <th className="text-left py-2 pr-4">Feature</th>
                      <th className="text-left py-2 pr-4">Must Transfer?</th>
                      <th className="text-left py-2">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transferChecklist.map((item) => (
                      <tr key={item.feature} className="border-b border-blue-100">
                        <td className="py-2 pr-4 font-medium">{item.feature}</td>
                        <td className="py-2 pr-4">
                          {item.mustTransfer ? (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Yes</span>
                          ) : (
                            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">No</span>
                          )}
                        </td>
                        <td className="py-2">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm">
                <strong>What changes in Lesson 08:</strong> Each team receives its own payroll dataset. The structure stays the same; the data is different.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900">Self‑Assessment: Definition of Done</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-900">
              <p className="mb-2">Before moving to Phase 5, confirm you've completed:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Payroll calculations accurate for all 10 employees</li>
                <li>Reconciliation tie‑outs pass (register = bank within $0.01)</li>
                <li>Executive summary with one recommendation + evidence + risk</li>
                <li>Validation rules catch invalid inputs</li>
                <li>Charts bind to Tables (structured references)</li>
                <li>Clear error messages on lookup failures</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
