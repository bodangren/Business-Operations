import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Award, ArrowRight, TrendingUp } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[5]; // Closing phase

const reflectionPrompts = [
  {
    id: "courage-1",
    category: "courage" as const,
    prompt: "Describe a moment during Goal Seek practice when you had to push through confusion or frustration. How did you persist when the Excel tool didn't work as expected?",
    placeholder: "Think about times when Goal Seek returned unexpected results or when you had to troubleshoot parameter setup..."
  },
  {
    id: "courage-2", 
    category: "courage" as const,
    prompt: "How has mastering Goal Seek given you confidence to tackle complex business problems that seem overwhelming at first?",
    placeholder: "Consider how you now approach 'what-if' scenarios that previously felt impossible to solve..."
  },
  {
    id: "adaptability-1",
    category: "adaptability" as const,
    prompt: "How did you adapt your Goal Seek approach when working with different business scenarios (pricing vs. volume vs. cost optimization)?",
    placeholder: "Reflect on how you learned to adjust your Set Cell, To Value, and By Changing Cell parameters for different situations..."
  },
  {
    id: "adaptability-2",
    category: "adaptability" as const, 
    prompt: "Describe how you'll adapt Goal Seek techniques for your own future business or career goals beyond this unit.",
    placeholder: "Think about personal financial planning, career decision-making, or entrepreneurial ventures..."
  },
  {
    id: "persistence-1",
    category: "persistence" as const,
    prompt: "What was the most challenging Goal Seek scenario you completed? What kept you motivated to find the solution?",
    placeholder: "Consider the advanced multi-variable scenarios or complex business contexts..."
  },
  {
    id: "persistence-2",
    category: "persistence" as const,
    prompt: "How will Goal Seek help you persist through complex business decisions in your future career?",
    placeholder: "Think about having precise analytical tools when facing difficult strategic choices..."
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
                    Goal Seek Mastery Complete: Building Your Future
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Professional Excel Automation Achievement
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 mb-6">
                    <h3 className="font-semibold text-indigo-900 mb-3 flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      Congratulations on Your Achievement!
                    </h3>
                    <p className="text-lg leading-relaxed text-indigo-900 mb-4">
                      You've mastered one of the most powerful Excel tools for business decision-making. 
                      Goal Seek transforms you from someone who guesses at business scenarios to someone 
                      who can provide instant, mathematically precise answers to complex "what-if" questions.
                    </p>
                    <p className="text-indigo-800">
                      Sarah's embarrassing investor meeting moment? That could never happen to you now. 
                      You're equipped with the professional analytical capabilities that impress stakeholders 
                      and build business credibility.
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-3">What You've Accomplished</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900">Technical Mastery:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Goal Seek parameter setup (Set Cell, To Value, By Changing Cell)</li>
                          <li>Complex business scenario analysis</li>
                          <li>Integration with CVP models</li>
                          <li>Professional Excel modeling standards</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-green-900">Professional Skills:</h4>
                        <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                          <li>Instant investor question responses</li>
                          <li>Strategic scenario planning</li>
                          <li>Data-driven decision making</li>
                          <li>Business credibility under pressure</li>
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
                      Your Goal Seek mastery directly serves Unit 6's driving question: <em>"What pricing 
                      strategy hits our profit target while staying competitive in the local market?"</em>
                    </p>
                    <div className="bg-white p-4 rounded border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">Goal Seek enables you to:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li><strong>Set Profit Targets:</strong> Work backward from desired profit levels to required pricing</li>
                        <li><strong>Competitive Response:</strong> Quickly adjust to competitor price changes while maintaining profitability</li>
                        <li><strong>Market Positioning:</strong> Find exact pricing for budget, mid-market, or premium positioning</li>
                        <li><strong>Investor Presentations:</strong> Answer complex scenario questions with mathematical precision</li>
                      </ul>
                    </div>
                    <p className="text-purple-700">
                      This foundation prepares you for lesson05, where you'll combine Goal Seek with data 
                      tables for comprehensive sensitivity analysis—the complete toolkit for professional pricing decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* CAP Framework Reflection */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800">🎯 CAP Framework Reflection</CardTitle>
                  <p className="text-blue-600">
                    Reflect on how Goal Seek has developed your Courage, Adaptability, and Persistence
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
                    Preview: Lesson05 Advanced Techniques
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-orange-700">
                      In lesson05, you'll build on Goal Seek mastery to create comprehensive sensitivity analysis 
                      systems using data tables:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">One-Variable Data Tables:</h4>
                        <p className="text-orange-800 text-sm">
                          See how profit changes across a full range of prices, volumes, or costs—all at once.
                        </p>
                      </div>
                      <div className="bg-white p-4 rounded border border-orange-200">
                        <h4 className="font-semibold text-orange-900 mb-2">Two-Variable Data Tables:</h4>
                        <p className="text-orange-800 text-sm">
                          Analyze how profit responds to price AND volume changes simultaneously.
                        </p>
                      </div>
                    </div>
                    <p className="text-orange-700">
                      Together, Goal Seek + Data Tables create the professional-grade analytical toolkit 
                      that distinguishes you in competitive business environments.
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
                    As you complete Goal Seek mastery, share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How will Goal Seek change your approach to personal financial decisions?</li>
                    <li>What business career opportunities interest you more now that you have these analytical skills?</li>
                    <li>How do you feel about tackling the advanced data table techniques in lesson05?</li>
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
                    <strong>Goal Seek Master:</strong> You can instantly solve complex business "what-if" scenarios 
                    with mathematical precision, giving you professional credibility in any business setting.
                  </p>
                  <Badge className="bg-yellow-200 text-yellow-800 px-4 py-2">
                    Ready for Advanced Sensitivity Analysis
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
