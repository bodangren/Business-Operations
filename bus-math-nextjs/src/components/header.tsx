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
import { cn } from "@/lib/utils"

export function Header() {
  return (
    <header className="glass-header">
      <div className="container mx-auto px-4">
        <div className="flex min-h-16 items-center gap-3 py-3">
          <div className="min-w-0 flex-1">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-3 text-foreground transition-all duration-300"
            >
              <div className="flex shrink-0 items-center gap-1 rounded-md velocity-gradient text-white px-2 py-1.5 shadow-[0_4px_10px_rgba(99,91,255,0.3)] group-hover:scale-105 transition-transform">
                <Calculator className="h-4 w-4 sm:h-5 sm:w-5" />
                <TrendingUp className="h-3.5 w-3.5 sm:h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-semibold leading-tight sm:text-lg tracking-tight text-secondary">
                  Math for Business Operations
                </p>
                <p className="truncate text-[10px] font-medium uppercase tracking-[0.1em] text-muted-foreground">
                  Applied Accounting with Excel
                </p>
              </div>
            </Link>
          </div>

          <NavigationMenu className="hidden lg:flex" viewport={false}>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors" href="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavSection title="Frontmatter" links={FRONTMATTER_LINKS} />
              <NavSection title="Student Units" links={STUDENT_UNIT_LINKS} width="w-[520px]" columns="grid-cols-2" />
              <NavSection title="Teacher Resources" links={[...TEACHER_RESOURCE_LINKS, ...TEACHER_UNIT_LINKS]} width="w-[580px]" columns="grid-cols-2" />
              <NavSection title="Reference" links={REFERENCE_LINKS} width="w-[220px]" />
              
            </NavigationMenuList>
          </NavigationMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                aria-label="Open navigation menu"
                className="shrink-0 lg:hidden border-border/50 shadow-sm"
                size="icon"
                variant="outline"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(92vw,28rem)] overflow-y-auto rounded-l-xl border-l border-border/50">
              <SheetTitle className="font-semibold text-2xl tracking-tight text-secondary">Navigation</SheetTitle>
              <SheetDescription className="font-light">
                Browse frontmatter, units, teacher resources, and reference pages.
              </SheetDescription>
              <nav aria-label="Mobile navigation" className="mt-8 space-y-6">
                <SheetClose asChild>
                  <Link
                    className="flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                    href="/"
                  >
                    Home
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      OVERVIEW
                    </span>
                  </Link>
                </SheetClose>

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

function NavSection({ 
  title, 
  links, 
  width = "w-[340px]", 
  columns = "grid-cols-1" 
}: { 
  title: string; 
  links: readonly { href: string; label: string; description?: string }[];
  width?: string;
  columns?: string;
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors bg-transparent">
        {title}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="!right-0 !left-auto border border-border/50 rounded-lg shadow-xl bg-card overflow-hidden">
        <ul className={cn("grid p-2", width, columns)}>
          {links.map((link) => (
            <li key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className="block p-3 rounded-md transition-colors hover:bg-muted group/item"
                >
                  <div className="text-sm font-semibold text-secondary group-hover/item:text-primary transition-colors">
                    {link.label}
                  </div>
                  {link.description && (
                    <p className="mt-1 text-xs font-light text-muted-foreground line-clamp-2 leading-relaxed">
                      {link.description}
                    </p>
                  )}
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}

function MobileNavSection({
  title,
  links,
}: {
  title: string
  links: readonly { href: string; label: string; description?: string }[]
}) {
  return (
    <section className="space-y-3">
      <h2 className="px-4 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/60">
        {title}
      </h2>
      <div className="space-y-1">
        {links.map((link) => (
          <SheetClose asChild key={link.href}>
            <Link
              className="block rounded-lg px-4 py-3 transition-colors hover:bg-muted"
              href={link.href}
            >
              <div className="text-sm font-medium text-secondary">{link.label}</div>
              {link.description ? (
                <p className="mt-0.5 text-xs font-light text-muted-foreground line-clamp-1">
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
