'use client'

import { type ReactNode, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, DollarSign, Package2, Trophy } from "lucide-react"

type Sensitivity = "high" | "medium" | "low"

interface PricingRound {
  id: string
  title: string
  note: string
  supplierCost: number
  baseDemand: number
  sensitivity: Sensitivity
}

interface StudioState {
  cash: number
  inventoryUnits: number
  inventoryValue: number
  salesRevenue: number
  cogs: number
  roundIndex: number
}

interface RoundResolution {
  boughtUnits: number
  soldUnits: number
  demandUnits: number
  revenue: number
  cogs: number
  endingCash: number
  endingInventoryUnits: number
  endingInventoryValue: number
  averageCostPerKit: number
  priceEffectText: string
  stockout: boolean
}

const BUY_OPTIONS = [0, 2, 4]
const PRICE_OPTIONS = [36, 40, 44]
const CASH_TARGET = 700
const INVENTORY_TARGET = 4

const OPENING_STATE: StudioState = {
  cash: 1452,
  inventoryUnits: 13,
  inventoryValue: 264,
  salesRevenue: 0,
  cogs: 0,
  roundIndex: 0,
}

const ROUNDS: PricingRound[] = [
  {
    id: "r1",
    title: "Step 1: Conference rush",
    note: "A busy event week could move several kits fast if Sarah prices confidently.",
    supplierCost: 22,
    baseDemand: 4,
    sensitivity: "medium",
  },
  {
    id: "r2",
    title: "Step 2: Budget-sensitive client",
    note: "A smaller client wants the kits, but they are watching price closely.",
    supplierCost: 23,
    baseDemand: 3,
    sensitivity: "high",
  },
  {
    id: "r3",
    title: "Step 3: Premium package inquiry",
    note: "This client cares more about speed and polish than getting the cheapest price.",
    supplierCost: 24,
    baseDemand: 3,
    sensitivity: "low",
  },
  {
    id: "r4",
    title: "Step 4: Referral burst",
    note: "A strong referral brings in more interest than usual.",
    supplierCost: 22,
    baseDemand: 5,
    sensitivity: "medium",
  },
  {
    id: "r5",
    title: "Step 5: Supplier surcharge week",
    note: "Restocking is more expensive this step, so buying ahead feels riskier.",
    supplierCost: 25,
    baseDemand: 2,
    sensitivity: "medium",
  },
  {
    id: "r6",
    title: "Step 6: School event bundle",
    note: "The client needs several kits and is less sensitive to price than usual.",
    supplierCost: 24,
    baseDemand: 4,
    sensitivity: "low",
  },
  {
    id: "r7",
    title: "Step 7: Quiet pipeline day",
    note: "Demand softens, so the wrong price can slow sales quickly.",
    supplierCost: 22,
    baseDemand: 2,
    sensitivity: "high",
  },
  {
    id: "r8",
    title: "Step 8: Partner promotion",
    note: "A partner campaign brings another healthy wave of interested buyers.",
    supplierCost: 23,
    baseDemand: 4,
    sensitivity: "medium",
  },
  {
    id: "r9",
    title: "Step 9: Last-minute launch",
    note: "This client needs kits fast and will tolerate a firmer price if Sarah can deliver.",
    supplierCost: 26,
    baseDemand: 3,
    sensitivity: "low",
  },
  {
    id: "r10",
    title: "Step 10: Month-end close",
    note: "Sarah has one final chance to finish the month with profit, cash, and shelf stock in a safe place.",
    supplierCost: 23,
    baseDemand: 4,
    sensitivity: "high",
  },
]

