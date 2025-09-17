import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import {
  CheckCircle2,
  ClipboardList,
  Download,
  FileText,
  Gauge,
  Target
} from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

const independentPracticeQuestions = [
  {
    id: "scenario-switch",
    question:
      "After importing the CSV, what is the very first feature you should build so every other part of the workbook responds to the same choice?",
    answers: [
      "Create the Selected_Scenario dropdown that reads Drivers[Scenario].",
      "Insert the revenue chart because visuals motivate the team.",
      "Write the executive summary sentence so you know the tone.",
      "Format the Drivers table with colors before doing formulas."
    ],
    explanation:
      "The dropdown controls every lookup. Without it, the rest of the workbook cannot respond to scenario changes."
  },
  {
    id: "validation",
    question:
      "Sarah tests an edge case with a negative UnitCost. What should happen in a finished model?",
    answers: [
      "A validation flag should appear so she knows the data is unsafe to present.",
      "The workbook should ignore the row and keep yesterday's numbers.",
      "Excel should close automatically because the input is not real.",
      "Nothing should happen because negatives are impossible to prevent."
    ],
    explanation:
      "Professional models do not hide bad data. They surface it quickly so the analyst can decide what to fix."
  },
  {
    id: "summary",
    question:
      "Which detail belongs in Sarah’s one-sentence investor summary?",
    answers: [
      "A clear callout of the key KPI compared to its target.",
      "The full list of every formula in the workbook.",
      "A step-by-step guide for adding chart titles.",
      "Personal feelings about how fun the assignment was."
    ],
    explanation:
      "Investors want signal, not noise. Mention the KPI, the target, and the next action in one tight sentence."
  }
]

const reflectionPrompts = [
  {
    id: "courage-scenario",
    category: "courage" as const,
    prompt:
      "Where did you have to take a risk or try a new Excel skill while wiring the scenario switchboard?",
    placeholder: "Describe the exact step that felt bold (for example, writing IFNA around XLOOKUP)..."
  },
  {
    id: "adaptability-flags",
    category: "adaptability" as const,
    prompt:
      "What validation warning surprised you during testing, and how did you adjust the model to respond?",
    placeholder: "Explain how the flag helped you catch an issue and the change you made..."
  },
  {
    id: "persistence-summary",
    category: "persistence" as const,
    prompt:
      "When your executive summary sentence did not read clearly at first, what revisions did you make to keep going?",
    placeholder: "Share the edits you tried and how you kept the message data-driven..."
  }
]

export default function Unit01Lesson06Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Independent Practice — Integration Mastery Challenges
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Build Sarah’s Investor-Ready Scenario Switchboard
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Now it is your turn to lead the build. Combine the Drivers table, scenario dropdown,
              calculations, charts, and validation into one workbook Sarah can show to investors in under a minute.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Integration Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3 leading-relaxed">
              <p>
                Start with the authentic practice data Sarah collected. Import it as an Excel Table named
                <strong> Drivers</strong>. Every row represents a full scenario ready for analysis.
              </p>
              <a
                href="/resources/unit01-ledger-integration-practice.csv"
                download
                className="inline-flex items-center gap-2 font-semibold underline text-blue-700"
              >
                Download: unit01-ledger-integration-practice.csv
              </a>
              <p>
                The edge-case rows (MissingScenario, Typo-Case, stale dates) exist to stress-test your
                validation logic. Do not delete them—use them.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <ClipboardList className="h-5 w-5" />
                Independent Build Steps
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>
                  <strong>Settings Sheet</strong>: Create <code>Selected_Scenario</code> (B2) with Data Validation pointing to
                  <code>=Drivers[Scenario]</code>. Add a note reminding users that names are case-sensitive.
                </li>
                <li>
                  <strong>Model Sheet</strong>: Use XLOOKUP+IFNA to pull price, unit cost, volume, AR/AP days, overhead,
                  and target thresholds into a clean input block.
                </li>
                <li>
                  <strong>KPIs</strong>: Calculate Revenue, Margin %, Cash Days, and Runway in their own section. Reference
                  the pulled inputs with structured names (no A1:C10).
                </li>
                <li>
                  <strong>Visuals</strong>: Insert a clustered column chart comparing scenarios and KPI cards (large numbers)
                  that update the moment the dropdown changes.
                </li>
                <li>
                  <strong>Validation + Flags</strong>: Build messages for missing scenario, stale AsOfDate, negative costs,
                  and AR Days &gt; 90. Color-code them so investors see the status quickly.
                </li>
                <li>
                  <strong>Executive Summary</strong>: Craft a one-sentence formula using IF statements. Mention the KPI,
                  the target, and the recommended action when targets are missed.
                </li>
              </ol>
              <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 text-orange-900 flex gap-3">
                <Gauge className="h-6 w-6 flex-shrink-0" />
                <p>
                  Quick test: switch to the Typo-Case scenario. If your summary warns about the missing name and your charts
                  do not crash, your wiring is strong.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Investor-Ready Quality Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2 leading-relaxed">
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Scenario switching by name works and shows a human-readable warning when it fails.</li>
                <li>Charts and KPI tiles refresh instantly with every scenario change or new row.</li>
                <li>Validation flags catch stale dates, negative costs, and AR Days above 90.</li>
                <li>Margin % and Cash Days are compared to their targets with clear OK/Beyond Target language.</li>
                <li>All formulas use tables or named ranges; no hard-coded cell coordinates.</li>
                <li>The executive summary names the KPI, cites the target, and offers an action verb.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Executive Summary Inspiration
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 space-y-3 leading-relaxed">
              <p>
                Investors read for signal, not story time. Use these sentence stems to stay focused:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>
                  <strong>When targets are met</strong>: “Stretch scenario holds <strong>{"{Margin%}"}</strong> above the{' '}
                  <strong>{"{Target}"}</strong>, so keep marketing spend steady.”
                </li>
                <li>
                  <strong>When targets miss</strong>: “Downside cash gap is <strong>{"{CashDays}"}</strong> days (goal{' '}
                  <strong>{"{Target}"}</strong>). Delay vendor payments 5 days and monitor collections daily.”
                </li>
              </ul>
              <p>
                Challenge yourself to keep the sentence under 25 words. Investors should understand the risk and your suggested fix at a glance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Stretch Yourself
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-3 leading-relaxed">
              <p>
                Ready for the next level? Duplicate the Model sheet and add a waterfall chart that shows how revenue drops to margin after each cost layer. Use the
                same dropdown so both sheets stay in sync.
              </p>
              <p>
                Bonus idea: create a slicer or timeline so Sarah can filter scenarios by AsOfDate when she loads future data.
              </p>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Quick Self-Check"
            description="Make sure you understand the must-have features before you call the model complete."
            questions={independentPracticeQuestions}
            showExplanations
          />

          <ReflectionJournal
            unitTitle="Scenario Switchboard Reflection"
            prompts={reflectionPrompts}
          />
        </section>
      </main>

      <PhaseFooter
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
