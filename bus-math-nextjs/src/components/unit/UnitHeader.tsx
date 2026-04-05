import { Badge } from "@/components/ui/badge"
import { Clock, GraduationCap, Circle } from "lucide-react"

interface UnitHeaderProps {
  unitNumber: string
  title: string
  description: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const difficultyConfig = {
  Beginner: { color: "bg-green-100 text-green-800", icon: Circle, iconClass: "text-green-600 fill-green-600" },
  Intermediate: { color: "bg-amber-100 text-amber-800", icon: Circle, iconClass: "text-amber-600 fill-amber-600" },
  Advanced: { color: "bg-red-100 text-red-800", icon: Circle, iconClass: "text-red-600 fill-red-600" }
}

export function UnitHeader({ unitNumber, title, description, duration, difficulty }: UnitHeaderProps) {
  const difficultyStyle = difficultyConfig[difficulty]
  const DifficultyIcon = difficultyStyle.icon
  
  return (
    <header className="space-y-4">
      <div className="flex items-center gap-4 text-sm">
        <Badge variant="default" className="bg-primary text-primary-foreground px-3 py-1">
          {unitNumber}
        </Badge>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{duration}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <GraduationCap className="h-4 w-4" />
          <Badge variant="secondary" className={difficultyStyle.color}>
            <DifficultyIcon className={`h-3 w-3 mr-1 ${difficultyStyle.iconClass}`} />
            {difficulty}
          </Badge>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      
      <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
        {description}
      </p>
    </header>
  )
}