import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

export default function Phase1Page() {
  const comprehensionQuestions = [
    {
      id: "q1",
      question: "Based on Sarah's month-end challenge, what do you predict would be the BIGGEST benefit of Excel Tables for her TechStart Solutions business?",
      answers: [
        "Making her spreadsheets look more professional for investors",
        "Automatically expanding to include new transactions without breaking formulas",
        "Reducing the file size of her Excel workbooks",
        "Making it easier to change font colors and formatting"
      ],
      explanation: "Excel Tables automatically expand when new data is added, ensuring that all formulas and references continue to work correctly. This is crucial for month-end procedures where new transactions are constantly being added."
    },
    {
      id: "q2", 
      question: "If Sarah currently spends 2 days each month manually updating formulas and ranges, what would be a realistic time savings goal with Excel Tables?",
      answers: [
        "From 2 days to 1.5 days (25% improvement)",
        "From 2 days to 4 hours (75% improvement)", 
        "From 2 days to 30 minutes (95% improvement)",
        "No time savings - just better accuracy"
      ],
      explanation: "Excel Tables with structured references can dramatically reduce manual formula updates, realistically achieving 75% time savings by automating range expansion and formula updates."
    },
    {
      id: "q3",
      question: "Why would SUMIF functions be essential for Sarah's automated month-end wizard?",
      answers: [
        "To add up all numbers in her spreadsheet faster",
        "To conditionally sum only specific types of transactions (like accruals vs deferrals)",
        "To create colorful charts for investor presentations", 
        "To automatically save her Excel files to the cloud"
      ],
      explanation: "SUMIF functions allow conditional summing based on criteria, perfect for categorizing and totaling different types of adjusting entries in month-end procedures."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Sarah's Excel Tables Challenge
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how Excel Tables and SUMIF functions can transform Sarah's chaotic month-end process into an automated wizard that saves days of work.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Hook Introduction */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Sarah thought she had it made. TechStart Solutions was growing fast—three new clients this month, 
              revenue up 40%, and even her first potential investor meeting scheduled. But then came month-end closing. 
              What should have been a celebration turned into a nightmare.
            </p>
          </div>

          {/* Sarah's Dilemma Card */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                ⚠️ Sarah's Month-End Crisis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-orange-800">
                <strong>The Problem:</strong> Sarah's Excel spreadsheets are a tangled mess. Every month, she has to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-800">
                <li>Manually update 47 different formula ranges as new transactions get added</li>
                <li>Copy and paste SUMIF formulas, often breaking references or missing new data</li>
                <li>Spend 2 full days just getting her adjusting entries to calculate correctly</li>
                <li>Triple-check everything because one wrong cell reference ruins everything</li>
              </ul>
              <div className="bg-orange-100 p-4 rounded border border-orange-300">
                <p className="font-semibold text-orange-900">
                  "I spent 16 hours last month just fixing broken formulas. My investor meeting is in 3 days, 
                  and I still don't trust my numbers. There has to be a better way!"
                </p>
                <p className="text-sm text-orange-700 mt-2">— Sarah Chen, TechStart Solutions</p>
              </div>
            </CardContent>
          </Card>

          {/* Before vs After Comparison */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  😫 Before: Manual Formula Hell
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-red-100 p-3 rounded font-mono text-sm text-red-900">
                  =SUM(A1:A23) {/* Breaks when row 24 is added */}
                  <br />
                  =SUMIF(B1:B23,"Accrual",C1:C23) {/* Missing new data */}
                  <br />
                  =SUMIF(D1:D47,"Deferral",E1:E47) {/* Manual range update */}
                </div>
                <ul className="text-red-800 space-y-1 text-sm">
                  <li>• Fixed ranges that break with new data</li>
                  <li>• Manual formula updates every month</li>
                  <li>• Error-prone copy/paste operations</li>
                  <li>• 2 days of troubleshooting time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  ✨ After: Excel Tables Automation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="bg-green-100 p-3 rounded font-mono text-sm text-green-900">
                  =SUM(TransactionTable[Amount]) {/* Auto-expands */}
                  <br />
                  =SUMIF(TransactionTable[Type],"Accrual",TransactionTable[Amount])
                  <br />
                  =SUMIF(AdjustingTable[Category],"Deferral",AdjustingTable[Value])
                </div>
                <ul className="text-green-800 space-y-1 text-sm">
                  <li>• Structured references that auto-expand</li>
                  <li>• Zero manual formula updates needed</li>
                  <li>• Self-maintaining table relationships</li>
                  <li>• 2 hours total for month-end close</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Why This Matters */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Why This Matters for Your Future</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Excel Tables and SUMIF functions aren't just about making spreadsheets work better—they're about 
                building the foundation for professional financial automation that investors expect to see.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-2">⏱️</div>
                  <h4 className="font-semibold text-blue-900">Time Efficiency</h4>
                  <p className="text-sm text-blue-700">Reduce month-end closing from days to hours</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-2">🎯</div>
                  <h4 className="font-semibold text-blue-900">Investor Confidence</h4>
                  <p className="text-sm text-blue-700">Demonstrate scalable, professional systems</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-2">🚀</div>
                  <h4 className="font-semibold text-blue-900">Business Growth</h4>
                  <p className="text-sm text-blue-700">Focus on strategy instead of manual processes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Hook Understanding Check"
            description="Test your understanding of Excel Tables benefits for month-end automation."
            questions={comprehensionQuestions}
            showExplanations={true}
          />

          {/* Turn and Talk Discussion */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="h-5 w-5 text-purple-600 mt-1" />
                <div>
                  <p className="font-medium text-purple-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-purple-800 mb-3">
                    Think about Sarah's Excel Tables challenge. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-purple-800">
                    <li>What other business processes could benefit from "auto-expanding" Excel features?</li>
                    <li>How might Excel Tables change the way you approach data organization in business?</li>
                    <li>What questions do you have about building these automated systems?</li>
                  </ul>
                </div>
              </div>
              <div className="bg-purple-100 p-3 rounded border border-purple-300">
                <p className="text-sm text-purple-700">
                  <strong>Key Insight:</strong> Excel Tables aren't just about convenience—they're about building 
                  scalable business systems that grow with your company and impress professional stakeholders.
                </p>
              </div>
            </CardContent>
          </Card>
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