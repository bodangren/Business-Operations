import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"


export default function Phase5Content() {
  const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] }).slice(0, 5)

  return (
    <div className="bg-gradient-to-br from-slate-50 to-yellow-50">

      <div className="space-y-8">
        <div className="text-center space-y-4">
          <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">Phase 5: Assessment</Badge>
          <h2 className="text-3xl font-bold text-slate-900">Specific Identification & Weighted Average: Knowledge Check</h2>
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
      </div>

    </div>
  )
}