import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowRight, Lightbulb, Target } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[5];

export default function Unit03Lesson04Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-indigo-900 mb-6">
            Closing: The Three-Statement Story Is Complete
          </h2>

          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-lg border border-indigo-200 mb-8">
            <p className="text-lg leading-relaxed text-indigo-900">
              You have now completed the textbook foundation for all three financial statements. The Income
              Statement shows profit. The Balance Sheet shows financial position. The Cash Flow Statement
              explains where cash went. Together, they tell one coherent story — the story Sarah needed to
              tell her bank.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            What You Can Now Do
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">Accounting Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li><strong>Income Statement:</strong> Build from trial balance, classify revenue and expense accounts</li>
                  <li><strong>Balance Sheet:</strong> Classify assets, liabilities, equity; calculate retained earnings</li>
                  <li><strong>Cash Flow Statement:</strong> Use the indirect method to bridge profit to cash</li>
                  <li><strong>Ratios:</strong> Calculate and interpret current ratio and return on assets</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg">Business Judgment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li><strong>Profit vs. Cash:</strong> Explain why a profitable business can run short on cash</li>
                  <li><strong>Three-Statement Integration:</strong> Trace how net income flows through all three statements</li>
                  <li><strong>Health Assessment:</strong> Use ratios and cash flow patterns to evaluate business viability</li>
                  <li><strong>Investor Communication:</strong> Present financial data as a coherent narrative</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            When to Use This Method
          </h3>

          <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
            <h4 className="font-semibold text-amber-900 mb-3 text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Method Signals
            </h4>
            <p className="text-amber-800 leading-relaxed mb-3">
              Use the indirect cash flow method when:
            </p>
            <ul className="list-disc list-inside space-y-1 text-amber-800 text-sm">
              <li>You have Net Income and comparative Balance Sheets but need to explain cash movement</li>
              <li>A lender or investor asks "How much cash did the business actually generate?"</li>
              <li>You need to reconcile why profit and cash balance changes do not match</li>
              <li>You are assessing whether a business's cash position is sustainable</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-indigo-800 mb-4">
            Preview: Lesson 05 — Cross-Sheet Links in Excel
          </h3>

          <p className="text-lg leading-relaxed mb-6">
            So far you have built all three statements by hand. In Lesson 05, you will learn to connect them
            in a single Excel workbook so that when you enter a new transaction, all three statements update
            automatically. This is the same principle you have been practicing — but now the workbook does
            the arithmetic for you.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-xl flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              What Is Coming Next
            </h4>
            <div className="space-y-3 text-sm text-blue-800">
              <p><strong>Lesson 05:</strong> Build cross-sheet links so the Income Statement feeds the Balance Sheet and Cash Flow Statement automatically. Add integrity checks that flag when A ≠ L + E.</p>
              <p><strong>Lesson 06:</strong> Build a KPI dashboard that displays ratios and key metrics in an executive-friendly format.</p>
              <p><strong>Lessons 07–10:</strong> Apply everything you have learned in a group project with your own business dataset.</p>
            </div>
          </div>

          <Card className="border-indigo-200 bg-indigo-50 mb-6">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Connecting to the Unit Driving Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                Recall our driving question:
              </p>
              <blockquote className="text-indigo-700 italic border-l-4 border-indigo-400 pl-4 mb-4">
                "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?"
              </blockquote>
              <p className="text-indigo-700 text-sm">
                You now have all three pieces of that narrative: <strong>profit</strong> (Income Statement),
                <strong> solvency</strong> (Balance Sheet), and <strong>cash health</strong> (Cash Flow
                Statement). The three statements together create the trustworthy story investors need.
              </p>
            </CardContent>
          </Card>
        </div>

        <ReflectionJournal />

        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border border-indigo-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-indigo-900 mb-2 text-xl flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Textbook Phase Complete
          </h3>
          <p className="text-indigo-800 leading-relaxed">
            You have completed the textbook foundation for the three-statement financial story. The next
            lessons will move into Excel, where you will build a connected workbook that automates the
            calculations you have been doing by hand. The accounting logic stays the same — only the
            tools change.
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
