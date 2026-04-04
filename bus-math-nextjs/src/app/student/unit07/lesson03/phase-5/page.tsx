import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, TrendingUp, Calculator, Briefcase } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Assessment phase

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Assessment Introduction */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Exit Ticket: FIFO and LIFO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-amber-900">
              Time to check your understanding! This assessment covers both the mechanics and 
              the business consequences of FIFO and LIFO inventory methods.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-300 text-center">
                <Calculator className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                <h4 className="font-semibold text-amber-800 mb-1">FIFO Calculations</h4>
                <p className="text-sm text-amber-700">Assign oldest costs to COGS first</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-300 text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                <h4 className="font-semibold text-amber-800 mb-1">LIFO Calculations</h4>
                <p className="text-sm text-amber-700">Assign newest costs to COGS first</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-300 text-center">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-amber-600" />
                <h4 className="font-semibold text-amber-800 mb-1">Business Strategy</h4>
                <p className="text-sm text-amber-700">When each method makes sense</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Concept Reference */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">📋 Quick Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-900">FIFO (First-In, First-Out)</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Oldest costs flow to COGS first</li>
                  <li>• Newer costs stay in ending inventory</li>
                  <li>• Higher reported profit when costs rise</li>
                  <li>• Often preferred for investor presentations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-blue-900">LIFO (Last-In, First-Out)</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Newest costs flow to COGS first</li>
                  <li>• Older costs stay in ending inventory</li>
                  <li>• Lower reported profit when costs rise</li>
                  <li>• Can reduce taxable income in inflationary periods</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
              <p className="text-blue-900 text-sm">
                <strong>Key Insight:</strong> From the exact same transactions, FIFO and LIFO produce 
                different COGS and Ending Inventory values. That's why method choice matters for 
                profit reporting, tax planning, and business decisions.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Assessment */}
        <ComprehensionCheck
          questions={assessmentQuestions}
          title="FIFO and LIFO Mastery Assessment"
          description="Demonstrate your understanding of both calculation methods and when to use each one."
          showExplanations={true}
          allowRetry={true}
        />

        {/* What's Next */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">🎯 Looking Ahead: Lesson 4</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800">
              Today you learned <strong>two</strong> ways toassign costs when inventory has different price layers. 
              In Lesson 4, you'll learn two more methods:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Specific Identification</h4>
                <p className="text-purple-700 text-sm">
                  Track the exact cost of each individual item. Perfect for unique, expensive, 
                  or serialized inventory like cars or jewelry.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Weighted Average</h4>
                <p className="text-purple-700 text-sm">
                  Blend all costs into one average. Ideal for similar items purchased frequently, 
                  like bulk materials or commodities.
                </p>
              </div>
            </div>
            <p className="text-purple-700 text-sm italic">
              By the end of Lesson 4, you'll know all four inventory methods and be able to 
              recommend the best one for any business situation.
            </p>
          </CardContent>
        </Card>

      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}