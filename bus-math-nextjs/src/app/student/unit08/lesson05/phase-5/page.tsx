import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5";
import { lesson05Data, unit08Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[4];

const assessmentQuestions = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] });

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <BarChart3 className="w-8 h-8 text-yellow-700" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Advanced Automation: Professional Mastery
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left">
                  <p className="text-slate-800 mb-4">
                    Complete the mastery check. Aim for investor‑ready: strong validation, robust formulas, and clear communication of results.
                  </p>
                </CardContent>
              </Card>

              <ComprehensionCheck
                title="Investor‑Ready Automation Assessment"
                description="Technical knowledge + applied business judgment."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
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
