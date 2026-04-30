# Style Adherence Audit Report

**Date Generated:** 2026-04-05
**Scope:** All pages, templates, and components in bus-math-nextjs/

---

## Audit Standards

Based on project conventions, this audit checks for:
1. **Student Pages**: Six-phase structure with gradient backgrounds, `PhaseHeader`/`PhaseFooter`, and `Badge` styling
2. **Component Imports**: Default exports for interactive components (ComprehensionCheck, ReflectionJournal), named exports for UI (PhaseHeader, Card)
3. **General Styling**: Consistent patterns, proper imports, adherence to design system

---

## Audit Findings

*Audit in progress...*

---

## Audit: Accounting Components

**Files Audited:** 10
**Issues Found:** 15

### Issues:

**PostingPracticeLoop.tsx:**
- Uses native `<input>` elements with inline styling instead of `@/components/ui/input` component (lines 310-328, 331-338, 341-348)
- Inconsistent Card border colors: `border-blue-200` and `border-gray-200` mixed throughout

**TransactionJournal.tsx:**
- Uses native `<select>` elements with inline styling instead of a consistent UI select component (lines 210-219, 449-460, 463-473)
- Inconsistent Card border colors: `border-blue-200`, `border-gray-200`, and default Card borders mixed
- Native select styling: `w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500` differs from other form elements

**DashboardArtifact.tsx:**
- Inconsistent Card border colors: `border-blue-200`, `border-purple-200`, `border-amber-200`, `border-green-200` creates visual fragmentation
- Missing CardHeader on some Card instances (line 69, 116, 168) while others have it

**TableStructureSimulator.tsx:**
- Missing CardHeader on all Card instances
- Inconsistent Card border colors: `border-blue-200`, `border-purple-200`, `border-green-200`
- Missing consistent padding structure in CardContent

**ArtifactBuilder.tsx:**
- Inconsistent Card border colors: `border-blue-200`, `border-purple-200`, `border-green-200`
- All Cards have CardHeader, which is good

**TAccountSimple.tsx:**
- Uses `border-2 border-gray-800` for T-account structure (line 71), which differs from typical table border styles
- Uses `border-r-2 border-gray-800` for internal dividers (line 85, 111, 142)
- Borders are thicker (2px) than standard component borders

**TAccountDetailed.tsx:**
- Uses `border-2 border-gray-800` for T-account structure (line 152), inconsistent with standard component borders
- Uses `border-r-2 border-gray-800` for internal dividers (line 168, 197, 242, 291)
- Thicker 2px borders differ from standard 1px borders used elsewhere
- Custom background colors: `bg-blue-25` and `bg-red-25` are non-standard Tailwind classes (lines 168, 181)

**TAccountsVisualization.tsx:**
- Uses `border-2 border-gray-700` for T-account structure (line 147), inconsistent with other components
- Uses `border-r-2 border-gray-700` for internal dividers (line 161, 177, 198)
- Border color `gray-700` differs from `gray-800` used in other T-account components
- Thicker 2px borders differ from standard 1px borders

**General Issues Across Multiple Components:**
- Inconsistent border widths: Most components use default 1px borders, but T-account components use 2px borders
- Inconsistent border colors: Mix of `gray-700`, `gray-800`, `gray-300`, `gray-200`, `gray-400` across similar elements
- Inconsistent Card border colors: Some use specific color-coded borders (blue, purple, amber, green) while others use default or gray
- Mix of native form elements (input, select) and UI components in different files
- Inconsistent use of CardHeader: Some components omit it entirely

### Compliant Components:

**TrialBalance.tsx**
- Properly uses UI components (Card, Button, Badge)
- Consistent border styling with `border-gray-300` and `border-gray-200`
- Good use of cn() for conditional classes
- Consistent spacing and typography throughout
- Uses standard border widths (1px)

**JournalEntry.tsx**
- Properly uses UI components (Card, Button, Badge)
- Consistent border styling with `border-gray-300` and `border-gray-200`
- Good use of cn() for conditional classes
- Consistent spacing and typography throughout
- Uses standard border widths (1px)


## Audit: Teacher Pages

**Files Audited:** 17
**Issues Found:** 5

### Issues:

1. **teacher/course-overview/pbl-methodology/page.tsx**: Inconsistent Badge component usage. Mixes `variant="secondary"` (line 168, 237) with custom background classes like `bg-blue-100 text-blue-800` (line 556) and `bg-green-100 text-green-800` (line 509, 524). Should use standard Badge variants for consistency.

2. **teacher/course-overview/pbl-methodology/page.tsx**: Inconsistent color scheme for accent boxes. Uses multiple different color themes (red, blue, purple, green, orange, amber) with manual color classes like `bg-red-50 dark:bg-red-950/10 text-red-700`. While visually functional, this manual color selection lacks the intentional gradient strategy used in student pages. Consider standardizing on fewer accent colors.

