import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson08Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mdrha5ziiupuou6dqt-08",
    lessonNumber: 8,
    title: "PBL Milestone 1: Project Definition",
    drivingQuestion: "How can we define a clear project scope and Excel architecture that convinces investors our Smart Ledger will be accurate and professional?",
    durationMinutes: 55,
    focus: "Define problem statement, stakeholder needs, success metrics, and workbook structure for the Smart Ledger project",
    slug: "unit01-lesson08"
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
    overview: "Guide students through professional project definition for the Smart Ledger, emphasizing stakeholder analysis, scope definition, and Excel architecture planning.",
    pacingHighlights: [
      "Project definition and stakeholder analysis (15 minutes)",
      "Excel workbook architecture planning (20 minutes)",
      "Acceptance criteria review and workbook skeleton creation (15 minutes)",
      "Team check-in and reflection (5 minutes)"
    ],
    assessments: [
      "Project brief submission (one-page document)",
      "Workbook skeleton evidence (tabs created, headers set)",
      "Reflection journal on project planning process"
    ]
  },
  phases: [
    {
      id: "unit01-lesson08-phase1",
      name: "Introduction",
      title: "Project Definition — Smart Ledger for TechStart",
      sequence: 1,
      summary: "Students define scope, data plan, workbook structure, and risks for the Smart Ledger project.",
      objectives: [
        "Define a clear problem statement and project scope for Smart Ledger",
        "Identify stakeholders (Sarah, clients, potential investors) and their needs",
        "Set success metrics that show accuracy, speed, and investor readiness",
        "Plan workbook tabs, Excel features, and validation controls",
        "Create acceptance criteria and project timeline"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah Chen runs TechStart Solutions, a small digital marketing company. She moves fast and takes on new clients, but her old tracking system is messy. Today, you will define a clean plan for a professional ledger that builds investor trust."
        },
        {
          type: "paragraph",
          text: "A well-defined project plan saves time and reduces mistakes. Investors and clients look for controls that prevent errors. Your checklist today becomes the standard you use to judge your final workbook."
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
            "Define a clear problem statement and project scope for Smart Ledger",
            "Identify stakeholders (Sarah, clients, potential investors) and their needs",
            "Set success metrics that show accuracy, speed, and investor readiness"
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
            "Plan workbook tabs (Transactions, Accounts, Trial Balance, Checks, Dashboard)",
            "Use Excel Tables, structured references, SUMIF/SUMIFS for totals",
            "Design data validation and a trial-balance auto-check to prevent errors"
          ]
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why This Matters",
          body: "Professional project planning prevents scope creep and ensures deliverables meet stakeholder needs. Your plan demonstrates strategic thinking and attention to detail—qualities investors value.",
          bullets: [
            "Clear scope prevents wasted time on unnecessary features",
            "Stakeholder analysis ensures the solution addresses real business needs",
            "Success metrics provide objective criteria for evaluation"
          ]
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Project Definition Understanding",
            description: "Test your understanding of project planning principles for the Smart Ledger.",
            questions: [
              {
                id: "pbl-def-q1",
                prompt: "Why is it important to define stakeholders and their needs before building the Smart Ledger?",
                correctAnswer: "It ensures the solution addresses real business requirements and builds user adoption",
                distractors: [
                  "It's required by project management methodologies",
                  "It helps determine the project budget",
                  "It makes the project documentation look more professional"
                ],
                explanation: "Understanding stakeholder needs ensures the Smart Ledger solves actual business problems and provides value to users like Sarah, her clients, and potential investors."
              },
              {
                id: "pbl-def-q2",
                prompt: "What is the primary purpose of creating acceptance criteria for the Smart Ledger project?",
                correctAnswer: "To provide clear, objective standards for evaluating project success",
                distractors: [
                  "To impress potential investors with detailed planning",
                  "To create a checklist for team members to follow",
                  "To document all possible features that could be included"
                ],
                explanation: "Acceptance criteria establish measurable standards that determine when the project meets requirements and is ready for delivery."
              },
              {
                id: "pbl-def-q3",
                prompt: "How do Excel Tables and SUMIF functions support the Smart Ledger's business objectives?",
                correctAnswer: "They provide structured data management and automated calculations that ensure accuracy and save time",
                distractors: [
                  "They make the workbook look more professional to investors",
                  "They allow for more complex financial analysis",
                  "They reduce the need for manual data entry"
                ],
                explanation: "Excel Tables organize data systematically, while SUMIF functions automate totals and categorization, supporting the goals of accuracy and efficiency."
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
            title: "Project Planning Vocabulary",
            items: [
              {
                id: "pbl-def-vocab-1",
                text: "A {blank} defines what the project will and will not include, preventing scope creep and keeping the team focused.",
                answer: "scope",
                hint: "Think about project boundaries"
              },
              {
                id: "pbl-def-vocab-2",
                text: "{blank} are measurable standards used to determine whether project deliverables meet requirements.",
                answer: "Acceptance criteria",
                hint: "These are the standards for project completion"
              },
              {
                id: "pbl-def-vocab-3",
                text: "The Smart Ledger workbook should include tabs for Transactions, Accounts, Trial Balance, {blank}, and Dashboard.",
                answer: "Checks",
                hint: "This tab would contain validation and error-checking"
              }
            ]
          }
        },
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Milestone 1 Reflection",
            unitTitle: "Milestone 1 Reflection: Project Definition",
            entries: [
              {
                id: "planning_insights",
                category: "courage",
                prompt: "What was most challenging about defining the project scope and stakeholder needs? How did you work through this challenge?",
                placeholder: "Think about difficulties in identifying requirements or managing different stakeholder perspectives..."
              },
              {
                id: "technical_decisions",
                category: "adaptability",
                prompt: "How did you balance technical Excel capabilities with business needs when planning the workbook structure?",
                placeholder: "Consider how you chose which Excel features to include and how to organize the workbook..."
              },
              {
                id: "project_confidence",
                category: "persistence",
                prompt: "What gives you confidence that your project plan will lead to a successful Smart Ledger? What concerns remain?",
                placeholder: "Think about both the strengths of your plan and potential risks or uncertainties..."
              }
            ],
            journalingFocus: "Capture student reflections on project planning process and decision-making."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Emphasize the connection between clear planning and investor confidence",
          "Guide students to think about Sarah's specific business needs",
          "Stress the importance of measurable success criteria"
        ],
        facilitationTips: [
          "Have students share their stakeholder analysis with the class",
          "Use think-pair-share to discuss different workbook architecture approaches",
          "Model how to write clear, measurable acceptance criteria"
        ],
        timingMinutes: 55,
        presenterNotes: "Keep focus on practical planning that will directly guide the build phase. Encourage professional language and thinking."
      }
    }
  ]
}