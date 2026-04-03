import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, GraduationCap, FileText } from "lucide-react"

const units = [
  { number: "01", title: "Smart Ledger Launch", description: "Self-auditing bookkeeping for angel investors", href: "/student/unit01" },
  { number: "02", title: "Month-End Wizard", description: "Excel automation to reduce closing time", href: "/student/unit02" },
  { number: "03", title: "Three-Statement Storyboard", description: "Integrated financial statements with KPI dashboards", href: "/student/unit03" },
  { number: "04", title: "Data-Driven Café", description: "Statistical analysis and forecasting for operations", href: "/student/unit04" },
  { number: "05", title: "PayDay Simulator", description: "Payroll systems with tax calculations and cash flow", href: "/student/unit05" },
  { number: "06", title: "PriceLab Challenge", description: "Cost-Volume-Profit analysis and competitive pricing", href: "/student/unit06" },
  { number: "07", title: "Inventory Accounting", description: "Inventory valuation methods and strategic decision-making", href: "/student/unit07" },
  { number: "08", title: "Fixed Assets and Depreciation", description: "Depreciation methods and fixed asset tracking", href: "/student/unit08" },
]

export default function StudentHubPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="mb-8 space-y-2">
        <Badge variant="outline" className="text-sm">Student Textbook</Badge>
        <h1 className="text-3xl font-bold">Math for Business Operations</h1>
        <p className="text-muted-foreground text-base">
          Eight hands-on units plus a capstone project. Each unit builds real
          accounting and Excel skills through business scenarios.
        </p>
      </div>

      {/* Semester 1 */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-primary" />
          Semester 1 — Foundations & Automation
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {units.slice(0, 4).map((unit) => (
            <Link key={unit.number} href={unit.href} className="block">
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Unit {unit.number}: {unit.title}
                  </CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary flex items-center gap-1">
                    Open unit <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Semester 2 */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-accent" />
          Semester 2 — Operations & Strategy
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {units.slice(4).map((unit) => (
            <Link key={unit.number} href={unit.href} className="block">
              <Card className="hover:shadow-md transition-shadow h-full">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Unit {unit.number}: {unit.title}
                  </CardTitle>
                  <CardDescription>{unit.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-sm text-primary flex items-center gap-1">
                    Open unit <ArrowRight className="h-3 w-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Capstone & Reference */}
      <section className="mb-8 space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <FileText className="h-5 w-5 text-muted-foreground" />
          Capstone & Reference
        </h2>
        <div className="grid gap-3 sm:grid-cols-3">
          <Link href="/capstone" className="block">
            <Card className="hover:shadow-md transition-shadow h-full border-purple-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Capstone Project</CardTitle>
                <CardDescription>Investor-ready business plan and model</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary flex items-center gap-1">
                  View project <ArrowRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/backmatter/glossary" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Bilingual Glossary</CardTitle>
                <CardDescription>Study terms in English and Chinese</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary flex items-center gap-1">
                  Open glossary <ArrowRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
          <Link href="/backmatter/index" className="block">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">Subject Index</CardTitle>
                <CardDescription>Find any page or term by keyword</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-sm text-primary flex items-center gap-1">
                  Open index <ArrowRight className="h-3 w-3" />
                </span>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <div className="text-center pt-4">
        <Button asChild size="lg">
          <Link href="/student/unit01">
            Start with Unit 1 <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
