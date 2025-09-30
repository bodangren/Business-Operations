import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5"

const currentPhase = lesson05Phases[4]
const assessmentQuestions = drawUnit05Phase5ComprehensionCheckItems(8, { lessonIds: ["lesson05"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Payroll Automation: Professional Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate both technical accuracy and business judgment. Aim for investor‑ready standards:
              clear logic, strong validation, and reliable summaries.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Mastery Check"
            description="8 questions on safe lookups, overtime, validation, and investor communication."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="space-y-1 text-blue-900">
              <ul className="list-disc list-inside">
                <li>Investor‑ready: Accurate, documented, and validated; audit flags visible</li>
                <li>Proficient: Mostly correct; minor gaps in validation or documentation</li>
                <li>Developing: Fragile formulas; hidden errors; unclear communication</li>
              </ul>
              <p className="mt-2 text-sm">Career link: Analysts and consultants maintain reliable payroll models, communicate risk clearly, and protect cash flow.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