3. **teacher/course-overview/backward-design/page.tsx**: Similar to PBL methodology page, uses extensive manual color classes for accent boxes (lines 26-82, 103-428, 536-554, 561-579, 642-656, 668-684). Reduces maintainability and increases inconsistency risk.

4. **teacher/classroom-routines/page.tsx**: Uses both `bg-blue-50 p-4 rounded-lg border border-blue-200` (line 46) and `bg-gray-50 p-6 rounded-lg` (line 101) for information boxes. Inconsistent styling for similar content types.

5. **Multiple teacher pages**: Layout inconsistency between pages. Some use `max-w-4xl mx-auto p-8` (pbl-methodology, backward-design), some use `max-w-6xl mx-auto py-8 px-4` (unit pages, lesson pages), and some use `container mx-auto px-4 py-8` (classroom-routines and its subpages). Should standardize on one layout pattern.

### Compliant Pages:
- **teacher/page.tsx**: Consistent Card, Badge, Button usage with standard variants. Good layout pattern.
- **teacher/layout.tsx**: Consistent sidebar layout with standard Button variants and proper spacing.
- **teacher/[unit]/page.tsx**: Good use of standard Card components and consistent layout.
- **teacher/[unit]/[lessonNumber]/page.tsx**: Minimal wrapper, consistent layout pattern.
- **teacher/classroom-routines/direct-instruction-lecture/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/guided-practice/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/independent-practice-application/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/collaborative-team-work/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/peer-review-feedback/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/presentations-demonstrations/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/reflection-self-assessment/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/assessment-checkpoints/page.tsx**: Consistent with other classroom routine subpages.
- **teacher/classroom-routines/problem-framing-challenge-introduction/page.tsx**: Consistent with other classroom routine subpages.

### Overall Assessment:
Teacher pages generally follow consistent patterns for Card, Button, and layout components. The main issues are:
1. Manual color class usage in course overview pages (pbl-methodology, backward-design) creates maintainability concerns
2. Inconsistent Badge variant usage (some use standard variants, some use custom background classes)
3. Layout container width and padding variations across different page types

**Note**: Teacher pages correctly do NOT use the student six-phase structure with gradient backgrounds, PhaseHeader/PhaseFooter components. The visual styling is appropriate for a teacher dashboard/resource interface, but could benefit from standardizing color accent usage and layout containers.

---

## Audit: Remaining Pages

**Files Audited:** 31
**Issues Found:** 18

### Issues:

**Backmatter Pages (2 issues):**
- `/backmatter/glossary/page.tsx`: Missing gradient background, missing Badge component, inconsistent with project visual patterns
- `/backmatter/index/page.tsx`: Missing gradient background, missing Badge component, inconsistent with project visual patterns

**Debug Pages (15 issues):**
- `/debug/page.tsx`: Missing gradient background, missing Badge component, inconsistent Card styling
- `/debug/financial-calculations/page.tsx`: Uses different gradient (green-to-blue), inconsistent Card header styling with custom gradients
- `/debug/exercises/page.tsx`: Uses different gradient (purple-to-blue), missing standard header structure
- `/debug/drag-drop-exercises/page.tsx`: Uses different gradient (purple-to-indigo), inconsistent Card styling
- `/debug/business-simulations/page.tsx`: Uses different gradient (slate-to-slate), missing Badge components
- `/debug/components-report/page.tsx`: Missing gradient background, missing Badge component
- `/debug/accounting/page.tsx`: Uses different gradient (green-to-emerald), inconsistent Card header styling
- `/debug/spreadsheet/page.tsx`: Missing gradient background, missing Badge component
- `/debug/charts/page.tsx`: Uses different gradient (blue-to-indigo), inconsistent Card header styling
- `/debug/financial-reports/page.tsx`: Uses different gradient (green-to-emerald), inconsistent Card header styling

**Root Page (1 issue):**
- `/app/page.tsx`: Inconsistent Card styling patterns, uses custom card classes (card-ledger, card-statement, excel-header) not seen elsewhere, inconsistent Badge usage

### Compliant Pages:
- `/capstone/page.tsx`
- `/capstone/guidelines/page.tsx`
- `/capstone/rubrics/page.tsx`
- `/capstone/concept-proposal/page.tsx`
- `/capstone/revenue-streams/page.tsx`
- `/capstone/startup-budget/page.tsx`
- `/capstone/funding-strategy/page.tsx`
- `/capstone/pricing-forecast/page.tsx`
- `/capstone/payroll-plan/page.tsx`
- `/capstone/inventory-planning/page.tsx`
- `/capstone/depreciation-assets/page.tsx`
- `/capstone/integrated-model/page.tsx`
- `/capstone/sensitivity-risk/page.tsx`
- `/capstone/pitch-deck/page.tsx`
- `/capstone/demo-day-reflection/page.tsx`
- `/capstone/market-research/page.tsx`
- `/frontmatter/acknowledgments/page.tsx` (uses emerald gradient consistently)
- `/frontmatter/preface/page.tsx`

