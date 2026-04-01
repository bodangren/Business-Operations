import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, TrendingUp, Award, Briefcase } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5";

const currentPhase = lesson04Phases[4];

const masteryAssessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] });

export default function Unit03Lesson04Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-yellow-900 mb-6">
            Cash Flow and Ratio Interpretation — Exit Ticket
          </h2>

          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg border border-yellow-200 mb-8">
            <p className="text-lg leading-relaxed text-yellow-900">
              This exit ticket checks your understanding of the indirect cash flow method, how to classify cash
              movements, and how to interpret basic financial ratios. These are the skills you need before moving
              into Excel-based workbook construction in the next lessons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                  <ClipboardCheck className="h-5 w-5" />
                  Cash Flow Method
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Demonstrates understanding of the indirect method, non-cash adjustments, and working capital changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Classification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Correctly identifies operating, investing, and financing activities from transaction descriptions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Ratio Interpretation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Interprets current ratio and ROA to assess business liquidity and efficiency.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3 text-xl">Performance Standards</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Exemplary (90-100%)</h4>
                <p className="text-blue-700 text-sm">
                  Accurately builds cash flow statements, classifies all activities correctly, and interprets ratios with clear business reasoning.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Proficient (75-89%)</h4>
                <p className="text-blue-700 text-sm">
                  Shows solid understanding of the indirect method with minor classification errors. Can interpret basic ratios.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Developing (Below 75%)</h4>
                <p className="text-blue-700 text-sm">
                  Needs additional practice with cash flow adjustments and activity classification. Review phases 2–3 materials.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ComprehensionCheck
          title="Cash Flow & Ratios Assessment"
          description="Demonstrate your understanding of the indirect cash flow method, activity classification, and ratio interpretation."
          questions={masteryAssessmentQuestions}
          showExplanations={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Lenders and investors use cash flow statements to answer critical questions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-700 text-sm">
                <li><strong>Can this business pay its bills?</strong> — Operating cash flow shows whether the core business generates cash.</li>
                <li><strong>Is it investing in growth?</strong> — Negative investing cash flow often signals expansion.</li>
                <li><strong>Is it relying on debt?</strong> — Financing cash flow reveals borrowing patterns.</li>
                <li><strong>Is it liquid?</strong> — Current ratio shows short-term debt-paying ability.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Next Steps: Excel Build Lessons
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                With cash flow and ratio concepts established, you are ready for Lesson 05:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-700 text-sm">
                <li><strong>Cross-sheet linking</strong> — Connect Income Statement, Balance Sheet, and Cash Flow in one workbook</li>
                <li><strong>Automated calculations</strong> — Build formulas that update cash flow when transactions change</li>
                <li><strong>Integrity checks</strong> — Add validation that A = L + E and cash reconciles</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-yellow-900 mb-2 text-xl">Sarah's Bank Meeting</h3>
          <p className="text-yellow-800 leading-relaxed mb-4">
            Armed with her three-statement financial story, Sarah returned to the bank. This time she showed not
            just profit, but <em>cash generation</em>. "My operating cash flow is $2,850," she explained. "The
            reason my bank account only grew by $800 is that I invested $3,000 in new equipment — an investment
            that will increase my capacity by 40 percent next quarter."
          </p>
          <p className="text-yellow-800 leading-relaxed">
            The loan officer nodded. "Now you're speaking our language. Profit tells me you're viable. Cash flow
            tells me you can repay. Let's talk terms."
          </p>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}
