# Specification: Resolve Orphan "finance" TopicTag

## Overview
The "finance" TopicTag appears in the test mock in `export-builders.test.ts:276` but has no corresponding production glossary entries. This causes the "Finance" filter option to appear in the glossary dropdown with zero results, which is confusing for users.

## Functional Requirements
- Either:
  1. Add production glossary entries with the "finance" TopicTag, OR
  2. Remove the "finance" TopicTag from the test mock and any other references

## Non-Functional Requirements
- All tests must pass after the change
- No user-facing regressions in the glossary filter
- TypeScript compilation must succeed without errors

## Acceptance Criteria
- The glossary filter dropdown only shows TopicTags that have at least one corresponding glossary entry
- All existing test suites pass
- No TypeScript errors

## Out of Scope
- Adding new glossary terms beyond what's necessary to resolve the orphan tag (if option 1 is chosen)
- Modifying other TopicTags or glossary functionality
