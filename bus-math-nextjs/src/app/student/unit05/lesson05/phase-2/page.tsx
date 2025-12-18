import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabSentences = [
  {
    id: "roster",
    text: 'The EmployeeRoster table is the single {blank} of truth for IDs, hourly rates, departments, and availability.',
    answer: 'source',
    hint: 'Investors ask for it',
    category: 'Vocabulary'
  },
  {
    id: "validation",
    text: 'Every dropdown inside the WeeklySchedule relies on {blank} validation that points to the roster IDs.',
    answer: 'data',
    hint: 'Prevents typos',
    category: 'Process'
  },
  {
    id: "sumifs",
    text: '{blank} totals hours by employee, department, or day of week without copy/paste.',
    answer: 'SUMIFS',
    hint: 'Multi-criteria function',
    category: 'Formula'
  },
  {
    id: "threshold",
    text: 'Hours over {blank} in a week should trigger an overtime highlight and new gross-pay math.',
    answer: '40',
    hint: 'Federal baseline',
    category: 'Concept'
  },
  {
    id: "handoff",
    text: 'The Hours & Gross sheet is the {blank} handoff that feeds the Lesson06 cash-flow dashboard.',
    answer: 'bridge',
    hint: 'Connects schedule → Payday Simulator',
    category: 'Concept'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-lime-100">
      <PhaseHeader 
        lesson={lesson05Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6 text-center">
          <Badge className="bg-emerald-100 text-emerald-900 text-lg px-4 py-2">
            🧱 Phase 2: Blueprint
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Blueprint: Roster → Schedule → Hours</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Before you open Excel, lock the architecture. Every sheet you build today has a job description and feeds a
            question Sarah must answer for Harbor Market. Keep the writing at an 8th-grade reading level so your teammates
            can follow the plan while they code.
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 1 — EmployeeRoster</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Columns: EmployeeID, Name, Department, Role, HourlyRate, Availability, PreferredDays.</li>
                <li>Format as table <span className="font-mono">tblRoster</span>. Structured references auto-expand.</li>
                <li>Store overtime eligibility and max hours so SUMIFS can respect individual caps.</li>
              </ul>
              <p>
                Download the starter data here:
                {' '}
                <a
                  href="/resources/unit05-lesson05-schedule-practice.csv"
                  className="text-emerald-700 underline"
                  download
                >
                  unit05-lesson05-schedule-practice.csv
                </a>
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 2 — WeeklySchedule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Grid layout: rows = time blocks (e.g., 6a–10a, 10a–2p, 2p–6p, 6p–close).</li>
                <li>Columns = Sun → Sat. Each cell has a data-validation dropdown referencing <span className="font-mono">tblRoster[EmployeeID]</span>.</li>
                <li>Use conditional formatting to highlight double-booked employees or empty high-priority slots.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white/90">
            <CardHeader>
              <CardTitle className="text-slate-900">Sheet 3 — Hours &amp; Gross</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Use <span className="font-mono">SUMIFS</span> to total hours by EmployeeID and by Department.</li>
                <li>Add helper columns: RegularHours, OvertimeHours, GrossPay.</li>
                <li>Formula idea: <span className="font-mono">=LET(h,TotalHours, rate,XLOOKUP(ID, tblRoster[EmployeeID], tblRoster[HourlyRate]), reg, MIN(40,h), ot, MAX(0,h-40), reg*rate + ot*rate*1.5)</span></li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900">Questions Investors Will Ask</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-emerald-900 text-sm">
              <p className="font-medium">Build with these answers in mind:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>“What is the cost of fully staffing the bakery next week?” → Filter WeeklySchedule by department.</li>
                <li>“Who crosses 35 hours before Friday?” → Use conditional formatting plus the Hours sheet.</li>
                <li>“How much cash do I need on payday if we add a Sunday brunch shift?” → Hours &amp; Gross updates instantly.</li>
              </ul>
            </CardContent>
          </Card>

          <Alert className="border-amber-200 bg-amber-50">
            <AlertDescription className="text-amber-900 text-sm">
              <strong>Pro Tip:</strong> Name your ranges now (<span className="font-mono">dvEmployee</span>, <span className="font-mono">rngBlocks</span>,
              <span className="font-mono">tblHours</span>). Lesson06 combines this workbook with the Payday Simulator, so clean names save hours later.
            </AlertDescription>
          </Alert>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Lock In the Vocabulary</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank 
                sentences={vocabSentences}
                title="Schedule Blueprint Vocabulary"
                description="Complete each sentence before you start building your workbook."
                randomizeWordOrder={false}
              />
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
