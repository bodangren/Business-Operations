import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileSpreadsheet, CheckSquare, ArrowRight, Users, Target, ClipboardCheck, Presentation, Clock, MessageSquare, Trophy, BookOpen } from "lucide-react"
import { lesson10Data } from "./lesson-data"

const workbookSheets = [
  {
    name: "Data",
    purpose: "Raw transaction and adjustment data for your group's month-end close",
    proves: "The source numbers that every other sheet depends on",
    status: "Should be complete from Lesson 09"
  },
  {
    name: "Adjustments",
    purpose: "All adjusting entries—accruals, deferrals, depreciation, supplies used",
    proves: "That every recurring month-end adjustment has been identified and recorded",
    status: "Should be complete from Lesson 09"
  },
  {
    name: "Trial Balance",
    purpose: "Unadjusted and adjusted trial balance with debit/credit verification",
    proves: "That debits equal credits after adjustments (accounting integrity)",
    status: "Should be complete from Lesson 09"
  },
  {
    name: "Financial Statements",
    purpose: "Income statement, statement of retained earnings, and balance sheet",
    proves: "That the adjusted numbers produce a complete and accurate financial picture",
    status: "Should be complete from Lesson 09"
  },
  {
    name: "Closing Entries",
    purpose: "Revenue, expense, and dividend closing entries with Income Summary",
    proves: "That temporary accounts are reset to zero for the next period",
    status: "Should be complete from Lesson 09"
  },
  {
    name: "Recommendation",
    purpose: "Final recommendation statement with supporting evidence and risk acknowledgment",
    proves: "That the workbook tells a clear business story backed by numbers",
    status: "Polish from Lesson 09 → final recommendation with clean citations"
  },
  {
    name: "Assumptions",
    purpose: "Date/version, scenario drivers, and notes about data sources",
    proves: "That the workbook is auditable—someone else can understand how it was built",
    status: "Update with final decisions and revision history"
  }
]

const presentationStandards = [
  "Open with the business problem your scenario presented (15 seconds)",
  "State your recommendation clearly before showing the numbers (30 seconds)",
  "Walk through the evidence chain: Data → Adjustments → Trial Balance → Financial Statements (2 minutes)",
  "Show at least three specific numbers from your workbook that support your claim (1 minute)",
  "Acknowledge one risk or limitation and explain why your recommendation still holds (30 seconds)",
  "Close with what automation or controls made the biggest difference (30 seconds)",
  "Leave 30-60 seconds for audience questions"
]

const submissionChecklist = [
  "Final workbook saved with correct naming convention (Unit02_Lesson10_Group[Number]_[Scenario].xlsx)",
  "All seven sheets completed, cross-referenced, and free of errors",
  "Trial Balance balances (debits = credits)",
  "Financial statements produce a coherent and accurate business story",
  "Closing entries reset all temporary accounts to zero",
  "Recommendation sheet has polished claim + 3+ cited numbers + 1 risk + defense",
  "Assumptions sheet updated with final decisions and revision history",
  "Speaking notes prepared for all team members",
  "Demo rehearsed and timed to 4-5 minutes"
]

const groupDatasets = [
  { group: 1, scenario: "TechStart Solutions — Q4 close with prepaid insurance adjustment", file: "unit02-pbl-month-end-wizard-g1.csv" },
  { group: 2, scenario: "GreenLeaf Consulting — Year-end with accrued revenue recognition", file: "unit02-pbl-month-end-wizard-g2.csv" },
  { group: 3, scenario: "BlueWave Manufacturing — Month-end with depreciation and supplies", file: "unit02-pbl-month-end-wizard-g3.csv" },
  { group: 4, scenario: "Summit Retail Corp — Period close with unearned revenue deferral", file: "unit02-pbl-month-end-wizard-g4.csv" },
  { group: 5, scenario: "NorthStar Services — Month-end with accrued wages and prepaid rent", file: "unit02-pbl-month-end-wizard-g5.csv" },
  { group: 6, scenario: "Apex Digital Agency — Year-end with bad debt and depreciation", file: "unit02-pbl-month-end-wizard-g6.csv" }
]

