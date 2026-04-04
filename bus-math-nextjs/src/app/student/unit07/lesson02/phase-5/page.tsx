import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Trophy, Target, AlertTriangle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"

const currentPhase = lesson02Phases[4]

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Assessment Introduction */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Exit Ticket: Inventory Cost Flow
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-emerald-900">
              Time to check your understanding! This quick assessment covers the key concepts from today's lesson: 
              Goods Available for Sale, cost layers, and why COGS isn't always obvious when costs vary.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Formula Mastery</h4>
                <p className="text-sm text-emerald-700">GAFS, COGS, and Ending Inventory relationships</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Cost Layers</h4>
                <p className="text-sm text-emerald-700">Why the same sale can produce different COGS</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Real-World Impact</h4>
                <p className="text-sm text-emerald-700">Why investors and lenders care about method choice</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Formula Reminder */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">📋 Quick Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="font-mono text-xl text-blue-900">
                Ending Inventory = Beginning Inventory + Purchases - COGS
              </p>
              <p className="text-blue-700">or simply:</p>
              <p className="font-mono text-xl text-blue-900">
                Ending Inventory = GAFS - COGS
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Assessment */}
        <ComprehensionCheck
          questions={assessmentQuestions}
          title="Inventory Cost Flow Assessment"
          description="Show what you've learned about inventory movement, cost layers, and the GAFS formula."
          showExplanations={true}
          allowRetry={true}
        />

        {/* What's Next */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Looking Ahead: Lesson 3</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800">
              Today you learned <strong>why</strong> cost assignment matters when costs vary. 
              In Lesson 3, you'll learn the formal rules that solve this puzzle:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">FIFO (First-In, First-Out)</h4>
                <p className="text-purple-700 text-sm">
                  The oldest costs flow to COGS first. Like selling the boxes at the front of the shelf.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">LIFO (Last-In, First-Out)</h4>
                <p className="text-purple-700 text-sm">
                  The newest costs flow to COGS first. Like selling the boxes at the back of the shelf.
                </p>
              </div>
            </div>
            <p className="text-purple-700 text-sm italic">
              Once you know these rules, you'll never have to guess which costs to assign — 
              and you'll be able to defend your ending inventory number to any investor.
            </p>
          </CardContent>
        </Card>

      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
