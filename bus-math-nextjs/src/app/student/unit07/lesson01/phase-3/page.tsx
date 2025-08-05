import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 3)!

  const assetInventoryItems = [
    { id: '1', content: 'Office computers and laptops', matchId: 'a1', hint: 'Used to run the business for multiple years' },
    { id: 'a1', content: 'Long-Term Assets (Depreciated Over Time)', matchId: '1', description: 'Items used to run the business over multiple years' },
    { id: '2', content: 'Raw materials for production', matchId: 'i1', hint: 'Used to create products for sale' },
    { id: 'i1', content: 'Inventory (Valued Using FIFO/LIFO)', matchId: '2', description: 'Items held for sale or used in production' },
    { id: '3', content: 'Office furniture and desks', matchId: 'a2', hint: 'Equipment used in daily operations for years' },
    { id: 'a2', content: 'Long-Term Assets (Depreciated Over Time)', matchId: '3', description: 'Items used to run the business over multiple years' },
    { id: '4', content: 'Finished goods ready for sale', matchId: 'i2', hint: 'Products ready to generate revenue' },
    { id: 'i2', content: 'Inventory (Valued Using FIFO/LIFO)', matchId: '4', description: 'Items held for sale or used in production' }
  ]

  const depreciationMethodQuestions = [
    {
      id: 'q1',
      question: 'Which depreciation method spreads the cost evenly over an asset\'s useful life?',
      answers: [
        'Straight-Line (SLN) Depreciation',
        'Double-Declining Balance (DDB) Depreciation',
        'Units of Production Method',
        'Sum-of-Years-Digits Method'
      ],
      explanation: 'Straight-Line (SLN) depreciation is the simplest method that spreads the cost evenly over the asset\'s useful life using the formula: (Cost - Salvage Value) ÷ Useful Life.'
    },
    {
      id: 'q2',
      question: 'Why might a business choose Double-Declining Balance depreciation over Straight-Line?',
      answers: [
        'It provides higher tax deductions sooner, improving cash flow',
        'It makes the business look more profitable to investors',
        'It is required by law for technology equipment',
        'It reduces the need for annual asset inspections'
      ],
      explanation: 'DDB is "accelerated" depreciation that charges more expense in early years and less in later years. This means higher tax deductions sooner, which improves cash flow by reducing current tax payments.'
    },
    {
      id: 'q3',
      question: 'In a rising price environment, which inventory method results in higher reported profit?',
      answers: [
        'FIFO (First-In, First-Out)',
        'LIFO (Last-In, First-Out)',
        'Both methods give identical results',
        'It depends on the type of inventory'
      ],
      explanation: 'In rising prices, FIFO results in lower Cost of Goods Sold (using older, cheaper costs) and higher reported profit. However, this also means higher taxes, while LIFO would mean lower taxes but lower reported profit.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Guided Practice Introduction */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Guided Practice</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Investigating Asset & Inventory Patterns with TechStart Solutions
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Now that you understand the importance of proper asset and inventory valuation, let's practice identifying different types of business items and explore how they should be categorized. We'll continue with Sarah's TechStart Solutions story, examining the types of assets and inventory she might encounter as her business grows.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-6">Understanding the Two Main Categories</h3>
                <p className="text-lg leading-relaxed">
                  Every business has two main types of valuable items that need different accounting treatment:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-blue-800">🏢 Long-Term Assets</h4>
                      <p className="text-sm text-blue-600">Items used to <strong>run the business</strong> over multiple years</p>
                      <ul className="text-sm space-y-1 text-blue-700">
                        <li>• Last 3+ years typically</li>
                        <li>• Used in daily operations</li>
                        <li>• Value decreases over time (<strong>depreciation</strong>)</li>
                        <li>• Examples: computers, furniture, equipment</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-green-800">📦 Inventory</h4>
                      <p className="text-sm text-green-600">Items held for <strong>sale or production</strong></p>
                      <ul className="text-sm space-y-1 text-green-700">
                        <li>• Sold within a year typically</li>
                        <li>• Generate direct revenue</li>
                        <li>• Valued using FIFO/LIFO methods</li>
                        <li>• Examples: products, materials, supplies</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  The key difference is <em>purpose</em>: Long-term assets help you <strong>operate</strong> the business, while inventory items are meant to be <strong>sold</strong> or <strong>consumed in production</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Asset vs Inventory Categorization */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Guided Practice: Categorize Business Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Help classify these business items into the correct categories. Think about whether each item is used to <strong>operate</strong> the business (Long-Term Asset) or is held for <strong>sale/production</strong> (Inventory):
              </p>
              <DragAndDrop 
                items={assetInventoryItems}
                title="Asset vs Inventory Classification"
                description="Drag each business item to match with its correct category based on its primary purpose"
                leftColumnTitle="Business Items"
                rightColumnTitle="Categories"
                showHints={true}
              />
            </CardContent>
          </Card>

          {/* Exploring Depreciation & Inventory Methods */}
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-orange-800 dark:text-orange-200">
                Method Selection: Strategic Business Choices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg leading-relaxed">
                  Once we know what category an item belongs to, the next step is choosing the right <strong>accounting method</strong>. This is where strategy comes in—different methods can significantly impact cash flow and taxes.
                </p>

                <h3 className="text-xl font-semibold text-orange-800 mt-6">For Long-Term Assets: Depreciation Methods</h3>
                <div className="bg-white p-6 rounded-lg border-2 border-orange-300 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">📈 Straight-Line (SLN)</h4>
                      <p className="text-sm text-orange-600 mb-2"><strong>Strategy:</strong> Steady, predictable expenses</p>
                      <p className="text-sm">Spreads cost evenly over asset life. Good for stable businesses wanting consistent expense patterns.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">📉 Double-Declining Balance (DDB)</h4>
                      <p className="text-sm text-orange-600 mb-2"><strong>Strategy:</strong> Early tax benefits</p>
                      <p className="text-sm">Higher expenses early, lower later. Better cash flow through early tax deductions.</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-orange-800 mt-6">For Inventory: Cost Flow Methods</h3>
                <div className="bg-white p-6 rounded-lg border-2 border-orange-300 my-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">🔄 FIFO (First-In, First-Out)</h4>
                      <p className="text-sm text-orange-600 mb-2"><strong>Strategy:</strong> Higher reported profits</p>
                      <p className="text-sm">Assumes oldest inventory sold first. In rising prices: lower costs, higher profits, higher taxes.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-orange-800 mb-2">🔄 LIFO (Last-In, First-Out)</h4>
                      <p className="text-sm text-orange-600 mb-2"><strong>Strategy:</strong> Tax savings</p>
                      <p className="text-sm">Assumes newest inventory sold first. In rising prices: higher costs, lower profits, lower taxes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Turn and Talk: Strategic Implications */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Turn and Talk: Strategic Method Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  With your partner, discuss these strategic business scenarios using what you've learned:
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">TechStart Solutions' Dilemma:</h4>
                    <p className="text-sm">Sarah's business is growing rapidly and she expects to need significant cash flow for expansion next year. Should she choose Straight-Line or Double-Declining Balance depreciation for her new $18,000 in equipment? Why?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Industry Strategy:</h4>
                    <p className="text-sm">Consider your chosen industry (retail, manufacturing, or technology). In a period of rising costs, would FIFO or LIFO be more beneficial for cash flow? What are the trade-offs for investor appeal?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Business Growth Strategy:</h4>
                    <p className="text-sm">A startup wants to show strong profits to attract investors, but also wants to minimize taxes to preserve cash. How can depreciation and inventory method choices help achieve both goals?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Comprehension Check: Method Selection Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={depreciationMethodQuestions} />
            </CardContent>
          </Card>

          {/* Data Exploration Preview */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Preparing for Data Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  You've now learned to distinguish between assets and inventory, and understand the strategic implications of different valuation methods. In the next phase, you'll apply these concepts independently using real business scenarios and data analysis.
                </p>
                <p className="text-lg leading-relaxed">
                  Remember, the goal is to answer our driving question: <strong>"Which depreciation and inventory methods best align with our cash-flow and tax strategy?"</strong> Your growing understanding of these methods will help you make informed recommendations for Sarah's TechStart Solutions and your chosen industry focus.
                </p>
                <div className="bg-white p-4 rounded-lg border-2 border-purple-300 mt-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Coming Up: Independent Practice</h4>
                  <p className="text-sm text-purple-600">You'll analyze different business scenarios, calculate financial impacts, and develop strategic recommendations based on your industry choice and business goals.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit07Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}