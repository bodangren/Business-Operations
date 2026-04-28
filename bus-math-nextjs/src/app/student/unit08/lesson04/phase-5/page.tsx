'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calculator, TrendingDown } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const phase5 = lesson04Phases.find(p => p.sequence === 5)!;

const assessmentQuestions = [
  {
    id: "ddb-q1",
    question: "A $40,000 machine has a 4-year life and $4,000 salvage value. What is the Year 1 DDB depreciation expense?",
    answers: [
      "$20,000, because the DDB rate is 50% and $40,000 × 50% = $20,000",
      "$9,000, because ($40,000 − $4,000) ÷ 4 = $9,000",
      "$10,000, because $40,000 ÷ 4 = $10,000",
      "$18,000, because ($40,000 − $4,000) × 50% = $18,000"
    ],
    explanation: "DDB rate = 2 × (1/4) = 50%. Apply to beginning book value: $40,000 × 50% = $20,000. Do NOT subtract salvage value first."
  },
  {
    id: "ddb-q2",
    question: "Why does DDB usually produce higher depreciation expense than straight-line in early years?",
    answers: [
      "Because DDB uses double the straight-line rate and applies it to beginning book value",
      "Because DDB uses a longer useful life than straight-line",
      "Because DDB ignores salvage value entirely in all calculations",
      "Because straight-line is an accelerated method and DDB is not"
    ],
    explanation: "DDB uses double the straight-line rate and applies it to beginning book value each year. That front-loads more expense into earlier years."
  },
  {
    id: "ddb-q3",
    question: "A machine begins Year 4 with a $6,480 book value and a $5,000 salvage value. Raw DDB expense is $2,592. What should the adjusted expense be?",
    answers: [
      "$1,480, because expense must stop exactly at the $5,000 salvage-value floor",
      "$2,592, because the raw DDB calculation always overrides salvage value",
      "$5,000, because the expense should equal salvage value",
      "$0, because the asset must stop depreciating one year early"
    ],
    explanation: "Book value can never fall below salvage value. The adjusted expense is $6,480 - $5,000 = $1,480, not the full $2,592 raw amount."
  },
  {
    id: "ddb-q4",
    question: "Which type of asset is the strongest candidate for DDB depreciation?",
    answers: [
      "Vehicles and technology equipment that lose value quickly in early years",
      "Land that does not depreciate",
      "Buildings that maintain steady value over decades",
      "Art and collectibles that appreciate over time"
    ],
    explanation: "DDB is best for assets that lose most of their value early — vehicles, computers, and technology equipment."
  },
  {
    id: "ddb-q5",
    question: "If a company switches from straight-line to DDB for the same asset, what usually happens to Year 1 net income?",
    answers: [
      "Net income decreases because DDB records higher depreciation expense",
      "Net income increases because DDB is more accurate",
      "Net income stays the same because total depreciation is identical",
      "Net income cannot be determined without more information"
    ],
    explanation: "DDB records higher expense in early years, which reduces net income compared to straight-line."
  },
  {
    id: "ddb-q6",
    question: "What is the DDB rate for an asset with an 8-year useful life?",
    answers: [
      "25%, because 2 × (1 ÷ 8) = 2 × 12.5% = 25%",
      "12.5%, because that is the straight-line rate",
      "50%, because DDB always uses 50%",
      "8%, because the rate equals 1 ÷ life × 100"
    ],
    explanation: "DDB rate = 2 × (1 ÷ useful life) = 2 × (1 ÷ 8) = 2 × 12.5% = 25%."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson04Data} unit={unit08Data} phase={phase5} phases={lesson04Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exit Ticket: DDB and Method Comparison</h2>

            <p className="text-lg leading-relaxed">
              Sarah is comparing both depreciation methods before deciding which one to use for 
              TechStart's asset register. Test your understanding with these questions.
            </p>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  What This Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-purple-800 space-y-2 m-0">
                  <li>• Calculating DDB rate and early-year expense</li>
                  <li>• Applying the salvage-value floor correctly</li>
                  <li>• Comparing DDB and straight-line in business terms</li>
                  <li>• Recognizing which assets fit accelerated depreciation</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    DDB Formula
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800 font-mono">
                    DDB Rate = 2 × (1 ÷ Useful Life)
                  </p>
                  <p className="text-sm text-purple-800 font-mono mt-1">
                    Expense = Beginning Book Value × DDB Rate
                  </p>
                </CardContent>
              </Card>

              <Card className="border-orange-200 bg-orange-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-orange-900 flex items-center gap-2 text-base">
                    <TrendingDown className="h-4 w-4" />
                    Floor Rule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-orange-800">
                    If expense would push book value below salvage value, reduce expense so 
                    book value equals salvage value exactly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <ComprehensionCheck
            title="DDB and Method Comparison Assessment"
            description="Demonstrate your understanding of double-declining balance calculation and method comparison"
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </div>

        <PhaseFooter lesson={lesson04Data} unit={unit08Data} phase={phase5} phases={lesson04Phases} />
      </div>
    </div>
  );
}
