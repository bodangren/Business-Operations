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
      text: "An Excel {blank} is a structured data object that treats your data as a single, intelligent unit.",
      answer: "Table",
      hint: "This feature makes your data expandable and uses structured references"
    },
    {
      id: "q2",
      text: "The {blank} function allows you to add up numbers in a range, but only if they meet a specific condition.",
      answer: "SUMIF",
      hint: "This function has three parts: range, criteria, and sum_range"
    },
    {
      id: "q3", 
      text: "Instead of cell references like A1:A50, Excel Tables use {blank} references like Table1[Account].",
      answer: "structured",
      hint: "These references are more readable and automatically expand"
    },
    {
      id: "q4",
      text: "In the SUMIF formula =SUMIF(Table1[Account], \"Cash\", Table1[Debit]), the word \"Cash\" is the {blank}.",
      answer: "criteria",
      hint: "This tells Excel what to look for in the range column"
    }
  ]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What is the main advantage of using an Excel Table instead of a regular range of cells?",
      answers: [
        "Excel Tables expand automatically and use structured references",
        "Excel Tables look prettier with automatic colors", 
        "Excel Tables are smaller and use less memory",
        "Excel Tables can only be used for financial data"
      ],
      explanation: "Excel Tables automatically expand when new data is added and use structured references (like Table1[Account]) which are easier to read and maintain than cell references like A1:B10."
    },
    {
      id: "q2",
      question: "In Sarah's TechStart Solutions ledger, which SUMIF formula would calculate the total revenue earned?",
      answers: [
        "=SUMIF(Table1[Account], \"Revenue\", Table1[Credit])",
        "=SUMIF(Table1[Account], \"Revenue\", Table1[Debit])",
        "=SUMIF(Table1[Debit], \"Revenue\", Table1[Credit])",
        "=SUMIF(Table1[Credit], \"Revenue\", Table1[Account])"
      ],
      explanation: "Revenue increases with credits (following the DEA-LER rule), so we sum the Credit column where the Account column equals \"Revenue\"."
    },
    {
      id: "q3",
      question: "What happens to SUMIF formulas when you add a new transaction to an Excel Table?",
      answers: [
        "The formulas automatically include the new data",
        "You must manually update each SUMIF formula",
        "The formulas will show error messages", 
        "You need to recreate the entire table"
      ],
      explanation: "Excel Tables automatically expand to include new data, and SUMIF formulas using structured references automatically include this new data without any manual updates."
    },
    {
      id: "q4",
      question: "Why do professional financial models use SUMIF instead of manually adding cells?",
      answers: [
        "Both saves time and updates automatically",
        "SUMIF formulas are required by accounting standards",
        "Manual addition takes too long and is error-prone", 
        "SUMIF automatically updates when new data is added"
      ],
      explanation: "SUMIF provides both efficiency (faster than manual addition) and reliability (automatically includes new matching data), making it essential for professional financial models."
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
            Excel Tables: The Professional Foundation
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              An <strong>Excel Table</strong> is far more than just formatted cells with colors 
              and borders. It's a structured data object that Excel treats as a single, 
              intelligent unit. When you convert Sarah's transaction list into an Excel Table, 
              several powerful features activate automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Key Excel Table Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-blue-900">Automatic Expansion</h4>
                  <p className="text-blue-800">
                    When Sarah adds a new transaction, the table grows automatically. 
                    No need to manually adjust ranges in formulas.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Structured References</h4>
                  <p className="text-blue-800">
                    Instead of cryptic cell references like "A1:A50", you use readable 
                    names like "Table1[Account]".
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900">Built-in Filtering</h4>
                  <p className="text-blue-800">
                    Every column header becomes a filter button, making data analysis 
                    instant and intuitive.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Business Applications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-green-900">Investor Confidence</h4>
                  <p className="text-green-800">
                    Professional formatting and structure demonstrate systematic 
                    financial management to potential investors.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Scalability</h4>
                  <p className="text-green-800">
                    As TechStart Solutions grows, the table grows seamlessly without 
                    breaking formulas or calculations.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Error Reduction</h4>
                  <p className="text-green-800">
                    Structured references reduce formula errors and make spreadsheets 
                    easier to audit and debug.
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
                  Select any cell in your data range (Excel will detect the edges automatically)
                </p>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">Step 2</span>
                <p className="mt-2 text-gray-700">
                  Press Ctrl+T or go to Insert → Table. Confirm your data range has headers.
                </p>
              </div>
              <div>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-semibold">Step 3</span>
                <p className="mt-2 text-gray-700">
                  Excel applies professional formatting and activates all table features automatically.
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

        {/* SUMIF Functions */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <Code className="h-6 w-6 text-purple-600" />
            SUMIF Functions: Automated Calculations
          </h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              While Excel Tables organize your data professionally, <strong>SUMIF functions</strong> 
              make it intelligent. Instead of manually scanning through hundreds of transactions 
              to find all "Cash" entries, SUMIF does this instantly with mathematical precision.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">The SUMIF Formula Structure</h3>
            <div className="bg-white p-4 rounded border font-mono text-lg text-center">
              =SUMIF(range, criteria, sum_range)
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm">
              <div>
                <h4 className="font-semibold text-purple-900">range</h4>
                <p className="text-purple-800">
                  The column where your condition lives (e.g., the "Account" column)
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900">criteria</h4>
                <p className="text-purple-800">
                  What you're looking for (e.g., "Cash", "Revenue", "Expenses")
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900">sum_range</h4>
                <p className="text-purple-800">
                  The column containing numbers to add up (e.g., "Debit" or "Credit")
                </p>
              </div>
            </div>
          </div>

          {/* TechStart Example */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800">TechStart Solutions Example</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                Sarah needs to calculate her total cash balance. In her Excel Table (named "LedgerTable"), 
                she has columns for Account, Debit, and Credit. Here's how SUMIF solves this:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-900 mb-2">Formula for Cash Debits:</h4>
                  <code className="text-green-700 bg-gray-100 px-2 py-1 rounded">
                    =SUMIF(LedgerTable[Account], "Cash", LedgerTable[Debit])
                  </code>
                  <p className="text-sm text-orange-700 mt-2">
                    This finds all rows where Account = "Cash" and sums the corresponding Debit amounts.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-900 mb-2">Formula for Cash Credits:</h4>
                  <code className="text-red-700 bg-gray-100 px-2 py-1 rounded">
                    =SUMIF(LedgerTable[Account], "Cash", LedgerTable[Credit])
                  </code>
                  <p className="text-sm text-orange-700 mt-2">
                    This finds all rows where Account = "Cash" and sums the corresponding Credit amounts.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-orange-900 mb-2">Final Cash Balance:</h4>
                  <code className="text-blue-700 bg-gray-100 px-2 py-1 rounded text-xs">
                    =SUMIF(LedgerTable[Account], "Cash", LedgerTable[Debit]) - SUMIF(LedgerTable[Account], "Cash", LedgerTable[Credit])
                  </code>
                  <p className="text-sm text-orange-700 mt-2">
                    This calculates the net cash balance: total debits minus total credits.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Standards */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Why This Matters for Investors</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Systematic Controls</h4>
              <p className="text-blue-800 mb-4">
                Professional financial models use SUMIF because it creates systematic, 
                repeatable processes. Investors can trust that calculations are consistent 
                and accurate across all accounts.
              </p>
              <h4 className="font-semibold text-blue-900 mb-2">Scalability Confidence</h4>
              <p className="text-blue-800">
                When investors see Excel Tables and SUMIF formulas, they know the system 
                can handle business growth without breaking down or requiring manual 
                intervention.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 mb-2">Error Prevention</h4>
              <p className="text-blue-800 mb-4">
                Manual calculations introduce human error. SUMIF eliminates this risk, 
                providing mathematical precision that investors require for due diligence.
              </p>
              <h4 className="font-semibold text-blue-900 mb-2">Professional Presentation</h4>
              <p className="text-blue-800">
                Excel Tables with SUMIF formulas demonstrate that the founder understands 
                modern business tools and can implement professional-grade financial systems.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Common SUMIF Patterns */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Common SUMIF Patterns for Business</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Revenue Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <code className="block bg-gray-100 p-2 rounded mb-2">
                  =SUMIF(LedgerTable[Account], "Revenue", LedgerTable[Credit])
                </code>
                <p className="text-gray-600">Sums all revenue credits (revenue increases with credits)</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Expense Calculation</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <code className="block bg-gray-100 p-2 rounded mb-2">
                  =SUMIF(LedgerTable[Account], "Advertising", LedgerTable[Debit])
                </code>
                <p className="text-gray-600">Sums all advertising debits (expenses increase with debits)</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Comprehension Check */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Introduction Phase: Excel Tables and SUMIF Mastery Check"
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