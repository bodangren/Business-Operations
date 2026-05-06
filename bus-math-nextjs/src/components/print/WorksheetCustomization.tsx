'use client';

import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  Settings,
  FileText,
  Key,
  Globe,
  Plus,
  Trash2,
  GripVertical,
  Eye,
  Save,
} from 'lucide-react';

export interface WorksheetSection {
  id: string;
  title: string;
  type: 'multiple-choice' | 'short-answer' | 'matching' | 'true-false' | 'custom';
  instructions?: string;
  questions: WorksheetQuestion[];
  pointsPerQuestion?: number;
  showPointValues?: boolean;
}

export interface WorksheetQuestion {
  id: string;
  text: string;
  type: 'multiple-choice' | 'short-answer' | 'matching' | 'true-false' | 'custom';
  options?: string[];
  correctAnswer?: string | string[];
  explanation?: string;
  points?: number;
  bilingualText?: string;
  bilingualOptions?: string[];
}

export interface WorksheetCustomizationConfig {
  title: string;
  unitName?: string;
  lessonNumber?: number;
  instructions?: string;
  showStudentInfo: boolean;
  showPointValues: boolean;
  showInstructions: boolean;
  includeAnswerKey: boolean;
  bilingual: boolean;
  chineseColumn: boolean;
  answerSpaceLines: number;
  pageBreaksBetweenSections: boolean;
  headerText?: string;
  footerText?: string;
  teacherNotes?: string;
}

export interface WorksheetCustomizationProps {
  /** Initial sections */
  initialSections?: WorksheetSection[];
  /** Initial config */
  initialConfig?: WorksheetCustomizationConfig;
  /** Available exercises from lesson */
  availableExercises?: WorksheetQuestion[];
  /** Callback when worksheet is saved */
  onSave?: (sections: WorksheetSection[], config: WorksheetCustomizationConfig) => void;
  /** Callback when preview is requested */
  onPreview?: (sections: WorksheetSection[], config: WorksheetCustomizationConfig) => void;
  /** Additional class names */
  className?: string;
}

const defaultConfig: WorksheetCustomizationConfig = {
  title: 'Worksheet',
  showStudentInfo: true,
  showPointValues: true,
  showInstructions: true,
  includeAnswerKey: true,
  bilingual: false,
  chineseColumn: false,
  answerSpaceLines: 3,
  pageBreaksBetweenSections: true,
};

/**
 * WorksheetCustomization component
 * Interface for customizing worksheet content and layout
 */