### Summary:
- **18 pages** have visual styling inconsistencies
- **13 pages** are fully compliant with visual standards
- **Major issues**: Missing gradient backgrounds, missing Badge components, inconsistent Card styling, custom Card classes not following patterns
- **Recommendation**: Standardize all non-capstone pages to use consistent gradient backgrounds, Badge components, and Card styling patterns

## Audit: Business Simulations

**Files Audited:** 17
**Issues Found:** 2

### Issues:
- **RestaurantStaffingSimulator.tsx**: Uses a single large Card wrapper instead of the standard multi-Card layout pattern used by other simulations. No gradient header Card, no 4-column metric grid, no instruction panel with show/hide functionality.
- **CrossSheetLinkSimulator.tsx**: Uses simple Card with custom internal layout instead of the established gradient header + metric grid + instruction panel pattern. Missing standard visual hierarchy.

### Compliant Components:
- **InventoryManager.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, notification toasts, and consistent color scheme
- **LemonadeStand.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, notification toasts, and consistent color scheme
- **PitchPresentationBuilder.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, and consistent color scheme
- **ErrorCheckingSystem.tsx**: Uses gradient header, instruction panel with show/hide, Tabs component, and consistent color scheme
- **CashFlowChallenge.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, notification toasts, and consistent color scheme
- **DepreciationMethodComparisonSimulator.tsx**: Uses consistent Card layouts, Buttons, Input components, and color scheme
- **AssetRegisterSimulator.tsx**: Uses consistent Card layouts, Buttons, Input components, and color scheme
- **BudgetBalancer.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, notification toasts, and consistent color scheme
- **StartupJourney.tsx**: Uses gradient header Card, 4-column metric grid, instruction panel with show/hide, notification toasts, and consistent color scheme
- **ChartLinkingSimulator.tsx**: Uses consistent Card layouts, Buttons, Badge components, and color scheme
- **ScenarioSwitchShowTell.tsx**: Uses consistent Card layouts, Tabs component, Badge, and color scheme
- **DynamicMethodSelector.tsx**: Uses consistent Card layouts, Buttons, Badge, Input components, and color scheme
- **MethodComparisonSimulator.tsx**: Uses consistent Card layouts, Buttons, Badge, and color scheme
- **InventoryAlgorithmShowTell.tsx**: Uses consistent Card layouts, Tabs component, Badge, and color scheme
- **PriceLabCommandCenter.tsx**: Uses gradient header Card, 5-column metric grid, instruction panel with show/hide, and consistent color scheme

### Visual Pattern Analysis:

**Compliant Pattern (15/17 components):**
- Gradient header Card with title, description, and help button
- 4-5 column metric grid with icon, label, and value
- Instruction panel with show/hide toggle
- Consistent use of Card, Button, Badge, Progress components
- Fixed-position notification toasts with colored borders
- Semantic color scheme: blue (info), green (success), purple (primary), yellow (warning), red (error)

**Non-Compliant Components (2/17):**
- **RestaurantStaffingSimulator**: Completely different visual architecture - single wrapper, no gradient headers, no metric grid, no instruction panel
- **CrossSheetLinkSimulator**: Simplified layout without the established multi-section pattern

### Overall Consistency: 88% compliant (15/17 components follow standard patterns)

---

## Audit: Student Components

**Files Audited:** 17
**Issues Found:** 3

### Issues:

1. **StudentLessonOverview.tsx**: Missing PhaseHeader and PhaseFooter components. As a lesson overview page, it should include these components for consistency with other lesson pages and proper navigation structure. Currently has no PhaseHeader or PhaseFooter, only custom breadcrumb navigation and a footer section with basic buttons.

2. **StudentUnitOverview.tsx**: Missing PhaseHeader component. As a unit overview page that leads to lessons, it should include a PhaseHeader component for consistency with the student page design system. Currently has a Hero Section with Badge but no PhaseHeader component.

3. **Gradient Background Inconsistency**: There's an inconsistency in gradient background usage across different student page types:
   - Lesson phase pages (e.g., Lesson01Phase1.tsx) use: `bg-gradient-to-br from-background via-background to-muted/20`
   - Practice hub pages (e.g., PracticeHubHome.tsx, ProgressDashboard.tsx, SpeedRoundGame.tsx, MatchingGame.tsx, FlashcardPlayer.tsx, ExportPage.tsx) use: `bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900`
   - Overview pages (StudentLessonOverview.tsx, StudentUnitOverview.tsx) use: No gradient background (plain white/default background)

   This creates visual inconsistency. Lesson phase pages should have consistent gradient backgrounds with muted tones, while practice hub pages have their own dark theme. The overview pages should also have a gradient background for consistency with lesson phase pages.

