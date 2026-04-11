"use client"

import Link from "next/link"
import { Menu, Calculator, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import {
  FRONTMATTER_LINKS,
  REFERENCE_LINKS,
  STUDENT_UNIT_LINKS,
  TEACHER_RESOURCE_LINKS,
  TEACHER_UNIT_LINKS,
} from "@/lib/site-navigation"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex min-h-16 items-center gap-3 py-3">
          <div className="min-w-0 flex-1">
            <Link
              href="/"
              className="group flex min-w-0 items-start gap-3 text-foreground transition-opacity hover:opacity-80"
            >
              <div className="mt-0.5 flex shrink-0 items-center gap-1 rounded-full border border-primary/15 bg-primary/5 px-2 py-1">
                <Calculator className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
                <TrendingUp className="h-3.5 w-3.5 text-accent sm:h-4 sm:w-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold leading-tight sm:text-base">
                  Math for Business Operations
                </p>
                <p className="truncate text-xs font-medium text-muted-foreground">
                  Applied Accounting with Excel
                </p>
              </div>
            </Link>
          </div>

          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-1.5">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className="px-3" href="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Frontmatter</NavigationMenuTrigger>
                <NavigationMenuContent className="!right-0 !left-auto">
                  <ul className="grid w-[340px] gap-2 p-3">
                    {FRONTMATTER_LINKS.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                            <p className="mt-1 text-xs leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Student Units</NavigationMenuTrigger>
                <NavigationMenuContent className="!right-0 !left-auto">
                  <ul className="grid w-[380px] gap-3 p-4 md:w-[480px] md:grid-cols-2 lg:w-[520px]">
                    {STUDENT_UNIT_LINKS.map((unit) => (
                      <li key={unit.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={unit.href}
                            className="group/menu-link block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none group-hover/menu-link:text-accent-foreground">
                              {unit.label}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover/menu-link:text-accent-foreground">
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
                <NavigationMenuContent className="!right-0 !left-auto">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[540px] md:grid-cols-2 lg:w-[580px]">
                    {TEACHER_RESOURCE_LINKS.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="group/menu-link block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none group-hover/menu-link:text-accent-foreground">
                              {link.label}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover/menu-link:text-accent-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                    {TEACHER_UNIT_LINKS.map((unit) => (
                      <li key={unit.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={unit.href}
                            className="group/menu-link block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none group-hover/menu-link:text-accent-foreground">
                              {unit.label}
                            </div>
                            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground group-hover/menu-link:text-accent-foreground">
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
                <NavigationMenuTrigger>Reference</NavigationMenuTrigger>
                <NavigationMenuContent className="!right-0 !left-auto">
                  <ul className="grid w-[220px] gap-2 p-3">
                    {REFERENCE_LINKS.map((link) => (
                      <li key={link.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block rounded-md p-3 transition-colors hover:bg-accent hover:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{link.label}</div>
                            <p className="mt-1 text-xs leading-snug text-muted-foreground">
                              {link.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label="Open navigation menu"
                className="shrink-0 lg:hidden"
                size="icon"
                variant="outline"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(92vw,28rem)] overflow-y-auto">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Browse frontmatter, units, teacher resources, and reference pages.
              </SheetDescription>
              <nav aria-label="Mobile navigation" className="mt-4 space-y-6">
                <div className="rounded-xl border bg-muted/20 p-3">
                  <SheetClose asChild>
                    <Link
                      className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                      href="/"
                    >
                      Home
                      <span className="text-xs font-medium text-muted-foreground">
                        Overview
                      </span>
                    </Link>
                  </SheetClose>
                </div>

                <MobileNavSection links={FRONTMATTER_LINKS} title="Frontmatter" />
                <MobileNavSection links={REFERENCE_LINKS} title="Reference" />
                <MobileNavSection links={TEACHER_RESOURCE_LINKS} title="Teacher Resources" />
                <MobileNavSection links={STUDENT_UNIT_LINKS} title="Student Units" />
                <MobileNavSection links={TEACHER_UNIT_LINKS} title="Teacher Units" />
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function MobileNavSection({
  title,
  links,
}: {
  title: string
  links: readonly { href: string; label: string; description?: string }[]
}) {
  return (
    <section className="space-y-2">
      <h2 className="px-1 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </h2>
      <div className="space-y-2 rounded-xl border bg-card p-2">
        {links.map((link) => (
          <SheetClose asChild key={link.href}>
            <Link
              className="block rounded-lg px-3 py-3 transition-colors hover:bg-accent"
              href={link.href}
            >
              <div className="text-sm font-medium">{link.label}</div>
              {link.description ? (
                <p className="mt-1 text-xs leading-snug text-muted-foreground">
                  {link.description}
                </p>
              ) : null}
            </Link>
          </SheetClose>
        ))}
      </div>
    </section>
  )
}
