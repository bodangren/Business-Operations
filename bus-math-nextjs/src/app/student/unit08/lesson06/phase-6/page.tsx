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
                    Integrated Automation: Present with Confidence
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800">
                    Today you integrated scenario controls, stable charts, and validation into a single dashboard. 
                    You built trust by removing fragile links and by making KPIs easy to read. These skills prepare you for Lesson 07, 
                    where you’ll test your dashboard with stakeholder feedback and refine your executive summary.
                  </p>
                </CardContent>
              </Card>

              <ReflectionJournal
                unitTitle="CAP Reflection: Integration & Dashboards"
                prompts={[
                  {
                    id: 'courage-2',
                    category: 'courage',
                    prompt: 'Where did you show courage while presenting live scenario switches? What made it feel risky?',
                    placeholder: 'Describe a moment in the demo where you stayed calm and clear...'
                  },
                  {
                    id: 'adaptability-2',
                    category: 'adaptability',
                    prompt: 'A chart or link didn’t work at first. How did you adapt and fix it?',
                    placeholder: 'Explain your troubleshooting steps and what you’ll do next time...'
                  },
                  {
                    id: 'persistence-2',
                    category: 'persistence',
                    prompt: 'What took the most time to get right (validation, links, or KPIs)? How did you keep going?',
                    placeholder: 'Write about the process and what kept you motivated...'
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