### Compliant Components:

The following components are fully compliant with visual styling standards:

- **PhaseFooter.tsx**: Properly styled with gradient button classes (gradient-financial, gradient-success), Card with custom classes (card-ledger, excel-header), standard Badge usage, and consistent navigation styling.

- **Lesson01Phase1.tsx**: Correctly uses PhaseHeader and PhaseFooter components, has appropriate gradient background (`bg-gradient-to-br from-background via-background to-muted/20`), uses Card components with color-coded borders for different sections (blue, red), and maintains consistent visual patterns.

- **PhaseHeader.tsx**: Well-designed component with phase-specific color coding, proper Badge usage with variants, consistent breadcrumb navigation, and appropriate Progress component styling.

- **StudyDueBadge.tsx**: Simple but compliant Badge component wrapper, correctly using `variant="destructive"` and `variant="outline"` for different states.

- **ProgressDashboard.tsx**: Consistent with practice hub design system, uses gradient background appropriate for the practice hub context, proper Card and Badge usage, and Button variants are appropriate for the page type.

- **SpeedRoundGame.tsx**: Follows practice hub visual patterns with appropriate dark gradient background, consistent Badge usage, and proper Button styling for the game context.

- **StudentUnitOverview.tsx**: (Partial) Uses Card components with color-coded borders (blue, green, orange, purple, teal), proper Badge and Button usage. Missing PhaseHeader component is the only issue.

- **PracticeHubHome.tsx**: Consistent practice hub design with appropriate dark gradient background, standard Card and Badge usage, and proper Button variants for the hub context.

- **MatchingGame.tsx**: Follows practice hub visual patterns with dark gradient background, consistent Badge styling, and appropriate button colors for the game interface.

- **ExportPage.tsx**: Consistent with practice hub design system, uses appropriate gradient background, proper Card, Badge, and Button usage throughout.

- **FlashcardPlayer.tsx**: Follows practice hub visual patterns with dark gradient background, consistent Badge usage, and proper Button styling for the flashcard interface.

- **HubUnitCard.tsx**: Simple Card component with proper Link wrapper, consistent with practice hub design patterns.

- **AccessibilityToolbar.tsx**: Utility component with appropriate styling, uses Card and Button components correctly for its purpose.

- **ResourceBasePathFixer.tsx**: Utility component with no visual elements (returns null), which is appropriate for its function.

- **ReadingLevelAdjuster.tsx**: Utility text component with no visual styling requirements, appropriate for its function.

- **MultilingualSupport.tsx**: Utility text component with no visual styling requirements, appropriate for its function.

---

## Summary of Visual Pattern Consistency

### Lesson Phase Pages (Expected Pattern):
- **Container**: `min-h-screen bg-gradient-to-br from-background via-background to-muted/20`
- **Components**: PhaseHeader, PhaseFooter
- **Cards**: Color-coded borders with appropriate background tints
- **Badges**: Consistent use of `variant="outline"` and `variant="secondary"`
- **Buttons**: Gradient buttons for primary actions, outline for secondary

### Practice Hub Pages (Expected Pattern):
- **Container**: `min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900`
- **Components**: No PhaseHeader/PhaseFooter (hub has its own navigation)
- **Cards**: Standard styling with hover effects
- **Badges**: Consistent color coding for status indicators
- **Buttons**: Appropriate variants for the dark theme

### Overview Pages (Should Follow):
- **Container**: Should use gradient background similar to lesson phase pages
- **Components**: Should include PhaseHeader for consistency
- **Cards**: Current styling is good (color-coded borders)
- **Badges**: Current usage is good
- **Buttons**: Current usage is good

---

## Recommendations

1. **Add PhaseHeader to StudentLessonOverview.tsx**: Include a PhaseHeader component to maintain consistency with other student pages.

2. **Add PhaseHeader to StudentUnitOverview.tsx**: Include a PhaseHeader component for the unit overview page to follow the student page design system.

3. **Add Gradient Background to Overview Pages**: Apply `bg-gradient-to-br from-background via-background to-muted/20` to StudentLessonOverview.tsx and StudentUnitOverview.tsx for visual consistency with lesson phase pages.

4. **Document Visual Patterns**: Create clear documentation in AGENTS.md or a style guide specifying:
   - Which page types use which gradient background
   - Which page types require PhaseHeader/PhaseFooter
   - Color coding patterns for different card types

---

**Next Audit Suggestion**: Review lesson phase pages (Lesson01Phase1.tsx, etc.) to ensure all follow the six-phase structure with proper PhaseHeader/PhaseFooter and gradient backgrounds.

---

## Audit: Charts and Financial Reports

**Files Audited:** 13
**Issues Found:** 14

### Issues:

**Chart Components:**

