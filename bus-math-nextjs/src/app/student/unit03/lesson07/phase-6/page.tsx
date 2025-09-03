'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

const capPrompts = [
  {
    id: 'courage-u3l7',
    category: 'courage',
    prompt: 'Where did you show courage today—presenting numbers or owning an error?',
    placeholder: 'Describe a moment where you took a risk in your analysis or presentation...'
  },
  {
    id: 'adaptability-u3l7',
    category: 'adaptability',
    prompt: 'How did you adapt your formulas or visuals when a check failed?',
    placeholder: 'Explain how you adjusted references, lookups, or validation to fix issues...'
  },
  {
    id: 'persistence-u3l7',
    category: 'persistence',
    prompt: 'What kept you going while debugging tricky links or lookups?',
    placeholder: 'Share how you stayed focused and got to a clean result...'
  },
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Synthesis: Readiness and Handoff</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-indigo-900">
                  <p>
                    Today you pushed your model from “works for class” to “ready for investors.” You
                    improved reliability with exact references and validation. You strengthened trust
                    with reconciliation and clear error messages. Your dashboard and executive summary
                    now help a busy decision‑maker act quickly.
                  </p>
                  <div className="bg-indigo-50 border border-indigo-200 rounded-md p-4 mt-4">
                    <strong>Preview (Lesson 08):</strong> Final polish, stakeholder review, and pro examples. You will
                    refine layout, stress‑test scenarios, and practice answering tough investor questions.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">CAP Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="CAP Reflection: Investor‑Ready Model" prompts={capPrompts as any} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

