import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, AlertCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] }).slice(0, 5)

export default function Unit07Lesson05Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Audit and Explain</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Technical Check and Method Defense</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Show that you understand both the tool mechanics and the business reasoning behind your method choice.
              Answer the technical questions below, then write a short recommendation memo.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Technical Mastery Check"
            description="Select the best answer for each question. These test your understanding of workbook design, not just the math."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" /> Artifact Task: Method Recommendation Memo
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-3">
              <p className="font-medium">Write a short memo (3-5 sentences) that answers:</p>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Which method (FIFO, LIFO, or Weighted Average) do you recommend for Sarah's business right now?</li>
                <li>What evidence from your workbook supports this choice? Cite specific COGS and Ending Inventory numbers.</li>
                <li>What is one risk or limitation of your recommendation?</li>
              </ol>
              <div className="mt-3 p-3 bg-white rounded border border-amber-200">
                <p className="text-sm text-slate-700">
                  <strong>Example structure:</strong> "We recommend [method] because [evidence from workbook].
                  This produces COGS of $[X] and Ending Inventory of $[Y], which [business impact].
                  One risk is [limitation], which we would monitor by [action]."
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" /> Quality Standard: Investor-Ready
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900">
              <p className="font-medium mb-2">Your recommendation is investor-ready when:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>The method choice is stated clearly in the first sentence</li>
                <li>At least two specific numbers from the workbook are cited as evidence</li>
                <li>One risk or limitation is acknowledged</li>
                <li>The memo is 3-5 sentences (not a paragraph dump)</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
