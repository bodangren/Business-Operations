// ===================================
// Glossary System with Hover Popups
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeGlossary();
    setupGlossaryPopups();
});

let glossaryData = {};
let glossaryPopup = null;

// ===================================
// Glossary Data Management
// ===================================

function initializeGlossary() {
    // Load glossary data
    loadGlossaryData();
    
    // Process all key terms on the page
    processKeyTerms();
    
    // Create glossary popup element
    createGlossaryPopup();
}

function loadGlossaryData() {
    // For now, use embedded glossary data
    // In a real implementation, this would load from a JSON file
    glossaryData = {
        "double-entry bookkeeping": {
            term: "Double-Entry Bookkeeping",
            definition: "A system of recording financial transactions where every entry affects at least two accounts, ensuring that total debits equal total credits.",
            category: "Accounting",
            relatedTerms: ["debit", "credit", "trial balance"],
            examples: ["When you receive cash for a sale, you debit Cash and credit Sales Revenue."]
        },
        "chart of accounts": {
            term: "Chart of Accounts",
            definition: "An organized list of all accounts used by a business, typically numbered for easy reference and categorization.",
            category: "Accounting",
            relatedTerms: ["general ledger", "account numbering"],
            examples: ["1000-1999: Assets, 2000-2999: Liabilities, 3000-3999: Equity"]
        },
        "general ledger": {
            term: "General Ledger",
            definition: "The main accounting record that contains all accounts and their running balances, serving as the central repository for all financial transactions.",
            category: "Accounting",
            relatedTerms: ["chart of accounts", "trial balance"],
            examples: ["All journal entries are posted to the general ledger accounts."]
        },
        "trial balance": {
            term: "Trial Balance",
            definition: "A report that lists all account balances to verify that total debits equal total credits, ensuring the books are mathematically accurate.",
            category: "Accounting",
            relatedTerms: ["double-entry bookkeeping", "general ledger"],
            examples: ["A trial balance is prepared monthly to check for errors before creating financial statements."]
        },
        "debit": {
            term: "Debit",
            definition: "The left side of an accounting entry that increases assets and expenses, or decreases liabilities, equity, and revenue.",
            category: "Accounting",
            relatedTerms: ["credit", "double-entry bookkeeping"],
            examples: ["Debit Cash $1,000 when receiving payment from a customer."]
        },
        "credit": {
            term: "Credit",
            definition: "The right side of an accounting entry that increases liabilities, equity, and revenue, or decreases assets and expenses.",
            category: "Accounting",
            relatedTerms: ["debit", "double-entry bookkeeping"],
            examples: ["Credit Sales Revenue $1,000 when making a sale."]
        },
        "assets": {
            term: "Assets",
            definition: "Resources owned by a business that have economic value and can be converted to cash or provide future benefit.",
            category: "Accounting",
            relatedTerms: ["liabilities", "equity", "balance sheet"],
            examples: ["Cash, accounts receivable, inventory, equipment, and buildings."]
        },
        "liabilities": {
            term: "Liabilities",
            definition: "Debts or obligations that a business owes to external parties, representing claims against the company's assets.",
            category: "Accounting",
            relatedTerms: ["assets", "equity", "balance sheet"],
            examples: ["Accounts payable, loans, credit card debt, and accrued expenses."]
        },
        "equity": {
            term: "Equity",
            definition: "The owner's claim on business assets after all liabilities are paid, representing the net worth of the business.",
            category: "Accounting",
            relatedTerms: ["assets", "liabilities", "balance sheet"],
            examples: ["Owner's equity, retained earnings, and capital contributions."]
        },
        "revenue": {
            term: "Revenue",
            definition: "Income generated from normal business operations, typically from sales of goods or services to customers.",
            category: "Accounting",
            relatedTerms: ["expenses", "income statement"],
            examples: ["Sales revenue, consulting fees, and service income."]
        },
        "expenses": {
            term: "Expenses",
            definition: "Costs incurred in the process of generating revenue, reducing the company's equity.",
            category: "Accounting",
            relatedTerms: ["revenue", "income statement"],
            examples: ["Rent, salaries, utilities, and office supplies."]
        },
        "balance sheet": {
            term: "Balance Sheet",
            definition: "A financial statement that shows a company's assets, liabilities, and equity at a specific point in time.",
            category: "Financial Statements",
            relatedTerms: ["assets", "liabilities", "equity"],
            examples: ["The balance sheet must always balance: Assets = Liabilities + Equity."]
        },
        "income statement": {
            term: "Income Statement",
            definition: "A financial statement that shows a company's revenues and expenses over a specific period, resulting in net income or loss.",
            category: "Financial Statements",
            relatedTerms: ["revenue", "expenses", "net income"],
            examples: ["Shows profitability for a month, quarter, or year."]
        },
        "cash flow": {
            term: "Cash Flow",
            definition: "The movement of money in and out of a business, tracking actual cash receipts and payments.",
            category: "Finance",
            relatedTerms: ["cash flow statement", "operating activities"],
            examples: ["Positive cash flow means more money coming in than going out."]
        },
        "depreciation": {
            term: "Depreciation",
            definition: "The allocation of an asset's cost over its useful life, recognizing that assets lose value over time.",
            category: "Accounting",
            relatedTerms: ["assets", "expenses"],
            examples: ["A computer purchased for $3,000 might depreciate $1,000 per year over 3 years."]
        }
    };
    
    // Also try to load from localStorage for user additions
    const userGlossary = localStorage.getItem('user-glossary');
    if (userGlossary) {
        const userData = JSON.parse(userGlossary);
        glossaryData = { ...glossaryData, ...userData };
    }
}

