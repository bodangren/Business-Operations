import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, ArrowRight, TrendingUp } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[5];

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Describe a moment during scenario practice when you had to push through confusion or frustration. How did you persist when the options seemed equal?",
    placeholder: "Think about times when both scenarios looked mathematically equal but you had to dig deeper..."
  },
  {
    id: "courage-2", 
    category: "courage" as const,
    prompt: "How has mastering scenario comparison given you confidence to tackle complex business problems that seem overwhelming at first?",
    placeholder: "Consider how you now approach pricing decisions that previously felt impossible to analyze..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "How did you adapt your scenario approach when the competitor changed their price? How does this apply to real business?",
    placeholder: "Reflect on how quickly you had to reconsider your analysis when new information arrived..."
  },
  {
    id: "adaptability-2",
    category: "adaptability" as const, 
    prompt: "Describe how you'll apply scenario comparison techniques to decisions beyond pricing.",
    placeholder: "Think about career decisions, personal finance, or future business ventures..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "What was the most challenging scenario comparison you completed? What kept you motivated to find the answer?",
    placeholder: "Consider the complex multi-variable scenarios or edge cases..."
  },
  {
    id: "persistence-2",
    category: "persistence" as const,
    prompt: "How will scenario comparison help you persist through complex business decisions in your future career?",
    placeholder: "Think about having analytical frameworks when facing difficult strategic choices..."
  }
];

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Celebration Header */}
              <Card className="border-indigo-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-8 h-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-indigo-800 mb-2">
                    Scenario Mastery Complete: Your Business Intuition
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Foundation for Excel Automation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
                    <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Congratulations on Your Achievement!
                    </h3>
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4">
                      You've built the <strong>business intuition</strong> that separates professionals who 
                      understand their tools from those who just press buttons. When you use Goal Seek and 
                      Data Tables in Lesson 05, you'll know <em>why</em> the answers matter.
                    </p>
                    <p className="text-indigo-800">
                      Sarah's dilemma—Premium vs. Volume pricing—is exactly the kind of decision that 
                      trips up business owners who skip the scenario comparison work. You've done the work. 
                      You're ready for the automation.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">What You've Accomplished</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900">Scenario Logic:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Comparing premium vs. volume pricing paths</li>
                          <li>Evaluating business constraints vs. math</li>
                          <li>Understanding margin of safety</li>
                          <li>Identifying unrealistic scenarios</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900">Business Judgment:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Sensitivity reasoning</li>
                          <li>Competitor response analysis</li>
                          <li>Capacity constraint evaluation</li>
                          <li>Strategic recommendation defense</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Unit Connection */}
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Connecting to Unit 6: PriceLab Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-purple-700">
                      Your scenario comparison mastery directly serves Unit 6's driving question: <em>"What pricing 
                      strategy hits our profit target while staying competitive in the local market?"</em>
                    </p>
                    <div className="bg-white p-4 rounded border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Scenario comparison enables you to:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li><strong>Evaluate trade-offs:</strong> See exactly what each pricing path requires</li>
                        <li><strong>Identify constraints:</strong> Know which scenarios are realistic vs. mathematical fantasies</li>
                        <li><strong>Defend recommendations:</strong> Cite specific numbers when recommending a path</li>
                        <li><strong>Prepare for automation:</strong> Understand what Goal Seek will automate</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CAP Framework Reflection */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800">🎯 CAP Framework Reflection</CardTitle>
                  <p className="text-blue-600">
                    Reflect on how scenario comparison has developed your Courage, Adaptability, and Persistence
                  </p>
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
                    Preview: Lesson 05 Excel Automation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700">
                      Now that you understand the <strong>business logic</strong> of scenario comparison, 
                      you're ready to automate the process with Excel tools:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Goal Seek:</h4>
                        <p className="text-orange-800 text-sm">
                          Instantly find the price or volume needed to hit any profit target. 
                          Same math you just did by hand—now automated.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Data Tables:</h4>
                        <p className="text-orange-800 text-sm">
                          See 50 scenarios at once. Compare how profit changes across 
                          full ranges of prices or volumes simultaneously.
                        </p>
                      </div>
                    </div>
                    <p className="text-orange-700">
                      These tools make you faster. But with your scenario comparison foundation, 
                      you'll also make <em>better</em> decisions—because you'll know when the 
                      automation is giving you a realistic answer.
                    </p>
                  </div>
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
                  <p className="text-blue-800 mb-2">
                    As you complete scenario mastery, share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How has scenario comparison changed your approach to business decisions?</li>
                    <li>What business career opportunities interest you more now that you have these analytical skills?</li>
                    <li>How do you feel about tackling Goal Seek and Data Tables after this foundation?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Achievement Badge */}
              <Card className="border-yellow-200 bg-yellow-50 text-center">
                <CardContent className="p-6">
                  <div className="mx-auto w-20 h-20 bg-yellow-200 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-10 h-10 text-yellow-700" />
                  </div>
                  <h3 className="font-bold text-yellow-800 text-xl mb-2">Achievement Unlocked!</h3>
                  <p className="text-yellow-700 mb-4">
                    <strong>Scenario Comparison Master:</strong> You can compare pricing options, 
                    identify business constraints, and defend recommendations with solid CVP reasoning.
                  </p>
                  <Badge className="bg-yellow-200 text-yellow-800 px-4 py-2">
                    Ready for Excel Automation
                  </Badge>
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
