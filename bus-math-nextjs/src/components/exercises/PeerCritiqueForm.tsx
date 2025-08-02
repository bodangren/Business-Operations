/**
 * PeerCritiqueForm Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import PeerCritiqueForm from '@/components/exercises/PeerCritiqueForm'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <PeerCritiqueForm 
 *         projectTitle="Smart Ledger Presentation"
 *         peerName="Sarah Johnson"
 *         onSubmit={(feedback) => console.log(feedback)}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * COMPONENT PROPS:
 * ================
 * - projectTitle: string (optional) - Title of the project being reviewed
 * - peerName: string (optional) - Name of the peer being reviewed
 * - unitNumber: number (optional) - Unit number for context
 * - onSubmit: (feedback: PeerFeedback) => void (optional) - Callback when form is submitted
 * - className: string (optional) - Additional CSS classes
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students provide structured, constructive feedback to peers on project presentations,
 * Excel models, and business analysis work. This develops critical evaluation skills, business
 * communication, and supports the collaborative learning environment in PBL methodology.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Review Context**: Students see the project title, peer name, and current unit context
 *    to understand what they're evaluating.
 * 
 * 2. **Structured Evaluation Categories**: The form provides five key evaluation areas:
 *    - STRENGTHS: What worked well in the presentation/model
 *    - AREAS FOR IMPROVEMENT: Constructive suggestions for enhancement
 *    - EXCEL TECHNICAL SKILLS: Specific feedback on spreadsheet techniques and accuracy
 *    - BUSINESS INSIGHT: Quality of analysis, real-world application, and strategic thinking
 *    - PRESENTATION DELIVERY: Communication effectiveness and professional presentation
 * 
 * 3. **Rating System**: Each category includes:
 *    - Numeric rating scale (1-5 stars)
 *    - Detailed written feedback text area
 *    - Specific prompts to guide constructive feedback
 * 
 * 4. **Professional Communication**: Students practice giving feedback using business-appropriate
 *    language and structure, preparing them for workplace collaboration.
 * 
 * 5. **Progress Tracking**: Visual indicators show completion status and ensure all sections
 *    are addressed before submission.
 * 
 * 6. **Reflection Integration**: Encourages students to think critically about their own work
 *    by evaluating peers, supporting metacognitive development.
 * 
 * EDUCATIONAL VALUE:
 * ==================
 * - Develops critical thinking and analytical evaluation skills
 * - Reinforces business communication and professional feedback practices
 * - Supports peer learning and collaborative knowledge construction
 * - Builds understanding of quality standards for business presentations
 * - Encourages reflection on Excel technical skills and business analysis
 * - Prepares students for workplace peer review and team collaboration
 * - Supports authentic assessment aligned with industry practices
 * 
 * AUTHENTIC AUDIENCE CONNECTION:
 * ==============================
 * This component prepares students for real-world scenarios where they will:
 * - Participate in team project reviews and client presentations
 * - Provide feedback to colleagues on financial models and business proposals
 * - Evaluate vendor presentations and consultant recommendations
 * - Conduct performance reviews and collaborative assessments
 * 
 * The structured format mirrors professional peer review processes used in consulting,
 * finance, and business development environments.
 */

'use client'

