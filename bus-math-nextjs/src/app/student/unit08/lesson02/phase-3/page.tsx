import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { FinancialStatementMatching } from "@/components/drag-drop-exercises/FinancialStatementMatching";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, ArrowRight, Link as LinkIcon } from "lucide-react";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[2]; // Guided Practice phase

export default function Unit08Lesson02Phase3() {
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
        
        {/* Introduction to Guided Practice */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Building the Connections: Step-by-Step Integration Practice
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Now it's time to put theory into practice. Sarah's integration success didn't happen overnight - 
            it required methodically understanding which financial line items belong to which statements, 
            and then learning how to link them with formulas. You'll start with the foundational skill 
            of statement categorization, then practice the linking concepts that make integration possible.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Remember, the goal isn't just technical accuracy - it's building the mental models that help you 
            think like a strategic business owner who sees how every financial decision connects to the bigger picture.
          </p>
        </div>

        {/* Integration Roadmap */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl flex items-center gap-2">
            <LinkIcon className="h-5 w-5" />
            The Integration Roadmap
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
              <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
              <div>
                <h4 className="font-medium text-gray-900">Categorize Line Items</h4>
                <p className="text-sm text-gray-600">Know which statement each item belongs to</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
              <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
              <div>
                <h4 className="font-medium text-gray-900">Link with Formulas</h4>
                <p className="text-sm text-gray-600">Connect statements with cross-sheet references</p>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <ArrowRight className="h-5 w-5 text-gray-400 rotate-90" />
          </div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-3 p-3 bg-white rounded-lg border">
              <div className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
              <div>
                <h4 className="font-medium text-gray-900">Validate Integration</h4>
                <p className="text-sm text-gray-600">Ensure mathematical consistency across statements</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statement Matching Exercise */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Practice: Financial Statement Categorization</h3>
            <p className="text-gray-600">
              Before you can integrate statements, you need to master which line items belong where. 
              This drag-and-drop exercise will help you build that foundation.
            </p>
          </div>
          
          <FinancialStatementMatching />
        </div>

        {/* Think-Pair-Share: Integration Concepts */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Think-Pair-Share: Integration Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-green-900 mb-3">
              Discussion Prompt (5 minutes):
            </p>
            <p className="text-green-800 mb-4">
              You've just categorized financial line items into their proper statements. Now think about 
              the connections between statements. Discuss with a partner:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">🔗 Connection Questions</h4>
                <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                  <li>Which income statement items directly affect the balance sheet?</li>
                  <li>How does "Net Income" connect to "Retained Earnings"?</li>
                  <li>Why might cash flow from operations differ from net income?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">💡 Strategic Thinking</h4>
                <ul className="list-disc list-inside space-y-1 text-green-800 text-sm">
                  <li>If sales increase by 20%, what other line items would change?</li>
                  <li>How would hiring 3 new employees affect all three statements?</li>
                  <li>What validation checks ensure your model is working correctly?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Integration Examples */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl">Sarah's Integration Examples</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Example 1: Revenue Growth Impact</h4>
              <p className="text-blue-800 text-sm mb-3">
                When Sarah increases her monthly recurring revenue assumption from $45,000 to $55,000:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-green-50 p-2 rounded border">
                  <strong className="text-green-800">Income Statement:</strong>
                  <p className="text-green-700">Revenue increases by $10,000/month</p>
                </div>
                <div className="bg-blue-50 p-2 rounded border">
                  <strong className="text-blue-800">Balance Sheet:</strong>
                  <p className="text-blue-700">Accounts Receivable increases (customers owe more)</p>
                </div>
                <div className="bg-purple-50 p-2 rounded border">
                  <strong className="text-purple-800">Cash Flow:</strong>
                  <p className="text-purple-700">Operating cash flow adjusted for A/R change</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Example 2: Equipment Purchase</h4>
              <p className="text-blue-800 text-sm mb-3">
                When Sarah buys $15,000 worth of new computers for her team:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                <div className="bg-green-50 p-2 rounded border">
                  <strong className="text-green-800">Income Statement:</strong>
                  <p className="text-green-700">Depreciation expense increases over time</p>
                </div>
                <div className="bg-blue-50 p-2 rounded border">
                  <strong className="text-blue-800">Balance Sheet:</strong>
                  <p className="text-blue-700">Equipment asset increases, Cash decreases</p>
                </div>
                <div className="bg-purple-50 p-2 rounded border">
                  <strong className="text-purple-800">Cash Flow:</strong>
                  <p className="text-purple-700">Shows $15,000 investing activity outflow</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Formula Preview */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-4 text-xl">Formula Preview: Making the Connections</h3>
          <p className="text-yellow-800 mb-4 leading-relaxed">
            In the next phase, you'll practice building these exact formula connections. Here's a preview 
            of what integrated formulas look like:
          </p>
          
          <div className="space-y-3">
            <div className="bg-white p-3 rounded-lg border border-yellow-300 font-mono text-sm">
              <div className="text-yellow-900 font-semibold mb-1">Balance Sheet - Retained Earnings:</div>
              <div className="text-gray-700">=Previous_Retained_Earnings + Income_Statement!Net_Income</div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-yellow-300 font-mono text-sm">
              <div className="text-yellow-900 font-semibold mb-1">Cash Flow - Operating Activities:</div>
              <div className="text-gray-700">=Income_Statement!Net_Income + Depreciation - (Current_AR - Previous_AR)</div>
            </div>
            
            <div className="bg-white p-3 rounded-lg border border-yellow-300 font-mono text-sm">
              <div className="text-yellow-900 font-semibold mb-1">Balance Sheet - Cash Balance:</div>
              <div className="text-gray-700">=Previous_Cash + Cash_Flow_Statement!Net_Change_in_Cash</div>
            </div>
          </div>
          
          <p className="text-yellow-800 mt-4 text-sm">
            <strong>Notice:</strong> Every formula references other sheets and creates automatic updates. 
            This is what transforms static statements into a dynamic financial model!
          </p>
        </div>

        {/* Collaborative Challenge */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Challenge: Integration Planning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-3">
              Group Activity (3 minutes):
            </p>
            <p className="text-purple-800 mb-4">
              Work with your team to plan Sarah's next integration steps. Choose one scenario and discuss:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">📈 Scenario A: Rapid Growth</h4>
                <p className="text-purple-800 text-sm mb-2">
                  Sarah lands a huge client and revenue doubles in one month.
                </p>
                <ul className="list-disc list-inside space-y-1 text-purple-700 text-xs">
                  <li>What line items change on each statement?</li>
                  <li>Which connections need the strongest formulas?</li>
                  <li>What might break if not properly integrated?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">💰 Scenario B: Investment Round</h4>
                <p className="text-purple-800 text-sm mb-2">
                  Sarah receives $500,000 in funding and needs to track it properly.
                </p>
                <ul className="list-disc list-inside space-y-1 text-purple-700 text-xs">
                  <li>Where does the investment appear on each statement?</li>
                  <li>How do increased cash reserves affect operations?</li>
                  <li>What investor metrics need to be calculated?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

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