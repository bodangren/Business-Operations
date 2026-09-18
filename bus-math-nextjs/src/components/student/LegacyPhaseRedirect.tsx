"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { getStudentLessonSection, resolveLegacyPhaseTarget } from "@/lib/student-lesson"
import { withBasePath } from "@/lib/paths"

export interface LegacyPhaseRedirectProps {
  /** App-relative legacy phase route, for example `/student/unit01/lesson01/phase-1`. */
  legacyPath: string
  /** Optional override for the fallback link label. */
  fallbackLabel?: string
}

/**
 * Static-safe compatibility page for a legacy `/phase-N` route. It resolves the
 * phase to its lesson section, sends the client to that anchor when JavaScript
 * is available, and always renders a base-path-safe fallback link. It renders
 * a plain `div` (not `main`) because the root layout already owns the page's
 * single `main` landmark.
 */
export function LegacyPhaseRedirect({ legacyPath, fallbackLabel }: LegacyPhaseRedirectProps) {
  const router = useRouter()
  const target = resolveLegacyPhaseTarget(legacyPath)
  const section = target ? getStudentLessonSection(target.sectionId) : null
  const clientHref = target ? `${target.lessonHref}/#${target.sectionAnchor}` : "/student"
  const fallbackHref = withBasePath(clientHref)

  useEffect(() => {
    router.replace(clientHref)
  }, [router, clientHref])

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <div className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">This lesson page has moved</h1>
        <p className="text-muted-foreground">
          {section
            ? `Lesson phases now share one page. This phase is part of the ${section.label} section.`
            : "The lesson phases now share one page."}
        </p>
        <a
          href={fallbackHref}
          className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          {fallbackLabel ?? (section ? `Continue to ${section.label}` : "Back to Student Hub")}
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  )
}
