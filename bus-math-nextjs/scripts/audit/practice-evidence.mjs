import fs from "node:fs"
import vm from "node:vm"
import { spawnSync } from "node:child_process"
import assert from "node:assert/strict"
import ts from "typescript"

// Execute selected pure declarations from the live source. Do not alter lesson code.
function loadDeclarations(file, names, math = Math, sourceOverride, globals = {}) {
  const source = sourceOverride ?? fs.readFileSync(file, "utf8")
  const ast = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true)
  const declarations = new Map()
  function visit(node) {
    if (ts.isFunctionDeclaration(node) && node.name && names.includes(node.name.text)) {
      declarations.set(node.name.text, node.getText(ast))
    }
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && names.includes(node.name.text)) {
      declarations.set(node.name.text, `const ${node.getText(ast)};`)
    }
    ts.forEachChild(node, visit)
  }
  visit(ast)
  for (const name of names) assert.ok(declarations.has(name), `Missing ${file}:${name}`)
  const code = [...declarations.values()].join("\n") + `\nglobalThis.result = { ${names.join(", ")} };`
  const javascript = ts.transpileModule(code, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None } }).outputText
  const context = { Math: math, ...globals }
  vm.runInNewContext(javascript, context, { timeout: 1000 })
  return context.result
}

function expectedMonthEndAmount(scenario, index) {
  const text = scenario.additionalInfo
  const read = pattern => Number(text.match(pattern)[1])
  const balance = scenario.unadjustedBalance
  const values = [
    () => balance - read(/\$(\d+) remaining/),
    () => balance / read(/(\d+) months/),
    () => balance / (read(/(\d+) years/) * 12),
    () => read(/last (\d+) days/) * read(/payroll: \$(\d+)/),
    () => balance / read(/(\d+)-month project/),
    () => read(/worth \$(\d+)/),
    () => read(/payable: \$(\d+)/) * read(/rate: (\d+)%/) / 100 / 12,
    () => balance / read(/covers (\d+) months/),
  ]
  return Number(values[index % 8]().toFixed(2))
}

const evidence = []
const monthEndFile = "src/components/exercises/MonthEndClosePractice.tsx"
const baseline = spawnSync("git", ["show", `f617fc9:bus-math-nextjs/${monthEndFile}`], { encoding: "utf8" })
assert.equal(baseline.status, 0, baseline.stderr)
for (const [version, source] of [["baseline f617fc9", baseline.stdout], ["working copy", undefined]]) {
  const { generateScenario } = loadDeclarations(monthEndFile, ["generateScenario"], Math, source)
  const failures = []
  for (let round = 0; round < 120; round += 1) {
    const scenario = generateScenario(round)
    const expected = expectedMonthEndAmount(scenario, round)
    if (expected !== scenario.amount) failures.push({ round: round + 1, description: scenario.description, expected, actual: scenario.amount })
  }
  evidence.push({ check: "month-end full 120-round cycle", version, wrongAmounts: failures.length, failingTypes: [...new Set(failures.map(row => row.description))], examples: failures.slice(0, 8) })
  if (version === "working copy") assert.equal(failures.length, 0)
}

const cashFlow = loadDeclarations("src/components/exercises/CashFlowPractice.tsx", ["misconceptionFeedback", "checkAnswer"])
const wrongCashFlow = cashFlow.checkAnswer(0, 0, 0, 0, { operating: 6000, investing: -3000, financing: 1000, netChange: 4000 })
assert.equal(wrongCashFlow.correct, false)
evidence.push({ check: "cash-flow wrong-answer grading", submitted: [0, 0, 0, 0], expectedCorrect: false, actual: wrongCashFlow })

const statistics = loadDeclarations("src/app/student/unit04/lesson02/phase-4/PhaseContent.tsx", ["problems"])
const medianProblem = statistics.problems.find(problem => problem.id === 2)
const sorted = [...medianProblem.data].sort((a, b) => a - b)
const median = (sorted[2] + sorted[3]) / 2
assert.equal(median, 86.5)
assert.equal(medianProblem.answer, median)
evidence.push({ check: "statistics median", inputs: medianProblem.data, expected: median, actual: medianProblem.answer, acceptsCorrectValue: Math.abs(median - medianProblem.answer) < 0.1 })

