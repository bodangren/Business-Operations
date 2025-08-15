import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { InventoryManager } from "@/components/business-simulations/InventoryManager"
import { Target, TrendingUp, Calculator, Briefcase, AlertTriangle, CheckCircle, DollarSign } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3] // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="max-w-6xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Independent Challenge Introduction */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Independent Challenge: Advanced Inventory Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-purple-900">
              <p className="mb-4">
                Now it's time to put your FIFO and LIFO knowledge to the ultimate test! You'll manage a complete 
                retail electronics business for 30 days, making strategic inventory decisions that directly impact 
                profitability, cash flow, and business success.
              </p>
              
              <p className="mb-4">
                This simulation goes beyond simple cost calculations - you'll experience the real-world complexity 
                of inventory management, including demand fluctuations, storage costs, market events, and the 
                constant balancing act between having enough inventory and tying up too much cash.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">Your Mission</h3>
                <p className="text-purple-800">
                  Achieve <strong>$2,000 profit</strong> in 30 days while managing three product lines: laptops, 
                  phones, and tablets. Each has different profit margins, demand patterns, and inventory challenges. 
                  Your success depends on smart purchasing decisions and understanding how inventory costs flow through 
                  to your bottom line.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strategic Planning Section */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Strategic Planning: Apply Your FIFO & LIFO Knowledge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-blue-900">
              <p className="mb-4">
                Before you start managing the business, think strategically about how inventory methods impact 
                your decisions:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Rising Price Scenarios
                  </h3>
                  <p className="text-sm text-green-700 mb-2">
                    If product costs increase during your 30-day period:
                  </p>
                  <ul className="text-sm text-green-600 space-y-1">
                    <li>• <strong>FIFO thinking:</strong> Lower COGS, higher profits, more taxes</li>
                    <li>• <strong>LIFO thinking:</strong> Higher COGS, lower profits, tax savings</li>
                    <li>• <strong>Cash impact:</strong> Consider both inventory investment and tax timing</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Inventory Turnover Strategy
                  </h3>
                  <p className="text-sm text-red-700 mb-2">
                    Fast-moving vs slow-moving inventory considerations:
                  </p>
                  <ul className="text-sm text-red-600 space-y-1">
                    <li>• <strong>Phones:</strong> High volume, quick turnover</li>
                    <li>• <strong>Laptops:</strong> High value, slower turnover</li>
                    <li>• <strong>Tablets:</strong> Seasonal demand patterns</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Key Decisions You'll Make</h3>
                <ul className="text-blue-800 space-y-1">
                  <li>• Which products to stock first with your limited starting cash ($1,000)</li>
                  <li>• How much inventory to carry to avoid stockouts vs minimize storage costs</li>
                  <li>• When to reorder and in what quantities</li>
                  <li>• How to respond to market events that affect demand and pricing</li>
                  <li>• How to balance profitability with cash flow management</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Simulation Component */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Interactive Business Simulation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-indigo-900 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                <strong>Challenge Instructions:</strong> Use the inventory management simulation below to practice 
                real-world business decisions. Pay attention to how your choices affect the key performance metrics 
                that businesses track daily.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Success Metrics to Monitor</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                  <div className="text-center">
                    <div className="font-medium text-indigo-800">Profit Target</div>
                    <div className="text-green-600 font-bold">$2,000</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-indigo-800">Cash Flow</div>
                    <div className="text-blue-600 font-bold">Stay Positive</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-indigo-800">Inventory Turnover</div>
                    <div className="text-purple-600 font-bold">Maximize</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium text-indigo-800">Storage Costs</div>
                    <div className="text-orange-600 font-bold">Minimize</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Inventory Manager Simulation */}
        <InventoryManager />

        {/* Analysis and Reflection Prompts */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Post-Simulation Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-yellow-900">
              <p className="mb-4">
                After completing your 30-day inventory management challenge, reflect on your experience and 
                connect it back to FIFO and LIFO principles:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-3">Performance Analysis</h3>
                  <div className="space-y-2 text-sm text-green-700">
                    <p><strong>Final Profit:</strong> $______</p>
                    <p><strong>Days Survived:</strong> _____ / 30</p>
                    <p><strong>Total Revenue:</strong> $______</p>
                    <p><strong>Total Expenses:</strong> $______</p>
                    <p><strong>Inventory Turnover Rate:</strong> _____ x</p>
                    <p><strong>Storage Costs Paid:</strong> $______</p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-3">Strategic Insights</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Which product line was most profitable for you?</li>
                    <li>• How did market events affect your strategy?</li>
                    <li>• What would you do differently in a second attempt?</li>
                    <li>• How did storage costs impact your decisions?</li>
                    <li>• When did you face the biggest cash flow challenges?</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">Connect to FIFO & LIFO Learning</h3>
                <ol className="list-decimal list-inside text-yellow-800 space-y-1">
                  <li>How would using FIFO vs LIFO have changed your reported profits in periods when product costs fluctuated?</li>
                  <li>If you were presenting your results to an investor, which inventory method would make your business look more attractive?</li>
                  <li>If you were trying to minimize taxes on your profits, which method would you prefer?</li>
                  <li>How does the speed of inventory turnover affect the importance of FIFO vs LIFO choice?</li>
                  <li>What other factors besides taxes should influence a real business's inventory method decision?</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Real-World Professional Context */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Professional Application: Sarah's Client Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-orange-900">
              <p className="mb-4">
                Your inventory management experience mirrors the challenges that Sarah's real clients face. 
                Consider how the strategic decisions you made in the simulation apply to different types of businesses 
                in Sarah's growing client portfolio:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Startup Tech Company</h4>
                  <p className="text-sm text-green-700">
                    Needs to show strong profits to attract investors, but also manage cash flow carefully. 
                    Would likely prefer FIFO in rising cost environments to maximize reported earnings.
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Established Retailer</h4>
                  <p className="text-sm text-blue-700">
                    Focuses on tax minimization and cash flow optimization. Would likely prefer LIFO in rising 
                    cost environments to reduce tax burden and improve cash position.
                  </p>
                </div>
                
                <div className="bg-white p-3 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-2">Family Restaurant</h4>
                  <p className="text-sm text-purple-700">
                    Deals with perishable inventory requiring FIFO for food safety, but might use LIFO for 
                    non-perishable supplies and equipment to optimize tax situation.
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200 mt-4">
                <p className="text-orange-800 font-medium">
                  <strong>Key Insight:</strong> The "best" inventory method isn't one-size-fits-all. It depends on 
                  business strategy, industry norms, growth stage, cash flow needs, and tax situation. Sarah's value 
                  as a consultant comes from understanding these nuances and helping each client choose the optimal approach.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}