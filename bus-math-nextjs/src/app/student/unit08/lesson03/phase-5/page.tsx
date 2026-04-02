'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Calculator, FileText, BarChart3 } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const phase5 = lesson03Phases.find(p => p.sequence === 5)!;

const assessmentQuestions = [
  {
    id: "sl-q1",
    question: "A machine costs $50,000, has a salvage value of $5,000, and a useful life of 9 years. What is the annual straight-line depreciation expense?",
    answers: [
      "$5,000 per year",
      "$5,556 per year",
      "$4,500 per year",
      "$6,111 per year"
    ],
    explanation: "($50,000 − $5,000) ÷ 9 = $45,000 ÷ 9 = $5,000 per year. Always subtract salvage value before dividing."
  },
  {
    id: "sl-q2",
    question: "Using the same machine ($50,000 cost, $5,000 salvage, 9-year life), what is the book value at the end of Year 3?",
    answers: [
      "$35,000",
      "$30,000",
      "$40,000",
      "$25,000"
    ],
    explanation: "Annual expense = $5,000. Accumulated after 3 years = $15,000. Book value = $50,000 − $15,000 = $35,000."
  },
  {
    id: "sl-q3",
    question: "Why does straight-line depreciation produce the same expense every year?",
    answers: [
      "Because the depreciable base is divided evenly across the useful life",
      "Because the asset loses more value in early years",
      "Because tax law requires equal expenses",
      "Because the salvage value changes each year"
    ],
    explanation: "Straight-line divides the total depreciable base by the number of years, creating an equal expense each period."
  },
  {
    id: "sl-q4",
    question: "A company buys equipment for $20,000 on July 1. It has a 4-year life and $4,000 salvage value. What is the Year 1 depreciation expense?",
    answers: [
      "$2,000",
      "$4,000",
      "$3,000",
      "$1,000"
    ],
    explanation: "Full annual expense = ($20,000 − $4,000) ÷ 4 = $4,000. Year 1 covers July–December = 6 months. $4,000 × 6/12 = $2,000."
  },
  {
    id: "sl-q5",
    question: "Where does depreciation expense appear in the financial statements?",
    answers: [
      "On the income statement as an operating expense",
      "On the balance sheet as a current asset",
      "On the cash flow statement as an investing activity",
      "On the income statement as revenue"
    ],
    explanation: "Depreciation expense reduces net income on the income statement. Accumulated depreciation appears on the balance sheet as a contra-asset."
  },
  {
    id: "sl-q6",
    question: "What happens to book value as accumulated depreciation increases?",
    answers: [
      "Book value decreases",
      "Book value increases",
      "Book value stays the same",
      "Book value equals the original cost"
    ],
    explanation: "Book Value = Cost − Accumulated Depreciation. As accumulated depreciation grows, book value shrinks."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-blue-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase5}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Exit Ticket: Straight-Line Mastery</h2>

            <p className="text-lg leading-relaxed">
              Sarah is reviewing her first depreciation schedule before sharing it with her 
              accountant. She wants to make sure every number is correct. Test your own 
              understanding with these questions.
            </p>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  What This Checks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-800 space-y-2 m-0">
                  <li>• Calculating annual straight-line depreciation expense</li>
                  <li>• Finding book value at a given year</li>
                  <li>• Handling partial-year depreciation</li>
                  <li>• Understanding statement impact (income statement vs. balance sheet)</li>
                </ul>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    Formula Reminder
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800 font-mono">
                    Annual Expense = (Cost − Salvage Value) ÷ Useful Life
                  </p>
                  <p className="text-sm text-green-800 font-mono mt-1">
                    Book Value = Cost − Accumulated Depreciation
                  </p>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <FileText className="h-4 w-4" />
                    Statement Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    Depreciation Expense → Income Statement (reduces net income)
                  </p>
                  <p className="text-sm text-purple-800 mt-1">
                    Accumulated Depreciation → Balance Sheet (reduces book value)
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <ComprehensionCheck
            title="Straight-Line Depreciation Assessment"
            description="Demonstrate your understanding of straight-line depreciation calculation and statement impact"
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase5}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
