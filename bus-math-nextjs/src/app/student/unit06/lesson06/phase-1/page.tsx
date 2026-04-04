"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Zap, Calculator } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah wants to know: 'What if we charge $1,200? What about $1,300? $1,400?' Instead of running Goal Seek three separate times, what Excel tool shows ALL these outcomes at once?",
    answers: [
      "Data Table",
      "Scenario Manager",
      "Solver",
      "Conditional Formatting"
    ],
    explanation: "Data Table instantly calculates all outcomes in a range. Sarah types the prices once, and Excel fills in the profits for every scenario at once."
  },
  {
    id: "hook-2",
    question: "Sarah's investor asks: 'Show me a matrix of prices from $1,000 to $2,000 AND volumes from 10 to 50 units. What's the profit at each combination?' Which Data Table type solves this?",
    answers: [
      "Two-variable Data Table",
      "One-variable Data Table",
      "Pivot Table",
      "Solver"
    ],
    explanation: "A two-variable Data Table uses one input for rows and another for columns, creating a full matrix of results in seconds."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
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
                    The "What-If" Machine
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    See Every Outcome at Once
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4 font-medium">
                      "Sarah, the investors want to see the full picture," Alex said. "Not just one scenario. 
                      They want to see: <strong> what happens at every price from $1,000 to $2,000?</strong>"
                    </p>
                    <p className="text-red-800 mb-4">
                      Sarah had just learned Goal Seek in Lesson 5. It was powerful—she could find the 
                      exact price for a target profit. But Goal Seek only gave her <em>one answer</em> at a time.
                    </p>
                    <p className="text-red-800 font-medium">
                      "I need something faster," Sarah said. "I need to see a whole matrix of outcomes 
                      at once, not one number at a time."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-xl">
                      <Zap className="w-6 h-6 text-blue-600" />
                      The Power of Data Tables
                    </h3>
                    <p className="text-blue-800 mb-4 text-sm">
                      In Lesson 5, Sarah built a CVP model that could calculate profit. Now, she needs 
                      to see profit at <strong>every possible price</strong> without running Goal Seek 100 times.
                    </p>
                    <p className="text-blue-800 text-sm">
                      <strong>Data Table</strong> is the answer. It takes her existing CVP model and instantly 
                      calculates the result for as many input values as she wants. One setup, infinite answers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Why Data Tables?"
                description="How does Data Table solve the 'many answers at once' problem?"
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
                    Think about decisions that require testing many options. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>When has testing "all at once" been better than testing one thing at a time?</li>
                    <li>If Sarah's investors ask for a "range of outcomes," what does that tell you about the business decision?</li>
                    <li>Why would an investor care about seeing 20 price points instead of just one?</li>
                  </ul>
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
