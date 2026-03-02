import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Wrench, Target, TrendingUp, Sparkles, LineChart } from "lucide-react";
import GoalSeekMissionControl from "../GoalSeekMissionControl";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2]; // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Pulling the Profit Levers
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Reverse-Engineering TechStart&apos;s Next Milestone
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      Sarah&apos;s goal is clear: <strong>$10,000 monthly profit</strong>. 
                      But there are two very different ways to get there. She can work 
                      <em> harder</em> (sell more projects) or work <em>smarter</em> (charge more per project).
                    </p>
                    <p className="text-purple-800">
                      In this mission, you&apos;ll simulate the logic Excel uses during a Goal Seek. 
                      By calculating the required numbers yourself, you&apos;ll understand exactly what happens 
                      behind the scenes before we move into the actual software.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-blue-50 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-2">
                        <LineChart className="w-4 h-4" />
                        Lever A: Volume
                      </h4>
                      <p className="text-xs text-blue-800">
                        Keeping the price at $1,350 and finding how many more customers Sarah 
                        needs to find.
                      </p>
                    </div>
                    <div className="p-4 bg-green-50 rounded border border-green-200">
                      <h4 className="font-bold text-green-900 flex items-center gap-2 mb-2">
                        <Sparkles className="w-4 h-4" />
                        Lever B: Premium Pricing
                      </h4>
                      <p className="text-xs text-green-800">
                        Keeping the volume at 24 projects (max capacity) and finding how much 
                        more Sarah needs to charge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mission Control Component */}
              <GoalSeekMissionControl />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-blue-800 mb-2 text-sm">
                    Look at the two solutions you found in Mission Control ($1,635 price vs. 39 projects). 
                    Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Which goal seems more realistic for Sarah&apos;s current business?</li>
                    <li>What are the risks of choosing Lever A (Volume)?</li>
                    <li>What are the risks of choosing Lever B (Premium Pricing)?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    Now that you understand the math, you&apos;re ready to build the automated system 
                    in Excel. In Independent Practice, you&apos;ll use the actual Goal Seek tool to 
                    handle even more complex "what-if" scenarios.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}