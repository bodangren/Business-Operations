import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

const capPrompts = [
  {
    id: 'courage-adv',
    category: 'courage' as const,
    prompt: 'Where did you take a risk upgrading fragile formulas to a new pattern (XLOOKUP, SWITCH, or validation)? What made it worth it?',
    placeholder: 'Describe the risky change and the impact on reliability...'
  },
  {
    id: 'adaptability-adv',
    category: 'adaptability' as const,
    prompt: 'When the data changed (new method or extra rows), how did you adjust your model so nothing broke?',
    placeholder: 'Explain the change and the adjustments you made...'
  },
  {
    id: 'persistence-adv',
    category: 'persistence' as const,
    prompt: 'Describe a validation bug you chased down. How did you isolate the cause and verify the fix?',
    placeholder: 'Walk through your debugging steps and final checks...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Scenario Engine: Ready for the Next Step</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built a model that scales with TechStart’s growth. Next lesson, we’ll connect your engine to dashboards and investor presentations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Synthesis: Wins and Reliability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-blue-900">
              <ul className="list-disc list-inside">
                <li>Structured references eliminated manual range fixes</li>
                <li>XLOOKUP + SWITCH made logic readable and maintainable</li>
                <li>Validation flags surfaced issues before they spread</li>
                <li>Audit panel and documentation improved investor confidence</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="CAP Reflection: Advanced Automation" prompts={capPrompts as any} />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

