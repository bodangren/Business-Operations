import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson10Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mdrha5ziiupuou6dqt-10",
    lessonNumber: 10,
    title: "PBL Milestone 3: Presentations + Peer Review",
    drivingQuestion: "How can we effectively present our Smart Ledger solution to demonstrate business value and technical excellence to an authentic audience?",
    durationMinutes: 45,
    focus: "Final presentations, peer assessment, and reflection on Smart Ledger project outcomes",
    slug: "unit01-lesson10"
  },
  sharedResources: [
    {
      id: "smart-ledger-datasets",
      kind: "dataset",
      title: "Smart Ledger Group Datasets",
      description: "Six group datasets for PBL milestones (g1-g6) with realistic TechStart transaction data",
      path: "/resources/unit01-pbl-smart-ledger-g"
    }
  ],
  teacherGuidance: {
    overview: "Students deliver final presentations of their Smart Ledger solutions, participate in peer assessment, and reflect on their learning journey throughout the unit.",
    pacingHighlights: [
      "Final presentation setup and logistics (5 minutes)",
      "Group presentations (6 groups × 5 minutes each = 30 minutes)",
      "Peer review and assessment (5 minutes)",
      "Final reflection and unit synthesis (5 minutes)"
    ],
    assessments: [
      "Final presentation delivery (4-5 minutes per group)",
      "Smart Ledger workbook and documentation",
      "Peer assessment participation and quality",
      "Final reflection journal on unit learning and growth"
    ]
  },
  phases: [
    {
      id: "unit01-lesson10-phase1",
      name: "Assessment",
      title: "Presentation Day — Flow (40 minutes)",
      sequence: 1,
      summary: "Final presentations with peer review and reflection.",
      objectives: [
        "Present final model and dashboard clearly to an authentic audience",
        "Connect analysis to a business decision and address risks",
        "Provide and receive structured peer feedback; reflect on growth",
        "Demonstrate professional communication and time management"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Presentation day follows a structured flow: 5 minutes setup, six groups presenting for ~5 minutes each, and 5 minutes for wrap-up. Each group must deliver a concise, professional presentation that demonstrates both technical excellence and business value."
        },
        {
          type: "paragraph",
          text: "This is the culmination of your Smart Ledger journey. You'll show how your solution addresses Sarah's business needs, demonstrate technical proficiency with Excel, and communicate value effectively to stakeholders."
        },
        {
          type: "heading",
          level: 3,
          text: "Business Objectives"
        },
        {
          type: "list",
          style: "unordered",
          items: [
            "Show a final, accurate model and dashboard",
            "Tell a clear story that leads to a business decision",
            "Demonstrate readiness for investor/client questions"
          ]
        },
        {
          type: "heading",
          level: 3,
          text: "Excel Objectives"
        },
        {
          type: "list",
          style: "unordered",
          items: [
            "Verify formulas, validations, and totals are correct",
            "Ensure charts/tables update with the dataset",
            "Package workbook clearly with named tabs and notes"
          ]
        },
        {
          type: "callout",
          intent: "story",
          title: "Presentation Success Framework",
          body: "Structure your presentation to maximize impact and demonstrate professional competence.",
          bullets: [
            "Problem: Briefly state Sarah's bookkeeping challenge",
            "Solution: Show your Smart Ledger approach and key features",
            "Demo: Live demonstration of accuracy and automation",
            "Value: Explain business impact and investor confidence"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Presentation Excellence Understanding",
            description: "Test your understanding of effective presentation principles for the Smart Ledger final presentation.",
            questions: [
              {
                id: "pbl-pres-q1",
                prompt: "Why is the 4-5 minute time limit important for the Smart Ledger presentations?",
                correctAnswer: "It demonstrates professional communication skills and respect for the audience's time while focusing on key value points",
                distractors: [
                  "It ensures all groups can present within the class period",
                  "It matches the typical length of investor pitches",
                  "It prevents groups from going into too much technical detail"
                ],
                explanation: "Time management is a critical professional skill. Concise presentations show you can prioritize information and communicate value efficiently."
              },
              {
                id: "pbl-pres-q2",
                prompt: "What is the most important element to demonstrate during the live demo portion of your presentation?",
                correctAnswer: "The accuracy and reliability of your Smart Ledger's automated checks and calculations",
                distractors: [
                  "The complexity of your Excel formulas",
                  "The visual design of your dashboard",
                  "The speed of data processing"
                ],
                explanation: "Investors and stakeholders care most about accuracy and reliability. Demonstrating that your system prevents errors and provides trustworthy information builds confidence."
              },
              {
                id: "pbl-pres-q3",
                prompt: "How does peer assessment contribute to the learning outcomes of the Smart Ledger project?",
                correctAnswer: "It provides diverse perspectives on solution effectiveness and develops critical evaluation skills",
                distractors: [
                  "It ensures all groups are evaluated fairly",
                  "It allows students to learn from each other's mistakes",
                  "It provides practice for giving professional feedback"
                ],
                explanation: "Peer assessment exposes students to different solution approaches, develops analytical thinking, and builds the ability to evaluate technical and business solutions objectively."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        },
        {
          type: "fillInTheBlank",
          component: "FillInTheBlank",
          data: {
            title: "Presentation Vocabulary",
            items: [
              {
                id: "pbl-pres-vocab-1",
                text: "Your presentation should follow a clear {blank}: problem → solution → live demo → value proposition.",
                answer: "storyline",
                hint: "Think about the narrative flow of your presentation"
              },
              {
                id: "pbl-pres-vocab-2",
                text: "Effective {blank} management demonstrates professionalism and respect for your audience's time and attention.",
                answer: "time",
                hint: "This is crucial for keeping presentations concise"
              },
              {
                id: "pbl-pres-vocab-3",
                text: "The final {blank} helps you reflect on your learning journey and identify areas for continued growth.",
                answer: "reflection",
                hint: "This captures your insights and development"
              }
            ]
          }
        },
        {
          type: "peerReview",
          component: "PeerCritiqueForm",
          data: {
            projectTitle: "Unit 01 Smart Ledger — Final Presentation",
            defaultPeerName: "Presenter",
            rubricFocus: [
              "Evaluate technical accuracy and Excel implementation quality",
              "Assess business value communication and stakeholder focus",
              "Provide feedback on presentation clarity and professionalism"
            ],
            instructions: "Students assess final presentations using the capstone-aligned rubric, focusing on technical accuracy, strategic rationale, communication, time management, and Q&A readiness."
          }
        },
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Milestone 3 Reflection",
            unitTitle: "Milestone 3 Reflection: Final Presentation and Unit Growth",
            entries: [
              {
                id: "presentation_experience",
                category: "courage",
                prompt: "How did you feel during your final presentation? What gave you confidence, and what was most challenging?",
                placeholder: "Think about presenting to an authentic audience and demonstrating your work..."
              },
              {
                id: "unit_growth",
                category: "adaptability",
                prompt: "Looking back at the entire unit, how has your understanding of business operations and Excel evolved? What surprised you most?",
                placeholder: "Consider your growth from the beginning of the unit to now..."
              },
              {
                id: "future_application",
                category: "persistence",
                prompt: "How will you apply what you learned about the Smart Ledger to future business challenges or projects?",
                placeholder: "Think about how these skills and mindsets will help you in the future..."
              }
            ],
            journalingFocus: "Capture student reflections on presentation experience and overall unit learning journey."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Emphasize professional presentation standards and time management",
          "Guide students to connect technical work to business value",
          "Celebrate growth and learning throughout the unit"
        ],
        facilitationTips: [
          "Use a timer to keep presentations on schedule",
          "Encourage specific, constructive peer feedback",
          "Create a supportive environment that builds presentation confidence"
        ],
        timingMinutes: 45,
        presenterNotes: "Focus on creating a professional, authentic presentation experience. Celebrate student achievements while maintaining high standards for communication and technical quality."
      }
    }
  ]
}