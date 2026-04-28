# Implementation Plan: Resolve Orphan "finance" TopicTag

## Phase 1: Investigate and Decide Approach
- [x] Task 1.1: Locate all references to "finance" TopicTag in the codebase
- [x] Task 1.2: Review glossary data to see if there are existing finance-related terms that could be tagged
- [x] Task 1.3: Decide whether to add glossary entries or remove the test mock tag (decision: remove "finance" from TopicTag and update test)

## Phase 2: Implement the Solution
- [x] Task 2.1: Implement the chosen approach (remove "finance" from TopicTag and update test)
- [x] Task 2.2: Update any other references to "finance" TopicTag if needed

## Phase 3: Verify
- [x] Task 3.1: Run the full test suite to ensure all tests pass
- [x] Task 3.2: Verify TypeScript compilation succeeds
- [x] Task 3.3: Verify the glossary filter dropdown behaves correctly
