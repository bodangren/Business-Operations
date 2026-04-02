"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Table2 } from "lucide-react"

interface AnatomyBlock {
  id: "controls" | "lookups" | "kpis" | "checks"
  label: string
  businessQuestion: string
  whatExcelDoes: string
  whyItMatters: string
  formulaPattern: string
  references: Array<{ token: string; meaning: string }>
  firstTrap: string
}

const anatomyBlocks: AnatomyBlock[] = [
  {
    id: "controls",
    label: "Controls",
    businessQuestion: "Which scenario and method are we evaluating right now?",
    whatExcelDoes: "Reads SelectedScenario and SelectedMethod from dropdown cells on Inputs.",
    whyItMatters: "Every downstream lookup and KPI tile depends on these two control values.",
    formulaPattern: "SelectedKey = SelectedScenario & \"|\" & SelectedMethod",
    references: [
      { token: "SelectedScenario", meaning: "The scenario dropdown choice (Base/Stretch/Downside)." },
      { token: "SelectedMethod", meaning: "The method dropdown choice (FIFO/LIFO/Weighted Average)." },
      { token: "SelectedKey", meaning: "Combined key used to pull one method row quickly." }
    ],
    firstTrap: "If dropdown labels do not exactly match table text, lookups fail."
  },
  {
    id: "lookups",
    label: "Lookup Chain",
    businessQuestion: "How do we pull the correct UnitsSold, COGS, and EI row instantly?",
    whatExcelDoes:
      "Uses XLOOKUP against Drivers and MethodSummary tables to return the row that matches selected controls.",
    whyItMatters:
      "A lookup chain avoids hardcoded IF nesting and keeps the workbook auditable when you add scenarios.",
    formulaPattern: "XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS])",
    references: [
      { token: "Drivers[Scenario]", meaning: "Scenario names used to fetch scenario-level assumptions." },
      { token: "MethodSummary[Key]", meaning: "Scenario|Method composite key column for exact matching." },
      { token: "MethodSummary[COGS]", meaning: "COGS output mapped to each scenario+method row." }
    ],
    firstTrap: "If Key is missing from MethodSummary, COGS and EI lookups return not found."
  },
  {
    id: "kpis",
    label: "KPI Chain",
    businessQuestion: "What operational story does the selected method tell?",
    whatExcelDoes:
      "Converts selected outputs into revenue, gross margin, turnover, and days-on-hand metrics.",
    whyItMatters:
      "These KPIs translate accounting outputs into investor decision language.",
    formulaPattern:
      "Turnover = SelectedCOGS / AvgInventory; DaysOnHand = 365 / Turnover",
    references: [
      { token: "SelectedCOGS", meaning: "Lookup result for current scenario + method." },
      { token: "SelectedEndingInventory", meaning: "Lookup result used in average inventory and checks." },
      { token: "SelectedUnitsSold", meaning: "Scenario-specific unit demand from Drivers table." }
    ],
    firstTrap: "Using ending inventory instead of average inventory inflates turnover."
  },
  {
    id: "checks",
    label: "Checks",
    businessQuestion: "How do we know the model is trustworthy before presenting?",
    whatExcelDoes:
      "Runs balance and quality checks so issues are visible before KPI interpretation.",
    whyItMatters:
      "Checks prevent silent errors during live demo and protect model credibility.",
    formulaPattern: "BalanceCheck = IF(ABS((SelectedCOGS+SelectedEI)-GAFS)<0.01,\"Balanced\",\"Check\")",
    references: [
      { token: "GAFS", meaning: "Total cost available for sale from the source inventory layers." },
      { token: "SelectedEI", meaning: "Ending inventory for selected scenario+method row." },
      { token: "BalanceCheck", meaning: "Visible pass/fail flag for COGS + EI conservation." }
    ],
    firstTrap: "If checks are hidden below the dashboard, errors can be missed during decisions."
  }
]

