"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Lightbulb, Users } from "lucide-react";
import GoalSeekSimulator from "../GoalSeekSimulator";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[2];

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Safe Rehearsal: Goal Seek Workflow
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Practice the Dialog Before the Real Workbook
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      "I want to make sure I understand the three boxes before I touch my workbook," 
                      Sarah said. "If I mess up the Set Cell vs. By Changing Cell, I could get a 
                      completely wrong answer and not even know it."
                    </p>
                    <p className="text-purple-800">
                      Before we run Goal Seek on the real CVP workbook, you'll practice the exact 
                      workflow in this simulator. Think of it as a flight simulator for Excel—
                      safe to make mistakes here, and you'll learn exactly what each box does.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Goal Seek Simulator */}
              <GoalSeekSimulator />

              {/* Key Insight */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Key Insight: The Power of Reverse Engineering
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-900 text-sm">
                    Notice what just happened: we told Excel the <em>result</em> we wanted, and it 
                    found the <em>input</em> we needed.
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 text-xs">
                    <li><strong>Forward Math:</strong> Price × Volume − Costs = Profit (you know inputs, find result)</li>
                    <li><strong>Goal Seek:</strong> Profit = Target, solve for Price (you know result, find input)</li>
                    <li><strong>The Business Value:</strong> Investors ask "what do we need to charge?"—Goal Seek answers instantly.</li>
                  </ul>
                </CardContent>
              </Card>

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
                    Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>What business decision would require you to "work backward" like Goal Seek?</li>
                    <li>Why is it faster to use Goal Seek than to guess-and-check prices manually?</li>
                    <li>What could go wrong if you put the wrong cell in "By Changing Cell"?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready for the Real Workbook</h3>
                  <p className="text-gray-700">
                    In Independent Practice, you'll build the CVP model from scratch in Excel 
                    and run Goal Seek to answer Sarah's investor question.
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
