import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase, AlignLeft } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4]; // Assessment

export default function Phase5Page() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
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
                description="Show your understanding of switching, validation, visuals, and decision framing."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <AlignLeft className="h-5 w-5" />
                    What ‘Investor-Ready’ Looks Like
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="list-disc list-inside space-y-1 text-blue-900">
                    <li>Clarity: One-screen view with clean labels and readable charts.</li>
                    <li>Reliability: Exact-match lookups, validation messages, stable references.</li>
                    <li>Auditability: Documented driver → output → chart links.</li>
                    <li>Action: KPIs connected to a short, specific recommendation.</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-800 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Career Tie: Analyst/Consultant Workflow
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-left text-emerald-900">
                  <p>
                    Professionals turn scenarios → insights → recommendations. Your dashboard should let a
                    partner ask “What if?” and get a trustworthy answer in seconds.
                  </p>
                </CardContent>
              </Card>
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
