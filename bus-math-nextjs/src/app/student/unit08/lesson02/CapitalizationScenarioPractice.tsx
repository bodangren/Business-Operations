"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, HelpCircle, RotateCcw } from "lucide-react"

type TreatmentAnswer = "capitalize" | "expense" | ""

interface ScenarioPurchase {
  id: string
  name: string
  cost: number
  benefitWindow: string
  salvageValue: number | null
  treatment: "capitalize" | "expense"
}

interface PracticeScenario {
  id: string
  name: string
  description: string
  purchases: ScenarioPurchase[]
}

interface CapitalTemplate {
  name: string
  costRange: [number, number]
  lifeRange: [number, number]
  salvageRange: [number, number]
}

interface ExpenseTemplate {
  name: string
  costRange: [number, number]
  benefitOptions: string[]
}

const capitalTemplates: CapitalTemplate[] = [
  { name: "Commercial 3D printer", costRange: [12000, 22000], lifeRange: [5, 8], salvageRange: [1000, 3000] },
  { name: "Delivery scooter", costRange: [2800, 5200], lifeRange: [4, 6], salvageRange: [200, 700] },
  { name: "Backup server", costRange: [5000, 9000], lifeRange: [5, 7], salvageRange: [400, 1200] },
  { name: "Conference table", costRange: [3500, 6500], lifeRange: [8, 12], salvageRange: [200, 700] },
  { name: "Laser cutter", costRange: [10000, 18000], lifeRange: [6, 9], salvageRange: [1000, 2500] },
  { name: "Warehouse shelving system", costRange: [4200, 9000], lifeRange: [8, 15], salvageRange: [100, 600] },
  { name: "Electric delivery bike", costRange: [3000, 5200], lifeRange: [3, 5], salvageRange: [250, 650] },
  { name: "Safety barrier system", costRange: [2200, 4800], lifeRange: [6, 10], salvageRange: [0, 300] }
]

const expenseTemplates: ExpenseTemplate[] = [
  { name: "Packing tape and labels", costRange: [80, 240], benefitOptions: ["Used this month", "Used this week"] },
  { name: "Printer toner order", costRange: [120, 220], benefitOptions: ["Used this quarter", "Used this month"] },
  { name: "Fuel and charging costs", costRange: [140, 260], benefitOptions: ["Used this week", "Used immediately"] },
  { name: "Safety gloves", costRange: [40, 90], benefitOptions: ["Used this month", "Used this quarter"] },
  { name: "Cleaning solvent", costRange: [60, 140], benefitOptions: ["Used this month", "Used this week"] },
  { name: "Machine tune-up", costRange: [900, 1600], benefitOptions: ["Current service cycle only", "Current quarter only"] },
  { name: "Deep-cleaning service", costRange: [300, 650], benefitOptions: ["This week only", "Current month only"] },
  { name: "Office snacks and coffee", costRange: [70, 180], benefitOptions: ["Used this month", "Used this week"] }
]

const scenarioFrames = [
  {
    name: "Delivery Expansion",
    description: "Sarah is expanding delivery operations and has to separate true asset purchases from short-term operating costs."
  },
  {
    name: "Office Upgrade",
    description: "TechStart is refreshing its workspace. Some purchases belong on the balance sheet, but others should stay as period expenses."
  },
  {
    name: "Production Boost",
    description: "Sarah is scaling production while also paying for routine upkeep. You need to separate capital additions from current costs."
  }
]

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function shuffle<T>(items: T[]) {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]]
  }
  return copy
}

function pickDistinct<T>(items: T[], count: number) {
  return shuffle(items).slice(0, count)
}

