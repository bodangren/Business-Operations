import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileSpreadsheet, CheckSquare, ArrowRight, Users, Target, ClipboardCheck, TestTube, MessageSquare, BookOpen } from "lucide-react"
import { lesson09Data } from "./lesson-data"

const workbookSheets = [
  {
    name: "Data",
    purpose: "Raw transaction and adjustment data for your group's month-end close",
    proves: "The source numbers that every other sheet depends on",
    status: "Should be complete from Lesson 08"
  },
  {
    name: "Adjustments",
    purpose: "All adjusting entries—accruals, deferrals, depreciation, supplies used",
    proves: "That every recurring month-end adjustment has been identified and recorded",
    status: "Expand from Lesson 08 draft to full set"
  },
  {
    name: "Trial Balance",
    purpose: "Unadjusted and adjusted trial balance with debit/credit verification",
    proves: "That debits equal credits after adjustments (accounting integrity)",
    status: "Build from skeleton to populated sheet"
  },
  {
    name: "Financial Statements",
    purpose: "Income statement, statement of retained earnings, and balance sheet",
    proves: "That the adjusted numbers produce a complete and accurate financial picture",
    status: "New sheet for this milestone"
  },
  {
    name: "Closing Entries",
    purpose: "Revenue, expense, and dividend closing entries with Income Summary",
    proves: "That temporary accounts are reset to zero for the next period",
    status: "New sheet for this milestone"
  },
  {
    name: "Recommendation",
    purpose: "Final recommendation statement with supporting evidence and risk acknowledgment",
    proves: "That the workbook tells a clear business story backed by numbers",
    status: "Draft from Lesson 08 → full recommendation with cited numbers"
  },
  {
    name: "Assumptions",
    purpose: "Date/version, scenario drivers, and notes about data sources",
    proves: "That the workbook is auditable—someone else can understand how it was built",
    status: "Update with any new decisions or changes"
  }
]

const milestone2Criteria = [
  "All workbook sheets completed (Data, Adjustments, Trial Balance, Financial Statements, Closing Entries)",
  "Trial Balance debits equal credits after all adjustments",
  "Financial statements are complete and tie back to the adjusted trial balance",
  "Closing entries reset all temporary accounts to zero",
  "Recommendation statement includes a clear claim, at least three cited workbook numbers, and one risk or limitation",
  "Peer critique completed with at least one concrete strength and one revision target documented",
  "At least one revision made based on peer feedback before demo rehearsal"
]

const submissionChecklist = [
  "Workbook file saved with correct naming convention (Unit02_Lesson09_Group[Number]_[Scenario].xlsx)",
  "All seven sheets completed and cross-referenced",
  "Trial Balance balances (debits = credits)",
  "Financial statements produce a coherent business story",
  "Recommendation sheet has claim + 3 cited numbers + 1 risk",
  "Peer critique form completed and saved",
  "Revision notes documented showing what changed after feedback",
  "Demo rehearsal completed (4-5 minute run-through)"
]

const groupDatasets = [
  { group: 1, scenario: "TechStart Solutions — Q4 close with prepaid insurance adjustment", file: "unit02-pbl-month-end-wizard-g1.csv" },
  { group: 2, scenario: "GreenLeaf Consulting — Year-end with accrued revenue recognition", file: "unit02-pbl-month-end-wizard-g2.csv" },
  { group: 3, scenario: "BlueWave Manufacturing — Month-end with depreciation and supplies", file: "unit02-pbl-month-end-wizard-g3.csv" },
  { group: 4, scenario: "Summit Retail Corp — Period close with unearned revenue deferral", file: "unit02-pbl-month-end-wizard-g4.csv" },
  { group: 5, scenario: "NorthStar Services — Month-end with accrued wages and prepaid rent", file: "unit02-pbl-month-end-wizard-g5.csv" },
  { group: 6, scenario: "Apex Digital Agency — Year-end with bad debt and depreciation", file: "unit02-pbl-month-end-wizard-g6.csv" }
]

