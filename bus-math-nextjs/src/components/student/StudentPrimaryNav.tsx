import Link from "next/link"
import { BookOpen, CalendarCheck, Layers, LayoutGrid } from "lucide-react"
import { STUDENT_PRIMARY_NAV } from "@/lib/student-navigation"
import type { StudentPrimaryNavId } from "@/types/student-navigation"
import type React from "react"

const NAV_ICONS: Record<StudentPrimaryNavId, React.ComponentType<{ className?: string }>> = {
  today: CalendarCheck,
  units: LayoutGrid,
  practice: Layers,
  resources: BookOpen,
}

/**
 * The four-destination student-only navigation: Today, Units, Practice, and
 * Resources. Teacher resources are deliberately excluded.
 */
export function StudentPrimaryNav() {
  return (
    <nav aria-label="Student" className="border-b border-border/60">
      <ul className="flex flex-wrap items-center gap-1 py-2">
        {STUDENT_PRIMARY_NAV.map((item) => {
          const Icon = NAV_ICONS[item.id]
          return (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium text-foreground/70 transition-colors hover:bg-muted hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
