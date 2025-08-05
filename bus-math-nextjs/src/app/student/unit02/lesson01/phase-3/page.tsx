import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Button } from "@/components/ui/button"
import { Timer, Users, Target } from "lucide-react"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  const processAnalysisItems = [
    { id: '1', content: 'Manual data entry from receipts', matchId: '5', hint: 'Time-consuming and error-prone' },
    { id: '2', content: 'Cross-referencing bank statements', matchId: '6', hint: 'Requires careful matching' },
    { id: '3', content: 'Hunting for error sources', matchId: '7', hint: 'Takes hours to find small mistakes' },
    { id: '4', content: 'Reconciling account balances', matchId: '8', hint: 'Must balance to the penny' },
    { id: '5', content: 'High Error Risk', matchId: '1' },
    { id: '6', content: 'Tedious Matching', matchId: '2' },
    { id: '7', content: 'Frustrating Debugging', matchId: '3' },
    { id: '8', content: 'Precise Calculations', matchId: '4' }
  ]

  const automationOpportunities = [
    { id: '9', content: 'Automatic bank transaction import', matchId: '13', hint: 'Direct data connection' },
    { id: '10', content: 'Formula-based error checking', matchId: '14', hint: 'Real-time validation' },
    { id: '11', content: 'Conditional formatting alerts', matchId: '15', hint: 'Visual error detection' },
    { id: '12', content: 'One-click reconciliation', matchId: '16', hint: 'Automated matching' },
    { id: '13', content: 'Eliminates Manual Entry', matchId: '9' },
    { id: '14', content: 'Prevents Human Error', matchId: '10' },
    { id: '15', content: 'Immediate Feedback', matchId: '11' },
    { id: '16', content: 'Saves Hours of Work', matchId: '12' }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction to Guided Practice */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              Guided Practice: Analyzing the Manual Process
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Now that you understand Sarah's "weekend nightmare," it's time to dive deeper into the specific problems that make manual month-end closing so time-consuming and error-prone. By breaking down each step of the manual process, you'll better understand why automation is so valuable and where the biggest opportunities for improvement exist.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">The Anatomy of a Manual Month-End Close</h3>
              
              <p className="text-base leading-relaxed mb-4">
                Sarah's "complete nightmare" wasn't just bad luck—it was the predictable result of trying to manage growing business complexity with manual processes. Let's examine what she had to do:
              </p>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-6">
                <h4 className="font-semibold text-red-800 mb-3">The Manual Process Breakdown:</h4>
                <ul className="space-y-2 text-red-700">
                  <li>• <strong>Data Collection:</strong> Gather all receipts, invoices, and bank statements</li>
                  <li>• <strong>Manual Entry:</strong> Type each transaction into the ledger system</li>
                  <li>• <strong>Cross-Reference:</strong> Match ledger entries to bank statement items</li>
                  <li>• <strong>Error Detection:</strong> Hunt for discrepancies and typos</li>
                  <li>• <strong>Correction:</strong> Fix errors and re-check all calculations</li>
                  <li>• <strong>Reconciliation:</strong> Ensure all accounts balance properly</li>
                </ul>
              </div>

              <p className="text-base leading-relaxed mb-6">
                Each of these steps creates opportunities for error and consumes valuable time. When Sarah found "dozens of tiny errors," she experienced the compounding effect of manual processes: one small mistake can throw off multiple accounts, requiring extensive detective work to identify and fix.
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-6">
                <h4 className="font-semibold text-green-800 mb-3">The Power of Automation:</h4>
                <p className="text-green-700 leading-relaxed">
                  Automation doesn't just make processes faster—it makes them more reliable. When a machine performs calculations, it doesn't get tired, doesn't make typos, and doesn't skip steps. This reliability is what allows businesses to scale without proportionally increasing their administrative overhead.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Shoebox Receipt Challenge Setup */}
        <Card className="border-orange-200 bg-orange-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Timer className="h-6 w-6" />
              The Shoebox Receipt Challenge
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-orange-700 leading-relaxed">
                Before we analyze automation solutions, you need to experience the manual process firsthand. Your teacher will provide your team with a "shoebox" of mock business receipts and transactions that need to be processed for month-end closing.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Your Challenge:
                  </h4>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Sort receipts by category (office supplies, meals, travel, etc.)</li>
                    <li>• Enter each transaction into a simple ledger</li>
                    <li>• Calculate totals for each category</li>
                    <li>• Verify that your entries match the receipt amounts</li>
                    <li>• Record how long each step takes</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-orange-800 mb-3">Expected Frustrations:</h4>
                  <ul className="space-y-2 text-orange-700 text-sm">
                    <li>• Hard-to-read handwriting on receipts</li>
                    <li>• Unclear expense categories</li>
                    <li>• Math errors that don't balance</li>
                    <li>• Time pressure and tedious repetition</li>
                    <li>• The urge to rush and make mistakes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm font-medium">
                  ⏱️ <strong>Time Tracking is Key:</strong> Keep careful notes about how long each step takes. This data will help you understand exactly why Sarah's process took an entire weekend and why automation is so valuable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Process Analysis Drag and Drop */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <DragAndDrop
              title="Manual Process Analysis"
              description="Match each manual process step with its primary challenge"
              leftColumnTitle="Manual Process Steps"
              rightColumnTitle="Primary Challenges"
              items={processAnalysisItems}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Automation Opportunities */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <DragAndDrop
              title="Automation Solution Matching"
              description="Connect each automation technology with its primary benefit"
              leftColumnTitle="Automation Technologies"
              rightColumnTitle="Primary Benefits"
              items={automationOpportunities}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Think-Pair-Share: Team Formation */}
        <Card className="border-purple-200 bg-purple-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-6 w-6" />
              Think-Pair-Share: Automation Focus Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-purple-700 font-medium">
                After completing the Shoebox Receipt Challenge, discuss with your team:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">Step 1: Individual Reflection (2 minutes)</h4>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Which step of the manual process was most frustrating for you?</li>
                    <li>• Where did your team make the most errors?</li>
                    <li>• What took much longer than you expected?</li>
                    <li>• Which automation would have helped you most?</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">Step 2: Team Discussion (5 minutes)</h4>
                  <ul className="space-y-2 text-purple-700 text-sm">
                    <li>• Compare your individual experiences</li>
                    <li>• Identify the top 3 automation priorities</li>
                    <li>• Choose your team's focus area for the Month-End Wizard project</li>
                    <li>• Discuss team roles and responsibilities</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Automation Focus Area Options:</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-green-700 text-sm">
                  <span className="bg-green-200 px-2 py-1 rounded">• Accruals</span>
                  <span className="bg-green-200 px-2 py-1 rounded">• Deferrals</span>
                  <span className="bg-green-200 px-2 py-1 rounded">• Depreciation</span>
                  <span className="bg-green-200 px-2 py-1 rounded">• Closing Entries</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}