const recommendationTemplate = {
  claim: "Based on our month-end close analysis, [company name]'s financial position shows [key finding—e.g., strong liquidity, concerning cash shortfall, healthy profit margins].",
  evidence: "Our workbook reveals: (1) [cited number from Financial Statements], (2) [cited number from Trial Balance or Adjustments], and (3) [cited number from Closing Entries or another sheet].",
  risk: "One limitation of our analysis is [risk—e.g., we assumed straight-line depreciation without testing units-of-production, or our data does not reflect year-end inventory counts].",
  defense: "Despite this limitation, our recommendation holds because [reason tied to workbook evidence]."
}

export default function Lesson09Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Lesson 09 — Milestone 2: Complete Workbook and Rehearse Demo</Badge>
          <h1 className="text-3xl font-bold text-slate-900">{lesson09Data.title}</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Today your team finishes the project workbook, writes a defensible recommendation with cited evidence, runs peer critique, and rehearses your demo. Bring your Lesson 08 workbook—you are continuing the same file.
          </p>
        </div>

        {/* Context */}
        <Card className="border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Where You Are: Milestone 2
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-blue-900">
            <p>
              In Lesson 08, your team set up the workbook, populated the Data sheet, and began the Adjustments sheet with at least three entries. You also wrote a draft recommendation direction statement. Today you complete the full evidence chain.
            </p>
            <p className="mt-4">
              <strong>What you are building today:</strong> a complete month-end close workbook with Trial Balance, Financial Statements, and Closing Entries—all tied together with a recommendation that cites specific numbers from your own analysis.
            </p>
            <p className="mt-4">
              <strong>What changes from Lesson 08:</strong> you move from setup and early analysis into full completion, testing, peer critique, and demo rehearsal. Your workbook should now tell a complete financial story.
            </p>
          </CardContent>
        </Card>

        {/* Business Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Complete a full month-end close for your group's unique scenario</li>
                <li>Write a recommendation supported by at least three cited workbook numbers</li>
                <li>Identify at least one risk or limitation in your analysis</li>
                <li>Defend your recommendation using evidence from your own workbook</li>
                <li>Produce a workbook suitable for investor or client review</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Workbook Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Complete Trial Balance with populated numbers (debits = credits)</li>
                <li>Build Financial Statements sheet (Income Statement, Retained Earnings, Balance Sheet)</li>
                <li>Record Closing Entries that reset all temporary accounts to zero</li>
                <li>Finish Recommendation sheet with claim, evidence, and risk</li>
                <li>Update Assumptions sheet with any new decisions or changes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Group Dataset Reminder */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Group's Dataset (Same as Lesson 08)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900 space-y-4">
            <Alert className="border-blue-300 bg-white">
              <AlertCircle className="h-4 w-4 text-blue-700" />
              <AlertTitle className="text-blue-900">Continue Your Lesson 08 Workbook</AlertTitle>
              <AlertDescription className="text-blue-800">
                Do not start a new file. Open the workbook you saved in Lesson 08 and continue building. If you lost your file, re-download your group's dataset below and rebuild from your notes.
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {groupDatasets.map((d) => (
                <div key={d.group} className="p-4 border border-blue-200 rounded-lg bg-white">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {d.group}
                    </span>
                    <div>
                      <h4 className="font-semibold text-blue-900">Group {d.group}</h4>
                      <p className="text-sm text-blue-700 mt-1">{d.scenario}</p>
                      <a href={`/resources/${d.file}`} download className="inline-flex items-center gap-1 mt-2 text-sm text-blue-600 hover:text-blue-800 underline">
                        <FileSpreadsheet className="w-3 h-3" />
                        Download {d.file}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Workbook Structure and Progress */}
        <Card className="border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Workbook Structure: Complete the Evidence Chain
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-blue-900">
            <p>
              Your project workbook uses the <strong>exact same sheet structure</strong> as the Lesson 07 rehearsal workbook. Each sheet below shows where you should be starting from (Lesson 08 status) and what you need to complete today.
            </p>
            <div className="space-y-4 mt-6">
              {workbookSheets.map((sheet, i) => (
                <div key={sheet.name} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-blue-900">{sheet.name}</h4>
                        <Badge variant="outline" className="text-xs">{sheet.status}</Badge>
                      </div>
                      <p className="text-sm text-blue-700 mt-1">{sheet.purpose}</p>
                      <p className="text-sm text-blue-600 mt-1 font-medium">Proves: {sheet.proves}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* File Naming Convention */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900">File Naming Convention</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 space-y-3">
            <p>Update your workbook filename to reflect today's milestone:</p>
            <code className="block p-3 bg-white border border-amber-300 rounded text-sm">
              Unit02_Lesson09_Group[Number]_[ShortScenarioName].xlsx
            </code>
            <p className="text-sm">
              Example: <code className="bg-white px-1 border border-amber-300 rounded">Unit02_Lesson09_Group3_BlueWaveManufacturing.xlsx</code>
            </p>
            <p className="text-sm text-amber-800">
              <strong>Lost your Lesson 08 workbook?</strong> Re-download your group's CSV file from the dataset section above and rebuild from your notes. Document what you had to reconstruct on the Assumptions sheet.
            </p>
          </CardContent>
        </Card>

        {/* Scenario Testing and Checks */}
        <Card className="border-emerald-200 bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <TestTube className="w-5 h-5" />
              Scenario Testing and Checks
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900 space-y-4">
            <p>
              Before you finalize your workbook, run these checks to prove your analysis is accurate and trustworthy:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                <h4 className="font-semibold text-emerald-900">Trial Balance Check</h4>
                <p className="text-sm text-emerald-700 mt-1">Total debits must equal total credits. If they do not match, review each adjusting entry for correct debit/credit placement.</p>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                <h4 className="font-semibold text-emerald-900">Financial Statement Tie-Out</h4>
                <p className="text-sm text-emerald-700 mt-1">Net income on the Income Statement must match the change in Retained Earnings. Total assets must equal total liabilities plus equity on the Balance Sheet.</p>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                <h4 className="font-semibold text-emerald-900">Closing Entry Verification</h4>
                <p className="text-sm text-emerald-700 mt-1">After closing entries, all revenue and expense accounts should show zero balances. Only permanent accounts (assets, liabilities, equity) should remain.</p>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                <h4 className="font-semibold text-emerald-900">Recommendation Evidence Check</h4>
                <p className="text-sm text-emerald-700 mt-1">Every number cited in your recommendation must match a value on one of your workbook sheets. Double-check each citation.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recommendation Structure */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Recommendation Structure: Claim, Evidence, Risk
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900 space-y-4">
            <p>
              Your Recommendation sheet must follow this structure. Every group uses the same format—only the content changes based on your scenario.
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Claim (1-2 sentences)</h4>
                <p className="text-sm text-purple-700 mt-1">{recommendationTemplate.claim}</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Evidence (at least 3 cited numbers)</h4>
                <p className="text-sm text-purple-700 mt-1">{recommendationTemplate.evidence}</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Risk or Limitation (1 sentence)</h4>
                <p className="text-sm text-purple-700 mt-1">{recommendationTemplate.risk}</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Defense (1-2 sentences)</h4>
                <p className="text-sm text-purple-700 mt-1">{recommendationTemplate.defense}</p>
              </div>
            </div>
            <Alert className="border-purple-300 bg-white mt-4">
              <AlertCircle className="h-4 w-4 text-purple-700" />
              <AlertTitle className="text-purple-900">No Generic Claims</AlertTitle>
              <AlertDescription className="text-purple-800">
                Every number in your recommendation must come from your own workbook. Do not use made-up or generic figures. Your audience needs to trust that your analysis is real.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Peer Critique */}
        <Card className="border-teal-200 bg-teal-50">
          <CardHeader>
            <CardTitle className="text-teal-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Peer Critique and Revision
            </CardTitle>
          </CardHeader>
          <CardContent className="text-teal-900 space-y-4">
            <p>
              After completing your workbook, exchange with another group for peer critique. This is not a formality—your feedback should lead to at least one real revision before your final demo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-teal-200 rounded-lg bg-white">
                <h4 className="font-semibold text-teal-900">As the Reviewer</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-teal-700 mt-2">
                  <li>Can you follow the logic from data → adjustments → statements → recommendation?</li>
                  <li>Are all cited numbers traceable to workbook sheets?</li>
                  <li>Is the recommendation clear and specific to their scenario?</li>
                  <li>What is one concrete strength?</li>
                  <li>What is one concrete improvement they should make?</li>
                </ul>
              </div>
              <div className="p-4 border border-teal-200 rounded-lg bg-white">
                <h4 className="font-semibold text-teal-900">As the Team Receiving Feedback</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-teal-700 mt-2">
                  <li>Listen without defending—just take notes</li>
                  <li>Identify at least one revision you will make</li>
                  <li>Document what you changed and why on your Assumptions sheet</li>
                  <li>Make the revision before your demo rehearsal</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Milestone 2 Acceptance Criteria */}
        <Card className="border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5" />
              Milestone 2 Acceptance Criteria
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900 space-y-4">
            <p>
              Before class ends today, your team must meet all of the following criteria. Your teacher will check each item.
            </p>
            <ul className="list-none space-y-2">
              {milestone2Criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 border-2 border-blue-400 rounded mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Workflow / Timeboxing */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Workflow Today (55-60 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Open and organize (5 min):</strong> Open your Lesson 08 workbook. Verify all sheets from Lesson 08 are intact. Update the filename to Lesson 09 convention.
              </li>
              <li>
                <strong>Complete Trial Balance (10 min):</strong> Populate unadjusted and adjusted trial balance columns. Verify debits equal credits.
              </li>
              <li>
                <strong>Build Financial Statements (15 min):</strong> Create Income Statement, Statement of Retained Earnings, and Balance Sheet. Tie net income to retained earnings.
              </li>
              <li>
                <strong>Record Closing Entries (10 min):</strong> Close all revenue and expense accounts through Income Summary. Verify temporary accounts are zero.
              </li>
              <li>
                <strong>Write Recommendation (10 min):</strong> Complete the Recommendation sheet with claim, 3 cited numbers, 1 risk, and defense statement.
              </li>
              <li>
                <strong>Peer Critique (10 min):</strong> Exchange with another group. Provide and receive feedback. Document at least one revision.
              </li>
              <li>
                <strong>Demo Rehearsal (5 min):</strong> Run through your 4-5 minute demo as a team. Time yourselves.
              </li>
              <li>
                <strong>Teacher check-in (5 min):</strong> Review your workbook against the Milestone 2 acceptance criteria with your teacher.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Submission Checklist */}
        <Card className="border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900">Submission Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-none space-y-2 text-sm text-slate-700">
              {submissionChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 border-2 border-blue-400 rounded mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* What Comes Next */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              What Comes Next: Lesson 10 — Final Innovation Fair Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900 space-y-3">
            <p>
              In Lesson 10, your team will present your completed workbook at the Innovation Fair. You will deliver a polished 4-5 minute demo, submit your final workbook, and reflect on how your team balanced speed with accuracy.
            </p>
            <p className="text-sm text-emerald-800">
              <strong>Bring to Lesson 10:</strong> your completed Milestone 2 workbook, your peer feedback notes, your revision documentation, and your polished speaking notes for the demo.
            </p>
            <p className="text-sm text-emerald-800">
              <strong>Final prep:</strong> Practice your demo at home if possible. Make sure every team member knows their part. Your audience will include classmates and potentially external reviewers.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
