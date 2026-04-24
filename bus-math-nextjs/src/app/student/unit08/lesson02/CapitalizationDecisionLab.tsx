"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react"

type Step = 1 | 2 | 3 | 4
type BinaryAnswer = "yes" | "no" | ""
type TreatmentAnswer = "capitalize" | "expense" | ""

interface Purchase {
  id: string
  name: string
  cost: number
  benefitWindow: string
  salvageValue: number | null
  lastsMoreThanYear: boolean
  significantCost: boolean
  treatment: "capitalize" | "expense"
  note: string
}

interface GuidedScenario {
  id: string
  title: string
  subtitle: string
  purchases: Purchase[]
}

const GUIDED_SCENARIOS: GuidedScenario[] = [
  {
    id: "guided-a",
    title: "Sarah's Purchase Week",
    subtitle: "A mixed week of expansion, supplies, and upkeep.",
    purchases: [
      {
        id: "printer",
        name: "Commercial 3D Printer",
        cost: 15000,
        benefitWindow: "7 years",
        salvageValue: 2000,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "This is the same anchor asset from Lesson 1."
      },
      {
        id: "paper",
        name: "Printer Paper and Packing Labels",
        cost: 200,
        benefitWindow: "Used this month",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Consumable supplies are used up quickly."
      },
      {
        id: "scooter",
        name: "Delivery Scooter",
        cost: 3500,
        benefitWindow: "5 years",
        salvageValue: 500,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "This one should become a second fixed asset."
      },
      {
        id: "fan",
        name: "Front Desk Fan",
        cost: 85,
        benefitWindow: "3 years",
        salvageValue: null,
        lastsMoreThanYear: true,
        significantCost: false,
        treatment: "expense",
        note: "Durable does not always mean capitalize."
      },
      {
        id: "tuneup",
        name: "Delivery Van Tune-Up",
        cost: 1450,
        benefitWindow: "Current service cycle only",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: true,
        treatment: "expense",
        note: "A noticeable bill can still be a routine expense."
      }
    ]
  },
  {
    id: "guided-b",
    title: "Office Refresh Week",
    subtitle: "Some purchases improve the office for years; others get used up quickly.",
    purchases: [
      {
        id: "table",
        name: "Conference Table",
        cost: 4800,
        benefitWindow: "10 years",
        salvageValue: 300,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "Furniture with a long life belongs in fixed assets."
      },
      {
        id: "markers",
        name: "Whiteboard Markers and Notepads",
        cost: 95,
        benefitWindow: "Used this month",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Office supplies are period costs."
      },
      {
        id: "server",
        name: "Backup Server",
        cost: 6200,
        benefitWindow: "6 years",
        salvageValue: 700,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "This supports operations over multiple years."
      },
      {
        id: "arm",
        name: "Monitor Arm Set",
        cost: 140,
        benefitWindow: "3 years",
        salvageValue: null,
        lastsMoreThanYear: true,
        significantCost: false,
        treatment: "expense",
        note: "It lasts, but the cost is too small to track as its own asset."
      },
      {
        id: "cleaning",
        name: "Deep-Cleaning Service",
        cost: 420,
        benefitWindow: "This week only",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "A service cost is not a long-term fixed asset."
      }
    ]
  },
  {
    id: "guided-c",
    title: "Production Upgrade Week",
    subtitle: "Sarah is scaling output while also paying for normal operating needs.",
    purchases: [
      {
        id: "laser",
        name: "Laser Cutter",
        cost: 12000,
        benefitWindow: "8 years",
        salvageValue: 1500,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "This expands production capacity."
      },
      {
        id: "solvent",
        name: "Cleaning Solvent",
        cost: 95,
        benefitWindow: "Used this month",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Consumables stay in the current period."
      },
      {
        id: "barrier",
        name: "Safety Barrier System",
        cost: 2600,
        benefitWindow: "7 years",
        salvageValue: 0,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "A durable facility improvement belongs on the balance sheet."
      },
      {
        id: "glasses",
        name: "Safety Glasses",
        cost: 110,
        benefitWindow: "1 year or less",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Protective gear gets used up as an operating cost."
      },
      {
        id: "maintenance",
        name: "Machine Tune-Up",
        cost: 1300,
        benefitWindow: "Current service cycle only",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: true,
        treatment: "expense",
        note: "This maintains an existing asset but does not create a new one."
      }
    ]
  },
  {
    id: "guided-d",
    title: "Delivery Rollout Week",
    subtitle: "Sarah is building out delivery capability while covering routine costs.",
    purchases: [
      {
        id: "ebike",
        name: "Electric Delivery Bike",
        cost: 4200,
        benefitWindow: "4 years",
        salvageValue: 400,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "A vehicle asset should be tracked over time."
      },
      {
        id: "rack",
        name: "Rear Cargo Rack Upgrade",
        cost: 2600,
        benefitWindow: "5 years",
        salvageValue: 200,
        lastsMoreThanYear: true,
        significantCost: true,
        treatment: "capitalize",
        note: "This creates a durable improvement tied to delivery capacity."
      },
      {
        id: "fuel",
        name: "Fuel and Charging Costs",
        cost: 180,
        benefitWindow: "Used this week",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Operating costs do not become fixed assets."
      },
      {
        id: "gloves",
        name: "Safety Gloves",
        cost: 60,
        benefitWindow: "Used this month",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "Supplies are consumed quickly."
      },
      {
        id: "repair",
        name: "Flat-Tire Repair",
        cost: 140,
        benefitWindow: "Restores current use only",
        salvageValue: null,
        lastsMoreThanYear: false,
        significantCost: false,
        treatment: "expense",
        note: "A repair keeps the bike working but does not create a new asset."
      }
    ]
  }
]

