import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Forecast Automation: Ready for the Next Step</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built forecasts that handle growth, catch errors, and answer investor questions fast.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Synthesis</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Structured references kept formulas current as data grew.</li>
                <li>Scenario toggles let you switch methods without rewrites.</li>
                <li>Audit Panels surfaced risks before they became surprises.</li>
                <li>Clear notes helped others trust and use your work.</li>
              </ul>
              <p>Result: a reliable forecasting system that scales with the café.</p>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection: Automation, Debugging, and Validation"
            prompts={[
              {
                id: 'cap-courage',
                category: 'courage',
                prompt: 'Where did you risk changing your original approach to make the model stronger?',
                placeholder: 'Describe the decision and why it was worth it...'
              },
              {
                id: 'cap-adapt',
                category: 'adaptability',
                prompt: 'What error or data issue forced you to adapt your plan, and how did you recover?',
                placeholder: 'Explain the issue, your response, and the outcome...'
              },
              {
                id: 'cap-persist',
                category: 'persistence',
                prompt: 'Which debugging step took the longest, and what kept you going?',
                placeholder: 'Reflect on persistence and the payoff...'
              }
            ]}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">What’s Next (Lesson06 Preview)</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p>
                Next, you’ll integrate these forecasts into a small dashboard and presentation brief. You’ll practice
                explaining assumptions, risks, and options to a non‑technical owner.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

