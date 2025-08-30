import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

const prompts = [
  {
    id: 'adapt-1',
    category: 'adaptability' as const,
    prompt: 'When your model first failed under new rows or a method toggle, how did you adjust your approach?',
    placeholder: 'Describe the specific change you made and why it worked...'
  },
  {
    id: 'persist-1',
    category: 'persistence' as const,
    prompt: 'What validation or error‑handling took the longest to get right? How did you keep going?',
    placeholder: 'Explain your debugging steps and how you finally resolved it...'
  },
  {
    id: 'courage-1',
    category: 'courage' as const,
    prompt: 'How will you confidently explain method trade‑offs (profit, tax, cash) to investors next time?',
    placeholder: 'Write a short script you could use during Q&A...'
  }
]

export default function Unit07Lesson05Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Automation: Ready for the Next Step</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You built a method switch, added validation, and explained business impact. These reliability gains prepare you for
              Lesson06: integration and dashboards — turning robust logic into clear visuals for decision‑makers.
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
                <li>Dynamic method switching unifies logic and reduces copy‑paste risk</li>
                <li>Tables and structured refs keep the model stable as data grows</li>
                <li>Validation + IFNA/IFERROR protect trust and auditability</li>
                <li>Clear notes connect outputs to tax and cash‑flow choices</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="CAP Reflection: Advanced Inventory Automation" prompts={prompts} />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}