// ===================================
// Key Term Processing
// ===================================

function processKeyTerms() {
    // Find all elements with key-term class
    const keyTerms = document.querySelectorAll('.key-term');
    
    keyTerms.forEach(term => {
        const termText = term.textContent.toLowerCase().trim();
        const glossaryEntry = findGlossaryEntry(termText);
        
        if (glossaryEntry) {
            setupTermInteraction(term, glossaryEntry);
        }
    });
    
    // Also process definition terms
    const definitionTerms = document.querySelectorAll('.definition-term');
    definitionTerms.forEach(term => {
        const termText = term.textContent.toLowerCase().trim();
        const glossaryEntry = findGlossaryEntry(termText);
        
        if (glossaryEntry) {
            setupTermInteraction(term, glossaryEntry);
        }
    });
}

function findGlossaryEntry(termText) {
    // Direct match
    if (glossaryData[termText]) {
        return glossaryData[termText];
    }
    
    // Partial match
    for (const key in glossaryData) {
        if (key.includes(termText) || termText.includes(key)) {
            return glossaryData[key];
        }
    }
    
    return null;
}

function setupTermInteraction(element, glossaryEntry) {
    element.classList.add('glossary-term');
    element.setAttribute('data-term', glossaryEntry.term);
    element.setAttribute('title', ''); // Remove default title to avoid conflict
    element.style.cursor = 'help';
    
    // Add hover events
    element.addEventListener('mouseenter', function(e) {
        showGlossaryPopup(e, glossaryEntry);
    });
    
    element.addEventListener('mouseleave', function() {
        hideGlossaryPopup();
    });
    
    // Add click event for mobile
    element.addEventListener('click', function(e) {
        e.preventDefault();
        showGlossaryPopup(e, glossaryEntry, true);
    });
}

// ===================================
// Glossary Popup
// ===================================

