# Test Component Command

Automates comprehensive component testing before lesson creation to prevent component amnesia.

## Purpose
Enforces the component-first development workflow by requiring debug testing before any lesson content creation.

## Syntax
```
/test-component [component-type] [configuration]
```

## Parameters
- `component-type`: One of `spreadsheet`, `calculator`, `visualization`, `dragdrop`, `simulation`, `gamification`, `all`
- `configuration`: Optional specific preset or configuration to test

## Examples
```bash
/test-component spreadsheet ledger
/test-component calculator npv
/test-component dragdrop account-categorization
/test-component simulation lemonade-stand
/test-component all
```

## Behavior

### Single Component Testing
1. **Opens appropriate debug test page** (`html/debug/[component-type]-test.html`)
2. **Runs automated test suite** for specified component
3. **Generates test report** with pass/fail status and performance metrics
4. **Validates gamification integration** for the component
5. **Creates component integration documentation** template

### All Components Testing
1. **Runs comprehensive test suite** across all 6 component types
2. **Generates master test report** with overall system health
3. **Identifies any breaking changes** or regressions
4. **Validates cross-component compatibility**
5. **Creates system readiness report** for lesson development

## Output Format
```markdown
# Component Test Report
**Date**: [Current date and time]
**Component**: [Component type and configuration]
**Test Suite**: [Version and coverage]

## Test Results
✅ **Functionality Tests**: 23/23 passed
✅ **Gamification Integration**: All point awards and achievements working
✅ **Performance Tests**: Load time 1.2s (target: <3s)
✅ **Cross-Browser Tests**: Chrome, Firefox, Safari, Edge all passing
✅ **Mobile Compatibility**: Touch interactions working
✅ **Accessibility**: Screen reader and keyboard navigation functional

## Component Status
**READY FOR LESSON INTEGRATION** ✅

## Integration Plan Template
Use this component for activities requiring: [Auto-generated based on component type]
- Learning Objective: [Template]
- Point Structure: [Recommended points based on gamification strategy]  
- Achievement Opportunities: [Available achievements]
- Performance Expectations: [Load time, accuracy, etc.]

## Next Steps
1. Document specific lesson usage in COMPONENT-INTEGRATION-WORKFLOW.md
2. Create activity with validated component configuration
3. Run /validate-activity before student deployment
```

## Integration with Development Workflow

### Pre-Lesson Creation Gate
This command must be run and pass before creating any lesson content that uses interactive components. The workflow enforces:

1. **Component Verification**: Ensures component works correctly
2. **Performance Validation**: Confirms speed and responsiveness standards  
3. **Integration Planning**: Templates for proper component usage
4. **Quality Documentation**: Creates audit trail for component readiness

### Continuous Integration
- Automatically runs when components are modified
- Integrates with version control hooks
- Provides regression testing for existing lessons
- Maintains component health dashboard

## Error Handling
- **Component Not Found**: Provides guidance on available components
- **Test Failures**: Detailed error reporting and troubleshooting steps
- **Performance Issues**: Optimization recommendations
- **Integration Problems**: Gamification troubleshooting guide

## Related Commands
- `/integrate-gamification` - Adds gamification to validated components
- `/validate-activity` - Validates complete lesson activities
- `/update-link-todos` - Manages broken link fixes
- `/check-links` - Validates internal navigation