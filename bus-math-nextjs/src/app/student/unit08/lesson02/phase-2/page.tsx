import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[1]; // Introduction phase

const vocabularySentences = [
  {
    id: "v1",
    text: "In three-statement integration, the Net Income from the Income Statement flows directly into {blank} on the Balance Sheet.",
    answer: "Retained Earnings",
    hint: "This equity account accumulates all the profits the business has kept over time",
    category: "Balance Sheet Links"
  },
  {
    id: "v2", 
    text: "When you use {blank} instead of typing numbers directly into cells, your financial model becomes dynamic and can adapt to changing assumptions.",
    answer: "formulas",
    hint: "These mathematical expressions automatically recalculate when input values change",
    category: "Formula Integrity"
  },
  {
    id: "v3",
    text: "The {blank} is the fundamental accounting equation that must always balance: Assets = Liabilities + Equity.",
    answer: "accounting equation",
    hint: "This principle ensures that what a business owns equals what it owes plus what the owners have invested",
    category: "Accounting Fundamentals"
  },
  {
    id: "v4",
    text: "On the Cash Flow Statement, the starting point for calculating cash from operations is typically the {blank} from the Income Statement.",
    answer: "Net Income",
    hint: "This figure represents the profit that needs to be adjusted for non-cash items and working capital changes",
    category: "Cash Flow Links"
  },
  {
    id: "v5",
    text: "Using {blank} references like =Sheet2!$B$5 allows you to link data between different worksheets while keeping cell references locked.",
    answer: "absolute",
    hint: "These references use dollar signs to prevent cell addresses from changing when formulas are copied",
    category: "Cross-Sheet Linking"
  },
  {
    id: "v6",
    text: "The change in {blank} from your Balance Sheet must exactly match the net change shown at the bottom of your Cash Flow Statement.",
    answer: "Cash",
    hint: "This validation check ensures your three statements are properly integrated and mathematically consistent",
    category: "Statement Validation"
  }
];

export default function Unit08Lesson02Phase2() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit08Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Introduction to Core Concepts */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Architecture of Integration: How Financial Statements Connect
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            After that eye-opening investor meeting, Sarah realized she needed to understand the technical 
            architecture behind integrated financial models. It wasn't enough to have three separate statements - 
            she needed to build a system where each statement &quot;talks&quot; to the others through carefully 
            constructed formulas and cross-sheet references.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Think of three-statement integration like the electrical wiring in a house. You can't see the wires, 
            but when you flip a switch in one room, lights turn on in another room. Similarly, when you change 
            a sales assumption in your model, it should automatically update revenue on your Income Statement, 
            affect cash collections on your Cash Flow Statement, and impact accounts receivable on your Balance Sheet.
          </p>
        </div>

        {/* The Three Key Connections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Income → Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm leading-relaxed">
                <strong>Net Income</strong> from your Income Statement flows into <strong>Retained Earnings</strong> 
                on your Balance Sheet. This shows how profits accumulate in the business over time.
              </p>
              <p className="text-green-600 text-xs mt-2 font-mono">
                =Income_Statement!Net_Income
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Balance → Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm leading-relaxed">
                Changes in <strong>Balance Sheet accounts</strong> like Accounts Receivable and Inventory 
                create adjustments in your <strong>Cash Flow from Operations</strong> section.
              </p>
              <p className="text-blue-600 text-xs mt-2 font-mono">
                =Previous_Period_AR - Current_Period_AR
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Cash Flow → Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 text-sm leading-relaxed">
                The <strong>Net Change in Cash</strong> from your Cash Flow Statement must exactly match 
                the change in your <strong>Cash balance</strong> on the Balance Sheet.
              </p>
              <p className="text-purple-600 text-xs mt-2 font-mono">
                =Beginning_Cash + Net_Cash_Change
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Professional Standards Section */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-3 text-xl">Professional Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-yellow-800">
              <h4 className="font-medium mb-2">✅ DO Use:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Named ranges:</strong> Revenue_Growth_Rate instead of B5</li>
                <li><strong>Absolute references:</strong> $B$5 for fixed lookup values</li>
                <li><strong>Clear sheet names:</strong> Assumptions, P&amp;L, Balance_Sheet</li>
                <li><strong>Formula linking:</strong> Every calculation connected by formulas</li>
              </ul>
            </div>
            <div className="text-yellow-800">
              <h4 className="font-medium mb-2">❌ AVOID:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Hard-coded numbers:</strong> Typing values directly into calculation cells</li>
                <li><strong>Circular references:</strong> Formulas that depend on themselves</li>
                <li><strong>Broken links:</strong> References to cells that don't exist</li>
                <li><strong>Manual updates:</strong> Having to retype numbers in multiple places</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Integration Process */}
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Sarah's Integration Journey</h3>
          
          <p className="leading-relaxed mb-4">
            Back at her desk after the investor meeting, Sarah opened her Excel model and began the integration process. 
            She started by creating an &quot;Assumptions&quot; sheet where she could control key variables like monthly 
            revenue growth (8%), customer acquisition cost ($150), and monthly churn rate (2%). 
          </p>

          <p className="leading-relaxed mb-4">
            Next, she linked her Income Statement to these assumptions. Instead of typing &quot;$50,000&quot; 
            for monthly revenue, she created a formula: <code>=Assumptions!Starting_Revenue * (1 + Assumptions!Growth_Rate)^Month_Number</code>. 
            Now when investors asked &quot;What if growth is 12% instead of 8%?&quot; Sarah could change one number 
            and watch her entire model update instantly.
          </p>

          <p className="leading-relaxed mb-6">
            The real breakthrough came when Sarah connected her Balance Sheet and Cash Flow Statement. 
            She realized that when revenue grows, accounts receivable grows too (customers who haven't 
            paid yet). This increase in receivables reduces cash flow, even though profits look good. 
            Her integrated model now showed this relationship automatically, giving investors confidence 
            that she understood the nuances of cash management.
          </p>
        </div>

        {/* Vocabulary Practice */}
        <FillInTheBlank
          sentences={vocabularySentences}
          title="Master the Integration Vocabulary"
          description="Complete these sentences to solidify your understanding of three-statement integration concepts."
          showWordList={true}
          randomizeWordOrder={true}
          showHints={true}
        />

        {/* Why Integration Matters for Investors */}
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-900 mb-3 text-xl">The Investor's Perspective</h3>
          <p className="text-indigo-800 leading-relaxed mb-4">
            When venture capitalists see an integrated financial model, they recognize several important qualities:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-indigo-800">
            <div>
              <h4 className="font-medium mb-2">🧠 Strategic Thinking</h4>
              <p className="text-sm leading-relaxed">
                The entrepreneur understands how different parts of the business affect each other, 
                not just isolated metrics.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🔄 Adaptability</h4>
              <p className="text-sm leading-relaxed">
                The model can quickly test different scenarios and assumptions, showing the entrepreneur 
                can pivot based on market conditions.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">📊 Financial Sophistication</h4>
              <p className="text-sm leading-relaxed">
                The technical quality demonstrates attention to detail and understanding of professional 
                financial modeling standards.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">🎯 Credibility</h4>
              <p className="text-sm leading-relaxed">
                Integrated models suggest the entrepreneur can build systems and processes that will 
                scale with the business.
              </p>
            </div>
          </div>
        </div>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}