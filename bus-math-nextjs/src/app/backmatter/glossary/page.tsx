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
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8 space-y-2">
          <Badge variant="outline">Reference</Badge>
          <h1 className="text-3xl font-bold mt-2">Bilingual Glossary</h1>
          <p className="text-muted-foreground text-base">
            Look up key business and accounting terms. Choose which fields to
            display for self-study — English or Chinese terms and definitions.
          </p>
        </div>

        <GlossaryFilters entries={glossaryData} />
      </div>
    </div>
  )
}
