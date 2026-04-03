# Export Schema: Local Study and Tracking

## Purpose
This document defines the stable export/import contract for the static study system.

It is the source of truth for:
- `summary.csv`
- `session.json`
- restore/import behavior
- future teacher-analysis skill ingestion

Implementation must follow this file instead of inventing a new format during development.

## Design Goals
- Static-site compatible
- Human-downloadable
- Easy to import into an LMS or spreadsheet workflow
- Rich enough for LLM-assisted analysis later
- Backward-compatible through explicit schema versioning

## Export Bundle

Each export operation produces at minimum:
- `summary.csv`
- `session.json`

Recommended filename pattern:
- `mbo-study-summary-YYYYMMDD-HHMMSS.csv`
- `mbo-study-session-YYYYMMDD-HHMMSS.json`

Timestamp should use local time in the file name and ISO 8601 UTC inside the file payload.

## Versioning

### Schema Version
- `schema_name`: `mbo-study-export`
- `schema_version`: `1.0.0`

### Compatibility Rules
- Minor additions may append new optional JSON fields without breaking older imports.
- Removing or renaming required fields requires a new major version.
- Import logic must reject unknown major versions cleanly and explain why.
- Import logic must ignore unknown optional fields from the same major version.

## `session.json`

`session.json` is the canonical export. `summary.csv` is derived from it.

### Top-Level Shape

```json
{
  "schema_name": "mbo-study-export",
  "schema_version": "1.0.0",
  "exported_at": "2026-04-03T08:00:00.000Z",
  "app": {
    "product": "Math for Business Operations",
    "app_version": "0.1.0",
    "static_build_id": "optional-build-id"
  },
  "student": {},
  "preferences": {},
  "content_scope": {},
  "study_state": {},
  "sessions": [],
  "reflections": [],
  "restore_payload": {}
}
```

## Field Definitions

### `student`

Student metadata is optional at capture time but stable in shape.

```json
{
  "student_id": "optional-local-id",
  "student_name": "optional",
  "class_name": "optional",
  "teacher_name": "optional",
  "school_year": "optional"
}
```

Rules:
- `student_name` is optional because some students may export anonymously.
- If blank in the app UI, export empty string or omit the field consistently.
- Do not require a backend-generated ID.

### `preferences`

```json
{
  "glossary_prompt_field": "term_en",
  "glossary_answer_field": "def_en",
  "study_language_mode": "en_to_en",
  "font_size": "medium",
  "high_contrast": false
}
```

Allowed values:
- `glossary_prompt_field`: `term_en` | `term_zh` | `def_en` | `def_zh`
- `glossary_answer_field`: `term_en` | `term_zh` | `def_en` | `def_zh`
- `study_language_mode`: free string derived from selected prompt/answer pair

### `content_scope`

Identifies what curriculum areas the export covers.

```json
{
  "units_seen": ["unit03", "unit04"],
  "lessons_seen": ["unit03-lesson05", "unit04-lesson02"],
  "topics_seen": ["cash-flow", "forecasting", "glossary-review"],
  "terms_seen": ["contribution-margin", "book-value"]
}
```

Rules:
- These are deduplicated summary arrays.
- Use glossary slugs for `terms_seen`.

### `study_state`

This is the analysis-facing snapshot of current mastery and review status.

```json
{
  "mastery_by_term": [],
  "due_review_snapshot": [],
  "aggregate_stats": {}
}
```

#### `mastery_by_term[]`

One record per glossary term included in the student’s local state.

```json
{
  "term_slug": "book-value",
  "units": ["unit08"],
  "times_seen": 6,
  "times_correct": 4,
  "times_incorrect": 2,
  "last_result": "correct",
  "mastery_score": 0.67,
  "proficiency_band": "developing",
  "last_reviewed_at": "2026-04-03T07:10:00.000Z"
}
```

Allowed values:
- `last_result`: `correct` | `incorrect` | `skipped`
- `proficiency_band`: `new` | `developing` | `proficient` | `strong`

#### `due_review_snapshot[]`

One record per term currently due or scheduled.

```json
{
  "term_slug": "book-value",
  "scheduled_for": "2026-04-04T07:00:00.000Z",
  "is_due": false,
  "scheduler": {
    "engine": "fsrs",
    "engine_version": "optional-library-version",
    "state": {
      "stability": 3.2,
      "difficulty": 5.1,
      "elapsed_days": 1,
      "scheduled_days": 3,
      "reps": 4,
      "lapses": 1
    }
  }
}
```

Rules:
- If FSRS is not used, `engine` may be `simple_srs`.
- `state` may vary slightly by scheduler, but must remain a plain JSON object.
- This snapshot is analysis-facing and restore-facing.

#### `aggregate_stats`

```json
{
  "total_terms_tracked": 84,
  "total_due_now": 12,
  "total_sessions": 19,
  "total_questions_answered": 214,
  "overall_accuracy": 0.78,
  "total_study_seconds": 5420
}
```

## `sessions[]`

Each session record represents one completed activity run.

