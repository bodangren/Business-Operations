import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Zap, Trophy } from "lucide-react"
import MonthEndClosePractice from "@/components/exercises/MonthEndClosePractice"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">
              Phase 4: Deliberate Practice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Repeated Month-End Adjustment Practice
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Identify the correct adjusting entry for each scenario until you reach mastery.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-sky-200 bg-sky-50">
            <CardHeader>
              <CardTitle className="text-sky-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Deliberate Practice: Month-End Adjustments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sky-800">
                Each round presents a new month-end adjustment scenario. Your job is to identify the adjustment type, select the correct debit and credit accounts, and calculate the amount. This is the same skill you will use every month when closing the books.
              </p>
              <div className="bg-sky-100 p-4 rounded border border-sky-300">
                <p className="text-sm text-sky-700">
                  <strong>Mastery target:</strong> Get <strong>3 consecutive correct</strong> answers. If you miss one, the counter resets. Feedback is given after submission, not during.
                </p>
              </div>
            </CardContent>
          </Card>

          <MonthEndClosePractice masteryTarget={3} />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  When You Reach Mastery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-green-800">
                  You can reliably identify the type of adjustment, select the correct accounts, and calculate the right amount. Move on to Phase 5 to confirm your understanding with the exit ticket.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  If You Are Stuck
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-800">
                  Return to Phase 2 and review the six-step close workflow. Focus on Step 2 (adjusting entries). Use the "Show reasoning steps" button in practice to walk through the logic before trying again.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
