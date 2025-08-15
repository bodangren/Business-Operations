import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Lightbulb, ArrowRight, Trophy, TrendingUp, BookOpen, Users } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5] // Closing phase

const reflectionPrompts = [
  {
    id: 'courage-fifo-lifo',
    category: 'courage' as const,
    prompt: 'Learning FIFO and LIFO required you to tackle complex business calculations and strategic thinking. What was the most challenging moment where you had to push through confusion or uncertainty?',
    placeholder: 'Think about a specific moment during the inventory simulations, calculations, or strategic discussions where you felt out of your comfort zone but kept going...'
  },
  {
    id: 'adaptability-methods',
    category: 'adaptability' as const,
    prompt: 'The inventory management simulation probably didn\'t go exactly as you planned. How did you adapt your strategy when market events, stockouts, or cash flow challenges forced you to change your approach?',
    placeholder: 'Describe how you adjusted your thinking or strategy when the business simulation presented unexpected challenges...'
  },
  {
    id: 'persistence-complexity',
    category: 'persistence' as const,
    prompt: 'FIFO and LIFO concepts can be mentally demanding, especially when connecting calculations to business strategy. Describe a moment when you wanted to give up but persevered. What kept you motivated to master these concepts?',
    placeholder: 'Reflect on your mindset during difficult calculations or when business concepts felt overwhelming. What helped you push through...'
  }
]

export default function Phase6Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Lesson Synthesis */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Trophy className="h-6 w-6" />
              Congratulations: FIFO & LIFO Mastery Achieved!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-purple-900">
              <p className="mb-4">
                You've just completed one of the most practically important lessons in business accounting. 
                Understanding FIFO and LIFO isn't just academic knowledge - these are the exact concepts that 
                business leaders use every day to make strategic decisions about taxes, cash flow, and financial reporting.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-2">What You've Accomplished</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Mastered FIFO and LIFO calculation methods</li>
                    <li>• Understood the strategic business implications</li>
                    <li>• Practiced with realistic business scenarios</li>
                    <li>• Connected inventory methods to tax and cash flow</li>
                    <li>• Managed a complete business simulation</li>
                    <li>• Demonstrated comprehensive knowledge on assessment</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Skills You Can Apply</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Advise businesses on inventory method selection</li>
                    <li>• Analyze financial statements for inventory impacts</li>
                    <li>• Calculate Cost of Goods Sold accurately</li>
                    <li>• Understand tax implications of method choices</li>
                    <li>• Make strategic recommendations to clients</li>
                    <li>• Connect accounting principles to business strategy</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
                <p className="text-purple-800 font-medium">
                  <strong>Professional Impact:</strong> These skills directly prepare you for careers in financial 
                  analysis, business consulting, accounting, and entrepreneurship. You now understand concepts that 
                  many business professionals struggle with throughout their careers!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Unit Challenge */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Building Toward Unit 7's Big Challenge
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-orange-900">
              <p className="mb-4">
                Your FIFO and LIFO mastery is a crucial building block for Unit 7's ultimate challenge: creating 
                a comprehensive Asset & Inventory Tracker system that helps businesses choose the best depreciation 
                and inventory methods for their cash-flow and tax strategy.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-3">How Today's Learning Connects to the Big Picture</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-orange-800">Week 1 Foundation (Complete!)</p>
                      <p className="text-sm text-orange-700">You now understand how inventory method choice impacts business strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-orange-800">Week 2: Excel Technical Mastery</p>
                      <p className="text-sm text-orange-700">You'll build sophisticated Excel models with array formulas and dynamic calculations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-orange-800">Week 3: Strategic Presentations</p>
                      <p className="text-sm text-orange-700">You'll present recommendations to real business leaders, just like Sarah does</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-orange-800">
                Remember Unit 7's driving question: <strong>"Which depreciation and inventory methods best align 
                with our cash-flow and tax strategy?"</strong> You're now equipped to tackle the inventory portion 
                of this complex business challenge!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* CAP Framework Reflection */}
        <ReflectionJournal
          unitTitle="FIFO & LIFO Learning Reflection"
          prompts={reflectionPrompts}
          className="border-indigo-200 bg-indigo-50"
        />

        {/* Next Steps Preview */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              What's Coming Next: Advanced Excel Modeling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-green-900">
              <p className="mb-4">
                Get excited! The next phase of Unit 7 takes your FIFO and LIFO knowledge into the sophisticated 
                world of Excel financial modeling. You'll build the kind of dynamic, professional-grade tools 
                that Sarah creates for her high-paying clients.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">Excel Technical Skills</h3>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Array formulas for complex inventory calculations</li>
                    <li>• INDEX/MATCH functions for dynamic lookups</li>
                    <li>• Dropdown menus for method selection</li>
                    <li>• Professional dashboard creation</li>
                    <li>• Error-checking and data validation</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-800 mb-2">Business Applications</h3>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Build models that switch between FIFO and LIFO</li>
                    <li>• Create what-if scenarios for business planning</li>
                    <li>• Generate professional charts and visualizations</li>
                    <li>• Prepare client-ready recommendation reports</li>
                    <li>• Practice board-level presentations</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
                <h3 className="font-semibold text-green-900 mb-2">Your Competitive Advantage</h3>
                <p className="text-green-800">
                  By the end of Unit 7, you'll have built Excel models that many professional accountants and 
                  financial analysts would be proud of. These are exactly the skills that make consultants like 
                  Sarah valuable to their clients - and they'll make you stand out in any business career path!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peer Recognition */}
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-yellow-800 flex items-center gap-2">
              <Users className="h-6 w-6" />
              Celebrate Your Learning Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-yellow-900">
              <p className="mb-4">
                Take a moment to appreciate the collaborative learning that happened in this lesson. From the 
                Turn-and-Talk discussions to the group analysis activities, you've built understanding together 
                with your classmates.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-yellow-200">
                <h3 className="font-semibold text-yellow-900 mb-2">Learning Together</h3>
                <p className="text-yellow-800 mb-3">
                  Consider how your discussions and collaborative work enhanced your understanding:
                </p>
                <ul className="text-yellow-800 space-y-1">
                  <li>• Which insights from classmates helped clarify difficult concepts?</li>
                  <li>• How did explaining FIFO and LIFO to others strengthen your own understanding?</li>
                  <li>• What questions from peers made you think more deeply about business applications?</li>
                  <li>• How can you continue supporting each other through the upcoming Excel challenges?</li>
                </ul>
              </div>
              
              <p className="text-yellow-800">
                Professional success in business consulting and financial analysis depends heavily on collaboration 
                and communication. The teamwork skills you're developing are just as valuable as the technical 
                concepts you're mastering!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Final Motivation */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              You're Becoming a Business Expert
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                As you close this lesson, remember that you've just mastered concepts that directly impact how 
                multi-million dollar companies make strategic decisions. FIFO and LIFO aren't just textbook topics - 
                they're real tools that influence corporate strategy, investor relations, and tax planning.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <p className="text-indigo-800 text-center font-medium italic">
                  "The same FIFO and LIFO principles you learned today are used by Fortune 500 companies, 
                  startup entrepreneurs, and professional consultants around the world. You're not just learning 
                  accounting - you're developing the strategic thinking skills that drive business success."
                </p>
              </div>
              
              <p className="text-indigo-800">
                Rest up, celebrate your accomplishments, and get ready for the exciting Excel modeling adventures 
                ahead. You're well on your way to becoming the kind of business professional that Sarah represents - 
                someone who combines technical expertise with strategic insight to help businesses thrive!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}