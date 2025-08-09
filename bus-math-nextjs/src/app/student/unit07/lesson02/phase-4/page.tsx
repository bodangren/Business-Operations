import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Building2, Truck, Monitor, Factory, AlertTriangle, CheckCircle } from "lucide-react";
import DepreciationMethodBuilder from "@/components/financial-calculations/DepreciationMethodBuilder";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[3]; // Independent Practice phase

export default function Unit07Lesson02Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-7xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Independent Practice Introduction */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Independent Practice: Advanced Asset Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-indigo-900">
              Now it's time to demonstrate your mastery! You'll work independently to analyze complex asset 
              scenarios and make strategic depreciation recommendations. These scenarios mirror real-world 
              situations that financial analysts and business owners face when optimizing their asset 
              management strategies.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-indigo-300">
              <h4 className="font-semibold text-indigo-800 mb-3">Your Challenge:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800 mt-1">1</Badge>
                  <div>
                    <p className="font-medium text-indigo-800">Analyze Multiple Scenarios</p>
                    <p className="text-indigo-700">Work through different industry contexts independently</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-blue-100 text-blue-800 mt-1">2</Badge>
                  <div>
                    <p className="font-medium text-indigo-800">Build Excel Models</p>
                    <p className="text-indigo-700">Create professional depreciation schedules using functions</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 mt-1">3</Badge>
                  <div>
                    <p className="font-medium text-indigo-800">Make Strategic Recommendations</p>
                    <p className="text-indigo-700">Justify your method selection with business reasoning</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Complex Scenario Challenges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Scenario 1: Restaurant Expansion */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Building2 className="h-5 w-5" />
                Challenge 1: Restaurant Expansion
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-orange-300">
                <h4 className="font-semibold text-orange-800 mb-2">Business Context:</h4>
                <p className="text-orange-800 text-sm mb-3">
                  Maria's family restaurant is expanding to a second location. She's investing $85,000 in 
                  commercial kitchen equipment that will be used heavily in the first few years to establish 
                  the new location, then more moderately as operations stabilize.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><strong>Asset Cost:</strong> $85,000</div>
                  <div><strong>Salvage Value:</strong> $8,000</div>
                  <div><strong>Useful Life:</strong> 12 years</div>
                  <div><strong>Cash Flow Need:</strong> High early years</div>
                </div>
              </div>

              <div className="bg-yellow-100 p-3 rounded-lg border border-yellow-300">
                <h5 className="font-semibold text-yellow-800 mb-2">Your Analysis Task:</h5>
                <ul className="text-yellow-800 text-sm space-y-1">
                  <li>• Calculate 3-year depreciation comparison (SLN vs DDB)</li>
                  <li>• Analyze cash flow impact for expansion financing</li>
                  <li>• Consider restaurant industry asset usage patterns</li>
                  <li>• Make method recommendation with justification</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 p-2 bg-green-100 rounded text-xs text-green-800">
                <CheckCircle className="h-4 w-4" />
                <span>Use the Depreciation Builder below to explore this scenario</span>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 2: Technology Startup */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Challenge 2: Tech Startup Scale-Up
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">Business Context:</h4>
                <p className="text-purple-800 text-sm mb-3">
                  DevCorp, a software development company, is purchasing $125,000 in high-end servers and 
                  development equipment. They're preparing for IPO next year and need to optimize their 
                  financial statements for investor presentations.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><strong>Asset Cost:</strong> $125,000</div>
                  <div><strong>Salvage Value:</strong> $15,000</div>
                  <div><strong>Useful Life:</strong> 6 years</div>
                  <div><strong>Priority:</strong> Investor presentation optimization</div>
                </div>
              </div>

              <div className="bg-blue-100 p-3 rounded-lg border border-blue-300">
                <h5 className="font-semibold text-blue-800 mb-2">Your Analysis Task:</h5>
                <ul className="text-blue-800 text-sm space-y-1">
                  <li>• Evaluate impact on financial statement ratios</li>
                  <li>• Consider technology obsolescence patterns</li>
                  <li>• Analyze investor perception implications</li>
                  <li>• Balance tax benefits with earnings management</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 p-2 bg-green-100 rounded text-xs text-green-800">
                <CheckCircle className="h-4 w-4" />
                <span>Technology assets require special strategic consideration</span>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 3: Manufacturing Expansion */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Factory className="h-5 w-5" />
                Challenge 3: Manufacturing Investment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">Business Context:</h4>
                <p className="text-green-800 text-sm mb-3">
                  GreenBuild Manufacturing is investing $450,000 in specialized production equipment for 
                  their sustainable building materials division. Production will vary significantly based 
                  on seasonal construction demand and long-term contracts.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><strong>Asset Cost:</strong> $450,000</div>
                  <div><strong>Salvage Value:</strong> $25,000</div>
                  <div><strong>Useful Life:</strong> 15 years</div>
                  <div><strong>Usage Pattern:</strong> Variable by season/contracts</div>
                </div>
              </div>

              <div className="bg-amber-100 p-3 rounded-lg border border-amber-300">
                <h5 className="font-semibold text-amber-800 mb-2">Advanced Challenge:</h5>
                <ul className="text-amber-800 text-sm space-y-1">
                  <li>• Consider Units of Production method applicability</li>
                  <li>• Compare SLN vs DDB vs Units for this scenario</li>
                  <li>• Analyze impact of variable production on method choice</li>
                  <li>• Factor in sustainability industry considerations</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 p-2 bg-yellow-100 rounded text-xs text-yellow-800">
                <AlertTriangle className="h-4 w-4" />
                <span>Manufacturing requires considering production-based depreciation</span>
              </div>
            </CardContent>
          </Card>

          {/* Scenario 4: Transportation Fleet */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Challenge 4: Logistics Fleet Optimization
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-3 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">Business Context:</h4>
                <p className="text-blue-800 text-sm mb-3">
                  FastTrack Logistics is expanding their delivery fleet with $280,000 in electric delivery 
                  vehicles. They're balancing environmental goals with tax incentives and rapid technological 
                  advancement in the EV market.
                </p>
                
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div><strong>Asset Cost:</strong> $280,000 (includes tax credits)</div>
                  <div><strong>Salvage Value:</strong> $35,000</div>
                  <div><strong>Useful Life:</strong> 8 years</div>
                  <div><strong>Industry:</strong> Rapidly evolving EV technology</div>
                </div>
              </div>

              <div className="bg-teal-100 p-3 rounded-lg border border-teal-300">
                <h5 className="font-semibold text-teal-800 mb-2">Strategic Considerations:</h5>
                <ul className="text-teal-800 text-sm space-y-1">
                  <li>• Factor in potential technology obsolescence</li>
                  <li>• Consider environmental sustainability reporting</li>
                  <li>• Analyze fleet replacement cycle implications</li>
                  <li>• Balance tax benefits with operational efficiency</li>
                </ul>
              </div>

              <div className="flex items-center gap-2 p-2 bg-purple-100 rounded text-xs text-purple-800">
                <Target className="h-4 w-4" />
                <span>Vehicle depreciation patterns differ from other business assets</span>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Independent Analysis Tool */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 flex items-center gap-2">
              <Target className="h-6 w-6" />
              Professional Depreciation Analysis Tool
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 mb-4">
              Use this professional-grade tool to analyze each scenario above. Input the asset details, 
              compare methods, and build comprehensive depreciation schedules. Your analysis should 
              include both technical calculations and strategic business reasoning.
            </p>
            
            <DepreciationMethodBuilder />
          </CardContent>
        </Card>

        {/* Independent Work Guidelines */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">📋 Independent Analysis Framework</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-800 mb-4">
              For each scenario you analyze, follow this professional framework to ensure comprehensive evaluation:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-amber-800">Technical Analysis Steps:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs mt-1">1</Badge>
                    <p className="text-amber-700 text-sm">Calculate SLN annual depreciation using Excel formula</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs mt-1">2</Badge>
                    <p className="text-amber-700 text-sm">Calculate DDB first 3 years using Excel formula</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs mt-1">3</Badge>
                    <p className="text-amber-700 text-sm">Compare cumulative depreciation over 5-year period</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 text-xs mt-1">4</Badge>
                    <p className="text-amber-700 text-sm">Analyze cash flow impact assuming 25% tax rate</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-amber-800">Strategic Evaluation Steps:</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs mt-1">A</Badge>
                    <p className="text-amber-700 text-sm">Assess business cash flow needs and growth stage</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs mt-1">B</Badge>
                    <p className="text-amber-700 text-sm">Consider industry-specific asset usage patterns</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs mt-1">C</Badge>
                    <p className="text-amber-700 text-sm">Evaluate investor/stakeholder presentation impact</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs mt-1">D</Badge>
                    <p className="text-amber-700 text-sm">Make final recommendation with clear justification</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-amber-300">
              <h4 className="font-semibold text-amber-800 mb-2">Professional Standards:</h4>
              <p className="text-amber-700 text-sm">
                Your analysis should meet professional financial advisory standards. Consider how you would 
                present this information to a business owner, board of directors, or potential investors. 
                Your recommendations should be data-driven, clearly reasoned, and actionable.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Success Criteria */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">✅ Mastery Indicators</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">
              You'll know you've mastered this independent practice when you can:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-3 rounded-lg border border-green-300 text-center">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">Technical Proficiency</h4>
                <p className="text-green-700 text-xs">Accurately calculate both SLN and DDB using Excel functions</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-300 text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">Strategic Thinking</h4>
                <p className="text-green-700 text-xs">Connect method choice to specific business objectives</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-300 text-center">
                <div className="text-2xl mb-2">💼</div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">Industry Awareness</h4>
                <p className="text-green-700 text-xs">Recognize how different industries require different approaches</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-300 text-center">
                <div className="text-2xl mb-2">🗣️</div>
                <h4 className="font-semibold text-green-800 text-sm mb-1">Professional Communication</h4>
                <p className="text-green-700 text-xs">Present findings with clear, business-appropriate rationale</p>
              </div>
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