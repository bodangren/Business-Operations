import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, BarChart3, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson06Data, unit06Data, lesson06Phases } from "../lesson-data";

const currentPhase = lesson06Phases[1]; // Introduction phase

const xlookupQuestions = [
  {
    id: "xl-1",
    question: "Sarah wants her dashboard to pull the 'Total Profit' from her Scenario Summary table. She has the name of the scenario (e.g., 'Base Case') in cell B4. What is her 'Lookup_Value' in XLOOKUP?",
    answers: [
      "Cell B4",
      "The Total Profit column",
      "The entire Scenario Table",
      "The word 'Profit'"
    ],
    explanation: "The Lookup_Value is the 'key' Excel uses to search. Since B4 contains the scenario Sarah selected, that's what Excel will look for in the table."
  },
  {
    id: "xl-2",
    question: "What is the primary benefit of linking a chart to an 'XLOOKUP Summary Table' rather than the raw data?",
    answers: [
      "The chart updates automatically whenever you change the scenario toggle.",
      "The chart becomes more colorful.",
      "The chart calculates faster.",
      "It prevents other people from seeing the formulas."
    ],
    explanation: "When a chart is linked to a dynamic summary table, it becomes interactive. Switching the scenario toggle updates the summary, which instantly updates the visual story."
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson06Data} 
        phase={currentPhase} 
        phases={lesson06Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              
              {/* Core Concept */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Search className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                    Dynamic Lookups: The Dashboard Glue
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Connecting Your Engine to Your Steering Wheel
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    To make Sarah's dashboard work, we need a way for Excel to "look up" the results 
                    from her analysis sheets and bring them to the front page. Before the lookup works,
                    Sarah needs a small <strong>Scenario Summary</strong> table with one row for each case
                    she wants to present. The tool that pulls those numbers into the dashboard is
                    <strong> XLOOKUP</strong>.
                  </p>

                  <div className="bg-slate-900 p-6 rounded-lg text-green-400 font-mono text-sm shadow-xl">
                    <p className="text-blue-400 mb-2">{"// The XLOOKUP Anatomy"}</p>
                    <p>=XLOOKUP(<span className="text-white">Lookup_Value</span>, <span className="text-yellow-400">Lookup_Array</span>, <span className="text-purple-400">Return_Array</span>)</p>
                    <div className="mt-4 space-y-2 text-xs">
                      <p><span className="text-white">1. Lookup_Value:</span> The scenario name in Sarah&apos;s dashboard toggle cell, B4.</p>
                      <p><span className="text-yellow-400">2. Lookup_Array:</span> The Scenario Name column in the summary table.</p>
                      <p><span className="text-purple-400">3. Return_Array:</span> The result column Sarah wants, such as Profit, Price, Volume, or Break-Even.</p>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">Build the bridge first</h3>
                    <p className="text-blue-800 text-sm">
                      Lesson 5 gave Sarah a sensitivity table and a profit matrix. Those sheets are great for
                      analysis, but they are not presentation-friendly. In Lesson 6, she converts those results
                      into a short four-row summary table: <strong>Base Case</strong>, <strong>Price Hike</strong>,
                      <strong>High Volume</strong>, and <strong>Downside</strong>. The dashboard reads from that
                      summary table, not from the entire workbook.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Visual Storytelling Section */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Visual Storytelling with Dynamic Charts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-700">
                    A dashboard isn't just numbers—it's visuals. By linking Sarah's charts to 
                    these XLOOKUP formulas, the charts become <strong>interactive</strong>.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 rounded border border-slate-200">
                      <h4 className="font-bold text-slate-900 text-sm mb-2">Static Charts (Weak)</h4>
                      <p className="text-xs text-slate-600">Locked to one set of data. You have to build a new chart for every scenario. Messy and slow.</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded border border-blue-200">
                      <h4 className="font-bold text-blue-900 text-sm mb-2">Dynamic Charts (Professional)</h4>
                      <p className="text-xs text-blue-800">Linked to the XLOOKUP results. When you switch scenarios, the bars and lines move instantly. Impressive and clear.</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">The "Stale Data" Trap:</p>
                      <p className="text-xs text-amber-800">
                        Always use <strong>Data Validation</strong> (Dropdown Menus) for your toggle cell. 
                        If someone types "BaseCase" instead of "Base Case" into B4, your XLOOKUP will fail. 
                        Dropdowns keep your steering wheel locked onto your data engine.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mastery Check */}
              <ComprehensionCheck
                title="Lookup Logic Mastery"
                description="Can you connect the dashboard to the engine?"
                questions={xlookupQuestions}
                showExplanations={true}
              />

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready to Connect the Wires?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you'll use our interactive simulator to write the 
                    XLOOKUP formulas that will drive Sarah's dashboard.
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
