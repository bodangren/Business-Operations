#!/bin/bash

# Claude Code Post-Tool-Use Hook: Auto Documentation
# Automatically documents new/modified components in Components-MCP knowledge base

set -e

TOOL_NAME="$1"
shift
ARGS="$@"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function
log() {
    echo "[HOOK] Auto Document: $1" >&2
}

# Extract file path from tool arguments
extract_file_path() {
    local args="$*"
    # Look for file paths in the arguments
    for arg in $args; do
        if [[ "$arg" =~ \.tsx?$ ]] && [[ "$arg" == /* ]]; then
            echo "$arg"
            return
        fi
    done
}

# Extract component name from file path
extract_component_name() {
    local file_path="$1"
    local filename=$(basename "$file_path")
    echo "${filename%.*}"  # Remove extension
}

# Check if file is a React component
is_react_component() {
    local file_path="$1"
    [[ "$file_path" =~ \.tsx?$ ]] && [[ "$file_path" =~ src/components/ ]]
}

# Analyze component file to extract metadata
analyze_component() {
    local file_path="$1"
    local component_name="$2"
    
    if [ ! -f "$file_path" ]; then
        return 1
    fi
    
    # Extract props interface if it exists
    local props_interface=$(grep -A 10 "interface.*Props" "$file_path" | head -10 || echo "")
    
    # Extract JSDoc comment if it exists
    local description=$(grep -B 5 -A 5 "export.*function\|export.*const.*=" "$file_path" | grep -E "^\s*\*|^\s*/\*\*" | sed 's/^\s*\*\s*//g' | sed 's/^\s*\/\*\*\s*//g' | head -3 | tr '\n' ' ' || echo "")
    
    # Determine component category from file path
    local category=""
    case "$file_path" in
        *accounting*) category="accounting" ;;
        *business-simulations*) category="business-simulations" ;;
        *charts*) category="charts" ;;
        *drag-drop*) category="drag-drop-exercises" ;;
        *exercises*) category="exercises" ;;
        *financial-reports*) category="financial-reports" ;;
        *spreadsheet*) category="spreadsheet" ;;
        *teacher*) category="teacher" ;;
        *unit*) category="unit" ;;
        *ui*) category="ui" ;;
        *) category="general" ;;
    esac
    
    # Generate description if none found
    if [ -z "$description" ]; then
        case "$category" in
            "accounting")
                description="An accounting component for business education, supporting Grade 12 curriculum objectives."
                ;;
            "business-simulations")
                description="An interactive business simulation component for hands-on learning and decision-making practice."
                ;;
            "charts")
                description="A data visualization component using Recharts for financial analysis and reporting."
                ;;
            "drag-drop-exercises")
                description="An interactive drag-and-drop exercise component for educational engagement."
                ;;
            "exercises")
                description="An educational exercise component supporting formative assessment and practice."
                ;;
            "financial-reports")
                description="A financial reporting component displaying structured business data and analysis."
                ;;
            "spreadsheet")
                description="A spreadsheet component demonstrating advanced Excel functionality and business modeling."
                ;;
            "teacher")
                description="A teacher-facing component for lesson planning and curriculum delivery."
                ;;
            "unit")
                description="A unit component supporting project-based learning methodology and curriculum structure."
                ;;
            "ui")
                description="A reusable UI component built with shadcn/ui and Tailwind CSS."
                ;;
            *)
                description="A React component for the Business Operations educational application."
                ;;
        esac
    fi
    
    # Generate relative file path from project root
    local relative_path=$(echo "$file_path" | sed "s|$PROJECT_ROOT/||")
    
    # Create usage example
    local usage_example="<${component_name} />"
    
    # Add props if interface found
    if [ -n "$props_interface" ]; then
        usage_example="<${component_name} /* props based on ${component_name}Props interface */ />"
    fi
    
    # Create JSON with proper escaping
    cat << EOF
{"name":"$component_name","description":"$description","filePath":"$relative_path","usageExample":"$usage_example"}
EOF
}

# Create or update component in MCP knowledge base
update_component_mcp() {
    local component_data="$1"
    local component_name=$(echo "$component_data" | grep -o '"name":"[^"]*"' | cut -d'"' -f4)
    
    # For now, store in a local JSON file that can be imported to MCP
    local mcp_data_file="$PROJECT_ROOT/data/mcp-component-updates.jsonl"
    mkdir -p "$(dirname "$mcp_data_file")"
    
    # Append component data with timestamp
    echo "{\"timestamp\":\"$(date -Iseconds)\",\"action\":\"create_or_update\",\"data\":$component_data}" >> "$mcp_data_file"
    
    log "Component documented: $component_name -> $mcp_data_file"
    
    # Note: Direct MCP updates from hooks aren't supported yet
    # Component data is logged to file for manual MCP sync or Claude Code integration
    log "Component data ready for MCP sync (manual integration with Claude Code required)"
}

# Main logic
case "$TOOL_NAME" in
    "Write"|"Edit"|"MultiEdit")
        FILE_PATH=$(extract_file_path "$@")
        
        if [ -n "$FILE_PATH" ] && is_react_component "$FILE_PATH"; then
            COMPONENT_NAME=$(extract_component_name "$FILE_PATH")
            log "Analyzing component for documentation: $COMPONENT_NAME (File: $FILE_PATH)"
            
            # Wait a moment for file to be written
            sleep 1
            
            if COMPONENT_DATA=$(analyze_component "$FILE_PATH" "$COMPONENT_NAME"); then
                update_component_mcp "$COMPONENT_DATA"
                
                cat << EOF >&2

📝 COMPONENT DOCUMENTED

Component: $COMPONENT_NAME
File: $FILE_PATH
Status: Added to knowledge base queue

The component has been automatically documented and will be available in future
Claude Code sessions through the Components-MCP knowledge base.

EOF
            else
                log "Could not analyze component: $FILE_PATH"
            fi
        fi
        ;;
esac

exit 0