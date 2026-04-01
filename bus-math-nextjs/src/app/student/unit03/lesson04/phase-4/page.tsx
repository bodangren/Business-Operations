import { CashFlowPractice } from "@/components/exercises/CashFlowPractice";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, AlertTriangle } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[3];

export default function Unit03Lesson04Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Mastery Practice: Build Cash Flow Statements Until It Is Automatic
          </h2>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200 mb-8">
            <p className="text-lg leading-relaxed text-purple-900">
              Now it is time to practice the full procedure repeatedly until you can do it without hesitation. Each
              round gives you a new set of financial data with different numbers. Your job: calculate operating cash
              flow using the indirect method, identify investing and financing activities, and verify the net change
              in cash.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            The Procedure (Same Every Round)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  1. Operating
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Start with Net Income. Add back Depreciation. Subtract increases in current assets (AR, Supplies). Add increases in current liabilities (AP).
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  2. Investing & Financing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Investing: equipment purchases (negative). Financing: loans borrowed (positive), dividends paid (negative). Look for long-term asset and equity changes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  3. Verify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  Operating + Investing + Financing must equal the net change in cash. If they do not match, recheck your adjustments and classifications.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">Mastery Target</h4>
            <p className="text-amber-800">
              Get <strong>3 correct answers in a row</strong> to complete this practice. Each round uses different
              numbers and scenarios, but the procedure is identical. If you get one wrong, review the worked solution,
              then try a new problem immediately.
            </p>
          </div>
        </div>

        <CashFlowPractice />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">Practice Success</h3>
            <p className="text-green-800">
              You have mastered cash flow statement construction when you can calculate operating cash flow from
              net income adjustments, correctly classify investing and financing activities, and verify the net
              change in cash consistently across multiple problems with different numbers.
            </p>
          </div>
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
