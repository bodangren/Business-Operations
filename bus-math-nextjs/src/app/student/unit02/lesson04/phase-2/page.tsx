import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, Lightbulb, Database, TrendingUp } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

export default function Phase2Page() {
  const fillInTheBlankSentences = [
    {
      id: "fill1",
      text: "Excel {blank} automatically expand when new data is added, ensuring formulas continue to work correctly.",
      answer: "Tables",
      hint: "This Excel feature creates structured references that grow with your data"
    },
    {
      id: "fill2", 
      text: "The {blank} function allows you to sum values based on specific criteria or conditions.",
      answer: "SUMIF",
      hint: "This function has three arguments: range, criteria, and sum_range"
    },
    {
      id: "fill3",
      text: "Structured references use {blank} instead of cell ranges like A1:A10.",
      answer: "table names",
      hint: "These references look like TableName[ColumnName] for clarity and flexibility"
    },
    {
      id: "fill4",
      text: "Excel Tables provide {blank} formatting that makes data easier to read and analyze.",
      answer: "automatic",
      hint: "Excel applies banded rows and professional styling without manual formatting"
    }
  ]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What is the main advantage of structured references in Excel Tables?",
      answers: [
        "They make formulas easier to understand and automatically adjust when data is added",
        "They reduce the file size of Excel workbooks significantly",
        "They allow you to use different fonts and colors in your spreadsheet",
        "They automatically save your work to the cloud"
      ],
      explanation: "Structured references like =SUM(SalesTable[Amount]) are self-documenting and automatically expand when new rows are added to the table, eliminating the need to manually update cell ranges."
    },
    {
      id: "q2",
      question: "In the SUMIF function =SUMIF(A1:A10,\"Revenue\",B1:B10), what does the middle argument represent?",
      answers: [
        "The criteria that determines which cells to include in the sum",
        "The range of cells to sum up",
        "The formatting style to apply to the result",
        "The name of the Excel worksheet"
      ],
      explanation: "The criteria argument specifies the condition that must be met for a cell to be included in the sum. In this case, only cells containing 'Revenue' will have their corresponding values summed."
    },
    {
      id: "q3",
      question: "Why are Excel Tables particularly valuable for month-end closing procedures?",
      answers: [
        "They automatically accommodate new transactions without breaking formula references",
        "They change the color scheme of your spreadsheet to look more professional",
        "They automatically email your financial statements to investors",
        "They reduce the time needed to enter data by 90%"
      ],
      explanation: "Excel Tables eliminate the common problem of formulas breaking when new data is added. This is crucial for month-end procedures where new transactions are constantly being added to existing datasets."
    },
    {
      id: "q4",
      question: "How does SUMIF support TechStart's automated month-end wizard?",
      answers: [
        "It can automatically categorize and total different types of adjusting entries",
        "It creates backup copies of all financial data",
        "It sends automatic reminders when month-end tasks are due",
        "It converts all numbers to different currencies"
      ],
      explanation: "SUMIF functions allow Sarah to automatically calculate totals for specific categories like 'Accrual' entries or 'Deferral' entries, eliminating manual categorization and reducing errors in month-end procedures."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables & SUMIF: The Professional Foundation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master the Excel techniques that transform chaotic month-end procedures into automated, professional-grade financial systems.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Core Concept Explanation */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Excel Tables and SUMIF functions are the backbone of professional financial automation. 
              While basic Excel users struggle with broken formulas and manual updates, professionals 
              use these tools to create self-maintaining systems that scale with business growth.
            </p>
          </div>

          {/* Excel Tables Benefits for Business */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Table className="h-6 w-6" />
                Excel Tables: The Business Game-Changer
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">What Excel Tables Do:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Automatically expand when new data is added</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Create structured references that don't break</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Apply professional formatting automatically</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Enable powerful filtering and sorting features</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-3">Business Impact:</h4>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Reduce month-end closing time by 75%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Eliminate formula errors from manual updates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Impress investors with scalable systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <TrendingUp className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span>Focus on analysis instead of data maintenance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Step-by-Step Tutorial */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Database className="h-6 w-6" />
                Creating Excel Tables: The Foundation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-900 mb-3">Step-by-Step Process:</h4>
                <ol className="list-decimal list-inside space-y-2 text-purple-800">
                  <li><strong>Select your data range</strong> including headers</li>
                  <li><strong>Press Ctrl+T</strong> or go to Insert → Table</li>
                  <li><strong>Confirm the data range</strong> and check "My table has headers"</li>
                  <li><strong>Name your table</strong> in Table Design → Table Name (e.g., "TransactionTable")</li>
                  <li><strong>Use structured references</strong> in formulas: =SUM(TransactionTable[Amount])</li>
                </ol>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-semibold text-purple-900 mb-2">❌ Old Way (Breaks easily):</h5>
                  <code className="text-sm text-red-700 bg-red-50 p-2 rounded block">
                    =SUM(A2:A50)
                    <br />
                    =SUMIF(B2:B50,"Accrual",C2:C50)
                  </code>
                  <p className="text-xs text-purple-700 mt-2">Breaks when row 51 is added!</p>
                </div>
                <div className="bg-white p-4 rounded border border-purple-200">
                  <h5 className="font-semibold text-purple-900 mb-2">✅ Table Way (Self-maintaining):</h5>
                  <code className="text-sm text-green-700 bg-green-50 p-2 rounded block">
                    =SUM(TransactionTable[Amount])
                    <br />
                    =SUMIF(TransactionTable[Type],"Accrual",TransactionTable[Amount])
                  </code>
                  <p className="text-xs text-purple-700 mt-2">Automatically includes new rows!</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* TechStart Application Examples */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">TechStart Solutions: Real-World Applications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                Here's how Sarah uses Excel Tables and SUMIF functions to automate her month-end procedures:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-900 mb-2">Transaction Tracking</h5>
                  <code className="text-xs text-gray-700 bg-gray-100 p-2 rounded block mb-2">
                    =SUMIF(TransactionTable[Type],"Revenue",TransactionTable[Amount])
                  </code>
                  <p className="text-sm text-orange-800">Automatically totals all revenue transactions</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-900 mb-2">Adjusting Entries</h5>
                  <code className="text-xs text-gray-700 bg-gray-100 p-2 rounded block mb-2">
                    =SUMIF(AdjustingTable[Category],"Accrual",AdjustingTable[Amount])
                  </code>
                  <p className="text-sm text-orange-800">Categorizes accruals vs deferrals automatically</p>
                </div>
                
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h5 className="font-semibold text-orange-900 mb-2">Client Analysis</h5>
                  <code className="text-xs text-gray-700 bg-gray-100 p-2 rounded block mb-2">
                    =SUMIF(TransactionTable[Client],"FitnessStudio",TransactionTable[Amount])
                  </code>
                  <p className="text-sm text-orange-800">Tracks revenue by individual client</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            title="Excel Tables & SUMIF Vocabulary Mastery"
            description="Complete these sentences with the correct Excel terminology."
            sentences={fillInTheBlankSentences}
            showHints={true}
          />

          {/* Professional Standards Focus */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Professional Standards: Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  Professional accountants and financial analysts rely on Excel Tables and SUMIF functions because 
                  they create audit trails and maintain data integrity. When Sarah shows potential investors her 
                  financial models, they'll immediately recognize these professional techniques.
                </p>
                
                <div className="bg-green-100 p-4 rounded-lg border border-green-300 not-prose">
                  <h4 className="font-semibold text-green-900 mb-2">Investor Expectations:</h4>
                  <ul className="text-green-800 space-y-1">
                    <li>• <strong>Scalable systems</strong> that grow with the business</li>
                    <li>• <strong>Error-resistant formulas</strong> that maintain accuracy</li>
                    <li>• <strong>Clear documentation</strong> through structured references</li>
                    <li>• <strong>Professional formatting</strong> that's easy to audit</li>
                  </ul>
                </div>

                <p>
                  These aren't just Excel tricks—they're the foundation of business intelligence systems 
                  that separate amateur spreadsheets from professional-grade financial models.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Power of Collaboration */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800">The Power of a Second Opinion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-indigo-800">
                <p>
                  In the world of business and technology, great things are never built in isolation. Sarah knew 
                  that even with her carefully planned Excel Tables system, she might have missed something. Before 
                  spending hours building automation, she needed a second pair of eyes on her logic. This is a normal 
                  and essential part of developing any new tool or system.
                </p>
                
                <p>
                  Getting feedback early and often saves a huge amount of time and prevents you from building on a 
                  flawed foundation. In professional software development, this process is called a "design review," 
                  where teams share their work and get valuable feedback from peers.
                </p>

                <div className="bg-indigo-100 p-4 rounded-lg border border-indigo-300 not-prose">
                  <h4 className="font-semibold text-indigo-900 mb-2">What Makes Good Feedback?</h4>
                  <p className="text-indigo-800 mb-3">
                    Simply saying "it looks good" isn't very helpful. The goal is to be specific, actionable, and kind. 
                    A great framework to use is <strong>"Stars and Steps."</strong>
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">⭐ Stars:</h5>
                      <p className="text-sm text-indigo-800">
                        What did this team do really well? Is their Excel Tables logic crystal clear? 
                        Did they organize their SUMIF formulas in a way that's easy to understand? 
                        Point out specific strengths they should continue doing.
                      </p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">📈 Steps:</h5>
                      <p className="text-sm text-indigo-800">
                        What are one or two specific, actionable steps they could take to make their work even better? 
                        Perhaps their structured references could be clearer, or they could add error-checking. 
                        Offer suggestions for improvement, not just criticism.
                      </p>
                    </div>
                  </div>
                </div>

                <p>
                  This collaborative approach to building Excel Tables systems mirrors how professional teams develop 
                  financial automation tools. By seeking feedback and iterating on your design, you'll create more 
                  robust, reliable systems that can truly transform month-end procedures.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Excel Tables & SUMIF Mastery Check"
            description="Test your understanding of Excel Tables and SUMIF functions for business automation."
            questions={comprehensionQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}