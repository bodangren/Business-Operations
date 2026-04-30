'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface ReflectionPrompt {
  id: string;
  category: string;
  prompt: string;
  placeholder: string;
}

interface ReflectionJournalProps {
  unitTitle?: string;
  prompts?: ReflectionPrompt[];
  onSave?: (responses: Record<string, string>) => void;
  className?: string;
}

const defaultPrompts: ReflectionPrompt[] = [
  {
    id: 'courage-1',
    category: 'courage',
    prompt: 'What was the most challenging part of this unit that required you to step outside your comfort zone?',
    placeholder: 'Describe a specific moment when you had to take a risk or try something new...'
  },
  {
    id: 'adaptability-1', 
    category: 'adaptability',
    prompt: 'How did you adjust your approach when you encountered unexpected problems or feedback?',
    placeholder: 'Think about times when you had to change your strategy or method...'
  },
  {
    id: 'persistence-1',
    category: 'persistence',
    prompt: 'Describe a time when you wanted to give up but kept working. What motivated you to continue?',
    placeholder: 'Reflect on your perseverance and what helped you push through...'
  }
];

/**
 * ReflectionJournal - A component for student self-reflection on learning experiences
 * 
 * Supports the CAP (Courage, Adaptability, Persistence) framework used throughout
 * the Grade 12 Business Operations curriculum. Students reflect on their learning
 * journey and develop metacognitive awareness.
 */
export default function ReflectionJournal({
  unitTitle = "Learning Reflection",
  prompts = defaultPrompts,
  onSave,
  className = ""
}: ReflectionJournalProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [isSaved, setIsSaved] = useState(false);

  const handleResponseChange = (promptId: string, value: string) => {
    setResponses(prev => ({
      ...prev,
      [promptId]: value
    }));
    if (isSaved) setIsSaved(false);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(responses);
    }
    setIsSaved(true);
  };

  const getCategoryColor = (category: ReflectionPrompt['category']) => {
    switch (category) {
      case 'courage': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'adaptability': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'persistence': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    }
  };

  const getCategoryIcon = (category: ReflectionPrompt['category']) => {
    switch (category) {
      case 'courage': return '🦁';
      case 'adaptability': return '🌊';
      case 'persistence': return '⚡';
    }
  };

  const completedCount = Object.keys(responses).filter(key => responses[key]?.trim()).length;
  const totalCount = prompts.length;

  return (
    <div className={`max-w-4xl mx-auto p-4 space-y-6 ${className}`}>
      <Card className="card-ledger border-2 border-primary">
        <CardHeader className="border-b-2 border-primary">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-display font-bold italic">{unitTitle}</CardTitle>
              <CardDescription className="font-body italic mt-1">
                Reflect on your learning journey and growth in the CAP framework
              </CardDescription>
            </div>
            <div className="flex items-center gap-3">
              <Badge variant="outline" className="font-mono border-primary">
                {completedCount}/{totalCount} COMPLETE
              </Badge>
              {isSaved && (
                <Badge variant="stamp">
                  ✓ RECORDED
                </Badge>
              )}
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-8 pt-8">
          {prompts.map((prompt) => (
            <Card key={prompt.id} className="border-2 border-primary bg-white shadow-none">
              <CardHeader className="pb-3 border-b border-primary/20 bg-muted/10">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl grayscale">{getCategoryIcon(prompt.category)}</span>
                  <Badge className={`${getCategoryColor(prompt.category)} border-none rounded-none font-mono font-bold tracking-widest px-2`}>
                    {prompt.category.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-display font-bold">
                  {prompt.prompt}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <Label htmlFor={prompt.id} className="sr-only">
                    Response to {prompt.category} reflection
                  </Label>
                  <textarea
                    id={prompt.id}
                    className="w-full min-h-[140px] p-4 border-2 border-primary bg-background text-base font-body resize-vertical focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-none"
                    placeholder={prompt.placeholder}
                    value={responses[prompt.id] || ''}
                    onChange={(e) => handleResponseChange(prompt.id, e.target.value)}
                  />
                  <div className="flex justify-between text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground pt-2">
                    <span>
                      {responses[prompt.id]?.length || 0} CHARACTERS RECORDED
                    </span>
                    {responses[prompt.id]?.trim() && (
                      <span className="text-[var(--ledger-green)]">✓ COMPLETE</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <div className="flex justify-between items-center pt-6 border-t-2 border-primary">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
              PROGRESS: {completedCount}/{totalCount} REFLECTIONS FILED
            </div>
            <Button 
              onClick={handleSave}
              disabled={completedCount === 0}
              className="min-w-[160px] border-2"
            >
              {isSaved ? '✓ RECORD SAVED' : 'COMMIT REFLECTION'}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}