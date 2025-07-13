# Update Link Todos Command

Convert broken link findings into actionable TodoWrite tasks and maintain link integrity todo list.

## Context Loading
This command requires understanding of current project status and link issues:

- Load current todo list to identify existing link-related tasks
- Review recent dead link detection results
- Understand project priorities and development phases

## Command Usage

`/update-link-todos [--clear-completed] [--priority-only]`

## Command Implementation

1. **Run dead link detection** (if not recently run):
   ```bash
   python3 check-links.py --html-root html --format json --broken-only
   ```

2. **Parse broken link results** and categorize by priority:
   - **High Priority**: Navigation links, index files, main menu items
   - **Medium Priority**: Content links within units, resource references
   - **Low Priority**: Supplementary resources, external references

3. **Generate TodoWrite tasks** for each broken link category:
   - Group similar missing files (e.g., all unit index files)
   - Create specific, actionable task descriptions
   - Set appropriate priority levels
   - Include source file references for context

4. **Clean up existing link todos**:
   - Mark completed any todos for links that are now working
   - Remove duplicate or outdated link-related tasks
   - Update task priorities based on current findings

## Example TodoWrite Generation

```javascript
// High priority navigation links
{
  "content": "Create Unit 2 index file (referenced by teacher dashboard)",
  "status": "pending", 
  "priority": "high",
  "id": "link-unit02-index"
}

// Medium priority content links  
{
  "content": "Create exercises.html for Unit 1 (referenced by intro.html:67)",
  "status": "pending",
  "priority": "medium", 
  "id": "link-unit01-exercises"
}

// Grouped similar tasks
{
  "content": "Create missing unit index files for Units 2-8",
  "status": "pending",
  "priority": "high",
  "id": "link-all-unit-indexes"
}
```

## Task Grouping Strategy

**Navigation Infrastructure (High Priority)**:
- Unit index files (units/unit##-name/index.html)
- Main navigation targets (frontmatter/, backmatter/, capstone/)
- Teacher dashboard links

**Content Resources (Medium Priority)**:
- Unit section files (concepts.html, exercises.html, summary.html)
- Assessment rubrics and templates
- Excel instruction materials

**Supporting Materials (Low Priority)**:
- PDF resources and templates
- External links and references
- Optional enhancement content

## Command Options

- `--clear-completed`: Remove todo items for links that are now working
- `--priority-only`: Only create todos for high-priority broken links

## Integration with Workflow

1. **After content creation**: Run to update todos for newly working links
2. **Before sprint planning**: Generate current link todo list
3. **During development**: Track progress on link integrity
4. **Quality assurance**: Ensure systematic approach to fixing broken links

## Output Format

```
Updated Link Todos:
✅ Marked 3 completed link todos as resolved
➕ Added 5 new high-priority link todos  
➕ Added 12 new medium-priority link todos
🔄 Updated 2 existing todos with current status

Current Link Todo Summary:
- High priority: 8 todos (navigation critical)
- Medium priority: 15 todos (content completion)
- Low priority: 4 todos (supplementary resources)

Next recommended actions:
1. Focus on high-priority navigation links first
2. Create unit infrastructure files (index.html templates)
3. Build content files based on backward design plans
```

## Error Handling

If link detection fails:
- Gracefully handle missing Python dependencies
- Provide fallback options for manual todo creation
- Suggest running `/check-links` first to diagnose issues

If TodoWrite integration fails:
- Display broken link summary for manual todo creation
- Provide structured list format for easy copy/paste
- Include priority indicators and source file references

## Notes for Claude

- Use this command after major content creation or restructuring
- Prioritize navigation links over content links for user experience
- Group similar tasks to avoid todo list bloat
- Always verify todo descriptions are specific and actionable
- Cross-reference with development priorities from backward design plans
- Consider dependencies between missing files when setting priorities