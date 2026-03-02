import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Target, TrendingUp, Users, ArrowRight, Compass } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[5]; // Closing phase

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Building automated Data Tables can be intimidating because one wrong link can break the whole matrix. Describe a moment when you had to troubleshoot a technical error today. How did you stay calm?",
    placeholder: "Reflect on a moment of frustration and how you resolved it..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "In Lesson 4, we used Goal Seek for one answer. Today we mapped 50. How has your thinking adapted now that you can see a whole 'landscape' of possibilities instead of just one target?",
    placeholder: "Think about how your perspective on business planning has shifted..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "Data Tables require exact steps (Corner Link -> Selection -> Dialog Box). What part of this process required the most focus for you? How will you remember these steps for your final project?",
    placeholder: "Describe your strategy for mastering this technical workflow..."
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit06Data} 
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
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Celebration Header */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Master Cartographer: Pricing Map Complete
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Advanced Automation Milestone Reached
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4 font-medium">
                      Congratulations! You've built the most complex mathematical part of Sarah's 
                      PriceLab workbook. You are no longer just guessing at prices—you are 
                      mapping the future.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">Your New Capabilities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Technical Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>Automated 1-Variable Sensitivity Analysis</li>
                          <li>2-Variable Profit Matrix Construction</li>
                          <li>Heat Map visualization (Conditional Formatting)</li>
                          <li>Corner Link & Dialog Box mechanics</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Strategic Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-[11px]">
                          <li>Identifying profit 'Danger Zones' instantly</li>
                          <li>Predicting the impact of competitor price drops</li>
                          <li>Quantifying volume needs for low-price strategies</li>
                          <li>Presenting a resilient, data-driven strategy</li>
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
                    Coming Up: The Integration Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700 text-sm">
                      You have the engine (the Data Tables). Now you need the <strong>steering wheel</strong>. 
                      In Lesson 6, we will build a professional Integration Dashboard that wraps 
                      your math in visuals and toggles.
                    </p>
                    <div className="bg-white p-4 rounded border border-orange-200 flex items-start gap-3">
                      <Compass className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-orange-900">Next Lesson's Milestone:</p>
                        <p className="text-[11px] text-orange-800">
                          Build a one-page "Investor Summary" that pulls data from your Lesson 5 
                          tables automatically using XLOOKUP and interactive charts.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Final Thought
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-800 text-sm">
                    "Jennifer," Sarah said after seeing her Pricing Map, "I finally feel like I'm 
                    ahead of the market instead of just reacting to it. I can see the green 
                    path forward no matter what my competitors do."
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