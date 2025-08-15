import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Package, ArrowRight, Calculator, TrendingUp, TrendingDown, DollarSign } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1] // Introduction phase

const vocabularyExercise = [
  {
    id: "vocab1",
    text: "FIFO stands for {blank}, which means the first items purchased are the first items sold.",
    answer: "First-In, First-Out",
    hint: "Think about the order: what comes in first, goes out first",
    category: "Definitions"
  },
  {
    id: "vocab2", 
    text: "LIFO stands for {blank}, which means the last items purchased are the first items sold.",
    answer: "Last-In, First-Out",
    hint: "The opposite of FIFO - newest inventory is sold first",
    category: "Definitions"
  },
  {
    id: "vocab3",
    text: "When prices are rising, FIFO results in {blank} Cost of Goods Sold compared to LIFO.",
    answer: "lower",
    alternativeAnswers: ["smaller", "reduced"],
    hint: "FIFO uses older, cheaper costs when prices are increasing",
    category: "Price Impact"
  },
  {
    id: "vocab4",
    text: "When prices are rising, LIFO results in {blank} Cost of Goods Sold compared to FIFO.",
    answer: "higher",
    alternativeAnswers: ["greater", "increased"],
    hint: "LIFO uses newer, more expensive costs when prices are increasing", 
    category: "Price Impact"
  },
  {
    id: "vocab5",
    text: "A business using LIFO in a rising price environment will typically pay {blank} taxes than a business using FIFO.",
    answer: "lower",
    alternativeAnswers: ["less", "reduced", "smaller"],
    hint: "Higher COGS means lower profits, which means lower taxes",
    category: "Tax Impact"
  },
  {
    id: "vocab6",
    text: "The inventory method that makes the most sense for perishable goods like milk or bread is {blank}.",
    answer: "FIFO",
    hint: "You want to sell the oldest items first before they expire",
    category: "Practical Application"
  }
]

