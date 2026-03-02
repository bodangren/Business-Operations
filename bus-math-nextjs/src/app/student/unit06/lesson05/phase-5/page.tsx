import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, ShieldCheck, AlertCircle, TrendingUp, Presentation } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[4]; // Assessment phase

export default function Phase5Page() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
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
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <ShieldCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    The Town Hall Stress-Test
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Strategic Analysis & Technical Verification
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      Sarah's pricing map is finished. Now, she needs to use it to answer the 
                      tough questions from investors and competitors. This assessment checks if 
                      you can <strong>read the map</strong> and <strong>defend the model</strong>.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Presentation className="w-5 h-5" />
                      Investor Expectations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Technical Mastery (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Correct Row/Column input selection</li>
                          <li>Corner link formula validation</li>
                          <li>Error handling (IFERROR) usage</li>
                          <li>Data Table setup troubleshooting</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Strategic Judgment (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Identifying the "Profit Zone" (Green Zone)</li>
                          <li>Calculating volume requirements for price drops</li>
                          <li>Assessing business resilience</li>
                          <li>Comparing price vs. volume sensitivity</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Assessment */}
              <ComprehensionCheck
                title="Pricing Map Mastery Assessment"
                description="Prove you can build and interpret professional sensitivity models."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Heat Map Storyboard */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Translate the Data Table into a Story
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-amber-900">
                  <p>
                    Re-open the two Data Tables you built in Phase 4. Use them to draft a three-slide storyboard for Sarah&apos;s
                    &ldquo;Town Hall&rdquo; update. The goal is to interpret—not re-run—the math.
                  </p>
                  <ol className="list-decimal list-inside space-y-1">
                    <li><strong>Slide 1 – Safe Zone:</strong> Highlight the price/volume combinations that keep profit above $0 and explain why.</li>
                    <li><strong>Slide 2 – Risk Trigger:</strong> Identify the first red cell that appears if Sarah drops her price by $100 and stays at 20 projects. Quantify the loss.</li>
                    <li><strong>Slide 3 – Recommendation:</strong> Choose one row or column from the matrix as Sarah&apos;s default strategy and justify it using the numbers.</li>
                  </ol>
                  <p className="text-xs text-amber-800">
                    Capture your talking points beneath the tables or on a new sheet. You&apos;ll reference them when wiring the dashboard
                    in Lesson 06.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Almost Ready for Prime Time</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll reflect on how these automated maps change Sarah's 
                    role from a "calculator" to a "strategic advisor." Next lesson, we'll wrap 
                    this engine in a professional dashboard.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}
