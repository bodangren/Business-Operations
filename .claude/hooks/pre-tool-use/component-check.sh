#!/bin/bash

# Claude Code Pre-Tool-Use Hook: Component Duplication Check
# Prevents creating duplicate components by checking Components-MCP knowledge base

set -e

TOOL_NAME="$1"
shift
ARGS="$@"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function
log() {
    echo "[HOOK] Component Check: $1" >&2
}

# Extract file path from Write/Edit tool arguments
extract_file_path() {
    local args="$1"
    echo "$args" | grep -oE '/[^[:space:]]+\.tsx?' | head -1
}

# Extract component name from file path
extract_component_name() {
    local file_path="$1"
    basename "$file_path" .tsx | basename .ts
}

# Check if file is a React component
is_react_component() {
    local file_path="$1"
    [[ "$file_path" =~ \.tsx?$ ]] && [[ "$file_path" =~ src/components/ ]]
}

# Query Components-MCP for existing component (simplified for hook context)
check_existing_component() {
    local component_name="$1"
    
    # Use a static list of known components since MCP calls don't work in hook context
    # This will be enhanced when Claude Code provides better hook-MCP integration
    local known_components=(
        "Footer:footer component"
        "Header:header component" 
        "NavigationSidebar:navigation sidebar"
        "UnitSidebar:unit navigation sidebar"
        "JournalEntry:journal entry display"
        "TAccount:T-account component"
        "TrialBalance:trial balance display"
        "BudgetBalancer:budget simulation"
        "CashFlowChallenge:cash flow simulation"
        "InventoryManager:inventory simulation"
        "LemonadeStand:lemonade business simulation"
        "StartupJourney:startup simulation"
        "BarChart:bar chart visualization"
        "BreakEvenChart:break-even analysis"
        "DoughnutChart:doughnut chart"
        "FinancialDashboard:financial dashboard"
        "LineChart:line chart"
        "PieChart:pie chart"
        "IncomeStatement:income statement"
        "BalanceSheet:balance sheet"
        "CashFlowStatement:cash flow statement"
        "AccountCategorization:account sorting"
        "ComprehensionCheck:quiz component"
        "DragAndDrop:drag-drop exercise"
        "FillInTheBlank:fill-in-blank exercise"
        "SpreadsheetTemplates:spreadsheet templates"
        "ReflectionJournal:reflection journal"
    )
    
    local matches=""
    for component in "${known_components[@]}"; do
        local name=$(echo "$component" | cut -d: -f1)
        local desc=$(echo "$component" | cut -d: -f2)
        
        if [[ "$name" == *"$component_name"* ]] || [[ "$component_name" == *"$name"* ]] || [[ "${name,,}" == "${component_name,,}" ]]; then
            if [ -z "$matches" ]; then
                matches="Found similar component: $name ($desc)"
            else
                matches="$matches\nFound similar component: $name ($desc)"
            fi
        fi
    done
    
    echo -e "$matches"
}

# Main logic
case "$TOOL_NAME" in
    "Write"|"MultiEdit")
        FILE_PATH=$(extract_file_path "$ARGS")
        
        if [ -n "$FILE_PATH" ] && is_react_component "$FILE_PATH"; then
            COMPONENT_NAME=$(extract_component_name "$FILE_PATH")
            log "Checking for existing component: $COMPONENT_NAME"
            
            EXISTING_COMPONENTS=$(check_existing_component "$COMPONENT_NAME")
            
            if [ -n "$EXISTING_COMPONENTS" ]; then
                log "Found potentially similar existing components!"
                
                cat << EOF >&2

⚠️  DUPLICATE COMPONENT WARNING ⚠️

You're about to create: $COMPONENT_NAME
But these similar components already exist:

$EXISTING_COMPONENTS

Consider:
1. Using an existing component instead
2. Extending an existing component
3. Choosing a more specific name

Query the knowledge base with:
claude --tool mcp__components-mcp__get_components

EOF
                
                # Don't block creation, but warn heavily
                read -p "Continue anyway? (y/N): " -r REPLY
                if [[ ! $REPLY =~ ^[Yy]$ ]]; then
                    log "Component creation cancelled by user"
                    exit 1
                fi
            fi
        fi
        ;;
esac

# Allow the tool to proceed
exit 0