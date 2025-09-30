import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson05")
)

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
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Professional Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Show mastery of scenario-driven automation, validation, and investor-ready communication.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Advanced Automation Assessment"
            description="Answer technical and applied business questions to demonstrate professional proficiency."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance Standards: Investor-Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Automation adapts to new rows and categories without edits</li>
                <li>Validation flags are clear, comprehensive, and centralized in an audit panel</li>
                <li>Documentation explains methods and assumptions concisely on-sheet</li>
                <li>Summary page communicates results and reliability to non-technical stakeholders</li>
              </ul>
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

