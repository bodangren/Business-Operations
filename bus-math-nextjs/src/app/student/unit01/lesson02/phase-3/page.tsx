import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase3() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!
  const practiceQuestions = [
    {
      id: "q1",
      question: "Sarah takes out a $5,000 business loan from a bank and deposits cash into business account. How does this transaction affect the equation?",
      answers: [
        "Cash (assets) increases by $5,000; Bank Loan Payable (liabilities) increases by $5,000",
        "Only cash increases by $5,000",
        "Cash increases, equity increases",
        "Liabilities decrease, equity increases"
      ],
      explanation: "When Sarah borrows money, Cash (assets) increases because business receives cash. Bank Loan Payable (liabilities) increases because business now owes this debt. Both sides of equation increase equally."
    },
    {
      id: "q2",
      question: "Sarah pays off her $300 printer debt with cash. What equation components change?",
      answers: [
        "Cash (assets) decreases by $300; Accounts Payable (liabilities) decreases by $300",
        "Only cash decreases",
        "Cash decreases, equity decreases",
        "Only liabilities decrease"
      ],
      explanation: "Paying a debt reduces cash (assets decrease) and also reduces what business owes (liabilities decrease). Both sides decrease equally, keeping equation balanced. Equity doesn't change."
    },
    {
      id: "q3",
      question: "Sarah invests an additional $2,000 of her personal money into TechStart Solutions. What happens?",
      answers: [
        "Cash (assets) increases by $2,000; Owner's Equity increases by $2,000",
        "Only cash increases",
        "Cash increases, liabilities increase",
        "Equity increases, liabilities decrease"
      ],
      explanation: "Personal investment increases business Cash (assets) and also increases Owner's Equity because Sarah's stake in business grows. Both sides increase equally."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-block bg-purple-100 text-purple-800 text-lg px-4 py-2 rounded-lg font-semibold">
              Phase 3: Deepening and Scaffold Fade
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">🔬 Taking Classification Further</h2>
              
              <p className="text-lg leading-relaxed text-purple-800 mb-4">
                You've learned to classify basic transactions into assets, liabilities, and equity. 
                Now let's work with more complex business events and reduce our support structure. 
                You're moving toward thinking like an accountant.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-purple-400 mb-4">
                <p className="font-semibold text-purple-900 mb-2">New Challenge:</p>
                <p className="text-purple-800">
                  Some transactions affect equation in less obvious ways. We'll practice identifying 
                  those patterns and explain <strong>why</strong> they work the way they do.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-blue-300 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-4">📊 Sarah's Business: Current Position</h3>
              
              <p className="text-lg text-blue-800 mb-4">
                After operating for several weeks, Sarah's TechStart Solutions has this financial position:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">Assets (Owned)</h4>
                  <ul className="text-sm space-y-1 text-green-800">
                    <li>Cash: $4,500</li>
                    <li>Computer: $2,000</li>
                    <li>Printer: $600</li>
                    <li>Accounts Receivable: $800</li>
                    <li className="font-semibold pt-2 border-t border-green-300"><strong>Total: $7,900</strong></li>
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Liabilities (Owed)</h4>
                  <ul className="text-sm space-y-1 text-red-800">
                    <li>Accounts Payable: $600</li>
                    <li>Bank Loan: $1,000</li>
                    <li className="font-semibold pt-2 border-t border-red-300"><strong>Total: $1,600</strong></li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Equity (Owner's Stake)</h4>
                  <ul className="text-sm space-y-1 text-purple-800">
                    <li>Sarah's Equity: $6,300</li>
                    <li className="font-semibold pt-2 border-t border-purple-300"><strong>Total: $6,300</strong></li>
                  </ul>
                  <p className="text-xs mt-2 text-purple-600">
                    Check: $7,900 = $1,600 + $6,300 ✅
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">🧠 Four Common Transaction Patterns</h3>
              
              <p className="text-lg text-blue-800 mb-6">
                Every business transaction follows one of these four patterns. Learning these will help 
                you classify transactions quickly and accurately.
              </p>
              
              <div className="space-y-6">
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Pattern 1: Asset-to-Asset Exchange</h4>
                  <p className="text-sm text-blue-700 mb-3">
                    Buying equipment with cash, selling inventory, collecting receivables
                  </p>
                  <div className="bg-blue-50 p-3 rounded text-sm">
                    <p className="font-semibold text-blue-900">Effect:</p>
                    <p className="text-blue-800">
                      One asset decreases, another increases by same amount. 
                      <strong>Total assets unchanged, equity unchanged.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Pattern 2: Assets and Equity Both Increase</h4>
                  <p className="text-sm text-purple-700 mb-3">
                    Earning revenue, receiving customer payments, owner investment
                  </p>
                  <div className="bg-purple-50 p-3 rounded text-sm">
                    <p className="font-semibold text-purple-900">Effect:</p>
                    <p className="text-purple-800">
                      Cash (or receivable) increases, equity increases by same amount. 
                      <strong>Business becomes more valuable.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">Pattern 3: Assets and Liabilities Both Increase</h4>
                  <p className="text-sm text-red-700 mb-3">
                    Buying on credit, taking out loans, receiving services before paying
                  </p>
                  <div className="bg-red-50 p-3 rounded text-sm">
                    <p className="font-semibold text-red-900">Effect:</p>
                    <p className="text-red-800">
                      Asset (equipment, inventory) increases, liability (payable, loan) increases by same amount. 
                      <strong>Equity unchanged.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">Pattern 4: Assets and Liabilities Both Decrease</h4>
                  <p className="text-sm text-green-700 mb-3">
                    Paying off debts, making loan payments, paying expenses immediately
                  </p>
                  <div className="bg-green-50 p-3 rounded text-sm">
                    <p className="font-semibold text-green-900">Effect:</p>
                    <p className="text-green-800">
                      Cash decreases, liability (payable, loan) decreases by same amount. 
                      <strong>Equity unchanged.</strong>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <ComprehensionCheck 
              questions={practiceQuestions}
              title="Pattern Recognition Practice"
              showExplanations={true}
            />

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Turn and Talk
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium text-blue-900 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-blue-800 mb-2">
                  Work with a partner to analyze these scenarios:
                </p>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>
                    <strong>Scenario 1:</strong> Sarah pays $150 for monthly internet service with cash immediately. 
                    Which pattern is this? Why does equity change or not change?
                  </li>
                  <li>
                    <strong>Scenario 2:</strong> Sarah receives $800 from a client who had been billed last month. 
                    How is this different from earning new revenue?
                  </li>
                  <li>
                    <strong>Discussion Question:</strong> Why do you think accountants formalized these four patterns? 
                    What problems would they prevent in real businesses?
                  </li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">🔑 Bridge to Accounting Format</h3>
              <p className="text-yellow-800 mb-3">
                You're getting closer to how real accountants work. The four patterns you learned today 
                are foundation for <strong>debits and credits</strong>, which is formal language 
                accountants use to record these exact same transactions.
              </p>
              <p className="text-yellow-800">
                Next phase, you'll practice these patterns repeatedly until you can classify any transaction 
                automatically without looking at notes.
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
