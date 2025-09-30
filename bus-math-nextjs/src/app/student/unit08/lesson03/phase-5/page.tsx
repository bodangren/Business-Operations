'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Building2, DollarSign, Calculator, TrendingUp, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { getUnit08Phase5ComprehensionCheckItems } from "@/data/question-banks/unit08-phase5";

const phase5 = lesson03Phases.find(p => p.sequence === 5)!;

const assessmentQuestions = getUnit08Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] });

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase5}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Assessment Introduction */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment: Mastering Three-Statement Integration</h2>
            
            <p className="text-lg leading-relaxed">
              Sarah reviews her notes from the lesson with Jennifer. "I think I'm finally understanding 
              how the three statements work together," she says. "The Income Statement shows whether 
              I'm profitable, the Balance Sheet shows what I own and owe, and the Cash Flow Statement 
              shows where my cash actually goes. But the magic happens when they're all connected."
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h3 className="text-blue-900 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Assessment Objectives
              </h3>
              <p className="text-blue-800 mb-4">
                This assessment tests your understanding of how Balance Sheet and Cash Flow Statement 
                integration creates a complete financial picture. You'll demonstrate mastery of:
              </p>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Statement Integration:</strong> How Net Income flows to Retained Earnings</li>
                <li>• <strong>Cash Flow Categorization:</strong> Operating, Investing, and Financing activities</li>
                <li>• <strong>Cross-Sheet Validation:</strong> Why integrated models are more reliable</li>
                <li>• <strong>Professional Standards:</strong> Building investor-ready financial models</li>
                <li>• <strong>Business Applications:</strong> Real-world transaction analysis</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-sm">
                    <Calculator className="h-4 w-4" />
                    Income Statement Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-purple-800">
                    Net Income → Retained Earnings connection and impact on equity structure
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4" />
                    Balance Sheet Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-green-800">
                    Asset, liability, and equity changes that create cash flow statement activities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4" />
                    Cash Flow Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-blue-800">
                    How cash changes reconcile between Balance Sheet and Cash Flow Statement
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
              <h4 className="text-amber-900 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Success Metrics for Investor Readiness
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Mastery Level (90-100%)</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Complete understanding of statement integration</li>
                    <li>• Confident cash flow categorization</li>
                    <li>• Ready to build professional models</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Proficient Level (80-89%)</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Good grasp of core concepts</li>
                    <li>• Minor gaps in complex scenarios</li>
                    <li>• Needs practice with edge cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Integration Challenge</h3>
            
            <p className="text-lg leading-relaxed">
              Jennifer reminds Sarah: "When you present to investors, they'll ask detailed questions 
              about how your numbers connect. They might say, 'If your profit is $30,000, why did 
              your cash only increase by $15,000?' You need to understand these relationships deeply 
              enough to explain them confidently."
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg my-6">
              <h5 className="text-green-900 font-medium mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Career Application
              </h5>
              <p className="text-green-800 text-sm">
                Mastering three-statement integration prepares you for careers in finance, consulting, 
                investment banking, and entrepreneurship. This foundational skill is essential for 
                anyone who will analyze businesses, make investment decisions, or raise capital.
              </p>
            </div>
          </div>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="Three-Statement Integration Mastery Assessment"
            description="Demonstrate your understanding of Balance Sheet and Cash Flow integration concepts"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Assessment Summary */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Next Steps: Building Sarah's Integrated Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                With this foundational understanding, you're ready to help Sarah build her complete 
                three-statement model that will impress the venture capitalists and secure her $500,000 funding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h5 className="font-medium text-indigo-900 mb-2">Immediate Next Phase:</h5>
                  <ul className="text-indigo-800 text-sm space-y-1">
                    <li>• Reflection on integration concepts</li>
                    <li>• Connection to Unit 8's overall objectives</li>
                    <li>• Preview of scenario analysis and sensitivity testing</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h5 className="font-medium text-indigo-900 mb-2">Unit 8 Journey Ahead:</h5>
                  <ul className="text-indigo-800 text-sm space-y-1">
                    <li>• Advanced Excel linking techniques</li>
                    <li>• Scenario Manager and sensitivity analysis</li>
                    <li>• Professional model auditing</li>
                    <li>• VC presentation and Q&A preparation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase5}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
