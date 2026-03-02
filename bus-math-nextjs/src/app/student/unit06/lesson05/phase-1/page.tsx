import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, TrendingDown, AlertCircle, Compass, ShieldAlert } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "A new competitor enters Sarah's market with lower prices. Why is Goal Seek alone not enough to solve this problem?",
    answers: [
      "Goal Seek only finds one single answer, but Sarah needs to see the results of many different pricing options at once.",
      "Goal Seek doesn't work with competitor data.",
      "Goal Seek only works for increasing prices, not lowering them.",
      "Goal Seek requires a professional license that Sarah doesn't have yet."
    ],
    explanation: "Goal Seek is a 'sniper'—it finds one exact target. But in a price war, Sarah needs a 'map' (Data Table) to see how her profit shifts across dozens of different scenarios instantly."
  },
  {
    id: "hook-2",
    question: "If Sarah drops her price to stay competitive, what must she do to keep her profit the same?",
    answers: [
      "Increase her sales volume (sell more projects)",
      "Increase her fixed costs",
      "Decrease her selling price further",
      "Do nothing; profit is not affected by price drops"
    ],
    explanation: "CVP math is a balance. If Price goes down, Volume (or efficiency) must go up to maintain the same profit level."
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
                    <ShieldAlert className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    The Competitor's Squeeze
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Pricing War & Market Volatility
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4 font-medium">
                      "Sarah, have you seen the news?" Alex called, sounding panicked. "A new agency just 
                      launched downtown. They're offering 'Value Websites' for just $1,050. That's $300 less 
                      than our base price!"
                    </p>
                    <p className="text-red-800 mb-4">
                      Sarah felt the pressure. She knew that if she just matched their price, her 
                      contribution margin would drop from $470 to $170. To hit her profit goal at that price, 
                      she'd have to sell 3x more projects—which her current team couldn't handle.
                    </p>
                    <p className="text-red-900">
                      "I don't just need one answer from Goal Seek," Sarah told Jennifer. "I need a 
                      <strong> map of the entire market</strong>. I need to know exactly how much volume I need 
                      at every possible price point between $1,000 and $1,500. I need to see the danger zones 
                      before I step into them."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-xl">
                      <Compass className="w-6 h-6 text-blue-600" />
                      From Sniper to Cartographer
                    </h3>
                    <p className="text-blue-800 mb-4">
                      In Lesson 4, we used <strong>Goal Seek</strong> like a sniper—hitting one specific 
                      target at a time. In this lesson, we use <strong>Data Tables</strong> to act as 
                      cartographers (map-makers).
                    </p>
                    <p className="text-blue-800">
                      Instead of guessing one price at a time, we will build an automated matrix that 
                      calculates <strong>50 different scenarios in 5 seconds</strong>. This "Pricing Map" 
                      is what professional analysts use to advise CEOs during high-stakes market shifts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Strategy Check: Facing the Squeeze"
                description="Before we build the map, let's understand why we're mapping."
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
                    Imagine you are Sarah's advisor. The competitor dropped their price to $1,050. 
                    Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Why is "matching their price" a dangerous decision for a small business?</li>
                    <li>How does having a visual 'map' of profit scenarios help Sarah stay calm under pressure?</li>
                    <li>What information would you want to see on that map before making a final choice?</li>
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