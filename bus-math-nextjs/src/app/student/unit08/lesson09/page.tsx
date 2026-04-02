import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit08Data, lesson09Phases } from "./lesson-data"

const phase = lesson09Phases[0]

const workbookMapData: SpreadsheetData = [
  [{ value: "Sheet Name" }, { value: "Purpose" }, { value: "Key Columns / Fields" }],
  [{ value: "1. Asset Register" }, { value: "List every asset with cost, life, salvage, and method" }, { value: "Asset ID, Description, Cost, Useful Life, Salvage Value, Method, Depreciable Base" }],
  [{ value: "2. Depreciation Schedule" }, { value: "Annual depreciation, accumulated depreciation, and book value" }, { value: "Year, Beginning BV, Depreciation Expense, Accum. Depr., Ending BV, Check" }],
  [{ value: "3. Method Comparison" }, { value: "Side-by-side comparison of two methods" }, { value: "Year, SL Total Expense, DDB Total Expense, SL Total BV, DDB Total BV, Difference" }],
  [{ value: "4. Recommendation" }, { value: "Written claim, evidence, and risk statement" }, { value: "Claim, Evidence (cite 3+ numbers), Risk/Limitation, Final Recommendation" }]
]

const recommendationStructureData: SpreadsheetData = [
  [{ value: "Section" }, { value: "Requirement" }, { value: "Example" }],
  [{ value: "Claim" }, { value: "One clear, specific depreciation policy recommendation" }, { value: "We recommend straight-line depreciation for all kitchen equipment and double-declining balance for POS systems." }],
  [{ value: "Evidence" }, { value: "At least 3 cited numbers from your workbook" }, { value: "By Year 3, straight-line gives us $18,500 in accumulated depreciation for espresso machines (Cell D12), while DDB gives $24,800 (Cell H12). Our total book value for all assets in Year 5 is $42,300 with SL (Cell F28)." }],
  [{ value: "Risk/Limitation" }, { value: "One honest downside of your recommendation" }, { value: "The downside is that DDB will lower our net income in the first two years, which could make initial profit reports look weaker to investors." }],
  [{ value: "Final Recommendation" }, { value: "Why your choice still makes sense despite the risk" }, { value: "Even with lower early profits, we recommend this mix because it matches how our assets actually lose value: kitchen equipment holds value steadily, while POS technology becomes obsolete quickly." }]
]

const peerCritiqueData: SpreadsheetData = [
  [{ value: "Category" }, { value: "Strength to Name" }, { value: "Improvement to Suggest" }],
  [{ value: "Workbook Accuracy" }, { value: "One formula or calculation that is clearly correct" }, { value: "One row or sheet where the Book Value check might be wrong" }],
  [{ value: "Evidence Chain" }, { value: "One place where numbers connect from register to schedule" }, { value: "One place where a formula link is missing or unclear" }],
  [{ value: "Recommendation Clarity" }, { value: "One sentence that is specific and easy to understand" }, { value: "One claim that needs more cited numbers to feel convincing" }]
]

const rubricData: SpreadsheetData = [
  [{ value: "Criteria" }, { value: "Weight" }, { value: "What We Look For" }],
  [{ value: "Asset Register Accuracy" }, { value: "30%" }, { value: "All assets complete; formulas correct; book value verifies; no errors" }],
  [{ value: "Depreciation Method Application" }, { value: "25%" }, { value: "Methods calculated correctly; comparison clear; statement impact explained" }],
  [{ value: "Recommendation Quality" }, { value: "25%" }, { value: "Clear claim; strong evidence from workbook; thorough risk analysis" }],
  [{ value: "Professional Communication" }, { value: "20%" }, { value: "Clear writing; professional formatting; confident presentation" }]
]

