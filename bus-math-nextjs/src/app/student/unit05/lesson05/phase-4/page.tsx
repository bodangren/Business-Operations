import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ClipboardList, Target, TrendingUp } from "lucide-react"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

const deliverables = [
  "Roster updated with at least 10 employees, availability, and overtime flags",
  "WeeklySchedule filled for all 7 days × 4 blocks with zero empty priority slots",
  "Hours & Gross sheet calculating TotalHours, OvertimeHours, GrossPay per ID",
  "Conditional formatting in place: orange when >38 hours, red when over 40",
  "Summary table showing total hours by Department and top overtime risk"
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-100">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-cyan-100 text-cyan-900 text-lg px-4 py-2">
            🛠️ Phase 4: Independent Practice
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Own the Schedule Build</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            It’s your turn to finish the workbook. Work with your team, but every student needs screenshots or exports of
            their own roster, schedule, and hours sheets for tomorrow’s peer review.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <ClipboardList className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Harbor Market Scenario</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800 text-sm">
              <p>
                The grocery owner wants six straight days of café coverage, longer bakery prep blocks before holidays, and a
                rotating cashier crew so nobody burns out. Use the practice dataset plus any custom hires you need.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>At least two departments must share one floater (use ID SV01 from the dataset).</li>
                <li>Each department should have a different overtime story (e.g., bakery near 40 hours, market below 35).</li>
                <li>Add one “what-if” row to the Hours sheet that models an extra Sunday brunch shift.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader className="flex items-center gap-2">
              <Target className="h-5 w-5 text-slate-600" />
              <CardTitle className="text-slate-900">Deliverables Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                {deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Quality Bar</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Double-booking rule: No employee ID should appear twice in the same day column.</li>
                <li>Availability rule: If a worker marked “no Sundays,” leave them out of Sunday columns.</li>
                <li>Cash rule: Hours &amp; Gross must reconcile total hours to the sum of schedule blocks (use SUM to verify).</li>
              </ul>
              <p>Use <span className="font-mono">=COUNTIF(Column,ID)</span> to spot duplicates quickly.</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-blue-700" />
              <CardTitle className="text-blue-900">Stretch Goals (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Build a pivot table that shows hours by Department + Day.</li>
                <li>Add slicers for Department and MaxHours so the owner can filter instantly.</li>
                <li>Create a sparkline per employee that visualizes hour load across the week.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <Alert className="border-amber-200 bg-amber-50 max-w-4xl mx-auto">
          <AlertDescription className="text-amber-900 text-sm">
            <strong>Time Check:</strong> You have 12 minutes. Prioritize accuracy before decoration. Save versions often and
            name your file <span className="font-mono">Lesson05-Schedule-Lastname.xlsx</span> so peer reviewers can find it quickly.
          </AlertDescription>
        </Alert>
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
