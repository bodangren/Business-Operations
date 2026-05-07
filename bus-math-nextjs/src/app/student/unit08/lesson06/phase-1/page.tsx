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
    question: "TechStart buys a delivery van on April 1. Under the partial-year rule, how much of the annual depreciation belongs in Year 1?",
    answers: [
      "9/12 of the annual depreciation",
      "12/12 of the annual depreciation",
      "3/12 of the annual depreciation",
      "None until the next year"
    ],
    explanation: "April through December is 9 months in service, so Year 1 depreciation is the annual amount times 9/12."
  },
  {
    id: "u08l06-hook-2",
    question: "Which Excel functions should the workbook use for the two methods?",
    answers: [
      "SLN and DDB",
      "SUM and AVERAGE",
      "XNPV and IRR",
      "MIN and MAX only"
    ],
    explanation: "SLN calculates straight-line depreciation per period. DDB calculates double-declining balance depreciation for a chosen period."
  },
  {
    id: "u08l06-hook-3",
    question: "Where does Year 1 depreciation expense appear first in the mini statements?",
    answers: [
      "Income statement",
      "Cash receipt journal",
      "Inventory count sheet",
      "Accounts receivable aging"
    ],
    explanation: "Depreciation is an expense, so it reduces operating income on the income statement."
  },
  {
    id: "u08l06-hook-4",
    question: "On the mini balance sheet, net book value equals:",
    answers: [
      "Fixed asset cost minus accumulated depreciation",
      "Revenue minus depreciation expense",
      "Cash minus liabilities",
      "Cost times months in service"
    ],
    explanation: "The balance sheet reports fixed assets net of accumulated depreciation."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    The Investor Question: "What Happens When Assets Are Bought Mid-Year?"
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Partial-Year Depreciation and Statement Impact
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Sarah bought several long-term assets during the year, not all on January 1. An investor asks how those purchases affect Year 1 profit and the balance sheet under straight-line versus double-declining balance depreciation.
                  </p>
                  <p className="text-lg leading-relaxed text-slate-800 mb-4">
                    Today Sarah needs a fresh workbook that applies the partial-year rule, compares <strong>SLN</strong> and <strong>DDB</strong>, and connects the results to mini financial statements. The goal is not only to calculate depreciation, but to explain what the numbers do to reported performance.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Why This Matters
                    </h3>
                    <p className="text-green-800">
                      Depreciation does not change cash, but it does change reported profit and net book value. A professional workbook shows the link from asset data to depreciation expense, operating income, accumulated depreciation, and fixed asset book value.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <ComprehensionCheck
                title="Partial-Year Impact: Can You Read the Situation?"
                description="Test your understanding of months in service, Excel depreciation functions, and financial statement links."
                questions={hookQuestions}
                showExplanations={true}
                allowRetry={true}
              />

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
                    If you were Sarah, what would you show the investor?
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>How many months was each asset actually in service?</li>
                    <li>Which method gives higher Year 1 depreciation expense?</li>
                    <li>How does that expense change operating income and net book value?</li>
                  </ul>
                  <div className="mt-3 flex items-center gap-2 text-slate-700">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Standard: partial-year rule, SLN/DDB formulas, mini income statement, mini balance sheet.</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit08Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  );
}
