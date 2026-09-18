import { describe, expect, it } from "vitest"
import {
  CONTINUE_MAX_AGE_DAYS,
  CONTINUE_STORAGE_KEY,
  STUDENT_PRIMARY_NAV,
  clearContinueRecord,
  createContinueRecord,
  getLessonHref,
  getUnitHref,
  isKnownLesson,
  isUnitId,
  parseContinueRecord,
  readContinueRecord,
  resolveContinueLesson,
  resolveCurrentLesson,
  writeContinueRecord,
  type StorageLike,
} from "../student-navigation"
import type { CurrentLessonConfig } from "@/types/student-navigation"

const CONFIG: CurrentLessonConfig = {
  unitId: "unit01",
  lessonId: "lesson01",
  lessonNumber: 1,
  lessonTitle: "Introduction: Sarah's Challenge",
  updatedAt: "2026-09-15",
}

function createMemoryStorage(): StorageLike {
  const store = new Map<string, string>()
  return {
    getItem: (key) => store.get(key) ?? null,
    setItem: (key, value) => {
      store.set(key, value)
    },
    removeItem: (key) => {
      store.delete(key)
    },
  }
}

describe("student primary navigation", () => {
  it("uses Today, Units, Practice, and Resources", () => {
    expect(STUDENT_PRIMARY_NAV.map((item) => item.id)).toEqual([
      "today",
      "units",
      "practice",
      "resources",
    ])
    expect(STUDENT_PRIMARY_NAV.map((item) => item.label)).toEqual([
      "Today",
      "Units",
      "Practice",
      "Resources",
    ])
  })

  it("keeps teacher resources out of the primary student navigation", () => {
    for (const item of STUDENT_PRIMARY_NAV) {
      expect(item.href.startsWith("/teacher")).toBe(false)
      expect(item.href.includes("teacher")).toBe(false)
    }
  })

  it("sends Today to the student hub and Practice to the practice hub", () => {
    expect(STUDENT_PRIMARY_NAV.find((item) => item.id === "today")?.href).toBe("/student")
    expect(STUDENT_PRIMARY_NAV.find((item) => item.id === "practice")?.href).toBe(
      "/student/practice-hub",
    )
  })
})

describe("unit and lesson links", () => {
  it("derives unit links from the canonical registry", () => {
    expect(getUnitHref("unit01")).toBe("/student/unit01")
    expect(getUnitHref("unit08")).toBe("/student/unit08")
  })

  it("derives lesson links from the unit registry", () => {
    expect(getLessonHref("unit01", "lesson01")).toBe("/student/unit01/lesson01")
    expect(getLessonHref("unit08", "lesson10")).toBe("/student/unit08/lesson10")
  })

  it("recognizes known unit ids only", () => {
    expect(isUnitId("unit03")).toBe(true)
    expect(isUnitId("unit09")).toBe(false)
    expect(isUnitId(3)).toBe(false)
  })

  it("validates lessons against the canonical lesson registry", () => {
    expect(isKnownLesson("unit01", "lesson01")).toBe(true)
    expect(isKnownLesson("unit08", "lesson10")).toBe(true)
    expect(isKnownLesson("unit01", "lesson99")).toBe(false)
    expect(isKnownLesson("unit01", "")).toBe(false)
    expect(isKnownLesson("unit09", "lesson01")).toBe(false)
  })
})

describe("current lesson resolution", () => {
  it("resolves the deployment current lesson to a route", () => {
    const resolved = resolveCurrentLesson(CONFIG)
    expect(resolved).toEqual({
      unitId: "unit01",
      lessonId: "lesson01",
      lessonNumber: 1,
      lessonTitle: "Introduction: Sarah's Challenge",
      unitLabel: "Unit 1: Smart Ledger Launch",
      href: "/student/unit01/lesson01",
      source: "deployment",
    })
  })
})

