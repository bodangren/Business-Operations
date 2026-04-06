import { describe, it, expect } from "vitest"
import { PHASE_ICONS, PHASE_COLORS, PHASE_DESCRIPTIONS } from "../phase-config"

const STANDARD_PHASES = [
  "Hook",
  "Introduction",
  "Guided Practice",
  "Independent Practice",
  "Assessment",
  "Closing",
]

const PROJECT_PHASES = [
  "Project Launch",
  "Project Milestone",
  "Project Presentation",
]

const ALL_PHASES = [...STANDARD_PHASES, ...PROJECT_PHASES]

describe("PHASE_ICONS", () => {
  it("contains entries for all 9 phase names", () => {
    for (const phase of ALL_PHASES) {
      expect(PHASE_ICONS[phase]).toBeDefined()
    }
  })

  it("each value is a callable (React component)", () => {
    for (const phase of ALL_PHASES) {
      const icon = PHASE_ICONS[phase]
      expect(icon).toBeTruthy()
      expect(typeof icon).not.toBe("string")
    }
  })
})

describe("PHASE_COLORS", () => {
  it("contains entries for all 9 phase names", () => {
    for (const phase of ALL_PHASES) {
      expect(PHASE_COLORS[phase]).toBeDefined()
    }
  })

  it("each value is a non-empty string", () => {
    for (const phase of ALL_PHASES) {
      expect(typeof PHASE_COLORS[phase]).toBe("string")
      expect(PHASE_COLORS[phase].length).toBeGreaterThan(0)
    }
  })
})

describe("PHASE_DESCRIPTIONS", () => {
  it("contains entries for all 9 phase names", () => {
    for (const phase of ALL_PHASES) {
      expect(PHASE_DESCRIPTIONS[phase]).toBeDefined()
    }
  })

  it("each value is a non-empty string", () => {
    for (const phase of ALL_PHASES) {
      expect(typeof PHASE_DESCRIPTIONS[phase]).toBe("string")
      expect(PHASE_DESCRIPTIONS[phase].length).toBeGreaterThan(0)
    }
  })
})
