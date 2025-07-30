"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classroomRoutines, RoutineType } from "@/data/teacher/classroom-routines";
import Link from "next/link";
import { ClipboardList, ArrowLeft, Users, Target, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function ProblemFramingPage() {
  const routine = classroomRoutines.find(r => r.type === RoutineType.ProblemFraming)!;

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
          <ClipboardList className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{routine.name}</h1>
            <Badge className="bg-indigo-100 text-indigo-800 mt-2">
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
                <h4 className="font-semibold mb-2">Authentic Business Scenarios</h4>
                <p className="text-sm text-muted-foreground">
                  Use real business cases and data when possible. Partner with local 
                  businesses, CPAs, or entrepreneurs to provide genuine challenges that 
                  students might encounter in their careers. This increases engagement 
                  and demonstrates the practical value of their learning.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Character-Driven Narratives</h4>
                <p className="text-sm text-muted-foreground">
                  Develop recurring characters like Sarah Chen and TechStart Solutions 
                  to create continuity across units. Students become invested in helping 
                  these characters solve their business challenges, making the learning 
                  more personally meaningful.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Professional Stakeholder Introduction</h4>
                <p className="text-sm text-muted-foreground">
                  Introduce the "clients" or "stakeholders" early in each unit. 
                  Students should understand who will evaluate their final work 
                  (investors, auditors, board members) and what success looks like 
                  from a professional perspective.
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
                  Storyteller, problem-setter, motivator, context provider
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Student Role</h4>
                <p className="text-xs text-muted-foreground">
                  Engaged listener, questioner, initial problem-solver, inquirer
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
                  Students ask thoughtful questions about the challenge
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Visible engagement and curiosity about the problem
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Students connect the challenge to their own experiences
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Clear understanding of what success will look like
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}