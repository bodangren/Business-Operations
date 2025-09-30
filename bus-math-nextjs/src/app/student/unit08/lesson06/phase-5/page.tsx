import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4];

const assessmentQuestions = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] });

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <ComprehensionCheck
                title="Integration & Dashboard Mastery Check"
                description="Show your technical skill and business judgment with scenario switching and KPI interpretation."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-base flex items-center gap-2">
                    <Briefcase className="h-5 w-5" /> Career Connection: Analyst → Insights → Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-900">
                    Analysts test scenarios, read KPIs, and recommend actions. Your dashboard is your voice—make it clear, quick, and credible.
                  </p>
                </CardContent>
              </Card>
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
