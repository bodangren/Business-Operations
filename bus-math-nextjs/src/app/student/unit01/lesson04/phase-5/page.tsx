import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ArtifactBuilder from "@/components/accounting/ArtifactBuilder"
import { CheckCircle, BookOpen, Lightbulb, FileText } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

const technicalQuestions = [
  {
    id: "q1",
    question: "What is the primary purpose of converting data to an Excel Table?",
    answers: [
      "Create professional structure with automatic expansion and built-in features",
      "Add pretty colors to make data look nice",
      "Hide raw data from view",
      "Make calculations work faster"
    ],
    explanation: "Excel Tables provide systematic structure, automatic expansion, structured references, and built-in features like filtering that make ledgers professional and verifiable."
  },
  {
    id: "q2",
    question: "When you create an Excel Table, which step is MOST critical to avoid?",
    answers: [
      "Forgetting to check 'My table has headers' checkbox",
      "Choosing a table color",
      "Adding too many columns",
        "Naming the table with uppercase letters"
    ],
    explanation: "Forgetting to confirm headers is a critical mistake. Excel will treat your first data row as headers, losing data and causing formula errors."
  },
  {
    id: "q3",
    question: "Why is currency formatting important for investor-ready ledgers?",
    answers: [
      "Makes values immediately readable, comparable, and professional",
      "Calculations won't work without it",
      "Excel requires it for all numeric columns",
      "It's just for appearance"
    ],
    explanation: "Currency formatting ensures immediate readability, consistent presentation, and professional appearance—all critical for investor trust and verification."
  },
  {
    id: "q4",
    question: "What happens when you add a new row to a properly named Excel Table?",
    answers: [
      "Table expands automatically and applies formatting to new row",
      "You must manually update table range",
      "Formatting disappears",
      "Table breaks and a error appears"
    ],
    explanation: "Excel Tables automatically expand to include new rows, maintaining consistent formatting and structure—this is key for scalability."
  },
  {
    id: "q5",
    question: "What table name pattern is best for structured references?",
    answers: [
      "CamelCase with clear purpose (e.g., LedgerTable)",
      "All lowercase with spaces (e.g., ledger table)",
      "Random letters (e.g., xyz)",
      "Spaces and special characters (e.g., Table #1)"
    ],
    explanation: "CamelCase names like LedgerTable work best for structured references. Avoid spaces and special characters to prevent formula errors."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Assessment Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Audit and Explain
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Technical Check and Artifact Task
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Now you'll demonstrate your Excel Table mastery through a brief technical 
              check and a short artifact explaining why your structure choices matter 
              for Sarah's investor meeting.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Lightbulb className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Why Assessment and Artifact?</h3>
                <p className="text-blue-800 text-sm">
                  Professional Excel work requires both technical understanding AND ability 
                  to explain your decisions. Sarah's investor needs to trust her system 
                  AND understand why it's reliable. This phase checks both.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Check */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <CheckCircle className="h-6 w-6 text-blue-600" />
            Part 1: Technical Check (5 questions)
          </h2>
          
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Excel Table Technical Mastery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-blue-700">
                These questions test your understanding of Excel Table mechanics, 
                common failure modes, and professional formatting standards. 
                Answer all 5 to continue to the artifact task.
              </p>
              
              <div className="bg-gray-50 p-4 rounded border">
                <p className="text-sm font-medium text-gray-900 mb-2">Topics covered:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white px-2 py-1 rounded text-xs">Table purpose</span>
                  <span className="bg-white px-2 py-1 rounded text-xs">Critical steps</span>
                  <span className="bg-white px-2 py-1 rounded text-xs">Formatting importance</span>
                  <span className="bg-white px-2 py-1 rounded text-xs">Auto-expansion</span>
                  <span className="bg-white px-2 py-1 rounded text-xs">Naming conventions</span>
                </div>
              </div>

              <ComprehensionCheck
                questions={technicalQuestions}
                title=""
                description=""
                showExplanations={true}
                allowRetry={true}
              />
            </CardContent>
          </Card>
        </section>

        {/* Artifact Task */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            Part 2: Brief Artifact Task
          </h2>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Explain Your Structure Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded border border-purple-200">
                <p className="text-sm text-purple-900 mb-2">
                  <strong>Your task:</strong> Write a brief defense of your Excel Table 
                  structure decisions, connecting them to Sarah's investor trust problem.
                </p>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-purple-900 text-sm">Part 1 (2-3 sentences):</p>
                    <p className="text-purple-800 text-sm">
                      Explain why your 6-column structure (Date, Description, Account, Type, Debit, Credit) 
                      is the right choice for Sarah's investor meeting.
                    </p>
                  </div>
                  <div>
                    <p className="font-medium text-purple-900 text-sm">Part 2 (3-4 sentences):</p>
                    <p className="text-purple-800 text-sm">
                      Explain how your formatting (currency, table name, professional styling) signals 
                      serious financial control and makes the ledger immediately verifiable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded border border-purple-300">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-purple-900 mb-2">Artifact Purpose</p>
                    <p className="text-purple-800 text-sm">
                      This artifact separates true professionals from those who just follow 
                      instructions. Investors need founders who can explain WHY their 
                      financial systems are trustworthy, not just HOW to build them.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ArtifactBuilder />
        </section>

        {/* Success Criteria */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Phase 5 Complete When...</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Technical Check</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Answered all 5 technical questions correctly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Understand common Excel Table failure modes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Can explain why formatting matters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Know naming conventions for structured references</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-3">Artifact Task</h4>
                  <ul className="space-y-2 text-sm text-green-800">
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Completed Part 1: Structure rationale (2-3 sentences)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Completed Part 2: Structure defense (3-4 sentences)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Connected decisions to investor trust context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex-shrink-0 mt-1">□</span>
                      <span>Explained professional formatting benefits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-4 rounded border border-green-300 mt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-green-900 mb-2">What You'll Demonstrate</p>
                    <p className="text-sm text-green-800">
                      Completing Phase 5 proves you understand not just Excel Table mechanics, 
                      but why professional structure matters for investor trust. You can explain 
                      your design choices and connect them to real business credibility.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
