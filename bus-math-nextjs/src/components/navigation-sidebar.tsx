"use client"

import Link from "next/link"
import { 
  BookOpen, 
  Home, 
  Search, 
  BookMarked, 
  GraduationCap,
  Calculator,
  TrendingUp,
  BarChart3,
  DollarSign,
  PieChart,
  Briefcase,
  Target
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const navigation = {
  main: [
    {
      title: "Home",
      url: "/",
      icon: Home,
    },
    {
      title: "Preface",
      url: "/preface",
      icon: BookOpen,
    },
  ],
  units: [
    {
      title: "Unit 1: Smart Ledger Launch",
      url: "/units/unit01-smart-ledger",
      icon: Calculator,
      description: "Build a comprehensive accounting ledger system in Excel",
      duration: "2-3 weeks",
      difficulty: "Beginner",
    },
    {
      title: "Unit 2: Month-End Wizard",
      url: "/units/unit02-month-end-wizard", 
      icon: TrendingUp,
      description: "Automate month-end closing procedures and reports",
      duration: "2-3 weeks",
      difficulty: "Intermediate",
    },
    {
      title: "Unit 3: Three Statement Storyboard",
      url: "/units/unit03-three-statement-storyboard",
      icon: BarChart3,
      description: "Create integrated financial statements that tell a story",
      duration: "3-4 weeks", 
      difficulty: "Intermediate",
    },
    {
      title: "Unit 4: Data-Driven Cafe",
      url: "/units/unit04-data-driven-cafe",
      icon: PieChart,
      description: "Analyze cafe operations using data visualization",
      duration: "2-3 weeks",
      difficulty: "Intermediate",
    },
    {
      title: "Unit 5: Payday Simulator",
      url: "/units/unit05-payday-simulator",
      icon: DollarSign,
      description: "Model payroll systems and employee compensation",
      duration: "2-3 weeks",
      difficulty: "Advanced",
    },
    {
      title: "Unit 6: PriceLab Challenge", 
      url: "/units/unit06-pricelab-challenge",
      icon: Target,
      description: "Experiment with pricing strategies and market analysis",
      duration: "3-4 weeks",
      difficulty: "Advanced", 
    },
    {
      title: "Unit 7: Asset Inventory Tracker",
      url: "/units/unit07-asset-inventory-tracker",
      icon: Briefcase,
      description: "Build comprehensive asset management systems",
      duration: "2-3 weeks",
      difficulty: "Advanced",
    },
    {
      title: "Unit 8: Integrated Model Sprint",
      url: "/units/unit08-integrated-model-sprint",
      icon: BarChart3,
      description: "Combine all skills in a comprehensive business model",
      duration: "3-4 weeks",
      difficulty: "Expert",
    },
  ],
  additional: [
    {
      title: "Capstone",
      url: "/capstone",
      icon: GraduationCap,
    },
    {
      title: "Glossary",
      url: "/glossary",
      icon: BookMarked,
    },
    {
      title: "Search",
      url: "/search",
      icon: Search,
    },
  ],
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty.toLowerCase()) {
    case 'beginner':
      return 'text-green-600'
    case 'intermediate':
      return 'text-yellow-600'
    case 'advanced':
      return 'text-orange-600'
    case 'expert':
      return 'text-red-600'
    default:
      return 'text-gray-600'
  }
}

export function NavigationSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <div className="flex flex-col space-y-1">
          <h1 className="text-lg font-semibold">Math for Business Operations</h1>
          <p className="text-sm text-muted-foreground">Applied Accounting with Excel</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.main.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Semester 1: Mini-Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.units.map((unit) => (
                <SidebarMenuItem key={unit.title}>
                  <SidebarMenuButton asChild>
                    <Link href={unit.url}>
                      <unit.icon />
                      <span>{unit.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton asChild>
                        <div className="flex flex-col items-start">
                          <span className="text-xs text-muted-foreground">
                            {unit.description}
                          </span>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs bg-secondary rounded px-1.5 py-0.5">
                              {unit.duration}
                            </span>
                            <span className={`text-xs font-medium ${getDifficultyColor(unit.difficulty)}`}>
                              {unit.difficulty}
                            </span>
                          </div>
                        </div>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel>Additional Resources</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.additional.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter>
        <div className="text-xs text-muted-foreground">
          <p>&copy; 2025 Daniel Bodanske</p>
          <p>Interactive Grade 12 Textbook</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}