import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Clock, Zap, Calculator, Users, Lightbulb } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[0]

const comprehensionQuestions = [
  {
    id: "q1",
    question: "What Excel feature do you predict will be most challenging for Sarah to master?",
    answers: [
      "Writing SUMIF formulas correctly",
      "Creating basic Excel Tables",
      "Setting up automated calculations", 
      "Organizing transaction data professionally"
    ],
    explanation: "SUMIF formulas require understanding syntax and logical criteria, making them typically the most challenging Excel skill to master initially."
  },
  {
    id: "q2",
    question: "Based on the manual vs. automated demonstration, what's the biggest benefit of Excel automation?",
    answers: [
      "Both eliminates errors and saves time",
      "Makes spreadsheets look more colorful",
      "Eliminates human calculation errors",
      "Reduces time spent on repetitive tasks"
    ],
    explanation: "Excel automation provides dual benefits: mathematical accuracy and time efficiency, both critical for professional ledger management."
  },
  {
    id: "q3",
    question: "Why would investors care about Sarah's Excel skills?",
    answers: [
      "It demonstrates systematic financial controls",
      "It shows she knows how to use computers",
      "It proves she can make colorful spreadsheets",
      "It indicates she doesn't need an accountant"
    ],
    explanation: "Investors value systematic financial controls because they indicate responsible management and reduce investment risk."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Hook Introduction */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Sarah's Excel Tables Challenge
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah stares at her computer screen, frustrated. She's been trying to calculate 
              her total cash balance for the past 20 minutes, manually adding up dozens of 
              transactions from her growing TechStart Solutions business. Every time she gets 
              a different answer.
            </p>
          </div>
        </section>

        {/* Sarah's Dilemma */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                The Manual Process Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  "There has to be a better way," she mutters, rubbing her temples. With three 
                  new clients and transactions flowing in weekly, her simple list of entries 
                  isn't cutting it anymore. She needs a system that can handle the complexity 
                  and do the math automatically—without errors.
                </p>
                <p>
                  Little does Sarah know, she's about to discover Excel Tables and SUMIF functions—
                  professional tools that will transform her chaotic manual calculations into an 
                  automated, self-updating financial system that scales with her business growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Before vs After Demonstration */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Manual vs. Automated: The Transformation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Manual Process (Before)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2 text-red-700">
                  <li>• Scroll through entire transaction list</li>
                  <li>• Find all "Cash" transactions manually</li>
                  <li>• Add debits and credits separately</li>
                  <li>• Calculate final balance by hand</li>
                  <li>• Repeat for every account</li>
                  <li>• <strong>Result:</strong> 20+ minutes, multiple errors</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Automated Process (After)
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2 text-green-700">
                  <li>• Excel Table automatically organizes data</li>
                  <li>• SUMIF formulas find transactions instantly</li>
                  <li>• All calculations update automatically</li>
                  <li>• Account balances always current</li>
                  <li>• Professional formatting included</li>
                  <li>• <strong>Result:</strong> 30 seconds, perfect accuracy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Why This Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed">
                Mastering Excel Tables and SUMIF functions isn't just about following 
                formulas—it's about building the foundation for investor confidence. When 
                Sarah shows potential investors her self-auditing ledger, they can 
                immediately see that she understands how to systematically manage business 
                finances with professional-grade tools.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Comprehension Check */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Hook Engagement Check"
            description="Test your predictions about Excel automation challenges"
            questions={comprehensionQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        {/* Turn and Talk Discussion */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-purple-800 mb-2">
                Think about Sarah's experience with manual calculations versus Excel automation. 
                Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What specific problems do you see with her current manual approach?</li>
                <li>How might these problems affect her relationship with clients?</li>
                <li>What Excel features do you predict will be most challenging to master?</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 rounded border border-purple-200">
                <p className="text-sm text-purple-700">
                  <strong>Discussion Goal:</strong> Students should identify the business risks 
                  of manual processes and begin to see Excel automation as a professional necessity.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview of Next Phase */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-700">Coming Up Next: Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In the next phase, we'll dive deep into Excel Tables and SUMIF functions. 
                You'll learn the technical skills that transform Sarah's manual calculations 
                into automated precision, building the foundation of her smart ledger system.
              </p>
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