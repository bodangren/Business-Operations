import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-100">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-indigo-100 text-indigo-900 text-lg px-4 py-2">
            🌅 Phase 6: Closing
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">From Schedule Clarity to Cash Confidence</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            You now have a roster that feeds a schedule, and a schedule that feeds gross pay. Lesson06 combines this work with
            tax withholding, cash-flow timing, and dashboards. Capture what you learned so your future self remembers the
            breakthroughs.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Scheduling accuracy is payroll accuracy—no more separate whiteboards.</li>
                <li>SUMIFS, validation, and conditional formatting act like internal auditors.</li>
                <li>Hours &amp; Gross is the bridge that lets Lesson06 plug in taxes, benefits, and cash forecasts.</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Reflection — Courage, Adaptability, Persistence"
            prompts={[
              {
                id: 'courage-schedule',
                category: 'courage',
                prompt: 'Where did you show courage while challenging an existing schedule habit (like ditching the wall calendar)?',
                placeholder: 'Describe the risky change you made and what happened…'
              },
              {
                id: 'adaptability-schedule',
                category: 'adaptability',
                prompt: 'How did you adapt when the data validation or SUMIFS formula did not work the first time?',
                placeholder: 'Explain the bug, the fix, and the new lesson you learned…'
              },
              {
                id: 'persistence-schedule',
                category: 'persistence',
                prompt: 'What kept you going while balancing employee preferences with business coverage?',
                placeholder: 'Reflect on the strategy that helped you keep iterating…'
              }
            ] as any}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Preview: Lesson06 Integration Sprint</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Feed your Hours &amp; Gross table into the Payday Simulator’s withholding logic.</li>
                <li>Plot weekly payroll cash-outs next to actual bank timing to prevent Maria’s Friday crisis.</li>
                <li>Build a dashboard tile that answers “What happens if we open two more evening shifts?” in one click.</li>
              </ul>
              <p>Bring your Lesson05 workbook tomorrow—we will layer taxes, benefits, and cash-flow views directly on top of it.</p>
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
