'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><Sparkles className="w-5 h-5" /> Readiness & Handoff</CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 space-y-3">
                  <p>
                    Summarize wins and reliability improvements you made today. In one paragraph,
                    write the decision‑ready message you would show an investor: What changed,
                    what you trust, and what you recommend for the café.
                  </p>
                  <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-lg">
                    <p className="font-semibold mb-1">Preview — Lesson 08</p>
                    <p>Final polish and stakeholder review. You’ll refine visuals, tighten copy, and compare to professional examples.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900">Reflection Journal — CAP Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal
                    unitTitle="Unit 04 — Data‑Driven Café"
                    prompts={[
                      { id: 'courage‑u4l7', category: 'courage', prompt: 'Where did you show courage today — naming a risk in your summary or choosing a bolder method?', placeholder: 'Describe a specific moment where you took a risk…' },
                      { id: 'adaptability‑u4l7', category: 'adaptability', prompt: 'How did you adapt your formulas when the data or scenarios changed?', placeholder: 'Explain a time you switched approach and why…' },
                      { id: 'persistence‑u4l7', category: 'persistence', prompt: 'What error or mismatch took the longest to fix, and how did you keep going?', placeholder: 'Share what helped you push through debugging…' }
                    ]}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

