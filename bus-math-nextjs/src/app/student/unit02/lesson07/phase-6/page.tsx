'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Stars, ArrowRight } from "lucide-react"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[5]

const capPrompts = [
  { id: 'cap-courage', category: 'courage' as const, prompt: 'Where did you show courage—switching a risky formula or presenting an uncomfortable finding?', placeholder: 'Describe the moment and why it improved trust.' },
  { id: 'cap-adapt', category: 'adaptability' as const, prompt: 'What change did you make to keep references strong as data grew?', placeholder: 'Explain how structured references or named ranges helped.' },
  { id: 'cap-persist', category: 'persistence' as const, prompt: 'Which validation bug took the longest to fix? How did you isolate it?', placeholder: 'List the steps you tried and how you verified the fix.' },
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><Stars className="w-5 h-5" /> Readiness & Handoff</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-indigo-900">
                  <p>
                    You moved from “it calculates” to “it convinces.” Your month‑end system now uses exact matches,
                    structured references, validation, reconciliation, and clear messages. You’re ready to communicate
                    decisions quickly with a one‑screen dashboard and an investor‑ready summary.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900">CAP Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="CAP Reflection: Production Studio" prompts={capPrompts as any} />
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Preview: Lesson 08</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  Final polish, stakeholder review, and professional examples. You’ll refine visuals, tighten the
                  executive summary, and practice fast scenario switching for Q&A.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

