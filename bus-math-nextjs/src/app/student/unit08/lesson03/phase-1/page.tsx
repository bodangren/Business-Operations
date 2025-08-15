'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Building2, DollarSign, Calculator, TrendingUp } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const phase1 = lesson03Phases.find(p => p.sequence === 1)!;

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah has successfully built her Income Statement, but her investor wants to see the 'full financial picture.' What are the other two statements she needs to complete?",
    answers: [
      "Balance Sheet and Cash Flow Statement",
      "Profit & Loss and Trial Balance", 
      "Budget and Forecast",
      "Tax Return and Audit Report"
    ],
    explanation: "The three main financial statements are Income Statement, Balance Sheet, and Cash Flow Statement. Together, they provide a complete view of a company's financial health."
  },
  {
    id: "hook-2", 
    question: "Why would an investor care about seeing all three statements linked together rather than separate?",
    answers: [
      "To verify the numbers are consistent and the business model is sound",
      "To make the presentation look more professional",
      "To compare different time periods more easily",
      "To calculate taxes more accurately"
    ],
    explanation: "Linked statements prove the numbers are reliable and show how different aspects of the business (profitability, financial position, cash flow) work together."
  },
  {
    id: "hook-3",
    question: "If Sarah's Income Statement shows $50,000 in profit, but her Cash Flow Statement shows she's running out of cash, what does this tell us?",
    answers: [
      "Profit and cash flow are different - she might have money tied up in unpaid invoices or inventory",
      "There's definitely an error in one of the statements",
      "The business is failing and should be shut down",
      "She needs to raise her prices immediately"
    ],
    explanation: "This is a common situation! Profit (revenue minus expenses) is different from cash flow. Money can be 'on paper' in unpaid invoices while cash runs low."
  },
  {
    id: "hook-4",
    question: "What would worry a venture capitalist most about a startup's financial model?",
    answers: [
      "Hard-coded numbers that don't update when assumptions change",
      "Using too many colors in the spreadsheet",
      "Having more than three scenarios",
      "Including monthly instead of annual projections"
    ],
    explanation: "Hard-coded numbers suggest the model is inflexible and potentially inaccurate. Professional models use formulas that automatically update when key assumptions change."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data} 
          phase={phase1}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Hook Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6 rounded-lg mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="h-8 w-8" />
                <h2 className="text-2xl font-bold m-0">The $500,000 Question</h2>
              </div>
              <p className="text-xl leading-relaxed m-0">
                Sarah Chen sits across from three venture capitalists at a sleek downtown conference table. 
                Her TechStart Solutions pitch has gone well—they're impressed with her client growth and 
                revenue numbers. But then comes the moment she's been dreading.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              "Sarah, your Income Statement looks solid," says Marcus, the lead investor, adjusting his glasses. 
              "But we need to see the complete financial picture. How do your profits connect to your actual 
              cash position? What do you own, and what do you owe? Before we can invest $500,000, we need 
              to see a fully integrated three-statement model."
            </p>

            <p className="text-lg leading-relaxed">
              Sarah's heart sinks. She has her Income Statement perfected—every formula, every link, every 
              scenario. But she knows that professional investors don't just want to see profit. They want 
              to understand the complete story: how her business makes money (Income Statement), what she 
              owns and owes (Balance Sheet), and how cash actually flows through her business (Cash Flow Statement).
            </p>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Why This Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800">
                  Today, you'll learn why venture capitalists demand integrated financial models. A business 
                  can be profitable on paper but still run out of cash. It can own valuable assets but carry 
                  dangerous debt. Only when all three statements work together do investors get the complete 
                  truth about a business's financial health. Sarah's $500,000 funding depends on proving 
                  her business model is not just profitable, but financially sustainable.
                </p>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Three-Statement Challenge</h3>
            
            <p className="text-lg leading-relaxed">
              Marcus slides a checklist across the table. "These are the red flags that make us walk away 
              from deals," he explains. "Hard-coded numbers instead of formulas. Statements that don't tie 
              together. Cash flow that doesn't reconcile to the balance sheet. Your model needs to prove 
              that when we change one assumption, everything else updates automatically."
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-base">
                    <Calculator className="h-4 w-4" />
                    Income Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800">
                    Shows profitability over time. Sarah has this mastered, with revenues, expenses, 
                    and net income all connected by formulas.
                  </p>
                  <Badge className="mt-2 bg-green-100 text-green-800">✓ Complete</Badge>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-amber-900 flex items-center gap-2 text-base">
                    <Building2 className="h-4 w-4" />
                    Balance Sheet
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-amber-800">
                    Shows what the business owns (assets), owes (liabilities), and Sarah's stake (equity) 
                    at a specific moment.
                  </p>
                  <Badge className="mt-2 bg-red-100 text-red-800">⚠ Needs Integration</Badge>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-base">
                    <DollarSign className="h-4 w-4" />
                    Cash Flow Statement
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800">
                    Tracks where cash comes from and goes. Critical for proving the business 
                    won't run out of money.
                  </p>
                  <Badge className="mt-2 bg-red-100 text-red-800">⚠ Needs Integration</Badge>
                </CardContent>
              </Card>
            </div>

            <p className="text-lg leading-relaxed">
              Sarah realizes this is her ultimate test. Everything she's learned about financial statements, 
              formulas, and business modeling comes down to this moment. Can she build a financial model 
              so robust and interconnected that it proves TechStart Solutions deserves serious investment? 
              The clock is ticking, and $500,000 in funding hangs in the balance.
            </p>
          </div>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Understanding the Investment Challenge"
            description="Test your understanding of why investors need integrated financial statements"
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