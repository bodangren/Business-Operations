import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import InventoryFlowDiagram from "@/components/drag-drop-exercises/InventoryFlowDiagram"
import { Users, MessageSquare, Lightbulb, Target, BarChart3, Calculator } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2] // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Introduction to Guided Practice */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Hands-On Practice: FIFO & LIFO in Action
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-green-900">
              <p className="mb-4">
                Now it's time to get your hands dirty with real inventory flow scenarios! You'll practice arranging 
                inventory costs using both FIFO and LIFO methods, just like businesses do every day when calculating 
                their Cost of Goods Sold.
              </p>
              
              <p className="mb-4">
                Below you'll find an interactive inventory flow diagram with three different business scenarios. 
                Each scenario presents a realistic situation where inventory costs have changed over time, and you'll 
                need to decide which costs to assign to sales.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">What You'll Practice</h3>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Drag and drop inventory lots to arrange them in FIFO or LIFO order</li>
                  <li>See real-time calculations of Cost of Goods Sold and ending inventory</li>
                  <li>Compare the financial impact of different methods on the same business</li>
                  <li>Work with authentic business scenarios from technology, food, and automotive industries</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transition to Interactive Activity */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="pt-6">
            <div className="text-blue-900 text-center">
              <p className="text-lg leading-relaxed">
                <strong>👇 Scroll down to the interactive activity below.</strong> You'll find a 
                <span className="font-semibold text-indigo-700"> "Today's Activity: Complete All 5 Steps"</span> guide 
                with clear instructions for what to do at each step.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Flow Diagram Component */}
        <InventoryFlowDiagram />

        {/* After-Activity Discussion - Complements the component's reflection questions */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              After Completing the Activity: Class Discussion
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-3">
              Once you've completed the 5-step activity above and answered the reflection questions, 
              discuss these extension questions with your partner or table group:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Industry Differences</h4>
                <p className="text-sm text-purple-800">
                  How do weather events and global commodity prices affect inventory decisions for the 
                  coffee café scenario? Why might a small business choose differently than a large corporation?
                </p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Inventory Turnover</h4>
                <p className="text-sm text-purple-800">
                  How does inventory turnover speed (how quickly you sell products) impact the 
                  FIFO vs LIFO decision? What would you recommend for a business with very fast turnover?
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bonus Group Activity - For the Auto Parts Dealer scenario */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              Bonus: Group Challenge with Auto Parts Dealer Scenario
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                <strong>If you completed the "Bonus Challenge"</strong> in the activity above using the 
                "Auto Parts Dealer" scenario, discuss these questions with your table group:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Group Discussion Questions</h3>
                <ol className="list-decimal list-inside text-indigo-800 space-y-2">
                  <li>What was the dollar difference between FIFO and LIFO Cost of Goods Sold in this scenario?</li>
                  <li>Which method would you recommend to this auto parts dealer and why?</li>
                  <li>How might <strong>seasonal demand patterns</strong> (busy spring/summer, slower fall/winter) affect their inventory strategy?</li>
                  <li>What other factors should businesses consider beyond just tax savings when choosing an inventory method?</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Connection */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Real-World Application: Sarah's Client Consulting
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-yellow-900">
              <p className="mb-4">
                Imagine Sarah receives a call from a potential client - a growing e-commerce business that's been 
                using FIFO but is considering switching to LIFO due to rising product costs. The owner asks, 
                "Can you help us understand the financial impact of this change?"
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">Your Challenge</h3>
                <p className="text-yellow-800 mb-3">
                  Using what you've learned from the interactive exercises, prepare talking points for Sarah to 
                  discuss with this client:
                </p>
                <ul className="list-disc list-inside text-yellow-800 space-y-1">
                  <li>Key questions Sarah should ask about their business situation</li>
                  <li>Pros and cons of switching from FIFO to LIFO</li>
                  <li>How to quantify the potential impact on their financial statements</li>
                  <li>What additional factors they should consider beyond just taxes</li>
                </ul>
              </div>
              
              <p className="text-yellow-800">
                <strong>Next Phase Preview:</strong> In the Independent Practice phase, you'll work through complex 
                scenarios and create your own inventory flow models, just like Sarah would build for her clients.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}