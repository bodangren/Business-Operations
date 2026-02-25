import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, ArrowRight } from "lucide-react";
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
          {/* Minimal intro — one card, no padding bloat */}
          <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                Assessment: Markup vs. Margin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 leading-relaxed">
                Apply what you've learned across all four phases. This quiz draws on Sarah's story,
                the formulas from Phase 2, the cost structure from Phase 3, and the scenario analysis
                from Phase 4. Explanations are shown after each answer.
              </p>
            </CardContent>
          </Card>

          {/* The actual quiz — front and center */}
          <ComprehensionCheck
            title="Markup vs. Margin Mastery Check"
            description="Technical calculations, business application, and strategic thinking"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Career relevance — reward, not prerequisite */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Where These Skills Are Used Daily</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 mb-4">
                The calculations you just worked through are used every day by:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Business Consultants</strong> — advising clients on pricing strategy</li>
                  <li>• <strong>Financial Analysts</strong> — evaluating company profitability</li>
                  <li>• <strong>Entrepreneurs</strong> — setting prices for new ventures</li>
                  <li>• <strong>Sales Managers</strong> — developing pricing guidelines</li>
                </ul>
                <ul className="text-sm text-purple-600 space-y-2">
                  <li>• <strong>Product Managers</strong> — optimizing product line profitability</li>
                  <li>• <strong>Investment Analysts</strong> — assessing investment opportunities</li>
                  <li>• <strong>Small Business Owners</strong> — managing day-to-day pricing</li>
                  <li>• <strong>Corporate Finance Teams</strong> — supporting strategic planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Next steps preview */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Looking Ahead: Advanced CVP Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 leading-relaxed mb-4">
                Markup vs. margin mastery is the foundation for what comes next: building sophisticated
                Cost-Volume-Profit models in Excel. You'll use Goal Seek and Data Tables to create
                investor-ready pricing recommendations Sarah can defend to real business stakeholders.
              </p>
              <ul className="text-sm text-green-800 space-y-1">
                <li>• <strong>Day 3:</strong> CVP Model Construction with Excel automation</li>
                <li>• <strong>Days 6–7:</strong> Goal Seek and Data Tables for sensitivity analysis</li>
                <li>• <strong>Day 10:</strong> Town Hall Pricing Debate with real business stakeholders</li>
              </ul>
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
