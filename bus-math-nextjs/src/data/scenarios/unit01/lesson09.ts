import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson09Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mdrha5ziiupuou6dqt-09",
    lessonNumber: 9,
    title: "PBL Milestone 2: Prototype + Rehearsal",
    drivingQuestion: "How can we build a working prototype that demonstrates our Smart Ledger's value and rehearse a compelling presentation for investors?",
    durationMinutes: 60,
    focus: "Build working prototype, test validations, rehearse presentation flow, and incorporate peer feedback",
    slug: "unit01-lesson09"
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
    overview: "Students build working prototypes of their Smart Ledger, test functionality, and rehearse presentations with peer feedback to refine their approach.",
    pacingHighlights: [
      "Prototype development and testing (25 minutes)",
      "Validation and error-checking implementation (15 minutes)",
      "Presentation rehearsal and peer feedback (15 minutes)",
      "Reflection and improvement planning (5 minutes)"
    ],
    assessments: [
      "Working prototype with implemented Excel features",
      "Test documentation and validation results",
      "Peer feedback integration and rehearsal notes",
      "Reflection journal on prototype development process"
    ]
  },
  phases: [
    {
      id: "unit01-lesson09-phase1",
      name: "Assessment",
      title: "Milestone 2 — Prototype + Rehearsal",
      sequence: 1,
      summary: "Students complete a working prototype and rehearse with peer feedback.",
      objectives: [
        "Build a working prototype that implements the planned Excel controls",
        "Test validations and scenarios; document fixes and changes",
        "Rehearse presentation flow and incorporate peer feedback",
        "Demonstrate technical accuracy and business relevance"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Your prototype should run on realistic data and show accurate totals and checks. Keep the model simple, fast, and professional. Then rehearse your story: problem → solution → live demo."
        },
        {
          type: "paragraph",
          text: "This milestone bridges planning and final presentation. Your working prototype demonstrates technical capability, while the rehearsal ensures you can communicate value effectively to stakeholders."
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
            "Deliver a working model that matches stakeholder needs",
            "Test against success metrics; track fixes and updates",
            "Practice a concise business story for investors"
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
            "Implement Tables, SUMIF/SUMIFS, and trial-balance checks",
            "Add data validation and basic error flags for self-audit",
            "Document test cases and results for reliability"
          ]
        },
        {
          type: "callout",
          intent: "tip",
          title: "Prototype Success Tips",
          body: "Focus on core functionality that demonstrates value to Sarah and potential investors.",
          bullets: [
            "Ensure formulas are accurate and well-documented",
            "Test with realistic data to catch edge cases",
            "Keep the interface clean and professional",
            "Prepare clear explanations for each Excel feature"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Prototype Development Understanding",
            description: "Test your understanding of prototype development and testing principles.",
            questions: [
              {
                id: "pbl-proto-q1",
                prompt: "Why is it important to test your prototype with realistic data before the final presentation?",
                correctAnswer: "It ensures the model works accurately with real-world scenarios and builds confidence in the solution",
                distractors: [
                  "It's required by the project rubric",
                  "It makes the presentation more impressive",
                  "It helps identify which dataset is easiest to work with"
                ],
                explanation: "Realistic testing reveals edge cases, formula errors, and usability issues that might not appear with sample data, ensuring the Smart Ledger works in practice."
              },
              {
                id: "pbl-proto-q2",
                prompt: "What is the primary purpose of peer feedback during the rehearsal phase?",
                correctAnswer: "To identify communication gaps and improve presentation clarity before the final delivery",
                distractors: [
                  "To compare different prototype approaches",
                  "To ensure all groups use the same Excel features",
                  "To practice answering technical questions about Excel"
                ],
                explanation: "Peer feedback helps refine messaging, identify unclear explanations, and improve overall presentation effectiveness for the authentic audience."
              },
              {
                id: "pbl-proto-q3",
                prompt: "How do trial-balance checks and data validation support the Smart Ledger's business value?",
                correctAnswer: "They provide automatic error detection that builds investor confidence in financial accuracy",
                distractors: [
                  "They make the workbook more complex and impressive",
                  "They reduce the need for manual review by Sarah",
                  "They ensure the prototype works with any dataset"
                ],
                explanation: "Automated checks demonstrate professional quality control and reduce risk, key factors that build trust with investors and stakeholders."
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
            title: "Prototype Development Vocabulary",
            items: [
              {
                id: "pbl-proto-vocab-1",
                text: "{blank} involves testing your prototype with realistic scenarios to identify and fix issues before final presentation.",
                answer: "Validation testing",
                hint: "This type of testing ensures your model works with real data"
              },
              {
                id: "pbl-proto-vocab-2",
                text: "A {blank} is a preliminary version of your product that demonstrates core functionality and gathers feedback.",
                answer: "prototype",
                hint: "This is an early working model"
              },
              {
                id: "pbl-proto-vocab-3",
                text: "During rehearsal, you should practice your {blank} story: problem → solution → live demo.",
                answer: "business",
                hint: "This type of story connects technical work to business value"
              }
            ]
          }
        },
        {
          type: "peerReview",
          component: "PeerCritiqueForm",
          data: {
            projectTitle: "Unit 01 Smart Ledger — Prototype Review",
            defaultPeerName: "Partner",
            rubricFocus: [
              "Evaluate technical accuracy of Excel implementation",
              "Assess clarity of business story and value proposition",
              "Provide feedback on presentation flow and timing"
            ],
            instructions: "Students present their prototype and business story while partners provide structured feedback using the rubric."
          }
        },
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Milestone 2 Reflection",
            unitTitle: "Milestone 2 Reflection: Prototype Development",
            entries: [
              {
                id: "technical_challenges",
                category: "courage",
                prompt: "What technical challenges did you encounter while building your prototype? How did you overcome them?",
                placeholder: "Think about Excel formula issues, data validation problems, or other technical hurdles..."
              },
              {
                id: "feedback_integration",
                category: "adaptability",
                prompt: "How did peer feedback change your approach or understanding? What adjustments will you make based on the feedback?",
                placeholder: "Consider what you learned from others and how you'll incorporate suggestions..."
              },
              {
                id: "presentation_readiness",
                category: "persistence",
                prompt: "How confident do you feel about presenting your prototype? What additional preparation do you need?",
                placeholder: "Think about what will make your final presentation successful..."
              }
            ],
            journalingFocus: "Capture student reflections on prototype development and feedback integration."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Emphasize the connection between technical accuracy and business value",
          "Guide students to focus on core functionality rather than complexity",
          "Stress the importance of clear, concise communication"
        ],
        facilitationTips: [
          "Circulate during prototype development to spot common technical issues",
          "Model effective peer feedback that is specific and constructive",
          "Encourage students to practice their presentations multiple times"
        ],
        timingMinutes: 60,
        presenterNotes: "Balance technical support with presentation coaching. Ensure students understand that both the prototype and the communication are equally important."
      }
    }
  ]
}