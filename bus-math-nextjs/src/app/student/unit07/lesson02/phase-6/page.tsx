import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, BookOpen, ArrowRight, Star, TrendingUp } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"

const currentPhase = lesson02Phases[5]

const lesson02Prompts = [
  {
    id: 'courage-inventory',
    category: 'courage' as const,
    prompt: 'What was the most confusing part of today\'s lesson about inventory cost flow? How did you work through it?',
    placeholder: 'Think about moments when the difference between physical flow and cost flow seemed unclear, or when calculating COGS ranges felt challenging. What helped you understand?'
  },
  {
    id: 'adaptability-layers',
    category: 'adaptability' as const,
    prompt: 'How did your thinking change when you realized the same sale could produce different COGS values?',
    placeholder: 'Reflect on the moment when you saw that selling 20 units could result in COGS anywhere from $360 to $440. How did that change how you think about inventory accounting?'
  },
  {
    id: 'persistence-formula',
    category: 'persistence' as const,
    prompt: 'Describe a moment during the practice activities when you made a calculation mistake but kept working until you got it right.',
    placeholder: 'Consider times when GAFS didn\'t balance, when you forgot to include beginning inventory, or when the COGS range seemed wrong. What kept you going?'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Lesson Synthesis */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Lesson Summary: Inventory Cost Flow Foundations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-amber-900">
              Great work today! You've built the foundation for understanding inventory valuation. 
              You now know <strong>why</strong> the ending inventory number isn't always obvious — 
              and why businesses need consistent rules to assign costs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">🎯 Key Formulas:</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>✓ <strong>GAFS</strong> = Beginning Inventory + Purchases</li>
                  <li>✓ <strong>Ending Inventory</strong> = GAFS - COGS</li>
                  <li>✓ <strong>COGS + Ending Inventory</strong> = GAFS (always!)</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">💡 Key Insights:</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>✓ Physical flow ≠ Cost flow</li>
                  <li>✓ Layers form when costs change</li>
                  <li>✓ Same sale → different possible COGS</li>
                  <li>✓ Investors care which method you use</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Takeaways */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Star className="h-5 w-5" />
              What You Learned Today
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">1. The Formula</h5>
                <p className="text-green-700 text-sm">
                  Ending Inventory = Beginning Inventory + Purchases - COGS. 
                  This formula is the spine of the whole unit.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">2. The Puzzle</h5>
                <p className="text-green-700 text-sm">
                  When costs vary, the same sale can produce different COGS values. 
                  That's why we need formal methods.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">3. The Stakes</h5>
                <p className="text-green-700 text-sm">
                  Investors and lenders need to trust your ending inventory number. 
                  Method choice affects profit and taxes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Sarah's Journey */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">🚀 Sarah's Inventory Challenge</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800 mb-4">
              Remember Sarah from Lesson 1? She couldn't defend her ending inventory number to an investor. 
              Now you understand why that's such a problem.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="bg-red-100 text-red-800">Problem</Badge>
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <Badge variant="outline" className="bg-green-100 text-green-800">Today's Insight</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Sarah's Problem:</h5>
                  <p className="text-blue-700">
                    She bought kits at different prices throughout the month. 
                    When she sold them, she couldn't explain which costs went to COGS.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">What You Now Know:</h5>
                  <p className="text-blue-700">
                    Without a consistent method (FIFO, LIFO, etc.), Sarah is basically guessing. 
                    No wonder investors don't trust her numbers!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CAP Framework Reflection */}
        <ReflectionJournal
          unitTitle="Unit 7 Lesson 2: Inventory Cost Flow Reflection"
          prompts={lesson02Prompts}
        />

        {/* Looking Ahead */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Coming Up: Lesson 3
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800 mb-4">
              In the next lesson, you'll learn the formal rules that solve the COGS puzzle:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">FIFO and LIFO</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Learn the step-by-step rules for each method</li>
                  <li>• Practice calculating COGS and Ending Inventory</li>
                  <li>• See how rising costs change the results</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Business Impact</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• When does FIFO make sense for a business?</li>
                  <li>• When might LIFO be strategically better?</li>
                  <li>• How do these choices affect investors?</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Building Toward the Unit Goal</h4>
              <p className="text-gray-800 text-sm">
                Every lesson brings you closer to being able to defend an ending inventory number 
                to a real investor. By the end of Unit 7, you'll recommend the best inventory method 
                for Sarah's business — with evidence to back it up.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Complete */}
        <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-center text-yellow-800 text-2xl">🌟 Lesson 2 Complete! 🌟</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-yellow-800 font-medium">
              You've built a solid foundation in inventory cost flow!
            </p>
            
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <Badge variant="outline" className="bg-green-100 text-green-800 px-3 py-1">
                ✓ GAFS Formula
              </Badge>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 px-3 py-1">
                ✓ Cost Layers
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 px-3 py-1">
                ✓ COGS Ranges
              </Badge>
              <Badge variant="outline" className="bg-orange-100 text-orange-800 px-3 py-1">
                ✓ Investor Awareness
              </Badge>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-300 inline-block">
              <p className="text-yellow-800 font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Ready for Lesson 3: FIFO and LIFO
              </p>
            </div>
          </CardContent>
        </Card>

      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
