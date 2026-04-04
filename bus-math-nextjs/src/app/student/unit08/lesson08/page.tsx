import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SpreadsheetWrapper, type SpreadsheetData } from "@/components/spreadsheet/SpreadsheetWrapper"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, unit08Data, lesson08Phases } from "./lesson-data"

const phase = lesson08Phases[0]

const groupDatasets = [
  { group: 1, name: "Group A — Café Expansion", file: "unit08-group-a-cafe-expansion.csv", assets: ["Espresso machines (3)", "Refrigerated display cases (2)", "Commercial oven (1)", "POS system upgrade"], scenario: "TechStart Café is opening two new locations. Each location needs commercial kitchen equipment, refrigeration, and modern POS systems." },
  { group: 2, name: "Group B — Delivery Fleet", file: "unit08-group-b-delivery-fleet.csv", assets: ["Delivery vans (4)", "Warehouse forklift (1)", "GPS tracking hardware", "Loading dock equipment"], scenario: "TechStart Logistics is building a regional delivery network. The fleet requires vehicles, warehouse equipment, and tracking technology." },
  { group: 3, name: "Group C — Tech Lab Build-Out", file: "unit08-group-c-tech-lab.csv", assets: ["3D printers (2)", "Server rack and networking gear", "Testing equipment and oscilloscopes", "Workstation computers (6)"], scenario: "TechStart Labs is creating a prototyping facility. The lab needs precision manufacturing equipment, computing infrastructure, and testing instruments." },
  { group: 4, name: "Group D — Medical Equipment", file: "unit08-group-d-medical-equipment.csv", assets: ["Diagnostic imaging system (1)", "Patient monitoring stations (3)", "Sterilization autoclave (1)", "Electronic health record servers"], scenario: "TechStart Health is equipping a new clinic. The facility requires diagnostic equipment, patient monitoring systems, and data infrastructure." },
  { group: 5, name: "Group E — Manufacturing Line", file: "unit08-group-e-manufacturing.csv", assets: ["CNC machine (1)", "Conveyor belt system", "Quality control inspection station", "Industrial compressor and tools"], scenario: "TechStart Manufacturing is adding a production line. The facility needs precision machining, material handling, and quality assurance equipment." }
]

const workbookMapData: SpreadsheetData = [
  [{ value: "Sheet Name" }, { value: "Purpose" }, { value: "Key Columns / Fields" }],
  [{ value: "1. Asset Register" }, { value: "List every asset with cost, life, salvage, and method" }, { value: "Asset ID, Description, Cost, Useful Life, Salvage Value, Method, Depreciable Base" }],
  [{ value: "2. Depreciation Schedule" }, { value: "Annual depreciation, accumulated depreciation, and book value" }, { value: "Year, Beginning BV, Depreciation Expense, Accum. Depr., Ending BV, Check" }],
  [{ value: "3. Method Comparison" }, { value: "Side-by-side comparison of two methods" }, { value: "Year, SL Total Expense, DDB Total Expense, SL Total BV, DDB Total BV, Difference" }],
  [{ value: "4. Recommendation" }, { value: "Written claim, evidence, and risk statement" }, { value: "Claim, Evidence (cite 3+ numbers), Risk/Limitation, Final Recommendation" }]
]

const rubricData: SpreadsheetData = [
  [{ value: "Criteria" }, { value: "Weight" }, { value: "What We Look For" }],
  [{ value: "Asset Register Accuracy" }, { value: "30%" }, { value: "All assets complete; formulas correct; book value verifies; no errors" }],
  [{ value: "Depreciation Method Application" }, { value: "25%" }, { value: "Methods calculated correctly; comparison clear; statement impact explained" }],
  [{ value: "Recommendation Quality" }, { value: "25%" }, { value: "Clear claim; strong evidence from workbook; thorough risk analysis" }],
  [{ value: "Professional Communication" }, { value: "20%" }, { value: "Clear writing; professional formatting; confident presentation" }]
]

