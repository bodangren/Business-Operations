// ===================================
// Client-Side Search System
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    buildSearchIndex();
});

let searchIndex = null;
let searchData = [];

// ===================================
// Search Index Building
// ===================================

function buildSearchIndex() {
    // Extract all text content from the current page
    const content = extractPageContent();
    
    // Get existing search data from localStorage or initialize
    const existingData = JSON.parse(localStorage.getItem('search-index') || '[]');
    
    // Add current page to search data
    const currentPage = {
        id: window.location.pathname,
        title: document.title,
        url: window.location.pathname,
        content: content.text,
        headings: content.headings,
        keywords: content.keywords
    };
    
    // Update or add current page data
    const existingIndex = existingData.findIndex(page => page.id === currentPage.id);
    if (existingIndex >= 0) {
        existingData[existingIndex] = currentPage;
    } else {
        existingData.push(currentPage);
    }
    
    // Save updated index
    localStorage.setItem('search-index', JSON.stringify(existingData));
    searchData = existingData;
    
    // Initialize Lunr index
    initializeLunrIndex();
}

function extractPageContent() {
    const mainContent = document.querySelector('#main-content') || document.body;
    
    // Extract headings
    const headings = [];
    mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        headings.push({
            level: parseInt(heading.tagName[1]),
            text: heading.textContent.trim(),
            id: heading.id || ''
        });
    });
    
    // Extract all text content
    const textContent = mainContent.textContent
        .replace(/\s+/g, ' ')
        .trim();
    
    // Extract keywords from callouts and key terms
    const keywords = [];
    mainContent.querySelectorAll('.key-term, .definition-term, .callout h3, .callout h4').forEach(element => {
        keywords.push(element.textContent.trim());
    });
    
    return {
        text: textContent,
        headings: headings,
        keywords: keywords
    };
}

function initializeLunrIndex() {
    // Use a simplified search without lunr.js dependency
    searchIndex = {
        search: function(query) {
            const results = [];
            const queryLower = query.toLowerCase();
            const queryWords = queryLower.split(/\s+/).filter(word => word.length > 2);
            
            searchData.forEach(page => {
                let score = 0;
                const contentLower = page.content.toLowerCase();
                const titleLower = page.title.toLowerCase();
                
                queryWords.forEach(word => {
                    // Title matches get higher score
                    const titleMatches = (titleLower.match(new RegExp(word, 'g')) || []).length;
                    score += titleMatches * 10;
                    
                    // Content matches
                    const contentMatches = (contentLower.match(new RegExp(word, 'g')) || []).length;
                    score += contentMatches;
                    
                    // Heading matches get medium score
                    page.headings.forEach(heading => {
                        if (heading.text.toLowerCase().includes(word)) {
                            score += 5;
                        }
                    });
                    
                    // Keyword matches get high score
                    page.keywords.forEach(keyword => {
                        if (keyword.toLowerCase().includes(word)) {
                            score += 8;
                        }
                    });
                });
                
                if (score > 0) {
                    results.push({
                        ref: page.id,
                        score: score,
                        page: page
                    });
                }
            });
            
            return results.sort((a, b) => b.score - a.score).slice(0, 10);
        }
    };
}

// ===================================
// Search Interface
// ===================================

function initializeSearch() {
    const quickSearch = document.getElementById('quick-search');
    const searchBtn = document.getElementById('search-btn');
    
    if (quickSearch) {
        // Real-time search as user types
        let searchTimeout;
        quickSearch.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                performQuickSearch(this.value);
            }, 300);
        });
        
        // Enter key search
        quickSearch.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = quickSearch ? quickSearch.value : '';
            performSearch(query);
        });
    }
    
    // Create search results dropdown
    createSearchDropdown();
}

