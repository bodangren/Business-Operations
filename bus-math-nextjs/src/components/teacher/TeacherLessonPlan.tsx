'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  CheckCircle, 
  BookOpen, 
  Clock,
  Users,
  AlertTriangle,
  Lightbulb,
  Info,
  FileText,
  Settings,
  MessageSquare,
  Flag,
  TrendingUp,
  Briefcase,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  PenTool,
  UserCheck,
  BarChart3,
  ChevronDown
} from "lucide-react"
import Link from 'next/link'

interface LessonPhase {
  id: string
  phaseName: 'Hook' | 'Introduction' | 'Guided Practice' | 'Independent Practice' | 'Assessment' | 'Closing'
  sequence: number
  description: string
  developerNotes?: string
}

interface Lesson {
  id: string
  unitId: string
  title: string
  sequence: number
  learningObjectives: string[]
  keyConcepts: string[]
  pedagogicalApproach: string[]
  durationEstimateMinutes: number
  rationale: string
}

interface TeacherLessonPlanProps {
  unit: string
  lessonNumber: number
}

export function TeacherLessonPlan({ unit, lessonNumber }: TeacherLessonPlanProps) {
  const router = useRouter()
  const [lesson, setLesson] = useState<Lesson | null>(null)
  const [phases, setPhases] = useState<LessonPhase[]>([])
  const [loading, setLoading] = useState(true)

  // Lesson titles for dropdown (would come from MCP in real implementation)
  const lessonTitles = [
    "Introduction: Sarah's Challenge",
    "Core Concepts: The Accounting Equation", 
    "Core Concepts: Debit & Credit Rules",
    "Excel Model: Tables & SUMIF Functions",
    "Excel Model: Conditional Formatting & Error Checking",
    "Examples: Professional Ledger Applications",
    "Exercises: Independent Ledger Construction",
    "Summary: Integration & System Refinement",
    "Project Work: Presentation Preparation & Rehearsal",
    "Presentations: Investor Showcase & Reflection"
  ]

  const handleLessonChange = (newLessonNumber: number) => {
    const formattedLesson = `lesson-${String(newLessonNumber).padStart(2, '0')}`
    router.push(`/teacher/${unit}/${formattedLesson}`)
  }

  // Mock data for development - this would be replaced with actual MCP queries
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setLesson({
        id: 'lesson-' + lessonNumber,
        unitId: unit,
        title: lessonNumber === 1 ? "Introduction: Sarah's Challenge" : `Lesson ${lessonNumber}`,
        sequence: lessonNumber,
        learningObjectives: [
          "Identify the key components of Sarah's business model and services at TechStart Solutions",
          "Recognize the challenges of manual record-keeping for small business financial tracking",
          "Explain why accurate financial records are essential for investor confidence and business credibility"
        ],
        keyConcepts: [
          "TechStart Solutions business model and client services",
          "Manual vs. digital record-keeping challenges",
          "Business transaction categorization",
          "Financial credibility and investor expectations"
        ],
        pedagogicalApproach: [
          "Video-based narrative introduction",
          "Interactive comprehension activities", 
          "Think-pair-share collaborative discussions",
          "Problem-based scenario analysis"
        ],
        durationEstimateMinutes: 45,
        rationale: "This lesson introduces the core problem of the unit and engages students with a real-world business scenario."
      })

      setPhases([
        {
          id: 'phase-1',
          phaseName: 'Hook',
          sequence: 1,
          description: "Students watch Sarah's TechStart Solutions introduction video (3 minutes) showing her digital marketing consultancy and current record-keeping challenges.",
          developerNotes: "Use intro-videos.json for Sarah's TechStart Solutions video content. Video should be 3 minutes maximum."
        },
        {
          id: 'phase-2',
          phaseName: 'Introduction',
          sequence: 2,
          description: "Brief overview of accounting fundamentals and why accurate record-keeping matters for business success.",
        },
        {
          id: 'phase-3',
          phaseName: 'Guided Practice',
          sequence: 3,
          description: "Students work in pairs to identify different types of business transactions from Sarah's client examples.",
        },
        {
          id: 'phase-4',
          phaseName: 'Independent Practice',
          sequence: 4,
          description: "Individual reflection on business transaction categorization using interactive digital tools.",
        },
        {
          id: 'phase-5',
          phaseName: 'Assessment',
          sequence: 5,
          description: "Formative assessment: Quick comprehension check and exit ticket.",
        },
        {
          id: 'phase-6',
          phaseName: 'Closing',
          sequence: 6,
          description: "Preview of next lesson and connection to unit driving question.",
        }
      ])

      setLoading(false)
    }, 1000)
  }, [unit, lessonNumber])

  const getPhaseIcon = (phaseName: string) => {
    switch (phaseName) {
      case 'Hook': return <PlayCircle className="h-5 w-5" />
      case 'Introduction': return <BookOpen className="h-5 w-5" />
      case 'Guided Practice': return <Users className="h-5 w-5" />
      case 'Independent Practice': return <PenTool className="h-5 w-5" />
      case 'Assessment': return <UserCheck className="h-5 w-5" />
      case 'Closing': return <Flag className="h-5 w-5" />
      default: return <Info className="h-5 w-5" />
    }
  }

  const getPhaseColor = (phaseName: string) => {
    switch (phaseName) {
      case 'Hook': return 'border-red-200 bg-red-50 dark:bg-red-950/10'
      case 'Introduction': return 'border-blue-200 bg-blue-50 dark:bg-blue-950/10'
      case 'Guided Practice': return 'border-green-200 bg-green-50 dark:bg-green-950/10'
      case 'Independent Practice': return 'border-purple-200 bg-purple-50 dark:bg-purple-950/10'
      case 'Assessment': return 'border-amber-200 bg-amber-50 dark:bg-amber-950/10'
      case 'Closing': return 'border-slate-200 bg-slate-50 dark:bg-slate-950/10'
      default: return 'border-gray-200 bg-gray-50 dark:bg-gray-950/10'
    }
  }

  const getPhaseTiming = (phaseName: string) => {
    switch (phaseName) {
      case 'Hook': return '5-8 min'
      case 'Introduction': return '8-12 min'
      case 'Guided Practice': return '15-20 min'
      case 'Independent Practice': return '10-15 min'
      case 'Assessment': return '3-5 min'
      case 'Closing': return '2-3 min'
      default: return '5-10 min'
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (!lesson) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Lesson Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Unable to load lesson {lessonNumber} for {unit.toUpperCase()}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header Navigation */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {unit.toUpperCase()} - Lesson {lessonNumber}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{lesson.title}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <label htmlFor="lesson-selector" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Jump to:
            </label>
            <div className="relative">
              <select
                id="lesson-selector"
                value={lessonNumber}
                onChange={(e) => handleLessonChange(parseInt(e.target.value))}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-w-[280px]"
              >
                {lessonTitles.map((title, index) => (
                  <option key={index + 1} value={index + 1}>
                    Lesson {index + 1}: {title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>{lesson.durationEstimateMinutes} minutes</span>
          </div>
          
          {/* Quick Previous/Next for adjacent lessons */}
          <div className="flex items-center gap-1">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={lessonNumber <= 1}
              onClick={() => handleLessonChange(lessonNumber - 1)}
              className="p-2"
              title="Previous lesson"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              disabled={lessonNumber >= 10}
              onClick={() => handleLessonChange(lessonNumber + 1)}
              className="p-2"
              title="Next lesson"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lesson Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Lesson Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Learning Objectives */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Learning Objectives</h3>
            <div className="bg-blue-50 dark:bg-blue-950/10 p-4 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2 font-medium">
                Students will be able to:
              </p>
              <ul className="space-y-2">
                {lesson.learningObjectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-700 dark:text-blue-300">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Key Concepts */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
            <div className="grid grid-cols-2 gap-2">
              {lesson.keyConcepts.map((concept, index) => (
                <Badge key={index} variant="secondary" className="text-xs p-2 justify-start">
                  {concept}
                </Badge>
              ))}
            </div>
          </div>

          {/* Pedagogical Approach */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Teaching Strategies</h3>
            <div className="flex flex-wrap gap-2">
              {lesson.pedagogicalApproach.map((approach, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {approach}
                </Badge>
              ))}
            </div>
          </div>

          {/* Rationale */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Lesson Rationale</h3>
            <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg italic">
              {lesson.rationale}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Lesson Phases */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Lesson Phases
        </h2>
        
        {phases.map((phase, index) => (
          <Card key={phase.id} className={`${getPhaseColor(phase.phaseName)} border-l-4`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getPhaseIcon(phase.phaseName)}
                  <span>Phase {phase.sequence}: {phase.phaseName}</span>
                </div>
                <Badge variant="secondary">{getPhaseTiming(phase.phaseName)}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {phase.description}
              </p>
              
              {phase.developerNotes && (
                <div className="bg-amber-50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-800 p-3 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="h-4 w-4 text-amber-600" />
                    <span className="text-sm font-medium text-amber-800 dark:text-amber-200">
                      Teacher Notes
                    </span>
                  </div>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {phase.developerNotes}
                  </p>
                </div>
              )}

              {/* Phase-specific guidance */}
              <div className="mt-4 space-y-3">
                <TeacherGuidance phase={phase.phaseName} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Differentiation Strategies */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Differentiation Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 dark:text-green-300 mb-2">
                ELL Support
              </h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Visual aids and diagrams</li>
                <li>• Peer translation support</li>
                <li>• Simplified vocabulary sheets</li>
                <li>• Extended processing time</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
                Special Needs
              </h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Step-by-step checklists</li>
                <li>• Audio instructions</li>
                <li>• Reduced cognitive load</li>
                <li>• Frequent check-ins</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">
                Gifted Extension
              </h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Advanced problem scenarios</li>
                <li>• Leadership roles in groups</li>
                <li>• Research extensions</li>
                <li>• Peer mentoring opportunities</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Materials and Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            Required Materials
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Technology</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Computer/tablet for each student</li>
                <li>• Projector/interactive whiteboard</li>
                <li>• Excel or Google Sheets access</li>
                <li>• Video playback capability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Physical Materials</h4>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>• Handout: Sarah's business scenario</li>
                <li>• Transaction categorization worksheets</li>
                <li>• Sticky notes for grouping activities</li>
                <li>• Exit ticket forms</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Helper component for phase-specific teacher guidance
function TeacherGuidance({ phase }: { phase: string }) {
  const guidance = {
    'Hook': {
      tips: [
        "Ensure video audio is clear and captions are available",
        "Have students take notes on 3 key challenges Sarah faces",
        "Use think-pair-share to discuss initial impressions"
      ],
      timing: "Keep video to 3 minutes max, discussion to 2-3 minutes",
      materials: "Video file, notebook/digital notes"
    },
    'Introduction': {
      tips: [
        "Connect to students' own experiences with record-keeping",
        "Use real business examples from local community",
        "Preview the unit's practical applications"
      ],
      timing: "8-10 minutes of direct instruction with interaction",
      materials: "Slides, local business examples"
    },
    'Guided Practice': {
      tips: [
        "Circulate and listen to pair discussions",
        "Encourage students to explain their reasoning",
        "Collect common misconceptions for whole-class discussion"
      ],
      timing: "15-18 minutes with structured pair work",
      materials: "Transaction examples, discussion prompts"
    },
    'Independent Practice': {
      tips: [
        "Monitor individual progress closely",
        "Provide immediate feedback on digital tools",
        "Allow students to work at their own pace"
      ],
      timing: "10-12 minutes of focused individual work",
      materials: "Digital categorization tool, individual worksheets"
    },
    'Assessment': {
      tips: [
        "Use exit tickets to gauge understanding",
        "Look for misconceptions to address next lesson",
        "Keep assessment low-stakes and formative"
      ],
      timing: "3-5 minutes for quick formative check",
      materials: "Exit tickets (digital or paper)"
    },
    'Closing': {
      tips: [
        "Make explicit connections to unit driving question",
        "Preview tomorrow's learning to build anticipation",
        "Thank students for engagement and participation"
      ],
      timing: "2-3 minutes of wrap-up and preview",
      materials: "Unit overview slide, preview materials"
    }
  }

  const phaseGuidance = guidance[phase as keyof typeof guidance]
  
  if (!phaseGuidance) return null

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border">
      <div className="grid md:grid-cols-3 gap-4 text-sm">
        <div>
          <h5 className="font-medium text-primary mb-2">Teaching Tips</h5>
          <ul className="space-y-1 text-gray-600 dark:text-gray-400">
            {phaseGuidance.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <Lightbulb className="h-3 w-3 mt-1 flex-shrink-0" />
                {tip}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-primary mb-2">Timing Guidance</h5>
          <p className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
            <Clock className="h-3 w-3 mt-1 flex-shrink-0" />
            {phaseGuidance.timing}
          </p>
        </div>
        <div>
          <h5 className="font-medium text-primary mb-2">Key Materials</h5>
          <p className="text-gray-600 dark:text-gray-400 flex items-start gap-2">
            <FileText className="h-3 w-3 mt-1 flex-shrink-0" />
            {phaseGuidance.materials}
          </p>
        </div>
      </div>
    </div>
  )
}