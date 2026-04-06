import { describe, it, expect } from "vitest"
import { HelpCircle } from "lucide-react"
import type { LessonPhaseName } from "@/types/lesson"
import {
  PHASE_ICONS,
  PHASE_COLORS,
  PHASE_DESCRIPTIONS,
  getPhaseIcon,
  getPhaseColor,
  getPhaseDescription,
} from "../phase-config"

const STANDARD_PHASES: LessonPhaseName[] = [
  "Hook",
  "Introduction",
  "Guided Practice",
  "Independent Practice",
  "Assessment",
  "Closing",
]

const PROJECT_PHASES: LessonPhaseName[] = [
  "Project Launch",
  "Project Milestone",
  "Project Presentation",
]

const ALL_PHASES: LessonPhaseName[] = [...STANDARD_PHASES, ...PROJECT_PHASES]

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

describe("map completeness", () => {
  it("PHASE_ICONS has exactly 9 keys", () => {
    expect(Object.keys(PHASE_ICONS)).toHaveLength(9)
  })

  it("PHASE_COLORS has exactly 9 keys", () => {
    expect(Object.keys(PHASE_COLORS)).toHaveLength(9)
  })

  it("PHASE_DESCRIPTIONS has exactly 9 keys", () => {
    expect(Object.keys(PHASE_DESCRIPTIONS)).toHaveLength(9)
  })
})

describe("getPhaseIcon", () => {
  it("returns a component for every known phase", () => {
    for (const phase of ALL_PHASES) {
      const Icon = getPhaseIcon(phase)
      expect(Icon).toBeTruthy()
      expect(typeof Icon).not.toBe("string")
    }
  })

  it("returns HelpCircle for unknown phase names", () => {
    const Icon = getPhaseIcon("Unknown Phase")
    expect(Icon).toBe(HelpCircle)
  })
})

describe("getPhaseColor", () => {
  it("returns a non-empty string for every known phase", () => {
    for (const phase of ALL_PHASES) {
      const color = getPhaseColor(phase)
      expect(typeof color).toBe("string")
      expect(color.length).toBeGreaterThan(0)
    }
  })

  it("returns a non-empty fallback for unknown phase names", () => {
    const color = getPhaseColor("Unknown Phase")
    expect(typeof color).toBe("string")
    expect(color.length).toBeGreaterThan(0)
  })
})

describe("getPhaseDescription", () => {
  it("returns a non-empty string for every known phase", () => {
    for (const phase of ALL_PHASES) {
      const desc = getPhaseDescription(phase)
      expect(typeof desc).toBe("string")
      expect(desc.length).toBeGreaterThan(0)
    }
  })

  it("returns a fallback for unknown phase names", () => {
    const desc = getPhaseDescription("Unknown Phase")
    expect(typeof desc).toBe("string")
    expect(desc.length).toBeGreaterThan(0)
  })
})
