import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Lightbulb } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

const reflectionPrompts = [
  {
    id: 'tool-use',
    category: 'tool-use' as const,
    prompt: 'What specific feature did you add today that makes the workbook safer for someone who did not build it?',
    placeholder: 'Describe the validation rule, control, or audit panel element and why it matters...'
  },
  {
    id: 'professional-judgment',
    category: 'professional-judgment' as const,
    prompt: 'If an accountant asked you to prove your workbook maintains GAAP accuracy, what would you show them first?',
    placeholder: 'Identify the strongest piece of evidence in your polished workbook...'
  },
  {
    id: 'speed-and-reliability',
    category: 'speed-and-reliability' as const,
    prompt: 'What can you now do faster or more reliably with the polished wizard compared to your Lesson 5 workbook?',
    placeholder: 'Compare the two versions and name the concrete improvement...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Reflection and Handoff
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">What the Polish Added—and What Comes Next</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You turned a working automation into a professional, trustworthy tool. Capture what changed, what you can now do faster, and where the unit goes next.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                What You Built Today
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm space-y-3">
              <p>
                Your Lesson 5 workbook ran the close. Your Lesson 6 workbook <strong>explains and defends itself</strong>. The three layers you added—validation rules, user-facing controls, and an audit panel—transform a prototype into something a real accountant can trust.
              </p>
              <div className="bg-indigo-100 p-4 rounded border border-indigo-300">
                <p className="text-sm font-semibold text-indigo-800 mb-2">Your polished workbook now has:</p>
                <ul className="list-disc list-inside space-y-1 text-indigo-800">
                  <li>Validation rules that catch bad inputs before the close runs</li>
                  <li>A period selector that lets users switch scenarios without touching formulas</li>
                  <li>An audit panel that shows inputs, outputs, and verification status at a glance</li>
                  <li>A button that refuses to run when validation fails</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                What You Can Now Do Faster
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-emerald-800 text-sm">
                Before today, switching to a new month meant finding the right cells and hoping you did not break a formula. Now the dropdown handles it. Before today, proving the close ran correctly meant checking formulas by hand. Now the audit panel does it in seconds.
              </p>
              <p className="text-emerald-800 text-sm">
                <strong>This is the difference between automation that works for you and automation that works for your whole team.</strong>
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Preview: Lesson 07 — Project Rehearsal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm space-y-2">
              <p>
                Next lesson is your final guided rehearsal before the group project. Every group will use the <strong>same shared workbook data</strong> to practice the full workflow: build, test, recommend, and defend.
              </p>
              <p>
                You will run a peer audit against the Definition of Done, write a recommendation statement, and identify what features from today's polished wizard you must carry into your own project workbook.
              </p>
              <div className="bg-amber-100 p-3 rounded border border-amber-300 mt-2">
                <p className="text-xs text-amber-800">
                  <strong>What to bring:</strong> Your polished Lesson 6 workbook (.xlsm). You will use it as a reference model during the rehearsal.
                </p>
              </div>
            </CardContent>
          </Card>

          <ReflectionJournal 
            unitTitle="Reflection: What the Polish Added"
            prompts={reflectionPrompts as any}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
