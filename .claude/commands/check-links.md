# Check Links Command

Run dead link analysis across the entire website and generate actionable reports.

## Context Loading
This command requires understanding of the website structure and link integrity requirements:

- Load current project structure from CLAUDE.md
- Review any existing todo list for link-related tasks
- Understand the website navigation hierarchy

## Command Usage

`/check-links [--format summary|json|csv] [--broken-only]`

## Command Implementation

1. **Run the dead link detection script**:
   ```bash
   cd /home/daniel-bo/Desktop/Business-Operations
   python3 check-links.py --html-root html --format summary
   ```

2. **Parse and present results**:
   - Show summary statistics (total links, broken count, success rate)
   - Display broken links by priority (navigation vs content)
   - Provide file paths and line numbers for easy fixing

3. **Optional variations**:
   - `--format json`: Get structured data for further processing
   - `--format csv`: Get spreadsheet-friendly broken link list
   - `--broken-only`: Focus only on issues that need fixing

## Expected Output Format

```
===========================================================
DEAD LINK DETECTION REPORT
===========================================================

SUMMARY STATISTICS:
  Total links found: 156
  Broken internal links: 23
  External links: 12
  Fragment links: 8
  Success rate: 85.2%

HIGH PRIORITY - Navigation Links:
  ❌ html/teacher/index.html:45
     Link: ../semester1/unit02-month-end-wizard/
     Text: Unit 2 Overview
     Missing: /home/daniel-bo/Desktop/Business-Operations/html/semester1/unit02-month-end-wizard/index.html

MEDIUM PRIORITY - Content Links:
  ❌ html/units/unit01-smart-ledger/intro.html:67
     Link: exercises.html
     Text: Practice Exercises
     Missing: /home/daniel-bo/Desktop/Business-Operations/html/units/unit01-smart-ledger/exercises.html
```

## Follow-up Actions

After running this command, you should:

1. **Use `/update-link-todos`** to convert findings into actionable tasks
2. **Prioritize navigation links** for immediate creation
3. **Review patterns** in broken links to identify systematic issues
4. **Run periodically** during development to maintain link integrity

## Integration with Development Workflow

- Run before major commits to catch new broken links
- Run after creating new content to verify link targets exist
- Use as part of quality assurance process
- Integrate findings into project planning and todo management

## Technical Requirements

- Python 3.6+ with BeautifulSoup4 installed
- Access to html/ directory for scanning
- Ability to resolve relative file paths

## Error Handling

If the script fails:
- Check Python dependencies: `pip install beautifulsoup4`
- Verify html/ directory exists and is accessible
- Check file permissions for reading HTML files
- Review any malformed HTML that might break parsing

## Notes for Claude

- This command provides factual data about link status
- Use results to inform development priorities
- Consider broken link patterns when suggesting content creation order
- Always run with summary format first for quick overview
- Use JSON format when you need to process results programmatically