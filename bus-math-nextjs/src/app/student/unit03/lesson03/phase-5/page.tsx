import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "assess-q1",
    question: "In the INDEX/MATCH formula =INDEX('Trial Balance'[Amount], MATCH(\"Software Subscriptions\", 'Trial Balance'[Account Name], 0)), what happens if the account name \"Software Subscriptions\" doesn't exist in the trial balance?",
    answers: [
      "The MATCH function returns #N/A error, which causes INDEX to also return #N/A, alerting you to the missing data",
      "The formula returns zero automatically as a default value",
      "Excel crashes because it cannot find the matching value",
      "The formula skips to the next closest account name alphabetically"
    ],
    explanation: "When MATCH cannot find an exact match (with match_type 0), it returns #N/A error. This is actually helpful because it alerts you to data issues, allowing you to correct missing or misspelled account names."
  },
  {
    id: "assess-q2",
    question: "Sarah's Q2 Income Statement shows revenues of $16,500 and expenses of $5,700. If she wants to achieve a 25% profit margin next quarter, what revenue target should she set (assuming expenses stay constant)?",
    answers: [
      "$7,600 in revenue (expenses of $5,700 ÷ 0.75 = $7,600 to achieve 25% margin)",
      "$14,250 in revenue ($5,700 × 2.5 = $14,250)",
      "$20,000 in revenue (current revenue plus 25%)",
      "$11,400 in revenue (current expenses × 2 = $11,400)"
    ],
    explanation: "For a 25% profit margin, Net Income must be 25% of Revenue. This means Expenses are 75% of Revenue. So: Revenue = Expenses ÷ 0.75 = $5,700 ÷ 0.75 = $7,600."
  },
  {
    id: "assess-q3",
    question: "Why is it critical that Sarah's Income Statement automatically updates when she adds new transactions to her trial balance?",
    answers: [
      "Dynamic updating ensures investors always see current financial performance, building trust and credibility",
      "Automatic updates prevent Sarah from having to learn more advanced Excel functions",
      "Dynamic formulas make the spreadsheet file size smaller and run faster",
      "Investors prefer to see only historical data, not current performance"
    ],
    explanation: "Investors need current, accurate information to make funding decisions. Dynamic formulas ensure the Income Statement always reflects the true financial position, building credibility and trust."
  },
  {
    id: "assess-q4",
    question: "When building professional financial models, why do experts use named table references like 'TrialBalance[Amount]' instead of cell ranges like 'A2:A20'?",
    answers: [
      "Named references are more readable, less prone to breaking when data moves, and make formulas self-documenting",
      "Named references are required by Generally Accepted Accounting Principles (GAAP)",
      "Named references make Excel calculate formulas faster than cell references",
      "Named references automatically format numbers as currency"
    ],
    explanation: "Named references improve model robustness (don't break when columns move), readability (self-explanatory), and maintainability (easier to understand and modify)."
  },
  {
    id: "assess-q5",
    question: "Sarah's largest expense is Contractor Payments at $2,800. From a business analysis perspective, what does this suggest about her business model?",
    answers: [
      "TechStart Solutions uses a scalable model where she can increase capacity by hiring contractors rather than full-time employees",
      "Sarah is overspending on contractors and should hire full-time employees instead",
      "The business is failing because contractors are too expensive",
      "Sarah needs to reduce contractor costs to improve profitability"
    ],
    explanation: "High contractor costs often indicate a flexible, scalable business model. Sarah can adjust capacity based on demand without the fixed costs and commitments of full-time employees."
  },
  {
    id: "assess-q6",
    question: "If Sarah's trial balance contained both \"Website Development Revenue\" and \"Web Development Revenue\" (note the difference), how would her INDEX/MATCH formula behave?",
    answers: [
      "The formula would return the first exact match it finds, but this highlights the importance of consistent naming conventions",
      "INDEX/MATCH would automatically combine both revenue streams into one total",
      "Excel would display a dialog asking which account to use",
      "The formula would return an average of both amounts"
    ],
    explanation: "INDEX/MATCH returns the first exact match found. Inconsistent naming could cause formulas to miss legitimate accounts, emphasizing the need for standardized chart of accounts."
  },
  {
    id: "assess-q7",
    question: "Sarah's Net Income of $10,800 flows into which section of her Balance Sheet, and why is this connection important for investors?",
    answers: [
      "Retained Earnings in the Equity section - this connection proves the financial statements are integrated and tell one coherent story",
      "Cash in the Assets section - because Net Income equals cash generated",
      "Accounts Payable in the Liabilities section - because profits increase what the company owes",
      "Revenue in a separate Revenue section - to keep income statement data separate"
    ],
    explanation: "Net Income flows to Retained Earnings on the Balance Sheet, demonstrating the integration between statements. This connection shows investors the financial model is comprehensive and professional."
  },
  {
    id: "assess-q8",
    question: "What business insight can Sarah gain by comparing her 75% expense ratio (expenses ÷ revenues = $5,700 ÷ $16,500) to industry benchmarks?",
    answers: [
      "If industry average is 80%, Sarah's 75% ratio indicates efficient cost management and competitive advantage",
      "A 75% expense ratio is always too high regardless of industry",
      "Expense ratios are meaningless for service businesses like TechStart Solutions",
      "The ratio only matters for tax purposes, not business management"
    ],
    explanation: "Comparing expense ratios to industry benchmarks helps assess operational efficiency. A lower ratio often indicates better cost control and higher profitability than competitors."
  },
  {
    id: "assess-q9",
    question: "When presenting her Income Statement to potential investors, what makes Sarah's INDEX/MATCH approach more credible than manually entered numbers?",
    answers: [
      "Investors can trace every number back to source data, see the formulas, and trust the model's accuracy and methodology",
      "INDEX/MATCH formulas are required by SEC regulations for all financial presentations",
      "Manual numbers are illegal to use in investor presentations",
      "INDEX/MATCH automatically adjusts numbers to make the business look more profitable"
    ],
    explanation: "Transparency and traceability build investor confidence. When every number can be traced to source data through clear formulas, investors trust the model's accuracy and the entrepreneur's competence."
  },
  {
    id: "assess-q10",
    question: "Based on Sarah's Q2 performance (revenues $16,500, expenses $5,700, net income $10,800), what strategic question should she be asking for Q3 planning?",
    answers: [
      "How can I scale revenue while maintaining expense control to achieve even higher profitability?",
      "Should I immediately hire 10 full-time employees since the business is profitable?",
      "How can I spend all the profit so I don't have to pay taxes?",
      "Should I lower prices to attract more customers even if it reduces profitability?"
    ],
    explanation: "With strong profitability (65% margin), Sarah should focus on sustainable scaling strategies that maintain her cost discipline while growing revenue through strategic investments."
  }
];

