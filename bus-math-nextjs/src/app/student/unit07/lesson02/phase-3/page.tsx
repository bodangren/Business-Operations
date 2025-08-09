import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calculator, TrendingDown, Lightbulb } from "lucide-react";
import DepreciationMethodBuilder from "@/components/financial-calculations/DepreciationMethodBuilder";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[2]; // Guided Practice phase

export default function Unit07Lesson02Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-7xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Guided Practice Introduction */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
              <Calculator className="h-6 w-6" />
              Hands-On Depreciation Practice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-purple-900">
              Now it's time to put your depreciation knowledge into practice! You'll work with realistic 
              business scenarios to see how different depreciation methods affect Sarah's financial decisions. 
              This guided practice will help you understand the practical implications of each method.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-lg border border-purple-300 text-center">
                <Badge variant="outline" className="bg-blue-100 text-blue-800 mb-2">Step 1</Badge>
                <h4 className="font-semibold text-purple-800 mb-1">Explore Scenarios</h4>
                <p className="text-sm text-purple-700">Choose from realistic business asset scenarios</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-purple-300 text-center">
                <Badge variant="outline" className="bg-green-100 text-green-800 mb-2">Step 2</Badge>
                <h4 className="font-semibold text-purple-800 mb-1">Compare Methods</h4>
                <p className="text-sm text-purple-700">See SLN vs DDB calculations side-by-side</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-purple-300 text-center">
                <Badge variant="outline" className="bg-orange-100 text-orange-800 mb-2">Step 3</Badge>
                <h4 className="font-semibold text-purple-800 mb-1">Analyze Impact</h4>
                <p className="text-sm text-purple-700">Understand cash flow and tax implications</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Interactive Depreciation Builder */}
        <DepreciationMethodBuilder />

        {/* Think-Pair-Share Discussion 1 */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Method Selection Strategy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-blue-900 mb-2">
              Discussion Prompt (4 minutes):
            </p>
            <p className="text-blue-800 mb-3">
              After exploring different asset scenarios in the Depreciation Method Builder, discuss with a partner:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">For Discussion:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                  <li>Which method gave Sarah the biggest tax benefit in Year 1? Why?</li>
                  <li>If TechStart needs more cash flow early on, which method would you recommend?</li>
                  <li>How might Sarah's choice affect what investors think about her business?</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-blue-800">Key Insights to Share:</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                  <li>Compare the first-year depreciation amounts between SLN and DDB</li>
                  <li>Think about when a business would prioritize cash flow vs. steady expenses</li>
                  <li>Consider how depreciation choice connects to business growth strategy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scaffolded Learning Activity */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Guided Analysis: TechStart's $18,000 Decision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-green-900">
              Let's work through Sarah's actual situation using what you've learned. Sarah's $18,000 
              equipment purchase includes computers, software, and office furniture that she expects 
              to use for 5 years, with an estimated salvage value of $2,000.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-800 mb-3">TechStart Asset Details:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <strong className="text-green-800">Total Cost:</strong>
                  <p className="text-green-700">$18,000</p>
                </div>
                <div>
                  <strong className="text-green-800">Salvage Value:</strong>
                  <p className="text-green-700">$2,000</p>
                </div>
                <div>
                  <strong className="text-green-800">Useful Life:</strong>
                  <p className="text-green-700">5 years</p>
                </div>
                <div>
                  <strong className="text-green-800">Depreciable Base:</strong>
                  <p className="text-green-700">$16,000</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                <h5 className="font-semibold text-blue-800 mb-3">Straight-Line Method</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Annual Depreciation:</span>
                    <span className="font-semibold">$16,000 ÷ 5 = $3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly Depreciation:</span>
                    <span className="font-semibold">$3,200 ÷ 12 = $267</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Excel Formula:</span>
                    <span className="font-mono text-xs">=SLN(18000,2000,5)</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700">
                  <strong>Business Impact:</strong> Predictable, steady expense for budgeting. 
                  Conservative approach that spreads tax benefits evenly.
                </div>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                <h5 className="font-semibold text-purple-800 mb-3">Double-Declining Balance</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Depreciation Rate:</span>
                    <span className="font-semibold">2 ÷ 5 = 40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Year 1 Depreciation:</span>
                    <span className="font-semibold">$18,000 × 40% = $7,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Excel Formula:</span>
                    <span className="font-mono text-xs">=DDB(18000,2000,5,1)</span>
                  </div>
                </div>
                <div className="mt-3 p-2 bg-purple-50 rounded text-xs text-purple-700">
                  <strong>Business Impact:</strong> Accelerated tax benefits improve early cash flow. 
                  $4,000 more deduction in Year 1 compared to straight-line!
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Think-Pair-Share Discussion 2 */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Strategic Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-orange-900 mb-2">
              Discussion Prompt (3 minutes):
            </p>
            <p className="text-orange-800 mb-3">
              Based on the TechStart analysis above, work with a partner to make a strategic recommendation:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Consider Sarah's Situation:</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                  <li>TechStart is a growing technology company</li>
                  <li>Sarah wants to reinvest profits into business expansion</li>
                  <li>She needs to maintain investor confidence</li>
                  <li>Technology equipment typically loses value quickly</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-orange-800">Your Recommendation:</h4>
                <ul className="list-disc list-inside space-y-1 text-orange-800 text-sm">
                  <li>Which method would you recommend: SLN or DDB?</li>
                  <li>What are the key reasons for your choice?</li>
                  <li>How would this help Sarah achieve her business goals?</li>
                  <li>What would you tell investors about this decision?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Learning Reflection */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-5 w-5" />
              Key Takeaways from Guided Practice
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-800 mb-4">
              Through this guided practice, you've seen how depreciation method selection is a strategic 
              business decision that affects cash flow, taxes, and financial reporting.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">📊 Mathematical Mastery</h4>
                <p className="text-amber-700 text-sm">
                  You can now calculate both SLN and DDB depreciation using formulas and Excel functions, 
                  understanding how each method spreads asset costs differently over time.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">💰 Business Impact</h4>
                <p className="text-amber-700 text-sm">
                  You understand how method selection affects cash flow timing, tax obligations, and 
                  investor perceptions, connecting technical calculations to strategic business goals.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">🎯 Real-World Application</h4>
                <p className="text-amber-700 text-sm">
                  You can analyze specific business scenarios and make informed recommendations about 
                  depreciation methods based on company needs and industry characteristics.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border">
              <p className="text-center text-gray-800 font-medium">
                🌟 Ready for independent practice? In the next phase, you'll tackle more complex scenarios 
                and build comprehensive depreciation schedules without scaffolding!
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