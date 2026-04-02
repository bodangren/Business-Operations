"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Table2 } from "lucide-react"

interface MethodShowTell {
  id: "fifo" | "lifo" | "specific" | "weighted"
  label: string
  businessQuestion: string
  whatHappens: string
  whyItWorks: string
  formulaPattern: string
  references: Array<{
    token: string
    meaning: string
  }>
  firstTrap: string
}

const methodGuides: MethodShowTell[] = [
  {
    id: "fifo",
    label: "FIFO",
    businessQuestion: "If we sell oldest inventory first, what are COGS and ending inventory today?",
    whatHappens: "Excel walks lots from oldest to newest and consumes units until all sold units are assigned.",
    whyItWorks:
      "The running cumulative quantity tells Excel how much has already been consumed, so each lot contributes only the remaining needed units.",
    formulaPattern: "MAX(0, MIN([@Qty], UnitsSold - ([@[FIFO CumQty]] - [@Qty])))",
    references: [
      { token: "[@Qty]", meaning: "Current row lot quantity in Purchases" },
      { token: "[@[FIFO CumQty]]", meaning: "Current row running total quantity" },
      { token: "UnitsSold", meaning: "Named total sold units from Sales table" }
    ],
    firstTrap: "If cumulative quantity is not running oldest-to-newest, FIFO will consume the wrong lots."
  },
  {
    id: "lifo",
    label: "LIFO",
    businessQuestion: "If we sell newest inventory first, how much cost hits this period?",
    whatHappens: "Excel uses the same consume pattern as FIFO, but on a helper table sorted newest to oldest.",
    whyItWorks:
      "LIFO is mostly an ordering problem. Reverse the lot order first, then the same consume math assigns newest units to COGS.",
    formulaPattern: "MAX(0, MIN([@Qty], UnitsSold - ([@[LIFO CumQty]] - [@Qty])))",
    references: [
      { token: "LIFO helper table", meaning: "Same lots as Purchases, but sorted newest-to-oldest" },
      { token: "[@[LIFO CumQty]]", meaning: "Running total in the reversed order" },
      { token: "UnitsSold", meaning: "Total units sold in the period" }
    ],
    firstTrap: "If the helper block is not reversed, LIFO silently behaves like FIFO."
  },
  {
    id: "specific",
    label: "Specific ID",
    businessQuestion: "Which exact purchase lot did each sale come from, and what was that cost?",
    whatHappens: "Excel reads Sales[LotID], looks up that lot's UnitCost, and multiplies by sold quantity line-by-line.",
    whyItWorks:
      "Specific ID is a traceability method. Lot IDs preserve the exact cost history for each sold unit.",
    formulaPattern: "XLOOKUP([@LotID], Purchases[LotID], Purchases[UnitCost])",
    references: [
      { token: "[@LotID]", meaning: "Lot chosen on the current Sales row" },
      { token: "Purchases[LotID]", meaning: "All lot keys in the Purchases table" },
      { token: "Purchases[UnitCost]", meaning: "Cost returned for the matched lot" }
    ],
    firstTrap: "If Sales rows have blank or invalid LotID values, the method cannot assign trustworthy cost."
  },
  {
    id: "weighted",
    label: "Weighted Average",
    businessQuestion: "If we pool all units and costs, what blended cost per unit should we use?",
    whatHappens: "Excel computes one period rate from totals, then applies that same rate to sold and remaining units.",
    whyItWorks:
      "The weighted rate keeps total cost conserved: COGS plus ending inventory always equals goods available for sale.",
    formulaPattern: "WA Rate = GAFS / TotalUnits; WA COGS = UnitsSold * WA Rate",
    references: [
      { token: "GAFS", meaning: "Total purchase cost available this period" },
      { token: "TotalUnits", meaning: "All units purchased/available this period" },
      { token: "UnitsSold", meaning: "Units sold during the period" }
    ],
    firstTrap: "Do not mix periodic weighted average with moving average formulas from another model."
  }
]

const structuredReferenceGlossary = [
  {
    reference: "Purchases[Qty]",
    plainEnglish: "All Qty values in the Purchases table.",
    example: "SUM(Purchases[Qty]) gives total purchased units."
  },
  {
    reference: "Sales[LotID]",
    plainEnglish: "All LotID values in the Sales table.",
    example: "Used to connect sales rows to exact purchase lots."
  },
  {
    reference: "[@Qty]",
    plainEnglish: "Qty in this row only.",
    example: "Inside a row formula, it means the current lot quantity."
  },
  {
    reference: "[@[FIFO CumQty]]",
    plainEnglish: "FIFO CumQty from this row only.",
    example: "Used to tell how many units are already consumed before this lot."
  }
]

export default function InventoryAlgorithmShowTell() {
  const [activeTab, setActiveTab] = useState<MethodShowTell["id"]>("fifo")
  const activeMethod = methodGuides.find((method) => method.id === activeTab) ?? methodGuides[0]

  return (
    <div className="space-y-6">
      <Card className="border-emerald-200 bg-white">
        <CardHeader>
          <CardTitle className="text-emerald-900 flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Show + Tell: How Each Algorithm Works
          </CardTitle>
          <CardDescription className="text-emerald-900/80">
            Read each method in three layers: the business question, the Excel move, and why the formula works.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as MethodShowTell["id"])}>
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
              <TabsTrigger value="fifo">FIFO</TabsTrigger>
              <TabsTrigger value="lifo">LIFO</TabsTrigger>
              <TabsTrigger value="specific">Specific ID</TabsTrigger>
              <TabsTrigger value="weighted">Weighted Avg</TabsTrigger>
            </TabsList>

            {methodGuides.map((method) => (
              <TabsContent key={method.id} value={method.id} className="mt-4">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800">{method.label}</Badge>
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                    <p className="text-sm text-slate-700">{method.businessQuestion}</p>
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    <div className="rounded border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-semibold text-slate-900 mb-1">What Excel Is Doing</p>
                      <p className="text-sm text-slate-700">{method.whatHappens}</p>
                    </div>
                    <div className="rounded border border-slate-200 bg-slate-50 p-3">
                      <p className="text-sm font-semibold text-slate-900 mb-1">Why This Works</p>
                      <p className="text-sm text-slate-700">{method.whyItWorks}</p>
                    </div>
                  </div>

                  <div className="rounded border border-blue-200 bg-blue-50 p-3">
                    <p className="text-sm font-semibold text-blue-900 mb-1">Formula Pattern</p>
                    <code className="block text-xs sm:text-sm text-blue-900 break-all">{method.formulaPattern}</code>
                  </div>

                  <div className="rounded border border-amber-200 bg-amber-50 p-3">
                    <p className="text-sm font-semibold text-amber-900 mb-1">First Setup Trap to Check</p>
                    <p className="text-sm text-amber-900">{method.firstTrap}</p>
                  </div>

                  <div className="rounded border border-slate-200 p-3">
                    <p className="text-sm font-semibold text-slate-900 mb-2">Reference Meanings in This Method</p>
                    <ul className="space-y-1 text-sm text-slate-700">
                      {method.references.map((reference) => (
                        <li key={`${method.id}-${reference.token}`}>
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
            These are the table references you will read constantly in Phase 4.
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
            Quick self-check: active method is <strong>{activeMethod.label}</strong>. Explain aloud what
            <code className="mx-1">[@Qty]</code> and one full-table reference mean before moving to Phase 3.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
