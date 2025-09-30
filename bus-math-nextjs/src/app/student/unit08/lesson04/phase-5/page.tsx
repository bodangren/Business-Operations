import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Award, DollarSign, Target } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[4]; // Assessment phase

const assessmentQuestions = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] });

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit08Data} 
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
              
              {/* Assessment Introduction */}
              <Card className="border-yellow-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <Target className="w-8 h-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-yellow-800 mb-2">
                    Scenario Manager & Financial Modeling Professional Mastery Assessment
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Professional Mastery Assessment
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      Sarah has completed her advanced scenario model for TechStart Solutions. Her investor 
                      presentation is tomorrow, and she feels confident that her dynamic financial model can 
                      handle any "what if" question the VCs might ask.
                    </p>
                    <p className="text-lg leading-relaxed text-yellow-900">
                      Now it's time to demonstrate your mastery of professional scenario modeling techniques.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader className="pb-3 text-center">
                        <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <CardTitle className="text-blue-900 text-lg">Technical Mastery</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-blue-800">
                          Demonstrate understanding of Scenario Manager setup, Data Tables, 
                          and professional formula techniques.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3 text-center">
                        <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                        <CardTitle className="text-green-900 text-lg">Business Application</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-green-800">
                          Show how scenario analysis connects to real investor decision-making 
                          and startup funding strategies.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3 text-center">
                        <Award className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                        <CardTitle className="text-purple-900 text-lg">Professional Standards</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center">
                        <p className="text-sm text-purple-800">
                          Understand the quality and sophistication that venture capitalists 
                          expect from investment-grade financial models.
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Assessment Focus Areas</h3>
                    <p className="text-gray-800">
                      This assessment evaluates your understanding of professional financial modeling 
                      techniques that are essential for entrepreneur success: Excel technical skills, 
                      business and investment acumen, and the ability to communicate complex financial 
                      concepts to investors.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Assessment */}
              <ComprehensionCheck
                title="Professional Scenario Manager Mastery Assessment"
                description="Demonstrate your understanding of advanced Excel scenario modeling techniques for investor presentations"
                questions={assessmentQuestions}
                showExplanations={true}
              />

              {/* Career Connection */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 text-center">🎯 Career Connection</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800 text-center">
                    <strong>The skills you've mastered today are used by:</strong><br/>
                    Investment Banking Analysts • Venture Capital Associates • Corporate Finance Teams • 
                    Startup Founders • Management Consultants • Financial Planning & Analysis Professionals
                  </p>
                  <p className="text-sm text-green-700 text-center mt-3">
                    Scenario modeling and sensitivity analysis are core competencies for any finance or business career. 
                    Master these skills, and you'll stand out in internship applications and job interviews.
                  </p>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll celebrate your achievement in mastering investment-grade 
                    financial modeling skills and explore how these capabilities connect to your future 
                    career opportunities in finance, consulting, and entrepreneurship.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}
