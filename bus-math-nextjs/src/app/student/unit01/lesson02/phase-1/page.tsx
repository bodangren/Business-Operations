import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase1() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 1)!
  const hookQuestions = [
    {
      id: "q1",
      question: "Sarah's TechStart Solutions earned $3,950 from three clients. If she spent $500 on software subscriptions, what would you need to know to determine if her business is financially healthy?",
      answers: [
        "Her income, expenses, debts, and what she owns",
        "Only her total income",
        "Just her expenses",
        "Only what she owes to others"
      ],
      explanation: "To assess financial health, you need the complete picture: what the business owns (assets), owes (liabilities), and the owner's stake (equity)."
    },
    {
      id: "q2",
      question: "When Sarah receives a $2,200 payment from the bakery client, her business becomes more valuable. Where does this increased value show up?",
      answers: [
        "In both her cash and her ownership stake",
        "Only in her cash",
        "Only in her debts", 
        "It doesn't affect business value"
      ],
      explanation: "When a business earns money, both its cash (assets) and the owner's stake (equity) increase, maintaining perfect balance."
    }
  ]

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
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
              🎯 The Challenge of Perfect Balance
            </h2>
            
            <p className="text-lg leading-relaxed text-blue-800 mb-4">
              Imagine Sarah looking at her three successful projects: $2,200 from the bakery, 
              $650 from the pet grooming service, and $1,100 from the dental office. That's 
              $3,950 in total! But she also has $500 in monthly software subscriptions, 
              a $1,200 computer, and she owes $300 on a printer she bought last month.
            </p>
            
            <p className="text-lg leading-relaxed text-blue-800 mb-4">
              Here's the million-dollar question that every investor asks: <strong>Is Sarah's 
              business financially balanced?</strong> How can we tell if all these numbers 
              add up correctly?
            </p>
            
            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <p className="font-semibold text-blue-900 mb-2">Today's Learning Focus:</p>
              <p className="text-blue-800">
                We're going to discover the one unbreakable rule that every business, 
                from Sarah's startup to the largest corporation, must follow to maintain 
                perfect financial balance.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-6">
            <h3 className="font-semibold text-yellow-900 mb-2">🤔 Think About This</h3>
            <p className="text-yellow-800">
              Before we dive into the solution, consider: What would convince you that 
              a business is managing its money responsibly? What would make you confident 
              enough to invest in Sarah's company?
            </p>
          </div>

          <ComprehensionCheck 
            questions={hookQuestions}
            title="Engagement Check: Understanding Business Balance"
            showExplanations={true}
          />
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