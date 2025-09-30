import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ClipboardCheck, TrendingUp, Briefcase } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson04Data, unit06Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[4]; // Assessment phase

export default function Phase5Page() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] })

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
                    Goal Seek: Professional Mastery Assessment
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Business Application & Technical Proficiency
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                    <h3 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      Assessment Overview
                    </h3>
                    <p className="text-lg leading-relaxed text-yellow-900 mb-4">
                      This assessment evaluates your mastery of Goal Seek as both an Excel tool and a professional 
                      business capability. You'll demonstrate understanding of Goal Seek mechanics, business 
                      applications, and the strategic thinking that impresses investors and business stakeholders.
                    </p>
                    <p className="text-yellow-800">
                      Each question blends technical Excel knowledge with real business scenarios that Sarah 
                      and other entrepreneurs face. Your success here shows you're ready to handle complex 
                      financial modeling in professional settings.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-3">Assessment Focus Areas</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Technical Proficiency (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Goal Seek parameter setup (Set Cell, To Value, By Changing Cell)</li>
                          <li>Formula requirements and constraints</li>
                          <li>Multiple scenario handling</li>
                          <li>Integration with CVP models</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-blue-900">Business Application (50%)</h4>
                        <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                          <li>Strategic scenario analysis</li>
                          <li>Investor presentation readiness</li>
                          <li>Professional decision-making under pressure</li>
                          <li>Cost structure optimization</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Performance Standards */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" />
                    Professional Performance Standards
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-green-900">🟢 Exemplary (90-100%)</h4>
                      <p className="text-green-800 text-sm">
                        Masters all Goal Seek parameters, handles complex multi-variable scenarios, 
                        demonstrates investor-ready analytical thinking, explains business rationale 
                        for all decisions.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-yellow-900">🟡 Proficient (80-89%)</h4>
                      <p className="text-yellow-800 text-sm">
                        Solid Goal Seek mechanics, completes standard business scenarios, shows 
                        good business understanding, minor gaps in advanced applications.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-red-900">🔴 Developing (Below 80%)</h4>
                      <p className="text-red-800 text-sm">
                        Basic Goal Seek understanding, struggles with parameter setup or business 
                        context, needs additional practice before professional application.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehensive Assessment */}
              <ComprehensionCheck
                title="Goal Seek Professional Mastery Assessment"
                description="Demonstrate your comprehensive understanding of Goal Seek for business applications"
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
                    Goal Seek mastery opens doors in many business careers:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Financial Analyst Roles:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Investment banking scenario modeling</li>
                        <li>Corporate finance planning</li>
                        <li>Risk assessment and stress testing</li>
                        <li>Merger & acquisition analysis</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-purple-900">Business Management:</h4>
                      <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                        <li>Strategic planning and budgeting</li>
                        <li>Pricing optimization</li>
                        <li>Operations management</li>
                        <li>Startup financial modeling</li>
                      </ul>
                    </div>
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
                    After completing the Goal Seek mastery assessment, reflect with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Which assessment question challenged your thinking the most?</li>
                    <li>How has Goal Seek changed your understanding of business decision-making?</li>
                    <li>What professional situations would you now feel confident handling?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Closing phase, we'll celebrate your Goal Seek mastery and connect this powerful 
                    skill to Unit 6's overall PriceLab Challenge. You'll preview how Goal Seek integrates 
                    with data tables for comprehensive sensitivity analysis in lesson05.
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
