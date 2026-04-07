import { UNITS } from "@/data/unit-registry"

export interface SiteLink {
  href: string
  label: string
  description?: string
}

export const FRONTMATTER_LINKS: readonly SiteLink[] = [
  {
    href: "/frontmatter/preface",
    label: "Preface",
    description: "Course overview, six-phase lesson flow, and capstone expectations.",
  },
  {
    href: "/frontmatter/acknowledgments",
    label: "Acknowledgments",
    description: "Author background, course development story, and credits.",
  },
]

export const REFERENCE_LINKS: readonly SiteLink[] = [
  {
    href: "/backmatter/glossary",
    label: "Glossary",
    description: "Bilingual business and accounting vocabulary for self-study.",
  },
  {
    href: "/backmatter/index",
    label: "Index",
    description: "Keyword access to units, lessons, glossary terms, and key pages.",
  },
]

export const TEACHER_RESOURCE_LINKS: readonly SiteLink[] = [
  {
    href: "/teacher",
    label: "Teacher Dashboard",
    description: "Launch point for unit plans, course guidance, and support materials.",
  },
  {
    href: "/teacher/course-overview/pbl-methodology",
    label: "PBL Methodology",
    description: "Project-based learning implementation guidance for the course.",
  },
  {
    href: "/teacher/course-overview/backward-design",
    label: "Backward Design",
    description: "Unit planning framework, assessments, and learning experiences.",
  },
  {
    href: "/teacher/classroom-routines",
    label: "Classroom Routines",
    description: "Operational teaching routines used across the course.",
  },
]

export const STUDENT_UNIT_LINKS: readonly SiteLink[] = UNITS.map((unit) => ({
  href: unit.studentHref,
  label: unit.label,
  description: unit.description,
}))

export const TEACHER_UNIT_LINKS: readonly SiteLink[] = UNITS.map((unit) => ({
  href: unit.teacherHref,
  label: unit.label,
  description: "Teacher lesson plans, pacing, and instructional materials.",
}))
