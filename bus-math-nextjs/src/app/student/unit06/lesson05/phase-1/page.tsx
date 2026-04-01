"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, AlertCircle, Compass, Calculator } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[0];

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah wants to earn $15,000 in profit next month. If she keeps her current price of $1,350 per project, how many projects does she need to sell?",
    answers: [
      "About 32 projects",
      "About 45 projects",
      "About 15 projects",
      "About 22 projects"
    ],
    explanation: "Contribution margin = $1,350 - $880 = $470 per project. To earn $15,000: Fixed Costs ($12,000) + Target Profit ($15,000) = $27,000 ÷ $470 ≈ 57 projects to cover fixed costs and target, or about 32 projects above break-even."
  },
  {
    id: "hook-2",
    question: "Instead of guessing different volumes, what if Sarah could tell Excel: 'Find the price that gives me $15,000 profit at 25 projects'—what tool would she use?",
    answers: [
      "Goal Seek",
      "Solver",
      "Data Table",
      "Scenario Manager"
    ],
    explanation: "Goal Seek is perfect for this: you know the target result (profit) and one input, but need to solve for the other input (price)."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🚩 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Calculator className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    The Target-Price Problem
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Reverse-Engineering Profit Goals
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4 font-medium">
                      "Sarah, our investor meeting is in two days," Alex said. "They want to know: 
                      <strong> what's the lowest price we can charge and still make $15,000 profit?</strong>"
                    </p>
                    <p className="text-red-800 mb-4">
                      Sarah stared at her CVP worksheet. She knew her fixed costs were $12,000 and 
                      her variable cost per project was $880. At her current price of $1,350, she 
                      needed about 57 projects just to break even. But the investor wanted to know: 
                      <em> what price for what volume</em> to hit that $15,000 target?
                    </p>
                    <p className="text-red-900">
                      "I could try dozens of prices manually," Sarah told Jennifer. "But there's got 
                      to be a faster way. I need Excel to <strong>work backward</strong> from my target."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-xl">
                      <Compass className="w-6 h-6 text-blue-600" />
                      From Forward Math to Reverse Engineering
                    </h3>
                    <p className="text-blue-800 mb-4">
                      In Lessons 3 and 4, you calculated profit <strong>forward</strong>: enter price and volume, 
                      see profit come out. That's like driving forward while looking in the rearview mirror.
                    </p>
                    <p className="text-blue-800">
                      In this lesson, we use <strong>Goal Seek</strong> to drive <strong>backward</strong>: 
                      tell Excel the profit you want, and it finds the price or volume you need. This is 
                      exactly what investors and CEOs need to hear.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Strategy Check: Reverse Engineering"
                description="Before we learn the tool, let's make sure we understand the problem."
                questions={hookQuestions}
                showExplanations={true}
              />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
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
                    <li>Why would an investor ask "what's the lowest price" instead of "what's our profit"?</li>
                    <li>If Sarah knows her target profit and her volume, what's the one thing she doesn't know?</li>
                    <li>How would knowing the answer help Sarah prepare for the investor meeting?</li>
                  </ul>
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
