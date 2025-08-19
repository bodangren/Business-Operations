import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { CheckCircle, Award, TrendingUp, Users } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[4]

export default function Phase5Page() {

  const assessmentQuestions = [
    {
      id: "q1",
      question: "In a professional financial model, why do structured references like 'LedgerTable[Account]' provide better investor confidence than cell references like 'A1:A50'?",
      answers: [
        "They automatically expand with new data and are easier to audit and understand",
        "They make the spreadsheet load faster and use less memory",
        "They are required by GAAP accounting standards",
        "They prevent other people from editing the spreadsheet"
      ],
      explanation: "Structured references expand automatically, are self-documenting (easier to understand), and reduce errors, all of which increase investor confidence in the financial model's reliability and scalability."
    },
    {
      id: "q2", 
      question: "Sarah's investor asks: 'How much revenue did you generate from clients whose names contain the word Tech?' Which Excel formula would answer this instantly?",
      answers: [
        "=SUMIF(LedgerTable[Description], \"*Tech*\", LedgerTable[Credit])",
        "=SUMIF(LedgerTable[Account], \"*Tech*\", LedgerTable[Debit])",
        "=COUNTIF(LedgerTable[Description], \"Tech\")",
        "=VLOOKUP(\"Tech\", LedgerTable, 3, FALSE)"
      ],
      explanation: "SUMIF with wildcard criteria (*Tech*) searches descriptions for partial matches and sums corresponding credit amounts, which represent revenue in the accounting equation."
    },
    {
      id: "q3",
      question: "What is the most critical business risk that Excel Tables and SUMIF formulas solve for growing startups like TechStart Solutions?",
      answers: [
        "Manual calculation errors that undermine investor confidence and business decisions",
        "Compliance with complex government tax regulations",
        "The inability to create colorful charts and presentations", 
        "Difficulty accessing data from multiple computer locations"
      ],
      explanation: "Manual calculation errors can lead to incorrect business decisions, inaccurate investor reports, and loss of credibility. Excel automation eliminates this critical risk."
    },
    {
      id: "q4",
      question: "A CFO uses this SUMIF formula: =SUMIF(LedgerTable[Account], \"Accounts Receivable\", LedgerTable[Debit]) - SUMIF(LedgerTable[Account], \"Accounts Receivable\", LedgerTable[Credit]). What business insight does this provide?",
      answers: [
        "How much money customers currently owe the company",
        "How much the company owes to suppliers",
        "The company's total monthly revenue",
        "The company's cash balance in the bank"
      ],
      explanation: "This formula calculates the net balance of Accounts Receivable (an asset account that increases with debits), showing the total amount customers owe to the company."
    },
    {
      id: "q5",
      question: "In a job interview, you're asked to explain why SUMIF formulas are superior to manual calculations for business reporting. What's the strongest professional argument?",
      answers: [
        "They provide mathematical precision, scale with business growth, and maintain audit trails",
        "They are faster to type than using a calculator",
        "They make spreadsheets look more professional with formulas",
        "They are easier to understand than basic arithmetic"
      ],
      explanation: "The combination of precision (no human error), scalability (handles growth), and audit trails (formulas show exact logic) makes SUMIF formulas essential for professional business operations."
    },
    {
      id: "q6",
      question: "Sarah's business partner accidentally enters a $5,000 expense as revenue. If Sarah's Excel Table uses proper SUMIF formulas, what will happen to her trial balance?",
      answers: [
        "The trial balance will be out of balance, alerting her to the error",
        "The trial balance will still balance, but the amounts will be wrong",
        "The SUMIF formulas will automatically correct the mistake",
        "Nothing will change because Excel ignores data entry errors"
      ],
      explanation: "If an expense is recorded as revenue (credit instead of debit), the trial balance will be out of balance because total debits won't equal total credits, immediately alerting to the error."
    },
    {
      id: "q7",
      question: "Which scenario best demonstrates why Excel Tables are essential for scaling a business beyond startup phase?",
      answers: [
        "Adding 100 new transactions automatically updates all SUMIF calculations without changing formulas",
        "Excel Tables prevent competitors from stealing business data",
        "The colors and formatting make presentations more attractive",
        "Excel Tables compress file sizes to save computer storage space"
      ],
      explanation: "Excel Tables automatically expand to include new data, and structured references ensure all SUMIF formulas include new transactions without manual formula updates - critical for business growth."
    },
    {
      id: "q8", 
      question: "An angel investor reviews Sarah's ledger and says 'I can see you understand systematic financial controls.' What Excel features specifically demonstrated this?",
      answers: [
        "Excel Tables with SUMIF formulas creating automated, error-checked calculations",
        "Using multiple colors and fonts throughout the spreadsheet",
        "Having separate worksheets for different types of data",
        "Including the company logo in the header of each sheet"
      ],
      explanation: "Systematic financial controls involve automated, repeatable processes with built-in error checking. Excel Tables with SUMIF formulas demonstrate these professional standards."
    },
    {
      id: "q9",
      question: "In your future career, which profession would most directly benefit from mastering Excel Tables and SUMIF functions?",
      answers: [
        "Financial Analyst at an investment firm analyzing portfolio companies",
        "Graphic designer creating marketing materials for social media",
        "Software programmer writing mobile app code",
        "Restaurant server taking orders and serving customers"
      ],
      explanation: "Financial analysts regularly work with complex datasets, need automated calculations, and must provide accurate reports to stakeholders - directly matching Excel Tables and SUMIF applications."
    },
    {
      id: "q10",
      question: "Sarah's Excel system calculates that she has -$500 in her Accounts Payable account (showing as negative when it should be positive). What does this indicate about her business situation?",
      answers: [
        "She has overpaid her suppliers and they owe her money",
        "She has underpaid her suppliers and owes them more money",
        "Her cash account balance is negative",
        "There is an error in her SUMIF formula syntax"
      ],
      explanation: "Accounts Payable is a liability account with a normal credit balance (positive). A negative balance means debits exceed credits, indicating overpayments to suppliers who now owe her money."
    }
  ]

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
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Tables & SUMIF: Professional Mastery Assessment
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Time to demonstrate your mastery of Excel Tables and SUMIF functions! This 
              assessment combines technical Excel knowledge with real-world business applications, 
              just like the challenges you'll face in professional finance roles.
            </p>
          </div>
        </section>

        {/* Introduction Content */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              These questions reflect the same expertise that impresses investors, hiring managers, 
              and business stakeholders. Take your time and think through both the technical mechanics 
              and the business implications of each scenario.
            </p>
          </div>
        </section>

        {/* Assessment Objectives */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Assessment Objectives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Technical Excel Mastery</h4>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Excel Table creation and structured references</li>
                  <li>SUMIF formula construction and troubleshooting</li>
                  <li>Professional spreadsheet design standards</li>
                  <li>System scalability and automation principles</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Business Application</h4>
                <ul className="text-blue-800 text-sm space-y-1 list-disc list-inside">
                  <li>Investor presentation and confidence building</li>
                  <li>Financial control systems and error detection</li>
                  <li>Career relevance and professional development</li>
                  <li>Real-world business problem solving</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Performance Standards */}
        <section className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2 text-sm">
                <Award className="h-4 w-4" />
                Exemplary (90-100%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-green-700">
                Demonstrates comprehensive understanding of both Excel techniques and their 
                strategic business applications. Answers reflect professional-level insight 
                and career readiness.
              </p>
            </CardContent>
          </Card>

          <Card className="border-yellow-200">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2 text-sm">
                <TrendingUp className="h-4 w-4" />
                Proficient (70-89%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-yellow-700">
                Shows solid grasp of Excel Tables and SUMIF functions with good understanding 
                of business applications. Ready for advanced Excel modeling with some additional 
                practice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                Developing (&lt;70%)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs">
              <p className="text-orange-700">
                Indicates need for additional practice with Excel automation concepts. 
                Review lesson materials and seek peer tutoring before moving to advanced topics.
              </p>
            </CardContent>
          </Card>
          </div>
        </section>

        {/* Main Assessment */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
          questions={assessmentQuestions}
          title="Excel Tables & SUMIF Functions: Professional Mastery Assessment"
          description="10 comprehensive questions covering technical skills, business applications, and career relevance"
          showExplanations={true}
          allowRetry={true}
          />
        </section>

        {/* Next Steps Based on Performance */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">After the Assessment: Your Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">High Performance (80%+)</h4>
                <p className="text-purple-800 mb-2">You're ready for advanced Excel modeling!</p>
                <ul className="text-purple-700 space-y-1 list-disc list-inside">
                  <li>Practice with more complex business scenarios</li>
                  <li>Explore advanced functions like SUMIFS, INDEX/MATCH</li>
                  <li>Begin building your professional portfolio</li>
                  <li>Consider mentoring peers who need additional support</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-purple-900 mb-2">Need Additional Practice (&lt;80%)</h4>
                <p className="text-purple-800 mb-2">Focus on strengthening your foundation:</p>
                <ul className="text-purple-700 space-y-1 list-disc list-inside">
                  <li>Review Excel Table creation and structured references</li>
                  <li>Practice SUMIF formula construction with TechStart data</li>
                  <li>Work with a study partner on business applications</li>
                  <li>Schedule office hours to discuss challenging concepts</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Professional Insight */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Professional Career Connection</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Entry-Level Positions Using These Skills</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>Financial Analyst:</strong> Build automated reporting models</li>
                <li>• <strong>Business Analyst:</strong> Analyze operational data trends</li>
                <li>• <strong>Accounting Associate:</strong> Maintain client ledger systems</li>
                <li>• <strong>Investment Banking Analyst:</strong> Financial modeling and valuation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Advanced Career Applications</h4>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>CFO:</strong> Design enterprise financial control systems</li>
                <li>• <strong>Management Consultant:</strong> Optimize client business processes</li>
                <li>• <strong>Investment Manager:</strong> Portfolio analysis and risk modeling</li>
                <li>• <strong>Entrepreneur:</strong> Build investor-ready financial presentations</li>
              </ul>
            </div>
          </div>
          </div>
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