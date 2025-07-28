import { Badge } from "@/components/ui/badge"
import { Clock, GraduationCap } from "lucide-react"

interface UnitHeaderProps {
  unitNumber: string
  title: string
  description: string
  duration: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
}

const difficultyConfig = {
  Beginner: { color: "bg-green-100 text-green-800", icon: "🟢" },
  Intermediate: { color: "bg-yellow-100 text-yellow-800", icon: "🟡" },
  Advanced: { color: "bg-red-100 text-red-800", icon: "🔴" }
}

export function UnitHeader({ unitNumber, title, description, duration, difficulty }: UnitHeaderProps) {
  const difficultyStyle = difficultyConfig[difficulty]
  
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
          <Badge variant="outline" className={difficultyStyle.color}>
            {difficultyStyle.icon} {difficulty}
          </Badge>
        </div>
      </div>
      
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      
      <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
        {description}
      </p>
    </header>
  )
}