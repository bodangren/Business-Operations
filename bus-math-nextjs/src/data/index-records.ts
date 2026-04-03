import type { IndexRecord, UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import { generateIndexRecords } from "@/lib/glossary"

const unitPages: Array<{ title: string; href: string; id: UnitId }> = [
  { title: "Unit 1: Smart Ledger Launch", href: "/student/unit01", id: "unit01" },
  { title: "Unit 2: Month-End Wizard", href: "/student/unit02", id: "unit02" },
  { title: "Unit 3: Three-Statement Storyboard", href: "/student/unit03", id: "unit03" },
  { title: "Unit 4: Data-Driven Café", href: "/student/unit04", id: "unit04" },
  { title: "Unit 5: PayDay Simulator", href: "/student/unit05", id: "unit05" },
  { title: "Unit 6: PriceLab Challenge", href: "/student/unit06", id: "unit06" },
  { title: "Unit 7: Inventory Accounting", href: "/student/unit07", id: "unit07" },
  { title: "Unit 8: Fixed Assets and Depreciation", href: "/student/unit08", id: "unit08" },
]

const lessonPages: Array<{ title: string; href: string; unitId?: UnitId }> = [
]

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
  lessonPages,
  extraPages
)
