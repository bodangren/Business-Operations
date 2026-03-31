import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, FileText } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson05")
)

const artifactTask = {
  title: "Artifact Task: Automation Trustworthiness Memo",
  description: "Write a short memo (3-5 sentences) that you would give to Sarah explaining why her new automation is trustworthy.",
  prompts: [
    "What verification step proves the numbers are correct?",
    "What would you tell Sarah to check if the CloseStatus shows 'Error'?",
    "Which manual step does the button replace, and why is that important?"
  ]
}

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson05Data} 
        phase={currentPhase}
        phases={lesson05Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Audit and Explain
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Automation Exit Ticket
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate that you understand both the tool mechanics and why the automation is trustworthy.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                What This Assessment Checks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-yellow-800">
                These questions test your understanding of the automation you built—not Excel trivia. You should be able to:
              </p>
              <ul className="text-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>Explain why named ranges are safer than hard-coded cell references</li>
                <li>Identify the verification checkpoint that proves the automation ran correctly</li>
                <li>Describe what the button-triggered flow does in order</li>
                <li>Recognize common setup errors and how to fix them</li>
                <li>Explain which manual step the automation replaced</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Automation Understanding Check"
            description="Answer each question based on what you learned about building the first automation layer."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                {artifactTask.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                {artifactTask.description}
              </p>
              <div className="bg-blue-100 p-4 rounded border border-blue-300 space-y-2">
                <p className="text-sm text-blue-700 font-semibold">Address these points:</p>
                <ul className="text-sm text-blue-800 space-y-1 ml-4 list-disc">
                  {artifactTask.prompts.map((prompt, i) => (
                    <li key={i}>{prompt}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <textarea
                  className="w-full h-32 px-3 py-2 border border-blue-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  placeholder="Write your memo here..."
                />
              </div>
              <p className="text-xs text-blue-700">
                This memo is practice for explaining your workbook to someone who did not build it—a skill you will need in Lesson 6 and the project.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Award className="h-5 w-5" />
                What Your Score Means
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-100 p-4 rounded border border-green-300 text-center">
                  <div className="text-2xl font-bold text-green-800">80-100%</div>
                  <div className="text-sm font-semibold text-green-900">Ready</div>
                  <p className="text-xs text-green-700 mt-1">Your automation is built correctly and you can explain why it works.</p>
                </div>
                <div className="bg-blue-100 p-4 rounded border border-blue-300 text-center">
                  <div className="text-2xl font-bold text-blue-800">60-79%</div>
                  <div className="text-sm font-semibold text-blue-900">Review Needed</div>
                  <p className="text-xs text-blue-700 mt-1">Revisit Phase 2 (tool anatomy) and Phase 4 (verification checkpoints) before moving on.</p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300 text-center">
                  <div className="text-2xl font-bold text-red-800">Below 60%</div>
                  <div className="text-sm font-semibold text-red-900">Reteach</div>
                  <p className="text-xs text-red-700 mt-1">Return to Phase 2 and work through the four building blocks again with a partner or teacher support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
