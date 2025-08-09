import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, CheckCircle, AlertCircle } from "lucide-react";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[3]; // Independent Practice phase

const integrationScenarios = [
  {
    id: "s1",
    question: "Sarah's TechStart Solutions collects $25,000 in cash from customers who owed money from last month. Which statement integration principle best describes this transaction?",
    answers: [
      "Cash increases, Accounts Receivable decreases, no change to revenue (since it was already recorded)",
      "Revenue increases by $25,000 and Cash increases by $25,000",
      "Only the Cash Flow Statement is affected, not the other statements",
      "This transaction should be recorded as new sales revenue"
    ],
    explanation: "This is a collection of previously recorded receivables. The revenue was already recorded when the service was provided. Now we're just converting A/R to Cash, affecting the Balance Sheet and Cash Flow Statement but not the Income Statement."
  },
  {
    id: "s2",
    question: "If Sarah's model shows Net Income of $15,000 but Cash Flow from Operations of only $8,000, what is the most likely integrated explanation?",
    answers: [
      "Accounts Receivable increased and/or inventory increased, reducing cash despite profitable operations",
      "There's an error in the model because these numbers should always be equal",
      "The Cash Flow Statement is missing some revenue",
      "Depreciation expense was too high on the Income Statement"
    ],
    explanation: "Net Income and Operating Cash Flow often differ because income includes non-cash revenue (A/R increases) and non-cash expenses (depreciation). An integrated model shows these relationships clearly."
  },
  {
    id: "s3", 
    question: "In Sarah's integrated model, if she increases her monthly subscription price by 15%, which validation check confirms her model is working correctly?",
    answers: [
      "The Balance Sheet still balances (Assets = Liabilities + Equity) and Cash Flow ties to Balance Sheet cash changes",
      "All three statements show exactly the same 15% increase",
      "The model automatically creates new customers to offset the price increase",
      "Revenue increases but expenses stay exactly the same"
    ],
    explanation: "A properly integrated model maintains fundamental accounting relationships. The Balance Sheet equation must hold, and cash flow changes must reconcile to balance sheet cash changes, regardless of operational changes."
  },
  {
    id: "s4",
    question: "Sarah wants to test what happens if she delays customer payments by 30 days (customers pay later). In a properly integrated model, what should happen?",
    answers: [
      "Revenue recognition stays the same, but Accounts Receivable increases and Cash Flow from Operations decreases",
      "Revenue should decrease because cash collection is delayed",
      "Only the Cash Flow Statement changes, Income Statement stays identical",
      "The model should show higher profits because of the payment delay"
    ],
    explanation: "Integrated models show that revenue timing (when service is provided) is different from cash timing (when payment is received). This creates the working capital changes that affect cash flow but not profitability."
  }
];

