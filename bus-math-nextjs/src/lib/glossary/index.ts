import type { GlossaryEntry, IndexRecord, UnitId, TopicTag } from "@/types/glossary"

export function filterByKeyword(entries: GlossaryEntry[], keyword: string): GlossaryEntry[] {
  if (!keyword.trim()) return entries
  const lower = keyword.toLowerCase()
  return entries.filter((e) => {
    const haystack = [
      e.term_en,
      e.term_zh,
      e.def_en,
      e.def_zh,
      ...(e.synonyms ?? []),
    ]
      .join(" ")
      .toLowerCase()
    return haystack.includes(lower)
  })
}

export function filterByUnit(entries: GlossaryEntry[], unit: UnitId): GlossaryEntry[] {
  return entries.filter((e) => e.units.includes(unit))
}

export function filterByTopic(entries: GlossaryEntry[], topic: TopicTag): GlossaryEntry[] {
  return entries.filter((e) => e.topics.includes(topic))
}

export function groupAlphabetical(entries: GlossaryEntry[]): Map<string, GlossaryEntry[]> {
  const map = new Map<string, GlossaryEntry[]>()
  const sorted = [...entries].sort((a, b) => a.term_en.localeCompare(b.term_en))
  for (const entry of sorted) {
    const letter = entry.term_en.charAt(0).toUpperCase()
    const group = map.get(letter) ?? []
    group.push(entry)
    map.set(letter, group)
  }
  return map
}

export function groupByUnit(
  entries: GlossaryEntry[],
  unitOrder: UnitId[]
): Map<UnitId, GlossaryEntry[]> {
  const map = new Map<UnitId, GlossaryEntry[]>()
  for (const unit of unitOrder) {
    map.set(unit, [])
  }
  for (const entry of entries) {
    for (const unit of entry.units) {
      const group = map.get(unit) ?? []
      group.push(entry)
      map.set(unit, group)
    }
  }
  return map
}

export function resolveRelated(
  entries: GlossaryEntry[],
  entry: GlossaryEntry
): GlossaryEntry[] {
  if (!entry.related || entry.related.length === 0) return []
  const slugSet = new Set(entry.related)
  return entries.filter((e) => slugSet.has(e.slug))
}

export function generateIndexRecords(
  glossaryEntries: GlossaryEntry[],
  unitPages: Array<{ title: string; href: string; id: UnitId }>,
  lessonPages: Array<{ title: string; href: string; unitId?: UnitId }>,
  extraPages: Array<{
    label: string
    href: string
    category: IndexRecord["category"]
    description?: string
  }>
): IndexRecord[] {
  const records: IndexRecord[] = []

  for (const entry of glossaryEntries) {
    records.push({
      label: entry.term_en,
      slug: entry.slug,
      href: `/backmatter/glossary#${entry.slug}`,
      category: "glossary",
      description: entry.def_en,
    })
  }

  for (const unit of unitPages) {
    records.push({
      label: unit.title,
      slug: unit.id,
      href: unit.href,
      category: "unit",
      unitId: unit.id,
    })
  }

  for (const lesson of lessonPages) {
    records.push({
      label: lesson.title,
      slug: lesson.href.replace(/\//g, "-"),
      href: lesson.href,
      category: "lesson",
      unitId: lesson.unitId,
    })
  }

  for (const page of extraPages) {
    records.push({
      label: page.label,
      slug: page.href.replace(/\//g, "-"),
      href: page.href,
      category: page.category,
      description: page.description,
    })
  }

  return records.sort((a, b) => a.label.localeCompare(b.label))
}

export const ALL_UNIT_IDS: UnitId[] = [
  "unit01",
  "unit02",
  "unit03",
  "unit04",
  "unit05",
  "unit06",
  "unit07",
  "unit08",
]
