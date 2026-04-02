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
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🧭 Phase 6: Closing
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-indigo-800">
                    Method Comparison: What You Can Now Do
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Today you extended your asset register workbook with a <strong>Method Comparison</strong> sheet that shows 
                    straight-line and double-declining balance side by side. You built verification checks so accumulated 
                    depreciation and book value stay believable. And you practiced defending a depreciation recommendation 
                    with workbook evidence — not opinion.
                  </p>
                  <h3 className="text-lg font-semibold text-indigo-900 mt-6">Key Takeaways</h3>
                  <ul className="list-disc list-inside text-slate-800 space-y-1">
                    <li><strong>Both methods depreciate the same total amount</strong> — only the timing differs</li>
                    <li><strong>DDB front-loads expense</strong> — higher Year 1 expense, lower reported profit, lower book value early on</li>
                    <li><strong>The salvage value floor is non-negotiable</strong> — DDB must never drive book value below salvage</li>
                    <li><strong>Linked formulas beat hard-coded numbers</strong> — if cost changes, your comparison updates automatically</li>
                    <li><strong>A professional recommendation uses evidence</strong> — cite workbook numbers, not feelings</li>
                  </ul>
                  <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200 mt-4">
                    <h3 className="font-semibold text-indigo-900 mb-2">What&apos;s Next</h3>
                    <p className="text-indigo-800">
                      In Lesson 07, you will rehearse the complete depreciation project with a shared dataset. 
                      You will practice the full workflow: asset register → depreciation schedule → method comparison → 
                      recommendation. This lesson&apos;s comparison workbook is one piece of that larger project structure.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <ReflectionJournal
                unitTitle="CAP Reflection: Method Comparison & Depreciation Policy"
                prompts={[
                  {
                    id: 'courage-u08l06',
                    category: 'courage',
                    prompt: 'Where did you show confidence in defending a depreciation method with workbook evidence? What made it feel risky?',
                    placeholder: 'Describe a moment where you used data from your comparison sheet to support your recommendation...'
                  },
                  {
                    id: 'adaptability-u08l06',
                    category: 'adaptability',
                    prompt: 'A formula or check did not work at first. How did you adapt and fix it?',
                    placeholder: 'Explain your troubleshooting steps — was it the salvage floor, the check column, or a link to the register?'
                  },
                  {
                    id: 'persistence-u08l06',
                    category: 'persistence',
                    prompt: 'What took the most effort to get right in the comparison workbook? How did you keep going?',
                    placeholder: 'Write about the process — was it the DDB schedule, the statement impact summary, or the recommendation memo?'
                  }
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}
