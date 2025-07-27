import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, CheckSquare, Dice6, TrendingUp, Search } from "lucide-react"

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
    case "Beginner": return "text-green-600 bg-green-50 border-green-200"
    case "Intermediate": return "text-blue-600 bg-blue-50 border-blue-200" 
    case "Advanced": return "text-orange-600 bg-orange-50 border-orange-200"
    case "Expert": return "text-red-600 bg-red-50 border-red-200"
    default: return "text-gray-600 bg-gray-50 border-gray-200"
  }
}

export default function Home() {
  return (
    <main className="flex-1">
        {/* Hero section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Welcome to Math for Business Operations
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  A comprehensive, interactive textbook designed for Grade 12 students to master 
                  accounting principles, spreadsheet modeling, and entrepreneurship through 
                  hands-on projects and real-world applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/frontmatter/preface">Start Reading</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/units/unit01-smart-ledger">Jump to Unit 1</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <Image
                    src="./cover.png"
                    alt="Math for Business Operations textbook cover showing business charts and Excel spreadsheets"
                    width={400}
                    height={533}
                    className="w-full h-auto rounded-lg shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Course Structure</h2>
              <p className="text-xl text-muted-foreground">Eight hands-on units plus a capstone project</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {units.map((unit, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      <Link href={unit.href} className="hover:text-primary transition-colors">
                        {unit.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{unit.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">{unit.duration}</span>
                      <span className={`px-2 py-1 rounded-md border text-xs font-medium ${getDifficultyColor(unit.difficulty)}`}>
                        {unit.difficulty}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/frontmatter/preface" className="block text-sm hover:text-primary transition-colors">
                    Preface
                  </Link>
                  <Link href="/frontmatter/acknowledgments" className="block text-sm hover:text-primary transition-colors">
                    Acknowledgments
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Capstone Project</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/capstone" className="block text-sm hover:text-primary transition-colors">
                    Project Overview
                  </Link>
                  <Link href="/capstone/guidelines" className="block text-sm hover:text-primary transition-colors">
                    Guidelines & Timeline
                  </Link>
                  <Link href="/capstone/rubrics" className="block text-sm hover:text-primary transition-colors">
                    Assessment Rubrics
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reference Materials</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Link href="/backmatter/glossary" className="block text-sm hover:text-primary transition-colors">
                    Glossary
                  </Link>
                  <Link href="/backmatter/index" className="block text-sm hover:text-primary transition-colors">
                    Subject Index
                  </Link>
                  <Link href="/backmatter/bibliography" className="block text-sm hover:text-primary transition-colors">
                    Bibliography
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features highlight */}
        <section className="py-16 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Learning Features</h2>
              <p className="text-xl text-muted-foreground">Everything you need for hands-on business math education</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
    </main>
  )
}
