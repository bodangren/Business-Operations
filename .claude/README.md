# Claude Code Hooks Integration

This directory contains a comprehensive hooks system that integrates Claude Code with Components-MCP and Chrome-MCP servers, transforming Claude Code into a project-aware development partner with intelligent testing capabilities.

## Overview

The hooks system provides:

- **Knowledge Base Integration**: Query Components-MCP instead of searching the filesystem
- **Duplicate Detection**: Prevent creating components that already exist
- **Automatic Documentation**: Components are documented in the knowledge base immediately after creation
- **Intelligent Testing**: Chrome-MCP automatically tests components in the browser
- **Visual Regression**: Screenshots capture design changes for comparison
- **Context Injection**: Relevant project information is provided based on user queries

## Directory Structure

```
.claude/
├── hooks/
│   ├── config.json                          # Hook configuration
│   ├── pre-tool-use/                        # Hooks that run before Claude tools
│   │   ├── knowledge-base-query.sh          # Redirect searches to MCP
│   │   ├── component-check.sh               # Check for duplicate components
│   │   └── testing-prep.sh                  # Prepare testing environment
│   ├── post-tool-use/                       # Hooks that run after Claude tools
│   │   ├── auto-document.sh                 # Document components in MCP
│   │   ├── component-test.sh                # Run browser tests
│   │   └── visual-test.sh                   # Capture screenshots
│   └── user-prompt-submit/                  # Hooks that run on user input
│       └── context-inject.sh                # Inject relevant context
├── screenshots/                             # Visual regression screenshots
├── setup-hooks.sh                           # Setup script
└── README.md                                # This file
```

## Setup

1. **Run the setup script**:
   ```bash
   cd /path/to/Business-Operations/.claude
   ./setup-hooks.sh
   ```

2. **Ensure MCP servers are running**:
   - Components-MCP server for knowledge base
   - Chrome-MCP server for browser automation

3. **Configure Claude Code** to use this `.claude` directory

## Hook Types

### Pre-Tool-Use Hooks

**knowledge-base-query.sh**
- Intercepts `Read`, `Glob`, and `Grep` tools
- Suggests Components-MCP queries for component searches
- Provides knowledge base alternatives to filesystem searches

**component-check.sh**
- Intercepts component creation (`Write`, `MultiEdit`)
- Checks Components-MCP for existing similar components
- Warns about potential duplicates before creation

**testing-prep.sh**
- Prepares Chrome-MCP testing environment
- Starts development server if needed
- Determines appropriate test routes for components

### Post-Tool-Use Hooks

**auto-document.sh**
- Documents new/modified components automatically
- Extracts component metadata and descriptions
- Updates Components-MCP knowledge base
- Creates local backup in `data/mcp-component-updates.jsonl`

**component-test.sh**
- Runs automated browser tests via Chrome-MCP
- Tests navigation, interactive elements, console errors
- Performs basic accessibility checks
- Generates test reports

**visual-test.sh**
- Captures component screenshots (desktop and mobile)
- Compares with baseline images for regression detection
- Validates style guide compliance
- Stores visual history for comparison

### User-Prompt-Submit Hooks

**context-inject.sh**
- Analyzes user queries for relevant topics
- Injects context about available components
- Provides testing capabilities information
- Shows design system and educational context

## Integration Features

### Components-MCP Integration

The hooks system integrates deeply with the Components-MCP server:

- **Query Components**: `mcp__components-mcp__get_components`
- **Create Components**: `mcp__components-mcp__create_component`
- **Style Guide**: `mcp__components-mcp__get_style_guide`
- **APIs**: `mcp__components-mcp__get_apis`

### Chrome-MCP Integration

Browser testing and validation through Chrome-MCP:

- **Navigation**: `mcp__chrome-mcp-stdio__chrome_navigate`
- **Screenshots**: `mcp__chrome-mcp-stdio__chrome_screenshot`
- **Content Analysis**: `mcp__chrome-mcp-stdio__chrome_get_web_content`
- **Interactive Testing**: `mcp__chrome-mcp-stdio__chrome_get_interactive_elements`
- **Console Monitoring**: `mcp__chrome-mcp-stdio__chrome_console`

## Educational Project Context

The hooks are specifically designed for this Grade 12 Business Operations educational project:

### Component Categories
- **accounting**: T-accounts, journal entries, trial balance
- **business-simulations**: Interactive business games
- **charts**: Data visualization with Recharts
- **drag-drop-exercises**: Educational matching activities
- **exercises**: Comprehension checks and practice
- **financial-reports**: Income statements, balance sheets
- **spreadsheet**: Excel-like functionality
- **teacher**: Lesson plans and curriculum
- **unit**: Project-based learning structure
- **ui**: shadcn/ui design system components

### Testing Routes
- `/debug/[category]`: Component testing pages
- `/units/[unit]/intro`: Unit-specific testing
- `http://localhost:3000`: Development server

### Design System
- **Framework**: Tailwind CSS v4 with shadcn/ui
- **Color Scheme**: Primary, secondary, muted, accent, destructive
- **Responsive**: Mobile-first with desktop breakpoints
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## Usage Examples

### Creating a New Component

When you create a component, the hooks automatically:

1. **Pre-creation**: Check for existing similar components
2. **Creation**: Allow component development
3. **Post-creation**: 
   - Document in Components-MCP
   - Test in browser
   - Capture screenshots
   - Generate reports

```typescript
// Example: Creating src/components/charts/NewChart.tsx
// Hooks will automatically:
// - Check for existing chart components
// - Document the new component
// - Test at /debug/charts
// - Capture desktop and mobile screenshots
```

### Querying Components

User queries are enhanced with context:

```
User: "Show me chart components" 
→ Context injection provides: Available chart components, testing routes, MCP queries
```

### Testing Integration

All testing happens automatically:

```
Component created → 
Testing prep → 
Browser navigation → 
Interactive element testing → 
Console error checking → 
Screenshot capture → 
Visual regression comparison → 
Report generation
```

## Configuration

The `config.json` file contains:

- **Hook Scripts**: Which scripts run for which tools
- **MCP Endpoints**: Components-MCP and Chrome-MCP tool mappings
- **Project Config**: Development server, component paths, test routes
- **Documentation Patterns**: Naming conventions and educational focus

## Troubleshooting

### Common Issues

1. **Hooks not executing**: Verify Claude Code is configured for this directory
2. **MCP servers not responding**: Check server status and restart if needed
3. **Development server not starting**: Verify Node.js/npm installation
4. **Screenshots failing**: Ensure Chrome-MCP extension is installed and server running
5. **Permission errors**: Run `chmod +x .claude/hooks/**/*.sh`

### Debug Information

- Hook execution logs appear in stderr
- Test reports saved to `/tmp/claude-*-report.txt`
- Screenshot history in `.claude/screenshots/`
- MCP updates logged to `data/mcp-component-updates.jsonl`

### Validation

Run the setup script to validate the entire system:

```bash
./.claude/setup-hooks.sh
```

This will check dependencies, test connectivity, and verify all hooks are properly configured.

## Benefits

With this hooks integration, Claude Code becomes:

- **Project-aware**: Understands existing components and architecture
- **Quality-focused**: Automatic testing and validation
- **Knowledge-driven**: Uses documented patterns instead of guessing
- **Visually-conscious**: Maintains design consistency through screenshots
- **Educationally-aligned**: Understands the Grade 12 curriculum context

The result is a more intelligent, reliable, and contextually-aware development experience that maintains high standards while reducing manual oversight.