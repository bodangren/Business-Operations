import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Package, ArrowRight } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

export default function Unit07Lesson04Phase1() {
  const predictionQuestions = [
    {
      id: "q1",
      question: "If purchase prices are rising, which method will show lower profit this month for TechStart's hardware client?",
      answers: [
        "LIFO — newest, higher costs go to COGS",
        "FIFO — oldest, lower costs go to COGS",
        "Both methods show the same profit",
        "Neither method affects profit"
      ],
      explanation: "LIFO uses newer, higher costs, which raises COGS and lowers profit in a rising price environment."
    },
    {
      id: "q2",
      question: "Sarah adds 20 new rows of transactions to her Excel tracker. Which setup is more reliable when everything shifts?",
      answers: [
        "Excel Tables with structured references",
        "Manual ranges like A2:A100",
        "Copying formulas each time",
        "Re-typing numbers for safety"
      ],
      explanation: "Tables expand automatically and keep formulas connected with structured references, preventing broken ranges."
    },
    {
      id: "q3",
      question: "A client asks: ‘How does your system prevent bad data from breaking our COGS?’ What should Sarah highlight?",
      answers: [
        "Built-in validation rules and error checks",
        "Longer instructions in a README",
        "Colorful formatting and emojis",
        "Hiding extra sheets"
      ],
      explanation: "Professional models include clear validation and checks so errors are caught before they impact totals."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah's FIFO/LIFO Challenge</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah’s client sells devices all month at changing prices. Your job is to build an Excel system that values
              inventory correctly and updates itself when new transactions are added.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Package className="h-5 w-5" /> The Problem: Costs Change, Accuracy Must Not
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-900">
              <p>
                In week one, the supplier sells keyboards at $20 each. In week two, the price jumps to $24. When Sarah’s client sells
                60 units today, which cost should flow into COGS? The answer depends on the method: FIFO or LIFO.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="font-semibold mb-2">Before (Manual):</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Fixed ranges that miss new rows</li>
                    <li>Hand-calculated layers that break often</li>
                    <li>No clear checks when data is wrong</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <p className="font-semibold mb-2">After (Automated):</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Excel Tables with structured references</li>
                    <li>COGS and layers update when data grows</li>
                    <li>Built-in validation catches issues early</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Predict the Best Approach"
            description="Make quick predictions about method choice and model design."
            questions={predictionQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900">
              <p className="font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>How would a broken cost flow affect investor trust?</li>
                <li>When prices rise, which method helps cash flow and why?</li>
                <li>What checks would you add to spot bad data fast?</li>
              </ul>
              <div className="text-sm text-blue-800 flex items-center gap-2">
                <ArrowRight className="h-4 w-4" /> Be ready to share one insight.
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