const structuredReferenceGlossary = [
  {
    reference: "Drivers[UnitsSold]",
    plainEnglish: "The UnitsSold column in the Drivers table for all scenarios.",
    example: "XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[UnitsSold])"
  },
  {
    reference: "MethodSummary[COGS]",
    plainEnglish: "All COGS values in the summary table.",
    example: "Lookup returns COGS for the selected scenario+method row."
  },
  {
    reference: "[@COGS]",
    plainEnglish: "COGS in this specific MethodSummary row.",
    example: "Used when creating row-level checks inside the table."
  },
  {
    reference: "MethodSummary[BalanceCheck]",
    plainEnglish: "All row-level pass/fail check values in the summary table.",
    example: "Quickly scan which rows still need debugging."
  }
]

export default function ScenarioSwitchShowTell() {
  const [activeTab, setActiveTab] = useState<AnatomyBlock["id"]>("controls")
  const activeBlock = anatomyBlocks.find((block) => block.id === activeTab) ?? anatomyBlocks[0]

  return (
    <div className="space-y-6">
      <Card className="border-emerald-200 bg-white">
        <CardHeader>
          <CardTitle className="text-emerald-900 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Show + Tell: Scenario Switch Architecture
          </CardTitle>
          <CardDescription className="text-emerald-900/80">
            Read each block as a system: control choice, lookup result, KPI impact, and trust check.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as AnatomyBlock["id"])}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="lookups">Lookups</TabsTrigger>
              <TabsTrigger value="kpis">KPIs</TabsTrigger>
              <TabsTrigger value="checks">Checks</TabsTrigger>
            </TabsList>

            {anatomyBlocks.map((block) => (
              <TabsContent key={block.id} value={block.id} className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800">{block.label}</Badge>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                    <p className="text-sm text-slate-700">{block.businessQuestion}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-semibold text-slate-900 mb-1">What Excel Is Doing</p>
                      <p className="text-sm text-slate-700">{block.whatExcelDoes}</p>
                    </div>
                    <div className="rounded border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-semibold text-slate-900 mb-1">Why This Matters</p>
                      <p className="text-sm text-slate-700">{block.whyItMatters}</p>
                    </div>
                  </div>

                  <div className="rounded border border-blue-200 bg-blue-50 p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Formula Pattern</p>
                    <code className="block text-xs sm:text-sm text-blue-900 break-all">{block.formulaPattern}</code>
                  </div>

                  <div className="rounded border border-amber-200 bg-amber-50 p-3">
                    <p className="text-sm font-semibold text-amber-900 mb-1">First Setup Trap to Check</p>
                    <p className="text-sm text-amber-900">{block.firstTrap}</p>
                  </div>

                  <div className="rounded border border-slate-200 p-3">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Reference Meanings in This Block</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {block.references.map((reference) => (
                        <li key={`${block.id}-${reference.token}`}>
                          <code>{reference.token}</code>: {reference.meaning}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="border-cyan-200 bg-cyan-50">
        <CardHeader>
          <CardTitle className="text-cyan-900 flex items-center gap-2">
            <Table2 className="h-5 w-5" />
            Structured Reference Decoder
          </CardTitle>
          <CardDescription className="text-cyan-900/80">
            Decode these references before Phase 3 rehearsal.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-cyan-100 text-cyan-950">
                  <th className="text-left p-2 border border-cyan-200">Reference</th>
                  <th className="text-left p-2 border border-cyan-200">Plain Meaning</th>
                  <th className="text-left p-2 border border-cyan-200">Example Use</th>
                </tr>
              </thead>
              <tbody>
                {structuredReferenceGlossary.map((item) => (
                  <tr key={item.reference} className="text-slate-800 bg-white">
                    <td className="p-2 border border-cyan-100">
                      <code>{item.reference}</code>
                    </td>
                    <td className="p-2 border border-cyan-100">{item.plainEnglish}</td>
                    <td className="p-2 border border-cyan-100">{item.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-cyan-900 mt-3">
            Quick self-check: active block is <strong>{activeBlock.label}</strong>. Explain one table reference and one
            row reference out loud before moving on.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
