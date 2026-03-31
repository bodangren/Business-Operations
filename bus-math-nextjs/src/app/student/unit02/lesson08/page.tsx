import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileSpreadsheet, CheckSquare, ArrowRight, Users, Target, ClipboardCheck } from "lucide-react"
import { lesson08Data, unit02Data, lesson08Phases } from "./lesson-data"

const workbookSheets = [
  {
    name: "Data",
    purpose: "Raw transaction and adjustment data for your group's month-end close",
    proves: "The source numbers that every other sheet depends on"
  },
  {
    name: "Adjustments",
    purpose: "All adjusting entries—accruals, deferrals, depreciation, supplies used",
    proves: "That every recurring month-end adjustment has been identified and recorded"
  },
  {
    name: "Trial Balance",
    purpose: "Unadjusted and adjusted trial balance with debit/credit verification",
    proves: "That debits equal credits after adjustments (accounting integrity)"
  },
  {
    name: "Financial Statements",
    purpose: "Income statement, statement of retained earnings, and balance sheet",
    proves: "That the adjusted numbers produce a complete and accurate financial picture"
  },
  {
    name: "Closing Entries",
    purpose: "Revenue, expense, and dividend closing entries with Income Summary",
    proves: "That temporary accounts are reset to zero for the next period"
  },
  {
    name: "Recommendation",
    purpose: "Final recommendation statement with supporting evidence and risk acknowledgment",
    proves: "That the workbook tells a clear business story backed by numbers"
  },
  {
    name: "Assumptions",
    purpose: "Date/version, scenario drivers, and notes about data sources",
    proves: "That the workbook is auditable—someone else can understand how it was built"
  }
]

const milestone1Criteria = [
  "Correct workbook downloaded, opened, and renamed using the naming convention",
  "Assumptions sheet completed with group name, date, version, and scenario summary",
  "Data sheet populated with your group's assigned dataset numbers",
  "Adjustments sheet started with at least 3 identified adjusting entries and reasons",
  "Trial Balance skeleton created with column headers (no broken formulas)",
  "One draft recommendation direction statement (not final—just a working claim)"
]

const submissionChecklist = [
  "Workbook file saved with correct naming convention",
  "Assumptions sheet filled in completely",
  "Data sheet contains all group dataset values",
  "Adjustments sheet has at least 3 entries with clear reasons",
  "Trial Balance sheet has proper column structure",
  "Draft recommendation direction statement written (1-2 sentences)"
]

const groupDatasets = [
  { group: 1, scenario: "TechStart Solutions — Q4 close with prepaid insurance adjustment", file: "unit02-pbl-month-end-wizard-g1.csv" },
  { group: 2, scenario: "GreenLeaf Consulting — Year-end with accrued revenue recognition", file: "unit02-pbl-month-end-wizard-g2.csv" },
  { group: 3, scenario: "BlueWave Manufacturing — Month-end with depreciation and supplies", file: "unit02-pbl-month-end-wizard-g3.csv" },
  { group: 4, scenario: "Summit Retail Corp — Period close with unearned revenue deferral", file: "unit02-pbl-month-end-wizard-g4.csv" },
  { group: 5, scenario: "NorthStar Services — Month-end with accrued wages and prepaid rent", file: "unit02-pbl-month-end-wizard-g5.csv" },
  { group: 6, scenario: "Apex Digital Agency — Year-end with bad debt and depreciation", file: "unit02-pbl-month-end-wizard-g6.csv" }
]

