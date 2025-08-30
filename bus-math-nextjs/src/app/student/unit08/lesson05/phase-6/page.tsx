import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stars } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[5];

const capPrompts = [
  {
    id: 'adaptability-automation',
    category: 'adaptability',
    prompt: 'When your model didn’t recalc as expected (e.g., Data Table or XLOOKUP), how did you adjust your approach to fix it?',
    placeholder: 'Describe the issue, what you tried, and what finally worked...'
  },
  {
    id: 'persistence-validation',
    category: 'persistence',
    prompt: 'Which validation rule took the longest to get right? How did you keep going when it kept failing?',
    placeholder: 'Explain how you tested edge cases and refined your rule...'
  },
  {
    id: 'courage-qna',
    category: 'courage',
    prompt: 'Imagine an investor challenges one assumption in your sensitivity grid. How will you respond calmly and show the model’s strength?',
    placeholder: 'Write the one-minute answer you would give...'
  }
] as const;

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit08Data} 
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
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Stars className="w-8 h-8 text-indigo-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Advanced Automation: Ready for the Next Step
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800 mb-4">
                    You built resilient sensitivity and scenario automation using Data Tables, XLOOKUP, and validation. 
                    Your model now handles change without breaking and communicates risk clearly for investors.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-4 rounded">
                    <p className="text-blue-900"><strong>Preview (Lesson 06):</strong> You will integrate these tools into dashboards and presentation‑ready summaries, 
                    connecting scenarios to clear visuals and investor Q&A workflows.</p>
                  </div>
                </CardContent>
              </Card>

              <ReflectionJournal 
                unitTitle="CAP Reflection: Advanced Scenario & Sensitivity Automation"
                prompts={capPrompts as any}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}

