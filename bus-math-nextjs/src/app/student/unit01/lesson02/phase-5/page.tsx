import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit01Phase5ComprehensionCheckItems } from "@/data/question-banks/unit01-phase5"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase5() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!
  const assessmentQuestions = getUnit01Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] })

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-8">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">📋 Learning Assessment</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              This assessment measures your understanding of the accounting equation and its 
              application to business transactions. Take your time and think through each 
              scenario carefully.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-indigo-400">
              <p className="font-semibold text-indigo-900 mb-2">Assessment Focus:</p>
              <ul className="list-disc list-inside space-y-1 text-indigo-800">
                <li>Understanding the accounting equation formula</li>
                <li>Identifying Assets, Liabilities, and Equity</li>
                <li>Calculating missing components of the equation</li>
                <li>Analyzing transaction effects on equation balance</li>
                <li>Explaining the universal nature of the equation</li>
              </ul>
            </div>
          </div>

          <ComprehensionCheck 
            questions={assessmentQuestions}
            title="Accounting Equation Mastery Assessment"
            showExplanations={true}
            allowRetry={true}
          />

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-8">
            <h3 className="text-xl font-bold text-green-900 mb-3">✅ Assessment Complete!</h3>
            <p className="text-green-800 mb-3">
              You have demonstrated your understanding of the accounting equation. This fundamental 
              concept will be the foundation for everything we learn about financial record-keeping 
              and ledger construction.
            </p>
            <p className="text-green-800">
              <strong>Next:</strong> In our closing phase, we'll reflect on how this equation 
              connects to Sarah's goal of building investor confidence through "clean books."
            </p>
          </div>
        </div>
      </div>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
