export interface InventorySnapshot {
  cash: number
  beginningInventoryValue: number
  purchasesValue: number
  revenue: number
  cogs: number
  endingInventoryValue: number
  beginningUnits: number
  purchasedUnits: number
  soldUnits: number
  endingUnits: number
  grossProfit: number
}

export interface GuidedEvent {
  id: string
  label: string
  kind: "purchase" | "sale"
  details: string
  quantity: number
  shelfDirection: "up" | "down"
  cashDirection: "up" | "down"
  metricMoves: Array<"cash" | "units" | "inventoryValue" | "revenue" | "grossProfit">
  inventoryValueChange: number
  cashChange: number
  revenueChange: number
  cogsChange: number
  studentTakeaway: string
}

export const simulationIntro = {
  businessName: "TechStart Solutions",
  productName: "Client Launch Kit",
  startingCash: 1200,
  beginningUnits: 12,
  beginningInventoryValue: 216,
}

export const guidedEvents: GuidedEvent[] = [
  {
    id: "event-1",
    label: "Event 1: Buy 10 new kits",
    kind: "purchase",
    details: "Sarah orders 10 more launch kits at $20 each. That is higher than the $18 cost in her opening batch.",
    quantity: 10,
    shelfDirection: "up",
    cashDirection: "down",
    metricMoves: ["cash", "units", "inventoryValue"],
    inventoryValueChange: 200,
    cashChange: -200,
    revenueChange: 0,
    cogsChange: 0,
    studentTakeaway: "A purchase increases inventory, but it does not create profit by itself."
  },
  {
    id: "event-2",
    label: "Event 2: Sell 8 kits",
    kind: "sale",
    details: "TechStart sells 8 kits at $38 each. The bookkeeper has already attached $144 of cost to these sold kits.",
    quantity: 8,
    shelfDirection: "down",
    cashDirection: "up",
    metricMoves: ["cash", "units", "inventoryValue", "revenue", "grossProfit"],
    inventoryValueChange: -144,
    cashChange: 304,
    revenueChange: 304,
    cogsChange: 144,
    studentTakeaway: "A sale can raise revenue and profit, but only after cost moves out of inventory into COGS."
  },
  {
    id: "event-3",
    label: "Event 3: Buy 6 more kits",
    kind: "purchase",
    details: "Sarah buys 6 more kits at $22 each after supplier prices rise.",
    quantity: 6,
    shelfDirection: "up",
    cashDirection: "down",
    metricMoves: ["cash", "units", "inventoryValue"],
    inventoryValueChange: 132,
    cashChange: -132,
    revenueChange: 0,
    cogsChange: 0,
    studentTakeaway: "Higher purchase costs raise the inventory asset value, but they still do not create profit."
  },
  {
    id: "event-4",
    label: "Event 4: Sell 7 kits",
    kind: "sale",
    details: "TechStart tests a slightly higher selling price and moves 7 kits at $40 each. The assigned cost for those sold kits is $140.",
    quantity: 7,
    shelfDirection: "down",
    cashDirection: "up",
    metricMoves: ["cash", "units", "inventoryValue", "revenue", "grossProfit"],
    inventoryValueChange: -140,
    cashChange: 280,
    revenueChange: 280,
    cogsChange: 140,
    studentTakeaway: "Selling inventory affects both profit and ending inventory because cost has to leave the shelf."
  },
]

export function buildGuidedSnapshot(eventCount: number): InventorySnapshot {
  let cash = simulationIntro.startingCash
  let purchasesValue = 0
  let revenue = 0
  let cogs = 0
  let purchasedUnits = 0
  let soldUnits = 0

  guidedEvents.slice(0, eventCount).forEach((event) => {
    cash += event.cashChange
    purchasesValue += event.kind === "purchase" ? event.inventoryValueChange : 0
    revenue += event.revenueChange
    cogs += event.cogsChange
    purchasedUnits += event.kind === "purchase" ? event.quantity : 0
    soldUnits += event.kind === "sale" ? event.quantity : 0
  })

  const endingInventoryValue = simulationIntro.beginningInventoryValue + purchasesValue - cogs
  const endingUnits = simulationIntro.beginningUnits + purchasedUnits - soldUnits

  return {
    cash,
    beginningInventoryValue: simulationIntro.beginningInventoryValue,
    purchasesValue,
    revenue,
    cogs,
    endingInventoryValue,
    beginningUnits: simulationIntro.beginningUnits,
    purchasedUnits,
    soldUnits,
    endingUnits,
    grossProfit: revenue - cogs,
  }
}

export const decisionRound = {
  buyCostPerUnit: 24,
  reservedSaleUnits: 6,
  reservedSaleCost: 120,
  buyChoices: [0, 4, 8],
  sellPriceChoices: [36, 40, 44],
}

export function buildDecisionSnapshot(buyUnits: number, sellPrice: number): InventorySnapshot {
  const base = buildGuidedSnapshot(guidedEvents.length)
  const purchaseCost = buyUnits * decisionRound.buyCostPerUnit
  const saleRevenue = decisionRound.reservedSaleUnits * sellPrice
  const newPurchasesValue = base.purchasesValue + purchaseCost
  const newRevenue = base.revenue + saleRevenue
  const newCogs = base.cogs + decisionRound.reservedSaleCost
  const newCash = base.cash - purchaseCost + saleRevenue
  const endingInventoryValue = simulationIntro.beginningInventoryValue + newPurchasesValue - newCogs
  const purchasedUnits = base.purchasedUnits + buyUnits
  const soldUnits = base.soldUnits + decisionRound.reservedSaleUnits
  const endingUnits = simulationIntro.beginningUnits + purchasedUnits - soldUnits

  return {
    cash: newCash,
    beginningInventoryValue: simulationIntro.beginningInventoryValue,
    purchasesValue: newPurchasesValue,
    revenue: newRevenue,
    cogs: newCogs,
    endingInventoryValue,
    beginningUnits: simulationIntro.beginningUnits,
    purchasedUnits,
    soldUnits,
    endingUnits,
    grossProfit: newRevenue - newCogs,
  }
}
