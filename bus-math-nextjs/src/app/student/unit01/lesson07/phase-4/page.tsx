'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, ArrowRightCircle, FileText } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[3]

const reflectionPrompts = [
  {
    id: "rehearsal-clarity",
    category: "courage" as const,
    prompt: "What part of the workbook structure became clearer today as you practiced?",
    placeholder: "Describe which sheet or link you now understand better..."
  },
  {
    id: "transfer-items",
    category: "adaptability" as const,
    prompt: "What 3 specific structures or checks will your group definitely reuse in the real project?",
    placeholder: "List the 3 things you must transfer..."
  },
  {
    id: "weakness-spotting",
    category: "persistence" as const,
    prompt: "What's one weak spot you fixed today, and how will you prevent it in your project?",
    placeholder: "Explain the weak spot and your prevention plan..."
  }
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">✨ Phase 4: Polish and Transfer Practice</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-amber-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-amber-700" /> Polish the Shared Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-left">
                  <p className="text-gray-800 leading-relaxed">
                    Now it's your turn to polish the shared rehearsal workbook. Complete these steps to make it investor-ready!
                  </p>

                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-900 mb-2">Step 1: Fix the Weak Spots</h4>
                        <p className="text-amber-900">Find and fix at least 2 issues in the workbook (e.g., broken formula, unclear label, missing check).</p>
                      </div>
                    </li>
                    <li>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Step 2: Write the Recommendation</h4>
                        <p className="text-blue-900">In the Executive Summary sheet, write a clear recommendation with:</p>
                        <ul className="list-disc list-inside text-blue-900 mt-2 space-y-1">
                          <li>One clear claim</li>
                          <li>Three cited numbers from the workbook</li>
                          <li>One risk or limitation</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Step 3: Identify Transfer Items</h4>
                        <p className="text-purple-900">List 3 specific things your group will reuse in the real project (e.g., sheet structure, error check formula, recommendation format).</p>
                      </div>
                    </li>
                  </ol>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5" /> Done Checklist
                    </h4>
                    <ul className="list-disc list-inside text-green-900 space-y-1">
                      <li>All 4 sheets are complete and linked</li>
                      <li>Recommendation has 1 claim + 3 numbers + 1 risk</li>
                      <li>2+ weak spots fixed</li>
                      <li>3 transfer items listed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2">
                    <ArrowRightCircle className="w-5 h-5" /> What Changes in the Real Project?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Same:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Sheet structure (4 tabs)</li>
                        <li>Definition of Done</li>
                        <li>Error check patterns</li>
                        <li>Recommendation format</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Different:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Your group's own dataset</li>
                        <li>More independent work</li>
                        <li>Your own business scenario</li>
                        <li>Final investor presentation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900 flex items-center gap-2">
                    <FileText className="w-5 h-5" /> Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal
                    unitTitle="Project Rehearsal Reflection"
                    prompts={reflectionPrompts}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
