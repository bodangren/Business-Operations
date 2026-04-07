import type { GlossaryEntry, GlossaryField, TopicTag } from "@/types/glossary"
import { Badge } from "@/components/ui/badge"

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

function getField(entry: GlossaryEntry, field: GlossaryField): string {
  switch (field) {
    case "term_en":
      return entry.term_en
    case "term_zh":
      return entry.term_zh
    case "def_en":
      return entry.def_en
    case "def_zh":
      return entry.def_zh
  }
}

export function GlossaryCard({
  entry,
  primaryField,
  secondaryField,
}: {
  entry: GlossaryEntry
  primaryField: GlossaryField
  secondaryField: GlossaryField
}) {
  const primary = getField(entry, primaryField)
  const secondary = getField(entry, secondaryField)

  return (
    <div
      id={entry.slug}
      className="rounded-lg border bg-card p-4 shadow-sm space-y-2 scroll-mt-20"
    >
      <div className="space-y-1">
        <h3 className="text-base font-semibold leading-tight">{primary}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {secondary}
        </p>
      </div>

      <div className="flex flex-wrap gap-1 pt-1">
        {entry.units.map((unit) => (
          <Badge key={unit} variant="secondary" className="text-xs">
            {unit.replace("unit", "U")}
          </Badge>
        ))}
        {entry.topics.slice(0, 2).map((topic) => (
          <Badge key={topic} variant="outline" className="text-xs">
            {TOPIC_LABELS[topic] ?? topic}
          </Badge>
        ))}
        {entry.topics.length > 2 && (
          <Badge variant="outline" className="text-xs">
            +{entry.topics.length - 2}
          </Badge>
        )}
      </div>
    </div>
  )
}
