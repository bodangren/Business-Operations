/**
 * @file bus-math-nextjs/src/data/teacher/classroom-routines.ts
 * @description Defines TypeScript types and data for common classroom routines,
 * including instructions on how to teach each routine to students.
 */

/**
 * Enum for the different types of classroom routines.
 */
export enum RoutineType {
  DirectInstruction = "Direct Instruction/Lecture",
  GuidedPractice = "Guided Practice",
  IndependentPractice = "Independent Practice/Application",
  CollaborativeWork = "Collaborative/Team Work",
  PeerReview = "Peer Review & Feedback",
  Presentations = "Presentations & Demonstrations",
  Reflection = "Reflection & Self-Assessment",
  Assessment = "Assessment/Checkpoints",
  ProblemFraming = "Problem Framing & Challenge Introduction",
}

/**
 * Interface for a single classroom routine.
 */
export interface ClassroomRoutine {
  name: string;
  type: RoutineType;
  description: string;
  examples: string[];
  teachingInstructions: string;
}

/**
 * Array of common classroom routines with detailed instructions.
 */
export const classroomRoutines: ClassroomRoutine[] = [
  {
    name: "Direct Instruction/Lecture",
    type: RoutineType.DirectInstruction,
    description: "Many lessons begin with the teacher introducing new concepts, definitions, and formulas. This is often followed by demonstrations of how to apply these concepts in Excel or other tools.",
    examples: [
      "The Accounting Equation Foundation",
      "Accruals & Deferrals: The Timing Challenge",
      "Markup vs. Margin Mathematics",
      "Depreciation Concepts Foundation",
      "XLOOKUP Introduction & Payroll Applications",
      "Linear Regression Instruction",
      "CVP Model Components",
      "Scenario Manager Tutorial",
    ],
    teachingInstructions: `
      **Purpose:** To introduce new content efficiently and ensure foundational understanding.
      **How to Teach:**
      1.  **Clear Objectives:** Begin by stating clear learning objectives for the session. What will students be able to do or understand by the end?
      2.  **Chunking Content:** Break down complex topics into smaller, digestible chunks. Avoid information overload.
      3.  **Visual Aids:** Use slides, diagrams, and real-time demonstrations (e.g., in Excel) to illustrate concepts. Show, don't just tell.
      4.  **Active Engagement (Mini-Checks):** Integrate brief "check for understanding" moments. Ask questions, use polling, or have students briefly discuss a concept with a neighbor.
      5.  **Relevance:** Connect new concepts to real-world business scenarios or previous learning to enhance meaning.
      6.  **Summarize:** Conclude with a brief summary of key takeaways and preview how the concepts will be applied.
      **Teacher Role:** Presenter, demonstrator, clarifier.
      **Student Role:** Listener, note-taker, initial absorber of information.
    `,
  },
  {
    name: "Guided Practice",
    type: RoutineType.GuidedPractice,
    description: "Students work through examples or initial problems with direct teacher support, often in a step-by-step manner.",
    examples: [
      "TechStart Transaction Analysis",
      "TechStart Transaction Recording",
      "Guided Practice: Café Data Cleaning",
      "Guided Practice with Competitor Data",
      "TechStart Income Statement Build",
      "TechStart Balance Sheet Construction",
      "TechStart Cash Flow Construction",
      "Net Pay Practice",
      "Excel SLN Function Workshop",
      "Excel DDB Function Workshop",
      "FIFO Array Formula Workshop",
      "LIFO Array Formula Workshop",
    ],
    teachingInstructions: `
      **Purpose:** To bridge the gap between direct instruction and independent application, building confidence and correcting misconceptions early.
      **How to Teach:**
      1.  **Model First:** Demonstrate the first step or problem solution clearly, explaining your thought process aloud.
      2.  **"We Do" Together:** Work through subsequent problems as a class, inviting student input at each step. Use a document camera or shared screen.
      3.  **Think-Alouds:** Verbalize your decision-making process, especially for complex steps or potential pitfalls.
      4.  **Targeted Questions:** Ask specific questions that guide students to the correct next step rather than just providing answers. "What's the first thing we need to consider here?"
      5.  **Circulate and Monitor:** Move around the room (or use breakout rooms in virtual settings) to observe student work, provide immediate feedback, and identify common errors.
      6.  **Scaffolding:** Provide templates, partial solutions, or hints as needed, gradually reducing support.
      **Teacher Role:** Facilitator, coach, immediate feedback provider.
      **Student Role:** Active participant, problem-solver with support, applying new knowledge.
    `,
  },
  {
    name: "Independent Practice/Application",
    type: RoutineType.IndependentPractice,
    description: "Students apply learned skills to new problems or build components of their projects independently.",
    examples: [
      "Independent Ledger Construction",
      "Scenario Analysis & Recording",
      "Independent Construction Challenge",
      "Analysis ToolPak Practice",
      "Forecast Model Building",
      "Complete Statistical Analysis",
      "Complete Statistical Analysis",
      "Complete Statistical Analysis",
      "Prototype Calculator",
      "Multi-Employee System Planning",
      "Payroll Register Development",
      "System Integration Testing",
      "Extreme Scenario Testing",
      "One-Variable Data Table Construction",
      "Two-Variable Data Table Analysis",
      "Content Development Time",
      "Final Model Polish",
    ],
    teachingInstructions: `
      **Purpose:** To solidify understanding, develop mastery, and allow students to apply skills in novel contexts without direct teacher intervention.
      **How to Teach:**
      1.  **Clear Instructions:** Ensure students fully understand the task, expectations, and success criteria before beginning. Provide written instructions.
      2.  **Time Management:** Allocate appropriate time for the activity and communicate time limits clearly.
      3.  **Resource Availability:** Make sure all necessary resources (e.g., data sets, rubrics, reference materials) are easily accessible.
      4.  **"Quiet" Support:** Be available for questions, but encourage students to try problem-solving independently first. Use guiding questions rather than direct answers.
      5.  **Differentiation:** Offer varied levels of challenge or support for different student needs (e.g., extension activities for advanced students, simplified versions for those struggling).
      6.  **Accountability:** Establish a clear deliverable or checkpoint for the independent work.
      **Teacher Role:** Monitor, provide individual support, assess progress.
      **Student Role:** Independent problem-solver, self-regulator, applying skills.
    `,
  },
  {
    name: "Collaborative/Team Work",
    type: RoutineType.CollaborativeWork,
    description: "Students frequently work in pairs or small teams to solve problems, build models, or prepare presentations. This includes team formation, brainstorming, and joint problem-solving.",
    examples: [
      "Turn and Talk: Business Challenge Analysis",
      "Challenge Introduction & Team Formation",
      "Team Formation & Automation Focus Selection",
      "Payroll Challenge Brainstorm",
      "Project Introduction & Team Formation",
      "Team Formation & Data Review",
      "Industry Context Selection",
      "Challenge Setup & Team Formation",
      "Business Scenario Development",
      "Team Planning for Week 2",
      "Multi-Employee System Planning",
      "Team Rehearsal Time",
      "Team Presentation Rehearsals",
    ],
    teachingInstructions: `
      **Purpose:** To foster communication, critical thinking, shared problem-solving, and diverse perspectives.
      **How to Teach:**
      1.  **Clear Roles/Expectations:** Define roles (e.g., recorder, presenter, timekeeper) or clear expectations for participation to ensure equitable contribution.
      2.  **Group Formation:** Strategically form groups (e.g., mixed abilities, complementary skills) or allow students to choose based on project needs.
      3.  **Structured Tasks:** Provide clear tasks with defined outcomes. Use graphic organizers, shared documents, or specific prompts to guide collaboration.
      4.  **Communication Norms:** Establish norms for respectful communication, active listening, and constructive disagreement.
      5.  **Monitoring & Intervention:** Circulate among groups, listening to discussions, and intervening to redirect, clarify, or prompt deeper thinking.
      6.  **Processing:** Dedicate time for groups to reflect on their collaborative process and for the class to share key takeaways.
      **Teacher Role:** Organizer, facilitator of group dynamics, resource provider.
      **Student Role:** Collaborator, active listener, shared problem-solver, communicator.
    `,
  },
  {
    name: "Peer Review & Feedback",
    type: RoutineType.PeerReview,
    description: "A recurring routine where students evaluate each other's work, provide constructive criticism, and incorporate feedback for improvement. This often involves structured protocols and rubrics.",
    examples: [
      "Peer Review & Feedback",
      "Peer Critique & Revision: Gallery Walk Feedback",
      "Gallery Walk: Peer Review Rounds",
      "Feedback Analysis & Revision Planning",
      "Peer Debugging Session",
      "Peer Accuracy Check",
      "Structured Peer Feedback",
      "Mock Screencast Presentations",
      "Peer Demo Practice & Feedback",
      "Peer Audit Process",
      "Mock VC Panel Presentations",
      "Peer Feedback Integration",
    ],
    teachingInstructions: `
      **Purpose:** To develop critical evaluation skills, provide multiple perspectives on work, and improve the quality of student output through iterative refinement.
      **How to Teach:**
      1.  **Teach Feedback Skills:** Explicitly teach students how to give constructive, specific, and actionable feedback (e.g., "I like...", "I wonder...", "I suggest...").
      2.  **Provide Rubrics/Protocols:** Use clear rubrics, checklists, or structured protocols to guide the review process and ensure consistency.
      3.  **Model Review:** Demonstrate a peer review session, showing how to use the rubric and provide helpful comments.
      4.  **Anonymity (Optional):** Consider anonymous reviews for sensitive tasks to encourage honesty, or structured pairs for direct interaction.
      5.  **Time for Revision:** Allocate dedicated time for students to analyze feedback and make revisions based on it.
      6.  **Reflection on Feedback:** Have students reflect on the feedback they received and how they plan to incorporate it.
      **Teacher Role:** Trainer, organizer, quality controller of feedback, facilitator of revision.
      **Student Role:** Reviewer, feedback provider, feedback receiver, reviser.
    `,
  },
  {
    name: "Presentations & Demonstrations",
    type: RoutineType.Presentations,
    description: "Students regularly present their work, often involving live demonstrations of Excel models or other tools, to classmates, teachers, or external stakeholders (mock investors, business owners, CPAs). This includes preparing pitch decks, infographics, and tutorials.",
    examples: [
      "Investor Panel Presentations",
      "Innovation Fair Demo: Month-End Wizard v1.0",
      "Café Management Presentation",
      "Payroll Tutorial Screencast + Live Q&A",
      "Pricing Strategy Presentation & Town Hall Debate",
      "Board Advisory Brief + Pitch Presentation",
      "VC Pitch + Live Model Demo",
      "Live Demonstrations to Visitors",
      "Public Presentation: Demo Day Investor Showcase",
      "Public Presentation: YouTube Publication & Business Q&A",
      "Town Hall Pricing Debate",
      "Board of Directors Panel Presentations",
      "VC Panel Presentations",
    ],
    teachingInstructions: `
      **Purpose:** To develop public speaking, communication, and demonstration skills, and to showcase learning and project outcomes.
      **How to Teach:**
      1.  **Clear Audience & Purpose:** Define who the audience is (e.g., investors, clients) and the purpose of the presentation (e.g., persuade, inform, demonstrate).
      2.  **Structure & Content Guidance:** Provide guidelines for presentation structure (e.g., problem, solution, demo, Q&A) and required content.
      3.  **Practice Opportunities:** Offer multiple opportunities for students to practice their presentations, ideally with peer or teacher feedback.
      4.  **Technical Setup:** Ensure students are familiar with the presentation tools (e.g., projector, screen sharing, Excel live demo).
      5.  **Q&A Preparation:** Coach students on how to anticipate questions and respond effectively.
      6.  **Feedback on Delivery:** Provide specific feedback on presentation delivery, clarity, engagement, and technical demonstration.
      **Teacher Role:** Coach, audience, evaluator, technical support.
      **Student Role:** Presenter, demonstrator, communicator, public speaker.
    `,
  },
  {
    name: "Reflection & Self-Assessment",
    type: RoutineType.Reflection,
    description: "Students are prompted to reflect on their learning, identify challenges, assess their skills, and set goals for future improvement. This often involves journaling or structured reflection activities.",
    examples: [
      "Reflection & Preview",
      "Unit Reflection & Learning Analysis",
      "Individual Learning Reflection",
      "Team Sprint Retrospective",
      "Learning Reflection Journal",
      "Sprint Retrospective",
      "Unit Reflection & Portfolio Addition",
      "Learning Reflection & Portfolio Addition",
      "Learning Reflection & Portfolio Addition",
      "Unit Reflection & CAP Analysis",
    ],
    teachingInstructions: `
      **Purpose:** To promote metacognition, self-awareness of learning, and continuous improvement.
      **How to Teach:**
      1.  **Provide Prompts:** Use specific, open-ended prompts that encourage deep thinking rather than simple recall (e.g., "What was challenging and how did you overcome it?", "How has your understanding changed?").
      2.  **Structured Activities:** Implement structured reflection activities like journaling, exit tickets, or guided discussions.
      3.  **Model Reflection:** Share your own reflections on a learning experience or challenge to demonstrate the process.
      4.  **Safe Space:** Create a classroom environment where students feel safe to honestly assess their strengths and weaknesses.
      5.  **Connect to Goals:** Encourage students to connect their reflections to future learning goals or project improvements.
      6.  **Feedback on Reflection:** Provide feedback on the quality of their reflection, encouraging deeper analysis.
      **Teacher Role:** Prompt provider, facilitator of self-assessment, listener.
      **Student Role:** Reflector, self-assessor, goal-setter, critical thinker about own learning.
    `,
  },
  {
    name: "Assessment/Checkpoints",
    type: RoutineType.Assessment,
    description: "Regular checks for understanding, quizzes, and milestone validations are integrated throughout the units to monitor student progress and ensure mastery of concepts and skills.",
    examples: [
      "Comprehension Activities",
      "Check for Understanding",
      "Journal Entry Mastery Check",
      "Excel Model Checkpoint",
      "Milestone 1 Assessment",
      "Milestone 2 Assessment & Preview",
      "Milestone 3 Validation & Demo Prep",
      "Milestone 1 Assessment: Competitor Analysis",
      "Milestone 2: Model Runs 3 Scenarios Assessment",
      "Milestone 3 Assessment",
      "Concept Mastery Quiz",
      "Financial Statement Relationships Quiz",
      "Quality Check & Preview",
      "Model Validation",
      "Milestone 1 Validation",
      "Milestone 2 Completion",
      "Design Completion Check",
      "Final Readiness Check",
      "Final Quality Check",
    ],
    teachingInstructions: `
      **Purpose:** To monitor student progress, identify areas for remediation, and ensure mastery of concepts and skills.
      **How to Teach:**
      1.  **Clear Criteria:** Ensure students understand what will be assessed and the criteria for success (e.g., rubrics, examples of proficient work).
      2.  **Variety of Formats:** Use diverse assessment methods (quizzes, model validations, presentations, peer checks) to cater to different learning styles and assess various skills.
      3.  **Formative vs. Summative:** Clearly distinguish between formative assessments (for learning) and summative assessments (of learning).
      4.  **Timely Feedback:** Provide prompt and specific feedback that helps students understand their errors and how to improve.
      5.  **Low Stakes Practice:** Offer low-stakes practice opportunities before high-stakes assessments.
      6.  **Remediation/Extension:** Use assessment data to inform differentiated instruction, providing targeted support or advanced challenges.
      **Teacher Role:** Assessor, feedback provider, data analyst for instruction.
      **Student Role:** Demonstrator of learning, receiver of feedback, identifier of learning gaps.
    `,
  },
  {
    name: "Problem Framing & Challenge Introduction",
    type: RoutineType.ProblemFraming,
    description: "Each unit begins by introducing a real-world business problem or scenario that students will work to solve throughout the unit.",
    examples: [
      "Meet Sarah Chen & TechStart Solutions",
      "Sarah's Transaction Challenge",
      "CFO Vlog: The Real Cost of Slow Closes",
      "Shoebox Receipt Challenge",
      "Tesla 10-Q Dissection",
      "Campus Café Challenge",
      "The Messy Data Reality",
      "The Outlier Detective Challenge",
      "The Markup vs. Margin Confusion",
      "The CVP Challenge Introduction",
      "The Reverse Engineering Challenge",
      "The Sensitivity Analysis Need",
      "Auditor Case Study Entry Event",
      "Inventory Valuation Challenge",
      "VC Guest Speaker: Model Red Flags",
      "Model Failure Case Study Analysis",
    ],
    teachingInstructions: `
      **Purpose:** To engage students, provide context for learning, and establish a clear, compelling reason for acquiring new knowledge and skills.
      **How to Teach:**
      1.  **Real-World Connection:** Present a problem that is authentic, relevant, and relatable to students' lives or future careers.
      2.  **Compelling Narrative:** Frame the problem as a story or a challenge that sparks curiosity and motivates inquiry.
      3.  **Driving Question:** Introduce a clear, open-ended driving question that the unit will seek to answer.
      4.  **Initial Brainstorm/Discussion:** Allow students to brainstorm initial ideas, ask questions, and share prior knowledge related to the problem.
      5.  **Introduce Stakeholders:** If applicable, introduce the "client" or "stakeholders" for whom the problem is being solved.
      6.  **Preview the Journey:** Briefly outline how the unit's activities will lead to solving the problem, without giving away the solution.
      **Teacher Role:** Storyteller, problem-setter, motivator, context provider.
      **Student Role:** Engaged listener, questioner, initial problem-solver, inquirer.
    `,
  },
];