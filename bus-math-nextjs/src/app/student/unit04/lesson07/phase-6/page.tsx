'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit04Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit04Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Reflection and Project Handoff</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><Sparkles className="w-5 h-5" /> What This Rehearsal Clarified</CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 space-y-4">
                  <p className="text-lg">
                    Before you tackle your own café analysis in Lessons 8-10, lock in what you learned today.
                  </p>

                  <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
                    <p className="font-semibold mb-3">You now know:</p>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-indigo-600 flex-shrink-0" />
                        <span>What a complete project workbook must contain (Data → Analysis → Forecasting → Dashboard → Recommendation)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-indigo-600 flex-shrink-0" />
                        <span>How to trace the evidence chain from any recommendation number back to raw data</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-indigo-600 flex-shrink-0" />
                        <span>What makes a workbook feel trustworthy vs. weak to an investor</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 mt-1 text-indigo-600 flex-shrink-0" />
                        <span>How to give specific, evidence-based peer feedback</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> What Must Carry Into the Project</CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 space-y-4">
                  <p className="text-lg">
                    In Lessons 8-10, your team will apply the same structure to your own café scenario.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold">Same structure:</p>
                      <ul className="list-disc list-inside text-sm mt-1">
                        <li>Data → Analysis → Forecasting → Dashboard → Recommendation</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold">Same evidence standard:</p>
                      <ul className="list-disc list-inside text-sm mt-1">
                        <li>Claim + evidence + risk</li>
                        <li>Every number traceable to data</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold">Same Definition of Done:</p>
                      <ul className="list-disc list-inside text-sm mt-1">
                        <li>5 sheets complete</li>
                        <li>At least 2 visuals</li>
                        <li>Evidence chain verified</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 p-3 rounded-lg border border-amber-200">
                      <p className="font-semibold">Different scenario:</p>
                      <ul className="list-disc list-inside text-sm mt-1">
                        <li>Your team's café data</li>
                        <li>Your numbers and conclusions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900">What Changes Next Lesson</CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900 space-y-3">
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Lesson 08 — Project Kickoff</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Each team gets its own café scenario and dataset</li>
                      <li>Teams rename and save their own workbook</li>
                      <li>Start the first required sheets (Data + Analysis)</li>
                      <li>Define your claim direction — what do you think the data will show?</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                    <p className="font-semibold mb-2">Lessons 09-10 — Analysis and Presentation</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Complete Forecasting, Dashboard, and Recommendation sheets</li>
                      <li>Build visuals, test scenarios, write final recommendation</li>
                      <li>Prepare short pitch with evidence</li>
                      <li>Present to the class</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900">Reflection Journal — CAP Prompts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal
                    unitTitle="Unit 04 — Data-Driven Café"
                    prompts={[
                      { 
                        id: 'courage-u4l7', 
                        category: 'courage', 
                        prompt: 'Where did you show courage in your recommendation or audit feedback — naming a risk or giving honest critique?', 
                        placeholder: 'Describe a specific moment where you took a risk in your analysis or feedback...' 
                      },
                      { 
                        id: 'adaptability-u4l7', 
                        category: 'adaptability', 
                        prompt: 'How did you adapt when your evidence trace revealed a gap or weakness?', 
                        placeholder: 'Explain a time you had to revise your approach and why...' 
                      },
                      { 
                        id: 'persistence-u4l7', 
                        category: 'persistence', 
                        prompt: 'What took the longest to get right in this rehearsal — the evidence trace, the recommendation, or the peer audit?', 
                        placeholder: 'Share what helped you push through the challenge...' 
                      }
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