export default function Unit08Lesson02Phase4() {
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
        
        {/* Introduction to Independent Practice */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Independent Mastery: Advanced Integration Scenarios
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            You've learned the fundamentals and practiced the basics. Now it's time to work independently 
            on more sophisticated integration challenges. These exercises mirror the kinds of complex scenarios 
            Sarah faced when building her investor-ready financial model, where multiple business changes 
            happen simultaneously and the model must handle them all correctly.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Your goal is to think like a professional financial modeler who understands not just what happens 
            to each statement individually, but how changes ripple through the entire integrated system. 
            Focus on the underlying business logic, not just mechanical formula construction.
          </p>
        </div>

        {/* Independent Practice Framework */}
        <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h3 className="font-semibold text-indigo-900 mb-4 text-xl flex items-center gap-2">
            <Target className="h-5 w-5" />
            Independent Practice Framework
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-100 text-blue-800">Level 1</Badge>
                <h4 className="font-medium text-indigo-900">Transaction Analysis</h4>
              </div>
              <p className="text-indigo-800 text-sm">
                Categorize how business transactions affect different statements and understand 
                the cash flow implications.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-100 text-green-800">Level 2</Badge>
                <h4 className="font-medium text-indigo-900">Scenario Integration</h4>
              </div>
              <p className="text-indigo-800 text-sm">
                Analyze complex business scenarios that affect multiple statement line items 
                simultaneously.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-indigo-200">
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-purple-100 text-purple-800">Level 3</Badge>
                <h4 className="font-medium text-indigo-900">Model Validation</h4>
              </div>
              <p className="text-indigo-800 text-sm">
                Ensure integrated models maintain mathematical consistency and business logic 
                across all scenarios.
              </p>
            </div>
          </div>
        </div>

        {/* Activity 1: Business Transaction Categorization */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Activity 1: Advanced Transaction Analysis</h3>
            <p className="text-gray-600">
              Categorize these startup transactions by their cash flow activities and understand their 
              statement impacts. Think about how Sarah would handle each situation in her integrated model.
            </p>
          </div>
          
          <BusinessTransactionCategorization />
        </div>

        {/* Activity 2: Complex Integration Scenarios */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Activity 2: Integration Logic Challenges</h3>
            <p className="text-gray-600">
              Test your understanding of how changes flow through Sarah's integrated financial model. 
              These scenarios require deep thinking about statement relationships.
            </p>
          </div>
          
          <ComprehensionCheck
            title="Advanced Integration Scenarios"
            description="Apply your knowledge to complex business situations that require integrated thinking."
            questions={integrationScenarios}
            showExplanations={true}
            allowRetry={true}
          />
        </div>

        {/* Activity 3: Formula Logic Workshop */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Activity 3: Formula Logic Workshop</h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Study these formula patterns from Sarah's model. For each one, identify what business logic 
            it represents and why the integration is necessary. Work through these independently, then 
            check your understanding with the explanations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900 text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Working Capital Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-3 rounded font-mono text-sm mb-3">
                    Cash_from_Operations = <br />
                    Net_Income + Depreciation<br />
                    - (Current_AR - Previous_AR)<br />
                    - (Current_Inventory - Previous_Inventory)<br />
                    + (Current_AP - Previous_AP)
                  </div>
                  <div className="text-blue-800 text-sm space-y-2">
                    <p><strong>Business Logic:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Net income isn't the same as cash because of timing differences</li>
                      <li>When A/R increases, we have revenue but no cash yet</li>
                      <li>When A/P increases, we have expenses but haven't paid cash yet</li>
                      <li>Depreciation is an expense but doesn't use cash</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900 text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Retained Earnings Flow
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-green-50 p-3 rounded font-mono text-sm mb-3">
                    Ending_Retained_Earnings = <br />
                    Beginning_Retained_Earnings<br />
                    + Net_Income<br />
                    - Dividends_Paid
                  </div>
                  <div className="text-green-800 text-sm space-y-2">
                    <p><strong>Business Logic:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Retained earnings accumulate profits over time</li>
                      <li>Each period's profit adds to the total</li>
                      <li>Dividends reduce what's "retained" in the business</li>
                      <li>This connects Income Statement to Balance Sheet</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <Card className="border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900 text-lg flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Cash Balance Reconciliation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-purple-50 p-3 rounded font-mono text-sm mb-3">
                    Ending_Cash_Balance = <br />
                    Beginning_Cash_Balance<br />
                    + Cash_from_Operations<br />
                    + Cash_from_Investing<br />
                    + Cash_from_Financing
                  </div>
                  <div className="text-purple-800 text-sm space-y-2">
                    <p><strong>Business Logic:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>This is the ultimate validation check</li>
                      <li>Cash Flow Statement must tie to Balance Sheet</li>
                      <li>Every dollar of cash change must be explained</li>
                      <li>Proves the model's mathematical integrity</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-900 text-lg flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Growth-Driven Receivables
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-orange-50 p-3 rounded font-mono text-sm mb-3">
                    Accounts_Receivable = <br />
                    Monthly_Revenue * <br />
                    Average_Collection_Days / 30
                  </div>
                  <div className="text-orange-800 text-sm space-y-2">
                    <p><strong>Business Logic:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>A/R grows automatically with revenue growth</li>
                      <li>Collection timing affects cash flow, not profitability</li>
                      <li>Higher growth can actually reduce cash flow</li>
                      <li>Shows why profitable companies can run out of cash</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Self-Assessment Checklist */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-4 text-xl">Self-Assessment Checklist</h3>
          <p className="text-yellow-800 mb-4">
            Before moving to the next phase, ensure you can confidently answer "yes" to these integration mastery questions:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-2">Conceptual Understanding</h4>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I understand why Net Income ≠ Cash Flow from Operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I can explain how Retained Earnings connects Income Statement to Balance Sheet</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I recognize which transactions affect which statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I understand the validation checks for integrated models</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-900 mb-2">Application Skills</h4>
              <ul className="space-y-2 text-yellow-800 text-sm">
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I can categorize complex business transactions by cash flow activity</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I can predict how business changes affect multiple statements</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I understand the business logic behind integration formulas</span>
                </li>
                <li className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1" />
                  <span>I can identify what makes a financial model "investor-ready"</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Professional Standards Reminder */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3 text-xl">Remember: Professional Standards</h3>
          <p className="text-blue-800 leading-relaxed mb-4">
            As you work through these exercises, keep in mind that Sarah's success with investors wasn't 
            just about getting the right answers - it was about demonstrating professional-level thinking. 
            Investors look for entrepreneurs who:
          </p>
          <ul className="list-disc list-inside space-y-2 text-blue-800">
            <li><strong>Think systematically:</strong> Understand how business decisions affect multiple areas</li>
            <li><strong>Build for flexibility:</strong> Create models that can adapt to changing assumptions</li>
            <li><strong>Validate rigorously:</strong> Ensure mathematical consistency and business logic</li>
            <li><strong>Communicate clearly:</strong> Explain the reasoning behind model structure and assumptions</li>
          </ul>
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