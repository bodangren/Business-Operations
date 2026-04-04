"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingUp, Users, ArrowRight, Calculator } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[5];

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Using Goal Seek for the first time can feel like giving control to Excel. Describe a moment when you had to trust the tool to find an answer you couldn't calculate by hand.",
    placeholder: "Reflect on learning to trust automated tools..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "In Lessons 3-4, you calculated profit forward (inputs → result). Today you worked backward (result → inputs). How has this changed how you think about business problem-solving?",
    placeholder: "Think about forward vs. backward reasoning..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "Goal Seek requires knowing exactly which cells to select in the dialog box. What part of this process required the most focus? How will you remember the Set Cell / To Value / By Changing Cell workflow?",
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
                    <Calculator className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Reverse Engineer: Goal Seek Master
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    From Calculator to Strategic Advisor
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4 font-medium">
                      Congratulations! You've learned to use Goal Seek to answer the question 
                      investors ask most: "<em>What do we need to charge?</em>"
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">Your New Capabilities</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Technical Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-xs">
                          <li>Navigate to Data → What-If Analysis → Goal Seek</li>
                          <li>Select correct Set Cell (Profit formula)</li>
                          <li>Enter target value (To Value)</li>
                          <li>Choose changing cell (Price or Volume)</li>
                          <li>Troubleshoot impossible targets</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900 text-sm">Strategic Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-xs">
                          <li>Answer "what price for what profit" questions</li>
                          <li>Prepare investor-ready scenario analyses</li>
                          <li>Identify realistic vs. unrealistic pricing targets</li>
                          <li>Communicate reverse-engineered pricing strategies</li>
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
                    Coming Up: Mapping All the Scenarios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700 text-sm">
                      Goal Seek gives you <strong>one answer</strong> at a time. But investors often want 
                      to see a <strong>whole map</strong> of possibilities—what if prices range from $1,200 
                      to $1,600? What if volume varies from 20 to 40 projects?
                    </p>
                    <div className="bg-white p-4 rounded border border-orange-200 flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-orange-600 mt-1" />
                      <div>
                        <p className="text-xs font-bold text-orange-900">Next Lesson's Milestone:</p>
                        <p className="text-[11px] text-orange-800">
                          In Lesson 6, you'll use <strong>Data Tables</strong> to calculate 50 different 
                          scenarios at once. This transforms your workbook from a calculator into a 
                          "Pricing Map" that shows the entire landscape of possibilities.
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
                    "Jennifer," Sarah said after the investor meeting, "they loved the scenario analysis. 
                    When they asked 'what if we charge X?' I ran Goal Seek and gave them an answer in 
                    seconds. They asked how long it took to build— I said 'about an hour.' They were 
                    impressed that I could answer any pricing question instantly."
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
