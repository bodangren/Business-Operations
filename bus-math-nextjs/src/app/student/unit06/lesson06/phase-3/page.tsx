import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table2, Users } from "lucide-react";
import DataTableSimulator from "../DataTableSimulator";
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
                    <Table2 className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Safe Rehearsal: Data Table Logic
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Practice Before You Build
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      "The first time I used Data Tables," Sarah said, "I got confused about which cell 
                      to reference. The results came back blank and I didn't know why."
                    </p>
                    <p className="text-purple-800">
                      In this activity, you'll practice the exact setup logic needed to build Data Tables 
                      successfully. Master this, and you'll avoid the most common Data Table mistakes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Data Table Simulator */}
              <DataTableSimulator />

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
                    <li>Why does the formula need to be positioned above the input column?</li>
                    <li>What would happen if you referenced the wrong input cell?</li>
                    <li>How does a two-variable table help Sarah communicate pricing risk to investors?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready for the Final Build?</h3>
                  <p className="text-gray-700">
                    In Independent Practice, you'll apply this logic to build real 
                    <strong> Data Tables</strong> in your Excel workbook.
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
