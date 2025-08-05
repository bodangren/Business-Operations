import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Target, Clock, TrendingUp, AlertTriangle } from "lucide-react"

export default function Phase4Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 4)!

  // Independent practice with NEW business scenarios - different from guided practice
  const restaurantBottleneckItems = [
    { id: '1', content: 'Manually counting daily cash register receipts', matchId: '5', hint: 'Daily revenue reconciliation bottleneck' },
    { id: '2', content: 'Calculating employee tip distributions by hand', matchId: '6', hint: 'Payroll processing delay' },
    { id: '3', content: 'Tracking inventory usage with paper forms', matchId: '7', hint: 'Stock management inefficiency' },
    { id: '4', content: 'Entering vendor invoices one by one', matchId: '8', hint: 'Accounts payable bottleneck' },
    { id: '5', content: 'Revenue Processing Bottleneck', matchId: '1' },
    { id: '6', content: 'Payroll Distribution Delay', matchId: '2' },
    { id: '7', content: 'Inventory Tracking Gap', matchId: '3' },
    { id: '8', content: 'Invoice Processing Backlog', matchId: '4' }
  ]

  const ecommerceScalingItems = [
    { id: '9', content: 'Processing 500+ orders daily takes 6 hours', matchId: '13', hint: 'Order volume creates time pressure' },
    { id: '10', content: 'Manually updating inventory across 3 platforms', matchId: '14', hint: 'Multi-channel complexity' },
    { id: '11', content: 'Customer service team overwhelmed with order status calls', matchId: '15', hint: 'Communication inefficiency' },
    { id: '12', content: 'Monthly financial reports take a full week to complete', matchId: '16', hint: 'Reporting delay impact' },
    { id: '13', content: 'Volume Scalability Crisis', matchId: '9' },
    { id: '14', content: 'Multi-Platform Sync Problem', matchId: '10' },
    { id: '15', content: 'Customer Communication Gap', matchId: '11' },
    { id: '16', content: 'Decision-Making Delay', matchId: '12' }
  ]

  const automationPrinciplesItems = [
    { id: '1', content: 'High-volume repetitive data entry', matchId: '5', hint: 'Tasks done the same way many times' },
    { id: '2', content: 'Error-prone manual calculations', matchId: '6', hint: 'Mathematical operations with mistake risk' },
    { id: '3', content: 'Time-sensitive reporting deadlines', matchId: '7', hint: 'Regular deadlines that create pressure' },
    { id: '4', content: 'Complex decision-making with judgment calls', matchId: '8', hint: 'Requires human expertise and experience' },
    { id: '5', content: 'High Automation Priority', matchId: '1' },
    { id: '6', content: 'High Automation Priority', matchId: '2' },
    { id: '7', content: 'High Automation Priority', matchId: '3' },
    { id: '8', content: 'Keep Human Control', matchId: '4' }
  ]

  const automationAssessmentQuestions = [
    {
      id: 'q1',
      question: 'Which of the following represents the highest-value automation opportunity for Sarah\'s business?',
      answers: [
        'Eliminating manual data entry through direct bank feeds and automated transaction categorization',
        'Buying more powerful computer hardware to speed up calculations',
        'Hiring an assistant to help with the manual processes',
        'Working longer hours to get through the closing faster'
      ],
      explanation: 'Eliminating manual data entry addresses the root cause of errors and time consumption, providing the highest return on automation investment.'
    },
    {
      id: 'q2', 
      question: 'What is the primary business risk of continuing with manual month-end processes as TechStart Solutions grows?',
      answers: [
        'The process will become exponentially more time-consuming and error-prone with more transactions',
        'Sarah will need to buy more file cabinets for paper storage',
        'The computer might run out of storage space',
        'Clients might prefer digital invoices over paper ones'
      ],
      explanation: 'Manual processes don\'t scale efficiently - doubling transactions more than doubles the time and complexity, creating an unsustainable growth bottleneck.'
    },
    {
      id: 'q3',
      question: 'How does automation create competitive advantage beyond just time savings?',
      answers: [
        'It enables real-time financial reporting, faster decision-making, and professional credibility with investors',
        'It makes the business look more high-tech and modern to customers', 
        'It reduces the need for office space and equipment',
        'It allows working from anywhere in the world'
      ],
      explanation: 'Automation provides strategic advantages: real-time insights for better decisions, professional systems that impress investors, and scalable processes that support rapid growth.'
    }
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
        {/* Introduction to Independent Practice */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Target className="h-6 w-6" />
              Independent Practice: Automation Analysis Skills
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                Now you'll work independently to master the key skills from this lesson: identifying process bottlenecks, analyzing automation opportunities, and building business cases for technology investments. These are the same analytical skills Sarah used to transform her "weekend nightmare" into a two-hour automated process.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Skills You're Practicing</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>• <strong>Process Bottleneck Identification:</strong> Spotting the steps that consume the most time and create the most errors</li>
                  <li>• <strong>Cost-Benefit Analysis:</strong> Understanding the true cost of manual processes beyond just time</li>
                  <li>• <strong>Automation Opportunity Assessment:</strong> Evaluating which improvements would provide the highest return on investment</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Independent Skill Practice 1: Restaurant Process Analysis */}
        <Card className="border-red-200 bg-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Independent Analysis 1: Restaurant Operations Bottlenecks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <p className="text-red-700 leading-relaxed">
                Apply your bottleneck identification skills to a new business scenario. "Mario's Bistro" is a growing restaurant facing operational challenges similar to Sarah's month-end problems. Identify where their manual processes are creating the biggest bottlenecks.
              </p>
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <p className="text-red-800 font-medium text-sm">
                  🎯 <strong>Your Challenge:</strong> Analyze Mario's daily operations and match each manual process with its bottleneck type.
                </p>
              </div>
            </div>
            <DragAndDrop
              title="Restaurant Process Bottleneck Analysis"
              description="Match each manual process at Mario's Bistro with its primary bottleneck category"
              leftColumnTitle="Mario's Manual Processes"
              rightColumnTitle="Bottleneck Categories"
              items={restaurantBottleneckItems}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Independent Skill Practice 2: E-commerce Scaling Challenges */}
        <Card className="border-orange-200 bg-orange-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Independent Analysis 2: E-commerce Growth Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <p className="text-orange-700 leading-relaxed">
                "TechGear Online" started as a small e-commerce business but is now struggling with growth. Apply your cost-benefit analysis skills to identify how their manual processes are limiting scalability and creating hidden costs.
              </p>
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <p className="text-orange-800 font-medium text-sm">
                  🎯 <strong>Your Challenge:</strong> Connect each scaling challenge with its business impact category.
                </p>
              </div>
            </div>
            <DragAndDrop
              title="E-commerce Scaling Analysis" 
              description="Match TechGear Online's operational challenges with their business impact types"
              leftColumnTitle="TechGear's Challenges"
              rightColumnTitle="Business Impact Types"
              items={ecommerceScalingItems}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Independent Skill Practice 3: Automation Prioritization */}
        <Card className="border-purple-200 bg-purple-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Clock className="h-6 w-6" />
              Independent Analysis 3: Automation Priority Assessment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 mb-6">
              <p className="text-purple-700 leading-relaxed">
                Not all business processes should be automated. Apply your analytical skills to determine which tasks are good candidates for automation and which should remain under human control. This prioritization skill is crucial for successful automation projects.
              </p>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-purple-800 font-medium text-sm">
                  🎯 <strong>Your Challenge:</strong> Classify each business task as either a high automation priority or one that should keep human control.
                </p>
              </div>
            </div>
            <DragAndDrop
              title="Automation Priority Decision Making"
              description="Determine which business processes should be automated vs. kept under human control"
              leftColumnTitle="Business Process Types"
              rightColumnTitle="Automation Strategy"
              items={automationPrinciplesItems}
              showHints={true}
              shuffleItems={true}
            />
          </CardContent>
        </Card>

        {/* Independent Assessment: Automation Strategy */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ComprehensionCheck
              title="Independent Automation Analysis Assessment"
              description="Apply your analytical skills to evaluate automation opportunities and business impact"
              questions={automationAssessmentQuestions}
              showExplanations={true}
              allowRetry={true}
            />
          </CardContent>
        </Card>

        {/* Self-Assessment and Preparation */}
        <Card className="border-indigo-200 bg-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-indigo-800">Independent Practice Self-Check</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                Before moving to the formal assessment, evaluate your mastery of these automation analysis skills:
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Process Analysis</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I can identify process bottlenecks</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I understand manual process risks</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Cost-Benefit Skills</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I can identify hidden costs</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I understand opportunity costs</span>
                    </label>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <h4 className="font-semibold text-indigo-800 mb-2">Strategic Thinking</h4>
                  <div className="space-y-2 text-sm">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I can prioritize automation opportunities</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded border-indigo-300" />
                      <span className="text-indigo-700">I understand competitive advantages</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-100 p-4 rounded-lg">
                <p className="text-yellow-800 text-sm font-medium">
                  ✅ <strong>Ready for Assessment:</strong> If you can check most boxes above, you've mastered the key analytical skills from this lesson and are prepared for the formal assessment in Phase 5.
                </p>
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