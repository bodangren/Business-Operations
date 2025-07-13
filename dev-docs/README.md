# Development Documentation
**Math for Business Operations: Developer Resources and Guides**

This directory contains all development documentation, templates, and guides for maintaining and extending the interactive textbook platform.

## File Organization

### Core Development Guides
- **TESTING-DEBUGGING-GUIDE.md** - Comprehensive testing strategy and debugging tools
- **SECURITY-PATCHES.md** - Critical security fixes and safe coding practices

### Command and Template Files
- **COMMAND-PROCESSOR-EXAMPLE.md** - Example of command processing patterns
- **SLASH-COMMANDS.md** - Documentation for slash command system
- **UNIT-DEVELOPMENT-COMMANDS.md** - Specific commands for unit creation
- **INTRO-COMMAND-TEMPLATE.html** - Template for introduction sections

## Related Files in Root Directory

### Framework Documentation
- **CLAUDE.md** - Main project overview and development guidelines
- **UNIT-DEVELOPMENT-FRAMEWORK.md** - Complete development standards
- **UNIT-DEVELOPMENT-CHECKLIST.md** - Quality assurance checklist
- **INTERACTIVE-COMPONENTS.md** - Component specifications and usage

### Content Creation Guides  
- **CONTENT-GENERATION-GUIDE.md** - Writing standards and engagement techniques
- **SARAH-NARRATIVE-CONTEXT.md** - Character and storyline continuity guide
- **UNIT-VALIDATION-CHECKLIST.md** - Quality assurance and bug prevention

## Developer Workflow

### New Unit Development
1. Read all framework documentation in root directory
2. Use appropriate slash commands from `.claude/commands/` directory
3. Follow validation checklist for quality assurance
4. Apply security best practices from SECURITY-PATCHES.md

### Maintenance and Updates
1. Reference TESTING-DEBUGGING-GUIDE.md for quality assurance
2. Follow security guidelines for any code changes
3. Update documentation as needed
4. Test all interactive components thoroughly

## Quick Reference

### Essential Reading Order for New Developers
1. CLAUDE.md (project overview)
2. UNIT-DEVELOPMENT-FRAMEWORK.md (development standards)
3. CONTENT-GENERATION-GUIDE.md (writing guidelines)
4. INTERACTIVE-COMPONENTS.md (technical implementation)
5. TESTING-DEBUGGING-GUIDE.md (quality assurance)

### Command Reference
- Use `/intro unit[XX]` for introduction sections
- Use `/concepts unit[XX]` for theory sections  
- Use `/excel-model unit[XX]` for spreadsheet sections
- Use `/examples unit[XX]` for demonstration sections
- Use `/exercises unit[XX]` for practice sections
- Use `/summary unit[XX]` for conclusion sections
- Use `/unit-complete unit[XX]` for full unit generation

### Security Requirements
- All formula evaluation must use SafeFormulaEvaluator class
- No Function() constructor or eval() usage allowed
- Input validation required for all user inputs
- Regular security testing with malicious input scenarios

---

*This development documentation ensures consistent, high-quality, and secure development of educational content while maintaining the engaging Sarah narrative and interactive component functionality.*