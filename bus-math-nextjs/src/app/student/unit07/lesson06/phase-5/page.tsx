import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] })

export default function Unit07Lesson06Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Audit and Explain</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Technical Check and Method Defense</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Prove that your workbook is trustworthy and that you can defend your method recommendation with evidence.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Part A: Technical Check */}
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-900">Part A: Technical Comprehension Check</CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                title="Inventory Dashboard — Concepts and Judgment"
                description="Answer to show technical accuracy and business insight. These questions test scenario switching, KPI logic, validation design, and method-fit reasoning."
                questions={assessmentQuestions}
                showExplanations={true}
              />
            </CardContent>
          </Card>

          {/* Part B: Method Defense Memo */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">Part B: Method Defense Memo</CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 space-y-4">
              <p className="font-medium">
                Write a short memo (4-6 sentences) defending your recommended inventory method for Sarah's business. Use exact numbers from your workbook as evidence.
              </p>

              <div className="bg-white p-4 rounded border space-y-3">
                <h3 className="font-bold text-red-800">Memo Structure</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    <strong>Claim:</strong> State which method you recommend (FIFO, LIFO, or Weighted Average) and for which scenario.
                  </li>
                  <li>
                    <strong>Evidence:</strong> Cite at least two specific numbers from your workbook (e.g., "Under LIFO, COGS is $730 vs. $670 under FIFO, reducing taxable income by $60").
                  </li>
                  <li>
                    <strong>Turnover impact:</strong> Report the inventory turnover and days-on-hand for your recommended method and compare to at least one alternative.
                  </li>
                  <li>
                    <strong>Risk:</strong> Name one limitation or risk of your recommendation (e.g., "LIFO reduces reported profit, which may concern investors reviewing growth metrics").
                  </li>
                  <li>
                    <strong>Business fit:</strong> Explain why this method fits Sarah's specific business situation (product type, price trend, stakeholder priorities).
                  </li>
                </ol>
              </div>

              <div className="bg-red-100 p-3 rounded text-sm">
                <p className="font-medium">Example opening sentence:</p>
                <p className="italic mt-1">
                  "For TechStart's Base scenario, I recommend FIFO because it produces a gross margin of 52.5% and inventory turnover of 3.2x, which demonstrates strong operational efficiency to potential investors. While LIFO would reduce taxable income by $60 through higher COGS, the lower reported profit could weaken Sarah's fundraising narrative."
                </p>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-3 rounded text-sm text-amber-900">
                <p className="font-medium">What makes a strong memo:</p>
                <ul className="list-disc list-inside mt-1 space-y-1">
                  <li>Uses exact workbook numbers, not estimates</li>
                  <li>Compares at least two methods with specific differences</li>
                  <li>Names a real risk, not a generic "every method has pros and cons"</li>
                  <li>Connects the recommendation to Sarah's actual business context</li>
                </ul>
              </div>

              <p className="text-sm font-medium">
                Deliverable: Write your memo in a text document or on paper. Bring it to the next lesson for peer review.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}