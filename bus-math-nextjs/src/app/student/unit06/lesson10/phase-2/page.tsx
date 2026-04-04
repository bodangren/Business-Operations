import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[1]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <PhaseHeader unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              Phase 2: Presentation Standards and Expectations
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Understand the Audience, Standards, and Submission Requirements</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Before presentations begin, every team needs to understand who will evaluate your work,
              what standards you will be held to, how long you have, and what you must submit.
              This phase makes all expectations explicit so there are no surprises.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">Who Is Your Audience?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Your presentation is not just for your teacher. You are presenting to a panel that may include:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Your Teacher</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Evaluates technical accuracy, workbook quality, and alignment with unit concepts.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Classmates</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Act as stakeholders (investors, customers, competitors). They ask questions and submit feedback.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Guest Evaluators (if available)</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Business teachers, local entrepreneurs, or PTA representatives who evaluate real-world readiness.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">Your Team</p>
                  <p className="text-sm text-gray-700 mt-1">
                    You are also your own audience — you should be able to look back at this presentation and be proud of your work.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">Presentation Standard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your presentation must meet these standards to be considered professional and complete:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Time Limit: 3-5 Minutes</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Stay within the time limit. Practice helps. Teams that go over time lose points for Time Management.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Structure: Claim, Evidence, Risk, Close</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Every presentation must include all four parts. Use the structure you practiced in Lesson 09.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Evidence: Cite Workbook Numbers</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Every claim must be backed by at least one specific number from your workbook. No vague statements.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Visuals: Show Your Dashboard</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Display your Dashboard sheet during the presentation. Point to specific sections as you discuss them.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900">Q&A: Answer with Evidence</p>
                  <p className="text-sm text-gray-700 mt-1">
                    When asked a question, reference your workbook. Say things like &quot;Our PriceSensitivity sheet shows...&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Submission Standard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                After presenting, your team must submit the following deliverables:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">1. Final Workbook</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>File named correctly: Period-TeamName-Unit06-Project.xlsx</li>
                    <li>All seven sheets complete and readable</li>
                    <li>Dashboard is polished and professional</li>
                    <li>All formulas produce correct results</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">2. Presentation Artifact</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Your claim-evidence-risk statement (written version)</li>
                    <li>Can be a short memo, slide deck, or written notes</li>
                    <li>Must include the same content as your oral presentation</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">3. Reflection</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Individual reflection on what you learned about pricing</li>
                    <li>How your team balanced competitiveness with profitability</li>
                    <li>What you would do differently next time</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Timing Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Here is how the rest of today will flow:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Minutes 0-10:</strong> Final polish of workbook and presentation notes (Phase 1)</li>
                <li><strong>Minutes 10-15:</strong> Review standards, audience, and submission expectations (Phase 2)</li>
                <li><strong>Minutes 15-35:</strong> Team presentations with Q&A (Phase 3)</li>
                <li><strong>Minutes 35-40:</strong> Audience review and feedback submission (Phase 4)</li>
                <li><strong>Minutes 40-45:</strong> Submit final deliverables and reflect (Phases 5-6)</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle>Final Checklist Before Presenting</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Workbook is complete, polished, and named correctly</li>
                <li>Dashboard clearly states the recommendation with cited evidence</li>
                <li>Claim-evidence-risk statement is written and rehearsed</li>
                <li>Team roles are assigned and each speaker knows their part</li>
                <li>Presentation is timed to 3-5 minutes</li>
                <li>You know which supporting sheet you will show during the presentation</li>
                <li>You are ready to answer questions using workbook evidence</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
