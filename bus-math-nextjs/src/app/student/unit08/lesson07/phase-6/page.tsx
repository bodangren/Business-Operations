'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson07Data, unit08Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[5]

export default function Phase6Page() {
  const prompts = [
    {
      id: 'rehearsal-clarity',
      category: 'understanding',
      prompt: 'What did this rehearsal clarify about the project workbook structure?',
      placeholder: 'Before today I was unsure about... Now I understand...'
    },
    {
      id: 'carry-forward',
      category: 'confidence',
      prompt: 'What is the one thing from today that your group must carry into the real project?',
      placeholder: 'We will definitely bring...'
    },
    {
      id: 'next-lesson-change',
      category: 'transfer',
      prompt: 'What changes next lesson when you get your own group dataset?',
      placeholder: 'Next lesson we will need to...'
    },
    {
      id: 'evidence-tracing',
      category: 'understanding',
      prompt: 'Explain in your own words how a recommendation traces back to the asset register.',
      placeholder: 'A recommendation is only as strong as...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Reflection and Project Handoff</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">What This Rehearsal Clarified</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Today was your practice run. You worked with the same data as every other group,
                    traced recommendations back to the asset register, and practiced the peer audit
                    routine. You now know exactly what the project workbook must look like.
                  </p>
                  <p>
                    Save your reflection below. It will help you remember what matters when you start
                    the real project next lesson.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-900">What Changes Next Lesson</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <div className="space-y-3">
                    <div className="p-4 bg-white rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-2">What Stays the Same</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Four-sheet workbook structure</li>
                        <li>Definition of Done checklist</li>
                        <li>Recommendation format (claim, evidence, risk)</li>
                        <li>Peer audit routine</li>
                        <li>Quality standard for professional formatting</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-2">What Changes</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Each group gets a unique fixed-asset dataset</li>
                        <li>Your team works more independently</li>
                        <li>You make your own method-choice decisions</li>
                        <li>You defend your own recommendation to the class</li>
                        <li>Teacher guidance shifts from direct to consultative</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Project Handoff Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Before you leave today, confirm your group is ready for the real project:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Every group member can name all four workbook sheets and their purpose</li>
                    <li>Every group member can explain how Book Value = Cost − Accumulated Depreciation</li>
                    <li>Your group knows how to write a claim-evidence-risk recommendation</li>
                    <li>Your group understands the peer audit criteria</li>
                    <li>You know what changes next lesson and what stays the same</li>
                  </ul>
                </CardContent>
              </Card>

              <ReflectionJournal 
                unitTitle="Project Rehearsal Reflection" 
                prompts={prompts} 
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
