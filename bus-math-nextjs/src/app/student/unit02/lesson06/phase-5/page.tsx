import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, FileText } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson06")
)

const artifactTask = {
  title: "Artifact Task: GAAP Accuracy Defense",
  description: "Write a short memo (3-5 sentences) explaining how your polished workbook maintains GAAP accuracy.",
  prompts: [
    "What validation rules prevent incorrect financial reporting?",
    "How does the audit panel prove the numbers are trustworthy?",
    "Why is the separation of inputs and calculations important for GAAP compliance?"
  ]
}

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson06Data} 
        phase={currentPhase}
        phases={lesson06Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Audit and Explain
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Wizard Polish Exit Ticket
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate that you understand both the polish mechanics and why the tool is trustworthy.
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
                These questions test your understanding of the polished wizard—not Excel trivia. You should be able to:
              </p>
              <ul className="text-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>Explain why validation rules are the first line of defense against bad data</li>
                <li>Identify what makes a user-facing control functional vs. decorative</li>
                <li>Describe what an audit panel proves to someone who did not build the workbook</li>
                <li>Recognize common polish failures and how to fix them</li>
                <li>Explain how the tool maintains GAAP accuracy</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Wizard Polish Understanding Check"
            description="Answer each question based on what you learned about polishing the wizard interface."
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
                This memo practices the skill of defending your workbook's accuracy—a skill you will need in the project rehearsal and group project.
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
                  <p className="text-xs text-green-700 mt-1">Your polished workbook is trustworthy and you can explain why it maintains GAAP accuracy.</p>
                </div>
                <div className="bg-blue-100 p-4 rounded border border-blue-300 text-center">
                  <div className="text-2xl font-bold text-blue-800">60-79%</div>
                  <div className="text-sm font-semibold text-blue-900">Review Needed</div>
                  <p className="text-xs text-blue-700 mt-1">Revisit Phase 2 (tool anatomy) and Phase 4 (audit panel design) before moving on.</p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300 text-center">
                  <div className="text-2xl font-bold text-red-800">Below 60%</div>
                  <div className="text-sm font-semibold text-red-900">Reteach</div>
                  <p className="text-xs text-red-700 mt-1">Return to Phase 2 and work through the three polish layers again with a partner or teacher support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
