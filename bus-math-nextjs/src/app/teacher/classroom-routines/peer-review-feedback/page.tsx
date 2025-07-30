"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { classroomRoutines, RoutineType } from "@/data/teacher/classroom-routines";
import Link from "next/link";
import { MessageSquare, ArrowLeft, Users, Target, CheckCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function PeerReviewPage() {
  const routine = classroomRoutines.find(r => r.type === RoutineType.PeerReview)!;

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
          <MessageSquare className="h-8 w-8 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">{routine.name}</h1>
            <Badge className="bg-pink-100 text-pink-800 mt-2">
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
                <h4 className="font-semibold mb-2">Professional Review Standards</h4>
                <p className="text-sm text-muted-foreground">
                  Teach students to provide feedback using professional business language. 
                  Focus on model accuracy, presentation clarity, and business logic rather 
                  than personal preferences. This prepares them for real workplace peer reviews.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-2">Excel Model Auditing</h4>
                <p className="text-sm text-muted-foreground">
                  Students review each other's Excel models for formula accuracy, 
                  formatting consistency, and error-checking. This builds critical 
                  financial modeling skills and attention to detail required in business.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibent mb-2">Gallery Walk Protocols</h4>
                <p className="text-sm text-muted-foreground">
                  Use structured gallery walks where students rotate through presentations 
                  or models, providing written feedback using business-appropriate rubrics. 
                  This mirrors professional conference and client presentation environments.
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
                  Trainer, organizer, quality controller of feedback, facilitator of revision
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-sm mb-2">Student Role</h4>
                <p className="text-xs text-muted-foreground">
                  Reviewer, feedback provider, feedback receiver, reviser
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
                  Feedback is specific, constructive, and actionable
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Students can identify both strengths and improvement areas
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Revised work shows clear incorporation of feedback
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  Students value and seek peer input on their work
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}