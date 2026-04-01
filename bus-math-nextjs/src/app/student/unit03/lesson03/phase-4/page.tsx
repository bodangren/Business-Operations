import { BalanceSheetPractice } from "@/components/exercises/BalanceSheetPractice";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, CheckCircle, AlertTriangle } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[3];

export default function Unit03Lesson03Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="max-w-5xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Mastery Practice: Build Balance Sheets Until It Is Automatic
          </h2>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200 mb-8">
            <p className="text-lg leading-relaxed text-purple-900">
              Now it is time to practice the full procedure repeatedly until you can do it without hesitation. Each
              round gives you a new trial balance with different numbers and accounts. Your job: classify the accounts,
              calculate ending retained earnings, and verify the accounting equation.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            The Procedure (Same Every Round)
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  1. Classify
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  Identify which accounts are assets, liabilities, or equity. Ignore revenue and expense accounts — they feed Net Income, not the Balance Sheet directly.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  2. Calculate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Use the given Net Income, Beginning RE, and Dividends to calculate Ending Retained Earnings. Then sum assets, liabilities, and equity.
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
                  Check: Total Assets must equal Total Liabilities + Total Equity. If they do not match, recheck your classifications and arithmetic.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg">Mastery Target</h4>
            <p className="text-amber-800">
              Get <strong>3 correct answers in a row</strong> to complete this practice. Each round uses different
              numbers and accounts, but the procedure is identical. If you get one wrong, review the worked solution,
              then try a new problem immediately.
            </p>
          </div>
        </div>

        <BalanceSheetPractice />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">Practice Success</h3>
            <p className="text-green-800">
              You have mastered balance sheet construction when you can classify accounts correctly, calculate retained
              earnings without error, and verify the accounting equation consistently across multiple problems with
              different numbers.
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
