import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const assessmentQuestions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] }).slice(0, 5)

const artifactTask = {
  title: "Executive Summary Artifact",
  description: "Write a brief executive summary (2-3 sentences) that a café owner would use to make a decision about expanding operations. Your summary must cite specific KPIs from your dashboard.",
  guidance: [
    "Name the scenario you recommend (Base/Stretch/Downside)",
    "Cite at least one specific KPI value and threshold",
    "State the action (expand/hold/reduce) and the reason",
    "Include one risk or limitation"
  ],
  exampleSummary: "Based on the Base scenario with a 12% profit margin exceeding our 10% threshold, I recommend expanding weekend hours. However, the Stretch scenario shows cash runway dropping to 8 weeks, which creates risk if customer traffic doesn't materialize."
}


export default function Phase5Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-yellow-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Integration & Dashboard Mastery Check</h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Show technical skill and business judgment. Aim for investor‑ready standards: clarity, reliability, and auditability.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Integration Mastery"
            description="Answer to confirm scenario control, linking patterns, and KPI decisions."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="mt-8 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">{artifactTask.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-800">{artifactTask.description}</p>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-sm font-medium text-gray-700 mb-2">Your summary should include:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                  {artifactTask.guidance.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm font-medium text-blue-800 mb-2">Example:</p>
                <p className="text-sm text-blue-700 italic">{artifactTask.exampleSummary}</p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}

