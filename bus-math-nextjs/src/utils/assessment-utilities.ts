/**
 * ASSESSMENT CREATION UTILITIES
 * 
 * Helper functions for creating and managing summative assessments based on
 * the standardized unit project frameworks. These utilities ensure consistency
 * across all units while maintaining flexibility for unit-specific requirements.
 */

import { 
  UnitProjectFramework, 
  ProjectMilestone, 
  ProjectRubricCriteria,
  STANDARD_RUBRIC_CATEGORIES,
  STANDARD_MILESTONE_TIMING,
  AUTHENTIC_AUDIENCES
} from "@/types/unit-project-framework"
import { allUnitProjectFrameworks, getProjectFrameworkByUnitId } from "@/data/unit-project-frameworks"

// ========================================
// FRAMEWORK VALIDATION UTILITIES
// ========================================

export interface ValidationResult {
  isValid: boolean
  errors: string[]
  warnings: string[]
}

/**
 * Validates a unit project framework against standard requirements
 */
export function validateUnitProjectFramework(framework: UnitProjectFramework): ValidationResult {
  const errors: string[] = []
  const warnings: string[] = []

  // Required fields validation
  if (!framework.unitId || !framework.unitTitle) {
    errors.push("Unit ID and title are required")
  }

  if (!framework.performanceTask.title || !framework.performanceTask.scenario) {
    errors.push("Performance task must have title and scenario")
  }

  // Milestone validation
  if (framework.milestones.length !== 3) {
    warnings.push("Standard framework expects exactly 3 milestones")
  }

  const expectedDays = [
    STANDARD_MILESTONE_TIMING.FOUNDATION.day,
    STANDARD_MILESTONE_TIMING.INTEGRATION.day, 
    STANDARD_MILESTONE_TIMING.PROFESSIONAL.day
  ]

  framework.milestones.forEach((milestone, index) => {
    if (milestone.day !== expectedDays[index]) {
      warnings.push(`Milestone ${index + 1} should be on day ${expectedDays[index]}, found day ${milestone.day}`)
    }
  })

  // Rubric validation
  if (framework.rubric.length !== 4) {
    warnings.push("Standard framework expects exactly 4 rubric criteria")
  }

  const totalWeight = framework.rubric.reduce((sum, criteria) => {
    const weight = parseInt(criteria.weight.replace('%', ''))
    return sum + weight
  }, 0)

  if (totalWeight !== 100) {
    errors.push(`Rubric weights must total 100%, found ${totalWeight}%`)
  }

  // Resource validation
  const requiredTemplates = framework.resources.templates.filter(t => t.required)
  const requiredDatasets = framework.resources.datasets.filter(d => d.required)
  const requiredGuides = framework.resources.guides.filter(g => g.required)

  if (requiredTemplates.length === 0) {
    warnings.push("Framework should include at least one required template")
  }

  if (requiredDatasets.length === 0) {
    warnings.push("Framework should include at least one required dataset")
  }

  if (requiredGuides.length === 0) {
    warnings.push("Framework should include at least one required teacher or student guide")
  }

  // Classroom-only validation
  const nonClassroomResources = [
    ...framework.resources.templates,
    ...framework.resources.datasets,
    ...framework.resources.guides
  ].filter(resource => resource.required && !resource.classroomOnly)

  if (nonClassroomResources.length > 0) {
    warnings.push("All required resources should be classroom-only for self-contained implementation")
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings
  }
}

// ========================================
// MILESTONE GENERATION UTILITIES
// ========================================

/**
 * Generates standard milestone structure for a unit
 */
