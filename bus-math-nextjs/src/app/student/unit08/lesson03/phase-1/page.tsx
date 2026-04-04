'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Calculator, TrendingDown, ArrowRight } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const phase1 = lesson03Phases.find(p => p.sequence === 1)!;

const hookQuestions = [
  {
    id: "hook-1",
    question: "TechStart just bought a $30,000 delivery van that will last 5 years and be worth $5,000 at the end. How much of that $30,000 should count as an expense in Year 1?",
    answers: [
      "Only the portion of value used up in Year 1, not the full $30,000",
      "The full $30,000 because the company spent the money this year",
      "Zero, because vehicles are never expensed",
      "$5,000 because that is what the van will be worth later"
    ],
    explanation: "The van provides value over 5 years. Accounting rules say we spread the cost across the years it helps the business, not dump it all into Year 1."
  },
  {
    id: "hook-2",
    question: "If TechStart expenses the full $30,000 van purchase in Year 1, what problem does that create?",
    answers: [
      "Year 1 looks much less profitable than it really is, and Years 2-5 look artificially better",
      "Nothing, because the cash was spent so the expense is correct",
      "The van will disappear from the balance sheet too soon",
      "Investors will think the company is too profitable"
    ],
    explanation: "Expensing everything upfront distorts the true picture. The van helps the business for 5 years, so the expense should match that benefit period."
  },
  {
    id: "hook-3",
    question: "Sarah needs a fair way to spread the van's cost across 5 years. What information does she need?",
    answers: [
      "The cost, the expected useful life, and the estimated value at the end (salvage value)",
      "Only the purchase price from the invoice",
      "The current market price of used vans",
      "The interest rate on the loan used to buy it"
    ],
    explanation: "To spread cost fairly, you need three numbers: what you paid (cost), how long it lasts (useful life), and what it will be worth at the end (salvage value)."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase1}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8" />
                <h2 className="text-2xl font-bold m-0">The Van Problem</h2>
              </div>
              <p className="text-xl leading-relaxed m-0">
                Sarah Chen just signed the papers on a $30,000 delivery van for TechStart Solutions. 
                Her accountant reminds her that this purchase creates a new problem: how do you record 
                a big asset that will help the business for years to come?
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              In Lesson 02, you learned that the van is a <strong>capital asset</strong> — not an 
              expense. That means it goes on the balance sheet, not the income statement. But here 
              is the catch: the van loses value every year it is used. Investors need to see that 
              loss reflected in the financial records.
            </p>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <TrendingDown className="h-5 w-5" />
                  The Friction Point
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  The van cost $30,000. It will last about 5 years. At the end, Sarah thinks she 
                  can sell it for about $5,000. So <strong>$25,000 of value will be "used up"</strong> over 
                  those 5 years. The question is: <em>how much of that $25,000 should count as an 
                  expense each year?</em>
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Three Numbers, One Problem</h3>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-gray-200 bg-gray-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-gray-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    Cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gray-800">$30,000</p>
                  <p className="text-sm text-gray-600 mt-1">What TechStart paid for the van</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-base">
                    <ArrowRight className="h-4 w-4" />
                    Useful Life
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-800">5 years</p>
                  <p className="text-sm text-blue-600 mt-1">How long the van will help the business</p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <TrendingDown className="h-4 w-4" />
                    Salvage Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-800">$5,000</p>
                  <p className="text-sm text-green-600 mt-1">What the van will be worth at the end</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed">
              The simplest and most common method accountants use is called <strong>straight-line 
              depreciation</strong>. It spreads the cost evenly across each year of the asset's life. 
              In this lesson, you will learn exactly how it works and why it matters for every 
              financial statement.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-amber-800 font-medium m-0">
                <strong>Key formula you will master:</strong> Book Value = Cost − Accumulated Depreciation
              </p>
            </div>
          </div>

          <ComprehensionCheck
            title="Understanding the Depreciation Problem"
            description="Check your understanding of why we need a depreciation method"
            questions={hookQuestions}
            showExplanations={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase1}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
