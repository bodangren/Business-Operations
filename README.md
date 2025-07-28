# Math for Business Operations: Applied Accounting with Excel

**A comprehensive Grade 12 educational platform integrating accounting principles, spreadsheet modeling, and entrepreneurship through project-based learning.**

![Cover Image](./bus-math-nextjs/public/cover.png)

## 📚 Project Overview

This project is a full-featured educational platform designed for Grade 12 students taking "Math for Business Operations." It combines traditional accounting education with modern spreadsheet literacy, entrepreneurial thinking, and real-world problem-solving through an engaging, project-based curriculum.

### Key Features

- **Interactive Next.js Web Application** - Modern, responsive educational interface
- **8 Comprehensive Learning Units** - Progressive skill building from basic ledgers to complex financial modeling
- **Authentic Project-Based Learning** - Students work on real business scenarios with community connections
- **Advanced Excel Integration** - VBA, Power Query, financial functions, and automation
- **Professional Assessment System** - Industry-standard rubrics and peer review processes
- **Capstone Project Framework** - 13-week integrated business plan development

## 🏗️ Architecture

### Technology Stack

- **Frontend**: Next.js 15 with App Router, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui with Radix UI primitives
- **Charts & Visualization**: Recharts library
- **Interactive Elements**: @hello-pangea/dnd for drag-and-drop exercises
- **Deployment**: Static export optimized for GitHub Pages

### Project Structure

```
Business-Operations/
├── bus-math-nextjs/          # Main Next.js application
│   ├── src/
│   │   ├── app/              # Next.js App Router pages
│   │   ├── components/       # Reusable React components
│   │   │   ├── accounting/   # T-accounts, journal entries
│   │   │   ├── business-simulations/  # Interactive scenarios
│   │   │   ├── charts/       # Data visualization
│   │   │   ├── drag-drop-exercises/   # Learning activities
│   │   │   ├── financial-reports/     # Financial statements
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── data/            # Unit content definitions
│   │   └── types/           # TypeScript interfaces
├── html/                    # Legacy HTML resources
├── dev-docs/               # Development documentation
└── qdrant_storage/         # Vector database for content search
```

## 📖 Curriculum Overview

### Unit Progression

**Unit 1: Smart Ledger Launch** (Weeks 1-2)
- *Driving Question*: How can we design a self-auditing ledger that would convince a potential angel investor we keep "clean books" from day 1?
- Excel tables, SUMIF functions, conditional formatting
- Public deliverable: 4-minute investor pitch with live demo

**Unit 2: Month-End Wizard** (Weeks 3-4)
- *Driving Question*: What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?
- Macros, VBA, named ranges, adjusting entries
- Public deliverable: Interactive Excel automation tool

**Unit 3: Three-Statement Storyboard** (Weeks 5-6)
- *Driving Question*: How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?
- Cross-sheet linking, INDEX/MATCH, financial statement preparation
- Public deliverable: Investor one-pager with KPI dashboard

**Unit 4: Data-Driven Café** (Weeks 7-8)
- *Driving Question*: Given two years of POS data, what inventory and staffing plan will maximize weekend profits without raising waste above 3%?
- Descriptive statistics, regression analysis, Excel Analysis ToolPak
- Public deliverable: Management recommendation with forecast model

**Unit 5: PayDay Simulator** (Weeks 9-10)
- *Driving Question*: How can a small business owner predict payroll cash-outs and still make rent on time?
- XLOOKUP, payroll calculations, tax tables, reconciliation
- Public deliverable: Tutorial screencast for young entrepreneurs

**Unit 6: PriceLab Challenge** (Weeks 11-12)
- *Driving Question*: What pricing strategy hits our profit target while staying competitive in the local market?
- Cost-Volume-Profit analysis, Goal Seek, sensitivity analysis
- Public deliverable: Town-hall pricing debate presentation

**Unit 7: Asset & Inventory Tracker** (Weeks 13-14)
- *Driving Question*: Which depreciation and inventory methods best align with our cash-flow and tax strategy?
- SLN/DDB depreciation, FIFO/LIFO inventory, turnover ratios
- Public deliverable: Advisory brief to mock Board of Directors

**Unit 8: Year-1 Startup Model** (Weeks 15-18)
- *Driving Question*: Can we convince a micro-VC that our first-year financial model is robust enough to merit funding?
- Integrated three-statement model, scenario analysis, formula auditing
- Public deliverable: VC-style pitch with live Q&A

### Capstone Project (Semester 2)

