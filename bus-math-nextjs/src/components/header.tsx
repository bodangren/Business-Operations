"use client"

import Link from "next/link"
import { Search, Menu, Calculator, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const studentUnits = [
  { href: "/student/unit01", title: "Unit 1: Smart Ledger Launch", description: "Self-auditing bookkeeping for angel investors" },
  { href: "/student/unit02", title: "Unit 2: Month-End Wizard", description: "Excel automation to reduce closing time" },
  { href: "/student/unit03", title: "Unit 3: Three-Statement Storyboard", description: "Integrated financial statements with KPI dashboards" },
  { href: "/student/unit04", title: "Unit 4: Data-Driven Café", description: "Statistical analysis and forecasting for operations" },
  { href: "/student/unit05", title: "Unit 5: PayDay Simulator", description: "Payroll systems with tax calculations and cash flow" },
  { href: "/student/unit06", title: "Unit 6: PriceLab Challenge", description: "Cost-Volume-Profit analysis and competitive pricing" },
  { href: "/student/unit07", title: "Unit 7: Asset & Inventory Tracker", description: "Depreciation methods and inventory valuation" },
  { href: "/student/unit08", title: "Unit 8: Year-1 Startup Model", description: "Integrated financial model with scenario analysis" },
]

const teacherUnits = [
  { href: "/teacher/unit01", title: "Unit 1: Smart Ledger Launch", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit02", title: "Unit 2: Month-End Wizard", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit03", title: "Unit 3: Three-Statement Storyboard", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit04", title: "Unit 4: Data-Driven Café", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit05", title: "Unit 5: PayDay Simulator", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit06", title: "Unit 6: PriceLab Challenge", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit07", title: "Unit 7: Asset & Inventory Tracker", description: "Teacher lesson plans and resources" },
  { href: "/teacher/unit08", title: "Unit 8: Year-1 Startup Model", description: "Teacher lesson plans and resources" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity">
              <div className="flex items-center gap-1">
                <Calculator className="h-6 w-6 text-primary" />
                <TrendingUp className="h-5 w-5 text-accent" />
              </div>
              Math for Business Operations
            </Link>
            <p className="text-sm text-muted-foreground font-medium">Applied Accounting with Excel</p>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/frontmatter/preface" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Preface
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Student Units</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {studentUnits.map((unit) => (
                      <li key={unit.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={unit.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-accent-foreground">{unit.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-accent-foreground">
                              {unit.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Teacher Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {teacherUnits.map((unit) => (
                      <li key={unit.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={unit.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground group"
                          >
                            <div className="text-sm font-medium leading-none group-hover:text-accent-foreground">{unit.title}</div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover:text-accent-foreground">
                              {unit.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/capstone">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Capstone
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/backmatter/glossary">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Glossary
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/search">
                  {/* @next-codemod-error This Link previously used the now removed `legacyBehavior` prop, and has a child that might not be an anchor. The codemod bailed out of lifting the child props to the Link. Check that the child component does not render an anchor, and potentially move the props manually to Link. */
                  }
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Search
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search textbook..."
              className="w-64 border-border/50 bg-background/50 focus:bg-background transition-colors"
            />
            <Button size="sm" variant="outline" className="border-border/50 hover:bg-accent/50">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-6">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/frontmatter/preface" className="text-lg font-medium">Preface</Link>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Student Units</h3>
                  <div className="pl-4 space-y-2">
                    {studentUnits.map((unit) => (
                      <Link key={unit.href} href={unit.href} className="block text-sm text-muted-foreground hover:text-foreground">
                        {unit.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Teacher Resources</h3>
                  <div className="pl-4 space-y-2">
                    {teacherUnits.map((unit) => (
                      <Link key={unit.href} href={unit.href} className="block text-sm text-muted-foreground hover:text-foreground">
                        {unit.title}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link href="/capstone" className="text-lg font-medium">Capstone</Link>
                <Link href="/backmatter/glossary" className="text-lg font-medium">Glossary</Link>
                <Link href="/search" className="text-lg font-medium">Search</Link>
                
                <div className="pt-4 border-t">
                  <Input
                    type="search"
                    placeholder="Search textbook..."
                    className="mb-2"
                  />
                  <Button size="sm" className="w-full">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}