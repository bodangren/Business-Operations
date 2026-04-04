import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import { glossaryData } from "@/data/glossary"
import type { UnitId } from "@/types/glossary"
import { Badge } from "@/components/ui/badge"

const TOPIC_LABELS: Record<string, string> = {
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

export function UnitVocabulary({ unitId }: { unitId: UnitId; unitSequence: number }) {
  const unitTerms = glossaryData.filter((entry) => entry.units.includes(unitId))

  if (unitTerms.length === 0) return null

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Key Vocabulary
        </h3>
        <Link
          href={`/backmatter/glossary`}
          className="text-sm text-primary hover:underline flex items-center gap-1"
        >
          Open full glossary <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {unitTerms.map((term) => (
          <Link
            key={term.id}
            href={`/backmatter/glossary#${term.slug}`}
            className="block rounded-lg border bg-card p-3 shadow-sm hover:bg-accent transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="space-y-0.5 min-w-0">
                <p className="text-sm font-medium">{term.term_en}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {term.def_en}
                </p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {term.term_zh}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {term.topics.slice(0, 2).map((topic) => (
                <Badge key={topic} variant="outline" className="text-xs">
                  {TOPIC_LABELS[topic] ?? topic}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/30 p-4 space-y-2">
        <p className="text-sm font-medium">Study these terms</p>
        <p className="text-xs text-muted-foreground">
          These {unitTerms.length} terms appear across this unit. Use the{" "}
          <Link
            href="/backmatter/glossary"
            className="text-primary hover:underline"
          >
            bilingual glossary
          </Link>{" "}
          to review them, or start a{" "}
          <Link
            href={`/student/practice-hub?unit=${unitId}`}
            className="text-primary hover:underline"
          >
            vocabulary study session
          </Link>{" "}
          to practice with flashcards, matching, and speed round.
        </p>
      </div>
    </div>
  )
}
