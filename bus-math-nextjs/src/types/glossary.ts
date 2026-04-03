export type UnitId =
  | "unit01"
  | "unit02"
  | "unit03"
  | "unit04"
  | "unit05"
  | "unit06"
  | "unit07"
  | "unit08"

export type TopicTag =
  | "accounting"
  | "bookkeeping"
  | "depreciation"
  | "financial-statements"
  | "inventory"
  | "payroll"
  | "pricing"
  | "statistics"
  | "excel"
  | "automation"
  | "cash-flow"
  | "tax"
  | "audit"
  | "ratio-analysis"
  | "regression"
  | "data-cleaning"
  | "cvp-analysis"
  | "presentation"

export type GlossaryField = "term_en" | "term_zh" | "def_en" | "def_zh"

export interface GlossaryEntry {
  id: string
  slug: string
  term_en: string
  term_zh: string
  def_en: string
  def_zh: string
  units: UnitId[]
  lessons?: string[]
  topics: TopicTag[]
  synonyms?: string[]
  related?: string[]
  examples?: string[]
}

export interface IndexRecord {
  label: string
  slug: string
  href: string
  category: "glossary" | "unit" | "lesson" | "practice-test" | "capstone" | "frontmatter" | "backmatter"
  unitId?: UnitId
  description?: string
}
