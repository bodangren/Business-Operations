import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

const prompts = [
  {
    id: 'courage-u3l6',
    category: 'courage' as const,
    prompt: 'Where did you choose clarity under pressure during the live scenario switch?',
    placeholder: 'Describe a moment you presented a tough number simply and confidently...'
  },
  {
    id: 'adaptability-u3l6',
    category: 'adaptability' as const,
    prompt: 'What broke first in your model and how did you adapt the links or visuals?',
    placeholder: 'Explain a specific fix: named ranges, IFNA, structured references, etc...'
  },
  {
    id: 'persistence-u3l6',
    category: 'persistence' as const,
    prompt: 'Which validation warning took the longest to resolve, and what finally worked?',
    placeholder: 'Reflect on debugging steps and what you’ll do next time...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Integrated Automation: Present with Confidence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Summarize your wins, reliability improvements, and decision‑readiness. Then preview Lesson 07, where
                you’ll sharpen your executive summary with worked examples and stakeholder critique.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2"><Lightbulb className="h-5 w-5"/>Synthesis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-indigo-900 space-y-1 text-sm">
                <li>Scenario controls switch safely and update charts live</li>
                <li>Validation flags make errors visible before investors do</li>
                <li>Executive summary frames decisions in one sentence</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="CAP Reflection: Integration & Dashboards" prompts={prompts} />
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

