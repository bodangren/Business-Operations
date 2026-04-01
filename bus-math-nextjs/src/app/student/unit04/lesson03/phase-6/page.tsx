import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5]

const reflectionPrompts = [
  {
    id: 'outlier-confidence',
    category: 'confidence' as const,
    prompt: 'Outlier detection requires making judgment calls that aren\'t always clear-cut. Describe a time in this lesson when you felt unsure whether a value was an error or legitimate business. How did you build confidence in your decision?',
    placeholder: 'Think about the $127.50 catering order vs. the $0.05 error. Both were unusual, but very different decisions...'
  },
  {
    id: 'statistics-business-judgment',
    category: 'adaptability' as const,
    prompt: 'The z-score told us the $0.05 was "normal" mathematically, but you still identified it as an error. How did you adapt your approach to combine statistical rules with practical business judgment?',
    placeholder: 'Consider how you balanced the math (z-score) with the reality (no items cost 5 cents)...'
  },
  {
    id: 'data-quality-persistence',
    category: 'persistence' as const,
    prompt: 'Cleaning data takes patience - you can\'t just delete everything that looks unusual. Describe a moment when you had to persist through the careful thinking required to make good data quality decisions.',
    placeholder: 'Reflect on the work of calculating z-scores, comparing with/without outliers, and documenting decisions...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        <div className="prose prose-lg max-w-none">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900 text-2xl">Your Data Detective Toolkit</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-800">
              <p className="text-lg leading-relaxed">
                You've completed your first data quality investigation. Sarah is confident you can now 
                handle messy real-world data with the same rigor professional analysts use.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                <h3 className="font-semibold text-indigo-900 mb-2">What You Can Now Do</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-indigo-900 text-sm">Statistical Tools</h4>
                    <ul className="text-xs text-indigo-800 space-y-1 mt-1">
                      <li>• Calculate z-scores: z = (x - μ) / σ</li>
                      <li>• Apply the ±2 rule for outlier detection</li>
                      <li>• Compare statistics with and without outliers</li>
                      <li>• Measure impact on planning calculations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-indigo-900 text-sm">Business Judgment</h4>
                    <ul className="text-xs text-indigo-800 space-y-1 mt-1">
                      <li>• Distinguish errors from real events</li>
                      <li>• Decide: keep, flag, or correct outliers</li>
                      <li>• Document decisions with reasoning</li>
                      <li>• Explain choices to stakeholders</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">How This Connects to the Café's Goal</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <p className="text-lg leading-relaxed mb-4">
              Sarah can now build her forecasting models on clean, reliable data. The café's waste reduction 
              plan depends on accurate predictions - and accurate predictions depend on clean data.
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Today</h4>
                <p className="text-xs text-green-800 mt-1">
                  Clean data + identified outliers
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Next Lesson</h4>
                <p className="text-xs text-green-800 mt-1">
                  Use clean data to predict future sales
                </p>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Unit Goal</h4>
                <p className="text-xs text-green-800 mt-1">
                  Reduce waste from 8-12% to 3%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 text-xl">When Will You Use This?</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Any Data Analysis Job</h4>
                <p className="text-sm text-blue-800">
                  Every dataset has outliers. Banks flag suspicious transactions, healthcare identifies 
                  unusual test results, retailers spot异常的 purchase patterns.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Business Consulting</h4>
                <p className="text-sm text-blue-800">
                  When you present numbers to clients, they will ask "why is this different from the raw data?"
                  You need documentation and reasoning for every decision.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Research & Science</h4>
                <p className="text-sm text-blue-800">
                  Every scientific study begins with data cleaning. Your outlier detection skills are 
                  foundational to any research career.
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Quality Control</h4>
                <p className="text-sm text-blue-800">
                  Manufacturing uses the same ±2 rule to identify defective products. The same 
                  statistical thinking applies everywhere.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <ReflectionJournal
          unitTitle="Outlier Detection & Data Quality - Lesson 3 Reflection"
          prompts={reflectionPrompts}
        />

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 text-xl">Coming Up Next</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-800">
            <p className="text-lg leading-relaxed">
              With clean data in hand, Sarah can now build forecasting models to predict future sales. 
              In the next lesson, you'll learn how to use the patterns in past data to predict what 
              might happen next - the foundation of every business plan.
            </p>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit04Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  )
}