A 13-week integrated project where students develop a complete business plan and Excel financial model, culminating in presentations to real venture capital mentors and community entrepreneurs.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/Business-Operations.git
   cd Business-Operations
   ```

2. **Navigate to the Next.js application**
   ```bash
   cd bus-math-nextjs
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

### Build and Deploy

```bash
# Build static export for GitHub Pages
npm run build

# Lint code
npm run lint
```

## 🎯 Educational Philosophy

### Project-Based Learning (PBL)
- **Authentic Problems**: Real business challenges from local community partners
- **Public Products**: Students present to genuine audiences (investors, managers, entrepreneurs)
- **Student Voice & Choice**: Multiple paths through content, role selection, presentation formats

### Backward Design Framework
- **End Goals**: Clear professional competencies and mindsets
- **Assessment First**: Rubrics and success criteria guide instruction
- **Scaffolded Practice**: Progressive skill building with peer support

### CAP Development (Courage, Adaptability, Persistence)
- Weekly reflection journals track mindset growth
- Peer critique builds resilience and communication skills
- Public presentations develop professional confidence

## 🔧 Development

### Component Architecture

Components are organized by educational function:

- **Accounting Components**: Traditional bookkeeping tools (T-accounts, journal entries)
- **Business Simulations**: Interactive scenarios (lemonade stand, startup journey)
- **Charts**: Data visualization using Recharts
- **Drag-Drop Exercises**: Kinesthetic learning activities
- **Financial Reports**: Professional statement generators

### Data Management

- Unit content stored in TypeScript files (`src/data/unit01.ts` - `unit08.ts`)
- Follows strict `UnitData` interface for consistency
- Dynamic routing generates unit pages automatically

### Testing Strategy

Comprehensive testing approach documented in `dev-docs/TESTING-DEBUGGING-GUIDE.md`:

- Component unit tests
- Integration testing for complex interactions
- Accessibility compliance testing
- Cross-browser compatibility verification

## 📚 Educational Standards Alignment

### Ontario Mathematics Curriculum
- **Data Management**: Statistics, probability, regression analysis
- **Functions & Relations**: Mathematical modeling, optimization
- **Financial Mathematics**: Present value, annuities, loan calculations

### Business Studies Integration
- **Accounting Principles**: GAAP compliance, financial statement preparation
- **Entrepreneurship**: Business plan development, market analysis
- **Information Technology**: Advanced spreadsheet modeling, automation

### 21st Century Skills
- **Critical Thinking**: Data analysis, scenario planning, risk assessment
- **Communication**: Professional presentations, written business reports
- **Collaboration**: Team roles, peer review, community partnerships
- **Technology Literacy**: VBA programming, database queries, web tools

## 🤝 Community Partnerships

### Authentic Audience Network
- **Local CPAs**: Provide technical expertise and assessment feedback
- **Entrepreneurs**: Share real business challenges and mentor students
- **Venture Capitalists**: Judge final presentations and provide industry insight
- **School Administration**: Support public presentation events

### Real-World Applications
- Campus café optimization projects
- Local business pricing analysis
- Startup financial model reviews
- Community economic development research

## 📈 Assessment & Evaluation

### Formative Assessment (60%)
- **Milestone Tasks**: Weekly deliverables with peer review
- **Reflection Journals**: CAP development tracking
- **Peer Critique**: Structured feedback using professional rubrics

### Summative Assessment (40%)
- **Unit Deliverables**: Public presentations to authentic audiences
- **Technical Proficiency**: Excel model functionality and accuracy
- **Professional Communication**: Pitch decks, written reports, live demos
- **Capstone Project**: Integrated business plan and financial model

### Industry-Standard Rubrics
- **Model Integrity**: Formula accuracy, linking, automation
- **Analytical Insight**: Data interpretation, strategic reasoning
- **Professional Presentation**: Clarity, timing, audience engagement
- **Continuous Improvement**: Response to feedback, iterative refinement

## 🛡️ Security & Safety

### Data Privacy
- All student data anonymized in public presentations
- FERPA compliance for educational records
- Safe sharing protocols for community partnerships

### Technical Security
- SafeFormulaEvaluator class prevents malicious code execution
- Input validation on all user interactions
- Regular security auditing of interactive components

## 📄 License

This educational content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-sa/4.0/).

The software components are licensed under the MIT License. See the LICENSE file for details.

## 🙏 Acknowledgments

### Educational Partners
- Ontario Ministry of Education curriculum advisors
- Local CPA firms providing technical expertise
- Regional entrepreneurs and business mentors
- Student beta testers and feedback providers

### Technical Contributors
- Next.js and Vercel teams for deployment platform
- shadcn/ui for component design system
- Recharts community for data visualization tools
- React and TypeScript communities for technical foundation
