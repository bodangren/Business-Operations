import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit03Data}
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
            <h2 className="text-3xl font-bold text-gray-900">Check Your Links and Defend the Model</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Prove your workbook is trustworthy. Answer the technical questions below, then write
              a short explanation of how your three statements connect.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Technical Check"
            description="Questions on cross-sheet linking patterns, failure modes, and integrity checks."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Artifact Task: Explain the Financial Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-yellow-900">
              <p className="text-sm">
                Write a short memo (4–6 sentences) to Sarah explaining how her three-statement model works.
                Your memo should answer these questions:
              </p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Which two numbers flow between statements, and why do they matter?</li>
                <li>What happens to the Balance Sheet when Revenue increases by $1,000?</li>
                <li>How do the integrity checks prove the model is correct?</li>
                <li>What would you tell an investor who asks, &ldquo;How do I know these numbers are reliable?&rdquo;</li>
              </ol>
              <div className="p-3 bg-white rounded border mt-3">
                <p className="text-xs text-gray-600 font-medium mb-1">Example opening:</p>
                <p className="text-sm italic text-gray-700">
                  &ldquo;Sarah, your three statements are now connected so that one change flows through the entire model.
                  Net Income from your Income Statement automatically updates Retained Earnings on the Balance Sheet,
                  which means your equity grows as the business earns profit. The Cash Flow Statement ties back
                  to the Balance Sheet cash line, so you can always verify the cash number is consistent...&rdquo;
                </p>
              </div>
              <p className="text-xs text-yellow-800 mt-2">
                Save your memo in the workbook or submit it separately. This is the kind of explanation
                a financial analyst gives when defending a model to a manager or investor.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Peer Review Checklist</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900 text-sm">
              <p>Exchange workbooks with a partner and check:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>All three cross-sheet links are present and correct</li>
                <li>Integrity checks all show &ldquo;OK&rdquo;</li>
                <li>Changing a number on one tab updates the others</li>
                <li>The memo explains the connections clearly</li>
              </ul>
              <p className="text-xs mt-2">
                Give your partner one strength and one suggestion for improvement.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
