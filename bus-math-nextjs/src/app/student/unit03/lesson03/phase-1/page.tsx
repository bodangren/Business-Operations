import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-q1",
    question: "When Sarah from TechStart Solutions met with her CPA Jennifer Kim to build professional financial statements, what was the biggest challenge they needed to solve?",
    answers: [
      "How to make journal entries automatically flow into a narrative that investors can trust and understand",
      "How to make their spreadsheet look more professional with better formatting",
      "How to calculate taxes for the business more accurately",
      "How to track cash flow on a daily basis"
    ],
    explanation: "The central challenge was creating a 'storyboard' where today's journal entries flow into a compelling financial narrative showing profit, solvency, and cash health that external stakeholders like investors and banks can trust."
  },
  {
    id: "hook-q2", 
    question: "Why did Sarah need to create dynamic reports that automatically update when new data is added to her ledger?",
    answers: [
      "Because professional financial models must be living documents that always reflect the true state of the business",
      "Because her computer was too slow to handle manual updates",
      "Because she wanted to impress her investors with fancy Excel features",
      "Because Jennifer Kim required it for tax purposes"
    ],
    explanation: "Professional financial models are living documents. When built with dynamic formulas like INDEX/MATCH, they automatically update whenever new transactions are added, ensuring the reports always show current, accurate information."
  },
  {
    id: "hook-q3",
    question: "In Excel, why is INDEX/MATCH considered superior to VLOOKUP for building dynamic Income Statements?",
    answers: [
      "INDEX/MATCH is more flexible and can look in any direction, making it perfect for complex financial models",
      "INDEX/MATCH is faster than VLOOKUP in all situations",
      "INDEX/MATCH has better formatting options",
      "INDEX/MATCH can only be used for financial statements"
    ],
    explanation: "INDEX/MATCH is more flexible than VLOOKUP because it can look left or right, up or down, and doesn't break when columns are inserted or moved. This makes it ideal for building robust financial models."
  },
  {
    id: "hook-q4",
    question: "What happens to Net Income from the Income Statement in a complete financial storyboard?",
    answers: [
      "Net Income flows directly into the Retained Earnings section of the Balance Sheet, connecting the two statements",
      "Net Income stays separate and is only used for tax calculations",
      "Net Income gets transferred to a savings account automatically", 
      "Net Income is only used to pay dividends to shareholders"
    ],
    explanation: "This is the key integration point: Net Income from the Income Statement flows into Retained Earnings on the Balance Sheet, creating the connection between the 'plot' and 'setting' of the financial story."
  }
];

export default function Unit03Lesson03Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Sarah's Financial Story Challenge
          </h2>
          
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="text-lg leading-relaxed text-blue-900">
              Sarah thought she had mastered business finances after building her automated ledger system in Unit 2. 
              Her books balanced perfectly, her month-end process was smooth, and she finally had time to focus on growing 
              TechStart Solutions. But when a huge opportunity came her way—a regional retail chain needing a massive 
              e-commerce solution—she realized her internal records weren't enough.
            </p>
            
            <p className="text-lg leading-relaxed text-blue-900 mt-4">
              The bank loan officer looked at her detailed spreadsheet and asked, "Where are your financial statements?" 
              At the same time, a potential investor wanted to see "real financial statements." Sarah's perfectly organized 
              ledger was for <em>her</em>—but the business world needed the official story told through three specific documents.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Three-Statement Storyboard
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Jennifer Kim, Sarah's CPA, explained that financial statements are like a "storyboard" for business:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">The Plot</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  <strong>Income Statement:</strong> Is the business profitable? 
                  Shows Revenues - Expenses = Net Income over time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 text-lg">The Setting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700 text-sm">
                  <strong>Balance Sheet:</strong> What does the business own vs. owe? 
                  Assets = Liabilities + Equity at a point in time.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 text-lg">The Action</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-700 text-sm">
                  <strong>Cash Flow Statement:</strong> How is cash actually moving? 
                  Shows real money in and out of the business.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="font-semibold text-blue-900 mb-3 text-xl">Why This Matters</h3>
            <p className="text-blue-800 leading-relaxed">
              Today, you'll take the journal entries from your Unit 1 venture and transform them into the first chapter 
              of your financial story—a professional Income Statement. But you won't just copy and paste numbers. You'll 
              build it like a pro, using <strong>INDEX/MATCH formulas</strong> to create dynamic links between your ledger 
              and your statement. This means when new transactions hit your books, your Income Statement updates automatically. 
              This is how you build trust with investors: by showing them a living, breathing financial model that always 
              tells the current truth about your business.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Power of INDEX/MATCH
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Jennifer taught Sarah that professional financial models use <strong>INDEX/MATCH</strong> instead of basic lookup 
            functions because it's more flexible and reliable. Here's why this matters:
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✅ INDEX/MATCH Benefits:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Can look in any direction (left, right, up, down)</li>
                  <li>Doesn't break when columns are inserted or moved</li>
                  <li>More flexible for complex financial models</li>
                  <li>Industry standard for professional spreadsheets</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">⚠️ VLOOKUP Limitations:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li>Only looks to the right</li>
                  <li>Breaks when columns are moved</li>
                  <li>Limited flexibility for complex models</li>
                  <li>Not preferred by financial professionals</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="text-lg leading-relaxed mb-8">
            Today's challenge: Can you build an Income Statement that dynamically pulls from your trial balance and 
            automatically updates to show Sarah's true profitability story?
          </p>
        </div>

        <ComprehensionCheck
          title="Understanding the Financial Storyboard Challenge"
          description="Test your understanding of Sarah's challenge and the power of integrated financial statements."
          questions={hookQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">🎯 Phase 1 Learning Target</h3>
          <p className="text-amber-800">
            By the end of this phase, you should understand why Sarah needs professional financial statements, 
            how the Income Statement serves as the "plot" of her business story, and why dynamic formulas like 
            INDEX/MATCH are essential for building investor-ready financial models.
          </p>
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