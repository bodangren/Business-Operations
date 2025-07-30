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
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {title}
          {showResults && (
            <Badge variant={percentage >= 70 ? "default" : "destructive"}>
              {score}/{questions.length} ({percentage}%)
            </Badge>
          )}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {shuffledQuestions.map((question, questionIndex) => (
          <div key={question.id} className="space-y-4">
            <h3 className="text-lg font-semibold">
              {questionIndex + 1}. {question.question}
            </h3>
            
            <div className="grid gap-2">
              {question.shuffledAnswers.map((answer, answerIndex) => {
                const isSelected = selectedAnswers[question.id] === answer;
                const isCorrect = answer === question.correctAnswer;
                const showCorrectness = submitted && showResults;
                
                let buttonVariant: "default" | "secondary" | "outline" | "destructive" = "outline";
                let buttonClasses = "";
                let icon = null;
                
                if (showCorrectness) {
                  if (isCorrect) {
                    // Always show correct answer in bright green with very dark text
                    buttonVariant = "outline";
                    buttonClasses = "border-green-600 bg-green-200 text-black hover:bg-green-300 font-medium";
                    icon = <CheckCircle className="w-4 h-4 text-green-700" />;
                  } else if (isSelected && !isCorrect) {
                    // Show selected wrong answer in bright red with very dark text
                    buttonVariant = "outline";
                    buttonClasses = "border-red-600 bg-red-200 text-black hover:bg-red-300 font-medium";
                    icon = <XCircle className="w-4 h-4 text-red-700" />;
                  } else {
                    // Unselected wrong answers stay neutral with dark text
                    buttonVariant = "outline";
                    buttonClasses = "border-gray-300 bg-gray-100 text-gray-900";
                  }
                } else if (isSelected) {
                  buttonVariant = "secondary";
                }
                
                return (
                  <Button
                    key={answerIndex}
                    variant={buttonVariant}
                    className={`justify-start text-left h-auto p-4 whitespace-normal ${buttonClasses}`}
                    onClick={() => handleAnswerSelect(question.id, answer)}
                    disabled={submitted}
                  >
                    <div className="flex items-start gap-2 w-full">
                      <span className="font-medium min-w-6">
                        {String.fromCharCode(65 + answerIndex)}.
                      </span>
                      <span className="flex-1">{answer}</span>
                      {icon}
                    </div>
                  </Button>
                );
              })}
            </div>
            
            {showResults && showExplanations && question.explanation && (
              <div className={`mt-3 p-3 rounded-lg border ${
                isAnswerCorrect(question.id) 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-red-50 border-red-200'
              }`}>
                <p className={`text-sm ${
                  isAnswerCorrect(question.id) 
                    ? 'text-green-800' 
                    : 'text-red-800'
                }`}>
                  <strong>Explanation:</strong> {question.explanation}
                </p>
              </div>
            )}
          </div>
        ))}
        
        <div className="flex justify-between items-center pt-4 border-t">
          <div className="text-sm text-muted-foreground">
            {Object.keys(selectedAnswers).length} of {questions.length} questions answered
          </div>
          
          <div className="flex gap-2">
            {allowRetry && showResults && (
              <Button
                variant="outline"
                onClick={handleRetry}
                className="flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Try Again
              </Button>
            )}
            
            {!submitted && (
              <Button
                onClick={handleSubmit}
                disabled={!allQuestionsAnswered}
                className="flex items-center gap-2"
              >
                Submit Answers
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}