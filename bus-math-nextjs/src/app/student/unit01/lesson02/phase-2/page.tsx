import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import AccountCategorization from "@/components/drag-drop-exercises/AccountCategorization"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase2() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!
  const conceptQuestions = [
    {
      id: "q1",
      question: "Sarah buys a $1,200 computer and pays cash immediately. Which parts of the accounting equation change?",
      answers: [
        "One asset (cash) decreases, another asset (computer) increases",
        "Only cash asset decreases",
        "Assets decrease, liabilities increase",
        "Equity increases"
      ],
      explanation: "When Sarah pays cash for a computer, her Cash asset decreases by $1,200 while her Computer Equipment asset increases by $1,200. Total assets stay the same, so equation stays balanced."
    },
    {
      id: "q2",
      question: "Sarah receives $2,200 payment from bakery client. What happens to the accounting equation?",
      answers: [
        "Cash (assets) increases by $2,200, Equity increases by $2,200",
        "Only cash increases",
        "Cash increases, liabilities decrease",
        "Equity only increases"
      ],
      explanation: "When Sarah earns revenue, Cash (assets) increases by $2,200 and Equity also increases by $2,200. Both sides of equation increase equally, keeping it balanced. Equity increases because the business becomes more valuable."
    },
    {
      id: "q3",
      question: "Sarah buys a $600 printer but agrees to pay next month. Which equation components are affected?",
      answers: [
        "Equipment (assets) increases, Accounts Payable (liabilities) increases",
        "Only equipment increases",
        "Cash decreases, equipment increases",
        "Only liabilities increase"
      ],
      explanation: "Since Sarah hasn't paid cash yet, Cash doesn't change. Equipment asset increases by $600 because she now owns the printer. Accounts Payable liability also increases by $600 because she owes money. Both sides increase equally."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Phase 2: Explicit Instruction and Guided Practice
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">📚 Classifying Transactions: The Rule</h2>
              
              <p className="text-lg leading-relaxed text-green-800 mb-4">
                Every business transaction follows one consistent pattern. Sarah's events at TechStart Solutions 
                all work the same way—once you understand the pattern.
              </p>

              <div className="bg-white p-6 rounded-lg border-2 border-green-400 mb-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 text-center">The Transaction Rule</h3>
                <p className="text-lg text-center text-green-800 mb-4">
                  <strong>Every transaction affects at least two components</strong> of the accounting equation, 
                  and those changes <strong>must balance perfectly</strong>.
                </p>
               
                
                <div className="text-center bg-green-100 p-4 rounded-lg">
                  <p className="text-sm text-green-700 mb-2">The three equation components:</p>
                  <div className="flex justify-center gap-4 text-lg font-bold">
                    <span className="text-green-900">Assets</span>
                    <span>=</span>
                    <span className="text-red-900">Liabilities</span>
                    <span>+</span>
                    <span className="text-purple-900">Equity</span>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-green-800">
                When we classify transactions, we ask: <strong>Which components change?</strong> and 
                <strong>By how much?</strong> The answer must always keep the equation balanced.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🔍 Three Real Transaction Examples</h3>
              
              <div className="space-y-6">
                
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Example 1: Buying Computer with Cash</h4>
                  <p className="text-blue-800 mb-3">
                    Sarah buys a $1,200 computer for design work and pays cash immediately.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-blue-900 mb-2">What Sarah owns (Assets):</p>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• <strong>Cash:</strong> Decreases by $1,200 (she spent it)</li>
                        <li>• <strong>Computer Equipment:</strong> Increases by $1,200 (she owns it now)</li>
                        <li className="font-semibold mt-2 pt-2 border-t border-blue-200">Total Assets: No net change</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-blue-200">
                      <p className="font-semibold text-blue-900 mb-2">Equation Balance:</p>
                      <div className="text-sm text-blue-800 space-y-2">
                        <p>Before: <span className="font-mono">$X = Liabilities + Equity</span></p>
                        <p>After: <span className="font-mono">$X - $1,200 + $1,200 = Liabilities + Equity</span></p>
                        <p className="font-semibold text-green-700 mt-2">Result: ✅ Still balanced</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-blue-100 p-2 rounded text-center text-sm text-blue-800">
                    <strong>Key point:</strong> One asset decreased, another increased. Total assets unchanged.
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold font-bold text-purple-900 mb-2">Example 2: Receiving Payment</h4>
                  <p className="text-purple-800 mb-3">
                    The bakery client pays Sarah $2,200 for completed website work.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-purple-200">
                      <p className="font-semibold text-purple-900 mb-2">What changed:</p>
                      <ul className="text-sm text-purple-800 space-y-1">
                        <li>• <strong>Cash (Asset):</strong> Increases by $2,200</li>
                        <li>• <strong>Equity:</strong> Increases by $2,200 (business more valuable)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-purple-200">
                      <p className="font-semibold text-purple-900 mb-2">Equation Balance:</p>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p>Before: <span className="font-mono">Assets = Liabilities + Equity</span></p>
                        <p>After: <span className="font-mono">Assets + $2,200 = Liabilities + Equity + $2,200</span></p>
                        <p className="font-semibold text-green-700 mt-2">Result: ✅ Still balanced</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-purple-100 p-2 rounded text-center text-sm text-purple-800">
                    <strong>Key point:</strong> Both sides increased by same amount. Still balanced.
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Example 3: Buying on Credit</h4>
                  <p className="text-red-800 mb-3">
                    Sarah buys a $600 printer but tells the supplier she'll pay next month.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-semibold text-red-900 mb-2">What changed:</p>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• <strong>Equipment (Asset):</strong> Increases by $600 (owns printer now)</li>
                        <li>• <strong>Accounts Payable (Liability):</strong> Increases by $600 (owes money)</li>
                        <li>• <strong>Cash:</strong> No change (hasn't paid yet)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded border border-red-200">
                      <p className="font-semibold text-red-900 mb-2">Equation Balance:</p>
                      <div className="text-sm text-red-800 space-y-2">
                        <p>Before: <span className="font-mono">Assets = Liabilities + Equity</span></p>
                        <p>After: <span className="font-mono">Assets + $600 = Liabilities + $600 + Equity</span></p>
                        <p className="font-semibold text-green-700 mt-2">Result: ✅ Still balanced</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-3 bg-red-100 p-2 rounded text-center text-sm text-red-800">
                    <strong>Key point:</strong> Asset increased, liability increased. Cash unchanged.
                  </div>
                </div>

              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">🎮 Practice: Classify Accounts</h3>
              
              <p className="text-lg leading-relaxed text-yellow-800 mb-4">
                Before you can classify transactions, you need to recognize which accounts belong to 
                Assets, Liabilities, or Equity. Let's practice with real business accounts.
              </p>
              
              <p className="text-yellow-800 mb-4">
                Drag each account below to its correct category. Think about Sarah's business: 
                does she <strong>own</strong> it? <strong>owe</strong> it? Or is it her 
                <strong>stake</strong> in the business?
              </p>

              <AccountCategorization />
            </div>

            <ComprehensionCheck 
              questions={conceptQuestions}
              title="Understanding Transaction Classification"
              showExplanations={true}
            />

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-3">💡 Pattern Recognition</h3>
              <p className="text-blue-800 mb-3">
                Notice the pattern in all three examples:
              </p>
              <ul className="space-y-2 text-blue-800">
                <li>• <strong>Example 1:</strong> Asset-to-asset exchange (cash ↔ equipment)</li>
                <li>• <strong>Example 2:</strong> Both assets and equity increased (earn revenue)</li>
                <li>• <strong>Example 3:</strong> Both assets and liabilities increased (buy on credit)</li>
              </ul>
              <p className="text-blue-800 mt-3 font-semibold">
                In every case, the equation stayed balanced. That's the rule.
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
