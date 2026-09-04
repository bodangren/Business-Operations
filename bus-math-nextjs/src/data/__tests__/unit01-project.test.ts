import { describe, expect, it } from "vitest"

import {
  UNIT01_PROJECT_GROUPS,
  UNIT01_PROJECT_SHEETS,
  UNIT01_REHEARSAL_EVIDENCE,
} from "../unit01-project"

describe("Unit 1 project resource contract", () => {
  it("uses one four-sheet structure from rehearsal through the project", () => {
    expect(UNIT01_PROJECT_SHEETS).toEqual([
      "Transactions",
      "Trial Balance",
      "Error Checks",
      "Executive Summary",
    ])
  })

  it("assigns one distinct dataset and workbook to each group", () => {
    expect(UNIT01_PROJECT_GROUPS).toHaveLength(4)
    expect(new Set(UNIT01_PROJECT_GROUPS.map(({ datasetUrl }) => datasetUrl)).size).toBe(4)
    expect(new Set(UNIT01_PROJECT_GROUPS.map(({ workbookUrl }) => workbookUrl)).size).toBe(4)
  })

  it("keeps rehearsal evidence internally consistent", () => {
    expect(UNIT01_REHEARSAL_EVIDENCE.netIncome).toBeCloseTo(
      UNIT01_REHEARSAL_EVIDENCE.totalRevenue - UNIT01_REHEARSAL_EVIDENCE.totalExpenses,
      2,
    )
    expect(UNIT01_REHEARSAL_EVIDENCE.totalDebits).toBe(UNIT01_REHEARSAL_EVIDENCE.totalCredits)
  })
})
