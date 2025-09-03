'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

const capPrompts = [
  {
    id: 'cap-adapt',
    category: 'adaptability',
    prompt: 'When a lookup failed or a chart broke, how did you change your approach to restore trust quickly?',
    placeholder: 'Describe the adjustment you made and why it improved reliability.'
  },
  {
    id: 'cap-persist',
    category: 'persistence',
    prompt: 'Describe a bug you chased down. What steps did you take and what did you learn about structured references or validation?',
    placeholder: 'List the steps you tried and what finally worked.'
  },
  {
    id: 'cap-courage',
    category: 'courage',
    prompt: 'If you presented this to an investor today, what would you highlight confidently and what would you still improve?',
    placeholder: 'State your proudest improvement and one next step.'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧠 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Readiness, Reflection, and Handoff</CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 space-y-3">
                  <p>
                    Today, you hardened your inventory model and focused on <strong>trust</strong>. Exact references, clear
                    error messages, and reconciliation checks help investors make fast decisions.
                  </p>
                  <p>
                    Capture what you improved and where you’ll focus next in Lesson08 (final polish and stakeholder review).
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">CAP Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="CAP Reflection: Production Studio" prompts={capPrompts as any} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
