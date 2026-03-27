import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase1() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 1)!
  const hookQuestions = [
    {
      id: "q1",
      question: "From Lesson 01, what is the accounting equation that all businesses must follow?",
      answers: [
        "Assets = Liabilities + Equity",
        "Income - Expenses = Profit",
        "Assets + Liabilities = Equity",
        "Cash = Revenue - Costs"
      ],
      explanation: "The accounting equation Assets = Liabilities + Equity is the universal rule that every business must follow. It represents the fundamental balance between what a business owns, owes, and is worth."
    },
    {
      id: "q2",
      question: "When Sarah receives a $2,200 payment from the bakery client, what must happen for the accounting equation to stay balanced?",
      answers: [
        "At least two components of the equation must change by equal amounts",
        "Only one component can change",
        "The equation will go out of balance temporarily",
        "Nothing needs to change because cash is just money"
      ],
      explanation: "Every business transaction affects at least two parts of the accounting equation, and those changes must balance perfectly. This is why accounting is called 'double-entry' bookkeeping."
    },
    {
      id: "q3",
      question: "Sarah's business has: $4,500 cash, $2,000 computer, $300 printer debt. What equation can you write?",
      answers: [
        "$6,500 = $300 + $6,200",
        "$6,500 = $300 + $[missing equity]",
        "$4.500 + $2,000 = $300",
        "The equation doesn't apply to small businesses"
      ],
      explanation: "Assets ($4,500 + $2,000 = $6,500) = Liabilities ($300) + Equity ($6,200). We can solve for equity: $6,500 - $300 = $6,200."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-block bg-blue-100 text-blue-800 text-lg px-4 py-2 rounded-lg font-semibold">
              Phase 1: Recycle and Introduce
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                🔄 From Lesson 01 to Today
              </h2>
              
              <p className="text-lg leading-relaxed text-blue-800 mb-4">
                Last lesson, you discovered that Sarah's TechStart Solutions operates under one unbreakable 
                rule: <strong className="text-blue-900">Assets = Liabilities + Equity</strong>. You saw 
                how the bakery payment, pet grooming work, and dental office project all fit into this 
                perfect balance.
              </p>
              
              <p className="text-lg leading-relaxed text-blue-800 mb-4">
                But here's the challenge Sarah faces now: Her business is having complex events every day. 
                She's buying equipment, taking on small debts, receiving payments, and paying expenses. 
                How can she track <strong>exactly how each event</strong> affects the equation?
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">🤔 The New Problem</h3>
              
              <p className="text-lg leading-relaxed text-yellow-800 mb-4">
                Consider Sarah's situation this week:
              </p>
              
              <div className="bg-white p-4 rounded border border-yellow-300 mb-4 space-y-2">
                <p className="font-semibold text-yellow-900">Sarah's Events:</p>
                <ul className="space-y-1 text-yellow-800">
                  <li>• Bought a $1,200 computer for design work</li>
                  <li>• Took out a $500 small business loan</li>
                  <li>• Received $2,200 payment from bakery client</li>
                  <li>• Paid $300 for monthly software subscriptions</li>
                  <li>• Bought a $600 printer (agreed to pay next month)</li>
                </ul>
              </div>
              
              <p className="text-yellow-800 mb-3">
                <strong>Think about it:</strong> For each event, which parts of the accounting equation change? 
                Do assets go up? Do liabilities increase? Does equity change?
              </p>
              
              <p className="text-yellow-800">
                Sarah can't just write "money in, money out" anymore. She needs to know <strong>which 
                specific accounts</strong> are affected and <strong>how the equation stays balanced</strong> 
                through every single business event.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-400 shadow-sm">
              <h3 className="text-xl font-bold text-green-900 mb-4">🎯 Today's Learning Focus</h3>
              
              <p className="text-lg leading-relaxed text-green-800 mb-4">
                We're going to solve Sarah's tracking problem by learning to:
              </p>
              
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">1</span>
                  <span><strong>Classify transactions</strong> into assets, liabilities, and equity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">2</span>
                  <span><strong>Show exactly how each business event</strong> moves the accounting equation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">3</span>
                  <span><strong>Verify the equation stays balanced</strong> after every transaction</span>
                </li>
              </ul>
            </div>

            <ComprehensionCheck 
              questions={hookQuestions}
              title="Quick Check: Accounting Equation Recall"
              showExplanations={true}
            />

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-3">💡 Why This Matters</h3>
              <p className="text-purple-800">
                Investors ask Sarah about every financial decision. When she can explain <strong>exactly how 
                each business event</strong> affects her accounting equation, she demonstrates that she 
                understands her financial picture deeply. This builds the investor confidence that "clean books" 
                are all about.
              </p>
            </div>

          </div>
        </section>
      </main>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
