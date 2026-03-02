import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Presentation, Zap, Compass } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah has multiple spreadsheets with data, but her investor is getting confused. What is the main purpose of an Integration Dashboard?",
    answers: [
      "To combine all key insights into one single 'control center' that can answer any scenario instantly.",
      "To store backup copies of all her Excel files.",
      "To replace her fixed costs with automated formulas.",
      "To keep her competitors from seeing her pricing data."
    ],
    explanation: "An integration dashboard acts as a 'steering wheel.' It pulls data from various complex tables and presents it in a simple, interactive summary that stakeholders can actually understand."
  },
  {
    id: "hook-2",
    question: "If an investor asks 'What if we have a bad month?', which dashboard feature is most useful?",
    answers: [
      "A Scenario Toggle (e.g., switching to a 'Downside' scenario)",
      "A more colorful font for the title",
      "A longer description of fixed costs",
      "Deleting the old data tables"
    ],
    explanation: "Scenario toggles allow you to instantly switch the entire dashboard view to show different outcomes, proving you've planned for both success and failure."
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
              🎯 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <Compass className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    The Steering Wheel Moment
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    From "I Think" to "Here is the Data"
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      Sarah was rehearsing her Town Hall presentation. "I have the 1-Variable table on 
                      Sheet 2," she muttered, "and the 2-Variable Matrix on Sheet 3. And my Goal Seek 
                      notes are on a post-it..."
                    </p>
                    <p className="text-red-800 mb-4 font-medium">
                      Jennifer Kim stopped her. "Sarah, if you're flipping between sheets during a 
                      presentation, you've already lost the audience. You have a powerful engine, 
                      but you don't have a <strong>steering wheel</strong>."
                    </p>
                    <p className="text-red-900">
                      "A steering wheel?" Sarah asked. "Yes," Jennifer replied. "A single, professional 
                      dashboard where one click changes every chart, every KPI, and every recommendation. 
                      You need to show them you're in total control of the business."
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2 text-xl">
                      <Zap className="w-6 h-6 text-blue-600" />
                      The Power of Integration
                    </h3>
                    <p className="text-blue-800 mb-4 text-sm">
                      In the last few lessons, we built the <strong>Engine Room</strong>:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-xs mb-4">
                      <li><strong>Lesson 1-2:</strong> The Data Cleanup & Basic CVP</li>
                      <li><strong>Lesson 3-4:</strong> The Scenarios & Goal Seek Sniping</li>
                      <li><strong>Lesson 5:</strong> The Automated Sensitivity Matrix</li>
                    </ul>
                    <p className="text-blue-800 text-sm">
                      Today, we build the <strong>Integration Dashboard</strong>. This is the one-page 
                      summary that links all that math together so Sarah can answer any question 
                      instantly using dynamic scenario toggles.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="The Role of the Dashboard"
                description="Why do professional models need a steering wheel?"
                questions={hookQuestions}
                showExplanations={true}
              />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Presentation className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-blue-800 mb-2 text-sm">
                    Think about a dashboard you use in real life (like on a phone, a car, or a video game). 
                    Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>What information does it summarize for you?</li>
                    <li>What would happen if that information was hidden across 10 different menus?</li>
                    <li>How does a good dashboard help you make decisions faster?</li>
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