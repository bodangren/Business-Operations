import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5";

const currentPhase = lesson03Phases[4]; // Assessment phase

const assessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] });

export default function Unit03Lesson03Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">
            Assessment: Demonstrating Income Statement Mastery
          </h2>
          
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg border border-orange-200 mb-8">
            <p className="text-lg leading-relaxed text-orange-900">
              Time to demonstrate your mastery of professional Income Statement construction. This assessment evaluates 
              both your technical Excel skills and your business understanding of financial statements. Remember: 
              investors expect both technical competence and strategic insight from entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  INDEX/MATCH formulas, named references, dynamic linking, formula troubleshooting, 
                  and professional Excel modeling techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Business Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Financial ratio interpretation, expense analysis, profit margin calculations, 
                  and strategic business insights from financial data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Professional Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Investor communication, financial model credibility, integration with Balance Sheet, 
                  and industry best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-orange-800 mb-4">
            Comprehensive Knowledge Assessment
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            This assessment covers the full spectrum of Income Statement construction, from technical Excel implementation 
            to strategic business analysis. Answer thoughtfully—these questions reflect the kinds of challenges you'll 
            face when presenting to real investors.
          </p>
        </div>

        <ComprehensionCheck
          title="Income Statement Construction & Business Analysis"
          description="Demonstrate mastery of technical Excel skills, financial analysis, and professional presentation standards."
          questions={assessmentQuestions}
          showExplanations={true}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <h3 className="text-2xl font-semibold text-orange-800 mb-4">
            Peer Model Evaluation
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Professional financial modeling involves peer review and collaborative improvement. Exchange your Excel models 
            with a classmate and provide constructive feedback on both technical execution and business insight. This 
            mirrors the real-world process where financial models are reviewed by colleagues, managers, and external advisors.
          </p>
        </div>

        <PeerCritiqueForm 
          projectTitle="Professional Income Statement Model"
          peerName="Classmate"
          unitNumber={3}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">🎯 Assessment Success Indicators</h3>
            <p className="text-green-800 mb-3">
              You've successfully demonstrated Income Statement mastery when you can:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Build dynamic INDEX/MATCH formulas that automatically update with source data changes</li>
              <li>Analyze financial ratios and derive meaningful business insights</li>
              <li>Explain how Income Statement connects to Balance Sheet through Retained Earnings</li>
              <li>Troubleshoot formula errors and maintain model integrity</li>
              <li>Present financial results in a way that builds investor confidence</li>
              <li>Provide constructive feedback on peer financial models</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2 text-lg">💡 Real-World Application</h3>
            <p className="text-blue-800">
              The skills you've demonstrated today—building dynamic financial models, analyzing business performance, 
              and presenting to stakeholders—are exactly what successful entrepreneurs use to secure funding and grow 
              their businesses. Sarah's journey from confused spreadsheets to investor-ready statements mirrors the 
              professionalization process every growing business must navigate.
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}