export default function Unit03Lesson03Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-orange-900 mb-6">
            Assessment: Demonstrating Income Statement Mastery
          </h2>
          
          <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-6 rounded-lg border border-orange-200 mb-8">
            <p className="text-lg leading-relaxed text-orange-900">
              Time to demonstrate your mastery of professional Income Statement construction. This assessment evaluates 
              both your technical Excel skills and your business understanding of financial statements. Remember: 
              investors expect both technical competence and strategic insight from entrepreneurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  INDEX/MATCH formulas, named references, dynamic linking, formula troubleshooting, 
                  and professional Excel modeling techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Business Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  Financial ratio interpretation, expense analysis, profit margin calculations, 
                  and strategic business insights from financial data.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Professional Standards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  Investor communication, financial model credibility, integration with Balance Sheet, 
                  and industry best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-orange-800 mb-4">
            Comprehensive Knowledge Assessment
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            This assessment covers the full spectrum of Income Statement construction, from technical Excel implementation 
            to strategic business analysis. Answer thoughtfully—these questions reflect the kinds of challenges you'll 
            face when presenting to real investors.
          </p>
        </div>

        <ComprehensionCheck
          title="Income Statement Construction & Business Analysis"
          description="Demonstrate mastery of technical Excel skills, financial analysis, and professional presentation standards."
          questions={assessmentQuestions}
          showExplanations={true}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <h3 className="text-2xl font-semibold text-orange-800 mb-4">
            Peer Model Evaluation
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Professional financial modeling involves peer review and collaborative improvement. Exchange your Excel models 
            with a classmate and provide constructive feedback on both technical execution and business insight. This 
            mirrors the real-world process where financial models are reviewed by colleagues, managers, and external advisors.
          </p>
        </div>

        <PeerCritiqueForm 
          projectTitle="Professional Income Statement Model"
          peerName="Classmate"
          unitNumber={3}
        />

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">🎯 Assessment Success Indicators</h3>
            <p className="text-green-800 mb-3">
              You've successfully demonstrated Income Statement mastery when you can:
            </p>
            <ul className="list-disc list-inside text-green-700 space-y-2">
              <li>Build dynamic INDEX/MATCH formulas that automatically update with source data changes</li>
              <li>Analyze financial ratios and derive meaningful business insights</li>
              <li>Explain how Income Statement connects to Balance Sheet through Retained Earnings</li>
              <li>Troubleshoot formula errors and maintain model integrity</li>
              <li>Present financial results in a way that builds investor confidence</li>
              <li>Provide constructive feedback on peer financial models</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-6">
            <h3 className="font-semibold text-blue-900 mb-2 text-lg">💡 Real-World Application</h3>
            <p className="text-blue-800">
              The skills you've demonstrated today—building dynamic financial models, analyzing business performance, 
              and presenting to stakeholders—are exactly what successful entrepreneurs use to secure funding and grow 
              their businesses. Sarah's journey from confused spreadsheets to investor-ready statements mirrors the 
              professionalization process every growing business must navigate.
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