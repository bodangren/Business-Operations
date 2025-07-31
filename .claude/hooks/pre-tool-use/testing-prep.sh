#!/bin/bash

# Claude Code Pre-Tool-Use Hook: Testing Preparation
# Prepares Chrome-MCP testing environment for component changes

set -e

TOOL_NAME="$1"
shift
ARGS="$@"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function
log() {
    echo "[HOOK] Testing Prep: $1" >&2
}

# Extract file path from tool arguments
extract_file_path() {
    local args="$1"
    echo "$args" | grep -oE '/[^[:space:]]+\.tsx?' | head -1
}

# Check if development server is running
check_dev_server() {
    curl -s "http://localhost:3000" >/dev/null 2>&1
}

# Determine component category and test route
get_test_route() {
    local file_path="$1"
    
    case "$file_path" in
        *accounting*)
            echo "/debug/accounting"
            ;;
        *business-simulations*)
            echo "/debug/business-simulations"
            ;;
        *charts*)
            echo "/debug/charts"
            ;;
        *drag-drop*)
            echo "/debug/drag-drop-exercises"
            ;;
        *exercises*)
            echo "/debug/exercises"
            ;;
        *financial-reports*)
            echo "/debug/financial-reports"
            ;;
        *spreadsheet*)
            echo "/debug/spreadsheet"
            ;;
        *unit*)
            echo "/units/unit01-smart-ledger/intro"
            ;;
        *)
            echo "/debug"
            ;;
    esac
}

# Start development server if not running
ensure_dev_server() {
    if ! check_dev_server; then
        log "Development server not running, attempting to start..."
        
        cd "$PROJECT_ROOT/bus-math-nextjs"
        
        # Check if npm install is needed
        if [ ! -d "node_modules" ]; then
            log "Installing dependencies..."
            npm install >&2
        fi
        
        # Start dev server in background
        log "Starting development server..."
        nohup npm run dev > /tmp/next-dev.log 2>&1 &
        
        # Wait for server to be ready
        local retries=0
        while ! check_dev_server && [ $retries -lt 30 ]; do
            sleep 1
            retries=$((retries + 1))
        done
        
        if check_dev_server; then
            log "Development server started successfully"
        else
            log "Failed to start development server"
            return 1
        fi
    else
        log "Development server already running"
    fi
}

# Prepare testing environment state
prepare_test_state() {
    local test_route="$1"
    
    # Store test route for post-hook usage
    echo "$test_route" > /tmp/claude-test-route
    
    # Store timestamp for later comparison
    date +%s > /tmp/claude-test-timestamp
    
    log "Prepared test route: $test_route"
}

# Main logic
case "$TOOL_NAME" in
    "Write"|"Edit"|"MultiEdit")
        FILE_PATH=$(extract_file_path "$ARGS")
        
        if [ -n "$FILE_PATH" ] && [[ "$FILE_PATH" =~ \.tsx?$ ]]; then
            log "Preparing testing environment for: $FILE_PATH"
            
            # Ensure development environment is ready
            if ensure_dev_server; then
                TEST_ROUTE=$(get_test_route "$FILE_PATH")
                prepare_test_state "$TEST_ROUTE"
                
                log "Testing environment prepared successfully"
                log "Component will be tested at: http://localhost:3000$TEST_ROUTE"
            else
                log "Warning: Could not prepare testing environment"
            fi
        fi
        ;;
esac

# Always allow the original tool to proceed
exit 0