import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Table, Grid, ArrowRight, MousePointer2, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson05Data, unit06Data, lesson05Phases } from "../lesson-data";

const currentPhase = lesson05Phases[1]; // Introduction phase

const mechanicQuestions = [
  {
    id: "mech-1",
    question: "In a 1-Variable Data Table where your different prices are listed in a COLUMN (one price per row), which box in the Data Table dialog do you use?",
    answers: [
      "Column Input Cell",
      "Row Input Cell",
      "Set Cell",
      "By Changing Cell"
    ],
    explanation: "If your variables are listed in a column, you use the 'Column Input Cell' box. This tells Excel: 'Take each value from this column and plug it into the input cell I select.'"
  },
  {
    id: "mech-2",
    question: "When setting up a 2-Variable Data Table, what MUST be placed in the top-left corner of the grid?",
    answers: [
      "A reference to the formula you want to track (e.g., =TotalProfit)",
      "The first price in your range",
      "The title of the table",
      "A logo or icon"
    ],
    explanation: "The top-left cell is the 'brain' of the table. It must link directly to the formula cell you want Excel to calculate for every intersection in the grid."
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader 
        unit={unit06Data} 
        lesson={lesson05Data} 
        phase={currentPhase} 
        phases={lesson05Phases} 
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
                    <Table className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-blue-800 mb-2">
                    Mastering the Data Table
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Automating 1-Variable & 2-Variable Sensitivity Analysis
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    Excel's <strong>Data Table</strong> is a "What-If Analysis" tool that allows you to see the 
                    results of dozens of different scenarios at once. Instead of re-typing numbers, 
                    Excel performs a high-speed simulation, plugging every value in your list into 
                    your formula and recording the results.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-3">
                        <ArrowRight className="w-4 h-4" />
                        1-Variable Table
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Tests one input (like <strong>Price</strong>) across a range of values 
                        to see how it affects one output (like <strong>Profit</strong>).
                      </p>
                      <Badge variant="outline" className="text-[10px]">Example: Profit at $10, $12, $14, $16 price points.</Badge>
                    </div>
                    <div className="bg-slate-50 p-5 rounded-lg border border-slate-200">
                      <h4 className="font-bold text-blue-900 flex items-center gap-2 mb-3">
                        <Grid className="w-4 h-4" />
                        2-Variable Table
                      </h4>
                      <p className="text-sm text-slate-600 mb-3">
                        Tests two inputs (like <strong>Price AND Volume</strong>) at the same time 
                        to see the results of every possible combination.
                      </p>
                      <Badge variant="outline" className="text-[10px]">Example: A grid showing Profit for every Price vs. every Volume level.</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanics Section */}
              <Card className="border-blue-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <MousePointer2 className="w-5 h-5" />
                    Mechanics: The Data Table Dialog Box
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-700">
                    When you highlight your grid and go to <em>Data &gt; What-If Analysis &gt; Data Table</em>, 
                    you'll see a small box with just two fields. This is the most common place 
                    where beginners get stuck.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="bg-blue-600 text-white rounded w-24 h-8 flex items-center justify-center font-bold text-xs shrink-0">Row Input</div>
                      <div>
                        <p className="text-sm text-blue-900">
                          Use this if your variables are laid out in a <strong>ROW</strong> (horizontally). 
                          Select the input cell in your model that corresponds to those values.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="bg-blue-600 text-white rounded w-24 h-8 flex items-center justify-center font-bold text-xs shrink-0">Column Input</div>
                      <div>
                        <p className="text-sm text-blue-900">
                          Use this if your variables are laid out in a <strong>COLUMN</strong> (vertically). 
                          Select the input cell in your model that corresponds to those values.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-amber-900">Crucial Setup Rule:</p>
                      <p className="text-xs text-amber-800">
                        In a 2-variable table, the top-left corner of your selection MUST link to 
                        your final result formula (e.g., <code className="bg-amber-100 px-1">=TotalProfit</code>). 
                        If that corner is empty or has a label, the table will show errors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Mechanics Check */}
              <ComprehensionCheck
                title="Mechanics Check: Dialog Box Mastery"
                description="Before we practice, let's make sure we know where to click."
                questions={mechanicQuestions}
                showExplanations={true}
              />

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Ready to Map the Landscape?</h3>
                  <p className="text-gray-700">
                    In Guided Practice, you'll manually fill a profit matrix to understand 
                    exactly how Excel thinks when it builds a Data Table for Sarah.
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