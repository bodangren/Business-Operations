"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classroomRoutines, RoutineType } from "@/data/teacher/classroom-routines";
import Link from "next/link";
import { Target, ArrowLeft, Users, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function IndependentPracticePage() {
  const routine = classroomRoutines.find(r => r.type === RoutineType.IndependentPractice)!;

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
          <Target className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{routine.name}</h1>
            <Badge className="bg-purple-100 text-purple-800 mt-2">
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
                <h4 className="font-semibold mb-2">Project Component Building</h4>
                <p className="text-sm text-muted-foreground">
                  Students work independently on specific components of their unit projects. 
                  Provide clear milestones and checkpoints, but allow creative problem-solving. 
                  This builds ownership and prepares them for real workplace independence.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Excel Mastery Development</h4>
                <p className="text-sm text-muted-foreground">
                  Encourage students to explore Excel features beyond what was demonstrated. 
                  Provide access to help resources, templates, and examples, but let them 
                  discover solutions. This builds the self-reliance needed for professional work.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Professional Standards</h4>
                <p className="text-sm text-muted-foreground">
                  Set expectations for professional-quality deliverables including proper 
                  formatting, error-checking, and documentation. Students should treat 
                  independent work as preparation for client presentations.
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
                  Monitor, provide individual support, assess progress
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Student Role</h4>
                <p className="text-xs text-muted-foreground">
                  Independent problem-solver, self-regulator, applying skills
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
                  Students attempt solutions before asking for help
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Work shows evidence of iterative improvement
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Students self-check their work for accuracy
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Creative solutions emerge within given constraints
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}