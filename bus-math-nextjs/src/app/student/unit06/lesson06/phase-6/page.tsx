import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, ArrowRight, Table2 } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[5]; // Closing phase

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Presenting a sensitivity matrix to investors requires confidence—you're showing them every possible outcome. How does having this full 'What-If' analysis help you feel more courageous during a presentation?",
    placeholder: "Think about how preparation reduces fear of difficult questions..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "Your sensitivity matrix must adapt to different investor questions. Reflect on a moment when you had to explain what the matrix showed about pricing risk. What did you learn?",
    placeholder: "Reflect on translating data table results into business language..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "We built two types of Data Tables today. Describe one specific challenge you faced and how you resolved it. Why is this skill important for the final project?",
    placeholder: "Reflect on your problem-solving process and professional standards..."
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
              🎯 Phase 6: Closing
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Celebration Header */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Sensitivity Analysis Mastery: You Can Answer "What-If"
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Professional What-If Analysis Milestone Reached
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4 font-medium">
                      Congratulations! You've officially mastered <strong>Data Tables</strong>. You can now 
                      show investors the full range of outcomes—not just one scenario, but every possibility 
                      at once. That's the difference between a guess and a strategy.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">Professional Skills Gained</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Technical Skills:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>One-variable Data Table setup</li>
                          <li>Two-variable Data Table (matrix) setup</li>
                          <li>Column vs. Row input cell logic</li>
                          <li>Array formula behavior</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Strategic Skills:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>Full-range scenario analysis</li>
                          <li>Pricing risk identification</li>
                          <li>Break-even zone communication</li>
                          <li>Investor-ready matrix presentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CAP Reflection */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    CAP Framework Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal prompts={reflectionPrompts} />
                </CardContent>
              </Card>

              {/* Next Steps Preview */}
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    Next: Integration Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700 text-sm">
                      You've built the <strong>engine</strong> (CVP model), the <strong>sniper</strong> (Goal Seek), 
                      and the <strong>sensitivity matrix</strong> (Data Tables). In Lesson 7 (Project Rehearsal), 
                      you'll integrate everything into a polished, investor-ready workbook.
                    </p>
                    <div className="bg-white p-4 rounded border border-orange-200 flex items-start gap-3">
                      <Table2 className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-orange-900">Unit Final Milestone:</p>
                        <p className="text-[11px] text-orange-800">
                          Carry your CVP model, Goal Seek analysis, and sensitivity tables into a polished 
                          pricing workbook that is ready for QA, rehearsal, and presentation.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Final Thought */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Final Perspective
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 text-sm">
                    "Sarah," Michael Chen said at the end of the rehearsal, "most founders can tell me 
                    one price point. You can tell me every price point and show me exactly where the 
                    risk lives. That's what strategic pricing looks like."
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
