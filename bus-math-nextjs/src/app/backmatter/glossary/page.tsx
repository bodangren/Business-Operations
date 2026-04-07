import type { Metadata } from "next"
import { glossaryData } from "@/data/glossary"
import { GlossaryFilters } from "@/components/glossary/GlossaryFilters"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Bilingual Glossary — Math for Business Operations",
  description:
    "Search and study key accounting and business terms in English and Chinese.",
}

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="mb-8 rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm">
          <Badge variant="outline">Reference</Badge>
          <h1 className="mt-3 text-balance text-3xl font-bold">Bilingual Glossary</h1>
          <p className="mt-2 max-w-3xl text-base text-muted-foreground">
            Look up key business and accounting terms. Choose which fields to
            display for self-study — English or Chinese terms and definitions.
          </p>
        </div>

        <GlossaryFilters entries={glossaryData} />
      </div>
    </div>
  )
}
