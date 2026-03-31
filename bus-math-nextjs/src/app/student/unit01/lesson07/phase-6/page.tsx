'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stars, ArrowRight, CheckCircle } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

const reflectionPrompts = [
  {
    id: "reflection-purpose",
    category: "courage" as const,
    prompt: "What did this rehearsal clarify for you about the project?",
    placeholder: "Describe what makes more sense now..."
  },
  {
    id: "reflection-transfer",
    category: "adaptability" as const,
    prompt: "What's the #1 thing your group must carry into the project?",
    placeholder: "Explain why this is the most important..."
  },
  {
    id: "reflection-handoff",
    category: "persistence" as const,
    prompt: "What are you most excited about in the real project?",
    placeholder: "Share your excitement..."
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-cyan-100 text-cyan-800 text-lg px-4 py-2">🎉 Phase 6: Reflection and Project Handoff</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-cyan-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Stars className="w-6 h-6 text-cyan-700" /> Great job! You're ready for the real project.
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p className="text-gray-800 leading-relaxed">
                    Today you rehearsed the exact project structure with shared data. Now you know:
                  </p>
                  <ul className="list-disc list-inside text-gray-800 space-y-2">
                    <li>What the workbook structure looks like</li>
                    <li>How to trace a recommendation back to evidence</li>
                    <li>What investors look for in a deliverable</li>
                    <li>How to give and receive peer feedback</li>
                  </ul>

                  <div className="bg-cyan-50 border border-cyan-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-cyan-900 flex items-center gap-2 mb-2">
                      <CheckCircle className="w-5 h-5" /> What's Next?
                    </h4>
                    <p className="text-cyan-900">
                      In Lesson 08, your group will get its own unique dataset and business scenario. You'll reuse all the structures you practiced today—just with your own data!
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" /> Preview: Lesson 08
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-purple-900">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Lesson 08: Project Kickoff</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Get your group's unique dataset</li>
                        <li>Learn your business scenario</li>
                        <li>Rename and organize your workbook</li>
                        <li>Start the first sheets</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Bring to Lesson 08:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Your 3 transfer items from today</li>
                        <li>Your peer feedback notes</li>
                        <li>Your excitement!</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Final Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal
                    unitTitle="Project Rehearsal Final Reflection"
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

