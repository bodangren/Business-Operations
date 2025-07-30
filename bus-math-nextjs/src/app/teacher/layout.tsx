import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar, 
  FileText, 
  Settings,
  Home
} from "lucide-react"

export default function TeacherLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      {/* Teacher Sidebar */}
      <div className="w-64 border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
          <nav className="flex-1 p-4">
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
              
              <h3 className="text-sm font-medium text-muted-foreground mb-2">Unit Lesson Plans</h3>
              <Link href="/teacher/unit-lesson-plans/unit01">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 1: Smart Ledger Launch
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit02">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 2: Month-End Wizard
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit03">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 3: Three-Statement Storyboard
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit04">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 4: Data-Driven Café
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit05">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 5: PayDay Simulator
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit06">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 6: PriceLab Challenge
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit07">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 7: Asset & Inventory Tracker
                </Button>
              </Link>
              <Link href="/teacher/unit-lesson-plans/unit08">
                <Button variant="ghost" className="w-full justify-start text-sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Unit 8: Year-1 Startup Model
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
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  )
}