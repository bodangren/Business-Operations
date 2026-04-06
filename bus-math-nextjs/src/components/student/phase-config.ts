import type React from "react"
import {
  PlayCircle,
  BookOpen,
  Users,
  Target,
  CheckCircle2,
  Lightbulb,
  Rocket,
  Flag,
  Monitor,
} from "lucide-react"

export const PHASE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Hook": PlayCircle,
  "Introduction": BookOpen,
  "Guided Practice": Users,
  "Independent Practice": Target,
  "Assessment": CheckCircle2,
  "Closing": Lightbulb,
  "Project Launch": Rocket,
  "Project Milestone": Flag,
  "Project Presentation": Monitor,
}

export const PHASE_COLORS: Record<string, string> = {
  "Hook": "text-red-600 bg-red-50/50 border-red-200/50 dark:bg-red-950/20 dark:border-red-800/30",
  "Introduction": "text-primary bg-primary/5 border-primary/20 dark:bg-primary/10 dark:border-primary/30",
  "Guided Practice": "text-green-600 bg-green-50/50 border-green-200/50 dark:bg-green-950/20 dark:border-green-800/30",
  "Independent Practice": "text-purple-600 bg-purple-50/50 border-purple-200/50 dark:bg-purple-950/20 dark:border-purple-800/30",
  "Assessment": "text-orange-600 bg-orange-50/50 border-orange-200/50 dark:bg-orange-950/20 dark:border-orange-800/30",
  "Closing": "text-indigo-600 bg-indigo-50/50 border-indigo-200/50 dark:bg-indigo-950/20 dark:border-indigo-800/30",
  "Project Launch": "text-red-600 bg-red-50/50 border-red-200/50 dark:bg-red-950/20 dark:border-red-800/30",
  "Project Milestone": "text-green-600 bg-green-50/50 border-green-200/50 dark:bg-green-950/20 dark:border-green-800/30",
  "Project Presentation": "text-blue-600 bg-blue-50/50 border-blue-200/50 dark:bg-blue-950/20 dark:border-blue-800/30",
}

export const PHASE_DESCRIPTIONS: Record<string, string> = {
  "Hook": "Engage with the lesson's driving question and real-world challenge",
  "Introduction": "Learn new concepts and skills through direct instruction",
  "Guided Practice": "Practice new skills with teacher support and collaboration",
  "Independent Practice": "Apply learning independently to build mastery",
  "Assessment": "Demonstrate understanding through formative evaluation",
  "Closing": "Reflect on learning and connect to bigger picture",
  "Project Launch": "Kick off the team project with business scenario and data assignment",
  "Project Milestone": "Prototype completion and presentation rehearsal",
  "Project Presentation": "Final presentations and peer review",
}
