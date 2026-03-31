import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, CheckCircle2 } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson04Data, unit02Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit02Data} 
        lesson={lesson04Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Reflection
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              The Complete Close: What You Now Know
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Consolidate your understanding of the month-end close workflow and prepare for the Excel build lessons.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <CheckCircle2 className="h-6 w-6" />
                What You Can Now Do
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-800">
                After completing this lesson, you should be able to:
              </p>
              <ul className="text-sm text-indigo-800 space-y-2 ml-4 list-disc">
                <li>Walk through all six steps of the month-end close in the correct order</li>
                <li>Identify every type of recurring adjustment: accruals, deferrals, depreciation, and accrued items</li>
                <li>Record adjusting entries with correct debit/credit accounts and amounts</li>
                <li>Explain how a missed adjustment affects both the income statement and the balance sheet</li>
                <li>Use a close checklist to ensure no step is skipped</li>
                <li>Explain why the order matters: adjustments before closing, closing before the post-closing trial balance</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                The Signal: When to Use This Method
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-800">
                How do you know when to apply the month-end close workflow? Look for these signals:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Time Signal:</h4>
                  <p className="text-sm text-amber-800">It is the end of an accounting period (month, quarter, or year) and the books need to be closed.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Account Signal:</h4>
                  <p className="text-sm text-amber-800">You see accounts like Prepaid Insurance, Supplies, Unearned Revenue, or Equipment that require periodic adjustment.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Quality Signal:</h4>
                  <p className="text-sm text-amber-800">Financial statements look wrong or net income does not match expectations—check whether all adjustments were recorded.</p>
                </div>
                <div className="bg-amber-100 p-4 rounded border border-amber-300">
                  <h4 className="font-semibold text-amber-900 mb-2">Control Signal:</h4>
                  <p className="text-sm text-amber-800">You need to prove the books are ready for the next period. The post-closing trial balance is your proof.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <ArrowRight className="h-6 w-6" />
                Preview: The First Excel Build Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-blue-800">
                You now understand the complete manual month-end flow. You know every step, every adjustment type, and every risk of skipping a step. But doing this by hand every month is slow and error-prone.
              </p>
              <p className="text-blue-800">
                In Lesson 5, you will begin building the first automation layer for Sarah's Month-End Wizard. You will learn how to structure an Excel workbook so that the close workflow you just mastered can be partially automated—reducing the time and eliminating the risk of missed steps.
              </p>
              <div className="bg-blue-100 p-4 rounded border border-blue-300">
                <p className="text-sm text-blue-700 font-semibold">Coming next:</p>
                <ul className="text-sm text-blue-800 mt-2 space-y-1 ml-4 list-disc">
                  <li>Structuring the workbook to mirror the close checklist</li>
                  <li>Building input areas for adjustment data</li>
                  <li>Creating calculation blocks that auto-compute adjusting entries</li>
                  <li>The first steps toward a clickable "Run Close" button</li>
                </ul>
              </div>
              <p className="text-blue-800 italic">
                The manual workflow you learned today is the blueprint. Every automation you build will follow this same sequence—just faster and with fewer errors.
              </p>
            </CardContent>
          </Card>

          <ReflectionJournal />
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
