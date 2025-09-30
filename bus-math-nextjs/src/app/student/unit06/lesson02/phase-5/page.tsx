import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Award, TrendingUp, Calculator, Target } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit06Phase5ComprehensionCheckItems } from "@/data/question-banks/unit06-phase5";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Phase 5: Assessment

export default function Unit06Lesson02Phase5() {
  const assessmentQuestions = getUnit06Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Assessment: Markup vs. Margin Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-orange-700 leading-relaxed">
                Time to demonstrate your understanding! This assessment evaluates both your technical skills 
                with markup and margin calculations and your strategic thinking about pricing decisions. 
                You'll work through problems that combine mathematical precision with business insight.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-white border-green-200">
                  <CardContent className="p-4 text-center">
                    <Calculator className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-green-800">Technical Skills</h3>
                    <p className="text-sm text-green-700">Accurate calculations of markup and margin percentages</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-blue-200">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-blue-800">Business Application</h3>
                    <p className="text-sm text-blue-700">Strategic thinking about pricing in competitive markets</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border-purple-200">
                  <CardContent className="p-4 text-center">
                    <Target className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-purple-800">Critical Analysis</h3>
                    <p className="text-sm text-purple-700">Understanding implications of pricing decisions</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Performance Expectations */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Performance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 mb-4">
                This assessment measures your readiness for Unit 6's advanced pricing analysis and the final 
                Town Hall Debate. Strong performance demonstrates you're prepared for professional-level 
                business analysis.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Proficient Performance (70-85%)</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Correctly calculates markup and margin percentages</li>
                    <li>• Understands when to use each calculation method</li>
                    <li>• Recognizes basic business implications of pricing decisions</li>
                    <li>• Can apply concepts to straightforward business scenarios</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Advanced Performance (85-100%)</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Demonstrates computational accuracy and speed</li>
                    <li>• Shows deep understanding of cost structure relationships</li>
                    <li>• Applies strategic thinking to competitive scenarios</li>
                    <li>• Connects pricing concepts to break-even analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Career Relevance */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Professional Relevance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 leading-relaxed mb-4">
                The skills you're demonstrating in this assessment are used daily by:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Business Consultants:</strong> Advising clients on pricing strategy</li>
                  <li>• <strong>Financial Analysts:</strong> Evaluating company profitability</li>
                  <li>• <strong>Entrepreneurs:</strong> Setting prices for new ventures</li>
                  <li>• <strong>Sales Managers:</strong> Developing pricing guidelines</li>
                </ul>
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Product Managers:</strong> Optimizing product line profitability</li>
                  <li>• <strong>Investment Analysts:</strong> Assessing investment opportunities</li>
                  <li>• <strong>Small Business Owners:</strong> Managing day-to-day pricing decisions</li>
                  <li>• <strong>Corporate Finance Teams:</strong> Supporting strategic planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="Comprehensive Assessment: Markup vs. Margin Mastery"
            description="Demonstrate your understanding through technical calculations and strategic business analysis"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Next Steps Preview */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Looking Ahead: Advanced CVP Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 leading-relaxed">
                Excellent work on mastering markup vs. margin! These fundamental concepts form the foundation 
                for our next challenge: building sophisticated Cost-Volume-Profit (CVP) models. In the upcoming 
                lessons, you'll use Excel's Goal Seek and Data Tables to create investor-ready pricing 
                recommendations that Sarah can confidently present to real business stakeholders.
              </p>
              
              <div className="mt-4 p-4 bg-white rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Coming Up in Unit 6:</h4>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Day 3: CVP Model Construction with Excel automation</li>
                  <li>• Day 6-7: Goal Seek and Data Tables for sensitivity analysis</li>
                  <li>• Day 10: Town Hall Pricing Debate with real business stakeholders</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}
