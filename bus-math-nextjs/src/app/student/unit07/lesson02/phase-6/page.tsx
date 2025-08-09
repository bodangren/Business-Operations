import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, BookOpen, ArrowRight, Star, TrendingUp } from "lucide-react";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[5]; // Closing phase

const lesson02Prompts = [
  {
    id: 'courage-depreciation',
    category: 'courage' as const,
    prompt: 'What was the most challenging aspect of learning depreciation calculations that required you to push through initial confusion or uncertainty?',
    placeholder: 'Think about moments when Excel formulas seemed complex, when business scenarios felt overwhelming, or when you had to tackle challenging assessment questions. How did you find the courage to persist and work through these difficulties?'
  },
  {
    id: 'adaptability-methods',
    category: 'adaptability' as const, 
    prompt: 'How did you adjust your approach when switching between different depreciation methods (SLN vs DDB) or when analyzing various business scenarios?',
    placeholder: 'Reflect on how you adapted your thinking as you moved from simple calculations to complex strategic decisions. How did you modify your analysis approach for different industries like restaurants, tech companies, or manufacturing?'
  },
  {
    id: 'persistence-mastery',
    category: 'persistence' as const,
    prompt: 'Describe a specific moment during this lesson when you wanted to give up on a complex calculation or business analysis, but kept working until you achieved understanding.',
    placeholder: 'Consider times when Excel functions didn\'t work as expected, when assessment questions seemed too difficult, or when connecting technical skills to business strategy felt challenging. What kept you motivated to continue learning?'
  }
];

export default function Unit07Lesson02Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Lesson Synthesis */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Lesson Synthesis: Mastering Depreciation Techniques
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-amber-900">
              Congratulations! You've successfully mastered depreciation techniques and their strategic 
              business applications. From Sarah's $18,000 equipment purchase challenge to analyzing complex 
              multi-industry scenarios, you've developed both technical expertise and strategic thinking 
              skills that are essential for business success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">🎯 Technical Mastery Achieved:</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>✓ Calculate Straight-Line depreciation using the fundamental formula</li>
                  <li>✓ Apply Double-Declining Balance for accelerated depreciation</li>
                  <li>✓ Use Excel SLN and DDB functions for professional modeling</li>
                  <li>✓ Build comprehensive depreciation schedules and compare methods</li>
                  <li>✓ Analyze cash flow and tax implications of method selection</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-3">💼 Strategic Skills Developed:</h4>
                <ul className="text-amber-700 space-y-1 text-sm">
                  <li>✓ Connect depreciation choices to business growth strategies</li>
                  <li>✓ Evaluate industry-specific asset management considerations</li>
                  <li>✓ Communicate financial decisions to stakeholders and investors</li>
                  <li>✓ Balance tax optimization with financial reporting objectives</li>
                  <li>✓ Apply professional judgment to complex business scenarios</li>
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
              Key Learning Takeaways
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">1. Technical Foundation</h5>
                <p className="text-green-700 text-sm">
                  Depreciation isn't just accounting—it's a strategic tool for managing cash flow, 
                  optimizing taxes, and making informed asset investment decisions.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">2. Business Integration</h5>
                <p className="text-green-700 text-sm">
                  Method selection depends on business needs: DDB for growing companies needing cash flow, 
                  SLN for stable operations prioritizing predictable expenses.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-300">
                <h5 className="font-semibold text-green-800 mb-2">3. Professional Application</h5>
                <p className="text-green-700 text-sm">
                  Excel proficiency and clear communication of financial strategies are essential 
                  for success in business, whether as an entrepreneur or corporate professional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Sarah's Journey */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">🚀 Sarah's TechStart Evolution</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-blue-800 mb-4">
              Think about how far Sarah has come in her business journey. From manually tracking transactions 
              in notebooks to making sophisticated asset depreciation decisions, she's evolved into a strategic 
              business leader who understands financial optimization.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="outline" className="bg-gray-100">Before</Badge>
                <ArrowRight className="h-4 w-4 text-blue-600" />
                <Badge variant="outline" className="bg-green-100 text-green-800">After This Lesson</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Sarah's Challenge:</h5>
                  <p className="text-blue-700">
                    Wanted to expense $18,000 equipment purchase immediately, not understanding 
                    the strategic implications for taxes and investor presentations.
                  </p>
                </div>
                <div>
                  <h5 className="font-semibold text-blue-800 mb-2">Sarah's Growth:</h5>
                  <p className="text-blue-700">
                    Now understands how to use depreciation strategically—choosing DDB to improve 
                    cash flow for reinvestment while explaining the rationale to investors.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CAP Framework Reflection */}
        <ReflectionJournal
          unitTitle="Unit 7 Lesson 2: Depreciation Techniques Reflection"
          prompts={lesson02Prompts}
        />

        {/* Looking Ahead */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Looking Ahead: Unit 7 Progression
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-purple-800 mb-4">
              Your mastery of depreciation techniques sets the foundation for the next phase of Unit 7, 
              where you'll explore inventory valuation methods (FIFO and LIFO) and their impact on 
              financial reporting and tax strategy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Next Learning Steps:</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• <strong>Lesson 3:</strong> Inventory Methods Introduction (FIFO/LIFO basics)</li>
                  <li>• <strong>Lesson 4:</strong> Technical Application with array formulas</li>
                  <li>• <strong>Lesson 5:</strong> Integrated asset and inventory analysis</li>
                  <li>• <strong>Lesson 6+:</strong> Advanced modeling and board presentation prep</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Building Toward Unit Goal:</h4>
                <ul className="text-purple-700 text-sm space-y-1">
                  <li>• Integrate depreciation and inventory methods</li>
                  <li>• Answer the driving question about cash-flow alignment</li>
                  <li>• Create comprehensive Asset &amp; Inventory Tracker</li>
                  <li>• Present strategic recommendations to business leaders</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🎯 Your Growing Expertise</h4>
              <p className="text-gray-800 text-sm">
                With each lesson in Unit 7, you're building toward becoming a trusted financial advisor 
                who can help real businesses optimize their asset and inventory strategies. The depreciation 
                skills you've mastered today will be essential when you present to local business leaders 
                and demonstrate how strategic financial management drives business success.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Celebration of Achievement */}
        <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardHeader>
            <CardTitle className="text-center text-yellow-800 text-2xl">🌟 Lesson Complete! 🌟</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-yellow-800 font-medium">
              You've successfully mastered Depreciation Techniques and taken another important step 
              in your Unit 7 Asset &amp; Inventory Tracker journey!
            </p>
            
            <div className="flex justify-center gap-4 text-sm">
              <Badge variant="outline" className="bg-green-100 text-green-800 px-3 py-1">
                ✓ SLN Mastery
              </Badge>
              <Badge variant="outline" className="bg-blue-100 text-blue-800 px-3 py-1">
                ✓ DDB Proficiency  
              </Badge>
              <Badge variant="outline" className="bg-purple-100 text-purple-800 px-3 py-1">
                ✓ Excel Functions
              </Badge>
              <Badge variant="outline" className="bg-orange-100 text-orange-800 px-3 py-1">
                ✓ Strategic Thinking
              </Badge>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-yellow-300 inline-block">
              <p className="text-yellow-800 font-medium flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Ready to continue with Lesson 3: Inventory Methods Introduction
              </p>
            </div>
          </CardContent>
        </Card>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}