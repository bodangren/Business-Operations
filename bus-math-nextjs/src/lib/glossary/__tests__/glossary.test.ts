import { describe, it, expect } from "vitest"
import type { GlossaryEntry, UnitId } from "@/types/glossary"
import {
  filterByKeyword,
  filterByUnit,
  filterByTopic,
  groupAlphabetical,
  groupByUnit,
  resolveRelated,
  generateIndexRecords,
  ALL_UNIT_IDS,
} from "../index"

const sampleEntries: GlossaryEntry[] = [
  {
    id: "1",
    slug: "accounting-equation",
    term_en: "Accounting Equation",
    term_zh: "会计方程式",
    def_en: "Assets = Liabilities + Equity; the foundation of double-entry bookkeeping.",
    def_zh: "资产 = 负债 + 所有者权益；复式记账法的基础。",
    units: ["unit01"],
    topics: ["accounting", "bookkeeping"],
    related: ["assets", "liabilities", "equity"],
  },
  {
    id: "2",
    slug: "assets",
    term_en: "Assets",
    term_zh: "资产",
    def_en: "Resources owned by a business that have future economic value.",
    def_zh: "企业拥有的、具有未来经济价值的资源。",
    units: ["unit01", "unit03", "unit08"],
    topics: ["accounting"],
    related: ["accounting-equation", "liabilities"],
  },
  {
    id: "3",
    slug: "depreciation",
    term_en: "Depreciation",
    term_zh: "折旧",
    def_en: "The systematic allocation of a fixed asset's cost over its useful life.",
    def_zh: "将固定资产的成本在其使用寿命内系统分摊的过程。",
    units: ["unit02", "unit08"],
    topics: ["depreciation", "accounting"],
    synonyms: ["amortization"],
  },
  {
    id: "4",
    slug: "trial-balance",
    term_en: "Trial Balance",
    term_zh: "试算平衡表",
    def_en: "A list of all general ledger account balances to verify debits equal credits.",
    def_zh: "列示所有总分类账账户余额的清单，用于验证借方等于贷方。",
    units: ["unit01"],
    topics: ["accounting", "bookkeeping"],
  },
  {
    id: "5",
    slug: "fifo",
    term_en: "FIFO",
    term_zh: "先进先出法",
    def_en: "First-In, First-Out; an inventory method that assumes the oldest items are sold first.",
    def_zh: "先进先出法；一种假设最早购入的存货最先售出的存货计价方法。",
    units: ["unit07"],
    topics: ["inventory", "accounting"],
    synonyms: ["first-in first-out"],
  },
]

describe("filterByKeyword", () => {
  it("returns all entries when keyword is empty", () => {
    expect(filterByKeyword(sampleEntries, "")).toHaveLength(5)
  })

  it("returns all entries when keyword is whitespace", () => {
    expect(filterByKeyword(sampleEntries, "   ")).toHaveLength(5)
  })

  it("matches English term", () => {
    const results = filterByKeyword(sampleEntries, "depreciation")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("depreciation")
  })

  it("matches Chinese term", () => {
    const results = filterByKeyword(sampleEntries, "先进先出法")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("fifo")
  })

  it("matches within English definition", () => {
    const results = filterByKeyword(sampleEntries, "systematic")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("depreciation")
  })

  it("matches within Chinese definition", () => {
    const results = filterByKeyword(sampleEntries, "复式记账")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("accounting-equation")
  })

  it("matches synonyms", () => {
    const results = filterByKeyword(sampleEntries, "amortization")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("depreciation")
  })

  it("is case-insensitive", () => {
    const results = filterByKeyword(sampleEntries, "DEPRECIATION")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("depreciation")
  })

  it("returns empty for no match", () => {
    expect(filterByKeyword(sampleEntries, "xyznotfound")).toHaveLength(0)
  })
})

describe("filterByUnit", () => {
  it("returns entries tagged to the given unit", () => {
    const results = filterByUnit(sampleEntries, "unit01")
    expect(results).toHaveLength(3)
    const slugs = results.map((e) => e.slug).sort()
    expect(slugs).toEqual(["accounting-equation", "assets", "trial-balance"])
  })

  it("returns entries for multi-unit terms", () => {
    const unit08 = filterByUnit(sampleEntries, "unit08")
    expect(unit08).toHaveLength(2)
    const slugs = unit08.map((e) => e.slug).sort()
    expect(slugs).toEqual(["assets", "depreciation"])
  })

  it("returns empty for unit with no terms", () => {
    expect(filterByUnit(sampleEntries, "unit05")).toHaveLength(0)
  })
})

describe("filterByTopic", () => {
  it("filters by a single topic", () => {
    const results = filterByTopic(sampleEntries, "inventory")
    expect(results).toHaveLength(1)
    expect(results[0].slug).toBe("fifo")
  })

  it("returns multiple entries for shared topics", () => {
    const results = filterByTopic(sampleEntries, "accounting")
    expect(results).toHaveLength(5)
  })

  it("returns empty for unused topic", () => {
    expect(filterByTopic(sampleEntries, "payroll")).toHaveLength(0)
  })
})

