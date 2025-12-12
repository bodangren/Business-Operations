import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, Lightbulb, TrendingUp } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[5] // Closing phase

const reflectionPrompts = [
  {
    id: "courage-selector",
    category: "courage" as const,
    prompt: "Describe a moment today when you felt unsure about the selector or the lookup formula. What steps did you take to push through that uncertainty?",
    placeholder: "Maybe the INDIRECT reference broke, or the drop-down wouldn't display correctly..."
  },
  {
    id: "adaptability-lookup",
    category: "adaptability" as const,
    prompt: "How did you adjust your calculator when a partner asked you to test a different tax table or taxable income?",
    placeholder: "Think about changes you made to named ranges, validation lists, or explanation notes..."
  },
  {
    id: "persistence-mini-calculator",
    category: "persistence" as const,
    prompt: "What required the most persistence while building this single-period calculator, and how did you keep moving despite limited time?",
    placeholder: "Maybe you had to reorganize the layout or document your math more clearly..."
  }
]

export default function Phase6Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Wrap-Up: Tiny Calculator, Big Confidence
          </h2>
          <p className="text-lg leading-relaxed">
            In one class period you built a tool that answers the question investors care about: “How much tax will you set aside?” 
            That selector + lookup combo may be small, but it proves you can connect Lesson 2's tax tables to Lesson 3's cash-flow decisions.
          </p>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              What You Finished Today
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900">
            <ul className="list-disc list-inside space-y-1">
              <li>Progressive bracket table with lower/upper bounds, base tax, and marginal rates.</li>
              <li>Selector linked to valid federal and state tax tables.</li>
              <li>Clear taxable income math that anyone can audit.</li>
              <li>Lookup output that tells Sarah the yearly tax instantly.</li>
              <li>Peer feedback captured through a critique form.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Connecting to the Unit Roadmap
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900">
            <p>Lesson 4 will extend this tiny calculator into a validated, error-proof system. Here's how today's work fits:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Your selector becomes the foundation for multi-employee registers.</li>
              <li>Your lookup logic feeds overtime and deduction rules in later lessons.</li>
              <li>Your documentation habit makes the Lesson 5 screencast easier to script.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Preview of Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-800">
            <p>Next lesson you'll “bulletproof” this calculator with validation and visual alerts. Expect to:</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Add guardrails that stop invalid table selections.</li>
              <li>Highlight taxable income inputs that are missing deductions.</li>
              <li>Document your formulas so an auditor can follow every click.</li>
            </ul>
          </CardContent>
        </Card>

        <ReflectionJournal
          unitTitle="Unit 5 Lesson 3: Tax Table Selector Sprint"
          prompts={reflectionPrompts}
        />

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Take-It-Forward Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-amber-900">
            <p>Between now and Lesson 4, duplicate your worksheet and try swapping in a different state's tax table. 
              Can your selector + lookup handle it without rewriting the formulas? Bring your answer tomorrow.</p>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}
