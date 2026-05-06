'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { FileText, Download, Eye, Settings, Check } from 'lucide-react';

export interface Question {
  id: string;
  type: 'multiple-choice' | 'short-answer' | 'matching' | 'true-false';
  question: string;
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  points?: number;
}

export interface MatchingPair {
  id: string;
  left: string;
  right: string;
}

export interface WorksheetConfig {
  title: string;
  unitName?: string;
  lessonNumber?: number;
  instructions?: string;
  showPointValues?: boolean;
  showAnswerSpaces?: boolean;
  answerSpaceLines?: number;
  includeAnswerKey?: boolean;
  bilingual?: boolean;
  chineseColumn?: boolean;
}

export interface WorksheetGeneratorProps {
  /** Questions to include in worksheet */
  questions: Question[];
  /** Matching pairs for matching exercises */
  matchingPairs?: MatchingPair[];
  /** Worksheet configuration */
  config: WorksheetConfig;
  /** Enable question selection */
  enableSelection?: boolean;
  /** Callback when worksheet is generated */
  onGenerate?: (selectedQuestions: Question[]) => void;
  /** Additional class names */
  className?: string;
}

/**
 * WorksheetGenerator component
 * Generates printable worksheets from questions and exercises
 */
export function WorksheetGenerator({
  questions,
  matchingPairs = [],
  config,
  enableSelection = true,
  onGenerate,
  className,
}: WorksheetGeneratorProps) {
  const [selectedQuestions, setSelectedQuestions] = useState<Set<string>>(
    new Set(questions.map((q) => q.id))
  );
  const [showSettings, setShowSettings] = useState(false);
  const [localConfig, setLocalConfig] = useState<WorksheetConfig>(config);

  const handleQuestionToggle = useCallback((questionId: string) => {
    setSelectedQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(questionId)) {
        next.delete(questionId);
      } else {
        next.add(questionId);
      }
      return next;
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    setSelectedQuestions(new Set(questions.map((q) => q.id)));
  }, [questions]);

  const handleDeselectAll = useCallback(() => {
    setSelectedQuestions(new Set());
  }, []);

  const handleGenerate = useCallback(() => {
    const selected = questions.filter((q) => selectedQuestions.has(q.id));
    onGenerate?.(selected);
  }, [questions, selectedQuestions, onGenerate]);

  const totalPoints = questions
    .filter((q) => selectedQuestions.has(q.id))
    .reduce((sum, q) => sum + (q.points || 1), 0);

  const renderQuestionForPrint = (question: Question, index: number) => {
    const points = question.points || 1;

    return (
      <div key={question.id} className="question page-break-avoid">
        <div className="flex items-start gap-2">
          <span className="question-number">{index + 1}.</span>
          <div className="flex-1">
            <div className="question-text">
              {question.question}
              {localConfig.showPointValues && (
                <span className="text-sm text-muted-foreground ml-2">
                  ({points} {points === 1 ? 'point' : 'points'})
                </span>
              )}
            </div>

            {question.type === 'multiple-choice' && question.options && (
              <div className="options">
                {question.options.map((option, optIndex) => (
                  <div key={optIndex} className="option">
                    <div className="option-marker" />
                    <span>
                      {String.fromCharCode(65 + optIndex)}. {option}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {question.type === 'true-false' && (
              <div className="options">
                <div className="option">
                  <div className="option-marker" />
                  <span>True</span>
                </div>
                <div className="option">
                  <div className="option-marker" />
                  <span>False</span>
                </div>
              </div>
            )}

            {question.type === 'short-answer' && (
              <div className="mt-4">
                {Array.from({ length: localConfig.answerSpaceLines || 3 }).map((_, i) => (
                  <div key={i} className="answer-space" />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderMatchingForPrint = () => {
    if (matchingPairs.length === 0) return null;

    return (
      <div className="matching page-break-avoid">
        <div className="question-text font-semibold mb-4">
          Match the items from Column A with Column B:
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Column A</h4>
            <ol className="matching-column list-decimal list-inside">
              {matchingPairs.map((pair, index) => (
                <li key={pair.id} className="matching-item">
                  <span className="matching-item-number">{index + 1}.</span>
                  {pair.left}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Column B</h4>
            <ul className="matching-column list-none">
              {matchingPairs.map((pair, index) => (
                <li key={pair.id} className="matching-item">
                  <span className="matching-item-number">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {pair.right}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm font-semibold">Your Answers:</p>
          <div className="grid grid-cols-4 gap-2 mt-2">
            {matchingPairs.map((_, index) => (
              <div key={index} className="flex items-center gap-2">
                <span>{index + 1}.</span>
                <div className="answer-space flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderAnswerKey = () => {
    if (!localConfig.includeAnswerKey) return null;

    const selectedQuestionsList = questions.filter((q) => selectedQuestions.has(q.id));

    return (
      <div className="answer-key">
        <div className="answer-key-header">
          <h2>Answer Key</h2>
          <p>{localConfig.title}</p>
        </div>

        {selectedQuestionsList.map((question, index) => (
          <div key={question.id} className="answer-item">
            <div className="flex items-start gap-2">
              <span className="question-number">{index + 1}.</span>
              <div className="flex-1">
                <div className="answer-text">
                  {Array.isArray(question.correctAnswer)
                    ? question.correctAnswer.join(', ')
                    : question.correctAnswer}
                </div>
                {question.explanation && (
                  <div className="answer-explanation">{question.explanation}</div>
                )}
              </div>
            </div>
          </div>
        ))}

        {matchingPairs.length > 0 && (
          <div className="answer-item">
            <div className="question-number">Matching:</div>
            <div className="mt-2">
              {matchingPairs.map((pair, index) => (
                <div key={pair.id} className="flex items-center gap-2">
                  <span className="font-medium">{index + 1}.</span>
                  <span>{pair.left}</span>
                  <span className="mx-2">→</span>
                  <span>{String.fromCharCode(65 + index)}.</span>
                  <span>{pair.right}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              Worksheet Generator
            </CardTitle>
            <CardDescription>
              {selectedQuestions.size} of {questions.length} questions selected
              {totalPoints > 0 && ` • ${totalPoints} total points`}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowSettings(!showSettings)}
            >
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </Button>
            <Button onClick={handleGenerate} disabled={selectedQuestions.size === 0}>
              <Download className="h-4 w-4 mr-2" />
              Generate Worksheet
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {/* Settings panel */}
        {showSettings && (
          <div className="mb-6 p-4 border rounded-lg bg-muted/50">
            <h4 className="font-semibold mb-4">Worksheet Settings</h4>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localConfig.showPointValues}
                  onChange={(e) =>
                    setLocalConfig((prev) => ({
                      ...prev,
                      showPointValues: e.target.checked,
                    }))
                  }
                />
                Show point values
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localConfig.includeAnswerKey}
                  onChange={(e) =>
                    setLocalConfig((prev) => ({
                      ...prev,
                      includeAnswerKey: e.target.checked,
                    }))
                  }
                />
                Include answer key
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={localConfig.bilingual}
                  onChange={(e) =>
                    setLocalConfig((prev) => ({
                      ...prev,
                      bilingual: e.target.checked,
                    }))
                  }
                />
                Bilingual worksheet
              </label>
              <div className="flex items-center gap-2">
                <label>Answer lines:</label>
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={localConfig.answerSpaceLines || 3}
                  onChange={(e) =>
                    setLocalConfig((prev) => ({
                      ...prev,
                      answerSpaceLines: parseInt(e.target.value) || 3,
                    }))
                  }
                  className="w-16 px-2 py-1 border rounded"
                />
              </div>
            </div>
          </div>
        )}

        {/* Selection controls */}
        {enableSelection && (
          <div className="mb-4 flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleSelectAll}>
              Select All
            </Button>
            <Button variant="outline" size="sm" onClick={handleDeselectAll}>
              Deselect All
            </Button>
          </div>
        )}

        {/* Question list */}
        <div className="space-y-4">
          {questions.map((question, index) => (
            <div
              key={question.id}
              className={cn(
                'p-4 border rounded-lg transition-colors',
                enableSelection && 'cursor-pointer hover:bg-muted/50',
                selectedQuestions.has(question.id)
                  ? 'border-primary bg-primary/5'
                  : 'border-border'
              )}
              onClick={() => enableSelection && handleQuestionToggle(question.id)}
            >
              <div className="flex items-start gap-3">
                {enableSelection && (
                  <div className="mt-1">
                    <div
                      className={cn(
                        'w-5 h-5 rounded border-2 flex items-center justify-center',
                        selectedQuestions.has(question.id)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-muted-foreground'
                      )}
                    >
                      {selectedQuestions.has(question.id) && (
                        <Check className="h-3 w-3" />
                      )}
                    </div>
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{index + 1}.</span>
                    <Badge variant="outline">{question.type}</Badge>
                    {question.points && question.points > 1 && (
                      <Badge variant="secondary">{question.points} pts</Badge>
                    )}
                  </div>
                  <p className="mt-2">{question.question}</p>
                  {question.type === 'multiple-choice' && question.options && (
                    <div className="mt-2 ml-4 text-sm text-muted-foreground">
                      {question.options.map((opt, i) => (
                        <div key={i}>
                          {String.fromCharCode(65 + i)}. {opt}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {matchingPairs.length > 0 && (
            <div className="p-4 border rounded-lg bg-muted/50">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline">matching</Badge>
                <span className="font-medium">{matchingPairs.length} pairs</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong>Column A:</strong>
                  {matchingPairs.map((pair, i) => (
                    <div key={pair.id}>
                      {i + 1}. {pair.left}
                    </div>
                  ))}
                </div>
                <div>
                  <strong>Column B:</strong>
                  {matchingPairs.map((pair, i) => (
                    <div key={pair.id}>
                      {String.fromCharCode(65 + i)}. {pair.right}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Print preview */}
        <div className="mt-8 border-t pt-6">
          <h4 className="font-semibold mb-4 flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Print Preview
          </h4>
          <div className="print-preview border rounded-lg p-8 bg-white">
            {/* Worksheet header */}
            <div className="worksheet-header text-center mb-8 pb-4 border-b-2 border-primary">
              <h1 className="text-2xl font-bold">{localConfig.title}</h1>
              {localConfig.unitName && <p>{localConfig.unitName}</p>}
              {localConfig.lessonNumber && <p>Lesson {localConfig.lessonNumber}</p>}

              <div className="student-info mt-4 grid grid-cols-2 gap-4 text-left">
                <div className="student-info-field flex items-center gap-2">
                  <label className="font-medium">Name:</label>
                  <div className="line flex-1 border-b border-black" />
                </div>
                <div className="student-info-field flex items-center gap-2">
                  <label className="font-medium">Date:</label>
                  <div className="line flex-1 border-b border-black" />
                </div>
              </div>
            </div>

            {/* Instructions */}
            {localConfig.instructions && (
              <div className="instructions mb-6 p-4 bg-blue-50 border border-blue-200 rounded">
                <div className="instructions-title font-semibold text-blue-800">
                  Instructions:
                </div>
                <p>{localConfig.instructions}</p>
              </div>
            )}

            {/* Questions preview */}
            <div className="space-y-6">
              {questions
                .filter((q) => selectedQuestions.has(q.id))
                .map((question, index) => renderQuestionForPrint(question, index))}

              {matchingPairs.length > 0 && renderMatchingForPrint()}
            </div>

            {/* Answer key */}
            {renderAnswerKey()}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default WorksheetGenerator;