describe("continue records", () => {
  it("creates a record defaulting to Start", () => {
    const record = createContinueRecord(
      {
        unitId: "unit04",
        lessonId: "lesson06",
        lessonNumber: 6,
        lessonTitle: "Forecasting",
      },
      new Date("2026-09-15T12:00:00.000Z"),
    )
    expect(record.section).toBe("start")
    expect(record.lastVisitedAt).toBe("2026-09-15T12:00:00.000Z")
  })

  it("round-trips through storage and ignores corrupt data", () => {
    const storage = createMemoryStorage()
    const record = createContinueRecord(
      { unitId: "unit02", lessonId: "lesson03", lessonNumber: 3, lessonTitle: "Adjusting Entries", section: "do" },
      new Date("2026-09-15T12:00:00.000Z"),
    )

    expect(writeContinueRecord(record, storage)).toBe(true)
    expect(readContinueRecord(storage)).toEqual(record)

    storage.setItem(CONTINUE_STORAGE_KEY, "{ not json")
    expect(readContinueRecord(storage)).toBeNull()

    storage.setItem(CONTINUE_STORAGE_KEY, JSON.stringify({ unitId: "unit99" }))
    expect(readContinueRecord(storage)).toBeNull()

    storage.setItem(
      CONTINUE_STORAGE_KEY,
      JSON.stringify({ ...record, lessonId: "lesson99" }),
    )
    expect(readContinueRecord(storage)).toBeNull()

    clearContinueRecord(storage)
    expect(readContinueRecord(storage)).toBeNull()
  })

  it("validates untrusted values", () => {
    const valid = createContinueRecord({
      unitId: "unit01",
      lessonId: "lesson01",
      lessonNumber: 1,
      lessonTitle: "Intro",
    })
    expect(parseContinueRecord(valid)).toEqual(valid)

    expect(parseContinueRecord(null)).toBeNull()
    expect(parseContinueRecord({ ...valid, section: "middle" })).toBeNull()
    expect(parseContinueRecord({ ...valid, unitId: "unit09" })).toBeNull()
    expect(parseContinueRecord({ ...valid, lessonId: "lesson99" })).toBeNull()
    expect(parseContinueRecord({ ...valid, lessonId: "" })).toBeNull()
    expect(parseContinueRecord({ ...valid, lastVisitedAt: "not-a-date" })).toBeNull()
    expect(parseContinueRecord({ ...valid, lessonNumber: 1.5 })).toBeNull()
  })

  it("prefers a fresh local record over the deployment lesson", () => {
    const record = createContinueRecord(
      { unitId: "unit05", lessonId: "lesson02", lessonNumber: 2, lessonTitle: "Gross Pay", section: "learn" },
      new Date("2026-09-14T12:00:00.000Z"),
    )
    const resolution = resolveContinueLesson(CONFIG, record, {
      now: new Date("2026-09-15T12:00:00.000Z"),
    })
    expect(resolution.source).toBe("local")
    expect(resolution.lesson?.href).toBe("/student/unit05/lesson02#learn")
  })

  it("falls back to the deployment lesson when the record is missing or stale", () => {
    const missing = resolveContinueLesson(CONFIG, null)
    expect(missing.source).toBe("deployment")
    expect(missing.reason).toBe("missing")
    expect(missing.lesson?.href).toBe("/student/unit01/lesson01")

    const stale = createContinueRecord(
      { unitId: "unit05", lessonId: "lesson02", lessonNumber: 2, lessonTitle: "Gross Pay" },
      new Date("2026-01-01T12:00:00.000Z"),
    )
    const staleResolution = resolveContinueLesson(CONFIG, stale, {
      now: new Date("2026-09-15T12:00:00.000Z"),
    })
    expect(staleResolution.source).toBe("deployment")
    expect(staleResolution.reason).toBe("stale")
    expect(staleResolution.lesson?.href).toBe("/student/unit01/lesson01")
  })

  it("uses a 30-day freshness window by default", () => {
    const record = createContinueRecord(
      { unitId: "unit03", lessonId: "lesson01", lessonNumber: 1, lessonTitle: "Storyboard" },
      new Date("2026-09-01T12:00:00.000Z"),
    )
    const now = new Date("2026-09-15T12:00:00.000Z")
    expect(
      resolveContinueLesson(CONFIG, record, { now, maxAgeDays: CONTINUE_MAX_AGE_DAYS }).source,
    ).toBe("local")
    expect(
      resolveContinueLesson(CONFIG, record, {
        now,
        maxAgeDays: 10,
      }).source,
    ).toBe("deployment")
  })

  it("falls back with an invalid reason when the lesson is outside the registry", () => {
    const record = createContinueRecord(
      { unitId: "unit01", lessonId: "lesson99", lessonNumber: 99, lessonTitle: "Missing" },
      new Date("2026-09-14T12:00:00.000Z"),
    )
    const resolution = resolveContinueLesson(CONFIG, record, {
      now: new Date("2026-09-15T12:00:00.000Z"),
    })
    expect(resolution.source).toBe("deployment")
    expect(resolution.reason).toBe("invalid")
    expect(resolution.lesson?.href).toBe("/student/unit01/lesson01")

    const withoutFallback = resolveContinueLesson(null, record, {
      now: new Date("2026-09-15T12:00:00.000Z"),
    })
    expect(withoutFallback).toEqual({ lesson: null, source: "none", reason: "invalid" })
  })

  it("returns no lesson when neither a record nor a config exists", () => {
    const resolution = resolveContinueLesson(null, null)
    expect(resolution).toEqual({ lesson: null, source: "none", reason: "missing" })
  })
})