- **ScatterChart.tsx:48-49**: Title uses `text-lg` while LineChart and BarChart (showCard) use `text-xl` in CardTitle - inconsistent title sizing
- **ScatterChart.tsx:98**: YAxis tick formatter uses hardcoded `$` prefix and `toLocaleString()` while other charts use `formatCurrency` function or custom formatters
- **LineChart.tsx:88**: XAxis shows axis lines (`axisLine={true}` by default) while ScatterChart explicitly disables them (`axisLine={false}`)
- **BarChart.tsx:254**: CardTitle uses `text-xl` which is inconsistent with ScatterChart's `text-lg` for non-Card-wrapped charts
- **BarChart.tsx:172**: Grid uses `stroke-muted` class but has no `vertical={false}` prop while LineChart explicitly sets it
- **PieChart.tsx:209**: CardTitle uses `text-xl` consistent with BarChart but inconsistent with ScatterChart's `text-lg`
- **DoughnutChart.tsx:212**: CardTitle uses `text-xl` consistent with other Card-wrapped charts
- **BreakEvenChart.tsx:324**: CardTitle uses `text-xl` consistent with other Card-wrapped charts
- **FinancialDashboard.tsx:297**: Uses custom gradient background `bg-gradient-to-r from-blue-50 to-indigo-50` and custom border colors `border-blue-200` instead of standard Card styling
- **FinancialDashboard.tsx:301**: CardTitle uses `text-2xl` and custom color `text-blue-800` instead of standard `text-xl text-gray-900`
- **FinancialDashboard.tsx:369, 420, 453, 496**: CardTitle uses `text-lg` which is inconsistent with other Card-wrapped charts using `text-xl`
- **FinancialDashboard.tsx:313, 324**: Button uses custom border `border-blue-300` and text `text-blue-700` instead of standard Button variants
- **FinancialDashboard.tsx:378-380, 462-464**: XAxis shows axis lines (`axisLine={true}`) and tick lines (`tickLine={true}`) while other chart components disable them
- **FinancialDashboard.tsx:393-410**: Line elements use custom stroke widths (`strokeWidth={3}`) and dot sizes (`r: 4`, `r: 6`) while LineChart component uses `strokeWidth={2}` and `r: 4, 6`

**Financial Report Components:**

- **IncomeStatementSimple.tsx:102**: CardTitle uses `text-2xl` while BalanceSheetSimple uses `text-2xl` (consistent) but standard pattern would be `text-xl`
- **IncomeStatementSimple.tsx:155**: Summary stats use 3-column grid while BalanceSheetSimple uses 4-column grid for ratios
- **IncomeStatementDetailed.tsx:184**: CardTitle uses `text-2xl` consistent with IncomeStatementSimple
- **IncomeStatementDetailed.tsx:309**: Key ratios use 4-column grid while IncomeStatementSimple uses 3-column grid for margin stats
- **CashFlowStatementDetailed.tsx:237**: CardTitle uses `text-2xl` consistent with other detailed financial reports
- **CashFlowStatementDetailed.tsx:456**: Analysis dashboard uses 4-column grid while CashFlowStatementSimple uses 3-column grid
- **BalanceSheetDetailed.tsx:322**: CardTitle uses `text-2xl` consistent with other detailed financial reports
- **BalanceSheetDetailed.tsx:625**: Ratios use 6-column grid while BalanceSheetSimple uses 4-column grid - inconsistent column counts
- **BalanceSheetSimple.tsx:165**: CardTitle uses `text-2xl` consistent with other financial reports
- **CashFlowStatementSimple.tsx:144**: CardTitle uses `text-2xl` consistent with other financial reports

### Positive Patterns (Compliant Components):

**Chart Components:**

- **ScatterChart.tsx**: Properly uses ChartContainer, consistent axis styling (tickLine={false}, axisLine={false}, className="text-xs", tickMargin={8})
- **LineChart.tsx**: Consistent axis styling, proper use of ChartContainer and ChartTooltip, proper color variable usage with `var(--color-{key})`
- **BarChart.tsx**: Good Card wrapping, consistent use of ChartContainer, proper gradient styling and rounding
- **PieChart.tsx**: Good use of ChartContainer, consistent legend positioning, proper Cell styling with stroke
- **DoughnutChart.tsx**: Good use of ChartContainer, consistent with PieChart styling, proper Cell styling
- **BreakEvenChart.tsx**: Good Card wrapping, consistent use of ChartContainer, proper interactive controls
- **FinancialDashboard.tsx**: Good use of responsive grid layouts, proper KPI card styling, consistent color coding (blue/purple/green/orange)

**Financial Report Components:**

