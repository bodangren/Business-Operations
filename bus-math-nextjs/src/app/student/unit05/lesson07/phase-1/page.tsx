import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Users, FileCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

const launchQuestions = [
  {
    id: "u05l07-hook-1",
    question:
      "Why is every group using the same teacher workbook today instead of building from scratch?",
    answers: [
      "So the class can compare reasoning and quality directly",
      "Because the teacher forgot to prepare different versions",
      "To save time and let everyone copy the same answer",
      "Because the real project is too hard for practice"
    ],
    explanation:
      "Shared data lets everyone compare their audit findings. When every team uses the same workbook, you can discuss why one recommendation feels stronger than another."
  },
  {
    id: "u05l07-hook-2",
    question:
      "What is the main difference between today's rehearsal and the real project in Lessons 08–10?",
    answers: [
      "Today uses teacher-provided data; the project uses your team's own scenario",
      "Today counts for a grade; the project doesn't",
      "Today you work alone; the project is also solo",
      "Today is optional practice"
    ],
    explanation:
      "Today's guided rehearsal uses the same data for everyone. In the real project (Lessons 08–10), each team gets its own payroll dataset and must build the workbook independently."
  },
  {
    id: "u05l07-hook-3",
    question:
      "When you audit the shared workbook, what should you trace the final recommendation back to?",
    answers: [
      "Supporting calculations and evidence in the workbook",
      "What the teacher said in class",
      "Whatever sounds most impressive",
      "Random cells that happen to match"
    ],
    explanation:
      "Every recommendation must have supporting evidence. Trace the final recommendation back to the calculations that prove it's reasonable."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-red-100 text-red-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 1: Rehearsal Purpose</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Why We're Rehearsing Before the Project</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Today's lesson is the final guided rehearsal before your group project. Every team uses the same
              teacher-provided workbook so we can compare audit findings together. You'll leave knowing exactly
              which structures and checks must carry into your independent work.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                This Is Rehearsal, Not the Real Project
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <p>
                In <strong>Lessons 08–10</strong>, each team will receive its own payroll dataset and build an
                independent workbook. Today practices that exact structure with shared data so you can:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Compare audit findings with classmates</li>
                <li>Identify what makes evidence strong vs. weak</li>
                <li>Practice the Definition of Done before working independently</li>
                <li>Ask questions while the teacher guides the work</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <FileCheck className="h-5 w-5" />
                What Rehearsal Builds Toward
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <p>By the end of today, you'll be able to answer:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>What does a complete project workbook need to contain?</li>
                <li>How do I trace the final recommendation back to evidence?</li>
                <li>What are the most important quality checks before submission?</li>
                <li>What parts of today's structure must my team recreate independently?</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Rehearsal Purpose Check"
            description="Confirm you understand why we're doing this guided rehearsal."
            questions={launchQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What have you learned in Lessons 05–06 that you want to practice today?</li>
                <li>What questions do you still have about what the project needs?</li>
                <li>What's one thing you want to be sure your team includes in the real project?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