import { useState, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { 
  User, 
  FileText, 
  Star, 
  MessageSquare, 
  CheckCircle, 
  Send,
  TrendingUp,
  Calculator,
  Target,
  Presentation,
  ThumbsUp,
  AlertCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

// Types
interface PeerFeedback {
  projectTitle: string
  peerName: string
  unitNumber?: number
  ratings: {
    strengths: number
    improvements: number
    excelSkills: number
    businessInsight: number
    presentation: number
  }
  comments: {
    strengths: string
    improvements: string
    excelSkills: string
    businessInsight: string
    presentation: string
  }
  overallComments: string
  submittedAt: Date
  reviewerName?: string
}

interface FeedbackCategory {
  id: keyof PeerFeedback['ratings']
  title: string
  description: string
  icon: React.ReactNode
  color: string
  prompt: string
  placeholder: string
}

interface PeerCritiqueFormProps {
  projectTitle?: string
  peerName?: string
  unitNumber?: number
  onSubmit?: (feedback: PeerFeedback) => void
  className?: string
}

// Feedback categories with structured prompts
const FEEDBACK_CATEGORIES: FeedbackCategory[] = [
  {
    id: 'strengths',
    title: 'Strengths & Highlights',
    description: 'What did this peer do exceptionally well?',
    icon: <ThumbsUp className="w-5 h-5" />,
    color: 'bg-green-50 border-green-200 text-green-800',
    prompt: 'Identify specific strengths in their work that impressed you:',
    placeholder: 'Highlight specific examples of excellent work, creative solutions, strong analysis, or effective presentation techniques...'
  },
  {
    id: 'improvements',
    title: 'Areas for Growth',
    description: 'Constructive suggestions for enhancement',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    prompt: 'What areas could be strengthened or expanded?',
    placeholder: 'Provide specific, actionable suggestions for improvement. Focus on opportunities for growth rather than criticism...'
  },
  {
    id: 'excelSkills',
    title: 'Excel Technical Skills',
    description: 'Spreadsheet functionality and accuracy',
    icon: <Calculator className="w-5 h-5" />,
    color: 'bg-purple-50 border-purple-200 text-purple-800',
    prompt: 'How effectively did they use Excel features and formulas?',
    placeholder: 'Comment on formula accuracy, use of advanced functions, data organization, formatting, charts, or automation features...'
  },
  {
    id: 'businessInsight',
    title: 'Business Analysis',
    description: 'Strategic thinking and real-world application',
    icon: <Target className="w-5 h-5" />,
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    prompt: 'How well did they connect analysis to business decisions?',
    placeholder: 'Evaluate their business reasoning, strategic insights, use of data for decision-making, and real-world relevance...'
  },
  {
    id: 'presentation',
    title: 'Communication & Delivery',
    description: 'Professional presentation and clarity',
    icon: <Presentation className="w-5 h-5" />,
    color: 'bg-pink-50 border-pink-200 text-pink-800',
    prompt: 'How effectively did they communicate their ideas?',
    placeholder: 'Comment on clarity, organization, visual aids, audience engagement, and overall communication effectiveness...'
  }
]

export default function PeerCritiqueForm({ 
  projectTitle = "Peer Project Review",
  peerName = "Classmate",
  unitNumber,
  onSubmit,
  className = ""
}: PeerCritiqueFormProps) {
  const [ratings, setRatings] = useState<PeerFeedback['ratings']>({
    strengths: 0,
    improvements: 0,
    excelSkills: 0,
    businessInsight: 0,
    presentation: 0
  })

  const [comments, setComments] = useState<PeerFeedback['comments']>({
    strengths: '',
    improvements: '',
    excelSkills: '',
    businessInsight: '',
    presentation: ''
  })

  const [overallComments, setOverallComments] = useState('')
  const [reviewerName, setReviewerName] = useState('')
  const [showInstructions, setShowInstructions] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleRatingChange = useCallback((category: keyof PeerFeedback['ratings'], rating: number) => {
    setRatings(prev => ({
      ...prev,
      [category]: rating
    }))
  }, [])

  const handleCommentChange = useCallback((category: keyof PeerFeedback['comments'], value: string) => {
    setComments(prev => ({
      ...prev,
      [category]: value
    }))
  }, [])

  const handleSubmit = useCallback(() => {
    const feedback: PeerFeedback = {
      projectTitle,
      peerName,
      unitNumber,
      ratings,
      comments,
      overallComments,
      submittedAt: new Date(),
      reviewerName: reviewerName || undefined
    }

    if (onSubmit) {
      onSubmit(feedback)
    }
    
    setIsSubmitted(true)
  }, [projectTitle, peerName, unitNumber, ratings, comments, overallComments, reviewerName, onSubmit])

  // Calculate completion statistics
  const completedRatings = Object.values(ratings).filter(rating => rating > 0).length
  const completedComments = Object.values(comments).filter(comment => comment.trim().length > 0).length
  const totalCategories = FEEDBACK_CATEGORIES.length
  const isFormComplete = completedRatings === totalCategories && completedComments === totalCategories && overallComments.trim().length > 0

  const averageRating = Object.values(ratings).reduce((sum, rating) => sum + rating, 0) / totalCategories

  // Star rating component
  const StarRating = ({ rating, onRatingChange, disabled = false }: { 
    rating: number
    onRatingChange: (rating: number) => void 
    disabled?: boolean
  }) => (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !disabled && onRatingChange(star)}
          disabled={disabled}
          className={`p-1 rounded transition-colors ${
            disabled ? 'cursor-default' : 'hover:bg-yellow-100 cursor-pointer'
          }`}
        >
          <Star 
            className={`w-5 h-5 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-300'
            }`} 
          />
        </button>
      ))}
    </div>
  )

  if (isSubmitted) {
    return (
      <div className={`max-w-4xl mx-auto p-6 ${className}`}>
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-8 text-center space-y-4">
            <div className="flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-green-800">Feedback Submitted Successfully!</h3>
            <p className="text-green-700 max-w-2xl mx-auto">
              Thank you for providing thoughtful feedback to {peerName}. Your peer review contributes to our collaborative learning environment and helps build professional communication skills.
            </p>
            <div className="pt-4">
              <Button 
                onClick={() => {
                  setIsSubmitted(false)
                  setRatings({ strengths: 0, improvements: 0, excelSkills: 0, businessInsight: 0, presentation: 0 })
                  setComments({ strengths: '', improvements: '', excelSkills: '', businessInsight: '', presentation: '' })
                  setOverallComments('')
                  setReviewerName('')
                }}
                variant="outline"
                className="bg-white"
              >
                Review Another Peer
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className={`max-w-4xl mx-auto space-y-6 ${className}`}>
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                Peer Critique & Feedback
              </CardTitle>
              <CardDescription className="text-lg">
                Provide constructive feedback to support peer learning and professional development
              </CardDescription>
            </div>
            <div className="text-right space-y-1">
              {unitNumber && (
                <Badge className="bg-blue-100 text-blue-800">
                  Unit {unitNumber}
                </Badge>
              )}
              <div className="flex items-center gap-2 text-sm text-blue-600">
                <User className="w-4 h-4" />
                Reviewing: <span className="font-medium">{peerName}</span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Toggle */}
      <div className="text-center">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowInstructions(!showInstructions)}
          className="flex items-center gap-2"
        >
          <HelpCircle className="w-4 h-4" />
          Feedback Guidelines
          {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </Button>
      </div>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-xl text-indigo-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Provide Effective Peer Feedback
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Principles */}
            <div>
              <h4 className="font-semibold text-indigo-800 mb-3">🎯 Feedback Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium text-indigo-700 mb-2">✅ Constructive & Specific</h5>
                  <p className="text-sm text-indigo-600">Focus on specific examples and actionable suggestions rather than general comments.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium text-indigo-700 mb-2">🎨 Balanced Perspective</h5>
                  <p className="text-sm text-indigo-600">Highlight both strengths and areas for improvement to provide complete feedback.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium text-indigo-700 mb-2">💼 Professional Tone</h5>
                  <p className="text-sm text-indigo-600">Use respectful, business-appropriate language that you'd use in a workplace setting.</p>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <h5 className="font-medium text-indigo-700 mb-2">🔍 Evidence-Based</h5>
                  <p className="text-sm text-indigo-600">Reference specific elements from their presentation, analysis, or Excel work.</p>
                </div>
              </div>
            </div>

            {/* Category Guide */}
            <div>
              <h4 className="font-semibold text-indigo-800 mb-3">📋 Feedback Categories Guide</h4>
              <div className="space-y-3">
                {FEEDBACK_CATEGORIES.map((category) => (
                  <div key={category.id} className="p-3 bg-white rounded-lg border flex items-start gap-3">
                    <div className="p-1 rounded bg-indigo-100">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-indigo-800">{category.title}</h5>
                      <p className="text-sm text-indigo-600">{category.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div>
              <h4 className="font-semibold text-indigo-800 mb-3">💡 Example Feedback</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-2">✅ Good Feedback</h5>
                  <p className="text-sm text-green-700 italic">
                    "Your VLOOKUP formulas were executed perfectly and saved significant time in the analysis. Consider adding data validation to prevent input errors in future models."
                  </p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-medium text-red-800 mb-2">❌ Avoid This</h5>
                  <p className="text-sm text-red-700 italic">
                    "Your Excel work was okay but could be better."
                  </p>
                  <p className="text-xs text-red-600 mt-1">Too vague and not actionable</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Project Context */}
      <Card className="border-gray-200">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-5 h-5 text-gray-600" />
              <div>
                <h3 className="font-medium text-gray-800">{projectTitle}</h3>
                <p className="text-sm text-gray-600">Project by {peerName}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Progress</div>
              <div className="flex items-center gap-2">
                <span className={`text-lg font-bold ${isFormComplete ? 'text-green-600' : 'text-orange-600'}`}>
                  {Math.round(((completedRatings + completedComments) / (totalCategories * 2)) * 100)}%
                </span>
                {isFormComplete && <CheckCircle className="w-4 h-4 text-green-600" />}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Reviewer Name */}
      <Card className="border-gray-200">
        <CardContent className="p-4 space-y-3">
          <Label htmlFor="reviewer-name" className="text-sm font-medium">
            Your Name (Optional)
          </Label>
          <input
            id="reviewer-name"
            type="text"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
            placeholder="Enter your name to identify your feedback..."
            className="w-full p-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </CardContent>
      </Card>

      {/* Feedback Categories */}
      <div className="space-y-6">
        {FEEDBACK_CATEGORIES.map((category, index) => (
          <Card key={category.id} className={`border-2 ${category.color}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">
                    {ratings[category.id] > 0 ? `${ratings[category.id]}/5` : 'Not Rated'}
                  </Badge>
                  {comments[category.id].trim() && <CheckCircle className="w-4 h-4 text-green-600" />}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Rating */}
              <div>
                <Label className="text-sm font-medium mb-2 block">Rating (1-5 stars)</Label>
                <div className="flex items-center gap-3">
                  <StarRating 
                    rating={ratings[category.id]} 
                    onRatingChange={(rating) => handleRatingChange(category.id, rating)}
                  />
                  <span className="text-sm text-gray-600">
                    {ratings[category.id] === 0 ? 'Select rating' :
                     ratings[category.id] === 1 ? 'Needs significant improvement' :
                     ratings[category.id] === 2 ? 'Below expectations' :
                     ratings[category.id] === 3 ? 'Meets expectations' :
                     ratings[category.id] === 4 ? 'Exceeds expectations' :
                     'Outstanding work'}
                  </span>
                </div>
              </div>

              <Separator />

              {/* Written Feedback */}
              <div>
                <Label htmlFor={`comment-${category.id}`} className="text-sm font-medium mb-2 block">
                  {category.prompt}
                </Label>
                <textarea
                  id={`comment-${category.id}`}
                  value={comments[category.id]}
                  onChange={(e) => handleCommentChange(category.id, e.target.value)}
                  placeholder={category.placeholder}
                  className="w-full min-h-[100px] p-3 border border-gray-300 rounded-md text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-gray-500">
                    {comments[category.id].length} characters
                  </span>
                  {comments[category.id].trim() && (
                    <span className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Complete
                    </span>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overall Summary */}
      <Card className="border-2 border-slate-200 bg-slate-50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Overall Summary & Additional Comments
          </CardTitle>
          <CardDescription>
            Provide any additional feedback, suggestions, or overall impressions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <textarea
            value={overallComments}
            onChange={(e) => setOverallComments(e.target.value)}
            placeholder="Share your overall thoughts about this peer's work. What stood out most? What would you want to see in their next project? How might they apply these skills in a real business setting?"
            className="w-full min-h-[120px] p-3 border border-gray-300 rounded-md text-sm resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">
              {overallComments.length} characters
            </span>
            {overallComments.trim() && (
              <span className="text-xs text-green-600 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                Complete
              </span>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Summary Stats */}
      {(completedRatings > 0 || completedComments > 0) && (
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">{completedRatings}/{totalCategories}</div>
                <div className="text-sm text-blue-700">Ratings Complete</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">{completedComments}/{totalCategories}</div>
                <div className="text-sm text-blue-700">Comments Complete</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {averageRating > 0 ? averageRating.toFixed(1) : '0.0'}
                </div>
                <div className="text-sm text-blue-700">Average Rating</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {Math.round(((completedRatings + completedComments) / (totalCategories * 2)) * 100)}%
                </div>
                <div className="text-sm text-blue-700">Overall Progress</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Submit Button */}
      <div className="text-center space-y-4">
        {!isFormComplete && (
          <div className="flex items-center justify-center gap-2 text-orange-600">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">Please complete all ratings and comments before submitting</span>
          </div>
        )}
        
        <Button 
          onClick={handleSubmit}
          disabled={!isFormComplete}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300"
        >
          <Send className="w-4 h-4 mr-2" />
          Submit Peer Feedback
        </Button>
        
        {isFormComplete && (
          <p className="text-sm text-green-600 flex items-center justify-center gap-1">
            <CheckCircle className="w-4 h-4" />
            Ready to submit! Your thoughtful feedback will help your peer grow.
          </p>
        )}
      </div>
    </div>
  )
}