export function generateStandardMilestones(
  unitId: string,
  customTitles?: [string, string, string],
  customFocus?: [string, string, string]
): ProjectMilestone[] {
  const defaultTitles = [
    "Foundation Milestone",
    "Integration Milestone", 
    "Professional Milestone"
  ]

  const defaultFocus = [
    "Technical foundation and core functionality",
    "System integration and advanced features",
    "Professional presentation and business readiness"
  ]

  const titles = customTitles || defaultTitles
  const focus = customFocus || defaultFocus

  return [
    {
      id: "foundation",
      day: STANDARD_MILESTONE_TIMING.FOUNDATION.day,
      title: titles[0],
      description: `Core technical implementation for ${unitId}`,
      focus: focus[0],
      criteria: [
        "Technical accuracy demonstrated",
        "Core functionality implemented",
        "Basic requirements met",
        "Foundation established for advanced work"
      ],
      deliverables: ["Technical implementation", "Accuracy verification", "Foundation documentation"]
    },
    {
      id: "integration",
      day: STANDARD_MILESTONE_TIMING.INTEGRATION.day, 
      title: titles[1],
      description: `Advanced features and system integration for ${unitId}`,
      focus: focus[1],
      criteria: [
        "Advanced features implemented",
        "System integration working",
        "Error handling and edge cases addressed",
        "Professional formatting applied"
      ],
      deliverables: ["Integrated system", "Advanced features", "Professional formatting"]
    },
    {
      id: "professional",
      day: STANDARD_MILESTONE_TIMING.PROFESSIONAL.day,
      title: titles[2], 
      description: `Business-ready system with professional presentation for ${unitId}`,
      focus: focus[2],
      criteria: [
        "System meets professional standards",
        "Business impact clearly demonstrated",
        "Presentation materials complete",
        "Ready for authentic audience"
      ],
      deliverables: ["Professional system", "Presentation materials", "Business impact analysis"]
    }
  ]
}

// ========================================
// RUBRIC GENERATION UTILITIES
// ========================================

/**
 * Generates standard rubric structure with customizable focus areas
 */
export function generateStandardRubric(
  technicalFocus: string,
  functionalityFocus: string,
  documentationFocus: string,
  presentationFocus: string,
  weights?: [string, string, string, string]
): ProjectRubricCriteria[] {
  const defaultWeights: [string, string, string, string] = ["40%", "25%", "15%", "20%"]
  const [techWeight, funcWeight, docWeight, presWeight] = weights || defaultWeights

  return [
    {
      name: STANDARD_RUBRIC_CATEGORIES.TECHNICAL_ACCURACY.name,
      weight: techWeight,
      focus: technicalFocus,
      exemplary: "All technical work perfect; sophisticated implementation; handles edge cases",
      proficient: "Technical work mostly correct; functional implementation; handles standard cases",
      developing: "Multiple technical errors; limited implementation; basic functionality only",
      businessStandard: "Professional systems require complete technical accuracy and reliability"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.FUNCTIONALITY.name,
      weight: funcWeight,
      focus: functionalityFocus,
      exemplary: "Sophisticated functionality; innovative features; seamless user experience",
      proficient: "Good functionality; appropriate features; adequate user experience",
      developing: "Limited functionality; basic features; poor user experience",
      businessStandard: "Business systems must demonstrate appropriate sophistication and usability"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.DOCUMENTATION.name,
      weight: docWeight,
      focus: documentationFocus,
      exemplary: "Comprehensive documentation; professional presentation; clear communication",
      proficient: "Good documentation; adequate presentation; clear basic communication",
      developing: "Limited documentation; poor presentation; unclear communication",
      businessStandard: "Professional systems require clear documentation and communication"
    },
    {
      name: STANDARD_RUBRIC_CATEGORIES.PRESENTATION.name,
      weight: presWeight,
      focus: presentationFocus,
      exemplary: "Compelling presentation; expertly handles questions; demonstrates business value",
      proficient: "Good presentation; adequately handles questions; shows business value",
      developing: "Weak presentation; struggles with questions; limited business value shown",
      businessStandard: "Successful business presentations must clearly communicate value and impact"
    }
  ]
}

// ========================================
// AUDIENCE SELECTION UTILITIES
// ========================================

/**
 * Suggests appropriate authentic audience based on unit focus
 */
export function suggestAuthenticAudience(unitFocus: string): string {
  const focusMap: Record<string, string> = {
    "financial": AUTHENTIC_AUDIENCES.INVESTORS,
    "automation": AUTHENTIC_AUDIENCES.INNOVATORS,
    "analysis": AUTHENTIC_AUDIENCES.STAKEHOLDERS,
    "executive": AUTHENTIC_AUDIENCES.EXECUTIVES,
    "advisory": AUTHENTIC_AUDIENCES.ADVISORS,
    "competitive": AUTHENTIC_AUDIENCES.PEERS
  }

  const matchedFocus = Object.keys(focusMap).find(key => 
    unitFocus.toLowerCase().includes(key)
  )

  return matchedFocus ? focusMap[matchedFocus] : AUTHENTIC_AUDIENCES.STAKEHOLDERS
}

