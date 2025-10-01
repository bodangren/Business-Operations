import { LessonScenario } from "@/types/lesson-scenarios"

export const unit01Lesson01Scenario: LessonScenario = {
  metadata: {
    unitId: "mdrha5ziiupuou6dqt",
    unitTitle: "Unit 1: Smart Ledger Launch",
    lessonId: "mds5sodgs14x8yyt2n",
    lessonNumber: 1,
    title: "Introduction: Sarah's Challenge",
    drivingQuestion: "How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?",
    durationMinutes: 45,
    focus: "Launch Sarah Chen's Smart Ledger case study and frame the need for professional financial systems",
    slug: "unit01-lesson01"
  },
  sharedResources: [
    {
      id: "sarah-intro-video",
      kind: "video",
      title: "From Chaos to Control: Starting Your Business with a Smart Ledger",
      description: "Sarah Chen describes her early TechStart Solutions success and the bookkeeping chaos that followed.",
      url: "https://www.youtube.com/watch?v=IN4MBaOdLRY"
    }
  ],
  teacherGuidance: {
    overview: "Introduce Sarah's TechStart Solutions narrative, analyze the risks of manual bookkeeping, and orient students to investor expectations.",
    pacingHighlights: [
      "Hook video + quick debrief (5 minutes)",
      "Story unpack + transaction categorization (15 minutes)",
      "Guided practice on transaction types (12 minutes)",
      "Independent investor analysis (8 minutes)",
      "Formative assessment + peer review (5 minutes)",
      "Closing reflection and preview (5 minutes)"
    ],
    assessments: [
      "Phase 5 comprehension check (question bank pull)",
      "Peer critique discussion scenarios",
      "Reflection journal prompts"
    ]
  },
  phases: [
    {
      id: "unit01-lesson01-phase1",
      name: "Hook",
      title: "Meet Sarah Chen: Chaos Behind TechStart's Success",
      sequence: 1,
      summary: "Students meet Sarah through a narrative video and connect her bookkeeping chaos to the unit's driving question.",
      objectives: [
        "Understand TechStart Solutions' early client wins and services",
        "Recognize the risks created by manual notebook bookkeeping",
        "Connect the idea of \"clean books\" to investor confidence"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Welcome to the world of business operations! It's a place where a great idea needs a great plan to succeed. This unit is about building one of the most important parts of that plan: a trustworthy system for managing money."
        },
        {
          type: "paragraph",
          text: "When Sarah Chen launched TechStart Solutions, she landed three client projects back-to-back: a $2,200 bakery website, a $650 social media setup for a pet groomer, and $1,100 in SEO work for a dental office. The revenue was real, but the systems behind it were not ready."
        },
        {
          type: "paragraph",
          text: "Behind the scenes, Sarah tracked invoices, payments, and subscriptions in paper notebooks. She believed she could keep it all straight in her head, but even the most basic record-keeping started to feel overwhelming." 
        },
        {
          type: "paragraph",
          text: "Her wake-up call arrived when she pictured tax season. She imagined an accountant asking for exact numbers or receipts and realized there was no way to deliver quickly. The notebook system wasn't just messy—it was a business risk." 
        },
        {
          type: "callout",
          intent: "whyItMatters",
          title: "Why This Matters",
          body: "Sarah's story shows that financial credibility is a requirement for growth. Investors, lenders, and even future teammates expect clean, organized records they can trust.",
          bullets: [
            "Entrepreneurs need real-time insight into profit, cash flow, and expenses",
            "Accurate records prevent expensive tax mistakes and penalties",
            "Investors look for evidence of systems, not just passion"
          ]
        },
        {
          type: "callout",
          intent: "question",
          title: "Turn and Talk",
          body: "Think about a time when a project or responsibility became chaotic because the organization system didn't keep up.",
          bullets: [
            "What went wrong with the organization system?",
            "How did the chaos make you feel?",
            "What would have prevented the problem?",
            "How does this connect to Sarah's experience with TechStart?"
          ]
        },
        {
          type: "paragraph",
          text: "Just like Sarah discovered, a great business idea needs systems that can grow with the company. The Smart Ledger journey starts with building a trustworthy process for keeping clean books from day one."
        }
      ],
      components: [
        {
          type: "video",
          component: "VideoPlayer",
          data: {
            id: "sarah-intro-video",
            title: "From Chaos to Control: Starting Your Business with a Smart Ledger",
            youtubeId: "IN4MBaOdLRY",
            duration: "4:30",
            description: "Follow Sarah's journey as she launches TechStart Solutions and quickly learns that tracking finances in a notebook is unsustainable.",
            transcript: `(Sarah sits in a well-lit, modern office space, speaking directly to the camera with a confident and reflective tone.)

When I first launched TechStart Solutions, the feeling was just… incredible. I remember landing my first few clients back-to-back. There was a local bakery who needed a new website—that was a $2,200 project. Then a pet groomer for a social media setup, which was about $650. And right after that, a dental office for SEO work for another $1,100. The money was actually coming in. I honestly thought, 'Okay, this is it. I'm doing it.'

But what nobody saw was the chaos behind the curtain. While I was so focused on delivering great work for them, my own business records... they were a disaster. I was tracking everything in notebooks. Seriously. Every invoice, every payment, every little software subscription. I was just scribbling it down, thinking I could keep it all straight in my head. I felt completely overwhelmed by just the most basic record-keeping.

The real wake-up call came when I started thinking about taxes. I had this moment of pure panic. I looked at this stack of notebooks and just thought, 'How am I ever going to pull accurate numbers out of this? What's my actual profit? If an accountant asks me for a specific receipt, am I going to spend a week looking for it?' I realized my system wasn't just messy; it was a huge risk. It was totally unsustainable.

That's when I decided I needed to build what this course calls a 'Smart Ledger'. It wasn't just about making a list. It was about building a real system—something organized, something I could trust. The idea was to have 'clean books' from day one. I learned pretty quickly that you don't do this just for your accountant or for some future investor. You do it for yourself, so you can actually understand what's happening in your own company and make decisions based on facts, not just gut feelings.

Once I built that first proper ledger, it was like a weight was lifted. I wasn't overwhelmed anymore. I had clarity. I could see my actual financial health in real time, and that gave me so much confidence. But, of course, solving one problem just shows you the next one. My new, organized system made it painfully obvious just how much time I was spending on manual data entry. Every single transaction still had to be typed in by hand. And that new challenge—all that wasted time—is what pushed me to figure out automation, which I think is what you're covering next.`,
            resourceRefId: "sarah-intro-video"
          }
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Understanding Sarah's Challenge",
            description: "Test your understanding of Sarah's business situation and the challenges she encountered.",
            questions: [
              {
                id: "hook-q1",
                prompt: "What were the total earnings from Sarah's first three clients at TechStart Solutions?",
                correctAnswer: "$3,950",
                distractors: ["$2,850", "$4,100", "$3,200"],
                explanation: "Sarah earned $2,200 from the bakery website, $650 from the pet groomer social media setup, and $1,100 from the dental office SEO project for a total of $3,950."
              },
              {
                id: "hook-q2",
                prompt: "What was Sarah's main method of tracking business finances when she launched TechStart Solutions?",
                correctAnswer: "Handwritten notebooks",
                distractors: ["Excel spreadsheets", "Accounting software", "Bank statements only"],
                explanation: "Sarah tracked invoices, payments, and subscriptions in notebooks, believing she could keep everything organized manually."
              },
              {
                id: "hook-q3",
                prompt: "What does Sarah mean by 'clean books' and why is it important?",
                correctAnswer: "A trustworthy, organized financial system for decision-making and investor confidence",
                distractors: ["Books that are physically clean and organized", "Books about cleaning and organization", "Financial records that only show profits"],
                explanation: "Clean books are organized, accurate financial records that build confidence with investors, accountants, and the business owner."
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Hook students with Sarah's authentic founder story",
          "Highlight the emotional stress created by disorganized finances",
          "Introduce the enduring need for systems that investors trust"
        ],
        facilitationTips: [
          "Pause the video after the first minute to ask what students notice about Sarah's tone",
          "Capture student phrases about \"chaos\" or \"stress\" on the board for later reference"
        ],
        timingMinutes: 7,
        presenterNotes: "Keep energy high and connect Sarah's experience directly to students' upcoming work."
      }
    },
    {
      id: "unit01-lesson01-phase2",
      name: "Introduction",
      title: "Unpacking TechStart's Business Model",
      sequence: 2,
      summary: "Students analyze TechStart's services, confront the risks of notebook bookkeeping, and practice core vocabulary.",
      objectives: [
        "Explain TechStart's revenue streams and service offerings",
        "Identify the business risks created by manual record-keeping",
        "Build vocabulary for transactions, clean books, and self-auditing systems"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Sarah's early wins prove her business idea works, but success exposes the cracks in her systems. Professional entrepreneurs need financial structures that grow with them." 
        },
        {
          type: "heading",
          level: 3,
          text: "Sarah's Initial Success"
        },
        {
          type: "paragraph",
          text: "Clients hired TechStart Solutions for website design, social media setup, and SEO support. Each project brought real revenue, deadlines, and receipts that needed to be tracked accurately." 
        },
        {
          type: "heading",
          level: 3,
          text: "The Hidden Crisis"
        },
        {
          type: "paragraph",
          text: "Manual notebooks leave Sarah without totals, categories, or quick ways to prove her numbers. Investors, lenders, and the IRS all expect organized documentation she cannot produce." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Financial Credibility Checklist",
          body: "Every business must answer tough questions before investors trust them.",
          bullets: [
            "How will you calculate accurate tax liability from scattered entries?",
            "What numbers would you show a potential investor or lender?",
            "How do you know if you're actually profitable month to month?",
            "Can you find receipts or contracts instantly when someone requests them?"
          ]
        },
        {
          type: "paragraph",
          text: "This phase grounds the unit's driving question: building a self-auditing ledger that convinces an angel investor the books are clean from day one." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "BusinessTransactionCategorization",
          data: {
            preset: "techstart-intro"
          },
          description: "Students sort TechStart transactions to see how professional systems organize data."
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "TechStart Solutions Business Model",
            questions: [
              {
                id: "intro-q1",
                prompt: "What services does TechStart Solutions offer to clients?",
                correctAnswer: "Website design, social media setup, and SEO work",
                distractors: ["Only website development", "Software programming and app development", "Digital advertising and email marketing"],
                explanation: "Sarah's offerings include web design, social media setup, and SEO consulting—the three projects she completed in her first week."
              },
              {
                id: "intro-q2",
                prompt: "What was Sarah's main problem with her record-keeping system?",
                correctAnswer: "She tracked everything by hand in notebooks",
                distractors: ["She used too many different software programs", "She forgot to invoice her clients", "She didn't understand her business expenses"],
                explanation: "Notebook entries felt manageable at first, but quickly became an overwhelming stack of disconnected notes."
              },
              {
                id: "intro-q3",
                prompt: "Why is having \"clean books\" essential for investor confidence?",
                correctAnswer: "It shows the business owner is organized and trustworthy",
                distractors: ["Investors want to see neat handwriting", "Clean books are required by law", "It makes the business look more profitable"],
                explanation: "Investors fund ventures that demonstrate control, organization, and accurate reporting—not informal guesses."
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
            title: "Key Vocabulary Practice",
            items: [
              {
                id: "intro-vocab-1",
                text: "A {blank} is any business event that involves money and affects the company's financial position.",
                answer: "transaction",
                hint: "A business exchange or activity involving money"
              },
              {
                id: "intro-vocab-2",
                text: "{blank} refers to having organized, accurate, and trustworthy financial records that can be easily understood by accountants and investors.",
                answer: "Clean books",
                hint: "Professional, organized financial records"
              },
              {
                id: "intro-vocab-3",
                text: "Sarah's driving question is: How can we design a {blank} ledger that would convince a potential angel investor we keep clean books from day 1?",
                answer: "self-auditing",
                hint: "A system that automatically checks its own accuracy"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Surface the gap between operational success and financial readiness",
          "Emphasize investor expectations for timely, accurate reporting"
        ],
        facilitationTips: [
          "Use think-pair-share to process the \"Financial Credibility Checklist\" callout",
          "Model one vocabulary sentence before students work independently"
        ],
        timingMinutes: 12
      }
    },
    {
      id: "unit01-lesson01-phase3",
      name: "Guided Practice",
      title: "Categorizing TechStart Transactions",
      sequence: 3,
      summary: "Students practice categorizing transactions, analyze manual tracking issues, and connect categories to investor expectations.",
      objectives: [
        "Define what counts as a business transaction",
        "Categorize TechStart transactions by type and purpose",
        "Identify pain points in manual notebooks compared to structured ledgers"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "A business transaction is any event that involves money and changes the company's financial position. Every invoice, subscription, or equipment purchase needs a clear home in the ledger." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Sarah's Real Transaction Examples",
          body: "Use TechStart's six sample transactions to practice categorizing what comes in and what goes out of the business."
        },
        {
          type: "paragraph",
          text: "Notebook entries scatter critical details across random pages. Organized ledgers summarize revenue, expenses, assets, and liabilities so leaders can make decisions with confidence." 
        },
        {
          type: "paragraph",
          text: "Guided practice builds fluency with the idea that every transaction must be categorized, verified, and easy to reference during audits or investor conversations." 
        }
      ],
      components: [
        {
          type: "dragAndDrop",
          component: "BusinessTransactionCategorization",
          data: {
            preset: "techstart-guided"
          },
          description: "Students drag TechStart transactions into the correct categories to visualize money flow."
        },
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Guided Practice Check",
            questions: [
              {
                id: "guided-q1",
                prompt: "Sarah receives payment for completing a client project. What type of transaction is this?",
                correctAnswer: "Revenue transaction - money coming into the business",
                distractors: ["Expense transaction - money going out of the business", "Asset transaction - something the business owns", "Liability transaction - something the business owes"],
                explanation: "Client payments are revenue that increase the business's cash and equity."
              },
              {
                id: "guided-q2",
                prompt: "What makes tracking business transactions challenging when using Sarah's notebook system?",
                correctAnswer: "Hard to categorize transactions and calculate totals accurately",
                distractors: ["Notebooks are too expensive to maintain", "Handwriting takes too much time", "Clients prefer digital receipts"],
                explanation: "Manual notes make it nearly impossible to group entries, run totals, or share updates quickly." 
              }
            ],
            allowRetry: true,
            showExplanations: true
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Ensure students verbalize why each transaction fits a category",
          "Connect miscategorized items to investor red flags"
        ],
        facilitationTips: [
          "Model the first drag-and-drop move describing your reasoning",
          "Ask students to explain how an investor might interpret each transaction"
        ],
        timingMinutes: 12
      }
    },
    {
      id: "unit01-lesson01-phase4",
      name: "Independent Practice",
      title: "Thinking Like an Investor",
      sequence: 4,
      summary: "Students independently analyze TechStart from an investor's perspective and envision features of a self-auditing ledger.",
      objectives: [
        "Evaluate TechStart's risks if notebooks remain the only system",
        "Describe core features of a self-auditing ledger",
        "Explain how automation protects investor confidence"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "It's time to shift from guided practice to independent analysis. Students step into an investor's shoes and evaluate TechStart's readiness." 
        },
        {
          type: "callout",
          intent: "story",
          title: "What Makes a Ledger Self-Auditing?",
          body: "A robust ledger doesn't just store data—it actively protects accuracy.",
          bullets: [
            "Automatic categorization keeps revenue, expenses, and assets organized",
            "Structured tables capture dates, clients, invoice numbers, and payment status",
            "Error detection flags missing data, duplicate entries, or math mistakes",
            "Instant reporting enables investors to verify totals in seconds"
          ]
        },
        {
          type: "paragraph",
          text: "Investors need proof that Sarah can deliver precise numbers on demand. A self-auditing ledger with controls and validation gives them that confidence." 
        },
        {
          type: "paragraph",
          text: "By the end of this phase, students articulate why professional systems matter and how automation addresses Sarah's core business risks." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Investor Analysis",
            questions: [
              {
                id: "independent-q1",
                prompt: "Sarah is preparing to meet with a potential angel investor. What would be the investor's biggest concern about her current notebook system?",
                correctAnswer: "The investor cannot verify the accuracy or completeness of financial information",
                distractors: ["The notebook pages are not the right size", "Sarah's handwriting is difficult to read", "Notebooks are outdated technology"],
                explanation: "Investors need quick validation of data accuracy—scattered notebook entries make that impossible." 
              },
              {
                id: "independent-q2",
                prompt: "If Sarah's business grows from 3 clients to 30 clients, which problem will become most critical with her notebook system?",
                correctAnswer: "The time required to manually calculate totals and find specific transactions will become overwhelming",
                distractors: ["She will run out of notebook pages", "Her clients will be unhappy with handwritten invoices", "She will need to hire someone to help with the writing"],
                explanation: "Manual systems do not scale. The workload multiplies and errors compound as transactions increase." 
              },
              {
                id: "independent-q3",
                prompt: "What is the most important benefit of a \"self-auditing\" ledger system for Sarah's business credibility?",
                correctAnswer: "It automatically checks for errors and ensures mathematical accuracy, giving investors confidence in the numbers",
                distractors: ["It makes the ledger look more professional and modern", "It reduces the amount of paperwork Sarah needs to store", "It allows Sarah to work faster on client projects"],
                explanation: "Automatic validation builds trust because numbers are verified before Sarah ever meets with investors." 
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
            title: "Scenario Vocabulary",
            items: [
              {
                id: "independent-vocab-1",
                text: "When Sarah's potential angel investor asks to see her financial records, the biggest risk is that the notebook system cannot provide {blank} and organized financial information.",
                answer: "accurate",
                hint: "Think about what investors need to see"
              },
              {
                id: "independent-vocab-2",
                text: "Sarah realizes that as her business grows, she needs a system that can automatically categorize transactions and {blank} mathematical accuracy.",
                answer: "verify",
                hint: "What would a smart ledger do automatically?"
              },
              {
                id: "independent-vocab-3",
                text: "The driving question for this unit asks how to design a {blank} ledger that would convince investors that Sarah keeps clean books from day 1.",
                answer: "self-auditing",
                hint: "This is our main unit goal"
              }
            ]
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Encourage students to justify each answer from an investor's perspective",
          "Capture strong student language describing automation benefits"
        ],
        facilitationTips: [
          "Have students write one investor concern on a sticky note and share with the class",
          "Highlight vocabulary connections across the FillInTheBlank activity"
        ],
        timingMinutes: 8
      }
    },
    {
      id: "unit01-lesson01-phase5",
      name: "Assessment",
      title: "Formative Assessment and Peer Review",
      sequence: 5,
      summary: "Students demonstrate mastery through a comprehension check and structured peer critique of business scenarios.",
      objectives: [
        "Demonstrate understanding of TechStart's business model and bookkeeping risks",
        "Explain investor expectations for clean, verifiable records",
        "Provide peer feedback using professional criteria"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "This assessment validates that students can analyze TechStart from operational and investor viewpoints while articulating the need for a Smart Ledger." 
        },
        {
          type: "callout",
          intent: "warning",
          title: "Assessment Focus Areas",
          body: "Be prepared to explain each focus area with concrete examples from Sarah's story.",
          bullets: [
            "TechStart's business model and transaction types",
            "Risks created by manual record-keeping",
            "Investor requirements for financial credibility",
            "Connections between transaction categorization and professional management"
          ]
        },
        {
          type: "paragraph",
          text: "Students then engage in a peer critique, practicing how to explain business risks and Smart Ledger solutions to a partner." 
        },
        {
          type: "paragraph",
          text: "A short self-assessment encourages reflection on confidence, key insights, and real-world application." 
        }
      ],
      components: [
        {
          type: "comprehensionCheck",
          component: "ComprehensionCheck",
          data: {
            title: "Unit 1 Lesson 1 Assessment",
            description: "Demonstrate your understanding of business transactions, financial credibility, and professional ledger systems.",
            questionBankRef: {
              bankId: "unit01-phase5",
              filter: {
                lessonIds: ["lesson01"]
              }
            },
            showExplanations: true
          }
        },
        {
          type: "peerReview",
          component: "PeerCritiqueForm",
          data: {
            projectTitle: "Smart Ledger Analysis",
            defaultPeerName: "Peer Name",
            rubricFocus: [
              "Explain why Sarah's notebook system fails due diligence",
              "Describe self-auditing ledger features that build investor confidence"
            ],
            instructions: "Students alternate explaining Scenarios A and B while partners capture feedback."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Use question bank analytics to flag common misconceptions",
          "Coach students to give specific, actionable peer feedback"
        ],
        facilitationTips: [
          "Model a peer critique exchange before students begin",
          "Encourage students to cite evidence from Sarah's story in their feedback"
        ],
        timingMinutes: 6
      }
    },
    {
      id: "unit01-lesson01-phase6",
      name: "Closing",
      title: "Synthesis and Reflection",
      sequence: 6,
      summary: "Students synthesize the lesson, reflect using the CAP framework, and preview the next steps in the Smart Ledger journey.",
      objectives: [
        "Summarize key insights about business credibility and systems",
        "Reflect on personal growth using the Courage, Adaptability, Persistence framework",
        "Preview upcoming lessons focused on accounting fundamentals and Excel automation"
      ],
      narrative: [
        {
          type: "paragraph",
          text: "Students revisit the driving question and recognize how today's analysis sets up the entire Smart Ledger project." 
        },
        {
          type: "paragraph",
          text: "They celebrate specific accomplishments: understanding TechStart's business model, articulating investor expectations, and framing the self-auditing solution." 
        },
        {
          type: "callout",
          intent: "tip",
          title: "Looking Ahead",
          body: "Next lessons cover the Accounting Equation, debit and credit rules, and Excel tools that power the Smart Ledger."
        },
        {
          type: "paragraph",
          text: "A call to action invites students to carry today's investor mindset into the build phase of the unit." 
        }
      ],
      components: [
        {
          type: "reflection",
          component: "ReflectionJournal",
          data: {
            title: "Lesson 1 Reflection",
            unitTitle: "Lesson 1 Reflection: Sarah's Challenge and Business Credibility",
            entries: [
              {
                id: "connection",
                category: "courage",
                prompt: "How does Sarah's challenge connect to your own experiences with organization and planning?",
                placeholder: "Think about times when poor organization created problems for you or someone you know..."
              },
              {
                id: "investor_thinking",
                category: "adaptability",
                prompt: "What was most surprising to you about thinking like an investor? What would you look for if you were investing your own money?",
                placeholder: "Consider what would make you confident in someone else's business..."
              },
              {
                id: "business_insight",
                category: "persistence",
                prompt: "What is the most important insight you gained about professional business management today?",
                placeholder: "Think about what separates successful businesses from struggling ones..."
              }
            ],
            journalingFocus: "Capture student reflections aligned to the CAP (Courage, Adaptability, Persistence) framework."
          }
        }
      ],
      teacherNotes: {
        keyPoints: [
          "Celebrate wins and reinforce why investors care about systems",
          "Preview how accounting fundamentals will connect back to Sarah's needs"
        ],
        facilitationTips: [
          "Invite two students to share a reflection highlight",
          "Link the closing call to action with tomorrow's lesson teaser"
        ],
        timingMinutes: 5
      }
    }
  ]
}
