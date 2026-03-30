import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Table, Lightbulb, Code, CheckCircle } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[1]

export default function Phase2Page() {

  const fillInQuestions = [
    {
      id: "q1",
      text: "To create an Excel Table, select any cell in your data range and press {blank}.",
      answer: "Ctrl+T",
      hint: "This keyboard shortcut opens the Create Table dialog"
    },
    {
      id: "q2",
      text: "Excel Tables automatically create {blank} references like LedgerTable[Account] instead of cell addresses.",
      answer: "structured",
      hint: "These are more readable and automatically expand"
    },
    {
      id: "q3",
      text: "Professional ledger structure requires consistent {blank} formatting that makes numbers readable and comparable.",
      answer: "number",
      hint: "Currency, comma separators, and decimal places"
    },
    {
      id: "q4",
      text: "A common failure mode is forgetting to confirm that {blank} are checked when creating the table.",
      answer: "headers",
      hint: "Excel will create generic headers if not confirmed"
    }
  ]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What is the primary purpose of an Excel Table in a professional ledger?",
      answers: [
        "Structure data consistently and enable professional features",
        "Make colors prettier",
        "Perform complex calculations",
        "Create charts automatically"
      ],
      explanation: "Excel Tables provide consistent structure, automatic expansion, structured references, and built-in features like filtering that make ledgers professional and verifiable."
    },
    {
      id: "q2",
      question: "Why would an investor prefer seeing a structured Excel Table over a list of numbers?",
      answers: [
        "Consistent structure shows systematic financial controls",
        "Excel Tables have more colors",
        "Investors don't understand simple lists",
        "Excel Tables are harder to edit"
      ],
      explanation: "Professional structure demonstrates systematic approach to financial management. Investors can quickly verify totals, understand transactions, and trust the controls in place."
    },
    {
      id: "q3",
      question: "What happens when you add a new row to an Excel Table?",
      answers: [
        "Table expands automatically and formulas include the new data",
        "You must manually update all formulas",
        "Nothing changes",
        "The table breaks"
      ],
      explanation: "Excel Tables automatically expand to include new rows, and any formulas using structured references will automatically include the new data in calculations."
    },
    {
      id: "q4",
      question: "What is a common failure mode when creating Excel Tables for ledgers?",
      answers: [
        "Not confirming headers or using inconsistent column names",
        "Using too many colors",
        "Creating tables too large",
        "Adding too many rows"
      ],
      explanation: "Forgetting to confirm headers when creating the table, or using inconsistent column naming conventions, breaks structured references and causes formula errors."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Introduction Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables & SUMIF: The Professional Foundation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional financial management starts with professional data organization. 
              The difference between a casual list of numbers and an investor-ready financial 
              system lies in two powerful Excel features: Excel Tables and SUMIF functions.
            </p>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              These tools transform static data into dynamic, self-updating systems that 
              calculate totals instantly and expand automatically as your business grows. 
              For Sarah's TechStart Solutions, this means the difference between spending 
              hours on bookkeeping and spending minutes—with perfect accuracy every time.
            </p>
          </div>
        </section>

        {/* Excel Tables Concept */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Table className="h-6 w-6 text-blue-600" />
            Excel Table Structure: Professional Ledger Anatomy
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              An <strong>Excel Table</strong> is more than formatted cells. It's a structured data 
              object that Excel treats as a single intelligent unit. For Sarah's ledger, converting her 
              transaction list to an Excel Table activates powerful professional features automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Key Excel Table Features
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-900">Automatic Expansion</h4>
                  <p className="text-blue-800">
                    When Sarah adds new transactions, table grows automatically. No manual range updates needed.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Structured References</h4>
                  <p className="text-blue-800">
                    Use readable names like "LedgerTable[Account]" instead of cryptic cell addresses like A1:A50.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Built-in Filtering</h4>
                  <p className="text-blue-800">
                    Every column header becomes a filter button. Instant data analysis and verification.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Professional Formatting</h4>
                  <p className="text-blue-800">
                    Consistent banding, headers, and visual structure that signals professional approach.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Why Investors Care
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-green-900">Systematic Controls</h4>
                  <p className="text-green-800">
                    Excel Tables demonstrate Sarah can build systematic financial systems, not ad-hoc lists.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Verifiable Accuracy</h4>
                  <p className="text-green-800">
                    Investors can filter, sort, and verify transactions in minutes, not hours.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Scalability Signal</h4>
                  <p className="text-green-800">
                    Table structure shows system can handle business growth without breaking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Professional Standards</h4>
                  <p className="text-green-800">
                    Proper formatting and structure separate amateur founders from serious operators.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Creating an Excel Table */}
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Creating an Excel Table: Step by Step</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">Step 1</span>
                <p className="mt-2 text-gray-700">
                  Select any cell in your data range. Excel will detect table boundaries automatically.
                </p>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">Step 2</span>
                <p className="mt-2 text-gray-700">
                  Press Ctrl+T (Windows) or Cmd+T (Mac). Confirm your data has headers. CRITICAL STEP.
                </p>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">Step 3</span>
                <p className="mt-2 text-gray-700">
                  Rename table to "LedgerTable" in Table Design tab. Use structured references.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Fill in the Blank Exercise */}
        <section className="max-w-4xl mx-auto">
          <FillInTheBlank 
          sentences={fillInQuestions}
          title="Master the Vocabulary: Excel Tables and SUMIF"
          description="Complete these key concepts to build your Excel foundation"
          showWordList={true}
          showHints={true}
          />
        </section>

        {/* Professional Formatting Standards */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Code className="h-6 w-6 text-purple-600" />
            Professional Formatting Standards
          </h2>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Professional ledgers require consistent <strong>number formatting</strong> and clean presentation. 
              When investors review Sarah's Excel Table, they need to see currency values that are 
              immediately readable, comparable, and professional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Currency Formatting Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-purple-900">Consistent Decimal Places</h4>
                  <p className="text-purple-800">
                    All currency values use 2 decimal places: $1,250.00 not $1,250 or $1,250.0
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">Comma Separators</h4>
                  <p className="text-purple-800">
                    Thousands separated by commas: $12,450.75 not $12450.75
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">Currency Symbol</h4>
                  <p className="text-purple-800">
                    Leading dollar sign aligned or left-justified: $450.00
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900">Negative Values</h4>
                  <p className="text-purple-800">
                    Red text or parentheses: $(500.00) or ($500.00) in red
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Common Failure Modes
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-green-900">Mixed Formatting</h4>
                  <p className="text-green-800">
                    Some cells currency, some plain numbers. Hard to read and error-prone.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Inconsistent Decimals</h4>
                  <p className="text-green-800">
                    $100 and $100.00 in same column. Looks unprofessional.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">No Formatting</h4>
                  <p className="text-green-800">
                    Plain numbers like 1250.75. Investors can't quickly interpret financial scale.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Text as Currency</h4>
                  <p className="text-green-800">
                    Typing "$1,000" as text. Breaks formulas and calculations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Applying Professional Formatting */}
          <div className="bg-gray-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Applying Currency Formatting: Step by Step</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">Step 1</span>
                <p className="mt-2 text-gray-700">
                  Select the Debit and Credit columns in your Excel Table.
                </p>
              </div>
              <div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">Step 2</span>
                <p className="mt-2 text-gray-700">
                  Press Ctrl+Shift+$ (Windows) or Cmd+Shift+$ (Mac) for Currency format.
                </p>
              </div>
              <div>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded font-semibold">Step 3</span>
                <p className="mt-2 text-gray-700">
                  Verify: 2 decimal places, comma separators, dollar signs, red for negatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Standards */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Why Professional Structure Matters for Investors</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Systematic Approach</h4>
              <p className="text-blue-800 mb-4">
                Excel Tables demonstrate Sarah can build systematic financial systems, not 
                ad-hoc lists that change daily. Investors trust systematic processes.
              </p>
              <h4 className="font-semibold text-blue-900 mb-2">Verifiable Structure</h4>
              <p className="text-blue-800">
                Consistent headers, formatting, and organization mean investors can verify 
                totals and understand transactions in minutes, not hours.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Professional Standards</h4>
              <p className="text-blue-800 mb-4">
                Clean, formatted Excel Tables look professional. Handwritten notebooks 
                signal amateur status to potential investors.
              </p>
              <h4 className="font-semibold text-blue-900 mb-2">Scalability Foundation</h4>
              <p className="text-blue-800">
                Table structure shows system can handle business growth without breaking. 
                Investors bet on scalable, reliable systems.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Common Table Patterns */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Professional Ledger Table Patterns</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Standard Ledger Columns</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <code className="block bg-gray-100 p-2 rounded mb-2">
                  Date | Description | Account | Type | Debit | Credit
                </code>
                <p className="text-gray-600">Essential columns for professional transaction recording</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Account Types Column</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <code className="block bg-gray-100 p-2 rounded mb-2">
                  Asset | Liability | Equity | Revenue | Expense
                </code>
                <p className="text-gray-600">Classifies accounts for filtering and analysis</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehension Check */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Introduction Phase: Excel Table Structure and Formatting Mastery Check"
          showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}