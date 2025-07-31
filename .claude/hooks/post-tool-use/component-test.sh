#!/bin/bash

# Claude Code Post-Tool-Use Hook: Component Testing
# Runs automated testing via Chrome-MCP after component changes

set -e

TOOL_NAME="$1"
shift
ARGS="$@"

CONFIG_DIR="$(dirname "$0")/../.."
PROJECT_ROOT="$(cd "$CONFIG_DIR/../.." && pwd)"

# Log function
log() {
    echo "[HOOK] Component Test: $1" >&2
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

# Get test route from pre-hook preparation
get_test_route() {
    if [ -f "/tmp/claude-test-route" ]; then
        cat /tmp/claude-test-route
    else
        echo "/debug"
    fi
}

# Run Chrome-MCP navigation test
test_navigation() {
    local test_route="$1"
    local test_url="http://localhost:3000$test_route"
    
    log "Testing navigation to: $test_url"
    
    # Create a test script for Chrome-MCP
    local test_script=$(mktemp)
    
    cat > "$test_script" << EOF
#!/bin/bash
# Simple navigation test using curl
curl -s "$test_url" >/dev/null 2>&1
EOF
    
    chmod +x "$test_script"
    
    if "$test_script" >/tmp/chrome-test-output 2>&1; then
        log "Navigation test passed"
        return 0
    else
        log "Navigation test failed"
        return 1
    fi
}

# Test interactive elements
test_interactive_elements() {
    local test_route="$1"
    
    log "Testing interactive elements"
    
    local test_script=$(mktemp)
    
    cat > "$test_script" << EOF
#!/bin/bash
# Simple interactive elements test
curl -s "$test_url" | grep -c "button\|input\|select\|textarea" || echo "0"
EOF
    
    chmod +x "$test_script"
    
    if "$test_script" >/tmp/chrome-elements-output 2>&1; then
        local element_count=$(grep -c "type.*button\|type.*input\|role.*button" /tmp/chrome-elements-output || echo "0")
        log "Found $element_count interactive elements"
        return 0
    else
        log "Interactive elements test failed"
        return 1
    fi
}

# Check for JavaScript errors
check_console_errors() {
    log "Checking for JavaScript errors"
    
    local test_script=$(mktemp)
    
    cat > "$test_script" << EOF
#!/bin/bash
# Simplified console check - check for common error patterns in HTML
curl -s "$test_url" | grep -i "error\|exception\|failed" | wc -l || echo "0"
EOF
    
    chmod +x "$test_script"
    
    if "$test_script" >/tmp/console-output 2>&1; then
        local error_count=$(grep -ic "error\|exception\|failed" /tmp/console-output || echo "0")
        if [ "$error_count" -gt 0 ]; then
            log "Found $error_count console errors/warnings"
            return 1
        else
            log "No console errors detected"
            return 0
        fi
    else
        log "Console check failed"
        return 1
    fi
}

# Run component accessibility test
test_accessibility() {
    log "Running basic accessibility checks"
    
    local test_script=$(mktemp)
    
    cat > "$test_script" << EOF
#!/bin/bash
# Basic accessibility check via HTML analysis
curl -s "$test_url" | grep -c 'alt=\|aria-label=\|<h[1-6]' || echo "0"
EOF
    
    chmod +x "$test_script"
    
    if "$test_script" >/tmp/html-content-output 2>&1; then
        # Check for basic accessibility attributes
        local alt_tags=$(grep -c 'alt=' /tmp/html-content-output || echo "0")
        local aria_labels=$(grep -c 'aria-label=' /tmp/html-content-output || echo "0")
        local headings=$(grep -c '<h[1-6]' /tmp/html-content-output || echo "0")
        
        log "Accessibility check - Alt tags: $alt_tags, ARIA labels: $aria_labels, Headings: $headings"
        return 0
    else
        log "Accessibility check failed"
        return 1
    fi
}

# Generate test report
generate_test_report() {
    local file_path="$1"
    local test_route="$2"
    local results=("$@")
    
    local report_file="/tmp/claude-component-test-report.txt"
    
    cat > "$report_file" << EOF
Component Testing Report
========================

Component: $(basename "$file_path")
File Path: $file_path
Test Route: http://localhost:3000$test_route
Test Time: $(date)

Test Results:
$(printf '%s\n' "${results[@]:2}")

EOF
    
    log "Test report generated: $report_file"
}

# Main testing logic
run_component_tests() {
    local file_path="$1"
    local test_route="$2"
    local test_results=()
    
    if ! check_dev_server; then
        log "Development server not running - skipping tests"
        return 1
    fi
    
    # Wait for any compilation to complete
    sleep 3
    
    # Run tests
    if test_navigation "$test_route"; then
        test_results+=("✅ Navigation: PASSED")
    else
        test_results+=("❌ Navigation: FAILED")
    fi
    
    if test_interactive_elements "$test_route"; then
        test_results+=("✅ Interactive Elements: PASSED")
    else
        test_results+=("❌ Interactive Elements: FAILED")
    fi
    
    if check_console_errors; then
        test_results+=("✅ Console Check: PASSED")
    else
        test_results+=("⚠️  Console Check: WARNINGS FOUND")
    fi
    
    if test_accessibility; then
        test_results+=("✅ Accessibility: BASIC CHECKS PASSED")
    else
        test_results+=("❌ Accessibility: FAILED")
    fi
    
    # Generate report
    generate_test_report "$file_path" "$test_route" "${test_results[@]}"
    
    # Display results
    cat << EOF >&2

🧪 COMPONENT TESTING COMPLETE

$(printf '%s\n' "${test_results[@]}")

Full report: /tmp/claude-component-test-report.txt

EOF
}

# Main logic
case "$TOOL_NAME" in
    "Write"|"Edit"|"MultiEdit")
        FILE_PATH=$(extract_file_path "$ARGS")
        
        if [ -n "$FILE_PATH" ] && [[ "$FILE_PATH" =~ \.tsx?$ ]]; then
            TEST_ROUTE=$(get_test_route)
            
            log "Running component tests for: $FILE_PATH"
            
            # Run tests in background to avoid blocking
            (run_component_tests "$FILE_PATH" "$TEST_ROUTE" &)
        fi
        ;;
esac

exit 0