import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, CheckCircle2 } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

export default function Unit02Lesson02Phase5() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!

  const assessmentQuestions = toComprehensionCheckFormat(
    getQuestionsForLesson("lesson02")
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Exit Ticket: Accruals and Deferrals
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              This short check confirms you can identify and reason through the four
              adjustment types. Take your time and think through each scenario.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
              <p className="font-bold text-indigo-900 mb-2">What This Checks:</p>
              <ul className="text-indigo-800 space-y-1">
                <li>Can you tell when revenue or expense timing is wrong?</li>
                <li>Can you identify which adjustment type applies to a scenario?</li>
                <li>Can you reason through the effect on financial statements?</li>
                <li>Do you understand why adjustments matter for accuracy?</li>
              </ul>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-3">
                Answer each question based on what you learned in this lesson about
                accruals, deferrals, and adjusting entries. Explanations appear after
                you submit each answer.
              </p>
              <div className="bg-white p-3 rounded border border-blue-200">
                <p className="text-blue-800 text-sm font-medium">Success Criteria:</p>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>Correctly identify accrued vs. deferred situations</li>
                  <li>Select the right accounts for each adjustment type</li>
                  <li>Calculate the correct period amount for deferred items</li>
                  <li>Explain how missing adjustments affects net income</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={assessmentQuestions}
            title="Accruals and Deferrals Exit Ticket"
            showExplanations={true}
          />

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">What Comes Next</h3>
            <p className="text-green-800">
              If you scored well, you have the foundation needed to understand the next
              lesson on closing entries. Closing entries are what happen <em>after</em>
              all the adjustments are posted—they reset the temporary accounts so the
              next month can start fresh.
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
