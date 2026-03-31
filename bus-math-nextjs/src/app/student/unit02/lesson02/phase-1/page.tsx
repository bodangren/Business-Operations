import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertTriangle, ArrowRight } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase1() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 1)!

  const hookQuestions = [
    {
      id: "hook1",
      question: "In Lesson 01, Sarah spent an entire weekend on her month-end close. What made it so slow?",
      answers: [
        "Every tiny transaction had to be checked, traced, and matched by hand",
        "Her computer kept crashing during the close",
        "She had too many clients to manage",
        "Her internet connection was unreliable"
      ]
    },
    {
      id: "hook2",
      question: "Sarah completed a $500 social media campaign on March 28 but won't invoice until April 5. Under cash accounting, when is this revenue recorded?",
      answers: [
        "Not until the cash actually arrives in April (or later)",
        "On March 28 when the work was completed",
        "On March 31 when the month ends",
        "It is never recorded"
      ]
    },
    {
      id: "hook3",
      question: "If Sarah only records revenue when cash hits her bank, what problem does this create for her March income statement?",
      answers: [
        "It understates March revenue because earned work is missing",
        "It overstates March revenue because cash is counted twice",
        "There is no problem - cash accounting is always accurate",
        "It only affects the balance sheet, not the income statement"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h2 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              The Timing Problem Sarah Cannot Ignore
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              In Lesson 01 you saw Sarah drowning in manual work during her first real month-end close.
              But the deeper problem was not just speed—it was <strong>timing</strong>.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              At the end of March, Sarah looked at her bank account and saw $4,200 in deposits.
              She looked at her invoice log and saw she had billed $5,800 worth of work.
              Neither number told her how much revenue she actually <em>earned</em> in March.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-amber-400 mb-4">
              <p className="font-bold text-amber-900 mb-2">The Friction Point:</p>
              <p className="text-amber-800">
                Cash moves on its own schedule. Work gets done on a different schedule.
                If Sarah only tracks cash, her income statement will lie about how the
                business actually performed each month. Investors and lenders need the truth.
              </p>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Predict Before You Read
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Here are three real situations from Sarah's March. For each one, predict
                whether her <strong>March revenue</strong> should include that amount or not.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">Situation A:</p>
                  <p className="text-blue-800 text-sm">
                    A client paid Sarah $1,200 on March 15 for a six-month social media package.
                    She has only delivered about half of March's portion so far.
                  </p>
                  <p className="text-blue-700 text-sm mt-2 italic">
                    Should all $1,200 count as March revenue? Some of it? None of it?
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">Situation B:</p>
                  <p className="text-blue-800 text-sm">
                    Sarah finished a $500 website redesign on March 28. She will not send
                    the invoice until April 5. The client will pay in mid-April.
                  </p>
                  <p className="text-blue-700 text-sm mt-2 italic">
                    Should the $500 count as March revenue even though no cash has arrived?
                  </p>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-1">Situation C:</p>
                  <p className="text-blue-800 text-sm">
                    Sarah paid $600 on March 1 for a three-month insurance policy covering
                    March, April, and May.
                  </p>
                  <p className="text-blue-700 text-sm mt-2 italic">
                    Should the full $600 count as a March expense? Some of it? None of it?
                  </p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-100 rounded border border-blue-300">
                <p className="text-blue-900 font-medium text-sm">
                  Discuss your predictions with a partner before moving to Phase 2.
                  There is no single right answer yet—the point is to feel the tension.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 mb-8">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Why This Lesson Matters for the Month-End Wizard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-3">
                Every month-end close has the same core challenge: <strong>cash timing does not
                match work timing</strong>. The adjusting entries you will learn in this lesson
                are the exact entries that Sarah's automation must produce every single month.
              </p>
              <p className="text-green-800">
                If you cannot identify which adjustments are needed and why, no amount of
                Excel automation will save you. You will just automate the wrong answer faster.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={hookQuestions}
            title="Check Your Understanding"
            showExplanations={true}
          />
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
