import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, UserCheck, Presentation } from "lucide-react"

interface StudentChoicesProps {
  studentChoices: {
    ventures?: string[]
    roles?: string[]
    presentationFormats?: string[]
  }
}

export function StudentChoices({ studentChoices }: StudentChoicesProps) {
  const hasChoices = studentChoices.ventures || studentChoices.roles || studentChoices.presentationFormats
  
  if (!hasChoices) return null
  
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold flex items-center gap-2">
        <Users className="h-6 w-6 text-indigo-600" />
        Student Voice & Choice
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {studentChoices.ventures && (
          <Card className="border-indigo-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Badge variant="outline" className="bg-indigo-100 text-indigo-800">
                  📈
                </Badge>
                Venture Selection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Choose from provided startups or propose your own:
              </p>
              <div className="space-y-2">
                {studentChoices.ventures.map((venture, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2">
                    {venture}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {studentChoices.roles && (
          <Card className="border-indigo-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <UserCheck className="h-5 w-5 text-indigo-600" />
                Team Roles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Select your team role based on your strengths:
              </p>
              <div className="space-y-2">
                {studentChoices.roles.map((role, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {role}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
        
        {studentChoices.presentationFormats && (
          <Card className="border-indigo-200">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Presentation className="h-5 w-5 text-indigo-600" />
                Presentation Style
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Choose how you want to present your work:
              </p>
              <div className="space-y-2">
                {studentChoices.presentationFormats.map((format, index) => (
                  <Badge key={index} variant="outline" className="mr-2 mb-2">
                    {format}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  )
}