import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { 
  Target, 
  CheckCircle, 
  BookOpen, 
  AlertTriangle,
  Lightbulb,
  Settings,
  TrendingUp,
  Users,
  ArrowRight
} from "lucide-react"

export default function BackwardDesignPage() {
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Backward Design Framework</h1>
        <p className="text-lg text-muted-foreground">
          Understanding by Design approach for each unit: Start with clear objectives, design authentic assessments, then plan learning experiences.
        </p>
      </div>

      {/* Three Stages */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">The Three Stages of Backward Design</h2>
        
        <div className="grid gap-6 mb-8">
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-red-800 dark:text-red-200">
                <Target className="h-6 w-6" />
                Stage 1: Identify Desired Results
              </CardTitle>
              <CardDescription className="text-red-700 dark:text-red-300 font-medium">
                What should students know, understand, and be able to do?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-red-700 dark:text-red-300">
              <ul className="space-y-2">
                <li>• Essential Questions that drive authentic inquiry</li>
                <li>• Enduring Understandings that transfer beyond the unit</li>
                <li>• Specific Knowledge and Skills needed for proficiency</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-blue-800 dark:text-blue-200">
                <CheckCircle className="h-6 w-6" />
                Stage 2: Determine Acceptable Evidence
              </CardTitle>
              <CardDescription className="text-blue-700 dark:text-blue-300 font-medium">
                How will we know if students have achieved the desired results?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-blue-700 dark:text-blue-300">
              <ul className="space-y-2">
                <li>• Performance Tasks that mirror real-world applications</li>
                <li>• Authentic Assessments that allow students to demonstrate understanding</li>
                <li>• Success Criteria and Rubrics that define proficiency</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-green-800 dark:text-green-200">
                <BookOpen className="h-6 w-6" />
                Stage 3: Plan Learning Experiences
              </CardTitle>
              <CardDescription className="text-green-700 dark:text-green-300 font-medium">
                What learning experiences will lead to proficiency?
              </CardDescription>
            </CardHeader>
            <CardContent className="text-green-700 dark:text-green-300">
              <ul className="space-y-2">
                <li>• Knowledge Building activities that provide foundation</li>
                <li>• Skill Development through guided and independent practice</li>
                <li>• Application Opportunities in authentic contexts</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Unit Analysis */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Unit-by-Unit Backward Design Analysis</h2>

        {/* Unit 1 */}
        <Card className="mb-8 bg-slate-50 dark:bg-slate-950/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Unit 1: Smart Ledger Launch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Stage 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Stage 1: Desired Results
              </h4>
              
              <Card className="mb-4 border-purple-200 bg-purple-50 dark:bg-purple-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-purple-800 dark:text-purple-200">
                    Essential Question
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300 italic">
                    How can we design a self-auditing ledger that would convince a potential angel investor we keep "clean books" from day 1?
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Enduring Understandings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Accurate financial records are the foundation of business credibility</p>
                    <p>• The accounting equation (Assets = Liabilities + Equity) governs all business transactions</p>
                    <p>• Self-auditing systems prevent errors and build stakeholder trust</p>
                    <p>• Professional presentation of financial data communicates competence</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Knowledge & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Content Knowledge:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Apply the accounting equation to real business transactions</li>
                        <li>• Record debits and credits accurately for common business activities</li>
                        <li>• Generate and interpret a trial balance for error detection</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Excel Skills:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Create Excel Tables with structured references for dynamic data</li>
                        <li>• Use SUMIF functions to aggregate financial data by category</li>
                        <li>• Implement conditional formatting for visual error detection</li>
                        <li>• Build error-checking formulas for data validation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stage 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Stage 2: Assessment Evidence
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Performance Task (Final Assessment)</CardTitle>
                    <CardDescription className="font-medium">4-minute investor pitch + live Excel demo</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Present self-auditing ledger to panel of finance professionals</p>
                    <p>• Demonstrate error-checking features in real-time</p>
                    <p>• Explain how the system builds investor confidence</p>
                    <p>• Answer questions about accuracy and reliability</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Milestone Assessments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Milestone 1:</strong> Prototype ledger with 10 correctly recorded transactions</p>
                    <p><strong>Milestone 2:</strong> Integrated "red-flag" conditional formatting rules</p>
                    <p><strong>Milestone 3:</strong> Trial balance auto-check formula passes 100% validation</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Success Criteria & Rubric</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Criteria</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Weight</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Proficient Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Accuracy</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">45%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">All transactions correctly posted; trial balance reconciles perfectly</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Functionality</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">25%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">SUMIF formulas and error-checks work reliably on full dataset</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">User Documentation</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">15%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Clear instructions enable independent use by non-experts</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Investor Pitch</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">15%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Compelling narrative addresses real investor concerns about financial controls</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Stage 3 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-green-600" />
                Stage 3: Learning Plan
              </h4>

              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      Knowledge Building
                      <Badge variant="secondary">Days 1-3</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Hook:</strong> Founder Q&A about bookkeeping disasters and investor requirements</p>
                    <p><strong>Foundation:</strong> Accounting equation mini-lesson with real business examples</p>
                    <p><strong>Practice:</strong> Journal entry practice with immediate feedback and peer checking</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      Skill Development
                      <Badge variant="secondary">Days 4-7</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Excel Tables:</strong> Guided practice converting CSV data to structured references</p>
                    <p><strong>SUMIF Functions:</strong> Step-by-step building of aggregation formulas</p>
                    <p><strong>Conditional Formatting:</strong> Visual error detection rule creation</p>
                    <p><strong>Error Checking:</strong> Building trial balance validation formulas</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center gap-2">
                      Application & Assessment
                      <Badge variant="secondary">Days 8-10</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Integration:</strong> Combining all elements into complete self-auditing system</p>
                    <p><strong>Testing:</strong> Validating system with real transaction data</p>
                    <p><strong>Presentation:</strong> Preparing and delivering investor pitch</p>
                    <p><strong>Reflection:</strong> Analyzing learning and planning next steps</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unit 2 */}
        <Card className="mb-8 bg-slate-50 dark:bg-slate-950/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Unit 2: Month-End Wizard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Stage 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Stage 1: Desired Results
              </h4>
              
              <Card className="mb-4 border-purple-200 bg-purple-50 dark:bg-purple-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-purple-800 dark:text-purple-200">
                    Essential Question
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300 italic">
                    What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Enduring Understandings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Automation reduces errors and saves time when properly implemented</p>
                    <p>• GAAP compliance requires systematic adjusting entries</p>
                    <p>• Month-end closing follows predictable patterns that can be automated</p>
                    <p>• User-friendly systems enable adoption by non-technical users</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Knowledge & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Content Knowledge:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Record accruals and deferrals according to GAAP standards</li>
                        <li>• Calculate straight-line depreciation for fixed assets</li>
                        <li>• Prepare closing entries to zero temporary accounts</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Excel Skills:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Create and use named ranges for dynamic references</li>
                        <li>• Record and edit macros using macro recorder</li>
                        <li>• Design user-friendly button controls for automation</li>
                        <li>• Write basic VBA procedures (optional extension)</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stage 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Stage 2: Assessment Evidence
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Performance Task (Final Assessment)</CardTitle>
                    <CardDescription className="font-medium">Innovation Fair Demo + Time-to-Close Challenge</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Demonstrate Month-End Wizard to Innovation Fair visitors</p>
                    <p>• Complete month-end close in under 2 hours using automation</p>
                    <p>• Explain efficiency gains and accuracy improvements</p>
                    <p>• Collect user feedback and implement improvements</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Milestone Assessments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Milestone 1:</strong> Four adjusting entry scenarios correctly mapped and automated</p>
                    <p><strong>Milestone 2:</strong> Macro successfully inserts closing entries</p>
                    <p><strong>Milestone 3:</strong> Complete system closes books in under 2 hours with UI button</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Success Criteria & Rubric</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 text-sm">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Criteria</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Weight</th>
                          <th className="border border-gray-300 dark:border-gray-600 p-2 text-left">Proficient Performance</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">GAAP Compliance</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">40%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">All adjusting and closing entries follow GAAP standards</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Automation Efficiency</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">25%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">System reduces close time to under 2 hours reliably</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">User Experience</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">20%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Interface is intuitive; non-experts can use successfully</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-600 p-2 font-medium">Innovation & Improvement</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">15%</td>
                          <td className="border border-gray-300 dark:border-gray-600 p-2">Incorporates user feedback; demonstrates continuous improvement</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Unit 3 */}
        <Card className="mb-8 bg-slate-50 dark:bg-slate-950/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Unit 3: Three-Statement Storyboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Stage 1 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Target className="h-5 w-5 text-red-600" />
                Stage 1: Desired Results
              </h4>
              
              <Card className="mb-4 border-purple-200 bg-purple-50 dark:bg-purple-950/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base text-purple-800 dark:text-purple-200">
                    Essential Question
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-purple-700 dark:text-purple-300 italic">
                    How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Enduring Understandings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Financial statements tell a coherent story about business performance</p>
                    <p>• Each statement provides a different lens on business health</p>
                    <p>• Interconnected statements provide validation and deeper insight</p>
                    <p>• Professional presentation builds stakeholder confidence</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Knowledge & Skills</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm">
                    <div>
                      <p className="font-medium">Content Knowledge:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Construct Income Statement from journal entry data</li>
                        <li>• Build linked Balance Sheet with retained earnings reconciliation</li>
                        <li>• Prepare Indirect Cash Flow Statement</li>
                        <li>• Calculate and interpret key financial ratios</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Excel Skills:</p>
                      <ul className="mt-1 space-y-1">
                        <li>• Cross-sheet linking with INDEX/MATCH functions</li>
                        <li>• Dynamic dashboard creation with charts and KPIs</li>
                        <li>• Interactive data visualization with sparklines</li>
                        <li>• Professional formatting for investor presentation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Stage 2 */}
            <div>
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                Stage 2: Assessment Evidence
              </h4>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Performance Task (Final Assessment)</CardTitle>
                    <CardDescription className="font-medium">Investor Demo Day Presentation</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>• Present investor one-pager with integrated financial statements</p>
                    <p>• Demonstrate interactive Excel workbook with live data connections</p>
                    <p>• Explain financial story using professional business language</p>
                    <p>• Answer investor questions about financial health and projections</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">Milestone Assessments</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Milestone 1:</strong> Income Statement built with 100% correct formulas</p>
                    <p><strong>Milestone 2:</strong> Balance Sheet linked with retained earnings reconciled</p>
                    <p><strong>Milestone 3:</strong> Cash Flow Statement completed with proper indirect method</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Units */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
              Additional Units
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 dark:text-blue-300 mb-3">
              Each remaining unit (4-8) follows the same backward design structure:
            </p>
            <ul className="space-y-1 text-blue-700 dark:text-blue-300">
              <li><strong>Unit 4:</strong> Data analysis and forecasting with statistical tools</li>
              <li><strong>Unit 5:</strong> Payroll systems and cash flow management</li>
              <li><strong>Unit 6:</strong> Pricing optimization and break-even analysis</li>
              <li><strong>Unit 7:</strong> Asset management and depreciation systems</li>
              <li><strong>Unit 8:</strong> Integrated business model preparation</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Alignment Check */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Curriculum Alignment Check</h2>

        <Card className="mb-6 border-amber-200 bg-amber-50 dark:bg-amber-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
              Ensuring Coherent Learning Progression
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700 dark:text-amber-300 mb-3">
              Each unit builds systematically toward the Semester 2 capstone project:
            </p>
            <ul className="space-y-2 text-amber-700 dark:text-amber-300">
              <li><strong>Units 1-2:</strong> Foundation systems (ledger, automation)</li>
              <li><strong>Units 3-4:</strong> Analysis and communication (statements, data analysis)</li>
              <li><strong>Units 5-6:</strong> Operations management (payroll, pricing)</li>
              <li><strong>Units 7-8:</strong> Strategic planning (assets, integration)</li>
              <li><strong>Semester 2:</strong> Independent application in authentic capstone project</li>
            </ul>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Assessment Alignment Matrix</h3>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800 border-b">
                    <th className="border-r p-3 text-left font-medium">Unit</th>
                    <th className="border-r p-3 text-left font-medium">Key Assessment</th>
                    <th className="border-r p-3 text-left font-medium">Excel Skills</th>
                    <th className="border-r p-3 text-left font-medium">Business Skills</th>
                    <th className="p-3 text-left font-medium">Capstone Connection</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="border-r p-3 font-medium">1</td>
                    <td className="border-r p-3">Self-auditing ledger demo</td>
                    <td className="border-r p-3">Tables, SUMIF, conditional formatting</td>
                    <td className="border-r p-3">Recording transactions, error checking</td>
                    <td className="p-3">Foundation for all financial tracking</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-900/50">
                    <td className="border-r p-3 font-medium">2</td>
                    <td className="border-r p-3">Month-end automation</td>
                    <td className="border-r p-3">Macros, named ranges, UI design</td>
                    <td className="border-r p-3">GAAP compliance, process efficiency</td>
                    <td className="p-3">Automated systems for capstone model</td>
                  </tr>
                  <tr className="border-b">
                    <td className="border-r p-3 font-medium">3</td>
                    <td className="border-r p-3">Investor presentation</td>
                    <td className="border-r p-3">Cross-sheet linking, dashboards</td>
                    <td className="border-r p-3">Financial statements, ratio analysis</td>
                    <td className="p-3">Integrated model for investor pitch</td>
                  </tr>
                  <tr className="border-b bg-gray-50 dark:bg-gray-900/50">
                    <td className="border-r p-3 font-medium">4</td>
                    <td className="border-r p-3">Data-driven recommendations</td>
                    <td className="border-r p-3">Statistical analysis, forecasting</td>
                    <td className="border-r p-3">Market research, demand planning</td>
                    <td className="p-3">Market analysis for business plan</td>
                  </tr>
                  <tr>
                    <td className="border-r p-3 font-medium">5</td>
                    <td className="border-r p-3">Payroll cash flow model</td>
                    <td className="border-r p-3">XLOOKUP, complex calculations</td>
                    <td className="border-r p-3">Employment costs, cash timing</td>
                    <td className="p-3">Staffing plan and payroll projections</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Implementation Guide */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-6">Implementation Guide for Teachers</h2>

        <Card className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-green-800 dark:text-green-200">
              Planning Each Unit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2 text-green-700 dark:text-green-300">
              <li><strong>1. Start with Stage 1:</strong> Clarify what students must know and be able to do</li>
              <li><strong>2. Design Stage 2:</strong> Create authentic assessments that mirror real-world applications</li>
              <li><strong>3. Plan Stage 3:</strong> Sequence learning experiences to build toward proficiency</li>
              <li><strong>4. Check Alignment:</strong> Ensure activities directly support assessment success</li>
              <li><strong>5. Plan Differentiation:</strong> Provide multiple pathways to demonstrate understanding</li>
            </ol>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Common Planning Questions</h3>
        <ul className="space-y-2 mb-6">
          <li><strong>Knowledge:</strong> What facts, concepts, and principles must students learn?</li>
          <li><strong>Skills:</strong> What must students be able to do with their knowledge?</li>
          <li><strong>Understanding:</strong> What enduring insights should students gain?</li>
          <li><strong>Assessment:</strong> How will students demonstrate their learning authentically?</li>
          <li><strong>Instruction:</strong> What experiences will prepare students for success?</li>
        </ul>

        <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-orange-800 dark:text-orange-200 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Avoid These Common Pitfalls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-orange-700 dark:text-orange-300">
              <li>• Teaching activities without clear connection to assessments</li>
              <li>• Assessing knowledge without requiring application</li>
              <li>• Focusing on coverage rather than understanding</li>
              <li>• Creating assessments that don't match real-world applications</li>
              <li>• Skipping the reflection and revision cycle</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}