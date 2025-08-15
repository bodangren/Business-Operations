'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Building2, DollarSign, Calculator, TrendingUp, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const phase5 = lesson03Phases.find(p => p.sequence === 5)!;

const assessmentQuestions = [
  {
    id: "assessment-1",
    question: "In a three-statement integrated model, Net Income from the Income Statement flows directly into which account on the Balance Sheet?",
    answers: [
      "Retained Earnings",
      "Cash",
      "Total Assets",
      "Owner's Capital"
    ],
    explanation: "Net Income increases Retained Earnings in the equity section of the Balance Sheet, creating the key link between profitability and financial position."
  },
  {
    id: "assessment-2",
    question: "If a company's Cash Flow Statement shows a net decrease in cash of $15,000, what must happen on the Balance Sheet?",
    answers: [
      "The Cash account must decrease by exactly $15,000",
      "Total Assets must increase by $15,000",
      "Liabilities must increase by $15,000",
      "Retained Earnings must decrease by $15,000"
    ],
    explanation: "The change in cash on the Balance Sheet must exactly match the net cash change from the Cash Flow Statement - this is a critical validation check."
  },
  {
    id: "assessment-3",
    question: "Sarah buys a $10,000 delivery truck with cash. Which statements are affected?",
    answers: [
      "Balance Sheet (Equipment +$10,000, Cash -$10,000) and Cash Flow Statement (Investing Activities -$10,000)",
      "Only the Income Statement with a $10,000 expense",
      "Only the Balance Sheet with no Cash Flow impact",
      "All three statements show a $10,000 expense immediately"
    ],
    explanation: "Asset purchases affect the Balance Sheet (asset composition changes) and Cash Flow Statement (investing activity), but don't immediately impact the Income Statement."
  },
  {
    id: "assessment-4",
    question: "Which cash flow activity category would 'Paid interest on business loan' belong to?",
    answers: [
      "Operating Activities",
      "Investing Activities",
      "Financing Activities",
      "It doesn't belong on the Cash Flow Statement"
    ],
    explanation: "Interest payments are considered part of daily business operations, so they belong in Operating Activities, even though the loan itself is a financing item."
  },
  {
    id: "assessment-5",
    question: "Why do venture capitalists require integrated financial models rather than separate statements?",
    answers: [
      "To verify numbers are consistent and the business model is financially sound",
      "To make the presentation look more professional",
      "To reduce the number of spreadsheets needed",
      "To calculate taxes more accurately"
    ],
    explanation: "Integrated models prove the numbers are reliable and show how profitability, financial position, and cash flow work together - this builds investor confidence."
  },
  {
    id: "assessment-6",
    question: "In cross-sheet linking, what is the main advantage of using named ranges (like 'Revenue_Growth_Rate') instead of cell references (like 'B5')?",
    answers: [
      "Formulas are easier to understand and audit, reducing errors",
      "The spreadsheet runs faster",
      "It uses less computer memory",
      "Colors look better in the spreadsheet"
    ],
    explanation: "Named ranges make formulas self-documenting and easier to audit, which is crucial for professional financial models that investors will scrutinize."
  },
  {
    id: "assessment-7",
    question: "If Sarah's business shows $25,000 profit but her cash balance is decreasing, what could explain this?",
    answers: [
      "Customers haven't paid their invoices yet, or she's building up inventory",
      "There's definitely an error in the financial statements",
      "The business is failing and should be shut down",
      "She needs to raise prices immediately"
    ],
    explanation: "Profit and cash flow are different - money can be tied up in accounts receivable (unpaid customer invoices) or inventory, creating positive profit but negative cash flow."
  },
  {
    id: "assessment-8",
    question: "What is the fundamental accounting equation that must always balance on the Balance Sheet?",
    answers: [
      "Assets = Liabilities + Equity",
      "Revenue - Expenses = Net Income",
      "Cash Inflows - Cash Outflows = Net Cash Flow",
      "Assets = Revenue + Equity"
    ],
    explanation: "Assets = Liabilities + Equity is the fundamental accounting equation. Everything a company owns (assets) must equal what it owes (liabilities) plus the owners' stake (equity)."
  },
  {
    id: "assessment-9",
    question: "Which of these would be classified as a Financing Activity on the Cash Flow Statement?",
    answers: [
      "Received $50,000 loan from bank",
      "Purchased office equipment for $5,000",
      "Paid monthly rent of $2,000",
      "Collected $8,000 from customers"
    ],
    explanation: "Bank loans involve creditors and change the capital structure, making them Financing Activities. The other items are Operating (rent, customer collections) or Investing (equipment)."
  },
  {
    id: "assessment-10",
    question: "In a professional financial model, what should happen when you change a key assumption like sales growth rate?",
    answers: [
      "All related formulas should automatically update throughout the entire model",
      "You need to manually update each affected cell",
      "Only the current sheet should change",
      "The model should prevent any changes to assumptions"
    ],
    explanation: "Professional models use integrated formulas so that changing one assumption (like growth rate) automatically flows through all related calculations across all three statements."
  }
];

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase5}
          phases={lesson03Phases}
        />

        <div className="space-y-8">
          {/* Assessment Introduction */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment: Mastering Three-Statement Integration</h2>
            
            <p className="text-lg leading-relaxed">
              Sarah reviews her notes from the lesson with Jennifer. "I think I'm finally understanding 
              how the three statements work together," she says. "The Income Statement shows whether 
              I'm profitable, the Balance Sheet shows what I own and owe, and the Cash Flow Statement 
              shows where my cash actually goes. But the magic happens when they're all connected."
            </p>

            <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg my-6">
              <h3 className="text-blue-900 font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Assessment Objectives
              </h3>
              <p className="text-blue-800 mb-4">
                This assessment tests your understanding of how Balance Sheet and Cash Flow Statement 
                integration creates a complete financial picture. You'll demonstrate mastery of:
              </p>
              <ul className="text-blue-800 space-y-2">
                <li>• <strong>Statement Integration:</strong> How Net Income flows to Retained Earnings</li>
                <li>• <strong>Cash Flow Categorization:</strong> Operating, Investing, and Financing activities</li>
                <li>• <strong>Cross-Sheet Validation:</strong> Why integrated models are more reliable</li>
                <li>• <strong>Professional Standards:</strong> Building investor-ready financial models</li>
                <li>• <strong>Business Applications:</strong> Real-world transaction analysis</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-purple-900 flex items-center gap-2 text-sm">
                    <Calculator className="h-4 w-4" />
                    Income Statement Links
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-purple-800">
                    Net Income → Retained Earnings connection and impact on equity structure
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-900 flex items-center gap-2 text-sm">
                    <Building2 className="h-4 w-4" />
                    Balance Sheet Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-green-800">
                    Asset, liability, and equity changes that create cash flow statement activities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader className="pb-3">
                  <CardTitle className="text-blue-900 flex items-center gap-2 text-sm">
                    <DollarSign className="h-4 w-4" />
                    Cash Flow Validation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-blue-800">
                    How cash changes reconcile between Balance Sheet and Cash Flow Statement
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg my-6">
              <h4 className="text-amber-900 font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Success Metrics for Investor Readiness
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Mastery Level (90-100%)</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Complete understanding of statement integration</li>
                    <li>• Confident cash flow categorization</li>
                    <li>• Ready to build professional models</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-amber-900 mb-2">Proficient Level (80-89%)</h5>
                  <ul className="text-amber-800 text-sm space-y-1">
                    <li>• Good grasp of core concepts</li>
                    <li>• Minor gaps in complex scenarios</li>
                    <li>• Needs practice with edge cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Integration Challenge</h3>
            
            <p className="text-lg leading-relaxed">
              Jennifer reminds Sarah: "When you present to investors, they'll ask detailed questions 
              about how your numbers connect. They might say, 'If your profit is $30,000, why did 
              your cash only increase by $15,000?' You need to understand these relationships deeply 
              enough to explain them confidently."
            </p>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg my-6">
              <h5 className="text-green-900 font-medium mb-2 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Career Application
              </h5>
              <p className="text-green-800 text-sm">
                Mastering three-statement integration prepares you for careers in finance, consulting, 
                investment banking, and entrepreneurship. This foundational skill is essential for 
                anyone who will analyze businesses, make investment decisions, or raise capital.
              </p>
            </div>
          </div>

          {/* Comprehensive Assessment */}
          <ComprehensionCheck
            title="Three-Statement Integration Mastery Assessment"
            description="Demonstrate your understanding of Balance Sheet and Cash Flow integration concepts"
            questions={assessmentQuestions}
            showExplanations={true}
          />

          {/* Assessment Summary */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Next Steps: Building Sarah's Integrated Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                With this foundational understanding, you're ready to help Sarah build her complete 
                three-statement model that will impress the venture capitalists and secure her $500,000 funding.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h5 className="font-medium text-indigo-900 mb-2">Immediate Next Phase:</h5>
                  <ul className="text-indigo-800 text-sm space-y-1">
                    <li>• Reflection on integration concepts</li>
                    <li>• Connection to Unit 8's overall objectives</li>
                    <li>• Preview of scenario analysis and sensitivity testing</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded border border-indigo-200">
                  <h5 className="font-medium text-indigo-900 mb-2">Unit 8 Journey Ahead:</h5>
                  <ul className="text-indigo-800 text-sm space-y-1">
                    <li>• Advanced Excel linking techniques</li>
                    <li>• Scenario Manager and sensitivity analysis</li>
                    <li>• Professional model auditing</li>
                    <li>• VC presentation and Q&A preparation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
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