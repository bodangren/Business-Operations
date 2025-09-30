import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5"

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
              📊 Phase 5: Assessment
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Three‑Statement Automation: Professional Mastery</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate both technical accuracy and applied business judgment. Aim for investor‑ready clarity.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Mastery Check"
            description="8 questions on automation patterns, validation, and communication."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-800">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-yellow-900">
              <ul className="list-disc list-inside space-y-1">
                <li>All links use tables and exact matches.</li>
                <li>Scenario switch is readable and controls the right drivers.</li>
                <li>Validation flags are present and accurate.</li>
                <li>Summary is clear, concise, and professional.</li>
              </ul>
              <p className="mt-3 text-sm">
                Career connection: Analysts and consultants rely on these patterns daily to maintain model integrity
                under time pressure while communicating results to executives and investors.
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

