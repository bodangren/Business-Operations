import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import vm from "node:vm"
import ts from "typescript"

const root = new URL("../../", import.meta.url)
const read = (path) => readFileSync(new URL(path, root), "utf8")

// Execute selected pure declarations from the live source. Do not alter lesson code.
function loadDeclarations(file, names, math = Math) {
  const source = read(file)
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
  const javascript = ts.transpileModule(code, {
    compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.None },
  }).outputText
  const context = { Math: math }
  vm.runInNewContext(javascript, context, { timeout: 1000 })
  return context.result
}

const closePagePath = "src/app/student/unit02/lesson04/phase-3/PhaseContent.tsx"
const closePageSource = read(closePagePath)
const closeChallenge = loadDeclarations(closePagePath, ["challengeEntries"])
const displayedTrialBalance = closePageSource.match(/trialBalanceTotal=\{\{ debits: (\d+), credits: (\d+) \}\}/)
assert.ok(displayedTrialBalance, "Missing the trial-balance totals passed to MonthEndChallenge")
const unadjustedDebits = Number(displayedTrialBalance[1])
const unadjustedCredits = Number(displayedTrialBalance[2])
const adjustmentDebits = closeChallenge.challengeEntries.reduce((sum, entry) => sum + entry.amount, 0)
const adjustmentCredits = closeChallenge.challengeEntries.reduce((sum, entry) => sum + entry.amount, 0)
assert.equal(unadjustedDebits, 77_300)
assert.equal(unadjustedCredits, 77_300)
assert.equal(adjustmentDebits, 10_100)
assert.equal(adjustmentCredits, 10_100)
assert.equal(unadjustedDebits + adjustmentDebits - (unadjustedCredits + adjustmentCredits), 0)
assert.match(read("src/components/exercises/MonthEndChallenge.tsx"), /Equal debit and credit adjustments cannot remove this difference/)

const incomeStatementPath = "src/app/student/unit03/lesson02/phase-3/PhaseContent.tsx"
const incomeStatement = loadDeclarations(incomeStatementPath, [
  "complicationTrialBalance",
  "incomeStatementAccounts",
  "totalRevenue",
  "totalExpenses",
  "netIncome",
  "interestIncome",
  "interestExpense",
  "operatingRevenue",
  "operatingExpenses",
])
const incomeStatementSource = read(incomeStatementPath)
assert.equal(incomeStatement.totalRevenue, 10_620)
assert.equal(incomeStatement.totalExpenses, 5_730)
assert.equal(incomeStatement.netIncome, 4_890)
const correctOperatingIncome = 10_500 - (1_800 + 3_200 + 650)
const sourceOperatingIncome = incomeStatement.operatingRevenue - incomeStatement.operatingExpenses
assert.equal(correctOperatingIncome, 4_850)
assert.equal(sourceOperatingIncome, 4_850)
assert.match(incomeStatementSource, /operatingRevenue - operatingExpenses/)

const deterministicMath = Object.create(Math)
deterministicMath.random = () => 0.5
const balanceSheet = loadDeclarations(
  "src/components/exercises/BalanceSheetPractice.tsx",
  [
    "companyNames",
    "assetPool",
    "liabilityPool",
    "equityPool",
    "distractorPool",
    "randInt",
    "generateRound",
    "misconceptionFeedback",
    "checkAnswer",
  ],
  deterministicMath,
)
const generatedBalanceSheet = balanceSheet.generateRound()
const balanceSheetCheck = balanceSheet.checkAnswer(
  generatedBalanceSheet.correctAssets,
  generatedBalanceSheet.correctLiabilities,
  generatedBalanceSheet.correctEquity,
  generatedBalanceSheet.correctRetainedEarnings,
  {
    assets: generatedBalanceSheet.correctAssets,
    liabilities: generatedBalanceSheet.correctLiabilities,
    equity: generatedBalanceSheet.correctEquity,
    re: generatedBalanceSheet.correctRetainedEarnings,
  },
)
assert.equal(generatedBalanceSheet.correctAssets, generatedBalanceSheet.accounts.filter(account => account.type === "Asset").reduce((sum, account) => sum + account.amount, 0))
assert.equal(generatedBalanceSheet.correctLiabilities, 3_800)
assert.equal(generatedBalanceSheet.beginningRE, 5_000)
assert.equal(generatedBalanceSheet.netIncome, 3_750)
assert.equal(generatedBalanceSheet.dividends, 1_000)
assert.equal(generatedBalanceSheet.correctRetainedEarnings, 7_750)
assert.equal(generatedBalanceSheet.correctEquity, 25_750)
assert.equal(generatedBalanceSheet.correctAssets, generatedBalanceSheet.correctLiabilities + generatedBalanceSheet.correctEquity)
assert.equal(balanceSheetCheck.correct, true)
assert.match(balanceSheetCheck.feedback, /balance sheet balances/)

const cashFlow = loadDeclarations(
  "src/components/exercises/CashFlowPractice.tsx",
  ["companyNames", "randInt", "generateRound", "misconceptionFeedback", "checkAnswer"],
  deterministicMath,
)
const generatedCashFlow = cashFlow.generateRound()
const wrongCashFlow = cashFlow.checkAnswer(
  0,
  generatedCashFlow.correctInvesting,
  generatedCashFlow.correctFinancing,
  generatedCashFlow.correctNetChange,
  {
    operating: generatedCashFlow.correctOperating,
    investing: generatedCashFlow.correctInvesting,
    financing: generatedCashFlow.correctFinancing,
    netChange: generatedCashFlow.correctNetChange,
  },
)
assert.notEqual(0, generatedCashFlow.correctOperating)
assert.equal(wrongCashFlow.correct, false)
assert.match(wrongCashFlow.feedback, /Operating Cash Flow does not match/)

const dashboardPath = "src/components/charts/FinancialDashboard.tsx"
const dashboard = loadDeclarations(dashboardPath, ["defaultMonthlyData"])
const dashboardSource = read(dashboardPath)
const monthlyCashFlow = dashboard.defaultMonthlyData.reduce((sum, month) => sum + month.cashFlow, 0)
assert.equal(monthlyCashFlow, 23_300)
assert.match(dashboardSource, /defaultMonthlyData.reduce\(\(sum, month\) => sum \+ month.cashFlow, 0\)/)

console.log(`PASS: Unit 02 live challenge entries add equally to $${adjustmentDebits}, leaving a $${unadjustedDebits - unadjustedCredits} trial-balance difference.`)
console.log(`PASS: Unit 03 Lesson 02 source totals are revenue $${incomeStatement.totalRevenue}, expenses $${incomeStatement.totalExpenses}, net income $${incomeStatement.netIncome}; correct operating income is $${correctOperatingIncome}, while the source formula yields $${sourceOperatingIncome}.`)
console.log(`PASS: Unit 03 Lesson 03 source generator with Math.random=0.5 yields assets $${generatedBalanceSheet.correctAssets}, liabilities $${generatedBalanceSheet.correctLiabilities}, equity $${generatedBalanceSheet.correctEquity}; its actual checker accepts the balanced totals.`)
console.log(`PASS: Unit 03 Lesson 04 source generator with Math.random=0.5 produces operating cash flow $${generatedCashFlow.correctOperating}; its actual checker rejects a $0 operating submission.`)
console.log(`PASS: Unit 03 Lesson 06 source monthly cash flows total $${monthlyCashFlow}, and the KPI uses the same monthly sum.`)
