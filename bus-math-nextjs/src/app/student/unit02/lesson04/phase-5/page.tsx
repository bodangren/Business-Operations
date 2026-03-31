import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson04Phases[4]

export default function Phase5Page() {
  const assessmentQuestions = toComprehensionCheckFormat(
    getQuestionsForLesson("lesson04")
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Month-End Close Workflow Exit Ticket
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate your understanding of the complete month-end close process.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                What This Assessment Checks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-yellow-800">
                These questions test your understanding of the month-end close workflow—not Excel skills. You should be able to:
              </p>
              <ul className="text-sm text-yellow-800 space-y-1 ml-4 list-disc">
                <li>Name the correct sequence of close steps</li>
                <li>Identify which adjustments are needed and why</li>
                <li>Explain how missed adjustments affect the financial statements</li>
                <li>Distinguish between permanent and temporary accounts</li>
                <li>Recognize common misconceptions about the closing process</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Month-End Close Workflow Assessment"
            description="Answer each question based on what you learned about the complete month-end close process."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Award className="h-6 w-6" />
                What Your Score Means
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-100 p-4 rounded border border-green-300 text-center">
                  <div className="text-2xl font-bold text-green-800">80-100%</div>
                  <div className="text-sm font-semibold text-green-900">Ready</div>
                  <p className="text-xs text-green-700 mt-1">You can walk through the month-end close in order and understand why each step matters.</p>
                </div>
                <div className="bg-blue-100 p-4 rounded border border-blue-300 text-center">
                  <div className="text-2xl font-bold text-blue-800">60-79%</div>
                  <div className="text-sm font-semibold text-blue-900">Review Needed</div>
                  <p className="text-xs text-blue-700 mt-1">Revisit Phase 2 (the close checklist) and Phase 3 (complex adjustments) before moving on.</p>
                </div>
                <div className="bg-red-100 p-4 rounded border border-red-300 text-center">
                  <div className="text-2xl font-bold text-red-800">Below 60%</div>
                  <div className="text-sm font-semibold text-red-900">Reteach</div>
                  <p className="text-xs text-red-700 mt-1">Return to Phase 2 and work through the six-step workflow again with a partner or teacher support.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
