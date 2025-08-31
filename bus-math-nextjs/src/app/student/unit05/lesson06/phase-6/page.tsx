import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integrated Automation: Present with Confidence</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You turned payroll automation into a decision‑ready dashboard. You added scenario controls, stable charts,
              and validation checks that protect trust during live Q&amp;A.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Synthesis</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-2">
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Dashboard shows Base/Stretch/Downside with one click.</li>
                <li>Charts stay stable with structured references.</li>
                <li>Validation flags reveal issues before investors do.</li>
                <li>Executive summary ties KPIs to clear recommendations.</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection — Payroll Integration & Presentation"
            className="bg-white"
          />

          <Card>
            <CardHeader>
              <CardTitle>Preview: Lesson 07</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              Next, you’ll study worked examples and stakeholder feedback patterns that sharpen your executive summaries.
              Some units deepen dashboards with pro examples and critique.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