function parseMoneyInput(value: string) {
  return Number.parseFloat(value.replace(/,/g, "").trim())
}

function formatMoney(value: number) {
  return `$${value.toLocaleString()}`
}

export default function CapitalizationDecisionLab() {
  const [scenarioIndex, setScenarioIndex] = useState(0)
  const [step, setStep] = useState<Step>(1)

  const [oneYearAnswers, setOneYearAnswers] = useState<Record<string, BinaryAnswer>>({})
  const [significanceAnswers, setSignificanceAnswers] = useState<Record<string, BinaryAnswer>>({})
  const [treatmentAnswers, setTreatmentAnswers] = useState<Record<string, TreatmentAnswer>>({})
  const [baseAnswers, setBaseAnswers] = useState<Record<string, string>>({})

  const [oneYearChecked, setOneYearChecked] = useState(false)
  const [treatmentChecked, setTreatmentChecked] = useState(false)
  const [baseChecked, setBaseChecked] = useState(false)

  const currentScenario = GUIDED_SCENARIOS[scenarioIndex]
  const purchases = currentScenario.purchases
  const capitalItems = purchases.filter((item) => item.treatment === "capitalize")

  const oneYearCorrect = purchases.every(
    (item) => oneYearAnswers[item.id] === (item.lastsMoreThanYear ? "yes" : "no")
  )

  const treatmentCorrect = purchases.every(
    (item) =>
      significanceAnswers[item.id] === (item.significantCost ? "yes" : "no") &&
      treatmentAnswers[item.id] === item.treatment
  )

  const baseCorrect = capitalItems.every((item) => {
    const expectedBase = item.cost - (item.salvageValue ?? 0)
    return Math.abs(parseMoneyInput(baseAnswers[item.id] ?? "") - expectedBase) < 0.01
  })

  const resetAll = () => {
    setStep(1)
    setOneYearAnswers({})
    setSignificanceAnswers({})
    setTreatmentAnswers({})
    setBaseAnswers({})
    setOneYearChecked(false)
    setTreatmentChecked(false)
    setBaseChecked(false)
  }

  const loadNextScenario = () => {
    setScenarioIndex((current) => (current + 1) % GUIDED_SCENARIOS.length)
    setStep(1)
    setOneYearAnswers({})
    setSignificanceAnswers({})
    setTreatmentAnswers({})
    setBaseAnswers({})
    setOneYearChecked(false)
    setTreatmentChecked(false)
    setBaseChecked(false)
  }

  const setOneYearAnswer = (id: string, value: BinaryAnswer) => {
    setOneYearAnswers((current) => ({ ...current, [id]: value }))
  }

  const setSignificanceAnswer = (id: string, value: BinaryAnswer) => {
    setSignificanceAnswers((current) => ({ ...current, [id]: value }))
  }

  const setTreatmentAnswer = (id: string, value: TreatmentAnswer) => {
    setTreatmentAnswers((current) => ({ ...current, [id]: value }))
  }

  const setBaseAnswer = (id: string, value: string) => {
    setBaseAnswers((current) => ({ ...current, [id]: value }))
  }

  if (step === 1) {
    return (
      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 1: {currentScenario.title}</CardTitle>
            <Badge className="bg-teal-100 text-teal-800">Step 1 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
            <p className="text-teal-900">
              {currentScenario.subtitle} Your job is to work through the same decision process
              an accountant would use: first the one-year test, then the significance test, then the final
              treatment, and finally the depreciable base for anything capitalized.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left">Purchase</th>
                  <th className="px-3 py-2 text-right">Cost</th>
                  <th className="px-3 py-2 text-left">Expected Benefit</th>
                  <th className="px-3 py-2 text-right">Salvage</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100">
                    <td className="px-3 py-3">
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.note}</p>
                    </td>
                    <td className="px-3 py-3 text-right text-slate-900">{formatMoney(item.cost)}</td>
                    <td className="px-3 py-3 text-slate-700">{item.benefitWindow}</td>
                    <td className="px-3 py-3 text-right text-slate-700">
                      {item.salvageValue === null ? "N/A" : formatMoney(item.salvageValue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
            <p className="font-medium text-amber-900">Goal for this lab</p>
            <ol className="mt-2 list-decimal list-inside space-y-1 text-sm text-amber-800">
              <li>Identify which purchases provide value beyond one year</li>
              <li>Separate significant purchases from small durable items</li>
              <li>Decide which purchases become fixed assets</li>
              <li>Compute the depreciable base for those fixed assets</li>
            </ol>
          </div>

          <div className="flex justify-end">
            <div className="flex gap-2">
              <Button variant="outline" onClick={loadNextScenario}>
                New Guided Case
              </Button>
              <Button onClick={() => setStep(2)} className="gap-2 bg-teal-600 hover:bg-teal-700">
                Start the One-Year Test
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === 2) {
    return (
      <Card className="border-teal-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 2: Run the One-Year Test</CardTitle>
            <Badge className="bg-teal-100 text-teal-800">Step 2 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-teal-200 bg-teal-50 p-4">
            <p className="text-teal-900">
              For each purchase, answer one question only: <strong>Will it help the business for more than one year?</strong>
            </p>
          </div>

          <div className="space-y-4">
            {purchases.map((item) => (
              <div key={item.id} className="rounded-lg border border-slate-200 p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">
                      Cost: {formatMoney(item.cost)} | Expected benefit: {item.benefitWindow}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant={oneYearAnswers[item.id] === "yes" ? "default" : "outline"}
                      className={oneYearAnswers[item.id] === "yes" ? "bg-teal-600 hover:bg-teal-700" : ""}
                      onClick={() => setOneYearAnswer(item.id, "yes")}
                    >
                      Yes
                    </Button>
                    <Button
                      variant={oneYearAnswers[item.id] === "no" ? "default" : "outline"}
                      className={oneYearAnswers[item.id] === "no" ? "bg-slate-700 hover:bg-slate-800" : ""}
                      onClick={() => setOneYearAnswer(item.id, "no")}
                    >
                      No
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {oneYearChecked && (
            <div className={`rounded-lg border p-4 ${oneYearCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={oneYearCorrect ? "text-green-800" : "text-red-800"}>
                {oneYearCorrect
                  ? "Correct. You separated short-lived purchases from long-lived ones."
                  : "Not quite. Focus on the actual benefit window, not the price tag."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(1)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setOneYearChecked(true)}>
                Check Answer
              </Button>
              {oneYearChecked && oneYearCorrect && (
                <Button onClick={() => setStep(3)} className="gap-2 bg-teal-600 hover:bg-teal-700">
                  Continue to Treatment
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (step === 3) {
    return (
      <Card className="border-blue-200 bg-white">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl text-slate-900">Step 3: Test Significance and Choose Treatment</CardTitle>
            <Badge className="bg-blue-100 text-blue-800">Step 3 of 4</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-blue-900">
              Now combine both ideas. A purchase becomes a fixed asset only when it lasts more than one year
              <strong> and </strong>the cost is significant enough to track separately.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left">Purchase</th>
                  <th className="px-3 py-2 text-center">Significant Cost?</th>
                  <th className="px-3 py-2 text-center">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((item) => (
                  <tr key={item.id} className="border-b border-slate-100">
                    <td className="px-3 py-3">
                      <p className="font-medium text-slate-900">{item.name}</p>
                      <p className="text-xs text-slate-500">{item.note}</p>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant={significanceAnswers[item.id] === "yes" ? "default" : "outline"}
                          className={significanceAnswers[item.id] === "yes" ? "bg-blue-600 hover:bg-blue-700" : ""}
                          onClick={() => setSignificanceAnswer(item.id, "yes")}
                        >
                          Yes
                        </Button>
                        <Button
                          size="sm"
                          variant={significanceAnswers[item.id] === "no" ? "default" : "outline"}
                          className={significanceAnswers[item.id] === "no" ? "bg-slate-700 hover:bg-slate-800" : ""}
                          onClick={() => setSignificanceAnswer(item.id, "no")}
                        >
                          No
                        </Button>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant={treatmentAnswers[item.id] === "capitalize" ? "default" : "outline"}
                          className={treatmentAnswers[item.id] === "capitalize" ? "bg-green-600 hover:bg-green-700" : "border-green-300 text-green-800"}
                          onClick={() => setTreatmentAnswer(item.id, "capitalize")}
                        >
                          Capitalize
                        </Button>
                        <Button
                          size="sm"
                          variant={treatmentAnswers[item.id] === "expense" ? "default" : "outline"}
                          className={treatmentAnswers[item.id] === "expense" ? "bg-red-600 hover:bg-red-700" : "border-red-300 text-red-800"}
                          onClick={() => setTreatmentAnswer(item.id, "expense")}
                        >
                          Expense
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {treatmentChecked && (
            <div className={`rounded-lg border p-4 ${treatmentCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
              <p className={treatmentCorrect ? "text-green-800" : "text-red-800"}>
                {treatmentCorrect
                  ? "Correct. You identified which purchases belong on the balance sheet and which stay on the income statement."
                  : "Not quite. Durable does not always mean capitalize, and big current-period costs can still be expenses."}
              </p>
            </div>
          )}

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setStep(2)}>
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={() => setTreatmentChecked(true)}>
                Check Answer
              </Button>
              {treatmentChecked && treatmentCorrect && (
                <Button onClick={() => setStep(4)} className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Continue to Depreciable Base
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-purple-200 bg-white">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-slate-900">Step 4: Compute the Depreciable Base</CardTitle>
          <Badge className="bg-purple-100 text-purple-800">Step 4 of 4</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
          <p className="text-purple-900">
            Only the capitalized purchases need a depreciable base. For each one, calculate
            <strong> Cost - Salvage Value</strong>.
          </p>
        </div>

        <div className="space-y-4">
          {capitalItems.map((item) => {
            const expectedBase = item.cost - (item.salvageValue ?? 0)
            return (
              <div key={item.id} className="rounded-lg border border-slate-200 p-4">
                <div className="grid gap-4 md:grid-cols-4 md:items-end">
                  <div>
                    <p className="font-medium text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-600">Useful life: {item.benefitWindow}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Cost</p>
                    <p className="text-lg font-semibold text-slate-900">{formatMoney(item.cost)}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-500">Salvage Value</p>
                    <p className="text-lg font-semibold text-slate-900">{formatMoney(item.salvageValue ?? 0)}</p>
                  </div>
                  <div>
                    <label className="text-xs uppercase text-slate-500">Depreciable Base</label>
                    <Input
                      inputMode="decimal"
                      value={baseAnswers[item.id] ?? ""}
                      onChange={(event) => setBaseAnswer(item.id, event.target.value)}
                      placeholder="Enter dollars"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {baseChecked && (
          <div className={`rounded-lg border p-4 ${baseCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}`}>
            {baseCorrect ? (
              <div className="space-y-3 text-green-800">
                <p className="font-medium">
                  <CheckCircle2 className="mr-2 inline h-5 w-5" />
                  Correct. You have completed the full fixed-asset decision process.
                </p>
                <div className="rounded-lg border border-green-200 bg-white p-4">
                  <p className="font-medium text-slate-900">Summary</p>
                  <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-slate-700">
                    {capitalItems.map((item) => (
                      <li key={item.id}>
                        {item.name}: capitalize, depreciable base = {formatMoney(item.cost - (item.salvageValue ?? 0))}
                      </li>
                    ))}
                    {purchases
                      .filter((item) => item.treatment === "expense")
                      .map((item) => (
                        <li key={item.id}>{item.name}: expense in the current period</li>
                      ))}
                  </ul>
                </div>
              </div>
            ) : (
              <p className="text-red-800">
                Not quite. Recheck the two capital assets and subtract salvage value from cost for each one.
              </p>
            )}
          </div>
        )}

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => setStep(3)}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => setBaseChecked(true)}>
              Check Answer
            </Button>
            <Button variant="outline" onClick={resetAll}>
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset Lab
            </Button>
            <Button variant="outline" onClick={loadNextScenario}>
              New Guided Case
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
