import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🔚 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Readiness, Reflection, and Handoff</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-indigo-900">
                  <p>
                    Today you moved from a working draft to a model you can trust. You reinforced exact‑match lookups,
                    validation, and reconciliation. You also wrote a clear executive summary that supports fast decisions.
                    This is how professionals earn investor confidence.
                  </p>
                  <p className="mt-2">
                    Preview for Lesson 08: final polish, stakeholder review, and pro examples to sharpen your delivery.
                  </p>
                </CardContent>
              </Card>

              <ReflectionJournal 
                unitTitle="CAP Reflection – PayDay Simulator"
                prompts={[
                  {
                    id: 'courage-5',
                    category: 'courage',
                    prompt: 'Where did you show courage in presenting or defending your reconciliation? What feedback pushed you?',
                    placeholder: 'Describe a moment you spoke clearly about an error or tradeoff...'
                  },
                  {
                    id: 'adaptability-5',
                    category: 'adaptability',
                    prompt: 'How did you adapt formulas, references, or visuals when something broke?',
                    placeholder: 'Explain a change you made (e.g., switch to Tables, adjust lookup)...'
                  },
                  {
                    id: 'persistence-5',
                    category: 'persistence',
                    prompt: 'What kept you going when validation or tie‑outs failed the first time?',
                    placeholder: 'Reflect on the steps you took to troubleshoot and finish strong...'
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