export default function Lesson09Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8 max-w-5xl">
        {/* Project Context */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1 bg-indigo-100 text-indigo-800">Lesson 09 — Complete Workbook & Recommendation</Badge>
            <h1 className="text-3xl font-bold">Finish Your Asset Register, Compare Methods, and Finalize Your Recommendation</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              In Lesson 08, your team set up the workbook and entered the asset register. Today, you will finish the depreciation schedule, complete the method comparison, write a final evidence‑based recommendation, and get peer feedback before Lesson 10 presentations.
            </p>
          </div>

          <Card className="border-l-4 border-l-indigo-500">
            <CardHeader>
              <CardTitle>What You Will Accomplish Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-700">Workbook Completion</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Finish Depreciation Schedule for all assets</li>
                    <li>Complete Method Comparison sheet (SL vs. DDB)</li>
                    <li>Verify all Book Value check columns pass</li>
                    <li>Ensure formulas link correctly across sheets</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-amber-700">Recommendation & Feedback</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Write final recommendation (claim + 3+ evidence numbers)</li>
                    <li>Include one honest risk/limitation</li>
                    <li>Exchange peer critique with another team</li>
                    <li>Revise workbook and recommendation based on feedback</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business & Workbook Objectives */}
        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Defend a depreciation policy that fits your group's assets</li>
                  <li>Show how your method choice impacts expenses and book value over time</li>
                  <li>Prove your workbook is trustworthy with check columns and linked formulas</li>
                  <li>Use peer feedback to strengthen your analysis before presentations</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Complete Depreciation Schedule for all asset classes</li>
                  <li>Build Method Comparison sheet with side-by-side totals</li>
                  <li>Verify Book Value = Cost − Accumulated Depreciation on every row</li>
                  <li>Finalize Recommendation sheet with cited workbook numbers</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Workbook Structure Reminder */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workbook Structure — Same as Lesson 07 & 08</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Do not rename sheets or change the column order. Your workbook must still have these four sheets in this exact order.
              </p>
              <SpreadsheetWrapper initialData={workbookMapData} readOnly />
            </CardContent>
          </Card>
        </section>

        {/* Workflow */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (50 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3">
                <li className="space-y-1">
                  <strong>Open and verify your Lesson 08 workbook (5 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Make sure your file is saved correctly: <code className="bg-muted px-1 py-0.5 rounded text-xs">Unit08-[GroupName]-Team[Letter]-M1.xlsx</code>. Confirm Asset Register is complete.</p>
                </li>
                <li className="space-y-1">
                  <strong>Finish Depreciation Schedule (15 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Extend the schedule for all asset classes. Link Year 1 Beginning BV to Asset Register Cost. Verify the Book Value check column says "OK" for every row.</p>
                </li>
                <li className="space-y-1">
                  <strong>Complete Method Comparison (10 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Calculate total annual depreciation expense and total book value for both methods side by side. Highlight the year where DDB crosses over to straight-line if applicable.</p>
                </li>
                <li className="space-y-1">
                  <strong>Write final recommendation (10 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Use the structure below. Cite at least three specific workbook cells/numbers. Include one risk and explain why your choice still makes sense.</p>
                </li>
                <li className="space-y-1">
                  <strong>Peer critique and revision (7 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Exchange workbooks with one other team. Use the peer critique table below. Give one strength and one improvement suggestion for each category.</p>
                </li>
                <li className="space-y-1">
                  <strong>Teacher check-in (3 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Your teacher will verify your workbook and recommendation against the Milestone 2 acceptance criteria below.</p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Recommendation Structure */}
        <section className="space-y-6">
          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Recommendation Structure — Use This Exact Format</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your recommendation must follow this four-part structure. Every number you cite must come directly from your workbook.
              </p>
              <SpreadsheetWrapper initialData={recommendationStructureData} readOnly />
            </CardContent>
          </Card>
        </section>

        {/* Peer Critique Guide */}
        <section className="space-y-6">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Peer Critique Guide — Give Specific, Kind, and Helpful Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                When reviewing another team's work, name one clear strength and one concrete improvement suggestion for each category below. Do not just say "good job" or "fix this" — be specific!
              </p>
              <SpreadsheetWrapper initialData={peerCritiqueData} readOnly />
              <div className="mt-4 p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Peer Feedback Rules</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Start with a strength before suggesting improvements</li>
                  <li>Point to specific cells or sentences, not vague feelings</li>
                  <li>Ask questions if something is confusing ("How did you calculate this number?")</li>
                  <li>After receiving feedback, your team must make at least one visible revision</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Milestone 2 Acceptance Criteria */}
        <section className="space-y-6">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Milestone 2 Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Your team must meet all of these before leaving class today:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Depreciation Schedule complete for all assets</strong> — Every asset has annual depreciation, accumulated depreciation, and ending book value calculated for all years.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Book Value check column passes for every row</strong> — Every "Check" cell confirms Book Value = Cost − Accumulated Depreciation (or Beginning BV − Depreciation + ...).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Method Comparison sheet complete</strong> — Side-by-side totals for SL and DDB depreciation expense and book value each year.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Final recommendation written with 3+ cited numbers</strong> — Claim, evidence (3+ numbers from specific cells), risk/limitation, and final justification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Peer critique completed and at least one revision made</strong> — You have given feedback to another team and revised your own work based on the feedback you received.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Submission Checklist */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>End-of-Class Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Workbook saved with updated version number: <code className="bg-muted px-1 py-0.5 rounded text-xs">Unit08-[GroupName]-Team[Letter]-M2.xlsx</code></li>
                <li>File uploaded or submitted to your teacher's collection point</li>
                <li>Every team member can explain the recommendation and cite at least one supporting number</li>
                <li>Team knows what must be ready for Lesson 10: final workbook polish and presentation notes</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Rubric Preview */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Rubric Preview</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">This rubric will be used for your final Lesson 10 presentation. Milestone 2 focuses on workbook completion and recommendation quality.</p>
              <SpreadsheetWrapper initialData={rubricData} readOnly />
            </CardContent>
          </Card>
        </section>

        {/* Reflection */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle="Lesson 09 Completion Reflection"
                prompts={[
                  {
                    id: 'u08-l09-reflect-1',
                    category: 'understanding',
                    prompt: 'What is the strongest part of your team\'s recommendation? Which three numbers are you most proud of citing, and why?',
                    placeholder: 'Our strongest evidence is... We are proud of citing these numbers because...'
                  },
                  {
                    id: 'u08-l09-reflect-2',
                    category: 'transfer',
                    prompt: 'What was the most helpful feedback you received from peers? What revision did you make, and how did it improve your work?',
                    placeholder: 'The most helpful feedback was... We revised... This improved our work by...'
                  },
                  {
                    id: 'u08-l09-reflect-3',
                    category: 'preparation',
                    prompt: 'What does your team need to polish or prepare for Lesson 10 presentations? Who is responsible for what?',
                    placeholder: 'For Lesson 10 we need to... Team member roles are...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
    </div>
  )
}