function createGlossaryPopup() {
    glossaryPopup = document.createElement('div');
    glossaryPopup.id = 'glossary-popup';
    glossaryPopup.className = 'glossary-popup';
    glossaryPopup.style.cssText = `
        position: absolute;
        background: white;
        border: 2px solid #3498db;
        border-radius: 8px;
        padding: 1rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 300px;
        z-index: 1001;
        display: none;
        font-size: 0.9rem;
        line-height: 1.4;
    `;
    
    document.body.appendChild(glossaryPopup);
    
    // Add close button for mobile
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        background: none;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        color: #666;
        display: none;
    `;
    closeBtn.addEventListener('click', hideGlossaryPopup);
    glossaryPopup.appendChild(closeBtn);
}

function showGlossaryPopup(event, glossaryEntry, isMobile = false) {
    if (!glossaryPopup) return;
    
    // Build popup content
    const content = `
        <div style="margin-bottom: 0.75rem;">
            <h4 style="margin: 0 0 0.25rem 0; color: #2c3e50; font-size: 1rem;">
                ${glossaryEntry.term}
            </h4>
            <span style="font-size: 0.75rem; color: #666; text-transform: uppercase; letter-spacing: 0.05em;">
                ${glossaryEntry.category}
            </span>
        </div>
        
        <div style="margin-bottom: 0.75rem; color: #444;">
            ${glossaryEntry.definition}
        </div>
        
        ${glossaryEntry.examples && glossaryEntry.examples.length > 0 ? `
            <div style="margin-bottom: 0.75rem;">
                <strong style="color: #27ae60; font-size: 0.85rem;">Example:</strong>
                <div style="font-style: italic; color: #555; font-size: 0.85rem; margin-top: 0.25rem;">
                    ${glossaryEntry.examples[0]}
                </div>
            </div>
        ` : ''}
        
        ${glossaryEntry.relatedTerms && glossaryEntry.relatedTerms.length > 0 ? `
            <div style="border-top: 1px solid #eee; padding-top: 0.5rem;">
                <strong style="color: #8e44ad; font-size: 0.8rem;">Related:</strong>
                <div style="margin-top: 0.25rem;">
                    ${glossaryEntry.relatedTerms.map(term => 
                        `<span style="display: inline-block; background: #f8f9fa; padding: 0.125rem 0.375rem; 
                         margin: 0.125rem 0.25rem 0.125rem 0; border-radius: 3px; font-size: 0.75rem; 
                         color: #666; cursor: pointer;" onclick="searchRelatedTerm('${term}')">${term}</span>`
                    ).join('')}
                </div>
            </div>
        ` : ''}
    `;
    
    glossaryPopup.innerHTML = content;
    
    // Show close button on mobile
    const closeBtn = glossaryPopup.querySelector('button');
    if (closeBtn) {
        closeBtn.style.display = isMobile ? 'block' : 'none';
    }
    
    // Position popup
    if (isMobile) {
        // Center on mobile
        glossaryPopup.style.cssText += `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 90vw;
            display: block;
        `;
    } else {
        // Position near cursor on desktop
        const rect = event.target.getBoundingClientRect();
        const popupRect = glossaryPopup.getBoundingClientRect();
        
        let left = rect.left + window.scrollX;
        let top = rect.bottom + window.scrollY + 5;
        
        // Adjust if popup would go off screen
        if (left + 300 > window.innerWidth) {
            left = window.innerWidth - 300 - 10;
        }
        
        if (top + 200 > window.innerHeight + window.scrollY) {
            top = rect.top + window.scrollY - 200 - 5;
        }
        
        glossaryPopup.style.cssText = glossaryPopup.style.cssText.replace(/position: fixed.*?display: block;/, '') + `
            position: absolute;
            left: ${left}px;
            top: ${top}px;
            display: block;
        `;
    }
    
    // Track glossary usage
    trackGlossaryUsage(glossaryEntry.term);
}

function hideGlossaryPopup() {
    if (glossaryPopup) {
        glossaryPopup.style.display = 'none';
    }
}

// ===================================
// Related Term Navigation
// ===================================

function searchRelatedTerm(term) {
    // Search for the related term
    const searchInput = document.getElementById('quick-search');
    if (searchInput) {
        searchInput.value = term;
        searchInput.dispatchEvent(new Event('input'));
    }
    
    hideGlossaryPopup();
}

// ===================================
// Glossary Analytics
// ===================================

function trackGlossaryUsage(term) {
    const usage = JSON.parse(localStorage.getItem('glossary-usage') || '{}');
    usage[term] = (usage[term] || 0) + 1;
    localStorage.setItem('glossary-usage', JSON.stringify(usage));
}

function getPopularTerms() {
    const usage = JSON.parse(localStorage.getItem('glossary-usage') || '{}');
    return Object.entries(usage)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10)
        .map(([term, count]) => ({ term, count }));
}