- **IncomeStatementSimple.tsx**: Good use of Badge for profitability indicator, consistent LineItem component, proper color coding (green/blue/purple for margins)
- **IncomeStatementDetailed.tsx**: Good use of Badge, consistent LineItem component with indent support, proper section header styling (h3 text-lg font-semibold)
- **CashFlowStatementDetailed.tsx**: Good use of Badge, consistent LineItem component, proper activity color coding (blue/purple/orange), good section organization
- **BalanceSheetDetailed.tsx**: Good use of Badge, consistent LineItem component, proper color-coded sections (blue/red/green for assets/liabilities/equity), good two-column layout
- **BalanceSheetSimple.tsx**: Good use of Badge, consistent LineItem component, proper color-coded sections, good two-column layout
- **CashFlowStatementSimple.tsx**: Good use of Badge, consistent LineItem component, proper activity color coding, good activity section organization

### Recommendations:

1. **Standardize Chart Title Sizing**: Decide on consistent title sizing - either `text-lg` for non-Card charts and `text-xl` for Card-wrapped charts, or unify to one size
2. **Standardize Chart Axis Styling**: Decide on consistent axis line visibility - either always disable (tickLine={false}, axisLine={false}) or always show
3. **Standardize Chart Grid Styling**: Decide on consistent grid styling - use `vertical={false}` consistently or remove it
4. **Standardize Financial Report Column Grids**: Decide on consistent column counts - 3, 4, or 6 columns for stats/ratios sections
5. **Standardize Card Title Sizing**: Decide whether financial report CardTitles should use `text-xl` or `text-2xl` consistently
6. **Consider Extracting Common Patterns**: Consider creating shared components or constants for:
   - Chart axis styling
   - LineItem component (already consistent)
   - Badge color schemes (mostly consistent)
   - Section header styling (mostly consistent)
   - KPI/stats grid layouts

### Summary:

The charts and financial reports components show **good overall consistency** in many areas:
- Card wrapping is consistent where appropriate
- LineItem component is well-designed and consistently used
- Color coding follows logical patterns (blue/red/green for financial data)
- Badge usage is consistent for status indicators
- ChartContainer usage is proper and consistent

However, there are **inconsistencies** in:
- Title sizing across different chart types
- Axis line visibility settings
- Grid styling variations
- Column grid counts in summary/ratios sections
- Some custom styling in FinancialDashboard that deviates from standard patterns

Overall: **12 compliant components** (good patterns), **14 minor issues** (mostly inconsistencies in sizing and layout choices).

---

## Audit: Unit Components

**Files Audited:** 10
**Issues Found:** 21

### Issues:

**UnitVocabulary.tsx:**
- Does NOT use Card component - uses custom div with `border bg-card shadow-sm hover:bg-accent` (line 53)
- Section header uses `text-lg font-semibold` instead of standard `text-2xl font-semibold` (line 36)
- Uses custom background `bg-muted/30` for study box (line 77)
- Missing Card structure entirely, inconsistent with other unit components

**UnitIntroduction.tsx:**
- Uses custom left border styling: `border-l-4 border-l-blue-500`, `border-l-green-500`, `border-l-purple-500` (lines 37, 75, 115)
- Uses custom CardTitle text colors: `text-blue-700`, `text-green-700`, `text-purple-700` (lines 39, 77, 117)
- Uses custom backgrounds: `bg-blue-50`, `bg-yellow-50` (lines 47, 79)
- Section header uses `text-4xl font-bold` for main title (line 27), inconsistent with other components
- Uses Badge with custom styling instead of standard variants (line 24)
- Custom Card styling with colored left borders not seen elsewhere in the project
- Mixed Badge variants (outline, secondary) with custom background classes

**LearningSequence.tsx:**
- Uses custom border color `border-purple-200` on Card (line 22)
- Uses `bg-purple-100 text-purple-800` custom Badge styling instead of standard variants (line 25)
- Uses `bg-yellow-50 text-yellow-800` custom Badge styling for milestone badges (line 42)
- Section header uses `text-2xl font-semibold` (consistent)
- Uses custom list border styling: `border-l-2 border-purple-200` (line 35)

**Prerequisites.tsx:**
- Uses custom text colors: `text-blue-600`, `text-green-600`, `text-yellow-700`, `text-blue-700` (lines 41, 75, 109, 113, 123, 127, 137, 141)
- Section header uses `text-2xl font-semibold` (consistent)
- Uses default Card styling without custom border colors (inconsistent with other unit components)
- Mixed icon colors (blue, green) not following a consistent color scheme

**StudentChoices.tsx:**
- Uses custom border color `border-indigo-200` on Cards (lines 27, 52, 77)
- Uses `bg-indigo-100 text-indigo-800` custom Badge styling (line 30)
- Section header uses `text-2xl font-semibold` with `text-indigo-600` icon (lines 20-22)
- Uses indigo color scheme, different from other unit components
- Inconsistent Badge spacing: some use `mr-2 mb-2` (line 42), others don't (line 66)

