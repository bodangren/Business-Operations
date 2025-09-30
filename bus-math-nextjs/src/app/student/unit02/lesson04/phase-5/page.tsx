import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Award, Target, Briefcase } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson04Phases[4]

export default function Phase5Page() {
  const assessmentQuestions = toComprehensionCheckFormat(
    getQuestionsForLesson("lesson04")
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data} 
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
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables & SUMIF: Professional Mastery Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate your mastery of Excel Tables and SUMIF functions for automated month-end procedures.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Objectives */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Assessment Objectives
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  This assessment evaluates your ability to apply Excel Tables and SUMIF functions 
                  to real business automation challenges, preparing you for advanced month-end wizard development.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900">Technical Skills Assessment:</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Excel Tables creation and management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>SUMIF function syntax and application</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Structured references vs cell references</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Named ranges and professional formatting</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-900">Business Application Assessment:</h4>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Month-end automation principles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Professional system design standards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Error-checking and quality assurance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Investor presentation readiness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Performance Standards */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Performance Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-800 mb-2">90-100%</div>
                    <div className="text-sm font-semibold text-green-900 mb-2">Expert Level</div>
                    <p className="text-xs text-green-700">
                      Demonstrates professional-grade understanding of Excel Tables automation. 
                      Ready to build comprehensive month-end systems.
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-800 mb-2">80-89%</div>
                    <div className="text-sm font-semibold text-blue-900 mb-2">Proficient Level</div>
                    <p className="text-xs text-blue-700">
                      Shows solid grasp of core concepts. Can implement basic automation 
                      with some guidance on advanced features.
                    </p>
                  </div>
                </div>
                
                <div className="bg-orange-100 p-4 rounded-lg border border-orange-300">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-800 mb-2">70-79%</div>
                    <div className="text-sm font-semibold text-orange-900 mb-2">Developing Level</div>
                    <p className="text-xs text-orange-700">
                      Understanding fundamentals but needs more practice with 
                      business applications and advanced scenarios.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Assessment */}
          <ComprehensionCheck
            title="Excel Tables & SUMIF Professional Mastery Assessment"
            description="This comprehensive assessment tests your readiness to build automated month-end systems using Excel Tables and SUMIF functions."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Next Steps Based on Performance */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Next Steps Based on Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-900">If you scored 90%+:</h4>
                  <p className="text-sm text-purple-800">
                    Excellent! You're ready for advanced automation in Lesson 5. Focus on:
                  </p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Advanced VBA macro development</li>
                    <li>• Complex conditional logic systems</li>
                    <li>• Professional UI design principles</li>
                    <li>• Error-checking automation</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-900">If you scored 80-89%:</h4>
                  <p className="text-sm text-purple-800">
                    Good foundation! Review these areas before Lesson 5:
                  </p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Practice more complex SUMIF scenarios</li>
                    <li>• Review structured reference syntax</li>
                    <li>• Work through additional table examples</li>
                    <li>• Focus on business context applications</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-purple-900">If you scored below 80%:</h4>
                  <p className="text-sm text-purple-800">
                    Take time to strengthen fundamentals:
                  </p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Revisit Phase 2 & 3 materials</li>
                    <li>• Practice creating Excel Tables</li>
                    <li>• Work with a study partner</li>
                    <li>• Ask for additional support</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Career Connection */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Professional Career Connection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-indigo-800">
                <p>
                  The Excel Tables and SUMIF skills you've mastered are directly applicable to numerous 
                  professional careers. Here's how professionals use these exact techniques:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 not-prose mt-4">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-indigo-900">Financial Analyst Roles:</h4>
                    <ul className="text-sm text-indigo-800 space-y-2">
                      <li>• Automated monthly financial reporting</li>
                      <li>• Budget variance analysis systems</li>
                      <li>• Investment portfolio tracking</li>
                      <li>• KPI dashboard development</li>
                    </ul>
                    
                    <h4 className="font-semibold text-indigo-900">Business Operations:</h4>
                    <ul className="text-sm text-indigo-800 space-y-2">
                      <li>• Sales performance automation</li>
                      <li>• Inventory management systems</li>
                      <li>• Customer profitability analysis</li>
                      <li>• Process efficiency optimization</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-indigo-900">Consulting & Advisory:</h4>
                    <ul className="text-sm text-indigo-800 space-y-2">
                      <li>• Client financial model development</li>
                      <li>• Business process automation design</li>
                      <li>• Data analysis and reporting systems</li>
                      <li>• Strategic planning support tools</li>
                    </ul>
                    
                    <h4 className="font-semibold text-indigo-900">Entrepreneurship:</h4>
                    <ul className="text-sm text-indigo-800 space-y-2">
                      <li>• Startup financial management</li>
                      <li>• Investor-ready reporting systems</li>
                      <li>• Operational efficiency tools</li>
                      <li>• Growth planning and forecasting</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300 not-prose mt-6">
                  <p className="text-sm text-indigo-700">
                    <strong>Professional Insight:</strong> Many entry-level business roles specifically require 
                    "Advanced Excel skills including Tables, SUMIF, and automation." You now have demonstrable 
                    competency in these high-demand technical skills.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}