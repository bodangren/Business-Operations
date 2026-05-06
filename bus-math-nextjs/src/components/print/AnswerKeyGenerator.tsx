'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Key, Download, Copy, Check, FileText } from 'lucide-react';

export interface AnswerKeyQuestion {
  id: string;
  number: number;
  type: 'multiple-choice' | 'short-answer' | 'matching' | 'true-false';
  question: string;
  correctAnswer: string | string[];
  explanation?: string;
  points?: number;
  rubric?: RubricCriteria[];
}

export interface RubricCriteria {
  id: string;
  name: string;
  description: string;
  points: number;
  levels: RubricLevel[];
}

export interface RubricLevel {
  score: number;
  description: string;
}

export interface MatchingAnswer {
  id: string;
  number: number;
  left: string;
  right: string;
}

export interface AnswerKeyGeneratorProps {
  /** Questions to generate answer key for */
  questions: AnswerKeyQuestion[];
  /** Matching pairs */
  matchingPairs?: MatchingAnswer[];
  /** Worksheet title */
  title: string;
  /** Unit name */
  unitName?: string;
  /** Lesson number */
  lessonNumber?: number;
  /** Show explanations */
  showExplanations?: boolean;
  /** Show rubrics */
  showRubrics?: boolean;
  /** Show point values */
  showPoints?: boolean;
  /** Enable copy to clipboard */
  enableCopy?: boolean;
  /** Callback when answer key is generated */
  onGenerate?: (answerKey: string) => void;
  /** Additional class names */
  className?: string;
}

/**
 * AnswerKeyGenerator component
 * Generates answer keys with explanations and rubrics
 */
export function AnswerKeyGenerator({
  questions,
  matchingPairs = [],
  title,
  unitName,
  lessonNumber,
  showExplanations = true,
  showRubrics = true,
  showPoints = true,
  enableCopy = true,
  onGenerate,
  className,
}: AnswerKeyGeneratorProps) {
  const [copied, setCopied] = useState(false);

  const totalPoints = questions.reduce((sum, q) => sum + (q.points || 1), 0);

  const generateAnswerKeyText = () => {
    let text = `ANSWER KEY\n`;
    text += `${title}\n`;
    if (unitName) text += `${unitName}\n`;
    if (lessonNumber) text += `Lesson ${lessonNumber}\n`;
    text += `\n`;
    text += `Total Points: ${totalPoints}\n`;
    text += `${'='.repeat(50)}\n\n`;

    questions.forEach((question) => {
      const points = question.points || 1;
      text += `${question.number}. `;

      if (Array.isArray(question.correctAnswer)) {
        text += question.correctAnswer.join(', ');
      } else {
        text += question.correctAnswer;
      }

      if (showPoints) {
        text += ` (${points} ${points === 1 ? 'point' : 'points'})`;
      }
      text += '\n';

      if (showExplanations && question.explanation) {
        text += `   Explanation: ${question.explanation}\n`;
      }

      if (showRubrics && question.rubric && question.rubric.length > 0) {
        text += `   Rubric:\n`;
        question.rubric.forEach((criteria) => {
          text += `   - ${criteria.name}: ${criteria.description} (${criteria.points} pts)\n`;
        });
      }

      text += '\n';
    });

    if (matchingPairs.length > 0) {
      text += `MATCHING\n`;
      text += `${'-'.repeat(30)}\n`;
      matchingPairs.forEach((pair) => {
        text += `${pair.number}. ${pair.left} → ${pair.right}\n`;
      });
      text += '\n';
    }

    return text;
  };

  const handleCopy = async () => {
    const text = generateAnswerKeyText();
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleGenerate = () => {
    const text = generateAnswerKeyText();
    onGenerate?.(text);
  };

  const handleDownload = () => {
    const text = generateAnswerKeyText();
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `answer-key-${title.toLowerCase().replace(/\s+/g, '-')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const renderAnswerForPrint = (question: AnswerKeyQuestion) => {
    const points = question.points || 1;

    return (
      <div key={question.id} className="answer-item">
        <div className="flex items-start gap-2">
          <span className="question-number font-bold">{question.number}.</span>
          <div className="flex-1">
            <div className="answer-text font-semibold">
              {Array.isArray(question.correctAnswer) ? (
                <div className="space-y-1">
                  {question.correctAnswer.map((answer, index) => (
                    <div key={index}>
                      {String.fromCharCode(65 + index)}. {answer}
                    </div>
                  ))}
                </div>
              ) : (
                question.correctAnswer
              )}
            </div>

            {showPoints && (
              <div className="text-sm text-muted-foreground mt-1">
                {points} {points === 1 ? 'point' : 'points'}
              </div>
            )}

            {showExplanations && question.explanation && (
              <div className="answer-explanation mt-2 text-sm text-muted-foreground italic">
                <strong>Explanation:</strong> {question.explanation}
              </div>
            )}

            {showRubrics && question.rubric && question.rubric.length > 0 && (
              <div className="rubric mt-4">
                <div className="rubric-title">Grading Rubric</div>
                {question.rubric.map((criteria) => (
                  <div key={criteria.id} className="rubric-criteria">
                    <div className="rubric-criteria-title">
                      {criteria.name} ({criteria.points} points)
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {criteria.description}
                    </div>
                    <div className="space-y-1 mt-2">
                      {criteria.levels.map((level, index) => (
                        <div key={index} className="rubric-level">
                          <div className="rubric-level-score">{level.score}</div>
                          <div className="rubric-level-description">
                            {level.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-5 w-5" />
              Answer Key Generator
            </CardTitle>
            <CardDescription>
              {questions.length} questions • {totalPoints} total points
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            {enableCopy && (
              <Button variant="outline" size="sm" onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </>
                )}
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button onClick={handleGenerate}>
              <FileText className="h-4 w-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Answer key preview */}
        <div className="border rounded-lg p-6 bg-white">
          <div className="answer-key-header text-center mb-6 pb-4 border-b-2 border-yellow-500">
            <h2 className="text-xl font-bold">Answer Key</h2>
            <p className="text-lg">{title}</p>
            {unitName && <p className="text-sm text-muted-foreground">{unitName}</p>}
            {lessonNumber && (
              <p className="text-sm text-muted-foreground">Lesson {lessonNumber}</p>
            )}
            <div className="mt-2">
              <Badge variant="outline">Total: {totalPoints} points</Badge>
            </div>
          </div>

          <div className="space-y-4">
            {questions.map((question) => renderAnswerForPrint(question))}

            {matchingPairs.length > 0 && (
              <div className="answer-item border-t pt-4 mt-4">
                <div className="font-semibold mb-2">Matching Answers:</div>
                <div className="space-y-1">
                  {matchingPairs.map((pair) => (
                    <div key={pair.id} className="flex items-center gap-2">
                      <span className="font-medium">{pair.number}.</span>
                      <span>{pair.left}</span>
                      <span className="mx-2">→</span>
                      <span>{pair.right}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Text version */}
        <div className="mt-6">
          <h4 className="font-semibold mb-2">Text Version</h4>
          <pre className="p-4 bg-muted rounded-lg text-sm overflow-auto max-h-64 whitespace-pre-wrap">
            {generateAnswerKeyText()}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}

export default AnswerKeyGenerator;
