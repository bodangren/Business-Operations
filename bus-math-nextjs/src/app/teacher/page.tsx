import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Users, TrendingUp, Calendar, FileText, Settings } from "lucide-react"

export default function TeacherDashboard() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
        <p className="text-lg text-muted-foreground">
          Welcome to the Math for Business Operations teacher resources. Access curriculum guides, 
          implementation tools, and professional development materials.
        </p>
      </div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">PBL Methodology</CardTitle>
            </div>
            <CardDescription>
              Learn how to implement project-based learning effectively in your business mathematics classroom.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/teacher/course-overview/pbl-methodology">
              <Button className="w-full">View Guide</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <CardTitle className="text-lg">Backward Design</CardTitle>
            </div>
            <CardDescription>
              Understanding by Design framework for each unit: objectives, assessments, and learning experiences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/teacher/course-overview/backward-design">
              <Button className="w-full">Explore Framework</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow opacity-60">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <CardTitle className="text-lg text-muted-foreground">Semester Overview</CardTitle>
            </div>
            <CardDescription>
              Complete semester planning with pacing guides and milestone assessments.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full" disabled>
              Coming Soon
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Course Structure Overview */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Course Structure Overview
          </CardTitle>
          <CardDescription>
            Understanding the two-semester PBL structure and how units build toward authentic capstone projects.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              Semester 1: Foundation Building
              <Badge variant="secondary">8 Units × 2 Weeks</Badge>
            </h3>
            <p className="text-sm text-muted-foreground mb-3">
              Students follow Sarah's entrepreneurial journey, learning business mathematics and Excel skills 
              through authentic challenges.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-muted rounded">Unit 1: Smart Ledger</div>
              <div className="p-2 bg-muted rounded">Unit 2: Month-End Wizard</div>
              <div className="p-2 bg-muted rounded">Unit 3: Three-Statement Story</div>
              <div className="p-2 bg-muted rounded">Unit 4: Data-Driven Café</div>
              <div className="p-2 bg-muted rounded">Unit 5: PayDay Simulator</div>
              <div className="p-2 bg-muted rounded">Unit 6: PriceLab Challenge</div>
              <div className="p-2 bg-muted rounded">Unit 7: Asset Tracker</div>
              <div className="p-2 bg-muted rounded">Unit 8: Integrated Model</div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              Semester 2: Authentic Capstone
              <Badge variant="secondary">13 Weeks</Badge>
            </h3>
            <p className="text-sm text-muted-foreground">
              Students develop their own business plan and financial model, applying all skills learned 
              in Semester 1 to create investor-ready presentations.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Implementation Notes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Implementation Notes
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-1">Getting Started</h4>
            <p className="text-sm text-blue-800 dark:text-blue-200">
              Begin with the PBL Methodology guide to understand the pedagogical approach, 
              then review the Backward Design framework for unit planning.
            </p>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded-lg">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">Technology Requirements</h4>
            <p className="text-sm text-green-800 dark:text-green-200">
              Students need Excel (or equivalent) access for all units. Advanced features like macros 
              and VBA are introduced progressively.
            </p>
          </div>
          
          <div className="p-4 bg-amber-50 dark:bg-amber-950/20 rounded-lg">
            <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-1">Community Partnerships</h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Consider connecting with local CPAs, entrepreneurs, and business professionals 
              for authentic assessment audiences.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}