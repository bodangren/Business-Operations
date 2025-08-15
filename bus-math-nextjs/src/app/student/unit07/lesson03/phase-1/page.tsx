import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Package, TrendingUp, TrendingDown, DollarSign, AlertTriangle } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0] // Hook phase

const hookQuestions = [
  {
    id: "q1",
    question: "Imagine a bakery buying flour at different prices throughout the month. In January, they bought flour for $2 per pound. In February, prices rose to $3 per pound due to wheat shortages. When they use flour to bake bread, which cost should they assign to their Cost of Goods Sold?",
    answers: [
      "It depends on the inventory method they choose (FIFO or LIFO)",
      "Always use the most recent purchase price",
      "Always use the oldest purchase price", 
      "Use the average of all purchase prices"
    ],
    explanation: "The cost assigned to Cost of Goods Sold depends entirely on which inventory method the business chooses - FIFO (First-In, First-Out) or LIFO (Last-In, First-Out). This choice has huge implications for taxes and reported profits!"
  },
  {
    id: "q2", 
    question: "If prices are rising and a business wants to minimize their tax bill this year, which inventory method would be more beneficial?",
    answers: [
      "LIFO (Last-In, First-Out) - uses newer, higher costs for COGS",
      "FIFO (First-In, First-Out) - uses older, lower costs for COGS",
      "Both methods result in identical tax bills",
      "The choice doesn't affect taxes"
    ],
    explanation: "LIFO assigns the newest, most expensive costs to Cost of Goods Sold when prices are rising. Higher COGS means lower profits, which means lower taxes. This improves cash flow by reducing tax payments."
  },
  {
    id: "q3",
    question: "Why would Sarah at TechStart Solutions need to understand inventory methods, even though she's primarily a service business?",
    answers: [
      "She's buying computer equipment and office furniture that need proper valuation",
      "Service businesses don't need to worry about inventory methods",
      "Only retail businesses use FIFO and LIFO",
      "Inventory methods only apply to manufacturing companies"
    ],
    explanation: "Even service businesses have inventory! Sarah bought $18,000 worth of computers and office furniture. While these are typically treated as fixed assets (not inventory), understanding cost flow principles helps with depreciation decisions and business purchases."
  },
  {
    id: "q4",
    question: "What makes this inventory method choice so critical for business strategy?",
    answers: [
      "It directly impacts reported profits, taxes, and cash flow",
      "It only affects internal record-keeping",
      "The choice can be changed daily based on market conditions",
      "It has no impact on financial statements"
    ],
    explanation: "Inventory method choice is a strategic business decision because it affects three crucial areas: how much profit you report to investors, how much tax you pay to the government, and how much cash you have available for operations."
  }
]

export default function Phase1Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Engaging Hook Scenario */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Package className="h-6 w-6" />
              The Great Flour Dilemma
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-orange-900">
              <p className="mb-4">
                Picture this: You walk into your favorite local bakery on a busy Saturday morning. The owner, Maria, 
                greets you with a worried expression. "I'm having an accounting nightmare," she says. "Let me show you 
                what's driving me crazy."
              </p>
              
              <p className="mb-4">
                She pulls out her purchase records: "In January, I bought 100 pounds of premium flour for $2 per pound. 
                Then wheat prices shot up due to poor weather, so in February I had to pay $3 per pound for another 100 pounds. 
                By March, prices hit $4 per pound for my latest 100-pound purchase."
              </p>
              
              <p className="mb-4">
                "Now here's my problem," Maria continues, pointing to a tray of fresh croissants. "When I bake these croissants 
                today using 50 pounds of flour, what did that flour actually cost me? Was it the $2 flour from January, 
                the $3 flour from February, or the $4 flour from March?"
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-2">Why This Matters</h3>
                <p className="text-orange-800">
                  Maria's dilemma isn't just about record-keeping - it's about strategy. Her choice will determine 
                  how much profit she reports, how much tax she pays, and how much cash she has left for expanding 
                  her business. The wrong choice could cost her thousands of dollars!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Impact Visualization */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                FIFO Method Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-green-900">
                <p><strong>Uses oldest costs first:</strong> $2 flour for COGS</p>
                <p><strong>Result:</strong> Lower costs = Higher reported profits</p>
                <p><strong>Tax impact:</strong> Higher taxes due to higher profits</p>
                <p><strong>Investor view:</strong> Business looks more profitable</p>
                <div className="bg-white p-3 rounded border border-green-200">
                  <p className="text-sm font-medium">Best when: You want to show strong profits to investors</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <TrendingDown className="h-5 w-5" />
                LIFO Method Impact
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-red-900">
                <p><strong>Uses newest costs first:</strong> $4 flour for COGS</p>
                <p><strong>Result:</strong> Higher costs = Lower reported profits</p>
                <p><strong>Tax impact:</strong> Lower taxes due to lower profits</p>
                <p><strong>Cash flow:</strong> More cash saved from tax savings</p>
                <div className="bg-white p-3 rounded border border-red-200">
                  <p className="text-sm font-medium">Best when: You want to minimize taxes and save cash</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sarah's Connection */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <DollarSign className="h-6 w-6" />
              Sarah's TechStart Connection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg leading-relaxed text-purple-900">
              <p className="mb-4">
                Remember Sarah's big milestone? TechStart Solutions just moved into its first real office and invested 
                $18,000 in computers, software, and furniture. While these are fixed assets (not inventory), Sarah is 
                facing similar strategic decisions.
              </p>
              
              <p className="mb-4">
                Her CPA, Jennifer Kim, explained that even service businesses work with clients who struggle with 
                inventory decisions. "Sarah, when you help that bakery client with their financial statements, 
                or that electronics retailer with their Excel models, you need to understand how FIFO and LIFO 
                impact their bottom line."
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <p className="text-purple-800 font-medium">
                  This knowledge makes Sarah more valuable to her clients and helps her build sophisticated 
                  financial models that account for different inventory strategies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <ComprehensionCheck
          title="Understanding the Stakes: FIFO vs LIFO"
          description="Test your understanding of why inventory method choice is such a big deal for businesses."
          questions={hookQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Looking Ahead */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              Coming Up Next
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-blue-900">
              <p className="text-lg leading-relaxed">
                In the next phase, we'll dive deep into the mechanics of FIFO and LIFO calculations. You'll learn 
                exactly how to calculate Cost of Goods Sold and ending inventory values using both methods, and 
                see the dramatic difference they can make to a business's financial statements.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}