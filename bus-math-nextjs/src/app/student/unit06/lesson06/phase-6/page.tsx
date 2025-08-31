import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { Lightbulb } from "lucide-react";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[5]; // Closing

const prompts = [
  {
    id: 'cap-courage',
    category: 'courage' as const,
    prompt: 'Where did you show courage while presenting live scenario switches to the class or team?',
    placeholder: 'Describe a moment you took a risk (e.g., toggling scenarios live) and what you learned.'
  },
  {
    id: 'cap-adapt',
    category: 'adaptability' as const,
    prompt: 'How did you adapt when a chart or lookup didn’t update as expected?',
    placeholder: 'Explain the debugging steps you tried and how you corrected references or validation.'
  },
  {
    id: 'cap-persist',
    category: 'persistence' as const,
    prompt: 'What kept you going while wiring the dashboard end‑to‑end?',
    placeholder: 'Share how you stayed focused and ensured the model stayed reliable and clear.'
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              ✨ Phase 6: Closing
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Synthesis */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Integrated Automation: Present with Confidence
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Today you turned a working CVP model into a <strong>decision‑ready system</strong>.
                    You built scenario controls, linked outputs to visuals, added validation, and wrote
                    clear summary language. This is how analysts and consultants support real decisions.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-blue-900">
                      Preview (Lesson07): we’ll refine examples and practice stakeholder review. You’ll
                      analyze strong and weak dashboards, then polish your own for professional presentation.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Reflection Journal */}
              <ReflectionJournal unitTitle="CAP Reflection: Integration & Presentation" prompts={prompts} />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
    </div>
  );
}

