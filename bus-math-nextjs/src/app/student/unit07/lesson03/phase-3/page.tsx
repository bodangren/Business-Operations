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

        {/* Interactive Exercise */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              Interactive Inventory Flow Exercise
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-900 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Instructions:</strong> Use the interactive diagram below to practice FIFO and LIFO calculations. 
                Start with the "TechZone Laptop Sales" scenario, then try the other businesses to see how different 
                industries handle inventory challenges.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Step-by-Step Guidance</h3>
                <ol className="list-decimal list-inside text-blue-800 space-y-1">
                  <li>Choose FIFO or LIFO method at the top of the diagram</li>
                  <li>Read the business scenario to understand the context</li>
                  <li>Drag inventory lots from "Available" to "Arrangement" in the correct order</li>
                  <li>Watch the real-time Cost of Goods Sold calculation update</li>
                  <li>Click "Check Arrangement" to verify your understanding</li>
                  <li>Switch methods to compare FIFO vs LIFO results</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Flow Diagram Component */}
        <InventoryFlowDiagram />

        {/* Think-Pair-Share Activities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk #1
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-purple-800 mb-3">
                After trying both FIFO and LIFO in the laptop scenario, discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>Which method resulted in higher Cost of Goods Sold? Why?</li>
                <li>If you were the laptop store owner, which method would you prefer and why?</li>
                <li>How might your choice change if laptop prices were falling instead of rising?</li>
                <li>What would you tell an investor about your inventory method choice?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Turn and Talk #2
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-orange-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-orange-800 mb-3">
                Think about the coffee café scenario and share with your partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-orange-800">
                <li>How do weather events and global commodity prices affect inventory decisions?</li>
                <li>What advice would you give to café owners about inventory management?</li>
                <li>Why might a small business choose differently than a large corporation?</li>
                <li>How does inventory turnover speed impact the FIFO vs LIFO decision?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Collaborative Analysis */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              Collaborative Analysis Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                Work with your table group to complete this analysis using the interactive diagram:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-3">Group Challenge: Complete the Comparison Chart</h3>
                <p className="text-indigo-800 mb-3">
                  Using the "Auto Parts Dealer" scenario, have each team member try different approaches and 
                  record your findings:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium text-indigo-900">FIFO Results:</h4>
                    <ul className="text-sm text-indigo-800 space-y-1">
                      <li>• Cost of Goods Sold: $_____</li>
                      <li>• Ending Inventory Value: $_____</li>
                      <li>• Gross Profit (if sales = $25,000): $_____</li>
                      <li>• Tax Impact: Higher/Lower than LIFO?</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-indigo-900">LIFO Results:</h4>
                    <ul className="text-sm text-indigo-800 space-y-1">
                      <li>• Cost of Goods Sold: $_____</li>
                      <li>• Ending Inventory Value: $_____</li>
                      <li>• Gross Profit (if sales = $25,000): $_____</li>
                      <li>• Tax Impact: Higher/Lower than FIFO?</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Group Discussion Questions</h3>
                <ol className="list-decimal list-inside text-indigo-800 space-y-1">
                  <li>What was the dollar difference between FIFO and LIFO Cost of Goods Sold?</li>
                  <li>Which method would you recommend to this auto parts dealer and why?</li>
                  <li>How might seasonal demand patterns affect their inventory strategy?</li>
                  <li>What other factors should businesses consider beyond just tax savings?</li>
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