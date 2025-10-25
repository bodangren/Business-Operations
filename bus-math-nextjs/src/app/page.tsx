import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, CheckSquare, Dice6, TrendingUp, Search, BarChart3 } from "lucide-react"

const units = [
  {
    title: "Unit 1: Smart Ledger Launch",
    description: "Build a comprehensive accounting ledger system in Excel",
    duration: "2-3 weeks",
    difficulty: "Beginner",
    href: "/units/unit01-smart-ledger"
  },
  {
    title: "Unit 2: Month-End Wizard",
    description: "Automate month-end closing procedures and reports",
    duration: "2-3 weeks", 
    difficulty: "Intermediate",
    href: "/units/unit02-month-end-wizard"
  },
  {
    title: "Unit 3: Three Statement Storyboard",
    description: "Create integrated financial statements that tell a story",
    duration: "3-4 weeks",
    difficulty: "Intermediate", 
    href: "/units/unit03-three-statement-storyboard"
  },
  {
    title: "Unit 4: Data-Driven Cafe",
    description: "Analyze cafe operations using data visualization",
    duration: "2-3 weeks",
    difficulty: "Intermediate",
    href: "/units/unit04-data-driven-cafe"
  },
  {
    title: "Unit 5: Payday Simulator", 
    description: "Model payroll systems and employee compensation",
    duration: "2-3 weeks",
    difficulty: "Advanced",
    href: "/units/unit05-payday-simulator"
  },
  {
    title: "Unit 6: PriceLab Challenge",
    description: "Experiment with pricing strategies and market analysis", 
    duration: "3-4 weeks",
    difficulty: "Advanced",
    href: "/units/unit06-pricelab-challenge"
  },
  {
    title: "Unit 7: Asset Inventory Tracker",
    description: "Build comprehensive asset management systems",
    duration: "2-3 weeks", 
    difficulty: "Advanced",
    href: "/units/unit07-asset-inventory-tracker"
  },
  {
    title: "Unit 8: Integrated Model Sprint",
    description: "Combine all skills in a comprehensive business model",
    duration: "3-4 weeks",
    difficulty: "Expert", 
    href: "/units/unit08-integrated-model-sprint"
  }
]

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
    icon: Search,
    title: "Smart Search",
    description: "Find concepts, formulas, and examples instantly"
  }
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner": return "text-green-700 dark:text-green-300 bg-green-50/50 dark:bg-green-950/20 border-green-200/50 dark:border-green-800/30"
    case "Intermediate": return "text-primary bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/30" 
    case "Advanced": return "text-orange-700 dark:text-orange-300 bg-orange-50/50 dark:bg-orange-950/20 border-orange-200/50 dark:border-orange-800/30"
    case "Expert": return "text-red-700 dark:text-red-300 bg-red-50/50 dark:bg-red-950/20 border-red-200/50 dark:border-red-800/30"
    default: return "text-muted-foreground bg-muted/30 border-border/30"
  }
}

export default function Home() {
  return (
    <main className="flex-1">
        {/* Hero section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-background via-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-8 w-8 text-primary" />
                  <BarChart3 className="h-7 w-7 text-accent" />
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                  Math for Business Operations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Master accounting principles, spreadsheet modeling, and entrepreneurship through 
                  hands-on Excel projects and real-world business applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gradient-financial text-primary-foreground shadow-lg hover:shadow-xl transition-shadow">
                    <Link href="/frontmatter/preface">Start Reading</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-primary/30 hover:bg-primary/10">
                    <Link href="/student/unit01">Jump to Unit 1</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-lg blur-xl opacity-30"></div>
                  <Image
                    src="./cover.png"
                    alt="Math for Business Operations textbook cover showing business charts and Excel spreadsheets"
                    width={400}
                    height={533}
                    className="relative w-full h-auto rounded-lg shadow-2xl border border-border/50"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-muted/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Course Structure</h2>
              <p className="text-xl text-muted-foreground">Eight hands-on units plus a comprehensive capstone project</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {units.map((unit, index) => (
                <Card key={index} className="card-ledger hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link href={unit.href} className="hover:text-primary transition-colors">
                        {unit.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground font-medium">{unit.duration}</span>
                      <span className={`px-2 py-1 rounded-md border text-xs font-medium ${getDifficultyColor(unit.difficulty)}`}>
                        {unit.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-statement border-primary/20">
                <CardHeader className="excel-header">
                  <CardTitle className="text-primary">Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/frontmatter/preface" className="block text-sm hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                    Preface
                  </Link>
                  <Link href="/frontmatter/acknowledgments" className="block text-sm hover:text-primary transition-colors p-2 rounded hover:bg-primary/5">
                    Acknowledgments
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-statement border-accent/20">
                <CardHeader className="bg-gradient-to-r from-accent/5 to-accent/10 border-b border-accent/20">
                  <CardTitle className="text-accent">Capstone Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/capstone" className="block text-sm hover:text-accent transition-colors p-2 rounded hover:bg-accent/5">
                    Project Overview
                  </Link>
                  <Link href="/capstone/guidelines" className="block text-sm hover:text-accent transition-colors p-2 rounded hover:bg-accent/5">
                    Guidelines & Timeline
                  </Link>
                  <Link href="/capstone/rubrics" className="block text-sm hover:text-accent transition-colors p-2 rounded hover:bg-accent/5">
                    Assessment Rubrics
                  </Link>
                </CardContent>
              </Card>

              <Card className="card-ledger border-border/50">
                <CardHeader>
                  <CardTitle>Reference Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/backmatter/glossary" className="block text-sm hover:text-foreground transition-colors p-2 rounded hover:bg-muted/50">
                    Glossary
                  </Link>
                  <Link href="/backmatter/index" className="block text-sm hover:text-foreground transition-colors p-2 rounded hover:bg-muted/50">
                    Subject Index
                  </Link>
                  <Link href="/backmatter/bibliography" className="block text-sm hover:text-foreground transition-colors p-2 rounded hover:bg-muted/50">
                    Bibliography
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features highlight */}
        <section className="py-16 bg-gradient-to-br from-muted/10 via-background to-muted/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Interactive Learning Features</h2>
              <p className="text-xl text-muted-foreground">Everything you need for hands-on business math education with Excel integration</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="card-ledger text-center hover:shadow-lg transition-all duration-300 hover:scale-105 border-border/50 group">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-accent/20 transition-colors">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}
