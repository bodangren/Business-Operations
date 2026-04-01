import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-orange-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <Card className="border-orange-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-orange-900">Unit 6: The PriceLab Challenge - Recap</CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Sarah's Problem</p>
                  <p className="text-gray-600 text-sm">Her business was growing but profit was shrinking—the Profit Paradox.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">The Pricing Scoreboard</p>
                  <p className="text-gray-600 text-sm">A good price must be: Profitable + Competitive + Defensible</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900">Our Unit Question</p>
                  <p className="text-gray-600 text-sm">What pricing strategy hits our profit target while staying competitive?</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <ReflectionJournal 
          unitTitle="Unit 6: PriceLab Challenge - Lesson 1 Reflection"
          prompts={[
            {
              id: 'u6-l1-understanding',
              category: 'understanding',
              prompt: 'What is the "Profit Paradox" and why did it catch Sarah off guard?',
              placeholder: 'Think about the relationship between revenue growth and profit...'
            },
            {
              id: 'u6-l1-confidence',
              category: 'confidence',
              prompt: 'How do the three pillars of the pricing scoreboard (profitable, competitive, defensible) work together? Can a price be competitive but not profitable?',
              placeholder: 'Think about the scenario where Sarah matched the cheapest competitor...'
            },
            {
              id: 'u6-l1-application',
              category: 'application',
              prompt: 'What pricing calculation or concept are you most curious to learn in the next lesson?',
              placeholder: 'e.g., I want to learn how to calculate exactly how much I need to charge...'
            }
          ]}
        />

        <div className="prose prose-lg max-w-none">
          <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200">
            <h2 className="text-xl font-bold text-indigo-900 mb-3 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              What's Next?
            </h2>
            <p className="text-indigo-800">
              In <strong>Lesson 2</strong>, you'll learn the difference between <strong>markup</strong> and <strong>margin</strong>—two ways to add profit to your costs that sound similar but work very differently. This is where the math starts.
            </p>
            <p className="text-indigo-800 mt-2">
              By the end of Lesson 2, you'll be able to calculate exactly what multiplier to use to hit your profit targets.
            </p>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