// ===================================
// Glossary Index Generation
// ===================================

function generateGlossaryIndex() {
    const categories = {};
    
    Object.values(glossaryData).forEach(entry => {
        const category = entry.category || 'General';
        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(entry);
    });
    
    // Sort categories and terms
    Object.keys(categories).forEach(category => {
        categories[category].sort((a, b) => a.term.localeCompare(b.term));
    });
    
    return categories;
}

function renderGlossaryPage() {
    const categories = generateGlossaryIndex();
    
    let html = `
        <div class="glossary-index">
            <div class="glossary-search">
                <input type="text" id="glossary-filter" placeholder="Filter terms..." 
                       style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 2rem;">
            </div>
    `;
    
    Object.entries(categories).forEach(([category, terms]) => {
        html += `
            <div class="glossary-category" data-category="${category}">
                <h3 style="color: #3498db; border-bottom: 2px solid #3498db; padding-bottom: 0.5rem; margin-bottom: 1rem;">
                    ${category}
                </h3>
                <div class="glossary-terms">
        `;
        
        terms.forEach(term => {
            html += `
                <div class="glossary-entry" data-term="${term.term.toLowerCase()}" style="margin-bottom: 1.5rem; padding: 1rem; border: 1px solid #eee; border-radius: 6px;">
                    <h4 style="margin: 0 0 0.5rem 0; color: #2c3e50;">${term.term}</h4>
                    <p style="margin: 0 0 0.75rem 0; color: #444;">${term.definition}</p>
                    ${term.examples && term.examples.length > 0 ? `
                        <div style="margin-bottom: 0.5rem;">
                            <strong style="color: #27ae60; font-size: 0.9rem;">Example:</strong>
                            <div style="font-style: italic; color: #555; margin-top: 0.25rem;">${term.examples[0]}</div>
                        </div>
                    ` : ''}
                    ${term.relatedTerms && term.relatedTerms.length > 0 ? `
                        <div>
                            <strong style="color: #8e44ad; font-size: 0.9rem;">Related:</strong>
                            ${term.relatedTerms.map(relatedTerm => 
                                `<span style="display: inline-block; background: #f8f9fa; padding: 0.25rem 0.5rem; margin: 0.25rem 0.25rem 0 0; border-radius: 3px; font-size: 0.85rem; cursor: pointer;" onclick="filterGlossary('${relatedTerm}')">${relatedTerm}</span>`
                            ).join('')}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += `</div>`;
    
    return html;
}

// ===================================
// Glossary Filtering
// ===================================

function setupGlossaryFiltering() {
    const filterInput = document.getElementById('glossary-filter');
    if (!filterInput) return;
    
    filterInput.addEventListener('input', function() {
        filterGlossary(this.value);
    });
}

function filterGlossary(query) {
    const entries = document.querySelectorAll('.glossary-entry');
    const categories = document.querySelectorAll('.glossary-category');
    const queryLower = query.toLowerCase();
    
    if (!query.trim()) {
        // Show all entries
        entries.forEach(entry => entry.style.display = 'block');
        categories.forEach(category => category.style.display = 'block');
        return;
    }
    
    entries.forEach(entry => {
        const termText = entry.dataset.term;
        const entryContent = entry.textContent.toLowerCase();
        
        if (termText.includes(queryLower) || entryContent.includes(queryLower)) {
            entry.style.display = 'block';
        } else {
            entry.style.display = 'none';
        }
    });
    
    // Hide categories with no visible entries
    categories.forEach(category => {
        const visibleEntries = category.querySelectorAll('.glossary-entry[style*="display: block"], .glossary-entry:not([style*="display: none"])');
        category.style.display = visibleEntries.length > 0 ? 'block' : 'none';
    });
}

// ===================================
// Export Functions
// ===================================

window.GlossarySystem = {
    initializeGlossary,
    loadGlossaryData,
    generateGlossaryIndex,
    renderGlossaryPage,
    setupGlossaryFiltering,
    getPopularTerms,
    trackGlossaryUsage
};