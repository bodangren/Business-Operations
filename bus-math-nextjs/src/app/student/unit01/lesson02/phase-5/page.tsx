import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase5() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!
  const assessmentQuestions = [
    {
      id: "q1",
      question: "What is the accounting equation that all businesses must follow?",
      answers: [
        "Assets = Liabilities + Equity",
        "Revenue = Expenses + Profit",
        "Cash = Income - Expenses",
        "Equity = Assets + Liabilities"
      ],
      explanation: "The universal accounting equation is Assets = Liabilities + Equity. This fundamental relationship must always remain in balance for any business, regardless of size or industry."
    },
    {
      id: "q2",
      question: "In the accounting equation, what do Assets represent?",
      answers: [
        "Everything of value that the business owns",
        "Money the business owes to others",
        "The owner's personal wealth",
        "Monthly expenses of the business"
      ],
      explanation: "Assets are all the valuable resources owned by the business, including cash, equipment, inventory, and money owed by customers (accounts receivable)."
    },
    {
      id: "q3",
      question: "If Sarah's TechStart Solutions has $6,000 in assets and $2,000 in liabilities, what is her equity in the business?",
      answers: [
        "$4,000",
        "$8,000", 
        "$6,000",
        "$2,000"
      ],
      explanation: "Using the accounting equation: Assets = Liabilities + Equity, so $6,000 = $2,000 + Equity. Therefore, Equity = $6,000 - $2,000 = $4,000."
    },
    {
      id: "q4",
      question: "When Sarah receives $1,500 cash from a client for completed work, what happens to the accounting equation?",
      answers: [
        "Cash increases by $1,500 and equity increases by $1,500",
        "Only cash increases by $1,500",
        "Liabilities increase by $1,500",
        "The equation goes out of balance"
      ],
      explanation: "When earning revenue, cash (assets) increases by $1,500 and equity also increases by $1,500 because the business has become more valuable. The equation remains balanced: both sides increase by the same amount."
    },
    {
      id: "q5",
      question: "Sarah buys office supplies for $300 cash. How does this affect the accounting equation?",
      answers: [
        "One asset (cash) decreases by $300, another asset (supplies) increases by $300",
        "Assets increase by $300",
        "Liabilities increase by $300",
        "Equity decreases by $300"
      ],
      explanation: "This is an asset-to-asset exchange. Cash decreases by $300 while Office Supplies (another asset) increases by $300. Total assets remain the same, keeping the equation balanced."
    },
    {
      id: "q6",
      question: "Why is the accounting equation considered 'universal' across all businesses?",
      answers: [
        "Every business, regardless of size or type, must maintain this mathematical balance",
        "It only applies to technology companies",
        "It's optional for small businesses",
        "It only matters for public companies"
      ],
      explanation: "The accounting equation is universal because it represents the fundamental relationship between what any business owns, owes, and is worth to its owners. This applies to all businesses, from sole proprietorships to multinational corporations."
    },
    {
      id: "q7",
      question: "If a business has $10,000 in assets and $3,000 in equity, what is the amount of its liabilities?",
      answers: [
        "$7,000",
        "$13,000",
        "$10,000", 
        "$3,000"
      ],
      explanation: "Using Assets = Liabilities + Equity: $10,000 = Liabilities + $3,000. Therefore, Liabilities = $10,000 - $3,000 = $7,000."
    },
    {
      id: "q8",
      question: "Sarah takes out a $2,500 business loan and deposits it into her business account. What happens to each component of the accounting equation?",
      answers: [
        "Assets increase by $2,500 and liabilities increase by $2,500",
        "Only assets increase by $2,500",
        "Assets increase by $2,500 and equity increases by $2,500",
        "Liabilities decrease by $2,500"
      ],
      explanation: "The loan increases cash (assets) by $2,500 because money enters the business. It also increases liabilities by $2,500 because the business now owes this money to the bank. Both sides of the equation increase equally."
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