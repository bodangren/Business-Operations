import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import TrialBalanceSorting from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase4() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!
  const independentQuestions = [
    {
      id: "q1",
      question: "Sarah starts TechStart with $3,000 cash, a $2,000 computer, and a $1,000 loan. Using the accounting equation, what is her initial equity?",
      answers: [
        "$4,000",
        "$6,000",
        "$3,000",
        "$2,000"
      ],
      explanation: "Assets ($3,000 cash + $2,000 computer = $5,000) = Liabilities ($1,000 loan) + Equity (?). Therefore: $5,000 = $1,000 + Equity, so Equity = $4,000."
    },
    {
      id: "q2",
      question: "After completing three projects, Sarah's business has: $4,500 cash, $2,000 computer, $800 in receivables, $300 printer debt, and $1,000 loan. What is her current equity?",
      answers: [
        "$6,000",
        "$7,300", 
        "$5,000",
        "$4,200"
      ],
      explanation: "Assets: $4,500 + $2,000 + $800 = $7,300. Liabilities: $300 + $1,000 = $1,300. Equity: $7,300 - $1,300 = $6,000."
    },
    {
      id: "q3",
      question: "Sarah pays off the $300 printer debt with cash. What happens to the accounting equation?",
      answers: [
        "Assets decrease $300, Liabilities decrease $300, Equity unchanged",
        "Only liabilities decrease by $300",
        "Assets decrease $300, Equity increases $300",
        "The equation goes out of balance"
      ],
      explanation: "Cash (assets) decreases by $300, Printer Debt (liabilities) decreases by $300. Both sides of the equation decrease equally, keeping it balanced. Equity remains unchanged."
    }
  ]

  const scenarioSentences = [
    {
      id: "scenario1",
      text: "When Sarah borrows $5,000 from the bank, her {blank} increase because she has more cash.",
      answer: "assets",
      hint: "Cash is something the business owns"
    },
    {
      id: "scenario2",
      text: "When Sarah takes out a loan, her {blank} increase because she now owes money to the bank.",
      answer: "liabilities", 
      hint: "A loan creates a debt that must be repaid"
    },
    {
      id: "scenario3",
      text: "If Sarah's total assets are $8,000 and her total liabilities are $2,500, then her equity must be {blank} to keep the accounting equation balanced.",
      answer: "$5,500",
      hint: "Use the equation: Equity = Assets - Liabilities"
    },
    {
      id: "scenario4",
      text: "The accounting equation shows that equity equals assets {blank} liabilities.",
      answer: "minus",
      hint: "Think about the mathematical operation: Assets = Liabilities + Equity, so Equity = Assets ? Liabilities"
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
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">💪 Independent Application</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Now it's time to apply your understanding of the accounting equation to more complex 
              scenarios. You'll work through multi-step transactions and verify that the equation 
              always remains in perfect balance.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-purple-400">
              <p className="font-semibold text-purple-900 mb-2">Challenge:</p>
              <p className="text-purple-800">
                Analyze each transaction independently and prove that Assets = Liabilities + Equity 
                holds true in every situation, no matter how complex.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h3 className="text-xl font-bold text-blue-900 mb-3">📊 Sarah's Current Financial Position</h3>
            <p className="text-blue-800 mb-4">
              After one month of operation, let's examine TechStart Solutions' financial position:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-green-700 mb-2">Assets (What We Own)</h4>
                <ul className="text-sm space-y-1">
                  <li>Cash: $4,500</li>
                  <li>Computer: $2,000</li>
                  <li>Accounts Receivable: $800</li>
                  <li><strong>Total: $7,300</strong></li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-red-700 mb-2">Liabilities (What We Owe)</h4>
                <ul className="text-sm space-y-1">
                  <li>Bank Loan: $1,000</li>
                  <li>Printer Payment: $300</li>
                  <li><strong>Total: $1,300</strong></li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold text-purple-700 mb-2">Equity (Owner's Stake)</h4>
                <ul className="text-sm space-y-1">
                  <li>Sarah's Ownership: $6,000</li>
                  <li><strong>Total: $6,000</strong></li>
                </ul>
                <p className="text-xs mt-2 text-purple-600">
                  Check: $7,300 = $1,300 + $6,000 ✅
                </p>
              </div>
            </div>
          </div>

          <TrialBalanceSorting />

          <ComprehensionCheck 
            questions={independentQuestions}
            title="Independent Practice Problems"
            showExplanations={true}
          />

          <FillInTheBlank 
            sentences={scenarioSentences}
            title="Complex Scenario Analysis"
            description="Apply your understanding of the accounting equation to business scenarios"
            showHints={true}
          />

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Mastery Check</h3>
            <p className="text-green-800 mb-3">
              You've successfully applied the accounting equation to complex, real-world scenarios! 
              You can now:
            </p>
            <ul className="list-disc list-inside space-y-1 text-green-800">
              <li>Calculate missing components of the accounting equation</li>
              <li>Analyze how multiple transactions affect business balance</li>
              <li>Verify that any business transaction maintains the equation's balance</li>
              <li>Explain why this mathematical relationship is universal across all businesses</li>
            </ul>
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