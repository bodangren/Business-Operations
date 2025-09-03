'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

const kickoffQuestions = [
  {
    id: 'q1',
    question: 'Which lookup setting best prevents silent mismatches?',
    answers: [
      'Exact match (XLOOKUP with match_mode 0 or INDEX/MATCH exact)',
      'Approximate match (default VLOOKUP)',
      'Wildcard match by default',
      'Manual retyping of values'
    ],
    explanation: 'Exact match ensures only correct keys return results; approximations can hide errors.'
  },
  {
    id: 'q2',
    question: 'Why convert ranges to Tables with structured references?',
    answers: [
      'Ranges auto‑expand and keep formulas working as data grows',
      'It looks nicer but behaves the same',
      'Tables make lookups slower',
      'It disables sorting and filtering'
    ],
    explanation: 'Tables auto‑expand and structured refs reduce broken ranges and manual fixes.'
  },
  {
    id: 'q3',
    question: 'What should error handling show the user?',
    answers: [
      'Clear, friendly messages and next steps',
      'A blank cell only',
      'A cryptic #N/A and nothing else',
      'Hidden errors to keep the sheet clean'
    ],
    explanation: 'Error messages should guide the user to fix the problem.'
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🚀 Phase 1: Hook</Badge>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Production Kickoff: Investor Arrives at 3 PM</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-red-900">
                  <p>
                    Sarah at TechStart Solutions needs your model ready today. She will show an investor a
                    clean, reliable month‑end dashboard and a short summary. Under pressure, small mistakes
                    can break trust. Your job is to finish, harden, and prove it’s investor‑ready.
                  </p>
                  <p className="mt-4"><strong>Failure cases you must prevent:</strong></p>
                  <ul className="list-disc list-inside">
                    <li>Lookup returns a wrong client due to non‑exact match</li>
                    <li>Chart breaks because the data range didn’t auto‑expand</li>
                    <li>Totals don’t tie out with the bank register</li>
                  </ul>
                  <p className="mt-4"><strong>Ready example:</strong> Exact‑match lookups, structured references, flags for issues, and a one‑screen dashboard that updates by scenario.</p>
                </CardContent>
              </Card>

              <ComprehensionCheck 
                questions={kickoffQuestions}
                title="Standards for Trustworthy Models"
                description="Quick check on exact matches, structured references, and error handling"
                showExplanations={true}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