function generateCapitalPurchase(template: CapitalTemplate, scenarioIndex: number, purchaseIndex: number): ScenarioPurchase {
  const cost = randInt(template.costRange[0], template.costRange[1])
  const usefulLife = randInt(template.lifeRange[0], template.lifeRange[1])
  const salvageValue = randInt(template.salvageRange[0], template.salvageRange[1])

  return {
    id: `capital-${scenarioIndex}-${purchaseIndex}-${template.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: template.name,
    cost,
    benefitWindow: `${usefulLife} years`,
    salvageValue,
    treatment: "capitalize"
  }
}

function generateExpensePurchase(template: ExpenseTemplate, scenarioIndex: number, purchaseIndex: number): ScenarioPurchase {
  const cost = randInt(template.costRange[0], template.costRange[1])
  const benefitWindow = template.benefitOptions[randInt(0, template.benefitOptions.length - 1)]

  return {
    id: `expense-${scenarioIndex}-${purchaseIndex}-${template.name.toLowerCase().replace(/\s+/g, "-")}`,
    name: template.name,
    cost,
    benefitWindow,
    salvageValue: null,
    treatment: "expense"
  }
}

function generateScenarioSet(): PracticeScenario[] {
  return scenarioFrames.map((frame, scenarioIndex) => {
    const capitalChoices = pickDistinct(capitalTemplates, 2)
    const expenseChoices = pickDistinct(expenseTemplates, 2)
    const purchases = shuffle([
      ...capitalChoices.map((template, purchaseIndex) => generateCapitalPurchase(template, scenarioIndex, purchaseIndex)),
      ...expenseChoices.map((template, purchaseIndex) => generateExpensePurchase(template, scenarioIndex, purchaseIndex))
    ])

    return {
      id: `scenario-${scenarioIndex}`,
      name: frame.name,
      description: frame.description,
      purchases
    }
  })
}

function formatMoney(value: number) {
  return `$${value.toLocaleString()}`
}

function parseMoneyInput(value: string) {
  return Number.parseFloat(value.replace(/,/g, "").trim())
}

function createEmptyTreatmentAnswers() {
  return {} as Record<string, TreatmentAnswer>
}

function createEmptyBaseAnswers() {
  return {} as Record<string, string>
}

export default function CapitalizationScenarioPractice() {
  const [scenarios, setScenarios] = useState<PracticeScenario[]>(generateScenarioSet)
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0)
  const [treatmentAnswers, setTreatmentAnswers] = useState<Record<string, TreatmentAnswer>>(createEmptyTreatmentAnswers)
  const [baseAnswers, setBaseAnswers] = useState<Record<string, string>>(createEmptyBaseAnswers)
  const [checked, setChecked] = useState(false)
  const [completedScenarios, setCompletedScenarios] = useState<string[]>([])

  const currentScenario = scenarios[currentScenarioIndex]

  const rowResults = currentScenario.purchases.map((purchase) => {
    const expectedBase =
      purchase.treatment === "capitalize" ? purchase.cost - (purchase.salvageValue ?? 0) : null
    const treatmentCorrect = treatmentAnswers[purchase.id] === purchase.treatment
    const baseCorrect =
      expectedBase === null || Math.abs(parseMoneyInput(baseAnswers[purchase.id] ?? "") - expectedBase) < 0.01

    return {
      purchase,
      expectedBase,
      treatmentCorrect,
      baseCorrect,
      allCorrect: treatmentCorrect && baseCorrect
    }
  })

  const scenarioCorrect = rowResults.every((result) => result.allCorrect)

  const resetScenario = () => {
    setTreatmentAnswers(createEmptyTreatmentAnswers())
    setBaseAnswers(createEmptyBaseAnswers())
    setChecked(false)
  }

  const loadNewSet = () => {
    setScenarios(generateScenarioSet())
    setCurrentScenarioIndex(0)
    setTreatmentAnswers(createEmptyTreatmentAnswers())
    setBaseAnswers(createEmptyBaseAnswers())
    setChecked(false)
    setCompletedScenarios([])
  }

  const checkScenario = () => {
    setChecked(true)
    if (scenarioCorrect && !completedScenarios.includes(currentScenario.id)) {
      setCompletedScenarios((current) => [...current, currentScenario.id])
    }
  }

  const switchScenario = (index: number) => {
    setCurrentScenarioIndex(index)
    setTreatmentAnswers(createEmptyTreatmentAnswers())
    setBaseAnswers(createEmptyBaseAnswers())
    setChecked(false)
  }

  const nextScenario = () => {
    if (currentScenarioIndex < scenarios.length - 1) {
      switchScenario(currentScenarioIndex + 1)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {scenarios.map((scenario, index) => (
            <Button
              key={scenario.id}
              variant={index === currentScenarioIndex ? "default" : "outline"}
              size="sm"
              onClick={() => switchScenario(index)}
              className={index === currentScenarioIndex ? "bg-violet-600 hover:bg-violet-700" : ""}
            >
              {scenario.name}
            </Button>
          ))}
        </div>
        <span className="text-sm text-slate-500">
          Completed {completedScenarios.length} of {scenarios.length}
        </span>
      </div>

      <Card className="border-slate-200 bg-white">
        <CardHeader>
          <CardTitle className="text-slate-900">{currentScenario.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-slate-700">{currentScenario.description}</p>

          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b border-slate-200">
                  <th className="px-3 py-2 text-left">Purchase</th>
                  <th className="px-3 py-2 text-right">Cost</th>
                  <th className="px-3 py-2 text-left">Benefit Window</th>
                  <th className="px-3 py-2 text-right">Salvage</th>
                  <th className="px-3 py-2 text-center">Treatment</th>
                  <th className="px-3 py-2 text-right">Depreciable Base</th>
                </tr>
              </thead>
              <tbody>
                {rowResults.map((result) => (
                  <tr
                    key={result.purchase.id}
                    className={
                      checked
                        ? result.allCorrect
                          ? "border-b border-green-100 bg-green-50/50"
                          : "border-b border-red-100 bg-red-50/50"
                        : "border-b border-slate-100"
                    }
                  >
                    <td className="px-3 py-3 font-medium text-slate-900">{result.purchase.name}</td>
                    <td className="px-3 py-3 text-right text-slate-700">{formatMoney(result.purchase.cost)}</td>
                    <td className="px-3 py-3 text-slate-700">{result.purchase.benefitWindow}</td>
                    <td className="px-3 py-3 text-right text-slate-700">
                      {result.purchase.salvageValue === null ? "N/A" : formatMoney(result.purchase.salvageValue)}
                    </td>
                    <td className="px-3 py-3">
                      <div className="flex justify-center gap-2">
                        <Button
                          size="sm"
                          variant={treatmentAnswers[result.purchase.id] === "capitalize" ? "default" : "outline"}
                          className={treatmentAnswers[result.purchase.id] === "capitalize" ? "bg-green-600 hover:bg-green-700" : "border-green-300 text-green-800"}
                          onClick={() =>
                            setTreatmentAnswers((current) => ({ ...current, [result.purchase.id]: "capitalize" }))
                          }
                        >
                          Capitalize
                        </Button>
                        <Button
                          size="sm"
                          variant={treatmentAnswers[result.purchase.id] === "expense" ? "default" : "outline"}
                          className={treatmentAnswers[result.purchase.id] === "expense" ? "bg-red-600 hover:bg-red-700" : "border-red-300 text-red-800"}
                          onClick={() =>
                            setTreatmentAnswers((current) => ({ ...current, [result.purchase.id]: "expense" }))
                          }
                        >
                          Expense
                        </Button>
                      </div>
                    </td>
                    <td className="px-3 py-3">
                      <Input
                        inputMode="decimal"
                        placeholder={result.expectedBase === null ? "Leave blank" : "Enter dollars"}
                        value={baseAnswers[result.purchase.id] ?? ""}
                        onChange={(event) =>
                          setBaseAnswers((current) => ({ ...current, [result.purchase.id]: event.target.value }))
                        }
                        className="text-right"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {checked && (
        <Card className={scenarioCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
          <CardContent className="pt-6">
            {scenarioCorrect ? (
              <div className="space-y-3 text-green-900">
                <p className="font-medium">
                  <CheckCircle2 className="mr-2 inline h-5 w-5" />
                  Correct. You classified every purchase and computed each depreciable base accurately.
                </p>
                <p className="text-sm text-green-800">
                  Notice the pattern: only the long-lived, significant purchases needed a base. Everything else stayed as a current-period expense.
                </p>
              </div>
            ) : (
              <div className="space-y-3 text-red-900">
                <p className="font-medium">
                  <HelpCircle className="mr-2 inline h-5 w-5" />
                  One or more rows need revision.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-red-800">
                  <li>Long-lived and significant purchases should be capitalized.</li>
                  <li>For capitalized items, the depreciable base is <strong>Cost - Salvage Value</strong>.</li>
                  <li>For expense items, leave the depreciable-base box blank.</li>
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      <div className="flex flex-wrap gap-3">
        <Button onClick={checkScenario} className="bg-violet-600 hover:bg-violet-700">
          Check Scenario
        </Button>
        <Button variant="outline" onClick={resetScenario}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Reset Scenario
        </Button>
        <Button variant="outline" onClick={loadNewSet}>
          New Scenario Set
        </Button>
        {checked && scenarioCorrect && currentScenarioIndex < scenarios.length - 1 && (
          <Button onClick={nextScenario} className="bg-emerald-600 hover:bg-emerald-700">
            Next Scenario
          </Button>
        )}
      </div>

      <Card className="border-slate-200 bg-slate-50">
        <CardContent className="pt-4 text-center">
          <p className="text-sm text-slate-600 mb-2">Formula reminder</p>
          <p className="font-mono text-lg text-slate-900">Depreciable Base = Cost - Salvage Value</p>
          <p className="mt-2 text-sm text-slate-600">
            Only calculate a base after the purchase has passed the capitalization decision.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
