import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[5];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Closing
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-indigo-800">
                    Partial-Year Depreciation: What You Can Now Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Today you built a fresh depreciation workbook that handles assets purchased during the year. You used <strong>SLN()</strong> and <strong>DDB()</strong>, applied the months-in-service rule, and connected the results to a mini income statement and mini balance sheet.
                  </p>
                  <h3 className="text-lg font-semibold text-indigo-900 mt-6">Key Takeaways</h3>
                  <ul className="list-disc list-inside text-slate-800 space-y-1">
                    <li><strong>Partial-year depreciation matters</strong> because assets are not always bought on January 1</li>
                    <li><strong>SLN and DDB are built-in Excel functions</strong> that reduce formula complexity</li>
                    <li><strong>Months in service controls Year 1 expense</strong> through the fraction <code>Months / 12</code></li>
                    <li><strong>The income statement shows the profit effect</strong> of depreciation method choice</li>
                    <li><strong>The balance sheet shows the net book value effect</strong> through accumulated depreciation</li>
                    <li><strong>A professional recommendation uses evidence</strong> from both statements, not just the calculation sheet</li>
                  </ul>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">What&apos;s Next</h3>
                    <p className="text-indigo-800">
                      In Lesson 07, you will rehearse the larger depreciation workflow with a shared dataset. This lesson gives you the statement-impact lens you need when choosing and defending depreciation methods.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <ReflectionJournal
                unitTitle="CAP Reflection: Partial-Year Depreciation and Statement Impact"
                prompts={[
                  {
                    id: 'courage-u08l06',
                    category: 'courage',
                    prompt: 'Where did you show confidence in explaining how depreciation affects profit or book value?',
                    placeholder: 'Describe a moment where you used income statement or balance sheet evidence...'
                  },
                  {
                    id: 'adaptability-u08l06',
                    category: 'adaptability',
                    prompt: 'A formula or link did not work at first. How did you adapt and fix it?',
                    placeholder: 'Explain your troubleshooting steps - was it SLN, DDB, months in service, or a statement link?'
                  },
                  {
                    id: 'persistence-u08l06',
                    category: 'persistence',
                    prompt: 'What took the most effort to get right in the partial-year workbook? How did you keep going?',
                    placeholder: 'Write about the process - was it the partial-year rule, method comparison, income statement, or balance sheet?'
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  );
}
