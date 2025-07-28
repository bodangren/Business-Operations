import { UnitData } from "@/types/unit"
import { UnitHeader } from "./UnitHeader"
import { UnitOverview } from "./UnitOverview"
import { DrivingQuestion } from "./DrivingQuestion"
import { AssessmentOverview } from "./AssessmentOverview"
import { LearningSequence } from "./LearningSequence"
import { StudentChoices } from "./StudentChoices"
import { Prerequisites } from "./Prerequisites"

interface UnitTemplateProps {
  unitData: UnitData
  className?: string
}

export function UnitTemplate({ unitData, className = "" }: UnitTemplateProps) {
  return (
    <div className={`space-y-12 ${className}`}>
      <UnitHeader
        unitNumber={unitData.id}
        title={unitData.title}
        description={unitData.description}
        duration={unitData.duration}
        difficulty={unitData.difficulty}
      />
      
      <UnitOverview objectives={unitData.objectives} />
      
      <DrivingQuestion drivingQuestion={unitData.drivingQuestion} />
      
      <AssessmentOverview assessment={unitData.assessment} />
      
      <LearningSequence learningSequence={unitData.learningSequence} />
      
      <StudentChoices studentChoices={unitData.studentChoices} />
      
      <Prerequisites 
        prerequisites={unitData.prerequisites}
        differentiation={unitData.differentiation}
      />
    </div>
  )
}