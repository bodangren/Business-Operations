import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Scale, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"


const transferCheck = [
  ...getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson07"] }).slice(0, 2),
  {
    id: "lesson07-q3",
    question: "A teammate presents a dashboard with strong visuals but no note explaining where each number came from. What should the peer audit recommend?",
    answers: [
      "Add a short evidence trail so every figure can be traced back to the source data",
      "Remove the visuals so the dashboard looks less finished",
      "Replace the numbers with estimates that are easier to explain",
      "Accept the dashboard because presentation quality is the only standard"
    ],
    explanation: "An investor-ready workbook has to show its work. A traceable evidence trail lets a reviewer confirm each figure instead of trusting the visuals."
  }
]

export default function Phase5Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-yellow-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-yellow-100 text-yellow-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">✅ Phase 5: Transfer Check and Peer Audit</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Prove You Understand the Project Standard</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Before the real project begins, confirm you can evaluate workbook quality against the Definition of Done. Answer the transfer check, then audit a classmate's work using the same criteria your teacher will use.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-900 flex items-center gap-2">
                <Scale className="h-5 w-5" />
                Part A: Transfer Comprehension Check
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                title="Project Readiness: Evidence and Quality"
                description="These questions test whether you understand what makes an inventory workbook trustworthy and what you must carry into the independent project."
                questions={transferCheck}
                showExplanations={true}
              />
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Part B: Peer Audit
              </CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-900 space-y-4">
              <p className="font-medium">
                Exchange workbooks with a partner. Use the Definition of Done from Phase 2 to evaluate their work. Focus on logic chain, evidence, and clarity — not formatting preferences.
              </p>

              <div className="bg-white p-4 rounded border space-y-3">
                <h3 className="font-bold text-emerald-800">Peer Audit Routine</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>
                    <strong>Open their workbook.</strong> Check that all required sheets exist: Inputs, Valuation, MethodCompare, Checks, Dashboard, Recommendation.
                  </li>
                  <li>
                    <strong>Run the GAFS check.</strong> For each method, does COGS + Ending Inventory = GAFS? Note any failures.
                  </li>
                  <li>
                    <strong>Read the recommendation.</strong> Does it cite specific workbook numbers? Does it name a risk? Write down what is strong and what is missing.
                  </li>
                  <li>
                    <strong>Check for visible errors.</strong> Are there any #N/A, #REF!, or #DIV/0! errors? Are validation flags present?
                  </li>
                  <li>
                    <strong>Check the evidence chain.</strong> Can you trace the recommendation back to specific numbers in the Valuation and MethodCompare sheets?
                  </li>
                </ol>
              </div>

              <PeerCritiqueForm
                projectTitle="Unit 07 Inventory Analysis — Rehearsal Workbook"
                peerName="Partner"
                unitNumber={7}
              />

              <div className="bg-emerald-100 p-3 rounded text-sm">
                <p className="font-medium mb-1">Your feedback must include:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>One clear strength:</strong> What does their workbook do well? Be specific (e.g., "GAFS check passes for all methods and the recommendation cites exact COGS numbers")</li>
                  <li><strong>One clear improvement:</strong> What is the most important thing they should fix before the real project? Be specific (e.g., "The recommendation does not name any risk — add a limitation statement")</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
