import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Target } from 'lucide-react'
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit01Phase5ComprehensionCheckItems } from "@/data/question-banks/unit01-phase5"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const assessmentQuestions = getUnit01Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Assessment Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Debit & Credit Rules Mastery Check
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate your debit and credit knowledge. This short assessment covers account
              behavior, T-accounts, journal entries, and entry balance checks.
            </p>
          </div>
        </section>

        {/* Assessment Instructions */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Assessment Instructions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-blue-800">
                <p>
                  This assessment evaluates your understanding of the systematic debit and credit 
                  rules that form the foundation of all professional accounting systems.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What You'll Demonstrate:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>✓ Mastery of DEA LER debit/credit rules</li>
                    <li>✓ Ability to analyze common transactions</li>
                    <li>✓ Understanding of T-account structure</li>
                    <li>✓ Journal-entry balance checks</li>
                    <li>✓ Connection to business applications</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Success Criteria:</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• 8/10 or higher demonstrates mastery</li>
                    <li>• 7/10 shows good understanding</li>
                    <li>• 6/10 indicates need for review</li>
                    <li>• Below 6/10 requires additional practice</li>
                  </ul>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  <strong>Study Tip:</strong> Before starting, review the DEA LER acronym: 
                  <em>Dividends, Expenses, Assets</em> increase with debits; 
                  <em>Liabilities, Equity, Revenue</em> increase with credits.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Assessment */}
        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Debit & Credit Rules Assessment"
            description="Demonstrate your mastery of debit and credit rules, T-account construction, and transaction analysis"
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        {/* Performance Reflection */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Award className="h-6 w-6" />
                Assessment Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  After completing the assessment, take a moment to reflect on your performance 
                  and readiness for the next phase of building Sarah's Smart Ledger.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Excellent (8-10/10)</h4>
                  <p className="text-green-800 text-sm">
                    You've mastered debit and credit rules! You're ready to build Excel formulas 
                    that automate these principles in Sarah's self-auditing ledger.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Good (6-7/10)</h4>
                  <p className="text-green-800 text-sm">
                    You understand the core concepts well. Review any missed questions and 
                    practice with complex transactions before moving to Excel automation.
                  </p>
                </div>
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Needs Review (&lt;6/10)</h4>
                  <p className="text-green-800 text-sm">
                    Return to the guided practice phase and work with your teacher to strengthen 
                    these foundational skills before proceeding.
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Career Connection</h4>
                <p className="text-blue-800">
                  The systematic thinking you've developed here—following consistent rules, 
                  checking for balance, and catching errors automatically—is exactly what 
                  employers value in business operations, data analysis, and financial management roles.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview Next Phase */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Coming Up Next: Reflection & Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-600">
                In the closing phase, you'll reflect on your debit and credit mastery using the 
                CAP framework (Courage, Adaptability, Persistence) and preview how these 
                foundational skills will enable Sarah to build Excel formulas that automatically 
                maintain perfect ledger balance—the key to her self-auditing system.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}
