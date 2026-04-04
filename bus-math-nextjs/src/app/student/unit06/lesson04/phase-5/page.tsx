import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, TrendingUp } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[4];

const assessmentQuestions = [
  {
    id: "assess-1",
    question: "What is the primary purpose of comparing pricing scenarios before using automation tools?",
    answers: [
      "To build intuition for what the automation will do",
      "Because Excel is always wrong",
      "To impress the instructor",
      "Because manual calculations are faster"
    ],
    explanation: "Scenario comparison by hand builds the business intuition that makes automated tools useful. When you understand why one scenario beats another, Goal Seek and Data Tables become productivity tools, not mysteries."
  },
  {
    id: "assess-2",
    question: "When the volume required to hit a profit target exceeds business capacity, the scenario is:",
    answers: [
      "Not realistic, even if the math works",
      "The best option",
      "Impossible to calculate",
      "Always wrong"
    ],
    explanation: "Business constraints matter as much as math. A scenario that requires 50 projects when you can only handle 25 is not realistic, no matter what the spreadsheet says."
  },
  {
    id: "assess-3",
    question: "What does 'sensitivity' mean in scenario analysis?",
    answers: [
      "Understanding which variable (price, volume, costs) creates the biggest change in profit",
      "How careful you are with calculations",
      "The accuracy of your Excel formulas",
      "How fast the spreadsheet calculates"
    ],
    explanation: "Sensitivity analysis asks: which input matters most? Small changes in sensitive variables have large effects on profit. Understanding this helps prioritize which 'lever' to pull."
  },
  {
    id: "assess-4",
    question: "If Sarah raises prices but the competitor drops prices, what happens to the margin of safety?",
    answers: [
      "It shrinks—both volume and premium strategy become riskier",
      "It stays the same",
      "It automatically increases",
      "It becomes irrelevant"
    ],
    explanation: "Margin of safety = current volume - break-even volume. When prices go up and competitors go down, the break-even point typically rises (fewer customers are needed to cover costs), shrinking the safety buffer."
  },
  {
    id: "assess-5",
    question: "Why is it important to preview Excel automation after learning scenario comparison manually?",
    answers: [
      "Because understanding the business logic first makes you a better automation user",
      "Because Excel is too hard for beginners",
      "Because manual calculation is required by law",
      "Because automation always gives wrong answers"
    ],
    explanation: "When you understand the why behind scenario comparisons, automated tools amplify your capabilities rather than replacing understanding. Without that foundation, you're just pressing buttons without knowing if the answer makes business sense."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <ClipboardCheck className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Scenario Comparison: Exit Ticket
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Testing Your Business Judgment
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                    <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Assessment Overview
                    </h3>
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      This exit ticket tests your understanding of scenario comparison and sensitivity reasoning.
                      These skills are the foundation for the Excel automation you'll learn in Lesson 05.
                    </p>
                    <p className="text-yellow-800">
                      Success here shows you're ready to use Goal Seek and Data Tables as tools that 
                      <em>amplify</em> your business judgment—not replace it.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Assessment Focus Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Scenario Logic (60%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Comparing premium vs. volume pricing paths</li>
                          <li>Evaluating business constraints vs. mathematical solutions</li>
                          <li>Understanding margin of safety</li>
                          <li>Identifying when scenarios are unrealistic</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Sensitivity Reasoning (40%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Identifying which variables matter most</li>
                          <li>Predicting how changes affect profitability</li>
                          <li>Connecting scenario analysis to business decisions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Exit Ticket */}
              <ComprehensionCheck
                title="Scenario Comparison Exit Ticket"
                description="Demonstrate your understanding of scenario comparison and sensitivity reasoning."
                questions={assessmentQuestions}
                showExplanations={true}
                allowRetry={false}
              />

              {/* Career Connection */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800">🚀 Career Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 mb-4">
                    Scenario comparison and sensitivity reasoning skills transfer directly to business careers:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Strategic Roles:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Financial analyst scenario modeling</li>
                        <li>Product pricing strategy</li>
                        <li>Market entry analysis</li>
                        <li>Investment decision-making</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Operations Roles:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Capacity planning decisions</li>
                        <li>Cost reduction prioritization</li>
                        <li>Supply chain sensitivity analysis</li>
                        <li>Business continuity planning</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll celebrate your scenario mastery and preview how 
                    Excel tools (Goal Seek and Data Tables) will automate the comparison process 
                    you just learned manually.
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
