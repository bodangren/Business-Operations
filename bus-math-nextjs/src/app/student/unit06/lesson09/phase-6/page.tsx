import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[5]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-slate-700 text-white">
              Phase 6: Reflection and Handoff to Lesson 10
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Reflect on Milestone 2 and Prepare for Final Presentation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have completed your workbook, written your recommendation, rehearsed with your team,
              and received peer feedback. Now take a moment to reflect on what you learned, what still
              needs work, and what changes in Lesson 10 when you present to the panel.
            </p>
          </div>

          <Card className="border-l-4 border-l-slate-600">
            <CardHeader>
              <CardTitle className="text-xl">What You Accomplished Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                In Lesson 09, your team completed Milestone 2. Here is what you should have accomplished:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-2">Workbook Completion</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>TargetProfit sheet completed</li>
                    <li>PriceSensitivity sheet completed</li>
                    <li>ProfitMatrix sheet completed</li>
                    <li>Dashboard sheet completed with recommendation</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-2">Recommendation and Rehearsal</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Claim-evidence-risk statement written</li>
                    <li>Recommendation rehearsed as a team</li>
                    <li>Peer critique completed</li>
                    <li>At least one revision made based on feedback</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">What Must Carry Into Lesson 10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Lesson 10 is your final presentation day. Bring these items and be ready to present:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">1. Final Workbook</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Your complete workbook with all seven sheets. Make sure it is saved with the correct
                    file naming convention and accessible for submission.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">2. Presentation Notes</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Your claim-evidence-risk statement and any notes you want to reference during your
                    3-5 minute presentation. Practice delivering it smoothly.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">3. Revision Documentation</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Notes on what feedback you received and what revisions you made. This shows you
                    took the peer critique seriously and improved your work.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">4. Team Roles</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Decide who will present each part of your recommendation. Everyone should have
                    a clear role and know when to speak.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">What Changes in Lesson 10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Lesson 10 is different from today. Here is what to expect:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Presentation Format</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Each team will present their recommendation to a panel. The panel may include your
                    teacher, other students, and possibly guest evaluators. Your presentation should be
                    3-5 minutes followed by 2-3 minutes of Q&A.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Evaluation Standard</p>
                  <p className="text-sm text-gray-700 mt-1">
                    You will be evaluated using the rubric from Lesson 08 and 09: Technical Accuracy (50%),
                    Strategic Rationale (20%), Communication & Clarity (15%), Time Management (10%),
                    and Q&A Readiness (5%).
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Submission</p>
                  <p className="text-sm text-gray-700 mt-1">
                    After presenting, you will submit your final workbook and recommendation artifact.
                    Make sure your files are complete, named correctly, and ready to turn in.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Reflection</p>
                  <p className="text-sm text-gray-700 mt-1">
                    After submission, you will complete a final reflection on your team&apos;s pricing logic,
                    risk assessment, and model credibility. This reflection is part of your grade.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Final Checklist Before Lesson 10</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Workbook has all seven sheets complete and readable</li>
                <li>Dashboard clearly states the recommendation with cited evidence</li>
                <li>Claim-evidence-risk statement is written and rehearsed</li>
                <li>Team roles are assigned for the presentation</li>
                <li>Presentation is timed to 3-5 minutes</li>
                <li>Revision documentation is complete</li>
                <li>Files are named correctly and ready for submission</li>
                <li>Team has practiced answering potential Q&A questions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric Reminder (Capstone-Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations, and sensitivity analysis</li>
                <li><strong>Strategic Rationale — 20%</strong>: Recommendation aligns to business goals and addresses trade-offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, clear visuals, appropriate for stakeholder audience</li>
                <li><strong>Time Management — 10%</strong>: Pacing during presentation, clean transitions between sections</li>
                <li><strong>Q&A Readiness — 5%</strong>: Confident, concise responses to stakeholder questions</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 2 Reflection — What did your team learn about pricing and presenting recommendations?" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
