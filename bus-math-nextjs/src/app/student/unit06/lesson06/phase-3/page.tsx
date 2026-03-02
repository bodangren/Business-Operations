import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link2, Users } from "lucide-react";
import DashboardLookupSimulator from "../DashboardLookupSimulator";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[2]; // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
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
                    <Link2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Wiring the Control Center
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Interactive XLOOKUP Training
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      "It's like magic," Sarah said as she watched the chart move. "But I need to know 
                      how to build the magic myself. If Michael Chen asks for a new scenario, I 
                      need to be able to add it to the dashboard in seconds."
                    </p>
                    <p className="text-purple-800">
                      In this activity, you'll practice the exact <strong>XLOOKUP</strong> logic needed 
                      to link a dashboard toggle to a data engine. Master this, and you've mastered 
                      the most powerful "steering wheel" tool in Excel.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Lookup Simulator */}
              <DashboardLookupSimulator />

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
                    Look at the simulator you just finished. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                    <li>What happens to the dashboard if you delete one of the scenario names in the 'Data Engine'?</li>
                    <li>How does XLOOKUP help Sarah avoid 'Hard-Coding' (typing numbers by hand) into her summary?</li>
                    <li>If you wanted to pull the 'Volume' instead of 'Profit', which part of the formula would you change?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready for the Final Build?</h3>
                  <p className="text-gray-700">
                    In Independent Practice, you'll apply this logic to build the official 
                    <strong> Integration Dashboard</strong> tab in your Excel workbook.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
    </div>
  );
}