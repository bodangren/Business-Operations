import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

export default function Phase5Page() {
  const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-4">
          <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Assessment</Badge>
          <h1 className="text-3xl font-bold text-slate-900">Specific Identification & Weighted Average: Knowledge Check</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Demonstrate your understanding of when and how to use these two inventory methods. 
            You've practiced the calculations — now show what you've learned.
          </p>
        </div>

        <ComprehensionCheck
          title="Method Recognition & Calculation"
          description="Answer these questions to show you understand which method fits which business and how each method works."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}