```json
{
  "session_id": "uuid-or-local-unique-id",
  "started_at": "2026-04-03T07:00:00.000Z",
  "ended_at": "2026-04-03T07:07:30.000Z",
  "duration_seconds": 450,
  "activity": {
    "activity_id": "vocab-flashcards",
    "activity_type": "flashcards",
    "mode": "solo",
    "route": "/practice/vocabulary/flashcards",
    "title": "Vocabulary Flashcards"
  },
  "curriculum": {
    "unit_id": "unit08",
    "lesson_id": "unit08-lesson03",
    "topic_tags": ["depreciation", "fixed-assets"],
    "term_slugs": ["book-value", "accumulated-depreciation"]
  },
  "results": {
    "items_seen": 12,
    "items_answered": 12,
    "items_correct": 9,
    "items_incorrect": 3,
    "accuracy": 0.75,
    "retry_count": 2,
    "score": 75,
    "mastery_delta": 0.12
  },
  "responses": [],
  "notes": {
    "self_rating": "hard",
    "student_note": "optional"
  }
}
```

Allowed values:
- `activity_type`: `flashcards` | `matching` | `sorting` | `speed-round` | `mcq` | `cloze` | `review`
- `mode`: `solo` | `pass-and-play` | `team-single-device`
- `self_rating`: `easy` | `okay` | `hard`

### `responses[]`

Item-level response detail for analysis and restore.

```json
{
  "item_id": "book-value::term_en->def_en",
  "item_type": "glossary-card",
  "term_slug": "book-value",
  "prompt_field": "term_en",
  "answer_field": "def_en",
  "prompt_value": "Book value",
  "expected_answer": "The remaining recorded value of an asset after accumulated depreciation is subtracted from cost.",
  "student_answer": "optional-free-text-or-selected-value",
  "is_correct": true,
  "attempt_number": 1,
  "response_time_ms": 4200,
  "review_outcome": "good"
}
```

Allowed values:
- `item_type`: `glossary-card` | `mcq` | `match-pair` | `sort-token` | `cloze`
- `review_outcome`: `again` | `hard` | `good` | `easy` | `correct` | `incorrect`

Rules:
- `prompt_value` and `expected_answer` are exported for analysis clarity even though they may duplicate glossary data.
- `student_answer` may be omitted for tap-based flashcard grading if no free-text answer exists.

## `reflections[]`

Optional structured reflections captured from study or lesson-end reflection flows.

```json
{
  "reflection_id": "uuid-or-local-unique-id",
  "created_at": "2026-04-03T07:09:00.000Z",
  "unit_id": "unit08",
  "lesson_id": "unit08-lesson03",
  "source": "practice-hub",
  "prompt": "Which term or idea still feels confusing?",
  "response": "I still mix up accumulated depreciation and book value."
}
```

## `restore_payload`

This object exists so import can rebuild local state without trusting every analysis-facing field.

```json
{
  "preferences": {},
  "mastery_by_term": [],
  "due_review_snapshot": [],
  "session_ids_included": ["session-1", "session-2"]
}
```

Rules:
- Import must restore from `restore_payload`, not from derived CSV values.
- The app may choose not to restore reflections if the product later treats them as submission-only artifacts, but the default should be to restore them.

## `summary.csv`

`summary.csv` is one row per session, not one row per item.

### Required Columns
- `schema_version`
- `exported_at`
- `student_name`
- `class_name`
- `session_id`
- `activity_type`
- `mode`
- `unit_id`
- `lesson_id`
- `topic_tags`
- `term_count`
- `items_seen`
- `items_answered`
- `items_correct`
- `items_incorrect`
- `accuracy`
- `retry_count`
- `score`
- `duration_seconds`
- `started_at`
- `ended_at`
- `prompt_field`
- `answer_field`
- `self_rating`

### Optional Columns
- `teacher_name`
- `school_year`
- `student_note`
- `mastery_delta`
- `due_count_at_export`

### CSV Rules
- `topic_tags` should be pipe-delimited, for example `depreciation|fixed-assets`
- timestamps stay ISO 8601
- numbers should export as raw numeric values, not percent strings

## Import/Restore Rules

### Accepted File
- The app must accept `session.json` for restore.
- `summary.csv` is analysis-only and must not be used as a restore source.

### Import Behavior
- Validate `schema_name` and `schema_version`
- Reject unsupported major versions
- Merge or replace local data based on the final wireframed UX choice
- Deduplicate sessions by `session_id`
- Deduplicate mastery records by `term_slug`
- Preserve the most recently updated scheduler snapshot per term

### Corruption Handling
- If the file is unreadable JSON, show a clear error and do not mutate local state.
- If required fields are missing, reject the import and list the missing fields.

## Analysis-Skill Guidance

The future teacher-analysis skill should assume:
- JSON is canonical
- CSV is a quick spreadsheet/LMS artifact
- item-level response analysis comes from `sessions[].responses[]`
- mastery trends come from `study_state.mastery_by_term[]`
- spaced-review prioritization comes from `study_state.due_review_snapshot[]`
- misconceptions may be inferred by joining incorrect responses to `term_slug`, `unit_id`, and `topic_tags`

## Implementation Notes for Junior Developers
- Define TypeScript types directly from this document before building export code.
- Keep all exporter code in one module.
- Generate `summary.csv` from `session.json` data, not through a separate divergent code path.
- Write round-trip tests:
  - local state -> `session.json`
  - `session.json` -> restored local state
  - `session.json` -> `summary.csv`