**AssessmentOverview.tsx:**
- Uses custom border colors: `border-green-200`, `border-blue-200` (lines 28, 69)
- Uses custom text colors in CardTitle: `text-green-700`, `text-yellow-500` (lines 31, 109, 113, 117)
- Uses custom background `bg-blue-50` for context box (line 43)
- Section header uses `text-2xl font-semibold` with `text-green-600` icon (lines 22-24)
- Inconsistent Badge usage: some use variant="outline" (line 73), others use variant="secondary" (line 105)

**DrivingQuestion.tsx:**
- Uses custom border and gradient: `border-l-4 border-l-primary bg-gradient-to-r from-blue-50/50 to-transparent` (line 20)
- Uses text-primary for quote styling (line 22)
- Section header uses `text-2xl font-semibold` with `text-blue-600` icon (lines 15-17)
- Uses custom background `bg-muted/50` for scenario box (line 31)
- Missing CardHeader, uses only CardContent

**UnitOverview.tsx:**
- Uses custom icon colors: `text-blue-600`, `text-orange-600`, `text-green-600` (lines 21, 40, 59)
- Uses custom bullet point colors matching icons: `text-blue-600`, `text-orange-600`, `text-green-600` (lines 29, 48, 67)
- Section header uses `text-2xl font-semibold` without icon (inconsistent with other unit components)
- Default Card styling without custom border colors (inconsistent with other unit components)

**UnitHeader.tsx:**
- Uses custom Badge colors: `bg-green-100 text-green-800`, `bg-yellow-100 text-yellow-800`, `bg-red-100 text-red-800` (lines 13-15)
- Uses emoji icons in Badge instead of Lucide icons (line 36)
- Uses default Badge variant with custom className (line 24)
- No Card wrapper, uses header directly (inconsistent with other unit component patterns)

**UnitTemplate.tsx:**
- No issues - this is a layout wrapper component
- Properly composes other unit components with consistent spacing (`space-y-12`)

### General Issues Across Unit Components:

1. **Inconsistent Card Border Styling:**
   - Some use colored left borders: `border-l-4 border-l-blue-500`, `border-l-green-500`, `border-l-purple-500` (UnitIntroduction)
   - Some use full border colors: `border-purple-200`, `border-indigo-200`, `border-green-200`, `border-blue-200` (LearningSequence, StudentChoices, AssessmentOverview)
   - Some use default borders: Prerequisites, UnitOverview
   - One uses gradient: DrivingQuestion

2. **Inconsistent Section Headers:**
   - Most use `text-2xl font-semibold` with icons
   - UnitVocabulary uses `text-lg font-semibold` (smaller)
   - UnitIntroduction uses `text-4xl font-bold` for main title (larger, bold)
   - UnitOverview uses `text-2xl font-semibold` without icon
   - UnitHeader has no section header pattern (is a header component)

3. **Inconsistent Badge Usage:**
   - Many use custom background classes: `bg-purple-100 text-purple-800`, `bg-indigo-100 text-indigo-800`, `bg-yellow-50 text-yellow-800`
   - Mix of variants: `variant="outline"`, `variant="secondary"`, and default
   - UnitHeader uses emoji icons in badges instead of standard pattern

4. **Inconsistent Color Schemes:**
   - LearningSequence: Purple theme
   - UnitVocabulary: No clear theme, uses text-primary
   - UnitIntroduction: Blue, green, purple mixed theme
   - Prerequisites: Blue, green, yellow mixed theme
   - StudentChoices: Indigo theme
   - AssessmentOverview: Green, blue mixed theme
   - DrivingQuestion: Blue theme
   - UnitOverview: Blue, orange, green mixed theme
   - UnitHeader: Green, yellow, red mixed theme

5. **Inconsistent Custom Backgrounds:**
   - `bg-blue-50`, `bg-yellow-50`, `bg-muted/50`, `bg-muted/30`, `bg-gradient-to-r from-blue-50/50 to-transparent`
   - No standardized approach to background highlighting

6. **Missing Card Structure:**
   - UnitVocabulary.tsx does not use Card component at all
   - DrivingQuestion.tsx uses Card without CardHeader
   - UnitHeader.tsx does not use Card wrapper

### Compliant Components:
- **UnitTemplate.tsx** (layout wrapper - no visual issues)

### Overall Assessment:
Unit components have significant visual styling inconsistencies:
- **1 of 10 components** is compliant (UnitTemplate is just a layout wrapper)
- **21 specific issues** found across 9 components
- **Major issues**: Inconsistent Card border styling, inconsistent Badge usage, inconsistent color schemes, missing Card structure in some components, inconsistent section header styling
- **Recommendation**: 
  1. Standardize on one Card border styling approach (recommend default borders or consistent colored borders)
  2. Standardize Badge usage to use only standard variants (outline, secondary, default)
  3. Establish a consistent color scheme for unit components or use semantic color tokens
  4. Ensure all components use proper Card structure (CardHeader, CardContent)
  5. Standardize section header styling to `text-2xl font-semibold` with optional icon
  6. Add Card wrapper to UnitVocabulary.tsx
  7. Add CardHeader to DrivingQuestion.tsx

