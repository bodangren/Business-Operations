'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[5]

export default function Phase6Page() {
  const capPrompts = [
    {
      id: 'courage-u08',
      category: 'courage',
      prompt: 'Where did you take a risk in building or presenting your model today?',
      placeholder: 'Describe a moment you stepped up for clarity or honesty...'
    },
    {
      id: 'adaptability-u08',
      category: 'adaptability',
      prompt: 'How did you adjust when validations or tie‑outs failed?',
      placeholder: 'Explain how you changed your plan or formulas...'
    },
    {
      id: 'persistence-u08',
      category: 'persistence',
      prompt: 'What bug or mismatch took the longest to fix, and how did you get through it?',
      placeholder: 'Share your process and what finally worked...'
    }
  ] as any

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Readiness, Reflection, and Handoff</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Summarize your wins: What reliability improvements did you ship today? How quickly can an
                    investor read your executive summary and understand the decision? Save a version note on the
                    assumptions sheet with today’s date.
                  </p>
                  <p>
                    Preview Lesson08: final polish, stakeholder review, and professional examples. You’ll tighten
                    the story and prepare for public sharing.
                  </p>
                </CardContent>
              </Card>

              <ReflectionJournal unitTitle="CAP Reflection: Investor Readiness" prompts={capPrompts} />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

