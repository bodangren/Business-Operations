"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classroomRoutines, RoutineType } from "@/data/teacher/classroom-routines";
import Link from "next/link";
import { Lightbulb, ArrowLeft, Users, Target, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ReflectionPage() {
  const routine = classroomRoutines.find(r => r.type === RoutineType.Reflection)!;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/teacher/classroom-routines">
          <Button variant="outline" size="sm" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Classroom Routines
          </Button>
        </Link>
        
        <div className="flex items-center gap-3 mb-4">
          <Lightbulb className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{routine.name}</h1>
            <Badge className="bg-yellow-100 text-yellow-800 mt-2">
              {routine.type}
            </Badge>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground">
          {routine.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Teaching Instructions
              </CardTitle>
              <CardDescription>
                Detailed guidance for implementing this routine effectively in your classroom
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed">
                  {routine.teachingInstructions.trim()}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Course-Specific Implementation</CardTitle>
              <CardDescription>
                How to adapt this routine for Math for Business Operations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">CAP Development Focus</h4>
                <p className="text-sm text-muted-foreground">
                  Structure reflections around the course's core themes of Courage, 
                  Adaptability, and Persistence. Students analyze how they demonstrated 
                  these qualities during Excel modeling challenges, presentations, 
                  and collaborative problem-solving.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Professional Growth Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Connect reflections to professional skill development: technical 
                  Excel capabilities, business analysis skills, presentation confidence, 
                  and client communication. Help students see their growth trajectory 
                  toward business readiness.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Portfolio Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Use reflections as portfolio entries that students can share with 
                  potential employers or college admissions. Frame learning insights 
                  in professional language that demonstrates business competency development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Key Examples from Course
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {routine.examples.map((example, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm font-medium">{example}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Role Clarity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-sm mb-2">Teacher Role</h4>
                <p className="text-xs text-muted-foreground">
                  Prompt provider, facilitator of self-assessment, listener
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Student Role</h4>
                <p className="text-xs text-muted-foreground">
                  Reflector, self-assessor, goal-setter, critical thinker about own learning
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Indicators</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Students identify specific examples of growth or challenge
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Reflections go beyond surface-level to analyze thinking processes
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Clear connections made between learning and future goals
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Evidence of increased self-awareness and metacognition
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}