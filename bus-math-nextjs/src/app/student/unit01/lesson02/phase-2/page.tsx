import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase2() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!
  const conceptQuestions = [
    {
      id: "q1",
      question: "According to the accounting equation, if TechStart Solutions has $5,000 in assets and $1,500 in liabilities, what is Sarah's equity?",
      answers: [
        "$3,500",
        "$6,500", 
        "$5,000",
        "$1,500"
      ],
      explanation: "Equity = Assets - Liabilities. So $5,000 - $1,500 = $3,500. This represents Sarah's ownership stake in the business."
    },
    {
      id: "q2",
      question: "What happens to the accounting equation when Sarah receives $2,200 cash from the bakery client?",
      answers: [
        "Both assets and equity increase by $2,200",
        "Only assets increase", 
        "Assets increase, liabilities decrease",
        "The equation goes out of balance"
      ],
      explanation: "When Sarah earns revenue, her cash (assets) increases by $2,200 and her equity increases by $2,200, keeping the equation in perfect balance."
    },
    {
      id: "q3",
      question: "Which statement best describes why the accounting equation is universal?",
      answers: [
        "Every business, regardless of size, must maintain this mathematical balance",
        "It only applies to technology startups",
        "It's only required for public companies",
        "It's optional for small businesses"
      ],
      explanation: "The accounting equation applies to all businesses - from sole proprietorships to multinational corporations - because it represents the fundamental relationship between what a business owns, owes, and is worth to its owners."
    }
  ]

  const vocabularySentences = [
    {
      id: "vocab1",
      text: "Sarah's computer and cash in the bank are examples of business {blank} because the company owns them.",
      answer: "assets",
      hint: "These are valuable resources that the business owns"
    },
    {
      id: "vocab2", 
      text: "The $300 Sarah owes on her printer is a {blank} because it represents money the business must pay to others.",
      answer: "liability",
      hint: "This represents a debt or obligation to pay someone else"
    },
    {
      id: "vocab3",
      text: "Sarah's ownership stake in TechStart Solutions is called her {blank} in the business.",
      answer: "equity",
      hint: "This represents the owner's financial interest in the company"
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
            <h2 className="text-2xl font-bold text-blue-900 mb-4">📐 The Accounting Equation</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              All business, from the smallest startup to the largest corporation, operates under one 
              unbreakable rule. It's a rule of perfect balance, and it's the foundation of all 
              financial tracking. This is the <strong>Accounting Equation</strong>:
            </p>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-400 mb-6 text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">
                Assets = Liabilities + Equity
              </div>
              <p className="text-blue-800 italic">The Universal Rule of Business Balance</p>
            </div>

            <p className="text-lg leading-relaxed">
              Think of this equation as a scale that must always, without exception, be balanced. 
              Every single financial event in a business, called a transaction, will affect at 
              least two parts of this scale, but it will never go out of balance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-2">💰 Assets</h3>
              <p className="text-green-800 mb-2">All the valuable things the business <strong>owns</strong>.</p>
              <div className="text-sm text-green-700">
                <strong>Sarah's Examples:</strong>
                <ul className="list-disc list-inside mt-1">
                  <li>Cash in business bank account</li>
                  <li>Computer for design work</li>
                  <li>Money clients owe her (Accounts Receivable)</li>
                </ul>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h3 className="text-xl font-bold text-red-900 mb-2">📋 Liabilities</h3>
              <p className="text-red-800 mb-2">What the business <strong>owes</strong> to others. These are debts.</p>
              <div className="text-sm text-red-700">
                <strong>Sarah's Examples:</strong>
                <ul className="list-disc list-inside mt-1">
                  <li>$300 owed on printer purchase</li>
                  <li>Small business loan from bank</li>
                  <li>Monthly software subscription fees</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-2">👤 Equity</h3>
              <p className="text-purple-800 mb-2">The owner's share of the business value.</p>
              <div className="text-sm text-purple-700">
                <strong>Sarah's Examples:</strong>
                <ul className="list-disc list-inside mt-1">
                  <li>Initial personal investment</li>
                  <li>Accumulated business profits</li>
                  <li>Value remaining after paying debts</li>
                </ul>
              </div>
            </div>
          </div>

          <ComprehensionCheck 
            questions={conceptQuestions}
            title="Understanding the Accounting Equation"
            showExplanations={true}
          />

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">💡 Real Transaction Example</h3>
            <p className="text-yellow-800 mb-4">
              Let's see how the bakery payment affects Sarah's accounting equation:
            </p>
            
            <div className="bg-white p-4 rounded border">
              <p className="font-semibold mb-2">When the bakery pays Sarah $2,200:</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-green-700">Assets ⬆️ +$2,200</p>
                  <p className="text-xs text-green-600">Cash in bank account increases</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-purple-700">Equity ⬆️ +$2,200</p> 
                  <p className="text-xs text-purple-600">Business becomes more valuable</p>
                </div>
              </div>
              <p className="text-sm mt-3 text-center font-medium">
                Result: Left side (+$2,200) = Right side (+$2,200) ✅
              </p>
            </div>
          </div>

          <FillInTheBlank 
            sentences={vocabularySentences}
            title="Vocabulary Practice"
            description="Fill in the blanks with the correct accounting terms"
            showHints={true}
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