export default function Lesson08Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit08Data} lesson={lesson08Data} phase={phase} phases={lesson08Phases} />
      <main className="container mx-auto px-4 py-8 space-y-8 max-w-5xl">
        {/* Project Context */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1 bg-blue-100 text-blue-800">Lesson 08 — Project Kickoff</Badge>
            <h1 className="text-3xl font-bold">Your Group&apos;s Fixed-Asset Project Begins Now</h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              In Lesson 07, everyone practiced with the same shared dataset. Today, each group receives its own fixed-asset scenario. Your workbook structure stays exactly the same — only the data and business context change.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle>What Changes From Lesson 07</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-700">Stays the Same</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Workbook sheet structure (4 sheets)</li>
                    <li>Column fields and formula logic</li>
                    <li>Book Value = Cost − Accumulated Depreciation</li>
                    <li>Definition of Done criteria</li>
                    <li>Recommendation format (claim, evidence, risk)</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-amber-700">Changes for Your Group</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Your assigned fixed-asset dataset</li>
                    <li>Business scenario and constraints</li>
                    <li>Asset types, costs, and useful lives</li>
                    <li>Your team&apos;s depreciation recommendation</li>
                    <li>The numbers you cite as evidence</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Business Objectives */}
        <section className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Track long-term assets with accurate cost, life, and salvage data</li>
                  <li>Choose depreciation methods that fit each asset class</li>
                  <li>Build a trustworthy asset register that management can audit</li>
                  <li>Defend your method choice with workbook evidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Open and rename the correct group workbook</li>
                  <li>Verify all 4 sheets match the Lesson 07 structure</li>
                  <li>Enter all assets on the Asset Register sheet</li>
                  <li>Begin the Depreciation Schedule with linked formulas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Group Dataset Assignment */}
        <section className="space-y-6">
          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Your Group&apos;s Dataset — Use Only Your Assigned File</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-sm text-muted-foreground">
                Your teacher has assigned your group a number below. Download <strong>only</strong> your group&apos;s starter workbook. Do not use another group&apos;s data.
              </p>

              <div className="space-y-4">
                {groupDatasets.map((group) => (
                  <Card key={group.group} className="bg-white">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">
                        {group.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm">{group.scenario}</p>
                      <div className="grid gap-2 md:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-sm mb-1">Assets to Track:</h4>
                          <ul className="list-disc list-inside text-sm space-y-0.5">
                            {group.assets.map((asset, i) => (
                              <li key={i}>{asset}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <a
                            href={`/resources/${group.file}`}
                            download
                            className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium"
                          >
                            Download: {group.file}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Workbook Map */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workbook Structure — Same as Lesson 07</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Your workbook must have these four sheets in this exact order. The architecture is identical to the Lesson 07 rehearsal workbook.
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
                  <strong>Receive and open your group workbook (5 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Download only your assigned file. Rename it: <code className="bg-muted px-1 py-0.5 rounded text-xs">Unit08-[GroupName]-Team[Letter]-M1.xlsx</code></p>
                </li>
                <li className="space-y-1">
                  <strong>Verify sheet structure (5 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Confirm all 4 sheets exist with correct names. Check that column headers match the Lesson 07 rehearsal model.</p>
                </li>
                <li className="space-y-1">
                  <strong>Build the Asset Register (20 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Enter every asset from your group dataset. Fill in cost, useful life, salvage value, and assign a depreciation method (SL or DDB). Calculate the depreciable base for each row.</p>
                </li>
                <li className="space-y-1">
                  <strong>Start the Depreciation Schedule (10 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Begin formulas for your first asset class. Link Beginning BV to Cost for Year 1. Set up the depreciation formula and the Book Value check column.</p>
                </li>
                <li className="space-y-1">
                  <strong>Write one draft claim (5 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Based on your asset types, write one sentence: &quot;We recommend [method] for [asset class] because [reason].&quot;</p>
                </li>
                <li className="space-y-1">
                  <strong>Teacher check-in (5 min)</strong>
                  <p className="text-sm text-muted-foreground ml-6">Your teacher will verify your workbook against the Milestone 1 acceptance criteria below.</p>
                </li>
              </ol>
            </CardContent>
          </Card>
        </section>

        {/* Milestone 1 Acceptance Criteria */}
        <section className="space-y-6">
          <Card className="border-2 border-green-200">
            <CardHeader>
              <CardTitle className="text-green-800">Milestone 1 Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">Your team must meet all of these before leaving class today:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Correct workbook opened and named</strong> — Your file matches your group assignment and follows the naming convention.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>All 4 sheets present with correct structure</strong> — Asset Register, Depreciation Schedule, Method Comparison, Recommendation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Asset Register has all assets entered</strong> — Every asset from your group dataset has cost, useful life, salvage value, and method assigned.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Depreciable base calculated for each asset</strong> — Depreciable Base = Cost − Salvage Value is correct on every row.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>Depreciation Schedule started for at least one asset class</strong> — Year 1 formulas are linked and the Book Value check column is set up.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">☐</span>
                  <span><strong>One draft claim written</strong> — A preliminary recommendation statement on the Recommendation sheet.</span>
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
                <li>Workbook saved with correct group name and version number</li>
                <li>File uploaded or submitted to your teacher&apos;s collection point</li>
                <li>Every team member can explain which assets they entered and why</li>
                <li>Team knows what must be complete by Lesson 09 (full depreciation schedule, method comparison, final recommendation)</li>
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
              <p className="text-sm text-muted-foreground">This rubric will be used for the final project evaluation. Milestone 1 focuses on getting started correctly.</p>
              <SpreadsheetWrapper initialData={rubricData} readOnly />
            </CardContent>
          </Card>
        </section>

        {/* Recovery Path */}
        <section className="space-y-6">
          <Card className="border-2 border-red-200">
            <CardHeader>
              <CardTitle className="text-red-800">Missing or Corrupted Workbook?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm">If your group&apos;s starter workbook is missing, corrupted, or won&apos;t open:</p>
              <ol className="list-decimal list-inside text-sm space-y-1">
                <li>Re-download your assigned file from the list above</li>
                <li>Check with your teacher if the file still won&apos;t open</li>
                <li>Rebuild from your notes using the Lesson 07 rehearsal workbook as a structural guide</li>
                <li>Do <strong>not</strong> use another group&apos;s dataset — your numbers will not match your scenario</li>
              </ol>
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
                unitTitle="Lesson 08 Kickoff Reflection"
                prompts={[
                  {
                    id: 'u08-l08-reflect-1',
                    category: 'understanding',
                    prompt: 'What is the most important thing your team got right today? How does it connect to the Book Value formula?',
                    placeholder: 'Our team correctly... This matters because Book Value = Cost − Accumulated Depreciation...'
                  },
                  {
                    id: 'u08-l08-reflect-2',
                    category: 'transfer',
                    prompt: 'What must your team finish in Lesson 09 that you did not complete today? What is your plan to get it done?',
                    placeholder: 'In Lesson 09 we still need to... We will accomplish this by...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data} lesson={lesson08Data} phase={phase} phases={lesson08Phases} />
    </div>
  )
}
