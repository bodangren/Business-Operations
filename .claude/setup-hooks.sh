#!/bin/bash

# Claude Code Hooks Setup Script
# Sets up the complete hooks integration system for Components-MCP and Chrome-MCP

set -e

PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
CLAUDE_DIR="$PROJECT_ROOT/.claude"
HOOKS_DIR="$CLAUDE_DIR/hooks"

echo "🔧 Setting up Claude Code Hooks Integration"
echo "Project: $PROJECT_ROOT"
echo "Claude Dir: $CLAUDE_DIR"
echo ""

# Create required directories
echo "📁 Creating directory structure..."
mkdir -p "$HOOKS_DIR"/{pre-tool-use,post-tool-use,user-prompt-submit}
mkdir -p "$CLAUDE_DIR/screenshots"
mkdir -p "$PROJECT_ROOT/data"

# Verify hook scripts exist and are executable
echo "🔍 Verifying hook scripts..."

HOOK_SCRIPTS=(
    "pre-tool-use/knowledge-base-query.sh"
    "pre-tool-use/component-check.sh"
    "pre-tool-use/testing-prep.sh"
    "post-tool-use/auto-document.sh"
    "post-tool-use/component-test.sh"
    "post-tool-use/visual-test.sh"
    "user-prompt-submit/context-inject.sh"
)

for script in "${HOOK_SCRIPTS[@]}"; do
    script_path="$HOOKS_DIR/$script"
    if [ -f "$script_path" ]; then
        chmod +x "$script_path"
        echo "✅ $script"
    else
        echo "❌ Missing: $script"
        exit 1
    fi
done

# Verify config.json exists
if [ -f "$HOOKS_DIR/config.json" ]; then
    echo "✅ config.json"
else
    echo "❌ Missing: config.json"
    exit 1
fi

# Check dependencies
echo ""
echo "🔍 Checking dependencies..."

# Check for Node.js and npm
if command -v node >/dev/null 2>&1; then
    echo "✅ Node.js $(node --version)"
else
    echo "❌ Node.js not found - required for Next.js development"
    exit 1
fi

if command -v npm >/dev/null 2>&1; then
    echo "✅ npm $(npm --version)"
else
    echo "❌ npm not found - required for package management"
    exit 1
fi

# Check for curl (for server health checks)
if command -v curl >/dev/null 2>&1; then
    echo "✅ curl available"
else
    echo "❌ curl not found - required for server health checks"
    exit 1
fi

# Check for jq (for JSON processing)
if command -v jq >/dev/null 2>&1; then
    echo "✅ jq available"
else
    echo "⚠️  jq not found - recommended for JSON processing (hooks will work with basic alternatives)"
fi

# Check for bc (for calculations)
if command -v bc >/dev/null 2>&1; then
    echo "✅ bc available"
else
    echo "⚠️  bc not found - recommended for numerical calculations (hooks will work with alternatives)"
fi

# Test MCP server connectivity
echo ""
echo "🔍 Testing MCP server connectivity..."

# Test Components-MCP
echo "Testing Components-MCP server..."
if timeout 5s bash -c 'claude --tool mcp__components-mcp__get_components >/dev/null 2>&1' 2>/dev/null; then
    echo "✅ Components-MCP server responding"
else
    echo "⚠️  Components-MCP server not responding (may need to be started)"
fi

# Test Chrome-MCP
echo "Testing Chrome-MCP server..."
if timeout 5s bash -c 'claude --tool mcp__chrome-mcp-stdio__get_windows_and_tabs >/dev/null 2>&1' 2>/dev/null; then
    echo "✅ Chrome-MCP server responding"
else
    echo "⚠️  Chrome-MCP server not responding (may need Chrome extension and server setup)"
fi

# Setup development environment
echo ""
echo "🚀 Setting up development environment..."

cd "$PROJECT_ROOT/bus-math-nextjs"

# Check if dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing Next.js dependencies..."
    npm install
else
    echo "✅ Next.js dependencies installed"
fi

# Test development server startup
echo "Testing development server..."
if curl -s "http://localhost:3000" >/dev/null 2>&1; then
    echo "✅ Development server already running"
else
    echo "📡 Starting development server..."
    
    # Start server in background and test
    nohup npm run dev > /tmp/next-dev-setup.log 2>&1 &
    DEV_PID=$!
    
    # Wait for server to start
    echo -n "Waiting for server startup"
    for i in {1..30}; do
        if curl -s "http://localhost:3000" >/dev/null 2>&1; then
            echo ""
            echo "✅ Development server started (PID: $DEV_PID)"
            break
        fi
        echo -n "."
        sleep 1
    done
    
    if ! curl -s "http://localhost:3000" >/dev/null 2>&1; then
        echo ""
        echo "❌ Failed to start development server"
        echo "Check logs: /tmp/next-dev-setup.log"
        exit 1
    fi
fi

# Create test files for hook validation
echo ""
echo "🧪 Creating test environment..."

# Create a test component update file for MCP
TEST_MCP_FILE="$PROJECT_ROOT/data/mcp-component-updates.jsonl"
touch "$TEST_MCP_FILE"
echo "✅ MCP update tracking file: $TEST_MCP_FILE"

# Create screenshot directory
mkdir -p "$CLAUDE_DIR/screenshots"
echo "✅ Screenshots directory: $CLAUDE_DIR/screenshots"

# Create hook status file
HOOK_STATUS_FILE="$CLAUDE_DIR/hook-status.json"
cat > "$HOOK_STATUS_FILE" << EOF
{
  "setup_date": "$(date -Iseconds)",
  "version": "1.0",
  "project_root": "$PROJECT_ROOT",
  "hooks_enabled": true,
  "mcp_servers": {
    "components-mcp": "configured",
    "chrome-mcp": "configured"
  },
  "development_server": "http://localhost:3000",
  "status": "ready"
}
EOF

echo "✅ Hook status file: $HOOK_STATUS_FILE"

# Final verification
echo ""
echo "🔍 Final verification..."

# Test a simple hook execution
if timeout 10s bash -c "echo 'test component query' | $HOOKS_DIR/user-prompt-submit/context-inject.sh >/dev/null 2>&1"; then
    echo "✅ Hook execution test passed"
else
    echo "⚠️  Hook execution test failed (hooks may still work in Claude Code context)"
fi

# Display setup summary
echo ""
echo "🎉 SETUP COMPLETE!"
echo ""
echo "📋 Summary:"
echo "• Hooks Directory: $HOOKS_DIR"
echo "• Configuration: $HOOKS_DIR/config.json"
echo "• Screenshots: $CLAUDE_DIR/screenshots"
echo "• MCP Updates: $PROJECT_ROOT/data/mcp-component-updates.jsonl"
echo "• Development Server: http://localhost:3000"
echo ""
echo "🔗 Hook Integration Features:"
echo "• Pre-tool-use: Knowledge base queries, component duplication checks, testing prep"
echo "• Post-tool-use: Auto documentation, component testing, visual regression"
echo "• User-prompt-submit: Context injection based on query analysis"
echo ""
echo "📖 Next Steps:"
echo "1. Ensure Claude Code is configured to use this .claude directory"
echo "2. Verify MCP servers are running (Components-MCP and Chrome-MCP)"
echo "3. Test the integration by creating or modifying a component"
echo ""
echo "⚡ To test the system, try:"
echo "  claude 'create a simple test component'"
echo "  (This should trigger all hooks automatically)"
echo ""