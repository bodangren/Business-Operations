import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Wrench, Settings, Download, FileSpreadsheet, Calculator, Zap } from "lucide-react";
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[2]; // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Guided Practice Introduction */}
              <Card className="border-purple-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Wrench className="w-8 h-8 text-purple-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-purple-800 mb-2">
                    Building Sarah's Scenario Analysis System
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    Hands-On Professional Modeling
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                    <p className="text-lg leading-relaxed text-purple-900 mb-4">
                      Sarah is ready to rebuild her financial model with professional scenario analysis. 
                      She's learned the theory—now she needs to implement Excel's Scenario Manager step-by-step.
                    </p>
                    <p className="text-lg leading-relaxed text-purple-900">
                      Follow along as we guide her (and you) through building a dynamic, investor-ready model 
                      that can instantly switch between optimistic, realistic, and pessimistic business conditions.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Step-by-Step: Setting Up Scenario Manager
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-blue-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🎯 Your Mission</h4>
                        <p className="text-blue-800 text-sm">
                          Build a financial model for TechStart Solutions that can instantly switch between 
                          three scenarios using Excel's Scenario Manager. Each scenario will show different 
                          assumptions about growth, costs, and market conditions.
                        </p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-3 bg-white rounded border border-blue-200">
                          <h5 className="font-medium text-blue-900 mb-2">1. Set Up Input Section</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Create "Assumptions" area</li>
                            <li>• Use absolute references ($B$5)</li>
                            <li>• Name your ranges professionally</li>
                            <li>• Label clearly for investors</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-white rounded border border-blue-200">
                          <h5 className="font-medium text-blue-900 mb-2">2. Create Scenarios</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Access Data &gt; What-If Analysis &gt; Scenario Manager</li>
                            <li>• Define changing cells</li>
                            <li>• Set up three scenarios</li>
                            <li>• Add meaningful descriptions</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Practice Files & Templates</h3>
                
                  <p className="text-lg leading-relaxed">
                    Sarah needs practice data to build her scenarios realistically. Download these resources 
                    to follow along with the guided practice session.
                  </p>

                  <div className="grid md:grid-cols-3 gap-4 my-8">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-green-900 flex items-center gap-2 text-lg">
                          <FileSpreadsheet className="h-5 w-5" />
                          Scenario Variables
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-green-800 mb-4">
                          Complete dataset with optimistic, realistic, and pessimistic assumptions for 
                          TechStart's key business drivers.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-green-300 text-green-700 hover:bg-green-100"
                          asChild
                        >
                          <a href="/resources/unit08-scenario-manager-practice.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Download CSV
                          </a>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-200 bg-amber-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-amber-900 flex items-center gap-2 text-lg">
                          <Calculator className="h-5 w-5" />
                          Financial Model Template
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-amber-800 mb-4">
                          12-month financial model template with proper formula structure 
                          for linking to scenario assumptions.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-amber-300 text-amber-700 hover:bg-amber-100"
                          asChild
                        >
                          <a href="/resources/unit08-financial-model-template.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Download CSV
                          </a>
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-purple-900 flex items-center gap-2 text-lg">
                          <Zap className="h-5 w-5" />
                          Sensitivity Data
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-purple-800 mb-4">
                          Variable ranges and impact analysis data for creating data tables 
                          and understanding key business drivers.
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full border-purple-300 text-purple-700 hover:bg-purple-100"
                          asChild
                        >
                          <a href="/resources/unit08-sensitivity-analysis-data.csv" download>
                            <Download className="h-4 w-4 mr-2" />
                            Download CSV
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Formula Structure</h3>
                    <p className="text-gray-800">
                      Sarah learned that professional financial models follow specific formula conventions 
                      that make them reliable and easy to audit. Practice implementing these patterns 
                      with absolute references, named ranges, and dynamic formulas that update automatically 
                      when scenarios change.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Collaborative Building Session */}
              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Collaborative Building Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-amber-900 mb-2">
                    Work with Your Team (20 minutes):
                  </p>
                  <p className="text-amber-800 mb-4">
                    Using the downloaded practice files, work with a partner to build Sarah's 
                    scenario-enabled financial model. Take turns being the "Excel builder" and 
                    the "investor reviewer" who asks questions about the assumptions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-amber-100 p-3 rounded">
                      <h4 className="font-semibold text-amber-900 mb-2">Excel Builder Role:</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• Set up the assumptions section</li>
                        <li>• Create named ranges for key variables</li>
                        <li>• Link formulas to assumption cells</li>
                        <li>• Configure Scenario Manager with 3 scenarios</li>
                      </ul>
                    </div>
                    <div className="bg-amber-100 p-3 rounded">
                      <h4 className="font-semibold text-amber-900 mb-2">Investor Reviewer Role:</h4>
                      <ul className="text-sm text-amber-800 space-y-1">
                        <li>• Ask "what if" questions about assumptions</li>
                        <li>• Request scenario switches to test flexibility</li>
                        <li>• Check formula logic and references</li>
                        <li>• Suggest improvements for clarity</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Practice */}
              <Card className="border-gray-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-gray-900 text-center text-2xl">
                    Interactive Practice: Building Error-Checking Systems
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-center text-gray-700 mb-8 max-w-3xl mx-auto">
                    Sarah knows that professional financial models include automated error checking. 
                    Practice building conditional formatting rules that help catch mistakes before 
                    investors see them. This system will complement your Scenario Manager by ensuring 
                    your model maintains integrity across all scenarios.
                  </p>
                  <ErrorCheckingSystem />
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Independent Practice phase, you'll tackle advanced scenario challenges 
                    including market penetration analysis, economic stress testing, and competitive 
                    response modeling. These sophisticated scenarios separate amateur models from 
                    investment-grade analysis.
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