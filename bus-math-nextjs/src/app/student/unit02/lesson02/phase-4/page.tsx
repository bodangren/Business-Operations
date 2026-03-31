import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import AdjustmentPractice from "@/components/exercises/AdjustmentPractice"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Zap } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase4() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">

          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-lg border border-slate-200 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Deliberate Practice: Adjusting Entries
            </h2>

            <p className="text-lg leading-relaxed mb-4">
              You have learned the four adjustment types and worked through guided examples.
              Now it is time to practice until you can do this reliably on your own.
            </p>

            <p className="text-lg leading-relaxed mb-4">
              Each round gives you a new business scenario. You must:
            </p>

            <ol className="list-decimal list-inside space-y-1 text-slate-800">
              <li>Identify which of the four adjustment types applies</li>
              <li>Name the debit and credit accounts</li>
              <li>Calculate the correct amount for <em>this period only</em></li>
            </ol>

            <div className="bg-white p-4 rounded border-l-4 border-slate-400 mt-4">
              <p className="font-bold text-slate-900 mb-2">Mastery Target:</p>
              <p className="text-slate-800">
                Get <strong>3 consecutive correct</strong> answers to demonstrate mastery.
                If you miss one, the counter resets. Feedback is given after you submit—
                not during—so you learn to check your own work.
              </p>
            </div>
          </div>

          <Card className="border-amber-200 bg-amber-50 mb-8">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Why This Format
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-3">
                Sarah's Month-End Wizard will need to identify and post adjustments
                automatically every single month. The logic you are practicing here—
                classify, select accounts, calculate—is the exact logic the automation
                will follow. If you can do it manually with confidence, you can teach
                a spreadsheet to do it.
              </p>
              <p className="text-amber-800">
                The numbers change each round, but the <em>procedure</em> is the same.
                That is what makes this practice deliberate: you are drilling one skill
                shape until it becomes automatic.
              </p>
            </CardContent>
          </Card>

          <AdjustmentPractice masteryTarget={3} />

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">When You Reach Mastery</h3>
            <p className="text-green-800">
              If you hit 3 consecutive correct answers, you have demonstrated that you can
              reliably identify adjustment types, select the right accounts, and calculate
              the correct amounts. This is the exact skill set Sarah needs before she can
              automate her month-end close. Move on to Phase 5 to confirm your understanding
              with a short exit ticket.
            </p>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mt-6">
            <h3 className="text-xl font-bold text-red-900 mb-3">If You Are Stuck</h3>
            <p className="text-red-800 mb-3">
              If you keep missing the same type of adjustment, go back to Phase 2 and
              review the summary table. The key question is always:
            </p>
            <div className="bg-white p-3 rounded border border-red-200 font-medium text-red-900">
              Did cash move <em>before</em> or <em>after</em> the work?
            </div>
            <ul className="list-disc list-inside space-y-1 text-red-800 text-sm mt-3">
              <li>Cash <strong>after</strong> work = Accrued (revenue or expense)</li>
              <li>Cash <strong>before</strong> work = Deferred (revenue or expense)</li>
              <li>Revenue side = use Revenue accounts</li>
              <li>Expense side = use Expense accounts</li>
            </ul>
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
