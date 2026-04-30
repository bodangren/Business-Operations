'use client';

import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, RefreshCw } from 'lucide-react';

interface MultipleChoiceQuestion {
  id: string;
  question: string;
  answers: string[]; // First answer is always the correct one
  explanation?: string;
}

interface ComprehensionCheckProps {
  title?: string;
  description?: string;
  questions: MultipleChoiceQuestion[];
  showExplanations?: boolean;
  allowRetry?: boolean;
  onComplete?: (score: number, totalQuestions: number) => void;
}

export default function ComprehensionCheck({
  title = "Comprehension Check",
  description = "Test your understanding with these multiple choice questions.",
  questions,
  showExplanations = true,
  allowRetry = true,
  onComplete
}: ComprehensionCheckProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Randomize answer order for each question while keeping track of correct answers
  const shuffledQuestions = useMemo(() => {
    return questions.map(question => {
      const correctAnswer = question.answers[0];
      const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);
      return {
        ...question,
        shuffledAnswers,
        correctAnswer
      };
    });
  }, [questions]);

  const handleAnswerSelect = (questionId: string, answer: string) => {
    if (submitted) return;
    
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowResults(true);
    
    const correctCount = shuffledQuestions.reduce((count, question) => {
      return selectedAnswers[question.id] === question.correctAnswer ? count + 1 : count;
    }, 0);
    
    onComplete?.(correctCount, questions.length);
  };

  const handleRetry = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setShowResults(false);
  };

  const isAnswerCorrect = (questionId: string) => {
    const question = shuffledQuestions.find(q => q.id === questionId);
    return question && selectedAnswers[questionId] === question.correctAnswer;
  };

  const allQuestionsAnswered = shuffledQuestions.every(q => selectedAnswers[q.id]);
  const score = shuffledQuestions.reduce((count, question) => {
    return selectedAnswers[question.id] === question.correctAnswer ? count + 1 : count;
  }, 0);
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <Card className="w-full max-w-4xl mx-auto card-ledger">
      <CardHeader className="border-b-2 border-primary pb-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-display font-bold italic flex items-center gap-2">
            {title}
          </CardTitle>
          {showResults && (
            <Badge variant="stamp">
              AUDIT: {score}/{questions.length} ({percentage}%)
            </Badge>
          )}
        </div>
        <CardDescription className="font-body italic">{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-10 pt-8">
        {shuffledQuestions.map((question, questionIndex) => (
          <div key={question.id} className="space-y-6">
            <h3 className="text-xl font-display font-bold">
              {questionIndex + 1}. {question.question}
            </h3>

            <div className="grid gap-3">
              {question.shuffledAnswers.map((answer, answerIndex) => {
                const isSelected = selectedAnswers[question.id] === answer;
                const isCorrect = answer === question.correctAnswer;
                const showCorrectness = submitted && showResults;

                let buttonVariant: "default" | "secondary" | "outline" | "destructive" | "stamp" = "outline";
                let buttonClasses = "border-2";
                let icon = null;

                if (showCorrectness) {
                  if (isCorrect) {
                    buttonVariant = "outline";
                    buttonClasses = "border-[var(--ledger-green)] bg-[var(--ledger-green)]/10 text-[var(--ledger-green)] font-mono font-bold";
                    icon = <CheckCircle className="w-4 h-4" />;
                  } else if (isSelected && !isCorrect) {
                    buttonVariant = "outline";
                    buttonClasses = "border-[var(--audit-red)] bg-[var(--audit-red)]/10 text-[var(--audit-red)] font-mono font-bold";
                    icon = <XCircle className="w-4 h-4" />;
                  } else {
                    buttonVariant = "outline";
                    buttonClasses = "border-border bg-muted/20 text-muted-foreground opacity-50";
                  }
                } else if (isSelected) {
                  buttonVariant = "default";
                  buttonClasses = "border-primary";
                }

                return (
                  <Button
                    key={answerIndex}
                    variant={buttonVariant}
                    className={`justify-start text-left h-auto p-4 whitespace-normal transition-none ${buttonClasses}`}
                    onClick={() => handleAnswerSelect(question.id, answer)}
                    disabled={submitted}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <span className="font-mono font-bold min-w-8 text-lg">
                        {String.fromCharCode(65 + answerIndex)}.
                      </span>
                      <span className="flex-1 font-body">{answer}</span>
                      {icon}
                    </div>
                  </Button>
                );
              })}
            </div>

            {showResults && showExplanations && question.explanation && (
              <div className={`mt-4 p-4 border-2 border-dashed ${
                isAnswerCorrect(question.id) 
                  ? 'bg-[var(--ledger-green)]/5 border-[var(--ledger-green)]/30' 
                  : 'bg-[var(--audit-red)]/5 border-[var(--audit-red)]/30'
              }`}>
                <p className={`text-sm font-mono ${
                  isAnswerCorrect(question.id) 
                    ? 'text-[var(--ledger-green)]' 
                    : 'text-[var(--audit-red)]'
                }`}>
                  <strong className="uppercase tracking-widest block mb-2">Auditor's Note:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-between items-center pt-8 border-t-2 border-primary">
          <div className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground">
            {Object.keys(selectedAnswers).length} / {questions.length} AUDITED
          </div>

          <div className="flex gap-4">
            {allowRetry && showResults && (
              <Button
                variant="outline"
                onClick={handleRetry}
                className="flex items-center gap-2 border-2"
              >
                <RefreshCw className="w-4 h-4" />
                RE-AUDIT
              </Button>
            )}

            {!submitted && (
              <Button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="flex items-center gap-2 border-2 border-primary"
              >
                SUBMIT FOR AUDIT
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}