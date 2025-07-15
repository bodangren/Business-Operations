# Print-Friendly Design Specifications
**Math for Business Operations: Complete Print Version Design Standards**

*Version 1.0 - Comprehensive specifications for print-optimized content transformation*

---

## Table of Contents

1. [Print System Overview](#print-system-overview)
2. [Layout and Typography Specifications](#layout-and-typography-specifications)
3. [Interactive Component Print Transformations](#interactive-component-print-transformations)
4. [Print-Specific Content Additions](#print-specific-content-additions)
5. [CSS Print Media Queries](#css-print-media-queries)
6. [Print Generation Workflow](#print-generation-workflow)

---

## Print System Overview

### Design Philosophy
The print version maintains educational effectiveness while optimizing for physical textbook use:

- **Content Preservation**: All educational content accessible in static format
- **Professional Appearance**: Clean, textbook-quality layout and typography
- **Practical Usability**: Space for notes, clear structure, logical page breaks
- **Cost Efficiency**: Black and white printing with minimal ink usage

### Print Version Features
- **One-click generation** from any interactive page
- **Automatic component conversion** to static equivalents
- **Answer keys and solutions** integrated throughout
- **Enhanced navigation** with page references and cross-links
- **PDF-optimized layout** with proper page breaks and margins

### Target Output Formats
- **8.5" × 11" paper** (US Letter) - Primary format
- **A4 paper** (International) - Secondary format
- **PDF generation** with bookmarks and navigation
- **Black and white optimization** for cost-effective printing

---

## Layout and Typography Specifications

### Page Layout Standards

#### Page Dimensions and Margins
```css
@page {
    size: letter; /* 8.5" × 11" */
    margin: 1.25in 1in 1in 1.25in; /* top right bottom left */
}

@page :left {
    margin-left: 1.25in;
    margin-right: 1in;
}

@page :right {
    margin-left: 1in;
    margin-right: 1.25in;
}
```

#### Header and Footer Specifications
```css
@page {
    @top-left {
        content: "Math for Business Operations";
        font-size: 9pt;
        font-style: italic;
    }
    
    @top-right {
        content: "Unit " attr(data-unit-number) ": " attr(data-unit-title);
        font-size: 9pt;
    }
    
    @bottom-center {
        content: counter(page);
        font-size: 10pt;
        font-weight: bold;
    }
    
    @bottom-right {
        content: attr(data-section-title);
        font-size: 9pt;
        font-style: italic;
    }
}
```

### Typography Hierarchy

#### Font Specifications
```css
/* Primary font stack for readability */
body {
    font-family: "Times New Roman", Times, serif;
    font-size: 12pt;
    line-height: 1.6;
    color: #000000;
}

/* Heading hierarchy */
h1 {
    font-size: 18pt;
    font-weight: bold;
    margin-bottom: 12pt;
    page-break-after: avoid;
}

h2 {
    font-size: 16pt;
    font-weight: bold;
    margin-top: 18pt;
    margin-bottom: 10pt;
    page-break-after: avoid;
}

h3 {
    font-size: 14pt;
    font-weight: bold;
    margin-top: 14pt;
    margin-bottom: 8pt;
    page-break-after: avoid;
}

h4 {
    font-size: 12pt;
    font-weight: bold;
    margin-top: 12pt;
    margin-bottom: 6pt;
}

/* Code and formulas */
code, .formula {
    font-family: "Courier New", Courier, monospace;
    font-size: 11pt;
    background-color: #f5f5f5;
    padding: 2pt 4pt;
    border: 1pt solid #cccccc;
}
```

#### Spacing and Layout
```css
/* Paragraph spacing */
p {
    margin-bottom: 10pt;
    text-align: justify;
    orphans: 3;
    widows: 3;
}

/* List formatting */
ul, ol {
    margin-bottom: 12pt;
    padding-left: 24pt;
}

li {
    margin-bottom: 4pt;
    page-break-inside: avoid;
}

/* Table formatting */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 12pt 0;
    page-break-inside: avoid;
}

th, td {
    border: 1pt solid #333333;
    padding: 6pt 8pt;
    text-align: left;
    vertical-align: top;
}

th {
    background-color: #e6e6e6;
    font-weight: bold;
}
```

### Page Break Management

#### Strategic Page Breaks
```css
/* Prevent breaks in critical areas */
.section-header,
.concept-introduction,
.formula-container,
.business-context,
.callout {
    page-break-inside: avoid;
}

/* Force breaks before major sections */
.major-section {
    page-break-before: always;
}

/* Keep related content together */
.step-container,
.example-block,
.exercise-set {
    page-break-inside: avoid;
    margin-bottom: 18pt;
}

/* Manage widow/orphan control */
h1, h2, h3, h4 {
    page-break-after: avoid;
}

.keep-together {
    page-break-inside: avoid;
}
```

---

## Interactive Component Print Transformations

### Spreadsheet Simulator → Static Tables

#### Transformation Process
1. **Extract current data** from interactive spreadsheet
2. **Format as professional table** with grid lines
3. **Add formula annotations** showing calculation logic
4. **Include sample data** for educational context

#### Implementation Example
```html
<!-- Interactive Version -->
<div class="spreadsheet-simulator-container" data-preset="ledger">
    <!-- Dynamic spreadsheet content -->
</div>

<!-- Print Version -->
<div class="print-spreadsheet-table">
    <h4>📊 TechStart Solutions - General Ledger</h4>
    
    <table class="ledger-table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Account</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>01/15/2024</td>
                <td>Website design revenue</td>
                <td>Revenue - Web Design</td>
                <td>—</td>
                <td>$2,200.00</td>
                <td>$2,200.00</td>
            </tr>
            <!-- Additional sample entries -->
        </tbody>
    </table>
    
    <div class="formula-notes">
        <h5>📝 Formula Notes:</h5>
        <ul>
            <li><strong>Balance Column:</strong> =SUM(D2:D2)-SUM(E2:E2)+F1</li>
            <li><strong>Trial Balance Check:</strong> =ABS(SUM(Debits)-SUM(Credits))</li>
        </ul>
    </div>
</div>
```

#### CSS Styling for Print Tables
```css
.print-spreadsheet-table {
    margin: 18pt 0;
    page-break-inside: avoid;
}

.ledger-table {
    font-size: 10pt;
    width: 100%;
    border: 2pt solid #000;
}

.ledger-table th {
    background-color: #e6e6e6;
    font-weight: bold;
    text-align: center;
    padding: 8pt 4pt;
}

.ledger-table td {
    padding: 6pt 4pt;
    border-right: 1pt solid #666;
}

.formula-notes {
    margin-top: 12pt;
    padding: 8pt;
    border: 1pt solid #333;
    background-color: #f9f9f9;
}
```

### Financial Calculators → Worked Examples

#### NPV Calculator Transformation
```html
<!-- Print Version: NPV Calculation Walkthrough -->
<div class="print-calculator-example">
    <h4>💰 NPV Calculation Example</h4>
    
    <div class="calculation-setup">
        <h5>Given Information:</h5>
        <ul>
            <li><strong>Initial Investment:</strong> $50,000</li>
            <li><strong>Discount Rate:</strong> 8%</li>
            <li><strong>Cash Flows:</strong> Year 1: $15,000, Year 2: $20,000, Year 3: $25,000</li>
        </ul>
    </div>
    
    <div class="calculation-steps">
        <h5>Step-by-Step Calculation:</h5>
        
        <div class="calculation-step">
            <div class="step-number">1</div>
            <div class="step-content">
                <strong>Present Value of Year 1 Cash Flow:</strong><br>
                PV₁ = $15,000 ÷ (1 + 0.08)¹ = $15,000 ÷ 1.08 = $13,889
            </div>
        </div>
        
        <div class="calculation-step">
            <div class="step-number">2</div>
            <div class="step-content">
                <strong>Present Value of Year 2 Cash Flow:</strong><br>
                PV₂ = $20,000 ÷ (1 + 0.08)² = $20,000 ÷ 1.1664 = $17,146
            </div>
        </div>
        
        <div class="calculation-step">
            <div class="step-number">3</div>
            <div class="step-content">
                <strong>Present Value of Year 3 Cash Flow:</strong><br>
                PV₃ = $25,000 ÷ (1 + 0.08)³ = $25,000 ÷ 1.2597 = $19,842
            </div>
        </div>
        
        <div class="calculation-step">
            <div class="step-number">4</div>
            <div class="step-content">
                <strong>Calculate NPV:</strong><br>
                NPV = -$50,000 + $13,889 + $17,146 + $19,842 = $877
            </div>
        </div>
    </div>
    
    <div class="calculation-conclusion">
        <h5>📊 Investment Decision:</h5>
        <p><strong>NPV = $877 (Positive)</strong></p>
        <p><strong>Recommendation:</strong> Accept the investment. The positive NPV indicates the project will add value to Sarah's business.</p>
    </div>
</div>
```

### Data Visualizations → Static Charts

#### Chart Conversion Process
1. **Export interactive charts** as high-resolution PNG/SVG
2. **Add interpretive annotations** explaining key insights
3. **Include data tables** showing underlying numbers
4. **Provide analysis questions** for deeper thinking

#### Implementation Example
```html
<!-- Print Version: Data Visualization -->
<div class="print-chart-container">
    <h4>📈 TechStart Revenue Trend Analysis</h4>
    
    <div class="chart-image">
        <img src="revenue-trend-chart.png" 
             alt="Line chart showing TechStart Solutions revenue growth from $1,300 in Month 1 to $8,500 in Month 8"
             style="width: 100%; max-width: 500pt;">
    </div>
    
    <div class="chart-data-table">
        <h5>📊 Revenue Data:</h5>
        <table class="data-table">
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Revenue</th>
                    <th>Growth Rate</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1</td><td>$1,300</td><td>—</td></tr>
                <tr><td>2</td><td>$1,950</td><td>+50%</td></tr>
                <tr><td>3</td><td>$2,100</td><td>+8%</td></tr>
                <!-- Additional data rows -->
            </tbody>
        </table>
    </div>
    
    <div class="chart-analysis">
        <h5>🔍 Key Insights:</h5>
        <ul>
            <li>Average monthly growth rate: 22%</li>
            <li>Strongest growth period: Months 4-6</li>
            <li>Revenue stabilizing around $8,000/month</li>
        </ul>
    </div>
    
    <div class="discussion-questions">
        <h5>💭 Think About It:</h5>
        <ol>
            <li>What factors might explain the growth acceleration in months 4-6?</li>
            <li>How should Sarah plan for the revenue stabilization trend?</li>
            <li>What would you recommend for Sarah's next growth phase?</li>
        </ol>
    </div>
</div>
```

### Drag-Drop Exercises → Matching Activities

#### Account Categorization Exercise
```html
<!-- Print Version: Account Categorization -->
<div class="print-exercise-container">
    <h4>🎯 Exercise: Categorize Business Accounts</h4>
    
    <div class="exercise-instructions">
        <p><strong>Instructions:</strong> Match each account to its correct category in the accounting equation. Write the letter of the correct category next to each account.</p>
    </div>
    
    <div class="categorization-exercise">
        <div class="categories-box">
            <h5>Categories:</h5>
            <ul class="category-list">
                <li><strong>A.</strong> Assets</li>
                <li><strong>B.</strong> Liabilities</li>
                <li><strong>C.</strong> Equity</li>
                <li><strong>D.</strong> Revenue</li>
                <li><strong>E.</strong> Expenses</li>
            </ul>
        </div>
        
        <div class="accounts-to-categorize">
            <h5>Accounts to Categorize:</h5>
            <div class="account-grid">
                <div class="account-item">
                    <span class="account-number">1.</span>
                    <span class="account-name">Cash in Bank</span>
                    <span class="answer-space">____</span>
                </div>
                <div class="account-item">
                    <span class="account-number">2.</span>
                    <span class="account-name">Accounts Payable</span>
                    <span class="answer-space">____</span>
                </div>
                <div class="account-item">
                    <span class="account-number">3.</span>
                    <span class="account-name">Owner's Capital</span>
                    <span class="answer-space">____</span>
                </div>
                <!-- Additional accounts -->
            </div>
        </div>
    </div>
    
    <div class="exercise-context">
        <h5>📊 Business Context:</h5>
        <p>These accounts are from Sarah's TechStart Solutions ledger. Understanding proper categorization is essential for creating accurate financial statements.</p>
    </div>
</div>

<!-- Answer Key (separate page or section) -->
<div class="answer-key">
    <h4>✅ Answer Key: Account Categorization</h4>
    <div class="answers-grid">
        <div class="answer-item">1. Cash in Bank = <strong>A (Assets)</strong></div>
        <div class="answer-item">2. Accounts Payable = <strong>B (Liabilities)</strong></div>
        <div class="answer-item">3. Owner's Capital = <strong>C (Equity)</strong></div>
        <!-- Additional answers with explanations -->
    </div>
    
    <div class="answer-explanations">
        <h5>📝 Explanations:</h5>
        <ul>
            <li><strong>Cash in Bank:</strong> Represents money owned by the business, making it an asset.</li>
            <li><strong>Accounts Payable:</strong> Money owed to suppliers, making it a liability.</li>
            <!-- Additional explanations -->
        </ul>
    </div>
</div>
```

### Business Simulations → Case Study Scenarios

#### Lemonade Stand Simulation Conversion
```html
<!-- Print Version: Business Decision Case Study -->
<div class="print-simulation-case">
    <h4>🍋 Case Study: Lemonade Stand Business Decisions</h4>
    
    <div class="case-scenario">
        <h5>🎬 Scenario:</h5>
        <p>You're managing a lemonade stand business. You have $50 starting capital and need to make strategic decisions to maximize profit over a 5-day period.</p>
    </div>
    
    <div class="decision-points">
        <h5>🎯 Key Decisions to Make:</h5>
        
        <div class="decision-scenario">
            <h6>Day 1 - Supply Purchase Decision</h6>
            <div class="decision-options">
                <p><strong>Situation:</strong> You can buy lemons at $0.50 each or $4.00 for a 10-pack. Sugar costs $2.00 per bag (makes 20 cups). Cups cost $0.05 each.</p>
                
                <p><strong>Weather Forecast:</strong> Sunny, 85°F (high demand expected)</p>
                
                <div class="option-analysis">
                    <table class="decision-table">
                        <thead>
                            <tr>
                                <th>Option</th>
                                <th>Initial Cost</th>
                                <th>Cups Possible</th>
                                <th>Cost per Cup</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Small Batch (5 lemons)</td>
                                <td>$4.50</td>
                                <td>15 cups</td>
                                <td>$0.30</td>
                            </tr>
                            <tr>
                                <td>Large Batch (10 lemons)</td>
                                <td>$6.50</td>
                                <td>30 cups</td>
                                <td>$0.22</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div class="decision-questions">
                    <p><strong>Your Decision:</strong> Which option would you choose and why?</p>
                    <div class="answer-space">
                        <p>_________________________________________________</p>
                        <p>_________________________________________________</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Additional decision scenarios for Days 2-5 -->
    </div>
    
    <div class="case-analysis">
        <h5>📊 Business Analysis Questions:</h5>
        <ol>
            <li>Calculate the break-even price per cup for each supply option.</li>
            <li>What factors should influence your pricing strategy?</li>
            <li>How would you adjust your strategy if weather turned rainy?</li>
            <li>What lessons apply to Sarah's TechStart Solutions business?</li>
        </ol>
    </div>
</div>
```

### Gamification Elements → Progress Checklists

#### Achievement Tracking System
```html
<!-- Print Version: Learning Progress Tracker -->
<div class="print-progress-tracker">
    <h4>🏆 Unit 1 Learning Achievement Tracker</h4>
    
    <div class="skills-checklist">
        <h5>📚 Accounting Skills Mastery</h5>
        
        <div class="skill-categories">
            <div class="skill-category">
                <h6>Fundamental Concepts</h6>
                <ul class="skills-list">
                    <li class="skill-item">
                        <input type="checkbox" id="skill-1">
                        <label for="skill-1">Understand the accounting equation (Assets = Liabilities + Equity)</label>
                    </li>
                    <li class="skill-item">
                        <input type="checkbox" id="skill-2">
                        <label for="skill-2">Record basic journal entries correctly</label>
                    </li>
                    <li class="skill-item">
                        <input type="checkbox" id="skill-3">
                        <label for="skill-3">Prepare a trial balance from ledger data</label>
                    </li>
                </ul>
            </div>
            
            <div class="skill-category">
                <h6>Excel Technical Skills</h6>
                <ul class="skills-list">
                    <li class="skill-item">
                        <input type="checkbox" id="excel-1">
                        <label for="excel-1">Create and format Excel tables</label>
                    </li>
                    <li class="skill-item">
                        <input type="checkbox" id="excel-2">
                        <label for="excel-2">Use SUMIF function for aggregating data</label>
                    </li>
                    <li class="skill-item">
                        <input type="checkbox" id="excel-3">
                        <label for="excel-3">Apply conditional formatting for error checking</label>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="achievement-levels">
        <h5>🎯 Achievement Levels</h5>
        
        <div class="level-tracker">
            <div class="level-item">
                <div class="level-badge">⭐</div>
                <div class="level-content">
                    <strong>Novice (0-25 points):</strong> Basic understanding of concepts
                </div>
                <div class="level-checkbox">□</div>
            </div>
            
            <div class="level-item">
                <div class="level-badge">⭐⭐</div>
                <div class="level-content">
                    <strong>Competent (26-50 points):</strong> Can apply skills with guidance
                </div>
                <div class="level-checkbox">□</div>
            </div>
            
            <div class="level-item">
                <div class="level-badge">⭐⭐⭐</div>
                <div class="level-content">
                    <strong>Proficient (51-75 points):</strong> Independent application of skills
                </div>
                <div class="level-checkbox">□</div>
            </div>
            
            <div class="level-item">
                <div class="level-badge">🏆</div>
                <div class="level-content">
                    <strong>Expert (76+ points):</strong> Advanced mastery and teaching others
                </div>
                <div class="level-checkbox">□</div>
            </div>
        </div>
    </div>
    
    <div class="reflection-section">
        <h5>📝 Self-Reflection</h5>
        
        <div class="reflection-questions">
            <div class="reflection-item">
                <p><strong>What was your biggest learning breakthrough in this unit?</strong></p>
                <div class="reflection-space">
                    <p>_________________________________________________</p>
                    <p>_________________________________________________</p>
                    <p>_________________________________________________</p>
                </div>
            </div>
            
            <div class="reflection-item">
                <p><strong>Which concepts do you still need to practice more?</strong></p>
                <div class="reflection-space">
                    <p>_________________________________________________</p>
                    <p>_________________________________________________</p>
                </div>
            </div>
            
            <div class="reflection-item">
                <p><strong>How will these skills help Sarah's business succeed?</strong></p>
                <div class="reflection-space">
                    <p>_________________________________________________</p>
                    <p>_________________________________________________</p>
                    <p>_________________________________________________</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

---

## Print-Specific Content Additions

### Answer Keys and Solutions

#### Comprehensive Answer Integration
```html
<!-- Answer Key Section Template -->
<div class="answer-key-section">
    <h3>📋 Answer Key: {{SECTION_TITLE}}</h3>
    
    <div class="answer-categories">
        {{#COMPREHENSION_ANSWERS}}
        <div class="answer-category">
            <h4>{{CATEGORY_TITLE}}</h4>
            
            {{#ANSWERS}}
            <div class="answer-item">
                <div class="question-reference">
                    <strong>Question {{QUESTION_NUMBER}}:</strong>
                </div>
                <div class="correct-answer">
                    <strong>Answer:</strong> {{CORRECT_ANSWER}}
                </div>
                {{#EXPLANATION}}
                <div class="answer-explanation">
                    <strong>Explanation:</strong> {{.}}
                </div>
                {{/EXPLANATION}}
                {{#BUSINESS_CONNECTION}}
                <div class="business-connection">
                    <strong>Business Application:</strong> {{.}}
                </div>
                {{/BUSINESS_CONNECTION}}
            </div>
            {{/ANSWERS}}
        </div>
        {{/COMPREHENSION_ANSWERS}}
    </div>
</div>
```

### Formula Reference Cards

#### Excel Formula Quick Reference
```html
<!-- Print Formula Reference -->
<div class="formula-reference-card">
    <h4>📊 Excel Formula Quick Reference</h4>
    
    <div class="formula-categories">
        <div class="formula-category">
            <h5>Mathematical Functions</h5>
            <table class="formula-table">
                <thead>
                    <tr>
                        <th>Function</th>
                        <th>Syntax</th>
                        <th>Example</th>
                        <th>Business Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>SUM</td>
                        <td>=SUM(range)</td>
                        <td>=SUM(B2:B10)</td>
                        <td>Total revenue</td>
                    </tr>
                    <tr>
                        <td>AVERAGE</td>
                        <td>=AVERAGE(range)</td>
                        <td>=AVERAGE(C2:C10)</td>
                        <td>Average daily sales</td>
                    </tr>
                    <!-- Additional formulas -->
                </tbody>
            </table>
        </div>
        
        <div class="formula-category">
            <h5>Lookup Functions</h5>
            <table class="formula-table">
                <thead>
                    <tr>
                        <th>Function</th>
                        <th>Syntax</th>
                        <th>Example</th>
                        <th>Business Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>XLOOKUP</td>
                        <td>=XLOOKUP(lookup_value, lookup_array, return_array)</td>
                        <td>=XLOOKUP(A2, Names, Salaries)</td>
                        <td>Employee payroll lookup</td>
                    </tr>
                    <!-- Additional lookup functions -->
                </tbody>
            </table>
        </div>
    </div>
</div>
```

### Glossary Integration

#### In-Context Vocabulary
```html
<!-- Glossary Terms Throughout Content -->
<div class="inline-glossary">
    <span class="term" data-definition="Money, goods, or services owed to creditors">
        <strong>Liabilities</strong>
        <span class="definition-marker">*</span>
    </span>
</div>

<!-- Glossary Footer for Each Page -->
<div class="page-glossary">
    <h5>📖 Key Terms on This Page:</h5>
    <dl class="term-definitions">
        <dt>Assets</dt>
        <dd>Resources owned by a business that have economic value</dd>
        
        <dt>Liabilities</dt>
        <dd>Money, goods, or services owed to creditors</dd>
        
        <dt>Equity</dt>
        <dd>The owner's claim on business assets after liabilities are paid</dd>
    </dl>
</div>
```

### Assessment Rubrics

#### Self-Assessment Tools
```html
<!-- Print Assessment Rubric -->
<div class="assessment-rubric">
    <h4>📋 Self-Assessment Rubric: Excel Model Building</h4>
    
    <table class="rubric-table">
        <thead>
            <tr>
                <th>Criteria</th>
                <th>Excellent (4)</th>
                <th>Good (3)</th>
                <th>Satisfactory (2)</th>
                <th>Needs Work (1)</th>
                <th>Self-Score</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Formula Accuracy</strong></td>
                <td>All formulas correct and appropriate</td>
                <td>Most formulas correct with minor errors</td>
                <td>Some formula errors that don't affect main results</td>
                <td>Multiple formula errors affecting accuracy</td>
                <td class="score-box">____</td>
            </tr>
            <tr>
                <td><strong>Business Logic</strong></td>
                <td>Model reflects real-world business practices</td>
                <td>Good business logic with minor unrealistic elements</td>
                <td>Generally realistic with some questionable assumptions</td>
                <td>Unrealistic business assumptions throughout</td>
                <td class="score-box">____</td>
            </tr>
            <!-- Additional criteria -->
        </tbody>
    </table>
    
    <div class="rubric-reflection">
        <h5>📝 Reflection Questions:</h5>
        <ol>
            <li>What is your strongest area in this assessment?</li>
            <li>Which area needs the most improvement?</li>
            <li>What specific steps will you take to improve?</li>
        </ol>
    </div>
</div>
```

---

## CSS Print Media Queries

### Core Print Styles

```css
/* ==== PRINT MEDIA QUERIES ==== */

@media print {
    /* Hide interactive elements */
    .interactive-component,
    .nav-toggle,
    .gamification-sidebar,
    .print-button,
    .video-container,
    .audio-player {
        display: none !important;
    }
    
    /* Show print-only content */
    .print-only {
        display: block !important;
    }
    
    .screen-only {
        display: none !important;
    }
    
    /* Base layout adjustments */
    body {
        font-size: 12pt;
        line-height: 1.6;
        color: #000000;
        background: white;
        margin: 0;
        padding: 0;
    }
    
    /* Container adjustments */
    .container,
    .content-wrapper,
    .main-content-area {
        width: 100% !important;
        max-width: none !important;
        margin: 0 !important;
        padding: 0 !important;
        box-shadow: none !important;
    }
    
    /* Remove background colors and shadows */
    * {
        background: transparent !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    
    /* High contrast for borders */
    .callout,
    table,
    .formula-container,
    .example-block {
        border: 1pt solid #000 !important;
    }
    
    /* Optimize images for print */
    img {
        max-width: 100% !important;
        page-break-inside: avoid;
        display: block;
        margin: 12pt auto;
    }
    
    /* Table optimization */
    table {
        border-collapse: collapse !important;
        width: 100% !important;
        page-break-inside: avoid;
    }
    
    th, td {
        border: 1pt solid #333 !important;
        padding: 6pt 8pt !important;
        text-align: left !important;
    }
    
    th {
        background-color: #e6e6e6 !important;
        font-weight: bold !important;
    }
    
    /* Code and formula formatting */
    code,
    .formula,
    pre {
        border: 1pt solid #333 !important;
        padding: 4pt 6pt !important;
        font-family: "Courier New", monospace !important;
        font-size: 11pt !important;
        background-color: #f5f5f5 !important;
        page-break-inside: avoid;
    }
    
    /* Callout boxes for print */
    .callout {
        page-break-inside: avoid;
        margin: 12pt 0 !important;
        padding: 12pt !important;
        border: 2pt solid #333 !important;
    }
    
    .callout-important {
        border-left: 6pt solid #000 !important;
    }
    
    .callout-tip {
        border-left: 6pt solid #666 !important;
    }
    
    .callout-warning {
        border-left: 6pt solid #333 !important;
        background-color: #f0f0f0 !important;
    }
    
    /* Links for print */
    a[href]:after {
        content: " (" attr(href) ")";
        font-size: 10pt;
        font-style: italic;
    }
    
    a[href^="#"]:after {
        content: "";
    }
    
    /* Page break control */
    .page-break {
        page-break-before: always;
    }
    
    .no-break {
        page-break-inside: avoid;
    }
    
    /* Section headers */
    .section-header {
        page-break-after: avoid;
        margin-bottom: 18pt !important;
    }
    
    /* Exercise formatting */
    .exercise-container {
        page-break-inside: avoid;
        margin: 18pt 0 !important;
        border: 2pt solid #000 !important;
        padding: 12pt !important;
    }
    
    .answer-space {
        border-bottom: 1pt solid #333 !important;
        height: 24pt;
        margin: 6pt 0;
    }
    
    /* Footer and navigation removal */
    .site-footer,
    .breadcrumb,
    .section-navigation {
        display: none !important;
    }
}

/* ==== PRINT LAYOUT COMPONENTS ==== */

/* Print-specific table of contents */
.print-toc {
    display: none;
}

@media print {
    .print-toc {
        display: block;
        page-break-after: always;
        margin-bottom: 0;
    }
    
    .print-toc h2 {
        text-align: center;
        margin-bottom: 24pt;
    }
    
    .print-toc ul {
        list-style: none;
        padding-left: 0;
    }
    
    .print-toc li {
        margin-bottom: 8pt;
        display: flex;
        justify-content: space-between;
    }
    
    .print-toc .page-number {
        font-weight: bold;
    }
}

/* Print-specific answer key styling */
.print-answer-key {
    display: none;
    page-break-before: always;
}

@media print {
    .print-answer-key {
        display: block;
    }
    
    .answer-item {
        margin-bottom: 12pt;
        padding: 8pt;
        border: 1pt solid #ccc;
        page-break-inside: avoid;
    }
    
    .correct-answer {
        font-weight: bold;
        color: #000;
    }
    
    .answer-explanation {
        margin-top: 6pt;
        font-style: italic;
    }
}
```

---

## Print Generation Workflow

### Automated Print Version Creation

#### JavaScript Print Generator
```javascript
// Print version generation system
class PrintVersionGenerator {
    constructor() {
        this.printStylesheet = null;
        this.originalContent = null;
    }
    
    // Generate complete print version
    generatePrintVersion(pageElement) {
        // Store original content
        this.originalContent = pageElement.innerHTML;
        
        // Transform interactive components
        this.transformInteractiveComponents(pageElement);
        
        // Add print-specific content
        this.addPrintContent(pageElement);
        
        // Apply print styles
        this.applyPrintStyles();
        
        // Generate table of contents
        this.generateTableOfContents(pageElement);
        
        // Add answer keys
        this.generateAnswerKeys(pageElement);
        
        return pageElement;
    }
    
    // Transform interactive components to static content
    transformInteractiveComponents(container) {
        // Transform spreadsheet simulators
        const spreadsheets = container.querySelectorAll('.spreadsheet-simulator-container');
        spreadsheets.forEach(spreadsheet => {
            const printTable = this.createPrintSpreadsheet(spreadsheet);
            spreadsheet.parentNode.replaceChild(printTable, spreadsheet);
        });
        
        // Transform financial calculators
        const calculators = container.querySelectorAll('.financial-calculator');
        calculators.forEach(calculator => {
            const workedExample = this.createWorkedExample(calculator);
            calculator.parentNode.replaceChild(workedExample, calculator);
        });
        
        // Transform drag-drop exercises
        const dragDrops = container.querySelectorAll('.drag-drop-exercise');
        dragDrops.forEach(exercise => {
            const printExercise = this.createPrintExercise(exercise);
            exercise.parentNode.replaceChild(printExercise, exercise);
        });
        
        // Transform charts to static images
        const charts = container.querySelectorAll('.chart-container');
        charts.forEach(chart => {
            const staticChart = this.createStaticChart(chart);
            chart.parentNode.replaceChild(staticChart, chart);
        });
    }
    
    // Create print version of spreadsheet
    createPrintSpreadsheet(spreadsheetContainer) {
        const preset = spreadsheetContainer.dataset.preset;
        const data = this.extractSpreadsheetData(spreadsheetContainer);
        
        const printDiv = document.createElement('div');
        printDiv.className = 'print-spreadsheet-table';
        
        // Create table structure
        const table = document.createElement('table');
        table.className = 'ledger-table';
        
        // Add headers based on preset
        const headers = this.getHeadersForPreset(preset);
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Add data rows
        const tbody = document.createElement('tbody');
        data.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(cell => {
                const td = document.createElement('td');
                td.textContent = cell;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });
        
        table.appendChild(tbody);
        printDiv.appendChild(table);
        
        // Add formula notes
        const formulaNotes = this.createFormulaNotes(spreadsheetContainer);
        printDiv.appendChild(formulaNotes);
        
        return printDiv;
    }
    
    // Launch print dialog with transformed content
    printPage() {
        window.print();
    }
    
    // Restore original interactive content
    restoreOriginalContent(pageElement) {
        if (this.originalContent) {
            pageElement.innerHTML = this.originalContent;
        }
    }
}

// Initialize print functionality
document.addEventListener('DOMContentLoaded', function() {
    const printGenerator = new PrintVersionGenerator();
    
    // Add print buttons to all sections
    const printButtons = document.querySelectorAll('.print-button');
    printButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mainContent = document.querySelector('.main-content-area');
            printGenerator.generatePrintVersion(mainContent);
            
            // Brief delay to allow content transformation
            setTimeout(() => {
                printGenerator.printPage();
                
                // Restore original content after printing
                setTimeout(() => {
                    printGenerator.restoreOriginalContent(mainContent);
                }, 1000);
            }, 500);
        });
    });
});
```

### Print Button Integration

#### HTML Print Button Component
```html
<!-- Print Button Component -->
<div class="print-section">
    <button class="print-button" onclick="generateAndPrint()" title="Generate printer-friendly version">
        🖨️ Print Version
    </button>
    
    <div class="print-options">
        <label>
            <input type="checkbox" id="include-answers" checked>
            Include Answer Keys
        </label>
        
        <label>
            <input type="checkbox" id="include-formulas" checked>
            Include Formula References
        </label>
        
        <label>
            <input type="checkbox" id="include-glossary" checked>
            Include Glossary Terms
        </label>
    </div>
</div>
```

#### CSS for Print Button
```css
.print-section {
    margin: 24px 0;
    padding: 16px;
    border: 2px dashed #007bff;
    border-radius: 8px;
    background-color: #f8f9fa;
    text-align: center;
}

.print-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.print-button:hover {
    background-color: #0056b3;
}

.print-options {
    margin-top: 12px;
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}

.print-options label {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    color: #666;
}

/* Hide print section when printing */
@media print {
    .print-section {
        display: none !important;
    }
}
```

---

*These comprehensive print design specifications ensure that all interactive content can be effectively transformed into professional, educational print materials while maintaining learning effectiveness and visual appeal.*