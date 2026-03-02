import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Map, Lightbulb, Users } from "lucide-react";
import TableLogicSimulator from "../TableLogicSimulator";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[2]; // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Introduction */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Bridging the Automation Gap
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Manual Logic vs. Automated Matrix
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      "I trust the math," Sarah said, looking at the empty grid, "but I want to see exactly 
                      how Excel fills in these cells. If I understand the pattern, I'll know if the 
                      automation is working correctly."
                    </p>
                    <p className="text-purple-800">
                      Before we let Excel's 'Data Table' tool handle 50 scenarios, we're going to 
                      manually map a small 3x3 section. This will help you see the <strong>Pricing Map</strong> 
                      emerge from the raw numbers.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Table Logic Simulator */}
              <TableLogicSimulator />

              {/* Key Insight */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    Key Insight: The Sensitivity Pattern
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-900 text-sm">
                    As you filled out the matrix, did you notice how quickly the profit shifts? 
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 text-xs">
                    <li><strong>Vertical Shift:</strong> Increasing Price at the same Volume significantly boosts margin.</li>
                    <li><strong>Horizontal Shift:</strong> Increasing Volume at the same Price helps cover fixed costs faster.</li>
                    <li><strong>The Matrix Effect:</strong> The most dangerous scenarios are in the top-left (Low Price + Low Volume), while the "Investor Sweet Spot" is in the bottom-right.</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-blue-800 mb-2 text-sm">
                    Look at the matrix you just completed. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>Which variable (Price or Volume) had the biggest impact on Sarah's profit in this grid?</li>
                    <li>If Sarah's competitor drops their price to $1,200, what volume does she need just to break even (hit $0)?</li>
                    <li>How does seeing this grid compare to just having one answer from Goal Seek?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    Now it's time to build the real thing. In Independent Practice, you'll use the 
                    automated Data Table tool in Excel to map 50+ scenarios for Sarah's PriceLab workbook.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
      />
    </div>
  );
}