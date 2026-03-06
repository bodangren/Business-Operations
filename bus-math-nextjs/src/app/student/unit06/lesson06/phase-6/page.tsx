import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, Users, ArrowRight, Compass } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[5]; // Closing phase

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Presenting to investors requires courage. How does having a dashboard with a 'Downside Scenario' already planned out help you feel more courageous during a presentation?",
    placeholder: "Think about how preparation reduces fear of difficult questions..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "Your dashboard must adapt to whatever the investor asks. Reflect on a moment today when you had to adjust your XLOOKUP logic to make it more flexible. What did you learn?",
    placeholder: "Reflect on technical flexibility and problem solving..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "We've spent 6 lessons building this workbook. Describe one specific feature you are most proud of persisting through. Why is this feature critical for the final project?",
    placeholder: "Reflect on your long-term effort and the importance of professional standards..."
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
                    Steering Wheel Complete: You Are Investor-Ready
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Professional Integration Milestone Reached
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4 font-medium">
                      Congratulations! You've officially built the <strong>PriceLab Steering Wheel</strong>. 
                      You have moved from being a data entry clerk to a strategic leader who can 
                      steer a business through any market volatility.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">Professional Skills Gained</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Integration Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>XLOOKUP scenario logic</li>
                          <li>Data Validation toggles</li>
                          <li>Dynamic chart linking</li>
                          <li>Absolute reference anchoring ($)</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Strategic Authority:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>Z-Pattern professional design</li>
                          <li>Real-time scenario defense</li>
                          <li>Risk planning (Downside Case)</li>
                          <li>Executive communication</li>
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
                    Next: Production Studio
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700 text-sm">
                      You have the engine and the steering wheel. In Lesson 7, you will move into
                      <strong> Production Studio</strong>: checking formulas, cleaning labels, tightening visuals,
                      and making sure your workbook is ready to present without confusion.
                    </p>
                    <div className="bg-white p-4 rounded border border-orange-200 flex items-start gap-3">
                      <Compass className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-orange-900">Unit Final Milestone:</p>
                        <p className="text-[11px] text-orange-800">
                          Carry your CVP model, sensitivity work, and dashboard forward into a polished
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
                    "Sarah," Michael Chen said at the end of the rehearsal, "I've seen founders 
                    who have been in business for 10 years who don't have this level of 
                    control over their numbers. You're not just a developer; you're a CEO."
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
