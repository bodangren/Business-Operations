"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings,
  Home,
  Menu
} from "lucide-react"

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-4">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-lg font-semibold">Teacher Resources</h2>
        </div>
        <Link href="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
          <Home className="h-4 w-4" />
          Back to Student Site
        </Link>
      </div>
      
      <Separator />
      
      {/* Navigation */}
      <nav className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Course Philosophy</h3>
          <Link href="/teacher/course-overview/pbl-methodology">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <BookOpen className="mr-2 h-4 w-4" />
              PBL Methodology
            </Button>
          </Link>
          <Link href="/teacher/course-overview/backward-design">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Backward Design
            </Button>
          </Link>
          <Link href="/teacher/classroom-routines">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Classroom Routines
            </Button>
          </Link>

          <Separator className="my-4" />
          
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Teacher Unit Plans</h3>
          <Link href="/teacher/unit01">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 1: Smart Ledger Launch
            </Button>
          </Link>
          <Link href="/teacher/unit02">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 2: Month-End Wizard
            </Button>
          </Link>
          <Link href="/teacher/unit03">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 3: Three-Statement Storyboard
            </Button>
          </Link>
          <Link href="/teacher/unit04">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 4: Data-Driven Café
            </Button>
          </Link>
          <Link href="/teacher/unit05">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 5: PayDay Simulator
            </Button>
          </Link>
          <Link href="/teacher/unit06">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 6: PriceLab Challenge
            </Button>
          </Link>
          <Link href="/teacher/unit07">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 7: Inventory Accounting
            </Button>
          </Link>
          <Link href="/teacher/unit08">
            <Button variant="ghost" className="w-full justify-start text-sm">
              <FileText className="mr-2 h-4 w-4" />
              Unit 8: Fixed Assets and Depreciation
            </Button>
          </Link>
          
          <Separator className="my-4" />
          
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Coming Soon</h3>
          <Button variant="ghost" className="w-full justify-start text-sm" disabled>
            <Calendar className="mr-2 h-4 w-4" />
            Semester Overview
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm" disabled>
            <TrendingUp className="mr-2 h-4 w-4" />
            Assessment Philosophy
          </Button>
          <Button variant="ghost" className="w-full justify-start text-sm" disabled>
            <Settings className="mr-2 h-4 w-4" />
            Technology Setup
          </Button>
        </div>
      </nav>
    </div>
  )

  return (
    <div className="flex h-screen">
      {/* Mobile Sidebar Trigger */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <SidebarContent />
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}