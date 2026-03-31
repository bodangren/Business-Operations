import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ClipboardCheck, Lightbulb } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson07Data, unit07Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[5]

const reflectionPrompts = [
  {
    id: "u07l07-clarified",
    category: "adaptability" as const,
    prompt: "What did this rehearsal clarify about what a complete inventory project looks like?",
    placeholder: "Before today I was unsure about... Now I understand that..."
  },
  {
    id: "u07l07-carry",
    category: "persistence" as const,
    prompt: "What two structures or habits from today must you carry into the real project? Be specific.",
    placeholder: "I will definitely carry forward: 1) ... 2) ..."
  },
  {
    id: "u07l07-changes",
    category: "courage" as const,
    prompt: "What changes in the next lesson when your group gets its own dataset? What will be harder? What are you ready for?",
    placeholder: "In the real project, the hardest part will be... but I am ready because..."
  }
]

export default function Unit07Lesson07Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🔔 Phase 6: Reflection and Project Handoff</Badge>
            <h1 className="text-3xl font-bold text-gray-900">What You Now Know About Project Quality</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Today you rehearsed the exact project workflow with shared data. You traced a recommendation back to evidence, audited workbook quality, and identified what must transfer into the real project. Before you leave, lock in what you learned and prepare for what changes next.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <ClipboardCheck className="h-5 w-5" />
                What This Rehearsal Clarified
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-3">
              <p>
                Before today, you knew how to calculate inventory methods by hand and build workbook features in isolation. Now you have practiced the <strong>complete workflow</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Raw inputs → method calculations → comparison → recommendation</li>
                <li>Every recommendation must cite specific workbook numbers</li>
                <li>Validation and GAFS checks are not optional — they are the difference between a draft and a deliverable</li>
                <li>A weak workbook is not one with bad formatting — it is one where the evidence chain is broken</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                What Changes in Lesson 08 (The Real Project)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3">
              <p className="font-medium">Here is the concrete handoff:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-bold text-sm text-green-800 mb-2">What Stays the Same</h4>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Same workbook sheet structure</li>
                    <li>Same four inventory methods</li>
                    <li>Same GAFS checksum requirement</li>
                    <li>Same recommendation format (claim + evidence + risk)</li>
                    <li>Same Definition of Done standard</li>
                    <li>Same peer audit and critique process</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-bold text-sm text-green-800 mb-2">What Changes</h4>
                  <ul className="list-disc list-inside text-xs space-y-1">
                    <li>Your group gets a unique business dataset</li>
                    <li>No step-by-step teacher model to follow</li>
                    <li>Your team decides how to organize and present</li>
                    <li>Your recommendation must stand on its own</li>
                    <li>You will present to the class as a team</li>
                    <li>Four groups, four different businesses</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Before You Leave: Confirm You Can Answer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-2">
              <p className="font-medium text-sm">If you cannot answer these, ask your teacher before the next lesson:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>What are the required sheets in the project workbook and what does each one prove?</li>
                <li>How do you verify that your method calculations are correct? (What is the checksum?)</li>
                <li>What three pieces must a strong recommendation include?</li>
                <li>What is the most common error that makes an inventory workbook untrustworthy?</li>
                <li>What is different about Lesson 08 compared to today's rehearsal?</li>
              </ol>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Unit 07 — Project Rehearsal Reflection"
            prompts={reflectionPrompts}
          />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