export default function Phase2Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Core Concept Introduction */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Package className="h-6 w-6" />
              Understanding Inventory Cost Flow Assumptions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-blue-900">
              <p className="mb-4">
                Businesses need to determine which inventory costs to use when calculating their <strong>Cost of Goods Sold (COGS)</strong>. 
                This matters tremendously when inventory costs change over time - and in the real world, they almost always do!
              </p>
              
              <p className="mb-4">
                Think of inventory like a stack of pancakes. Each "pancake" represents inventory purchased at different times 
                and prices. When you need to use inventory (sell products), which pancake do you take first? The one from 
                the bottom of the stack, or the one from the top? This choice determines your entire cost flow assumption.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">Why This Choice Matters</h3>
                <p className="text-blue-800">
                  In Maria's bakery example, choosing between her $2, $3, or $4 flour can mean the difference between 
                  reporting a $50 profit or a $150 profit on the same batch of croissants. That's a 200% difference!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FIFO Detailed Explanation */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              FIFO: First-In, First-Out Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-green-900">
              <p className="mb-4">
                FIFO assumes that the <strong>first items you buy are the first items you sell</strong>. 
                This is like a grocery store rotating their milk - they want to sell the oldest milk first 
                so it doesn't expire.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-green-200 mb-4">
                <h3 className="font-semibold text-green-900 mb-3">FIFO Example: Maria's Bakery</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 px-2 py-1 rounded text-sm">January:</span>
                    <span>100 lbs flour at $2.00/lb = $200 total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-200 px-2 py-1 rounded text-sm">February:</span>
                    <span>100 lbs flour at $3.00/lb = $300 total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-300 px-2 py-1 rounded text-sm">March:</span>
                    <span>100 lbs flour at $4.00/lb = $400 total</span>
                  </div>
                  <div className="border-t pt-2 mt-3">
                    <ArrowRight className="inline w-4 h-4 mr-2" />
                    <strong>If Maria sells 150 lbs in April using FIFO:</strong>
                  </div>
                  <div className="ml-6 space-y-1">
                    <p>• First 100 lbs from January at $2.00 = $200</p>
                    <p>• Next 50 lbs from February at $3.00 = $150</p>
                    <p><strong>Total COGS = $350</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">FIFO Advantages</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Matches physical flow for most businesses</li>
                    <li>• Lower COGS in rising price environments</li>
                    <li>• Higher reported profits look good to investors</li>
                    <li>• More current costs remain in ending inventory</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-green-200">
                  <h4 className="font-medium text-green-900 mb-2">FIFO Considerations</h4>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Higher profits mean higher taxes</li>
                    <li>• Less cash available due to tax payments</li>
                    <li>• May not match current replacement costs</li>
                    <li>• Inventory profits during inflation</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* LIFO Detailed Explanation */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <TrendingDown className="h-6 w-6" />
              LIFO: Last-In, First-Out Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-red-900">
              <p className="mb-4">
                LIFO assumes that the <strong>last items you buy are the first items you sell</strong>. 
                This is like a pile of gravel - when you need gravel, you take from the top of the pile 
                (the most recently delivered material).
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-red-200 mb-4">
                <h3 className="font-semibold text-red-900 mb-3">LIFO Example: Maria's Bakery</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-red-100 px-2 py-1 rounded text-sm">January:</span>
                    <span>100 lbs flour at $2.00/lb = $200 total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-red-200 px-2 py-1 rounded text-sm">February:</span>
                    <span>100 lbs flour at $3.00/lb = $300 total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-red-300 px-2 py-1 rounded text-sm">March:</span>
                    <span>100 lbs flour at $4.00/lb = $400 total</span>
                  </div>
                  <div className="border-t pt-2 mt-3">
                    <ArrowRight className="inline w-4 h-4 mr-2" />
                    <strong>If Maria sells 150 lbs in April using LIFO:</strong>
                  </div>
                  <div className="ml-6 space-y-1">
                    <p>• First 100 lbs from March at $4.00 = $400</p>
                    <p>• Next 50 lbs from February at $3.00 = $150</p>
                    <p><strong>Total COGS = $550</strong></p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-red-200">
                  <h4 className="font-medium text-red-900 mb-2">LIFO Advantages</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Matches current costs with current revenues</li>
                    <li>• Higher COGS in rising price environments</li>
                    <li>• Lower profits mean lower taxes</li>
                    <li>• Better cash flow due to tax savings</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-red-200">
                  <h4 className="font-medium text-red-900 mb-2">LIFO Considerations</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Lower reported profits may discourage investors</li>
                    <li>• Ending inventory shows older, outdated costs</li>
                    <li>• LIFO liquidation can distort results</li>
                    <li>• More complex record-keeping required</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Side-by-Side Comparison */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              The $200 Difference: FIFO vs LIFO Impact
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h3 className="font-semibold text-green-800 mb-3">FIFO Results</h3>
                <div className="space-y-2 text-green-900">
                  <p><strong>Cost of Goods Sold:</strong> $350</p>
                  <p><strong>Ending Inventory:</strong> $450</p>
                  <p><strong>If selling price is $800:</strong></p>
                  <p className="ml-4">Gross Profit = $800 - $350 = <strong>$450</strong></p>
                  <p className="text-sm text-green-700">Higher profits = Higher taxes</p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-300">
                <h3 className="font-semibold text-red-800 mb-3">LIFO Results</h3>
                <div className="space-y-2 text-red-900">
                  <p><strong>Cost of Goods Sold:</strong> $550</p>
                  <p><strong>Ending Inventory:</strong> $250</p>
                  <p><strong>If selling price is $800:</strong></p>
                  <p className="ml-4">Gross Profit = $800 - $550 = <strong>$250</strong></p>
                  <p className="text-sm text-red-700">Lower profits = Lower taxes</p>
                </div>
              </div>
            </div>
            
            <div className="mt-4 bg-white p-4 rounded-lg border border-purple-200">
              <p className="text-purple-900 font-medium text-center">
                Same sales, same inventory, but a <span className="text-2xl font-bold">$200 difference</span> in reported profit!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Vocabulary Practice */}
        <FillInTheBlank
          title="Master the FIFO & LIFO Vocabulary"
          description="Fill in the blanks to demonstrate your understanding of key inventory concepts and their business impact."
          sentences={vocabularyExercise}
          showWordList={true}
          randomizeWordOrder={true}
          showHints={true}
        />

        {/* Professional Context */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Professional Context: When to Choose Each Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                Real businesses choose their inventory method based on strategic goals:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">Companies Often Using FIFO</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Grocery stores (perishable goods)</li>
                    <li>• Pharmaceutical companies (expiration dates)</li>
                    <li>• Fashion retailers (seasonal inventory)</li>
                    <li>• Startups seeking investment (want higher profits)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Companies Often Using LIFO</h3>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Oil and gas companies (commodity prices)</li>
                    <li>• Steel manufacturers (raw material costs)</li>
                    <li>• Large retailers (cash flow focus)</li>
                    <li>• Mature companies (tax minimization)</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                <p className="text-indigo-800">
                  <strong>Strategic Insight:</strong> Companies can't switch methods frequently - the IRS requires 
                  consistency and approval for changes. This makes the initial choice even more critical!
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