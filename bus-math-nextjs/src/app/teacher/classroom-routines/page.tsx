"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classroomRoutines, RoutineType } from "@/data/teacher/classroom-routines";
import Link from "next/link";
import { BookOpen, Users, Presentation, MessageSquare, CheckCircle, Lightbulb, UserCheck, ClipboardList, Target } from "lucide-react";

const routineIcons: Record<RoutineType, React.ComponentType<any>> = {
  [RoutineType.DirectInstruction]: BookOpen,
  [RoutineType.GuidedPractice]: UserCheck,
  [RoutineType.IndependentPractice]: Target,
  [RoutineType.CollaborativeWork]: Users,
  [RoutineType.PeerReview]: MessageSquare,
  [RoutineType.Presentations]: Presentation,
  [RoutineType.Reflection]: Lightbulb,
  [RoutineType.Assessment]: CheckCircle,
  [RoutineType.ProblemFraming]: ClipboardList,
};

const routineColors: Record<RoutineType, string> = {
  [RoutineType.DirectInstruction]: "bg-blue-100 text-blue-800",
  [RoutineType.GuidedPractice]: "bg-green-100 text-green-800",
  [RoutineType.IndependentPractice]: "bg-purple-100 text-purple-800",
  [RoutineType.CollaborativeWork]: "bg-orange-100 text-orange-800",
  [RoutineType.PeerReview]: "bg-pink-100 text-pink-800",
  [RoutineType.Presentations]: "bg-red-100 text-red-800",
  [RoutineType.Reflection]: "bg-yellow-100 text-yellow-800",
  [RoutineType.Assessment]: "bg-emerald-100 text-emerald-800",
  [RoutineType.ProblemFraming]: "bg-indigo-100 text-indigo-800",
};

function createSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
}

export default function ClassroomRoutinesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Classroom Routines Guide</h1>
        <p className="text-lg text-muted-foreground mb-6">
          Essential instructional routines for the Math for Business Operations course. Each routine includes detailed teaching instructions, examples from the curriculum, and implementation guidance.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h2 className="font-semibold text-blue-900 mb-2">About These Routines</h2>
          <p className="text-blue-800 text-sm">
            These routines are specifically designed for project-based learning in a business mathematics context. 
            They support the development of both technical Excel skills and professional business competencies 
            through authentic, real-world scenarios.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classroomRoutines.map((routine) => {
          const IconComponent = routineIcons[routine.type];
          const colorClass = routineColors[routine.type];
          const slug = createSlug(routine.name);
          
          return (
            <Card key={routine.name} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <IconComponent className="h-6 w-6 text-primary" />
                  <Badge className={colorClass}>
                    {routine.type}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{routine.name}</CardTitle>
                <CardDescription className="text-sm">
                  {routine.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <h4 className="font-medium text-sm mb-2">Example Activities:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {routine.examples.slice(0, 3).map((example, index) => (
                      <li key={index}>• {example}</li>
                    ))}
                    {routine.examples.length > 3 && (
                      <li className="text-primary">+ {routine.examples.length - 3} more examples</li>
                    )}
                  </ul>
                </div>
                <div className="mt-auto">
                  <Link href={`/teacher/classroom-routines/${slug}`}>
                    <Button className="w-full" size="sm">
                      View Teaching Instructions
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Implementation Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Routine Selection</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Match routines to learning objectives</li>
              <li>• Consider student experience level</li>
              <li>• Balance individual and collaborative work</li>
              <li>• Plan for formative assessment opportunities</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Course Context</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• All routines support Excel skill development</li>
              <li>• Authentic business scenarios are central</li>
              <li>• Student presentations to real audiences</li>
              <li>• Emphasis on professional communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}