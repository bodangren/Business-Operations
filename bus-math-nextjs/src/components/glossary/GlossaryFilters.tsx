"use client"

import { useState, useMemo } from "react"
import type { GlossaryEntry, GlossaryField, UnitId, TopicTag } from "@/types/glossary"
import { filterByKeyword, filterByUnit, filterByTopic, groupAlphabetical, ALL_UNIT_IDS } from "@/lib/glossary"
import { GlossaryCard } from "./GlossaryCard"

const TOPIC_LABELS: Record<TopicTag, string> = {
  accounting: "Accounting",
  bookkeeping: "Bookkeeping",
  depreciation: "Depreciation",
  "financial-statements": "Financial Statements",
  inventory: "Inventory",
  payroll: "Payroll",
  pricing: "Pricing",
  statistics: "Statistics",
  excel: "Excel",
  automation: "Automation",
  "cash-flow": "Cash Flow",
  tax: "Tax",
  audit: "Audit",
  "ratio-analysis": "Ratio Analysis",
  regression: "Regression",
  "data-cleaning": "Data Cleaning",
  "cvp-analysis": "CVP Analysis",
  presentation: "Presentation",
}

const UNIT_LABELS: Record<UnitId, string> = {
  unit01: "Unit 1",
  unit02: "Unit 2",
  unit03: "Unit 3",
  unit04: "Unit 4",
  unit05: "Unit 5",
  unit06: "Unit 6",
  unit07: "Unit 7",
  unit08: "Unit 8",
}

const DISPLAY_FIELDS: { value: GlossaryField; label: string }[] = [
  { value: "term_en", label: "English Term" },
  { value: "term_zh", label: "Chinese Term" },
  { value: "def_en", label: "English Definition" },
  { value: "def_zh", label: "Chinese Definition" },
]

export function GlossaryFilters({ entries }: { entries: GlossaryEntry[] }) {
  const [keyword, setKeyword] = useState("")
  const [selectedUnit, setSelectedUnit] = useState<UnitId | "">("")
  const [selectedTopic, setSelectedTopic] = useState<TopicTag | "">("")
  const [activeLetter, setActiveLetter] = useState<string>("")
  const [primaryField, setPrimaryField] = useState<GlossaryField>("term_en")
  const [secondaryField, setSecondaryField] = useState<GlossaryField>("def_en")

  const filtered = useMemo(() => {
    let result = entries
    if (keyword.trim()) {
      result = filterByKeyword(result, keyword)
    }
    if (selectedUnit) {
      result = filterByUnit(result, selectedUnit as UnitId)
    }
    if (selectedTopic) {
      result = filterByTopic(result, selectedTopic as TopicTag)
    }
    if (activeLetter) {
      result = result.filter(
        (e) => e.term_en.charAt(0).toUpperCase() === activeLetter
      )
    }
    return result
  }, [entries, keyword, selectedUnit, selectedTopic, activeLetter])

  const grouped = useMemo(() => groupAlphabetical(filtered), [filtered])
  const letters = useMemo(
    () => Array.from(grouped.keys()).sort(),
    [grouped]
  )

  const allTopics = useMemo(() => {
    const set = new Set<TopicTag>()
    entries.forEach((e) => e.topics.forEach((t) => set.add(t)))
    return Array.from(set).sort()
  }, [entries])

  return (
    <div className="space-y-6">
      {/* Keyword search */}
      <div>
        <label
          htmlFor="glossary-keyword"
          className="block text-sm font-medium text-muted-foreground mb-1"
        >
          Search terms
        </label>
        <input
          id="glossary-keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Type to filter glossary…"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {/* Unit filter */}
      <div>
        <label
          htmlFor="glossary-unit"
          className="block text-sm font-medium text-muted-foreground mb-1"
        >
          Filter by unit
        </label>
        <select
          id="glossary-unit"
          value={selectedUnit}
          onChange={(e) => {
            setSelectedUnit(e.target.value as UnitId | "")
            setActiveLetter("")
          }}
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <option value="">All units</option>
          {ALL_UNIT_IDS.map((u) => (
            <option key={u} value={u}>
              {UNIT_LABELS[u]}
            </option>
          ))}
        </select>
      </div>

      {/* Topic filter */}
      {allTopics.length > 0 && (
        <div>
          <label
            htmlFor="glossary-topic"
            className="block text-sm font-medium text-muted-foreground mb-1"
          >
            Filter by topic
          </label>
          <select
            id="glossary-topic"
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value as TopicTag | "")
              setActiveLetter("")
            }}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">All topics</option>
            {allTopics.map((t) => (
              <option key={t} value={t}>
                {TOPIC_LABELS[t]}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Display controls */}
      <div className="rounded-lg border bg-card p-4 space-y-3">
        <h3 className="text-sm font-semibold">Study display</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label
              htmlFor="primary-field"
              className="block text-xs text-muted-foreground mb-1"
            >
              Primary field
            </label>
            <select
              id="primary-field"
              value={primaryField}
              onChange={(e) => {
                const val = e.target.value as GlossaryField
                if (val === secondaryField) {
                  setSecondaryField(primaryField)
                }
                setPrimaryField(val)
              }}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {DISPLAY_FIELDS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="secondary-field"
              className="block text-xs text-muted-foreground mb-1"
            >
              Secondary field
            </label>
            <select
              id="secondary-field"
              value={secondaryField}
              onChange={(e) => {
                const val = e.target.value as GlossaryField
                if (val === primaryField) {
                  setPrimaryField(secondaryField)
                }
                setSecondaryField(val)
              }}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {DISPLAY_FIELDS.map((f) => (
                <option key={f.value} value={f.value}>
                  {f.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Alphabetical navigation */}
      <div>
        <h3 className="text-sm font-medium text-muted-foreground mb-2">
          Browse by letter
        </h3>
        <div className="flex flex-wrap gap-1">
          <button
            type="button"
            onClick={() => setActiveLetter("")}
            className={`h-8 w-8 rounded-md text-xs font-medium transition-colors ${
              activeLetter === ""
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-accent"
            }`}
          >
            All
          </button>
          {letters.map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={() =>
                setActiveLetter(activeLetter === letter ? "" : letter)
              }
              className={`h-8 w-8 rounded-md text-xs font-medium transition-colors ${
                activeLetter === letter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {letter}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} of {entries.length} terms
      </p>

      {/* Entries */}
      {filtered.length === 0 ? (
        <p className="text-center py-8 text-muted-foreground">
          No terms match your filters.
        </p>
      ) : (
        <div className="space-y-8">
          {letters
            .filter((l) => activeLetter === "" || l === activeLetter)
            .map((letter) => (
              <div key={letter} id={`letter-${letter}`} className="space-y-3">
                <h2 className="text-2xl font-bold border-b pb-1">
                  {letter}
                </h2>
                <div className="grid gap-3 sm:grid-cols-2">
                  {grouped.get(letter)?.map((entry) => (
                    <GlossaryCard
                      key={entry.id}
                      entry={entry}
                      primaryField={primaryField}
                      secondaryField={secondaryField}
                    />
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}
