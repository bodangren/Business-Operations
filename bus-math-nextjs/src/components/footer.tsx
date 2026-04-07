import Link from "next/link"
import { Calculator, TrendingUp } from "lucide-react"
import {
  FRONTMATTER_LINKS,
  REFERENCE_LINKS,
  TEACHER_RESOURCE_LINKS,
} from "@/lib/site-navigation"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-[1.35fr_repeat(3,minmax(0,1fr))]">
          <div className="rounded-2xl border border-primary/10 bg-card/80 p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-2 py-1">
                <Calculator className="h-4 w-4 text-primary" />
                <TrendingUp className="h-3.5 w-3.5 text-accent" />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold leading-tight">
                  Math for Business Operations
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Interactive textbook for Grade 12 business mathematics with Excel integration,
                  bilingual reference tools, and teacher-facing implementation support.
                </p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              © 2025–2026 Daniel Bodanske. All rights reserved.
            </p>
          </div>

          <FooterColumn label="Frontmatter" links={FRONTMATTER_LINKS} />
          <FooterColumn label="Reference" links={REFERENCE_LINKS} />
          <FooterColumn label="Teacher Resources" links={TEACHER_RESOURCE_LINKS} />
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({
  label,
  links,
}: {
  label: string
  links: readonly { href: string; label: string }[]
}) {
  return (
    <section className="rounded-2xl border border-border/60 bg-card/70 p-5 shadow-sm">
      <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </h4>
      <nav aria-label={label} className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </section>
  )
}