export default function Lesson08Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">Lesson 08 — Milestone 1: Project Kickoff</Badge>
          <h1 className="text-3xl font-bold text-slate-900">{lesson08Data.title}</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Today your team moves from guided rehearsal into independent project work. Each group receives its own month-end closing scenario. Your workbook must follow the exact structure from Lesson 07.
          </p>
        </div>

        {/* Context */}
        <Card className="border-emerald-200 bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Project Context: Your Group's Month-End Scenario
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-emerald-900">
            <p>
              In Lesson 07, every group rehearsed with the same teacher-provided dataset. Today that changes. Each team receives a <strong>unique month-end closing scenario</strong> with its own transactions, adjustments, and business story.
            </p>
            <p className="mt-4">
              Sarah at TechStart Solutions built the month-end wizard framework you practiced. Now your team applies that same structure to a real business scenario. Your audience is the same: an investor or client who needs to trust that your workbook is accurate, auditable, and tells a clear financial story.
            </p>
            <p className="mt-4">
              <strong>What stays the same:</strong> workbook architecture, sheet names, evidence chain, Definition of Done, and communication standard.<br />
              <strong>What changes:</strong> your group's dataset, the specific adjusting entries, and the recommendation your team builds.
            </p>
          </CardContent>
        </Card>

        {/* Business Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-900">Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Complete a full month-end close for your group's unique scenario</li>
                <li>Build an evidence chain from raw data through financial statements</li>
                <li>Write a recommendation supported by at least three cited workbook numbers</li>
                <li>Identify at least one risk or limitation in your analysis</li>
                <li>Produce a workbook suitable for investor or client review</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-emerald-200">
            <CardHeader>
              <CardTitle className="text-emerald-900">Workbook Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Preserve the Lesson 07 sheet structure exactly</li>
                <li>Populate Data and Adjustments sheets with your group's numbers</li>
                <li>Create Trial Balance skeleton with proper column headers</li>
                <li>Begin the Recommendation sheet with a draft direction statement</li>
                <li>Document assumptions, version, and data source on the Assumptions sheet</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Group Dataset Assignment */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Group's Assigned Dataset
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900 space-y-4">
            <Alert className="border-blue-300 bg-white">
              <AlertCircle className="h-4 w-4 text-blue-700" />
              <AlertTitle className="text-blue-900">Use Only Your Assigned File</AlertTitle>
              <AlertDescription className="text-blue-800">
                Each group has a unique scenario. Download only the file assigned to your group number. You will use this same dataset across Lessons 08, 09, and 10.
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

        {/* Workbook Structure Reminder */}
        <Card className="border-emerald-200 bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Workbook Structure: Same as Lesson 07
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-emerald-900">
            <p>
              Your project workbook uses the <strong>exact same sheet structure</strong> as the Lesson 07 rehearsal workbook. Do not rename tabs, remove sheets, or change the architecture. Only the data and resulting analysis will differ.
            </p>
            <div className="space-y-4 mt-6">
              {workbookSheets.map((sheet, i) => (
                <div key={sheet.name} className="p-4 border border-emerald-200 rounded-lg bg-emerald-50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-emerald-900">{sheet.name}</h4>
                      <p className="text-sm text-emerald-700 mt-1">{sheet.purpose}</p>
                      <p className="text-sm text-emerald-600 mt-1 font-medium">Proves: {sheet.proves}</p>
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
            <p>Save your workbook using this exact format:</p>
            <code className="block p-3 bg-white border border-amber-300 rounded text-sm">
              Unit02_Lesson08_Group[Number]_[ShortScenarioName].xlsx
            </code>
            <p className="text-sm">
              Example: <code className="bg-white px-1 border border-amber-300 rounded">Unit02_Lesson08_Group3_BlueWaveManufacturing.xlsx</code>
            </p>
            <p className="text-sm text-amber-800">
              <strong>Missing workbook?</strong> Re-download your group's assigned CSV file from the dataset section above and rebuild from your Lesson 07 notes.
            </p>
          </CardContent>
        </Card>

        {/* Milestone 1 Acceptance Criteria */}
        <Card className="border-emerald-200 bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5" />
              Milestone 1 Acceptance Criteria
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900 space-y-4">
            <p>
              Before class ends today, your team must meet all of the following criteria. Your teacher will check each item.
            </p>
            <ul className="list-none space-y-2">
              {milestone1Criteria.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 border-2 border-emerald-400 rounded mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Workflow / Timeboxing */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Workflow Today (45–50 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900">
            <ol className="list-decimal list-inside space-y-3">
              <li>
                <strong>Receive and organize (5 min):</strong> Download your group's dataset. Rename and save your workbook using the naming convention above.
              </li>
              <li>
                <strong>Assumptions sheet (5 min):</strong> Fill in group name, date, version, and a 2-3 sentence summary of your scenario.
              </li>
              <li>
                <strong>Data sheet (10 min):</strong> Enter all transaction values from your group's CSV file. Verify totals match the source.
              </li>
              <li>
                <strong>Adjustments sheet (15 min):</strong> Identify at least 3 adjusting entries your scenario requires. Record each with a clear reason (accrual, deferral, depreciation, etc.).
              </li>
              <li>
                <strong>Trial Balance skeleton (5 min):</strong> Create column headers for unadjusted and adjusted trial balance. Do not populate numbers yet—that is Lesson 09.
              </li>
              <li>
                <strong>Draft recommendation direction (5 min):</strong> Write 1-2 sentences stating the direction your team's recommendation is heading. This is a working claim, not the final version.
              </li>
              <li>
                <strong>Teacher check-in (5 min):</strong> Review your workbook against the Milestone 1 acceptance criteria with your teacher.
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Submission Checklist */}
        <Card className="border-emerald-200 bg-white">
          <CardHeader>
            <CardTitle className="text-emerald-900">Submission Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-none space-y-2 text-sm text-slate-700">
              {submissionChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 border-2 border-emerald-400 rounded mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* What Comes Next */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              What Comes Next: Lesson 09
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900 space-y-3">
            <p>
              In Lesson 09, your team will complete the remaining sheets—Trial Balance, Financial Statements, Closing Entries—and finish the Recommendation sheet with cited evidence and risk acknowledgment. You will also run a peer critique and rehearse your demo.
            </p>
            <p className="text-sm text-blue-800">
              <strong>Bring to Lesson 09:</strong> your completed Milestone 1 workbook, any notes on adjustment reasoning, and your draft recommendation direction statement.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