---

## Audit: Student Lesson Phase Pages

**Files Audited:** 364
**Issues Found:** 2 categories, 141 total affected files

### Issues:

**1. Missing Gradient Backgrounds (46 files):**
46 phase pages use `bg-background` instead of gradient backgrounds, creating visual inconsistency with the project's six-phase structure requirement.

**Affected files:**
- `/unit01/lesson01/phase-1/page.tsx` through `phase-6/page.tsx` (6 files)
- `/unit01/lesson09/phase-1/page.tsx`
- `/unit01/lesson10/phase-1/page.tsx`
- `/unit02/lesson01/phase-1/page.tsx`, `/lesson10/phase-1/page.tsx`
- `/unit03/lesson01/phase-1/page.tsx`, `/lesson01/phase-5/page.tsx`, `/lesson02/phases-1/2/4/5/6/page.tsx`, `/lesson08/phase-1/page.tsx`, `/lesson09/phase-1/page.tsx`, `/lesson10/phase-1/page.tsx`
- `/unit04/lesson01/phase-1/2/3/4/5/6/page.tsx` (6 files), `/lesson03/phase-1/2/3/4/5/6/page.tsx` (6 files)
- `/unit05/lesson01/phase-1/2/3/4/5/6/page.tsx` (6 files), `/lesson03/phase-1/2/3/4/5/6/page.tsx` (6 files), `/lesson09/phase-1/page.tsx`, `/lesson10/phase-1/page.tsx`
- `/unit07/lesson08/phase-1/page.tsx`

**Pattern observed:** Missing gradients are concentrated in:
- All phases of unit01/lesson01 (6 files)
- All phases of unit04/lesson01 and unit04/lesson03 (12 files)
- All phases of unit05/lesson01 and unit05/lesson03 (12 files)
- Various phase-1 pages across multiple lessons

**2. Missing Badge Component Usage (95 files):**
95 phase pages do not import or use the Badge component, instead using custom div styling or no visual badges at all.

**Pattern observed:** Missing Badge usage is widespread across all units, particularly in:
- unit01/lesson02 (all 6 phases)
- unit05/lesson01 and unit05/lesson03 (all 6 phases each)
- unit08/lesson03 and unit08/lesson04 (multiple phases)
- Many other scattered phase pages

### Compliant Phase Pages:
- **318 files** have proper gradient backgrounds
- **269 files** use Badge components correctly
- **358 files** properly use PhaseHeader and PhaseFooter components (6 files use wrapper component Lesson01Phase1 which includes these internally)

### Analysis of PhaseHeader/PhaseFooter Usage:
**6 files** do not have explicit PhaseHeader/PhaseFooter imports, but these all use the `Lesson01Phase1` wrapper component which includes PhaseHeader and PhaseFooter internally:
- `/unit01/lesson01/phase-1/page.tsx`
- `/unit02/lesson01/phase-1/page.tsx`
- `/unit03/lesson01/phase-1/page.tsx`
- `/unit04/lesson01/phase-1/page.tsx`
- `/unit04/lesson09/phase-1/page.tsx`
- `/unit04/lesson10/phase-1/page.tsx`

This is **NOT an issue** - the wrapper component provides the required PhaseHeader and PhaseFooter functionality.

### Overall Assessment:
Student lesson phase pages have good adherence to the six-phase structure with PhaseHeader and PhaseFooter components (98.4% compliant), but there are two visual styling inconsistencies:

1. **Gradient Backgrounds:** 12.6% of phase pages (46 files) are missing gradient backgrounds, using `bg-background` instead
2. **Badge Components:** 26.1% of phase pages (95 files) do not use the Badge component for visual labeling

**Recommendations:**
1. Add appropriate gradient backgrounds to all 46 phase pages currently using `bg-background`. Suggested gradient pattern: `bg-gradient-to-br from-slate-50 to-[unit-color]-50` where unit-color matches the unit theme (blue, purple, green, orange, red, etc.)
2. Replace custom div badges with the standard Badge component in all 95 affected files
3. Consider creating a shared wrapper component or layout pattern to ensure consistency across all phase pages
4. Establish unit-level color themes to ensure gradient consistency within each unit

### Compliance Rate by Category:
- **Six-phase structure:** 100% (all 364 files have phase-1 through phase-6 directories)
- **PhaseHeader usage:** 98.4% (358/364 files, with 6 using wrapper component)
- **PhaseFooter usage:** 98.4% (358/364 files, with 6 using wrapper component)
- **Gradient backgrounds:** 87.4% (318/364 files)
- **Badge component usage:** 73.9% (269/364 files)

**Overall visual styling compliance:** Approximately 80-85% when considering all factors
