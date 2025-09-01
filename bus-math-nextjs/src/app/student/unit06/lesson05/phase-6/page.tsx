import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit06Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Advanced CVP Automation: Ready for Integration</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built a fast, reliable scenario runner with one‑ and two‑variable Data Tables, 
              method switching, and validation. Next, you’ll connect these outputs to a clean, 
              decision‑ready dashboard in Lesson06.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Synthesis: What You Improved and Why It Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900">
              <ul className="list-disc list-inside">
                <li>Speed: Data Tables deliver instant what‑if results without retyping formulas.</li>
                <li>Reliability: IFERROR and clear Table[Column] references prevent scary demo errors.</li>
                <li>Flexibility: Method switching (price, units, fixed, variable) targets any goal.</li>
                <li>Trust: Validation flags negative costs, blank IDs, and stale dates before decisions.</li>
                <li>Communication: Your outputs tell a clear pricing story investors can follow.</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection — Resilience in Scenario Building"
            prompts={[
              {
                id: 'courage-cvp',
                category: 'courage',
                prompt: 'Where did you take a risk during live what‑if testing (e.g., showing a two‑variable grid)?',
                placeholder: 'Describe the moment and what made it courageous…'
              },
              {
                id: 'adaptability-cvp',
                category: 'adaptability',
                prompt: 'What unexpected error or edge case forced you to adapt your approach?',
                placeholder: 'Explain the issue and how you adjusted formulas or validation…'
              },
              {
                id: 'persistence-cvp',
                category: 'persistence',
                prompt: 'When your first setup failed, what kept you iterating until the model was reliable?',
                placeholder: 'Reflect on your persistence and final outcome…'
              }
            ] as any}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Preview: Lesson06 Integration Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-blue-900">
              <ul className="list-disc list-inside">
                <li>Link scenario inputs to a driver table with named ranges or XLOOKUP.</li>
                <li>Bind outputs to charts and a one‑page executive summary.</li>
                <li>Carry forward validation and add simple audit cues for reliability.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

