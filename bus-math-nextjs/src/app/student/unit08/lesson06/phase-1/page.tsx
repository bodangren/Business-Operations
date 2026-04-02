'use client';

'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, DollarSign, Shield } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit08Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[0];

const hookQuestions = [
  {
    id: "u08l06-hook-1",
    question: "An investor asks why TechStart uses straight-line instead of double-declining balance. What is the best answer?",
    answers: [
      "Straight-line gives steady, predictable expense that matches the asset's steady use over time",
      "Straight-line is the easiest method to calculate in Excel",
      "Double-declining balance is never allowed under GAAP",
      "The IRS requires straight-line for all equipment"
    ],
    explanation: "Straight-line spreads cost evenly, which makes sense when an asset provides steady benefit each year. DDB is also GAAP-allowed but front-loads expense."
  },
  {
    id: "u08l06-hook-2",
    question: "TechStart buys a $20,000 server with a 4-year life and $2,000 salvage value. Which method shows higher Year 1 expense?",
    answers: [
      "Double-declining balance",
      "Straight-line",
      "Both methods show the same expense",
      "Neither method expenses anything in Year 1"
    ],
    explanation: "DDB front-loads expense. Year 1 DDB = $20,000 × (2/4) = $10,000. Year 1 SL = ($20,000 − $2,000) / 4 = $4,500."
  },
  {
    id: "u08l06-hook-3",
    question: "What is the biggest risk when comparing depreciation methods in a workbook?",
    answers: [
      "Forgetting the salvage value floor in DDB, which can drive book value below salvage",
      "Using too many decimal places in the calculation",
      "Naming the comparison sheet incorrectly",
      "Including too many assets in the register"
    ],
    explanation: "DDB without a salvage value floor can push book value below the salvage amount, which violates accounting rules and breaks the model."
  },
  {
    id: "u08l06-hook-4",
    question: "Book value at the end of an asset's life should equal what value regardless of method?",
    answers: [
      "The salvage value",
      "Zero",
      "The original cost",
      "The annual depreciation expense"
    ],
    explanation: "Both SL and DDB must end at salvage value. Total depreciation over the asset's life always equals Cost − Salvage Value."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎬 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Narrative */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    The Investor Question: &quot;Which Depreciation Method Do You Use?&quot;
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Straight-Line vs. Double-Declining Balance
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Sarah is in a meeting with a potential investor. The investor reviews TechStart&apos;s financials and asks: 
                    <strong> &quot;I see you use straight-line depreciation. Have you considered double-declining balance? 
                    How does your method choice affect your reported profit?&quot;</strong>
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Sarah has the asset register from Lesson 05, but it only shows one method per asset. 
                    She needs a <strong>side-by-side comparison</strong> that shows how each method changes 
                    expense timing, net income, and book value — and she needs to <strong>defend the choice</strong> with evidence.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Why This Matters
                    </h3>
                    <p className="text-green-800">
                      Depreciation method choice affects reported profit, tax timing, and how investors read your financial health. 
                      A professional comparison workbook lets you show the impact clearly and defend your policy with data — not guesses.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Method Comparison: Can You Read the Impact?"
                description="Test your understanding of how depreciation method choice affects financial statements."
                questions={hookQuestions}
                showExplanations={true}
                allowRetry={true}
              />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">Discussion Prompt (3 minutes):</p>
                  <p className="text-blue-800 mb-2">
                    If you were Sarah, what would you want to show the investor? Discuss:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Why might a company prefer straight-line for financial reporting?</li>
                    <li>When does double-declining balance give a more honest picture?</li>
                    <li>What workbook evidence would make your recommendation credible?</li>
                  </ul>
                  <div className="mt-3 flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Standard: side-by-side comparison, salvage value floor, clear statement impact.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter 
        unit={unit08Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  );
}
