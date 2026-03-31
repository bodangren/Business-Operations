import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, CheckCircle2, Zap } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

const reflectionPrompts = [
  {
    id: "speed",
    category: "confidence" as const,
    prompt: "What part of the automation are you most confident about? Which part still feels uncertain?",
    placeholder: "I am confident about... but I am still unsure about..."
  },
  {
    id: "business",
    category: "understanding" as const,
    prompt: "How does the button-triggered close flow connect back to the manual six-step workflow you learned in Lesson 4?",
    placeholder: "The button replaces the manual step of... because..."
  },
  {
    id: "signal",
    category: "method-signal" as const,
    prompt: "What tells you that a month-end process is a good candidate for automation? What should stay manual?",
    placeholder: "I would automate... but I would keep... manual because..."
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
              Phase 6: Reflection and Handoff
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              What the Automation Added
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Lock in what you built, name what you can now do faster, and preview the next layer.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                What You Can Now Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-800">
                After completing this lesson, you should be able to:
              </p>
              <ul className="text-sm text-indigo-800 space-y-2 ml-4 list-disc">
                <li>Explain why named ranges are safer than hard-coded cell references</li>
                <li>Separate input areas from calculation blocks in a workbook</li>
                <li>Build a verification checkpoint that confirms debits equal credits</li>
                <li>Insert a button and assign a macro that runs a multi-step flow</li>
                <li>Explain which manual month-end step the automation replaced</li>
                <li>Defend the trustworthiness of your automation to someone who did not build it</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                The Signal: When to Use This Pattern
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-800">
                How do you know when to apply this automation pattern? Look for these signals:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Repetition Signal:</h4>
                  <p className="text-sm text-amber-800">You do the same steps in the same order every month. That is a candidate for a button-triggered flow.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Error-Risk Signal:</h4>
                  <p className="text-sm text-amber-800">A missed step causes rework or wrong financial statements. That is a candidate for a verification checkpoint.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Growth Signal:</h4>
                  <p className="text-sm text-amber-800">More transactions mean more time spent on the same steps. That is a candidate for named ranges and calculation blocks.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Judgment Signal:</h4>
                  <p className="text-sm text-amber-800">Deciding which accounting principle applies to a new transaction should stay manual. Automation handles the sequence, not the judgment.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                What You Can Now Do Faster and More Reliably
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <h5 className="font-semibold text-blue-900 mb-1">Faster:</h5>
                  <ul className="text-sm text-blue-800 space-y-1 ml-4 list-disc">
                    <li>Running the close checklist (one click vs. six manual steps)</li>
                    <li>Computing adjusting entries (formulas vs. hand calculation)</li>
                    <li>Checking that debits equal credits (automatic vs. manual sum)</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-4 rounded border border-blue-300">
                  <h5 className="font-semibold text-blue-900 mb-1">More Reliable:</h5>
                  <ul className="text-sm text-blue-800 space-y-1 ml-4 list-disc">
                    <li>Named ranges do not break when rows are inserted</li>
                    <li>Verification checkpoint catches errors before they spread</li>
                    <li>CloseStatus tells you immediately if something went wrong</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Preview: Lesson 6 — Polish the Wizard Interface
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-emerald-800">
                You built the engine. In Lesson 6, you will make it usable. The next layer adds:
              </p>
              <ul className="text-sm text-emerald-800 space-y-1 ml-4 list-disc">
                <li>Visible controls that let users change scenarios without touching formulas</li>
                <li>Validation rules that catch bad inputs before the button runs</li>
                <li>A dashboard summary that communicates results to non-technical readers</li>
                <li>Audit trails that show exactly what changed and why</li>
              </ul>
              <div className="bg-emerald-100 p-4 rounded border border-emerald-300">
                <p className="text-sm text-emerald-700">
                  <strong>The connection:</strong> Everything in Lesson 6 builds on the four blocks you created today. Named ranges become scenario inputs. The verification checkpoint becomes a full audit panel. The button becomes a polished wizard interface.
                </p>
              </div>
            </CardContent>
          </Card>

          <ReflectionJournal
            title="Lesson 5 Reflection"
            description="Reflect on what you built and what it means for your accounting workflow."
            prompts={reflectionPrompts}
          />
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
