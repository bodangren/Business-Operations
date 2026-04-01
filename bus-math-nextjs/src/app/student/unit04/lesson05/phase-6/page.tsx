import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { CheckCircle, BarChart2 } from "lucide-react"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Reflection and Handoff</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Data Cleaning Complete: Ready for Analysis</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your cleaned dataset is the foundation for reliable analysis. Now you can build forecasts with confidence.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">What You Accomplished</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Removed duplicate transactions (documented row count change)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Cleaned text inconsistencies (TRIM, PROPER)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Converted prices from text to numbers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Handled missing values with documented decisions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span>Created audit trail for investor credibility</span>
              </div>
              <p className="mt-2">Result: A clean, analysis-ready dataset that investors can trust.</p>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection: Data Cleaning Decisions"
            prompts={[
              {
                id: 'cap-courage',
                category: 'courage',
                prompt: 'What data cleaning decision required you to make a judgment call (e.g., how to handle blanks, what counts as duplicate)?',
                placeholder: 'Describe the decision and your reasoning...'
              },
              {
                id: 'cap-adapt',
                category: 'adaptability',
                prompt: 'What unexpected data issue did you encounter, and how did you adapt your cleaning approach?',
                placeholder: 'Explain the issue and your solution...'
              },
              {
                id: 'cap-persist',
                category: 'persistence',
                prompt: 'Which cleaning step took the most time? What kept you going to finish thoroughly?',
                placeholder: 'Reflect on persistence and the outcome...'
              }
            ]}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                What's Next (Lesson 06 Preview)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p className="mb-2">
                <strong>Lesson 06: Visualizations and Recommendations</strong>
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Create charts that tell the weekend sales story visually</li>
                <li>Calculate and visualize descriptive statistics (mean, median, spread)</li>
                <li>Build a recommendation based on what the data shows</li>
                <li>Practice explaining your findings to a non-technical audience</li>
              </ul>
              <p className="mt-3 text-sm">
                Your clean data from today makes all of this possible. No more fighting with messy inputs!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}