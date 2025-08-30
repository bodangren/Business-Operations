import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Payroll Automation Mastery Challenges</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download the advanced dataset and complete the challenges. Your model must update correctly when
              rows change and should surface validation flags clearly.
            </p>
            <p className="text-base">
              <a className="underline text-orange-800" href="/resources/unit05-payroll-automation-advanced-practice.csv" download>
                Download: unit05-payroll-automation-advanced-practice.csv
              </a>
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Challenges (in order)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-800">
              <ol className="list-decimal list-inside space-y-1">
                <li>Map EmployeeID → PayRate and State using <span className="font-mono">XLOOKUP</span> with <span className="font-mono">if_not_found</span>.</li>
                <li>Compute base pay and overtime pay using <span className="font-mono">SUMPRODUCT</span> and <span className="font-mono">LET</span>.</li>
                <li>Implement State dropdowns and block negative hours with Data Validation.</li>
                <li>Add audit flags: missing IDs, negative hours, stale PayDate (&gt;30 days old).</li>
                <li>Build a one‑page summary: total Gross, Net, and employer taxes by PayDate.</li>
                <li>Switch pay frequency (Weekly/Biweekly/Monthly) with <span className="font-mono">SWITCH</span> and show the effect.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Self‑Assessment Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-yellow-900">
              <ul className="list-disc list-inside">
                <li>All lookups use tables; no fixed A2:A200 ranges</li>
                <li>if_not_found used to prevent #N/A cascades</li>
                <li>Overtime logic correct for edge cases (39.5h, 40h, 60h)</li>
                <li>Validation prevents negative hours and blank EmployeeID</li>
                <li>Audit flags visible at the top of the sheet</li>
                <li>Summary updates as rows/employees change</li>
                <li>Notes panel explains formulas and business impact</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

