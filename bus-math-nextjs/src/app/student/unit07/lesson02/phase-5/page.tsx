import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Trophy, Target, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Assessment phase

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] });

export default function Unit07Lesson02Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Assessment Introduction */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Depreciation Techniques Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-emerald-900">
              Time to demonstrate your mastery of depreciation techniques! This comprehensive assessment 
              evaluates both your technical calculation skills and your understanding of strategic business 
              applications. You'll be tested on straight-line and double-declining balance methods, Excel 
              functions, and real-world decision-making scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Technical Mastery</h4>
                <p className="text-sm text-emerald-700">Calculate depreciation using both SLN and DDB methods</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Strategic Thinking</h4>
                <p className="text-sm text-emerald-700">Apply methods to real business scenarios and decision-making</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Professional Standards</h4>
                <p className="text-sm text-emerald-700">Demonstrate understanding of accounting principles and Excel proficiency</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Guidelines */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">📋 Assessment Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">What You'll Be Assessed On:</h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Straight-Line depreciation calculations and Excel functions</li>
                  <li>• Double-Declining Balance method application</li>
                  <li>• Business impact analysis and strategic reasoning</li>
                  <li>• Cash flow and tax implications understanding</li>
                  <li>• Professional communication and investor perspective</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Success Criteria:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs">85%+</Badge>
                    <span className="text-blue-800 text-sm">Mastery - Ready for advanced applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 text-xs">70-84%</Badge>
                    <span className="text-blue-800 text-sm">Proficient - Solid understanding demonstrated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-red-100 text-red-800 text-xs">&lt;70%</Badge>
                    <span className="text-blue-800 text-sm">Developing - Review concepts and retry</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          questions={assessmentQuestions}
          title="Depreciation Techniques Comprehensive Assessment"
          description="Demonstrate your mastery of depreciation calculations, Excel functions, and strategic business applications. Read each question carefully and select the best answer."
          showExplanations={true}
          allowRetry={true}
        />

        {/* Assessment Context */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">🎯 Career Relevance & Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-800 mb-4">
              The skills you've demonstrated in this assessment are directly applicable to professional 
              roles in accounting, finance, business analysis, and entrepreneurship. Your ability to 
              calculate depreciation and understand its strategic implications is valued by employers 
              and essential for business success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">Professional Applications:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• <strong>Financial Analyst:</strong> Build depreciation models for investment analysis</li>
                  <li>• <strong>Business Owner:</strong> Optimize tax strategies and cash flow timing</li>
                  <li>• <strong>Accountant:</strong> Ensure compliance and advise on method selection</li>
                  <li>• <strong>Consultant:</strong> Help businesses improve financial performance</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">Unit 7 Progression:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• <strong>Next Lesson:</strong> Inventory Methods Introduction (FIFO/LIFO)</li>
                  <li>• <strong>Building Toward:</strong> Integrated Asset & Inventory Tracker</li>
                  <li>• <strong>Final Goal:</strong> Board presentation with strategic recommendations</li>
                  <li>• <strong>Real Impact:</strong> Advise local businesses on financial optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🌟 Excellence Indicators</h4>
              <p className="text-gray-800 text-sm">
                Students demonstrating mastery of this content typically excel in advanced business courses, 
                secure competitive internships in finance and accounting, and show strong performance in 
                college-level business programs. Your depreciation analysis skills are building blocks for 
                sophisticated financial modeling and strategic business thinking.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Performance Reflection */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">💭 Post-Assessment Reflection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-800 mb-4">
              After completing your assessment, take a moment to reflect on your learning journey:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-800">Self-Assessment Questions:</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Which depreciation method do you feel most confident calculating?</li>
                  <li>• What business scenario challenged your thinking the most?</li>
                  <li>• How has your understanding of cash flow and taxes evolved?</li>
                  <li>• What connections do you see to Sarah's TechStart journey?</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-800">Growth Planning:</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Areas where you want additional practice or clarification</li>
                  <li>• How you'll apply this knowledge to future business scenarios</li>
                  <li>• Questions you want to explore in upcoming inventory lessons</li>
                  <li>• Ways this learning connects to your career interests</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}
