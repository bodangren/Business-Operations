import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, FileSpreadsheet, AlertTriangle } from "lucide-react"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 4: Workbook Sprint
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Build the Cross-Sheet Links in Your Workbook</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Open the student workbook and build the three critical links plus integrity checks.
              By the end of this phase, all three statements should update together when you change one number.
            </p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2 text-blue-700 underline hover:text-blue-900"
                href="/resources/unit03-lesson05-student.xlsx"
                download
              >
                <Download className="h-4 w-4" />
                Download: unit03-lesson05-student.xlsx
              </a>
              <span className="text-gray-400">|</span>
              <a
                className="inline-flex items-center gap-2 text-blue-700 underline hover:text-blue-900"
                href="/resources/unit03-lesson05-tutorial.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileSpreadsheet className="h-4 w-4" />
                Tutorial Guide
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Build Sequence
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-orange-900">
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-orange-400">
                  <p className="font-semibold text-sm">Step 1: Link Net Income to Retained Earnings</p>
                  <p className="text-sm mt-1">
                    On the <strong>Balance Sheet</strong> tab, find the Retained Earnings section.
                    In the cell for &ldquo;Net Income added this period,&rdquo; enter:
                  </p>
                  <p className="font-mono text-xs mt-2 bg-gray-50 p-2 rounded">
                    ='Income Statement'!B12
                  </p>
                  <p className="text-xs mt-1 text-gray-600">
                    Verify: The cell should show the same Net Income number from the Income Statement.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-blue-400">
                  <p className="font-semibold text-sm">Step 2: Link Ending Cash to the Balance Sheet</p>
                  <p className="text-sm mt-1">
                    On the <strong>Balance Sheet</strong> tab, find the Cash line under Current Assets.
                    Replace the hard-coded number with:
                  </p>
                  <p className="font-mono text-xs mt-2 bg-gray-50 p-2 rounded">
                    ='Cash Flow'!B20
                  </p>
                  <p className="text-xs mt-1 text-gray-600">
                    Verify: Cash on the Balance Sheet should now match Ending Cash on the Cash Flow Statement.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-purple-400">
                  <p className="font-semibold text-sm">Step 3: Link Beginning Cash on the Cash Flow Statement</p>
                  <p className="text-sm mt-1">
                    On the <strong>Cash Flow</strong> tab, find Beginning Cash. Link it from the Balance Sheet:
                  </p>
                  <p className="font-mono text-xs mt-2 bg-gray-50 p-2 rounded">
                    ='Balance Sheet'!B4
                  </p>
                  <p className="text-xs mt-1 text-gray-600">
                    Verify: Beginning Cash on the Cash Flow Statement matches the prior period Cash on the Balance Sheet.
                  </p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-green-400">
                  <p className="font-semibold text-sm">Step 4: Add Integrity Checks</p>
                  <p className="text-sm mt-1">
                    On the <strong>Balance Sheet</strong> tab, add these three checks below the main statement:
                  </p>
                  <div className="space-y-2 mt-2">
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="font-mono text-xs">
                        Balance Check: =IF(ABS(TotalAssets - (TotalLiab + TotalEquity)) &lt; 0.01, &quot;OK&quot;, &quot;CHECK&quot;)
                      </p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="font-mono text-xs">
                        Cash Tie: =IF(ABS(BalanceSheetCash - CashFlowEndingCash) &lt; 0.01, &quot;OK&quot;, &quot;CHECK&quot;)
                      </p>
                    </div>
                    <div className="bg-gray-50 p-2 rounded">
                      <p className="font-mono text-xs">
                        RE Roll-forward: =IF(ABS(EndingRE - (BeginningRE + NetIncome)) &lt; 0.01, &quot;OK&quot;, &quot;CHECK&quot;)
                      </p>
                    </div>
                  </div>
                  <p className="text-xs mt-2 text-gray-600">
                    Verify: All three checks should display &ldquo;OK&rdquo; in green.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Verification Checkpoint
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <p className="text-sm font-medium">Test your links:</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Change Revenue on the Income Statement from $16,500 to $18,000</li>
                <li>Check that Net Income updates on the Income Statement</li>
                <li>Check that Retained Earnings updates on the Balance Sheet</li>
                <li>Check that the Balance Check still shows &ldquo;OK&rdquo;</li>
                <li>If any check shows &ldquo;CHECK&rdquo;, review your formulas for typos</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Troubleshooting
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-amber-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>#REF! error:</strong> The sheet name is wrong or the cell reference is invalid. Check the tab name exactly.</li>
                <li><strong>Wrong number showing:</strong> You may have linked to the wrong cell. Compare the source cell value to what appears.</li>
                <li><strong>Check shows &ldquo;CHECK&rdquo;:</strong> The statements don&apos;t tie. Review each link and verify the source cells are correct.</li>
                <li><strong>Number did not update:</strong> Make sure the formula starts with = and references the correct sheet name with single quotes.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Definition of Done</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                <li>Net Income on the Income Statement links to Retained Earnings on the Balance Sheet</li>
                <li>Ending Cash on the Cash Flow Statement links to Cash on the Balance Sheet</li>
                <li>Beginning Cash on the Cash Flow Statement links from the Balance Sheet</li>
                <li>All three integrity checks display &ldquo;OK&rdquo;</li>
                <li>Changing one number on the Income Statement causes visible updates on the other two tabs</li>
                <li>Save your completed workbook as <span className="font-mono">unit03-lesson05-[YourName].xlsx</span></li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
