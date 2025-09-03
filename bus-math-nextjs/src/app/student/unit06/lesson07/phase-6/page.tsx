'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit06Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stars, ArrowRight } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

const capPrompts = [
  { id: 'u6l7-cap-courage', category: 'courage', prompt: 'Where did you show courage—speaking up about an error or presenting a tough pricing tradeoff?', placeholder: 'Describe the moment and why it mattered to investor trust.' },
  { id: 'u6l7-cap-adapt', category: 'adaptability', prompt: 'What formula or reference did you change to make scenario switching more reliable?', placeholder: 'Explain what was fragile before and how you improved it.' },
  { id: 'u6l7-cap-persist', category: 'persistence', prompt: 'What bug took the longest to fix? How did you finally solve it?', placeholder: 'Note the steps you tried and what you learned from the process.' },
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><Stars className="w-5 h-5" /> Readiness & Handoff</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-indigo-900">
                    Today you moved from “it calculates” to “it convinces.” Your PriceLab model now has exact references, 
                    validation, reconciliation, and clear messages. You are ready to share a concise, decision‑ready 
                    executive summary. Next lesson focuses on final polish and stakeholder review.
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
                <CardContent>
                  Final polish, stakeholder review, and professional examples. You’ll refine visuals, tighten the 
                  executive summary, and practice fast scenario switching for Q&A.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit06Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

