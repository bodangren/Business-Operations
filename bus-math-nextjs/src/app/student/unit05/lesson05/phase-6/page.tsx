import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Payroll Automation: Ready for the Next Step</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built a payroll engine that stays accurate as TechStart grows. You added validation, clear
              documentation, and investor‑ready summaries. Now, connect this to dashboards and cash‑flow views in Lesson06.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Synthesis: What Improved and Why It Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900">
              <ul className="list-disc list-inside">
                <li>Reliability: Safe lookups, clear overtime math, and rounding that reconciles to bank totals.</li>
                <li>Visibility: Audit flags reveal errors fast—protecting people and cash.</li>
                <li>Scalability: Tables and SWITCH logic adapt to new staff and pay rules.</li>
                <li>Communication: One‑page summaries show the story investors care about.</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection — Persistence in Debugging & Validation"
            prompts={[
              {
                id: 'courage-payroll',
                category: 'courage',
                prompt: 'Where did you take a risk in redesigning payroll logic (e.g., replacing fragile formulas)?',
                placeholder: 'Describe the change you made and why it was brave…'
              },
              {
                id: 'adaptability-payroll',
                category: 'adaptability',
                prompt: 'What feedback or errors forced you to adapt your approach? How did you adjust?',
                placeholder: 'Explain the issue and your new strategy…'
              },
              {
                id: 'persistence-payroll',
                category: 'persistence',
                prompt: 'What kept you going when the validation flags would not clear at first?',
                placeholder: 'Reflect on your persistence and the result…'
              }
            ] as any}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Preview: Lesson06 Integration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-blue-900">
              <ul className="list-disc list-inside">
                <li>Connect payroll outputs to a cash‑flow dashboard (totals by PayDate).</li>
                <li>Add slicers/controls for State and Pay Frequency.</li>
                <li>Prepare a one‑minute investor summary with key reliability checks.</li>
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

