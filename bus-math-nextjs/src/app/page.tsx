import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Calculator, CheckSquare, Dice6, TrendingUp, BarChart3 } from "lucide-react"
import { UNITS } from "@/data/unit-registry"
import {
  FRONTMATTER_LINKS,
  REFERENCE_LINKS,
  TEACHER_RESOURCE_LINKS,
} from "@/lib/site-navigation"

const features = [
  {
    icon: BookOpen,
    title: "Interactive Spreadsheets", 
    description: "Work with live Excel-like interfaces directly in your browser"
  },
  {
    icon: Calculator,
    title: "Financial Calculators",
    description: "Built-in calculators for NPV, loan payments, and more"
  },
  {
    icon: CheckSquare,
    title: "Comprehension Checks",
    description: "Immediate feedback on your understanding after each section"
  },
  {
    icon: Dice6,
    title: "Dynamic Exercises", 
    description: "Practice with different scenarios and data every time"
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning journey and identify areas to review"
  },
  {
    icon: BarChart3,
    title: "Bilingual Glossary & Index",
    description: "Study key terms in English and Chinese, find any page by keyword"
  }
]

const UNIT_META = [
  { duration: "2-3 weeks", difficulty: "Beginner" },
  { duration: "2-3 weeks", difficulty: "Intermediate" },
  { duration: "3-4 weeks", difficulty: "Intermediate" },
  { duration: "2-3 weeks", difficulty: "Intermediate" },
  { duration: "2-3 weeks", difficulty: "Advanced" },
  { duration: "3-4 weeks", difficulty: "Advanced" },
  { duration: "2-3 weeks", difficulty: "Advanced" },
  { duration: "3-4 weeks", difficulty: "Expert" },
] as const

const getDifficultyVariant = (
  difficulty: string,
): "default" | "secondary" | "outline" | "destructive" => {
  switch (difficulty) {
    case "Beginner":
      return "default"
    case "Intermediate":
      return "secondary"
    case "Advanced":
      return "outline"
    case "Expert":
      return "destructive"
    default:
      return "outline"
  }
}

export default function Home() {
  return (
    <div className="flex-1">
      <section className="bg-gradient-to-br from-background via-primary/5 to-accent/5 py-12 sm:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:gap-12">
            <div className="mx-auto max-w-2xl space-y-6 lg:mx-0">
              <div className="flex items-center gap-3">
                <Calculator className="h-8 w-8 text-primary" />
                <BarChart3 className="h-7 w-7 text-accent" />
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-4">
                <Badge className="bg-primary/10 px-3 py-1 text-primary hover:bg-primary/10">
                  Applied Accounting with Excel
                </Badge>
                <h1 className="max-w-xl text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Math for Business Operations
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Master accounting principles, spreadsheet modeling, and entrepreneurship
                  through hands-on Excel projects and real-world business applications.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  className="gradient-financial text-primary-foreground shadow-lg transition-shadow hover:shadow-xl"
                  size="lg"
                >
                  <Link href="/frontmatter/preface">Start Reading</Link>
                </Button>
                <Button
                  asChild
                  className="border-primary/30 bg-background/80 hover:bg-primary/10"
                  size="lg"
                  variant="outline"
                >
                  <Link href="/student/unit01">Jump to Unit 1</Link>
                </Button>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                <Card className="border-primary/15 bg-card/80 shadow-sm">
                  <CardContent className="px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Course Format
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Eight project-driven units plus a capstone build.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/15 bg-card/80 shadow-sm">
                  <CardContent className="px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Reference Tools
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Bilingual glossary, searchable index, and teacher guides.
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-primary/15 bg-card/80 shadow-sm">
                  <CardContent className="px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Core Skills
                    </p>
                    <p className="mt-2 text-sm font-medium">
                      Accounting, Excel automation, forecasting, and decision-making.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[20rem] sm:max-w-sm">
                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl opacity-40" />
                <div className="relative rounded-[2rem] border border-border/60 bg-white/80 p-4 shadow-2xl shadow-primary/10">
                  <Image
                    src="/cover.png"
                    alt="Math for Business Operations textbook cover showing business charts and Excel spreadsheets"
                    width={400}
                    height={533}
                    className="h-auto w-full rounded-[1.25rem] border border-border/50 shadow-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/10 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Course Structure
            </h2>
            <p className="text-xl text-muted-foreground">
              Eight hands-on units plus a comprehensive capstone project
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {UNITS.map((unit, index) => (
              <Card
                key={unit.unitId}
                className="border-border/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <Badge variant="outline">{`Unit ${unit.number}`}</Badge>
                    <Badge variant={getDifficultyVariant(UNIT_META[index].difficulty)}>
                      {UNIT_META[index].difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    <Link
                      href={unit.studentHref}
                      className="transition-colors hover:text-primary"
                    >
                      {unit.label}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {unit.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between gap-3 text-sm">
                    <span className="font-medium text-muted-foreground">
                      {UNIT_META[index].duration}
                    </span>
                    <Link
                      className="font-semibold text-primary hover:underline"
                      href={unit.studentHref}
                    >
                      Open Unit
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <LinkListCard
              accentClassName="border-primary/20"
              description="Course launch pages, welcome materials, and orientation."
              headerClassName="border-b border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10"
              links={FRONTMATTER_LINKS}
              title="Getting Started"
            />
            <LinkListCard
              accentClassName="border-accent/20"
              description="Launch the teacher-facing guidance and planning materials."
              headerClassName="border-b border-accent/20 bg-gradient-to-r from-accent/5 to-accent/10"
              links={TEACHER_RESOURCE_LINKS.slice(0, 3)}
              title="Teacher Resources"
            />
            <LinkListCard
              accentClassName="border-border/50"
              description="Reference tools for key terms and cross-course navigation."
              headerClassName="border-b border-border/50 bg-gradient-to-r from-muted/40 to-background"
              links={REFERENCE_LINKS}
              title="Reference Materials"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-muted/10 via-background to-muted/5 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
              Interactive Learning Features
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need for hands-on business math education with Excel integration
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group border-border/50 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 transition-colors group-hover:from-primary/20 group-hover:to-accent/20">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function LinkListCard({
  title,
  description,
  links,
  accentClassName,
  headerClassName,
}: {
  title: string
  description: string
  links: readonly { href: string; label: string }[]
  accentClassName: string
  headerClassName: string
}) {
  return (
    <Card className={accentClassName}>
      <CardHeader className={headerClassName}>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        {links.map((link) => (
          <Link
            className="block rounded-md p-2 text-sm transition-colors hover:bg-primary/5 hover:text-primary"
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </CardContent>
    </Card>
  )
}