// ========================================
// ASSESSMENT ANALYSIS UTILITIES
// ========================================

/**
 * Analyzes assessment coverage across all units
 */
export function analyzeAssessmentCoverage(): {
  audienceDistribution: Record<string, number>
  presentationFormats: string[]
  commonSkills: string[]
  businessStandards: string[]
} {
  const audienceCount: Record<string, number> = {}
  const formats = new Set<string>()
  const skills = new Set<string>()
  const standards = new Set<string>()

  allUnitProjectFrameworks.forEach(framework => {
    // Count audience types
    const audience = framework.performanceTask.audience
    audienceCount[audience] = (audienceCount[audience] || 0) + 1

    // Collect presentation formats
    framework.studentChoices.presentationFormats?.forEach(format => formats.add(format))

    // Collect business standards
    framework.rubric.forEach(criteria => {
      if (criteria.businessStandard) {
        standards.add(criteria.businessStandard)
      }
    })

    // Collect common skills from requirements
    framework.performanceTask.requirements.forEach(req => skills.add(req))
  })

  return {
    audienceDistribution: audienceCount,
    presentationFormats: Array.from(formats),
    commonSkills: Array.from(skills),
    businessStandards: Array.from(standards)
  }
}

/**
 * Gets assessment timeline for a specific unit
 */
export function getAssessmentTimeline(unitId: string): {
  milestones: { day: number; title: string; focus: string }[]
  finalPresentation: { day: number; duration: string }
} | null {
  const framework = getProjectFrameworkByUnitId(unitId)
  if (!framework) return null

  return {
    milestones: framework.milestones.map(m => ({
      day: m.day,
      title: m.title,
      focus: m.focus
    })),
    finalPresentation: {
      day: STANDARD_MILESTONE_TIMING.FINAL.day,
      duration: framework.performanceTask.duration
    }
  }
}

// ========================================
// RESOURCE MANAGEMENT UTILITIES  
// ========================================

/**
 * Validates resource availability for classroom-only implementation
 */
export function validateClassroomResources(framework: UnitProjectFramework): {
  selfContained: boolean
  requiredResources: string[]
  optionalEnhancements: string[]
} {
  const required: string[] = []
  const optional: string[] = []

  // Check templates
  framework.resources.templates.forEach(template => {
    if (template.required) {
      if (template.classroomOnly) {
        required.push(`${template.title} (classroom template)`)
      } else {
        required.push(`${template.title} (external resource)`)
      }
    }
  })

  // Check external resources
  framework.resources.external?.forEach(resource => {
    if (resource.required) {
      required.push(`${resource.title} (external partnership)`)
    } else {
      optional.push(`${resource.title} (enhancement opportunity)`)
    }
  })

  const selfContained = framework.resources.external?.every(r => !r.required) ?? true

  return {
    selfContained,
    requiredResources: required,
    optionalEnhancements: optional
  }
}

/**
 * Generates resource checklist for unit implementation
 */
export function generateResourceChecklist(unitId: string): string[] {
  const framework = getProjectFrameworkByUnitId(unitId)
  if (!framework) return []

  const checklist: string[] = []

  // Templates
  framework.resources.templates.forEach(template => {
    if (template.required) {
      checklist.push(`✅ Create ${template.title}: ${template.description}`)
    }
  })

  // Datasets
  framework.resources.datasets.forEach(dataset => {
    if (dataset.required) {
      checklist.push(`✅ Prepare ${dataset.title}: ${dataset.description}`)
    }
  })

  // Guides
  framework.resources.guides.forEach(guide => {
    if (guide.required) {
      checklist.push(`✅ Develop ${guide.title}: ${guide.description}`)
    }
  })

  // External partnerships (optional)
  framework.resources.external?.forEach(resource => {
    checklist.push(`🤝 Optional: Arrange ${resource.title}: ${resource.description}`)
  })

  return checklist
}

// ========================================
// EXPORT ALL UTILITIES
// ========================================

export const AssessmentUtilities = {
  validate: validateUnitProjectFramework,
  generateMilestones: generateStandardMilestones,
  generateRubric: generateStandardRubric,
  suggestAudience: suggestAuthenticAudience,
  analyzeCoverage: analyzeAssessmentCoverage,
  getTimeline: getAssessmentTimeline,
  validateResources: validateClassroomResources,
  generateChecklist: generateResourceChecklist
} as const
