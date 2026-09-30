import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function Phase6Content() {

  return (
    <div className="bg-gradient-to-b from-rose-50 to-orange-50">

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

    </div>
  )
}
