import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Lightbulb } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

const capPrompts = [
  {
    id: 'courage-adv',
    category: 'courage' as const,
    prompt: 'Describe a moment when your formulas failed. How did you face the uncertainty and keep going?',
    placeholder: 'Explain what broke, how you felt, and your first step forward...'
  },
  {
    id: 'adaptability-adv',
    category: 'adaptability' as const,
    prompt: 'What change did you make after testing edge cases (missing IDs, stale dates, negatives)?',
    placeholder: 'Write about the specific adjustment and why it improved reliability...'
  },
  {
    id: 'persistence-adv',
    category: 'persistence' as const,
    prompt: 'Which safeguard took the longest to get right? What kept you working until it was reliable?',
    placeholder: 'Share the toughest step and your strategy to finish it...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing — Ready for the Next Step
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Advanced Automation: Wins, Reliability, and What’s Next
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              You built a self-auditing ledger that handles growth. Your controls make errors
              obvious and save time—key signals for investors and mentors.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Synthesis: What You Mastered
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              You automated posting validation, handled missing IDs, and built a dynamic trial balance.
              You documented controls and blocked bad inputs. These habits prepare you for Lesson06,
              where you will connect these controls to dashboards and polished investor summaries.
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <ReflectionJournal 
            unitTitle="Unit 1 — Advanced Ledger Automation Reflection"
            prompts={capPrompts}
          />
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

