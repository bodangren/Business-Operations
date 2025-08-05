import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  const assetInventoryQuestions = [
    {
      id: 'q1',
      question: 'What major investment did TechStart Solutions make when moving to their first real office?',
      answers: [
        '$18,000 on computers, software, and office furniture',
        '$25,000 on marketing and advertising',
        '$12,000 on employee salaries and benefits',
        '$30,000 on inventory and supplies'
      ],
      explanation: 'TechStart Solutions spent about $18,000 on brand new computers, software, and office furniture to get their first real office set up perfectly, marking a huge milestone in their business growth.'
    },
    {
      id: 'q2',
      question: 'Why did CPA Jennifer Kim tell Sarah to stop treating the $18,000 as a simple expense?',
      answers: [
        'These items were long-term assets that would help the business for years',
        'The equipment was too expensive to be considered an expense',
        'Sarah needed to get approval from investors first',
        'The purchases were made in the wrong fiscal year'
      ],
      explanation: 'Jennifer explained that these items weren\'t just simple expenses like paper clips or internet bills; they were long-term assets that would help TechStart Solutions for years, not just for a single month.'
    },
    {
      id: 'q3',
      question: 'What are some serious consequences that can happen when companies improperly value their inventory?',
      answers: [
        'Big fines, lost investor trust, higher audit costs, and tax troubles',
        'Only minor paperwork issues and small penalties',
        'Improved financial performance and better credit ratings',
        'Faster month-end closing and easier bookkeeping'
      ],
      explanation: 'The auditor case study shows that inventory misvaluation can lead to fines from $100,000 to millions from groups like the SEC, lost investor trust affecting stock prices, increased audit costs, and tax problems spanning multiple years.'
    }
  ]

  const vocabularySentences = [
    {
      id: 'vocab1',
      text: "{blank} is a way of spreading the cost of a long-term asset over the years it will be used, matching the cost to the income it helps generate.",
      answer: 'Depreciation',
      hint: "Spreading asset costs over time"
    },
    {
      id: 'vocab2',
      text: "The {blank} {blank} helps match the cost of an asset to the income it helps generate over several years.",
      answer: 'Matching Principle',
      hint: "Accounting concept that aligns costs with related revenues"
    },
    {
      id: 'vocab3',  
      text: "Our unit's driving question is: Which depreciation and inventory methods best align with our {blank}-{blank} and tax strategy?",
      answer: 'cash-flow',
      hint: "How money moves in and out of a business"
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
          {/* Complete Unit 7 Introduction - Textbook Content */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-purple-600 text-white">Core Concepts</Badge>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Asset & Inventory Tracker: Strategic Valuation for Business Success
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  Welcome to Unit 7: Asset & Inventory Tracker! In this unit, we're going to dive into how businesses manage their valuable possessions and the goods they sell. Think of it like taking care of everything from the shiny new computers in an office to all the delicious ingredients in a bakery. We'll explore how these items are accounted for over time, and why choosing the right methods can make a big difference for a company's money and taxes.
                </p>

                <p className="text-lg leading-relaxed">
                  Our main question for this unit is: <strong>"Which depreciation and inventory methods best align with our cash-flow and tax strategy?"</strong> This might sound like a mouthful, but don't worry! We'll break down each part, connecting it to real business situations and showing you how to use math and Excel to make smart choices.
                </p>

                <h3 className="text-xl font-semibold text-purple-800 mt-8">Sarah's Next Big Step</h3>
                <p className="text-lg leading-relaxed">
                  Remember Sarah from TechStart Solutions? She's been on an amazing journey, building a smart ledger, automating her month-end close, creating professional financial statements, analyzing data, managing payroll, and even revamping her pricing. Each step has made her business stronger and more professional.
                </p>

                <p className="text-lg leading-relaxed">
                  Now, TechStart Solutions has moved into its first real office! This is a huge milestone, a sign that her business is growing and becoming a serious company. But with a new office comes new needs. Sarah made a significant investment, spending about <strong>$18,000 on brand new computers, software, and office furniture</strong> to get everything set up perfectly.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-purple-300 my-6">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4">TechStart Solutions' Office Investment</h4>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-800 mb-2">$18,000</div>
                    <p className="text-purple-600 font-medium">Total Investment in Long-Term Assets</p>
                    <div className="mt-4 grid md:grid-cols-3 gap-4 text-sm">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <strong>Computers & Hardware</strong><br/>
                        High-performance systems for development work
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <strong>Software Licenses</strong><br/>
                        Professional design and development tools
                      </div>
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <strong>Office Furniture</strong><br/>
                        Desks, chairs, and professional workspace setup
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  Her first thought was simple: just record this $18,000 as a big expense, like buying paper clips or paying the internet bill. But her CPA, Jennifer Kim, immediately told her to stop. Jennifer explained that these items weren't just simple expenses; they were <em>long-term assets</em>. How Sarah accounted for them would have a big impact on her taxes and the official value of her company. Plus, her new business insurance policy needed a detailed list of all her physical assets.
                </p>

                <p className="text-lg leading-relaxed">
                  This was a big "aha!" moment for Sarah. She realized that these new items, like her powerful new computers, would help her business for years, not just for a single month. This introduced her to a powerful accounting concept: <strong>depreciation</strong>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Day 1: The Cost of Misvaluation */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                Day 1: Launch & Data Exploration – The Cost of Misvaluation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-red max-w-none">
                <p className="text-lg leading-relaxed">
                  Have you ever heard of a company getting into big trouble because of how they kept track of their stuff? It happens more often than you might think! To kick off this unit, we're going to hear from a real local auditor. They're going to share a true story (don't worry, it's anonymized to protect the company) about a business that faced serious financial and legal issues because they didn't properly value their inventory.
                </p>

                <p className="text-lg leading-relaxed">
                  Imagine the auditor telling you about a company that messed up its inventory numbers. What could happen?
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-red-300 my-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Serious Consequences of Asset & Inventory Misvaluation:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">$</div>
                        <div>
                          <h5 className="font-semibold text-red-800">Big Fines</h5>
                          <p className="text-sm text-red-600">Public companies can face fines from $100,000 to millions from groups like the SEC if their numbers aren't right.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">📉</div>
                        <div>
                          <h5 className="font-semibold text-red-800">Lost Trust</h5>
                          <p className="text-sm text-red-600">If investors can't trust a company's numbers, they might not want to put their money into it. This can hurt the company's stock price and make it hard to get funding in the future.</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">⚖️</div>
                        <div>
                          <h5 className="font-semibold text-red-800">More Audit Costs</h5>
                          <p className="text-sm text-red-600">When a company's records are messy, auditors have to work extra hard, and that costs the company more money.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">📊</div>
                        <div>
                          <h5 className="font-semibold text-red-800">Tax Trouble</h5>
                          <p className="text-sm text-red-600">Errors can mess up taxes not just for one year, but for many years!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-lg leading-relaxed">
                  These are some serious consequences, and they all come back to one thing: accurate financial records, especially for assets and inventory. This real-world story shows us exactly why the choices businesses make about depreciation and inventory methods are so important for their cash flow and tax strategy.
                </p>

                <p className="text-lg leading-relaxed">
                  After hearing about this case, your team will get to work with some real-world data, just like Sarah. We'll provide you with an anonymized dataset of assets and inventory – you'll see different types of equipment and goods, and start thinking about how they might be valued.
                </p>

                <p className="text-lg leading-relaxed">
                  You'll also get to pick an industry for your project: retail, manufacturing, or technology. Each of these industries has different kinds of assets and inventory challenges, and your choice will help shape the strategic decisions you make throughout the unit. For example, a retail business might have a lot of clothes or gadgets as inventory, while a manufacturing business might have raw materials and big machines. A technology company, like Sarah's, might have lots of computers and specialized software.
                </p>

                <p className="text-lg leading-relaxed">
                  This unit's challenge is to build a system that helps a business choose the best ways to account for its assets and inventory. You'll be aiming to answer that big question: <strong>"Which depreciation and inventory methods best align with our cash-flow and tax strategy?"</strong> By the end of this unit, you'll be able to recommend smart financial choices to real business leaders, just like a financial advisor!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Comprehension Check: Asset & Inventory Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={assetInventoryQuestions} />
            </CardContent>
          </Card>

          {/* Vocabulary Building */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Key Asset & Inventory Vocabulary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank 
                sentences={vocabularySentences}
                title="Asset & Inventory Vocabulary Practice"
                description="Fill in the blanks to complete these important asset management and inventory terms"
              />
            </CardContent>
          </Card>

          {/* Turn and Talk Discussion */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Turn and Talk: Connect to Business Strategy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Discuss with a partner using these strategic business prompts:
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Asset Valuation Strategy:</h4>
                    <p className="text-sm">If you were Sarah's financial advisor, how would you explain why her $18,000 equipment purchase should be treated differently than her monthly internet bill? What are the business advantages of proper asset accounting?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Industry Context:</h4>
                    <p className="text-sm">Choose your project industry (retail, manufacturing, or technology). What types of assets and inventory would be most critical to track? How might valuation errors specifically hurt that type of business?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Looking Ahead */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Building Strategic Financial Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-purple max-w-none">
                <p className="text-lg leading-relaxed">
                  You now understand the critical importance of proper asset and inventory valuation, and the serious business consequences of getting it wrong. You've seen how Sarah's $18,000 office investment represents a strategic opportunity to implement professional financial management practices.
                </p>
                <p className="text-lg leading-relaxed">
                  In the next phase, we'll dive deeper into the specific depreciation and inventory methods that businesses use to align their financial reporting with their cash-flow and tax strategy. You'll learn how these seemingly technical accounting decisions can have major impacts on a company's profitability, tax liability, and investor appeal.
                </p>
                <p className="text-lg leading-relaxed">
                  Remember: The goal isn't just to learn accounting rules—it's to understand how financial professionals make strategic choices that support business growth and success.
                </p>
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