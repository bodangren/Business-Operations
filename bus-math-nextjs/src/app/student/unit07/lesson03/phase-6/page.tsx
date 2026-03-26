import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, BookOpen, ArrowRight, Star, TrendingUp, Scale } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5] // Closing phase

const lesson03Prompts = [
  {
    id: 'courage-method-choice',
    category: 'courage' as const,
    prompt: 'Today you learned two different ways to value the same inventory. What was the most challenging part of accepting that there\'s no single "right" answer — just different choices with different consequences?',
    placeholder: 'Think about moments when you wanted to ask "but which one is correct?" How did you work through the idea that both FIFO and LIFO are valid, just different?'
  },
  {
    id: 'adaptability-tradeoffs',
    category: 'adaptability' as const,
    prompt: 'FIFO might look better for investors, but LIFO might save on taxes. How did your thinking evolve as you weighed these competing priorities?',
    placeholder: 'Consider whether you initially favored one method over the other. What made you see the value in both approaches?'
  },
  {
    id: 'persistence-calculations',
    category: 'persistence' as const,
    prompt: 'The layer-by-layer calculations for FIFO and LIFO required careful attention to detail. Describe a moment when you had to slow down, double-check your work, or redo a calculation to get it right.',
    placeholder: 'Maybe you mixed up which layer came first, or calculated COGS instead of Ending Inventory. What helped you persist through the confusion?'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />

      <main className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        
        {/* Lesson Synthesis */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Lesson Summary: FIFO and LIFO
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-amber-900">
              Excellent work! You've mastered two of the four inventory valuation methods. 
              You now understand <strong>how</strong> to calculate FIFO and LIFO — and <strong>why</strong> 
              a business might choose one over the other.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">FIFO (First-In, First-Out)</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>✓ Oldest costs → COGS first</li>
                  <li>✓ Newer costs stay in inventory</li>
                  <li>✓ <strong>Rising costs:</strong> Higher profit, higher inventory value</li>
                  <li>✓ Often preferred for investor presentations</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">LIFO (Last-In, First-Out)</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>✓ Newest costs → COGS first</li>
                  <li>✓ Older costs stay in inventory</li>
                  <li>✓ <strong>Rising costs:</strong> Lower profit, lower taxes</li>
                  <li>✓ Often preferred for tax planning</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Tradeoff */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Scale className="h-5 w-5" />
              The FIFO vs LIFO Tradeoff
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800 mb-4">
              Here's the core insight: <strong>the same transactions produce different financial results</strong> depending 
              on which method you choose. Neither method is "wrong" — they serve different purposes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h5 className="font-semibold text-blue-800 mb-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800 mr-2">FIFO</Badge>
                  Better for Profit Presentation
                </h5>
                <p className="text-blue-700 text-sm">
                  When costs rise, FIFO shows higher profits on the income statement. 
                  That's helpful when pitching to investors or seeking loans — 
                  your business looks more profitable on paper.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h5 className="font-semibold text-blue-800 mb-2">
                  <Badge variant="outline" className="bg-orange-100 text-orange-800 mr-2">LIFO</Badge>
                  Better for Cost Matching
                </h5>
                <p className="text-blue-700 text-sm">
                  LIFO matches current costs against current revenue. 
                  That gives a more realistic view of profit margins — 
                  and reduces taxable income when costs are rising.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <p className="text-blue-800">
                <strong>Sarah's Dilemma:</strong> If she's fundraising, FIFO shows stronger profits. 
                If she's optimizing cash flow, LIFO might reduce her tax bill. The "best" method 
                depends on her goals — and she needs to be consistent year over year.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* What You Learned Today */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Star className="h-5 w-5" />
              What You Can Now Do
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">1. Calculate</h5>
                <p className="text-green-700 text-sm">
                  Compute COGS and Ending Inventory using both FIFO and LIFO 
                  for any set of layered purchases.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">2. Compare</h5>
                <p className="text-green-700 text-sm">
                  Explain why the same transactions produce different results — 
                  and what those differences mean for profit and taxes.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">3. Recommend</h5>
                <p className="text-green-700 text-sm">
                  Make a thoughtful recommendation about which method 
                  fits a specific business situation.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Sarah's Journey */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">🚀 Sarah's Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800 mb-4">
              Remember Sarah from Lesson 1? She couldn't explain her ending inventory number. 
              In Lesson 2, you learned <em>why</em> cost assignment is ambiguous. Now you know 
              <strong> how</strong> to resolve it.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <div className="flex items-center gap-3 mb-3 flex-wrap">
                <Badge variant="outline" className="bg-gray-100 text-gray-700">Lesson 1</Badge>
                <ArrowRight className="h-4 w-4 text-purple-600" />
                <Badge variant="outline" className="bg-blue-100 text-blue-800">Lesson 2</Badge>
                <ArrowRight className="h-4 w-4 text-purple-600" />
                <Badge variant="outline" className="bg-green-100 text-green-800">Lesson 3 ✓</Badge>
                <ArrowRight className="h-4 w-4 text-purple-600" />
                <Badge variant="outline" className="bg-purple-100 text-purple-800">Lesson 4</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-purple-800 mb-1">Problem Defined:</h5>
                  <p className="text-purple-700">Sarah couldn't defend her ending inventory.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-800 mb-1">Ambiguity Exposed:</h5>
                  <p className="text-purple-700">Same sale, multiple possible COGS values.</p>
                </div>
                <div>
                  <h5 className="font-semibold text-purple-800 mb-1">Two Methods Learned:</h5>
                  <p className="text-purple-700">FIFO and LIFO give structured answers.</p>
                </div>
              </div>
            </div>
            
            <p className="text-purple-700 text-sm">
              You're two-thirds of the way to defending an ending inventory number with confidence!
            </p>
          </CardContent>
        </Card>

        {/* CAP Framework Reflection */}
        <ReflectionJournal
          unitTitle="Unit 7 Lesson 3: FIFO & LIFO Reflection"
          prompts={lesson03Prompts}
        />

        {/* Looking Ahead */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Coming Up: Lesson 4 — Two More Methods
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-orange-800 mb-4">
              You've mastered FIFO and LIFO. In Lesson 4, you'll add two more tools to your toolkit:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-orange-300">
                <h4 className="font-semibold text-orange-800 mb-2">Specific Identification</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Track the exact cost of each unique item</li>
                  <li>• Used for cars, jewelry, custom equipment</li>
                  <li>• Most accurate when items are distinct</li>
                  <li>• Best for low-volume, high-value inventory</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-orange-300">
                <h4 className="font-semibold text-orange-800 mb-2">Weighted Average</h4>
                <ul className="text-orange-700 text-sm space-y-1">
                  <li>• Blend all costs into one average price</li>
                  <li>• Used for bulk goods and commodities</li>
                  <li>• Simplest for high-volume similar items</li>
                  <li>• No need to track individual layers</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Your Growing Toolkit</h4>
              <p className="text-gray-800 text-sm">
                By the end of Lesson 4, you'll know all four inventory valuation methods. 
                You'll be able to recommend the best method for <em>any</em> business — 
                whether they sell custom yachts or bulk grain.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Lesson Complete */}
        <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-amber-50">
          <CardHeader>
            <CardTitle className="text-center text-yellow-800 text-2xl">🌟 Lesson 3 Complete! 🌟</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-yellow-800 font-medium">
              You can now calculate and compare FIFO and LIFO!
            </p>
            
            <div className="flex justify-center gap-4 text-sm flex-wrap">
              <Badge variant="outline" className="bg-blue-100 text-blue-800 px-3 py-1">
                ✓ FIFO Calculations
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 px-3 py-1">
                ✓ LIFO Calculations
              </Badge>
              <Badge variant="outline" className="bg-green-100 text-green-800 px-3 py-1">
                ✓ Profit Impact
              </Badge>
              <Badge variant="outline" className="bg-orange-100 text-orange-800 px-3 py-1">
                ✓ Method Recommendations
              </Badge>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-300 inline-block">
              <p className="text-yellow-800 font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Ready for Lesson 4: Specific Identification & Weighted Average
              </p>
            </div>
          </CardContent>
        </Card>

      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}