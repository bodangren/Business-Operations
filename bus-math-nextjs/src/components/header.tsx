"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
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

const units = [
  { href: "/units/unit01-smart-ledger/unit01-smart-ledger", title: "Unit 1: Smart Ledger" },
  { href: "/units/unit02-month-end-wizard/unit02-month-end-wizard", title: "Unit 2: Month-End Wizard" },
  { href: "/units/unit03-three-statement-storyboard/unit03-three-statement-storyboard", title: "Unit 3: Three Statement Storyboard" },
  { href: "/units/unit04-data-driven-cafe/unit04-data-driven-cafe", title: "Unit 4: Data-Driven Cafe" },
  { href: "/units/unit05-payday-simulator/unit05-payday-simulator", title: "Unit 5: Payday Simulator" },
  { href: "/units/unit06-pricelab-challenge/unit06-pricelab-challenge", title: "Unit 6: PriceLab Challenge" },
  { href: "/units/unit07-asset-inventory-tracker/unit07-asset-inventory-tracker", title: "Unit 7: Asset Inventory Tracker" },
  { href: "/units/unit08-integrated-model-sprint/unit08-integrated-model-sprint", title: "Unit 8: Integrated Model Sprint" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-bold text-foreground hover:opacity-80">
              Math for Business Operations
            </Link>
            <p className="text-sm text-muted-foreground">Applied Accounting with Excel</p>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link href="/frontmatter/preface" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Preface
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Units</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {units.map((unit) => (
                      <li key={unit.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={unit.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{unit.title}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/capstone" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Capstone
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/backmatter/glossary" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Glossary
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/search" legacyBehavior passHref>
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
              className="w-64"
            />
            <Button size="sm" variant="outline">
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
                  <h3 className="text-lg font-medium">Units</h3>
                  <div className="pl-4 space-y-2">
                    {units.map((unit) => (
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
  )
}