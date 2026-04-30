import Link from "next/link"
import { Calculator, TrendingUp } from "lucide-react"
import {
  FRONTMATTER_LINKS,
  REFERENCE_LINKS,
  TEACHER_RESOURCE_LINKS,
} from "@/lib/site-navigation"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border/40 bg-background pt-16 pb-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex shrink-0 items-center gap-1 rounded-md velocity-gradient text-white px-2 py-1.5 shadow-[0_4px_10px_rgba(99,91,255,0.2)]">
                <Calculator className="h-4 w-4" />
                <TrendingUp className="h-3.5 w-3.5" />
              </div>
              <h3 className="text-xl font-semibold leading-tight text-secondary tracking-tight">
                Math for Business Operations
              </h3>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed font-light max-w-sm">
              Interactive textbook for Grade 12 business mathematics with Excel integration,
              bilingual reference tools, and teacher-facing implementation support.
            </p>
            <div className="pt-4 text-[10px] font-bold text-muted-foreground/50 uppercase tracking-[0.2em]">
              © 2025–2026 Daniel Bodanske. All rights reserved.
            </div>
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
    <section className="space-y-6">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground/60">
        {label}
      </h4>
      <nav aria-label={label} className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary"
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
