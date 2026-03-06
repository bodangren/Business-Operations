import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Rocket } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[4]; // Assessment phase

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
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    The Integration Audit
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Verifying the Steering Wheel
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      Your PriceLab dashboard is a powerful tool, but is it <strong>trustworthy</strong>? 
                      In this assessment, we'll audit your integration logic and test your ability 
                      to present data-driven insights under pressure.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Rocket className="w-5 h-5" />
                      Dashboard Readiness Metrics
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Technical (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>XLOOKUP range anchoring ($B$4)</li>
                          <li>Scenario Summary table is complete and accurate</li>
                          <li>Dropdown validation (Data &gt; Validation)</li>
                          <li>Dynamic chart data binding</li>
                          <li>Error handling (#N/A prevention)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Presentation (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Z-Pattern layout design</li>
                          <li>Scenario-based risk analysis</li>
                          <li>Strategic KPI selection</li>
                          <li>Executive Summary clarity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Assessment */}
              <ComprehensionCheck
                title="Integration & Dashboard Mastery Assessment"
                description="Show the investors that you are in total control of the data steering wheel."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Dashboard Debrief */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <Rocket className="w-5 h-5" />
                    90-Second Dashboard Debrief
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-amber-900">
                  <p>
                    With your dashboard open, pretend Michael Chen just asked for the short version. Record or script a
                    90-second response that references live numbers from the toggle-driven KPIs.
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li>Name the scenario you recommend and cite the exact profit, price, and volume from your dashboard cells.</li>
                    <li>Describe what the chart shows when you switch to the &ldquo;Downside&rdquo; case and summarize the risk in one sentence.</li>
                    <li>State one follow-up question you would explore with your target-profit sheet or sensitivity grid if the investor pushes back.</li>
                  </ol>
                  <p className="text-xs text-amber-800">
                    Drop the script into the “Investor Notes” sheet or a doc you share with your teacher—the reflection ties the technical work to persuasive communication.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Final Polish Ahead</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll reflect on how integration builds professional authority. 
                    Next lesson, you'll move into <strong>Production Studio</strong> mode to audit the workbook,
                    tighten the visuals, and get presentation-ready.
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