const reflectionPrompts = [
  {
    question: "What was the hardest part of completing your month-end close workbook?",
    guidance: "Think about specific technical challenges—adjusting entries, trial balance errors, or tying the statements together."
  },
  {
    question: "How did your team balance speed with accuracy during this project?",
    guidance: "Did you rush and make errors? Did you go too slow and run out of time? What would you do differently?"
  },
  {
    question: "Which automation or control feature made the biggest difference in your workbook's reliability?",
    guidance: "Consider named ranges, validation rules, error flags, formula structure, or macro automation."
  },
  {
    question: "What did peer feedback help you improve that you would not have caught on your own?",
    guidance: "Be specific about the feedback and the revision you made as a result."
  },
  {
    question: "If you had to do this project again with a different company's data, what would you do faster or better?",
    guidance: "Think about process improvements, not just content. What workflow changes would help?"
  }
]

export default function Lesson10Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">Lesson 10 — Milestone 3: Final Innovation Fair Demo</Badge>
          <h1 className="text-3xl font-bold text-slate-900">{lesson10Data.title}</h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Today is presentation day. Your team will deliver a polished 4-5 minute demo of your Month-End Wizard, submit your final workbook, and reflect on what you learned about automation, controls, and usability. Bring your Lesson 09 workbook and your speaking notes.
          </p>
        </div>

        {/* Context */}
        <Card className="border-amber-200 bg-white">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Target className="w-5 h-5" />
              Where You Are: Milestone 3 — Final Presentation
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-amber-900">
            <p>
              In Lesson 09, your team completed the full evidence chain, wrote a defensible recommendation, ran peer critique, and rehearsed your demo. Today you present the final product.
            </p>
            <p className="mt-4">
              <strong>What you are doing today:</strong> delivering a professional presentation to an audience that may include classmates, teachers, and potentially external reviewers. Your workbook should be polished, your speaking notes should be clear, and your recommendation should be backed by specific numbers from your analysis.
            </p>
            <p className="mt-4">
              <strong>What changes from Lesson 09:</strong> you move from rehearsal and revision into final delivery and submission. This is the culmination of the entire Unit 02 project arc.
            </p>
          </CardContent>
        </Card>

        {/* Business Objectives */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Deliver a clear, confident presentation of your month-end close analysis</li>
                <li>Communicate your recommendation with specific workbook evidence</li>
                <li>Acknowledge limitations and defend your conclusion professionally</li>
                <li>Demonstrate how automation or controls improved accuracy or efficiency</li>
                <li>Respond to audience questions with reference to your workbook</li>
              </ul>
            </CardContent>
          </Card>
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-900">Submission Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
                <li>Submit final workbook with all seven sheets complete and error-free</li>
                <li>Include polished recommendation with claim, 3+ cited numbers, risk, and defense</li>
                <li>Update Assumptions sheet with final decisions and revision history</li>
                <li>Complete individual reflection on speed, accuracy, and learning</li>
                <li>Ensure file naming follows the Lesson 10 convention</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Group Dataset Reminder */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Users className="w-5 h-5" />
              Your Group's Dataset (Same as Lessons 08-09)
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 space-y-4">
            <Alert className="border-amber-300 bg-white">
              <AlertCircle className="h-4 w-4 text-amber-700" />
              <AlertTitle className="text-amber-900">Use Your Lesson 09 Workbook</AlertTitle>
              <AlertDescription className="text-amber-800">
                Do not start a new file. Open the polished workbook from Lesson 09 and make any final adjustments based on your rehearsal feedback. If you lost your file, re-download your group's dataset below and rebuild from your notes.
              </AlertDescription>
            </Alert>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {groupDatasets.map((d) => (
                <div key={d.group} className="p-4 border border-amber-200 rounded-lg bg-white">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {d.group}
                    </span>
                    <div>
                      <h4 className="font-semibold text-amber-900">Group {d.group}</h4>
                      <p className="text-sm text-amber-700 mt-1">{d.scenario}</p>
                      <a href={`/resources/${d.file}`} download className="inline-flex items-center gap-1 mt-2 text-sm text-amber-600 hover:text-amber-800 underline">
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

        {/* Workbook Structure: Final Polish */}
        <Card className="border-amber-200 bg-white">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <ClipboardCheck className="w-5 h-5" />
              Workbook Structure: Final Polish Check
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none text-amber-900">
            <p>
              Your project workbook uses the <strong>exact same sheet structure</strong> as the Lesson 07 rehearsal workbook. Each sheet below should be complete from Lesson 09. Today you do a final polish pass—check formatting, verify cross-references, and ensure every number is accurate.
            </p>
            <div className="space-y-4 mt-6">
              {workbookSheets.map((sheet, i) => (
                <div key={sheet.name} className="p-4 border border-amber-200 rounded-lg bg-amber-50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-amber-900">{sheet.name}</h4>
                        <Badge variant="outline" className="text-xs">{sheet.status}</Badge>
                      </div>
                      <p className="text-sm text-amber-700 mt-1">{sheet.purpose}</p>
                      <p className="text-sm text-amber-600 mt-1 font-medium">Proves: {sheet.proves}</p>
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
            <CardTitle className="text-amber-900">Final File Naming Convention</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 space-y-3">
            <p>Update your workbook filename for final submission:</p>
            <code className="block p-3 bg-white border border-amber-300 rounded text-sm">
              Unit02_Lesson10_Group[Number]_[ShortScenarioName].xlsx
            </code>
            <p className="text-sm">
              Example: <code className="bg-white px-1 border border-amber-300 rounded">Unit02_Lesson10_Group3_BlueWaveManufacturing.xlsx</code>
            </p>
            <p className="text-sm text-amber-800">
              <strong>Lost your Lesson 09 workbook?</strong> Re-download your group's CSV file from the dataset section above and rebuild from your notes. Document what you had to reconstruct on the Assumptions sheet.
            </p>
          </CardContent>
        </Card>

        {/* Presentation Standard */}
        <Card className="border-blue-200 bg-white">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Presentation className="w-5 h-5" />
              Presentation Standard: 4-5 Minute Demo
            </CardTitle>
          </CardHeader>
          <CardContent className="text-blue-900 space-y-4">
            <p>
              Your demo should follow this structure. Every team member should have a clear role and know their part. Practice the transitions between speakers.
            </p>
            <div className="space-y-3">
              {presentationStandards.map((item, i) => (
                <div key={i} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-blue-800">{item}</p>
                  </div>
                </div>
              ))}
            </div>
            <Alert className="border-blue-300 bg-white mt-4">
              <AlertCircle className="h-4 w-4 text-blue-700" />
              <AlertTitle className="text-blue-900">Audience Expectations</AlertTitle>
              <AlertDescription className="text-blue-800">
                Your audience may include teachers, parents, or entrepreneurs who are not accounting experts. Explain your reasoning clearly, avoid jargon without definition, and focus on the business story your numbers tell.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Timing Guidance */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Timing Guidance for Today
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-emerald-200 rounded-lg bg-white">
                <h4 className="font-semibold text-emerald-900">Before Presentations (10 min)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-emerald-700 mt-2">
                  <li>Final workbook polish and error check</li>
                  <li>Speaking notes review and role assignment</li>
                  <li>Quick run-through of transitions between speakers</li>
                  <li>Confirm file naming and submission readiness</li>
                </ul>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-white">
                <h4 className="font-semibold text-emerald-900">Presentations (30-35 min)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-emerald-700 mt-2">
                  <li>Each team delivers 4-5 minute demo</li>
                  <li>30-60 seconds for audience questions per team</li>
                  <li>Audience members take notes on strengths and questions</li>
                  <li>Teacher evaluates against rubric criteria</li>
                </ul>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-white">
                <h4 className="font-semibold text-emerald-900">Submission (5 min)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-emerald-700 mt-2">
                  <li>Submit final workbook file</li>
                  <li>Confirm all team members are listed</li>
                  <li>Verify file opens correctly on submission</li>
                </ul>
              </div>
              <div className="p-4 border border-emerald-200 rounded-lg bg-white">
                <h4 className="font-semibold text-emerald-900">Reflection (10 min)</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-emerald-700 mt-2">
                  <li>Individual reflection on project experience</li>
                  <li>Team discussion of what worked and what didn't</li>
                  <li>Complete reflection prompts below</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Checklist */}
        <Card className="border-amber-200 bg-white">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <CheckSquare className="w-5 h-5" />
              Final Submission Checklist
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 space-y-4">
            <p>
              Before you submit, verify every item below. Your teacher will check your submission against this list.
            </p>
            <ul className="list-none space-y-2">
              {submissionChecklist.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-5 h-5 border-2 border-amber-400 rounded mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Rubric Reference */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <Trophy className="w-5 h-5" />
              Evaluation Rubric Reference
            </CardTitle>
          </CardHeader>
          <CardContent className="text-purple-900 space-y-4">
            <p>
              Your presentation and workbook will be evaluated on the following criteria. Use this as a final self-check before you present.
            </p>
            <div className="space-y-3">
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Correctness of Entries (40%)</h4>
                <p className="text-sm text-purple-700 mt-1">All adjusting and closing entries comply with GAAP and balance perfectly. No errors in automation logic or formula references.</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Automation Efficiency (25%)</h4>
                <p className="text-sm text-purple-700 mt-1">Macro or automation reduces close time consistently. Handles your scenario's complexity without manual intervention.</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Demo Clarity and Engagement (15%)</h4>
                <p className="text-sm text-purple-700 mt-1">Compelling presentation clearly explains business value. Engages audience effectively. All team members contribute.</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">UX Design and Usability (10%)</h4>
                <p className="text-sm text-purple-700 mt-1">Interface is intuitive and professional. Named ranges well-organized. Documentation clear and complete.</p>
              </div>
              <div className="p-4 border border-purple-200 rounded-lg bg-white">
                <h4 className="font-semibold text-purple-900">Post-Fair Improvements (10%)</h4>
                <p className="text-sm text-purple-700 mt-1">Implements meaningful improvements based on peer feedback. Shows iterative design thinking and responsiveness.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Peer Feedback During Presentations */}
        <Card className="border-teal-200 bg-teal-50">
          <CardHeader>
            <CardTitle className="text-teal-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Audience Role During Presentations
            </CardTitle>
          </CardHeader>
          <CardContent className="text-teal-900 space-y-4">
            <p>
              When you are not presenting, you are an active audience member. Take notes on each team's presentation using these prompts:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border border-teal-200 rounded-lg bg-white">
                <h4 className="font-semibold text-teal-900">What to Note</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-teal-700 mt-2">
                  <li>One clear strength in their presentation or analysis</li>
                  <li>One question you have about their recommendation or numbers</li>
                  <li>Whether their evidence chain was easy to follow</li>
                  <li>How well they handled audience questions</li>
                </ul>
              </div>
              <div className="p-4 border border-teal-200 rounded-lg bg-white">
                <h4 className="font-semibold text-teal-900">Questions to Ask</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-teal-700 mt-2">
                  <li>What was the hardest adjustment entry to get right?</li>
                  <li>How did you verify your trial balance was correct?</li>
                  <li>What would change if the scenario had more complexity?</li>
                  <li>Which automation feature saved the most time?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection */}
        <Card className="border-amber-200 bg-white">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Individual Reflection: After Presentation or Submission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 space-y-4">
            <p>
              After your team presents and submits the final workbook, complete this individual reflection. This is not a group product—each team member writes their own response.
            </p>
            <div className="space-y-4">
              {reflectionPrompts.map((prompt, i) => (
                <div key={i} className="p-4 border border-amber-200 rounded-lg bg-amber-50">
                  <h4 className="font-semibold text-amber-900">Question {i + 1}</h4>
                  <p className="text-sm text-amber-800 mt-1">{prompt.question}</p>
                  <p className="text-xs text-amber-600 mt-2 italic">{prompt.guidance}</p>
                </div>
              ))}
            </div>
            <Alert className="border-amber-300 bg-white mt-4">
              <AlertCircle className="h-4 w-4 text-amber-700" />
              <AlertTitle className="text-amber-900">Reflection Matters</AlertTitle>
              <AlertDescription className="text-amber-800">
                Your reflection is part of your final grade. It shows what you learned about balancing speed with accuracy, working in a team, and communicating financial analysis. Be honest and specific.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* What Comes Next */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-900 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              What Comes Next: Unit 03
            </CardTitle>
          </CardHeader>
          <CardContent className="text-emerald-900 space-y-3">
            <p>
              Congratulations on completing Unit 02! You have built a complete month-end close workbook, automated key procedures, and defended a recommendation with real evidence. In Unit 03, you will apply these skills to a new challenge: building a three-statement financial model that tells the story of a growing business.
            </p>
            <p className="text-sm text-emerald-800">
              <strong>What carries forward:</strong> your understanding of adjusting entries, closing entries, trial balance discipline, and the connection between the income statement and balance sheet. These are the foundation of every financial model you will build.
            </p>
            <p className="text-sm text-emerald-800">
              <strong>What changes:</strong> Unit 03 introduces forecasting, scenario analysis, and multi-period modeling. You will work with projected data instead of historical transactions, and your models will need to handle "what if" questions.
            </p>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}