const weightedAverageFile = "src/app/student/unit07/lesson04/WeightedAvgPractice.tsx"
const weightedAverageResults = []
for (let index = 0; index < 6; index += 1) {
  const math = Object.create(Math)
  math.random = () => (index + 0.5) / 6
  const { generateScenario } = loadDeclarations(weightedAverageFile, ["SCENARIOS", "generateScenario"], math)
  const scenario = generateScenario()
  const allocated = scenario.cogs + scenario.endingInventory
  weightedAverageResults.push({ product: scenario.product, goodsAvailable: scenario.totalCost, storedCOGS: scenario.cogs, storedEndingInventory: scenario.endingInventory, difference: Number((allocated - scenario.totalCost).toFixed(2)), correctCOGS: Number((scenario.totalCost / scenario.totalUnits * scenario.unitsSold).toFixed(2)) })
}
assert.ok(weightedAverageResults.every(row => row.difference === 0))
evidence.push({ check: "weighted-average cost conservation", results: weightedAverageResults })

const costAssignment = loadDeclarations("src/app/student/unit07/lesson02/CostAssignmentPractice.tsx", ["scenarios", "calculateAnswers"])
const firstScenario = costAssignment.scenarios[0]
const unitCosts = [
  ...Array(firstScenario.beginningUnits).fill(firstScenario.beginningCostPerUnit),
  ...firstScenario.purchases.flatMap(purchase => Array(purchase.units).fill(purchase.costPerUnit)),
].sort((a, b) => a - b)
const minimumCOGS = unitCosts.slice(0, firstScenario.unitsSold).reduce((sum, cost) => sum + cost, 0)
const maximumCOGS = unitCosts.slice(-firstScenario.unitsSold).reduce((sum, cost) => sum + cost, 0)
const stored = costAssignment.calculateAnswers(firstScenario)
assert.equal(minimumCOGS, 376)
assert.equal(maximumCOGS, 420)
assert.equal(stored.cogsRange.min, minimumCOGS)
assert.equal(stored.cogsRange.max, maximumCOGS)
evidence.push({ check: "inventory feasible allocation range", expectedCOGS: { min: minimumCOGS, max: maximumCOGS }, actual: stored, costConservationRequired: true })

const draws = [0, 0.99, 0, 0, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99, 0.99]
let drawIndex = 0
const methodMath = Object.create(Math)
methodMath.random = () => draws[drawIndex++] ?? 0.99
const methods = loadDeclarations("src/app/student/unit07/lesson03/MethodRecommendationStudio.tsx", ["generateScenario", "calculateFifoCogs", "calculateLifoCogs"], methodMath)
const invalidInventory = methods.generateScenario()
assert.ok(invalidInventory.purchases.every(purchase => purchase.units > 0))
evidence.push({ check: "generated inventory layer quantities", draws, purchases: invalidInventory.purchases, unitsSold: invalidInventory.unitsSold, totalUnits: invalidInventory.totalUnits, fifoCOGS: methods.calculateFifoCogs(invalidInventory.purchases, invalidInventory.unitsSold), lifoCOGS: methods.calculateLifoCogs(invalidInventory.purchases, invalidInventory.unitsSold) })

const depreciationDraws = [0, 0, 0.375, 0, 0.99, 0.1]
let depreciationDrawIndex = 0
const depreciationMath = Object.create(Math)
depreciationMath.random = () => depreciationDraws[depreciationDrawIndex++] ?? 0.1
const straightLine = loadDeclarations("src/components/exercises/StraightLineMastery.tsx", ["assetPool", "randInt", "roundToNearestDollar", "generateProblem"], depreciationMath)
const depreciation = straightLine.generateProblem()
assert.equal(depreciation.cost, 28000)
assert.equal(depreciation.usefulLife, 6)
assert.equal(depreciation.yearToCalculate, 6)
assert.equal(depreciation.correctBookValue, depreciation.salvageValue)
evidence.push({ check: "straight-line salvage floor", draws: depreciationDraws, problem: depreciation, expectedFinalBookValue: depreciation.salvageValue })

const timeline = loadDeclarations("src/app/student/unit07/lesson02/InventoryTimelineLab.tsx", ["timelineEvents"])
const layers = []
let cumulativeCOGS = 0
const timelineResults = []
for (const event of timeline.timelineEvents) {
  if (event.unitsIn) layers.push({ units: event.unitsIn, cost: event.costPerUnit })
  let unitsToSell = event.unitsOut
  while (unitsToSell > 0) {
    const layer = layers.find(row => row.units > 0)
    assert.ok(layer, "Sale exceeds units available")
    const used = Math.min(unitsToSell, layer.units)
    cumulativeCOGS += used * layer.cost
    unitsToSell -= used
    layer.units -= used
  }
  const inventory = layers.reduce((sum, layer) => sum + layer.units * layer.cost, 0)
  assert.equal(event.expectedCOGS, cumulativeCOGS)
  assert.equal(event.expectedInventoryValue, inventory)
  timelineResults.push({ event: event.id, expectedCumulativeCOGS: cumulativeCOGS, actualCOGS: event.expectedCOGS, expectedInventory: inventory, actualInventory: event.expectedInventoryValue })
}
assert.equal(timelineResults.at(-1).expectedInventory, 320)
assert.equal(timelineResults.at(-1).expectedCumulativeCOGS, 480)
evidence.push({ check: "inventory timeline FIFO conservation", results: timelineResults })