describe("groupAlphabetical", () => {
  it("groups entries by first letter", () => {
    const groups = groupAlphabetical(sampleEntries)
    expect(groups.get("A")).toHaveLength(2)
    expect(groups.get("D")).toHaveLength(1)
    expect(groups.get("F")).toHaveLength(1)
    expect(groups.get("T")).toHaveLength(1)
  })

  it("sorts entries alphabetically within each group", () => {
    const groups = groupAlphabetical(sampleEntries)
    const aGroup = groups.get("A") ?? []
    expect(aGroup[0].term_en).toBe("Accounting Equation")
    expect(aGroup[1].term_en).toBe("Assets")
  })

  it("returns empty map for empty input", () => {
    const groups = groupAlphabetical([])
    expect(groups.size).toBe(0)
  })
})

describe("groupByUnit", () => {
  it("maps entries to all tagged units", () => {
    const groups = groupByUnit(sampleEntries, ALL_UNIT_IDS)
    expect(groups.get("unit01")).toHaveLength(3)
    expect(groups.get("unit02")).toHaveLength(1)
    expect(groups.get("unit07")).toHaveLength(1)
    expect(groups.get("unit08")).toHaveLength(2)
  })

  it("creates empty arrays for units with no entries", () => {
    const groups = groupByUnit(sampleEntries, ALL_UNIT_IDS)
    expect(groups.get("unit04")).toEqual([])
  })

  it("preserves unit order from the argument", () => {
    const groups = groupByUnit(sampleEntries, ALL_UNIT_IDS)
    const keys = [...groups.keys()]
    expect(keys).toEqual(ALL_UNIT_IDS)
  })
})

describe("resolveRelated", () => {
  it("returns related glossary entries", () => {
    const entry = sampleEntries[0]
    const related = resolveRelated(sampleEntries, entry)
    const relatedSlugs = related.map((e) => e.slug).sort()
    expect(relatedSlugs).toEqual(["assets", "equity", "liabilities"].filter(
      (s) => sampleEntries.some((e) => e.slug === s)
    ).sort())
  })

  it("returns empty array for entry with no related field", () => {
    const entry = sampleEntries[3]
    expect(resolveRelated(sampleEntries, entry)).toEqual([])
  })

  it("returns empty for entry whose related slugs are not in the dataset", () => {
    const entry: GlossaryEntry = {
      ...sampleEntries[0],
      related: ["non-existent-slug"],
    }
    expect(resolveRelated(sampleEntries, entry)).toEqual([])
  })

  it("returns empty for empty entries array", () => {
    const entry = sampleEntries[0]
    expect(resolveRelated([], entry)).toEqual([])
  })
})

describe("generateIndexRecords", () => {
  it("generates glossary records", () => {
    const records = generateIndexRecords(sampleEntries, [], [], [])
    const glossaryRecords = records.filter((r) => r.category === "glossary")
    expect(glossaryRecords).toHaveLength(5)
  })

  it("generates unit records", () => {
    const unitPages = [
      { title: "Unit 1: Smart Ledger Launch", href: "/student/unit01", id: "unit01" as UnitId },
    ]
    const records = generateIndexRecords(sampleEntries, unitPages, [], [])
    const unitRecords = records.filter((r) => r.category === "unit")
    expect(unitRecords).toHaveLength(1)
    expect(unitRecords[0].label).toBe("Unit 1: Smart Ledger Launch")
  })

  it("generates lesson records", () => {
    const lessonPages = [
      { title: "Lesson 1: Intro", href: "/student/unit01/lesson01", unitId: "unit01" as UnitId },
    ]
    const records = generateIndexRecords(sampleEntries, [], lessonPages, [])
    const lessonRecords = records.filter((r) => r.category === "lesson")
    expect(lessonRecords).toHaveLength(1)
  })

  it("generates extra page records", () => {
    const extras = [
      { label: "Capstone", href: "/capstone", category: "capstone" as const },
    ]
    const records = generateIndexRecords(sampleEntries, [], [], extras)
    const capstoneRecords = records.filter((r) => r.category === "capstone")
    expect(capstoneRecords).toHaveLength(1)
  })

  it("sorts all records alphabetically", () => {
    const unitPages = [
      { title: "Unit 1: Smart Ledger Launch", href: "/student/unit01", id: "unit01" as UnitId },
    ]
    const records = generateIndexRecords(sampleEntries, unitPages, [], [])
    for (let i = 1; i < records.length; i++) {
      expect(records[i].label >= records[i - 1].label).toBe(true)
    }
  })

  it("glossary records link to anchor slug", () => {
    const records = generateIndexRecords(sampleEntries, [], [], [])
    const glossaryRecord = records.find((r) => r.slug === "depreciation")
    expect(glossaryRecord?.href).toBe("/backmatter/glossary#depreciation")
  })
})
