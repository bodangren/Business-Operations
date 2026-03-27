import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Target, CheckCircle } from "lucide-react"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase6() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!
  
  const reflectionPrompts = [
    {
      id: "understanding",
      category: "courage" as const,
      prompt: "Explain the four transaction patterns you learned (asset-to-asset exchange, assets/equity increase, assets/liabilities increase, assets/liabilities decrease). Which pattern feels most natural to you, and which one do you find most challenging?",
      placeholder: "Think about which transactions make immediate sense to you and which ones require more careful analysis..."
    },
    {
      id: "connection", 
      category: "adaptability" as const,
      prompt: "How does being able to classify transactions and explain equation effects help Sarah build investor confidence in TechStart Solutions? What would investors think if Sarah couldn't explain how her business events affect her financial position?",
      placeholder: "Consider what about financial knowledge demonstrates trustworthiness to investors..."
    },
    {
      id: "application",
      category: "persistence" as const,
      prompt: "Think about a transaction from your own life or family experience (buying something, getting paid, owing money, etc.). Which transaction pattern does it follow? Can you explain how it affects the accounting equation?",
      placeholder: "Apply what you learned to a real-world situation you've experienced or observed..."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-lg px-4 py-2 rounded-lg font-semibold">
              Phase 6: Reflection and Preview
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200">
              <h2 className="text-2xl font-bold text-emerald-900 mb-4">🎯 Lesson Accomplished</h2>
              
              <p className="text-lg leading-relaxed text-emerald-800 mb-4">
                Congratulations! You've mastered transaction classification—understanding how every business 
                event affects the accounting equation. This skill is the bridge between understanding 
                financial concepts and building real accounting systems.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-emerald-400">
                <p className="font-bold text-emerald-900 mb-2">Key Achievement:</p>
                <p className="text-emerald-800">
                  You can now analyze any business transaction, identify which components of 
                  Assets = Liabilities + Equity change, classify the transaction pattern, and 
                  verify that the equation always stays balanced.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    What You Learned
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-green-700">
                    <li>• How to classify transactions into equation components</li>
                    <li>• Four fundamental transaction patterns</li>
                    <li>• Why every transaction affects at least two components</li>
                    <li>• How to verify equation balance after each event</li>
                    <li>• Common misconceptions and how to avoid them</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Sarah's Progress
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-700 mb-3">
                    Sarah can now explain exactly how each business event affects her 
                    financial position. This clarity will impress investors.
                  </p>
                  <p className="text-xs text-blue-600 italic">
                    "When I receive a client payment, my cash goes up and my equity 
                    goes up by the same amount—because my business just became more valuable."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Coming Next
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-700 mb-2">
                    <strong>Lesson 3: Debit & Credit Rules</strong>
                  </p>
                  <p className="text-xs text-purple-600">
                    Learn the formal language accountants use to record the exact 
                    same transaction patterns you've mastered.
                  </p>
                </CardContent>
              </Card>
            </div>

            <ReflectionJournal 
              prompts={reflectionPrompts}
              unitTitle="Lesson Reflection: Transaction Classification"
            />

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">📚 The Four Transaction Patterns (Quick Reference)</h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">1. Asset-to-Asset Exchange</h4>
                  <p className="text-sm text-blue-800 mb-2">
                    One asset decreases, another increases
                  </p>
                  <p className="text-xs text-blue-600 italic">
                    Example: Buying equipment with cash
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">2. Assets & Equity Both Increase</h4>
                  <p className="text-sm text-purple-800 mb-2">
                    Asset increases, equity increases
                  </p>
                  <p className="text-xs text-purple-600 italic">
                    Example: Earning revenue, owner investment
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="font-bold text-red-900 mb-2">3. Assets & Liabilities Both Increase</h4>
                  <p className="text-sm text-red-800 mb-2">
                    Asset increases, liability increases
                  </p>
                  <p className="text-xs text-red-600 italic">
                    Example: Buying on credit, taking out loan
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">4. Assets & Liabilities Both Decrease</h4>
                  <p className="text-sm text-green-800 mb-2">
                    Asset decreases, liability decreases
                  </p>
                  <p className="text-xs text-green-600 italic">
                    Example: Paying off debt
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-3">🔮 From Classification to Formal Accounting</h3>
              <p className="text-yellow-800 mb-3">
                You've learned the <strong>thinking</strong> behind accounting. Now you'll learn 
                the <strong>language</strong>—debits and credits. These terms are just a 
                structured way to write down the exact patterns you've been practicing.
              </p>
              <p className="text-yellow-800">
                When you understand debits and credits, you'll be ready to build Sarah's 
                formal ledger system—the foundation of her self-auditing, investor-ready workbooks.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-2 border-green-400">
              <h3 className="text-xl font-bold text-green-900 mb-3">💪 You're Building Real Expertise</h3>
              <p className="text-green-800 mb-3">
                Every business professional who handles money—entrepreneurs, accountants, 
                financial analysts—understands these transaction patterns. You now share that 
                foundational knowledge.
              </p>
              <div className="flex items-center gap-3 mt-4">
                <CheckCircle className="w-6 h-6 text-green-700" />
                <p className="text-green-900 font-semibold">
                  Ready to master debits and credits in Lesson 3
                </p>
              </div>
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
