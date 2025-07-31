#!/bin/bash

# Claude Code User-Prompt-Submit Hook: Context Injection
# Injects relevant knowledge base context based on user queries

set -e

USER_PROMPT="$1"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function (using stderr to avoid interfering with context injection)
log() {
    echo "[HOOK] Context Inject: $1" >&2
}

# Check if prompt is asking about components
is_component_query() {
    local prompt="$1"
    echo "$prompt" | grep -iE "\b(component|ui|chart|accounting|business|simulation|exercise|financial|spreadsheet|drag.?drop|T.?Account|journal|trial.?balance|income.?statement|balance.?sheet|cash.?flow|react|tsx|create|build|add|implement|develop)\b" > /dev/null
}

# Check if prompt is asking about testing
is_testing_query() {
    local prompt="$1"
    echo "$prompt" | grep -iE "\b(test|testing|validate|check|verify|screenshot|visual|regression|accessibility|performance|error|debug|console)\b" > /dev/null
}

# Check if prompt is asking about styling
is_style_query() {
    local prompt="$1"
    echo "$prompt" | grep -iE "\b(style|styling|css|tailwind|design|color|theme|responsive|mobile|desktop|layout|ui|ux)\b" > /dev/null
}

# Generate component context
generate_component_context() {
    local categories=(
        "accounting:T-accounts, journal entries, trial balance"
        "business-simulations:Interactive business games and decision-making"
        "charts:Data visualization with Recharts (bar, line, pie, doughnut)"
        "drag-drop-exercises:Educational matching and categorization activities"
        "exercises:Comprehension checks, fill-in-the-blank, journal entry building"
        "financial-reports:Income statements, balance sheets, cash flow statements"
        "spreadsheet:Excel-like functionality and templates"
        "teacher:Lesson plans and curriculum components"
        "unit:Unit structure and project-based learning components"
        "ui:shadcn/ui components (buttons, cards, inputs, navigation)"
    )
    
    echo -e "\n🧩 AVAILABLE COMPONENTS BY CATEGORY:\n"
    for category in "${categories[@]}"; do
        local name=$(echo "$category" | cut -d: -f1)
        local desc=$(echo "$category" | cut -d: -f2)
        echo "• $name: $desc"
    done
    
    echo -e "\nQuery the knowledge base: claude --tool mcp__components-mcp__get_components"
}

# Generate testing context
generate_testing_context() {
    echo -e "\n🧪 TESTING CAPABILITIES:\n"
    echo "• Browser Navigation: chrome_navigate, chrome_get_web_content"
    echo "• Interactive Testing: chrome_get_interactive_elements, chrome_click_element"
    echo "• Visual Testing: chrome_screenshot (desktop & mobile viewports)"
    echo "• Console Monitoring: chrome_console (errors, warnings, logs)"
    echo "• Network Analysis: chrome_network_capture_start/stop"
    echo "• Accessibility: Basic ARIA and semantic HTML validation"
    
    echo -e "\nDev Server: http://localhost:3000"
    echo "Test Routes: /debug/[category], /units/[unit]/intro"
}

# Generate style context
generate_style_context() {
    echo -e "\n🎨 DESIGN SYSTEM:\n"
    echo "• Framework: Tailwind CSS v4 with shadcn/ui components"
    echo "• Color Scheme: Primary, secondary, muted, accent, destructive"
    echo "• Chart Colors: chart-1 through chart-5"
    echo "• Responsive: Mobile-first design with desktop breakpoints"
    echo "• Accessibility: ARIA labels, semantic HTML, keyboard navigation"
    
    echo -e "\nQuery style guide: claude --tool mcp__components-mcp__get_style_guide"
}

# Generate educational context
generate_educational_context() {
    echo -e "\n📚 EDUCATIONAL CONTEXT:\n"
    echo "• Course: Grade 12 Math for Business Operations"
    echo "• Methodology: Project-Based Learning (PBL) with authentic audiences"
    echo "• Excel Focus: Advanced Excel integration (VBA, Power Query, Analysis ToolPak)"
    echo "• Assessment: 60% formative, 40% summative with industry-standard rubrics"
    echo "• 8 Units: Smart Ledger → Month-End Wizard → Three-Statement Storyboard → Data-Driven Café → PayDay Simulator → PriceLab Challenge → Asset & Inventory Tracker → Year-1 Startup Model"
}

# Main context injection logic
inject_context() {
    local prompt="$1"
    local context_added=false
    
    # Component-related queries
    if is_component_query "$prompt"; then
        generate_component_context
        context_added=true
    fi
    
    # Testing-related queries
    if is_testing_query "$prompt"; then
        generate_testing_context
        context_added=true
    fi
    
    # Style-related queries
    if is_style_query "$prompt"; then
        generate_style_context
        context_added=true
    fi
    
    # Always include educational context for this project
    if [ "$context_added" = true ]; then
        generate_educational_context
        
        echo -e "\n📋 QUICK REFERENCE:"
        echo "• Components: mcp__components-mcp__get_components"
        echo "• Style Guide: mcp__components-mcp__get_style_guide"
        echo "• Browser Testing: Chrome-MCP tools (chrome_navigate, chrome_screenshot, etc.)"
        echo "• Dev Server: Must be running at http://localhost:3000 for testing"
        
        echo -e "\n---\n"
    fi
}

# Main execution
if [ -n "$USER_PROMPT" ]; then
    log "Analyzing user prompt for context injection"
    inject_context "$USER_PROMPT"
fi

# Always exit successfully to allow prompt to proceed
exit 0