function createSearchDropdown() {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer) return;
    
    const dropdown = document.createElement('div');
    dropdown.id = 'search-dropdown';
    dropdown.className = 'search-dropdown';
    dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        border: 1px solid #e0e0e0;
        border-top: none;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        display: none;
    `;
    
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(dropdown);
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchContainer.contains(e.target)) {
            dropdown.style.display = 'none';
        }
    });
}

function performQuickSearch(query) {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown || !query.trim() || query.length < 2) {
        dropdown.style.display = 'none';
        return;
    }
    
    if (!searchIndex) {
        dropdown.innerHTML = '<div style="padding: 1rem; color: #666;">Building search index...</div>';
        dropdown.style.display = 'block';
        return;
    }
    
    const results = searchIndex.search(query);
    displayQuickResults(results, query);
}

function displayQuickResults(results, query) {
    const dropdown = document.getElementById('search-dropdown');
    if (!dropdown) return;
    
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div style="padding: 1rem; color: #666; text-align: center;">
                No results found for "${query}"
            </div>
        `;
    } else {
        const resultsHTML = results.map(result => {
            const excerpt = createExcerpt(result.page.content, query);
            return `
                <div class="search-result-item" style="
                    padding: 0.75rem 1rem;
                    border-bottom: 1px solid #f0f0f0;
                    cursor: pointer;
                    transition: background-color 0.2s;
                " onmouseover="this.style.backgroundColor='#f8f9fa'" 
                   onmouseout="this.style.backgroundColor='white'"
                   onclick="navigateToResult('${result.page.url}')">
                    <div style="font-weight: 600; color: #2c3e50; margin-bottom: 0.25rem;">
                        ${highlightQuery(result.page.title, query)}
                    </div>
                    <div style="font-size: 0.85rem; color: #666; line-height: 1.4;">
                        ${highlightQuery(excerpt, query)}
                    </div>
                    <div style="font-size: 0.75rem; color: #999; margin-top: 0.25rem;">
                        ${result.page.url}
                    </div>
                </div>
            `;
        }).join('');
        
        dropdown.innerHTML = resultsHTML + `
            <div style="padding: 0.5rem 1rem; background: #f8f9fa; text-align: center;">
                <button onclick="performFullSearch('${query}')" style="
                    background: none; border: none; color: #3498db; 
                    cursor: pointer; font-size: 0.85rem;
                ">
                    See all results for "${query}"
                </button>
            </div>
        `;
    }
    
    dropdown.style.display = 'block';
}

function createExcerpt(content, query, maxLength = 120) {
    const queryLower = query.toLowerCase();
    const contentLower = content.toLowerCase();
    const queryIndex = contentLower.indexOf(queryLower);
    
    if (queryIndex === -1) {
        return content.substring(0, maxLength) + (content.length > maxLength ? '...' : '');
    }
    
    const start = Math.max(0, queryIndex - 40);
    const end = Math.min(content.length, start + maxLength);
    
    let excerpt = content.substring(start, end);
    if (start > 0) excerpt = '...' + excerpt;
    if (end < content.length) excerpt = excerpt + '...';
    
    return excerpt;
}

function highlightQuery(text, query) {
    if (!query) return text;
    
    const queryWords = query.toLowerCase().split(/\s+/);
    let highlightedText = text;
    
    queryWords.forEach(word => {
        if (word.length > 2) {
            const regex = new RegExp(`(${escapeRegExp(word)})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<mark>$1</mark>');
        }
    });
    
    return highlightedText;
}

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===================================
// Navigation Functions
// ===================================

function navigateToResult(url) {
    const dropdown = document.getElementById('search-dropdown');
    if (dropdown) {
        dropdown.style.display = 'none';
    }
    
    if (url !== window.location.pathname) {
        window.location.href = url;
    }
}

function performSearch(query) {
    // For full search, navigate to dedicated search page
    const searchUrl = new URL('../../search.html', window.location.href);
    searchUrl.searchParams.set('q', query);
    window.location.href = searchUrl.toString();
}

function performFullSearch(query) {
    performSearch(query);
}

// ===================================
// Search Analytics
// ===================================

function trackSearch(query, resultCount) {
    const searchHistory = JSON.parse(localStorage.getItem('search-history') || '[]');
    
    searchHistory.unshift({
        query: query,
        timestamp: Date.now(),
        resultCount: resultCount,
        page: window.location.pathname
    });
    
    // Keep only last 50 searches
    searchHistory.splice(50);
    
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
}

function getPopularSearches() {
    const searchHistory = JSON.parse(localStorage.getItem('search-history') || '[]');
    const queryCount = {};
    
    searchHistory.forEach(search => {
        queryCount[search.query] = (queryCount[search.query] || 0) + 1;
    });
    
    return Object.entries(queryCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([query, count]) => ({ query, count }));
}

// ===================================
// Export Functions
// ===================================

window.SearchSystem = {
    buildSearchIndex,
    performSearch,
    trackSearch,
    getPopularSearches
};