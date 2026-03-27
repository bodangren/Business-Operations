import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase5() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!
  
  const assessmentQuestions = [
    {
      id: "q1",
      question: "Which statement is ALWAYS true about every business transaction?",
      answers: [
        "Every transaction affects at least two components of the accounting equation",
        "Every transaction affects cash and equity",
        "Every transaction increases total assets",
        "Every transaction changes the owner's equity"
      ],
      explanation: "The fundamental rule of double-entry bookkeeping is that every transaction affects at least two components of the accounting equation (Assets = Liabilities + Equity), and the equation must always stay balanced."
    },
    {
      id: "q2",
      question: "When a business buys equipment on credit (promises to pay later), what happens?",
      answers: [
        "Equipment (assets) increases; Accounts Payable (liabilities) increases; Equity unchanged",
        "Cash decreases; Equipment increases",
        "Equipment increases; Equity increases",
        "Cash decreases; Liabilities decrease"
      ],
      explanation: "Buying on credit means no cash changes yet. Equipment asset increases because business owns the equipment. Accounts Payable liability increases because business now owes money. Both sides increase equally, so equity unchanged."
    },
    {
      id: "q3",
      question: "Which transaction represents 'Assets and Equity Both Decrease'?",
      answers: [
        "Paying an expense (like rent or salaries) with cash",
        "Buying equipment on credit",
        "Earning revenue from customer payments",
        "Paying off a debt"
      ],
      explanation: "When paying an expense, cash (assets) decreases and equity also decreases because expenses reduce the owner's stake in the business. This is the 'Assets and Equity Both Decrease' pattern."
    },
    {
      id: "q4",
      question: "Sarah has $5,000 in assets and $2,000 in liabilities. What is her equity?",
      answers: [
        "$3,000",
        "$7,000",
        "$2,000",
        "$5,000"
      ],
      explanation: "Using the accounting equation: Assets = Liabilities + Equity. So $5,000 = $2,000 + Equity. Therefore: Equity = $5,000 - $2,000 = $3,000."
    },
    {
      id: "q5",
      question: "What is the KEY signal that tells you to use the 'Asset-to-Asset Exchange' pattern?",
      answers: [
        "One asset decreases and another increases by the same amount, with no change to liabilities or equity",
        "Cash decreases and liabilities increase",
        "Equity increases and assets increase",
        "Both assets and liabilities decrease"
      ],
      explanation: "The Asset-to-Asset Exchange pattern is identified when you see one asset (like cash) decreasing while another asset (like equipment, inventory, or investments) increases by exactly the same amount. Total assets don't change, and liabilities/equity stay the same."
    },
    {
      id: "q6",
      question: "When a customer pays an invoice that was billed last month, what happens?",
      answers: [
        "Cash increases; Accounts Receivable decreases; Equity unchanged",
        "Cash increases; Equity increases",
        "Only cash increases",
        "Accounts Receivable decreases; Equity decreases"
      ],
      explanation: "This is collecting a receivable. Cash increases, Accounts Receivable (an asset) decreases by the same amount. Total assets don't change, and equity doesn't change because revenue was already recorded when the work was done and the invoice was created."
    },
    {
      id: "q7",
      question: "Which misconception about transaction classification is most common?",
      answers: [
        "Thinking that paying an expense doesn't change equity because 'it's just spending money'",
        "Thinking that every transaction must involve cash",
        "Believing that assets always increase with revenue",
        "Assuming that equity never decreases"
      ],
      explanation: "Many students think paying an expense doesn't affect equity because they focus only on cash changing. But expenses reduce equity because they decrease the owner's stake in the business. This is why we track both the cash flow AND the equity effect."
    },
    {
      id: "q8",
      question: "Sarah's business starts with: $10,000 assets, $3,000 liabilities, $7,000 equity. After a $500 cash expense, what are the new values?",
      answers: [
        "$9,500 (assets), $3,000 (liabilities), $6,500 (equity)",
        "$10,000 (assets), $3,500 (liabilities), $6,500 (equity)",
        "$9,500 (assets), $3,000 (liabilities), $7,000 (equity)",
        "$10,500 (assets), $3,000 (liabilities), $7,500 (equity)"
      ],
      explanation: "Cash expense: Assets decrease by $500 (from $10,000 to $9,500). Equity decreases by $500 (from $7,000 to $6,500) because expenses reduce the owner's stake. Liabilities unchanged at $3,000. Check: $9,500 = $3,000 + $6,500 ✅"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-block bg-rose-100 text-rose-800 text-lg px-4 py-2 rounded-lg font-semibold">
              Phase 5: Assessment
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-rose-50 p-6 rounded-lg border border-rose-200">
              <h2 className="text-2xl font-bold text-rose-900 mb-4">📋 Exit Ticket: Transaction Classification</h2>
              
              <p className="text-lg leading-relaxed text-rose-800 mb-4">
                This short assessment checks your understanding of transaction classification, 
                equation effects, and common misconceptions. Take your time and think through 
                each scenario carefully.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-rose-400">
                <p className="font-semibold text-rose-900 mb-2">Assessment Focus:</p>
                <ul className="space-y-1 text-rose-800">
                  <li>• <strong>Recognition:</strong> Identifying which equation components change</li>
                  <li>• <strong>Calculation:</strong> Determining correct amounts and directions</li>
                  <li>• <strong>Patterns:</strong> Matching transactions to the four pattern types</li>
                  <li>• <strong>Misconceptions:</strong> Avoiding common errors in transaction analysis</li>
                  <li>• <strong>Balance:</strong> Verifying equation stays balanced</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-blue-300 shadow-sm mb-6">
              <div className="flex items-center gap-4">
                <div className="text-4xl">⏱️</div>
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-1">Assessment Instructions</h3>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Read each question carefully and consider the business scenario</li>
                    <li>• Use the accounting equation: <strong className="font-mono">Assets = Liabilities + Equity</strong></li>
                    <li>• Think about which components actually change in the transaction</li>
                    <li>• Verify that your answer keeps the equation balanced</li>
                    <li>• After submitting, review explanations for any incorrect answers</li>
                  </ul>
                </div>
              </div>
            </div>

            <ComprehensionCheck 
              questions={assessmentQuestions}
              title="Transaction Classification Assessment"
              showExplanations={true}
              allowRetry={true}
            />

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-bold text-green-900 mb-3">✅ Assessment Complete!</h3>
              
              <p className="text-green-800 mb-4">
                You've demonstrated your understanding of transaction classification and how 
                business events affect the accounting equation. This skill is fundamental 
                foundation for the formal accounting language you'll learn next.
              </p>

              <div className="bg-white p-4 rounded border border-green-300">
                <h4 className="font-semibold text-green-900 mb-2">What You've Mastered:</h4>
                <ul className="space-y-2 text-green-800">
                  <li>• Classifying transactions into assets, liabilities, and equity</li>
                  <li>• Identifying transaction patterns (exchange, increase, decrease)</li>
                  <li>• Calculating equation changes and verifying balance</li>
                  <li>• Recognizing and avoiding common misconceptions</li>
                  <li>• Applying your understanding to real business scenarios</li>
                </ul>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-3">🔮 Bridge to Next Lesson</h3>
              <p className="text-purple-800 mb-3">
                In Lesson 03, you'll learn the formal accounting language: <strong>debits</strong> 
                and <strong>credits</strong>. These are just a structured way to record exactly 
                the transaction patterns you've mastered in this lesson.
              </p>
              <p className="text-purple-800">
                When you understand debits and credits, you'll be ready to build Sarah's 
                formal ledger system—the foundation of her self-auditing workbooks.
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