export default function InventoryStrategyStudio() {
  const [studioState, setStudioState] = useState<StudioState>(OPENING_STATE)
  const [selectedBuy, setSelectedBuy] = useState(2)
  const [selectedPrice, setSelectedPrice] = useState(40)
  const [resolution, setResolution] = useState<RoundResolution | null>(null)
  const [history, setHistory] = useState<string[]>([])

  const currentRound = ROUNDS[studioState.roundIndex]
  const grossProfit = studioState.salesRevenue - studioState.cogs
  const totalAssets = studioState.cash + studioState.inventoryValue
  const finished = studioState.roundIndex >= ROUNDS.length

  const currentCashStatus = studioState.cash >= CASH_TARGET
  const currentInventoryStatus = studioState.inventoryUnits >= INVENTORY_TARGET

  const runStep = () => {
    if (!currentRound) return

    const updated = resolveRound(studioState, currentRound, selectedBuy, selectedPrice)
    const nextState: StudioState = {
      cash: updated.endingCash,
      inventoryUnits: updated.endingInventoryUnits,
      inventoryValue: updated.endingInventoryValue,
      salesRevenue: studioState.salesRevenue + updated.revenue,
      cogs: studioState.cogs + updated.cogs,
      roundIndex: studioState.roundIndex + 1,
    }

    setResolution(updated)
    setStudioState(nextState)
    setHistory((current) => [
      ...current,
      `${currentRound.title}: bought ${selectedBuy}, priced at $${selectedPrice}, sold ${updated.soldUnits}`,
    ])
  }

  const advanceToNext = () => {
    setResolution(null)
    setSelectedBuy(2)
    setSelectedPrice(40)
  }

  const resetStudio = () => {
    setStudioState(OPENING_STATE)
    setSelectedBuy(2)
    setSelectedPrice(40)
    setResolution(null)
    setHistory([])
  }

  const finalGrossProfit = studioState.salesRevenue - studioState.cogs
  const finalResult = buildFinalResult(studioState)

  return (
    <div className="space-y-8">
      <Card className="border-orange-200 bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="text-orange-900">Ten-Step Pricing Simulator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-slate-800">
          <p>
            <strong>Goal:</strong> finish the 10 steps with the highest gross profit you can while keeping at least{" "}
            <strong>{formatCurrency(CASH_TARGET)}</strong> in cash and at least <strong>{INVENTORY_TARGET} kits</strong> on the shelf.
          </p>
          <p>
            This is mostly a pricing game. Buying kits matters because it changes the balance sheet. Pricing matters because it changes the income statement.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 xl:grid-cols-[1.2fr,0.8fr]">
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900">Live dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <MetricCard icon={DollarSign} label="Cash" value={formatCurrency(studioState.cash)} />
              <MetricCard icon={Package2} label="Inventory asset" value={formatCurrency(studioState.inventoryValue)} />
              <MetricCard icon={BarChart3} label="Gross profit" value={formatCurrency(grossProfit)} />
              <MetricCard label="Units on shelf" value={`${studioState.inventoryUnits} kits`} />
              <MetricCard label="Total assets" value={formatCurrency(totalAssets)} />
              <MetricCard label="Step" value={finished ? "10 of 10" : `${studioState.roundIndex + 1} of 10`} />
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <StatementCard title="Mini Income Statement">
                <StatementLine label="Sales" value={formatCurrency(studioState.salesRevenue)} />
                <StatementLine label="COGS" value={formatCurrency(studioState.cogs)} />
                <StatementLine label="Gross Profit" value={formatCurrency(grossProfit)} strong />
              </StatementCard>

              <StatementCard title="Mini Balance Sheet">
                <StatementLine label="Cash" value={formatCurrency(studioState.cash)} />
                <StatementLine label="Inventory" value={formatCurrency(studioState.inventoryValue)} />
                <StatementLine label="Total Assets" value={formatCurrency(totalAssets)} strong />
              </StatementCard>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge className={currentCashStatus ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"}>
                Cash floor: {currentCashStatus ? "safe" : "at risk"}
              </Badge>
              <Badge
                className={currentInventoryStatus ? "bg-emerald-100 text-emerald-900" : "bg-red-100 text-red-900"}
              >
                Shelf floor: {currentInventoryStatus ? "safe" : "at risk"}
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900">Playbook</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-blue-950">
            <p>1. Read the current step.</p>
            <p>2. Choose how many kits to buy first.</p>
            <p>3. Choose the price Sarah will charge.</p>
            <p>4. Run the step and read the mini statements.</p>
            <p>5. Keep gross profit climbing without letting cash or shelf stock crash.</p>
          </CardContent>
        </Card>
      </div>

      {!finished && currentRound ? (
        <div className="space-y-6">
          <Card className="border-violet-200 bg-violet-50">
            <CardHeader>
              <CardTitle className="text-violet-900">{currentRound.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-violet-950">
              <p>{currentRound.note}</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Badge className="bg-white text-violet-900 border border-violet-200 hover:bg-white">
                  Supplier cost: {formatCurrency(currentRound.supplierCost)}
                </Badge>
                <Badge className="bg-white text-violet-900 border border-violet-200 hover:bg-white">
                  Base demand: {currentRound.baseDemand} kits
                </Badge>
                <Badge className="bg-white text-violet-900 border border-violet-200 hover:bg-white">
                  Price sensitivity: {currentRound.sensitivity}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card className="border-amber-200 bg-white">
              <CardHeader>
                <CardTitle className="text-amber-900">Choose the restock</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-700">
                  Buying more keeps Sarah ready, but it pushes cash into inventory before the sale happens.
                </p>
                <div className="flex flex-wrap gap-2">
                  {BUY_OPTIONS.map((option) => (
                    <Button
                      key={option}
                      variant={selectedBuy === option ? "default" : "outline"}
                      onClick={() => setSelectedBuy(option)}
                      disabled={resolution !== null}
                    >
                      Buy {option}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-slate-700">
                  Immediate inventory purchase: <strong>{formatCurrency(selectedBuy * currentRound.supplierCost)}</strong>
                </p>
              </CardContent>
            </Card>

            <Card className="border-emerald-200 bg-white">
              <CardHeader>
                <CardTitle className="text-emerald-900">Choose the selling price</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-slate-700">
                  Higher prices can lift gross profit, but they can also cool demand in price-sensitive steps.
                </p>
                <div className="flex flex-wrap gap-2">
                  {PRICE_OPTIONS.map((option) => (
                    <Button
                      key={option}
                      variant={selectedPrice === option ? "default" : "outline"}
                      onClick={() => setSelectedPrice(option)}
                      disabled={resolution !== null}
                    >
                      {formatCurrency(option)}
                    </Button>
                  ))}
                </div>
                <p className="text-sm text-slate-700">
                  Gross profit grows only when sales happen. Unsold kits stay in inventory.
                </p>
              </CardContent>
            </Card>
          </div>

          {!resolution ? (
            <Button onClick={runStep} className="w-full sm:w-auto">
              Run Step {studioState.roundIndex + 1}
            </Button>
          ) : (
            <div className="space-y-6">
              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Step result</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-emerald-950">
                  <p>
                    Sarah bought <strong>{resolution.boughtUnits}</strong> kits and sold <strong>{resolution.soldUnits}</strong>{" "}
                    kits at <strong>{formatCurrency(selectedPrice)}</strong>.
                  </p>
                  <p>
                    Revenue this step: <strong>{formatCurrency(resolution.revenue)}</strong>. COGS this step:{" "}
                    <strong>{formatCurrency(resolution.cogs)}</strong>.
                  </p>
                  <p>
                    Average tracked cost per kit after buying: <strong>{formatCurrency(resolution.averageCostPerKit)}</strong>.
                  </p>
                  <p>{resolution.priceEffectText}</p>
                  {resolution.stockout ? (
                    <p>
                      Sarah hit a stock limit here. Demand was <strong>{resolution.demandUnits}</strong> kits, but she only had enough
                      inventory to sell <strong>{resolution.soldUnits}</strong>.
                    </p>
                  ) : null}
                </CardContent>
              </Card>

              <Button onClick={advanceToNext}>
                {studioState.roundIndex >= ROUNDS.length ? "See Final Score" : "Go to Next Step"}
              </Button>
            </div>
          )}
        </div>
      ) : null}

      {finished ? (
        <Card className="border-rose-200 bg-rose-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-rose-900">
              <Trophy className="h-5 w-5" />
              Final result
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-rose-950">
            <p className="font-semibold">{finalResult.headline}</p>
            <p>{finalResult.body}</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <MetricCard label="Final gross profit" value={formatCurrency(finalGrossProfit)} />
              <MetricCard label="Final cash" value={formatCurrency(studioState.cash)} />
              <MetricCard label="Final ending inventory" value={`${studioState.inventoryUnits} kits`} />
            </div>
            <div className="rounded-2xl border border-white/80 bg-white p-4">
              <p className="font-semibold text-slate-900">Why this belongs in Lesson 1</p>
              <p className="mt-2 text-sm text-slate-800">
                Pricing choices changed the income statement. Buying choices changed the balance sheet. That is the problem Sarah is
                living inside before the unit teaches the formal inventory methods.
              </p>
            </div>
            <Button onClick={resetStudio}>Play Again</Button>
          </CardContent>
        </Card>
      ) : null}

      {history.length > 0 ? (
        <Card className="border-slate-200 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-slate-900">Step history</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-700">
            {history.map((entry, index) => (
              <p key={`${index}-${entry}`}>{entry}</p>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  )
}

function resolveRound(
  studioState: StudioState,
  round: PricingRound,
  buyUnits: number,
  sellPrice: number
): RoundResolution {
  const purchaseCost = buyUnits * round.supplierCost
  const unitsAfterBuy = studioState.inventoryUnits + buyUnits
  const inventoryValueAfterBuy = studioState.inventoryValue + purchaseCost
  const averageCost = unitsAfterBuy === 0 ? round.supplierCost : roundCurrency(inventoryValueAfterBuy / unitsAfterBuy)
  const demandUnits = computeDemand(round, sellPrice)
  const soldUnits = Math.min(unitsAfterBuy, demandUnits)
  const revenue = soldUnits * sellPrice
  const cogs = roundCurrency(soldUnits * averageCost)
  const endingCash = studioState.cash - purchaseCost + revenue
  const endingInventoryUnits = unitsAfterBuy - soldUnits
  const endingInventoryValue = roundCurrency(inventoryValueAfterBuy - cogs)

  return {
    boughtUnits: buyUnits,
    soldUnits,
    demandUnits,
    revenue,
    cogs,
    endingCash,
    endingInventoryUnits,
    endingInventoryValue,
    averageCostPerKit: averageCost,
    priceEffectText: describePriceEffect(round, sellPrice, demandUnits),
    stockout: demandUnits > soldUnits,
  }
}

function computeDemand(round: PricingRound, sellPrice: number) {
  let modifier = 0

  if (round.sensitivity === "high") {
    if (sellPrice === 36) modifier = 1
    if (sellPrice === 44) modifier = -2
  }

  if (round.sensitivity === "medium") {
    if (sellPrice === 36) modifier = 1
    if (sellPrice === 44) modifier = -1
  }

  if (round.sensitivity === "low") {
    if (sellPrice === 36) modifier = 0
    if (sellPrice === 44) modifier = 0
  }

  return Math.max(1, round.baseDemand + modifier)
}

function describePriceEffect(round: PricingRound, sellPrice: number, demandUnits: number) {
  if (round.sensitivity === "low") {
    return `This step was not very price sensitive. Demand still came in at ${demandUnits} kits.`
  }

  if (sellPrice === 36) {
    return `The lower price pulled demand up to ${demandUnits} kits.`
  }

  if (sellPrice === 44) {
    return `The higher price cooled demand to ${demandUnits} kits.`
  }

  return `The middle price kept demand near the base level at ${demandUnits} kits.`
}

function buildFinalResult(studioState: StudioState) {
  const grossProfit = studioState.salesRevenue - studioState.cogs
  const cashSafe = studioState.cash >= CASH_TARGET
  const inventorySafe = studioState.inventoryUnits >= INVENTORY_TARGET

  if (cashSafe && inventorySafe && grossProfit >= 500) {
    return {
      headline: "Strong founder finish.",
      body: "You protected Sarah's safety lines and still built solid gross profit. That is the kind of tradeoff thinking this phase is supposed to surface.",
    }
  }

  if (cashSafe && inventorySafe) {
    return {
      headline: "Safe but conservative finish.",
      body: "Sarah stayed protected on cash and shelf stock, but there may have been room to push gross profit harder.",
    }
  }

  return {
    headline: "Risky month-end finish.",
    body: "Gross profit alone was not enough. Sarah finished below a safety line in cash or ending inventory, which is exactly why the unit cannot focus on just one number.",
  }
}

function roundCurrency(value: number) {
  return Math.round(value)
}

function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`
}

function MetricCard({
  icon: Icon,
  label,
  value,
}: {
  icon?: typeof DollarSign
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex items-center gap-2 text-slate-600">
        {Icon ? <Icon className="h-4 w-4" /> : null}
        <p className="text-sm font-semibold">{label}</p>
      </div>
      <p className="mt-2 text-xl font-bold text-slate-900">{value}</p>
    </div>
  )
}

function StatementCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <p className="font-semibold text-slate-900">{title}</p>
      <div className="mt-4 space-y-3">{children}</div>
    </div>
  )
}

function StatementLine({
  label,
  value,
  strong = false,
}: {
  label: string
  value: string
  strong?: boolean
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <p className={strong ? "font-semibold text-slate-900" : "text-slate-700"}>{label}</p>
      <p className={strong ? "font-semibold text-slate-900" : "text-slate-800"}>{value}</p>
    </div>
  )
}
