import type { IndexRecord, UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import { generateIndexRecords } from "@/lib/glossary"
import { UNITS } from "@/data/unit-registry"
import { LESSON_PAGES } from "@/data/lesson-registry"

const unitPages: Array<{ title: string; href: string; id: UnitId }> = UNITS.map((u) => ({
  title: u.label,
  href: u.studentHref,
  id: u.unitId,
}))

const extraPages: Array<{
  label: string
  href: string
  category: IndexRecord["category"]
  description?: string
}> = [
  {
    label: "Preface",
    href: "/frontmatter/preface",
    category: "frontmatter",
    description: "Course introduction and reading guide",
  },
  {
    label: "Acknowledgments",
    href: "/frontmatter/acknowledgments",
    category: "frontmatter",
    description: "Credits and acknowledgments",
  },
  {
    label: "Capstone Project",
    href: "/capstone",
    category: "capstone",
    description: "Year-end capstone project",
  },
  {
    label: "Bilingual Glossary",
    href: "/backmatter/glossary",
    category: "backmatter",
    description: "Study key terms in English and Chinese",
  },
  {
    label: "Subject Index",
    href: "/backmatter/index",
    category: "backmatter",
    description: "Search replacement — find any page by keyword",
  },
]

export const indexRecords: IndexRecord[] = generateIndexRecords(
  glossaryData,
  unitPages,
  LESSON_PAGES,
  extraPages
)
