"use client";

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, ShieldCheck, AlertCircle, TrendingUp, Presentation, Target } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[4];

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "In the Goal Seek dialog, what does 'Set Cell' refer to?",
    answers: [
      "The cell containing your Profit formula",
      "The cell with your Price input",
      "The cell with your target profit value",
      "The cell with your Fixed Costs"
    ],
    explanation: "'Set Cell' is the formula cell whose result you want to control—in this case, your Profit cell. This must be a formula, not a static number."
  },
  {
    id: "assess-2",
    question: "Sarah wants to know what volume she needs to hit $20,000 profit at $1,350 price. Which cell goes in 'By Changing Cell'?",
    answers: [
      "The Volume input cell",
      "The Price input cell",
      "The Profit formula cell",
      "The Fixed Costs cell"
    ],
    explanation: "You put the input cell you want Excel to adjust. Since you're solving for Volume, you put the Volume input cell in 'By Changing Cell'."
  },
  {
    id: "assess-3",
    question: "If Goal Seek returns an error saying it cannot find a solution, what should you check first?",
    answers: [
      "That your target is mathematically possible given your constraints",
      "That you have the latest Excel version",
      "That the Set Cell contains a number, not a formula",
      "That you selected the right menu option"
    ],
    explanation: "Goal Seek can only find solutions that exist mathematically. If your target profit is impossible (e.g., higher than maximum revenue), Goal Seek will error. Check that your target is reasonable first."
  },
  {
    id: "assess-4",
    question: "A student runs Goal Seek and the Price changes to $50,000. Why is this likely wrong?",
    answers: [
      "The target profit is probably impossible or the wrong cell was in Set Cell",
      "Excel has a bug",
      "Goal Seek always returns unrealistic prices",
      "The student should have used a different tool"
    ],
    explanation: "Extreme answers usually mean either the target is impossible (requiring an unrealistic price) or the wrong cell was selected. Double-check your Set Cell points to the Profit formula."
  }
];

export default function Phase5Page() {
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
                    The Investor Meeting
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Technical Verification & Business Interpretation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6 text-center">
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      Sarah is in the investor meeting. They have three questions, and she needs 
                      <strong> you </strong> to answer them using her Goal Seek workbook.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Presentation className="w-5 h-5" />
                      Investor Questions
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Technical Mastery (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Correct Set Cell / By Changing Cell selection</li>
                          <li>Goal Seek dialog box mechanics</li>
                          <li>Troubleshooting failed Goal Seek runs</li>
                          <li>Multiple scenario testing</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900 text-sm">Strategic Judgment (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs">
                          <li>Interpreting results in business context</li>
                          <li>Identifying realistic vs. unrealistic prices</li>
                          <li>Connecting pricing to market positioning</li>
                          <li>Communicating findings to investors</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Assessment */}
              <ComprehensionCheck
                title="Goal Seek Technical Assessment"
                description="Prove you can set up and run Goal Seek correctly."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Business Application */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Investor Prep: Scenario Document
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-amber-900">
                  <p>
                    Re-open your Goal Seek CVP workbook. Use it to create a one-page "Investor Prep" 
                    document answering these three questions:
                  </p>
                  <ol className="list-decimal list-inside space-y-2">
                    <li><strong>Break-Even Price:</strong> What is the lowest price Sarah can charge and still make at least $0 profit at 25 projects?</li>
                    <li><strong>Target Price:</strong> What price gives Sarah $15,000 profit at 25 projects? (Round to a natural price point.)</li>
                    <li><strong>Growth Scenario:</strong> If Sarah wants $25,000 profit and can handle 35 projects, what should she charge?</li>
                  </ol>
                  <p className="text-xs text-amber-800">
                    For each answer, include the exact Goal Seek settings you used and a one-sentence 
                    business recommendation. This document will be your artifact for Phase 5.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Almost Ready for Prime Time</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll reflect on how Goal Seek changes Sarah's ability to 
                    prepare for investor meetings. Next lesson, we'll add Data Tables to map multiple scenarios at once.
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
