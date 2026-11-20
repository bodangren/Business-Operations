import { describe, expect, it } from 'vitest'
import { evaluatePractice, fixedMath } from './practice-source'

const exercises = 'src/components/exercises/'
const lesson = (unit: string, number: string, file: string) => `src/app/student/unit${unit}/lesson${number}/${file}.tsx`

describe('practice audit calculation regressions', () => {
  it.each([
    [6000, -3000, 1000, 4000, true],
    [NaN, -3000, 1000, 4000, false],
    [6000, -3000, 1000, NaN, false],
    [6000.01, -3000, 1000, 4000, false],
  ])('checks cash-flow inputs %s, %s, %s, %s', (op, inv, fin, net, correct) => {
    expect(evaluatePractice<{ correct: boolean }>(exercises + 'CashFlowPractice.tsx', ['misconceptionFeedback', 'checkAnswer'],
      'checkAnswer(...values, { operating: 6000, investing: -3000, financing: 1000, netChange: 4000 })', { values: [op, inv, fin, net] }).correct).toBe(correct)
  })
  it.each([0, 1, 2, 3])('rejects a wrong cash-flow section %i', index => {
    const values = [6000, -3000, 1000, 4000]
    values[index] += 100
    expect(evaluatePractice<{ correct: boolean }>(exercises + 'CashFlowPractice.tsx', ['misconceptionFeedback', 'checkAnswer'],
      `checkAnswer(...values, { operating: 6000, investing: -3000, financing: 1000, netChange: 4000 })`, { values }).correct).toBe(false)
  })

  it.each([0, 0.1, 0.5, 0.99])('generates balanced balance sheets at random draw %s', draw => {
    const result = evaluatePractice<boolean>(exercises + 'BalanceSheetPractice.tsx',
      ['companyNames', 'assetPool', 'liabilityPool', 'equityPool', 'distractorPool', 'randInt', 'generateRound'],
      `(() => { const r = generateRound(); return r.correctAssets === r.correctLiabilities + r.correctEquity &&
        r.accounts.filter(a => a.type === 'Asset').reduce((s, a) => s + a.amount, 0) === r.correctAssets &&
        r.accounts.filter(a => a.type === 'Equity').reduce((s, a) => s + a.amount, 0) + r.correctRetainedEarnings === r.correctEquity &&
        r.accounts.find(a => a.name === 'Cash').amount >= 0; })()`, { Math: fixedMath([], draw) })
    expect(result).toBe(true)
  })

  it('keys the median from the displayed middle values', () => {
    expect(evaluatePractice<number>(lesson('04', '02', 'phase-4/PhaseContent'), ['problems'], 'problems[1].answer')).toBe(86.5)
  })

  it('uses sample standard deviation for the ten displayed transactions', () => {
    const [actual, expected] = evaluatePractice<number[]>(lesson('04', '03', 'phase-3/PhaseContent'), ['transactionData', 'mean', 'stdDev'],
      '[stdDev, Math.sqrt(transactionData.reduce((s, t) => s + (t.amount - mean) ** 2, 0) / (transactionData.length - 1))]')
    expect(actual).toBeCloseTo(expected, 8)
  })

  it('matches each payroll key to the classroom bracket table', () => {
    const tables = evaluatePractice( 'src/data/payroll/federalTaxTables.ts', ['createBracket', 'federalTaxTables2025'], 'federalTaxTables2025')
    const differences = evaluatePractice<number[]>(lesson('05', '02', 'phase-3/PhaseContent'), ['scenarios'],
      `scenarios.map(s => { const annual = s.taxableWages * 26; const b = tables[s.filingStatus].brackets.find(b => annual >= b.range.min && (b.range.max === null || annual <= b.range.max));
        return s.expected.federalIncome - Math.round((b.baseTax + (annual - b.range.min) * b.rate) / 26 * 100) / 100; })`, { tables })
    expect(differences).toEqual([0, 0, 0])
  })

  it('flags payroll underpayments under the stated overtime rule', () => {
    expect(evaluatePractice<boolean[]>('src/components/business-simulations/ErrorCheckingSystem.tsx', ['VALIDATION_SCENARIOS'],
      `(() => { const s = VALIDATION_SCENARIOS[0]; const r = s.rules.find(r => r.id === 'pay-calculation-error'); return s.sampleDataset.map((d, i) => {
        const gross = Math.min(d.Hours_Worked, 40) * d.Hourly_Rate + Math.max(d.Hours_Worked - 40, 0) * d.Hourly_Rate * 1.5;
        return r.expectedResults[i] === (Math.abs(d.Gross_Pay - gross) > 0.01); }); })()`)).toEqual([true, true, true, true, true])
  })

  it('executes overtime validation for both erroneous and corrected pay', () => {
    for (const [pay, expected] of [[832.50, true], [878.75, false]] as const) {
      expect(evaluatePractice<boolean>('src/components/business-simulations/ErrorCheckingSystem.tsx', ['safeEvaluateCondition'],
        "safeEvaluateCondition('Gross_Pay differs from regular pay plus overtime pay', { Hours_Worked: 45, Hourly_Rate: 18.5, Gross_Pay: pay }, 0)",
        { pay, useCallback: (callback: unknown) => callback })).toBe(expected)
    }
  })

  it('uses an objective price and capacity limit for scenario decisions', () => {
    expect(evaluatePractice<boolean>(lesson('06', '04', 'phase-4/PhaseContent'), ['generateProblem'],
      `Array.from({length: 24}, (_, i) => generateProblem(i)).every(p => {
        const premium = p.premiumPrice <= p.maxPrice && p.premiumVolume <= p.maxVolume;
        const volume = p.volumePrice <= p.maxPrice && p.volumeVolume <= p.maxVolume;
        return premium !== volume && p.answer === (premium ? 'premium' : 'volume'); })`)).toBe(true)
  })

  it('shows a correct Goal Seek workbook preview with formula text and numeric inputs', () => {
    expect(evaluatePractice(lesson('06', '05', 'phase-4/PhaseContent'), ['baseCell', 'headerCell', 'labelCell', 'inputCell', 'formulaCell', 'E', 'sheet1'],
      '[sheet1[3][1].value, sheet1[4][1].value, sheet1[12][1].value, sheet1[12][2].value.trim(), sheet1[16][1].value]'))
      .toEqual([1350, 25, -250, '=B11-B12-B6', 1960])
  })

  it('uses the same cells and profit model in the Data Table workbook preview', () => {
    expect(evaluatePractice(lesson('06', '06', 'phase-4/PhaseContent'), ['h', 'r', 'E', 'cvpSheet'],
      '[cvpSheet[3][1].value, cvpSheet[4][1].value, cvpSheet[5][1].value, cvpSheet[6][1].value, cvpSheet[12][1].value, cvpSheet[12][2].value.trim()]'))
      .toEqual([1350, 25, 12000, 880, -250, '=B11-B12-B6'])
  })

  it('recalculates all one-variable and two-variable profit preview cells', () => {
    expect(evaluatePractice<boolean>(lesson('06', '06', 'phase-4/PhaseContent'), ['h', 'r', 'E', 'dataTableSheet', 'twoVarSheet'],
      `dataTableSheet.slice(3).every(row => row[1].value === (row[0].value - 880) * 25 - 12000) &&
        twoVarSheet.slice(4).every(row => row.slice(1).every((cell, i) => cell.value === (row[0].value - 880) * twoVarSheet[3][i+1].value - 12000))`)).toBe(true)
  })

  it('respects quantities in the feasible inventory cost range', () => {
    expect(evaluatePractice(lesson('07', '02', 'CostAssignmentPractice'), ['scenarios', 'calculateAnswers'],
      'calculateAnswers(scenarios[0])')).toEqual({ gafsUnits: 37, gafsValue: 736, cogsRange: { min: 376, max: 420 }, endingInventoryRange: { min: 316, max: 360 } })
  })

  it('requires COGS and ending inventory to conserve cost', () => {
    let result = ''
    evaluatePractice<void>(lesson('07', '02', 'CostAssignmentPractice'), ['checkFinal'],
      'checkFinal()', {
        endingInventoryAnswer: '316', cogsAnswer: '376',
        correctAnswers: { gafsValue: 736, cogsRange: { min: 376, max: 420 }, endingInventoryRange: { min: 316, max: 360 } },
        setFinalResult: (value: string) => { result = value },
      })
    expect(result).toBe('incorrect')
  })

  it('uses cumulative FIFO cost in every timeline event', () => {
    expect(evaluatePractice<number[][]>(lesson('07', '02', 'InventoryTimelineLab'), ['timelineEvents'],
      'timelineEvents.map(e => [e.expectedCOGS, e.expectedInventoryValue])')).toEqual([[0, 180], [0, 580], [144, 436], [144, 656], [380, 420], [480, 320]])
  })

  it('never generates a negative purchase layer, including the reported draw sequence', () => {
    for (const math of [fixedMath([0, .99, 0, 0], .99), fixedMath([], 0), fixedMath([], .99)]) {
      expect(evaluatePractice<boolean>(lesson('07', '03', 'MethodRecommendationStudio'), ['generateScenario'],
        '(() => { const s = generateScenario(); return s.purchases.every(p => p.units > 0) && s.purchases.reduce((n,p) => n+p.units,0) === s.totalUnits; })()', { Math: math })).toBe(true)
    }
  })

  it('does not truncate fractional dollar answers', () => {
    expect(evaluatePractice<number>(lesson('07', '03', 'MethodRecommendationStudio'), ['parseNum'], "parseNum('825.99')")).toBe(825.99)
  })

  it.each([0, 1, 2, 3, 4, 5])('conserves weighted-average cost in fixture %i', index => {
    const [cogs, inventory, available, expectedCOGS] = evaluatePractice<number[]>(lesson('07', '04', 'WeightedAvgPractice'), ['SCENARIOS', 'generateScenario'],
      '(() => { const s = generateScenario(); return [s.cogs, s.endingInventory, s.totalCost, Math.round(s.totalCost / s.totalUnits * s.unitsSold * 100) / 100]; })()',
      { Math: fixedMath([], (index + .5) / 6) })
    expect(cogs).toBeCloseTo(expectedCOGS, 8)
    expect(cogs + inventory).toBeCloseTo(available, 8)
  })

  it.each([0, 1, 2, 3])('conserves cost in the combined weighted-average fixture %i', index => {
    const scenario = evaluatePractice(lesson('07', '04', 'MethodPracticeCombined'), ['WEIGHTED_AVG_SCENARIOS'], `WEIGHTED_AVG_SCENARIOS[${index}]`)
    const [cogs, inventory, available] = evaluatePractice<number[]>(lesson('07', '04', 'MethodPracticeCombined'),
      ['waTotalUnits', 'waTotalCost', 'waAvgCost', 'waUnitsSold', 'waCogs', 'waRemaining', 'waEndingInv'], '[waCogs, waEndingInv, waTotalCost]', { waScenario: scenario })
    expect(cogs + inventory).toBeCloseTo(available, 8)
  })

  it('ends straight-line depreciation at salvage after upward annual rounding', () => {
    expect(evaluatePractice<{ correctBookValue: number; correctAccumulated: number }>(exercises + 'StraightLineMastery.tsx',
      ['assetPool', 'randInt', 'roundToNearestDollar', 'generateProblem'], 'generateProblem()', { Math: fixedMath([0, 0, .375, 0, .99], .1) }))
      .toMatchObject({ correctBookValue: 3000, correctAccumulated: 25000 })
  })

  it('preserves accounting identities across 2,000 generated rounds per generator', () => {
    let seed = 42
    const math = Object.create(Math) as Math
    math.random = () => { seed = (1664525 * seed + 1013904223) >>> 0; return seed / 2 ** 32 }
    expect(evaluatePractice<boolean>(exercises + 'BalanceSheetPractice.tsx',
      ['companyNames', 'assetPool', 'liabilityPool', 'equityPool', 'distractorPool', 'randInt', 'generateRound'],
      'Array.from({length: 2000}, () => generateRound()).every(r => r.correctAssets === r.correctLiabilities + r.correctEquity && r.accounts.find(a => a.name === "Cash").amount >= 0)', { Math: math })).toBe(true)
    expect(evaluatePractice<boolean>(lesson('07', '03', 'MethodRecommendationStudio'), ['generateScenario', 'calculateFifoCogs', 'calculateLifoCogs'],
      `Array.from({length: 2000}, () => generateScenario()).every(s => s.purchases.every(p => p.units > 0) &&
        s.purchases.reduce((n,p) => n+p.units,0) === s.totalUnits && s.totalUnits - s.unitsSold === s.endingUnits &&
        calculateFifoCogs(s.purchases, s.unitsSold) > 0 && calculateLifoCogs(s.purchases, s.unitsSold) > 0)`, { Math: math })).toBe(true)
    expect(evaluatePractice<boolean>(exercises + 'StraightLineMastery.tsx', ['assetPool', 'randInt', 'roundToNearestDollar', 'generateProblem'],
      `Array.from({length: 2000}, () => generateProblem()).every(p => p.correctBookValue >= p.salvageValue &&
        p.correctAccumulated + p.correctBookValue === p.cost && (p.yearToCalculate < p.usefulLife || p.correctBookValue === p.salvageValue))`, { Math: math })).toBe(true)
  })
})
