#!/bin/bash

# Claude Code Pre-Tool-Use Hook: Knowledge Base Query
# Intercepts file searches and provides Components-MCP knowledge base alternatives

set -e

TOOL_NAME="$1"
shift
ARGS="$@"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function
log() {
    echo "[HOOK] Knowledge Base Query: $1" >&2
}

# Check if this is a component-related search
is_component_search() {
    local search_term="$1"
    echo "$search_term" | grep -iE "\b(component|tsx|react|ui|chart|accounting|business|simulation|exercise|financial|spreadsheet|drag.?drop|T.?Account|journal|trial.?balance|income.?statement|balance.?sheet|cash.?flow)\b" > /dev/null
}

# Query Components-MCP for relevant information
query_components_mcp() {
    local search_term="$1"
    local mcp_result=""
    
    # Try to get components that match the search term
    if command -v claude >/dev/null 2>&1; then
        # Use Claude CLI to query MCP if available
        mcp_result=$(claude --tool mcp__components-mcp__get_components 2>/dev/null || echo "")
    fi
    
    if [ -n "$mcp_result" ]; then
        echo "$mcp_result" | grep -i "$search_term" | head -5
    fi
}

# Main logic
case "$TOOL_NAME" in
    "Read"|"Glob"|"Grep")
        # Extract search pattern from arguments
        SEARCH_PATTERN=""
        for arg in $ARGS; do
            if [[ "$arg" =~ ^[^-] ]] && [[ "$arg" != "src/"* ]] && [[ "$arg" != "/"* ]]; then
                SEARCH_PATTERN="$arg"
                break
            fi
        done
        
        if [ -n "$SEARCH_PATTERN" ] && is_component_search "$SEARCH_PATTERN"; then
            log "Detected component search for: $SEARCH_PATTERN"
            
            # Query knowledge base
            KNOWLEDGE_BASE_RESULT=$(query_components_mcp "$SEARCH_PATTERN")
            
            if [ -n "$KNOWLEDGE_BASE_RESULT" ]; then
                log "Found matching components in knowledge base:"
                echo "$KNOWLEDGE_BASE_RESULT" >&2
                
                # Suggest using MCP instead
                cat << EOF >&2

💡 SUGGESTION: Instead of searching the filesystem, consider using these documented components:
$KNOWLEDGE_BASE_RESULT

Use: claude --tool mcp__components-mcp__get_components
Or search for specific component: claude --tool mcp__components-mcp__get_components --id <component_id>

EOF
            fi
        fi
        ;;
esac

# Always allow the original tool to proceed
exit 0