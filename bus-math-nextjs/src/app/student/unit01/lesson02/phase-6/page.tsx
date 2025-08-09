import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Target } from "lucide-react"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase6() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!
  const reflectionPrompts = [
    {
      id: "understanding",
      category: "courage" as const,
      prompt: "Explain the accounting equation in your own words. Why do you think this equation must always stay balanced?",
      placeholder: "Think about the relationship between what a business owns, owes, and is worth..."
    },
    {
      id: "connection", 
      category: "adaptability" as const,
      prompt: "How does understanding the accounting equation help Sarah build investor confidence in TechStart Solutions?",
      placeholder: "Consider what investors want to see in a business's financial management..."
    },
    {
      id: "application",
      category: "persistence" as const,
      prompt: "Describe a situation from your own life (personal finances, family business, etc.) where you can see the accounting equation in action.",
      placeholder: "Think about assets you own, debts you might have, and your 'net worth'..."
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
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">🎯 Mission Accomplished</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Congratulations! You've mastered the accounting equation - the universal rule that 
              governs all business financial tracking. This equation is the bedrock upon which 
              Sarah will build her self-auditing ledger system.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-blue-400">
              <p className="font-bold text-blue-900 mb-2">Key Achievement:</p>
              <p className="text-blue-800">
                You can now analyze any business transaction and prove that the fundamental 
                relationship Assets = Liabilities + Equity always holds true, no matter how 
                complex the scenario.
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
                  <li>• The accounting equation formula</li>
                  <li>• How to identify Assets, Liabilities, and Equity</li>
                  <li>• Why transactions always affect two components</li>
                  <li>• How to verify equation balance</li>
                  <li>• Why this rule is universal for all businesses</li>
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
                  Sarah now understands the mathematical foundation that will make 
                  her ledger trustworthy to investors.
                </p>
                <p className="text-xs text-blue-600 italic">
                  "Every transaction tells a complete story with perfect balance - 
                  that's what investors want to see!"
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
                  Learn the formal language accountants use to record the 
                  two-sided nature of every transaction.
                </p>
              </CardContent>
            </Card>
          </div>

          <ReflectionJournal 
            prompts={reflectionPrompts}
            unitTitle="Lesson Reflection: The Universal Rule"
          />

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mt-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🔮 Looking Ahead</h3>
            <p className="text-yellow-800 mb-3">
              The accounting equation is like the grammar of business language. Now that you 
              understand the fundamental structure, you're ready to learn the specific vocabulary 
              and rules that accountants use to record transactions.
            </p>
            <p className="text-yellow-800">
              <strong>Next lesson preview:</strong> You'll discover why accountants say "debit" 
              and "credit" instead of "increase" and "decrease," and how these rules create 
              the systematic approach that makes Sarah's ledger self-auditing.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">💪 You're Building Expertise</h3>
            <p className="text-green-800">
              Every entrepreneur who has successfully attracted investors understands the 
              accounting equation. You're now part of that community of business professionals 
              who can speak the language of financial accountability and investor confidence.
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