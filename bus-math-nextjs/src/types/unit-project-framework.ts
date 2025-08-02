/**
 * PHASE 1: SUMMATIVE ASSESSMENT DESIGN - UNIT PROJECT FRAMEWORK
 * 
 * This framework provides standardized structure for authentic capstone projects
 * for all 8 units, extracted from unit01-lesson-plan.ts patterns and adapted
 * for consistent application across the curriculum.
 */

export interface UnitProjectFramework {
  unitId: string
  unitTitle: string
  
  // Core Project Structure
  performanceTask: {
    title: string
    scenario: string // The authentic business context
    audience: string // Professional audience (investors, entrepreneurs, etc.)
    context: string // Real-world connection/rationale
    deliverables: string[]
    requirements: string[]
    duration: string // e.g., "4-minute pitch + Q&A"
  }
  
  // Progressive Milestone System
  milestones: ProjectMilestone[]
  
  // Standardized Assessment Rubric
  rubric: ProjectRubricCriteria[]
  
  // Student Choice and Differentiation
  studentChoices: {
    scenarios?: string[] // Different business contexts to choose from
    roles?: string[] // Team role options
    presentationFormats?: string[] // How to present final work
    extensions?: string[] // Advanced student options
  }
  
  // Self-Contained Classroom Implementation
  resources: {
    templates: ProjectResource[]
    datasets: ProjectResource[]
    guides: ProjectResource[]
    external?: ProjectResource[] // Community partnerships, if available
  }
  
  // Quality Assurance
  validation: {
    peerReviewCriteria: string[]
    selfAssessmentQuestions: string[]
    teacherCheckpoints: string[]
  }
}

export interface ProjectMilestone {
  id: string
  day: number
  title: string
  description: string
  focus: string // What students are building/demonstrating
  criteria: string[]
  deliverables: string[]
  weight?: string // Optional percentage of final grade
}

export interface ProjectRubricCriteria {
  name: string
  weight: string // Percentage of total grade
  focus: string // What this criterion measures
  exemplary: string
  proficient: string
  developing: string
  businessStandard?: string // What industry expects at this level
}

export interface ProjectResource {
  title: string
  description: string
  type: 'excel-template' | 'dataset' | 'guide' | 'example' | 'external'
  required: boolean
  classroomOnly?: boolean // Can be completed with classroom resources only
  url?: string
}

/**
 * STANDARDIZED RUBRIC CATEGORIES
 * Based on analysis of unit01-lesson-plan.ts assessment patterns
 */
export const STANDARD_RUBRIC_CATEGORIES = {
  TECHNICAL_ACCURACY: {
    name: "Technical Accuracy",
    weight: "40-45%",
    focus: "Correctness of formulas, calculations, and technical implementation"
  },
  FUNCTIONALITY: {
    name: "Functionality & Innovation", 
    weight: "25-30%",
    focus: "System works reliably, handles edge cases, includes creative solutions"
  },
  DOCUMENTATION: {
    name: "Documentation & Communication",
    weight: "15-20%", 
    focus: "Clear instructions, professional formatting, business-appropriate language"
  },
  PRESENTATION: {
    name: "Business Presentation",
    weight: "15-20%",
    focus: "Professional delivery, handles Q&A, addresses authentic audience needs"
  }
} as const

/**
 * MILESTONE TIMING PATTERNS
 * Based on 10-day unit structure from unit01-lesson-plan.ts
 */
export const STANDARD_MILESTONE_TIMING = {
  FOUNDATION: {
    day: 3,
    focus: "Core technical functionality established"
  },
  INTEGRATION: {
    day: 6,
    focus: "Advanced features and error-checking implemented"
  },
  PROFESSIONAL: {
    day: 8,
    focus: "Professional formatting and presentation-ready system"
  },
  FINAL: {
    day: 10,
    focus: "Public presentation and authentic assessment"
  }
} as const

/**
 * AUTHENTIC AUDIENCE TYPES
 * Professional audiences that provide real-world context for presentations
 */
export const AUTHENTIC_AUDIENCES = {
  INVESTORS: "Local angel investors and entrepreneur mentors",
  INNOVATORS: "Innovation Fair visitors (teachers, parents, community entrepreneurs)", 
  EXECUTIVES: "Mock C-suite panel (principals, business-owner parents, local CPAs)",
  ADVISORS: "Business advisory board (SCORE mentors, chamber of commerce members)",
  STAKEHOLDERS: "Restaurant owners, café managers, or other relevant business stakeholders",
  PEERS: "Peer businesses and competitive analysis panel"
} as const