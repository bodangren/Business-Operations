import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

export default function Phase6Page() {
  const prompts = [
    {
      id: 'intuitive-method',
      category: 'understanding' as const,
      prompt: 'Which inventory method felt most intuitive to you — Specific Identification or Weighted Average? Why?',
      placeholder: 'Describe which method clicked for you and what made it easier to understand...'
    },
    {
      id: 'challenging-concept',
      category: 'understanding' as const,
      prompt: 'What concept in this lesson was most challenging? How did you work through it?',
      placeholder: 'Share what was difficult and how you approached it...'
    },
    {
      id: 'business-context',
      category: 'application' as const,
      prompt: 'Think of a real business you know (a store, restaurant, or online seller). Which method would fit their inventory and why?',
      placeholder: 'Describe a real business and explain which method they should use...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-slate-900">You've Learned All Four Methods!</h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Today you completed your understanding of inventory valuation methods. You now know when and how to use 
              <strong> FIFO, LIFO, Specific Identification, and Weighted Average</strong>.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          {/* Key Takeaways */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Key Takeaways from Lesson 4
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Specific Identification</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>✓ Track exact cost of each unique item</li>
                    <li>✓ Use serial numbers, VINs, certificates</li>
                    <li>✓ Best for: cars, jewelry, custom equipment</li>
                    <li>✓ No assumptions — you know which item sold</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Weighted Average</h4>
                  <ul className="text-purple-800 text-sm space-y-1">
                    <li>✓ Pool all costs, divide by total units</li>
                    <li>✓ Same rate for COGS and Ending Inventory</li>
                    <li>✓ Best for: grain, fuel, bulk commodities</li>
                    <li>✓ Don't average prices — pool then divide</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Method Selection Guide</h4>
                <ul className="text-purple-800 text-sm space-y-1">
                  <li><strong>Unique items with serial numbers?</strong> → Specific Identification</li>
                  <li><strong>Identical items mixed together?</strong> → Weighted Average</li>
                  <li><strong>Perishable goods with expiration?</strong> → FIFO</li>
                  <li><strong>Rising costs, tax planning?</strong> → LIFO</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* What You've Accomplished */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                What You've Accomplished
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-950">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Learned why method choice depends on <strong>what you're tracking</strong> and <strong>why it matters</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Practiced calculating <strong>Specific Identification</strong> with exact-item tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Practiced calculating <strong>Weighted Average</strong> with pooled costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Matched inventory methods to <strong>real business contexts</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Understood common mistakes to avoid (averaging prices, wrong method for item type)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Reflection */}
          <ReflectionJournal unitTitle="Lesson 4 Reflection: Inventory Methods" prompts={prompts} />

          {/* Preview */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Coming Up: Lesson 5
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-950">
              <p className="mb-4">
                Now that you understand <strong>all four inventory methods</strong>, Lesson 5 will show you 
                how to build an Excel workbook that compares them side by side.
              </p>
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Lesson 5 Preview: Method Comparison Workbook</h4>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Build a workbook that calculates FIFO, LIFO, Specific ID, and Weighted Average</li>
                  <li>• Compare COGS and Ending Inventory across all four methods</li>
                  <li>• Create a recommendation based on business context</li>
                  <li>• Add validation checks to prove your numbers are trustworthy</li>
                </ul>
              </div>
              <p className="mt-4 text-blue-700 text-sm">
                <strong>Why it matters:</strong> Investors and lenders need to see that you understand how 
                method choice affects financial statements. Your workbook will prove that you can defend 
                your ending inventory number — no matter which method you choose.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}