export function WorksheetCustomization({
  initialSections = [],
  initialConfig,
  availableExercises = [],
  onSave,
  onPreview,
  className,
}: WorksheetCustomizationProps) {
  const [sections, setSections] = useState<WorksheetSection[]>(initialSections);
  const [config, setConfig] = useState<WorksheetCustomizationConfig>(
    initialConfig || defaultConfig
  );
  const [activeTab, setActiveTab] = useState('sections');
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const handleAddSection = useCallback(() => {
    const newSection: WorksheetSection = {
      id: `section-${Date.now()}`,
      title: `Section ${sections.length + 1}`,
      type: 'multiple-choice',
      questions: [],
      pointsPerQuestion: 1,
      showPointValues: config.showPointValues,
    };
    setSections((prev) => [...prev, newSection]);
    setSelectedSection(newSection.id);
  }, [sections.length, config.showPointValues]);

  const handleRemoveSection = useCallback((sectionId: string) => {
    setSections((prev) => prev.filter((s) => s.id !== sectionId));
    if (selectedSection === sectionId) {
      setSelectedSection(null);
    }
  }, [selectedSection]);

  const handleUpdateSection = useCallback(
    (sectionId: string, updates: Partial<WorksheetSection>) => {
      setSections((prev) =>
        prev.map((s) => (s.id === sectionId ? { ...s, ...updates } : s))
      );
    },
    []
  );

  const handleAddQuestion = useCallback(
    (sectionId: string) => {
      const section = sections.find((s) => s.id === sectionId);
      if (!section) return;

      const newQuestion: WorksheetQuestion = {
        id: `question-${Date.now()}`,
        text: 'New question',
        type: section.type,
        options: section.type === 'multiple-choice' ? ['Option A', 'Option B', 'Option C', 'Option D'] : undefined,
        points: section.pointsPerQuestion || 1,
      };

      handleUpdateSection(sectionId, {
        questions: [...section.questions, newQuestion],
      });
    },
    [sections, handleUpdateSection]
  );

  const handleRemoveQuestion = useCallback(
    (sectionId: string, questionId: string) => {
      const section = sections.find((s) => s.id === sectionId);
      if (!section) return;

      handleUpdateSection(sectionId, {
        questions: section.questions.filter((q) => q.id !== questionId),
      });
    },
    [sections, handleUpdateSection]
  );

  const handleUpdateQuestion = useCallback(
    (sectionId: string, questionId: string, updates: Partial<WorksheetQuestion>) => {
      const section = sections.find((s) => s.id === sectionId);
      if (!section) return;

      handleUpdateSection(sectionId, {
        questions: section.questions.map((q) =>
          q.id === questionId ? { ...q, ...updates } : q
        ),
      });
    },
    [sections, handleUpdateSection]
  );

  const handleAddFromExercises = useCallback(
    (sectionId: string, exercise: WorksheetQuestion) => {
      const section = sections.find((s) => s.id === sectionId);
      if (!section) return;

      const newQuestion: WorksheetQuestion = {
        ...exercise,
        id: `question-${Date.now()}`,
      };

      handleUpdateSection(sectionId, {
        questions: [...section.questions, newQuestion],
      });
    },
    [sections, handleUpdateSection]
  );

  const handleSave = useCallback(() => {
    onSave?.(sections, config);
  }, [sections, config, onSave]);

  const handlePreview = useCallback(() => {
    onPreview?.(sections, config);
  }, [sections, config, onPreview]);

  const totalQuestions = sections.reduce((sum, s) => sum + s.questions.length, 0);
  const totalPoints = sections.reduce(
    (sum, s) =>
      sum +
      s.questions.reduce((qSum, q) => qSum + (q.points || s.pointsPerQuestion || 1), 0),
    0
  );

  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Worksheet Customization
            </CardTitle>
            <CardDescription>
              {sections.length} sections • {totalQuestions} questions • {totalPoints} points
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={handlePreview}>
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </Button>
            <Button onClick={handleSave}>
              <Save className="h-4 w-4 mr-2" />
              Save
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-4">
            <TabsTrigger value="sections">
              <FileText className="h-4 w-4 mr-2" />
              Sections
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings className="h-4 w-4 mr-2" />
              Settings
            </TabsTrigger>
            <TabsTrigger value="answer-key">
              <Key className="h-4 w-4 mr-2" />
              Answer Key
            </TabsTrigger>
            <TabsTrigger value="bilingual">
              <Globe className="h-4 w-4 mr-2" />
              Bilingual
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sections" className="space-y-4">
            {/* Add section button */}
            <Button onClick={handleAddSection} className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Add Section
            </Button>

            {/* Sections list */}
            {sections.map((section, _sectionIndex) => (
              <Card
                key={section.id}
                className={cn(
                  'cursor-pointer transition-colors',
                  selectedSection === section.id
                    ? 'border-primary'
                    : 'hover:border-muted-foreground'
                )}
                onClick={() => setSelectedSection(section.id)}
              >
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab" />
                      <input
                        type="text"
                        value={section.title}
                        onChange={(e) =>
                          handleUpdateSection(section.id, { title: e.target.value })
                        }
                        className="font-semibold bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-primary rounded px-1"
                        onClick={(e) => e.stopPropagation()}
                      />
                      <Badge variant="outline">{section.type}</Badge>
                      <Badge variant="secondary">
                        {section.questions.length} questions
                      </Badge>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRemoveSection(section.id);
                      }}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Section instructions */}
                  <div className="mb-4">
                    <label className="text-sm font-medium">Instructions</label>
                    <textarea
                      value={section.instructions || ''}
                      onChange={(e) =>
                        handleUpdateSection(section.id, {
                          instructions: e.target.value,
                        })
                      }
                      placeholder="Enter section instructions..."
                      className="w-full mt-1 p-2 border rounded-md text-sm"
                      rows={2}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>

                  {/* Questions */}
                  <div className="space-y-2">
                    {section.questions.map((question, questionIndex) => (
                      <div
                        key={question.id}
                        className="flex items-start gap-2 p-2 border rounded-md"
                      >
                        <GripVertical className="h-4 w-4 text-muted-foreground cursor-grab mt-1" />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">
                              {questionIndex + 1}.
                            </span>
                            <input
                              type="text"
                              value={question.text}
                              onChange={(e) =>
                                handleUpdateQuestion(section.id, question.id, {
                                  text: e.target.value,
                                })
                              }
                              className="flex-1 bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-primary rounded px-1"
                              onClick={(e) => e.stopPropagation()}
                            />
                            {config.showPointValues && (
                              <input
                                type="number"
                                value={question.points || section.pointsPerQuestion || 1}
                                onChange={(e) =>
                                  handleUpdateQuestion(section.id, question.id, {
                                    points: parseInt(e.target.value) || 1,
                                  })
                                }
                                className="w-12 text-center border rounded px-1"
                                min={1}
                                onClick={(e) => e.stopPropagation()}
                              />
                            )}
                          </div>

                          {/* Options for multiple choice */}
                          {question.type === 'multiple-choice' && question.options && (
                            <div className="mt-2 ml-6 space-y-1">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">
                                    {String.fromCharCode(65 + optIndex)}.
                                  </span>
                                  <input
                                    type="text"
                                    value={option}
                                    onChange={(e) => {
                                      const newOptions = [...question.options!];
                                      newOptions[optIndex] = e.target.value;
                                      handleUpdateQuestion(section.id, question.id, {
                                        options: newOptions,
                                      });
                                    }}
                                    className="flex-1 bg-transparent border-none focus:outline-none focus:ring-1 focus:ring-primary rounded px-1 text-sm"
                                    onClick={(e) => e.stopPropagation()}
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveQuestion(section.id, question.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}

                    {/* Add question button */}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddQuestion(section.id);
                      }}
                      className="w-full"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add Question
                    </Button>
                  </div>

                  {/* Available exercises */}
                  {availableExercises.length > 0 && (
                    <div className="mt-4 pt-4 border-t">
                      <h4 className="text-sm font-medium mb-2">
                        Add from Lesson Exercises
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {availableExercises.slice(0, 5).map((exercise) => (
                          <Button
                            key={exercise.id}
                            variant="outline"
                            size="sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleAddFromExercises(section.id, exercise);
                            }}
                          >
                            <Plus className="h-3 w-3 mr-1" />
                            {exercise.text.substring(0, 30)}...
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Worksheet Title</label>
                <input
                  type="text"
                  value={config.title}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, title: e.target.value }))
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Unit Name</label>
                <input
                  type="text"
                  value={config.unitName || ''}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, unitName: e.target.value }))
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Lesson Number</label>
                <input
                  type="number"
                  value={config.lessonNumber || ''}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      lessonNumber: parseInt(e.target.value) || undefined,
                    }))
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Answer Space Lines</label>
                <input
                  type="number"
                  value={config.answerSpaceLines}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      answerSpaceLines: parseInt(e.target.value) || 3,
                    }))
                  }
                  className="w-full mt-1 p-2 border rounded-md"
                  min={1}
                  max={10}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">General Instructions</label>
              <textarea
                value={config.instructions || ''}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, instructions: e.target.value }))
                }
                placeholder="Enter general instructions for the worksheet..."
                className="w-full mt-1 p-2 border rounded-md"
                rows={3}
              />
            </div>

            <div>
              <label className="text-sm font-medium">Teacher Notes</label>
              <textarea
                value={config.teacherNotes || ''}
                onChange={(e) =>
                  setConfig((prev) => ({ ...prev, teacherNotes: e.target.value }))
                }
                placeholder="Enter notes for teachers (will appear on answer key)..."
                className="w-full mt-1 p-2 border rounded-md"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.showStudentInfo}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      showStudentInfo: e.target.checked,
                    }))
                  }
                />
                Show student info fields (name, date, class)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.showPointValues}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      showPointValues: e.target.checked,
                    }))
                  }
                />
                Show point values on questions
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.showInstructions}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      showInstructions: e.target.checked,
                    }))
                  }
                />
                Show instructions on worksheet
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.includeAnswerKey}
                  onChange={(e) =>
                    setConfig((prev) => ({
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
                  checked={config.pageBreaksBetweenSections}
                  onChange={(e) =>
                    setConfig((prev) => ({
                      ...prev,
                      pageBreaksBetweenSections: e.target.checked,
                    }))
                  }
                />
                Page breaks between sections
              </label>
            </div>
          </TabsContent>

          <TabsContent value="answer-key" className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">Answer Key Preview</h4>
              <p className="text-sm text-muted-foreground">
                The answer key will be generated automatically based on the correct
                answers you provide for each question.
              </p>
            </div>

            {sections.map((section) => (
              <Card key={section.id}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {section.questions.map((question, index) => (
                    <div key={question.id} className="flex items-start gap-2 mb-2">
                      <span className="font-medium">{index + 1}.</span>
                      <div className="flex-1">
                        <input
                          type="text"
                          value={
                            Array.isArray(question.correctAnswer)
                              ? question.correctAnswer.join(', ')
                              : question.correctAnswer || ''
                          }
                          onChange={(e) => {
                            const value = e.target.value;
                            const answers = value.includes(',')
                              ? value.split(',').map((a) => a.trim())
                              : value;
                            handleUpdateQuestion(section.id, question.id, {
                              correctAnswer: answers,
                            });
                          }}
                          placeholder="Enter correct answer..."
                          className="w-full p-1 border rounded text-sm"
                        />
                        <input
                          type="text"
                          value={question.explanation || ''}
                          onChange={(e) =>
                            handleUpdateQuestion(section.id, question.id, {
                              explanation: e.target.value,
                            })
                          }
                          placeholder="Enter explanation (optional)..."
                          className="w-full mt-1 p-1 border rounded text-sm"
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="bilingual" className="space-y-4">
            <div className="p-4 border rounded-lg bg-muted/50">
              <h4 className="font-semibold mb-2">Bilingual Worksheet</h4>
              <p className="text-sm text-muted-foreground">
                Enable bilingual mode to include both English and Chinese versions of
                questions and answers.
              </p>
            </div>

            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.bilingual}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, bilingual: e.target.checked }))
                  }
                />
                Enable bilingual worksheet
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={config.chineseColumn}
                  onChange={(e) =>
                    setConfig((prev) => ({ ...prev, chineseColumn: e.target.checked }))
                  }
                  disabled={!config.bilingual}
                />
                Show Chinese column
              </label>
            </div>

            {config.bilingual && (
              <div className="space-y-4">
                {sections.map((section) => (
                  <Card key={section.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      {section.questions.map((question, index) => (
                        <div key={question.id} className="mb-4">
                          <div className="flex items-start gap-2 mb-2">
                            <span className="font-medium">{index + 1}.</span>
                            <div className="flex-1">
                              <input
                                type="text"
                                value={question.text}
                                readOnly
                                className="w-full p-1 border rounded text-sm bg-muted"
                              />
                              <input
                                type="text"
                                value={question.bilingualText || ''}
                                onChange={(e) =>
                                  handleUpdateQuestion(section.id, question.id, {
                                    bilingualText: e.target.value,
                                  })
                                }
                                placeholder="Enter Chinese translation..."
                                className="w-full mt-1 p-1 border rounded text-sm"
                              />
                            </div>
                          </div>

                          {question.type === 'multiple-choice' && question.options && (
                            <div className="ml-6 space-y-1">
                              {question.options.map((option, optIndex) => (
                                <div key={optIndex} className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">
                                    {String.fromCharCode(65 + optIndex)}.
                                  </span>
                                  <input
                                    type="text"
                                    value={option}
                                    readOnly
                                    className="flex-1 p-1 border rounded text-sm bg-muted"
                                  />
                                  <input
                                    type="text"
                                    value={
                                      question.bilingualOptions?.[optIndex] || ''
                                    }
                                    onChange={(e) => {
                                      const newBilingualOptions = [
                                        ...(question.bilingualOptions || []),
                                      ];
                                      newBilingualOptions[optIndex] = e.target.value;
                                      handleUpdateQuestion(section.id, question.id, {
                                        bilingualOptions: newBilingualOptions,
                                      });
                                    }}
                                    placeholder="Chinese..."
                                    className="flex-1 p-1 border rounded text-sm"
                                  />
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default WorksheetCustomization;
