import type { TaxBracket } from "@/components/payroll/TaxBracketTable"
import type { FilingStatus } from "@/components/payroll/CalculateDeductions"

export interface FilingStatusTable {
  status: FilingStatus
  label: string
  standardDeduction: number
  brackets: TaxBracket[]
}

const createBracket = (rate: number, min: number, max: number | null, baseTax: number, description: string): TaxBracket => ({
  rate,
  range: { min, max },
  baseTax,
  description
})

export const federalTaxTables2025: Record<FilingStatus, FilingStatusTable> = {
  married: {
    status: "married",
    label: "Married filing jointly",
    standardDeduction: 30000,
    brackets: [
      createBracket(0.1, 0, 23850, 0, "10% of taxable income"),
      createBracket(0.12, 23850, 96950, 2385, "$2,385 + 12% of the amount over $23,850"),
      createBracket(0.22, 96950, 206700, 11157, "$11,157 + 22% of the amount over $96,950"),
      createBracket(0.24, 206700, 394600, 35302, "$35,302 + 24% of the amount over $206,700"),
      createBracket(0.32, 394600, 501050, 80398, "$80,398 + 32% of the amount over $394,600"),
      createBracket(0.35, 501050, 751600, 114462, "$114,462 + 35% of the amount over $501,050"),
      createBracket(0.37, 751600, null, 202154.5, "$202,154.50 + 37% of the amount over $751,600")
    ]
  },
  headOfHousehold: {
    status: "headOfHousehold",
    label: "Head of household",
    standardDeduction: 22500,
    brackets: [
      createBracket(0.1, 0, 17000, 0, "10% of taxable income"),
      createBracket(0.12, 17000, 64850, 1700, "$1,700 + 12% of the amount over $17,000"),
      createBracket(0.22, 64850, 103350, 7442, "$7,442 + 22% of the amount over $64,850"),
      createBracket(0.24, 103350, 197300, 15912, "$15,912 + 24% of the amount over $103,350"),
      createBracket(0.32, 197300, 250500, 38460, "$38,460 + 32% of the amount over $197,300"),
      createBracket(0.35, 250500, 626350, 55484, "$55,484 + 35% of the amount over $250,500"),
      createBracket(0.37, 626350, null, 187031.5, "$187,031.50 + 37% of the amount over $626,350")
    ]
  },
  single: {
    status: "single",
    label: "Single (unmarried)",
    standardDeduction: 15000,
    brackets: [
      createBracket(0.1, 0, 11925, 0, "10% of taxable income"),
      createBracket(0.12, 11925, 48475, 1192.5, "$1,192.50 + 12% of the amount over $11,925"),
      createBracket(0.22, 48475, 103350, 5578.5, "$5,578.50 + 22% of the amount over $48,475"),
      createBracket(0.24, 103350, 197300, 17651, "$17,651 + 24% of the amount over $103,350"),
      createBracket(0.32, 197300, 250525, 40199, "$40,199 + 32% of the amount over $197,300"),
      createBracket(0.35, 250525, 626350, 57231, "$57,231 + 35% of the amount over $250,525"),
      createBracket(0.37, 626350, null, 188769.75, "$188,769.75 + 37% of the amount over $626,350")
    ]
  }
}

export const SOCIAL_SECURITY_WAGE_BASE_2025 = 172800
export const SOCIAL_SECURITY_RATE = 0.062
export const MEDICARE_RATE = 0.0145

