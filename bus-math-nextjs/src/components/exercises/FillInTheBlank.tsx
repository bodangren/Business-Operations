/**
 * FillInTheBlank Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { FillInTheBlank } from '@/components/exercises/FillInTheBlank'
 * 
 * const sentences = [
 *   {
 *     id: '1',
 *     text: 'Assets = {blank} + Equity',
 *     answer: 'Liabilities',
 *     hint: 'Money owed to creditors'
 *   },
 *   {
 *     id: '2', 
 *     text: 'Revenue - Expenses = {blank}',
 *     answer: 'Net Income',
 *     hint: 'The bottom line on an income statement'
 *   },
 *   {
 *     id: '3',
 *     text: 'Current Assets / Current Liabilities = {blank}',
 *     answer: 'Current Ratio',
 *     hint: 'Measures liquidity and ability to pay short-term debts'
 *   }
 * ]
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <FillInTheBlank 
 *         sentences={sentences}
 *         title="Accounting Equation Practice"
 *         description="Fill in the blanks to complete these fundamental accounting relationships"
 *         showWordList={true}
 *         randomizeWordOrder={true}
 *         showHints={true}
 *         onComplete={(score) => console.log('Completed with score:', score)}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * PROPS:
 * - sentences: BlankSentence[] - Array of sentences with blanks to fill (required)
 * - title: string - Exercise title (required)
 * - description: string - Exercise description (required)
 * - showWordList?: boolean - Show word bank with available answers (default: true)
 * - randomizeWordOrder?: boolean - Randomize word list order (default: true)
 * - showHints?: boolean - Enable hint system (default: false)
 * - onComplete?: (score: number) => void - Callback when exercise completed
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn through interactive gap-fill exercises that can be
 * applied to any subject area - vocabulary completion, formula completion,
 * sentence construction, etc.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Sentence Display**: Students see sentences with highlighted blank spaces
 *    that need to be filled with the correct words or phrases.
 * 
 * 2. **Word Bank**: Optional word list shows all available answers:
 *    - Can be toggled on/off to adjust difficulty
 *    - Words are randomized to prevent pattern matching
 *    - Helps students focus on meaning rather than memorization
 * 
 * 3. **Text Input Interface**: Students type answers directly into blank fields:
 *    - Real-time feedback as they type
 *    - Case-insensitive matching for flexibility
 *    - Support for multiple correct variations
 * 
 * 4. **Visual Feedback System**: Immediate response to student input:
 *    - Green highlighting with checkmark for correct answers
 *    - Red highlighting with X mark for incorrect answers
 *    - Neutral styling while typing
 * 
 * 5. **Hint System**: Optional contextual help:
 *    - Toggle hints on/off for scaffolded learning
 *    - Provides additional context without giving away answers
 *    - Helps students understand the reasoning behind correct answers
 * 
 * 6. **Progress Tracking**: Students receive:
 *    - Real-time scoring as percentage of correct answers
 *    - Attempt counter for self-monitoring
 *    - Completion celebration when all blanks are filled correctly
 * 
 * 7. **Built-in Instructions**: Expandable panel includes:
 *    - Clear objective statement
 *    - Step-by-step interaction guide
 *    - Success tips and strategies
 * 
 * KEY LEARNING OUTCOMES:
 * - Active vocabulary building through contextual practice
 * - Immediate feedback reinforces correct associations
 * - Self-paced learning with multiple attempt opportunities
 * - Pattern recognition and conceptual understanding
 * - Confidence building through progressive success
 * 
 * FLEXIBILITY FOR DIFFERENT SUBJECTS:
 * - **Vocabulary**: Complete definitions or explanations
 * - **Accounting**: Fill in formulas, equations, and principles
 * - **Business**: Complete key concepts and terminology
 * - **Finance**: Fill in ratio formulas and calculations
 * - **Math**: Complete equations and problem-solving steps
 * - **Science**: Fill in processes, formulas, and key terms
 * - **Any text completion exercise**
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { HelpCircle, ChevronDown, ChevronUp, RotateCcw, CheckCircle, XCircle, Target, Lightbulb, List, ListX } from 'lucide-react';

interface BlankSentence {
  id: string;
  text: string; // Text with {blank} placeholder
  answer: string; // Correct answer for the blank
  hint?: string; // Optional hint text
  alternativeAnswers?: string[]; // Optional alternative correct answers
  category?: string; // Optional grouping
}

interface StudentAnswer {
  sentenceId: string;
  userInput: string;
  isCorrect: boolean;
  isCompleted: boolean;
}

interface FillInTheBlankProps {
  sentences: BlankSentence[];
  title: string;
  description: string;
  showWordList?: boolean;
  randomizeWordOrder?: boolean;
  showHints?: boolean;
  onComplete?: (score: number) => void;
}

export function FillInTheBlank({
  sentences,
  title,
  description,
  showWordList = true,
  randomizeWordOrder = true,
  showHints = false,
  onComplete
}: FillInTheBlankProps) {
  const [studentAnswers, setStudentAnswers] = useState<StudentAnswer[]>([]);
  const [wordList, setWordList] = useState<string[]>([]);
  const [showWordBank, setShowWordBank] = useState(showWordList);
  const [hintsEnabled, setHintsEnabled] = useState(showHints);
  const [showInstructions, setShowInstructions] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  // Initialize the exercise
  useEffect(() => {
    const initializeExercise = () => {
      // Initialize student answers
      const initialAnswers: StudentAnswer[] = sentences.map(sentence => ({
        sentenceId: sentence.id,
        userInput: '',
        isCorrect: false,
        isCompleted: false
      }));
      setStudentAnswers(initialAnswers);

      // Create word list from all correct answers
      const allAnswers = sentences.map(s => s.answer);
      
      // Add alternative answers if they exist
      sentences.forEach(sentence => {
        if (sentence.alternativeAnswers) {
          allAnswers.push(...sentence.alternativeAnswers);
        }
      });

      // Remove duplicates and randomize if requested
      const uniqueAnswers = [...new Set(allAnswers)];
      
      // Shuffle using Fisher-Yates algorithm
      const shuffleArray = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      const finalWordList = randomizeWordOrder 
        ? shuffleArray(uniqueAnswers)
        : uniqueAnswers;

      setWordList(finalWordList);
      setScore(0);
      setAttempts(0);
      setShowFeedback(false);
      setIsComplete(false);
    };

    initializeExercise();
  }, [sentences, randomizeWordOrder]);

  // Check if answer is correct (case-insensitive, with alternatives)
  const isAnswerCorrect = useCallback((sentence: BlankSentence, userInput: string): boolean => {
    const normalizedInput = userInput.trim().toLowerCase();
    const normalizedAnswer = sentence.answer.toLowerCase();
    
    // Check main answer
    if (normalizedInput === normalizedAnswer) return true;
    
    // Check alternative answers
    if (sentence.alternativeAnswers) {
      return sentence.alternativeAnswers.some(alt => 
        normalizedInput === alt.toLowerCase()
      );
    }
    
    return false;
  }, []);

  // Handle input change
  const handleInputChange = useCallback((sentenceId: string, value: string) => {
    const sentence = sentences.find(s => s.id === sentenceId);
    if (!sentence) return;

    const isCorrect = isAnswerCorrect(sentence, value);
    const isCompleted = value.trim().length > 0;

    setStudentAnswers(prev => prev.map(answer => 
      answer.sentenceId === sentenceId 
        ? { ...answer, userInput: value, isCorrect, isCompleted }
        : answer
    ));
  }, [sentences, isAnswerCorrect]);

  // Check all answers and provide feedback
  const checkAnswers = useCallback(() => {
    setAttempts(prev => prev + 1);
    
    const totalBlanks = sentences.length;
    const completedAnswers = studentAnswers.filter(a => a.isCompleted);
    const correctAnswers = studentAnswers.filter(a => a.isCorrect);
    
    const newScore = totalBlanks > 0 ? Math.round((correctAnswers.length / totalBlanks) * 100) : 0;
    setScore(newScore);
    
    if (newScore === 100 && completedAnswers.length === totalBlanks) {
      setFeedbackMessage(`🎉 Perfect! You correctly filled in all ${totalBlanks} blanks! Excellent work!`);
      setIsComplete(true);
      onComplete?.(newScore);
    } else if (completedAnswers.length === totalBlanks) {
      setFeedbackMessage(`You filled in all blanks but got ${correctAnswers.length} out of ${totalBlanks} correct (${newScore}%). Check the red highlighted answers and try again!`);
    } else {
      setFeedbackMessage(`Keep going! You've completed ${completedAnswers.length} out of ${totalBlanks} blanks. ${correctAnswers.length} are correct so far!`);
    }
    
    setShowFeedback(true);
  }, [sentences.length, studentAnswers, onComplete]);

  // Reset exercise
  const resetExercise = useCallback(() => {
    const resetAnswers: StudentAnswer[] = sentences.map(sentence => ({
      sentenceId: sentence.id,
      userInput: '',
      isCorrect: false,
      isCompleted: false
    }));
    
    setStudentAnswers(resetAnswers);
    setAttempts(0);
    setScore(0);
    setShowFeedback(false);
    setIsComplete(false);

    // Re-randomize word list if requested
    if (randomizeWordOrder) {
      const allAnswers = sentences.map(s => s.answer);
      sentences.forEach(sentence => {
        if (sentence.alternativeAnswers) {
          allAnswers.push(...sentence.alternativeAnswers);
        }
      });
      
      const uniqueAnswers = [...new Set(allAnswers)];
      const shuffleArray = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };
      
      setWordList(shuffleArray(uniqueAnswers));
    }
  }, [sentences, randomizeWordOrder]);

  // Render sentence with blank input field
  const renderSentenceWithBlank = (sentence: BlankSentence, answer: StudentAnswer) => {
    const parts = sentence.text.split('{blank}');
    if (parts.length !== 2) {
      return <span className="text-red-500">Error: Sentence must contain exactly one {'{blank}'} placeholder</span>;
    }

    // Determine input styling based on answer state
    let inputClassName = "inline-flex w-32 mx-2 px-2 py-1 text-center border-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500";
    
    if (answer.isCompleted) {
      if (answer.isCorrect) {
        inputClassName += " border-green-500 bg-green-50 text-green-800";
      } else {
        inputClassName += " border-red-500 bg-red-50 text-red-800";
      }
    } else {
      inputClassName += " border-gray-300 bg-white";
    }

    return (
      <>
        {parts[0]}
        <Input
          type="text"
          value={answer.userInput}
          onChange={(e) => handleInputChange(sentence.id, e.target.value)}
          className={inputClassName}
          placeholder="?"
        />
        {parts[1]}
        {answer.isCompleted && (
          <span className="ml-2">
            {answer.isCorrect ? (
              <CheckCircle className="inline w-4 h-4 text-green-600" />
            ) : (
              <XCircle className="inline w-4 h-4 text-red-600" />
            )}
          </span>
        )}
      </>
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-purple-600" />
            {title}
          </CardTitle>
          <CardDescription className="text-lg">
            {description}
          </CardDescription>
          <div className="mt-4 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              How to Play
              {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
            <div className="flex gap-4 text-sm font-semibold">
              <Badge variant="outline" className="text-blue-600">
                Attempts: {attempts}
              </Badge>
              <Badge variant="outline" className="text-green-600">
                Score: {score}%
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Objective</h4>
              <p className="text-purple-700">
                Fill in the blanks to complete each sentence correctly. Type the missing words or phrases
                that make each statement accurate and complete.
              </p>
            </div>

            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">🎮 How to Play</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">1. Read & Type</h5>
                  <p className="text-sm text-purple-700">
                    Read each sentence and type the missing word or phrase in the blank space.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">2. Visual Feedback</h5>
                  <p className="text-sm text-purple-700">
                    Correct answers turn green with a checkmark. 
                    Incorrect answers turn red - you can edit them and try again.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">3. Use Word Bank</h5>
                  <p className="text-sm text-purple-700">
                    Toggle the word list to see available answers when you need help
                    or hide it for an extra challenge.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">4. Get Hints</h5>
                  <p className="text-sm text-purple-700">
                    Click "Show Hints" to see additional context that helps you 
                    understand what each blank is looking for.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• <strong>Read the full sentence:</strong> Context clues help you find the right answer</li>
                <li>• <strong>Don't worry about capitalization:</strong> The system accepts answers regardless of case</li>
                <li>• <strong>Use the word bank:</strong> It shows all possible answers to choose from</li>
                <li>• <strong>Check your hints:</strong> They provide valuable context without giving away answers</li>
                <li>• <strong>Edit and retry:</strong> You can change your answers until they're all correct</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Complete Message */}
      {isComplete && (
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Excellent Work!</h3>
            </div>
            <p className="text-lg text-green-700">
              You successfully filled in all {sentences.length} blanks correctly! 
              You've mastered these concepts.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Exercise Area */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📝 Fill in the Blanks
              </CardTitle>
              <CardDescription>
                Complete each sentence by typing the missing word or phrase
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {sentences.map((sentence, index) => {
                  const answer = studentAnswers.find(a => a.sentenceId === sentence.id);
                  if (!answer) return null;

                  return (
                    <div key={sentence.id} className="p-4 border rounded-lg bg-gray-50">
                      <div className="flex items-start gap-3">
                        <Badge variant="outline" className="text-xs">
                          {index + 1}
                        </Badge>
                        <div className="flex-1">
                          <div className="text-lg leading-relaxed mb-2">
                            {renderSentenceWithBlank(sentence, answer)}
                          </div>
                          {hintsEnabled && sentence.hint && (
                            <div className="text-sm text-purple-600 bg-purple-50 p-2 rounded border mt-2">
                              💡 {sentence.hint}
                            </div>
                          )}
                          {sentence.category && (
                            <Badge variant="outline" className="text-xs mt-2">
                              {sentence.category}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Word Bank Sidebar */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                📚 Word Bank
              </CardTitle>
              <CardDescription className="text-sm">
                Available answers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {showWordBank ? (
                <div className="space-y-2">
                  {wordList.map((word, index) => (
                    <div 
                      key={index}
                      className="p-2 bg-blue-50 border border-blue-200 rounded text-sm font-medium text-blue-800"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500 py-4">
                  <ListX className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Word bank is hidden</p>
                  <p className="text-xs">Click "Show Word Bank" to reveal</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4 flex-wrap">
        <Button
          onClick={checkAnswers}
          className="bg-purple-600 hover:bg-purple-700"
          size="lg"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Answers
        </Button>
        <Button
          onClick={resetExercise}
          variant="outline"
          size="lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Exercise
        </Button>
        <Button
          onClick={() => setHintsEnabled(!hintsEnabled)}
          variant="outline"
          size="lg"
          className={hintsEnabled ? 'bg-yellow-50 border-yellow-300' : ''}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          {hintsEnabled ? 'Hide' : 'Show'} Hints
        </Button>
        <Button
          onClick={() => setShowWordBank(!showWordBank)}
          variant="outline"
          size="lg"
          className={showWordBank ? 'bg-blue-50 border-blue-300' : ''}
        >
          {showWordBank ? <ListX className="w-4 h-4 mr-2" /> : <List className="w-4 h-4 mr-2" />}
          {showWordBank ? 'Hide' : 'Show'} Word Bank
        </Button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`p-4 rounded-lg text-center font-semibold ${
          score === 100 
            ? 'bg-green-100 border border-green-400 text-green-800'
            : 'bg-blue-100 border border-blue-400 text-blue-800'
        }`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}