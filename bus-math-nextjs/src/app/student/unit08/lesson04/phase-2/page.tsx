import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Settings, Database, CheckCircle, Zap, ArrowRight } from "lucide-react";
import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[1]; // Introduction phase

const vocabularyExercise = [
  {
    id: "1",
    text: "Excel {blank} Manager allows you to store and switch between different sets of input variables in your financial model.",
    answer: "Scenario",
    hint: "This tool is specifically designed for modeling different business conditions"
  },
  {
    id: "2",
    text: "The {blank} cells are the input variables that change between scenarios, such as growth rates or cost assumptions.",
    answer: "changing",
    hint: "These cells contain the assumptions that vary between optimistic, realistic, and pessimistic cases"
  },
  {
    id: "3",
    text: "{blank} cells display the calculated outcomes that depend on your changing cells, like total revenue or net profit.",
    answer: "Result",
    hint: "These cells show the impact of your scenario assumptions"
  },
  {
    id: "4",
    text: "A {blank} summary report shows all your scenarios side-by-side for easy comparison of outcomes.",
    answer: "scenario",
    hint: "This automated report helps investors compare different business conditions"
  },
  {
    id: "5",
    text: "Professional financial models use {blank} references like '$B$5' to ensure formulas don't break when scenarios change.",
    answer: "absolute",
    hint: "These lock cell references so they don't shift when Excel updates scenarios"
  }
];

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Introduction
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Introduction */}
              <Card className="border-green-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Settings className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-green-800 mb-2">
                    Scenario Manager & Financial Modeling Foundation
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    The Professional Foundation
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                    <p className="text-lg leading-relaxed text-green-900 mb-4">
                      After her challenging meeting with the VCs, Sarah spent the weekend researching how 
                      professional financial analysts handle uncertainty. She discovered that Excel's Scenario 
                      Manager is the industry standard for modeling different business conditions. Here's what 
                      she learned—and what you need to master to build investor-ready financial models.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      What is Scenario Manager?
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Scenario Manager is Excel's built-in tool for storing and switching between different 
                      sets of input variables. Instead of manually changing numbers and copying results, 
                      you can instantly switch between "Optimistic," "Realistic," and "Pessimistic" 
                      assumptions with a single click.
                    </p>
                    <div className="bg-blue-100 p-4 rounded-lg">
                      <p className="text-blue-900 font-medium text-sm">
                        🎯 <strong>Professional Standard:</strong> All investment-grade financial models use 
                        scenario analysis. It shows investors you understand risks and have prepared for 
                        different market conditions.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">The Three Core Components</h3>

                  <div className="grid md:grid-cols-3 gap-6 my-8">
                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-purple-900 flex items-center gap-2 text-lg">
                          <Database className="h-5 w-5" />
                          1. Changing Cells
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-purple-800 mb-3">
                          These are your <strong>input variables</strong>—the assumptions that change 
                          between scenarios.
                        </p>
                        <div className="bg-purple-100 p-3 rounded text-xs text-purple-900">
                          <strong>TechStart Examples:</strong><br/>
                          • Monthly growth rate: 20%, 35%, 8%<br/>
                          • Customer acquisition cost: $250<br/>
                          • Monthly churn rate: 5%<br/>
                          • Average revenue per user: $85
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 bg-amber-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-amber-900 flex items-center gap-2 text-lg">
                          <Zap className="h-5 w-5" />
                          2. Result Cells
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-amber-800 mb-3">
                          These are your <strong>calculated outcomes</strong>—the numbers that depend 
                          on your changing cells.
                        </p>
                        <div className="bg-amber-100 p-3 rounded text-xs text-amber-900">
                          <strong>Key Results to Track:</strong><br/>
                          • Year 1 Total Revenue<br/>
                          • Monthly Cash Burn Rate<br/>
                          • Time to Break Even<br/>
                          • Total Funding Needed
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-green-900 flex items-center gap-2 text-lg">
                          <CheckCircle className="h-5 w-5" />
                          3. Scenario Sets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-800 mb-3">
                          Each scenario is a <strong>named collection</strong> of values for your 
                          changing cells.
                        </p>
                        <div className="bg-green-100 p-3 rounded text-xs text-green-900">
                          <strong>Standard Scenarios:</strong><br/>
                          • <strong>Optimistic:</strong> Strong market conditions<br/>
                          • <strong>Realistic:</strong> Expected performance<br/>
                          • <strong>Pessimistic:</strong> Challenging conditions
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Building Professional Models: Best Practices</h3>

                  <p className="text-lg leading-relaxed">
                    Sarah learned that professional financial analysts follow strict conventions when 
                    building scenario-based models. These aren't just suggestions—they're industry 
                    standards that determine whether investors take your model seriously.
                  </p>

                  <div className="space-y-4">
                    <Card className="border-indigo-200 bg-indigo-50">
                      <CardHeader>
                        <CardTitle className="text-indigo-900 text-lg">📍 Use Absolute Cell References</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-indigo-800 mb-3">
                          Always use <code className="bg-indigo-100 px-2 py-1 rounded">$B$5</code> instead of 
                          <code className="bg-red-100 px-2 py-1 rounded">B5</code> for scenario changing cells. 
                          This prevents formulas from breaking when Excel updates scenarios.
                        </p>
                        <div className="bg-indigo-100 p-3 rounded text-sm text-indigo-900">
                          <strong>Example:</strong> <code>=Revenue_Growth_Rate*$B$10</code> (✓ Professional)<br/>
                          <strong>Avoid:</strong> <code>=0.20*B10</code> (✗ Hard-coded and fragile)
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-teal-200 bg-teal-50">
                      <CardHeader>
                        <CardTitle className="text-teal-900 text-lg">🏷️ Named Ranges for Key Variables</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-teal-800 mb-3">
                          Give meaningful names to your changing cells. Instead of referring to "B5," 
                          create a named range like "Revenue_Growth_Rate." This makes formulas readable 
                          and professional.
                        </p>
                        <div className="bg-teal-100 p-3 rounded text-sm text-teal-900">
                          <strong>Professional:</strong> <code>=Monthly_Revenue * (1 + Revenue_Growth_Rate)</code><br/>
                          <strong>Unprofessional:</strong> <code>=B15 * (1 + B5)</code>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-cyan-200 bg-cyan-50">
                      <CardHeader>
                        <CardTitle className="text-cyan-900 text-lg">📊 Scenario Summary Reports</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-cyan-800 mb-3">
                          Excel can automatically generate a summary table showing all your scenarios 
                          side-by-side. This is perfect for investor presentations—you can show how 
                          your business performs under different conditions at a glance.
                        </p>
                        <div className="bg-cyan-100 p-3 rounded text-sm text-cyan-900">
                          <strong>Summary includes:</strong> All scenario names, input assumptions, 
                          and calculated results in a clean, comparative format.
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Why Investors Demand This</h3>

                  <p className="text-lg leading-relaxed">
                    Marcus, the VC who challenged Sarah, later explained why scenario analysis is 
                    non-negotiable: "We're not investing in your best-case dream—we're investing in 
                    your business's ability to succeed across different market conditions. If you 
                    can't model uncertainty, you can't manage it."
                  </p>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2 text-blue-900">
                      <ArrowRight className="h-5 w-5" />
                      Real-World Impact
                    </h4>
                    <p className="text-base mb-3 text-blue-800">
                      Professional investors use scenario analysis to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                      <li>Assess how much funding a startup needs in different market conditions</li>
                      <li>Understand when the business becomes profitable under various assumptions</li>
                      <li>Evaluate management's understanding of risks and opportunities</li>
                      <li>Plan follow-up investment rounds based on different growth trajectories</li>
                    </ul>
                  </div>

                  <p className="text-lg leading-relaxed">
                    Sarah realized that learning Scenario Manager wasn't just about Excel skills—it was 
                    about developing the analytical mindset that investors expect from fundable entrepreneurs. 
                    With this foundation, she was ready to rebuild her financial model the right way.
                  </p>
                </CardContent>
              </Card>

              {/* Vocabulary Exercise */}
              <FillInTheBlank
                title="Master Scenario Manager Vocabulary"
                description="Complete these sentences about Excel Scenario Manager functionality"
                sentences={vocabularyExercise}
                showWordList={true}
                showHints={true}
                randomizeWordOrder={true}
              />

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
                  <p className="text-blue-800 mb-2">
                    Think about professional financial modeling and discuss with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Why do you think investors prefer dynamic models over static spreadsheets?</li>
                    <li>How might scenario analysis help entrepreneurs make better business decisions?</li>
                    <li>What advantages does Excel's Scenario Manager have over manually changing numbers?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Guided Practice phase, we'll build Sarah's scenario-enabled financial model 
                    step-by-step. You'll learn professional formula techniques, set up changing cells 
                    and result tracking, and create the dynamic models that impress investors.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}