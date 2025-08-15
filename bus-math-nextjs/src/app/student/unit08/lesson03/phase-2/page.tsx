'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, DollarSign, ArrowRight, Target, LinkIcon, Calculator } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";

const phase2 = lesson03Phases.find(p => p.sequence === 2)!;

const fillInBlankSentences = [
  {
    id: "statement-1",
    text: "The fundamental accounting equation is: Assets = {blank} + Equity",
    answer: "Liabilities",
    hint: "This represents what the company owes to creditors",
    category: "Balance Sheet Formula"
  },
  {
    id: "statement-2", 
    text: "The Balance Sheet shows the financial position of a business at a specific {blank} in time",
    answer: "point",
    hint: "Unlike the Income Statement which shows a period, this is a snapshot",
    category: "Balance Sheet Concept"
  },
  {
    id: "statement-3",
    text: "Net Income from the Income Statement flows into {blank} on the Balance Sheet",
    answer: "Retained Earnings",
    hint: "This is where accumulated profits are stored in the equity section",
    category: "Statement Integration"
  },
  {
    id: "statement-4",
    text: "The Cash Flow Statement tracks cash movements in three categories: Operating, Investing, and {blank}",
    answer: "Financing",
    hint: "This category includes loans, investments, and dividend payments",
    category: "Cash Flow Categories"
  },
  {
    id: "statement-5",
    text: "Operating Activities in the Cash Flow Statement show cash from {blank} business operations",
    answer: "daily",
    hint: "This refers to the regular, day-to-day business activities",
    category: "Operating Activities"
  },
  {
    id: "statement-6",
    text: "The change in cash on the Balance Sheet must equal the {blank} change in cash from the Cash Flow Statement",
    answer: "net",
    hint: "This is the total of all cash inflows minus all cash outflows",
    category: "Statement Reconciliation"
  },
  {
    id: "statement-7",
    text: "Investing Activities include buying or selling long-term {blank} like equipment or buildings",
    answer: "assets",
    hint: "These are items the business owns that will last more than one year",
    category: "Investing Activities"
  },
  {
    id: "statement-8",
    text: "Cross-sheet {blank} connect formulas between different Excel sheets in a financial model",
    answer: "linking",
    hint: "This ensures when one number changes, all related numbers update automatically",
    category: "Excel Integration"
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Introduction Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Art of Financial Integration</h2>
            
            <p className="text-lg leading-relaxed">
              After the intense meeting with venture capitalists, Sarah sits with her mentor, Jennifer the CPA, 
              reviewing what it really means to create an "integrated three-statement model." It's not enough 
              to have three separate spreadsheets—they need to work together like a perfectly synchronized machine.
            </p>

            <Card className="border-blue-200 bg-blue-50 my-6">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Learning Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-blue-800 space-y-2 m-0">
                  <li>• Understand how the Balance Sheet connects to the Income Statement through Retained Earnings</li>
                  <li>• Learn how the Cash Flow Statement reconciles to Balance Sheet cash changes</li>
                  <li>• Master the three categories of cash flow activities</li>
                  <li>• Apply cross-sheet linking principles for dynamic financial models</li>
                </ul>
              </CardContent>
            </Card>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Understanding the Balance Sheet</h3>
            
            <p className="text-lg leading-relaxed">
              "Think of the Balance Sheet as a photograph," Jennifer explains to Sarah. "While your Income Statement 
              is like a movie showing performance over time, the Balance Sheet captures exactly what your business 
              owns and owes at one specific moment. It's the foundation of the accounting equation that never breaks."
            </p>

            <div className="bg-green-50 border border-green-200 p-6 rounded-lg my-6">
              <h4 className="text-green-900 font-semibold mb-3 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                The Accounting Equation (Always True)
              </h4>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-800 mb-2">
                  Assets = Liabilities + Equity
                </p>
                <p className="text-green-700 text-sm">
                  What you OWN = What you OWE + What you're WORTH
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-6">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5" />
                    Assets (What You Own)
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-blue-800">Current Assets</h5>
                      <p className="text-sm text-blue-700">Cash, Accounts Receivable, Inventory—things that become cash within a year</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800">Fixed Assets</h5>
                      <p className="text-sm text-blue-700">Equipment, Buildings, Computers—long-term resources for the business</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900 flex items-center gap-2 text-lg">
                    <DollarSign className="h-5 w-5" />
                    Liabilities + Equity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-red-800">Liabilities (What You Owe)</h5>
                      <p className="text-sm text-red-700">Accounts Payable, Loans, Credit Cards—money you must pay back</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-green-800">Equity (Your Stake)</h5>
                      <p className="text-sm text-green-700">Your investment plus Retained Earnings (accumulated profits)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Critical Connection: Retained Earnings</h3>
            
            <p className="text-lg leading-relaxed">
              "Here's where the magic happens," Jennifer points to Sarah's spreadsheet. "Your Income Statement's 
              Net Income doesn't just disappear—it flows directly into Retained Earnings on your Balance Sheet. 
              This is the bridge between your two statements."
            </p>

            <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg my-6">
              <div className="flex items-center justify-center space-x-4 text-lg">
                <div className="text-center">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Income Statement</Badge>
                  <p className="font-semibold">Net Income</p>
                </div>
                <ArrowRight className="h-6 w-6 text-purple-600" />
                <div className="text-center">
                  <Badge className="bg-green-100 text-green-800 mb-2">Balance Sheet</Badge>
                  <p className="font-semibold">Retained Earnings</p>
                </div>
              </div>
              <p className="text-center text-purple-700 mt-3 text-sm">
                This connection ensures your profits build your company's equity
              </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Mastering Cash Flow Activities</h3>
            
            <p className="text-lg leading-relaxed">
              Sarah learns that the Cash Flow Statement tells a different story than the Income Statement. 
              "Profit and cash are not the same thing," Jennifer emphasizes. "You can be profitable but 
              cash-poor, or lose money but still have positive cash flow. The Cash Flow Statement tracks 
              the actual movement of cash in three distinct activities."
            </p>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 text-base">Operating Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-green-800 mb-2">
                    Cash from daily business operations
                  </p>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Collecting from customers</li>
                    <li>• Paying suppliers</li>
                    <li>• Paying employees</li>
                    <li>• Paying rent and utilities</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 text-base">Investing Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-blue-800 mb-2">
                    Cash from buying/selling assets
                  </p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    <li>• Buying equipment</li>
                    <li>• Selling old computers</li>
                    <li>• Purchasing investments</li>
                    <li>• Acquiring other businesses</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 text-base">Financing Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-purple-800 mb-2">
                    Cash from investors and lenders
                  </p>
                  <ul className="text-xs text-purple-700 space-y-1">
                    <li>• Taking out loans</li>
                    <li>• Receiving investment</li>
                    <li>• Paying loan payments</li>
                    <li>• Paying dividends</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Ultimate Validation Check</h3>
            
            <p className="text-lg leading-relaxed">
              Jennifer shows Sarah the critical checkpoint that every professional financial model must pass: 
              "The net change in cash from your Cash Flow Statement must exactly match the change in cash 
              on your Balance Sheet from beginning to end of the period. If these don't match, you have an error."
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
              <h4 className="text-amber-900 font-semibold mb-3 flex items-center gap-2">
                <LinkIcon className="h-5 w-5" />
                Cross-Sheet Linking Best Practices
              </h4>
              <ul className="text-amber-800 space-y-2">
                <li>• Use named ranges for key variables (Revenue_Growth_Rate instead of B5)</li>
                <li>• Apply consistent sheet naming (Assumptions, P&amp;L, Balance_Sheet, Cash_Flow)</li>
                <li>• Use absolute references ($B$5) when copying formulas to lock cell references</li>
                <li>• Build validation checks to catch errors automatically</li>
                <li>• Never hard-code numbers in projection cells—always use formulas</li>
              </ul>
            </div>
          </div>

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            sentences={fillInBlankSentences}
            title="Three-Statement Integration Vocabulary"
            description="Complete these key concepts about Balance Sheet and Cash Flow integration"
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase2}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}