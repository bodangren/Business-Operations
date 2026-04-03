"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import type { IndexRecord } from "@/types/glossary"

const CATEGORY_LABELS: Record<IndexRecord["category"], string> = {
  glossary: "Glossary",
  unit: "Unit",
  lesson: "Lesson",
  "practice-test": "Practice Test",
  capstone: "Capstone",
  frontmatter: "Frontmatter",
  backmatter: "Backmatter",
}

const CATEGORY_COLORS: Record<IndexRecord["category"], string> = {
  glossary: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  unit: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  lesson: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  "practice-test": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
  capstone: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  frontmatter: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
  backmatter: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
}

export function IndexFilter({ records }: { records: IndexRecord[] }) {
  const [keyword, setKeyword] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<IndexRecord["category"] | "">("")

  const filtered = useMemo(() => {
    let result = records
    if (keyword.trim()) {
      const lower = keyword.toLowerCase()
      result = result.filter(
        (r) =>
          r.label.toLowerCase().includes(lower) ||
          (r.description ?? "").toLowerCase().includes(lower)
      )
    }
    if (selectedCategory) {
      result = result.filter((r) => r.category === selectedCategory)
    }
    return result
  }, [records, keyword, selectedCategory])

  const categories = useMemo(() => {
    const set = new Set<IndexRecord["category"]>()
    records.forEach((r) => set.add(r.category))
    return Array.from(set).sort()
  }, [records])

  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label
          htmlFor="index-keyword"
          className="block text-sm font-medium text-muted-foreground mb-1"
        >
          Search index
        </label>
        <input
          id="index-keyword"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Type to search the index…"
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <div>
          <label
            htmlFor="index-category"
            className="block text-sm font-medium text-muted-foreground mb-1"
          >
            Filter by category
          </label>
          <select
            id="index-category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as IndexRecord["category"] | "")}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">All categories</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {CATEGORY_LABELS[c]}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Results count */}
      <p className="text-sm text-muted-foreground">
        {filtered.length} of {records.length} entries
      </p>

      {/* Results */}
      {filtered.length === 0 ? (
        <p className="text-center py-8 text-muted-foreground">
          No entries match your search.
        </p>
      ) : (
        <div className="space-y-2">
          {filtered.map((record, i) => (
            <Link
              key={`${record.href}-${i}`}
              href={record.href}
              className="block rounded-lg border bg-card p-3 shadow-sm hover:bg-accent transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5 min-w-0">
                  <p className="text-sm font-medium truncate">{record.label}</p>
                  {record.description && (
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {record.description}
                    </p>
                  )}
                </div>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                    CATEGORY_COLORS[record.category]
                  }`}
                >
                  {CATEGORY_LABELS[record.category]}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