const statisticsGuided = loadDeclarations("src/app/student/unit04/lesson03/phase-3/PhaseContent.tsx", ["transactionData", "mean", "stdDev"])
const amounts = statisticsGuided.transactionData.map(row => row.amount)
const mean = amounts.reduce((sum, value) => sum + value, 0) / amounts.length
const squaredDifferences = amounts.reduce((sum, value) => sum + (value - mean) ** 2, 0)
evidence.push({ check: "guided statistics spread and z-scores", inputs: amounts, mean, storedStandardDeviation: statisticsGuided.stdDev, populationStandardDeviation: Math.sqrt(squaredDifferences / amounts.length), sampleStandardDeviation: Math.sqrt(squaredDifferences / (amounts.length - 1)), cateringZUsingDisplayedValues: (127.5 - statisticsGuided.mean) / statisticsGuided.stdDev, expectedCateringZ: Number(((127.5 - statisticsGuided.mean) / statisticsGuided.stdDev).toFixed(2)) })

const taxTables = loadDeclarations("src/data/payroll/federalTaxTables.ts", ["createBracket", "federalTaxTables2025"])
const taxPractice = loadDeclarations("src/app/student/unit05/lesson02/phase-3/PhaseContent.tsx", ["scenarios"])
const taxResults = taxPractice.scenarios.map(scenario => {
  const annualWages = scenario.taxableWages * 26
  const bracket = taxTables.federalTaxTables2025[scenario.filingStatus].brackets.find(row => annualWages >= row.range.min && (row.range.max === null || annualWages <= row.range.max))
  const federalIncome = (bracket.baseTax + (annualWages - bracket.range.min) * bracket.rate) / 26
  return { id: scenario.id, annualWages, displayedTableRate: bracket.rate, expectedFromDisplayedTable: Number(federalIncome.toFixed(2)), storedAnswer: scenario.expected.federalIncome, hint: scenario.bracketHint }
})
assert.equal(taxResults[0].expectedFromDisplayedTable, 275.18)
assert.ok(taxResults.every(row => row.expectedFromDisplayedTable === row.storedAnswer))
evidence.push({ check: "payroll answers against the lesson's displayed classroom table", results: taxResults, limitation: "This checks internal lesson consistency. It does not validate tax law or current withholding rules." })

const goalSeekResults = []
for (const target of ["15000", "15000000"]) {
  let feedback
  const goalSeek = loadDeclarations("src/app/student/unit06/lesson05/GoalSeekSimulator.tsx", ["TARGET_PROFIT", "handleCheck"], Math, undefined, { inputs: { setCell: "Profit", toValue: target, byChangingCell: "Price" }, setFeedback: value => { feedback = value } })
  goalSeek.handleCheck()
  goalSeekResults.push({ enteredTarget: target, feedback })
}
assert.equal(goalSeekResults[1].feedback.type, "error")
evidence.push({ check: "Goal Seek rejects target one thousand times too high", results: goalSeekResults, correctPrice: 880 + (12000 + 15000) / 25, profitAtBaseline1388Price: (1388 - 880) * 25 - 12000 })

const dataTableResults = []
for (const [columnInput, rowInput] of [["B4", "B5"], ["B5", "B6"]]) {
  const result = loadDeclarations("src/app/student/unit06/lesson06/DataTableSimulator.tsx", ["isColumnCorrect", "isRowCorrect"], Math, undefined, { columnInput, rowInput })
  dataTableResults.push({ columnInput, rowInput, ...result })
}
assert.equal(dataTableResults[0].isColumnCorrect, true)
assert.equal(dataTableResults[1].isColumnCorrect, false)
evidence.push({ check: "Data Table cell references match the displayed model", results: dataTableResults })

const report = { method: "Execute source declarations in isolation and recompute with separate arithmetic. Browser rendering and workbook files are outside this script.", evidence }
if (process.argv[2]) fs.writeFileSync(process.argv[2], JSON.stringify(report, null, 2) + "\n")
console.log(JSON.stringify(report, null, 2))
